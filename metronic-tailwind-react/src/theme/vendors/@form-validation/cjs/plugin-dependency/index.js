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
var Dependency = /** @class */ (function (_super) {
    __extends(Dependency, _super);
    function Dependency(opts) {
        var _this = _super.call(this, opts) || this;
        _this.opts = opts || {};
        _this.triggerExecutedHandler = _this.onTriggerExecuted.bind(_this);
        return _this;
    }
    Dependency.prototype.install = function () {
        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    };
    Dependency.prototype.uninstall = function () {
        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    };
    Dependency.prototype.onTriggerExecuted = function (e) {
        if (this.isEnabled && this.opts[e.field]) {
            var dependencies = this.opts[e.field].split(' ');
            for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
                var d = dependencies_1[_i];
                var dependentField = d.trim();
                if (this.opts[dependentField]) {
                    // Revalidate the dependent field
                    this.core.revalidateField(dependentField);
                }
            }
        }
    };
    return Dependency;
}(core.Plugin));

exports.Dependency = Dependency;
