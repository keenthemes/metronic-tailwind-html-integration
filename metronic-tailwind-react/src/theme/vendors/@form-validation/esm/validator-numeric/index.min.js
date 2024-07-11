/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-numeric
 * @version 2.4.0
 */

import{utils as a}from"../core/index.min.js";var r=a.removeUndefined;function e(){return{validate:function(a){if(""===a.value)return{valid:!0};var e=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},r(a.options)),t="".concat(a.value);t.substr(0,1)===e.decimalSeparator?t="0".concat(e.decimalSeparator).concat(t.substr(1)):t.substr(0,2)==="-".concat(e.decimalSeparator)&&(t="-0".concat(e.decimalSeparator).concat(t.substr(2)));var o="."===e.decimalSeparator?"\\.":e.decimalSeparator,c="."===e.thousandsSeparator?"\\.":e.thousandsSeparator,n=new RegExp("^-?[0-9]{1,3}(".concat(c,"[0-9]{3})*(").concat(o,"[0-9]+)?$")),i=new RegExp(c,"g");if(!n.test(t))return{valid:!1};c&&(t=t.replace(i,"")),o&&(t=t.replace(o,"."));var s=parseFloat(t);return{valid:!isNaN(s)&&isFinite(s)}}}}export{e as numeric};
