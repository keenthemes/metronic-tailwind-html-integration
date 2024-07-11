/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-pure
 * @version 2.4.0
 */

!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],e):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.plugins=o.FormValidation.plugins||{},o.FormValidation.plugins.Pure=e(o.FormValidation,o.FormValidation.plugins))}(this,(function(o,e){"use strict";var t=function(o,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,e){o.__proto__=e}||function(o,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])},t(o,e)};var n=o.utils.classSet;return function(o){function e(e){return o.call(this,Object.assign({},{formClass:"fv-plugins-pure",messageClass:"fv-help-block",rowInvalidClass:"fv-has-error",rowPattern:/^.*pure-control-group.*$/,rowSelector:".pure-control-group",rowValidClass:"fv-has-success"},e))||this}return function(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,o),e.prototype.onIconPlaced=function(o){var e=o.element.getAttribute("type");if("checkbox"===e||"radio"===e){var t=o.element.parentElement;n(o.iconElement,{"fv-plugins-icon-check":!0}),"LABEL"===t.tagName&&t.parentElement.insertBefore(o.iconElement,t.nextSibling)}},e}(e.Framework)}));
