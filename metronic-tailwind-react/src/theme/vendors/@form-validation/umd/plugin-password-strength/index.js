(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.PasswordStrength = factory(global.FormValidation)));
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
    var PasswordStrength = /** @class */ (function (_super) {
        __extends(PasswordStrength, _super);
        function PasswordStrength(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, {
                minimalScore: 3,
                onValidated: function () { },
            }, opts);
            _this.validatePassword = _this.checkPasswordStrength.bind(_this);
            _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
            return _this;
        }
        PasswordStrength.prototype.install = function () {
            var _a;
            this.core.registerValidator(PasswordStrength.PASSWORD_STRENGTH_VALIDATOR, this.validatePassword);
            this.core.on('core.validator.validated', this.validatorValidatedHandler);
            this.core.addField(this.opts.field, {
                validators: (_a = {},
                    _a[PasswordStrength.PASSWORD_STRENGTH_VALIDATOR] = {
                        message: this.opts.message,
                        minimalScore: this.opts.minimalScore,
                    },
                    _a),
            });
        };
        PasswordStrength.prototype.uninstall = function () {
            this.core.off('core.validator.validated', this.validatorValidatedHandler);
            // It's better if we can remove validator
            this.core.disableValidator(this.opts.field, PasswordStrength.PASSWORD_STRENGTH_VALIDATOR);
        };
        PasswordStrength.prototype.onEnabled = function () {
            this.core.enableValidator(this.opts.field, PasswordStrength.PASSWORD_STRENGTH_VALIDATOR);
        };
        PasswordStrength.prototype.onDisabled = function () {
            this.core.disableValidator(this.opts.field, PasswordStrength.PASSWORD_STRENGTH_VALIDATOR);
        };
        PasswordStrength.prototype.checkPasswordStrength = function () {
            var _this = this;
            return {
                validate: function (input) {
                    var value = input.value;
                    if (value === '') {
                        return {
                            valid: true,
                        };
                    }
                    var result = zxcvbn(value);
                    var score = result.score;
                    var message = result.feedback.warning || 'The password is weak';
                    if (score < _this.opts.minimalScore) {
                        return {
                            message: message,
                            meta: {
                                message: message,
                                score: score,
                            },
                            valid: false,
                        };
                    }
                    else {
                        return {
                            meta: {
                                message: message,
                                score: score,
                            },
                            valid: true,
                        };
                    }
                },
            };
        };
        PasswordStrength.prototype.onValidatorValidated = function (e) {
            if (this.isEnabled &&
                e.field === this.opts.field &&
                e.validator === PasswordStrength.PASSWORD_STRENGTH_VALIDATOR &&
                e.result.meta) {
                var message = e.result.meta['message'];
                var score = e.result.meta['score'];
                this.opts.onValidated(e.result.valid, message, score);
            }
        };
        PasswordStrength.PASSWORD_STRENGTH_VALIDATOR = '___PasswordStrengthValidator';
        return PasswordStrength;
    }(core.Plugin));

    return PasswordStrength;

}));
