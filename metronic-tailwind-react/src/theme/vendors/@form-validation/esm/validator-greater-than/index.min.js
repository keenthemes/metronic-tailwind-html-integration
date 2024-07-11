/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-greater-than
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.format,n=e.removeUndefined;function s(){return{validate:function(e){if(""===e.value)return{valid:!0};var s=Object.assign({},{inclusive:!0,message:""},n(e.options)),r=parseFloat("".concat(s.min).replace(",","."));return s.inclusive?{message:a(e.l10n?s.message||e.l10n.greaterThan.default:s.message,"".concat(r)),valid:parseFloat(e.value)>=r}:{message:a(e.l10n?s.message||e.l10n.greaterThan.notInclusive:s.message,"".concat(r)),valid:parseFloat(e.value)>r}}}}export{s as greaterThan};
