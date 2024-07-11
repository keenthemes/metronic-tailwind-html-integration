/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-numeric
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(a,e){"use strict";var r=e.utils.removeUndefined;a.numeric=function(){return{validate:function(a){if(""===a.value)return{valid:!0};var e=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},r(a.options)),t="".concat(a.value);t.substr(0,1)===e.decimalSeparator?t="0".concat(e.decimalSeparator).concat(t.substr(1)):t.substr(0,2)==="-".concat(e.decimalSeparator)&&(t="-0".concat(e.decimalSeparator).concat(t.substr(2)));var c="."===e.decimalSeparator?"\\.":e.decimalSeparator,o="."===e.thousandsSeparator?"\\.":e.thousandsSeparator,n=new RegExp("^-?[0-9]{1,3}(".concat(o,"[0-9]{3})*(").concat(c,"[0-9]+)?$")),i=new RegExp(o,"g");if(!n.test(t))return{valid:!1};o&&(t=t.replace(i,"")),c&&(t=t.replace(c,"."));var s=parseFloat(t);return{valid:!isNaN(s)&&isFinite(s)}}}}}));
