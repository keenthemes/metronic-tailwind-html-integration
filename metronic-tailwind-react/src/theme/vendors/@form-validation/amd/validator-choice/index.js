define(['exports', '@form-validation/core'], (function (exports, core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format;
    function choice() {
        return {
            validate: function (input) {
                var numChoices = 'select' === input.element.tagName.toLowerCase()
                    ? input.element.querySelectorAll('option:checked').length
                    : input.elements.filter(function (ele) { return ele.checked; }).length;
                var min = input.options.min ? "".concat(input.options.min) : '';
                var max = input.options.max ? "".concat(input.options.max) : '';
                var msg = input.l10n ? input.options.message || input.l10n.choice.default : input.options.message;
                var isValid = !((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10)));
                switch (true) {
                    case !!min && !!max:
                        msg = format(input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
                        break;
                    case !!min:
                        msg = format(input.l10n ? input.l10n.choice.more : input.options.message, min);
                        break;
                    case !!max:
                        msg = format(input.l10n ? input.l10n.choice.less : input.options.message, max);
                        break;
                }
                return {
                    message: msg,
                    valid: isValid,
                };
            },
        };
    }

    exports.choice = choice;

}));
