/** @odoo-module **/

import { FullscreenPosButton } from "@fullscreen_button/static/src/js/pos/fullscreen_button";
import { patch } from "@web/core/utils/patch";
import { Navbar } from "@point_of_sale/app/navbar/navbar";

// Patch the Navbar component to add our fullscreen button
patch(Navbar.prototype, {
    setup() {
        super.setup();
    }
});

// Add the FullscreenPosButton to Navbar components
Navbar.components = {
    ...Navbar.components,
    FullscreenPosButton,
};

// Patch the Navbar template to add our fullscreen button
patch(Navbar, {
    template: 'fullscreen_button.PatchedNavbar',
}); 