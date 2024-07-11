(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Alias = factory(global.FormValidation)));
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
    /**
     * This plugin allows to use multiple instances of the same validator by defining alias.
     * ```
     *  formValidation(form, {
     *      fields: {
     *          email: {
     *              validators: {
     *                  required: ...,
     *                  pattern: ...,
     *                  regexp: ...
     *              }
     *          }
     *      },
     *      plugins: {
     *          alias: new Alias({
     *              required: 'notEmpty',
     *              pattern: 'regexp'
     *          })
     *      }
     *  })
     * ```
     * Then, you can use the `required`, `pattern` as the same as `notEmpty`, `regexp` validators.
     */
    var Alias = /** @class */ (function (_super) {
        __extends(Alias, _super);
        function Alias(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = opts || {};
            _this.validatorNameFilter = _this.getValidatorName.bind(_this);
            return _this;
        }
        Alias.prototype.install = function () {
            this.core.registerFilter('validator-name', this.validatorNameFilter);
        };
        Alias.prototype.uninstall = function () {
            this.core.deregisterFilter('validator-name', this.validatorNameFilter);
        };
        Alias.prototype.getValidatorName = function (validatorName, _field) {
            return this.isEnabled ? this.opts[validatorName] || validatorName : validatorName;
        };
        return Alias;
    }(core.Plugin));

    return Alias;

}));
