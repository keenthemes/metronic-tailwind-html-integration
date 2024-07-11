/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-email-address
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var r=a.utils.removeUndefined,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;e.emailAddress=function(){return{validate:function(e){if(""===e.value)return{valid:!0};var a=Object.assign({},{multiple:!1,requireGlobalDomain:!1,separator:/[,;]/},r(e.options)),l=a.requireGlobalDomain?i:t;if(!0===a.multiple||"true"==="".concat(a.multiple)){for(var n=a.separator||/[,;]/,s=function(e,a){for(var r=e.split(/"/),t=r.length,i=[],l="",n=0;n<t;n++)if(n%2==0){var s=r[n].split(a),u=s.length;if(1===u)l+=s[0];else{i.push(l+s[0]);for(var o=1;o<u-1;o++)i.push(s[o]);l=s[u-1]}}else l+='"'+r[n],n<t-1&&(l+='"');return i.push(l),i}(e.value,n),u=s.length,o=0;o<u;o++)if(!l.test(s[o]))return{valid:!1};return{valid:!0}}return{valid:l.test(e.value)}}}}}));
