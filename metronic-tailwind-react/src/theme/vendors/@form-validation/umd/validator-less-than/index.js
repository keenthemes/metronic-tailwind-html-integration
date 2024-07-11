(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.lessThan = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    function lessThan() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
                var maxValue = parseFloat("".concat(opts.max).replace(',', '.'));
                return opts.inclusive
                    ? {
                        message: format(input.l10n ? opts.message || input.l10n.lessThan.default : opts.message, "".concat(maxValue)),
                        valid: parseFloat(input.value) <= maxValue,
                    }
                    : {
                        message: format(input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "".concat(maxValue)),
                        valid: parseFloat(input.value) < maxValue,
                    };
            },
        };
    }

    return lessThan;

}));
