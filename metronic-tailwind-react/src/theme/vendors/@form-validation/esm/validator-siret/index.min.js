/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siret
 * @version 2.4.0
 */

function r(){return{validate:function(r){if(""===r.value)return{valid:!0};for(var a,e=r.value.length,t=0,n=0;n<e;n++)a=parseInt(r.value.charAt(n),10),n%2==0&&(a*=2)>9&&(a-=9),t+=a;return{valid:t%10==0}}}}export{r as siret};
