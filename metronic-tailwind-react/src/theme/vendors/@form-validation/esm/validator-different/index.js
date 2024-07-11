/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
function different() {
    return {
        validate: function (input) {
            var compareWith = 'function' === typeof input.options.compare
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: compareWith === '' || input.value !== compareWith,
            };
        },
    };
}

export { different };
