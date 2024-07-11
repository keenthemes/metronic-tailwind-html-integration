/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ismn
 * @version 2.4.0
 */

function e(){return{validate:function(e){if(""===e.value)return{meta:null,valid:!0};var a;switch(!0){case/^M\d{9}$/.test(e.value):case/^M-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):a="ISMN10";break;case/^9790\d{9}$/.test(e.value):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(e.value):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e.value):a="ISMN13";break;default:return{meta:null,valid:!1}}var t=e.value;"ISMN10"===a&&(t="9790".concat(t.substr(1)));for(var s=0,r=(t=t.replace(/[^0-9]/gi,"")).length,d=[1,3],l=0;l<r-1;l++)s+=parseInt(t.charAt(l),10)*d[l%2];return{meta:{type:a},valid:"".concat(s=(10-s%10)%10)===t.charAt(r-1)}}}}export{e as ismn};
