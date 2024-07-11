import { Plugin } from '../core/index.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var L10n = /** @class */ (function (_super) {
    __extends(L10n, _super);
    function L10n(opts) {
        var _this = _super.call(this, opts) || this;
        _this.messageFilter = _this.getMessage.bind(_this);
        return _this;
    }
    L10n.prototype.install = function () {
        this.core.registerFilter('validator-message', this.messageFilter);
    };
    L10n.prototype.uninstall = function () {
        this.core.deregisterFilter('validator-message', this.messageFilter);
    };
    L10n.prototype.getMessage = function (locale, field, validator) {
        if (!this.isEnabled) {
            return '';
        }
        if (this.opts[field] && this.opts[field][validator]) {
            var message = this.opts[field][validator];
            var messageType = typeof message;
            if ('object' === messageType && message[locale]) {
                // message is a literal object
                return message[locale];
            }
            else if ('function' === messageType) {
                // message is defined by a function
                var result = message.apply(this, [field, validator]);
                return result && result[locale] ? result[locale] : '';
            }
        }
        return '';
    };
    return L10n;
}(Plugin));

export { L10n };
