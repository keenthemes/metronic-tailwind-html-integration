/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-transformer
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},e(t,r)};var r=function(t){function r(e){var r=t.call(this,e)||this;return r.valueFilter=r.getElementValue.bind(r),r}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}(r,t),r.prototype.install=function(){this.core.registerFilter("field-value",this.valueFilter)},r.prototype.uninstall=function(){this.core.deregisterFilter("field-value",this.valueFilter)},r.prototype.getElementValue=function(t,e,r,o){return this.isEnabled&&this.opts[e]&&this.opts[e][o]&&"function"==typeof this.opts[e][o]?this.opts[e][o].apply(this,[e,r,o]):t},r}(t.Plugin);exports.Transformer=r;
