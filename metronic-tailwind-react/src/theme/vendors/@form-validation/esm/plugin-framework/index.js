import { utils, Plugin } from '../core/index.js';
import { Message } from '../plugin-message/index.js';

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
var classSet = utils.classSet, closest = utils.closest;
var Framework = /** @class */ (function (_super) {
    __extends(Framework, _super);
    function Framework(opts) {
        var _this = _super.call(this, opts) || this;
        _this.results = new Map();
        _this.containers = new Map();
        _this.opts = Object.assign({}, {
            defaultMessageContainer: true,
            eleInvalidClass: '',
            eleValidClass: '',
            rowClasses: '',
            rowValidatingClass: '',
        }, opts);
        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
        _this.messagePlacedHandler = _this.onMessagePlaced.bind(_this);
        return _this;
    }
    Framework.prototype.install = function () {
        var _a;
        var _this = this;
        classSet(this.core.getFormElement(), (_a = {},
            _a[this.opts.formClass] = true,
            _a['fv-plugins-framework'] = true,
            _a));
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
        if (this.opts.defaultMessageContainer) {
            this.core.registerPlugin(Framework.MESSAGE_PLUGIN, new Message({
                clazz: this.opts.messageClass,
                container: function (field, element) {
                    var selector = 'string' === typeof _this.opts.rowSelector
                        ? _this.opts.rowSelector
                        : _this.opts.rowSelector(field, element);
                    var groupEle = closest(element, selector);
                    return Message.getClosestContainer(element, groupEle, _this.opts.rowPattern);
                },
            }));
            this.core.on('plugins.message.placed', this.messagePlacedHandler);
        }
    };
    Framework.prototype.uninstall = function () {
        var _a;
        this.results.clear();
        this.containers.clear();
        classSet(this.core.getFormElement(), (_a = {},
            _a[this.opts.formClass] = false,
            _a['fv-plugins-framework'] = false,
            _a));
        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
        if (this.opts.defaultMessageContainer) {
            this.core.deregisterPlugin(Framework.MESSAGE_PLUGIN);
            this.core.off('plugins.message.placed', this.messagePlacedHandler);
        }
    };
    Framework.prototype.onEnabled = function () {
        var _a;
        classSet(this.core.getFormElement(), (_a = {},
            _a[this.opts.formClass] = true,
            _a));
        if (this.opts.defaultMessageContainer) {
            this.core.enablePlugin(Framework.MESSAGE_PLUGIN);
        }
    };
    Framework.prototype.onDisabled = function () {
        var _a;
        classSet(this.core.getFormElement(), (_a = {},
            _a[this.opts.formClass] = false,
            _a));
        if (this.opts.defaultMessageContainer) {
            this.core.disablePlugin(Framework.MESSAGE_PLUGIN);
        }
    };
    Framework.prototype.onIconPlaced = function (_e) { }; // eslint-disable-line @typescript-eslint/no-empty-function
    Framework.prototype.onMessagePlaced = function (_e) { }; // eslint-disable-line @typescript-eslint/no-empty-function
    Framework.prototype.onFieldAdded = function (e) {
        var _this = this;
        var elements = e.elements;
        if (elements) {
            elements.forEach(function (ele) {
                var _a;
                var groupEle = _this.containers.get(ele);
                if (groupEle) {
                    classSet(groupEle, (_a = {},
                        _a[_this.opts.rowInvalidClass] = false,
                        _a[_this.opts.rowValidatingClass] = false,
                        _a[_this.opts.rowValidClass] = false,
                        _a['fv-plugins-icon-container'] = false,
                        _a));
                    _this.containers.delete(ele);
                }
            });
            this.prepareFieldContainer(e.field, elements);
        }
    };
    Framework.prototype.onFieldRemoved = function (e) {
        var _this = this;
        e.elements.forEach(function (ele) {
            var _a;
            var groupEle = _this.containers.get(ele);
            if (groupEle) {
                classSet(groupEle, (_a = {},
                    _a[_this.opts.rowInvalidClass] = false,
                    _a[_this.opts.rowValidatingClass] = false,
                    _a[_this.opts.rowValidClass] = false,
                    _a));
            }
        });
    };
    Framework.prototype.prepareFieldContainer = function (field, elements) {
        var _this = this;
        if (elements.length) {
            var type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0]);
            }
            else {
                elements.forEach(function (ele) { return _this.prepareElementContainer(field, ele); });
            }
        }
    };
    Framework.prototype.prepareElementContainer = function (field, element) {
        var _a;
        var selector = 'string' === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(field, element);
        var groupEle = closest(element, selector);
        if (groupEle !== element) {
            classSet(groupEle, (_a = {},
                _a[this.opts.rowClasses] = true,
                _a['fv-plugins-icon-container'] = true,
                _a));
            this.containers.set(element, groupEle);
        }
    };
    Framework.prototype.onElementValidating = function (e) {
        this.removeClasses(e.element, e.elements);
    };
    Framework.prototype.onElementNotValidated = function (e) {
        this.removeClasses(e.element, e.elements);
    };
    Framework.prototype.onElementIgnored = function (e) {
        this.removeClasses(e.element, e.elements);
    };
    Framework.prototype.removeClasses = function (element, elements) {
        var _a;
        var _this = this;
        var type = element.getAttribute('type');
        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
        elements.forEach(function (ele) {
            var _a;
            classSet(ele, (_a = {},
                _a[_this.opts.eleValidClass] = false,
                _a[_this.opts.eleInvalidClass] = false,
                _a));
        });
        var groupEle = this.containers.get(ele);
        if (groupEle) {
            classSet(groupEle, (_a = {},
                _a[this.opts.rowInvalidClass] = false,
                _a[this.opts.rowValidatingClass] = false,
                _a[this.opts.rowValidClass] = false,
                _a));
        }
    };
    Framework.prototype.onElementValidated = function (e) {
        var _a, _b;
        var _this = this;
        var elements = e.elements;
        var type = e.element.getAttribute('type');
        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        // Set the valid or invalid class for all elements
        elements.forEach(function (ele) {
            var _a;
            classSet(ele, (_a = {},
                _a[_this.opts.eleValidClass] = e.valid,
                _a[_this.opts.eleInvalidClass] = !e.valid,
                _a));
        });
        var groupEle = this.containers.get(element);
        if (groupEle) {
            if (!e.valid) {
                this.results.set(element, false);
                classSet(groupEle, (_a = {},
                    _a[this.opts.rowInvalidClass] = true,
                    _a[this.opts.rowValidatingClass] = false,
                    _a[this.opts.rowValidClass] = false,
                    _a));
            }
            else {
                this.results.delete(element);
                // Maybe there're multiple fields belong to the same row
                var isValid_1 = true;
                this.containers.forEach(function (value, key) {
                    if (value === groupEle && _this.results.get(key) === false) {
                        isValid_1 = false;
                    }
                });
                // If all field(s) belonging to the row are valid
                if (isValid_1) {
                    classSet(groupEle, (_b = {},
                        _b[this.opts.rowInvalidClass] = false,
                        _b[this.opts.rowValidatingClass] = false,
                        _b[this.opts.rowValidClass] = true,
                        _b));
                }
            }
        }
    };
    Framework.MESSAGE_PLUGIN = '___frameworkMessage';
    return Framework;
}(Plugin));

export { Framework };
