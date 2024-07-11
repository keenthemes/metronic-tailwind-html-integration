/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bulma
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.plugins=e.FormValidation.plugins||{},e.FormValidation.plugins.Bulma=t(e.FormValidation,e.FormValidation.plugins))}(this,(function(e,t){"use strict";var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)};var o=e.utils.classSet;return function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bulma",messageClass:"help is-danger",rowInvalidClass:"fv-has-error",rowPattern:/^.*field.*$/,rowSelector:".field",rowValidClass:"fv-has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.onIconPlaced=function(e){o(e.iconElement,{"fv-plugins-icon":!1});var t=document.createElement("span");t.setAttribute("class","icon is-small is-right"),e.iconElement.parentNode.insertBefore(t,e.iconElement),t.appendChild(e.iconElement);var n=e.element.getAttribute("type"),i=e.element.parentElement;"checkbox"===n||"radio"===n?(o(i.parentElement,{"has-icons-right":!0}),o(t,{"fv-plugins-icon-check":!0}),i.parentElement.insertBefore(t,i.nextSibling)):o(i,{"has-icons-right":!0})},t}(t.Framework)}));
