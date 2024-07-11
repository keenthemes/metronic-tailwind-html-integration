/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-dependency
 * @version 2.4.0
 */

import{Plugin as t}from"../core/index.min.js";var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},e(t,r)};var r=function(t){function r(e){var r=t.call(this,e)||this;return r.opts=e||{},r.triggerExecutedHandler=r.onTriggerExecuted.bind(r),r}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}(r,t),r.prototype.install=function(){this.core.on("plugins.trigger.executed",this.triggerExecutedHandler)},r.prototype.uninstall=function(){this.core.off("plugins.trigger.executed",this.triggerExecutedHandler)},r.prototype.onTriggerExecuted=function(t){if(this.isEnabled&&this.opts[t.field])for(var e=0,r=this.opts[t.field].split(" ");e<r.length;e++){var o=r[e].trim();this.opts[o]&&this.core.revalidateField(o)}},r}(t);export{r as Dependency};
