/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-less-than
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.lessThan=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.utils.format,i=e.utils.removeUndefined;return function(){return{validate:function(e){if(""===e.value)return{valid:!0};var o=Object.assign({},{inclusive:!0,message:""},i(e.options)),n=parseFloat("".concat(o.max).replace(",","."));return o.inclusive?{message:a(e.l10n?o.message||e.l10n.lessThan.default:o.message,"".concat(n)),valid:parseFloat(e.value)<=n}:{message:a(e.l10n?o.message||e.l10n.lessThan.notInclusive:o.message,"".concat(n)),valid:parseFloat(e.value)<n}}}}}));
