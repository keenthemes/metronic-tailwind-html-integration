/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-case
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").utils.removeUndefined;exports.stringCase=function(){return{validate:function(a){if(""===a.value)return{valid:!0};var r=Object.assign({},{case:"lower"},e(a.options)),s=(r.case||"lower").toLowerCase();return{message:r.message||(a.l10n?"upper"===s?a.l10n.stringCase.upper:a.l10n.stringCase.default:r.message),valid:"upper"===s?a.value===a.value.toUpperCase():a.value===a.value.toLowerCase()}}}};
