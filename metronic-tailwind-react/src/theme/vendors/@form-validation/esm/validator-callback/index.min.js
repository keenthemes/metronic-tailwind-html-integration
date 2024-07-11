/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-callback
 * @version 2.4.0
 */

import{utils as o}from"../core/index.min.js";var n=o.call;function r(){return{validate:function(o){var r=n(o.options.callback,[o]);return"boolean"==typeof r?{valid:r}:r}}}export{r as callback};
