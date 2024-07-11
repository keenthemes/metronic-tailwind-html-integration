/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-integer
 * @version 2.4.0
 */

import{utils as a}from"../core/index.min.js";var e=a.removeUndefined;function r(){return{validate:function(a){if(""===a.value)return{valid:!0};var r=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},e(a.options)),t="."===r.decimalSeparator?"\\.":r.decimalSeparator,o="."===r.thousandsSeparator?"\\.":r.thousandsSeparator,n=new RegExp("^-?[0-9]{1,3}(".concat(o,"[0-9]{3})*(").concat(t,"[0-9]+)?$")),i=new RegExp(o,"g"),c="".concat(a.value);if(!n.test(c))return{valid:!1};o&&(c=c.replace(i,"")),t&&(c=c.replace(t,"."));var p=parseFloat(c);return{valid:!isNaN(p)&&isFinite(p)&&Math.floor(p)===p}}}}export{r as integer};
