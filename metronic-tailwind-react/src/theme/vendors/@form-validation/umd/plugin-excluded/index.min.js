/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-excluded
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.Excluded=e(t.FormValidation))}(this,(function(t){"use strict";var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},e(t,i)};var i=t.utils.removeUndefined;return function(t){function o(e){var n=t.call(this,e)||this;return n.opts=Object.assign({},{excluded:o.defaultIgnore},i(e)),n.ignoreValidationFilter=n.ignoreValidation.bind(n),n}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}(o,t),o.defaultIgnore=function(t,e,i){var o=!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),n=e.getAttribute("disabled");return""===n||"disabled"===n||"hidden"===e.getAttribute("type")||!o},o.prototype.install=function(){this.core.registerFilter("element-ignored",this.ignoreValidationFilter)},o.prototype.uninstall=function(){this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter)},o.prototype.ignoreValidation=function(t,e,i){return!!this.isEnabled&&this.opts.excluded.apply(this,[t,e,i])},o}(t.Plugin)}));
