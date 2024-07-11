/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-step
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").utils.format;exports.step=function(){var t=function(e,t){if(0===t)return 1;var a="".concat(e).split("."),r="".concat(t).split("."),s=(1===a.length?0:a[1].length)+(1===r.length?0:r[1].length);return function(e,t){var a,r=Math.pow(10,t),s=e*r;switch(!0){case 0===s:a=0;break;case s>0:a=1;break;case s<0:a=-1}return s%1==.5*a?(Math.floor(s)+(a>0?1:0))/r:Math.round(s)/r}(e-t*Math.floor(e/t),s)};return{validate:function(a){if(""===a.value)return{valid:!0};var r=parseFloat(a.value);if(isNaN(r)||!isFinite(r))return{valid:!1};var s=Object.assign({},{baseValue:0,message:"",step:1},a.options),n=t(r-s.baseValue,s.step);return{message:e(a.l10n?s.message||a.l10n.step.default:s.message,"".concat(s.step)),valid:0===n||n===s.step}}}};
