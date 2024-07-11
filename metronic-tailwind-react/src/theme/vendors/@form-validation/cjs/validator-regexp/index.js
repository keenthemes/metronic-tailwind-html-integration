'use strict';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function regexp() {
    return {
        /**
         * Check if the element value matches given regular expression
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var reg = input.options.regexp;
            if (reg instanceof RegExp) {
                return { valid: reg.test(input.value) };
            }
            else {
                var pattern = reg.toString();
                var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
                return { valid: exp.test(input.value) };
            }
        },
    };
}

exports.regexp = regexp;
