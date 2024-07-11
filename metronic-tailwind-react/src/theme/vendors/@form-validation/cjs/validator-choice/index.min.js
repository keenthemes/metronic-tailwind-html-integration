/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-choice
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").utils.format;exports.choice=function(){return{validate:function(n){var t="select"===n.element.tagName.toLowerCase()?n.element.querySelectorAll("option:checked").length:n.elements.filter((function(e){return e.checked})).length,o=n.options.min?"".concat(n.options.min):"",s=n.options.max?"".concat(n.options.max):"",a=n.l10n?n.options.message||n.l10n.choice.default:n.options.message,c=!(o&&t<parseInt(o,10)||s&&t>parseInt(s,10));switch(!0){case!!o&&!!s:a=e(n.l10n?n.l10n.choice.between:n.options.message,[o,s]);break;case!!o:a=e(n.l10n?n.l10n.choice.more:n.options.message,o);break;case!!s:a=e(n.l10n?n.l10n.choice.less:n.options.message,s)}return{message:a,valid:c}}}};
