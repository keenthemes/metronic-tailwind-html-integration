import { utils, Plugin } from '../core/index.js';

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
var classSet = utils.classSet;
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message(opts) {
        var _this = _super.call(this, opts) || this;
        _this.useDefaultContainer = false;
        // Map the field element to message container
        _this.messages = new Map();
        // By default, we will display error messages at the bottom of form
        _this.defaultContainer = document.createElement('div');
        _this.useDefaultContainer = !opts || !opts.container;
        _this.opts = Object.assign({}, {
            container: function (_field, _element) { return _this.defaultContainer; },
        }, opts);
        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
        _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
        _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_this);
        return _this;
    }
    /**
     * Determine the closest element that its class matches with given pattern.
     * In popular cases, all the fields might follow the same markup, so that closest element
     * can be used as message container.
     *
     * For example, if we use the Bootstrap framework then the field often be placed inside a
     * `col-{size}-{numberOfColumns}` class, we can register the plugin as following:
     * ```
     *  formValidation(form, {
     *      plugins: {
     *          message: new Message({
     *              container: function(field, element) {
     *                  return Message.getClosestContainer(element, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/)
     *              }
     *          })
     *      }
     *  })
     * ```
     *
     * @param element The field element
     * @param upper The upper element, so we don't have to look for the entire page
     * @param pattern The pattern
     * @return {HTMLElement}
     */
    Message.getClosestContainer = function (element, upper, pattern) {
        var ele = element;
        while (ele) {
            if (ele === upper) {
                break;
            }
            ele = ele.parentElement;
            if (pattern.test(ele.className)) {
                break;
            }
        }
        return ele;
    };
    Message.prototype.install = function () {
        if (this.useDefaultContainer) {
            this.core.getFormElement().appendChild(this.defaultContainer);
        }
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler)
            .on('core.validator.validated', this.validatorValidatedHandler)
            .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };
    Message.prototype.uninstall = function () {
        if (this.useDefaultContainer) {
            this.core.getFormElement().removeChild(this.defaultContainer);
        }
        this.messages.forEach(function (message) { return message.parentNode.removeChild(message); });
        this.messages.clear();
        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler)
            .off('core.validator.validated', this.validatorValidatedHandler)
            .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
    };
    Message.prototype.onEnabled = function () {
        this.messages.forEach(function (_element, message, _map) {
            classSet(message, {
                'fv-plugins-message-container--enabled': true,
                'fv-plugins-message-container--disabled': false,
            });
        });
    };
    Message.prototype.onDisabled = function () {
        this.messages.forEach(function (_element, message, _map) {
            classSet(message, {
                'fv-plugins-message-container--enabled': false,
                'fv-plugins-message-container--disabled': true,
            });
        });
    };
    // Prepare message container for new added field
    Message.prototype.onFieldAdded = function (e) {
        var _this = this;
        var elements = e.elements;
        if (elements) {
            elements.forEach(function (ele) {
                var msg = _this.messages.get(ele);
                if (msg) {
                    msg.parentNode.removeChild(msg);
                    _this.messages.delete(ele);
                }
            });
            this.prepareFieldContainer(e.field, elements);
        }
    };
    // When a field is removed, we remove all error messages that associates with the field
    Message.prototype.onFieldRemoved = function (e) {
        var _this = this;
        if (!e.elements.length || !e.field) {
            return;
        }
        var type = e.elements[0].getAttribute('type');
        var elements = 'radio' === type || 'checkbox' === type ? [e.elements[0]] : e.elements;
        elements.forEach(function (ele) {
            if (_this.messages.has(ele)) {
                var container = _this.messages.get(ele);
                container.parentNode.removeChild(container);
                _this.messages.delete(ele);
            }
        });
    };
    Message.prototype.prepareFieldContainer = function (field, elements) {
        var _this = this;
        if (elements.length) {
            var type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0], elements);
            }
            else {
                elements.forEach(function (ele) { return _this.prepareElementContainer(field, ele, elements); });
            }
        }
    };
    Message.prototype.prepareElementContainer = function (field, element, elements) {
        var container;
        if ('string' === typeof this.opts.container) {
            var selector = '#' === this.opts.container.charAt(0)
                ? "[id=\"".concat(this.opts.container.substring(1), "\"]")
                : this.opts.container;
            container = this.core.getFormElement().querySelector(selector);
        }
        else {
            container = this.opts.container(field, element);
        }
        var message = document.createElement('div');
        container.appendChild(message);
        classSet(message, {
            'fv-plugins-message-container': true,
            'fv-plugins-message-container--enabled': this.isEnabled,
            'fv-plugins-message-container--disabled': !this.isEnabled,
        });
        this.core.emit('plugins.message.placed', {
            element: element,
            elements: elements,
            field: field,
            messageElement: message,
        });
        this.messages.set(element, message);
    };
    Message.prototype.getMessage = function (result) {
        return typeof result.message === 'string' ? result.message : result.message[this.core.getLocale()];
    };
    Message.prototype.onValidatorValidated = function (e) {
        var _a;
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var element = ('radio' === type || 'checkbox' === type) && elements.length > 0 ? elements[0] : e.element;
        if (this.messages.has(element)) {
            var container = this.messages.get(element);
            var messageEle = container.querySelector("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"][data-validator=\"").concat(e.validator.replace(/"/g, '\\"'), "\"]"));
            if (!messageEle && !e.result.valid) {
                var ele = document.createElement('div');
                ele.innerHTML = this.getMessage(e.result);
                ele.setAttribute('data-field', e.field);
                ele.setAttribute('data-validator', e.validator);
                if (this.opts.clazz) {
                    classSet(ele, (_a = {},
                        _a[this.opts.clazz] = true,
                        _a));
                }
                container.appendChild(ele);
                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: ele,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            }
            else if (messageEle && !e.result.valid) {
                // The validator returns new message
                messageEle.innerHTML = this.getMessage(e.result);
                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: messageEle,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            }
            else if (messageEle && e.result.valid) {
                // Field is valid
                container.removeChild(messageEle);
            }
        }
    };
    Message.prototype.onValidatorNotValidated = function (e) {
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        if (this.messages.has(element)) {
            var container = this.messages.get(element);
            var messageEle = container.querySelector("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"][data-validator=\"").concat(e.validator.replace(/"/g, '\\"'), "\"]"));
            if (messageEle) {
                container.removeChild(messageEle);
            }
        }
    };
    Message.prototype.onElementIgnored = function (e) {
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        if (this.messages.has(element)) {
            var container_1 = this.messages.get(element);
            var messageElements = [].slice.call(container_1.querySelectorAll("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"]")));
            messageElements.forEach(function (messageEle) {
                container_1.removeChild(messageEle);
            });
        }
    };
    return Message;
}(Plugin));

export { Message };
