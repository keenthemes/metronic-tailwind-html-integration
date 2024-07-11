/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-length
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var n=e.format,t=e.removeUndefined;function a(){return{validate:function(e){var a=Object.assign({},{message:"",trim:!1,utf8Bytes:!1},t(e.options)),s=!0===a.trim||"true"==="".concat(a.trim)?e.value.trim():e.value;if(""===s)return{valid:!0};var r=a.min?"".concat(a.min):"",i=a.max?"".concat(a.max):"",m=a.utf8Bytes?function(e){for(var n=e.length,t=e.length-1;t>=0;t--){var a=e.charCodeAt(t);a>127&&a<=2047?n++:a>2047&&a<=65535&&(n+=2),a>=56320&&a<=57343&&t--}return n}(s):s.length,g=!0,c=e.l10n?a.message||e.l10n.stringLength.default:a.message;switch((r&&m<parseInt(r,10)||i&&m>parseInt(i,10))&&(g=!1),!0){case!!r&&!!i:c=n(e.l10n?a.message||e.l10n.stringLength.between:a.message,[r,i]);break;case!!r:c=n(e.l10n?a.message||e.l10n.stringLength.more:a.message,"".concat(parseInt(r,10)));break;case!!i:c=n(e.l10n?a.message||e.l10n.stringLength.less:a.message,"".concat(parseInt(i,10)))}return{message:c,valid:g}}}}export{a as stringLength};
