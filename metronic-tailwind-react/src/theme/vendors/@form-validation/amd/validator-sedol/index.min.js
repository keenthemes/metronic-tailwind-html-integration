/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-sedol
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.sedol=function(){return{validate:function(t){if(""===t.value)return{valid:!0};var e=t.value.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(e))return{valid:!1};for(var r=[1,3,1,7,3,9,1],a=e.length,n=0,i=0;i<a-1;i++)n+=r[i]*parseInt(e.charAt(i),36);return{valid:"".concat(n=(10-n%10)%10)===e.charAt(a-1)}}}}}));
