/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-identical
 * @version 2.4.0
 */

"use strict";exports.identical=function(){return{validate:function(t){var o="function"==typeof t.options.compare?t.options.compare.call(this):t.options.compare;return{valid:""===o||t.value===o}}}};
