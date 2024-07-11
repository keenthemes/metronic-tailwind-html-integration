define(['exports', '@form-validation/core'], (function (exports, core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var luhn = core.algorithms.luhn;
    function siren() {
        return {
            /**
             * Check if a string is a siren number
             */
            validate: function (input) {
                return {
                    valid: input.value === '' || (/^\d{9}$/.test(input.value) && luhn(input.value)),
                };
            },
        };
    }

    exports.siren = siren;

}));
