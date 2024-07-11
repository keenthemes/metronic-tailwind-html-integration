/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-step
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.step=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.utils.format;return function(){var e=function(e,a){if(0===a)return 1;var t="".concat(e).split("."),i="".concat(a).split("."),o=(1===t.length?0:t[1].length)+(1===i.length?0:i[1].length);return function(e,a){var t,i=Math.pow(10,a),o=e*i;switch(!0){case 0===o:t=0;break;case o>0:t=1;break;case o<0:t=-1}return o%1==.5*t?(Math.floor(o)+(t>0?1:0))/i:Math.round(o)/i}(e-a*Math.floor(e/a),o)};return{validate:function(t){if(""===t.value)return{valid:!0};var i=parseFloat(t.value);if(isNaN(i)||!isFinite(i))return{valid:!1};var o=Object.assign({},{baseValue:0,message:"",step:1},t.options),n=e(i-o.baseValue,o.step);return{message:a(t.l10n?o.message||t.l10n.step.default:o.message,"".concat(o.step)),valid:0===n||n===o.step}}}}}));
