(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.siret = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function siret() {
        return {
            /**
             * Check if a string is a siret number
             */
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var length = input.value.length;
                var sum = 0;
                var tmp;
                for (var i = 0; i < length; i++) {
                    tmp = parseInt(input.value.charAt(i), 10);
                    if (i % 2 === 0) {
                        tmp = tmp * 2;
                        if (tmp > 9) {
                            tmp -= 9;
                        }
                    }
                    sum += tmp;
                }
                return { valid: sum % 10 === 0 };
            },
        };
    }

    return siret;

}));
