/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-step
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.format;function t(){var e=function(e,a){if(0===a)return 1;var t="".concat(e).split("."),r="".concat(a).split("."),n=(1===t.length?0:t[1].length)+(1===r.length?0:r[1].length);return function(e,a){var t,r=Math.pow(10,a),n=e*r;switch(!0){case 0===n:t=0;break;case n>0:t=1;break;case n<0:t=-1}return n%1==.5*t?(Math.floor(n)+(t>0?1:0))/r:Math.round(n)/r}(e-a*Math.floor(e/a),n)};return{validate:function(t){if(""===t.value)return{valid:!0};var r=parseFloat(t.value);if(isNaN(r)||!isFinite(r))return{valid:!1};var n=Object.assign({},{baseValue:0,message:"",step:1},t.options),s=e(r-n.baseValue,n.step);return{message:a(t.l10n?n.message||t.l10n.step.default:n.message,"".concat(n.step)),valid:0===s||s===n.step}}}}export{t as step};
