/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-pure
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(t,e,o){"use strict";var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)};var n=e.utils.classSet,c=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-pure",messageClass:"fv-help-block",rowInvalidClass:"fv-has-error",rowPattern:/^.*pure-control-group.*$/,rowSelector:".pure-control-group",rowValidClass:"fv-has-success"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type");if("checkbox"===e||"radio"===e){var o=t.element.parentElement;n(t.iconElement,{"fv-plugins-icon-check":!0}),"LABEL"===o.tagName&&o.parentElement.insertBefore(t.iconElement,o.nextSibling)}},e}(o.Framework);t.Pure=c}));
