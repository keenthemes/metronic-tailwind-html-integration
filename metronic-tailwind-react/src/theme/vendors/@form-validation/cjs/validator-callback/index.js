'use strict';

var core = require('@form-validation/core');

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var call = core.utils.call;
function callback() {
    return {
        validate: function (input) {
            var response = call(input.options.callback, [input]);
            return 'boolean' === typeof response
                ? { valid: response } // Deprecated
                : response;
        },
    };
}

exports.callback = callback;
