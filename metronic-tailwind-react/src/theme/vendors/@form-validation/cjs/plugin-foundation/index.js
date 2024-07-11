'use strict';

var pluginFramework = require('@form-validation/plugin-framework');

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
var Foundation = /** @class */ (function (_super) {
    __extends(Foundation, _super);
    function Foundation(opts) {
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-foundation',
            // See http://foundation.zurb.com/sites/docs/abide.html#form-errors
            messageClass: 'form-error',
            rowInvalidClass: 'fv-row__error',
            rowPattern: /^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,
            rowSelector: '.grid-x',
            rowValidClass: 'fv-row__success',
        }, opts)) || this;
    }
    Foundation.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var nextEle = e.iconElement.nextSibling;
            if ('LABEL' === nextEle.nodeName) {
                nextEle.parentNode.insertBefore(e.iconElement, nextEle.nextSibling);
            }
            else if ('#text' === nextEle.nodeName) {
                // There's space between the input and label tags as
                // <input type="checkbox" id="agreeCheckbox" />
                // <label for="agreeCheckbox">Agree with the terms and conditions</label>
                var next = nextEle.nextSibling;
                if (next && 'LABEL' === next.nodeName) {
                    next.parentNode.insertBefore(e.iconElement, next.nextSibling);
                }
            }
        }
    };
    return Foundation;
}(pluginFramework.Framework));

exports.Foundation = Foundation;
