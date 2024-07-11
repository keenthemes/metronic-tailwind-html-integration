/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-mac
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.mac=function(){return{validate:function(t){return{valid:""===t.value||/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(t.value)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(t.value)}}}}}));
