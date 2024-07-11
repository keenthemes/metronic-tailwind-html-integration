/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-integer
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(a,e){"use strict";var r=e.utils.removeUndefined;a.integer=function(){return{validate:function(a){if(""===a.value)return{valid:!0};var e=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},r(a.options)),t="."===e.decimalSeparator?"\\.":e.decimalSeparator,n="."===e.thousandsSeparator?"\\.":e.thousandsSeparator,i=new RegExp("^-?[0-9]{1,3}(".concat(n,"[0-9]{3})*(").concat(t,"[0-9]+)?$")),o=new RegExp(n,"g"),c="".concat(a.value);if(!i.test(c))return{valid:!1};n&&(c=c.replace(o,"")),t&&(c=c.replace(t,"."));var s=parseFloat(c);return{valid:!isNaN(s)&&isFinite(s)&&Math.floor(s)===s}}}}}));
