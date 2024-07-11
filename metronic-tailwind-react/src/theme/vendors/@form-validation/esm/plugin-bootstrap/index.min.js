/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";import{Framework as n}from"../plugin-framework/index.min.js";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},t(e,n)};var o=e.classSet,r=e.hasClass,i=function(e){function n(n){return e.call(this,Object.assign({},{eleInvalidClass:"is-invalid",eleValidClass:"is-valid",formClass:"fv-plugins-bootstrap",messageClass:"fv-help-block",rowInvalidClass:"has-danger",rowPattern:/^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},n))||this}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(n,e),n.prototype.onIconPlaced=function(e){var n=e.element.parentElement;r(n,"input-group")&&n.parentElement.insertBefore(e.iconElement,n.nextSibling);var t=e.element.getAttribute("type");if("checkbox"===t||"radio"===t){var i=n.parentElement;r(n,"form-check")?(o(e.iconElement,{"fv-plugins-icon-check":!0}),n.parentElement.insertBefore(e.iconElement,n.nextSibling)):r(n.parentElement,"form-check")&&(o(e.iconElement,{"fv-plugins-icon-check":!0}),i.parentElement.insertBefore(e.iconElement,i.nextSibling))}},n}(n);export{i as Bootstrap};
