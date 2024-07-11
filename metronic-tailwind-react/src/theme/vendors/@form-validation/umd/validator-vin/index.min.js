/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-vin
 * @version 2.4.0
 */

!function(t,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):((t="undefined"!=typeof globalThis?globalThis:t||self).FormValidation=t.FormValidation||{},t.FormValidation.validators=t.FormValidation.validators||{},t.FormValidation.validators.vin=a())}(this,(function(){"use strict";return function(){return{validate:function(t){if(""===t.value)return{valid:!0};if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(t.value))return{valid:!1};for(var a=t.value.toUpperCase(),i={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},e=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],n=a.length,o=0,r=0;r<n;r++)o+=i["".concat(a.charAt(r))]*e[r];var l="".concat(o%11);return"10"===l&&(l="X"),{valid:l===a.charAt(8)}}}}}));
