/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function cusip() {
    return {
        /**
         * Validate a CUSIP number
         * @see http://en.wikipedia.org/wiki/CUSIP
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var value = input.value.toUpperCase();
            // O, I aren't allowed
            if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(value)) {
                return { valid: false };
            }
            // Get the last char
            var chars = value.split('');
            var lastChar = chars.pop();
            var converted = chars.map(function (c) {
                var code = c.charCodeAt(0);
                switch (true) {
                    case c === '*':
                        return 36;
                    case c === '@':
                        return 37;
                    case c === '#':
                        return 38;
                    // Replace A, B, C, ..., Z with 10, 11, ..., 35
                    case code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0):
                        return code - 'A'.charCodeAt(0) + 10;
                    default:
                        return parseInt(c, 10);
                }
            });
            var sum = converted
                .map(function (v, i) {
                var double = i % 2 === 0 ? v : 2 * v;
                return Math.floor(double / 10) + (double % 10);
            })
                .reduce(function (a, b) { return a + b; }, 0);
            var checkDigit = (10 - (sum % 10)) % 10;
            return { valid: lastChar === "".concat(checkDigit) };
        },
    };
}

export { cusip };
