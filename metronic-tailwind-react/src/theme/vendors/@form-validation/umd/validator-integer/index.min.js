/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-integer
 * @version 2.4.0
 */

!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((a="undefined"!=typeof globalThis?globalThis:a||self).FormValidation=a.FormValidation||{},a.FormValidation.validators=a.FormValidation.validators||{},a.FormValidation.validators.integer=e(a.FormValidation))}(this,(function(a){"use strict";var e=a.utils.removeUndefined;return function(){return{validate:function(a){if(""===a.value)return{valid:!0};var o=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},e(a.options)),t="."===o.decimalSeparator?"\\.":o.decimalSeparator,i="."===o.thousandsSeparator?"\\.":o.thousandsSeparator,r=new RegExp("^-?[0-9]{1,3}(".concat(i,"[0-9]{3})*(").concat(t,"[0-9]+)?$")),n=new RegExp(i,"g"),d="".concat(a.value);if(!r.test(d))return{valid:!1};i&&(d=d.replace(n,"")),t&&(d=d.replace(t,"."));var l=parseFloat(d);return{valid:!isNaN(l)&&isFinite(l)&&Math.floor(l)===l}}}}}));
