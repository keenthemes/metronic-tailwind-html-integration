/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-sedol
 * @version 2.4.0
 */

"use strict";exports.sedol=function(){return{validate:function(t){if(""===t.value)return{valid:!0};var r=t.value.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(r))return{valid:!1};for(var e=[1,3,1,7,3,9,1],a=r.length,n=0,i=0;i<a-1;i++)n+=e[i]*parseInt(r.charAt(i),36);return{valid:"".concat(n=(10-n%10)%10)===r.charAt(a-1)}}}};
