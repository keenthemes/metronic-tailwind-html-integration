/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-milligram
 * @version 2.4.0
 */

import{utils as t}from"../core/index.min.js";import{Framework as e}from"../plugin-framework/index.min.js";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)};var n=t.classSet,r=function(t){function e(e){return t.call(this,Object.assign({},{formClass:"fv-plugins-milligram",messageClass:"fv-help-block",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)column(-offset)*-[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-valid-row"},e))||this}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.onIconPlaced=function(t){var e=t.element.getAttribute("type"),o=t.element.parentElement;"checkbox"!==e&&"radio"!==e||(o.parentElement.insertBefore(t.iconElement,o.nextSibling),n(t.iconElement,{"fv-plugins-icon-check":!0}))},e}(e);export{r as Milligram};
