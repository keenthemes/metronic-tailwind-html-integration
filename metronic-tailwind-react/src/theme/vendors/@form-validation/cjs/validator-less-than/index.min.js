/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-less-than
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),a=e.utils.format,s=e.utils.removeUndefined;exports.lessThan=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var n=Object.assign({},{inclusive:!0,message:""},s(e.options)),l=parseFloat("".concat(n.max).replace(",","."));return n.inclusive?{message:a(e.l10n?n.message||e.l10n.lessThan.default:n.message,"".concat(l)),valid:parseFloat(e.value)<=l}:{message:a(e.l10n?n.message||e.l10n.lessThan.notInclusive:n.message,"".concat(l)),valid:parseFloat(e.value)<l}}}};
