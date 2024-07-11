/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-imei
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.imei=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.algorithms.luhn;return function(){return{validate:function(e){if(""===e.value)return{valid:!0};switch(!0){case/^\d{15}$/.test(e.value):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(e.value):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(e.value):return{valid:a(e.value.replace(/[^0-9]/g,""))};case/^\d{14}$/.test(e.value):case/^\d{16}$/.test(e.value):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(e.value):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(e.value):return{valid:!0};default:return{valid:!1}}}}}}));
