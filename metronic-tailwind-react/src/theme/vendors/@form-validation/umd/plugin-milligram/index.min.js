/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-milligram
 * @version 2.4.0
 */

!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],t):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.plugins=o.FormValidation.plugins||{},o.FormValidation.plugins.Milligram=t(o.FormValidation,o.FormValidation.plugins))}(this,(function(o,t){"use strict";var e=function(o,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])},e(o,t)};var n=o.utils.classSet;return function(o){function t(t){return o.call(this,Object.assign({},{formClass:"fv-plugins-milligram",messageClass:"fv-help-block",rowInvalidClass:"fv-invalid-row",rowPattern:/^(.*)column(-offset)*-[0-9]+(.*)$/,rowSelector:".row",rowValidClass:"fv-valid-row"},t))||this}return function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,o),t.prototype.onIconPlaced=function(o){var t=o.element.getAttribute("type"),e=o.element.parentElement;"checkbox"!==t&&"radio"!==t||(e.parentElement.insertBefore(o.iconElement,e.nextSibling),n(o.iconElement,{"fv-plugins-icon-check":!0}))},t}(t.Framework)}));
