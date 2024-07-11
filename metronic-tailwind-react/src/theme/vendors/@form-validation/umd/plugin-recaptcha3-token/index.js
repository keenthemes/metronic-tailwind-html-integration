(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Recaptcha3Token = factory(global.FormValidation)));
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
    var Recaptcha3Token = /** @class */ (function (_super) {
        __extends(Recaptcha3Token, _super);
        function Recaptcha3Token(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, {
                action: 'submit',
                hiddenTokenName: '___hidden-token___',
            }, opts);
            _this.onValidHandler = _this.onFormValid.bind(_this);
            return _this;
        }
        Recaptcha3Token.prototype.install = function () {
            this.core.on('core.form.valid', this.onValidHandler);
            // Add a hidden field to the form
            this.hiddenTokenEle = document.createElement('input');
            this.hiddenTokenEle.setAttribute('type', 'hidden');
            this.core.getFormElement().appendChild(this.hiddenTokenEle);
            var loadPrevCaptcha = typeof window[Recaptcha3Token.LOADED_CALLBACK] === 'undefined'
                ? function () { }
                : window[Recaptcha3Token.LOADED_CALLBACK];
            window[Recaptcha3Token.LOADED_CALLBACK] = function () {
                // Call the previous loaded function
                // to support multiple recaptchas on the same page
                loadPrevCaptcha();
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
        Recaptcha3Token.prototype.uninstall = function () {
            delete window[Recaptcha3Token.LOADED_CALLBACK];
            this.core.off('core.form.valid', this.onValidHandler);
            // Remove script
            var src = this.getScript();
            var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"".concat(src, "\"]")));
            scripts.forEach(function (s) { return s.parentNode.removeChild(s); });
            // Remove hidden field from the form element
            this.core.getFormElement().removeChild(this.hiddenTokenEle);
        };
        Recaptcha3Token.prototype.onFormValid = function () {
            var _this = this;
            if (!this.isEnabled) {
                return;
            }
            // Send recaptcha request
            window['grecaptcha'].execute(this.opts.siteKey, { action: this.opts.action }).then(function (token) {
                _this.hiddenTokenEle.setAttribute('name', _this.opts.hiddenTokenName);
                _this.hiddenTokenEle.value = token;
                // Submit the form
                var form = _this.core.getFormElement();
                if (form instanceof HTMLFormElement) {
                    form.submit();
                }
            });
        };
        Recaptcha3Token.prototype.getScript = function () {
            var lang = this.opts.language ? "&hl=".concat(this.opts.language) : '';
            return ('https://www.google.com/recaptcha/api.js?' +
                "onload=".concat(Recaptcha3Token.LOADED_CALLBACK, "&render=").concat(this.opts.siteKey).concat(lang));
        };
        // The name of callback that will be executed after reCaptcha script is loaded
        Recaptcha3Token.LOADED_CALLBACK = '___reCaptcha3TokenLoaded___';
        return Recaptcha3Token;
    }(core.Plugin));

    return Recaptcha3Token;

}));
