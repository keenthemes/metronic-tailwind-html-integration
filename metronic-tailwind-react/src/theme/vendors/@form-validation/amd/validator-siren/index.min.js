/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siren
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,t){"use strict";var n=t.algorithms.luhn;e.siren=function(){return{validate:function(e){return{valid:""===e.value||/^\d{9}$/.test(e.value)&&n(e.value)}}}}}));
