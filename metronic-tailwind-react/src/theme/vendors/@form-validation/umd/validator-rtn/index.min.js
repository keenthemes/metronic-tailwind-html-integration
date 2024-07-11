/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-rtn
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.rtn=e())}(this,(function(){"use strict";return function(){return{validate:function(t){if(""===t.value)return{valid:!0};if(!/^\d{9}$/.test(t.value))return{valid:!1};for(var e=0,a=0;a<t.value.length;a+=3)e+=3*parseInt(t.value.charAt(a),10)+7*parseInt(t.value.charAt(a+1),10)+parseInt(t.value.charAt(a+2),10);return{valid:0!==e&&e%10==0}}}}}));
