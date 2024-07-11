/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap3
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),t=require("@form-validation/plugin-framework"),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)};var n=e.utils.classSet,o=e.utils.hasClass,s=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bootstrap3",messageClass:"help-block",rowClasses:"has-feedback",rowInvalidClass:"has-error",rowPattern:/^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onIconPlaced=function(e){n(e.iconElement,{"form-control-feedback":!0});var t=e.element.parentElement;o(t,"input-group")&&t.parentElement.insertBefore(e.iconElement,t.nextSibling);var r=e.element.getAttribute("type");if("checkbox"===r||"radio"===r){var s=t.parentElement;o(t,r)?t.parentElement.insertBefore(e.iconElement,t.nextSibling):o(t.parentElement,r)&&s.parentElement.insertBefore(e.iconElement,s.nextSibling)}},t}(t.Framework);exports.Bootstrap3=s;
