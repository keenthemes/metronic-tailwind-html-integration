/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-spectre
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(t,e,o){"use strict";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)};var r=e.utils.classSet,s=e.utils.hasClass,c=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-spectre",messageClass:"form-input-hint",rowInvalidClass:"has-error",rowPattern:/^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type"),o=t.element.parentElement;"checkbox"!==e&&"radio"!==e||(r(t.iconElement,{"fv-plugins-icon-check":!0}),s(o,"form-".concat(e))&&o.parentElement.insertBefore(t.iconElement,o.nextSibling))},e}(o.Framework);t.Spectre=c}));
