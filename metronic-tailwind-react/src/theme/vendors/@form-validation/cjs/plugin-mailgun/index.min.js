/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-mailgun
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),t=require("@form-validation/plugin-alias"),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},i(e,t)};var s=e.utils.removeUndefined,n=function(e){function n(t){var i=e.call(this,t)||this;return i.opts=Object.assign({},{suggestion:!1},s(t)),i.messageDisplayedHandler=i.onMessageDisplayed.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}(n,e),n.prototype.install=function(){this.opts.suggestion&&this.core.on("plugins.message.displayed",this.messageDisplayedHandler);this.core.registerPlugin(n.ALIAS_PLUGIN,new t.Alias({mailgun:"remote"})).addField(this.opts.field,{validators:{mailgun:{crossDomain:!0,data:{api_key:this.opts.apiKey},headers:{"Content-Type":"application/json"},message:this.opts.message,name:"address",url:"https://api.mailgun.net/v3/address/validate",validKey:"is_valid"}}})},n.prototype.uninstall=function(){this.opts.suggestion&&this.core.off("plugins.message.displayed",this.messageDisplayedHandler),this.core.deregisterPlugin(n.ALIAS_PLUGIN),this.core.removeField(this.opts.field)},n.prototype.onEnabled=function(){this.core.enableValidator(this.opts.field,"mailgun").enablePlugin(n.ALIAS_PLUGIN)},n.prototype.onDisabled=function(){this.core.disableValidator(this.opts.field,"mailgun").disablePlugin(n.ALIAS_PLUGIN)},n.prototype.onMessageDisplayed=function(e){this.isEnabled&&e.field===this.opts.field&&"mailgun"===e.validator&&e.meta&&e.meta.did_you_mean&&(e.messageElement.innerHTML="Did you mean ".concat(e.meta.did_you_mean,"?"))},n.ALIAS_PLUGIN="___mailgunAlias",n}(e.Plugin);exports.Mailgun=n;
