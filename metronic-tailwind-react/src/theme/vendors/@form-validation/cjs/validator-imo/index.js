'use strict';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function imo() {
    return {
        /**
         * Validate IMO (International Maritime Organization)
         * @see http://en.wikipedia.org/wiki/IMO_Number
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            if (!/^IMO \d{7}$/i.test(input.value)) {
                return { valid: false };
            }
            // Grab just the digits
            var digits = input.value.replace(/^.*(\d{7})$/, '$1');
            var sum = 0;
            for (var i = 6; i >= 1; i--) {
                sum += parseInt(digits.slice(6 - i, -i), 10) * (i + 1);
            }
            return { valid: sum % 10 === parseInt(digits.charAt(6), 10) };
        },
    };
}

exports.imo = imo;
