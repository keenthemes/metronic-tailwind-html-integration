import { utils } from '../core/index.js';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var format = utils.format, removeUndefined = utils.removeUndefined;
function uuid() {
    return {
        /**
         * Return true if and only if the input value is a valid UUID string
         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
            var patterns = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            };
            var version = opts.version ? "".concat(opts.version) : 'all';
            return {
                message: opts.version
                    ? format(input.l10n ? opts.message || input.l10n.uuid.version : opts.message, opts.version)
                    : input.l10n
                        ? input.l10n.uuid.default
                        : opts.message,
                valid: null === patterns[version] ? true : patterns[version].test(input.value),
            };
        },
    };
}

export { uuid };
