/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siren
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").algorithms.luhn;exports.siren=function(){return{validate:function(r){return{valid:""===r.value||/^\d{9}$/.test(r.value)&&e(r.value)}}}};
