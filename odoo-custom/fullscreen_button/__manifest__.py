# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Fullscreen Button',
    'version': '1.0',
    'summary': 'Adds a fullscreen button to the Odoo interface',
    'description': """
        This module adds a fullscreen button to the Odoo interface.
        Click the button to toggle fullscreen mode.
        Compatible with MuK theme and standard Odoo interface.
        Also adds a fullscreen button to the Point of Sale interface.
    """,
    'category': 'Tools',
    'author': 'Custom Development',
    'website': '',
    'depends': ['web', 'point_of_sale'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'fullscreen_button/static/src/js/fullscreen_button.js',
            'fullscreen_button/static/src/xml/fullscreen_button.xml',
            'fullscreen_button/static/src/scss/fullscreen_button.scss',
        ],
        'point_of_sale.assets': [
            'fullscreen_button/static/src/js/pos/fullscreen_button.js',
            'fullscreen_button/static/src/js/pos/register_fullscreen_button.js',
            'fullscreen_button/static/src/xml/pos/fullscreen_button.xml',
            'fullscreen_button/static/src/xml/pos/patched_navbar.xml',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
} 