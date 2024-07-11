/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-choice
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var n=e.format;function o(){return{validate:function(e){var o="select"===e.element.tagName.toLowerCase()?e.element.querySelectorAll("option:checked").length:e.elements.filter((function(e){return e.checked})).length,t=e.options.min?"".concat(e.options.min):"",s=e.options.max?"".concat(e.options.max):"",a=e.l10n?e.options.message||e.l10n.choice.default:e.options.message,c=!(t&&o<parseInt(t,10)||s&&o>parseInt(s,10));switch(!0){case!!t&&!!s:a=n(e.l10n?e.l10n.choice.between:e.options.message,[t,s]);break;case!!t:a=n(e.l10n?e.l10n.choice.more:e.options.message,t);break;case!!s:a=n(e.l10n?e.l10n.choice.less:e.options.message,s)}return{message:a,valid:c}}}}export{o as choice};
