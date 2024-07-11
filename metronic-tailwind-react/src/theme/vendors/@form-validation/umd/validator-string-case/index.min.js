/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-case
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.stringCase=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.utils.removeUndefined;return function(){return{validate:function(e){if(""===e.value)return{valid:!0};var o=Object.assign({},{case:"lower"},a(e.options)),i=(o.case||"lower").toLowerCase();return{message:o.message||(e.l10n?"upper"===i?e.l10n.stringCase.upper:e.l10n.stringCase.default:o.message),valid:"upper"===i?e.value===e.value.toUpperCase():e.value===e.value.toLowerCase()}}}}}));
