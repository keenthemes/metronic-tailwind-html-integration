/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-foundation
 * @version 2.4.0
 */

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/plugin-framework"],o):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.plugins=e.FormValidation.plugins||{},e.FormValidation.plugins.Foundation=o(e.FormValidation.plugins))}(this,(function(e){"use strict";var o=function(e,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])},o(e,n)};return function(e){function n(o){return e.call(this,Object.assign({},{formClass:"fv-plugins-foundation",messageClass:"form-error",rowInvalidClass:"fv-row__error",rowPattern:/^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,rowSelector:".grid-x",rowValidClass:"fv-row__success"},o))||this}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.onIconPlaced=function(e){var o=e.element.getAttribute("type");if("checkbox"===o||"radio"===o){var n=e.iconElement.nextSibling;if("LABEL"===n.nodeName)n.parentNode.insertBefore(e.iconElement,n.nextSibling);else if("#text"===n.nodeName){var t=n.nextSibling;t&&"LABEL"===t.nodeName&&t.parentNode.insertBefore(e.iconElement,t.nextSibling)}}},n}(e.Framework)}));
