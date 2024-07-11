/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-cusip
 * @version 2.4.0
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.cusip=e())}(this,(function(){"use strict";return function(){return{validate:function(t){if(""===t.value)return{valid:!0};var e=t.value.toUpperCase();if(!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(e))return{valid:!1};var r=e.split(""),a=r.pop(),n=r.map((function(t){var e=t.charCodeAt(0);switch(!0){case"*"===t:return 36;case"@"===t:return 37;case"#"===t:return 38;case e>="A".charCodeAt(0)&&e<="Z".charCodeAt(0):return e-"A".charCodeAt(0)+10;default:return parseInt(t,10)}})).map((function(t,e){var r=e%2==0?t:2*t;return Math.floor(r/10)+r%10})).reduce((function(t,e){return t+e}),0);return{valid:a==="".concat((10-n%10)%10)}}}}}));
