/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siret
 * @version 2.4.0
 */

define(["exports"],(function(e){"use strict";e.siret=function(){return{validate:function(e){if(""===e.value)return{valid:!0};for(var t,r=e.value.length,n=0,a=0;a<r;a++)t=parseInt(e.value.charAt(a),10),a%2==0&&(t*=2)>9&&(t-=9),n+=t;return{valid:n%10==0}}}}}));
