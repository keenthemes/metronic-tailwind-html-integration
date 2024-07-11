/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ean
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.ean=t())}(this,(function(){"use strict";return function(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(e.value))return{valid:!1};for(var t=e.value.length,a=0,i=8===t?[3,1]:[1,3],n=0;n<t-1;n++)a+=parseInt(e.value.charAt(n),10)*i[n%2];return{valid:"".concat(a=(10-a%10)%10)===e.value.charAt(t-1)}}}}}));
