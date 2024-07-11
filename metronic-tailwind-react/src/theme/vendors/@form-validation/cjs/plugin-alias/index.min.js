/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-alias
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),r=function(t,o){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},r(t,o)};var o=function(t){function o(r){var o=t.call(this,r)||this;return o.opts=r||{},o.validatorNameFilter=o.getValidatorName.bind(o),o}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}(o,t),o.prototype.install=function(){this.core.registerFilter("validator-name",this.validatorNameFilter)},o.prototype.uninstall=function(){this.core.deregisterFilter("validator-name",this.validatorNameFilter)},o.prototype.getValidatorName=function(t,r){return this.isEnabled&&this.opts[t]||t},o}(t.Plugin);exports.Alias=o;
