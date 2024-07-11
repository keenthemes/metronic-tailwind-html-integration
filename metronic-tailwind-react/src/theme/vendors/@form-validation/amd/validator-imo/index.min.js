/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-imo
 * @version 2.4.0
 */

define(["exports"],(function(e){"use strict";e.imo=function(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^IMO \d{7}$/i.test(e.value))return{valid:!1};for(var r=e.value.replace(/^.*(\d{7})$/,"$1"),t=0,i=6;i>=1;i--)t+=parseInt(r.slice(6-i,-i),10)*(i+1);return{valid:t%10===parseInt(r.charAt(6),10)}}}}}));
