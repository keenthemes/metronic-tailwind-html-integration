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
    /**
     * This plugin provides the ability of declaring validator options via HTML attributes.
     * All attributes are declared in lowercase
     * ```
     *  <input
     *      data-fv-field="${fieldName}"
     *      data-fv-{validator}="true"
     *      data-fv-{validator}___{option}="..." />
     * ```
     */
    var Declarative = /** @class */ (function (_super) {
        __extends(Declarative, _super);
        function Declarative(opts) {
            var _this = _super.call(this, opts) || this;
            _this.addedFields = new Map();
            _this.opts = Object.assign({}, {
                html5Input: false,
                pluginPrefix: 'data-fvp-',
                prefix: 'data-fv-',
            }, opts);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
            return _this;
        }
        Declarative.prototype.install = function () {
            var _this = this;
            // Parse the plugin options
            this.parsePlugins();
            var opts = this.parseOptions();
            Object.keys(opts).forEach(function (field) {
                if (!_this.addedFields.has(field)) {
                    _this.addedFields.set(field, true);
                }
                _this.core.addField(field, opts[field]);
            });
            this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
        };
        Declarative.prototype.uninstall = function () {
            this.addedFields.clear();
            this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
        };
        Declarative.prototype.onFieldAdded = function (e) {
            var _this = this;
            var elements = e.elements;
            // Don't add the element which is already available in the field lists
            // Otherwise, it can cause an infinite loop
            if (!elements || elements.length === 0 || this.addedFields.has(e.field)) {
                return;
            }
            this.addedFields.set(e.field, true);
            elements.forEach(function (ele) {
                var declarativeOptions = _this.parseElement(ele);
                if (!_this.isEmptyOption(declarativeOptions)) {
                    // Update validator options
                    var mergeOptions = {
                        selector: e.options.selector,
                        validators: Object.assign({}, e.options.validators || {}, declarativeOptions.validators),
                    };
                    _this.core.setFieldOptions(e.field, mergeOptions);
                }
            });
        };
        Declarative.prototype.onFieldRemoved = function (e) {
            if (e.field && this.addedFields.has(e.field)) {
                this.addedFields.delete(e.field);
            }
        };
        Declarative.prototype.parseOptions = function () {
            var _this = this;
            // Find all fields which have either `name` or `data-fv-field` attribute
            var prefix = this.opts.prefix;
            var opts = {};
            var fields = this.core.getFields();
            var form = this.core.getFormElement();
            var elements = [].slice.call(form.querySelectorAll("[name], [".concat(prefix, "field]")));
            elements.forEach(function (ele) {
                var validators = _this.parseElement(ele);
                // Do not try to merge the options if it's empty
                // For instance, there are multiple elements having the same name,
                // we only set the HTML attribute to one of them
                if (!_this.isEmptyOption(validators)) {
                    var field = ele.getAttribute('name') || ele.getAttribute("".concat(prefix, "field"));
                    opts[field] = Object.assign({}, opts[field], validators);
                }
            });
            Object.keys(opts).forEach(function (field) {
                Object.keys(opts[field].validators).forEach(function (v) {
                    // Set the `enabled` key to `false` if it isn't set
                    // (the data-fv-{validator} attribute is missing, for example)
                    opts[field].validators[v].enabled = opts[field].validators[v].enabled || false;
                    // Mix the options in declarative and programmatic modes
                    if (fields[field] && fields[field].validators && fields[field].validators[v]) {
                        Object.assign(opts[field].validators[v], fields[field].validators[v]);
                    }
                });
            });
            return Object.assign({}, fields, opts);
        };
        Declarative.prototype.createPluginInstance = function (clazz, opts) {
            var arr = clazz.split('.');
            // TODO: Find a safer way to create a plugin instance from the class
            // Currently, I have to use `any` here instead of a construtable interface
            var fn = window || this; // eslint-disable-line @typescript-eslint/no-explicit-any
            for (var i = 0, len = arr.length; i < len; i++) {
                fn = fn[arr[i]];
            }
            if (typeof fn !== 'function') {
                throw new Error("the plugin ".concat(clazz, " doesn't exist"));
            }
            return new fn(opts);
        };
        Declarative.prototype.parsePlugins = function () {
            var _a;
            var _this = this;
            var form = this.core.getFormElement();
            var reg = new RegExp("^".concat(this.opts.pluginPrefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
            var numAttributes = form.attributes.length;
            var plugins = {};
            for (var i = 0; i < numAttributes; i++) {
                var name_1 = form.attributes[i].name;
                var value = form.attributes[i].value;
                var items = reg.exec(name_1);
                if (items && items.length === 4) {
                    var pluginName = this.toCamelCase(items[1]);
                    plugins[pluginName] = Object.assign({}, items[3] ? (_a = {}, _a[this.toCamelCase(items[3])] = value, _a) : { enabled: '' === value || 'true' === value }, plugins[pluginName]);
                }
            }
            Object.keys(plugins).forEach(function (pluginName) {
                var opts = plugins[pluginName];
                var enabled = opts['enabled'];
                var clazz = opts['class'];
                if (enabled && clazz) {
                    delete opts['enabled'];
                    delete opts['clazz'];
                    var p = _this.createPluginInstance(clazz, opts);
                    _this.core.registerPlugin(pluginName, p);
                }
            });
        };
        Declarative.prototype.isEmptyOption = function (opts) {
            var validators = opts.validators;
            return Object.keys(validators).length === 0 && validators.constructor === Object;
        };
        Declarative.prototype.parseElement = function (ele) {
            var reg = new RegExp("^".concat(this.opts.prefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
            var numAttributes = ele.attributes.length;
            var opts = {};
            var type = ele.getAttribute('type');
            for (var i = 0; i < numAttributes; i++) {
                var name_2 = ele.attributes[i].name;
                var value = ele.attributes[i].value;
                if (this.opts.html5Input) {
                    switch (true) {
                        case 'minlength' === name_2:
                            opts['stringLength'] = Object.assign({}, {
                                enabled: true,
                                min: parseInt(value, 10),
                            }, opts['stringLength']);
                            break;
                        case 'maxlength' === name_2:
                            opts['stringLength'] = Object.assign({}, {
                                enabled: true,
                                max: parseInt(value, 10),
                            }, opts['stringLength']);
                            break;
                        case 'pattern' === name_2:
                            opts['regexp'] = Object.assign({}, {
                                enabled: true,
                                regexp: value,
                            }, opts['regexp']);
                            break;
                        case 'required' === name_2:
                            opts['notEmpty'] = Object.assign({}, {
                                enabled: true,
                            }, opts['notEmpty']);
                            break;
                        case 'type' === name_2 && 'color' === value:
                            // Only accept 6 hex character values due to the HTML 5 spec
                            // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
                            opts['color'] = Object.assign({}, {
                                enabled: true,
                                type: 'hex',
                            }, opts['color']);
                            break;
                        case 'type' === name_2 && 'email' === value:
                            opts['emailAddress'] = Object.assign({}, {
                                enabled: true,
                            }, opts['emailAddress']);
                            break;
                        case 'type' === name_2 && 'url' === value:
                            opts['uri'] = Object.assign({}, {
                                enabled: true,
                            }, opts['uri']);
                            break;
                        case 'type' === name_2 && 'range' === value:
                            opts['between'] = Object.assign({}, {
                                enabled: true,
                                max: parseFloat(ele.getAttribute('max')),
                                min: parseFloat(ele.getAttribute('min')),
                            }, opts['between']);
                            break;
                        case 'min' === name_2 && type !== 'date' && type !== 'range':
                            opts['greaterThan'] = Object.assign({}, {
                                enabled: true,
                                min: parseFloat(value),
                            }, opts['greaterThan']);
                            break;
                        case 'max' === name_2 && type !== 'date' && type !== 'range':
                            opts['lessThan'] = Object.assign({}, {
                                enabled: true,
                                max: parseFloat(value),
                            }, opts['lessThan']);
                            break;
                    }
                }
                var items = reg.exec(name_2);
                if (items && items.length === 4) {
                    var v = this.toCamelCase(items[1]);
                    if (!opts[v]) {
                        opts[v] = {};
                    }
                    if (items[3]) {
                        opts[v][this.toCamelCase(items[3])] = this.normalizeValue(value);
                    }
                    else if (opts[v]['enabled'] !== true || opts[v]['enabled'] !== false) {
                        opts[v]['enabled'] = '' === value || 'true' === value;
                    }
                }
            }
            return { validators: opts };
        };
        // Many validators accept `boolean` options, for example
        // `data-fv-between___inclusive="false"` should be identical to `inclusive: false`, not `inclusive: 'false'`
        Declarative.prototype.normalizeValue = function (value) {
            return value === 'true' || value === '' ? true : value === 'false' ? false : value;
        };
        Declarative.prototype.toUpperCase = function (input) {
            return input.charAt(1).toUpperCase();
        };
        Declarative.prototype.toCamelCase = function (input) {
            return input.replace(/-./g, this.toUpperCase);
        };
        return Declarative;
    }(core.Plugin));

    exports.Declarative = Declarative;

}));
