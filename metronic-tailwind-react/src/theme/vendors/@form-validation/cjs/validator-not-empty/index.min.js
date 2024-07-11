/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-not-empty
 * @version 2.4.0
 */

"use strict";exports.notEmpty=function(){return{validate:function(t){var i=!!t.options&&!!t.options.trim,n=t.value;return{valid:!i&&""!==n||i&&""!==n&&""!==n.trim()}}}};
