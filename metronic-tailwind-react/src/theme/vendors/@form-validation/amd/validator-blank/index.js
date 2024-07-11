define(['exports'], (function (exports) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    /**
     * This validator always returns valid.
     * It can be used when we want to show the custom message returned from server
     */
    function blank() {
        return {
            validate: function (_input) {
                return { valid: true };
            },
        };
    }

    exports.blank = blank;

}));
