/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-semantic
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.plugins=e.FormValidation.plugins||{},e.FormValidation.plugins.Semantic=t(e.FormValidation,e.FormValidation.plugins))}(this,(function(e,t){"use strict";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var o=e.utils.classSet,i=e.utils.hasClass;return function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-semantic",messageClass:"ui pointing red label",rowInvalidClass:"error",rowPattern:/^.*(field|column).*$/,rowSelector:".fields",rowValidClass:"fv-has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var n=e.element.parentElement;o(e.iconElement,{"fv-plugins-icon-check":!0}),n.parentElement.insertBefore(e.iconElement,n.nextSibling)}},t.prototype.onMessagePlaced=function(e){var t=e.element.getAttribute("type"),n=e.elements.length;if(("checkbox"===t||"radio"===t)&&n>1){var o=e.elements[n-1].parentElement;i(o,t)&&i(o,"ui")&&o.parentElement.insertBefore(e.messageElement,o.nextSibling)}},t}(t.Framework)}));
