/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-materialize
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";import{Framework as t}from"../plugin-framework/index.min.js";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var o=e.classSet,r=function(e){function t(t){return e.call(this,Object.assign({},{eleInvalidClass:"validate invalid",eleValidClass:"validate valid",formClass:"fv-plugins-materialize",messageClass:"helper-text",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)col(\s+)s[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-valid-row"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type"),n=e.element.parentElement;"checkbox"!==t&&"radio"!==t||(n.parentElement.insertBefore(e.iconElement,n.nextSibling),o(e.iconElement,{"fv-plugins-icon-check":!0}))},t}(t);export{r as Materialize};
