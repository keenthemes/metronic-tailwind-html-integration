/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-remote
 * @version 2.4.0
 */

define(["exports","@form-validation/core"],(function(e,a){"use strict";var t=a.utils.fetch,r=a.utils.removeUndefined;e.remote=function(){var e={crossDomain:!1,data:{},headers:{},method:"GET",validKey:"valid"};return{validate:function(a){if(""===a.value)return Promise.resolve({valid:!0});var i=Object.assign({},e,r(a.options)),o=i.data;"function"==typeof i.data&&(o=i.data.call(this,a)),"string"==typeof o&&(o=JSON.parse(o)),o[i.name||a.field]=a.value;var n="function"==typeof i.url?i.url.call(this,a):i.url;return t(n,{crossDomain:i.crossDomain,headers:i.headers,method:i.method,params:o}).then((function(e){return Promise.resolve({message:e.message,meta:e,valid:"true"==="".concat(e[i.validKey])})})).catch((function(e){return Promise.reject({valid:!1})}))}}}}));
