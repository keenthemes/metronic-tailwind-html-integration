/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-meid
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.meid=e(t.FormValidation))}(this,(function(t){"use strict";var e=t.algorithms.luhn;return function(){return{validate:function(t){if(""===t.value)return{valid:!0};var i=t.value;if(/^[0-9A-F]{15}$/i.test(i)||/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(i)||/^\d{19}$/.test(i)||/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(i)){var a=i.charAt(i.length-1).toUpperCase();if((i=i.replace(/[- ]/g,"")).match(/^\d*$/i))return{valid:e(i)};i=i.slice(0,-1);var r="",o=void 0;for(o=1;o<=13;o+=2)r+=(2*parseInt(i.charAt(o),16)).toString(16);var d=0;for(o=0;o<r.length;o++)d+=parseInt(r.charAt(o),16);return{valid:d%10==0?"0"===a:a===(2*(10*Math.floor((d+10)/10)-d)).toString(16).toUpperCase()}}return/^[0-9A-F]{14}$/i.test(i)||/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(i)||/^\d{18}$/.test(i)||/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(i)?{valid:!0}:{valid:!1}}}}}));
