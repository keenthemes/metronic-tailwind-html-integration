(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.stringCase = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var removeUndefined = core.utils.removeUndefined;
    function stringCase() {
        return {
            /**
             * Check if a string is a lower or upper case one
             */
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { case: 'lower' }, removeUndefined(input.options));
                var caseOpt = (opts.case || 'lower').toLowerCase();
                return {
                    message: opts.message ||
                        (input.l10n
                            ? 'upper' === caseOpt
                                ? input.l10n.stringCase.upper
                                : input.l10n.stringCase.default
                            : opts.message),
                    valid: 'upper' === caseOpt
                        ? input.value === input.value.toUpperCase()
                        : input.value === input.value.toLowerCase(),
                };
            },
        };
    }

    return stringCase;

}));
