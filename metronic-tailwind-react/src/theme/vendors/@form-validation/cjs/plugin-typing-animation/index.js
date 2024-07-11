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
var TypingAnimation = /** @class */ (function (_super) {
    __extends(TypingAnimation, _super);
    function TypingAnimation(opts) {
        var _this = _super.call(this, opts) || this;
        _this.opts = Object.assign({}, {
            autoPlay: true,
        }, opts);
        return _this;
    }
    TypingAnimation.prototype.install = function () {
        this.fields = Object.keys(this.core.getFields());
        if (this.opts.autoPlay) {
            this.play();
        }
    };
    TypingAnimation.prototype.play = function () {
        return this.animate(0);
    };
    TypingAnimation.prototype.animate = function (fieldIndex) {
        var _this = this;
        if (fieldIndex >= this.fields.length) {
            return Promise.resolve(fieldIndex);
        }
        var field = this.fields[fieldIndex];
        var ele = this.core.getElements(field)[0];
        var inputType = ele.getAttribute('type');
        var samples = this.opts.data[field];
        if ('checkbox' === inputType || 'radio' === inputType) {
            ele.checked = true;
            ele.setAttribute('checked', 'true');
            return this.core.revalidateField(field).then(function (_status) {
                return _this.animate(fieldIndex + 1);
            });
        }
        else if (!samples) {
            return this.animate(fieldIndex + 1);
        }
        else {
            return new Promise(function (resolve) {
                return new Typed(ele, {
                    attr: 'value',
                    autoInsertCss: true,
                    bindInputFocusEvents: true,
                    onComplete: function () {
                        resolve(fieldIndex + 1);
                    },
                    onStringTyped: function (arrayPos, _self) {
                        ele.value = samples[arrayPos];
                        _this.core.revalidateField(field);
                    },
                    strings: samples,
                    typeSpeed: 100,
                });
            }).then(function (nextFieldIndex) {
                return _this.animate(nextFieldIndex);
            });
        }
    };
    return TypingAnimation;
}(core.Plugin));

exports.TypingAnimation = TypingAnimation;
