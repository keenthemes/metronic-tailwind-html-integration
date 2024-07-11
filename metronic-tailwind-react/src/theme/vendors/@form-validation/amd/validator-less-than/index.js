define(['exports', '@form-validation/core'], (function (exports, core) { 'use strict';

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

    exports.lessThan = lessThan;

}));
