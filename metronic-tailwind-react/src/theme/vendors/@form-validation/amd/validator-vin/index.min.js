/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-vin
 * @version 2.4.0
 */

define(["exports"],(function(t){"use strict";t.vin=function(){return{validate:function(t){if(""===t.value)return{valid:!0};if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(t.value))return{valid:!1};for(var r=t.value.toUpperCase(),a={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9},n=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],e=r.length,i=0,u=0;u<e;u++)i+=a["".concat(r.charAt(u))]*n[u];var c="".concat(i%11);return"10"===c&&(c="X"),{valid:c===r.charAt(8)}}}}}));
