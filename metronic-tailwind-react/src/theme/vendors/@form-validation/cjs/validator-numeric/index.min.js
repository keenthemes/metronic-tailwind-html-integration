/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-numeric
 * @version 2.4.0
 */

"use strict";var a=require("@form-validation/core").utils.removeUndefined;exports.numeric=function(){return{validate:function(r){if(""===r.value)return{valid:!0};var e=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},a(r.options)),t="".concat(r.value);t.substr(0,1)===e.decimalSeparator?t="0".concat(e.decimalSeparator).concat(t.substr(1)):t.substr(0,2)==="-".concat(e.decimalSeparator)&&(t="-0".concat(e.decimalSeparator).concat(t.substr(2)));var c="."===e.decimalSeparator?"\\.":e.decimalSeparator,o="."===e.thousandsSeparator?"\\.":e.thousandsSeparator,i=new RegExp("^-?[0-9]{1,3}(".concat(o,"[0-9]{3})*(").concat(c,"[0-9]+)?$")),n=new RegExp(o,"g");if(!i.test(t))return{valid:!1};o&&(t=t.replace(n,"")),c&&(t=t.replace(c,"."));var s=parseFloat(t);return{valid:!isNaN(s)&&isFinite(s)}}}};
