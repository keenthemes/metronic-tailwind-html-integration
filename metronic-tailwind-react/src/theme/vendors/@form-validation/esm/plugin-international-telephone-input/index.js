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
var InternationalTelephoneInput = /** @class */ (function (_super) {
    __extends(InternationalTelephoneInput, _super);
    function InternationalTelephoneInput(opts) {
        var _this = _super.call(this, opts) || this;
        _this.intlTelInstances = new Map();
        _this.countryChangeHandler = new Map();
        _this.fieldElements = new Map();
        _this.hiddenFieldElements = new Map();
        _this.opts = Object.assign({}, {
            autoPlaceholder: 'polite',
            utilsScript: '',
        }, opts);
        _this.validatePhoneNumber = _this.checkPhoneNumber.bind(_this);
        _this.fields = typeof _this.opts.field === 'string' ? _this.opts.field.split(',') : _this.opts.field;
        _this.hiddenFieldInputs = _this.opts.hiddenPhoneInput
            ? typeof _this.opts.hiddenPhoneInput === 'string'
                ? _this.opts.hiddenPhoneInput.split(',')
                : _this.opts.hiddenPhoneInput
            : [];
        _this.onValidatorValidatedHandler = _this.onValidatorValidated.bind(_this);
        return _this;
    }
    InternationalTelephoneInput.prototype.install = function () {
        var _this = this;
        this.core.registerValidator(InternationalTelephoneInput.INT_TEL_VALIDATOR, this.validatePhoneNumber);
        var numHiddenFieldInputs = this.hiddenFieldInputs.length;
        this.fields.forEach(function (field, index) {
            var _a;
            _this.core.addField(field, {
                validators: (_a = {},
                    _a[InternationalTelephoneInput.INT_TEL_VALIDATOR] = {
                        message: _this.opts.message,
                    },
                    _a),
            });
            var ele = _this.core.getElements(field)[0];
            var handler = function () { return _this.core.revalidateField(field); };
            ele.addEventListener('countrychange', handler);
            _this.countryChangeHandler.set(field, handler);
            _this.fieldElements.set(field, ele);
            _this.intlTelInstances.set(field, intlTelInput(ele, _this.opts));
            if (index < numHiddenFieldInputs && _this.hiddenFieldInputs[index]) {
                var hiddenInputEle = document.createElement('input');
                hiddenInputEle.setAttribute('type', 'hidden');
                hiddenInputEle.setAttribute('name', _this.hiddenFieldInputs[index]);
                _this.core.getFormElement().appendChild(hiddenInputEle);
                _this.hiddenFieldElements.set(field, hiddenInputEle);
            }
        });
        if (numHiddenFieldInputs > 0) {
            this.core.on('core.validator.validated', this.onValidatorValidatedHandler);
        }
    };
    InternationalTelephoneInput.prototype.uninstall = function () {
        var _this = this;
        var numHiddenFieldInputs = this.hiddenFieldInputs.length;
        this.fields.forEach(function (field, index) {
            // Remove event handler
            var handler = _this.countryChangeHandler.get(field);
            var ele = _this.fieldElements.get(field);
            var intlTel = _this.getIntTelInstance(field);
            if (handler && ele && intlTel) {
                ele.removeEventListener('countrychange', handler);
                _this.core.disableValidator(field, InternationalTelephoneInput.INT_TEL_VALIDATOR);
                intlTel.destroy();
            }
            if (index < numHiddenFieldInputs && _this.hiddenFieldInputs[index]) {
                var hiddenInputEle = _this.hiddenFieldElements.get(field);
                if (hiddenInputEle) {
                    _this.core.getFormElement().removeChild(hiddenInputEle);
                }
            }
        });
        if (numHiddenFieldInputs > 0) {
            this.core.off('core.validator.validated', this.onValidatorValidatedHandler);
        }
        this.fieldElements.clear();
        this.hiddenFieldElements.clear();
    };
    InternationalTelephoneInput.prototype.getIntTelInstance = function (field) {
        return this.intlTelInstances.get(field);
    };
    InternationalTelephoneInput.prototype.onEnabled = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            _this.core.enableValidator(field, InternationalTelephoneInput.INT_TEL_VALIDATOR);
        });
    };
    InternationalTelephoneInput.prototype.onDisabled = function () {
        var _this = this;
        this.fields.forEach(function (field) {
            _this.core.disableValidator(field, InternationalTelephoneInput.INT_TEL_VALIDATOR);
            // Reset the full phone number input
            var hiddenInputEle = _this.hiddenFieldElements.get(field);
            if (hiddenInputEle) {
                hiddenInputEle.value = '';
            }
        });
    };
    InternationalTelephoneInput.prototype.checkPhoneNumber = function () {
        var _this = this;
        return {
            validate: function (input) {
                var value = input.value;
                var intlTel = _this.getIntTelInstance(input.field);
                if (value === '' || !intlTel) {
                    return {
                        valid: true,
                    };
                }
                return {
                    valid: intlTel.isValidNumber(),
                };
            },
        };
    };
    InternationalTelephoneInput.prototype.onValidatorValidated = function (e) {
        if (this.hiddenFieldInputs.length === 0 || e.validator !== InternationalTelephoneInput.INT_TEL_VALIDATOR) {
            return;
        }
        var field = e.field;
        var hiddenInputEle = this.hiddenFieldElements.get(field);
        if (!hiddenInputEle) {
            return;
        }
        if (this.isEnabled && e.result.valid) {
            // Get the intl-tel-input instance
            var intlTelInstance = this.getIntTelInstance(field);
            // Get the phone number including the country code
            // See https://github.com/jackocnr/intl-tel-input#public-methods
            var phoneNumber = intlTelInstance.getNumber();
            // Set the value for the hidden field
            hiddenInputEle.value = phoneNumber;
        }
        else {
            hiddenInputEle.value = '';
        }
    };
    InternationalTelephoneInput.INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator';
    return InternationalTelephoneInput;
}(Plugin));

export { InternationalTelephoneInput };
