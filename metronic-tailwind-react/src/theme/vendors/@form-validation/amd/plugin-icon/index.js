define(['exports', '@form-validation/core'], (function (exports, core) { 'use strict';

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
    var classSet = core.utils.classSet;
    var Icon = /** @class */ (function (_super) {
        __extends(Icon, _super);
        function Icon(opts) {
            var _this = _super.call(this, opts) || this;
            // Map the field element with icon
            _this.icons = new Map();
            _this.opts = Object.assign({}, {
                invalid: 'fv-plugins-icon--invalid',
                onPlaced: function () { },
                onSet: function () { },
                valid: 'fv-plugins-icon--valid',
                validating: 'fv-plugins-icon--validating',
            }, opts);
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            return _this;
        }
        Icon.prototype.install = function () {
            this.core
                .on('core.element.validating', this.elementValidatingHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('core.element.ignored', this.elementIgnoredHandler)
                .on('core.field.added', this.fieldAddedHandler);
        };
        Icon.prototype.uninstall = function () {
            this.icons.forEach(function (icon) { return icon.parentNode.removeChild(icon); });
            this.icons.clear();
            this.core
                .off('core.element.validating', this.elementValidatingHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('core.element.ignored', this.elementIgnoredHandler)
                .off('core.field.added', this.fieldAddedHandler);
        };
        Icon.prototype.onEnabled = function () {
            this.icons.forEach(function (_element, i, _map) {
                classSet(i, {
                    'fv-plugins-icon--enabled': true,
                    'fv-plugins-icon--disabled': false,
                });
            });
        };
        Icon.prototype.onDisabled = function () {
            this.icons.forEach(function (_element, i, _map) {
                classSet(i, {
                    'fv-plugins-icon--enabled': false,
                    'fv-plugins-icon--disabled': true,
                });
            });
        };
        Icon.prototype.onFieldAdded = function (e) {
            var _this = this;
            var elements = e.elements;
            if (elements) {
                elements.forEach(function (ele) {
                    var icon = _this.icons.get(ele);
                    if (icon) {
                        icon.parentNode.removeChild(icon);
                        _this.icons.delete(ele);
                    }
                });
                this.prepareFieldIcon(e.field, elements);
            }
        };
        Icon.prototype.prepareFieldIcon = function (field, elements) {
            var _this = this;
            if (elements.length) {
                var type = elements[0].getAttribute('type');
                if ('radio' === type || 'checkbox' === type) {
                    this.prepareElementIcon(field, elements[0]);
                }
                else {
                    elements.forEach(function (ele) { return _this.prepareElementIcon(field, ele); });
                }
            }
        };
        Icon.prototype.prepareElementIcon = function (field, ele) {
            var i = document.createElement('i');
            i.setAttribute('data-field', field);
            // Append the icon right after the field element
            ele.parentNode.insertBefore(i, ele.nextSibling);
            classSet(i, {
                'fv-plugins-icon': true,
                'fv-plugins-icon--enabled': this.isEnabled,
                'fv-plugins-icon--disabled': !this.isEnabled,
            });
            var e = {
                classes: {
                    invalid: this.opts.invalid,
                    valid: this.opts.valid,
                    validating: this.opts.validating,
                },
                element: ele,
                field: field,
                iconElement: i,
            };
            this.core.emit('plugins.icon.placed', e);
            this.opts.onPlaced(e);
            this.icons.set(ele, i);
        };
        Icon.prototype.onElementValidating = function (e) {
            var _a;
            var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
                _a[this.opts.invalid] = false,
                _a[this.opts.valid] = false,
                _a[this.opts.validating] = true,
                _a));
            var evt = {
                element: e.element,
                field: e.field,
                iconElement: icon,
                status: 'Validating',
            };
            this.core.emit('plugins.icon.set', evt);
            this.opts.onSet(evt);
        };
        Icon.prototype.onElementValidated = function (e) {
            var _a;
            var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
                _a[this.opts.invalid] = !e.valid,
                _a[this.opts.valid] = e.valid,
                _a[this.opts.validating] = false,
                _a));
            var evt = {
                element: e.element,
                field: e.field,
                iconElement: icon,
                status: e.valid ? 'Valid' : 'Invalid',
            };
            this.core.emit('plugins.icon.set', evt);
            this.opts.onSet(evt);
        };
        Icon.prototype.onElementNotValidated = function (e) {
            var _a;
            var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
                _a[this.opts.invalid] = false,
                _a[this.opts.valid] = false,
                _a[this.opts.validating] = false,
                _a));
            var evt = {
                element: e.element,
                field: e.field,
                iconElement: icon,
                status: 'NotValidated',
            };
            this.core.emit('plugins.icon.set', evt);
            this.opts.onSet(evt);
        };
        Icon.prototype.onElementIgnored = function (e) {
            var _a;
            var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
                _a[this.opts.invalid] = false,
                _a[this.opts.valid] = false,
                _a[this.opts.validating] = false,
                _a));
            var evt = {
                element: e.element,
                field: e.field,
                iconElement: icon,
                status: 'Ignored',
            };
            this.core.emit('plugins.icon.set', evt);
            this.opts.onSet(evt);
        };
        Icon.prototype.setClasses = function (_field, element, elements, classes) {
            var type = element.getAttribute('type');
            var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
            if (this.icons.has(ele)) {
                var icon = this.icons.get(ele);
                classSet(icon, classes);
                return icon;
            }
            else {
                return null;
            }
        };
        return Icon;
    }(core.Plugin));

    exports.Icon = Icon;

}));
