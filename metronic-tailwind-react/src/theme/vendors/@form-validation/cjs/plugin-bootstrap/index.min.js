/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),t=require("@form-validation/plugin-framework"),n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var r=e.utils.classSet,o=e.utils.hasClass,i=function(e){function t(t){return e.call(this,Object.assign({},{eleInvalidClass:"is-invalid",eleValidClass:"is-valid",formClass:"fv-plugins-bootstrap",messageClass:"fv-help-block",rowInvalidClass:"has-danger",rowPattern:/^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.parentElement;o(t,"input-group")&&t.parentElement.insertBefore(e.iconElement,t.nextSibling);var n=e.element.getAttribute("type");if("checkbox"===n||"radio"===n){var i=t.parentElement;o(t,"form-check")?(r(e.iconElement,{"fv-plugins-icon-check":!0}),t.parentElement.insertBefore(e.iconElement,t.nextSibling)):o(t.parentElement,"form-check")&&(r(e.iconElement,{"fv-plugins-icon-check":!0}),i.parentElement.insertBefore(e.iconElement,i.nextSibling))}},t}(t.Framework);exports.Bootstrap=i;
