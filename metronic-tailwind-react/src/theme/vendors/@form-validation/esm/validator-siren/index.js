import { algorithms } from '../core/index.js';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn = algorithms.luhn;
function siren() {
    return {
        /**
         * Check if a string is a siren number
         */
        validate: function (input) {
            return {
                valid: input.value === '' || (/^\d{9}$/.test(input.value) && luhn(input.value)),
            };
        },
    };
}

export { siren };
