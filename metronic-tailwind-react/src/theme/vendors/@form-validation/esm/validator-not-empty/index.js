/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function notEmpty() {
    return {
        validate: function (input) {
            var trim = !!input.options && !!input.options.trim;
            var value = input.value;
            return {
                valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
            };
        },
    };
}

export { notEmpty };
