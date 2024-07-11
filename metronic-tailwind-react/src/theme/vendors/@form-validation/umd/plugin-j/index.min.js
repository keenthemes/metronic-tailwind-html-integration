/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-j
 * @version 2.4.0
 */

!function(o,i){"object"==typeof exports&&"undefined"!=typeof module?i(require("jquery"),require("@form-validation/core")):"function"==typeof define&&define.amd?define(["jquery","@form-validation/core"],i):i((o="undefined"!=typeof globalThis?globalThis:o||self).$,o.FormValidation)}(this,(function(o,i){"use strict";const e=o.fn.jquery.split(" ")[0].split(".");if(+e[0]<2&&+e[1]<9||1==+e[0]&&9==+e[1]&&+e[2]<1)throw new Error("The J plugin requires jQuery version 1.9.1 or higher");o.fn.formValidation=function(e){const t=arguments;return this.each((function(){const n=o(this);let r=n.data("formValidation");const a="object"==typeof e&&e;r||(r=i.formValidation(this,a),n.data("formValidation",r).data("FormValidation",r)),"string"==typeof e&&r[e].apply(r,Array.prototype.slice.call(t,1))}))}}));
