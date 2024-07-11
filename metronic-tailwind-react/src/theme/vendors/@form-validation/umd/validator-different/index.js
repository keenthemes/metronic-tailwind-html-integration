(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.different = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function different() {
        return {
            validate: function (input) {
                var compareWith = 'function' === typeof input.options.compare
                    ? input.options.compare.call(this)
                    : input.options.compare;
                return {
                    valid: compareWith === '' || input.value !== compareWith,
                };
            },
        };
    }

    return different;

}));
