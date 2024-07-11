/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-l10n
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,e){"use strict";var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)};var o=function(t){function e(e){var r=t.call(this,e)||this;return r.messageFilter=r.getMessage.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.install=function(){this.core.registerFilter("validator-message",this.messageFilter)},e.prototype.uninstall=function(){this.core.deregisterFilter("validator-message",this.messageFilter)},e.prototype.getMessage=function(t,e,r){if(!this.isEnabled)return"";if(this.opts[e]&&this.opts[e][r]){var o=this.opts[e][r],n=typeof o;if("object"===n&&o[t])return o[t];if("function"===n){var i=o.apply(this,[e,r]);return i&&i[t]?i[t]:""}}return""},e}(e.Plugin);t.L10n=o}));
