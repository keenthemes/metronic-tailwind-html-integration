/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap3
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(e,t,n){"use strict";var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};var r=t.utils.classSet,s=t.utils.hasClass,a=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bootstrap3",messageClass:"help-block",rowClasses:"has-feedback",rowInvalidClass:"has-error",rowPattern:/^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onIconPlaced=function(e){r(e.iconElement,{"form-control-feedback":!0});var t=e.element.parentElement;s(t,"input-group")&&t.parentElement.insertBefore(e.iconElement,t.nextSibling);var n=e.element.getAttribute("type");if("checkbox"===n||"radio"===n){var o=t.parentElement;s(t,n)?t.parentElement.insertBefore(e.iconElement,t.nextSibling):s(t.parentElement,n)&&o.parentElement.insertBefore(e.iconElement,o.nextSibling)}},t}(n.Framework);e.Bootstrap3=a}));
