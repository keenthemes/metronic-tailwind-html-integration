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
var fetch = core.utils.fetch, removeUndefined = core.utils.removeUndefined;
var Turnstile = /** @class */ (function (_super) {
    __extends(Turnstile, _super);
    function Turnstile(opts) {
        var _this = _super.call(this, opts) || this;
        _this.widgetIds = new Map();
        _this.captchaStatus = 'NotValidated';
        _this.captchaContainer = '';
        _this.opts = Object.assign({}, Turnstile.DEFAULT_OPTIONS, removeUndefined(opts));
        _this.fieldResetHandler = _this.onResetField.bind(_this);
        _this.preValidateFilter = _this.preValidate.bind(_this);
        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
        // Turnstile accepts ID selector or a given element
        _this.captchaContainer = _this.opts.element.startsWith('#') ? _this.opts.element : "#".concat(_this.opts.element);
        return _this;
    }
    Turnstile.prototype.install = function () {
        var _this = this;
        this.core
            .on('core.field.reset', this.fieldResetHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .registerFilter('validate-pre', this.preValidateFilter);
        var loadPrevCaptcha = typeof window[Turnstile.LOADED_CALLBACK] === 'undefined' ? function () { } : window[Turnstile.LOADED_CALLBACK];
        window[Turnstile.LOADED_CALLBACK] = function () {
            // Call the previous loaded function
            // to support multiple recaptchas on the same page
            loadPrevCaptcha();
            var widgetId = _this.getTurnstileInstance().render(_this.captchaContainer, _this.buildTurnstileRenderOptions());
            _this.widgetIds.set(_this.captchaContainer, widgetId);
            _this.core.addField(Turnstile.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: _this.opts.message,
                        promise: function (input) {
                            var _a;
                            var value = _this.widgetIds.has(_this.captchaContainer)
                                ? _this.getTurnstileInstance().getResponse(_this.widgetIds.get(_this.captchaContainer))
                                : input.value;
                            if (value === '') {
                                _this.captchaStatus = 'Invalid';
                                return Promise.resolve({
                                    valid: false,
                                });
                            }
                            if (_this.opts.backendVerificationUrl === '') {
                                _this.captchaStatus = 'Valid';
                                return Promise.resolve({
                                    valid: true,
                                });
                            }
                            if (_this.captchaStatus === 'Valid') {
                                // Do not need to send the back-end verification request if the captcha is already valid
                                return Promise.resolve({
                                    valid: true,
                                });
                            }
                            return fetch(_this.opts.backendVerificationUrl, {
                                method: 'POST',
                                params: (_a = {},
                                    _a[Turnstile.CAPTCHA_FIELD] = value,
                                    _a),
                            })
                                .then(function (response) {
                                var isValid = "".concat(response['success']) === 'true';
                                _this.captchaStatus = isValid ? 'Valid' : 'Invalid';
                                return Promise.resolve({
                                    meta: response,
                                    valid: isValid,
                                });
                            })
                                .catch(function (_reason) {
                                _this.captchaStatus = 'NotValidated';
                                return Promise.reject({
                                    valid: false,
                                });
                            });
                        },
                    },
                },
            });
        };
        var src = this.getScript();
        if (!document.body.querySelector("script[src=\"".concat(src, "\"]"))) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    };
    Turnstile.prototype.uninstall = function () {
        var _this = this;
        delete window[Turnstile.LOADED_CALLBACK];
        this.core
            .off('core.field.reset', this.fieldResetHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .deregisterFilter('validate-pre', this.preValidateFilter);
        this.widgetIds.forEach(function (_element, widgetId, _map) {
            _this.getTurnstileInstance().remove(widgetId);
        });
        this.widgetIds.clear();
        // Remove script
        var src = this.getScript();
        var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"".concat(src, "\"]")));
        scripts.forEach(function (s) { return s.parentNode.removeChild(s); });
        this.core.removeField(Turnstile.CAPTCHA_FIELD);
    };
    Turnstile.prototype.onEnabled = function () {
        this.core.enableValidator(Turnstile.CAPTCHA_FIELD, 'promise');
    };
    Turnstile.prototype.onDisabled = function () {
        this.core.disableValidator(Turnstile.CAPTCHA_FIELD, 'promise');
    };
    Turnstile.prototype.buildTurnstileRenderOptions = function () {
        var _this = this;
        return {
            callback: function () {
                if (_this.opts.backendVerificationUrl === '') {
                    _this.captchaStatus = 'Valid';
                    // Mark the captcha as valid, so the library will remove the error message
                    _this.core.updateFieldStatus(Turnstile.CAPTCHA_FIELD, 'Valid');
                }
            },
            'error-callback': function () {
                _this.captchaStatus = 'Invalid';
                _this.core.updateFieldStatus(Turnstile.CAPTCHA_FIELD, 'Invalid');
            },
            'expired-callback': function () {
                // Update the captcha status when session expires
                _this.captchaStatus = 'NotValidated';
                _this.core.updateFieldStatus(Turnstile.CAPTCHA_FIELD, 'NotValidated');
            },
            sitekey: this.opts.siteKey,
            // Optional parameters
            action: this.opts.action,
            appearance: this.opts.appearance,
            cData: this.opts.cData,
            language: this.opts.language,
            size: this.opts.size,
            'refresh-expired': this.opts.refreshExpired,
            retry: this.opts.retry,
            'retry-interval': this.opts.retryInterval,
            tabindex: this.opts.tabIndex,
            theme: this.opts.theme,
        };
    };
    Turnstile.prototype.getTurnstileInstance = function () {
        return window['turnstile'];
    };
    Turnstile.prototype.getScript = function () {
        return "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=".concat(Turnstile.LOADED_CALLBACK, "&render=explicit");
    };
    Turnstile.prototype.preValidate = function () {
        // In the `execute` mode, we have to call the `execute()` function to challenge visitors
        if (this.isEnabled &&
            this.opts.appearance === 'execute' &&
            this.widgetIds.has(this.captchaContainer) &&
            this.captchaStatus !== 'Valid') {
            this.getTurnstileInstance().execute(this.captchaContainer, this.buildTurnstileRenderOptions());
        }
        return Promise.resolve();
    };
    Turnstile.prototype.onResetField = function (e) {
        if (e.field === Turnstile.CAPTCHA_FIELD && this.widgetIds.has(this.captchaContainer)) {
            var widgetId = this.widgetIds.get(this.captchaContainer);
            this.getTurnstileInstance().reset(widgetId);
        }
    };
    Turnstile.prototype.onIconPlaced = function (e) {
        if (e.field === Turnstile.CAPTCHA_FIELD) {
            if (this.opts.appearance === 'execute') {
                e.iconElement.style.display = 'none';
            }
            else {
                var captchaContainer = document.getElementById(this.captchaContainer);
                // We need to move the icon element to after the captcha container
                // Otherwise, the icon will be removed when the captcha is re-rendered (after it's expired)
                if (captchaContainer) {
                    captchaContainer.parentNode.insertBefore(e.iconElement, captchaContainer.nextSibling);
                }
            }
        }
    };
    // The captcha field name, generated by Turnstile
    Turnstile.CAPTCHA_FIELD = 'cf-turnstile-response';
    Turnstile.DEFAULT_OPTIONS = {
        backendVerificationUrl: '',
        appearance: 'always',
        language: 'auto',
        refreshExpired: 'auto',
        retry: 'auto',
        size: 'normal',
        tabIndex: 0,
        theme: 'auto',
    };
    // The name of callback that will be executed after Turnstile script is loaded
    Turnstile.LOADED_CALLBACK = '___turnstileLoaded___';
    return Turnstile;
}(core.Plugin));

exports.Turnstile = Turnstile;
