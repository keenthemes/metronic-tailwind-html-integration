/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-promise
 * @version 2.4.0
 */

"use strict";var r=require("@form-validation/core").utils.call;exports.promise=function(){return{validate:function(i){return r(i.options.promise,[i])}}};
