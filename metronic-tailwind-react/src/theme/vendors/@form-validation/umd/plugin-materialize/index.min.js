/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-materialize
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.plugins=e.FormValidation.plugins||{},e.FormValidation.plugins.Materialize=t(e.FormValidation,e.FormValidation.plugins))}(this,(function(e,t){"use strict";var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},o(e,t)};var n=e.utils.classSet;return function(e){function t(t){return e.call(this,Object.assign({},{eleInvalidClass:"validate invalid",eleValidClass:"validate valid",formClass:"fv-plugins-materialize",messageClass:"helper-text",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)col(\s+)s[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-valid-row"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onIconPlaced=function(e){var t=e.element.getAttribute("type"),o=e.element.parentElement;"checkbox"!==t&&"radio"!==t||(o.parentElement.insertBefore(e.iconElement,o.nextSibling),n(e.iconElement,{"fv-plugins-icon-check":!0}))},t}(t.Framework)}));
