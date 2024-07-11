/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-remote
 * @version 2.4.0
 */

"use strict";var e=require("@form-validation/core"),a=e.utils.fetch,r=e.utils.removeUndefined;exports.remote=function(){var e={crossDomain:!1,data:{},headers:{},method:"GET",validKey:"valid"};return{validate:function(t){if(""===t.value)return Promise.resolve({valid:!0});var i=Object.assign({},e,r(t.options)),o=i.data;"function"==typeof i.data&&(o=i.data.call(this,t)),"string"==typeof o&&(o=JSON.parse(o)),o[i.name||t.field]=t.value;var s="function"==typeof i.url?i.url.call(this,t):i.url;return a(s,{crossDomain:i.crossDomain,headers:i.headers,method:i.method,params:o}).then((function(e){return Promise.resolve({message:e.message,meta:e,valid:"true"==="".concat(e[i.validKey])})})).catch((function(e){return Promise.reject({valid:!1})}))}}};
