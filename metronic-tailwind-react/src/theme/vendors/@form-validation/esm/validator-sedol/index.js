/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function sedol() {
    return {
        /**
         * Validate a SEDOL (Stock Exchange Daily Official List)
         * @see http://en.wikipedia.org/wiki/SEDOL
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var v = input.value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(v)) {
                return { valid: false };
            }
            var weight = [1, 3, 1, 7, 3, 9, 1];
            var length = v.length;
            var sum = 0;
            for (var i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(v.charAt(i), 36);
            }
            sum = (10 - (sum % 10)) % 10;
            return { valid: "".concat(sum) === v.charAt(length - 1) };
        },
    };
}

export { sedol };
