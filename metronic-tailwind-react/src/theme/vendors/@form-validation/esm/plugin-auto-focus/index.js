import { Plugin } from '../core/index.js';
import { FieldStatus } from '../plugin-field-status/index.js';

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
var AutoFocus = /** @class */ (function (_super) {
    __extends(AutoFocus, _super);
    function AutoFocus(opts) {
        var _this = _super.call(this, opts) || this;
        _this.opts = Object.assign({}, {
            onPrefocus: function () { },
        }, opts);
        _this.invalidFormHandler = _this.onFormInvalid.bind(_this);
        return _this;
    }
    AutoFocus.prototype.install = function () {
        this.core
            .on('core.form.invalid', this.invalidFormHandler)
            .registerPlugin(AutoFocus.FIELD_STATUS_PLUGIN, new FieldStatus());
    };
    AutoFocus.prototype.uninstall = function () {
        this.core.off('core.form.invalid', this.invalidFormHandler).deregisterPlugin(AutoFocus.FIELD_STATUS_PLUGIN);
    };
    AutoFocus.prototype.onEnabled = function () {
        this.core.enablePlugin(AutoFocus.FIELD_STATUS_PLUGIN);
    };
    AutoFocus.prototype.onDisabled = function () {
        this.core.disablePlugin(AutoFocus.FIELD_STATUS_PLUGIN);
    };
    AutoFocus.prototype.onFormInvalid = function () {
        if (!this.isEnabled) {
            return;
        }
        var plugin = this.core.getPlugin(AutoFocus.FIELD_STATUS_PLUGIN);
        var statuses = plugin.getStatuses();
        var invalidFields = Object.keys(this.core.getFields()).filter(function (key) { return statuses.get(key) === 'Invalid'; });
        if (invalidFields.length > 0) {
            var firstInvalidField = invalidFields[0];
            var elements = this.core.getElements(firstInvalidField);
            if (elements.length > 0) {
                var firstElement = elements[0];
                var e = {
                    firstElement: firstElement,
                    field: firstInvalidField,
                };
                this.core.emit('plugins.autofocus.prefocus', e);
                this.opts.onPrefocus(e);
                // Focus on the first invalid element
                firstElement.focus();
            }
        }
    };
    AutoFocus.FIELD_STATUS_PLUGIN = '___autoFocusFieldStatus';
    return AutoFocus;
}(Plugin));

export { AutoFocus };
