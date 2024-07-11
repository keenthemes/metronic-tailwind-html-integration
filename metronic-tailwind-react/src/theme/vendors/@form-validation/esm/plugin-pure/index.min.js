/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-pure
 * @version 2.4.0
 */

import{utils as t}from"../core/index.min.js";import{Framework as e}from"../plugin-framework/index.min.js";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)};var r=t.classSet,n=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-pure",messageClass:"fv-help-block",rowInvalidClass:"fv-has-error",rowPattern:/^.*pure-control-group.*$/,rowSelector:".pure-control-group",rowValidClass:"fv-has-success"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type");if("checkbox"===e||"radio"===e){var o=t.element.parentElement;r(t.iconElement,{"fv-plugins-icon-check":!0}),"LABEL"===o.tagName&&o.parentElement.insertBefore(t.iconElement,o.nextSibling)}},e}(e);export{n as Pure};
