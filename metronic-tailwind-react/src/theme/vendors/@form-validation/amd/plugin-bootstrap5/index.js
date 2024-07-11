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
    var classSet = core.utils.classSet, hasClass = core.utils.hasClass;
    var Bootstrap5 = /** @class */ (function (_super) {
        __extends(Bootstrap5, _super);
        function Bootstrap5(opts) {
            var _this = _super.call(this, Object.assign({}, {
                eleInvalidClass: 'is-invalid',
                eleValidClass: 'is-valid',
                formClass: 'fv-plugins-bootstrap5',
                rowInvalidClass: 'fv-plugins-bootstrap5-row-invalid',
                rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
                rowSelector: '.row',
                rowValidClass: 'fv-plugins-bootstrap5-row-valid',
            }, opts)) || this;
            _this.eleValidatedHandler = _this.handleElementValidated.bind(_this);
            return _this;
        }
        Bootstrap5.prototype.install = function () {
            _super.prototype.install.call(this);
            this.core.on('core.element.validated', this.eleValidatedHandler);
        };
        Bootstrap5.prototype.uninstall = function () {
            _super.prototype.uninstall.call(this);
            this.core.off('core.element.validated', this.eleValidatedHandler);
        };
        Bootstrap5.prototype.handleElementValidated = function (e) {
            var type = e.element.getAttribute('type');
            // If we use more than 1 inline checkbox/radio, we need to add `is-invalid` for the `form-check` container
            // so the error messages are displayed properly.
            // The markup looks like as following:
            //  <div class="form-check form-check-inline is-invalid">
            //      <input type="checkbox" class="form-check-input is-invalid" />
            //      <label class="form-check-label">...</label>
            //  <div>
            //  <!-- Other inline checkboxes/radios go here -->
            //  <!-- Then message element -->
            //  <div class="fv-plugins-message-container invalid-feedback">...</div>
            if (('checkbox' === type || 'radio' === type) &&
                e.elements.length > 1 &&
                hasClass(e.element, 'form-check-input')) {
                var inputParent = e.element.parentElement;
                if (hasClass(inputParent, 'form-check') && hasClass(inputParent, 'form-check-inline')) {
                    classSet(inputParent, {
                        'is-invalid': !e.valid,
                        'is-valid': e.valid,
                    });
                }
            }
        };
        Bootstrap5.prototype.onIconPlaced = function (e) {
            // Disable the default icon of Bootstrap 5
            classSet(e.element, {
                'fv-plugins-icon-input': true,
            });
            // Adjust icon place if the field belongs to a `input-group`
            var parent = e.element.parentElement;
            if (hasClass(parent, 'input-group')) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                if (e.element.nextElementSibling && hasClass(e.element.nextElementSibling, 'input-group-text')) {
                    classSet(e.iconElement, {
                        'fv-plugins-icon-input-group': true,
                    });
                }
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
        Bootstrap5.prototype.onMessagePlaced = function (e) {
            e.messageElement.classList.add('invalid-feedback');
            // Check if the input is placed inside an `input-group` element
            var inputParent = e.element.parentElement;
            if (hasClass(inputParent, 'input-group')) {
                // The markup looks like
                //  <div class="input-group">
                //      <span class="input-group-text">...</span>
                //      <input type="text" class="form-control" />
                //      <!-- We will place the error message here, at the end of parent -->
                //  </div>
                inputParent.appendChild(e.messageElement);
                // Keep the border radius of the right corners
                classSet(inputParent, {
                    'has-validation': true,
                });
                return;
            }
            var type = e.element.getAttribute('type');
            if (('checkbox' === type || 'radio' === type) &&
                hasClass(e.element, 'form-check-input') &&
                !hasClass(inputParent, 'form-check') &&
                !hasClass(inputParent, 'form-check-inline')) {
                // Place the message inside the `form-check` container of the last checkbox/radio
                e.elements[e.elements.length - 1].parentElement.appendChild(e.messageElement);
            }
        };
        return Bootstrap5;
    }(pluginFramework.Framework));

    exports.Bootstrap5 = Bootstrap5;

}));
