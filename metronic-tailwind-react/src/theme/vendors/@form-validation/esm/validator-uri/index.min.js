/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uri
 * @version 2.4.0
 */

import{utils as o}from"../core/index.min.js";var a=o.removeUndefined;function t(){var o={allowEmptyProtocol:!1,allowLocal:!1,protocol:"http, https, ftp"};return{validate:function(t){if(""===t.value)return{valid:!0};var l=Object.assign({},o,a(t.options)),f=!0===l.allowLocal||"true"==="".concat(l.allowLocal),r=!0===l.allowEmptyProtocol||"true"==="".concat(l.allowEmptyProtocol),d=l.protocol.split(",").join("|").replace(/\s/g,"");return{valid:new RegExp("^(?:(?:"+d+")://)"+(r?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(f?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(f?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(t.value)}}}}export{t as uri};
