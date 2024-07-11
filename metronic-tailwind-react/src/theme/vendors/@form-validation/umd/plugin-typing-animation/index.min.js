/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-typing-animation
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.TypingAnimation=e(t.FormValidation))}(this,(function(t){"use strict";var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};return function(t){function n(e){var n=t.call(this,e)||this;return n.opts=Object.assign({},{autoPlay:!0},e),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(n,t),n.prototype.install=function(){this.fields=Object.keys(this.core.getFields()),this.opts.autoPlay&&this.play()},n.prototype.play=function(){return this.animate(0)},n.prototype.animate=function(t){var e=this;if(t>=this.fields.length)return Promise.resolve(t);var n=this.fields[t],o=this.core.getElements(n)[0],i=o.getAttribute("type"),r=this.opts.data[n];return"checkbox"===i||"radio"===i?(o.checked=!0,o.setAttribute("checked","true"),this.core.revalidateField(n).then((function(n){return e.animate(t+1)}))):r?new Promise((function(i){return new Typed(o,{attr:"value",autoInsertCss:!0,bindInputFocusEvents:!0,onComplete:function(){i(t+1)},onStringTyped:function(t,i){o.value=r[t],e.core.revalidateField(n)},strings:r,typeSpeed:100})})).then((function(t){return e.animate(t)})):this.animate(t+1)},n}(t.Plugin)}));
