/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uuid
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var n=e.format,i=e.removeUndefined;function A(){return{validate:function(e){if(""===e.value)return{valid:!0};var A=Object.assign({},{message:""},i(e.options)),s={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},F=A.version?"".concat(A.version):"all";return{message:A.version?n(e.l10n?A.message||e.l10n.uuid.version:A.message,A.version):e.l10n?e.l10n.uuid.default:A.message,valid:null===s[F]||s[F].test(e.value)}}}}export{A as uuid};
