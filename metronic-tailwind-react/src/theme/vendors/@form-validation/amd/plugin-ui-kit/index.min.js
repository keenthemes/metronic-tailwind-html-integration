/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-ui-kit
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-framework"],(function(t,e,n){"use strict";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)};var r=e.utils.classSet,i=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-uikit",messageClass:"uk-text-danger",rowInvalidClass:"uk-form-danger",rowPattern:/^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,rowSelector:".uk-margin",rowValidClass:"uk-form-success"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type");if("checkbox"===e||"radio"===e){var n=t.element.parentElement;r(t.iconElement,{"fv-plugins-icon-check":!0}),n.parentElement.insertBefore(t.iconElement,n.nextSibling)}},e}(n.Framework);t.UiKit=i}));
