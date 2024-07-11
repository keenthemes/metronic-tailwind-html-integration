/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-email-address
 * @version 2.4.0
 */

!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],e):((a="undefined"!=typeof globalThis?globalThis:a||self).FormValidation=a.FormValidation||{},a.FormValidation.validators=a.FormValidation.validators||{},a.FormValidation.validators.emailAddress=e(a.FormValidation))}(this,(function(a){"use strict";var e=a.utils.removeUndefined,i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;return function(){return{validate:function(a){if(""===a.value)return{valid:!0};var r=Object.assign({},{multiple:!1,requireGlobalDomain:!1,separator:/[,;]/},e(a.options)),o=r.requireGlobalDomain?t:i;if(!0===r.multiple||"true"==="".concat(r.multiple)){for(var l=r.separator||/[,;]/,n=function(a,e){for(var i=a.split(/"/),t=i.length,r=[],o="",l=0;l<t;l++)if(l%2==0){var n=i[l].split(e),s=n.length;if(1===s)o+=n[0];else{r.push(o+n[0]);for(var u=1;u<s-1;u++)r.push(n[u]);o=n[s-1]}}else o+='"'+i[l],l<t-1&&(o+='"');return r.push(o),r}(a.value,l),s=n.length,u=0;u<s;u++)if(!o.test(n[u]))return{valid:!1};return{valid:!0}}return{valid:o.test(a.value)}}}}}));
