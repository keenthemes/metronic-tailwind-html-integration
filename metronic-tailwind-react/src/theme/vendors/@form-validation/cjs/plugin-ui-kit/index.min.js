/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-ui-kit
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),e=require("@form-validation/plugin-framework"),r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)};var o=t.utils.classSet,n=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-uikit",messageClass:"uk-text-danger",rowInvalidClass:"uk-form-danger",rowPattern:/^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,rowSelector:".uk-margin",rowValidClass:"uk-form-success"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type");if("checkbox"===e||"radio"===e){var r=t.element.parentElement;o(t.iconElement,{"fv-plugins-icon-check":!0}),r.parentElement.insertBefore(t.iconElement,r.nextSibling)}},e}(e.Framework);exports.UiKit=n;
