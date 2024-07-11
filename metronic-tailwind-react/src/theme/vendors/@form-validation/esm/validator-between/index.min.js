/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-between
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.format,n=e.removeUndefined;function t(){var e=function(e){return parseFloat("".concat(e).replace(",","."))};return{validate:function(t){var s=t.value;if(""===s)return{valid:!0};var r=Object.assign({},{inclusive:!0,message:""},n(t.options)),o=e(r.min),i=e(r.max);return r.inclusive?{message:a(t.l10n?r.message||t.l10n.between.default:r.message,["".concat(o),"".concat(i)]),valid:parseFloat(s)>=o&&parseFloat(s)<=i}:{message:a(t.l10n?r.message||t.l10n.between.notInclusive:r.message,["".concat(o),"".concat(i)]),valid:parseFloat(s)>o&&parseFloat(s)<i}}}}export{t as between};
