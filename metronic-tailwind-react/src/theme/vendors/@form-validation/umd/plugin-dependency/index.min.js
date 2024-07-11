/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-dependency
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.plugins=t.FormValidation.plugins||{},t.FormValidation.plugins.Dependency=e(t.FormValidation))}(this,(function(t){"use strict";var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},e(t,o)};return function(t){function o(e){var o=t.call(this,e)||this;return o.opts=e||{},o.triggerExecutedHandler=o.onTriggerExecuted.bind(o),o}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}(o,t),o.prototype.install=function(){this.core.on("plugins.trigger.executed",this.triggerExecutedHandler)},o.prototype.uninstall=function(){this.core.off("plugins.trigger.executed",this.triggerExecutedHandler)},o.prototype.onTriggerExecuted=function(t){if(this.isEnabled&&this.opts[t.field])for(var e=0,o=this.opts[t.field].split(" ");e<o.length;e++){var i=o[e].trim();this.opts[i]&&this.core.revalidateField(i)}},o}(t.Plugin)}));
