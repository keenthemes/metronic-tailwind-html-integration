/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-transformer
 * @version 2.4.0
 */

!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.Transformer=o(t.FormValidation))}(this,(function(t){"use strict";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])},o(t,e)};return function(t){function e(o){var e=t.call(this,o)||this;return e.valueFilter=e.getElementValue.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.prototype.install=function(){this.core.registerFilter("field-value",this.valueFilter)},e.prototype.uninstall=function(){this.core.deregisterFilter("field-value",this.valueFilter)},e.prototype.getElementValue=function(t,o,e,i){return this.isEnabled&&this.opts[o]&&this.opts[o][i]&&"function"==typeof this.opts[o][i]?this.opts[o][i].apply(this,[o,e,i]):t},e}(t.Plugin)}));
