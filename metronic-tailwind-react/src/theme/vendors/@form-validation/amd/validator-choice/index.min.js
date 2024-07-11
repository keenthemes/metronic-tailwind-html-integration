/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-choice
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,n){"use strict";var t=n.utils.format;e.choice=function(){return{validate:function(e){var n="select"===e.element.tagName.toLowerCase()?e.element.querySelectorAll("option:checked").length:e.elements.filter((function(e){return e.checked})).length,o=e.options.min?"".concat(e.options.min):"",s=e.options.max?"".concat(e.options.max):"",c=e.l10n?e.options.message||e.l10n.choice.default:e.options.message,i=!(o&&n<parseInt(o,10)||s&&n>parseInt(s,10));switch(!0){case!!o&&!!s:c=t(e.l10n?e.l10n.choice.between:e.options.message,[o,s]);break;case!!o:c=t(e.l10n?e.l10n.choice.more:e.options.message,o);break;case!!s:c=t(e.l10n?e.l10n.choice.less:e.options.message,s)}return{message:c,valid:i}}}}}));
