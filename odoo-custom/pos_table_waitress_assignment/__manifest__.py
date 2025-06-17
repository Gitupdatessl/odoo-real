# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'POS Table Waitress Assignment',
    'version': '1.0',
    'category': 'Point of Sale',
    'summary': 'Assign waitresses to tables in POS Restaurant',
    'description': """
POS Table Waitress Assignment
=============================
This module allows you to assign waitresses/waiters to tables in the POS Restaurant interface.
The assigned waitress/waiter's name will be displayed above or near the table icon.
    """,
    'depends': ['point_of_sale', 'pos_restaurant', 'hr'],
    'data': [],
    'assets': {
        'point_of_sale.assets': [
            'pos_table_waitress_assignment/static/src/js/models.js',
            'pos_table_waitress_assignment/static/src/js/waitress_button.js',
            'pos_table_waitress_assignment/static/src/js/table_extension.js',
            'pos_table_waitress_assignment/static/src/xml/waitress_button.xml',
            'pos_table_waitress_assignment/static/src/xml/table_extension.xml',
            'pos_table_waitress_assignment/static/src/scss/pos_table_waitress.scss',
        ],
    },
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
} 