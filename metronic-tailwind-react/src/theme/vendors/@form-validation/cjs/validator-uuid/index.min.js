/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uuid
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),i=e.utils.format,s=e.utils.removeUndefined;exports.uuid=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var n=Object.assign({},{message:""},s(e.options)),A={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},a=n.version?"".concat(n.version):"all";return{message:n.version?i(e.l10n?n.message||e.l10n.uuid.version:n.message,n.version):e.l10n?e.l10n.uuid.default:n.message,valid:null===A[a]||A[a].test(e.value)}}}};
