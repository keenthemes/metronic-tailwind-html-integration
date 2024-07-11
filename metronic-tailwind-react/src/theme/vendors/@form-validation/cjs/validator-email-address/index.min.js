/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-email-address
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core").utils.removeUndefined,a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;exports.emailAddress=function(){return{validate:function(t){if(""===t.value)return{valid:!0};var i=Object.assign({},{multiple:!1,requireGlobalDomain:!1,separator:/[,;]/},e(t.options)),l=i.requireGlobalDomain?r:a;if(!0===i.multiple||"true"==="".concat(i.multiple)){for(var s=i.separator||/[,;]/,u=function(e,a){for(var r=e.split(/"/),t=r.length,i=[],l="",s=0;s<t;s++)if(s%2==0){var u=r[s].split(a),n=u.length;if(1===n)l+=u[0];else{i.push(l+u[0]);for(var o=1;o<n-1;o++)i.push(u[o]);l=u[n-1]}}else l+='"'+r[s],s<t-1&&(l+='"');return i.push(l),i}(t.value,s),n=u.length,o=0;o<n;o++)if(!l.test(u[o]))return{valid:!1};return{valid:!0}}return{valid:l.test(t.value)}}}};
