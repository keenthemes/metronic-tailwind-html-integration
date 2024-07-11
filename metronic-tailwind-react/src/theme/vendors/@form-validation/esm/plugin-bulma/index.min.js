/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bulma
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";import{Framework as t}from"../plugin-framework/index.min.js";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var r=e.classSet,o=function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bulma",messageClass:"help is-danger",rowInvalidClass:"fv-has-error",rowPattern:/^.*field.*$/,rowSelector:".field",rowValidClass:"fv-has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.onIconPlaced=function(e){r(e.iconElement,{"fv-plugins-icon":!1});var t=document.createElement("span");t.setAttribute("class","icon is-small is-right"),e.iconElement.parentNode.insertBefore(t,e.iconElement),t.appendChild(e.iconElement);var n=e.element.getAttribute("type"),o=e.element.parentElement;"checkbox"===n||"radio"===n?(r(o.parentElement,{"has-icons-right":!0}),r(t,{"fv-plugins-icon-check":!0}),o.parentElement.insertBefore(t,o.nextSibling)):r(o,{"has-icons-right":!0})},t}(t);export{o as Bulma};
