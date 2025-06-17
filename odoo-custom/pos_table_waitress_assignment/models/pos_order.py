# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _


class PosOrder(models.Model):
    _inherit = 'pos.order'

    assigned_waitress_id = fields.Many2one(
        'hr.employee',
        string='Assigned Waitress/Waiter',
        help='Waitress or waiter assigned to this order'
    )
    
    @api.model
    def _order_fields(self, ui_order):
        """
        Extend the _order_fields method to include the assigned_waitress_id field
        when creating an order from the UI
        """
        order_fields = super(PosOrder, self)._order_fields(ui_order)
        if 'assigned_waitress_id' in ui_order:
            order_fields['assigned_waitress_id'] = ui_order['assigned_waitress_id']
        return order_fields 