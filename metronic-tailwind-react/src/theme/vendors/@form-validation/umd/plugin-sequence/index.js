(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Sequence = factory(global.FormValidation)));
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
    var removeUndefined = core.utils.removeUndefined;
    /**
     * ```
     *  new Core(form, { ... })
     *      .registerPlugin('sequence', new Sequence({
     *          enabled: false // Default value is `true`
     *      }));
     * ```
     *
     * The `enabled` option can be:
     * - `true` (default): When a field has multiple validators, all of them will be checked respectively.
     * If errors occur in multiple validators, all of them will be displayed to the user
     * - `false`: When a field has multiple validators, validation for this field will be terminated upon the
     * first encountered error.
     * Thus, only the very first error message related to this field will be displayed to the user
     *
     * User can set the `enabled` option to all fields as sample code above, or apply it for specific fields as following:
     * ```
     *  new Core(form, { ... })
     *      .registerPlugin('sequence', new Sequence({
     *          enabled: {
     *              fullName: true, // It's not necessary since the default value is `true`
     *              username: false,
     *              email: false
     *          }
     *      }));
     * ```
     */
    var Sequence = /** @class */ (function (_super) {
        __extends(Sequence, _super);
        function Sequence(opts) {
            var _this = _super.call(this, opts) || this;
            _this.invalidFields = new Map();
            _this.opts = Object.assign({}, { enabled: true }, removeUndefined(opts));
            _this.validatorHandler = _this.onValidatorValidated.bind(_this);
            _this.shouldValidateFilter = _this.shouldValidate.bind(_this);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            return _this;
        }
        Sequence.prototype.install = function () {
            this.core
                .on('core.validator.validated', this.validatorHandler)
                .on('core.field.added', this.fieldAddedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('core.element.validating', this.elementValidatingHandler)
                .registerFilter('field-should-validate', this.shouldValidateFilter);
        };
        Sequence.prototype.uninstall = function () {
            this.invalidFields.clear();
            this.core
                .off('core.validator.validated', this.validatorHandler)
                .off('core.field.added', this.fieldAddedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('core.element.validating', this.elementValidatingHandler)
                .deregisterFilter('field-should-validate', this.shouldValidateFilter);
        };
        Sequence.prototype.shouldValidate = function (field, element, _value, validator) {
            if (!this.isEnabled) {
                return true;
            }
            // Stop validating
            // if the `enabled` option is set to `false`
            // and there's at least one validator that field doesn't pass
            var stop = (this.opts.enabled === true || this.opts.enabled[field] === true) &&
                this.invalidFields.has(element) &&
                !!this.invalidFields.get(element).length &&
                this.invalidFields.get(element).indexOf(validator) === -1;
            return !stop;
        };
        Sequence.prototype.onValidatorValidated = function (e) {
            var validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
            var index = validators.indexOf(e.validator);
            if (e.result.valid && index >= 0) {
                validators.splice(index, 1);
            }
            else if (!e.result.valid && index === -1) {
                validators.push(e.validator);
            }
            this.invalidFields.set(e.element, validators);
        };
        Sequence.prototype.onFieldAdded = function (e) {
            // Remove the field element from set of invalid elements
            if (e.elements) {
                this.clearInvalidFields(e.elements);
            }
        };
        Sequence.prototype.onElementNotValidated = function (e) {
            this.clearInvalidFields(e.elements);
        };
        Sequence.prototype.onElementValidating = function (e) {
            this.clearInvalidFields(e.elements);
        };
        Sequence.prototype.clearInvalidFields = function (elements) {
            var _this = this;
            elements.forEach(function (ele) { return _this.invalidFields.delete(ele); });
        };
        return Sequence;
    }(core.Plugin));

    return Sequence;

}));
