/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-mac
 * @version 2.4.0
 */

function a(){return{validate:function(a){return{valid:""===a.value||/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(a.value)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(a.value)}}}}export{a as mac};
