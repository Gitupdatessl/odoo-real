/** @odoo-module **/

import { Component } from "@odoo/owl";

/**
 * Fullscreen Button Component for POS
 * 
 * Adds a fullscreen toggle button to the POS interface
 */
export class FullscreenPosButton extends Component {
    static template = 'fullscreen_button.FullscreenPosButton';
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
            // Add fullscreen class to body to help with theme compatibility
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