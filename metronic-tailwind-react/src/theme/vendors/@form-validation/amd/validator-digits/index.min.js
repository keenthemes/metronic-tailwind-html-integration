/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-digits
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.digits=function(){return{validate:function(t){return{valid:""===t.value||/^\d+$/.test(t.value)}}}}}));
