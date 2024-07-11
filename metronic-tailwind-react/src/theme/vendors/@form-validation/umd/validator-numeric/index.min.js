/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-numeric
 * @version 2.4.0
 */

!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((a="undefined"!=typeof globalThis?globalThis:a||self).FormValidation=a.FormValidation||{},a.FormValidation.validators=a.FormValidation.validators||{},a.FormValidation.validators.numeric=e(a.FormValidation))}(this,(function(a){"use strict";var e=a.utils.removeUndefined;return function(){return{validate:function(a){if(""===a.value)return{valid:!0};var t=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},e(a.options)),o="".concat(a.value);o.substr(0,1)===t.decimalSeparator?o="0".concat(t.decimalSeparator).concat(o.substr(1)):o.substr(0,2)==="-".concat(t.decimalSeparator)&&(o="-0".concat(t.decimalSeparator).concat(o.substr(2)));var r="."===t.decimalSeparator?"\\.":t.decimalSeparator,i="."===t.thousandsSeparator?"\\.":t.thousandsSeparator,n=new RegExp("^-?[0-9]{1,3}(".concat(i,"[0-9]{3})*(").concat(r,"[0-9]+)?$")),d=new RegExp(i,"g");if(!n.test(o))return{valid:!1};i&&(o=o.replace(d,"")),r&&(o=o.replace(r,"."));var c=parseFloat(o);return{valid:!isNaN(c)&&isFinite(c)}}}}}));
