/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ismn
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.ismn=t())}(this,(function(){"use strict";return function(){return{validate:function(e){if(""===e.value)return{meta:null,valid:!0};var t;switch(!0){case/^M\d{9}$/.test(e.value):case/^M-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):t="ISMN10";break;case/^9790\d{9}$/.test(e.value):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):t="ISMN13";break;default:return{meta:null,valid:!1}}var a=e.value;"ISMN10"===t&&(a="9790".concat(a.substr(1)));for(var d=0,i=(a=a.replace(/[^0-9]/gi,"")).length,s=[1,3],l=0;l<i-1;l++)d+=parseInt(a.charAt(l),10)*s[l%2];return{meta:{type:t},valid:"".concat(d=(10-d%10)%10)===a.charAt(i-1)}}}}}));
