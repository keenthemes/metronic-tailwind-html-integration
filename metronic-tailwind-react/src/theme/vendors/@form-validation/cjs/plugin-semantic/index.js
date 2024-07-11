'use strict';

var core = require('@form-validation/core');
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
var classSet = core.utils.classSet, hasClass = core.utils.hasClass;
var Semantic = /** @class */ (function (_super) {
    __extends(Semantic, _super);
    function Semantic(opts) {
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-semantic',
            // See https://semantic-ui.com/elements/label.html#pointing
            messageClass: 'ui pointing red label',
            rowInvalidClass: 'error',
            rowPattern: /^.*(field|column).*$/,
            rowSelector: '.fields',
            rowValidClass: 'fv-has-success',
        }, opts)) || this;
    }
    Semantic.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var parent_1 = e.element.parentElement;
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
        }
    };
    Semantic.prototype.onMessagePlaced = function (e) {
        var type = e.element.getAttribute('type');
        var numElements = e.elements.length;
        if (('checkbox' === type || 'radio' === type) && numElements > 1) {
            // Put the message at the end when there are multiple checkboxes/radios
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //  </div>
            //  ...
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //      <-- The error message will be placed here -->
            //  </div>
            // Get the last checkbox
            var last = e.elements[numElements - 1];
            var parent_2 = last.parentElement;
            if (hasClass(parent_2, type) && hasClass(parent_2, 'ui')) {
                parent_2.parentElement.insertBefore(e.messageElement, parent_2.nextSibling);
            }
        }
    };
    return Semantic;
}(pluginFramework.Framework));

exports.Semantic = Semantic;
