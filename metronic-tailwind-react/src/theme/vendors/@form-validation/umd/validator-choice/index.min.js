/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-choice
 * @version 2.4.0
 */

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.choice=o(e.FormValidation))}(this,(function(e){"use strict";var o=e.utils.format;return function(){return{validate:function(e){var n="select"===e.element.tagName.toLowerCase()?e.element.querySelectorAll("option:checked").length:e.elements.filter((function(e){return e.checked})).length,t=e.options.min?"".concat(e.options.min):"",i=e.options.max?"".concat(e.options.max):"",a=e.l10n?e.options.message||e.l10n.choice.default:e.options.message,s=!(t&&n<parseInt(t,10)||i&&n>parseInt(i,10));switch(!0){case!!t&&!!i:a=o(e.l10n?e.l10n.choice.between:e.options.message,[t,i]);break;case!!t:a=o(e.l10n?e.l10n.choice.more:e.options.message,t);break;case!!i:a=o(e.l10n?e.l10n.choice.less:e.options.message,i)}return{message:a,valid:s}}}}}));
