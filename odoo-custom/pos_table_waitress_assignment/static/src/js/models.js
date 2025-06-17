/** @odoo-module */

import { PosGlobalState } from "@point_of_sale/app/store/pos_store";
import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

patch(PosGlobalState.prototype, {
    async _processData(loadedData) {
        await super._processData(...arguments);
        
        // Load waiters/waitresses (employees with job title containing 'waiter' or 'waitress')
        this.waiters = [];
        const employees = loadedData['hr.employee'];
        
        if (employees) {
            this.waiters = employees.filter(emp => {
                const jobTitle = (emp.job_title || '').toLowerCase();
                return jobTitle.includes('waiter') || jobTitle.includes('waitress');
            });
            
            // If no employees with waiter/waitress in title, include all employees
            if (this.waiters.length === 0) {
                this.waiters = employees;
            }
        }
    },
    
    // Method to get waiters/waitresses
    getWaiters() {
        return this.waiters || [];
    }
});

patch(Order.prototype, {
    init(obj, options) {
        super.init(...arguments);
        this.assigned_waitress_id = this.assigned_waitress_id || false;
    },
    
    export_as_JSON() {
        const json = super.export_as_JSON(...arguments);
        json.assigned_waitress_id = this.assigned_waitress_id;
        return json;
    },
    
    init_from_JSON(json) {
        super.init_from_JSON(...arguments);
        this.assigned_waitress_id = json.assigned_waitress_id;
    },
    
    setAssignedWaitress(waitressId) {
        this.assigned_waitress_id = waitressId;
        this.trigger('change');
    },
    
    getAssignedWaitress() {
        return this.assigned_waitress_id;
    },
    
    getAssignedWaitressName() {
        if (!this.assigned_waitress_id) {
            return '';
        }
        
        const waitress = this.pos.waiters.find(w => w.id === this.assigned_waitress_id);
        return waitress ? waitress.name : '';
    }
}); 