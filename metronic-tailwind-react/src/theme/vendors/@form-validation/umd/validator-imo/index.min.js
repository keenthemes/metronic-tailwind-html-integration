/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-imo
 * @version 2.4.0
 */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.imo=i())}(this,(function(){"use strict";return function(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^IMO \d{7}$/i.test(e.value))return{valid:!1};for(var i=e.value.replace(/^.*(\d{7})$/,"$1"),t=0,a=6;a>=1;a--)t+=parseInt(i.slice(6-a,-a),10)*(a+1);return{valid:t%10===parseInt(i.charAt(6),10)}}}}}));
