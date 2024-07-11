/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-meid
 * @version 2.4.0
 */

"use strict";var t=require("@form-validation/core").algorithms.luhn;exports.meid=function(){return{validate:function(r){if(""===r.value)return{valid:!0};var e=r.value;if(/^[0-9A-F]{15}$/i.test(e)||/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(e)||/^\d{19}$/.test(e)||/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(e)){var a=e.charAt(e.length-1).toUpperCase();if((e=e.replace(/[- ]/g,"")).match(/^\d*$/i))return{valid:t(e)};e=e.slice(0,-1);var i="",d=void 0;for(d=1;d<=13;d+=2)i+=(2*parseInt(e.charAt(d),16)).toString(16);var n=0;for(d=0;d<i.length;d++)n+=parseInt(i.charAt(d),16);return{valid:n%10==0?"0"===a:a===(2*(10*Math.floor((n+10)/10)-n)).toString(16).toUpperCase()}}return/^[0-9A-F]{14}$/i.test(e)||/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(e)||/^\d{18}$/.test(e)||/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(e)?{valid:!0}:{valid:!1}}}};
