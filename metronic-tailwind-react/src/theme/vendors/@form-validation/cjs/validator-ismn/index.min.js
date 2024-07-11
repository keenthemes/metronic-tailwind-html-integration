/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ismn
 * @version 2.4.0
 */

"use strict";exports.ismn=function(){return{validate:function(e){if(""===e.value)return{meta:null,valid:!0};var t;switch(!0){case/^M\d{9}$/.test(e.value):case/^M-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):t="ISMN10";break;case/^9790\d{9}$/.test(e.value):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):t="ISMN13";break;default:return{meta:null,valid:!1}}var a=e.value;"ISMN10"===t&&(a="9790".concat(a.substr(1)));for(var s=0,r=(a=a.replace(/[^0-9]/gi,"")).length,d=[1,3],l=0;l<r-1;l++)s+=parseInt(a.charAt(l),10)*d[l%2];return{meta:{type:t},valid:"".concat(s=(10-s%10)%10)===a.charAt(r-1)}}}};
