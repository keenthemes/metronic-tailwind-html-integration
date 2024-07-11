/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-regexp
 * @version 2.4.0
 */

function e(){return{validate:function(e){if(""===e.value)return{valid:!0};var t=e.options.regexp;if(t instanceof RegExp)return{valid:t.test(e.value)};var n=t.toString();return{valid:(e.options.flags?new RegExp(n,e.options.flags):new RegExp(n)).test(e.value)}}}}export{e as regexp};
