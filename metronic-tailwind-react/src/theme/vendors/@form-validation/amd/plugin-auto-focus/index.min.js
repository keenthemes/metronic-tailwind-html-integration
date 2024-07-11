/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-auto-focus
 * @version 2.4.0
 */

define(["exports","@form-validation/core","@form-validation/plugin-field-status"],(function(t,o,n){"use strict";var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])},e(t,o)};var i=function(t){function o(o){var n=t.call(this,o)||this;return n.opts=Object.assign({},{onPrefocus:function(){}},o),n.invalidFormHandler=n.onFormInvalid.bind(n),n}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}(o,t),o.prototype.install=function(){this.core.on("core.form.invalid",this.invalidFormHandler).registerPlugin(o.FIELD_STATUS_PLUGIN,new n.FieldStatus)},o.prototype.uninstall=function(){this.core.off("core.form.invalid",this.invalidFormHandler).deregisterPlugin(o.FIELD_STATUS_PLUGIN)},o.prototype.onEnabled=function(){this.core.enablePlugin(o.FIELD_STATUS_PLUGIN)},o.prototype.onDisabled=function(){this.core.disablePlugin(o.FIELD_STATUS_PLUGIN)},o.prototype.onFormInvalid=function(){if(this.isEnabled){var t=this.core.getPlugin(o.FIELD_STATUS_PLUGIN).getStatuses(),n=Object.keys(this.core.getFields()).filter((function(o){return"Invalid"===t.get(o)}));if(n.length>0){var e=n[0],i=this.core.getElements(e);if(i.length>0){var r=i[0],s={firstElement:r,field:e};this.core.emit("plugins.autofocus.prefocus",s),this.opts.onPrefocus(s),r.focus()}}}},o.FIELD_STATUS_PLUGIN="___autoFocusFieldStatus",o}(o.Plugin);t.AutoFocus=i}));
