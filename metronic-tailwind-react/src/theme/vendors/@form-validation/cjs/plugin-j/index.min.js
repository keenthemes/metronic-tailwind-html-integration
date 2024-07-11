/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-j
 * @version 2.4.0
 */

"use strict";var r=require("jquery"),t=require("@form-validation/bundle/popular");const i=r.fn.jquery.split(" ")[0].split(".");if(+i[0]<2&&+i[1]<9||1==+i[0]&&9==+i[1]&&+i[2]<1)throw new Error("The J plugin requires jQuery version 1.9.1 or higher");r.fn.formValidation=function(i){const o=arguments;return this.each((function(){const a=r(this);let e=a.data("formValidation");const n="object"==typeof i&&i;e||(e=t.formValidation(this,n),a.data("formValidation",e).data("FormValidation",e)),"string"==typeof i&&e[i].apply(e,Array.prototype.slice.call(o,1))}))};
