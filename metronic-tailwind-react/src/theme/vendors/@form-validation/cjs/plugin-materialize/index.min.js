/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-materialize
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),t=require("@form-validation/plugin-framework"),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)};var o=e.utils.classSet,n=function(e){function t(t){return e.call(this,Object.assign({},{eleInvalidClass:"validate invalid",eleValidClass:"validate valid",formClass:"fv-plugins-materialize",messageClass:"helper-text",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)col(\s+)s[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-valid-row"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type"),r=e.element.parentElement;"checkbox"!==t&&"radio"!==t||(r.parentElement.insertBefore(e.iconElement,r.nextSibling),o(e.iconElement,{"fv-plugins-icon-check":!0}))},t}(t.Framework);exports.Materialize=n;
