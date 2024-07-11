/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-semantic
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";import{Framework as t}from"../plugin-framework/index.min.js";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var r=e.classSet,o=e.hasClass,i=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-semantic",messageClass:"ui pointing red label",rowInvalidClass:"error",rowPattern:/^.*(field|column).*$/,rowSelector:".fields",rowValidClass:"fv-has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var n=e.element.parentElement;r(e.iconElement,{"fv-plugins-icon-check":!0}),n.parentElement.insertBefore(e.iconElement,n.nextSibling)}},t.prototype.onMessagePlaced=function(e){var t=e.element.getAttribute("type"),n=e.elements.length;if(("checkbox"===t||"radio"===t)&&n>1){var r=e.elements[n-1].parentElement;o(r,t)&&o(r,"ui")&&r.parentElement.insertBefore(e.messageElement,r.nextSibling)}},t}(t);export{i as Semantic};
