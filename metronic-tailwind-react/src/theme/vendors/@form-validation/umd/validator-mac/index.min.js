/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-mac
 * @version 2.4.0
 */

!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.mac=a())}(this,(function(){"use strict";return function(){return{validate:function(t){return{valid:""===t.value||/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(t.value)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(t.value)}}}}}));
