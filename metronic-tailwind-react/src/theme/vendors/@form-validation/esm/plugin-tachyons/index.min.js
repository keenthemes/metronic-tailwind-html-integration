/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-tachyons
 * @version 2.4.0
 */

import{utils as t}from"../core/index.min.js";import{Framework as e}from"../plugin-framework/index.min.js";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)};var o=t.classSet,r=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-tachyons",messageClass:"small",rowInvalidClass:"red",rowPattern:/^(.*)fl(.*)$/,rowSelector:".fl",rowValidClass:"green"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type"),n=t.element.parentElement;"checkbox"!==e&&"radio"!==e||(n.parentElement.insertBefore(t.iconElement,n.nextSibling),o(t.iconElement,{"fv-plugins-icon-check":!0}))},e}(e);export{r as Tachyons};
