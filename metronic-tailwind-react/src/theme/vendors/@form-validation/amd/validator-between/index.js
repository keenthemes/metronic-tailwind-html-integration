define(['exports', '@form-validation/core'], (function (exports, core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    function between() {
        var formatValue = function (value) {
            return parseFloat("".concat(value).replace(',', '.'));
        };
        return {
            validate: function (input) {
                var value = input.value;
                if (value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
                var minValue = formatValue(opts.min);
                var maxValue = formatValue(opts.max);
                return opts.inclusive
                    ? {
                        message: format(input.l10n ? opts.message || input.l10n.between.default : opts.message, [
                            "".concat(minValue),
                            "".concat(maxValue),
                        ]),
                        valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                    }
                    : {
                        message: format(input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, [
                            "".concat(minValue),
                            "".concat(maxValue),
                        ]),
                        valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
                    };
            },
        };
    }

    exports.between = between;

}));
