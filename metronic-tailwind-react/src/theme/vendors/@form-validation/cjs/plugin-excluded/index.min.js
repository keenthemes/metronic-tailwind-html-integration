/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-excluded
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};var n=t.utils.removeUndefined,i=function(t){function i(e){var r=t.call(this,e)||this;return r.opts=Object.assign({},{excluded:i.defaultIgnore},n(e)),r.ignoreValidationFilter=r.ignoreValidation.bind(r),r}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}(i,t),i.defaultIgnore=function(t,e,n){var i=!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),r=e.getAttribute("disabled");return""===r||"disabled"===r||"hidden"===e.getAttribute("type")||!i},i.prototype.install=function(){this.core.registerFilter("element-ignored",this.ignoreValidationFilter)},i.prototype.uninstall=function(){this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter)},i.prototype.ignoreValidation=function(t,e,n){return!!this.isEnabled&&this.opts.excluded.apply(this,[t,e,n])},i}(t.Plugin);exports.Excluded=i;
