/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-typing-animation
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,e){"use strict";var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)};var o=function(t){function e(e){var n=t.call(this,e)||this;return n.opts=Object.assign({},{autoPlay:!0},e),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.install=function(){this.fields=Object.keys(this.core.getFields()),this.opts.autoPlay&&this.play()},e.prototype.play=function(){return this.animate(0)},e.prototype.animate=function(t){var e=this;if(t>=this.fields.length)return Promise.resolve(t);var n=this.fields[t],o=this.core.getElements(n)[0],r=o.getAttribute("type"),i=this.opts.data[n];return"checkbox"===r||"radio"===r?(o.checked=!0,o.setAttribute("checked","true"),this.core.revalidateField(n).then((function(n){return e.animate(t+1)}))):i?new Promise((function(r){return new Typed(o,{attr:"value",autoInsertCss:!0,bindInputFocusEvents:!0,onComplete:function(){r(t+1)},onStringTyped:function(t,r){o.value=i[t],e.core.revalidateField(n)},strings:i,typeSpeed:100})})).then((function(t){return e.animate(t)})):this.animate(t+1)},e}(e.Plugin);t.TypingAnimation=o}));
