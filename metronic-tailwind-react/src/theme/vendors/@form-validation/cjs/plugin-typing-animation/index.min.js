/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-typing-animation
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};var n=function(t){function n(e){var n=t.call(this,e)||this;return n.opts=Object.assign({},{autoPlay:!0},e),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}(n,t),n.prototype.install=function(){this.fields=Object.keys(this.core.getFields()),this.opts.autoPlay&&this.play()},n.prototype.play=function(){return this.animate(0)},n.prototype.animate=function(t){var e=this;if(t>=this.fields.length)return Promise.resolve(t);var n=this.fields[t],r=this.core.getElements(n)[0],o=r.getAttribute("type"),i=this.opts.data[n];return"checkbox"===o||"radio"===o?(r.checked=!0,r.setAttribute("checked","true"),this.core.revalidateField(n).then((function(n){return e.animate(t+1)}))):i?new Promise((function(o){return new Typed(r,{attr:"value",autoInsertCss:!0,bindInputFocusEvents:!0,onComplete:function(){o(t+1)},onStringTyped:function(t,o){r.value=i[t],e.core.revalidateField(n)},strings:i,typeSpeed:100})})).then((function(t){return e.animate(t)})):this.animate(t+1)},n}(t.Plugin);exports.TypingAnimation=n;
