/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-greater-than
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var n=a.utils.format,s=a.utils.removeUndefined;e.greaterThan=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var a=Object.assign({},{inclusive:!0,message:""},s(e.options)),t=parseFloat("".concat(a.min).replace(",","."));return a.inclusive?{message:n(e.l10n?a.message||e.l10n.greaterThan.default:a.message,"".concat(t)),valid:parseFloat(e.value)>=t}:{message:n(e.l10n?a.message||e.l10n.greaterThan.notInclusive:a.message,"".concat(t)),valid:parseFloat(e.value)>t}}}}}));
