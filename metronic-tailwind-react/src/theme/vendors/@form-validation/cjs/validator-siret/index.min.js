/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siret
 * @version 2.4.0
 */

"use strict";exports.siret=function(){return{validate:function(r){if(""===r.value)return{valid:!0};for(var t,e=r.value.length,a=0,n=0;n<e;n++)t=parseInt(r.value.charAt(n),10),n%2==0&&(t*=2)>9&&(t-=9),a+=t;return{valid:a%10==0}}}};
