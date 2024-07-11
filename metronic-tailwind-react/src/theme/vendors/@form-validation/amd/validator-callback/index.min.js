/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-callback
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(a,t){"use strict";var n=t.utils.call;a.callback=function(){return{validate:function(a){var t=n(a.options.callback,[a]);return"boolean"==typeof t?{valid:t}:t}}}}));
