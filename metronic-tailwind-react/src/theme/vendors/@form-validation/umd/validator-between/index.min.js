/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-between
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.between=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.utils.format,n=e.utils.removeUndefined;return function(){var e=function(e){return parseFloat("".concat(e).replace(",","."))};return{validate:function(o){var t=o.value;if(""===t)return{valid:!0};var i=Object.assign({},{inclusive:!0,message:""},n(o.options)),r=e(i.min),l=e(i.max);return i.inclusive?{message:a(o.l10n?i.message||o.l10n.between.default:i.message,["".concat(r),"".concat(l)]),valid:parseFloat(t)>=r&&parseFloat(t)<=l}:{message:a(o.l10n?i.message||o.l10n.between.notInclusive:i.message,["".concat(r),"".concat(l)]),valid:parseFloat(t)>r&&parseFloat(t)<l}}}}}));
