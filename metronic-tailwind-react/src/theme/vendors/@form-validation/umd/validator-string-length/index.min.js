/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-length
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.stringLength=t(e.FormValidation))}(this,(function(e){"use strict";var t=e.utils.format,n=e.utils.removeUndefined;return function(){return{validate:function(e){var a=Object.assign({},{message:"",trim:!1,utf8Bytes:!1},n(e.options)),i=!0===a.trim||"true"==="".concat(a.trim)?e.value.trim():e.value;if(""===i)return{valid:!0};var r=a.min?"".concat(a.min):"",s=a.max?"".concat(a.max):"",o=a.utf8Bytes?function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var a=e.charCodeAt(n);a>127&&a<=2047?t++:a>2047&&a<=65535&&(t+=2),a>=56320&&a<=57343&&n--}return t}(i):i.length,l=!0,m=e.l10n?a.message||e.l10n.stringLength.default:a.message;switch((r&&o<parseInt(r,10)||s&&o>parseInt(s,10))&&(l=!1),!0){case!!r&&!!s:m=t(e.l10n?a.message||e.l10n.stringLength.between:a.message,[r,s]);break;case!!r:m=t(e.l10n?a.message||e.l10n.stringLength.more:a.message,"".concat(parseInt(r,10)));break;case!!s:m=t(e.l10n?a.message||e.l10n.stringLength.less:a.message,"".concat(parseInt(s,10)))}return{message:m,valid:l}}}}}));
