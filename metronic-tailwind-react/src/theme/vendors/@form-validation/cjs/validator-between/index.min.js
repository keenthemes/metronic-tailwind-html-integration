/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-between
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),a=e.utils.format,n=e.utils.removeUndefined;exports.between=function(){var e=function(e){return parseFloat("".concat(e).replace(",","."))};return{validate:function(t){var s=t.value;if(""===s)return{valid:!0};var r=Object.assign({},{inclusive:!0,message:""},n(t.options)),i=e(r.min),l=e(r.max);return r.inclusive?{message:a(t.l10n?r.message||t.l10n.between.default:r.message,["".concat(i),"".concat(l)]),valid:parseFloat(s)>=i&&parseFloat(s)<=l}:{message:a(t.l10n?r.message||t.l10n.between.notInclusive:r.message,["".concat(i),"".concat(l)]),valid:parseFloat(s)>i&&parseFloat(s)<l}}}};
