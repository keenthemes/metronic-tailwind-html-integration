/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-mailgun
 * @version 2.4.0
 */

import{utils as e,Plugin as t}from"../core/index.min.js";import{Alias as i}from"../plugin-alias/index.min.js";var s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},s(e,t)};var n=e.removeUndefined,o=function(e){function t(t){var i=e.call(this,t)||this;return i.opts=Object.assign({},{suggestion:!1},n(t)),i.messageDisplayedHandler=i.onMessageDisplayed.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.install=function(){this.opts.suggestion&&this.core.on("plugins.message.displayed",this.messageDisplayedHandler);this.core.registerPlugin(t.ALIAS_PLUGIN,new i({mailgun:"remote"})).addField(this.opts.field,{validators:{mailgun:{crossDomain:!0,data:{api_key:this.opts.apiKey},headers:{"Content-Type":"application/json"},message:this.opts.message,name:"address",url:"https://api.mailgun.net/v3/address/validate",validKey:"is_valid"}}})},t.prototype.uninstall=function(){this.opts.suggestion&&this.core.off("plugins.message.displayed",this.messageDisplayedHandler),this.core.deregisterPlugin(t.ALIAS_PLUGIN),this.core.removeField(this.opts.field)},t.prototype.onEnabled=function(){this.core.enableValidator(this.opts.field,"mailgun").enablePlugin(t.ALIAS_PLUGIN)},t.prototype.onDisabled=function(){this.core.disableValidator(this.opts.field,"mailgun").disablePlugin(t.ALIAS_PLUGIN)},t.prototype.onMessageDisplayed=function(e){this.isEnabled&&e.field===this.opts.field&&"mailgun"===e.validator&&e.meta&&e.meta.did_you_mean&&(e.messageElement.innerHTML="Did you mean ".concat(e.meta.did_you_mean,"?"))},t.ALIAS_PLUGIN="___mailgunAlias",t}(t);export{o as Mailgun};
