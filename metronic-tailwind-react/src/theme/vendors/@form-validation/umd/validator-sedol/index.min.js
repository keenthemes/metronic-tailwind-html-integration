/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-sedol
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.sedol=e())}(this,(function(){"use strict";return function(){return{validate:function(t){if(""===t.value)return{valid:!0};var e=t.value.toUpperCase();if(!/^[0-9A-Z]{7}$/.test(e))return{valid:!1};for(var a=[1,3,1,7,3,9,1],i=e.length,o=0,n=0;n<i-1;n++)o+=a[n]*parseInt(e.charAt(n),36);return{valid:"".concat(o=(10-o%10)%10)===e.charAt(i-1)}}}}}));
