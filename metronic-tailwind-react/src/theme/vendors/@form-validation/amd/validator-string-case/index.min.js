/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-case
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var r=a.utils.removeUndefined;e.stringCase=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var a=Object.assign({},{case:"lower"},r(e.options)),s=(a.case||"lower").toLowerCase();return{message:a.message||(e.l10n?"upper"===s?e.l10n.stringCase.upper:e.l10n.stringCase.default:a.message),valid:"upper"===s?e.value===e.value.toUpperCase():e.value===e.value.toLowerCase()}}}}}));
