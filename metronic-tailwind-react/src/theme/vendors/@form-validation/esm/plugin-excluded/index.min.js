/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-excluded
 * @version 2.4.0
 */

import{utils as t,Plugin as e}from"../core/index.min.js";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)};var o=t.removeUndefined,i=function(t){function e(n){var i=t.call(this,n)||this;return i.opts=Object.assign({},{excluded:e.defaultIgnore},o(n)),i.ignoreValidationFilter=i.ignoreValidation.bind(i),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.defaultIgnore=function(t,e,n){var o=!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),i=e.getAttribute("disabled");return""===i||"disabled"===i||"hidden"===e.getAttribute("type")||!o},e.prototype.install=function(){this.core.registerFilter("element-ignored",this.ignoreValidationFilter)},e.prototype.uninstall=function(){this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter)},e.prototype.ignoreValidation=function(t,e,n){return!!this.isEnabled&&this.opts.excluded.apply(this,[t,e,n])},e}(e);export{i as Excluded};
