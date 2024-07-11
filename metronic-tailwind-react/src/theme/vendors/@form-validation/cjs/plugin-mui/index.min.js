/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-mui
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),e=require("@form-validation/plugin-framework"),o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)};var r=t.utils.classSet,n=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-mui",messageClass:"fv-help-block",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)mui-col-(xs|md|lg|xl)(-offset)*-[0-9]+(.*)$/,rowSelector:".mui-row",rowValidClass:"fv-valid-row"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type"),o=t.element.parentElement;"checkbox"!==e&&"radio"!==e||(o.parentElement.insertBefore(t.iconElement,o.nextSibling),r(t.iconElement,{"fv-plugins-icon-check":!0}))},e}(e.Framework);exports.Mui=n;
