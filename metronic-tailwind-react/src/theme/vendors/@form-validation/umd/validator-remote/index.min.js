/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-remote
 * @version 2.4.0
 */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("@form-validation/core")):"function"==typeof define&&define.amd?define(["@form-validation/core"],a):((e="undefined"!=typeof globalThis?globalThis:e||self).FormValidation=e.FormValidation||{},e.FormValidation.validators=e.FormValidation.validators||{},e.FormValidation.validators.remote=a(e.FormValidation))}(this,(function(e){"use strict";var a=e.utils.fetch,o=e.utils.removeUndefined;return function(){var e={crossDomain:!1,data:{},headers:{},method:"GET",validKey:"valid"};return{validate:function(t){if(""===t.value)return Promise.resolve({valid:!0});var i=Object.assign({},e,o(t.options)),r=i.data;"function"==typeof i.data&&(r=i.data.call(this,t)),"string"==typeof r&&(r=JSON.parse(r)),r[i.name||t.field]=t.value;var n="function"==typeof i.url?i.url.call(this,t):i.url;return a(n,{crossDomain:i.crossDomain,headers:i.headers,method:i.method,params:r}).then((function(e){return Promise.resolve({message:e.message,meta:e,valid:"true"==="".concat(e[i.validKey])})})).catch((function(e){return Promise.reject({valid:!1})}))}}}}));
