(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.MandatoryIcon = factory(global.FormValidation)));
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
    var classSet = core.utils.classSet;
    var MandatoryIcon = /** @class */ (function (_super) {
        __extends(MandatoryIcon, _super);
        function MandatoryIcon(opts) {
            var _this = _super.call(this, opts) || this;
            _this.removedIcons = {
                Invalid: '',
                NotValidated: '',
                Valid: '',
                Validating: '',
            };
            // Map the field element with icon
            _this.icons = new Map();
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
            _this.iconSetHandler = _this.onIconSet.bind(_this);
            return _this;
        }
        MandatoryIcon.prototype.install = function () {
            this.core
                .on('core.element.validating', this.elementValidatingHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('plugins.icon.placed', this.iconPlacedHandler)
                .on('plugins.icon.set', this.iconSetHandler);
        };
        MandatoryIcon.prototype.uninstall = function () {
            this.icons.clear();
            this.core
                .off('core.element.validating', this.elementValidatingHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('plugins.icon.placed', this.iconPlacedHandler)
                .off('plugins.icon.set', this.iconSetHandler);
        };
        MandatoryIcon.prototype.onEnabled = function () {
            var _this = this;
            this.icons.forEach(function (_element, iconElement, _map) {
                var _a;
                classSet(iconElement, (_a = {},
                    _a[_this.opts.icon] = true,
                    _a));
            });
        };
        MandatoryIcon.prototype.onDisabled = function () {
            var _this = this;
            this.icons.forEach(function (_element, iconElement, _map) {
                var _a;
                classSet(iconElement, (_a = {},
                    _a[_this.opts.icon] = false,
                    _a));
            });
        };
        MandatoryIcon.prototype.onIconPlaced = function (e) {
            var _a;
            var _this = this;
            var validators = this.core.getFields()[e.field].validators;
            var elements = this.core.getElements(e.field);
            if (validators && validators['notEmpty'] && validators['notEmpty'].enabled !== false && elements.length) {
                this.icons.set(e.element, e.iconElement);
                var eleType = elements[0].getAttribute('type');
                var type = !eleType ? '' : eleType.toLowerCase();
                var elementArray = 'checkbox' === type || 'radio' === type ? [elements[0]] : elements;
                for (var _i = 0, elementArray_1 = elementArray; _i < elementArray_1.length; _i++) {
                    var ele = elementArray_1[_i];
                    if (this.core.getElementValue(e.field, ele) === '') {
                        // Add required icon
                        classSet(e.iconElement, (_a = {},
                            _a[this.opts.icon] = this.isEnabled,
                            _a));
                    }
                }
            }
            // Maybe the required icon consists of one which is in the list of valid/invalid/validating feedback icons
            // (for example, fa, glyphicon)
            this.iconClasses = e.classes;
            var icons = this.opts.icon.split(' ');
            var feedbackIcons = {
                Invalid: this.iconClasses.invalid ? this.iconClasses.invalid.split(' ') : [],
                Valid: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
                Validating: this.iconClasses.validating ? this.iconClasses.validating.split(' ') : [],
            };
            Object.keys(feedbackIcons).forEach(function (status) {
                var classes = [];
                for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
                    var clazz = icons_1[_i];
                    if (feedbackIcons[status].indexOf(clazz) === -1) {
                        classes.push(clazz);
                    }
                }
                _this.removedIcons[status] = classes.join(' ');
            });
        };
        MandatoryIcon.prototype.onElementValidating = function (e) {
            this.updateIconClasses(e.element, 'Validating');
        };
        MandatoryIcon.prototype.onElementValidated = function (e) {
            this.updateIconClasses(e.element, e.valid ? 'Valid' : 'Invalid');
        };
        MandatoryIcon.prototype.onElementNotValidated = function (e) {
            this.updateIconClasses(e.element, 'NotValidated');
        };
        // Remove the required icon when the field updates its status
        MandatoryIcon.prototype.updateIconClasses = function (ele, status) {
            var _a;
            var icon = this.icons.get(ele);
            if (icon &&
                this.iconClasses &&
                (this.iconClasses.valid || this.iconClasses.invalid || this.iconClasses.validating)) {
                classSet(icon, (_a = {},
                    _a[this.removedIcons[status]] = false,
                    _a[this.opts.icon] = false,
                    _a));
            }
        };
        MandatoryIcon.prototype.onIconSet = function (e) {
            var _a;
            // Show the icon when the field is empty after resetting
            var icon = this.icons.get(e.element);
            if (!icon) {
                return;
            }
            if ((e.status === 'NotValidated' && this.core.getElementValue(e.field, e.element) === '') ||
                e.status === 'Ignored') {
                classSet(icon, (_a = {},
                    _a[this.opts.icon] = this.isEnabled,
                    _a));
            }
        };
        return MandatoryIcon;
    }(core.Plugin));

    return MandatoryIcon;

}));
