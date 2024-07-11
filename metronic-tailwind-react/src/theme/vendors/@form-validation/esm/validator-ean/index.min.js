/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ean
 * @version 2.4.0
 */

function a(){return{validate:function(a){if(""===a.value)return{valid:!0};if(!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(a.value))return{valid:!1};for(var t=a.value.length,e=0,r=8===t?[3,1]:[1,3],n=0;n<t-1;n++)e+=parseInt(a.value.charAt(n),10)*r[n%2];return{valid:"".concat(e=(10-e%10)%10)===a.value.charAt(t-1)}}}}export{a as ean};
