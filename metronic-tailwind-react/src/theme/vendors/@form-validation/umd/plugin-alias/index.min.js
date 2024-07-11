/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-alias
 * @version 2.4.0
 */

!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.Alias=o(t.FormValidation))}(this,(function(t){"use strict";var o=function(t,i){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},o(t,i)};return function(t){function i(o){var i=t.call(this,o)||this;return i.opts=o||{},i.validatorNameFilter=i.getValidatorName.bind(i),i}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function e(){this.constructor=t}o(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}(i,t),i.prototype.install=function(){this.core.registerFilter("validator-name",this.validatorNameFilter)},i.prototype.uninstall=function(){this.core.deregisterFilter("validator-name",this.validatorNameFilter)},i.prototype.getValidatorName=function(t,o){return this.isEnabled&&this.opts[t]||t},i}(t.Plugin)}));
