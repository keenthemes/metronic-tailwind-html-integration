(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.mac = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function mac() {
        return {
            /**
             * Return true if the input value is a MAC address.
             */
            validate: function (input) {
                return {
                    valid: input.value === '' ||
                        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(input.value) ||
                        /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(input.value),
                };
            },
        };
    }

    return mac;

}));
