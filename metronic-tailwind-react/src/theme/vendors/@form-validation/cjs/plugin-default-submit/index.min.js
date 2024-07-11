/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-default-submit
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),o=function(t,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},o(t,r)};var r=function(t){function r(){var o=t.call(this,{})||this;return o.onValidHandler=o.onFormValid.bind(o),o}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}(r,t),r.prototype.install=function(){if(this.core.getFormElement().querySelectorAll('[type="submit"][name="submit"]').length)throw new Error("Do not use `submit` for the name attribute of submit button");this.core.on("core.form.valid",this.onValidHandler)},r.prototype.uninstall=function(){this.core.off("core.form.valid",this.onValidHandler)},r.prototype.onFormValid=function(){var t=this.core.getFormElement();this.isEnabled&&t instanceof HTMLFormElement&&t.submit()},r}(t.Plugin);exports.DefaultSubmit=r;
