/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ean
 * @version 2.4.0
 */

define(["exports"],(function(e){"use strict";e.ean=function(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(e.value))return{valid:!1};for(var t=e.value.length,a=0,n=8===t?[3,1]:[1,3],r=0;r<t-1;r++)a+=parseInt(e.value.charAt(r),10)*n[r%2];return{valid:"".concat(a=(10-a%10)%10)===e.value.charAt(t-1)}}}}}));
