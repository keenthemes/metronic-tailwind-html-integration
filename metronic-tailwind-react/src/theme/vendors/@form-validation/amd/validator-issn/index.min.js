/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-issn
 * @version 2.4.0
 */

define(["exports"],(function(e){"use strict";e.issn=function(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^\d{4}-\d{3}[\dX]$/.test(e.value))return{valid:!1};var t=e.value.replace(/[^0-9X]/gi,"").split(""),r=t.length,i=0;"X"===t[7]&&(t[7]="10");for(var n=0;n<r;n++)i+=parseInt(t[n],10)*(8-n);return{valid:i%11==0}}}}}));
