/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-shoelace
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(t,e,n){"use strict";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)};var r=e.utils.classSet,i=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-shoelace",messageClass:"fv-help-block",rowInvalidClass:"input-invalid",rowPattern:/^(.*)(col|offset)-[0-9]+(.*)$/,rowSelector:".input-field",rowValidClass:"input-valid"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.parentElement,n=t.element.getAttribute("type");"checkbox"!==n&&"radio"!==n||(r(t.iconElement,{"fv-plugins-icon-check":!0}),"LABEL"===e.tagName&&e.parentElement.insertBefore(t.iconElement,e.nextSibling))},e}(n.Framework);t.Shoelace=i}));
