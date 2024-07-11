/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-sedol
 * @version 2.4.0
 */

function r(){return{validate:function(r){if(""===r.value)return{valid:!0};var t=r.value.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(t))return{valid:!1};for(var a=[1,3,1,7,3,9,1],e=t.length,n=0,i=0;i<e-1;i++)n+=a[i]*parseInt(t.charAt(i),36);return{valid:"".concat(n=(10-n%10)%10)===t.charAt(e-1)}}}}export{r as sedol};
