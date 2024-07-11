/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-step
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,t){"use strict";var a=t.utils.format;e.step=function(){var e=function(e,t){if(0===t)return 1;var a="".concat(e).split("."),n="".concat(t).split("."),s=(1===a.length?0:a[1].length)+(1===n.length?0:n[1].length);return function(e,t){var a,n=Math.pow(10,t),s=e*n;switch(!0){case 0===s:a=0;break;case s>0:a=1;break;case s<0:a=-1}return s%1==.5*a?(Math.floor(s)+(a>0?1:0))/n:Math.round(s)/n}(e-t*Math.floor(e/t),s)};return{validate:function(t){if(""===t.value)return{valid:!0};var n=parseFloat(t.value);if(isNaN(n)||!isFinite(n))return{valid:!1};var s=Object.assign({},{baseValue:0,message:"",step:1},t.options),r=e(n-s.baseValue,s.step);return{message:a(t.l10n?s.message||t.l10n.step.default:s.message,"".concat(s.step)),valid:0===r||r===s.step}}}}}));
