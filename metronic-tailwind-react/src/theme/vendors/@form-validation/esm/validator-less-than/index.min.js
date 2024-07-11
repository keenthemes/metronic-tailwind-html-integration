/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-less-than
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.format,s=e.removeUndefined;function n(){return{validate:function(e){if(""===e.value)return{valid:!0};var n=Object.assign({},{inclusive:!0,message:""},s(e.options)),l=parseFloat("".concat(n.max).replace(",","."));return n.inclusive?{message:a(e.l10n?n.message||e.l10n.lessThan.default:n.message,"".concat(l)),valid:parseFloat(e.value)<=l}:{message:a(e.l10n?n.message||e.l10n.lessThan.notInclusive:n.message,"".concat(l)),valid:parseFloat(e.value)<l}}}}export{n as lessThan};
