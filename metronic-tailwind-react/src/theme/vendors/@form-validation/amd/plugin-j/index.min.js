/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-j
 * @version 2.4.0
 */

define(["jquery","@form-validation/bundle/popular"],(function(t,i){"use strict";const o=t.fn.jquery.split(" ")[0].split(".");if(+o[0]<2&&+o[1]<9||1==+o[0]&&9==+o[1]&&+o[2]<1)throw new Error("The J plugin requires jQuery version 1.9.1 or higher");t.fn.formValidation=function(o){const r=arguments;return this.each((function(){const n=t(this);let a=n.data("formValidation");const e="object"==typeof o&&o;a||(a=i.formValidation(this,e),n.data("formValidation",a).data("FormValidation",a)),"string"==typeof o&&a[o].apply(a,Array.prototype.slice.call(r,1))}))}}));
