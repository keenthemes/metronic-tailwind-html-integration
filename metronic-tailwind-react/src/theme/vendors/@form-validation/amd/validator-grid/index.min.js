/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-grid
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(r,e){"use strict";var t=e.algorithms.mod37And36;r.grid=function(){return{validate:function(r){if(""===r.value)return{valid:!0};var e=r.value.toUpperCase();return/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(e)?("GRID:"===(e=e.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(e=e.substr(5)),{valid:t(e)}):{valid:!1}}}}}));
