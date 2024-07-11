/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-default-submit
 * @version 2.4.0
 */

!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.DefaultSubmit=o(t.FormValidation))}(this,(function(t){"use strict";var o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},o(t,n)};return function(t){function n(){var o=t.call(this,{})||this;return o.onValidHandler=o.onFormValid.bind(o),o}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}(n,t),n.prototype.install=function(){if(this.core.getFormElement().querySelectorAll('[type="submit"][name="submit"]').length)throw new Error("Do not use `submit` for the name attribute of submit button");this.core.on("core.form.valid",this.onValidHandler)},n.prototype.uninstall=function(){this.core.off("core.form.valid",this.onValidHandler)},n.prototype.onFormValid=function(){var t=this.core.getFormElement();this.isEnabled&&t instanceof HTMLFormElement&&t.submit()},n}(t.Plugin)}));
