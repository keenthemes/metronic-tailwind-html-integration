/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-less-than
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var s=a.utils.format,n=a.utils.removeUndefined;e.lessThan=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var a=Object.assign({},{inclusive:!0,message:""},n(e.options)),l=parseFloat("".concat(a.max).replace(",","."));return a.inclusive?{message:s(e.l10n?a.message||e.l10n.lessThan.default:a.message,"".concat(l)),valid:parseFloat(e.value)<=l}:{message:s(e.l10n?a.message||e.l10n.lessThan.notInclusive:a.message,"".concat(l)),valid:parseFloat(e.value)<l}}}}}));
