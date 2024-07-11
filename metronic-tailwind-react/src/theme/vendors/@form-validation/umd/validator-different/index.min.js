/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-different
 * @version 2.4.0
 */

!function(o,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):((o="undefined"!=typeof globalThis?globalThis:o||self).FormValidation=o.FormValidation||{},o.FormValidation.validators=o.FormValidation.validators||{},o.FormValidation.validators.different=i())}(this,(function(){"use strict";return function(){return{validate:function(o){var i="function"==typeof o.options.compare?o.options.compare.call(this):o.options.compare;return{valid:""===i||o.value!==i}}}}}));
