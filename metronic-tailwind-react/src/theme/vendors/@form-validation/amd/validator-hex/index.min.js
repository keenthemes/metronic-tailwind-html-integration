/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-hex
 * @version 2.4.0
 */

define(["exports"],(function(e){"use strict";e.hex=function(){return{validate:function(e){return{valid:""===e.value||/^[0-9a-fA-F]+$/.test(e.value)}}}}}));
