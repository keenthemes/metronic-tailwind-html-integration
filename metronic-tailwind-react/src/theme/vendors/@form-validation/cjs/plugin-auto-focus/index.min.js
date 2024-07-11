/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-auto-focus
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core"),o=require("@form-validation/plugin-field-status"),n=function(t,o){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},n(t,o)};var e=function(t){function e(o){var n=t.call(this,o)||this;return n.opts=Object.assign({},{onPrefocus:function(){}},o),n.invalidFormHandler=n.onFormInvalid.bind(n),n}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}(e,t),e.prototype.install=function(){this.core.on("core.form.invalid",this.invalidFormHandler).registerPlugin(e.FIELD_STATUS_PLUGIN,new o.FieldStatus)},e.prototype.uninstall=function(){this.core.off("core.form.invalid",this.invalidFormHandler).deregisterPlugin(e.FIELD_STATUS_PLUGIN)},e.prototype.onEnabled=function(){this.core.enablePlugin(e.FIELD_STATUS_PLUGIN)},e.prototype.onDisabled=function(){this.core.disablePlugin(e.FIELD_STATUS_PLUGIN)},e.prototype.onFormInvalid=function(){if(this.isEnabled){var t=this.core.getPlugin(e.FIELD_STATUS_PLUGIN).getStatuses(),o=Object.keys(this.core.getFields()).filter((function(o){return"Invalid"===t.get(o)}));if(o.length>0){var n=o[0],i=this.core.getElements(n);if(i.length>0){var r=i[0],s={firstElement:r,field:n};this.core.emit("plugins.autofocus.prefocus",s),this.opts.onPrefocus(s),r.focus()}}}},e.FIELD_STATUS_PLUGIN="___autoFocusFieldStatus",e}(t.Plugin);exports.AutoFocus=e;
