/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-length
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,t){"use strict";var n=t.utils.format,s=t.utils.removeUndefined;e.stringLength=function(){return{validate:function(e){var t=Object.assign({},{message:"",trim:!1,utf8Bytes:!1},s(e.options)),a=!0===t.trim||"true"==="".concat(t.trim)?e.value.trim():e.value;if(""===a)return{valid:!0};var r=t.min?"".concat(t.min):"",i=t.max?"".concat(t.max):"",g=t.utf8Bytes?function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var s=e.charCodeAt(n);s>127&&s<=2047?t++:s>2047&&s<=65535&&(t+=2),s>=56320&&s<=57343&&n--}return t}(a):a.length,c=!0,m=e.l10n?t.message||e.l10n.stringLength.default:t.message;switch((r&&g<parseInt(r,10)||i&&g>parseInt(i,10))&&(c=!1),!0){case!!r&&!!i:m=n(e.l10n?t.message||e.l10n.stringLength.between:t.message,[r,i]);break;case!!r:m=n(e.l10n?t.message||e.l10n.stringLength.more:t.message,"".concat(parseInt(r,10)));break;case!!i:m=n(e.l10n?t.message||e.l10n.stringLength.less:t.message,"".concat(parseInt(i,10)))}return{message:m,valid:c}}}}}));
