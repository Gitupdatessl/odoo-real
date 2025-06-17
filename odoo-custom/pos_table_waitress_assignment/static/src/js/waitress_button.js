/** @odoo-module */

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { Component } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";

export class WaitressButton extends Component {
    static template = "pos_table_waitress_assignment.WaitressButton";
    
    setup() {
        this.pos = usePos();
    }
    
    get currentOrder() {
        return this.pos.get_order();
    }
    
    get waiters() {
        return this.pos.getWaiters();
    }
    
    get currentWaitress() {
        const order = this.currentOrder;
        if (!order) return null;
        
        const waitressId = order.getAssignedWaitress();
        if (!waitressId) return null;
        
        return this.waiters.find(w => w.id === waitressId);
    }
    
    get buttonText() {
        const waitress = this.currentWaitress;
        return waitress ? waitress.name : 'Assign Waitress';
    }
    
    async selectWaitress() {
        const order = this.currentOrder;
        if (!order) return;
        
        const waiters = this.waiters.map(waiter => ({
            id: waiter.id,
            label: waiter.name,
            item: waiter,
        }));
        
        // Add option to remove assignment
        waiters.unshift({
            id: 0,
            label: 'None',
            item: null,
        });
        
        const { confirmed, payload: selectedWaiter } = await this.pos.popup.selection({
            title: 'Select Waitress/Waiter',
            list: waiters,
        });
        
        if (confirmed) {
            order.setAssignedWaitress(selectedWaiter ? selectedWaiter.id : false);
        }
    }
}

// Register the button in the product screen action buttons
ProductScreen.addControlButton({
    component: WaitressButton,
    condition: function() {
        return this.pos.config.module_pos_restaurant;
    },
}); 