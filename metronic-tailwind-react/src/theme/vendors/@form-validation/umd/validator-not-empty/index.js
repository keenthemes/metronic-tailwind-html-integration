(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.notEmpty = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function notEmpty() {
        return {
            validate: function (input) {
                var trim = !!input.options && !!input.options.trim;
                var value = input.value;
                return {
                    valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
                };
            },
        };
    }

    return notEmpty;

}));
