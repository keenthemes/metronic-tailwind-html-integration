(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.hex = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function hex() {
        return {
            /**
             * Return true if and only if the input value is a valid hexadecimal number
             */
            validate: function (input) {
                return {
                    valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value),
                };
            },
        };
    }

    return hex;

}));
