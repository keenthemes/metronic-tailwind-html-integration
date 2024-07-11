/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-rtn
 * @version 2.4.0
 */

function a(){return{validate:function(a){if(""===a.value)return{valid:!0};if(!/^\d{9}$/.test(a.value))return{valid:!1};for(var e=0,r=0;r<a.value.length;r+=3)e+=3*parseInt(a.value.charAt(r),10)+7*parseInt(a.value.charAt(r+1),10)+parseInt(a.value.charAt(r+2),10);return{valid:0!==e&&e%10==0}}}}export{a as rtn};
