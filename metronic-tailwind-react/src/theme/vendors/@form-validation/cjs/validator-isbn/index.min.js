/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-isbn
 * @version 2.4.0
 */

"use strict";exports.isbn=function(){return{validate:function(e){if(""===e.value)return{meta:{type:null},valid:!0};var t;switch(!0){case/^\d{9}[\dX]$/.test(e.value):case 13===e.value.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):case 13===e.value.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):t="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(e.value):case 17===e.value.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e.value):case 17===e.value.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e.value):t="ISBN13";break;default:return{meta:{type:null},valid:!1}}var a,s,l=e.value.replace(/[^0-9X]/gi,"").split(""),d=l.length,u=0;switch(t){case"ISBN10":for(u=0,a=0;a<d-1;a++)u+=parseInt(l[a],10)*(10-a);return 11===(s=11-u%11)?s=0:10===s&&(s="X"),{meta:{type:t},valid:"".concat(s)===l[d-1]};case"ISBN13":for(u=0,a=0;a<d-1;a++)u+=a%2==0?parseInt(l[a],10):3*parseInt(l[a],10);return 10===(s=10-u%10)&&(s="0"),{meta:{type:t},valid:"".concat(s)===l[d-1]}}}}};
