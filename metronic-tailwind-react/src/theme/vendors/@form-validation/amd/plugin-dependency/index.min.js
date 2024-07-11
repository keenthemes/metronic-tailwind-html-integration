/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-dependency
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(t,e){"use strict";var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)};var n=function(t){function e(e){var r=t.call(this,e)||this;return r.opts=e||{},r.triggerExecutedHandler=r.onTriggerExecuted.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.install=function(){this.core.on("plugins.trigger.executed",this.triggerExecutedHandler)},e.prototype.uninstall=function(){this.core.off("plugins.trigger.executed",this.triggerExecutedHandler)},e.prototype.onTriggerExecuted=function(t){if(this.isEnabled&&this.opts[t.field])for(var e=0,r=this.opts[t.field].split(" ");e<r.length;e++){var n=r[e].trim();this.opts[n]&&this.core.revalidateField(n)}},e}(e.Plugin);t.Dependency=n}));
