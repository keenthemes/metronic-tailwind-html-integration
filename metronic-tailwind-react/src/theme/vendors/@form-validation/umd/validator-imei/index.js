(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.imei = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var luhn = core.algorithms.luhn;
    function imei() {
        return {
            /**
             * Validate IMEI (International Mobile Station Equipment Identity)
             * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
             */
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                switch (true) {
                    case /^\d{15}$/.test(input.value):
                    case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input.value):
                    case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input.value):
                        return { valid: luhn(input.value.replace(/[^0-9]/g, '')) };
                    case /^\d{14}$/.test(input.value):
                    case /^\d{16}$/.test(input.value):
                    case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input.value):
                    case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input.value):
                        return { valid: true };
                    default:
                        return { valid: false };
                }
            },
        };
    }

    return imei;

}));
