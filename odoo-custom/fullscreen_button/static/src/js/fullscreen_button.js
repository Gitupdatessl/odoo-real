/** @odoo-module **/

import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";

/**
 * Fullscreen Button Component
 * 
 * Adds a fullscreen toggle button to the Odoo interface
 * Compatible with MuK theme and standard Odoo interface
 */
class FullscreenButton extends Component {
    static template = 'fullscreen_button.FullscreenButton';
    static props = {};

    setup() {
        this.isFullscreen = false;
    }

    /**
     * Toggle fullscreen mode
     */
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
            });
            this.isFullscreen = true;
            // Add fullscreen class to body to help with MuK theme compatibility
            document.body.classList.add('o_fullscreen');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.isFullscreen = false;
                // Remove fullscreen class from body
                document.body.classList.remove('o_fullscreen');
            }
        }
    }
}

export const systrayItem = {
    Component: FullscreenButton,
};

// Register the fullscreen button in the systray with a high sequence to ensure it appears at the end
registry.category("systray").add("fullscreen_button", systrayItem, { sequence: 90 }); 