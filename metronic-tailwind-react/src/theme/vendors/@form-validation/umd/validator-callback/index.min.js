/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-callback
 * @version 2.4.0
 */

!function(o,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],i):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.validators=o.FormValidation.validators||{},o.FormValidation.validators.callback=i(o.FormValidation))}(this,(function(o){"use strict";var i=o.utils.call;return function(){return{validate:function(o){var a=i(o.options.callback,[o]);return"boolean"==typeof a?{valid:a}:a}}}}));
