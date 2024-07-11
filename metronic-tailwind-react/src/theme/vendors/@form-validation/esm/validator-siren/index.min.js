/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-siren
 * @version 2.4.0
 */

import{algorithms as e}from"../core/index.min.js";var n=e.luhn;function r(){return{validate:function(e){return{valid:""===e.value||/^\d{9}$/.test(e.value)&&n(e.value)}}}}export{r as siren};
