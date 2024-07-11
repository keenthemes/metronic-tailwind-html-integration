/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-cusip
 * @version 2.4.0
 */

define(["exports"],(function(r){"use strict";r.cusip=function(){return{validate:function(r){if(""===r.value)return{valid:!0};var t=r.value.toUpperCase();if(!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(t))return{valid:!1};var e=t.split(""),a=e.pop(),n=e.map((function(r){var t=r.charCodeAt(0);switch(!0){case"*"===r:return 36;case"@"===r:return 37;case"#"===r:return 38;case t>="A".charCodeAt(0)&&t<="Z".charCodeAt(0):return t-"A".charCodeAt(0)+10;default:return parseInt(r,10)}})).map((function(r,t){var e=t%2==0?r:2*r;return Math.floor(e/10)+e%10})).reduce((function(r,t){return r+t}),0);return{valid:a==="".concat((10-n%10)%10)}}}}}));
