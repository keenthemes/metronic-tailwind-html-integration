/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-foundation
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/plugin-framework"),t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},t(e,o)};var o=function(e){function o(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-foundation",messageClass:"form-error",rowInvalidClass:"fv-row__error",rowPattern:/^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,rowSelector:".grid-x",rowValidClass:"fv-row__success"},t))||this}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}(o,e),o.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var o=e.iconElement.nextSibling;if("LABEL"===o.nodeName)o.parentNode.insertBefore(e.iconElement,o.nextSibling);else if("#text"===o.nodeName){var r=o.nextSibling;r&&"LABEL"===r.nodeName&&r.parentNode.insertBefore(e.iconElement,r.nextSibling)}}},o}(e.Framework);exports.Foundation=o;
