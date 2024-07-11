/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-l10n
 * @version 2.4.0
 */

import{Plugin as t}from"../core/index.min.js";var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},e(t,r)};var r=function(t){function r(e){var r=t.call(this,e)||this;return r.messageFilter=r.getMessage.bind(r),r}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}(r,t),r.prototype.install=function(){this.core.registerFilter("validator-message",this.messageFilter)},r.prototype.uninstall=function(){this.core.deregisterFilter("validator-message",this.messageFilter)},r.prototype.getMessage=function(t,e,r){if(!this.isEnabled)return"";if(this.opts[e]&&this.opts[e][r]){var o=this.opts[e][r],n=typeof o;if("object"===n&&o[t])return o[t];if("function"===n){var i=o.apply(this,[e,r]);return i&&i[t]?i[t]:""}}return""},r}(t);export{r as L10n};
