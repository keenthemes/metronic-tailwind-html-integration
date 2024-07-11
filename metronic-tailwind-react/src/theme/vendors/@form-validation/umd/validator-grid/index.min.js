/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-grid
 * @version 2.4.0
 */

!function(i,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],o):((i="undefined"!=typeof globalThis?globalThis:i||self).FormValidation=i.FormValidation||{},i.FormValidation.validators=i.FormValidation.validators||{},i.FormValidation.validators.grid=o(i.FormValidation))}(this,(function(i){"use strict";var o=i.algorithms.mod37And36;return function(){return{validate:function(i){if(""===i.value)return{valid:!0};var e=i.value.toUpperCase();return/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(e)?("GRID:"===(e=e.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(e=e.substr(5)),{valid:o(e)}):{valid:!1}}}}}));
