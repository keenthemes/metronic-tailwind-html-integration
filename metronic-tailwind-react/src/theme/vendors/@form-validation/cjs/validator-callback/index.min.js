/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-callback
 * @version 2.4.0
 */

"use strict";var a=require("@form-validation/core").utils.call;exports.callback=function(){return{validate:function(r){var t=a(r.options.callback,[r]);return"boolean"==typeof t?{valid:t}:t}}};
