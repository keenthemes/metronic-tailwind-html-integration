/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-case
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.removeUndefined;function r(){return{validate:function(e){if(""===e.value)return{valid:!0};var r=Object.assign({},{case:"lower"},a(e.options)),s=(r.case||"lower").toLowerCase();return{message:r.message||(e.l10n?"upper"===s?e.l10n.stringCase.upper:e.l10n.stringCase.default:r.message),valid:"upper"===s?e.value===e.value.toUpperCase():e.value===e.value.toLowerCase()}}}}export{r as stringCase};
