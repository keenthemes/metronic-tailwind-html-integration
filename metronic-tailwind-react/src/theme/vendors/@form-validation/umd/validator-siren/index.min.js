/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siren
 * @version 2.4.0
 */

!function(i,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.siren=o(i.FormValidation))}(this,(function(i){"use strict";var o=i.algorithms.luhn;return function(){return{validate:function(i){return{valid:""===i.value||/^\d{9}$/.test(i.value)&&o(i.value)}}}}}));
