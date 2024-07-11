/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-greater-than
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),a=e.utils.format,s=e.utils.removeUndefined;exports.greaterThan=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var n=Object.assign({},{inclusive:!0,message:""},s(e.options)),r=parseFloat("".concat(n.min).replace(",","."));return n.inclusive?{message:a(e.l10n?n.message||e.l10n.greaterThan.default:n.message,"".concat(r)),valid:parseFloat(e.value)>=r}:{message:a(e.l10n?n.message||e.l10n.greaterThan.notInclusive:n.message,"".concat(r)),valid:parseFloat(e.value)>r}}}};
