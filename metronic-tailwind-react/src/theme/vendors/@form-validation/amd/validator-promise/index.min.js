/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-promise
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(i,t){"use strict";var n=t.utils.call;i.promise=function(){return{validate:function(i){return n(i.options.promise,[i])}}}}));
