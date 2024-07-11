/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uuid
 * @version 2.4.0
 */

!function(i,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.uuid=e(i.FormValidation))}(this,(function(i){"use strict";var e=i.utils.format,o=i.utils.removeUndefined;return function(){return{validate:function(i){if(""===i.value)return{valid:!0};var a=Object.assign({},{message:""},o(i.options)),n={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},t=a.version?"".concat(a.version):"all";return{message:a.version?e(i.l10n?a.message||i.l10n.uuid.version:a.message,a.version):i.l10n?i.l10n.uuid.default:a.message,valid:null===n[t]||n[t].test(i.value)}}}}}));
