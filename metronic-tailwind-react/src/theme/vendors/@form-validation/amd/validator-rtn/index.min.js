/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-rtn
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.rtn=function(){return{validate:function(t){if(""===t.value)return{valid:!0};if(!/^\d{9}$/.test(t.value))return{valid:!1};for(var e=0,r=0;r<t.value.length;r+=3)e+=3*parseInt(t.value.charAt(r),10)+7*parseInt(t.value.charAt(r+1),10)+parseInt(t.value.charAt(r+2),10);return{valid:0!==e&&e%10==0}}}}}));
