/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-imo
 * @version 2.4.0
 */

function e(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^IMO \d{7}$/i.test(e.value))return{valid:!1};for(var r=e.value.replace(/^.*(\d{7})$/,"$1"),a=0,t=6;t>=1;t--)a+=parseInt(r.slice(6-t,-t),10)*(t+1);return{valid:a%10===parseInt(r.charAt(6),10)}}}}export{e as imo};
