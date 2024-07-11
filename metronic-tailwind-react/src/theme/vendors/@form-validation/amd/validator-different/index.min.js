/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-different
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.different=function(){return{validate:function(t){var n="function"==typeof t.options.compare?t.options.compare.call(this):t.options.compare;return{valid:""===n||t.value!==n}}}}}));
