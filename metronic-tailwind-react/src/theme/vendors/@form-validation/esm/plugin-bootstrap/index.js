import { utils } from '../core/index.js';
import { Framework } from '../plugin-framework/index.js';

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
var classSet = utils.classSet, hasClass = utils.hasClass;
var Bootstrap = /** @class */ (function (_super) {
    __extends(Bootstrap, _super);
    // See https://getbootstrap.com/docs/4.1/components/forms/#custom-styles
    function Bootstrap(opts) {
        return _super.call(this, Object.assign({}, {
            eleInvalidClass: 'is-invalid',
            eleValidClass: 'is-valid',
            formClass: 'fv-plugins-bootstrap',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'has-danger',
            rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts)) || this;
    }
    Bootstrap.prototype.onIconPlaced = function (e) {
        // Adjust icon place if the field belongs to a `input-group`
        var parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var grandParent = parent.parentElement;
            // Place it after the container of checkbox/radio
            if (hasClass(parent, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
            else if (hasClass(parent.parentElement, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
            }
        }
    };
    return Bootstrap;
}(Framework));

export { Bootstrap };
