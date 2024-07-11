/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-transformer
 * @version 2.4.0
 */

import{Plugin as t}from"../core/index.min.js";var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},e(t,o)};var o=function(t){function o(e){var o=t.call(this,e)||this;return o.valueFilter=o.getElementValue.bind(o),o}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}(o,t),o.prototype.install=function(){this.core.registerFilter("field-value",this.valueFilter)},o.prototype.uninstall=function(){this.core.deregisterFilter("field-value",this.valueFilter)},o.prototype.getElementValue=function(t,e,o,r){return this.isEnabled&&this.opts[e]&&this.opts[e][r]&&"function"==typeof this.opts[e][r]?this.opts[e][r].apply(this,[e,o,r]):t},o}(t);export{o as Transformer};
