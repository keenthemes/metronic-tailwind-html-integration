(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.ismn = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function ismn() {
        return {
            /**
             * Validate ISMN (International Standard Music Number)
             * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
             */
            validate: function (input) {
                if (input.value === '') {
                    return {
                        meta: null,
                        valid: true,
                    };
                }
                // Groups are separated by a hyphen or a space
                var tpe;
                switch (true) {
                    case /^M\d{9}$/.test(input.value):
                    case /^M-\d{4}-\d{4}-\d{1}$/.test(input.value):
                    case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
                        tpe = 'ISMN10';
                        break;
                    case /^9790\d{9}$/.test(input.value):
                    case /^979-0-\d{4}-\d{4}-\d{1}$/.test(input.value):
                    case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
                        tpe = 'ISMN13';
                        break;
                    default:
                        return {
                            meta: null,
                            valid: false,
                        };
                }
                var v = input.value;
                if ('ISMN10' === tpe) {
                    v = "9790".concat(v.substr(1));
                }
                // Replace all special characters except digits
                v = v.replace(/[^0-9]/gi, '');
                var sum = 0;
                var length = v.length;
                var weight = [1, 3];
                for (var i = 0; i < length - 1; i++) {
                    sum += parseInt(v.charAt(i), 10) * weight[i % 2];
                }
                sum = (10 - (sum % 10)) % 10;
                return {
                    meta: {
                        type: tpe,
                    },
                    valid: "".concat(sum) === v.charAt(length - 1),
                };
            },
        };
    }

    return ismn;

}));
