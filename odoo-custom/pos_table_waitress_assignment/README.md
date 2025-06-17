# POS Table Waitress Assignment

This Odoo module enhances the Point of Sale Restaurant functionality by allowing you to assign waitresses/waiters to tables.

## Features

- Adds a "Assign Waitress" button to the POS order screen
- Displays the assigned waitress/waiter's name above the table in the floor plan
- Filters employees to show only those with job titles containing "waiter" or "waitress" (falls back to showing all employees if none match)
- Stores the assigned waitress/waiter in the POS order

## Usage

1. Install the module
2. Open the POS interface with restaurant floor plan enabled
3. Create a new order by selecting a table
4. Click the "Assign Waitress" button in the order screen
5. Select a waitress/waiter from the dropdown
6. The assigned waitress/waiter's name will appear above the table in the floor plan

## Technical Information

This module extends:
- `pos.order` model with a new field `assigned_waitress_id`
- POS interface with a new control button
- Table widget to display the assigned waitress/waiter's name

## Requirements

- Odoo 17.0
- Point of Sale (pos_restaurant) module
- HR module 