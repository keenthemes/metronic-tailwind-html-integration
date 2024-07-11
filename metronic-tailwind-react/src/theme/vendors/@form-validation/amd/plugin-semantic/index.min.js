/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-semantic
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(e,t,n){"use strict";var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};var r=t.utils.classSet,i=t.utils.hasClass,l=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-semantic",messageClass:"ui pointing red label",rowInvalidClass:"error",rowPattern:/^.*(field|column).*$/,rowSelector:".fields",rowValidClass:"fv-has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var n=e.element.parentElement;r(e.iconElement,{"fv-plugins-icon-check":!0}),n.parentElement.insertBefore(e.iconElement,n.nextSibling)}},t.prototype.onMessagePlaced=function(e){var t=e.element.getAttribute("type"),n=e.elements.length;if(("checkbox"===t||"radio"===t)&&n>1){var o=e.elements[n-1].parentElement;i(o,t)&&i(o,"ui")&&o.parentElement.insertBefore(e.messageElement,o.nextSibling)}},t}(n.Framework);e.Semantic=l}));
