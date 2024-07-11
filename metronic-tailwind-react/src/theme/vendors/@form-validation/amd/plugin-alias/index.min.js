/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-alias
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,r){"use strict";var o=function(t,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])},o(t,r)};var e=function(t){function r(r){var o=t.call(this,r)||this;return o.opts=r||{},o.validatorNameFilter=o.getValidatorName.bind(o),o}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}(r,t),r.prototype.install=function(){this.core.registerFilter("validator-name",this.validatorNameFilter)},r.prototype.uninstall=function(){this.core.deregisterFilter("validator-name",this.validatorNameFilter)},r.prototype.getValidatorName=function(t,r){return this.isEnabled&&this.opts[t]||t},r}(r.Plugin);t.Alias=e}));
