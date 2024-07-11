/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-grid
 * @version 2.4.0
 */

"use strict";var r=require("@form-validation/core").algorithms.mod37And36;exports.grid=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var t=e.value.toUpperCase();return/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(t)?("GRID:"===(t=t.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(t=t.substr(5)),{valid:r(t)}):{valid:!1}}}};
