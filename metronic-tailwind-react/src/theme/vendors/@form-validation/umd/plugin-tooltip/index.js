(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Tooltip = factory(global.FormValidation)));
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
    var Tooltip = /** @class */ (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip(opts) {
            var _this = _super.call(this, opts) || this;
            // Map the element with message
            _this.messages = new Map();
            _this.opts = Object.assign({}, {
                placement: 'top',
                trigger: 'click',
            }, opts);
            _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
            _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.documentClickHandler = _this.onDocumentClicked.bind(_this);
            return _this;
        }
        Tooltip.prototype.install = function () {
            var _a;
            this.tip = document.createElement('div');
            classSet(this.tip, (_a = {
                    'fv-plugins-tooltip': true
                },
                _a["fv-plugins-tooltip--".concat(this.opts.placement)] = true,
                _a));
            document.body.appendChild(this.tip);
            this.core
                .on('plugins.icon.placed', this.iconPlacedHandler)
                .on('core.validator.validated', this.validatorValidatedHandler)
                .on('core.element.validated', this.elementValidatedHandler);
            if ('click' === this.opts.trigger) {
                document.addEventListener('click', this.documentClickHandler);
            }
        };
        Tooltip.prototype.uninstall = function () {
            this.messages.clear();
            document.body.removeChild(this.tip);
            this.core
                .off('plugins.icon.placed', this.iconPlacedHandler)
                .off('core.validator.validated', this.validatorValidatedHandler)
                .off('core.element.validated', this.elementValidatedHandler);
            if ('click' === this.opts.trigger) {
                document.removeEventListener('click', this.documentClickHandler);
            }
        };
        Tooltip.prototype.onIconPlaced = function (e) {
            var _this = this;
            classSet(e.iconElement, {
                'fv-plugins-tooltip-icon': true,
            });
            switch (this.opts.trigger) {
                case 'hover':
                    e.iconElement.addEventListener('mouseenter', function (evt) { return _this.show(e.element, evt); });
                    e.iconElement.addEventListener('mouseleave', function (_evt) { return _this.hide(); });
                    break;
                case 'click':
                default:
                    e.iconElement.addEventListener('click', function (evt) { return _this.show(e.element, evt); });
                    break;
            }
        };
        Tooltip.prototype.onValidatorValidated = function (e) {
            if (!e.result.valid) {
                var elements = e.elements;
                var type = e.element.getAttribute('type');
                var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
                // Get the message
                var message = typeof e.result.message === 'string' ? e.result.message : e.result.message[this.core.getLocale()];
                this.messages.set(ele, message);
            }
        };
        Tooltip.prototype.onElementValidated = function (e) {
            if (e.valid) {
                // Clear the message
                var elements = e.elements;
                var type = e.element.getAttribute('type');
                var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
                this.messages.delete(ele);
            }
        };
        Tooltip.prototype.onDocumentClicked = function (_e) {
            this.hide();
        };
        Tooltip.prototype.show = function (ele, e) {
            if (!this.isEnabled) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (!this.messages.has(ele)) {
                return;
            }
            classSet(this.tip, {
                'fv-plugins-tooltip--hide': false,
            });
            this.tip.innerHTML = "<div class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(ele), "</div>");
            // Calculate position of the icon element
            var icon = e.target;
            var targetRect = icon.getBoundingClientRect();
            var _a = this.tip.getBoundingClientRect(), height = _a.height, width = _a.width;
            var top = 0;
            var left = 0;
            switch (this.opts.placement) {
                case 'bottom':
                    top = targetRect.top + targetRect.height;
                    left = targetRect.left + targetRect.width / 2 - width / 2;
                    break;
                case 'bottom-left':
                    top = targetRect.top + targetRect.height;
                    left = targetRect.left;
                    break;
                case 'bottom-right':
                    top = targetRect.top + targetRect.height;
                    left = targetRect.left + targetRect.width - width;
                    break;
                case 'left':
                    top = targetRect.top + targetRect.height / 2 - height / 2;
                    left = targetRect.left - width;
                    break;
                case 'right':
                    top = targetRect.top + targetRect.height / 2 - height / 2;
                    left = targetRect.left + targetRect.width;
                    break;
                case 'top-left':
                    top = targetRect.top - height;
                    left = targetRect.left;
                    break;
                case 'top-right':
                    top = targetRect.top - height;
                    left = targetRect.left + targetRect.width - width;
                    break;
                case 'top':
                default:
                    top = targetRect.top - height;
                    left = targetRect.left + targetRect.width / 2 - width / 2;
                    break;
            }
            var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var scrollLeft = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            top = top + scrollTop;
            left = left + scrollLeft;
            this.tip.setAttribute('style', "top: ".concat(top, "px; left: ").concat(left, "px"));
        };
        Tooltip.prototype.hide = function () {
            if (this.isEnabled) {
                classSet(this.tip, {
                    'fv-plugins-tooltip--hide': true,
                });
            }
        };
        return Tooltip;
    }(core.Plugin));

    return Tooltip;

}));
