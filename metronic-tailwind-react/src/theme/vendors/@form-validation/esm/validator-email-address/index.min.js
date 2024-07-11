/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-email-address
 * @version 2.4.0
 */

import{utils as a}from"../core/index.min.js";var e=a.removeUndefined,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;function i(){return{validate:function(a){if(""===a.value)return{valid:!0};var i=Object.assign({},{multiple:!1,requireGlobalDomain:!1,separator:/[,;]/},e(a.options)),l=i.requireGlobalDomain?t:r;if(!0===i.multiple||"true"==="".concat(i.multiple)){for(var n=i.separator||/[,;]/,u=function(a,e){for(var r=a.split(/"/),t=r.length,i=[],l="",n=0;n<t;n++)if(n%2==0){var u=r[n].split(e),o=u.length;if(1===o)l+=u[0];else{i.push(l+u[0]);for(var s=1;s<o-1;s++)i.push(u[s]);l=u[o-1]}}else l+='"'+r[n],n<t-1&&(l+='"');return i.push(l),i}(a.value,n),o=u.length,s=0;s<o;s++)if(!l.test(u[s]))return{valid:!1};return{valid:!0}}return{valid:l.test(a.value)}}}}export{i as emailAddress};
