define(['exports', '@form-validation/core', '@form-validation/plugin-framework'], (function (exports, core, pluginFramework) { 'use strict';

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
    var classSet = core.utils.classSet;
    // Support Milligram framework (https://milligram.io/)
    var Milligram = /** @class */ (function (_super) {
        __extends(Milligram, _super);
        function Milligram(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-milligram',
                messageClass: 'fv-help-block',
                rowInvalidClass: 'fv-invalid-row',
                rowPattern: /^(.*)column(-offset)*-[0-9]+(.*)$/,
                rowSelector: '.row',
                rowValidClass: 'fv-valid-row',
            }, opts)) || this;
        }
        Milligram.prototype.onIconPlaced = function (e) {
            var type = e.element.getAttribute('type');
            var parent = e.element.parentElement;
            if ('checkbox' === type || 'radio' === type) {
                // Place it after the container of checkbox/radio
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
            }
        };
        return Milligram;
    }(pluginFramework.Framework));

    exports.Milligram = Milligram;

}));
