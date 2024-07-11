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
    var StartEndDate = /** @class */ (function (_super) {
        __extends(StartEndDate, _super);
        function StartEndDate(opts) {
            var _this = _super.call(this, opts) || this;
            _this.fieldValidHandler = _this.onFieldValid.bind(_this);
            _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
            return _this;
        }
        StartEndDate.prototype.install = function () {
            var _this = this;
            // Backup the original options
            var fieldOptions = this.core.getFields();
            this.startDateFieldOptions = fieldOptions[this.opts.startDate.field];
            this.endDateFieldOptions = fieldOptions[this.opts.endDate.field];
            var form = this.core.getFormElement();
            this.core
                .on('core.field.valid', this.fieldValidHandler)
                .on('core.field.invalid', this.fieldInvalidHandler)
                .addField(this.opts.startDate.field, {
                validators: {
                    date: {
                        format: this.opts.format,
                        max: function () {
                            var endDateField = form.querySelector("[name=\"".concat(_this.opts.endDate.field, "\"]"));
                            return endDateField.value;
                        },
                        message: this.opts.startDate.message,
                    },
                },
            })
                .addField(this.opts.endDate.field, {
                validators: {
                    date: {
                        format: this.opts.format,
                        message: this.opts.endDate.message,
                        min: function () {
                            var startDateField = form.querySelector("[name=\"".concat(_this.opts.startDate.field, "\"]"));
                            return startDateField.value;
                        },
                    },
                },
            });
        };
        StartEndDate.prototype.uninstall = function () {
            this.core.removeField(this.opts.startDate.field);
            if (this.startDateFieldOptions) {
                this.core.addField(this.opts.startDate.field, this.startDateFieldOptions);
            }
            this.core.removeField(this.opts.endDate.field);
            if (this.endDateFieldOptions) {
                this.core.addField(this.opts.endDate.field, this.endDateFieldOptions);
            }
            this.core.off('core.field.valid', this.fieldValidHandler).off('core.field.invalid', this.fieldInvalidHandler);
        };
        StartEndDate.prototype.onEnabled = function () {
            this.core.enableValidator(this.opts.startDate.field, 'date').enableValidator(this.opts.endDate.field, 'date');
        };
        StartEndDate.prototype.onDisabled = function () {
            this.core.disableValidator(this.opts.startDate.field, 'date').disableValidator(this.opts.endDate.field, 'date');
        };
        StartEndDate.prototype.onFieldInvalid = function (field) {
            switch (field) {
                case this.opts.startDate.field:
                    this.startDateValid = false;
                    break;
                case this.opts.endDate.field:
                    this.endDateValid = false;
                    break;
            }
        };
        StartEndDate.prototype.onFieldValid = function (field) {
            switch (field) {
                case this.opts.startDate.field:
                    this.startDateValid = true;
                    if (this.isEnabled && this.endDateValid === false) {
                        this.core.revalidateField(this.opts.endDate.field);
                    }
                    break;
                case this.opts.endDate.field:
                    this.endDateValid = true;
                    if (this.isEnabled && this.startDateValid === false) {
                        this.core.revalidateField(this.opts.startDate.field);
                    }
                    break;
            }
        };
        return StartEndDate;
    }(core.Plugin));

    exports.StartEndDate = StartEndDate;

}));
