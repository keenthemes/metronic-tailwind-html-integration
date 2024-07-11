(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.stringLength = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
    var utf8Length = function (str) {
        var s = str.length;
        for (var i = str.length - 1; i >= 0; i--) {
            var code = str.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff) {
                s++;
            }
            else if (code > 0x7ff && code <= 0xffff) {
                s += 2;
            }
            if (code >= 0xdc00 && code <= 0xdfff) {
                i--;
            }
        }
        return s;
    };
    function stringLength() {
        return {
            /**
             * Check if the length of element value is less or more than given number
             */
            validate: function (input) {
                var opts = Object.assign({}, {
                    message: '',
                    trim: false,
                    utf8Bytes: false,
                }, removeUndefined(input.options));
                var v = opts.trim === true || "".concat(opts.trim) === 'true' ? input.value.trim() : input.value;
                if (v === '') {
                    return { valid: true };
                }
                // TODO: `min`, `max` can be dynamic options
                var min = opts.min ? "".concat(opts.min) : '';
                var max = opts.max ? "".concat(opts.max) : '';
                var length = opts.utf8Bytes ? utf8Length(v) : v.length;
                var isValid = true;
                var msg = input.l10n ? opts.message || input.l10n.stringLength.default : opts.message;
                if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                    isValid = false;
                }
                switch (true) {
                    case !!min && !!max:
                        msg = format(input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [
                            min,
                            max,
                        ]);
                        break;
                    case !!min:
                        msg = format(input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "".concat(parseInt(min, 10)));
                        break;
                    case !!max:
                        msg = format(input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "".concat(parseInt(max, 10)));
                        break;
                }
                return {
                    message: msg,
                    valid: isValid,
                };
            },
        };
    }

    return stringLength;

}));
