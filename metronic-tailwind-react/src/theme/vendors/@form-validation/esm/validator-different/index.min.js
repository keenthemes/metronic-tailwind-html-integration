/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-different
 * @version 2.4.0
 */

function o(){return{validate:function(o){var t="function"==typeof o.options.compare?o.options.compare.call(this):o.options.compare;return{valid:""===t||o.value!==t}}}}export{o as different};
