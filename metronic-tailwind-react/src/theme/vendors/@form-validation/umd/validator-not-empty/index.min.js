/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-not-empty
 * @version 2.4.0
 */

!function(o,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.validators=o.FormValidation.validators||{},o.FormValidation.validators.notEmpty=i())}(this,(function(){"use strict";return function(){return{validate:function(o){var i=!!o.options&&!!o.options.trim,t=o.value;return{valid:!i&&""!==t||i&&""!==t&&""!==t.trim()}}}}}));
