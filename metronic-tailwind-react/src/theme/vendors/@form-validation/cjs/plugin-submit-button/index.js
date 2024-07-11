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
var SubmitButton = /** @class */ (function (_super) {
    __extends(SubmitButton, _super);
    function SubmitButton(opts) {
        var _this = _super.call(this, opts) || this;
        _this.isFormValid = false;
        _this.isButtonClicked = false;
        _this.opts = Object.assign({}, {
            // Set it to `true` to support classical ASP.Net form
            aspNetButton: false,
            // By default, don't perform validation when clicking on
            // the submit button/input which have `formnovalidate` attribute
            buttons: function (form) {
                return [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])'));
            },
            liveMode: true,
        }, opts);
        _this.submitHandler = _this.handleSubmitEvent.bind(_this);
        _this.buttonClickHandler = _this.handleClickEvent.bind(_this);
        _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
        return _this;
    }
    SubmitButton.prototype.install = function () {
        var _this = this;
        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
            return;
        }
        var form = this.core.getFormElement();
        this.submitButtons = this.opts.buttons(form);
        // Disable client side validation in HTML 5
        form.setAttribute('novalidate', 'novalidate');
        // Disable the default submission first
        form.addEventListener('submit', this.submitHandler);
        this.hiddenClickedEle = document.createElement('input');
        this.hiddenClickedEle.setAttribute('type', 'hidden');
        form.appendChild(this.hiddenClickedEle);
        this.submitButtons.forEach(function (button) {
            button.addEventListener('click', _this.buttonClickHandler);
        });
        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    };
    SubmitButton.prototype.uninstall = function () {
        var _this = this;
        var form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.removeEventListener('submit', this.submitHandler);
        }
        this.submitButtons.forEach(function (button) {
            button.removeEventListener('click', _this.buttonClickHandler);
        });
        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    };
    SubmitButton.prototype.handleSubmitEvent = function (e) {
        this.validateForm(e);
    };
    SubmitButton.prototype.handleClickEvent = function (e) {
        var target = e.currentTarget;
        this.isButtonClicked = true;
        if (target instanceof HTMLElement) {
            if (this.opts.aspNetButton && this.isFormValid === true) ;
            else {
                var form = this.core.getFormElement();
                form.removeEventListener('submit', this.submitHandler);
                this.clickedButton = e.target;
                var name_1 = this.clickedButton.getAttribute('name');
                var value = this.clickedButton.getAttribute('value');
                if (name_1 && value) {
                    this.hiddenClickedEle.setAttribute('name', name_1);
                    this.hiddenClickedEle.setAttribute('value', value);
                }
                this.validateForm(e);
            }
        }
    };
    SubmitButton.prototype.validateForm = function (e) {
        var _this = this;
        if (!this.isEnabled) {
            return;
        }
        e.preventDefault();
        this.core.validate().then(function (result) {
            if (result === 'Valid' && _this.opts.aspNetButton && !_this.isFormValid && _this.clickedButton) {
                _this.isFormValid = true;
                _this.clickedButton.removeEventListener('click', _this.buttonClickHandler);
                // It's the time for ASP.Net submit button to do its own submission
                _this.clickedButton.click();
            }
        });
    };
    SubmitButton.prototype.ignoreValidation = function (_field, _element, _elements) {
        if (!this.isEnabled) {
            return false;
        }
        return this.opts.liveMode ? false : !this.isButtonClicked;
    };
    return SubmitButton;
}(core.Plugin));

exports.SubmitButton = SubmitButton;
