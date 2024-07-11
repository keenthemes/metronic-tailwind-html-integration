(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.FieldStatus = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

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
    var FieldStatus = /** @class */ (function (_super) {
        __extends(FieldStatus, _super);
        function FieldStatus(opts) {
            var _this = _super.call(this, opts) || this;
            _this.statuses = new Map();
            _this.opts = Object.assign({}, {
                onStatusChanged: function () { },
            }, opts);
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
            return _this;
        }
        FieldStatus.prototype.install = function () {
            this.core
                .on('core.element.validating', this.elementValidatingHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('core.element.ignored', this.elementIgnoredHandler)
                .on('core.field.added', this.fieldAddedHandler)
                .on('core.field.removed', this.fieldRemovedHandler);
        };
        FieldStatus.prototype.uninstall = function () {
            this.statuses.clear();
            this.core
                .off('core.element.validating', this.elementValidatingHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('core.element.ignored', this.elementIgnoredHandler)
                .off('core.field.added', this.fieldAddedHandler)
                .off('core.field.removed', this.fieldRemovedHandler);
        };
        FieldStatus.prototype.areFieldsValid = function () {
            return Array.from(this.statuses.values()).every(function (value) {
                return value === 'Valid' || value === 'NotValidated' || value === 'Ignored';
            });
        };
        FieldStatus.prototype.getStatuses = function () {
            return this.isEnabled ? this.statuses : new Map();
        };
        FieldStatus.prototype.onFieldAdded = function (e) {
            this.statuses.set(e.field, 'NotValidated');
        };
        FieldStatus.prototype.onFieldRemoved = function (e) {
            if (this.statuses.has(e.field)) {
                this.statuses.delete(e.field);
            }
            this.handleStatusChanged(this.areFieldsValid());
        };
        FieldStatus.prototype.onElementValidating = function (e) {
            this.statuses.set(e.field, 'Validating');
            this.handleStatusChanged(false);
        };
        FieldStatus.prototype.onElementValidated = function (e) {
            this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
            if (e.valid) {
                this.handleStatusChanged(this.areFieldsValid());
            }
            else {
                this.handleStatusChanged(false);
            }
        };
        FieldStatus.prototype.onElementNotValidated = function (e) {
            this.statuses.set(e.field, 'NotValidated');
            this.handleStatusChanged(false);
        };
        FieldStatus.prototype.onElementIgnored = function (e) {
            this.statuses.set(e.field, 'Ignored');
            this.handleStatusChanged(this.areFieldsValid());
        };
        FieldStatus.prototype.handleStatusChanged = function (areFieldsValid) {
            if (this.isEnabled) {
                this.opts.onStatusChanged(areFieldsValid);
            }
        };
        return FieldStatus;
    }(core.Plugin));

    return FieldStatus;

}));
