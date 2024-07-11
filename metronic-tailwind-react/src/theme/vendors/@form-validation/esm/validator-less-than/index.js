import { utils } from '../core/index.js';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var format = utils.format, removeUndefined = utils.removeUndefined;
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

export { lessThan };
