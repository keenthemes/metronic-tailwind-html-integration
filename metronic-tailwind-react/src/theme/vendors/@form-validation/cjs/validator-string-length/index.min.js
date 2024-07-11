/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-length
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),t=e.utils.format,n=e.utils.removeUndefined;exports.stringLength=function(){return{validate:function(e){var s=Object.assign({},{message:"",trim:!1,utf8Bytes:!1},n(e.options)),a=!0===s.trim||"true"==="".concat(s.trim)?e.value.trim():e.value;if(""===a)return{valid:!0};var r=s.min?"".concat(s.min):"",i=s.max?"".concat(s.max):"",g=s.utf8Bytes?function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var s=e.charCodeAt(n);s>127&&s<=2047?t++:s>2047&&s<=65535&&(t+=2),s>=56320&&s<=57343&&n--}return t}(a):a.length,m=!0,c=e.l10n?s.message||e.l10n.stringLength.default:s.message;switch((r&&g<parseInt(r,10)||i&&g>parseInt(i,10))&&(m=!1),!0){case!!r&&!!i:c=t(e.l10n?s.message||e.l10n.stringLength.between:s.message,[r,i]);break;case!!r:c=t(e.l10n?s.message||e.l10n.stringLength.more:s.message,"".concat(parseInt(r,10)));break;case!!i:c=t(e.l10n?s.message||e.l10n.stringLength.less:s.message,"".concat(parseInt(i,10)))}return{message:c,valid:m}}}};
