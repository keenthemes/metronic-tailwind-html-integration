/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-bic
 * @version 2.4.0
 */

!function(i,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.bic=o())}(this,(function(){"use strict";return function(){return{validate:function(i){return{valid:""===i.value||/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(i.value)}}}}}));
