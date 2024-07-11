/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-digits
 * @version 2.4.0
 */

!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.digits=t())}(this,(function(){"use strict";return function(){return{validate:function(i){return{valid:""===i.value||/^\d+$/.test(i.value)}}}}}));
