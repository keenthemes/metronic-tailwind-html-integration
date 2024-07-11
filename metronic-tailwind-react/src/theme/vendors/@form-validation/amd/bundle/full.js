define(['exports'], (function (exports) { 'use strict';

    var lib$11 = {exports: {}};

    var cjs$11 = {};

    var hasRequiredCjs$11;

    function requireCjs$11 () {
    	if (hasRequiredCjs$11) return cjs$11;
    	hasRequiredCjs$11 = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Implement Luhn validation algorithm
    	 * Credit to https://gist.github.com/ShirtlessKirk/2134376
    	 *
    	 * @see http://en.wikipedia.org/wiki/Luhn
    	 * @param {string} value
    	 * @returns {boolean}
    	 */
    	function luhn(value) {
    	    var length = value.length;
    	    var prodArr = [
    	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    	        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
    	    ];
    	    var mul = 0;
    	    var sum = 0;
    	    while (length--) {
    	        sum += prodArr[mul][parseInt(value.charAt(length), 10)];
    	        mul = 1 - mul;
    	    }
    	    return sum % 10 === 0 && sum > 0;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Implement modulus 11, 10 (ISO 7064) algorithm
    	 *
    	 * @param {string} value
    	 * @returns {boolean}
    	 */
    	function mod11And10(value) {
    	    var length = value.length;
    	    var check = 5;
    	    for (var i = 0; i < length; i++) {
    	        check = ((((check || 10) * 2) % 11) + parseInt(value.charAt(i), 10)) % 10;
    	    }
    	    return check === 1;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Implements Mod 37, 36 (ISO 7064) algorithm
    	 *
    	 * @param {string} value
    	 * @param {string} [alphabet]
    	 * @returns {boolean}
    	 */
    	function mod37And36(value, alphabet) {
    	    if (alphabet === void 0) { alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
    	    var length = value.length;
    	    var modulus = alphabet.length;
    	    var check = Math.floor(modulus / 2);
    	    for (var i = 0; i < length; i++) {
    	        check = ((((check || modulus) * 2) % (modulus + 1)) + alphabet.indexOf(value.charAt(i))) % modulus;
    	    }
    	    return check === 1;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function transform(input) {
    	    return input
    	        .split('')
    	        .map(function (c) {
    	        var code = c.charCodeAt(0);
    	        // 65, 66, ..., 90 are the char code of A, B, ..., Z
    	        return code >= 65 && code <= 90
    	            ? // Replace A, B, C, ..., Z with 10, 11, ..., 35
    	                code - 55
    	            : c;
    	    })
    	        .join('')
    	        .split('')
    	        .map(function (c) { return parseInt(c, 10); });
    	}
    	function mod97And10(input) {
    	    var digits = transform(input);
    	    var temp = 0;
    	    var length = digits.length;
    	    for (var i = 0; i < length - 1; ++i) {
    	        temp = ((temp + digits[i]) * 10) % 97;
    	    }
    	    temp += digits[length - 1];
    	    return temp % 97 === 1;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Implement Verhoeff validation algorithm
    	 * Credit to Sergey Petushkov, 2014
    	 *
    	 * @see https://en.wikipedia.org/wiki/Verhoeff_algorithm
    	 * @param {string} value
    	 * @returns {boolean}
    	 */
    	function verhoeff(value) {
    	    // Multiplication table d
    	    var d = [
    	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    	        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    	        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    	        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    	        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    	        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    	        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    	        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    	        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    	        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    	    ];
    	    // Permutation table p
    	    var p = [
    	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    	        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    	        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    	        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    	        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    	        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    	        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    	        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
    	    ];
    	    // Inverse table inv
    	    var invertedArray = value.reverse();
    	    var c = 0;
    	    for (var i = 0; i < invertedArray.length; i++) {
    	        c = d[c][p[i % 8][invertedArray[i]]];
    	    }
    	    return c === 0;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var index$1 = {
    	    luhn: luhn,
    	    mod11And10: mod11And10,
    	    mod37And36: mod37And36,
    	    mod97And10: mod97And10,
    	    verhoeff: verhoeff,
    	};

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


    	function __spreadArray(to, from, pack) {
    	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    	        if (ar || !(i in from)) {
    	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
    	            ar[i] = from[i];
    	        }
    	    }
    	    return to.concat(ar || Array.prototype.slice.call(from));
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @param {HTMLElement} form The form element
    	 * @param {string} field The field name
    	 * @param {HTMLElement} element The field element
    	 * @param {HTMLElement[]} elements The list of elements which have the same name as `field`
    	 * @return {string}
    	 */
    	function getFieldValue(form, field, element, elements) {
    	    var type = (element.getAttribute('type') || '').toLowerCase();
    	    var tagName = element.tagName.toLowerCase();
    	    if (tagName === 'textarea') {
    	        return element.value;
    	    }
    	    if (tagName === 'select') {
    	        var select = element;
    	        var index = select.selectedIndex;
    	        return index >= 0 ? select.options.item(index).value : '';
    	    }
    	    if (tagName === 'input') {
    	        if ('radio' === type || 'checkbox' === type) {
    	            var checked = elements.filter(function (ele) { return ele.checked; }).length;
    	            return checked === 0 ? '' : checked + '';
    	        }
    	        else {
    	            return element.value;
    	        }
    	    }
    	    return '';
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function emitter() {
    	    return {
    	        fns: {},
    	        clear: function () {
    	            this.fns = {};
    	        },
    	        emit: function (event) {
    	            var args = [];
    	            for (var _i = 1; _i < arguments.length; _i++) {
    	                args[_i - 1] = arguments[_i];
    	            }
    	            (this.fns[event] || []).map(function (handler) { return handler.apply(handler, args); });
    	        },
    	        off: function (event, func) {
    	            if (this.fns[event]) {
    	                var index = this.fns[event].indexOf(func);
    	                if (index >= 0) {
    	                    this.fns[event].splice(index, 1);
    	                }
    	            }
    	        },
    	        on: function (event, func) {
    	            (this.fns[event] = this.fns[event] || []).push(func);
    	        },
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function filter() {
    	    return {
    	        filters: {},
    	        add: function (name, func) {
    	            (this.filters[name] = this.filters[name] || []).push(func);
    	        },
    	        clear: function () {
    	            this.filters = {};
    	        },
    	        execute: function (name, defaultValue, args) {
    	            if (!this.filters[name] || !this.filters[name].length) {
    	                return defaultValue;
    	            }
    	            var result = defaultValue;
    	            var filters = this.filters[name];
    	            var count = filters.length;
    	            for (var i = 0; i < count; i++) {
    	                result = filters[i].apply(result, args);
    	            }
    	            return result;
    	        },
    	        remove: function (name, func) {
    	            if (this.filters[name]) {
    	                this.filters[name] = this.filters[name].filter(function (f) { return f !== func; });
    	            }
    	        },
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var Core = /** @class */ (function () {
    	    function Core(form, fields) {
    	        this.fields = {};
    	        this.elements = {};
    	        this.ee = emitter();
    	        this.filter = filter();
    	        this.plugins = {};
    	        // Store the result of validation for each field
    	        this.results = new Map();
    	        this.validators = {};
    	        this.form = form;
    	        this.fields = fields;
    	    }
    	    Core.prototype.on = function (event, func) {
    	        this.ee.on(event, func);
    	        return this;
    	    };
    	    Core.prototype.off = function (event, func) {
    	        this.ee.off(event, func);
    	        return this;
    	    };
    	    Core.prototype.emit = function (event) {
    	        var _a;
    	        var args = [];
    	        for (var _i = 1; _i < arguments.length; _i++) {
    	            args[_i - 1] = arguments[_i];
    	        }
    	        (_a = this.ee).emit.apply(_a, __spreadArray([event], args, false));
    	        return this;
    	    };
    	    Core.prototype.registerPlugin = function (name, plugin) {
    	        // Check if whether the plugin is registered
    	        if (this.plugins[name]) {
    	            throw new Error("The plguin ".concat(name, " is registered"));
    	        }
    	        // Install the plugin
    	        plugin.setCore(this);
    	        plugin.install();
    	        this.plugins[name] = plugin;
    	        return this;
    	    };
    	    Core.prototype.deregisterPlugin = function (name) {
    	        var plugin = this.plugins[name];
    	        if (plugin) {
    	            plugin.uninstall();
    	        }
    	        delete this.plugins[name];
    	        return this;
    	    };
    	    Core.prototype.enablePlugin = function (name) {
    	        var plugin = this.plugins[name];
    	        if (plugin) {
    	            plugin.enable();
    	        }
    	        return this;
    	    };
    	    Core.prototype.disablePlugin = function (name) {
    	        var plugin = this.plugins[name];
    	        if (plugin) {
    	            plugin.disable();
    	        }
    	        return this;
    	    };
    	    Core.prototype.isPluginEnabled = function (name) {
    	        var plugin = this.plugins[name];
    	        return plugin ? plugin.isPluginEnabled() : false;
    	    };
    	    Core.prototype.registerValidator = function (name, func) {
    	        if (this.validators[name]) {
    	            throw new Error("The validator ".concat(name, " is registered"));
    	        }
    	        this.validators[name] = func;
    	        return this;
    	    };
    	    /**
    	     * Add a filter
    	     *
    	     * @param {string} name The name of filter
    	     * @param {Function} func The filter function
    	     * @return {Core}
    	     */
    	    Core.prototype.registerFilter = function (name, func) {
    	        this.filter.add(name, func);
    	        return this;
    	    };
    	    /**
    	     * Remove a filter
    	     *
    	     * @param {string} name The name of filter
    	     * @param {Function} func The filter function
    	     * @return {Core}
    	     */
    	    Core.prototype.deregisterFilter = function (name, func) {
    	        this.filter.remove(name, func);
    	        return this;
    	    };
    	    /**
    	     * Execute a filter
    	     *
    	     * @param {string} name The name of filter
    	     * @param {T} defaultValue The default value returns by the filter
    	     * @param {array} args The filter arguments
    	     * @returns {T}
    	     */
    	    Core.prototype.executeFilter = function (name, defaultValue, args) {
    	        return this.filter.execute(name, defaultValue, args);
    	    };
    	    /**
    	     * Add a field
    	     *
    	     * @param {string} field The field name
    	     * @param {FieldOptions} options The field options. The options will be merged with the original validator rules
    	     * if the field is already defined
    	     * @return {Core}
    	     */
    	    Core.prototype.addField = function (field, options) {
    	        var opts = Object.assign({}, {
    	            selector: '',
    	            validators: {},
    	        }, options);
    	        // Merge the options
    	        this.fields[field] = this.fields[field]
    	            ? {
    	                selector: opts.selector || this.fields[field].selector,
    	                validators: Object.assign({}, this.fields[field].validators, opts.validators),
    	            }
    	            : opts;
    	        this.elements[field] = this.queryElements(field);
    	        this.emit('core.field.added', {
    	            elements: this.elements[field],
    	            field: field,
    	            options: this.fields[field],
    	        });
    	        return this;
    	    };
    	    /**
    	     * Remove given field by name
    	     *
    	     * @param {string} field The field name
    	     * @return {Core}
    	     */
    	    Core.prototype.removeField = function (field) {
    	        if (!this.fields[field]) {
    	            throw new Error("The field ".concat(field, " validators are not defined. Please ensure the field is added first"));
    	        }
    	        var elements = this.elements[field];
    	        var options = this.fields[field];
    	        delete this.elements[field];
    	        delete this.fields[field];
    	        this.emit('core.field.removed', {
    	            elements: elements,
    	            field: field,
    	            options: options,
    	        });
    	        return this;
    	    };
    	    /**
    	     * Validate all fields
    	     *
    	     * @return {Promise<string>}
    	     */
    	    Core.prototype.validate = function () {
    	        var _this = this;
    	        this.emit('core.form.validating', {
    	            formValidation: this,
    	        });
    	        return this.filter.execute('validate-pre', Promise.resolve(), []).then(function () {
    	            return Promise.all(Object.keys(_this.fields).map(function (field) { return _this.validateField(field); })).then(function (results) {
    	                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
    	                switch (true) {
    	                    case results.indexOf('Invalid') !== -1:
    	                        _this.emit('core.form.invalid', {
    	                            formValidation: _this,
    	                        });
    	                        return Promise.resolve('Invalid');
    	                    case results.indexOf('NotValidated') !== -1:
    	                        _this.emit('core.form.notvalidated', {
    	                            formValidation: _this,
    	                        });
    	                        return Promise.resolve('NotValidated');
    	                    default:
    	                        _this.emit('core.form.valid', {
    	                            formValidation: _this,
    	                        });
    	                        return Promise.resolve('Valid');
    	                }
    	            });
    	        });
    	    };
    	    /**
    	     * Validate a particular field
    	     *
    	     * @param {string} field The field name
    	     * @return {Promise<string>}
    	     */
    	    Core.prototype.validateField = function (field) {
    	        var _this = this;
    	        // Stop validation process if the field is already validated
    	        var result = this.results.get(field);
    	        if (result === 'Valid' || result === 'Invalid') {
    	            return Promise.resolve(result);
    	        }
    	        this.emit('core.field.validating', field);
    	        var elements = this.elements[field];
    	        if (elements.length === 0) {
    	            this.emit('core.field.valid', field);
    	            return Promise.resolve('Valid');
    	        }
    	        var type = elements[0].getAttribute('type');
    	        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
    	            return this.validateElement(field, elements[0]);
    	        }
    	        else {
    	            return Promise.all(elements.map(function (ele) { return _this.validateElement(field, ele); })).then(function (results) {
    	                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
    	                switch (true) {
    	                    case results.indexOf('Invalid') !== -1:
    	                        _this.emit('core.field.invalid', field);
    	                        _this.results.set(field, 'Invalid');
    	                        return Promise.resolve('Invalid');
    	                    case results.indexOf('NotValidated') !== -1:
    	                        _this.emit('core.field.notvalidated', field);
    	                        _this.results.delete(field);
    	                        return Promise.resolve('NotValidated');
    	                    default:
    	                        _this.emit('core.field.valid', field);
    	                        _this.results.set(field, 'Valid');
    	                        return Promise.resolve('Valid');
    	                }
    	            });
    	        }
    	    };
    	    /**
    	     * Validate particular element
    	     *
    	     * @param {string} field The field name
    	     * @param {HTMLElement} ele The field element
    	     * @return {Promise<string>}
    	     */
    	    Core.prototype.validateElement = function (field, ele) {
    	        var _this = this;
    	        // Reset validation result
    	        this.results.delete(field);
    	        var elements = this.elements[field];
    	        var ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);
    	        if (ignored) {
    	            this.emit('core.element.ignored', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	            });
    	            return Promise.resolve('Ignored');
    	        }
    	        var validatorList = this.fields[field].validators;
    	        this.emit('core.element.validating', {
    	            element: ele,
    	            elements: elements,
    	            field: field,
    	        });
    	        var promises = Object.keys(validatorList).map(function (v) {
    	            return function () { return _this.executeValidator(field, ele, v, validatorList[v]); };
    	        });
    	        return this.waterfall(promises)
    	            .then(function (results) {
    	            // `results` is an array of `Valid` or `Invalid`
    	            var isValid = results.indexOf('Invalid') === -1;
    	            _this.emit('core.element.validated', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	                valid: isValid,
    	            });
    	            var type = ele.getAttribute('type');
    	            if ('radio' === type || 'checkbox' === type || elements.length === 1) {
    	                _this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
    	            }
    	            return Promise.resolve(isValid ? 'Valid' : 'Invalid');
    	        })
    	            .catch(function (reason) {
    	            // reason is `NotValidated`
    	            _this.emit('core.element.notvalidated', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	            });
    	            return Promise.resolve(reason);
    	        });
    	    };
    	    /**
    	     * Perform given validator on field
    	     *
    	     * @param {string} field The field name
    	     * @param {HTMLElement} ele The field element
    	     * @param {string} v The validator name
    	     * @param {ValidatorOptions} opts The validator options
    	     * @return {Promise<string>}
    	     */
    	    Core.prototype.executeValidator = function (field, ele, v, opts) {
    	        var _this = this;
    	        var elements = this.elements[field];
    	        var name = this.filter.execute('validator-name', v, [v, field]);
    	        opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);
    	        // Simply pass the validator if
    	        // - it isn't defined yet
    	        // - or the associated validator isn't enabled
    	        if (!this.validators[name] || opts.enabled === false) {
    	            this.emit('core.validator.validated', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	                result: this.normalizeResult(field, name, { valid: true }),
    	                validator: name,
    	            });
    	            return Promise.resolve('Valid');
    	        }
    	        var validator = this.validators[name];
    	        // Get the field value
    	        var value = this.getElementValue(field, ele, name);
    	        var willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);
    	        if (!willValidate) {
    	            this.emit('core.validator.notvalidated', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	                validator: v,
    	            });
    	            return Promise.resolve('NotValidated');
    	        }
    	        this.emit('core.validator.validating', {
    	            element: ele,
    	            elements: elements,
    	            field: field,
    	            validator: v,
    	        });
    	        // Perform validation
    	        var result = validator().validate({
    	            element: ele,
    	            elements: elements,
    	            field: field,
    	            l10n: this.localization,
    	            options: opts,
    	            value: value,
    	        });
    	        // Check whether the result is a `Promise`
    	        var isPromise = 'function' === typeof result['then'];
    	        if (isPromise) {
    	            return result.then(function (r) {
    	                var data = _this.normalizeResult(field, v, r);
    	                _this.emit('core.validator.validated', {
    	                    element: ele,
    	                    elements: elements,
    	                    field: field,
    	                    result: data,
    	                    validator: v,
    	                });
    	                return data.valid ? 'Valid' : 'Invalid';
    	            });
    	        }
    	        else {
    	            var data = this.normalizeResult(field, v, result);
    	            this.emit('core.validator.validated', {
    	                element: ele,
    	                elements: elements,
    	                field: field,
    	                result: data,
    	                validator: v,
    	            });
    	            return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
    	        }
    	    };
    	    Core.prototype.getElementValue = function (field, ele, validator) {
    	        var defaultValue = getFieldValue(this.form, field, ele, this.elements[field]);
    	        return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
    	    };
    	    // Some getter methods
    	    Core.prototype.getElements = function (field) {
    	        return this.elements[field];
    	    };
    	    Core.prototype.getFields = function () {
    	        return this.fields;
    	    };
    	    Core.prototype.getFormElement = function () {
    	        return this.form;
    	    };
    	    Core.prototype.getLocale = function () {
    	        return this.locale;
    	    };
    	    Core.prototype.getPlugin = function (name) {
    	        return this.plugins[name];
    	    };
    	    /**
    	     * Update the field status
    	     *
    	     * @param {string} field The field name
    	     * @param {string} status The new status
    	     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
    	     * @return {Core}
    	     */
    	    Core.prototype.updateFieldStatus = function (field, status, validator) {
    	        var _this = this;
    	        var elements = this.elements[field];
    	        var type = elements[0].getAttribute('type');
    	        var list = 'radio' === type || 'checkbox' === type ? [elements[0]] : elements;
    	        list.forEach(function (ele) { return _this.updateElementStatus(field, ele, status, validator); });
    	        if (!validator) {
    	            switch (status) {
    	                case 'NotValidated':
    	                    this.emit('core.field.notvalidated', field);
    	                    this.results.delete(field);
    	                    break;
    	                case 'Validating':
    	                    this.emit('core.field.validating', field);
    	                    this.results.delete(field);
    	                    break;
    	                case 'Valid':
    	                    this.emit('core.field.valid', field);
    	                    this.results.set(field, 'Valid');
    	                    break;
    	                case 'Invalid':
    	                    this.emit('core.field.invalid', field);
    	                    this.results.set(field, 'Invalid');
    	                    break;
    	            }
    	        }
    	        else if (status === 'Invalid') {
    	            // We need to mark the field as invalid because it doesn't pass the `validator`
    	            this.emit('core.field.invalid', field);
    	            this.results.set(field, 'Invalid');
    	        }
    	        return this;
    	    };
    	    /**
    	     * Update the element status
    	     *
    	     * @param {string} field The field name
    	     * @param {HTMLElement} ele The field element
    	     * @param {string} status The new status
    	     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
    	     * @return {Core}
    	     */
    	    Core.prototype.updateElementStatus = function (field, ele, status, validator) {
    	        var _this = this;
    	        var elements = this.elements[field];
    	        var fieldValidators = this.fields[field].validators;
    	        var validatorArr = validator ? [validator] : Object.keys(fieldValidators);
    	        switch (status) {
    	            case 'NotValidated':
    	                validatorArr.forEach(function (v) {
    	                    return _this.emit('core.validator.notvalidated', {
    	                        element: ele,
    	                        elements: elements,
    	                        field: field,
    	                        validator: v,
    	                    });
    	                });
    	                this.emit('core.element.notvalidated', {
    	                    element: ele,
    	                    elements: elements,
    	                    field: field,
    	                });
    	                break;
    	            case 'Validating':
    	                validatorArr.forEach(function (v) {
    	                    return _this.emit('core.validator.validating', {
    	                        element: ele,
    	                        elements: elements,
    	                        field: field,
    	                        validator: v,
    	                    });
    	                });
    	                this.emit('core.element.validating', {
    	                    element: ele,
    	                    elements: elements,
    	                    field: field,
    	                });
    	                break;
    	            case 'Valid':
    	                validatorArr.forEach(function (v) {
    	                    return _this.emit('core.validator.validated', {
    	                        element: ele,
    	                        elements: elements,
    	                        field: field,
    	                        result: {
    	                            message: fieldValidators[v].message,
    	                            valid: true,
    	                        },
    	                        validator: v,
    	                    });
    	                });
    	                this.emit('core.element.validated', {
    	                    element: ele,
    	                    elements: elements,
    	                    field: field,
    	                    valid: true,
    	                });
    	                break;
    	            case 'Invalid':
    	                validatorArr.forEach(function (v) {
    	                    return _this.emit('core.validator.validated', {
    	                        element: ele,
    	                        elements: elements,
    	                        field: field,
    	                        result: {
    	                            message: fieldValidators[v].message,
    	                            valid: false,
    	                        },
    	                        validator: v,
    	                    });
    	                });
    	                this.emit('core.element.validated', {
    	                    element: ele,
    	                    elements: elements,
    	                    field: field,
    	                    valid: false,
    	                });
    	                break;
    	        }
    	        return this;
    	    };
    	    /**
    	     * Reset the form. It also clears all the messages, hide the feedback icons, etc.
    	     *
    	     * @param {boolean} reset If true, the method resets field value to empty
    	     * or remove `checked`, `selected` attributes
    	     * @return {Core}
    	     */
    	    Core.prototype.resetForm = function (reset) {
    	        var _this = this;
    	        Object.keys(this.fields).forEach(function (field) { return _this.resetField(field, reset); });
    	        this.emit('core.form.reset', {
    	            formValidation: this,
    	            reset: reset,
    	        });
    	        return this;
    	    };
    	    /**
    	     * Reset the field. It also clears all the messages, hide the feedback icons, etc.
    	     *
    	     * @param {string} field The field name
    	     * @param {boolean} reset If true, the method resets field value to empty
    	     * or remove `checked`, `selected` attributes
    	     * @return {Core}
    	     */
    	    Core.prototype.resetField = function (field, reset) {
    	        // Reset the field element value if needed
    	        if (reset) {
    	            var elements = this.elements[field];
    	            var type_1 = elements[0].getAttribute('type');
    	            elements.forEach(function (ele) {
    	                if ('radio' === type_1 || 'checkbox' === type_1) {
    	                    ele.removeAttribute('selected');
    	                    ele.removeAttribute('checked');
    	                    ele.checked = false;
    	                }
    	                else {
    	                    ele.setAttribute('value', '');
    	                    if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
    	                        ele.value = '';
    	                    }
    	                }
    	            });
    	        }
    	        // Mark the field as not validated yet
    	        this.updateFieldStatus(field, 'NotValidated');
    	        this.emit('core.field.reset', {
    	            field: field,
    	            reset: reset,
    	        });
    	        return this;
    	    };
    	    /**
    	     * Revalidate a particular field. It's useful when the field value is effected by third parties
    	     * (for example, attach another UI library to the field).
    	     * Since there isn't an automatic way for FormValidation to know when the field value is modified in those cases,
    	     * we need to revalidate the field manually.
    	     *
    	     * @param {string} field The field name
    	     * @return {Promise<string>}
    	     */
    	    Core.prototype.revalidateField = function (field) {
    	        if (!this.fields[field]) {
    	            return Promise.resolve('Ignored');
    	        }
    	        this.updateFieldStatus(field, 'NotValidated');
    	        return this.validateField(field);
    	    };
    	    /**
    	     * Disable particular validator for given field
    	     *
    	     * @param {string} field The field name
    	     * @param {string} validator The validator name. If it isn't specified, all validators will be disabled
    	     * @return {Core}
    	     */
    	    Core.prototype.disableValidator = function (field, validator) {
    	        if (!this.fields[field]) {
    	            return this;
    	        }
    	        var elements = this.elements[field];
    	        this.toggleValidator(false, field, validator);
    	        this.emit('core.validator.disabled', {
    	            elements: elements,
    	            field: field,
    	            formValidation: this,
    	            validator: validator,
    	        });
    	        return this;
    	    };
    	    /**
    	     * Enable particular validator for given field
    	     *
    	     * @param {string} field The field name
    	     * @param {string} validator The validator name. If it isn't specified, all validators will be enabled
    	     * @return {Core}
    	     */
    	    Core.prototype.enableValidator = function (field, validator) {
    	        if (!this.fields[field]) {
    	            return this;
    	        }
    	        var elements = this.elements[field];
    	        this.toggleValidator(true, field, validator);
    	        this.emit('core.validator.enabled', {
    	            elements: elements,
    	            field: field,
    	            formValidation: this,
    	            validator: validator,
    	        });
    	        return this;
    	    };
    	    /**
    	     * Update option of particular validator for given field
    	     *
    	     * @param {string} field The field name
    	     * @param {string} validator The validator name
    	     * @param {string} name The option's name
    	     * @param {unknown} value The option's value
    	     * @return {Core}
    	     */
    	    Core.prototype.updateValidatorOption = function (field, validator, name, value) {
    	        if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
    	            this.fields[field].validators[validator][name] = value;
    	        }
    	        return this;
    	    };
    	    Core.prototype.setFieldOptions = function (field, options) {
    	        this.fields[field] = options;
    	        return this;
    	    };
    	    Core.prototype.destroy = function () {
    	        var _this = this;
    	        // Remove plugins and filters
    	        Object.keys(this.plugins).forEach(function (id) { return _this.plugins[id].uninstall(); });
    	        this.ee.clear();
    	        this.filter.clear();
    	        this.results.clear();
    	        this.plugins = {};
    	        return this;
    	    };
    	    Core.prototype.setLocale = function (locale, localization) {
    	        this.locale = locale;
    	        this.localization = localization;
    	        return this;
    	    };
    	    Core.prototype.waterfall = function (promises) {
    	        return promises.reduce(function (p, c) {
    	            return p.then(function (res) {
    	                return c().then(function (result) {
    	                    res.push(result);
    	                    return res;
    	                });
    	            });
    	        }, Promise.resolve([]));
    	    };
    	    Core.prototype.queryElements = function (field) {
    	        var selector = this.fields[field].selector
    	            ? // Check if the selector is an ID selector which starts with `#`
    	                '#' === this.fields[field].selector.charAt(0)
    	                    ? "[id=\"".concat(this.fields[field].selector.substring(1), "\"]")
    	                    : this.fields[field].selector
    	            : "[name=\"".concat(field.replace(/"/g, '\\"'), "\"]");
    	        return [].slice.call(this.form.querySelectorAll(selector));
    	    };
    	    Core.prototype.normalizeResult = function (field, validator, result) {
    	        var opts = this.fields[field].validators[validator];
    	        return Object.assign({}, result, {
    	            message: result.message ||
    	                (opts ? opts.message : '') ||
    	                (this.localization && this.localization[validator] && this.localization[validator]['default']
    	                    ? this.localization[validator]['default']
    	                    : '') ||
    	                "The field ".concat(field, " is not valid"),
    	        });
    	    };
    	    Core.prototype.toggleValidator = function (enabled, field, validator) {
    	        var _this = this;
    	        var validatorArr = this.fields[field].validators;
    	        if (validator && validatorArr && validatorArr[validator]) {
    	            this.fields[field].validators[validator].enabled = enabled;
    	        }
    	        else if (!validator) {
    	            Object.keys(validatorArr).forEach(function (v) { return (_this.fields[field].validators[v].enabled = enabled); });
    	        }
    	        return this.updateFieldStatus(field, 'NotValidated', validator);
    	    };
    	    return Core;
    	}());
    	function formValidation(form, options) {
    	    var opts = Object.assign({}, {
    	        fields: {},
    	        locale: 'en_US',
    	        plugins: {},
    	        init: function (_) { },
    	    }, options);
    	    var core = new Core(form, opts.fields);
    	    core.setLocale(opts.locale, opts.localization);
    	    // Register plugins
    	    Object.keys(opts.plugins).forEach(function (name) { return core.registerPlugin(name, opts.plugins[name]); });
    	    // It's the single point that users can do a particular task before adding fields
    	    // Some initialization tasks must be done at that point
    	    opts.init(core);
    	    // and add fields
    	    Object.keys(opts.fields).forEach(function (field) { return core.addField(field, opts.fields[field]); });
    	    return core;
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var Plugin = /** @class */ (function () {
    	    function Plugin(opts) {
    	        this.opts = opts;
    	        this.isEnabled = true;
    	    }
    	    Plugin.prototype.setCore = function (core) {
    	        this.core = core;
    	        return this;
    	    };
    	    Plugin.prototype.enable = function () {
    	        this.isEnabled = true;
    	        this.onEnabled();
    	        return this;
    	    };
    	    Plugin.prototype.disable = function () {
    	        this.isEnabled = false;
    	        this.onDisabled();
    	        return this;
    	    };
    	    Plugin.prototype.isPluginEnabled = function () {
    	        return this.isEnabled;
    	    };
    	    Plugin.prototype.onEnabled = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
    	    Plugin.prototype.onDisabled = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
    	    Plugin.prototype.install = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
    	    Plugin.prototype.uninstall = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
    	    return Plugin;
    	}());

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Execute a callback function
    	 *
    	 * @param {Function | string} functionName Can be
    	 * - name of global function
    	 * - name of namespace function (such as A.B.C)
    	 * - a function
    	 * @param {any[]} args The callback arguments
    	 * @return {any}
    	 */
    	function call(functionName, args) {
    	    if ('function' === typeof functionName) {
    	        return functionName.apply(this, args);
    	    }
    	    else if ('string' === typeof functionName) {
    	        // Node that it doesn't support node.js based environment because we are trying to access `window`
    	        var name_1 = functionName;
    	        if ('()' === name_1.substring(name_1.length - 2)) {
    	            name_1 = name_1.substring(0, name_1.length - 2);
    	        }
    	        var ns = name_1.split('.');
    	        var func = ns.pop();
    	        var context_1 = window;
    	        for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
    	            var t = ns_1[_i];
    	            context_1 = context_1[t];
    	        }
    	        return typeof context_1[func] === 'undefined' ? null : context_1[func].apply(this, args);
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var addClass = function (element, classes) {
    	    classes.split(' ').forEach(function (clazz) {
    	        if (element.classList) {
    	            element.classList.add(clazz);
    	        }
    	        else if (" ".concat(element.className, " ").indexOf(" ".concat(clazz, " "))) {
    	            element.className += " ".concat(clazz);
    	        }
    	    });
    	};
    	var removeClass = function (element, classes) {
    	    classes.split(' ').forEach(function (clazz) {
    	        element.classList
    	            ? element.classList.remove(clazz)
    	            : (element.className = element.className.replace(clazz, ''));
    	    });
    	};
    	var classSet = function (element, classes) {
    	    var adding = [];
    	    var removing = [];
    	    Object.keys(classes).forEach(function (clazz) {
    	        if (clazz) {
    	            classes[clazz] ? adding.push(clazz) : removing.push(clazz);
    	        }
    	    });
    	    // Always remove before adding class because there might be a class which belong to both sets.
    	    // For example, the element will have class `a` after calling
    	    //  ```
    	    //  classSet(element, {
    	    //      'a a1 a2': true,
    	    //      'a b1 b2': false
    	    //  })
    	    //  ```
    	    removing.forEach(function (clazz) { return removeClass(element, clazz); });
    	    adding.forEach(function (clazz) { return addClass(element, clazz); });
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var matches = function (element, selector) {
    	    var nativeMatches = element.matches ||
    	        element.webkitMatchesSelector ||
    	        element['mozMatchesSelector'] ||
    	        element['msMatchesSelector'];
    	    if (nativeMatches) {
    	        return nativeMatches.call(element, selector);
    	    }
    	    // In case `matchesselector` isn't supported (such as IE10)
    	    // See http://caniuse.com/matchesselector
    	    var nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
    	    return nodes.indexOf(element) >= 0;
    	};
    	var closest = function (element, selector) {
    	    var ele = element;
    	    while (ele) {
    	        if (matches(ele, selector)) {
    	            break;
    	        }
    	        ele = ele.parentElement;
    	    }
    	    return ele;
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var generateString = function (length) {
    	    return Array(length)
    	        .fill('')
    	        .map(function (v) { return Math.random().toString(36).charAt(2); })
    	        .join('');
    	};
    	var fetch = function (url, options) {
    	    var toQuery = function (obj) {
    	        return Object.keys(obj)
    	            .map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k])); })
    	            .join('&');
    	    };
    	    return new Promise(function (resolve, reject) {
    	        var opts = Object.assign({}, {
    	            crossDomain: false,
    	            headers: {},
    	            method: 'GET',
    	            params: {},
    	        }, options);
    	        // Build the params for GET request
    	        var params = Object.keys(opts.params)
    	            .map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(opts.params[k])); })
    	            .join('&');
    	        var hasQuery = url.indexOf('?') > -1;
    	        var requestUrl = 'GET' === opts.method ? "".concat(url).concat(hasQuery ? '&' : '?').concat(params) : url;
    	        if (opts.crossDomain) {
    	            // User is making cross domain request
    	            var script_1 = document.createElement('script');
    	            // In some very fast systems, the different `Date.now()` invocations can return the same value
    	            // which leads to the issue where there are multiple remove validators are used, for example.
    	            // Appending it with a generated random string can fix the value
    	            var callback_1 = "___FormValidationFetch_".concat(generateString(12), "___");
    	            window[callback_1] = function (data) {
    	                delete window[callback_1];
    	                resolve(data);
    	            };
    	            script_1.src = "".concat(requestUrl).concat(hasQuery ? '&' : '?', "callback=").concat(callback_1);
    	            script_1.async = true;
    	            script_1.addEventListener('load', function () {
    	                script_1.parentNode.removeChild(script_1);
    	            });
    	            script_1.addEventListener('error', function () { return reject; });
    	            document.head.appendChild(script_1);
    	        }
    	        else {
    	            var request_1 = new XMLHttpRequest();
    	            request_1.open(opts.method, requestUrl);
    	            // Set the headers
    	            request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    	            if ('POST' === opts.method) {
    	                request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    	            }
    	            Object.keys(opts.headers).forEach(function (k) { return request_1.setRequestHeader(k, opts.headers[k]); });
    	            request_1.addEventListener('load', function () {
    	                // Cannot use arrow function here due to the `this` scope
    	                resolve(JSON.parse(this.responseText));
    	            });
    	            request_1.addEventListener('error', function () { return reject; });
    	            // GET request will ignore the passed data here
    	            request_1.send(toQuery(opts.params));
    	        }
    	    });
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Format a string
    	 * It's used to format the error message
    	 * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
    	 *
    	 * @param {string} message
    	 * @param {string|string[]} parameters
    	 * @returns {string}
    	 */
    	var format = function (message, parameters) {
    	    var params = Array.isArray(parameters) ? parameters : [parameters];
    	    var output = message;
    	    params.forEach(function (p) {
    	        output = output.replace('%s', p);
    	    });
    	    return output;
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var hasClass = function (element, clazz) {
    	    return element.classList
    	        ? element.classList.contains(clazz)
    	        : new RegExp("(^| )".concat(clazz, "( |$)"), 'gi').test(element.className);
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate a date
    	 *
    	 * @param {string} year The full year in 4 digits
    	 * @param {string} month The month number
    	 * @param {string} day The day number
    	 * @param {boolean} [notInFuture] If true, the date must not be in the future
    	 * @returns {boolean}
    	 */
    	var isValidDate = function (year, month, day, notInFuture) {
    	    if (isNaN(year) || isNaN(month) || isNaN(day)) {
    	        return false;
    	    }
    	    if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
    	        return false;
    	    }
    	    var numDays = [
    	        31,
    	        // Update the number of days in Feb of leap year
    	        year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 29 : 28,
    	        31,
    	        30,
    	        31,
    	        30,
    	        31,
    	        31,
    	        30,
    	        31,
    	        30,
    	        31,
    	    ];
    	    // Check the day
    	    if (day <= 0 || day > numDays[month - 1]) {
    	        return false;
    	    }
    	    if (notInFuture === true) {
    	        var currentDate = new Date();
    	        var currentYear = currentDate.getFullYear();
    	        var currentMonth = currentDate.getMonth();
    	        var currentDay = currentDate.getDate();
    	        return (year < currentYear ||
    	            (year === currentYear && month - 1 < currentMonth) ||
    	            (year === currentYear && month - 1 === currentMonth && day < currentDay));
    	    }
    	    return true;
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = function (obj) {
    	    return obj
    	        ? Object.entries(obj).reduce(function (a, _a) {
    	            var k = _a[0], v = _a[1];
    	            return (v === undefined ? a : ((a[k] = v), a));
    	        }, {})
    	        : {};
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var index = {
    	    call: call,
    	    classSet: classSet,
    	    closest: closest,
    	    fetch: fetch,
    	    format: format,
    	    hasClass: hasClass,
    	    isValidDate: isValidDate,
    	    removeUndefined: removeUndefined,
    	};

    	cjs$11.Plugin = Plugin;
    	cjs$11.algorithms = index$1;
    	cjs$11.formValidation = formValidation;
    	cjs$11.utils = index;
    	return cjs$11;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$11.exports = requireCjs$11();
    }

    var libExports$11 = lib$11.exports;

    var lib$10 = {exports: {}};

    var cjs$10 = {};

    var hasRequiredCjs$10;

    function requireCjs$10 () {
    	if (hasRequiredCjs$10) return cjs$10;
    	hasRequiredCjs$10 = 1;

    	var core = libExports$11;

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
    	 * This plugin allows to use multiple instances of the same validator by defining alias.
    	 * ```
    	 *  formValidation(form, {
    	 *      fields: {
    	 *          email: {
    	 *              validators: {
    	 *                  required: ...,
    	 *                  pattern: ...,
    	 *                  regexp: ...
    	 *              }
    	 *          }
    	 *      },
    	 *      plugins: {
    	 *          alias: new Alias({
    	 *              required: 'notEmpty',
    	 *              pattern: 'regexp'
    	 *          })
    	 *      }
    	 *  })
    	 * ```
    	 * Then, you can use the `required`, `pattern` as the same as `notEmpty`, `regexp` validators.
    	 */
    	var Alias = /** @class */ (function (_super) {
    	    __extends(Alias, _super);
    	    function Alias(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.opts = opts || {};
    	        _this.validatorNameFilter = _this.getValidatorName.bind(_this);
    	        return _this;
    	    }
    	    Alias.prototype.install = function () {
    	        this.core.registerFilter('validator-name', this.validatorNameFilter);
    	    };
    	    Alias.prototype.uninstall = function () {
    	        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    	    };
    	    Alias.prototype.getValidatorName = function (validatorName, _field) {
    	        return this.isEnabled ? this.opts[validatorName] || validatorName : validatorName;
    	    };
    	    return Alias;
    	}(core.Plugin));

    	cjs$10.Alias = Alias;
    	return cjs$10;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$10.exports = requireCjs$10();
    }

    var libExports$10 = lib$10.exports;

    var lib$$ = {exports: {}};

    var cjs$$ = {};

    var hasRequiredCjs$$;

    function requireCjs$$ () {
    	if (hasRequiredCjs$$) return cjs$$;
    	hasRequiredCjs$$ = 1;

    	var core = libExports$11;

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
    	 * This plugin adds ARIA attributes based on the field validity.
    	 * The list include:
    	 *  - `aria-invalid`, `aria-describedby` for field element
    	 *  - `aria-hidden`, `role` for associated message element
    	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
    	 */
    	var Aria = /** @class */ (function (_super) {
    	    __extends(Aria, _super);
    	    function Aria() {
    	        var _this = _super.call(this, {}) || this;
    	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
    	        _this.fieldValidHandler = _this.onFieldValid.bind(_this);
    	        _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
    	        _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
    	        return _this;
    	    }
    	    Aria.prototype.install = function () {
    	        this.core
    	            .on('core.field.valid', this.fieldValidHandler)
    	            .on('core.field.invalid', this.fieldInvalidHandler)
    	            .on('core.element.validated', this.elementValidatedHandler)
    	            .on('plugins.message.displayed', this.messageDisplayedHandler);
    	    };
    	    Aria.prototype.uninstall = function () {
    	        this.core
    	            .off('core.field.valid', this.fieldValidHandler)
    	            .off('core.field.invalid', this.fieldInvalidHandler)
    	            .off('core.element.validated', this.elementValidatedHandler)
    	            .off('plugins.message.displayed', this.messageDisplayedHandler);
    	    };
    	    Aria.prototype.onElementValidated = function (e) {
    	        if (e.valid) {
    	            e.element.setAttribute('aria-invalid', 'false');
    	            e.element.removeAttribute('aria-describedby');
    	        }
    	    };
    	    Aria.prototype.onFieldValid = function (field) {
    	        var elements = this.core.getElements(field);
    	        if (elements) {
    	            elements.forEach(function (ele) {
    	                ele.setAttribute('aria-invalid', 'false');
    	                ele.removeAttribute('aria-describedby');
    	            });
    	        }
    	    };
    	    Aria.prototype.onFieldInvalid = function (field) {
    	        var elements = this.core.getElements(field);
    	        if (elements) {
    	            elements.forEach(function (ele) { return ele.setAttribute('aria-invalid', 'true'); });
    	        }
    	    };
    	    Aria.prototype.onMessageDisplayed = function (e) {
    	        e.messageElement.setAttribute('role', 'alert');
    	        e.messageElement.setAttribute('aria-hidden', 'false');
    	        var elements = this.core.getElements(e.field);
    	        var index = elements.indexOf(e.element);
    	        var id = "js-fv-".concat(e.field, "-").concat(index, "-").concat(Date.now(), "-message");
    	        e.messageElement.setAttribute('id', id);
    	        e.element.setAttribute('aria-describedby', id);
    	        var type = e.element.getAttribute('type');
    	        if ('radio' === type || 'checkbox' === type) {
    	            elements.forEach(function (ele) { return ele.setAttribute('aria-describedby', id); });
    	        }
    	    };
    	    return Aria;
    	}(core.Plugin));

    	cjs$$.Aria = Aria;
    	return cjs$$;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$$.exports = requireCjs$$();
    }

    var libExports$$ = lib$$.exports;

    var lib$_ = {exports: {}};

    var cjs$_ = {};

    var hasRequiredCjs$_;

    function requireCjs$_ () {
    	if (hasRequiredCjs$_) return cjs$_;
    	hasRequiredCjs$_ = 1;

    	var core = libExports$11;

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

    	cjs$_.Declarative = Declarative;
    	return cjs$_;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$_.exports = requireCjs$_();
    }

    var libExports$_ = lib$_.exports;

    var lib$Z = {exports: {}};

    var cjs$Z = {};

    var hasRequiredCjs$Z;

    function requireCjs$Z () {
    	if (hasRequiredCjs$Z) return cjs$Z;
    	hasRequiredCjs$Z = 1;

    	var core = libExports$11;

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
    	 * This plugin will submit the form if all fields are valid after validating
    	 */
    	var DefaultSubmit = /** @class */ (function (_super) {
    	    __extends(DefaultSubmit, _super);
    	    function DefaultSubmit() {
    	        var _this = _super.call(this, {}) || this;
    	        _this.onValidHandler = _this.onFormValid.bind(_this);
    	        return _this;
    	    }
    	    DefaultSubmit.prototype.install = function () {
    	        var form = this.core.getFormElement();
    	        if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
    	            throw new Error('Do not use `submit` for the name attribute of submit button');
    	        }
    	        this.core.on('core.form.valid', this.onValidHandler);
    	    };
    	    DefaultSubmit.prototype.uninstall = function () {
    	        this.core.off('core.form.valid', this.onValidHandler);
    	    };
    	    DefaultSubmit.prototype.onFormValid = function () {
    	        var form = this.core.getFormElement();
    	        if (this.isEnabled && form instanceof HTMLFormElement) {
    	            form.submit();
    	        }
    	    };
    	    return DefaultSubmit;
    	}(core.Plugin));

    	cjs$Z.DefaultSubmit = DefaultSubmit;
    	return cjs$Z;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$Z.exports = requireCjs$Z();
    }

    var libExports$Z = lib$Z.exports;

    var lib$Y = {exports: {}};

    var cjs$Y = {};

    var hasRequiredCjs$Y;

    function requireCjs$Y () {
    	if (hasRequiredCjs$Y) return cjs$Y;
    	hasRequiredCjs$Y = 1;

    	var core = libExports$11;

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

    	cjs$Y.Dependency = Dependency;
    	return cjs$Y;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$Y.exports = requireCjs$Y();
    }

    var libExports$Y = lib$Y.exports;

    var lib$X = {exports: {}};

    var cjs$X = {};

    var hasRequiredCjs$X;

    function requireCjs$X () {
    	if (hasRequiredCjs$X) return cjs$X;
    	hasRequiredCjs$X = 1;

    	var core = libExports$11;

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
    	var removeUndefined = core.utils.removeUndefined;
    	var Excluded = /** @class */ (function (_super) {
    	    __extends(Excluded, _super);
    	    function Excluded(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.opts = Object.assign({}, { excluded: Excluded.defaultIgnore }, removeUndefined(opts));
    	        _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
    	        return _this;
    	    }
    	    Excluded.defaultIgnore = function (_field, element, _elements) {
    	        var isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    	        var disabled = element.getAttribute('disabled');
    	        return disabled === '' || disabled === 'disabled' || element.getAttribute('type') === 'hidden' || !isVisible;
    	    };
    	    Excluded.prototype.install = function () {
    	        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    	    };
    	    Excluded.prototype.uninstall = function () {
    	        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    	    };
    	    Excluded.prototype.ignoreValidation = function (field, element, elements) {
    	        if (!this.isEnabled) {
    	            return false;
    	        }
    	        return this.opts.excluded.apply(this, [field, element, elements]);
    	    };
    	    return Excluded;
    	}(core.Plugin));

    	cjs$X.Excluded = Excluded;
    	return cjs$X;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$X.exports = requireCjs$X();
    }

    var libExports$X = lib$X.exports;

    var lib$W = {exports: {}};

    var cjs$W = {};

    var hasRequiredCjs$W;

    function requireCjs$W () {
    	if (hasRequiredCjs$W) return cjs$W;
    	hasRequiredCjs$W = 1;

    	var core = libExports$11;

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
    	var FieldStatus = /** @class */ (function (_super) {
    	    __extends(FieldStatus, _super);
    	    function FieldStatus(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.statuses = new Map();
    	        _this.opts = Object.assign({}, {
    	            onStatusChanged: function () { },
    	        }, opts);
    	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
    	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
    	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
    	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
    	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
    	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
    	        return _this;
    	    }
    	    FieldStatus.prototype.install = function () {
    	        this.core
    	            .on('core.element.validating', this.elementValidatingHandler)
    	            .on('core.element.validated', this.elementValidatedHandler)
    	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .on('core.element.ignored', this.elementIgnoredHandler)
    	            .on('core.field.added', this.fieldAddedHandler)
    	            .on('core.field.removed', this.fieldRemovedHandler);
    	    };
    	    FieldStatus.prototype.uninstall = function () {
    	        this.statuses.clear();
    	        this.core
    	            .off('core.element.validating', this.elementValidatingHandler)
    	            .off('core.element.validated', this.elementValidatedHandler)
    	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .off('core.element.ignored', this.elementIgnoredHandler)
    	            .off('core.field.added', this.fieldAddedHandler)
    	            .off('core.field.removed', this.fieldRemovedHandler);
    	    };
    	    FieldStatus.prototype.areFieldsValid = function () {
    	        return Array.from(this.statuses.values()).every(function (value) {
    	            return value === 'Valid' || value === 'NotValidated' || value === 'Ignored';
    	        });
    	    };
    	    FieldStatus.prototype.getStatuses = function () {
    	        return this.isEnabled ? this.statuses : new Map();
    	    };
    	    FieldStatus.prototype.onFieldAdded = function (e) {
    	        this.statuses.set(e.field, 'NotValidated');
    	    };
    	    FieldStatus.prototype.onFieldRemoved = function (e) {
    	        if (this.statuses.has(e.field)) {
    	            this.statuses.delete(e.field);
    	        }
    	        this.handleStatusChanged(this.areFieldsValid());
    	    };
    	    FieldStatus.prototype.onElementValidating = function (e) {
    	        this.statuses.set(e.field, 'Validating');
    	        this.handleStatusChanged(false);
    	    };
    	    FieldStatus.prototype.onElementValidated = function (e) {
    	        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
    	        if (e.valid) {
    	            this.handleStatusChanged(this.areFieldsValid());
    	        }
    	        else {
    	            this.handleStatusChanged(false);
    	        }
    	    };
    	    FieldStatus.prototype.onElementNotValidated = function (e) {
    	        this.statuses.set(e.field, 'NotValidated');
    	        this.handleStatusChanged(false);
    	    };
    	    FieldStatus.prototype.onElementIgnored = function (e) {
    	        this.statuses.set(e.field, 'Ignored');
    	        this.handleStatusChanged(this.areFieldsValid());
    	    };
    	    FieldStatus.prototype.handleStatusChanged = function (areFieldsValid) {
    	        if (this.isEnabled) {
    	            this.opts.onStatusChanged(areFieldsValid);
    	        }
    	    };
    	    return FieldStatus;
    	}(core.Plugin));

    	cjs$W.FieldStatus = FieldStatus;
    	return cjs$W;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$W.exports = requireCjs$W();
    }

    var libExports$W = lib$W.exports;

    var lib$V = {exports: {}};

    var lib$U = {exports: {}};

    var cjs$V = {};

    var hasRequiredCjs$V;

    function requireCjs$V () {
    	if (hasRequiredCjs$V) return cjs$V;
    	hasRequiredCjs$V = 1;

    	var core = libExports$11;

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
    	}(core.Plugin));

    	cjs$V.Message = Message;
    	return cjs$V;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$U.exports = requireCjs$V();
    }

    var libExports$V = lib$U.exports;

    var cjs$U = {};

    var hasRequiredCjs$U;

    function requireCjs$U () {
    	if (hasRequiredCjs$U) return cjs$U;
    	hasRequiredCjs$U = 1;

    	var core = libExports$11;
    	var pluginMessage = libExports$V;

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
    	var classSet = core.utils.classSet, closest = core.utils.closest;
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
    	            this.core.registerPlugin(Framework.MESSAGE_PLUGIN, new pluginMessage.Message({
    	                clazz: this.opts.messageClass,
    	                container: function (field, element) {
    	                    var selector = 'string' === typeof _this.opts.rowSelector
    	                        ? _this.opts.rowSelector
    	                        : _this.opts.rowSelector(field, element);
    	                    var groupEle = closest(element, selector);
    	                    return pluginMessage.Message.getClosestContainer(element, groupEle, _this.opts.rowPattern);
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
    	}(core.Plugin));

    	cjs$U.Framework = Framework;
    	return cjs$U;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$V.exports = requireCjs$U();
    }

    var libExports$U = lib$V.exports;

    var lib$T = {exports: {}};

    var cjs$T = {};

    var hasRequiredCjs$T;

    function requireCjs$T () {
    	if (hasRequiredCjs$T) return cjs$T;
    	hasRequiredCjs$T = 1;

    	var core = libExports$11;

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
    	var Icon = /** @class */ (function (_super) {
    	    __extends(Icon, _super);
    	    function Icon(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        // Map the field element with icon
    	        _this.icons = new Map();
    	        _this.opts = Object.assign({}, {
    	            invalid: 'fv-plugins-icon--invalid',
    	            onPlaced: function () { },
    	            onSet: function () { },
    	            valid: 'fv-plugins-icon--valid',
    	            validating: 'fv-plugins-icon--validating',
    	        }, opts);
    	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
    	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
    	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
    	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
    	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
    	        return _this;
    	    }
    	    Icon.prototype.install = function () {
    	        this.core
    	            .on('core.element.validating', this.elementValidatingHandler)
    	            .on('core.element.validated', this.elementValidatedHandler)
    	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .on('core.element.ignored', this.elementIgnoredHandler)
    	            .on('core.field.added', this.fieldAddedHandler);
    	    };
    	    Icon.prototype.uninstall = function () {
    	        this.icons.forEach(function (icon) { return icon.parentNode.removeChild(icon); });
    	        this.icons.clear();
    	        this.core
    	            .off('core.element.validating', this.elementValidatingHandler)
    	            .off('core.element.validated', this.elementValidatedHandler)
    	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .off('core.element.ignored', this.elementIgnoredHandler)
    	            .off('core.field.added', this.fieldAddedHandler);
    	    };
    	    Icon.prototype.onEnabled = function () {
    	        this.icons.forEach(function (_element, i, _map) {
    	            classSet(i, {
    	                'fv-plugins-icon--enabled': true,
    	                'fv-plugins-icon--disabled': false,
    	            });
    	        });
    	    };
    	    Icon.prototype.onDisabled = function () {
    	        this.icons.forEach(function (_element, i, _map) {
    	            classSet(i, {
    	                'fv-plugins-icon--enabled': false,
    	                'fv-plugins-icon--disabled': true,
    	            });
    	        });
    	    };
    	    Icon.prototype.onFieldAdded = function (e) {
    	        var _this = this;
    	        var elements = e.elements;
    	        if (elements) {
    	            elements.forEach(function (ele) {
    	                var icon = _this.icons.get(ele);
    	                if (icon) {
    	                    icon.parentNode.removeChild(icon);
    	                    _this.icons.delete(ele);
    	                }
    	            });
    	            this.prepareFieldIcon(e.field, elements);
    	        }
    	    };
    	    Icon.prototype.prepareFieldIcon = function (field, elements) {
    	        var _this = this;
    	        if (elements.length) {
    	            var type = elements[0].getAttribute('type');
    	            if ('radio' === type || 'checkbox' === type) {
    	                this.prepareElementIcon(field, elements[0]);
    	            }
    	            else {
    	                elements.forEach(function (ele) { return _this.prepareElementIcon(field, ele); });
    	            }
    	        }
    	    };
    	    Icon.prototype.prepareElementIcon = function (field, ele) {
    	        var i = document.createElement('i');
    	        i.setAttribute('data-field', field);
    	        // Append the icon right after the field element
    	        ele.parentNode.insertBefore(i, ele.nextSibling);
    	        classSet(i, {
    	            'fv-plugins-icon': true,
    	            'fv-plugins-icon--enabled': this.isEnabled,
    	            'fv-plugins-icon--disabled': !this.isEnabled,
    	        });
    	        var e = {
    	            classes: {
    	                invalid: this.opts.invalid,
    	                valid: this.opts.valid,
    	                validating: this.opts.validating,
    	            },
    	            element: ele,
    	            field: field,
    	            iconElement: i,
    	        };
    	        this.core.emit('plugins.icon.placed', e);
    	        this.opts.onPlaced(e);
    	        this.icons.set(ele, i);
    	    };
    	    Icon.prototype.onElementValidating = function (e) {
    	        var _a;
    	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
    	            _a[this.opts.invalid] = false,
    	            _a[this.opts.valid] = false,
    	            _a[this.opts.validating] = true,
    	            _a));
    	        var evt = {
    	            element: e.element,
    	            field: e.field,
    	            iconElement: icon,
    	            status: 'Validating',
    	        };
    	        this.core.emit('plugins.icon.set', evt);
    	        this.opts.onSet(evt);
    	    };
    	    Icon.prototype.onElementValidated = function (e) {
    	        var _a;
    	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
    	            _a[this.opts.invalid] = !e.valid,
    	            _a[this.opts.valid] = e.valid,
    	            _a[this.opts.validating] = false,
    	            _a));
    	        var evt = {
    	            element: e.element,
    	            field: e.field,
    	            iconElement: icon,
    	            status: e.valid ? 'Valid' : 'Invalid',
    	        };
    	        this.core.emit('plugins.icon.set', evt);
    	        this.opts.onSet(evt);
    	    };
    	    Icon.prototype.onElementNotValidated = function (e) {
    	        var _a;
    	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
    	            _a[this.opts.invalid] = false,
    	            _a[this.opts.valid] = false,
    	            _a[this.opts.validating] = false,
    	            _a));
    	        var evt = {
    	            element: e.element,
    	            field: e.field,
    	            iconElement: icon,
    	            status: 'NotValidated',
    	        };
    	        this.core.emit('plugins.icon.set', evt);
    	        this.opts.onSet(evt);
    	    };
    	    Icon.prototype.onElementIgnored = function (e) {
    	        var _a;
    	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
    	            _a[this.opts.invalid] = false,
    	            _a[this.opts.valid] = false,
    	            _a[this.opts.validating] = false,
    	            _a));
    	        var evt = {
    	            element: e.element,
    	            field: e.field,
    	            iconElement: icon,
    	            status: 'Ignored',
    	        };
    	        this.core.emit('plugins.icon.set', evt);
    	        this.opts.onSet(evt);
    	    };
    	    Icon.prototype.setClasses = function (_field, element, elements, classes) {
    	        var type = element.getAttribute('type');
    	        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
    	        if (this.icons.has(ele)) {
    	            var icon = this.icons.get(ele);
    	            classSet(icon, classes);
    	            return icon;
    	        }
    	        else {
    	            return null;
    	        }
    	    };
    	    return Icon;
    	}(core.Plugin));

    	cjs$T.Icon = Icon;
    	return cjs$T;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$T.exports = requireCjs$T();
    }

    var libExports$T = lib$T.exports;

    var lib$S = {exports: {}};

    var cjs$S = {};

    var hasRequiredCjs$S;

    function requireCjs$S () {
    	if (hasRequiredCjs$S) return cjs$S;
    	hasRequiredCjs$S = 1;

    	var core = libExports$11;

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
    	var removeUndefined = core.utils.removeUndefined;
    	/**
    	 * ```
    	 *  new Core(form, { ... })
    	 *      .registerPlugin('sequence', new Sequence({
    	 *          enabled: false // Default value is `true`
    	 *      }));
    	 * ```
    	 *
    	 * The `enabled` option can be:
    	 * - `true` (default): When a field has multiple validators, all of them will be checked respectively.
    	 * If errors occur in multiple validators, all of them will be displayed to the user
    	 * - `false`: When a field has multiple validators, validation for this field will be terminated upon the
    	 * first encountered error.
    	 * Thus, only the very first error message related to this field will be displayed to the user
    	 *
    	 * User can set the `enabled` option to all fields as sample code above, or apply it for specific fields as following:
    	 * ```
    	 *  new Core(form, { ... })
    	 *      .registerPlugin('sequence', new Sequence({
    	 *          enabled: {
    	 *              fullName: true, // It's not necessary since the default value is `true`
    	 *              username: false,
    	 *              email: false
    	 *          }
    	 *      }));
    	 * ```
    	 */
    	var Sequence = /** @class */ (function (_super) {
    	    __extends(Sequence, _super);
    	    function Sequence(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.invalidFields = new Map();
    	        _this.opts = Object.assign({}, { enabled: true }, removeUndefined(opts));
    	        _this.validatorHandler = _this.onValidatorValidated.bind(_this);
    	        _this.shouldValidateFilter = _this.shouldValidate.bind(_this);
    	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
    	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
    	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
    	        return _this;
    	    }
    	    Sequence.prototype.install = function () {
    	        this.core
    	            .on('core.validator.validated', this.validatorHandler)
    	            .on('core.field.added', this.fieldAddedHandler)
    	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .on('core.element.validating', this.elementValidatingHandler)
    	            .registerFilter('field-should-validate', this.shouldValidateFilter);
    	    };
    	    Sequence.prototype.uninstall = function () {
    	        this.invalidFields.clear();
    	        this.core
    	            .off('core.validator.validated', this.validatorHandler)
    	            .off('core.field.added', this.fieldAddedHandler)
    	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
    	            .off('core.element.validating', this.elementValidatingHandler)
    	            .deregisterFilter('field-should-validate', this.shouldValidateFilter);
    	    };
    	    Sequence.prototype.shouldValidate = function (field, element, _value, validator) {
    	        if (!this.isEnabled) {
    	            return true;
    	        }
    	        // Stop validating
    	        // if the `enabled` option is set to `false`
    	        // and there's at least one validator that field doesn't pass
    	        var stop = (this.opts.enabled === true || this.opts.enabled[field] === true) &&
    	            this.invalidFields.has(element) &&
    	            !!this.invalidFields.get(element).length &&
    	            this.invalidFields.get(element).indexOf(validator) === -1;
    	        return !stop;
    	    };
    	    Sequence.prototype.onValidatorValidated = function (e) {
    	        var validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
    	        var index = validators.indexOf(e.validator);
    	        if (e.result.valid && index >= 0) {
    	            validators.splice(index, 1);
    	        }
    	        else if (!e.result.valid && index === -1) {
    	            validators.push(e.validator);
    	        }
    	        this.invalidFields.set(e.element, validators);
    	    };
    	    Sequence.prototype.onFieldAdded = function (e) {
    	        // Remove the field element from set of invalid elements
    	        if (e.elements) {
    	            this.clearInvalidFields(e.elements);
    	        }
    	    };
    	    Sequence.prototype.onElementNotValidated = function (e) {
    	        this.clearInvalidFields(e.elements);
    	    };
    	    Sequence.prototype.onElementValidating = function (e) {
    	        this.clearInvalidFields(e.elements);
    	    };
    	    Sequence.prototype.clearInvalidFields = function (elements) {
    	        var _this = this;
    	        elements.forEach(function (ele) { return _this.invalidFields.delete(ele); });
    	    };
    	    return Sequence;
    	}(core.Plugin));

    	cjs$S.Sequence = Sequence;
    	return cjs$S;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$S.exports = requireCjs$S();
    }

    var libExports$S = lib$S.exports;

    var lib$R = {exports: {}};

    var cjs$R = {};

    var hasRequiredCjs$R;

    function requireCjs$R () {
    	if (hasRequiredCjs$R) return cjs$R;
    	hasRequiredCjs$R = 1;

    	var core = libExports$11;

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
    	var SubmitButton = /** @class */ (function (_super) {
    	    __extends(SubmitButton, _super);
    	    function SubmitButton(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.isFormValid = false;
    	        _this.isButtonClicked = false;
    	        _this.opts = Object.assign({}, {
    	            // Set it to `true` to support classical ASP.Net form
    	            aspNetButton: false,
    	            // By default, don't perform validation when clicking on
    	            // the submit button/input which have `formnovalidate` attribute
    	            buttons: function (form) {
    	                return [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])'));
    	            },
    	            liveMode: true,
    	        }, opts);
    	        _this.submitHandler = _this.handleSubmitEvent.bind(_this);
    	        _this.buttonClickHandler = _this.handleClickEvent.bind(_this);
    	        _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
    	        return _this;
    	    }
    	    SubmitButton.prototype.install = function () {
    	        var _this = this;
    	        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
    	            return;
    	        }
    	        var form = this.core.getFormElement();
    	        this.submitButtons = this.opts.buttons(form);
    	        // Disable client side validation in HTML 5
    	        form.setAttribute('novalidate', 'novalidate');
    	        // Disable the default submission first
    	        form.addEventListener('submit', this.submitHandler);
    	        this.hiddenClickedEle = document.createElement('input');
    	        this.hiddenClickedEle.setAttribute('type', 'hidden');
    	        form.appendChild(this.hiddenClickedEle);
    	        this.submitButtons.forEach(function (button) {
    	            button.addEventListener('click', _this.buttonClickHandler);
    	        });
    	        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
    	    };
    	    SubmitButton.prototype.uninstall = function () {
    	        var _this = this;
    	        var form = this.core.getFormElement();
    	        if (form instanceof HTMLFormElement) {
    	            form.removeEventListener('submit', this.submitHandler);
    	        }
    	        this.submitButtons.forEach(function (button) {
    	            button.removeEventListener('click', _this.buttonClickHandler);
    	        });
    	        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
    	        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
    	    };
    	    SubmitButton.prototype.handleSubmitEvent = function (e) {
    	        this.validateForm(e);
    	    };
    	    SubmitButton.prototype.handleClickEvent = function (e) {
    	        var target = e.currentTarget;
    	        this.isButtonClicked = true;
    	        if (target instanceof HTMLElement) {
    	            if (this.opts.aspNetButton && this.isFormValid === true) ;
    	            else {
    	                var form = this.core.getFormElement();
    	                form.removeEventListener('submit', this.submitHandler);
    	                this.clickedButton = e.target;
    	                var name_1 = this.clickedButton.getAttribute('name');
    	                var value = this.clickedButton.getAttribute('value');
    	                if (name_1 && value) {
    	                    this.hiddenClickedEle.setAttribute('name', name_1);
    	                    this.hiddenClickedEle.setAttribute('value', value);
    	                }
    	                this.validateForm(e);
    	            }
    	        }
    	    };
    	    SubmitButton.prototype.validateForm = function (e) {
    	        var _this = this;
    	        if (!this.isEnabled) {
    	            return;
    	        }
    	        e.preventDefault();
    	        this.core.validate().then(function (result) {
    	            if (result === 'Valid' && _this.opts.aspNetButton && !_this.isFormValid && _this.clickedButton) {
    	                _this.isFormValid = true;
    	                _this.clickedButton.removeEventListener('click', _this.buttonClickHandler);
    	                // It's the time for ASP.Net submit button to do its own submission
    	                _this.clickedButton.click();
    	            }
    	        });
    	    };
    	    SubmitButton.prototype.ignoreValidation = function (_field, _element, _elements) {
    	        if (!this.isEnabled) {
    	            return false;
    	        }
    	        return this.opts.liveMode ? false : !this.isButtonClicked;
    	    };
    	    return SubmitButton;
    	}(core.Plugin));

    	cjs$R.SubmitButton = SubmitButton;
    	return cjs$R;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$R.exports = requireCjs$R();
    }

    var libExports$R = lib$R.exports;

    var lib$Q = {exports: {}};

    var cjs$Q = {};

    var hasRequiredCjs$Q;

    function requireCjs$Q () {
    	if (hasRequiredCjs$Q) return cjs$Q;
    	hasRequiredCjs$Q = 1;

    	var core = libExports$11;

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
    	var Tooltip = /** @class */ (function (_super) {
    	    __extends(Tooltip, _super);
    	    function Tooltip(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        // Map the element with message
    	        _this.messages = new Map();
    	        _this.opts = Object.assign({}, {
    	            placement: 'top',
    	            trigger: 'click',
    	        }, opts);
    	        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
    	        _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
    	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
    	        _this.documentClickHandler = _this.onDocumentClicked.bind(_this);
    	        return _this;
    	    }
    	    Tooltip.prototype.install = function () {
    	        var _a;
    	        this.tip = document.createElement('div');
    	        classSet(this.tip, (_a = {
    	                'fv-plugins-tooltip': true
    	            },
    	            _a["fv-plugins-tooltip--".concat(this.opts.placement)] = true,
    	            _a));
    	        document.body.appendChild(this.tip);
    	        this.core
    	            .on('plugins.icon.placed', this.iconPlacedHandler)
    	            .on('core.validator.validated', this.validatorValidatedHandler)
    	            .on('core.element.validated', this.elementValidatedHandler);
    	        if ('click' === this.opts.trigger) {
    	            document.addEventListener('click', this.documentClickHandler);
    	        }
    	    };
    	    Tooltip.prototype.uninstall = function () {
    	        this.messages.clear();
    	        document.body.removeChild(this.tip);
    	        this.core
    	            .off('plugins.icon.placed', this.iconPlacedHandler)
    	            .off('core.validator.validated', this.validatorValidatedHandler)
    	            .off('core.element.validated', this.elementValidatedHandler);
    	        if ('click' === this.opts.trigger) {
    	            document.removeEventListener('click', this.documentClickHandler);
    	        }
    	    };
    	    Tooltip.prototype.onIconPlaced = function (e) {
    	        var _this = this;
    	        classSet(e.iconElement, {
    	            'fv-plugins-tooltip-icon': true,
    	        });
    	        switch (this.opts.trigger) {
    	            case 'hover':
    	                e.iconElement.addEventListener('mouseenter', function (evt) { return _this.show(e.element, evt); });
    	                e.iconElement.addEventListener('mouseleave', function (_evt) { return _this.hide(); });
    	                break;
    	            case 'click':
    	            default:
    	                e.iconElement.addEventListener('click', function (evt) { return _this.show(e.element, evt); });
    	                break;
    	        }
    	    };
    	    Tooltip.prototype.onValidatorValidated = function (e) {
    	        if (!e.result.valid) {
    	            var elements = e.elements;
    	            var type = e.element.getAttribute('type');
    	            var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
    	            // Get the message
    	            var message = typeof e.result.message === 'string' ? e.result.message : e.result.message[this.core.getLocale()];
    	            this.messages.set(ele, message);
    	        }
    	    };
    	    Tooltip.prototype.onElementValidated = function (e) {
    	        if (e.valid) {
    	            // Clear the message
    	            var elements = e.elements;
    	            var type = e.element.getAttribute('type');
    	            var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
    	            this.messages.delete(ele);
    	        }
    	    };
    	    Tooltip.prototype.onDocumentClicked = function (_e) {
    	        this.hide();
    	    };
    	    Tooltip.prototype.show = function (ele, e) {
    	        if (!this.isEnabled) {
    	            return;
    	        }
    	        e.preventDefault();
    	        e.stopPropagation();
    	        if (!this.messages.has(ele)) {
    	            return;
    	        }
    	        classSet(this.tip, {
    	            'fv-plugins-tooltip--hide': false,
    	        });
    	        this.tip.innerHTML = "<div class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(ele), "</div>");
    	        // Calculate position of the icon element
    	        var icon = e.target;
    	        var targetRect = icon.getBoundingClientRect();
    	        var _a = this.tip.getBoundingClientRect(), height = _a.height, width = _a.width;
    	        var top = 0;
    	        var left = 0;
    	        switch (this.opts.placement) {
    	            case 'bottom':
    	                top = targetRect.top + targetRect.height;
    	                left = targetRect.left + targetRect.width / 2 - width / 2;
    	                break;
    	            case 'bottom-left':
    	                top = targetRect.top + targetRect.height;
    	                left = targetRect.left;
    	                break;
    	            case 'bottom-right':
    	                top = targetRect.top + targetRect.height;
    	                left = targetRect.left + targetRect.width - width;
    	                break;
    	            case 'left':
    	                top = targetRect.top + targetRect.height / 2 - height / 2;
    	                left = targetRect.left - width;
    	                break;
    	            case 'right':
    	                top = targetRect.top + targetRect.height / 2 - height / 2;
    	                left = targetRect.left + targetRect.width;
    	                break;
    	            case 'top-left':
    	                top = targetRect.top - height;
    	                left = targetRect.left;
    	                break;
    	            case 'top-right':
    	                top = targetRect.top - height;
    	                left = targetRect.left + targetRect.width - width;
    	                break;
    	            case 'top':
    	            default:
    	                top = targetRect.top - height;
    	                left = targetRect.left + targetRect.width / 2 - width / 2;
    	                break;
    	        }
    	        var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    	        var scrollLeft = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    	        top = top + scrollTop;
    	        left = left + scrollLeft;
    	        this.tip.setAttribute('style', "top: ".concat(top, "px; left: ").concat(left, "px"));
    	    };
    	    Tooltip.prototype.hide = function () {
    	        if (this.isEnabled) {
    	            classSet(this.tip, {
    	                'fv-plugins-tooltip--hide': true,
    	            });
    	        }
    	    };
    	    return Tooltip;
    	}(core.Plugin));

    	cjs$Q.Tooltip = Tooltip;
    	return cjs$Q;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$Q.exports = requireCjs$Q();
    }

    var libExports$Q = lib$Q.exports;

    var lib$P = {exports: {}};

    var cjs$P = {};

    var hasRequiredCjs$P;

    function requireCjs$P () {
    	if (hasRequiredCjs$P) return cjs$P;
    	hasRequiredCjs$P = 1;

    	var core = libExports$11;

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
    	 * Indicate the events which the validation will be executed when these events are triggered
    	 *
    	 * ```
    	 *  const fv = formValidation(form, {
    	 *      fields: {
    	 *          fullName: {},
    	 *          email: {},
    	 *      },
    	 *  });
    	 *
    	 *  // Validate fields when the `blur` events are triggered
    	 *  fv.registerPlugin(Trigger, {
    	 *      event: 'blur',
    	 *  });
    	 *
    	 *  // We can indicate different events for each particular field
    	 *  fv.registerPlugin(Trigger, {
    	 *      event: {
    	 *          fullName: 'blur',
    	 *          email: 'change',
    	 *      },
    	 *  });
    	 *
    	 *  // If we don't want the field to be validated automatically, set the associate value to `false`
    	 *  fv.registerPlugin(Trigger, {
    	 *      event: {
    	 *          email: false,    // The field is only validated when we click the submit button of form
    	 *      },
    	 *  });
    	 * ```
    	 */
    	var Trigger = /** @class */ (function (_super) {
    	    __extends(Trigger, _super);
    	    function Trigger(opts) {
    	        var _this = _super.call(this, opts) || this;
    	        _this.handlers = [];
    	        _this.timers = new Map();
    	        var ele = document.createElement('div');
    	        _this.defaultEvent = !('oninput' in ele) ? 'keyup' : 'input';
    	        _this.opts = Object.assign({}, {
    	            delay: 0,
    	            event: _this.defaultEvent,
    	            threshold: 0,
    	        }, opts);
    	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
    	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
    	        return _this;
    	    }
    	    Trigger.prototype.install = function () {
    	        this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
    	    };
    	    Trigger.prototype.uninstall = function () {
    	        this.handlers.forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
    	        this.handlers = [];
    	        this.timers.forEach(function (t) { return window.clearTimeout(t); });
    	        this.timers.clear();
    	        this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
    	    };
    	    Trigger.prototype.prepareHandler = function (field, elements) {
    	        var _this = this;
    	        elements.forEach(function (ele) {
    	            var events = [];
    	            if (!!_this.opts.event && _this.opts.event[field] === false) {
    	                events = [];
    	            }
    	            else if (!!_this.opts.event && !!_this.opts.event[field] && typeof _this.opts.event[field] !== 'function') {
    	                // To fix the case where `field` is a special property of String
    	                // For example, `link` is the special function of `String.prototype`
    	                // In this case, `this.opts.event[field]` is a function, not a string
    	                events = _this.opts.event[field].split(' ');
    	            }
    	            else if ('string' === typeof _this.opts.event && _this.opts.event !== _this.defaultEvent) {
    	                events = _this.opts.event.split(' ');
    	            }
    	            else {
    	                var type = ele.getAttribute('type');
    	                var tagName = ele.tagName.toLowerCase();
    	                // IE10/11 fires the `input` event when focus on the field having a placeholder
    	                var event_1 = 'radio' === type || 'checkbox' === type || 'file' === type || 'select' === tagName
    	                    ? 'change'
    	                    : _this.ieVersion >= 10 && ele.getAttribute('placeholder')
    	                        ? 'keyup'
    	                        : _this.defaultEvent;
    	                events = [event_1];
    	            }
    	            events.forEach(function (evt) {
    	                var evtHandler = function (e) { return _this.handleEvent(e, field, ele); };
    	                _this.handlers.push({
    	                    element: ele,
    	                    event: evt,
    	                    field: field,
    	                    handler: evtHandler,
    	                });
    	                ele.addEventListener(evt, evtHandler);
    	            });
    	        });
    	    };
    	    Trigger.prototype.handleEvent = function (e, field, ele) {
    	        var _this = this;
    	        if (this.isEnabled &&
    	            this.exceedThreshold(field, ele) &&
    	            this.core.executeFilter('plugins-trigger-should-validate', true, [field, ele])) {
    	            var handler = function () {
    	                return _this.core.validateElement(field, ele).then(function (_) {
    	                    _this.core.emit('plugins.trigger.executed', {
    	                        element: ele,
    	                        event: e,
    	                        field: field,
    	                    });
    	                });
    	            };
    	            var delay = this.opts.delay[field] || this.opts.delay;
    	            if (delay === 0) {
    	                handler();
    	            }
    	            else {
    	                var timer = this.timers.get(ele);
    	                if (timer) {
    	                    window.clearTimeout(timer);
    	                }
    	                this.timers.set(ele, window.setTimeout(handler, delay * 1000));
    	            }
    	        }
    	    };
    	    Trigger.prototype.onFieldAdded = function (e) {
    	        this.handlers
    	            .filter(function (item) { return item.field === e.field; })
    	            .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
    	        this.prepareHandler(e.field, e.elements);
    	    };
    	    Trigger.prototype.onFieldRemoved = function (e) {
    	        this.handlers
    	            .filter(function (item) { return item.field === e.field && e.elements.indexOf(item.element) >= 0; })
    	            .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
    	    };
    	    Trigger.prototype.exceedThreshold = function (field, element) {
    	        var threshold = this.opts.threshold[field] === 0 || this.opts.threshold === 0
    	            ? false
    	            : this.opts.threshold[field] || this.opts.threshold;
    	        if (!threshold) {
    	            return true;
    	        }
    	        // List of input type which user can't type in
    	        var type = element.getAttribute('type');
    	        if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(type) !== -1) {
    	            return true;
    	        }
    	        var value = this.core.getElementValue(field, element);
    	        return value.length >= threshold;
    	    };
    	    return Trigger;
    	}(core.Plugin));

    	cjs$P.Trigger = Trigger;
    	return cjs$P;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$P.exports = requireCjs$P();
    }

    var libExports$P = lib$P.exports;

    var lib$O = {exports: {}};

    var cjs$O = {};

    var hasRequiredCjs$O;

    function requireCjs$O () {
    	if (hasRequiredCjs$O) return cjs$O;
    	hasRequiredCjs$O = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function between() {
    	    var formatValue = function (value) {
    	        return parseFloat("".concat(value).replace(',', '.'));
    	    };
    	    return {
    	        validate: function (input) {
    	            var value = input.value;
    	            if (value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
    	            var minValue = formatValue(opts.min);
    	            var maxValue = formatValue(opts.max);
    	            return opts.inclusive
    	                ? {
    	                    message: format(input.l10n ? opts.message || input.l10n.between.default : opts.message, [
    	                        "".concat(minValue),
    	                        "".concat(maxValue),
    	                    ]),
    	                    valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
    	                }
    	                : {
    	                    message: format(input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, [
    	                        "".concat(minValue),
    	                        "".concat(maxValue),
    	                    ]),
    	                    valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
    	                };
    	        },
    	    };
    	}

    	cjs$O.between = between;
    	return cjs$O;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$O.exports = requireCjs$O();
    }

    var libExports$O = lib$O.exports;

    var lib$N = {exports: {}};

    var cjs$N = {};

    var hasRequiredCjs$N;

    function requireCjs$N () {
    	if (hasRequiredCjs$N) return cjs$N;
    	hasRequiredCjs$N = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * This validator always returns valid.
    	 * It can be used when we want to show the custom message returned from server
    	 */
    	function blank() {
    	    return {
    	        validate: function (_input) {
    	            return { valid: true };
    	        },
    	    };
    	}

    	cjs$N.blank = blank;
    	return cjs$N;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$N.exports = requireCjs$N();
    }

    var libExports$N = lib$N.exports;

    var lib$M = {exports: {}};

    var cjs$M = {};

    var hasRequiredCjs$M;

    function requireCjs$M () {
    	if (hasRequiredCjs$M) return cjs$M;
    	hasRequiredCjs$M = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var call = core.utils.call;
    	function callback() {
    	    return {
    	        validate: function (input) {
    	            var response = call(input.options.callback, [input]);
    	            return 'boolean' === typeof response
    	                ? { valid: response } // Deprecated
    	                : response;
    	        },
    	    };
    	}

    	cjs$M.callback = callback;
    	return cjs$M;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$M.exports = requireCjs$M();
    }

    var libExports$M = lib$M.exports;

    var lib$L = {exports: {}};

    var cjs$L = {};

    var hasRequiredCjs$L;

    function requireCjs$L () {
    	if (hasRequiredCjs$L) return cjs$L;
    	hasRequiredCjs$L = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format;
    	function choice() {
    	    return {
    	        validate: function (input) {
    	            var numChoices = 'select' === input.element.tagName.toLowerCase()
    	                ? input.element.querySelectorAll('option:checked').length
    	                : input.elements.filter(function (ele) { return ele.checked; }).length;
    	            var min = input.options.min ? "".concat(input.options.min) : '';
    	            var max = input.options.max ? "".concat(input.options.max) : '';
    	            var msg = input.l10n ? input.options.message || input.l10n.choice.default : input.options.message;
    	            var isValid = !((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10)));
    	            switch (true) {
    	                case !!min && !!max:
    	                    msg = format(input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
    	                    break;
    	                case !!min:
    	                    msg = format(input.l10n ? input.l10n.choice.more : input.options.message, min);
    	                    break;
    	                case !!max:
    	                    msg = format(input.l10n ? input.l10n.choice.less : input.options.message, max);
    	                    break;
    	            }
    	            return {
    	                message: msg,
    	                valid: isValid,
    	            };
    	        },
    	    };
    	}

    	cjs$L.choice = choice;
    	return cjs$L;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$L.exports = requireCjs$L();
    }

    var libExports$L = lib$L.exports;

    var lib$K = {exports: {}};

    var cjs$K = {};

    var hasRequiredCjs$K;

    function requireCjs$K () {
    	if (hasRequiredCjs$K) return cjs$K;
    	hasRequiredCjs$K = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	var CREDIT_CARD_TYPES = {
    	    AMERICAN_EXPRESS: {
    	        length: [15],
    	        prefix: ['34', '37'],
    	    },
    	    DANKORT: {
    	        length: [16],
    	        prefix: ['5019'],
    	    },
    	    DINERS_CLUB: {
    	        length: [14],
    	        prefix: ['300', '301', '302', '303', '304', '305', '36'],
    	    },
    	    DINERS_CLUB_US: {
    	        length: [16],
    	        prefix: ['54', '55'],
    	    },
    	    DISCOVER: {
    	        length: [16],
    	        prefix: [
    	            '6011',
    	            '622126',
    	            '622127',
    	            '622128',
    	            '622129',
    	            '62213',
    	            '62214',
    	            '62215',
    	            '62216',
    	            '62217',
    	            '62218',
    	            '62219',
    	            '6222',
    	            '6223',
    	            '6224',
    	            '6225',
    	            '6226',
    	            '6227',
    	            '6228',
    	            '62290',
    	            '62291',
    	            '622920',
    	            '622921',
    	            '622922',
    	            '622923',
    	            '622924',
    	            '622925',
    	            '644',
    	            '645',
    	            '646',
    	            '647',
    	            '648',
    	            '649',
    	            '65',
    	        ],
    	    },
    	    ELO: {
    	        length: [16],
    	        prefix: [
    	            '4011',
    	            '4312',
    	            '4389',
    	            '4514',
    	            '4573',
    	            '4576',
    	            '5041',
    	            '5066',
    	            '5067',
    	            '509',
    	            '6277',
    	            '6362',
    	            '6363',
    	            '650',
    	            '6516',
    	            '6550',
    	        ],
    	    },
    	    FORBRUGSFORENINGEN: {
    	        length: [16],
    	        prefix: ['600722'],
    	    },
    	    JCB: {
    	        length: [16],
    	        prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
    	    },
    	    LASER: {
    	        length: [16, 17, 18, 19],
    	        prefix: ['6304', '6706', '6771', '6709'],
    	    },
    	    MAESTRO: {
    	        length: [12, 13, 14, 15, 16, 17, 18, 19],
    	        prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766'],
    	    },
    	    MASTERCARD: {
    	        length: [16],
    	        prefix: ['51', '52', '53', '54', '55'],
    	    },
    	    SOLO: {
    	        length: [16, 18, 19],
    	        prefix: ['6334', '6767'],
    	    },
    	    UNIONPAY: {
    	        length: [16, 17, 18, 19],
    	        prefix: [
    	            '622126',
    	            '622127',
    	            '622128',
    	            '622129',
    	            '62213',
    	            '62214',
    	            '62215',
    	            '62216',
    	            '62217',
    	            '62218',
    	            '62219',
    	            '6222',
    	            '6223',
    	            '6224',
    	            '6225',
    	            '6226',
    	            '6227',
    	            '6228',
    	            '62290',
    	            '62291',
    	            '622920',
    	            '622921',
    	            '622922',
    	            '622923',
    	            '622924',
    	            '622925',
    	        ],
    	    },
    	    VISA: {
    	        length: [16],
    	        prefix: ['4'],
    	    },
    	    VISA_ELECTRON: {
    	        length: [16],
    	        prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
    	    },
    	};
    	function creditCard() {
    	    return {
    	        /**
    	         * Return true if the input value is valid credit card number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    meta: {
    	                        type: null,
    	                    },
    	                    valid: true,
    	                };
    	            }
    	            // Accept only digits, dashes or spaces
    	            if (/[^0-9-\s]+/.test(input.value)) {
    	                return {
    	                    meta: {
    	                        type: null,
    	                    },
    	                    valid: false,
    	                };
    	            }
    	            var v = input.value.replace(/\D/g, '');
    	            if (!luhn(v)) {
    	                return {
    	                    meta: {
    	                        type: null,
    	                    },
    	                    valid: false,
    	                };
    	            }
    	            for (var _i = 0, _a = Object.keys(CREDIT_CARD_TYPES); _i < _a.length; _i++) {
    	                var tpe = _a[_i];
    	                for (var i in CREDIT_CARD_TYPES[tpe].prefix) {
    	                    // Check the prefix and length
    	                    if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) ===
    	                        CREDIT_CARD_TYPES[tpe].prefix[i] &&
    	                        CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
    	                        return {
    	                            meta: {
    	                                type: tpe,
    	                            },
    	                            valid: true,
    	                        };
    	                    }
    	                }
    	            }
    	            return {
    	                meta: {
    	                    type: null,
    	                },
    	                valid: false,
    	            };
    	        },
    	    };
    	}

    	cjs$K.CREDIT_CARD_TYPES = CREDIT_CARD_TYPES;
    	cjs$K.creditCard = creditCard;
    	return cjs$K;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$K.exports = requireCjs$K();
    }

    var libExports$K = lib$K.exports;

    var lib$J = {exports: {}};

    var cjs$J = {};

    var hasRequiredCjs$J;

    function requireCjs$J () {
    	if (hasRequiredCjs$J) return cjs$J;
    	hasRequiredCjs$J = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, isValidDate = core.utils.isValidDate, removeUndefined = core.utils.removeUndefined;
    	/**
    	 * Return a date object after parsing the date string
    	 *
    	 * @param {string} input The date to parse
    	 * @param {string[]} inputFormat The date format
    	 * The format can be:
    	 * - date: Consist of DD, MM, YYYY parts which are separated by the separator option
    	 * - date and time: The time can consist of h, m, s parts which are separated by :
    	 * @param {string} separator The separator used to separate the date, month, and year
    	 * @return {Date}
    	 * @private
    	 */
    	var parseDate = function (input, inputFormat, separator) {
    	    // Ensure that the format must consist of year, month and day patterns
    	    var yearIndex = inputFormat.indexOf('YYYY');
    	    var monthIndex = inputFormat.indexOf('MM');
    	    var dayIndex = inputFormat.indexOf('DD');
    	    if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
    	        return null;
    	    }
    	    var sections = input.split(' ');
    	    var dateSection = sections[0].split(separator);
    	    if (dateSection.length < 3) {
    	        return null;
    	    }
    	    var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));
    	    var amPmSection = sections.length > 2 ? sections[2] : null;
    	    if (sections.length > 1) {
    	        var timeSection = sections[1].split(':');
    	        var h = timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0;
    	        d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
    	        d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
    	        d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
    	    }
    	    return d;
    	};
    	/**
    	 * Format date
    	 *
    	 * @param {Date} input The date object to format
    	 * @param {string} inputFormat The date format
    	 * The format can consist of the following tokens:
    	 *      d       Day of the month without leading zeros (1 through 31)
    	 *      dd      Day of the month with leading zeros (01 through 31)
    	 *      m       Month without leading zeros (1 through 12)
    	 *      mm      Month with leading zeros (01 through 12)
    	 *      yy      Last two digits of year (for example: 14)
    	 *      yyyy    Full four digits of year (for example: 2014)
    	 *      h       Hours without leading zeros (1 through 12)
    	 *      hh      Hours with leading zeros (01 through 12)
    	 *      H       Hours without leading zeros (0 through 23)
    	 *      HH      Hours with leading zeros (00 through 23)
    	 *      M       Minutes without leading zeros (0 through 59)
    	 *      MM      Minutes with leading zeros (00 through 59)
    	 *      s       Seconds without leading zeros (0 through 59)
    	 *      ss      Seconds with leading zeros (00 through 59)
    	 * @return {string}
    	 * @private
    	 */
    	var formatDate = function (input, inputFormat) {
    	    var dateFormat = inputFormat
    	        .replace(/Y/g, 'y')
    	        .replace(/M/g, 'm')
    	        .replace(/D/g, 'd')
    	        .replace(/:m/g, ':M')
    	        .replace(/:mm/g, ':MM')
    	        .replace(/:S/, ':s')
    	        .replace(/:SS/, ':ss');
    	    var d = input.getDate();
    	    var dd = d < 10 ? "0".concat(d) : d;
    	    var m = input.getMonth() + 1;
    	    var mm = m < 10 ? "0".concat(m) : m;
    	    var yy = "".concat(input.getFullYear()).substr(2);
    	    var yyyy = input.getFullYear();
    	    var h = input.getHours() % 12 || 12;
    	    var hh = h < 10 ? "0".concat(h) : h;
    	    var H = input.getHours();
    	    var HH = H < 10 ? "0".concat(H) : H;
    	    var M = input.getMinutes();
    	    var MM = M < 10 ? "0".concat(M) : M;
    	    var s = input.getSeconds();
    	    var ss = s < 10 ? "0".concat(s) : s;
    	    var replacer = {
    	        H: "".concat(H),
    	        HH: "".concat(HH),
    	        M: "".concat(M),
    	        MM: "".concat(MM),
    	        d: "".concat(d),
    	        dd: "".concat(dd),
    	        h: "".concat(h),
    	        hh: "".concat(hh),
    	        m: "".concat(m),
    	        mm: "".concat(mm),
    	        s: "".concat(s),
    	        ss: "".concat(ss),
    	        yy: "".concat(yy),
    	        yyyy: "".concat(yyyy),
    	    };
    	    return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
    	        return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
    	    });
    	};
    	var date = function () {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    meta: {
    	                        date: null,
    	                    },
    	                    valid: true,
    	                };
    	            }
    	            var opts = Object.assign({}, {
    	                // Force the format to `YYYY-MM-DD` as the default browser behaviour when using type="date" attribute
    	                format: input.element && input.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
    	                message: '',
    	            }, removeUndefined(input.options));
    	            var message = input.l10n ? input.l10n.date.default : opts.message;
    	            var invalidResult = {
    	                message: "".concat(message),
    	                meta: {
    	                    date: null,
    	                },
    	                valid: false,
    	            };
    	            var formats = opts.format.split(' ');
    	            var timeFormat = formats.length > 1 ? formats[1] : null;
    	            var amOrPm = formats.length > 2 ? formats[2] : null;
    	            var sections = input.value.split(' ');
    	            var dateSection = sections[0];
    	            var timeSection = sections.length > 1 ? sections[1] : null;
    	            var amPmSection = sections.length > 2 ? sections[2] : null;
    	            if (formats.length !== sections.length) {
    	                return invalidResult;
    	            }
    	            // Determine the separator
    	            var separator = opts.separator ||
    	                (dateSection.indexOf('/') !== -1
    	                    ? '/'
    	                    : dateSection.indexOf('-') !== -1
    	                        ? '-'
    	                        : dateSection.indexOf('.') !== -1
    	                            ? '.'
    	                            : '/');
    	            if (separator === null || dateSection.indexOf(separator) === -1) {
    	                return invalidResult;
    	            }
    	            // Determine the date
    	            var dateStr = dateSection.split(separator);
    	            var dateFormat = formats[0].split(separator);
    	            if (dateStr.length !== dateFormat.length) {
    	                return invalidResult;
    	            }
    	            var yearStr = dateStr[dateFormat.indexOf('YYYY')];
    	            var monthStr = dateStr[dateFormat.indexOf('MM')];
    	            var dayStr = dateStr[dateFormat.indexOf('DD')];
    	            if (!/^\d+$/.test(yearStr) ||
    	                !/^\d+$/.test(monthStr) ||
    	                !/^\d+$/.test(dayStr) ||
    	                yearStr.length > 4 ||
    	                monthStr.length > 2 ||
    	                dayStr.length > 2) {
    	                return invalidResult;
    	            }
    	            var year = parseInt(yearStr, 10);
    	            var month = parseInt(monthStr, 10);
    	            var day = parseInt(dayStr, 10);
    	            if (!isValidDate(year, month, day)) {
    	                return invalidResult;
    	            }
    	            // Determine the time
    	            var d = new Date(year, month - 1, day);
    	            if (timeFormat) {
    	                var hms = timeSection.split(':');
    	                if (timeFormat.split(':').length !== hms.length) {
    	                    return invalidResult;
    	                }
    	                var h = hms.length > 0 ? (hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1) : 0;
    	                var m = hms.length > 1 ? (hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1) : 0;
    	                var s = hms.length > 2 ? (hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1) : 0;
    	                if (h === -1 || m === -1 || s === -1) {
    	                    return invalidResult;
    	                }
    	                // Validate seconds
    	                if (s < 0 || s > 60) {
    	                    return invalidResult;
    	                }
    	                // Validate hours
    	                if (h < 0 || h >= 24 || (amOrPm && h > 12)) {
    	                    return invalidResult;
    	                }
    	                // Validate minutes
    	                if (m < 0 || m > 59) {
    	                    return invalidResult;
    	                }
    	                d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
    	                d.setMinutes(m);
    	                d.setSeconds(s);
    	            }
    	            // Validate day, month, and year
    	            var minOption = typeof opts.min === 'function' ? opts.min() : opts.min;
    	            var min = minOption instanceof Date
    	                ? minOption
    	                : minOption
    	                    ? parseDate(minOption, dateFormat, separator)
    	                    : d;
    	            var maxOption = typeof opts.max === 'function' ? opts.max() : opts.max;
    	            var max = maxOption instanceof Date
    	                ? maxOption
    	                : maxOption
    	                    ? parseDate(maxOption, dateFormat, separator)
    	                    : d;
    	            // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
    	            var minOptionStr = minOption instanceof Date ? formatDate(min, opts.format) : minOption;
    	            var maxOptionStr = maxOption instanceof Date ? formatDate(max, opts.format) : maxOption;
    	            switch (true) {
    	                case !!minOptionStr && !maxOptionStr:
    	                    return {
    	                        message: format(input.l10n ? input.l10n.date.min : message, minOptionStr),
    	                        meta: {
    	                            date: d,
    	                        },
    	                        valid: d.getTime() >= min.getTime(),
    	                    };
    	                case !!maxOptionStr && !minOptionStr:
    	                    return {
    	                        message: format(input.l10n ? input.l10n.date.max : message, maxOptionStr),
    	                        meta: {
    	                            date: d,
    	                        },
    	                        valid: d.getTime() <= max.getTime(),
    	                    };
    	                case !!maxOptionStr && !!minOptionStr:
    	                    return {
    	                        message: format(input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
    	                        meta: {
    	                            date: d,
    	                        },
    	                        valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime(),
    	                    };
    	                default:
    	                    return {
    	                        message: "".concat(message),
    	                        meta: {
    	                            date: d,
    	                        },
    	                        valid: true,
    	                    };
    	            }
    	        },
    	    };
    	};

    	cjs$J.date = date;
    	return cjs$J;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$J.exports = requireCjs$J();
    }

    var libExports$J = lib$J.exports;

    var lib$I = {exports: {}};

    var cjs$I = {};

    var hasRequiredCjs$I;

    function requireCjs$I () {
    	if (hasRequiredCjs$I) return cjs$I;
    	hasRequiredCjs$I = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function different() {
    	    return {
    	        validate: function (input) {
    	            var compareWith = 'function' === typeof input.options.compare
    	                ? input.options.compare.call(this)
    	                : input.options.compare;
    	            return {
    	                valid: compareWith === '' || input.value !== compareWith,
    	            };
    	        },
    	    };
    	}

    	cjs$I.different = different;
    	return cjs$I;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$I.exports = requireCjs$I();
    }

    var libExports$I = lib$I.exports;

    var lib$H = {exports: {}};

    var cjs$H = {};

    var hasRequiredCjs$H;

    function requireCjs$H () {
    	if (hasRequiredCjs$H) return cjs$H;
    	hasRequiredCjs$H = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function digits() {
    	    return {
    	        /**
    	         * Return true if the input value contains digits only
    	         */
    	        validate: function (input) {
    	            return { valid: input.value === '' || /^\d+$/.test(input.value) };
    	        },
    	    };
    	}

    	cjs$H.digits = digits;
    	return cjs$H;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$H.exports = requireCjs$H();
    }

    var libExports$H = lib$H.exports;

    var lib$G = {exports: {}};

    var cjs$G = {};

    var hasRequiredCjs$G;

    function requireCjs$G () {
    	if (hasRequiredCjs$G) return cjs$G;
    	hasRequiredCjs$G = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	// Email address regular expression
    	// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    	var GLOBAL_DOMAIN_OPTIONAL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    	var GLOBAL_DOMAIN_REQUIRED = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    	function emailAddress() {
    	    var splitEmailAddresses = function (emailAddresses, separator) {
    	        var quotedFragments = emailAddresses.split(/"/);
    	        var quotedFragmentCount = quotedFragments.length;
    	        var emailAddressArray = [];
    	        var nextEmailAddress = '';
    	        for (var i = 0; i < quotedFragmentCount; i++) {
    	            if (i % 2 === 0) {
    	                var splitEmailAddressFragments = quotedFragments[i].split(separator);
    	                var splitEmailAddressFragmentCount = splitEmailAddressFragments.length;
    	                if (splitEmailAddressFragmentCount === 1) {
    	                    nextEmailAddress += splitEmailAddressFragments[0];
    	                }
    	                else {
    	                    emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);
    	                    for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
    	                        emailAddressArray.push(splitEmailAddressFragments[j]);
    	                    }
    	                    nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
    	                }
    	            }
    	            else {
    	                nextEmailAddress += '"' + quotedFragments[i];
    	                if (i < quotedFragmentCount - 1) {
    	                    nextEmailAddress += '"';
    	                }
    	            }
    	        }
    	        emailAddressArray.push(nextEmailAddress);
    	        return emailAddressArray;
    	    };
    	    return {
    	        /**
    	         * Return true if and only if the input value is a valid email address
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, {
    	                multiple: false,
    	                requireGlobalDomain: false,
    	                separator: /[,;]/,
    	            }, removeUndefined(input.options));
    	            var emailRegExp = opts.requireGlobalDomain ? GLOBAL_DOMAIN_REQUIRED : GLOBAL_DOMAIN_OPTIONAL;
    	            var allowMultiple = opts.multiple === true || "".concat(opts.multiple) === 'true';
    	            if (allowMultiple) {
    	                var separator = opts.separator || /[,;]/;
    	                var addresses = splitEmailAddresses(input.value, separator);
    	                var length_1 = addresses.length;
    	                for (var i = 0; i < length_1; i++) {
    	                    if (!emailRegExp.test(addresses[i])) {
    	                        return { valid: false };
    	                    }
    	                }
    	                return { valid: true };
    	            }
    	            else {
    	                return { valid: emailRegExp.test(input.value) };
    	            }
    	        },
    	    };
    	}

    	cjs$G.emailAddress = emailAddress;
    	return cjs$G;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$G.exports = requireCjs$G();
    }

    var libExports$G = lib$G.exports;

    var lib$F = {exports: {}};

    var cjs$F = {};

    var hasRequiredCjs$F;

    function requireCjs$F () {
    	if (hasRequiredCjs$F) return cjs$F;
    	hasRequiredCjs$F = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	// Get the file name without extension
    	var getFileName = function (fileName) {
    	    return fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');
    	};

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function file() {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var extension;
    	            var name;
    	            var extensions = input.options.extension
    	                ? input.options.extension
    	                    .toLowerCase()
    	                    .split(',')
    	                    .map(function (item) { return item.trim(); })
    	                : [];
    	            var types = input.options.type
    	                ? input.options.type
    	                    .toLowerCase()
    	                    .split(',')
    	                    .map(function (item) { return item.trim(); })
    	                : [];
    	            var html5 = window['File'] && window['FileList'] && window['FileReader'];
    	            if (html5) {
    	                // Get FileList instance
    	                var files = input.element.files;
    	                var total = files.length;
    	                var allSize = 0;
    	                // Check the maxFiles
    	                if (input.options.maxFiles && total > parseInt("".concat(input.options.maxFiles), 10)) {
    	                    return {
    	                        meta: { error: 'INVALID_MAX_FILES' },
    	                        valid: false,
    	                    };
    	                }
    	                // Check the minFiles
    	                if (input.options.minFiles && total < parseInt("".concat(input.options.minFiles), 10)) {
    	                    return {
    	                        meta: { error: 'INVALID_MIN_FILES' },
    	                        valid: false,
    	                    };
    	                }
    	                var metaData = {};
    	                for (var i = 0; i < total; i++) {
    	                    allSize += files[i].size;
    	                    extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
    	                    metaData = {
    	                        ext: extension,
    	                        file: files[i],
    	                        size: files[i].size,
    	                        type: files[i].type,
    	                    };
    	                    // Check the minSize
    	                    if (input.options.minSize && files[i].size < parseInt("".concat(input.options.minSize), 10)) {
    	                        return {
    	                            meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, metaData),
    	                            valid: false,
    	                        };
    	                    }
    	                    // Check the maxSize
    	                    if (input.options.maxSize && files[i].size > parseInt("".concat(input.options.maxSize), 10)) {
    	                        return {
    	                            meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, metaData),
    	                            valid: false,
    	                        };
    	                    }
    	                    // Check file extension
    	                    if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
    	                        return {
    	                            meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, metaData),
    	                            valid: false,
    	                        };
    	                    }
    	                    // Check file type
    	                    if (types.length > 0 && files[i].type && types.indexOf(files[i].type.toLowerCase()) === -1) {
    	                        return {
    	                            meta: Object.assign({}, { error: 'INVALID_TYPE' }, metaData),
    	                            valid: false,
    	                        };
    	                    }
    	                    // Check file name
    	                    if (input.options.validateFileName && !input.options.validateFileName(getFileName(files[i].name))) {
    	                        return {
    	                            meta: Object.assign({}, { error: 'INVALID_NAME' }, metaData),
    	                            valid: false,
    	                        };
    	                    }
    	                }
    	                // Check the maxTotalSize
    	                if (input.options.maxTotalSize && allSize > parseInt("".concat(input.options.maxTotalSize), 10)) {
    	                    return {
    	                        meta: Object.assign({}, {
    	                            error: 'INVALID_MAX_TOTAL_SIZE',
    	                            totalSize: allSize,
    	                        }, metaData),
    	                        valid: false,
    	                    };
    	                }
    	                // Check the minTotalSize
    	                if (input.options.minTotalSize && allSize < parseInt("".concat(input.options.minTotalSize), 10)) {
    	                    return {
    	                        meta: Object.assign({}, {
    	                            error: 'INVALID_MIN_TOTAL_SIZE',
    	                            totalSize: allSize,
    	                        }, metaData),
    	                        valid: false,
    	                    };
    	                }
    	            }
    	            else {
    	                // Check file extension
    	                extension = input.value.substr(input.value.lastIndexOf('.') + 1);
    	                if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
    	                    return {
    	                        meta: {
    	                            error: 'INVALID_EXTENSION',
    	                            ext: extension,
    	                        },
    	                        valid: false,
    	                    };
    	                }
    	                // Check file name
    	                name = getFileName(input.value);
    	                if (input.options.validateFileName && !input.options.validateFileName(name)) {
    	                    return {
    	                        meta: {
    	                            error: 'INVALID_NAME',
    	                            name: name,
    	                        },
    	                        valid: false,
    	                    };
    	                }
    	            }
    	            return { valid: true };
    	        },
    	    };
    	}

    	cjs$F.file = file;
    	return cjs$F;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$F.exports = requireCjs$F();
    }

    var libExports$F = lib$F.exports;

    var lib$E = {exports: {}};

    var cjs$E = {};

    var hasRequiredCjs$E;

    function requireCjs$E () {
    	if (hasRequiredCjs$E) return cjs$E;
    	hasRequiredCjs$E = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function greaterThan() {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
    	            var minValue = parseFloat("".concat(opts.min).replace(',', '.'));
    	            return opts.inclusive
    	                ? {
    	                    message: format(input.l10n ? opts.message || input.l10n.greaterThan.default : opts.message, "".concat(minValue)),
    	                    valid: parseFloat(input.value) >= minValue,
    	                }
    	                : {
    	                    message: format(input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "".concat(minValue)),
    	                    valid: parseFloat(input.value) > minValue,
    	                };
    	        },
    	    };
    	}

    	cjs$E.greaterThan = greaterThan;
    	return cjs$E;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$E.exports = requireCjs$E();
    }

    var libExports$E = lib$E.exports;

    var lib$D = {exports: {}};

    var cjs$D = {};

    var hasRequiredCjs$D;

    function requireCjs$D () {
    	if (hasRequiredCjs$D) return cjs$D;
    	hasRequiredCjs$D = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function identical() {
    	    return {
    	        validate: function (input) {
    	            var compareWith = 'function' === typeof input.options.compare
    	                ? input.options.compare.call(this)
    	                : input.options.compare;
    	            return {
    	                valid: compareWith === '' || input.value === compareWith,
    	            };
    	        },
    	    };
    	}

    	cjs$D.identical = identical;
    	return cjs$D;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$D.exports = requireCjs$D();
    }

    var libExports$D = lib$D.exports;

    var lib$C = {exports: {}};

    var cjs$C = {};

    var hasRequiredCjs$C;

    function requireCjs$C () {
    	if (hasRequiredCjs$C) return cjs$C;
    	hasRequiredCjs$C = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	function integer() {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, {
    	                decimalSeparator: '.',
    	                thousandsSeparator: '',
    	            }, removeUndefined(input.options));
    	            var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
    	            var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
    	            var testRegexp = new RegExp("^-?[0-9]{1,3}(".concat(thousandsSeparator, "[0-9]{3})*(").concat(decimalSeparator, "[0-9]+)?$"));
    	            var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
    	            var v = "".concat(input.value);
    	            if (!testRegexp.test(v)) {
    	                return { valid: false };
    	            }
    	            // Replace thousands separator with blank
    	            if (thousandsSeparator) {
    	                v = v.replace(thousandsReplacer, '');
    	            }
    	            // Replace decimal separator with a dot
    	            if (decimalSeparator) {
    	                v = v.replace(decimalSeparator, '.');
    	            }
    	            var n = parseFloat(v);
    	            return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
    	        },
    	    };
    	}

    	cjs$C.integer = integer;
    	return cjs$C;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$C.exports = requireCjs$C();
    }

    var libExports$C = lib$C.exports;

    var lib$B = {exports: {}};

    var cjs$B = {};

    var hasRequiredCjs$B;

    function requireCjs$B () {
    	if (hasRequiredCjs$B) return cjs$B;
    	hasRequiredCjs$B = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	function ip() {
    	    return {
    	        /**
    	         * Return true if the input value is a IP address.
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, {
    	                ipv4: true,
    	                ipv6: true,
    	            }, removeUndefined(input.options));
    	            var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
    	            var ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
    	            switch (true) {
    	                case opts.ipv4 && !opts.ipv6:
    	                    return {
    	                        message: input.l10n ? opts.message || input.l10n.ip.ipv4 : opts.message,
    	                        valid: ipv4Regex.test(input.value),
    	                    };
    	                case !opts.ipv4 && opts.ipv6:
    	                    return {
    	                        message: input.l10n ? opts.message || input.l10n.ip.ipv6 : opts.message,
    	                        valid: ipv6Regex.test(input.value),
    	                    };
    	                case opts.ipv4 && opts.ipv6:
    	                default:
    	                    return {
    	                        message: input.l10n ? opts.message || input.l10n.ip.default : opts.message,
    	                        valid: ipv4Regex.test(input.value) || ipv6Regex.test(input.value),
    	                    };
    	            }
    	        },
    	    };
    	}

    	cjs$B.ip = ip;
    	return cjs$B;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$B.exports = requireCjs$B();
    }

    var libExports$B = lib$B.exports;

    var lib$A = {exports: {}};

    var cjs$A = {};

    var hasRequiredCjs$A;

    function requireCjs$A () {
    	if (hasRequiredCjs$A) return cjs$A;
    	hasRequiredCjs$A = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function lessThan() {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
    	            var maxValue = parseFloat("".concat(opts.max).replace(',', '.'));
    	            return opts.inclusive
    	                ? {
    	                    message: format(input.l10n ? opts.message || input.l10n.lessThan.default : opts.message, "".concat(maxValue)),
    	                    valid: parseFloat(input.value) <= maxValue,
    	                }
    	                : {
    	                    message: format(input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "".concat(maxValue)),
    	                    valid: parseFloat(input.value) < maxValue,
    	                };
    	        },
    	    };
    	}

    	cjs$A.lessThan = lessThan;
    	return cjs$A;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$A.exports = requireCjs$A();
    }

    var libExports$A = lib$A.exports;

    var lib$z = {exports: {}};

    var cjs$z = {};

    var hasRequiredCjs$z;

    function requireCjs$z () {
    	if (hasRequiredCjs$z) return cjs$z;
    	hasRequiredCjs$z = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function notEmpty() {
    	    return {
    	        validate: function (input) {
    	            var trim = !!input.options && !!input.options.trim;
    	            var value = input.value;
    	            return {
    	                valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
    	            };
    	        },
    	    };
    	}

    	cjs$z.notEmpty = notEmpty;
    	return cjs$z;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$z.exports = requireCjs$z();
    }

    var libExports$z = lib$z.exports;

    var lib$y = {exports: {}};

    var cjs$y = {};

    var hasRequiredCjs$y;

    function requireCjs$y () {
    	if (hasRequiredCjs$y) return cjs$y;
    	hasRequiredCjs$y = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	function numeric() {
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, {
    	                decimalSeparator: '.',
    	                thousandsSeparator: '',
    	            }, removeUndefined(input.options));
    	            var v = "".concat(input.value);
    	            // Support preceding zero numbers such as .5, -.5
    	            if (v.substr(0, 1) === opts.decimalSeparator) {
    	                v = "0".concat(opts.decimalSeparator).concat(v.substr(1));
    	            }
    	            else if (v.substr(0, 2) === "-".concat(opts.decimalSeparator)) {
    	                v = "-0".concat(opts.decimalSeparator).concat(v.substr(2));
    	            }
    	            var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
    	            var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
    	            var testRegexp = new RegExp("^-?[0-9]{1,3}(".concat(thousandsSeparator, "[0-9]{3})*(").concat(decimalSeparator, "[0-9]+)?$"));
    	            var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
    	            if (!testRegexp.test(v)) {
    	                return { valid: false };
    	            }
    	            // Replace thousands separator with blank
    	            if (thousandsSeparator) {
    	                v = v.replace(thousandsReplacer, '');
    	            }
    	            // Replace decimal separator with a dot
    	            if (decimalSeparator) {
    	                v = v.replace(decimalSeparator, '.');
    	            }
    	            var n = parseFloat(v);
    	            return { valid: !isNaN(n) && isFinite(n) };
    	        },
    	    };
    	}

    	cjs$y.numeric = numeric;
    	return cjs$y;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$y.exports = requireCjs$y();
    }

    var libExports$y = lib$y.exports;

    var lib$x = {exports: {}};

    var cjs$x = {};

    var hasRequiredCjs$x;

    function requireCjs$x () {
    	if (hasRequiredCjs$x) return cjs$x;
    	hasRequiredCjs$x = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var call = core.utils.call;
    	function promise() {
    	    return {
    	        /**
    	         * The following example demonstrates how to use a promise validator to requires both width and height
    	         * of an image to be less than 300 px
    	         *  ```
    	         *  const p = new Promise((resolve, reject) => {
    	         *      const img = new Image()
    	         *      img.addEventListener('load', function() {
    	         *          const w = this.width
    	         *          const h = this.height
    	         *          resolve({
    	         *              valid: w <= 300 && h <= 300
    	         *              meta: {
    	         *                  source: img.src // So, you can reuse it later if you want
    	         *              }
    	         *          })
    	         *      })
    	         *      img.addEventListener('error', function() {
    	         *          reject({
    	         *              valid: false,
    	         *              message: Please choose an image
    	         *          })
    	         *      })
    	         *  })
    	         *  ```
    	         *
    	         * @param input
    	         * @return {Promise<ValidateResult>}
    	         */
    	        validate: function (input) {
    	            return call(input.options.promise, [input]);
    	        },
    	    };
    	}

    	cjs$x.promise = promise;
    	return cjs$x;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$x.exports = requireCjs$x();
    }

    var libExports$x = lib$x.exports;

    var lib$w = {exports: {}};

    var cjs$w = {};

    var hasRequiredCjs$w;

    function requireCjs$w () {
    	if (hasRequiredCjs$w) return cjs$w;
    	hasRequiredCjs$w = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function regexp() {
    	    return {
    	        /**
    	         * Check if the element value matches given regular expression
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var reg = input.options.regexp;
    	            if (reg instanceof RegExp) {
    	                return { valid: reg.test(input.value) };
    	            }
    	            else {
    	                var pattern = reg.toString();
    	                var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
    	                return { valid: exp.test(input.value) };
    	            }
    	        },
    	    };
    	}

    	cjs$w.regexp = regexp;
    	return cjs$w;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$w.exports = requireCjs$w();
    }

    var libExports$w = lib$w.exports;

    var lib$v = {exports: {}};

    var cjs$v = {};

    var hasRequiredCjs$v;

    function requireCjs$v () {
    	if (hasRequiredCjs$v) return cjs$v;
    	hasRequiredCjs$v = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var fetch = core.utils.fetch, removeUndefined = core.utils.removeUndefined;
    	function remote() {
    	    var DEFAULT_OPTIONS = {
    	        crossDomain: false,
    	        data: {},
    	        headers: {},
    	        method: 'GET',
    	        validKey: 'valid',
    	    };
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return Promise.resolve({
    	                    valid: true,
    	                });
    	            }
    	            var opts = Object.assign({}, DEFAULT_OPTIONS, removeUndefined(input.options));
    	            var data = opts.data;
    	            // Support dynamic data
    	            if ('function' === typeof opts.data) {
    	                data = opts.data.call(this, input);
    	            }
    	            // Parse string data from HTML5 attribute
    	            if ('string' === typeof data) {
    	                data = JSON.parse(data);
    	            }
    	            data[opts.name || input.field] = input.value;
    	            // Support dynamic url
    	            var url = 'function' === typeof opts.url
    	                ? opts.url.call(this, input)
    	                : opts.url;
    	            return fetch(url, {
    	                crossDomain: opts.crossDomain,
    	                headers: opts.headers,
    	                method: opts.method,
    	                params: data,
    	            })
    	                .then(function (response) {
    	                return Promise.resolve({
    	                    message: response['message'],
    	                    meta: response,
    	                    valid: "".concat(response[opts.validKey]) === 'true',
    	                });
    	            })
    	                .catch(function (_reason) {
    	                return Promise.reject({
    	                    valid: false,
    	                });
    	            });
    	        },
    	    };
    	}

    	cjs$v.remote = remote;
    	return cjs$v;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$v.exports = requireCjs$v();
    }

    var libExports$v = lib$v.exports;

    var lib$u = {exports: {}};

    var cjs$u = {};

    var hasRequiredCjs$u;

    function requireCjs$u () {
    	if (hasRequiredCjs$u) return cjs$u;
    	hasRequiredCjs$u = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	function stringCase() {
    	    return {
    	        /**
    	         * Check if a string is a lower or upper case one
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { case: 'lower' }, removeUndefined(input.options));
    	            var caseOpt = (opts.case || 'lower').toLowerCase();
    	            return {
    	                message: opts.message ||
    	                    (input.l10n
    	                        ? 'upper' === caseOpt
    	                            ? input.l10n.stringCase.upper
    	                            : input.l10n.stringCase.default
    	                        : opts.message),
    	                valid: 'upper' === caseOpt
    	                    ? input.value === input.value.toUpperCase()
    	                    : input.value === input.value.toLowerCase(),
    	            };
    	        },
    	    };
    	}

    	cjs$u.stringCase = stringCase;
    	return cjs$u;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$u.exports = requireCjs$u();
    }

    var libExports$u = lib$u.exports;

    var lib$t = {exports: {}};

    var cjs$t = {};

    var hasRequiredCjs$t;

    function requireCjs$t () {
    	if (hasRequiredCjs$t) return cjs$t;
    	hasRequiredCjs$t = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	// Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
    	var utf8Length = function (str) {
    	    var s = str.length;
    	    for (var i = str.length - 1; i >= 0; i--) {
    	        var code = str.charCodeAt(i);
    	        if (code > 0x7f && code <= 0x7ff) {
    	            s++;
    	        }
    	        else if (code > 0x7ff && code <= 0xffff) {
    	            s += 2;
    	        }
    	        if (code >= 0xdc00 && code <= 0xdfff) {
    	            i--;
    	        }
    	    }
    	    return s;
    	};
    	function stringLength() {
    	    return {
    	        /**
    	         * Check if the length of element value is less or more than given number
    	         */
    	        validate: function (input) {
    	            var opts = Object.assign({}, {
    	                message: '',
    	                trim: false,
    	                utf8Bytes: false,
    	            }, removeUndefined(input.options));
    	            var v = opts.trim === true || "".concat(opts.trim) === 'true' ? input.value.trim() : input.value;
    	            if (v === '') {
    	                return { valid: true };
    	            }
    	            // TODO: `min`, `max` can be dynamic options
    	            var min = opts.min ? "".concat(opts.min) : '';
    	            var max = opts.max ? "".concat(opts.max) : '';
    	            var length = opts.utf8Bytes ? utf8Length(v) : v.length;
    	            var isValid = true;
    	            var msg = input.l10n ? opts.message || input.l10n.stringLength.default : opts.message;
    	            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
    	                isValid = false;
    	            }
    	            switch (true) {
    	                case !!min && !!max:
    	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [
    	                        min,
    	                        max,
    	                    ]);
    	                    break;
    	                case !!min:
    	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "".concat(parseInt(min, 10)));
    	                    break;
    	                case !!max:
    	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "".concat(parseInt(max, 10)));
    	                    break;
    	            }
    	            return {
    	                message: msg,
    	                valid: isValid,
    	            };
    	        },
    	    };
    	}

    	cjs$t.stringLength = stringLength;
    	return cjs$t;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$t.exports = requireCjs$t();
    }

    var libExports$t = lib$t.exports;

    var lib$s = {exports: {}};

    var cjs$s = {};

    var hasRequiredCjs$s;

    function requireCjs$s () {
    	if (hasRequiredCjs$s) return cjs$s;
    	hasRequiredCjs$s = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var removeUndefined = core.utils.removeUndefined;
    	function uri() {
    	    var DEFAULT_OPTIONS = {
    	        allowEmptyProtocol: false,
    	        allowLocal: false,
    	        protocol: 'http, https, ftp',
    	    };
    	    return {
    	        /**
    	         * Return true if the input value is a valid URL
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, DEFAULT_OPTIONS, removeUndefined(input.options));
    	            // Credit to https://gist.github.com/dperini/729294
    	            //
    	            // Regular Expression for URL validation
    	            //
    	            // Author: Diego Perini
    	            // Updated: 2010/12/05
    	            //
    	            // the regular expression composed & commented
    	            // could be easily tweaked for RFC compliance,
    	            // it was expressly modified to fit & satisfy
    	            // these test for an URL shortener:
    	            //
    	            //   http://mathiasbynens.be/demo/url-regex
    	            //
    	            // Notes on possible differences from a standard/generic validation:
    	            //
    	            // - utf-8 char class take in consideration the full Unicode range
    	            // - TLDs are mandatory unless `allowLocal` is true
    	            // - protocols have been restricted to ftp, http and https only as requested
    	            //
    	            // Changes:
    	            //
    	            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
    	            //   first and last IP address of each class is considered invalid
    	            //   (since they are broadcast/network addresses)
    	            //
    	            // - Added exclusion of private, reserved and/or local networks ranges
    	            //   unless `allowLocal` is true
    	            //
    	            // - Added possibility of choosing a custom protocol
    	            //
    	            // - Add option to validate without protocol
    	            //
    	            var allowLocal = opts.allowLocal === true || "".concat(opts.allowLocal) === 'true';
    	            var allowEmptyProtocol = opts.allowEmptyProtocol === true || "".concat(opts.allowEmptyProtocol) === 'true';
    	            var protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
    	            var urlExp = new RegExp('^' +
    	                // protocol identifier
    	                '(?:(?:' +
    	                protocol +
    	                ')://)' +
    	                // allow empty protocol
    	                (allowEmptyProtocol ? '?' : '') +
    	                // user:pass authentication
    	                '(?:\\S+(?::\\S*)?@)?' +
    	                '(?:' +
    	                // IP address exclusion
    	                // private & local networks
    	                (allowLocal
    	                    ? ''
    	                    : '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
    	                        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
    	                        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
    	                // IP address dotted notation octets
    	                // excludes loopback network 0.0.0.0
    	                // excludes reserved space >= 224.0.0.0
    	                // excludes network & broadcast addresses
    	                // (first & last IP address of each class)
    	                '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
    	                '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
    	                '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    	                '|' +
    	                // host name
    	                '(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)' +
    	                // domain name
    	                '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*' +
    	                // TLD identifier
    	                '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
    	                // Allow intranet sites (no TLD) if `allowLocal` is true
    	                (allowLocal ? '?' : '') +
    	                ')' +
    	                // port number
    	                '(?::\\d{2,5})?' +
    	                // resource path
    	                '(?:/[^\\s]*)?$', 'i');
    	            return { valid: urlExp.test(input.value) };
    	        },
    	    };
    	}

    	cjs$s.uri = uri;
    	return cjs$s;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$s.exports = requireCjs$s();
    }

    var libExports$s = lib$s.exports;

    var lib$r = {exports: {}};

    var cjs$r = {};

    var hasRequiredCjs$r;

    function requireCjs$r () {
    	if (hasRequiredCjs$r) return cjs$r;
    	hasRequiredCjs$r = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function base64() {
    	    return {
    	        validate: function (input) {
    	            return {
    	                valid: input.value === '' ||
    	                    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(input.value),
    	            };
    	        },
    	    };
    	}

    	cjs$r.base64 = base64;
    	return cjs$r;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$r.exports = requireCjs$r();
    }

    var libExports$r = lib$r.exports;

    var lib$q = {exports: {}};

    var cjs$q = {};

    var hasRequiredCjs$q;

    function requireCjs$q () {
    	if (hasRequiredCjs$q) return cjs$q;
    	hasRequiredCjs$q = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
    	 * For more information see http://en.wikipedia.org/wiki/ISO_9362
    	 *
    	 * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
    	 */
    	function bic() {
    	    return {
    	        validate: function (input) {
    	            return {
    	                valid: input.value === '' || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value),
    	            };
    	        },
    	    };
    	}

    	cjs$q.bic = bic;
    	return cjs$q;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$q.exports = requireCjs$q();
    }

    var libExports$q = lib$q.exports;

    var lib$p = {exports: {}};

    var cjs$p = {};

    var hasRequiredCjs$p;

    function requireCjs$p () {
    	if (hasRequiredCjs$p) return cjs$p;
    	hasRequiredCjs$p = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function color() {
    	    var SUPPORTED_TYPES = ['hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'];
    	    var KEYWORD_COLORS = [
    	        // Colors start with A
    	        'aliceblue',
    	        'antiquewhite',
    	        'aqua',
    	        'aquamarine',
    	        'azure',
    	        // B
    	        'beige',
    	        'bisque',
    	        'black',
    	        'blanchedalmond',
    	        'blue',
    	        'blueviolet',
    	        'brown',
    	        'burlywood',
    	        // C
    	        'cadetblue',
    	        'chartreuse',
    	        'chocolate',
    	        'coral',
    	        'cornflowerblue',
    	        'cornsilk',
    	        'crimson',
    	        'cyan',
    	        // D
    	        'darkblue',
    	        'darkcyan',
    	        'darkgoldenrod',
    	        'darkgray',
    	        'darkgreen',
    	        'darkgrey',
    	        'darkkhaki',
    	        'darkmagenta',
    	        'darkolivegreen',
    	        'darkorange',
    	        'darkorchid',
    	        'darkred',
    	        'darksalmon',
    	        'darkseagreen',
    	        'darkslateblue',
    	        'darkslategray',
    	        'darkslategrey',
    	        'darkturquoise',
    	        'darkviolet',
    	        'deeppink',
    	        'deepskyblue',
    	        'dimgray',
    	        'dimgrey',
    	        'dodgerblue',
    	        // F
    	        'firebrick',
    	        'floralwhite',
    	        'forestgreen',
    	        'fuchsia',
    	        // G
    	        'gainsboro',
    	        'ghostwhite',
    	        'gold',
    	        'goldenrod',
    	        'gray',
    	        'green',
    	        'greenyellow',
    	        'grey',
    	        // H
    	        'honeydew',
    	        'hotpink',
    	        // I
    	        'indianred',
    	        'indigo',
    	        'ivory',
    	        // K
    	        'khaki',
    	        // L
    	        'lavender',
    	        'lavenderblush',
    	        'lawngreen',
    	        'lemonchiffon',
    	        'lightblue',
    	        'lightcoral',
    	        'lightcyan',
    	        'lightgoldenrodyellow',
    	        'lightgray',
    	        'lightgreen',
    	        'lightgrey',
    	        'lightpink',
    	        'lightsalmon',
    	        'lightseagreen',
    	        'lightskyblue',
    	        'lightslategray',
    	        'lightslategrey',
    	        'lightsteelblue',
    	        'lightyellow',
    	        'lime',
    	        'limegreen',
    	        'linen',
    	        // M
    	        'magenta',
    	        'maroon',
    	        'mediumaquamarine',
    	        'mediumblue',
    	        'mediumorchid',
    	        'mediumpurple',
    	        'mediumseagreen',
    	        'mediumslateblue',
    	        'mediumspringgreen',
    	        'mediumturquoise',
    	        'mediumvioletred',
    	        'midnightblue',
    	        'mintcream',
    	        'mistyrose',
    	        'moccasin',
    	        // N
    	        'navajowhite',
    	        'navy',
    	        // O
    	        'oldlace',
    	        'olive',
    	        'olivedrab',
    	        'orange',
    	        'orangered',
    	        'orchid',
    	        // P
    	        'palegoldenrod',
    	        'palegreen',
    	        'paleturquoise',
    	        'palevioletred',
    	        'papayawhip',
    	        'peachpuff',
    	        'peru',
    	        'pink',
    	        'plum',
    	        'powderblue',
    	        'purple',
    	        // R
    	        'red',
    	        'rosybrown',
    	        'royalblue',
    	        // S
    	        'saddlebrown',
    	        'salmon',
    	        'sandybrown',
    	        'seagreen',
    	        'seashell',
    	        'sienna',
    	        'silver',
    	        'skyblue',
    	        'slateblue',
    	        'slategray',
    	        'slategrey',
    	        'snow',
    	        'springgreen',
    	        'steelblue',
    	        // T
    	        'tan',
    	        'teal',
    	        'thistle',
    	        'tomato',
    	        'transparent',
    	        'turquoise',
    	        // V
    	        'violet',
    	        // W
    	        'wheat',
    	        'white',
    	        'whitesmoke',
    	        // Y
    	        'yellow',
    	        'yellowgreen',
    	    ];
    	    var hex = function (value) {
    	        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    	    };
    	    var hsl = function (value) {
    	        return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    	    };
    	    var hsla = function (value) {
    	        return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    	    };
    	    var keyword = function (value) {
    	        return KEYWORD_COLORS.indexOf(value) >= 0;
    	    };
    	    var rgb = function (value) {
    	        return (/^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(value) || /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value));
    	    };
    	    var rgba = function (value) {
    	        return (/^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value) ||
    	            /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value));
    	    };
    	    return {
    	        /**
    	         * Return true if the input value is a valid color
    	         * @returns {boolean}
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var types = typeof input.options.type === 'string'
    	                ? input.options.type.toString().replace(/s/g, '').split(',')
    	                : input.options.type || SUPPORTED_TYPES;
    	            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
    	                var type = types_1[_i];
    	                var tpe = type.toLowerCase();
    	                if (SUPPORTED_TYPES.indexOf(tpe) === -1) {
    	                    continue;
    	                }
    	                var result = true;
    	                switch (tpe) {
    	                    case 'hex':
    	                        result = hex(input.value);
    	                        break;
    	                    case 'hsl':
    	                        result = hsl(input.value);
    	                        break;
    	                    case 'hsla':
    	                        result = hsla(input.value);
    	                        break;
    	                    case 'keyword':
    	                        result = keyword(input.value);
    	                        break;
    	                    case 'rgb':
    	                        result = rgb(input.value);
    	                        break;
    	                    case 'rgba':
    	                        result = rgba(input.value);
    	                        break;
    	                }
    	                if (result) {
    	                    return { valid: true };
    	                }
    	            }
    	            return { valid: false };
    	        },
    	    };
    	}

    	cjs$p.color = color;
    	return cjs$p;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$p.exports = requireCjs$p();
    }

    var libExports$p = lib$p.exports;

    var lib$o = {exports: {}};

    var cjs$o = {};

    var hasRequiredCjs$o;

    function requireCjs$o () {
    	if (hasRequiredCjs$o) return cjs$o;
    	hasRequiredCjs$o = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function cusip() {
    	    return {
    	        /**
    	         * Validate a CUSIP number
    	         * @see http://en.wikipedia.org/wiki/CUSIP
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var value = input.value.toUpperCase();
    	            // O, I aren't allowed
    	            if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(value)) {
    	                return { valid: false };
    	            }
    	            // Get the last char
    	            var chars = value.split('');
    	            var lastChar = chars.pop();
    	            var converted = chars.map(function (c) {
    	                var code = c.charCodeAt(0);
    	                switch (true) {
    	                    case c === '*':
    	                        return 36;
    	                    case c === '@':
    	                        return 37;
    	                    case c === '#':
    	                        return 38;
    	                    // Replace A, B, C, ..., Z with 10, 11, ..., 35
    	                    case code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0):
    	                        return code - 'A'.charCodeAt(0) + 10;
    	                    default:
    	                        return parseInt(c, 10);
    	                }
    	            });
    	            var sum = converted
    	                .map(function (v, i) {
    	                var double = i % 2 === 0 ? v : 2 * v;
    	                return Math.floor(double / 10) + (double % 10);
    	            })
    	                .reduce(function (a, b) { return a + b; }, 0);
    	            var checkDigit = (10 - (sum % 10)) % 10;
    	            return { valid: lastChar === "".concat(checkDigit) };
    	        },
    	    };
    	}

    	cjs$o.cusip = cusip;
    	return cjs$o;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$o.exports = requireCjs$o();
    }

    var libExports$o = lib$o.exports;

    var lib$n = {exports: {}};

    var cjs$n = {};

    var hasRequiredCjs$n;

    function requireCjs$n () {
    	if (hasRequiredCjs$n) return cjs$n;
    	hasRequiredCjs$n = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function ean() {
    	    return {
    	        /**
    	         * Validate EAN (International Article Number)
    	         * @see http://en.wikipedia.org/wiki/European_Article_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input.value)) {
    	                return { valid: false };
    	            }
    	            var length = input.value.length;
    	            var sum = 0;
    	            var weight = length === 8 ? [3, 1] : [1, 3];
    	            for (var i = 0; i < length - 1; i++) {
    	                sum += parseInt(input.value.charAt(i), 10) * weight[i % 2];
    	            }
    	            sum = (10 - (sum % 10)) % 10;
    	            return { valid: "".concat(sum) === input.value.charAt(length - 1) };
    	        },
    	    };
    	}

    	cjs$n.ean = ean;
    	return cjs$n;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$n.exports = requireCjs$n();
    }

    var libExports$n = lib$n.exports;

    var lib$m = {exports: {}};

    var cjs$m = {};

    var hasRequiredCjs$m;

    function requireCjs$m () {
    	if (hasRequiredCjs$m) return cjs$m;
    	hasRequiredCjs$m = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function ein() {
    	    // The first two digits are called campus
    	    // See http://en.wikipedia.org/wiki/Employer_Identification_Number
    	    // http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes
    	    var CAMPUS = {
    	        ANDOVER: ['10', '12'],
    	        ATLANTA: ['60', '67'],
    	        AUSTIN: ['50', '53'],
    	        BROOKHAVEN: [
    	            '01',
    	            '02',
    	            '03',
    	            '04',
    	            '05',
    	            '06',
    	            '11',
    	            '13',
    	            '14',
    	            '16',
    	            '21',
    	            '22',
    	            '23',
    	            '25',
    	            '34',
    	            '51',
    	            '52',
    	            '54',
    	            '55',
    	            '56',
    	            '57',
    	            '58',
    	            '59',
    	            '65',
    	        ],
    	        CINCINNATI: ['30', '32', '35', '36', '37', '38', '61'],
    	        FRESNO: ['15', '24'],
    	        INTERNET: ['20', '26', '27', '45', '46', '47'],
    	        KANSAS_CITY: ['40', '44'],
    	        MEMPHIS: ['94', '95'],
    	        OGDEN: ['80', '90'],
    	        PHILADELPHIA: [
    	            '33',
    	            '39',
    	            '41',
    	            '42',
    	            '43',
    	            '48',
    	            '62',
    	            '63',
    	            '64',
    	            '66',
    	            '68',
    	            '71',
    	            '72',
    	            '73',
    	            '74',
    	            '75',
    	            '76',
    	            '77',
    	            '81',
    	            '82',
    	            '83',
    	            '84',
    	            '85',
    	            '86',
    	            '87',
    	            '88',
    	            '91',
    	            '92',
    	            '93',
    	            '98',
    	            '99',
    	        ],
    	        SMALL_BUSINESS_ADMINISTRATION: ['31'],
    	    };
    	    return {
    	        /**
    	         * Validate EIN (Employer Identification Number) which is also known as
    	         * Federal Employer Identification Number (FEIN) or Federal Tax Identification Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    meta: null,
    	                    valid: true,
    	                };
    	            }
    	            if (!/^[0-9]{2}-?[0-9]{7}$/.test(input.value)) {
    	                return {
    	                    meta: null,
    	                    valid: false,
    	                };
    	            }
    	            // Check the first two digits
    	            var campus = "".concat(input.value.substr(0, 2));
    	            for (var key in CAMPUS) {
    	                if (CAMPUS[key].indexOf(campus) !== -1) {
    	                    return {
    	                        meta: {
    	                            campus: key,
    	                        },
    	                        valid: true,
    	                    };
    	                }
    	            }
    	            return {
    	                meta: null,
    	                valid: false,
    	            };
    	        },
    	    };
    	}

    	cjs$m.ein = ein;
    	return cjs$m;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$m.exports = requireCjs$m();
    }

    var libExports$m = lib$m.exports;

    var lib$l = {exports: {}};

    var cjs$l = {};

    var hasRequiredCjs$l;

    function requireCjs$l () {
    	if (hasRequiredCjs$l) return cjs$l;
    	hasRequiredCjs$l = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var mod37And36 = core.algorithms.mod37And36;
    	function grid() {
    	    return {
    	        /**
    	         * Validate GRId (Global Release Identifier)
    	         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var v = input.value.toUpperCase();
    	            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(v)) {
    	                return { valid: false };
    	            }
    	            v = v.replace(/\s/g, '').replace(/-/g, '');
    	            if ('GRID:' === v.substr(0, 5)) {
    	                v = v.substr(5);
    	            }
    	            return { valid: mod37And36(v) };
    	        },
    	    };
    	}

    	cjs$l.grid = grid;
    	return cjs$l;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$l.exports = requireCjs$l();
    }

    var libExports$l = lib$l.exports;

    var lib$k = {exports: {}};

    var cjs$k = {};

    var hasRequiredCjs$k;

    function requireCjs$k () {
    	if (hasRequiredCjs$k) return cjs$k;
    	hasRequiredCjs$k = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function hex() {
    	    return {
    	        /**
    	         * Return true if and only if the input value is a valid hexadecimal number
    	         */
    	        validate: function (input) {
    	            return {
    	                valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value),
    	            };
    	        },
    	    };
    	}

    	cjs$k.hex = hex;
    	return cjs$k;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$k.exports = requireCjs$k();
    }

    var libExports$k = lib$k.exports;

    var lib$j = {exports: {}};

    var cjs$j = {};

    var hasRequiredCjs$j;

    function requireCjs$j () {
    	if (hasRequiredCjs$j) return cjs$j;
    	hasRequiredCjs$j = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function iban() {
    	    // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
    	    // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
    	    var IBAN_PATTERNS = {
    	        AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
    	        AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
    	        AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
    	        AO: 'AO[0-9]{2}[0-9]{21}',
    	        AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
    	        AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
    	        BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
    	        BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
    	        BF: 'BF[0-9]{2}[0-9]{23}',
    	        BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
    	        BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
    	        BI: 'BI[0-9]{2}[0-9]{12}',
    	        BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
    	        BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
    	        CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
    	        CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
    	        CM: 'CM[0-9]{2}[0-9]{23}',
    	        CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
    	        CV: 'CV[0-9]{2}[0-9]{21}',
    	        CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
    	        CZ: 'CZ[0-9]{2}[0-9]{20}',
    	        DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
    	        DK: 'DK[0-9]{2}[0-9]{14}',
    	        DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
    	        DZ: 'DZ[0-9]{2}[0-9]{20}',
    	        EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
    	        ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
    	        FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
    	        FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
    	        FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
    	        GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
    	        GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
    	        GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
    	        GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
    	        GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
    	        GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
    	        HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
    	        HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
    	        IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
    	        IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
    	        IR: 'IR[0-9]{2}[0-9]{22}',
    	        IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
    	        IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
    	        JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
    	        KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
    	        KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
    	        LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
    	        LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
    	        LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
    	        LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
    	        LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
    	        MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
    	        MD: 'MD[0-9]{2}[A-Z0-9]{20}',
    	        ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
    	        MG: 'MG[0-9]{2}[0-9]{23}',
    	        MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
    	        ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
    	        MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
    	        MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
    	        MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
    	        MZ: 'MZ[0-9]{2}[0-9]{21}',
    	        NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
    	        NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
    	        PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
    	        PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
    	        PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
    	        PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
    	        QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
    	        RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
    	        RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
    	        SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
    	        SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
    	        SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
    	        SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
    	        SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
    	        SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
    	        TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
    	        TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
    	        TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
    	        VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
    	        XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}', // Republic of Kosovo
    	    };
    	    // List of SEPA country codes
    	    var SEPA_COUNTRIES = [
    	        'AT',
    	        'BE',
    	        'BG',
    	        'CH',
    	        'CY',
    	        'CZ',
    	        'DE',
    	        'DK',
    	        'EE',
    	        'ES',
    	        'FI',
    	        'FR',
    	        'GB',
    	        'GI',
    	        'GR',
    	        'HR',
    	        'HU',
    	        'IE',
    	        'IS',
    	        'IT',
    	        'LI',
    	        'LT',
    	        'LU',
    	        'LV',
    	        'MC',
    	        'MT',
    	        'NL',
    	        'NO',
    	        'PL',
    	        'PT',
    	        'RO',
    	        'SE',
    	        'SI',
    	        'SK',
    	        'SM',
    	    ];
    	    return {
    	        /**
    	         * Validate an International Bank Account Number (IBAN)
    	         * To test it, take the sample IBAN from
    	         * http://www.nordea.com/Our+services/
    	         * International+products+and+services/Cash+Management/IBAN+countries/908462.html
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            var v = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    	            // TODO: `country` can be a dynamic option
    	            var country = opts.country || v.substr(0, 2);
    	            if (!IBAN_PATTERNS[country]) {
    	                return {
    	                    message: opts.message,
    	                    valid: false,
    	                };
    	            }
    	            // Check whether or not the sepa option is enabled
    	            if (opts.sepa !== undefined) {
    	                var isSepaCountry = SEPA_COUNTRIES.indexOf(country) !== -1;
    	                if (((opts.sepa === 'true' || opts.sepa === true) && !isSepaCountry) ||
    	                    ((opts.sepa === 'false' || opts.sepa === false) && isSepaCountry)) {
    	                    return {
    	                        message: opts.message,
    	                        valid: false,
    	                    };
    	                }
    	            }
    	            var msg = format(input.l10n ? opts.message || input.l10n.iban.country : opts.message, input.l10n ? input.l10n.iban.countries[country] : country);
    	            if (!new RegExp("^".concat(IBAN_PATTERNS[country], "$")).test(input.value)) {
    	                return {
    	                    message: msg,
    	                    valid: false,
    	                };
    	            }
    	            v = "".concat(v.substr(4)).concat(v.substr(0, 4));
    	            v = v
    	                .split('')
    	                .map(function (n) {
    	                var code = n.charCodeAt(0);
    	                return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)
    	                    ? // Replace A, B, C, ..., Z with 10, 11, ..., 35
    	                        code - 'A'.charCodeAt(0) + 10
    	                    : n;
    	            })
    	                .join('');
    	            var temp = parseInt(v.substr(0, 1), 10);
    	            var length = v.length;
    	            for (var i = 1; i < length; ++i) {
    	                temp = (temp * 10 + parseInt(v.substr(i, 1), 10)) % 97;
    	            }
    	            return {
    	                message: msg,
    	                valid: temp === 1,
    	            };
    	        },
    	    };
    	}

    	cjs$j.iban = iban;
    	return cjs$j;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$j.exports = requireCjs$j();
    }

    var libExports$j = lib$j.exports;

    var lib$i = {exports: {}};

    var cjs$i = {};

    var hasRequiredCjs$i;

    function requireCjs$i () {
    	if (hasRequiredCjs$i) return cjs$i;
    	hasRequiredCjs$i = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Argentinian national identifiers
    	 *
    	 * @see https://en.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Argentina)
    	 * @returns {ValidateResult}
    	 */
    	function arId(value) {
    	    // Replace dot with empty space
    	    var v = value.replace(/\./g, '');
    	    return {
    	        meta: {},
    	        valid: /^\d{7,8}$/.test(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Unique Master Citizen Number which uses in
    	 * - Bosnia and Herzegovina (country code: BA)
    	 * - Macedonia (MK)
    	 * - Montenegro (ME)
    	 * - Serbia (RS)
    	 * - Slovenia (SI)
    	 *
    	 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
    	 * @returns {boolean}
    	 */
    	function jmbg(value, countryCode) {
    	    if (!/^\d{13}$/.test(value)) {
    	        return false;
    	    }
    	    var day = parseInt(value.substr(0, 2), 10);
    	    var month = parseInt(value.substr(2, 2), 10);
    	    // const year = parseInt(value.substr(4, 3), 10)
    	    var rr = parseInt(value.substr(7, 2), 10);
    	    var k = parseInt(value.substr(12, 1), 10);
    	    // Validate date of birth
    	    // FIXME: Validate the year of birth
    	    if (day > 31 || month > 12) {
    	        return false;
    	    }
    	    // Validate checksum
    	    var sum = 0;
    	    for (var i = 0; i < 6; i++) {
    	        sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 10 || sum === 11) {
    	        sum = 0;
    	    }
    	    if (sum !== k) {
    	        return false;
    	    }
    	    // Validate political region
    	    // rr is the political region of birth, which can be in ranges:
    	    // 10-19: Bosnia and Herzegovina
    	    // 20-29: Montenegro
    	    // 30-39: Croatia (not used anymore)
    	    // 41-49: Macedonia
    	    // 50-59: Slovenia (only 50 is used)
    	    // 70-79: Central Serbia
    	    // 80-89: Serbian province of Vojvodina
    	    // 90-99: Kosovo
    	    switch (countryCode.toUpperCase()) {
    	        case 'BA':
    	            return 10 <= rr && rr <= 19;
    	        case 'MK':
    	            return 41 <= rr && rr <= 49;
    	        case 'ME':
    	            return 20 <= rr && rr <= 29;
    	        case 'RS':
    	            return 70 <= rr && rr <= 99;
    	        case 'SI':
    	            return 50 <= rr && rr <= 59;
    	        default:
    	            return true;
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @returns {ValidateResult}
    	 */
    	function baId(value) {
    	    return {
    	        meta: {},
    	        valid: jmbg(value, 'BA'),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$d = core.utils.isValidDate;
    	/**
    	 * Validate Bulgarian national identification number (EGN)
    	 *
    	 * @see http://en.wikipedia.org/wiki/Uniform_civil_number
    	 * @returns {ValidateResult}
    	 */
    	function bgId(value) {
    	    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/\s/g, '');
    	    // Check the birth date
    	    var year = parseInt(v.substr(0, 2), 10) + 1900;
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var day = parseInt(v.substr(4, 2), 10);
    	    if (month > 40) {
    	        year += 100;
    	        month -= 40;
    	    }
    	    else if (month > 20) {
    	        year -= 100;
    	        month -= 20;
    	    }
    	    if (!isValidDate$d(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    	    for (var i = 0; i < 9; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = (sum % 11) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(9, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Brazilian national identification number (CPF)
    	 *
    	 * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
    	 * @returns {ValidateResult}
    	 */
    	function brId(value) {
    	    var v = value.replace(/\D/g, '');
    	    if (!/^\d{11}$/.test(v) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var d1 = 0;
    	    var i;
    	    for (i = 0; i < 9; i++) {
    	        d1 += (10 - i) * parseInt(v.charAt(i), 10);
    	    }
    	    d1 = 11 - (d1 % 11);
    	    if (d1 === 10 || d1 === 11) {
    	        d1 = 0;
    	    }
    	    if ("".concat(d1) !== v.charAt(9)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var d2 = 0;
    	    for (i = 0; i < 10; i++) {
    	        d2 += (11 - i) * parseInt(v.charAt(i), 10);
    	    }
    	    d2 = 11 - (d2 % 11);
    	    if (d2 === 10 || d2 === 11) {
    	        d2 = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(d2) === v.charAt(10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Swiss Social Security Number (AHV-Nr/No AVS)
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
    	 * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
    	 * @returns {ValidateResult}
    	 */
    	function chId(value) {
    	    if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/\D/g, '').substr(3);
    	    var length = v.length;
    	    var weight = length === 8 ? [3, 1] : [1, 3];
    	    var sum = 0;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i % 2];
    	    }
    	    sum = 10 - (sum % 10);
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Chilean national identification number (RUN/RUT)
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
    	 * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
    	 * @returns {ValidateResult}
    	 */
    	function clId(value) {
    	    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/-/g, '');
    	    while (v.length < 9) {
    	        v = "0".concat(v);
    	    }
    	    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    var cd = "".concat(sum);
    	    if (sum === 11) {
    	        cd = '0';
    	    }
    	    else if (sum === 10) {
    	        cd = 'K';
    	    }
    	    return {
    	        meta: {},
    	        valid: cd === v.charAt(8).toUpperCase(),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$c = core.utils.isValidDate;
    	/**
    	 * Validate Chinese citizen identification number
    	 *
    	 * Rules:
    	 * - For current 18-digit system (since 1st Oct 1999, defined by GB11643—1999 national standard):
    	 *     - Digit 0-5: Must be a valid administrative division code of China PR.
    	 *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
    	 *     - Digit 14-16: Order code, any integer.
    	 *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
    	 *       Both upper/lower case of X are tolerated.
    	 * - For deprecated 15-digit system:
    	 *     - Digit 0-5: Must be a valid administrative division code of China PR.
    	 *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
    	 *     - Digit 12-14: Order code, any integer.
    	 * Lists of valid administrative division codes of China PR can be seen here:
    	 * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
    	 * Published and maintained by National Bureau of Statistics of China PR.
    	 * NOTE: Current and deprecated codes MUST BOTH be considered valid.
    	 * Many Chinese citizens born in once existed administrative divisions!
    	 *
    	 * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
    	 * @returns {ValidateResult}
    	 */
    	function cnId(value) {
    	    // Basic format check (18 or 15 digits, considering X in checksum)
    	    var v = value.trim();
    	    if (!/^\d{15}$/.test(v) && !/^\d{17}[\dXx]{1}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check China PR Administrative division code
    	    var adminDivisionCodes = {
    	        11: {
    	            0: [0],
    	            1: [
    	                [0, 9],
    	                [11, 17],
    	            ],
    	            2: [0, 28, 29],
    	        },
    	        12: {
    	            0: [0],
    	            1: [[0, 16]],
    	            2: [0, 21, 23, 25],
    	        },
    	        13: {
    	            0: [0],
    	            1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
    	            2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
    	            3: [
    	                [0, 4],
    	                [21, 24],
    	            ],
    	            4: [[0, 4], 6, 21, [23, 35], 81],
    	            5: [[0, 3], [21, 35], 81, 82],
    	            6: [
    	                [0, 4],
    	                [21, 38],
    	                [81, 84],
    	            ],
    	            7: [[0, 3], 5, 6, [21, 33]],
    	            8: [
    	                [0, 4],
    	                [21, 28],
    	            ],
    	            9: [
    	                [0, 3],
    	                [21, 30],
    	                [81, 84],
    	            ],
    	            10: [[0, 3], [22, 26], 28, 81, 82],
    	            11: [[0, 2], [21, 28], 81, 82],
    	        },
    	        14: {
    	            0: [0],
    	            1: [0, 1, [5, 10], [21, 23], 81],
    	            2: [[0, 3], 11, 12, [21, 27]],
    	            3: [[0, 3], 11, 21, 22],
    	            4: [[0, 2], 11, 21, [23, 31], 81],
    	            5: [[0, 2], 21, 22, 24, 25, 81],
    	            6: [
    	                [0, 3],
    	                [21, 24],
    	            ],
    	            7: [[0, 2], [21, 29], 81],
    	            8: [[0, 2], [21, 30], 81, 82],
    	            9: [[0, 2], [21, 32], 81],
    	            10: [[0, 2], [21, 34], 81, 82],
    	            11: [[0, 2], [21, 30], 81, 82],
    	            23: [[0, 3], 22, 23, [25, 30], 32, 33],
    	        },
    	        15: {
    	            0: [0],
    	            1: [
    	                [0, 5],
    	                [21, 25],
    	            ],
    	            2: [
    	                [0, 7],
    	                [21, 23],
    	            ],
    	            3: [[0, 4]],
    	            4: [
    	                [0, 4],
    	                [21, 26],
    	                [28, 30],
    	            ],
    	            5: [[0, 2], [21, 26], 81],
    	            6: [
    	                [0, 2],
    	                [21, 27],
    	            ],
    	            7: [
    	                [0, 3],
    	                [21, 27],
    	                [81, 85],
    	            ],
    	            8: [
    	                [0, 2],
    	                [21, 26],
    	            ],
    	            9: [[0, 2], [21, 29], 81],
    	            22: [
    	                [0, 2],
    	                [21, 24],
    	            ],
    	            25: [
    	                [0, 2],
    	                [22, 31],
    	            ],
    	            26: [[0, 2], [24, 27], [29, 32], 34],
    	            28: [0, 1, [22, 27]],
    	            29: [0, [21, 23]],
    	        },
    	        21: {
    	            0: [0],
    	            1: [[0, 6], [11, 14], [22, 24], 81],
    	            2: [[0, 4], [11, 13], 24, [81, 83]],
    	            3: [[0, 4], 11, 21, 23, 81],
    	            4: [[0, 4], 11, [21, 23]],
    	            5: [[0, 5], 21, 22],
    	            6: [[0, 4], 24, 81, 82],
    	            7: [[0, 3], 11, 26, 27, 81, 82],
    	            8: [[0, 4], 11, 81, 82],
    	            9: [[0, 5], 11, 21, 22],
    	            10: [[0, 5], 11, 21, 81],
    	            11: [[0, 3], 21, 22],
    	            12: [[0, 2], 4, 21, 23, 24, 81, 82],
    	            13: [[0, 3], 21, 22, 24, 81, 82],
    	            14: [[0, 4], 21, 22, 81],
    	        },
    	        22: {
    	            0: [0],
    	            1: [[0, 6], 12, 22, [81, 83]],
    	            2: [[0, 4], 11, 21, [81, 84]],
    	            3: [[0, 3], 22, 23, 81, 82],
    	            4: [[0, 3], 21, 22],
    	            5: [[0, 3], 21, 23, 24, 81, 82],
    	            6: [[0, 2], 4, 5, [21, 23], 25, 81],
    	            7: [[0, 2], [21, 24], 81],
    	            8: [[0, 2], 21, 22, 81, 82],
    	            24: [[0, 6], 24, 26],
    	        },
    	        23: {
    	            0: [0],
    	            1: [[0, 12], 21, [23, 29], [81, 84]],
    	            2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
    	            3: [[0, 7], 21, 81, 82],
    	            4: [[0, 7], 21, 22],
    	            5: [[0, 3], 5, 6, [21, 24]],
    	            6: [
    	                [0, 6],
    	                [21, 24],
    	            ],
    	            7: [[0, 16], 22, 81],
    	            8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
    	            9: [[0, 4], 21],
    	            10: [[0, 5], 24, 25, 81, [83, 85]],
    	            11: [[0, 2], 21, 23, 24, 81, 82],
    	            12: [
    	                [0, 2],
    	                [21, 26],
    	                [81, 83],
    	            ],
    	            27: [
    	                [0, 4],
    	                [21, 23],
    	            ],
    	        },
    	        31: {
    	            0: [0],
    	            1: [0, 1, [3, 10], [12, 20]],
    	            2: [0, 30],
    	        },
    	        32: {
    	            0: [0],
    	            1: [[0, 7], 11, [13, 18], 24, 25],
    	            2: [[0, 6], 11, 81, 82],
    	            3: [[0, 5], 11, 12, [21, 24], 81, 82],
    	            4: [[0, 2], 4, 5, 11, 12, 81, 82],
    	            5: [
    	                [0, 9],
    	                [81, 85],
    	            ],
    	            6: [[0, 2], 11, 12, 21, 23, [81, 84]],
    	            7: [0, 1, 3, 5, 6, [21, 24]],
    	            8: [[0, 4], 11, 26, [29, 31]],
    	            9: [[0, 3], [21, 25], 28, 81, 82],
    	            10: [[0, 3], 11, 12, 23, 81, 84, 88],
    	            11: [[0, 2], 11, 12, [81, 83]],
    	            12: [
    	                [0, 4],
    	                [81, 84],
    	            ],
    	            13: [[0, 2], 11, [21, 24]],
    	        },
    	        33: {
    	            0: [0],
    	            1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
    	            2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
    	            3: [[0, 4], 22, 24, [26, 29], 81, 82],
    	            4: [[0, 2], 11, 21, 24, [81, 83]],
    	            5: [
    	                [0, 3],
    	                [21, 23],
    	            ],
    	            6: [[0, 2], 21, 24, [81, 83]],
    	            7: [[0, 3], 23, 26, 27, [81, 84]],
    	            8: [[0, 3], 22, 24, 25, 81],
    	            9: [[0, 3], 21, 22],
    	            10: [[0, 4], [21, 24], 81, 82],
    	            11: [[0, 2], [21, 27], 81],
    	        },
    	        34: {
    	            0: [0],
    	            1: [[0, 4], 11, [21, 24], 81],
    	            2: [[0, 4], 7, 8, [21, 23], 25],
    	            3: [[0, 4], 11, [21, 23]],
    	            4: [[0, 6], 21],
    	            5: [[0, 4], 6, [21, 23]],
    	            6: [[0, 4], 21],
    	            7: [[0, 3], 11, 21],
    	            8: [[0, 3], 11, [22, 28], 81],
    	            10: [
    	                [0, 4],
    	                [21, 24],
    	            ],
    	            11: [[0, 3], 22, [24, 26], 81, 82],
    	            12: [[0, 4], 21, 22, 25, 26, 82],
    	            13: [
    	                [0, 2],
    	                [21, 24],
    	            ],
    	            14: [
    	                [0, 2],
    	                [21, 24],
    	            ],
    	            15: [
    	                [0, 3],
    	                [21, 25],
    	            ],
    	            16: [
    	                [0, 2],
    	                [21, 23],
    	            ],
    	            17: [
    	                [0, 2],
    	                [21, 23],
    	            ],
    	            18: [[0, 2], [21, 25], 81],
    	        },
    	        35: {
    	            0: [0],
    	            1: [[0, 5], 11, [21, 25], 28, 81, 82],
    	            2: [
    	                [0, 6],
    	                [11, 13],
    	            ],
    	            3: [[0, 5], 22],
    	            4: [[0, 3], 21, [23, 30], 81],
    	            5: [[0, 5], 21, [24, 27], [81, 83]],
    	            6: [[0, 3], [22, 29], 81],
    	            7: [
    	                [0, 2],
    	                [21, 25],
    	                [81, 84],
    	            ],
    	            8: [[0, 2], [21, 25], 81],
    	            9: [[0, 2], [21, 26], 81, 82],
    	        },
    	        36: {
    	            0: [0],
    	            1: [[0, 5], 11, [21, 24]],
    	            2: [[0, 3], 22, 81],
    	            3: [[0, 2], 13, [21, 23]],
    	            4: [[0, 3], 21, [23, 30], 81, 82],
    	            5: [[0, 2], 21],
    	            6: [[0, 2], 22, 81],
    	            7: [[0, 2], [21, 35], 81, 82],
    	            8: [[0, 3], [21, 30], 81],
    	            9: [
    	                [0, 2],
    	                [21, 26],
    	                [81, 83],
    	            ],
    	            10: [
    	                [0, 2],
    	                [21, 30],
    	            ],
    	            11: [[0, 2], [21, 30], 81],
    	        },
    	        37: {
    	            0: [0],
    	            1: [[0, 5], 12, 13, [24, 26], 81],
    	            2: [[0, 3], 5, [11, 14], [81, 85]],
    	            3: [
    	                [0, 6],
    	                [21, 23],
    	            ],
    	            4: [[0, 6], 81],
    	            5: [
    	                [0, 3],
    	                [21, 23],
    	            ],
    	            6: [[0, 2], [11, 13], 34, [81, 87]],
    	            7: [[0, 5], 24, 25, [81, 86]],
    	            8: [[0, 2], 11, [26, 32], [81, 83]],
    	            9: [[0, 3], 11, 21, 23, 82, 83],
    	            10: [
    	                [0, 2],
    	                [81, 83],
    	            ],
    	            11: [[0, 3], 21, 22],
    	            12: [[0, 3]],
    	            13: [[0, 2], 11, 12, [21, 29]],
    	            14: [[0, 2], [21, 28], 81, 82],
    	            15: [[0, 2], [21, 26], 81],
    	            16: [
    	                [0, 2],
    	                [21, 26],
    	            ],
    	            17: [
    	                [0, 2],
    	                [21, 28],
    	            ],
    	        },
    	        41: {
    	            0: [0],
    	            1: [[0, 6], 8, 22, [81, 85]],
    	            2: [[0, 5], 11, [21, 25]],
    	            3: [[0, 7], 11, [22, 29], 81],
    	            4: [[0, 4], 11, [21, 23], 25, 81, 82],
    	            5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
    	            6: [[0, 3], 11, 21, 22],
    	            7: [[0, 4], 11, 21, [24, 28], 81, 82],
    	            8: [[0, 4], 11, [21, 23], 25, [81, 83]],
    	            9: [[0, 2], 22, 23, [26, 28]],
    	            10: [[0, 2], [23, 25], 81, 82],
    	            11: [
    	                [0, 4],
    	                [21, 23],
    	            ],
    	            12: [[0, 2], 21, 22, 24, 81, 82],
    	            13: [[0, 3], [21, 30], 81],
    	            14: [[0, 3], [21, 26], 81],
    	            15: [
    	                [0, 3],
    	                [21, 28],
    	            ],
    	            16: [[0, 2], [21, 28], 81],
    	            17: [
    	                [0, 2],
    	                [21, 29],
    	            ],
    	            90: [0, 1],
    	        },
    	        42: {
    	            0: [0],
    	            1: [
    	                [0, 7],
    	                [11, 17],
    	            ],
    	            2: [[0, 5], 22, 81],
    	            3: [[0, 3], [21, 25], 81],
    	            5: [
    	                [0, 6],
    	                [25, 29],
    	                [81, 83],
    	            ],
    	            6: [[0, 2], 6, 7, [24, 26], [82, 84]],
    	            7: [[0, 4]],
    	            8: [[0, 2], 4, 21, 22, 81],
    	            9: [[0, 2], [21, 23], 81, 82, 84],
    	            10: [[0, 3], [22, 24], 81, 83, 87],
    	            11: [[0, 2], [21, 27], 81, 82],
    	            12: [[0, 2], [21, 24], 81],
    	            13: [[0, 3], 21, 81],
    	            28: [[0, 2], 22, 23, [25, 28]],
    	            90: [0, [4, 6], 21],
    	        },
    	        43: {
    	            0: [0],
    	            1: [[0, 5], 11, 12, 21, 22, 24, 81],
    	            2: [[0, 4], 11, 21, [23, 25], 81],
    	            3: [[0, 2], 4, 21, 81, 82],
    	            4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
    	            5: [[0, 3], 11, [21, 25], [27, 29], 81],
    	            6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
    	            7: [[0, 3], [21, 26], 81],
    	            8: [[0, 2], 11, 21, 22],
    	            9: [[0, 3], [21, 23], 81],
    	            10: [[0, 3], [21, 28], 81],
    	            11: [
    	                [0, 3],
    	                [21, 29],
    	            ],
    	            12: [[0, 2], [21, 30], 81],
    	            13: [[0, 2], 21, 22, 81, 82],
    	            31: [0, 1, [22, 27], 30],
    	        },
    	        44: {
    	            0: [0],
    	            1: [[0, 7], [11, 16], 83, 84],
    	            2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
    	            3: [0, 1, [3, 8]],
    	            4: [[0, 4]],
    	            5: [0, 1, [6, 15], 23, 82, 83],
    	            6: [0, 1, [4, 8]],
    	            7: [0, 1, [3, 5], 81, [83, 85]],
    	            8: [[0, 4], 11, 23, 25, [81, 83]],
    	            9: [[0, 3], 23, [81, 83]],
    	            12: [[0, 3], [23, 26], 83, 84],
    	            13: [[0, 3], [22, 24], 81],
    	            14: [[0, 2], [21, 24], 26, 27, 81],
    	            15: [[0, 2], 21, 23, 81],
    	            16: [
    	                [0, 2],
    	                [21, 25],
    	            ],
    	            17: [[0, 2], 21, 23, 81],
    	            18: [[0, 3], 21, 23, [25, 27], 81, 82],
    	            19: [0],
    	            20: [0],
    	            51: [[0, 3], 21, 22],
    	            52: [[0, 3], 21, 22, 24, 81],
    	            53: [[0, 2], [21, 23], 81],
    	        },
    	        45: {
    	            0: [0],
    	            1: [
    	                [0, 9],
    	                [21, 27],
    	            ],
    	            2: [
    	                [0, 5],
    	                [21, 26],
    	            ],
    	            3: [[0, 5], 11, 12, [21, 32]],
    	            4: [0, 1, [3, 6], 11, [21, 23], 81],
    	            5: [[0, 3], 12, 21],
    	            6: [[0, 3], 21, 81],
    	            7: [[0, 3], 21, 22],
    	            8: [[0, 4], 21, 81],
    	            9: [[0, 3], [21, 24], 81],
    	            10: [
    	                [0, 2],
    	                [21, 31],
    	            ],
    	            11: [
    	                [0, 2],
    	                [21, 23],
    	            ],
    	            12: [[0, 2], [21, 29], 81],
    	            13: [[0, 2], [21, 24], 81],
    	            14: [[0, 2], [21, 25], 81],
    	        },
    	        46: {
    	            0: [0],
    	            1: [0, 1, [5, 8]],
    	            2: [0, 1],
    	            3: [0, [21, 23]],
    	            90: [
    	                [0, 3],
    	                [5, 7],
    	                [21, 39],
    	            ],
    	        },
    	        50: {
    	            0: [0],
    	            1: [[0, 19]],
    	            2: [0, [22, 38], [40, 43]],
    	            3: [0, [81, 84]],
    	        },
    	        51: {
    	            0: [0],
    	            1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
    	            3: [[0, 4], 11, 21, 22],
    	            4: [[0, 3], 11, 21, 22],
    	            5: [[0, 4], 21, 22, 24, 25],
    	            6: [0, 1, 3, 23, 26, [81, 83]],
    	            7: [0, 1, 3, 4, [22, 27], 81],
    	            8: [[0, 2], 11, 12, [21, 24]],
    	            9: [
    	                [0, 4],
    	                [21, 23],
    	            ],
    	            10: [[0, 2], 11, 24, 25, 28],
    	            11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
    	            13: [[0, 4], [21, 25], 81],
    	            14: [
    	                [0, 2],
    	                [21, 25],
    	            ],
    	            15: [
    	                [0, 3],
    	                [21, 29],
    	            ],
    	            16: [[0, 3], [21, 23], 81],
    	            17: [[0, 3], [21, 25], 81],
    	            18: [
    	                [0, 3],
    	                [21, 27],
    	            ],
    	            19: [
    	                [0, 3],
    	                [21, 23],
    	            ],
    	            20: [[0, 2], 21, 22, 81],
    	            32: [0, [21, 33]],
    	            33: [0, [21, 38]],
    	            34: [0, 1, [22, 37]],
    	        },
    	        52: {
    	            0: [0],
    	            1: [[0, 3], [11, 15], [21, 23], 81],
    	            2: [0, 1, 3, 21, 22],
    	            3: [[0, 3], [21, 30], 81, 82],
    	            4: [
    	                [0, 2],
    	                [21, 25],
    	            ],
    	            5: [
    	                [0, 2],
    	                [21, 27],
    	            ],
    	            6: [
    	                [0, 3],
    	                [21, 28],
    	            ],
    	            22: [0, 1, [22, 30]],
    	            23: [0, 1, [22, 28]],
    	            24: [0, 1, [22, 28]],
    	            26: [0, 1, [22, 36]],
    	            27: [[0, 2], 22, 23, [25, 32]],
    	        },
    	        53: {
    	            0: [0],
    	            1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
    	            3: [[0, 2], [21, 26], 28, 81],
    	            4: [
    	                [0, 2],
    	                [21, 28],
    	            ],
    	            5: [
    	                [0, 2],
    	                [21, 24],
    	            ],
    	            6: [
    	                [0, 2],
    	                [21, 30],
    	            ],
    	            7: [
    	                [0, 2],
    	                [21, 24],
    	            ],
    	            8: [
    	                [0, 2],
    	                [21, 29],
    	            ],
    	            9: [
    	                [0, 2],
    	                [21, 27],
    	            ],
    	            23: [0, 1, [22, 29], 31],
    	            25: [
    	                [0, 4],
    	                [22, 32],
    	            ],
    	            26: [0, 1, [21, 28]],
    	            27: [0, 1, [22, 30]],
    	            28: [0, 1, 22, 23],
    	            29: [0, 1, [22, 32]],
    	            31: [0, 2, 3, [22, 24]],
    	            34: [0, [21, 23]],
    	            33: [0, 21, [23, 25]],
    	            35: [0, [21, 28]],
    	        },
    	        54: {
    	            0: [0],
    	            1: [
    	                [0, 2],
    	                [21, 27],
    	            ],
    	            21: [0, [21, 29], 32, 33],
    	            22: [0, [21, 29], [31, 33]],
    	            23: [0, 1, [22, 38]],
    	            24: [0, [21, 31]],
    	            25: [0, [21, 27]],
    	            26: [0, [21, 27]],
    	        },
    	        61: {
    	            0: [0],
    	            1: [[0, 4], [11, 16], 22, [24, 26]],
    	            2: [[0, 4], 22],
    	            3: [
    	                [0, 4],
    	                [21, 24],
    	                [26, 31],
    	            ],
    	            4: [[0, 4], [22, 31], 81],
    	            5: [[0, 2], [21, 28], 81, 82],
    	            6: [
    	                [0, 2],
    	                [21, 32],
    	            ],
    	            7: [
    	                [0, 2],
    	                [21, 30],
    	            ],
    	            8: [
    	                [0, 2],
    	                [21, 31],
    	            ],
    	            9: [
    	                [0, 2],
    	                [21, 29],
    	            ],
    	            10: [
    	                [0, 2],
    	                [21, 26],
    	            ],
    	        },
    	        62: {
    	            0: [0],
    	            1: [[0, 5], 11, [21, 23]],
    	            2: [0, 1],
    	            3: [[0, 2], 21],
    	            4: [
    	                [0, 3],
    	                [21, 23],
    	            ],
    	            5: [
    	                [0, 3],
    	                [21, 25],
    	            ],
    	            6: [
    	                [0, 2],
    	                [21, 23],
    	            ],
    	            7: [
    	                [0, 2],
    	                [21, 25],
    	            ],
    	            8: [
    	                [0, 2],
    	                [21, 26],
    	            ],
    	            9: [[0, 2], [21, 24], 81, 82],
    	            10: [
    	                [0, 2],
    	                [21, 27],
    	            ],
    	            11: [
    	                [0, 2],
    	                [21, 26],
    	            ],
    	            12: [
    	                [0, 2],
    	                [21, 28],
    	            ],
    	            24: [0, 21, [24, 29]],
    	            26: [0, 21, [23, 30]],
    	            29: [0, 1, [21, 27]],
    	            30: [0, 1, [21, 27]],
    	        },
    	        63: {
    	            0: [0],
    	            1: [
    	                [0, 5],
    	                [21, 23],
    	            ],
    	            2: [0, 2, [21, 25]],
    	            21: [0, [21, 23], [26, 28]],
    	            22: [0, [21, 24]],
    	            23: [0, [21, 24]],
    	            25: [0, [21, 25]],
    	            26: [0, [21, 26]],
    	            27: [0, 1, [21, 26]],
    	            28: [
    	                [0, 2],
    	                [21, 23],
    	            ],
    	        },
    	        64: {
    	            0: [0],
    	            1: [0, 1, [4, 6], 21, 22, 81],
    	            2: [[0, 3], 5, [21, 23]],
    	            3: [[0, 3], [21, 24], 81],
    	            4: [
    	                [0, 2],
    	                [21, 25],
    	            ],
    	            5: [[0, 2], 21, 22],
    	        },
    	        65: {
    	            0: [0],
    	            1: [[0, 9], 21],
    	            2: [[0, 5]],
    	            21: [0, 1, 22, 23],
    	            22: [0, 1, 22, 23],
    	            23: [[0, 3], [23, 25], 27, 28],
    	            28: [0, 1, [22, 29]],
    	            29: [0, 1, [22, 29]],
    	            30: [0, 1, [22, 24]],
    	            31: [0, 1, [21, 31]],
    	            32: [0, 1, [21, 27]],
    	            40: [0, 2, 3, [21, 28]],
    	            42: [[0, 2], 21, [23, 26]],
    	            43: [0, 1, [21, 26]],
    	            90: [[0, 4]],
    	            27: [[0, 2], 22, 23],
    	        },
    	        71: { 0: [0] },
    	        81: { 0: [0] },
    	        82: { 0: [0] },
    	    };
    	    var provincial = parseInt(v.substr(0, 2), 10);
    	    var prefectural = parseInt(v.substr(2, 2), 10);
    	    var county = parseInt(v.substr(4, 2), 10);
    	    if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var inRange = false;
    	    var rangeDef = adminDivisionCodes[provincial][prefectural];
    	    var i;
    	    for (i = 0; i < rangeDef.length; i++) {
    	        if ((Array.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1]) ||
    	            (!Array.isArray(rangeDef[i]) && county === rangeDef[i])) {
    	            inRange = true;
    	            break;
    	        }
    	    }
    	    if (!inRange) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check date of birth
    	    var dob;
    	    if (v.length === 18) {
    	        dob = v.substr(6, 8);
    	    } /* length == 15 */
    	    else {
    	        dob = "19".concat(v.substr(6, 6));
    	    }
    	    var year = parseInt(dob.substr(0, 4), 10);
    	    var month = parseInt(dob.substr(4, 2), 10);
    	    var day = parseInt(dob.substr(6, 2), 10);
    	    if (!isValidDate$c(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check checksum (18-digit system only)
    	    if (v.length === 18) {
    	        var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    	        var sum = 0;
    	        for (i = 0; i < 17; i++) {
    	            sum += parseInt(v.charAt(i), 10) * weight[i];
    	        }
    	        sum = (12 - (sum % 11)) % 11;
    	        var checksum = v.charAt(17).toUpperCase() !== 'X' ? parseInt(v.charAt(17), 10) : 10;
    	        return {
    	            meta: {},
    	            valid: checksum === sum,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: true,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Colombian identification number (NIT)
    	 * @see https://es.wikipedia.org/wiki/N%C3%BAmero_de_Identificaci%C3%B3n_Tributaria
    	 * @returns {ValidateResult}
    	 */
    	function coId(value) {
    	    var v = value.replace(/\./g, '').replace('-', '');
    	    if (!/^\d{8,16}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var length = v.length;
    	    var weight = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    	    var sum = 0;
    	    for (var i = length - 2; i >= 0; i--) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = sum % 11;
    	    if (sum >= 2) {
    	        sum = 11 - sum;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$b = core.utils.isValidDate;
    	/**
    	 * Validate Czech national identification number (RC)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function czId(value) {
    	    if (!/^\d{9,10}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var year = 1900 + parseInt(value.substr(0, 2), 10);
    	    var month = (parseInt(value.substr(2, 2), 10) % 50) % 20;
    	    var day = parseInt(value.substr(4, 2), 10);
    	    if (value.length === 9) {
    	        if (year >= 1980) {
    	            year -= 100;
    	        }
    	        if (year > 1953) {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	    }
    	    else if (year < 1954) {
    	        year += 100;
    	    }
    	    if (!isValidDate$b(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check that the birth date is not in the future
    	    if (value.length === 10) {
    	        var check = parseInt(value.substr(0, 9), 10) % 11;
    	        if (year < 1985) {
    	            check = check % 10;
    	        }
    	        return {
    	            meta: {},
    	            valid: "".concat(check) === value.substr(9, 1),
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: true,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$a = core.utils.isValidDate;
    	/**
    	 * Validate Danish Personal Identification number (CPR)
    	 *
    	 * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
    	 * @returns {ValidateResult}
    	 */
    	function dkId(value) {
    	    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/-/g, '');
    	    var day = parseInt(v.substr(0, 2), 10);
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var year = parseInt(v.substr(4, 2), 10);
    	    switch (true) {
    	        case '5678'.indexOf(v.charAt(6)) !== -1 && year >= 58:
    	            year += 1800;
    	            break;
    	        case '0123'.indexOf(v.charAt(6)) !== -1:
    	        case '49'.indexOf(v.charAt(6)) !== -1 && year >= 37:
    	            year += 1900;
    	            break;
    	        default:
    	            year += 2000;
    	            break;
    	    }
    	    return {
    	        meta: {},
    	        valid: isValidDate$a(year, month, day),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Spanish personal identity code (DNI)
    	 * Support DNI (for Spanish citizens), NIE (for foreign people) and CIF (for legal entities)
    	 *
    	 * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
    	 * @returns {ValidateResult}
    	 */
    	function esId(value) {
    	    var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    	    var isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    	    var isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
    	    if (!isDNI && !isNIE && !isCIF) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/-/g, '');
    	    var check;
    	    var tpe;
    	    var isValid = true;
    	    if (isDNI || isNIE) {
    	        tpe = 'DNI';
    	        var index = 'XYZ'.indexOf(v.charAt(0));
    	        if (index !== -1) {
    	            // It is NIE number
    	            v = index + v.substr(1) + '';
    	            tpe = 'NIE';
    	        }
    	        check = parseInt(v.substr(0, 8), 10);
    	        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
    	        return {
    	            meta: {
    	                type: tpe,
    	            },
    	            valid: check === v.substr(8, 1),
    	        };
    	    }
    	    else {
    	        check = v.substr(1, 7);
    	        tpe = 'CIF';
    	        var letter = v[0];
    	        var control = v.substr(-1);
    	        var sum = 0;
    	        // The digits in the even positions are added to the sum directly.
    	        // The ones in the odd positions are multiplied by 2 and then added to the sum.
    	        // If the result of multiplying by 2 is 10 or higher, add the two digits
    	        // together and add that to the sum instead
    	        for (var i = 0; i < check.length; i++) {
    	            if (i % 2 !== 0) {
    	                sum += parseInt(check[i], 10);
    	            }
    	            else {
    	                var tmp = '' + parseInt(check[i], 10) * 2;
    	                sum += parseInt(tmp[0], 10);
    	                if (tmp.length === 2) {
    	                    sum += parseInt(tmp[1], 10);
    	                }
    	            }
    	        }
    	        // The control digit is calculated from the last digit of the sum.
    	        // If that last digit is not 0, subtract it from 10
    	        var lastDigit = sum - Math.floor(sum / 10) * 10;
    	        if (lastDigit !== 0) {
    	            lastDigit = 10 - lastDigit;
    	        }
    	        if ('KQS'.indexOf(letter) !== -1) {
    	            // If the CIF starts with a K, Q or S, the control digit must be a letter
    	            isValid = control === 'JABCDEFGHI'[lastDigit];
    	        }
    	        else if ('ABEH'.indexOf(letter) !== -1) {
    	            // If it starts with A, B, E or H, it has to be a number
    	            isValid = control === '' + lastDigit;
    	        }
    	        else {
    	            // In any other case, it doesn't matter
    	            isValid = control === '' + lastDigit || control === 'JABCDEFGHI'[lastDigit];
    	        }
    	        return {
    	            meta: {
    	                type: tpe,
    	            },
    	            valid: isValid,
    	        };
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$9 = core.utils.isValidDate;
    	/**
    	 * Validate Finnish Personal Identity Code (HETU)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function fiId(value) {
    	    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var day = parseInt(value.substr(0, 2), 10);
    	    var month = parseInt(value.substr(2, 2), 10);
    	    var year = parseInt(value.substr(4, 2), 10);
    	    var centuries = {
    	        '+': 1800,
    	        '-': 1900,
    	        A: 2000,
    	    };
    	    year = centuries[value.charAt(6)] + year;
    	    if (!isValidDate$9(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var individual = parseInt(value.substr(7, 3), 10);
    	    if (individual < 2) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var n = parseInt(value.substr(0, 6) + value.substr(7, 3) + '', 10);
    	    return {
    	        meta: {},
    	        valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate French identification number (NIR)
    	 *
    	 * @see https://en.wikipedia.org/wiki/INSEE_code
    	 * @see https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France
    	 * @returns {ValidateResult}
    	 */
    	function frId(value) {
    	    var v = value.toUpperCase();
    	    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // The COG group can be 2 digits or 2A or 2B
    	    var cog = v.substr(5, 2);
    	    switch (true) {
    	        case /^\d{2}$/.test(cog):
    	            v = value;
    	            break;
    	        case cog === '2A':
    	            v = "".concat(value.substr(0, 5), "19").concat(value.substr(7));
    	            break;
    	        case cog === '2B':
    	            v = "".concat(value.substr(0, 5), "18").concat(value.substr(7));
    	            break;
    	        default:
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	    }
    	    var mod = 97 - (parseInt(v.substr(0, 13), 10) % 97);
    	    var prefixWithZero = mod < 10 ? "0".concat(mod) : "".concat(mod);
    	    return {
    	        meta: {},
    	        valid: prefixWithZero === v.substr(13),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Hong Kong identity card number (HKID)
    	 *
    	 * @see https://en.wikipedia.org/wiki/National_identification_number#Hong_Kong
    	 * @returns {ValidateResult}
    	 */
    	function hkId(value) {
    	    var v = value.toUpperCase();
    	    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    	    var firstChar = v.charAt(0);
    	    var secondChar = v.charAt(1);
    	    var sum = 0;
    	    var digitParts = v;
    	    if (/^[A-Z]$/.test(secondChar)) {
    	        sum += 9 * (10 + alphabet.indexOf(firstChar));
    	        sum += 8 * (10 + alphabet.indexOf(secondChar));
    	        digitParts = v.substr(2);
    	    }
    	    else {
    	        sum += 9 * 36;
    	        sum += 8 * (10 + alphabet.indexOf(firstChar));
    	        digitParts = v.substr(1);
    	    }
    	    var length = digitParts.length;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += (7 - i) * parseInt(digitParts.charAt(i), 10);
    	    }
    	    var remaining = sum % 11;
    	    var checkDigit = remaining === 0 ? '0' : 11 - remaining === 10 ? 'A' : "".concat(11 - remaining);
    	    return {
    	        meta: {},
    	        valid: checkDigit === digitParts.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var mod11And10 = core.algorithms.mod11And10;
    	/**
    	 * Validate Croatian personal identification number (OIB)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function hrId(value) {
    	    return {
    	        meta: {},
    	        valid: /^[0-9]{11}$/.test(value) && mod11And10(value),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var verhoeff = core.algorithms.verhoeff;
    	/**
    	 * Validate Indian Aadhaar numbers
    	 * @see https://en.wikipedia.org/wiki/Aadhaar
    	 * @returns {ValidateResult}
    	 */
    	function idId(value) {
    	    if (!/^[2-9]\d{11}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var converted = value.split('').map(function (item) { return parseInt(item, 10); });
    	    return {
    	        meta: {},
    	        valid: verhoeff(converted),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Irish Personal Public Service Number (PPS)
    	 *
    	 * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
    	 * @returns {ValidateResult}
    	 */
    	function ieId(value) {
    	    if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var getCheckDigit = function (v) {
    	        var input = v;
    	        while (input.length < 7) {
    	            input = "0".concat(input);
    	        }
    	        var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
    	        var sum = 0;
    	        for (var i = 0; i < 7; i++) {
    	            sum += parseInt(input.charAt(i), 10) * (8 - i);
    	        }
    	        sum += 9 * alphabet.indexOf(input.substr(7));
    	        return alphabet[sum % 23];
    	    };
    	    // 2013 format
    	    var isValid = value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))
    	        ? value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '')
    	        : // The old format
    	            value.charAt(7) === getCheckDigit(value.substr(0, 7));
    	    return {
    	        meta: {},
    	        valid: isValid,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn$2 = core.algorithms.luhn;
    	/**
    	 * Validate Israeli identity number (Mispar Zehut)
    	 *
    	 * @see https://gist.github.com/freak4pc/6802be89d019bca57756a675d761c5a8
    	 * @see http://halemo.net/info/idcard/
    	 * @returns {ValidateResult}
    	 */
    	function ilId(value) {
    	    if (!/^\d{1,9}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: luhn$2(value),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$8 = core.utils.isValidDate;
    	/**
    	 * Validate Iceland national identification number (Kennitala)
    	 *
    	 * @see http://en.wikipedia.org/wiki/Kennitala
    	 * @returns {ValidateResult}
    	 */
    	function isId(value) {
    	    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/-/g, '');
    	    var day = parseInt(v.substr(0, 2), 10);
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var year = parseInt(v.substr(4, 2), 10);
    	    var century = parseInt(v.charAt(9), 10);
    	    year = century === 9 ? 1900 + year : (20 + century) * 100 + year;
    	    if (!isValidDate$8(year, month, day, true)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate the check digit
    	    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(8),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$7 = core.utils.isValidDate;
    	/**
    	 * Validate Korean registration number (RRN)
    	 *
    	 * @see https://en.wikipedia.org/wiki/Resident_registration_number
    	 * @returns {ValidateResult}
    	 */
    	function krId(value) {
    	    var v = value.replace('-', '');
    	    if (!/^\d{13}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check the date of birth
    	    var sDigit = v.charAt(6);
    	    var year = parseInt(v.substr(0, 2), 10);
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var day = parseInt(v.substr(4, 2), 10);
    	    switch (sDigit) {
    	        case '1':
    	        case '2':
    	        case '5':
    	        case '6':
    	            year += 1900;
    	            break;
    	        case '3':
    	        case '4':
    	        case '7':
    	        case '8':
    	            year += 2000;
    	            break;
    	        default:
    	            year += 1800;
    	            break;
    	    }
    	    if (!isValidDate$7(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Calculate the check digit
    	    var weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    	    var length = v.length;
    	    var sum = 0;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += weight[i] * parseInt(v.charAt(i), 10);
    	    }
    	    var checkDigit = (11 - (sum % 11)) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(checkDigit) === v.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$6 = core.utils.isValidDate;
    	/**
    	 * Validate Lithuanian Personal Code (Asmens kodas)
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
    	 * @see http://www.adomas.org/midi2007/pcode.html
    	 * @returns {ValidateResult}
    	 */
    	function ltId(value) {
    	    if (!/^[0-9]{11}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var gender = parseInt(value.charAt(0), 10);
    	    var year = parseInt(value.substr(1, 2), 10);
    	    var month = parseInt(value.substr(3, 2), 10);
    	    var day = parseInt(value.substr(5, 2), 10);
    	    var century = gender % 2 === 0 ? 17 + gender / 2 : 17 + (gender + 1) / 2;
    	    year = century * 100 + year;
    	    if (!isValidDate$6(year, month, day, true)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate the check digit
    	    var weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    	    var sum = 0;
    	    var i;
    	    for (i = 0; i < 10; i++) {
    	        sum += parseInt(value.charAt(i), 10) * weight[i];
    	    }
    	    sum = sum % 11;
    	    if (sum !== 10) {
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === value.charAt(10),
    	        };
    	    }
    	    // Re-calculate the check digit
    	    sum = 0;
    	    weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    	    for (i = 0; i < 10; i++) {
    	        sum += parseInt(value.charAt(i), 10) * weight[i];
    	    }
    	    sum = sum % 11;
    	    if (sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === value.charAt(10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$5 = core.utils.isValidDate;
    	/**
    	 * Validate Latvian Personal Code (Personas kods)
    	 *
    	 * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
    	 * @returns {ValidateResult}
    	 */
    	function lvId(value) {
    	    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/\D/g, '');
    	    // Check birth date
    	    var day = parseInt(v.substr(0, 2), 10);
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var year = parseInt(v.substr(4, 2), 10);
    	    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
    	    if (!isValidDate$5(year, month, day, true)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check personal code
    	    var sum = 0;
    	    var weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
    	    for (var i = 0; i < 10; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = ((sum + 1) % 11) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @returns {ValidateResult}
    	 */
    	function meId(value) {
    	    return {
    	        meta: {},
    	        valid: jmbg(value, 'ME'),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @returns {ValidateResult}
    	 */
    	function mkId(value) {
    	    return {
    	        meta: {},
    	        valid: jmbg(value, 'MK'),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$4 = core.utils.isValidDate;
    	/**
    	 * Validate Mexican ID number (CURP)
    	 *
    	 * @see https://en.wikipedia.org/wiki/Unique_Population_Registry_Code
    	 * @returns {ValidateResult}
    	 */
    	function mxId(value) {
    	    var v = value.toUpperCase();
    	    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check if the combination of initial names belongs to a back list
    	    // See
    	    // http://quemamadera.blogspot.com/2008/02/las-palabras-inconvenientes-del-curp.html
    	    // https://www.reddit.com/r/mexico/comments/bo8cv/hoy_aprendi_que_existe_un_catalogo_de_palabras/
    	    var blacklistNames = [
    	        'BACA',
    	        'BAKA',
    	        'BUEI',
    	        'BUEY',
    	        'CACA',
    	        'CACO',
    	        'CAGA',
    	        'CAGO',
    	        'CAKA',
    	        'CAKO',
    	        'COGE',
    	        'COGI',
    	        'COJA',
    	        'COJE',
    	        'COJI',
    	        'COJO',
    	        'COLA',
    	        'CULO',
    	        'FALO',
    	        'FETO',
    	        'GETA',
    	        'GUEI',
    	        'GUEY',
    	        'JETA',
    	        'JOTO',
    	        'KACA',
    	        'KACO',
    	        'KAGA',
    	        'KAGO',
    	        'KAKA',
    	        'KAKO',
    	        'KOGE',
    	        'KOGI',
    	        'KOJA',
    	        'KOJE',
    	        'KOJI',
    	        'KOJO',
    	        'KOLA',
    	        'KULO',
    	        'LILO',
    	        'LOCA',
    	        'LOCO',
    	        'LOKA',
    	        'LOKO',
    	        'MAME',
    	        'MAMO',
    	        'MEAR',
    	        'MEAS',
    	        'MEON',
    	        'MIAR',
    	        'MION',
    	        'MOCO',
    	        'MOKO',
    	        'MULA',
    	        'MULO',
    	        'NACA',
    	        'NACO',
    	        'PEDA',
    	        'PEDO',
    	        'PENE',
    	        'PIPI',
    	        'PITO',
    	        'POPO',
    	        'PUTA',
    	        'PUTO',
    	        'QULO',
    	        'RATA',
    	        'ROBA',
    	        'ROBE',
    	        'ROBO',
    	        'RUIN',
    	        'SENO',
    	        'TETA',
    	        'VACA',
    	        'VAGA',
    	        'VAGO',
    	        'VAKA',
    	        'VUEI',
    	        'VUEY',
    	        'WUEI',
    	        'WUEY',
    	    ];
    	    var name = v.substr(0, 4);
    	    if (blacklistNames.indexOf(name) >= 0) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check the date of birth
    	    var year = parseInt(v.substr(4, 2), 10);
    	    var month = parseInt(v.substr(6, 2), 10);
    	    var day = parseInt(v.substr(6, 2), 10);
    	    if (/^[0-9]$/.test(v.charAt(16))) {
    	        year += 1900;
    	    }
    	    else {
    	        year += 2000;
    	    }
    	    if (!isValidDate$4(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check the gender
    	    var gender = v.charAt(10);
    	    if (gender !== 'H' && gender !== 'M') {
    	        // H for male, M for female
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Check the state
    	    var state = v.substr(11, 2);
    	    var states = [
    	        'AS',
    	        'BC',
    	        'BS',
    	        'CC',
    	        'CH',
    	        'CL',
    	        'CM',
    	        'CS',
    	        'DF',
    	        'DG',
    	        'GR',
    	        'GT',
    	        'HG',
    	        'JC',
    	        'MC',
    	        'MN',
    	        'MS',
    	        'NE',
    	        'NL',
    	        'NT',
    	        'OC',
    	        'PL',
    	        'QR',
    	        'QT',
    	        'SL',
    	        'SP',
    	        'SR',
    	        'TC',
    	        'TL',
    	        'TS',
    	        'VZ',
    	        'YN',
    	        'ZS',
    	    ];
    	    if (states.indexOf(state) === -1) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Calculate the check digit
    	    var alphabet = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ';
    	    var sum = 0;
    	    var length = v.length;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += (18 - i) * alphabet.indexOf(v.charAt(i));
    	    }
    	    sum = (10 - (sum % 10)) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$3 = core.utils.isValidDate;
    	/**
    	 * Validate Malaysian identity card number
    	 *
    	 * @see https://en.wikipedia.org/wiki/Malaysian_identity_card
    	 * @returns {ValidateResult}
    	 */
    	function myId(value) {
    	    if (!/^\d{12}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate date of birth
    	    var year = parseInt(value.substr(0, 2), 10);
    	    var month = parseInt(value.substr(2, 2), 10);
    	    var day = parseInt(value.substr(4, 2), 10);
    	    if (!isValidDate$3(year + 1900, month, day) && !isValidDate$3(year + 2000, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate place of birth
    	    var placeOfBirth = value.substr(6, 2);
    	    var notAvailablePlaces = ['17', '18', '19', '20', '69', '70', '73', '80', '81', '94', '95', '96', '97'];
    	    return {
    	        meta: {},
    	        valid: notAvailablePlaces.indexOf(placeOfBirth) === -1,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Dutch national identification number (BSN)
    	 *
    	 * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
    	 * @returns {ValidateResult}
    	 */
    	function nlId(value) {
    	    if (value.length < 8) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value;
    	    if (v.length === 8) {
    	        v = "0".concat(v);
    	    }
    	    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    v = v.replace(/\./g, '');
    	    if (parseInt(v, 10) === 0) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var length = v.length;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += (9 - i) * parseInt(v.charAt(i), 10);
    	    }
    	    sum = sum % 11;
    	    if (sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Norwegian identity number (Fødselsnummer)
    	 *
    	 * @see https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
    	 * @returns {ValidateResult}
    	 */
    	function noId(value) {
    	    if (!/^\d{11}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Calculate the first check digit
    	    var firstCd = function (v) {
    	        var weight = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    	        var sum = 0;
    	        for (var i = 0; i < 9; i++) {
    	            sum += weight[i] * parseInt(v.charAt(i), 10);
    	        }
    	        return 11 - (sum % 11);
    	    };
    	    // Calculate the second check digit
    	    var secondCd = function (v) {
    	        var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    	        var sum = 0;
    	        for (var i = 0; i < 10; i++) {
    	            sum += weight[i] * parseInt(v.charAt(i), 10);
    	        }
    	        return 11 - (sum % 11);
    	    };
    	    return {
    	        meta: {},
    	        valid: "".concat(firstCd(value)) === value.substr(-2, 1) && "".concat(secondCd(value)) === value.substr(-1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Peruvian identity number (CUI)
    	 *
    	 * @see https://es.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Per%C3%BA)
    	 * @returns {ValidateResult}
    	 */
    	function peId(value) {
    	    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (value.length === 8) {
    	        return {
    	            meta: {},
    	            valid: true,
    	        };
    	    }
    	    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += weight[i] * parseInt(value.charAt(i), 10);
    	    }
    	    var cd = sum % 11;
    	    var checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    	    var checkChar = 'KJIHGFEDCBA'.charAt(cd);
    	    return {
    	        meta: {},
    	        valid: value.charAt(8) === "".concat(checkDigit) || value.charAt(8) === checkChar,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Poland citizen number (PESEL)
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
    	 * @see http://en.wikipedia.org/wiki/PESEL
    	 * @returns {ValidateResult}
    	 */
    	function plId(value) {
    	    if (!/^[0-9]{11}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var length = value.length;
    	    var weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += weight[i] * parseInt(value.charAt(i), 10);
    	    }
    	    sum = sum % 10;
    	    if (sum === 0) {
    	        sum = 10;
    	    }
    	    sum = 10 - sum;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === value.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$2 = core.utils.isValidDate;
    	/**
    	 * Validate Romanian numerical personal code (CNP)
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
    	 * @returns {ValidateResult}
    	 */
    	function roId(value) {
    	    if (!/^[0-9]{13}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var gender = parseInt(value.charAt(0), 10);
    	    if (gender === 0 || gender === 7 || gender === 8) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Determine the date of birth
    	    var year = parseInt(value.substr(1, 2), 10);
    	    var month = parseInt(value.substr(3, 2), 10);
    	    var day = parseInt(value.substr(5, 2), 10);
    	    // The year of date is determined base on the gender
    	    var centuries = {
    	        1: 1900,
    	        2: 1900,
    	        3: 1800,
    	        4: 1800,
    	        5: 2000,
    	        6: 2000, // Female born after 2000
    	    };
    	    if (day > 31 && month > 12) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (gender !== 9) {
    	        year = centuries[gender + ''] + year;
    	        if (!isValidDate$2(year, month, day)) {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	    }
    	    // Validate the check digit
    	    var sum = 0;
    	    var weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    	    var length = value.length;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += parseInt(value.charAt(i), 10) * weight[i];
    	    }
    	    sum = sum % 11;
    	    if (sum === 10) {
    	        sum = 1;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === value.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @returns {ValidateResult}
    	 */
    	function rsId(value) {
    	    return {
    	        meta: {},
    	        valid: jmbg(value, 'RS'),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn$1 = core.algorithms.luhn;
    	var isValidDate$1 = core.utils.isValidDate;
    	/**
    	 * Validate Swedish personal identity number (personnummer)
    	 *
    	 * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
    	 * @returns {ValidateResult}
    	 */
    	function seId(value) {
    	    if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value.replace(/[^0-9]/g, '');
    	    var year = parseInt(v.substr(0, 2), 10) + 1900;
    	    var month = parseInt(v.substr(2, 2), 10);
    	    var day = parseInt(v.substr(4, 2), 10);
    	    if (!isValidDate$1(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate the last check digit
    	    return {
    	        meta: {},
    	        valid: luhn$1(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * @returns {ValidateResult}
    	 */
    	function siId(value) {
    	    return {
    	        meta: {},
    	        valid: jmbg(value, 'SI'),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate San Marino citizen number
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
    	 * @returns {ValidateResult}
    	 */
    	function smId(value) {
    	    return {
    	        meta: {},
    	        valid: /^\d{5}$/.test(value),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Thailand citizen number
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
    	 * @returns {ValidateResult}
    	 */
    	function thId(value) {
    	    if (value.length !== 13) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    for (var i = 0; i < 12; i++) {
    	        sum += parseInt(value.charAt(i), 10) * (13 - i);
    	    }
    	    return {
    	        meta: {},
    	        valid: (11 - (sum % 11)) % 10 === parseInt(value.charAt(12), 10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Turkish Identification Number
    	 *
    	 * @see https://en.wikipedia.org/wiki/Turkish_Identification_Number
    	 * @returns {ValidateResult}
    	 */
    	function trId(value) {
    	    if (value.length !== 11) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    for (var i = 0; i < 10; i++) {
    	        sum += parseInt(value.charAt(i), 10);
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 10 === parseInt(value.charAt(10), 10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Taiwan identity card number
    	 *
    	 * @see https://en.wikipedia.org/wiki/National_identification_number#Taiwan
    	 * @returns {ValidateResult}
    	 */
    	function twId(value) {
    	    var v = value.toUpperCase();
    	    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var length = v.length;
    	    var alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    	    var letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    	    var letterValue = Math.floor(letterIndex / 10) + (letterIndex % 10) * (length - 1);
    	    var sum = 0;
    	    for (var i = 1; i < length - 1; i++) {
    	        sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    	    }
    	    return {
    	        meta: {},
    	        valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Uruguayan identity document
    	 *
    	 * @see https://en.wikipedia.org/wiki/Identity_document#Uruguay
    	 * @returns {ValidateResult}
    	 */
    	function uyId(value) {
    	    if (!/^\d{8}$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [2, 9, 8, 7, 6, 3, 4];
    	    var sum = 0;
    	    for (var i = 0; i < 7; i++) {
    	        sum += parseInt(value.charAt(i), 10) * weight[i];
    	    }
    	    sum = sum % 10;
    	    if (sum > 0) {
    	        sum = 10 - sum;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === value.charAt(7),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	var isValidDate = core.utils.isValidDate;
    	/**
    	 * Validate South African ID
    	 *
    	 * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
    	 * @returns {ValidateResult}
    	 */
    	function zaId(value) {
    	    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var year = parseInt(value.substr(0, 2), 10);
    	    var currentYear = new Date().getFullYear() % 100;
    	    var month = parseInt(value.substr(2, 2), 10);
    	    var day = parseInt(value.substr(4, 2), 10);
    	    year = year >= currentYear ? year + 1900 : year + 2000;
    	    if (!isValidDate(year, month, day)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate the last check digit
    	    return {
    	        meta: {},
    	        valid: luhn(value),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function id() {
    	    // Supported country codes
    	    var COUNTRY_CODES = [
    	        'AR',
    	        'BA',
    	        'BG',
    	        'BR',
    	        'CH',
    	        'CL',
    	        'CN',
    	        'CO',
    	        'CZ',
    	        'DK',
    	        'EE',
    	        'ES',
    	        'FI',
    	        'FR',
    	        'HK',
    	        'HR',
    	        'ID',
    	        'IE',
    	        'IL',
    	        'IS',
    	        'KR',
    	        'LT',
    	        'LV',
    	        'ME',
    	        'MK',
    	        'MX',
    	        'MY',
    	        'NL',
    	        'NO',
    	        'PE',
    	        'PL',
    	        'RO',
    	        'RS',
    	        'SE',
    	        'SI',
    	        'SK',
    	        'SM',
    	        'TH',
    	        'TR',
    	        'TW',
    	        'UY',
    	        'ZA',
    	    ];
    	    return {
    	        /**
    	         * Validate identification number in different countries
    	         * @see http://en.wikipedia.org/wiki/National_identification_number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            var country = input.value.substr(0, 2);
    	            if ('function' === typeof opts.country) {
    	                country = opts.country.call(this);
    	            }
    	            else {
    	                country = opts.country;
    	            }
    	            if (COUNTRY_CODES.indexOf(country) === -1) {
    	                return { valid: true };
    	            }
    	            var result = {
    	                meta: {},
    	                valid: true,
    	            };
    	            switch (country.toLowerCase()) {
    	                case 'ar':
    	                    result = arId(input.value);
    	                    break;
    	                case 'ba':
    	                    result = baId(input.value);
    	                    break;
    	                case 'bg':
    	                    result = bgId(input.value);
    	                    break;
    	                case 'br':
    	                    result = brId(input.value);
    	                    break;
    	                case 'ch':
    	                    result = chId(input.value);
    	                    break;
    	                case 'cl':
    	                    result = clId(input.value);
    	                    break;
    	                case 'cn':
    	                    result = cnId(input.value);
    	                    break;
    	                case 'co':
    	                    result = coId(input.value);
    	                    break;
    	                case 'cz':
    	                    result = czId(input.value);
    	                    break;
    	                case 'dk':
    	                    result = dkId(input.value);
    	                    break;
    	                // Validate Estonian Personal Identification Code (isikukood)
    	                // Use the same format as Lithuanian Personal Code
    	                // See http://et.wikipedia.org/wiki/Isikukood
    	                case 'ee':
    	                    result = ltId(input.value);
    	                    break;
    	                case 'es':
    	                    result = esId(input.value);
    	                    break;
    	                case 'fi':
    	                    result = fiId(input.value);
    	                    break;
    	                case 'fr':
    	                    result = frId(input.value);
    	                    break;
    	                case 'hk':
    	                    result = hkId(input.value);
    	                    break;
    	                case 'hr':
    	                    result = hrId(input.value);
    	                    break;
    	                case 'id':
    	                    result = idId(input.value);
    	                    break;
    	                case 'ie':
    	                    result = ieId(input.value);
    	                    break;
    	                case 'il':
    	                    result = ilId(input.value);
    	                    break;
    	                case 'is':
    	                    result = isId(input.value);
    	                    break;
    	                case 'kr':
    	                    result = krId(input.value);
    	                    break;
    	                case 'lt':
    	                    result = ltId(input.value);
    	                    break;
    	                case 'lv':
    	                    result = lvId(input.value);
    	                    break;
    	                case 'me':
    	                    result = meId(input.value);
    	                    break;
    	                case 'mk':
    	                    result = mkId(input.value);
    	                    break;
    	                case 'mx':
    	                    result = mxId(input.value);
    	                    break;
    	                case 'my':
    	                    result = myId(input.value);
    	                    break;
    	                case 'nl':
    	                    result = nlId(input.value);
    	                    break;
    	                case 'no':
    	                    result = noId(input.value);
    	                    break;
    	                case 'pe':
    	                    result = peId(input.value);
    	                    break;
    	                case 'pl':
    	                    result = plId(input.value);
    	                    break;
    	                case 'ro':
    	                    result = roId(input.value);
    	                    break;
    	                case 'rs':
    	                    result = rsId(input.value);
    	                    break;
    	                case 'se':
    	                    result = seId(input.value);
    	                    break;
    	                case 'si':
    	                    result = siId(input.value);
    	                    break;
    	                // Validate Slovak national identifier number (RC)
    	                // Slovakia uses the same format as Czech Republic
    	                case 'sk':
    	                    result = czId(input.value);
    	                    break;
    	                case 'sm':
    	                    result = smId(input.value);
    	                    break;
    	                case 'th':
    	                    result = thId(input.value);
    	                    break;
    	                case 'tr':
    	                    result = trId(input.value);
    	                    break;
    	                case 'tw':
    	                    result = twId(input.value);
    	                    break;
    	                case 'uy':
    	                    result = uyId(input.value);
    	                    break;
    	                case 'za':
    	                    result = zaId(input.value);
    	                    break;
    	            }
    	            var message = format(input.l10n && input.l10n.id ? opts.message || input.l10n.id.country : opts.message, input.l10n && input.l10n.id && input.l10n.id.countries
    	                ? input.l10n.id.countries[country.toUpperCase()]
    	                : country.toUpperCase());
    	            return Object.assign({}, { message: message }, result);
    	        },
    	    };
    	}

    	cjs$i.id = id;
    	return cjs$i;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$i.exports = requireCjs$i();
    }

    var libExports$i = lib$i.exports;

    var lib$h = {exports: {}};

    var cjs$h = {};

    var hasRequiredCjs$h;

    function requireCjs$h () {
    	if (hasRequiredCjs$h) return cjs$h;
    	hasRequiredCjs$h = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	function imei() {
    	    return {
    	        /**
    	         * Validate IMEI (International Mobile Station Equipment Identity)
    	         * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            switch (true) {
    	                case /^\d{15}$/.test(input.value):
    	                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input.value):
    	                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input.value):
    	                    return { valid: luhn(input.value.replace(/[^0-9]/g, '')) };
    	                case /^\d{14}$/.test(input.value):
    	                case /^\d{16}$/.test(input.value):
    	                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input.value):
    	                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input.value):
    	                    return { valid: true };
    	                default:
    	                    return { valid: false };
    	            }
    	        },
    	    };
    	}

    	cjs$h.imei = imei;
    	return cjs$h;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$h.exports = requireCjs$h();
    }

    var libExports$h = lib$h.exports;

    var lib$g = {exports: {}};

    var cjs$g = {};

    var hasRequiredCjs$g;

    function requireCjs$g () {
    	if (hasRequiredCjs$g) return cjs$g;
    	hasRequiredCjs$g = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function imo() {
    	    return {
    	        /**
    	         * Validate IMO (International Maritime Organization)
    	         * @see http://en.wikipedia.org/wiki/IMO_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            if (!/^IMO \d{7}$/i.test(input.value)) {
    	                return { valid: false };
    	            }
    	            // Grab just the digits
    	            var digits = input.value.replace(/^.*(\d{7})$/, '$1');
    	            var sum = 0;
    	            for (var i = 6; i >= 1; i--) {
    	                sum += parseInt(digits.slice(6 - i, -i), 10) * (i + 1);
    	            }
    	            return { valid: sum % 10 === parseInt(digits.charAt(6), 10) };
    	        },
    	    };
    	}

    	cjs$g.imo = imo;
    	return cjs$g;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$g.exports = requireCjs$g();
    }

    var libExports$g = lib$g.exports;

    var lib$f = {exports: {}};

    var cjs$f = {};

    var hasRequiredCjs$f;

    function requireCjs$f () {
    	if (hasRequiredCjs$f) return cjs$f;
    	hasRequiredCjs$f = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function isbn() {
    	    return {
    	        /**
    	         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
    	         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    meta: {
    	                        type: null,
    	                    },
    	                    valid: true,
    	                };
    	            }
    	            // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
    	            // Groups are separated by a hyphen or a space
    	            var tpe;
    	            switch (true) {
    	                case /^\d{9}[\dX]$/.test(input.value):
    	                case input.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
    	                case input.value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
    	                    tpe = 'ISBN10';
    	                    break;
    	                case /^(978|979)\d{9}[\dX]$/.test(input.value):
    	                case input.value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
    	                case input.value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
    	                    tpe = 'ISBN13';
    	                    break;
    	                default:
    	                    return {
    	                        meta: {
    	                            type: null,
    	                        },
    	                        valid: false,
    	                    };
    	            }
    	            // Replace all special characters except digits and X
    	            var chars = input.value.replace(/[^0-9X]/gi, '').split('');
    	            var length = chars.length;
    	            var sum = 0;
    	            var i;
    	            var checksum;
    	            switch (tpe) {
    	                case 'ISBN10':
    	                    sum = 0;
    	                    for (i = 0; i < length - 1; i++) {
    	                        sum += parseInt(chars[i], 10) * (10 - i);
    	                    }
    	                    checksum = 11 - (sum % 11);
    	                    if (checksum === 11) {
    	                        checksum = 0;
    	                    }
    	                    else if (checksum === 10) {
    	                        checksum = 'X';
    	                    }
    	                    return {
    	                        meta: {
    	                            type: tpe,
    	                        },
    	                        valid: "".concat(checksum) === chars[length - 1],
    	                    };
    	                case 'ISBN13':
    	                    sum = 0;
    	                    for (i = 0; i < length - 1; i++) {
    	                        sum += i % 2 === 0 ? parseInt(chars[i], 10) : parseInt(chars[i], 10) * 3;
    	                    }
    	                    checksum = 10 - (sum % 10);
    	                    if (checksum === 10) {
    	                        checksum = '0';
    	                    }
    	                    return {
    	                        meta: {
    	                            type: tpe,
    	                        },
    	                        valid: "".concat(checksum) === chars[length - 1],
    	                    };
    	            }
    	        },
    	    };
    	}

    	cjs$f.isbn = isbn;
    	return cjs$f;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$f.exports = requireCjs$f();
    }

    var libExports$f = lib$f.exports;

    var lib$e = {exports: {}};

    var cjs$e = {};

    var hasRequiredCjs$e;

    function requireCjs$e () {
    	if (hasRequiredCjs$e) return cjs$e;
    	hasRequiredCjs$e = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function isin() {
    	    // Available country codes
    	    // See http://isin.net/country-codes/
    	    var COUNTRY_CODES = 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|' +
    	        'BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|' +
    	        'SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|' +
    	        'IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|' +
    	        'MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|' +
    	        'PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|' +
    	        'SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|' +
    	        'YE|ZM|ZW';
    	    return {
    	        /**
    	         * Validate an ISIN (International Securities Identification Number)
    	         * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var v = input.value.toUpperCase();
    	            var regex = new RegExp('^(' + COUNTRY_CODES + ')[0-9A-Z]{10}$');
    	            if (!regex.test(input.value)) {
    	                return { valid: false };
    	            }
    	            var length = v.length;
    	            var converted = '';
    	            var i;
    	            // Convert letters to number
    	            for (i = 0; i < length - 1; i++) {
    	                var c = v.charCodeAt(i);
    	                converted += c > 57 ? (c - 55).toString() : v.charAt(i);
    	            }
    	            var digits = '';
    	            var n = converted.length;
    	            var group = n % 2 !== 0 ? 0 : 1;
    	            for (i = 0; i < n; i++) {
    	                digits += parseInt(converted[i], 10) * (i % 2 === group ? 2 : 1) + '';
    	            }
    	            var sum = 0;
    	            for (i = 0; i < digits.length; i++) {
    	                sum += parseInt(digits.charAt(i), 10);
    	            }
    	            sum = (10 - (sum % 10)) % 10;
    	            return { valid: "".concat(sum) === v.charAt(length - 1) };
    	        },
    	    };
    	}

    	cjs$e.isin = isin;
    	return cjs$e;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$e.exports = requireCjs$e();
    }

    var libExports$e = lib$e.exports;

    var lib$d = {exports: {}};

    var cjs$d = {};

    var hasRequiredCjs$d;

    function requireCjs$d () {
    	if (hasRequiredCjs$d) return cjs$d;
    	hasRequiredCjs$d = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function ismn() {
    	    return {
    	        /**
    	         * Validate ISMN (International Standard Music Number)
    	         * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    meta: null,
    	                    valid: true,
    	                };
    	            }
    	            // Groups are separated by a hyphen or a space
    	            var tpe;
    	            switch (true) {
    	                case /^M\d{9}$/.test(input.value):
    	                case /^M-\d{4}-\d{4}-\d{1}$/.test(input.value):
    	                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
    	                    tpe = 'ISMN10';
    	                    break;
    	                case /^9790\d{9}$/.test(input.value):
    	                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(input.value):
    	                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(input.value):
    	                    tpe = 'ISMN13';
    	                    break;
    	                default:
    	                    return {
    	                        meta: null,
    	                        valid: false,
    	                    };
    	            }
    	            var v = input.value;
    	            if ('ISMN10' === tpe) {
    	                v = "9790".concat(v.substr(1));
    	            }
    	            // Replace all special characters except digits
    	            v = v.replace(/[^0-9]/gi, '');
    	            var sum = 0;
    	            var length = v.length;
    	            var weight = [1, 3];
    	            for (var i = 0; i < length - 1; i++) {
    	                sum += parseInt(v.charAt(i), 10) * weight[i % 2];
    	            }
    	            sum = (10 - (sum % 10)) % 10;
    	            return {
    	                meta: {
    	                    type: tpe,
    	                },
    	                valid: "".concat(sum) === v.charAt(length - 1),
    	            };
    	        },
    	    };
    	}

    	cjs$d.ismn = ismn;
    	return cjs$d;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$d.exports = requireCjs$d();
    }

    var libExports$d = lib$d.exports;

    var lib$c = {exports: {}};

    var cjs$c = {};

    var hasRequiredCjs$c;

    function requireCjs$c () {
    	if (hasRequiredCjs$c) return cjs$c;
    	hasRequiredCjs$c = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function issn() {
    	    return {
    	        /**
    	         * Validate ISSN (International Standard Serial Number)
    	         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            // Groups are separated by a hyphen or a space
    	            if (!/^\d{4}-\d{3}[\dX]$/.test(input.value)) {
    	                return { valid: false };
    	            }
    	            // Replace all special characters except digits and X
    	            var chars = input.value.replace(/[^0-9X]/gi, '').split('');
    	            var length = chars.length;
    	            var sum = 0;
    	            if (chars[7] === 'X') {
    	                chars[7] = '10';
    	            }
    	            for (var i = 0; i < length; i++) {
    	                sum += parseInt(chars[i], 10) * (8 - i);
    	            }
    	            return { valid: sum % 11 === 0 };
    	        },
    	    };
    	}

    	cjs$c.issn = issn;
    	return cjs$c;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$c.exports = requireCjs$c();
    }

    var libExports$c = lib$c.exports;

    var lib$b = {exports: {}};

    var cjs$b = {};

    var hasRequiredCjs$b;

    function requireCjs$b () {
    	if (hasRequiredCjs$b) return cjs$b;
    	hasRequiredCjs$b = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function mac() {
    	    return {
    	        /**
    	         * Return true if the input value is a MAC address.
    	         */
    	        validate: function (input) {
    	            return {
    	                valid: input.value === '' ||
    	                    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(input.value) ||
    	                    /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(input.value),
    	            };
    	        },
    	    };
    	}

    	cjs$b.mac = mac;
    	return cjs$b;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$b.exports = requireCjs$b();
    }

    var libExports$b = lib$b.exports;

    var lib$a = {exports: {}};

    var cjs$a = {};

    var hasRequiredCjs$a;

    function requireCjs$a () {
    	if (hasRequiredCjs$a) return cjs$a;
    	hasRequiredCjs$a = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	function meid() {
    	    return {
    	        /**
    	         * Validate MEID (Mobile Equipment Identifier)
    	         * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var v = input.value;
    	            if (/^[0-9A-F]{15}$/i.test(v) ||
    	                /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(v) ||
    	                /^\d{19}$/.test(v) ||
    	                /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(v)) {
    	                var cd = v.charAt(v.length - 1).toUpperCase();
    	                v = v.replace(/[- ]/g, '');
    	                if (v.match(/^\d*$/i)) {
    	                    return { valid: luhn(v) };
    	                }
    	                v = v.slice(0, -1);
    	                var checkDigit = '';
    	                var i = void 0;
    	                for (i = 1; i <= 13; i += 2) {
    	                    checkDigit += (parseInt(v.charAt(i), 16) * 2).toString(16);
    	                }
    	                var sum = 0;
    	                for (i = 0; i < checkDigit.length; i++) {
    	                    sum += parseInt(checkDigit.charAt(i), 16);
    	                }
    	                return {
    	                    valid: sum % 10 === 0
    	                        ? cd === '0'
    	                        : // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
    	                            // Double it and turn it into a hex char
    	                            cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16).toUpperCase(),
    	                };
    	            }
    	            if (/^[0-9A-F]{14}$/i.test(v) ||
    	                /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(v) ||
    	                /^\d{18}$/.test(v) ||
    	                /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(v)) {
    	                return { valid: true };
    	            }
    	            return { valid: false };
    	        },
    	    };
    	}

    	cjs$a.meid = meid;
    	return cjs$a;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$a.exports = requireCjs$a();
    }

    var libExports$a = lib$a.exports;

    var lib$9 = {exports: {}};

    var cjs$9 = {};

    var hasRequiredCjs$9;

    function requireCjs$9 () {
    	if (hasRequiredCjs$9) return cjs$9;
    	hasRequiredCjs$9 = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function phone() {
    	    // The supported countries
    	    var COUNTRY_CODES = [
    	        'AE',
    	        'BG',
    	        'BR',
    	        'CN',
    	        'CZ',
    	        'DE',
    	        'DK',
    	        'ES',
    	        'FR',
    	        'GB',
    	        'IN',
    	        'MA',
    	        'NL',
    	        'PK',
    	        'RO',
    	        'RU',
    	        'SK',
    	        'TH',
    	        'US',
    	        'VE',
    	    ];
    	    return {
    	        /**
    	         * Return true if the input value contains a valid phone number for the country
    	         * selected in the options
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return {
    	                    valid: true,
    	                };
    	            }
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            var v = input.value.trim();
    	            var country = v.substr(0, 2);
    	            if ('function' === typeof opts.country) {
    	                country = opts.country.call(this);
    	            }
    	            else {
    	                country = opts.country;
    	            }
    	            if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
    	                return {
    	                    valid: true,
    	                };
    	            }
    	            var isValid = true;
    	            switch (country.toUpperCase()) {
    	                case 'AE':
    	                    // http://regexr.com/39tak
    	                    isValid =
    	                        /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(v);
    	                    break;
    	                case 'BG':
    	                    // https://regex101.com/r/yE6vN4/1
    	                    // See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
    	                    isValid =
    	                        /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(v.replace(/\+|\s|-|\/|\(|\)/gi, ''));
    	                    break;
    	                case 'BR':
    	                    // http://regexr.com/399m1
    	                    isValid =
    	                        /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(v);
    	                    break;
    	                case 'CN':
    	                    // http://regexr.com/39dq4
    	                    isValid =
    	                        /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(v);
    	                    break;
    	                case 'CZ':
    	                    // http://regexr.com/39hhl
    	                    isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
    	                    break;
    	                case 'DE':
    	                    // http://regexr.com/39pkg
    	                    isValid =
    	                        /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(v);
    	                    break;
    	                case 'DK':
    	                    // Mathing DK phone numbers with country code in 1 of 3 formats and an
    	                    // 8 digit phone number not starting with a 0 or 1. Can have 1 space
    	                    // between each character except inside the country code.
    	                    // http://regex101.com/r/sS8fO4/1
    	                    isValid = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(v);
    	                    break;
    	                case 'ES':
    	                    // http://regex101.com/r/rB9mA9/1
    	                    // Telephone numbers in Spain go like this:
    	                    //     9: Landline phones and special prefixes.
    	                    //     6, 7: Mobile phones.
    	                    //     5: VoIP lines.
    	                    //     8: Premium-rate services.
    	                    // There are also special 5-digit and 3-digit numbers, but
    	                    // maybe it would be overkill to include them all.
    	                    isValid = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(v);
    	                    break;
    	                case 'FR':
    	                    // http://regexr.com/39a2p
    	                    isValid = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(v);
    	                    break;
    	                case 'GB':
    	                    // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
    	                    // http://regexr.com/38uhv
    	                    isValid =
    	                        /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(v);
    	                    break;
    	                case 'IN':
    	                    // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
    	                    // http://regex101.com/r/qL6eZ5/1
    	                    // May begin with +91. Supports mobile and land line numbers
    	                    isValid = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(v);
    	                    break;
    	                case 'MA':
    	                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
    	                    // http://regexr.com/399n8
    	                    isValid =
    	                        /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(v);
    	                    break;
    	                case 'NL':
    	                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
    	                    // http://regexr.com/3aevr
    	                    isValid =
    	                        /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(v);
    	                    break;
    	                case 'PK':
    	                    // http://regex101.com/r/yH8aV9/2
    	                    isValid = /^0?3[0-9]{2}[0-9]{7}$/.test(v);
    	                    break;
    	                case 'RO':
    	                    // All mobile network and land line
    	                    // http://regexr.com/39fv1
    	                    isValid =
    	                        /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(v);
    	                    break;
    	                case 'RU':
    	                    // http://regex101.com/r/gW7yT5/5
    	                    isValid = /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(v);
    	                    break;
    	                case 'SK':
    	                    // http://regexr.com/3a95f
    	                    isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
    	                    break;
    	                case 'TH':
    	                    // http://regex101.com/r/vM5mZ4/2
    	                    isValid = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(v);
    	                    break;
    	                case 'VE':
    	                    // http://regex101.com/r/eM2yY0/6
    	                    isValid =
    	                        /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(v);
    	                    break;
    	                case 'US':
    	                default:
    	                    // Make sure US phone numbers have 10 digits
    	                    // May start with 1, +1, or 1-; should discard
    	                    // Area code may be delimited with (), & sections may be delimited with . or -
    	                    // http://regexr.com/38mqi
    	                    isValid = /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(v);
    	                    break;
    	            }
    	            return {
    	                message: format(input.l10n && input.l10n.phone ? opts.message || input.l10n.phone.country : opts.message, input.l10n && input.l10n.phone && input.l10n.phone.countries
    	                    ? input.l10n.phone.countries[country]
    	                    : country),
    	                valid: isValid,
    	            };
    	        },
    	    };
    	}

    	cjs$9.phone = phone;
    	return cjs$9;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$9.exports = requireCjs$9();
    }

    var libExports$9 = lib$9.exports;

    var lib$8 = {exports: {}};

    var cjs$8 = {};

    var hasRequiredCjs$8;

    function requireCjs$8 () {
    	if (hasRequiredCjs$8) return cjs$8;
    	hasRequiredCjs$8 = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function rtn() {
    	    return {
    	        /**
    	         * Validate a RTN (Routing transit number)
    	         * @see http://en.wikipedia.org/wiki/Routing_transit_number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            if (!/^\d{9}$/.test(input.value)) {
    	                return { valid: false };
    	            }
    	            var sum = 0;
    	            for (var i = 0; i < input.value.length; i += 3) {
    	                sum +=
    	                    parseInt(input.value.charAt(i), 10) * 3 +
    	                        parseInt(input.value.charAt(i + 1), 10) * 7 +
    	                        parseInt(input.value.charAt(i + 2), 10);
    	            }
    	            return { valid: sum !== 0 && sum % 10 === 0 };
    	        },
    	    };
    	}

    	cjs$8.rtn = rtn;
    	return cjs$8;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$8.exports = requireCjs$8();
    }

    var libExports$8 = lib$8.exports;

    var lib$7 = {exports: {}};

    var cjs$7 = {};

    var hasRequiredCjs$7;

    function requireCjs$7 () {
    	if (hasRequiredCjs$7) return cjs$7;
    	hasRequiredCjs$7 = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function sedol() {
    	    return {
    	        /**
    	         * Validate a SEDOL (Stock Exchange Daily Official List)
    	         * @see http://en.wikipedia.org/wiki/SEDOL
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var v = input.value.toUpperCase();
    	            if (!/^[0-9A-Z]{7}$/.test(v)) {
    	                return { valid: false };
    	            }
    	            var weight = [1, 3, 1, 7, 3, 9, 1];
    	            var length = v.length;
    	            var sum = 0;
    	            for (var i = 0; i < length - 1; i++) {
    	                sum += weight[i] * parseInt(v.charAt(i), 36);
    	            }
    	            sum = (10 - (sum % 10)) % 10;
    	            return { valid: "".concat(sum) === v.charAt(length - 1) };
    	        },
    	    };
    	}

    	cjs$7.sedol = sedol;
    	return cjs$7;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$7.exports = requireCjs$7();
    }

    var libExports$7 = lib$7.exports;

    var lib$6 = {exports: {}};

    var cjs$6 = {};

    var hasRequiredCjs$6;

    function requireCjs$6 () {
    	if (hasRequiredCjs$6) return cjs$6;
    	hasRequiredCjs$6 = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	function siren() {
    	    return {
    	        /**
    	         * Check if a string is a siren number
    	         */
    	        validate: function (input) {
    	            return {
    	                valid: input.value === '' || (/^\d{9}$/.test(input.value) && luhn(input.value)),
    	            };
    	        },
    	    };
    	}

    	cjs$6.siren = siren;
    	return cjs$6;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$6.exports = requireCjs$6();
    }

    var libExports$6 = lib$6.exports;

    var lib$5 = {exports: {}};

    var cjs$5 = {};

    var hasRequiredCjs$5;

    function requireCjs$5 () {
    	if (hasRequiredCjs$5) return cjs$5;
    	hasRequiredCjs$5 = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function siret() {
    	    return {
    	        /**
    	         * Check if a string is a siret number
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var length = input.value.length;
    	            var sum = 0;
    	            var tmp;
    	            for (var i = 0; i < length; i++) {
    	                tmp = parseInt(input.value.charAt(i), 10);
    	                if (i % 2 === 0) {
    	                    tmp = tmp * 2;
    	                    if (tmp > 9) {
    	                        tmp -= 9;
    	                    }
    	                }
    	                sum += tmp;
    	            }
    	            return { valid: sum % 10 === 0 };
    	        },
    	    };
    	}

    	cjs$5.siret = siret;
    	return cjs$5;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$5.exports = requireCjs$5();
    }

    var libExports$5 = lib$5.exports;

    var lib$4 = {exports: {}};

    var cjs$4 = {};

    var hasRequiredCjs$4;

    function requireCjs$4 () {
    	if (hasRequiredCjs$4) return cjs$4;
    	hasRequiredCjs$4 = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format;
    	function step() {
    	    var round = function (input, precision) {
    	        var m = Math.pow(10, precision);
    	        var x = input * m;
    	        var sign;
    	        switch (true) {
    	            case x === 0:
    	                sign = 0;
    	                break;
    	            case x > 0:
    	                sign = 1;
    	                break;
    	            case x < 0:
    	                sign = -1;
    	                break;
    	        }
    	        var isHalf = x % 1 === 0.5 * sign;
    	        return isHalf ? (Math.floor(x) + (sign > 0 ? 1 : 0)) / m : Math.round(x) / m;
    	    };
    	    var floatMod = function (x, y) {
    	        if (y === 0.0) {
    	            return 1.0;
    	        }
    	        var dotX = "".concat(x).split('.');
    	        var dotY = "".concat(y).split('.');
    	        var precision = (dotX.length === 1 ? 0 : dotX[1].length) + (dotY.length === 1 ? 0 : dotY[1].length);
    	        return round(x - y * Math.floor(x / y), precision);
    	    };
    	    return {
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var v = parseFloat(input.value);
    	            if (isNaN(v) || !isFinite(v)) {
    	                return { valid: false };
    	            }
    	            var opts = Object.assign({}, {
    	                baseValue: 0,
    	                message: '',
    	                step: 1,
    	            }, input.options);
    	            var mod = floatMod(v - opts.baseValue, opts.step);
    	            return {
    	                message: format(input.l10n ? opts.message || input.l10n.step.default : opts.message, "".concat(opts.step)),
    	                valid: mod === 0.0 || mod === opts.step,
    	            };
    	        },
    	    };
    	}

    	cjs$4.step = step;
    	return cjs$4;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$4.exports = requireCjs$4();
    }

    var libExports$4 = lib$4.exports;

    var lib$3 = {exports: {}};

    var cjs$3 = {};

    var hasRequiredCjs$3;

    function requireCjs$3 () {
    	if (hasRequiredCjs$3) return cjs$3;
    	hasRequiredCjs$3 = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function uuid() {
    	    return {
    	        /**
    	         * Return true if and only if the input value is a valid UUID string
    	         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
    	            var patterns = {
    	                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    	                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    	                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    	                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    	            };
    	            var version = opts.version ? "".concat(opts.version) : 'all';
    	            return {
    	                message: opts.version
    	                    ? format(input.l10n ? opts.message || input.l10n.uuid.version : opts.message, opts.version)
    	                    : input.l10n
    	                        ? input.l10n.uuid.default
    	                        : opts.message,
    	                valid: null === patterns[version] ? true : patterns[version].test(input.value),
    	            };
    	        },
    	    };
    	}

    	cjs$3.uuid = uuid;
    	return cjs$3;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$3.exports = requireCjs$3();
    }

    var libExports$3 = lib$3.exports;

    var lib$2 = {exports: {}};

    var cjs$2 = {};

    var hasRequiredCjs$2;

    function requireCjs$2 () {
    	if (hasRequiredCjs$2) return cjs$2;
    	hasRequiredCjs$2 = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Argentinian VAT number
    	 *
    	 * @see https://es.wikipedia.org/wiki/Clave_%C3%9Anica_de_Identificaci%C3%B3n_Tributaria
    	 * @returns {ValidateResult}
    	 */
    	function arVat(value) {
    	    // Replace `-` with empty
    	    var v = value.replace('-', '');
    	    if (/^AR[0-9]{11}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{11}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 10; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 11) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Austrian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function atVat(value) {
    	    var v = value;
    	    if (/^ATU[0-9]{8}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^U[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    v = v.substr(1);
    	    var weight = [1, 2, 1, 2, 1, 2, 1];
    	    var sum = 0;
    	    var temp = 0;
    	    for (var i = 0; i < 7; i++) {
    	        temp = parseInt(v.charAt(i), 10) * weight[i];
    	        if (temp > 9) {
    	            temp = Math.floor(temp / 10) + (temp % 10);
    	        }
    	        sum += temp;
    	    }
    	    sum = 10 - ((sum + 4) % 10);
    	    if (sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(7, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Belgian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function beVat(value) {
    	    var v = value;
    	    if (/^BE[0]?[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0]?[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (v.length === 9) {
    	        v = "0".concat(v);
    	    }
    	    if (v.substr(1, 1) === '0') {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
    	    return {
    	        meta: {},
    	        valid: sum % 97 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$2 = core.utils.isValidDate;
    	/**
    	 * Validate Bulgarian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function bgVat(value) {
    	    var v = value;
    	    if (/^BG[0-9]{9,10}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9,10}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var i = 0;
    	    // Legal entities
    	    if (v.length === 9) {
    	        for (i = 0; i < 8; i++) {
    	            sum += parseInt(v.charAt(i), 10) * (i + 1);
    	        }
    	        sum = sum % 11;
    	        if (sum === 10) {
    	            sum = 0;
    	            for (i = 0; i < 8; i++) {
    	                sum += parseInt(v.charAt(i), 10) * (i + 3);
    	            }
    	            sum = sum % 11;
    	        }
    	        sum = sum % 10;
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === v.substr(8),
    	        };
    	    }
    	    else {
    	        // Physical persons, foreigners and others
    	        // Validate Bulgarian national identification numbers
    	        var isEgn = function (input) {
    	            // Check the birth date
    	            var year = parseInt(input.substr(0, 2), 10) + 1900;
    	            var month = parseInt(input.substr(2, 2), 10);
    	            var day = parseInt(input.substr(4, 2), 10);
    	            if (month > 40) {
    	                year += 100;
    	                month -= 40;
    	            }
    	            else if (month > 20) {
    	                year -= 100;
    	                month -= 20;
    	            }
    	            if (!isValidDate$2(year, month, day)) {
    	                return false;
    	            }
    	            var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    	            var s = 0;
    	            for (var j = 0; j < 9; j++) {
    	                s += parseInt(input.charAt(j), 10) * weight[j];
    	            }
    	            s = (s % 11) % 10;
    	            return "".concat(s) === input.substr(9, 1);
    	        };
    	        // Validate Bulgarian personal number of a foreigner
    	        var isPnf = function (input) {
    	            var weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
    	            var s = 0;
    	            for (var j = 0; j < 9; j++) {
    	                s += parseInt(input.charAt(j), 10) * weight[j];
    	            }
    	            s = s % 10;
    	            return "".concat(s) === input.substr(9, 1);
    	        };
    	        // Finally, consider it as a VAT number
    	        var isVat = function (input) {
    	            var weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    	            var s = 0;
    	            for (var j = 0; j < 9; j++) {
    	                s += parseInt(input.charAt(j), 10) * weight[j];
    	            }
    	            s = 11 - (s % 11);
    	            if (s === 10) {
    	                return false;
    	            }
    	            if (s === 11) {
    	                s = 0;
    	            }
    	            return "".concat(s) === input.substr(9, 1);
    	        };
    	        return {
    	            meta: {},
    	            valid: isEgn(v) || isPnf(v) || isVat(v),
    	        };
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Brazilian VAT number (CNPJ)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function brVat(value) {
    	    if (value === '') {
    	        return {
    	            meta: {},
    	            valid: true,
    	        };
    	    }
    	    var cnpj = value.replace(/[^\d]+/g, '');
    	    if (cnpj === '' || cnpj.length !== 14) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Remove invalids CNPJs
    	    if (cnpj === '00000000000000' ||
    	        cnpj === '11111111111111' ||
    	        cnpj === '22222222222222' ||
    	        cnpj === '33333333333333' ||
    	        cnpj === '44444444444444' ||
    	        cnpj === '55555555555555' ||
    	        cnpj === '66666666666666' ||
    	        cnpj === '77777777777777' ||
    	        cnpj === '88888888888888' ||
    	        cnpj === '99999999999999') {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Validate verification digits
    	    var length = cnpj.length - 2;
    	    var numbers = cnpj.substring(0, length);
    	    var digits = cnpj.substring(length);
    	    var sum = 0;
    	    var pos = length - 7;
    	    var i;
    	    for (i = length; i >= 1; i--) {
    	        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
    	        if (pos < 2) {
    	            pos = 9;
    	        }
    	    }
    	    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    	    if (result !== parseInt(digits.charAt(0), 10)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    length = length + 1;
    	    numbers = cnpj.substring(0, length);
    	    sum = 0;
    	    pos = length - 7;
    	    for (i = length; i >= 1; i--) {
    	        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
    	        if (pos < 2) {
    	            pos = 9;
    	        }
    	    }
    	    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    	    return {
    	        meta: {},
    	        valid: result === parseInt(digits.charAt(1), 10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Swiss VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function chVat(value) {
    	    var v = value;
    	    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    v = v.substr(1);
    	    var weight = [5, 4, 3, 2, 7, 6, 5, 4];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 10) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (sum === 11) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(8, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Cypriot VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function cyVat(value) {
    	    var v = value;
    	    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Do not allow to start with "12"
    	    if (v.substr(0, 2) === '12') {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    // Extract the next digit and multiply by the counter.
    	    var sum = 0;
    	    var translation = {
    	        0: 1,
    	        1: 0,
    	        2: 5,
    	        3: 7,
    	        4: 9,
    	        5: 13,
    	        6: 15,
    	        7: 17,
    	        8: 19,
    	        9: 21,
    	    };
    	    for (var i = 0; i < 8; i++) {
    	        var temp = parseInt(v.charAt(i), 10);
    	        if (i % 2 === 0) {
    	            temp = translation["".concat(temp)];
    	        }
    	        sum += temp;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26]) === v.substr(8, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate$1 = core.utils.isValidDate;
    	/**
    	 * Validate Czech Republic VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function czVat(value) {
    	    var v = value;
    	    if (/^CZ[0-9]{8,10}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{8,10}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var i = 0;
    	    if (v.length === 8) {
    	        // Do not allow to start with '9'
    	        if ("".concat(v.charAt(0)) === '9') {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	        sum = 0;
    	        for (i = 0; i < 7; i++) {
    	            sum += parseInt(v.charAt(i), 10) * (8 - i);
    	        }
    	        sum = 11 - (sum % 11);
    	        if (sum === 10) {
    	            sum = 0;
    	        }
    	        if (sum === 11) {
    	            sum = 1;
    	        }
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === v.substr(7, 1),
    	        };
    	    }
    	    else if (v.length === 9 && "".concat(v.charAt(0)) === '6') {
    	        sum = 0;
    	        // Skip the first (which is 6)
    	        for (i = 0; i < 7; i++) {
    	            sum += parseInt(v.charAt(i + 1), 10) * (8 - i);
    	        }
    	        sum = 11 - (sum % 11);
    	        if (sum === 10) {
    	            sum = 0;
    	        }
    	        if (sum === 11) {
    	            sum = 1;
    	        }
    	        sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === v.substr(8, 1),
    	        };
    	    }
    	    else if (v.length === 9 || v.length === 10) {
    	        // Validate Czech birth number (Rodné číslo), which is also national identifier
    	        var year = 1900 + parseInt(v.substr(0, 2), 10);
    	        var month = (parseInt(v.substr(2, 2), 10) % 50) % 20;
    	        var day = parseInt(v.substr(4, 2), 10);
    	        if (v.length === 9) {
    	            if (year >= 1980) {
    	                year -= 100;
    	            }
    	            if (year > 1953) {
    	                return {
    	                    meta: {},
    	                    valid: false,
    	                };
    	            }
    	        }
    	        else if (year < 1954) {
    	            year += 100;
    	        }
    	        if (!isValidDate$1(year, month, day)) {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	        // Check that the birth date is not in the future
    	        if (v.length === 10) {
    	            var check = parseInt(v.substr(0, 9), 10) % 11;
    	            if (year < 1985) {
    	                check = check % 10;
    	            }
    	            return {
    	                meta: {},
    	                valid: "".concat(check) === v.substr(9, 1),
    	            };
    	        }
    	        return {
    	            meta: {},
    	            valid: true,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: false,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var mod11And10$1 = core.algorithms.mod11And10;
    	/**
    	 * Validate German VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function deVat(value) {
    	    var v = value;
    	    if (/^DE[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[1-9][0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: mod11And10$1(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Danish VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function dkVat(value) {
    	    var v = value;
    	    if (/^DK[0-9]{8}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var weight = [2, 7, 6, 5, 4, 3, 2, 1];
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 11 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Estonian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function eeVat(value) {
    	    var v = value;
    	    if (/^EE[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
    	    for (var i = 0; i < 9; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 10 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Spanish VAT number (NIF - Número de Identificación Fiscal)
    	 * Can be:
    	 * i) DNI (Documento nacional de identidad), for Spaniards
    	 * ii) NIE (Número de Identificación de Extranjeros), for foreigners
    	 * iii) CIF (Certificado de Identificación Fiscal), for legal entities and others
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function esVat(value) {
    	    var v = value;
    	    if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var dni = function (input) {
    	        var check = parseInt(input.substr(0, 8), 10);
    	        return "".concat('TRWAGMYFPDXBNJZSQVHLCKE'[check % 23]) === input.substr(8, 1);
    	    };
    	    var nie = function (input) {
    	        var check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
    	        var cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
    	        return "".concat(cd) === input.substr(8, 1);
    	    };
    	    var cif = function (input) {
    	        var firstChar = input.charAt(0);
    	        var check;
    	        if ('KLM'.indexOf(firstChar) !== -1) {
    	            // K: Spanish younger than 14 year old
    	            // L: Spanish living outside Spain without DNI
    	            // M: Granted the tax to foreigners who have no NIE
    	            check = parseInt(input.substr(1, 8), 10);
    	            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
    	            return "".concat(check) === input.substr(8, 1);
    	        }
    	        else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
    	            var weight = [2, 1, 2, 1, 2, 1, 2];
    	            var sum = 0;
    	            var temp = 0;
    	            for (var i = 0; i < 7; i++) {
    	                temp = parseInt(input.charAt(i + 1), 10) * weight[i];
    	                if (temp > 9) {
    	                    temp = Math.floor(temp / 10) + (temp % 10);
    	                }
    	                sum += temp;
    	            }
    	            sum = 10 - (sum % 10);
    	            if (sum === 10) {
    	                sum = 0;
    	            }
    	            return "".concat(sum) === input.substr(8, 1) || 'JABCDEFGHI'[sum] === input.substr(8, 1);
    	        }
    	        return false;
    	    };
    	    var first = v.charAt(0);
    	    if (/^[0-9]$/.test(first)) {
    	        return {
    	            meta: {
    	                type: 'DNI',
    	            },
    	            valid: dni(v),
    	        };
    	    }
    	    else if (/^[XYZ]$/.test(first)) {
    	        return {
    	            meta: {
    	                type: 'NIE',
    	            },
    	            valid: nie(v),
    	        };
    	    }
    	    else {
    	        return {
    	            meta: {
    	                type: 'CIF',
    	            },
    	            valid: cif(v),
    	        };
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Finnish VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function fiVat(value) {
    	    var v = value;
    	    if (/^FI[0-9]{8}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [7, 9, 10, 5, 8, 4, 2, 1];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 11 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn$2 = core.algorithms.luhn;
    	/**
    	 * Validate French VAT number (TVA - taxe sur la valeur ajoutée)
    	 * It's constructed by a SIREN number, prefixed by two characters.
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function frVat(value) {
    	    var v = value;
    	    if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (v.substr(2, 4) !== '000') {
    	        return {
    	            meta: {},
    	            valid: luhn$2(v.substr(2)),
    	        };
    	    }
    	    if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
    	        // First two characters are digits
    	        return {
    	            meta: {},
    	            valid: v.substr(0, 2) === "".concat(parseInt(v.substr(2) + '12', 10) % 97),
    	        };
    	    }
    	    else {
    	        // The first characters cann't be O and I
    	        var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    	        var check = void 0;
    	        // First one is digit
    	        if (/^[0-9]$/.test(v.charAt(0))) {
    	            check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
    	        }
    	        else {
    	            check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
    	        }
    	        return {
    	            meta: {},
    	            valid: (parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11 === check % 11,
    	        };
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate United Kingdom VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function gbVat(value) {
    	    var v = value;
    	    if (/^GB[0-9]{9}$/.test(v) /* Standard */ ||
    	        /^GB[0-9]{12}$/.test(v) /* Branches */ ||
    	        /^GBGD[0-9]{3}$/.test(v) /* Government department */ ||
    	        /^GBHA[0-9]{3}$/.test(v) /* Health authority */ ||
    	        /^GB(GD|HA)8888[0-9]{5}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v) &&
    	        !/^[0-9]{12}$/.test(v) &&
    	        !/^GD[0-9]{3}$/.test(v) &&
    	        !/^HA[0-9]{3}$/.test(v) &&
    	        !/^(GD|HA)8888[0-9]{5}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var length = v.length;
    	    if (length === 5) {
    	        var firstTwo = v.substr(0, 2);
    	        var lastThree = parseInt(v.substr(2), 10);
    	        return {
    	            meta: {},
    	            valid: ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500),
    	        };
    	    }
    	    else if (length === 11 && ('GD8888' === v.substr(0, 6) || 'HA8888' === v.substr(0, 6))) {
    	        if (('GD' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) >= 500) ||
    	            ('HA' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) < 500)) {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	        return {
    	            meta: {},
    	            valid: parseInt(v.substr(6, 3), 10) % 97 === parseInt(v.substr(9, 2), 10),
    	        };
    	    }
    	    else if (length === 9 || length === 12) {
    	        var weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
    	        var sum = 0;
    	        for (var i = 0; i < 9; i++) {
    	            sum += parseInt(v.charAt(i), 10) * weight[i];
    	        }
    	        sum = sum % 97;
    	        var isValid = parseInt(v.substr(0, 3), 10) >= 100 ? sum === 0 || sum === 42 || sum === 55 : sum === 0;
    	        return {
    	            meta: {},
    	            valid: isValid,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: true,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Greek VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function grVat(value) {
    	    var v = value;
    	    if (/^(GR|EL)[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (v.length === 8) {
    	        v = "0".concat(v);
    	    }
    	    var weight = [256, 128, 64, 32, 16, 8, 4, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = (sum % 11) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(8, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var mod11And10 = core.algorithms.mod11And10;
    	/**
    	 * Validate Croatian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function hrVat(value) {
    	    var v = value;
    	    if (/^HR[0-9]{11}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{11}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: mod11And10(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Hungarian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function huVat(value) {
    	    var v = value;
    	    if (/^HU[0-9]{8}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [9, 7, 3, 1, 9, 7, 3, 1];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 10 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Irish VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function ieVat(value) {
    	    var v = value;
    	    if (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var getCheckDigit = function (inp) {
    	        var input = inp;
    	        while (input.length < 7) {
    	            input = "0".concat(input);
    	        }
    	        var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
    	        var sum = 0;
    	        for (var i = 0; i < 7; i++) {
    	            sum += parseInt(input.charAt(i), 10) * (8 - i);
    	        }
    	        sum += 9 * alphabet.indexOf(input.substr(7));
    	        return alphabet[sum % 23];
    	    };
    	    // The first 7 characters are digits
    	    if (/^[0-9]+$/.test(v.substr(0, 7))) {
    	        // New system
    	        return {
    	            meta: {},
    	            valid: v.charAt(7) === getCheckDigit("".concat(v.substr(0, 7)).concat(v.substr(8))),
    	        };
    	    }
    	    else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(v.charAt(1)) !== -1) {
    	        // Old system
    	        return {
    	            meta: {},
    	            valid: v.charAt(7) === getCheckDigit("".concat(v.substr(2, 5)).concat(v.substr(0, 1))),
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: true,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Icelandic VAT (VSK) number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function isVat(value) {
    	    var v = value;
    	    if (/^IS[0-9]{5,6}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    return {
    	        meta: {},
    	        valid: /^[0-9]{5,6}$/.test(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn$1 = core.algorithms.luhn;
    	/**
    	 * Validate Italian VAT number, which consists of 11 digits.
    	 * - First 7 digits are a company identifier
    	 * - Next 3 are the province of residence
    	 * - The last one is a check digit
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function itVat(value) {
    	    var v = value;
    	    if (/^IT[0-9]{11}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{11}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    if (parseInt(v.substr(0, 7), 10) === 0) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var lastThree = parseInt(v.substr(7, 3), 10);
    	    if (lastThree < 1 || (lastThree > 201 && lastThree !== 999 && lastThree !== 888)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: luhn$1(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Lithuanian VAT number
    	 * It can be:
    	 * - 9 digits, for legal entities
    	 * - 12 digits, for temporarily registered taxpayers
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function ltVat(value) {
    	    var v = value;
    	    if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var length = v.length;
    	    var sum = 0;
    	    var i;
    	    for (i = 0; i < length - 1; i++) {
    	        sum += parseInt(v.charAt(i), 10) * (1 + (i % 9));
    	    }
    	    var check = sum % 11;
    	    if (check === 10) {
    	        // FIXME: Why we need calculation because `sum` isn't used anymore
    	        sum = 0;
    	        for (i = 0; i < length - 1; i++) {
    	            sum += parseInt(v.charAt(i), 10) * (1 + ((i + 2) % 9));
    	        }
    	    }
    	    check = (check % 11) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(check) === v.charAt(length - 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Luxembourg VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function luVat(value) {
    	    var v = value;
    	    if (/^LU[0-9]{8}$/.test(v)) {
    	        v = v.substring(2);
    	    }
    	    if (!/^[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: parseInt(v.substring(0, 6), 10) % 89 === parseInt(v.substring(6, 8), 10),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var isValidDate = core.utils.isValidDate;
    	/**
    	 * Validate Latvian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function lvVat(value) {
    	    var v = value;
    	    if (/^LV[0-9]{11}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{11}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var first = parseInt(v.charAt(0), 10);
    	    var length = v.length;
    	    var sum = 0;
    	    var weight = [];
    	    var i;
    	    if (first > 3) {
    	        // Legal entity
    	        sum = 0;
    	        weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
    	        for (i = 0; i < length; i++) {
    	            sum += parseInt(v.charAt(i), 10) * weight[i];
    	        }
    	        sum = sum % 11;
    	        return {
    	            meta: {},
    	            valid: sum === 3,
    	        };
    	    }
    	    else {
    	        // Check birth date
    	        var day = parseInt(v.substr(0, 2), 10);
    	        var month = parseInt(v.substr(2, 2), 10);
    	        var year = parseInt(v.substr(4, 2), 10);
    	        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
    	        if (!isValidDate(year, month, day)) {
    	            return {
    	                meta: {},
    	                valid: false,
    	            };
    	        }
    	        // Check personal code
    	        sum = 0;
    	        weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
    	        for (i = 0; i < length - 1; i++) {
    	            sum += parseInt(v.charAt(i), 10) * weight[i];
    	        }
    	        sum = ((sum + 1) % 11) % 10;
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === v.charAt(length - 1),
    	        };
    	    }
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Maltese VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function mtVat(value) {
    	    var v = value;
    	    if (/^MT[0-9]{8}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{8}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [3, 4, 6, 7, 8, 9, 10, 1];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 37 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var mod97And10 = core.algorithms.mod97And10;
    	/**
    	 * Validate Dutch national identification number (BSN)
    	 *
    	 * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
    	 * @returns {ValidateResult}
    	 */
    	function nlId(value) {
    	    if (value.length < 8) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = value;
    	    if (v.length === 8) {
    	        v = "0".concat(v);
    	    }
    	    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    v = v.replace(/\./g, '');
    	    if (parseInt(v, 10) === 0) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 0;
    	    var length = v.length;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += (9 - i) * parseInt(v.charAt(i), 10);
    	    }
    	    sum = sum % 11;
    	    if (sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.charAt(length - 1),
    	    };
    	}
    	/**
    	 * Validate Dutch VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function nlVat(value) {
    	    var v = value;
    	    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var id = v.substr(0, 9);
    	    return {
    	        meta: {},
    	        valid: nlId(id).valid || mod97And10("NL".concat(v)),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Norwegian VAT number
    	 *
    	 * @see http://www.brreg.no/english/coordination/number.html
    	 * @returns {ValidateResult}
    	 */
    	function noVat(value) {
    	    var v = value;
    	    if (/^NO[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 11) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(8, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Polish VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function plVat(value) {
    	    var v = value;
    	    if (/^PL[0-9]{10}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{10}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
    	    var sum = 0;
    	    for (var i = 0; i < 10; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    return {
    	        meta: {},
    	        valid: sum % 11 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Portuguese VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function ptVat(value) {
    	    var v = value;
    	    if (/^PT[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var weight = [9, 8, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum > 9) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(8, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Romanian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function roVat(value) {
    	    var v = value;
    	    if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[1-9][0-9]{1,9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var length = v.length;
    	    var weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
    	    var sum = 0;
    	    for (var i = 0; i < length - 1; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = ((10 * sum) % 11) % 10;
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(length - 1, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Serbian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function rsVat(value) {
    	    var v = value;
    	    if (/^RS[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var sum = 10;
    	    var temp = 0;
    	    for (var i = 0; i < 8; i++) {
    	        temp = (parseInt(v.charAt(i), 10) + sum) % 10;
    	        if (temp === 0) {
    	            temp = 10;
    	        }
    	        sum = (2 * temp) % 11;
    	    }
    	    return {
    	        meta: {},
    	        valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Russian VAT number (Taxpayer Identification Number - INN)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function ruVat(value) {
    	    var v = value;
    	    if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var i = 0;
    	    if (v.length === 10) {
    	        var weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    	        var sum = 0;
    	        for (i = 0; i < 10; i++) {
    	            sum += parseInt(v.charAt(i), 10) * weight[i];
    	        }
    	        sum = sum % 11;
    	        if (sum > 9) {
    	            sum = sum % 10;
    	        }
    	        return {
    	            meta: {},
    	            valid: "".concat(sum) === v.substr(9, 1),
    	        };
    	    }
    	    else if (v.length === 12) {
    	        var weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    	        var weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    	        var sum1 = 0;
    	        var sum2 = 0;
    	        for (i = 0; i < 11; i++) {
    	            sum1 += parseInt(v.charAt(i), 10) * weight1[i];
    	            sum2 += parseInt(v.charAt(i), 10) * weight2[i];
    	        }
    	        sum1 = sum1 % 11;
    	        if (sum1 > 9) {
    	            sum1 = sum1 % 10;
    	        }
    	        sum2 = sum2 % 11;
    	        if (sum2 > 9) {
    	            sum2 = sum2 % 10;
    	        }
    	        return {
    	            meta: {},
    	            valid: "".concat(sum1) === v.substr(10, 1) && "".concat(sum2) === v.substr(11, 1),
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: true,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var luhn = core.algorithms.luhn;
    	/**
    	 * Validate Swiss VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function seVat(value) {
    	    var v = value;
    	    if (/^SE[0-9]{10}01$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[0-9]{10}01$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    v = v.substr(0, 10);
    	    return {
    	        meta: {},
    	        valid: luhn(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Slovenian VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function siVat(value) {
    	    // The Slovenian VAT numbers don't start with zero
    	    var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
    	    if (!res) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var v = res[1] ? value.substr(2) : value;
    	    var weight = [8, 7, 6, 5, 4, 3, 2];
    	    var sum = 0;
    	    for (var i = 0; i < 7; i++) {
    	        sum += parseInt(v.charAt(i), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(7, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Slovak VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function skVat(value) {
    	    var v = value;
    	    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    return {
    	        meta: {},
    	        valid: parseInt(v, 10) % 11 === 0,
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate Venezuelan VAT number (RIF)
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function veVat(value) {
    	    var v = value;
    	    if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    if (!/^[VEJPG][0-9]{9}$/.test(v)) {
    	        return {
    	            meta: {},
    	            valid: false,
    	        };
    	    }
    	    var types = {
    	        E: 8,
    	        G: 20,
    	        J: 12,
    	        P: 16,
    	        V: 4,
    	    };
    	    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    	    var sum = types[v.charAt(0)];
    	    for (var i = 0; i < 8; i++) {
    	        sum += parseInt(v.charAt(i + 1), 10) * weight[i];
    	    }
    	    sum = 11 - (sum % 11);
    	    if (sum === 11 || sum === 10) {
    	        sum = 0;
    	    }
    	    return {
    	        meta: {},
    	        valid: "".concat(sum) === v.substr(9, 1),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	/**
    	 * Validate South African VAT number
    	 *
    	 * @returns {ValidateResult}
    	 */
    	function zaVat(value) {
    	    var v = value;
    	    if (/^ZA4[0-9]{9}$/.test(v)) {
    	        v = v.substr(2);
    	    }
    	    return {
    	        meta: {},
    	        valid: /^4[0-9]{9}$/.test(v),
    	    };
    	}

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function vat() {
    	    // Supported country codes
    	    var COUNTRY_CODES = [
    	        'AR',
    	        'AT',
    	        'BE',
    	        'BG',
    	        'BR',
    	        'CH',
    	        'CY',
    	        'CZ',
    	        'DE',
    	        'DK',
    	        'EE',
    	        'EL',
    	        'ES',
    	        'FI',
    	        'FR',
    	        'GB',
    	        'GR',
    	        'HR',
    	        'HU',
    	        'IE',
    	        'IS',
    	        'IT',
    	        'LT',
    	        'LU',
    	        'LV',
    	        'MT',
    	        'NL',
    	        'NO',
    	        'PL',
    	        'PT',
    	        'RO',
    	        'RU',
    	        'RS',
    	        'SE',
    	        'SK',
    	        'SI',
    	        'VE',
    	        'ZA',
    	    ];
    	    return {
    	        /**
    	         * Validate an European VAT number
    	         */
    	        validate: function (input) {
    	            var value = input.value;
    	            if (value === '') {
    	                return { valid: true };
    	            }
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            var country = value.substr(0, 2);
    	            if ('function' === typeof opts.country) {
    	                country = opts.country.call(this);
    	            }
    	            else {
    	                country = opts.country;
    	            }
    	            if (COUNTRY_CODES.indexOf(country) === -1) {
    	                return { valid: true };
    	            }
    	            var result = {
    	                meta: {},
    	                valid: true,
    	            };
    	            switch (country.toLowerCase()) {
    	                case 'ar':
    	                    result = arVat(value);
    	                    break;
    	                case 'at':
    	                    result = atVat(value);
    	                    break;
    	                case 'be':
    	                    result = beVat(value);
    	                    break;
    	                case 'bg':
    	                    result = bgVat(value);
    	                    break;
    	                case 'br':
    	                    result = brVat(value);
    	                    break;
    	                case 'ch':
    	                    result = chVat(value);
    	                    break;
    	                case 'cy':
    	                    result = cyVat(value);
    	                    break;
    	                case 'cz':
    	                    result = czVat(value);
    	                    break;
    	                case 'de':
    	                    result = deVat(value);
    	                    break;
    	                case 'dk':
    	                    result = dkVat(value);
    	                    break;
    	                case 'ee':
    	                    result = eeVat(value);
    	                    break;
    	                // EL is traditionally prefix of Greek VAT numbers
    	                case 'el':
    	                    result = grVat(value);
    	                    break;
    	                case 'es':
    	                    result = esVat(value);
    	                    break;
    	                case 'fi':
    	                    result = fiVat(value);
    	                    break;
    	                case 'fr':
    	                    result = frVat(value);
    	                    break;
    	                case 'gb':
    	                    result = gbVat(value);
    	                    break;
    	                case 'gr':
    	                    result = grVat(value);
    	                    break;
    	                case 'hr':
    	                    result = hrVat(value);
    	                    break;
    	                case 'hu':
    	                    result = huVat(value);
    	                    break;
    	                case 'ie':
    	                    result = ieVat(value);
    	                    break;
    	                case 'is':
    	                    result = isVat(value);
    	                    break;
    	                case 'it':
    	                    result = itVat(value);
    	                    break;
    	                case 'lt':
    	                    result = ltVat(value);
    	                    break;
    	                case 'lu':
    	                    result = luVat(value);
    	                    break;
    	                case 'lv':
    	                    result = lvVat(value);
    	                    break;
    	                case 'mt':
    	                    result = mtVat(value);
    	                    break;
    	                case 'nl':
    	                    result = nlVat(value);
    	                    break;
    	                case 'no':
    	                    result = noVat(value);
    	                    break;
    	                case 'pl':
    	                    result = plVat(value);
    	                    break;
    	                case 'pt':
    	                    result = ptVat(value);
    	                    break;
    	                case 'ro':
    	                    result = roVat(value);
    	                    break;
    	                case 'rs':
    	                    result = rsVat(value);
    	                    break;
    	                case 'ru':
    	                    result = ruVat(value);
    	                    break;
    	                case 'se':
    	                    result = seVat(value);
    	                    break;
    	                case 'si':
    	                    result = siVat(value);
    	                    break;
    	                case 'sk':
    	                    result = skVat(value);
    	                    break;
    	                case 've':
    	                    result = veVat(value);
    	                    break;
    	                case 'za':
    	                    result = zaVat(value);
    	                    break;
    	            }
    	            var message = format(input.l10n && input.l10n.vat ? opts.message || input.l10n.vat.country : opts.message, input.l10n && input.l10n.vat && input.l10n.vat.countries
    	                ? input.l10n.vat.countries[country.toUpperCase()]
    	                : country.toUpperCase());
    	            return Object.assign({}, { message: message }, result);
    	        },
    	    };
    	}

    	cjs$2.vat = vat;
    	return cjs$2;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$2.exports = requireCjs$2();
    }

    var libExports$2 = lib$2.exports;

    var lib$1 = {exports: {}};

    var cjs$1 = {};

    var hasRequiredCjs$1;

    function requireCjs$1 () {
    	if (hasRequiredCjs$1) return cjs$1;
    	hasRequiredCjs$1 = 1;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	function vin() {
    	    return {
    	        /**
    	         * Validate an US VIN (Vehicle Identification Number)
    	         */
    	        validate: function (input) {
    	            if (input.value === '') {
    	                return { valid: true };
    	            }
    	            // Don't accept I, O, Q characters
    	            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(input.value)) {
    	                return { valid: false };
    	            }
    	            var v = input.value.toUpperCase();
    	            var chars = {
    	                A: 1,
    	                B: 2,
    	                C: 3,
    	                D: 4,
    	                E: 5,
    	                F: 6,
    	                G: 7,
    	                H: 8,
    	                J: 1,
    	                K: 2,
    	                L: 3,
    	                M: 4,
    	                N: 5,
    	                P: 7,
    	                R: 9,
    	                S: 2,
    	                T: 3,
    	                U: 4,
    	                V: 5,
    	                W: 6,
    	                X: 7,
    	                Y: 8,
    	                Z: 9,
    	                0: 0,
    	                1: 1,
    	                2: 2,
    	                3: 3,
    	                4: 4,
    	                5: 5,
    	                6: 6,
    	                7: 7,
    	                8: 8,
    	                9: 9,
    	            };
    	            var weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    	            var length = v.length;
    	            var sum = 0;
    	            for (var i = 0; i < length; i++) {
    	                sum += chars["".concat(v.charAt(i))] * weights[i];
    	            }
    	            var reminder = "".concat(sum % 11);
    	            if (reminder === '10') {
    	                reminder = 'X';
    	            }
    	            return { valid: reminder === v.charAt(8) };
    	        },
    	    };
    	}

    	cjs$1.vin = vin;
    	return cjs$1;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib$1.exports = requireCjs$1();
    }

    var libExports$1 = lib$1.exports;

    var lib = {exports: {}};

    var cjs = {};

    var hasRequiredCjs;

    function requireCjs () {
    	if (hasRequiredCjs) return cjs;
    	hasRequiredCjs = 1;

    	var core = libExports$11;

    	/**
    	 * FormValidation (https://formvalidation.io)
    	 * The best validation library for JavaScript
    	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
    	 */
    	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    	function zipCode() {
    	    var COUNTRY_CODES = [
    	        'AT',
    	        'BG',
    	        'BR',
    	        'CA',
    	        'CH',
    	        'CZ',
    	        'DE',
    	        'DK',
    	        'ES',
    	        'FR',
    	        'GB',
    	        'IE',
    	        'IN',
    	        'IT',
    	        'MA',
    	        'NL',
    	        'PL',
    	        'PT',
    	        'RO',
    	        'RU',
    	        'SE',
    	        'SG',
    	        'SK',
    	        'US',
    	    ];
    	    /**
    	     * Validate United Kingdom postcode
    	     * @returns {boolean}
    	     */
    	    var gb = function (value) {
    	        var firstChar = '[ABCDEFGHIJKLMNOPRSTUWYZ]'; // Does not accept QVX
    	        var secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]'; // Does not accept IJZ
    	        var thirdChar = '[ABCDEFGHJKPMNRSTUVWXY]';
    	        var fourthChar = '[ABEHMNPRVWXY]';
    	        var fifthChar = '[ABDEFGHJLNPQRSTUWXYZ]';
    	        var regexps = [
    	            // AN NAA, ANN NAA, AAN NAA, AANN NAA format
    	            new RegExp("^(".concat(firstChar, "{1}").concat(secondChar, "?[0-9]{1,2})(\\s*)([0-9]{1}").concat(fifthChar, "{2})$"), 'i'),
    	            // ANA NAA
    	            new RegExp("^(".concat(firstChar, "{1}[0-9]{1}").concat(thirdChar, "{1})(\\s*)([0-9]{1}").concat(fifthChar, "{2})$"), 'i'),
    	            // AANA NAA
    	            new RegExp("^(".concat(firstChar, "{1}").concat(secondChar, "{1}?[0-9]{1}").concat(fourthChar, "{1})(\\s*)([0-9]{1}").concat(fifthChar, "{2})$"), 'i'),
    	            // BFPO postcodes
    	            new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),
    	            /^(GIR)(\s*)(0AA)$/i,
    	            /^(BFPO)(\s*)([0-9]{1,4})$/i,
    	            /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
    	            /^([A-Z]{4})(\s*)(1ZZ)$/i,
    	            /^(AI-2640)$/i, // Anguilla
    	        ];
    	        for (var _i = 0, regexps_1 = regexps; _i < regexps_1.length; _i++) {
    	            var reg = regexps_1[_i];
    	            if (reg.test(value)) {
    	                return true;
    	            }
    	        }
    	        return false;
    	    };
    	    return {
    	        /**
    	         * Return true if and only if the input value is a valid country zip code
    	         */
    	        validate: function (input) {
    	            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
    	            if (input.value === '' || !opts.country) {
    	                return { valid: true };
    	            }
    	            var country = input.value.substr(0, 2);
    	            if ('function' === typeof opts.country) {
    	                country = opts.country.call(this);
    	            }
    	            else {
    	                country = opts.country;
    	            }
    	            if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
    	                return { valid: true };
    	            }
    	            var isValid = false;
    	            country = country.toUpperCase();
    	            switch (country) {
    	                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
    	                case 'AT':
    	                    isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
    	                    break;
    	                case 'BG':
    	                    isValid = /^([1-9]{1}[0-9]{3})$/.test(input.value);
    	                    break;
    	                case 'BR':
    	                    isValid = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(input.value);
    	                    break;
    	                case 'CA':
    	                    isValid =
    	                        /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(input.value);
    	                    break;
    	                case 'CH':
    	                    isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
    	                    break;
    	                case 'CZ':
    	                    // Test: http://regexr.com/39hhr
    	                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
    	                    break;
    	                // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
    	                case 'DE':
    	                    isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(input.value);
    	                    break;
    	                case 'DK':
    	                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(input.value);
    	                    break;
    	                // Zip codes in Spain go from 01XXX to 52XXX.
    	                // Test: http://refiddle.com/1ufo
    	                case 'ES':
    	                    isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(input.value);
    	                    break;
    	                // http://en.wikipedia.org/wiki/Postal_codes_in_France
    	                case 'FR':
    	                    isValid = /^[0-9]{5}$/i.test(input.value);
    	                    break;
    	                case 'GB':
    	                    isValid = gb(input.value);
    	                    break;
    	                // Indian PIN (Postal Index Number) validation
    	                // http://en.wikipedia.org/wiki/Postal_Index_Number
    	                // Test: http://regex101.com/r/kV0vH3/1
    	                case 'IN':
    	                    isValid = /^\d{3}\s?\d{3}$/.test(input.value);
    	                    break;
    	                // http://www.eircode.ie/docs/default-source/Common/
    	                // prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
    	                // Test: http://refiddle.com/1kpl
    	                case 'IE':
    	                    isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(input.value);
    	                    break;
    	                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
    	                case 'IT':
    	                    isValid = /^(I-|IT-)?\d{5}$/i.test(input.value);
    	                    break;
    	                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
    	                case 'MA':
    	                    isValid = /^[1-9][0-9]{4}$/i.test(input.value);
    	                    break;
    	                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
    	                case 'NL':
    	                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(input.value);
    	                    break;
    	                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
    	                case 'PL':
    	                    isValid = /^[0-9]{2}-[0-9]{3}$/.test(input.value);
    	                    break;
    	                // Test: http://refiddle.com/1l2t
    	                case 'PT':
    	                    isValid = /^[1-9]\d{3}-\d{3}$/.test(input.value);
    	                    break;
    	                case 'RO':
    	                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(input.value);
    	                    break;
    	                case 'RU':
    	                    isValid = /^[0-9]{6}$/i.test(input.value);
    	                    break;
    	                case 'SE':
    	                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(input.value);
    	                    break;
    	                case 'SG':
    	                    isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(input.value);
    	                    break;
    	                case 'SK':
    	                    // Test: http://regexr.com/39hhr
    	                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
    	                    break;
    	                case 'US':
    	                default:
    	                    isValid = /^\d{4,5}([-]?\d{4})?$/.test(input.value);
    	                    break;
    	            }
    	            return {
    	                message: format(input.l10n && input.l10n.zipCode ? opts.message || input.l10n.zipCode.country : opts.message, input.l10n && input.l10n.zipCode && input.l10n.zipCode.countries
    	                    ? input.l10n.zipCode.countries[country]
    	                    : country),
    	                valid: isValid,
    	            };
    	        },
    	    };
    	}

    	cjs.zipCode = zipCode;
    	return cjs;
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */

    {
        lib.exports = requireCjs();
    }

    var libExports = lib.exports;

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var plugins = {
        Alias: libExports$10.Alias,
        Aria: libExports$$.Aria,
        Declarative: libExports$_.Declarative,
        DefaultSubmit: libExports$Z.DefaultSubmit,
        Dependency: libExports$Y.Dependency,
        Excluded: libExports$X.Excluded,
        FieldStatus: libExports$W.FieldStatus,
        Framework: libExports$U.Framework,
        Icon: libExports$T.Icon,
        Message: libExports$V.Message,
        Sequence: libExports$S.Sequence,
        SubmitButton: libExports$R.SubmitButton,
        Tooltip: libExports$Q.Tooltip,
        Trigger: libExports$P.Trigger,
    };
    var validators = {
        between: libExports$O.between,
        blank: libExports$N.blank,
        callback: libExports$M.callback,
        choice: libExports$L.choice,
        creditCard: libExports$K.creditCard,
        date: libExports$J.date,
        different: libExports$I.different,
        digits: libExports$H.digits,
        emailAddress: libExports$G.emailAddress,
        file: libExports$F.file,
        greaterThan: libExports$E.greaterThan,
        identical: libExports$D.identical,
        integer: libExports$C.integer,
        ip: libExports$B.ip,
        lessThan: libExports$A.lessThan,
        notEmpty: libExports$z.notEmpty,
        numeric: libExports$y.numeric,
        promise: libExports$x.promise,
        regexp: libExports$w.regexp,
        remote: libExports$v.remote,
        stringCase: libExports$u.stringCase,
        stringLength: libExports$t.stringLength,
        uri: libExports$s.uri,
        // Additional validators
        base64: libExports$r.base64,
        bic: libExports$q.bic,
        color: libExports$p.color,
        cusip: libExports$o.cusip,
        ean: libExports$n.ean,
        ein: libExports$m.ein,
        grid: libExports$l.grid,
        hex: libExports$k.hex,
        iban: libExports$j.iban,
        id: libExports$i.id,
        imei: libExports$h.imei,
        imo: libExports$g.imo,
        isbn: libExports$f.isbn,
        isin: libExports$e.isin,
        ismn: libExports$d.ismn,
        issn: libExports$c.issn,
        mac: libExports$b.mac,
        meid: libExports$a.meid,
        phone: libExports$9.phone,
        rtn: libExports$8.rtn,
        sedol: libExports$7.sedol,
        siren: libExports$6.siren,
        siret: libExports$5.siret,
        step: libExports$4.step,
        uuid: libExports$3.uuid,
        vat: libExports$2.vat,
        vin: libExports$1.vin,
        zipCode: libExports.zipCode,
    };
    // Register all validators
    var formValidationWithPopularValidators = function (form, options) {
        var instance = libExports$11.formValidation(form, options);
        Object.keys(validators).forEach(function (name) { return instance.registerValidator(name, validators[name]); });
        return instance;
    };

    exports.Plugin = libExports$11.Plugin;
    exports.algorithms = libExports$11.algorithms;
    exports.formValidation = formValidationWithPopularValidators;
    exports.plugins = plugins;
    exports.utils = libExports$11.utils;
    exports.validators = validators;

}));
