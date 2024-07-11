/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-base64
 * @version 2.4.0
 */

!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((a="undefined"!=typeof globalThis?globalThis:a||self).FormValidation=a.FormValidation||{},a.FormValidation.validators=a.FormValidation.validators||{},a.FormValidation.validators.base64=e())}(this,(function(){"use strict";return function(){return{validate:function(a){return{valid:""===a.value||/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(a.value)}}}}}));
