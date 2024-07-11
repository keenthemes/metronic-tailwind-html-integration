/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-grid
 * @version 2.4.0
 */

import{algorithms as r}from"../core/index.min.js";var e=r.mod37And36;function t(){return{validate:function(r){if(""===r.value)return{valid:!0};var t=r.value.toUpperCase();return/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(t)?("GRID:"===(t=t.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(t=t.substr(5)),{valid:e(t)}):{valid:!1}}}}export{t as grid};
