/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uri
 * @version 2.4.0
 */

!function(o,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.validators=o.FormValidation.validators||{},o.FormValidation.validators.uri=a(o.FormValidation))}(this,(function(o){"use strict";var a=o.utils.removeUndefined;return function(){var o={allowEmptyProtocol:!1,allowLocal:!1,protocol:"http, https, ftp"};return{validate:function(t){if(""===t.value)return{valid:!0};var i=Object.assign({},o,a(t.options)),l=!0===i.allowLocal||"true"==="".concat(i.allowLocal),e=!0===i.allowEmptyProtocol||"true"==="".concat(i.allowEmptyProtocol),d=i.protocol.split(",").join("|").replace(/\s/g,"");return{valid:new RegExp("^(?:(?:"+d+")://)"+(e?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(l?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(l?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(t.value)}}}}}));
