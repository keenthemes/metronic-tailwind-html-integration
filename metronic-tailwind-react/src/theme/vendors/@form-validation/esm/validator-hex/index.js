/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function hex() {
    return {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         */
        validate: function (input) {
            return {
                valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value),
            };
        },
    };
}

export { hex };
