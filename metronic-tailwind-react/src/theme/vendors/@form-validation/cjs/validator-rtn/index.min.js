/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-rtn
 * @version 2.4.0
 */

"use strict";exports.rtn=function(){return{validate:function(t){if(""===t.value)return{valid:!0};if(!/^\d{9}$/.test(t.value))return{valid:!1};for(var r=0,a=0;a<t.value.length;a+=3)r+=3*parseInt(t.value.charAt(a),10)+7*parseInt(t.value.charAt(a+1),10)+parseInt(t.value.charAt(a+2),10);return{valid:0!==r&&r%10==0}}}};
