/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-bootstrap3
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core"),require("@form-validation/plugin-framework")):"function"==typeof define&&define.amd?define(["@form-validation/core","@form-validation/plugin-framework"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.plugins=e.FormValidation.plugins||{},e.FormValidation.plugins.Bootstrap3=t(e.FormValidation,e.FormValidation.plugins))}(this,(function(e,t){"use strict";var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},o(e,t)};var n=e.utils.classSet,r=e.utils.hasClass;return function(e){function t(t){return e.call(this,Object.assign({},{formClass:"fv-plugins-bootstrap3",messageClass:"help-block",rowClasses:"has-feedback",rowInvalidClass:"has-error",rowPattern:/^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},t))||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.onIconPlaced=function(e){n(e.iconElement,{"form-control-feedback":!0});var t=e.element.parentElement;r(t,"input-group")&&t.parentElement.insertBefore(e.iconElement,t.nextSibling);var o=e.element.getAttribute("type");if("checkbox"===o||"radio"===o){var i=t.parentElement;r(t,o)?t.parentElement.insertBefore(e.iconElement,t.nextSibling):r(t.parentElement,o)&&i.parentElement.insertBefore(e.iconElement,i.nextSibling)}},t}(t.Framework)}));
