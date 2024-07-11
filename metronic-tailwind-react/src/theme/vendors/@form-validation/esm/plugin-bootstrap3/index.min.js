/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap3
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";import{Framework as t}from"../plugin-framework/index.min.js";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var r=e.classSet,o=e.hasClass,s=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bootstrap3",messageClass:"help-block",rowClasses:"has-feedback",rowInvalidClass:"has-error",rowPattern:/^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.onIconPlaced=function(e){r(e.iconElement,{"form-control-feedback":!0});var t=e.element.parentElement;o(t,"input-group")&&t.parentElement.insertBefore(e.iconElement,t.nextSibling);var n=e.element.getAttribute("type");if("checkbox"===n||"radio"===n){var s=t.parentElement;o(t,n)?t.parentElement.insertBefore(e.iconElement,t.nextSibling):o(t.parentElement,n)&&s.parentElement.insertBefore(e.iconElement,s.nextSibling)}},t}(t);export{s as Bootstrap3};
