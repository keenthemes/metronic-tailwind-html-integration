'use strict';

var core = require('@form-validation/core');

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
/**
 * This plugin adds ARIA attributes based on the field validity.
 * The list include:
 *  - `aria-invalid`, `aria-describedby` for field element
 *  - `aria-hidden`, `role` for associated message element
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
 */
var Aria = /** @class */ (function (_super) {
    __extends(Aria, _super);
    function Aria() {
        var _this = _super.call(this, {}) || this;
        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
        _this.fieldValidHandler = _this.onFieldValid.bind(_this);
        _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
        _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
        return _this;
    }
    Aria.prototype.install = function () {
        this.core
            .on('core.field.valid', this.fieldValidHandler)
            .on('core.field.invalid', this.fieldInvalidHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('plugins.message.displayed', this.messageDisplayedHandler);
    };
    Aria.prototype.uninstall = function () {
        this.core
            .off('core.field.valid', this.fieldValidHandler)
            .off('core.field.invalid', this.fieldInvalidHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('plugins.message.displayed', this.messageDisplayedHandler);
    };
    Aria.prototype.onElementValidated = function (e) {
        if (e.valid) {
            e.element.setAttribute('aria-invalid', 'false');
            e.element.removeAttribute('aria-describedby');
        }
    };
    Aria.prototype.onFieldValid = function (field) {
        var elements = this.core.getElements(field);
        if (elements) {
            elements.forEach(function (ele) {
                ele.setAttribute('aria-invalid', 'false');
                ele.removeAttribute('aria-describedby');
            });
        }
    };
    Aria.prototype.onFieldInvalid = function (field) {
        var elements = this.core.getElements(field);
        if (elements) {
            elements.forEach(function (ele) { return ele.setAttribute('aria-invalid', 'true'); });
        }
    };
    Aria.prototype.onMessageDisplayed = function (e) {
        e.messageElement.setAttribute('role', 'alert');
        e.messageElement.setAttribute('aria-hidden', 'false');
        var elements = this.core.getElements(e.field);
        var index = elements.indexOf(e.element);
        var id = "js-fv-".concat(e.field, "-").concat(index, "-").concat(Date.now(), "-message");
        e.messageElement.setAttribute('id', id);
        e.element.setAttribute('aria-describedby', id);
        var type = e.element.getAttribute('type');
        if ('radio' === type || 'checkbox' === type) {
            elements.forEach(function (ele) { return ele.setAttribute('aria-describedby', id); });
        }
    };
    return Aria;
}(core.Plugin));

exports.Aria = Aria;
