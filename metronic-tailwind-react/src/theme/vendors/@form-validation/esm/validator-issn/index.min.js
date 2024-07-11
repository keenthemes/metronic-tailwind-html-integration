/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-issn
 * @version 2.4.0
 */

function e(){return{validate:function(e){if(""===e.value)return{valid:!0};if(!/^\d{4}-\d{3}[\dX]$/.test(e.value))return{valid:!1};var r=e.value.replace(/[^0-9X]/gi,"").split(""),t=r.length,a=0;"X"===r[7]&&(r[7]="10");for(var i=0;i<t;i++)a+=parseInt(r[i],10)*(8-i);return{valid:a%11==0}}}}export{e as issn};
