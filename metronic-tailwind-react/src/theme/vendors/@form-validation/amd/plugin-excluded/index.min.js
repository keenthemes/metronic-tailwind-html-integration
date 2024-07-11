/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-excluded
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,e){"use strict";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)};var i=e.utils.removeUndefined,o=function(t){function e(n){var o=t.call(this,n)||this;return o.opts=Object.assign({},{excluded:e.defaultIgnore},i(n)),o.ignoreValidationFilter=o.ignoreValidation.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.defaultIgnore=function(t,e,n){var i=!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),o=e.getAttribute("disabled");return""===o||"disabled"===o||"hidden"===e.getAttribute("type")||!i},e.prototype.install=function(){this.core.registerFilter("element-ignored",this.ignoreValidationFilter)},e.prototype.uninstall=function(){this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter)},e.prototype.ignoreValidation=function(t,e,n){return!!this.isEnabled&&this.opts.excluded.apply(this,[t,e,n])},e}(e.Plugin);t.Excluded=o}));
