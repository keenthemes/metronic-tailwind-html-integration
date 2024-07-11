(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.ean = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function ean() {
        return {
            /**
             * Validate EAN (International Article Number)
             * @see http://en.wikipedia.org/wiki/European_Article_Number
             */
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input.value)) {
                    return { valid: false };
                }
                var length = input.value.length;
                var sum = 0;
                var weight = length === 8 ? [3, 1] : [1, 3];
                for (var i = 0; i < length - 1; i++) {
                    sum += parseInt(input.value.charAt(i), 10) * weight[i % 2];
                }
                sum = (10 - (sum % 10)) % 10;
                return { valid: "".concat(sum) === input.value.charAt(length - 1) };
            },
        };
    }

    return ean;

}));
