/** @odoo-module */

import { FloorScreen } from "@pos_restaurant/app/floor_screen/floor_screen";
import { TableWidget } from "@pos_restaurant/app/floor_screen/table_widget";
import { patch } from "@web/core/utils/patch";

patch(TableWidget.prototype, {
    /**
     * Get the waitress assigned to the current table
     */
    getAssignedWaitress() {
        const pos = this.env.pos;
        const table = this.props.table;
        
        // Find an active order for this table
        const order = pos.orders.find(o => 
            o.tableId === table.id && 
            o.getAssignedWaitress()
        );
        
        if (!order) return null;
        
        const waitressId = order.getAssignedWaitress();
        if (!waitressId) return null;
        
        return pos.waiters.find(w => w.id === waitressId);
    },
    
    /**
     * Get the waitress name for display
     */
    getWaitressName() {
        const waitress = this.getAssignedWaitress();
        return waitress ? waitress.name : '';
    },
    
    /**
     * Check if the table has an assigned waitress
     */
    hasAssignedWaitress() {
        return !!this.getAssignedWaitress();
    }
}); 