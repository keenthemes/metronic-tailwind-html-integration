/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-between
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var n=a.utils.format,t=a.utils.removeUndefined;e.between=function(){var e=function(e){return parseFloat("".concat(e).replace(",","."))};return{validate:function(a){var s=a.value;if(""===s)return{valid:!0};var i=Object.assign({},{inclusive:!0,message:""},t(a.options)),r=e(i.min),o=e(i.max);return i.inclusive?{message:n(a.l10n?i.message||a.l10n.between.default:i.message,["".concat(r),"".concat(o)]),valid:parseFloat(s)>=r&&parseFloat(s)<=o}:{message:n(a.l10n?i.message||a.l10n.between.notInclusive:i.message,["".concat(r),"".concat(o)]),valid:parseFloat(s)>r&&parseFloat(s)<o}}}}}));
