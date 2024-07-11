/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-j
 * @version 2.4.0
 */

import t from"jquery";import{formValidation as o}from"../bundle/popular.min.js";const r=t.fn.jquery.split(" ")[0].split(".");if(+r[0]<2&&+r[1]<9||1==+r[0]&&9==+r[1]&&+r[2]<1)throw new Error("The J plugin requires jQuery version 1.9.1 or higher");t.fn.formValidation=function(r){const i=arguments;return this.each((function(){const n=t(this);let a=n.data("formValidation");a||(a=o(this,"object"==typeof r&&r),n.data("formValidation",a).data("FormValidation",a)),"string"==typeof r&&a[r].apply(a,Array.prototype.slice.call(i,1))}))};
