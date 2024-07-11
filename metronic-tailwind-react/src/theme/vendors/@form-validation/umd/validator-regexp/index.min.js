/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-regexp
 * @version 2.4.0
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.regexp=t())}(this,(function(){"use strict";return function(){return{validate:function(e){if(""===e.value)return{valid:!0};var t=e.options.regexp;if(t instanceof RegExp)return{valid:t.test(e.value)};var i=t.toString();return{valid:(e.options.flags?new RegExp(i,e.options.flags):new RegExp(i)).test(e.value)}}}}}));
