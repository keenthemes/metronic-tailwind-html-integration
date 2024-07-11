/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siret
 * @version 2.4.0
 */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.siret=i())}(this,(function(){"use strict";return function(){return{validate:function(e){if(""===e.value)return{valid:!0};for(var i,t=e.value.length,o=0,a=0;a<t;a++)i=parseInt(e.value.charAt(a),10),a%2==0&&(i*=2)>9&&(i-=9),o+=i;return{valid:o%10==0}}}}}));
