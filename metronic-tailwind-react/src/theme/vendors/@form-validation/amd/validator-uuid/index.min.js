/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uuid
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,i){"use strict";var n=i.utils.format,s=i.utils.removeUndefined;e.uuid=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var i=Object.assign({},{message:""},s(e.options)),A={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},a=i.version?"".concat(i.version):"all";return{message:i.version?n(e.l10n?i.message||e.l10n.uuid.version:i.message,i.version):e.l10n?e.l10n.uuid.default:i.message,valid:null===A[a]||A[a].test(e.value)}}}}}));
