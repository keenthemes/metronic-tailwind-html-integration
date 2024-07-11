/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-integer
 * @version 2.4.0
 */

"use strict";var a=require("@form-validation/core").utils.removeUndefined;exports.integer=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var r=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},a(e.options)),t="."===r.decimalSeparator?"\\.":r.decimalSeparator,i="."===r.thousandsSeparator?"\\.":r.thousandsSeparator,o=new RegExp("^-?[0-9]{1,3}(".concat(i,"[0-9]{3})*(").concat(t,"[0-9]+)?$")),n=new RegExp(i,"g"),s="".concat(e.value);if(!o.test(s))return{valid:!1};i&&(s=s.replace(n,"")),t&&(s=s.replace(t,"."));var c=parseFloat(s);return{valid:!isNaN(c)&&isFinite(c)&&Math.floor(c)===c}}}};
