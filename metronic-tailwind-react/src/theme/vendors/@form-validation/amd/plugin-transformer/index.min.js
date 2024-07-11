/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-transformer
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,e){"use strict";var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)};var r=function(t){function e(e){var o=t.call(this,e)||this;return o.valueFilter=o.getElementValue.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.install=function(){this.core.registerFilter("field-value",this.valueFilter)},e.prototype.uninstall=function(){this.core.deregisterFilter("field-value",this.valueFilter)},e.prototype.getElementValue=function(t,e,o,r){return this.isEnabled&&this.opts[e]&&this.opts[e][r]&&"function"==typeof this.opts[e][r]?this.opts[e][r].apply(this,[e,o,r]):t},e}(e.Plugin);t.Transformer=r}));
