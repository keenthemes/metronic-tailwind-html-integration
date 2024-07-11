/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-foundation
 * @version 2.4.0
 */

import{Framework as e}from"../plugin-framework/index.min.js";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},t(e,n)};var n=function(e){function n(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-foundation",messageClass:"form-error",rowInvalidClass:"fv-row__error",rowPattern:/^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,rowSelector:".grid-x",rowValidClass:"fv-row__success"},t))||this}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(n,e),n.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var n=e.iconElement.nextSibling;if("LABEL"===n.nodeName)n.parentNode.insertBefore(e.iconElement,n.nextSibling);else if("#text"===n.nodeName){var o=n.nextSibling;o&&"LABEL"===o.nodeName&&o.parentNode.insertBefore(e.iconElement,o.nextSibling)}}},n}(e);export{n as Foundation};
