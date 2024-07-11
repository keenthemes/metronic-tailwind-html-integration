/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-remote
 * @version 2.4.0
 */

import{utils as e}from"../core/index.min.js";var a=e.fetch,r=e.removeUndefined;function t(){var e={crossDomain:!1,data:{},headers:{},method:"GET",validKey:"valid"};return{validate:function(t){if(""===t.value)return Promise.resolve({valid:!0});var o=Object.assign({},e,r(t.options)),i=o.data;"function"==typeof o.data&&(i=o.data.call(this,t)),"string"==typeof i&&(i=JSON.parse(i)),i[o.name||t.field]=t.value;var n="function"==typeof o.url?o.url.call(this,t):o.url;return a(n,{crossDomain:o.crossDomain,headers:o.headers,method:o.method,params:i}).then((function(e){return Promise.resolve({message:e.message,meta:e,valid:"true"==="".concat(e[o.validKey])})})).catch((function(e){return Promise.reject({valid:!1})}))}}}export{t as remote};
