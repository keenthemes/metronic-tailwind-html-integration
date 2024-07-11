/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-not-empty
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.notEmpty=function(){return{validate:function(t){var n=!!t.options&&!!t.options.trim,i=t.value;return{valid:!n&&""!==i||n&&""!==i&&""!==i.trim()}}}}}));
