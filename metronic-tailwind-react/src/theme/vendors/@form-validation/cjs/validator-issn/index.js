'use strict';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function issn() {
    return {
        /**
         * Validate ISSN (International Standard Serial Number)
         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            // Groups are separated by a hyphen or a space
            if (!/^\d{4}-\d{3}[\dX]$/.test(input.value)) {
                return { valid: false };
            }
            // Replace all special characters except digits and X
            var chars = input.value.replace(/[^0-9X]/gi, '').split('');
            var length = chars.length;
            var sum = 0;
            if (chars[7] === 'X') {
                chars[7] = '10';
            }
            for (var i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return { valid: sum % 11 === 0 };
        },
    };
}

exports.issn = issn;
