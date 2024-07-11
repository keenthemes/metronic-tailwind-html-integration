/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-imei
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").algorithms.luhn;exports.imei=function(){return{validate:function(t){if(""===t.value)return{valid:!0};switch(!0){case/^\d{15}$/.test(t.value):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(t.value):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(t.value):return{valid:e(t.value.replace(/[^0-9]/g,""))};case/^\d{14}$/.test(t.value):case/^\d{16}$/.test(t.value):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(t.value):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(t.value):return{valid:!0};default:return{valid:!1}}}}};
