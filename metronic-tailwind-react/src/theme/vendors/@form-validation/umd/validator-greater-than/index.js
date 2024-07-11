(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.greaterThan = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    function greaterThan() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
                var minValue = parseFloat("".concat(opts.min).replace(',', '.'));
                return opts.inclusive
                    ? {
                        message: format(input.l10n ? opts.message || input.l10n.greaterThan.default : opts.message, "".concat(minValue)),
                        valid: parseFloat(input.value) >= minValue,
                    }
                    : {
                        message: format(input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "".concat(minValue)),
                        valid: parseFloat(input.value) > minValue,
                    };
            },
        };
    }

    return greaterThan;

}));
