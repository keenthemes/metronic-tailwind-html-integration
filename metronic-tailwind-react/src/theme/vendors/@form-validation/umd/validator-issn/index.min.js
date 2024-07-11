/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-issn
 * @version 2.4.0
 */

!function(i,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.issn=e())}(this,(function(){"use strict";return function(){return{validate:function(i){if(""===i.value)return{valid:!0};if(!/^\d{4}-\d{3}[\dX]$/.test(i.value))return{valid:!1};var e=i.value.replace(/[^0-9X]/gi,"").split(""),t=e.length,a=0;"X"===e[7]&&(e[7]="10");for(var n=0;n<t;n++)a+=parseInt(e[n],10)*(8-n);return{valid:a%11==0}}}}}));
