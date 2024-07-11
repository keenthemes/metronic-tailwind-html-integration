'use strict';

var lib$B = {exports: {}};

var index_min$B = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/core
 * @version 2.4.0
 */

var hasRequiredIndex_min$B;

function requireIndex_min$B () {
	if (hasRequiredIndex_min$B) return index_min$B;
	hasRequiredIndex_min$B = 1;
var e={luhn:function(e){for(var t=e.length,i=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],r=0,n=0;t--;)n+=i[r][parseInt(e.charAt(t),10)],r=1-r;return n%10==0&&n>0},mod11And10:function(e){for(var t=e.length,i=5,r=0;r<t;r++)i=(2*(i||10)%11+parseInt(e.charAt(r),10))%10;return 1===i},mod37And36:function(e,t){void 0===t&&(t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");for(var i=e.length,r=t.length,n=Math.floor(r/2),s=0;s<i;s++)n=(2*(n||r)%(r+1)+t.indexOf(e.charAt(s)))%r;return 1===n},mod97And10:function(e){for(var t=function(e){return e.split("").map((function(e){var t=e.charCodeAt(0);return t>=65&&t<=90?t-55:e})).join("").split("").map((function(e){return parseInt(e,10)}))}(e),i=0,r=t.length,n=0;n<r-1;++n)i=10*(i+t[n])%97;return (i+=t[r-1])%97==1},verhoeff:function(e){for(var t=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],i=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],r=e.reverse(),n=0,s=0;s<r.length;s++)n=t[n][i[s%8][r[s]]];return 0===n}};var t=function(){function e(e,t){this.fields={},this.elements={},this.ee={fns:{},clear:function(){this.fns={};},emit:function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];(this.fns[e]||[]).map((function(e){return e.apply(e,t)}));},off:function(e,t){if(this.fns[e]){var i=this.fns[e].indexOf(t);i>=0&&this.fns[e].splice(i,1);}},on:function(e,t){(this.fns[e]=this.fns[e]||[]).push(t);}},this.filter={filters:{},add:function(e,t){(this.filters[e]=this.filters[e]||[]).push(t);},clear:function(){this.filters={};},execute:function(e,t,i){if(!this.filters[e]||!this.filters[e].length)return t;for(var r=t,n=this.filters[e],s=n.length,l=0;l<s;l++)r=n[l].apply(r,i);return r},remove:function(e,t){this.filters[e]&&(this.filters[e]=this.filters[e].filter((function(e){return e!==t})));}},this.plugins={},this.results=new Map,this.validators={},this.form=e,this.fields=t;}return e.prototype.on=function(e,t){return this.ee.on(e,t),this},e.prototype.off=function(e,t){return this.ee.off(e,t),this},e.prototype.emit=function(e){for(var t,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return (t=this.ee).emit.apply(t,function(e,t,i){if(i||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}([e],i,!1)),this},e.prototype.registerPlugin=function(e,t){if(this.plugins[e])throw new Error("The plguin ".concat(e," is registered"));return t.setCore(this),t.install(),this.plugins[e]=t,this},e.prototype.deregisterPlugin=function(e){var t=this.plugins[e];return t&&t.uninstall(),delete this.plugins[e],this},e.prototype.enablePlugin=function(e){var t=this.plugins[e];return t&&t.enable(),this},e.prototype.disablePlugin=function(e){var t=this.plugins[e];return t&&t.disable(),this},e.prototype.isPluginEnabled=function(e){var t=this.plugins[e];return !!t&&t.isPluginEnabled()},e.prototype.registerValidator=function(e,t){if(this.validators[e])throw new Error("The validator ".concat(e," is registered"));return this.validators[e]=t,this},e.prototype.registerFilter=function(e,t){return this.filter.add(e,t),this},e.prototype.deregisterFilter=function(e,t){return this.filter.remove(e,t),this},e.prototype.executeFilter=function(e,t,i){return this.filter.execute(e,t,i)},e.prototype.addField=function(e,t){var i=Object.assign({},{selector:"",validators:{}},t);return this.fields[e]=this.fields[e]?{selector:i.selector||this.fields[e].selector,validators:Object.assign({},this.fields[e].validators,i.validators)}:i,this.elements[e]=this.queryElements(e),this.emit("core.field.added",{elements:this.elements[e],field:e,options:this.fields[e]}),this},e.prototype.removeField=function(e){if(!this.fields[e])throw new Error("The field ".concat(e," validators are not defined. Please ensure the field is added first"));var t=this.elements[e],i=this.fields[e];return delete this.elements[e],delete this.fields[e],this.emit("core.field.removed",{elements:t,field:e,options:i}),this},e.prototype.validate=function(){var e=this;return this.emit("core.form.validating",{formValidation:this}),this.filter.execute("validate-pre",Promise.resolve(),[]).then((function(){return Promise.all(Object.keys(e.fields).map((function(t){return e.validateField(t)}))).then((function(t){switch(!0){case-1!==t.indexOf("Invalid"):return e.emit("core.form.invalid",{formValidation:e}),Promise.resolve("Invalid");case-1!==t.indexOf("NotValidated"):return e.emit("core.form.notvalidated",{formValidation:e}),Promise.resolve("NotValidated");default:return e.emit("core.form.valid",{formValidation:e}),Promise.resolve("Valid")}}))}))},e.prototype.validateField=function(e){var t=this,i=this.results.get(e);if("Valid"===i||"Invalid"===i)return Promise.resolve(i);this.emit("core.field.validating",e);var r=this.elements[e];if(0===r.length)return this.emit("core.field.valid",e),Promise.resolve("Valid");var n=r[0].getAttribute("type");return "radio"===n||"checkbox"===n||1===r.length?this.validateElement(e,r[0]):Promise.all(r.map((function(i){return t.validateElement(e,i)}))).then((function(i){switch(!0){case-1!==i.indexOf("Invalid"):return t.emit("core.field.invalid",e),t.results.set(e,"Invalid"),Promise.resolve("Invalid");case-1!==i.indexOf("NotValidated"):return t.emit("core.field.notvalidated",e),t.results.delete(e),Promise.resolve("NotValidated");default:return t.emit("core.field.valid",e),t.results.set(e,"Valid"),Promise.resolve("Valid")}}))},e.prototype.validateElement=function(e,t){var i=this;this.results.delete(e);var r=this.elements[e];if(this.filter.execute("element-ignored",!1,[e,t,r]))return this.emit("core.element.ignored",{element:t,elements:r,field:e}),Promise.resolve("Ignored");var n=this.fields[e].validators;this.emit("core.element.validating",{element:t,elements:r,field:e});var s=Object.keys(n).map((function(r){return function(){return i.executeValidator(e,t,r,n[r])}}));return this.waterfall(s).then((function(n){var s=-1===n.indexOf("Invalid");i.emit("core.element.validated",{element:t,elements:r,field:e,valid:s});var l=t.getAttribute("type");return "radio"!==l&&"checkbox"!==l&&1!==r.length||i.emit(s?"core.field.valid":"core.field.invalid",e),Promise.resolve(s?"Valid":"Invalid")})).catch((function(n){return i.emit("core.element.notvalidated",{element:t,elements:r,field:e}),Promise.resolve(n)}))},e.prototype.executeValidator=function(e,t,i,r){var n=this,s=this.elements[e],l=this.filter.execute("validator-name",i,[i,e]);if(r.message=this.filter.execute("validator-message",r.message,[this.locale,e,l]),!this.validators[l]||!1===r.enabled)return this.emit("core.validator.validated",{element:t,elements:s,field:e,result:this.normalizeResult(e,l,{valid:!0}),validator:l}),Promise.resolve("Valid");var o=this.validators[l],a=this.getElementValue(e,t,l);if(!this.filter.execute("field-should-validate",!0,[e,t,a,i]))return this.emit("core.validator.notvalidated",{element:t,elements:s,field:e,validator:i}),Promise.resolve("NotValidated");this.emit("core.validator.validating",{element:t,elements:s,field:e,validator:i});var d=o().validate({element:t,elements:s,field:e,l10n:this.localization,options:r,value:a});if("function"==typeof d.then)return d.then((function(r){var l=n.normalizeResult(e,i,r);return n.emit("core.validator.validated",{element:t,elements:s,field:e,result:l,validator:i}),l.valid?"Valid":"Invalid"}));var c=this.normalizeResult(e,i,d);return this.emit("core.validator.validated",{element:t,elements:s,field:e,result:c,validator:i}),Promise.resolve(c.valid?"Valid":"Invalid")},e.prototype.getElementValue=function(e,t,i){var r=function(e,t,i,r){var n=(i.getAttribute("type")||"").toLowerCase(),s=i.tagName.toLowerCase();if("textarea"===s)return i.value;if("select"===s){var l=i,o=l.selectedIndex;return o>=0?l.options.item(o).value:""}if("input"===s){if("radio"===n||"checkbox"===n){var a=r.filter((function(e){return e.checked})).length;return 0===a?"":a+""}return i.value}return ""}(this.form,0,t,this.elements[e]);return this.filter.execute("field-value",r,[r,e,t,i])},e.prototype.getElements=function(e){return this.elements[e]},e.prototype.getFields=function(){return this.fields},e.prototype.getFormElement=function(){return this.form},e.prototype.getLocale=function(){return this.locale},e.prototype.getPlugin=function(e){return this.plugins[e]},e.prototype.updateFieldStatus=function(e,t,i){var r=this,n=this.elements[e],s=n[0].getAttribute("type");if(("radio"===s||"checkbox"===s?[n[0]]:n).forEach((function(n){return r.updateElementStatus(e,n,t,i)})),i)"Invalid"===t&&(this.emit("core.field.invalid",e),this.results.set(e,"Invalid"));else switch(t){case"NotValidated":this.emit("core.field.notvalidated",e),this.results.delete(e);break;case"Validating":this.emit("core.field.validating",e),this.results.delete(e);break;case"Valid":this.emit("core.field.valid",e),this.results.set(e,"Valid");break;case"Invalid":this.emit("core.field.invalid",e),this.results.set(e,"Invalid");}return this},e.prototype.updateElementStatus=function(e,t,i,r){var n=this,s=this.elements[e],l=this.fields[e].validators,o=r?[r]:Object.keys(l);switch(i){case"NotValidated":o.forEach((function(i){return n.emit("core.validator.notvalidated",{element:t,elements:s,field:e,validator:i})})),this.emit("core.element.notvalidated",{element:t,elements:s,field:e});break;case"Validating":o.forEach((function(i){return n.emit("core.validator.validating",{element:t,elements:s,field:e,validator:i})})),this.emit("core.element.validating",{element:t,elements:s,field:e});break;case"Valid":o.forEach((function(i){return n.emit("core.validator.validated",{element:t,elements:s,field:e,result:{message:l[i].message,valid:!0},validator:i})})),this.emit("core.element.validated",{element:t,elements:s,field:e,valid:!0});break;case"Invalid":o.forEach((function(i){return n.emit("core.validator.validated",{element:t,elements:s,field:e,result:{message:l[i].message,valid:!1},validator:i})})),this.emit("core.element.validated",{element:t,elements:s,field:e,valid:!1});}return this},e.prototype.resetForm=function(e){var t=this;return Object.keys(this.fields).forEach((function(i){return t.resetField(i,e)})),this.emit("core.form.reset",{formValidation:this,reset:e}),this},e.prototype.resetField=function(e,t){if(t){var i=this.elements[e],r=i[0].getAttribute("type");i.forEach((function(e){"radio"===r||"checkbox"===r?(e.removeAttribute("selected"),e.removeAttribute("checked"),e.checked=!1):(e.setAttribute("value",""),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(e.value=""));}));}return this.updateFieldStatus(e,"NotValidated"),this.emit("core.field.reset",{field:e,reset:t}),this},e.prototype.revalidateField=function(e){return this.fields[e]?(this.updateFieldStatus(e,"NotValidated"),this.validateField(e)):Promise.resolve("Ignored")},e.prototype.disableValidator=function(e,t){if(!this.fields[e])return this;var i=this.elements[e];return this.toggleValidator(!1,e,t),this.emit("core.validator.disabled",{elements:i,field:e,formValidation:this,validator:t}),this},e.prototype.enableValidator=function(e,t){if(!this.fields[e])return this;var i=this.elements[e];return this.toggleValidator(!0,e,t),this.emit("core.validator.enabled",{elements:i,field:e,formValidation:this,validator:t}),this},e.prototype.updateValidatorOption=function(e,t,i,r){return this.fields[e]&&this.fields[e].validators&&this.fields[e].validators[t]&&(this.fields[e].validators[t][i]=r),this},e.prototype.setFieldOptions=function(e,t){return this.fields[e]=t,this},e.prototype.destroy=function(){var e=this;return Object.keys(this.plugins).forEach((function(t){return e.plugins[t].uninstall()})),this.ee.clear(),this.filter.clear(),this.results.clear(),this.plugins={},this},e.prototype.setLocale=function(e,t){return this.locale=e,this.localization=t,this},e.prototype.waterfall=function(e){return e.reduce((function(e,t){return e.then((function(e){return t().then((function(t){return e.push(t),e}))}))}),Promise.resolve([]))},e.prototype.queryElements=function(e){var t=this.fields[e].selector?"#"===this.fields[e].selector.charAt(0)?'[id="'.concat(this.fields[e].selector.substring(1),'"]'):this.fields[e].selector:'[name="'.concat(e.replace(/"/g,'\\"'),'"]');return [].slice.call(this.form.querySelectorAll(t))},e.prototype.normalizeResult=function(e,t,i){var r=this.fields[e].validators[t];return Object.assign({},i,{message:i.message||(r?r.message:"")||(this.localization&&this.localization[t]&&this.localization[t].default?this.localization[t].default:"")||"The field ".concat(e," is not valid")})},e.prototype.toggleValidator=function(e,t,i){var r=this,n=this.fields[t].validators;return i&&n&&n[i]?this.fields[t].validators[i].enabled=e:i||Object.keys(n).forEach((function(i){return r.fields[t].validators[i].enabled=e})),this.updateFieldStatus(t,"NotValidated",i)},e}();var i=function(){function e(e){this.opts=e,this.isEnabled=!0;}return e.prototype.setCore=function(e){return this.core=e,this},e.prototype.enable=function(){return this.isEnabled=!0,this.onEnabled(),this},e.prototype.disable=function(){return this.isEnabled=!1,this.onDisabled(),this},e.prototype.isPluginEnabled=function(){return this.isEnabled},e.prototype.onEnabled=function(){},e.prototype.onDisabled=function(){},e.prototype.install=function(){},e.prototype.uninstall=function(){},e}();var r=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return i?i.call(e,t):[].slice.call(e.parentElement.querySelectorAll(t)).indexOf(e)>=0},n={call:function(e,t){if("function"==typeof e)return e.apply(this,t);if("string"==typeof e){var i=e;"()"===i.substring(i.length-2)&&(i=i.substring(0,i.length-2));for(var r=i.split("."),n=r.pop(),s=window,l=0,o=r;l<o.length;l++){s=s[o[l]];}return void 0===s[n]?null:s[n].apply(this,t)}},classSet:function(e,t){var i=[],r=[];Object.keys(t).forEach((function(e){e&&(t[e]?i.push(e):r.push(e));})),r.forEach((function(t){return function(e,t){t.split(" ").forEach((function(t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"");}));}(e,t)})),i.forEach((function(t){return function(e,t){t.split(" ").forEach((function(t){e.classList?e.classList.add(t):" ".concat(e.className," ").indexOf(" ".concat(t," "))&&(e.className+=" ".concat(t));}));}(e,t)}));},closest:function(e,t){for(var i=e;i&&!r(i,t);)i=i.parentElement;return i},fetch:function(e,t){return new Promise((function(i,r){var n,s=Object.assign({},{crossDomain:!1,headers:{},method:"GET",params:{}},t),l=Object.keys(s.params).map((function(e){return "".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(s.params[e]))})).join("&"),o=e.indexOf("?")>-1,a="GET"===s.method?"".concat(e).concat(o?"&":"?").concat(l):e;if(s.crossDomain){var d=document.createElement("script"),c="___FormValidationFetch_".concat(Array(12).fill("").map((function(e){return Math.random().toString(36).charAt(2)})).join(""),"___");window[c]=function(e){delete window[c],i(e);},d.src="".concat(a).concat(o?"&":"?","callback=").concat(c),d.async=!0,d.addEventListener("load",(function(){d.parentNode.removeChild(d);})),d.addEventListener("error",(function(){return r})),document.head.appendChild(d);}else {var u=new XMLHttpRequest;u.open(s.method,a),u.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"===s.method&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),Object.keys(s.headers).forEach((function(e){return u.setRequestHeader(e,s.headers[e])})),u.addEventListener("load",(function(){i(JSON.parse(this.responseText));})),u.addEventListener("error",(function(){return r})),u.send((n=s.params,Object.keys(n).map((function(e){return "".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n[e]))})).join("&")));}}))},format:function(e,t){var i=Array.isArray(t)?t:[t],r=e;return i.forEach((function(e){r=r.replace("%s",e);})),r},hasClass:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )".concat(t,"( |$)"),"gi").test(e.className)},isValidDate:function(e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return !1;if(e<1e3||e>9999||t<=0||t>12)return !1;if(i<=0||i>[31,e%400==0||e%100!=0&&e%4==0?29:28,31,30,31,30,31,31,30,31,30,31][t-1])return !1;if(!0===r){var n=new Date,s=n.getFullYear(),l=n.getMonth(),o=n.getDate();return e<s||e===s&&t-1<l||e===s&&t-1===l&&i<o}return !0},removeUndefined:function(e){return e?Object.entries(e).reduce((function(e,t){var i=t[0],r=t[1];return void 0===r||(e[i]=r),e}),{}):{}}};index_min$B.Plugin=i,index_min$B.algorithms=e,index_min$B.formValidation=function(e,i){var r=Object.assign({},{fields:{},locale:"en_US",plugins:{},init:function(e){}},i),n=new t(e,r.fields);return n.setLocale(r.locale,r.localization),Object.keys(r.plugins).forEach((function(e){return n.registerPlugin(e,r.plugins[e])})),r.init(n),Object.keys(r.fields).forEach((function(e){return n.addField(e,r.fields[e])})),n},index_min$B.utils=n;
	return index_min$B;
}

var cjs$B = {};

var hasRequiredCjs$B;

function requireCjs$B () {
	if (hasRequiredCjs$B) return cjs$B;
	hasRequiredCjs$B = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Implement Luhn validation algorithm
	 * Credit to https://gist.github.com/ShirtlessKirk/2134376
	 *
	 * @see http://en.wikipedia.org/wiki/Luhn
	 * @param {string} value
	 * @returns {boolean}
	 */
	function luhn(value) {
	    var length = value.length;
	    var prodArr = [
	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
	    ];
	    var mul = 0;
	    var sum = 0;
	    while (length--) {
	        sum += prodArr[mul][parseInt(value.charAt(length), 10)];
	        mul = 1 - mul;
	    }
	    return sum % 10 === 0 && sum > 0;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Implement modulus 11, 10 (ISO 7064) algorithm
	 *
	 * @param {string} value
	 * @returns {boolean}
	 */
	function mod11And10(value) {
	    var length = value.length;
	    var check = 5;
	    for (var i = 0; i < length; i++) {
	        check = ((((check || 10) * 2) % 11) + parseInt(value.charAt(i), 10)) % 10;
	    }
	    return check === 1;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Implements Mod 37, 36 (ISO 7064) algorithm
	 *
	 * @param {string} value
	 * @param {string} [alphabet]
	 * @returns {boolean}
	 */
	function mod37And36(value, alphabet) {
	    if (alphabet === void 0) { alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
	    var length = value.length;
	    var modulus = alphabet.length;
	    var check = Math.floor(modulus / 2);
	    for (var i = 0; i < length; i++) {
	        check = ((((check || modulus) * 2) % (modulus + 1)) + alphabet.indexOf(value.charAt(i))) % modulus;
	    }
	    return check === 1;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function transform(input) {
	    return input
	        .split('')
	        .map(function (c) {
	        var code = c.charCodeAt(0);
	        // 65, 66, ..., 90 are the char code of A, B, ..., Z
	        return code >= 65 && code <= 90
	            ? // Replace A, B, C, ..., Z with 10, 11, ..., 35
	                code - 55
	            : c;
	    })
	        .join('')
	        .split('')
	        .map(function (c) { return parseInt(c, 10); });
	}
	function mod97And10(input) {
	    var digits = transform(input);
	    var temp = 0;
	    var length = digits.length;
	    for (var i = 0; i < length - 1; ++i) {
	        temp = ((temp + digits[i]) * 10) % 97;
	    }
	    temp += digits[length - 1];
	    return temp % 97 === 1;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Implement Verhoeff validation algorithm
	 * Credit to Sergey Petushkov, 2014
	 *
	 * @see https://en.wikipedia.org/wiki/Verhoeff_algorithm
	 * @param {string} value
	 * @returns {boolean}
	 */
	function verhoeff(value) {
	    // Multiplication table d
	    var d = [
	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
	        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
	        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
	        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
	        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
	        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
	        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
	        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
	        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
	    ];
	    // Permutation table p
	    var p = [
	        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
	        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
	        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
	        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
	        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
	        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
	        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
	    ];
	    // Inverse table inv
	    var invertedArray = value.reverse();
	    var c = 0;
	    for (var i = 0; i < invertedArray.length; i++) {
	        c = d[c][p[i % 8][invertedArray[i]]];
	    }
	    return c === 0;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var index$1 = {
	    luhn: luhn,
	    mod11And10: mod11And10,
	    mod37And36: mod37And36,
	    mod97And10: mod97And10,
	    verhoeff: verhoeff,
	};

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */


	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * @param {HTMLElement} form The form element
	 * @param {string} field The field name
	 * @param {HTMLElement} element The field element
	 * @param {HTMLElement[]} elements The list of elements which have the same name as `field`
	 * @return {string}
	 */
	function getFieldValue(form, field, element, elements) {
	    var type = (element.getAttribute('type') || '').toLowerCase();
	    var tagName = element.tagName.toLowerCase();
	    if (tagName === 'textarea') {
	        return element.value;
	    }
	    if (tagName === 'select') {
	        var select = element;
	        var index = select.selectedIndex;
	        return index >= 0 ? select.options.item(index).value : '';
	    }
	    if (tagName === 'input') {
	        if ('radio' === type || 'checkbox' === type) {
	            var checked = elements.filter(function (ele) { return ele.checked; }).length;
	            return checked === 0 ? '' : checked + '';
	        }
	        else {
	            return element.value;
	        }
	    }
	    return '';
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function emitter() {
	    return {
	        fns: {},
	        clear: function () {
	            this.fns = {};
	        },
	        emit: function (event) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            (this.fns[event] || []).map(function (handler) { return handler.apply(handler, args); });
	        },
	        off: function (event, func) {
	            if (this.fns[event]) {
	                var index = this.fns[event].indexOf(func);
	                if (index >= 0) {
	                    this.fns[event].splice(index, 1);
	                }
	            }
	        },
	        on: function (event, func) {
	            (this.fns[event] = this.fns[event] || []).push(func);
	        },
	    };
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function filter() {
	    return {
	        filters: {},
	        add: function (name, func) {
	            (this.filters[name] = this.filters[name] || []).push(func);
	        },
	        clear: function () {
	            this.filters = {};
	        },
	        execute: function (name, defaultValue, args) {
	            if (!this.filters[name] || !this.filters[name].length) {
	                return defaultValue;
	            }
	            var result = defaultValue;
	            var filters = this.filters[name];
	            var count = filters.length;
	            for (var i = 0; i < count; i++) {
	                result = filters[i].apply(result, args);
	            }
	            return result;
	        },
	        remove: function (name, func) {
	            if (this.filters[name]) {
	                this.filters[name] = this.filters[name].filter(function (f) { return f !== func; });
	            }
	        },
	    };
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var Core = /** @class */ (function () {
	    function Core(form, fields) {
	        this.fields = {};
	        this.elements = {};
	        this.ee = emitter();
	        this.filter = filter();
	        this.plugins = {};
	        // Store the result of validation for each field
	        this.results = new Map();
	        this.validators = {};
	        this.form = form;
	        this.fields = fields;
	    }
	    Core.prototype.on = function (event, func) {
	        this.ee.on(event, func);
	        return this;
	    };
	    Core.prototype.off = function (event, func) {
	        this.ee.off(event, func);
	        return this;
	    };
	    Core.prototype.emit = function (event) {
	        var _a;
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        (_a = this.ee).emit.apply(_a, __spreadArray([event], args, false));
	        return this;
	    };
	    Core.prototype.registerPlugin = function (name, plugin) {
	        // Check if whether the plugin is registered
	        if (this.plugins[name]) {
	            throw new Error("The plguin ".concat(name, " is registered"));
	        }
	        // Install the plugin
	        plugin.setCore(this);
	        plugin.install();
	        this.plugins[name] = plugin;
	        return this;
	    };
	    Core.prototype.deregisterPlugin = function (name) {
	        var plugin = this.plugins[name];
	        if (plugin) {
	            plugin.uninstall();
	        }
	        delete this.plugins[name];
	        return this;
	    };
	    Core.prototype.enablePlugin = function (name) {
	        var plugin = this.plugins[name];
	        if (plugin) {
	            plugin.enable();
	        }
	        return this;
	    };
	    Core.prototype.disablePlugin = function (name) {
	        var plugin = this.plugins[name];
	        if (plugin) {
	            plugin.disable();
	        }
	        return this;
	    };
	    Core.prototype.isPluginEnabled = function (name) {
	        var plugin = this.plugins[name];
	        return plugin ? plugin.isPluginEnabled() : false;
	    };
	    Core.prototype.registerValidator = function (name, func) {
	        if (this.validators[name]) {
	            throw new Error("The validator ".concat(name, " is registered"));
	        }
	        this.validators[name] = func;
	        return this;
	    };
	    /**
	     * Add a filter
	     *
	     * @param {string} name The name of filter
	     * @param {Function} func The filter function
	     * @return {Core}
	     */
	    Core.prototype.registerFilter = function (name, func) {
	        this.filter.add(name, func);
	        return this;
	    };
	    /**
	     * Remove a filter
	     *
	     * @param {string} name The name of filter
	     * @param {Function} func The filter function
	     * @return {Core}
	     */
	    Core.prototype.deregisterFilter = function (name, func) {
	        this.filter.remove(name, func);
	        return this;
	    };
	    /**
	     * Execute a filter
	     *
	     * @param {string} name The name of filter
	     * @param {T} defaultValue The default value returns by the filter
	     * @param {array} args The filter arguments
	     * @returns {T}
	     */
	    Core.prototype.executeFilter = function (name, defaultValue, args) {
	        return this.filter.execute(name, defaultValue, args);
	    };
	    /**
	     * Add a field
	     *
	     * @param {string} field The field name
	     * @param {FieldOptions} options The field options. The options will be merged with the original validator rules
	     * if the field is already defined
	     * @return {Core}
	     */
	    Core.prototype.addField = function (field, options) {
	        var opts = Object.assign({}, {
	            selector: '',
	            validators: {},
	        }, options);
	        // Merge the options
	        this.fields[field] = this.fields[field]
	            ? {
	                selector: opts.selector || this.fields[field].selector,
	                validators: Object.assign({}, this.fields[field].validators, opts.validators),
	            }
	            : opts;
	        this.elements[field] = this.queryElements(field);
	        this.emit('core.field.added', {
	            elements: this.elements[field],
	            field: field,
	            options: this.fields[field],
	        });
	        return this;
	    };
	    /**
	     * Remove given field by name
	     *
	     * @param {string} field The field name
	     * @return {Core}
	     */
	    Core.prototype.removeField = function (field) {
	        if (!this.fields[field]) {
	            throw new Error("The field ".concat(field, " validators are not defined. Please ensure the field is added first"));
	        }
	        var elements = this.elements[field];
	        var options = this.fields[field];
	        delete this.elements[field];
	        delete this.fields[field];
	        this.emit('core.field.removed', {
	            elements: elements,
	            field: field,
	            options: options,
	        });
	        return this;
	    };
	    /**
	     * Validate all fields
	     *
	     * @return {Promise<string>}
	     */
	    Core.prototype.validate = function () {
	        var _this = this;
	        this.emit('core.form.validating', {
	            formValidation: this,
	        });
	        return this.filter.execute('validate-pre', Promise.resolve(), []).then(function () {
	            return Promise.all(Object.keys(_this.fields).map(function (field) { return _this.validateField(field); })).then(function (results) {
	                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
	                switch (true) {
	                    case results.indexOf('Invalid') !== -1:
	                        _this.emit('core.form.invalid', {
	                            formValidation: _this,
	                        });
	                        return Promise.resolve('Invalid');
	                    case results.indexOf('NotValidated') !== -1:
	                        _this.emit('core.form.notvalidated', {
	                            formValidation: _this,
	                        });
	                        return Promise.resolve('NotValidated');
	                    default:
	                        _this.emit('core.form.valid', {
	                            formValidation: _this,
	                        });
	                        return Promise.resolve('Valid');
	                }
	            });
	        });
	    };
	    /**
	     * Validate a particular field
	     *
	     * @param {string} field The field name
	     * @return {Promise<string>}
	     */
	    Core.prototype.validateField = function (field) {
	        var _this = this;
	        // Stop validation process if the field is already validated
	        var result = this.results.get(field);
	        if (result === 'Valid' || result === 'Invalid') {
	            return Promise.resolve(result);
	        }
	        this.emit('core.field.validating', field);
	        var elements = this.elements[field];
	        if (elements.length === 0) {
	            this.emit('core.field.valid', field);
	            return Promise.resolve('Valid');
	        }
	        var type = elements[0].getAttribute('type');
	        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
	            return this.validateElement(field, elements[0]);
	        }
	        else {
	            return Promise.all(elements.map(function (ele) { return _this.validateElement(field, ele); })).then(function (results) {
	                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
	                switch (true) {
	                    case results.indexOf('Invalid') !== -1:
	                        _this.emit('core.field.invalid', field);
	                        _this.results.set(field, 'Invalid');
	                        return Promise.resolve('Invalid');
	                    case results.indexOf('NotValidated') !== -1:
	                        _this.emit('core.field.notvalidated', field);
	                        _this.results.delete(field);
	                        return Promise.resolve('NotValidated');
	                    default:
	                        _this.emit('core.field.valid', field);
	                        _this.results.set(field, 'Valid');
	                        return Promise.resolve('Valid');
	                }
	            });
	        }
	    };
	    /**
	     * Validate particular element
	     *
	     * @param {string} field The field name
	     * @param {HTMLElement} ele The field element
	     * @return {Promise<string>}
	     */
	    Core.prototype.validateElement = function (field, ele) {
	        var _this = this;
	        // Reset validation result
	        this.results.delete(field);
	        var elements = this.elements[field];
	        var ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);
	        if (ignored) {
	            this.emit('core.element.ignored', {
	                element: ele,
	                elements: elements,
	                field: field,
	            });
	            return Promise.resolve('Ignored');
	        }
	        var validatorList = this.fields[field].validators;
	        this.emit('core.element.validating', {
	            element: ele,
	            elements: elements,
	            field: field,
	        });
	        var promises = Object.keys(validatorList).map(function (v) {
	            return function () { return _this.executeValidator(field, ele, v, validatorList[v]); };
	        });
	        return this.waterfall(promises)
	            .then(function (results) {
	            // `results` is an array of `Valid` or `Invalid`
	            var isValid = results.indexOf('Invalid') === -1;
	            _this.emit('core.element.validated', {
	                element: ele,
	                elements: elements,
	                field: field,
	                valid: isValid,
	            });
	            var type = ele.getAttribute('type');
	            if ('radio' === type || 'checkbox' === type || elements.length === 1) {
	                _this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
	            }
	            return Promise.resolve(isValid ? 'Valid' : 'Invalid');
	        })
	            .catch(function (reason) {
	            // reason is `NotValidated`
	            _this.emit('core.element.notvalidated', {
	                element: ele,
	                elements: elements,
	                field: field,
	            });
	            return Promise.resolve(reason);
	        });
	    };
	    /**
	     * Perform given validator on field
	     *
	     * @param {string} field The field name
	     * @param {HTMLElement} ele The field element
	     * @param {string} v The validator name
	     * @param {ValidatorOptions} opts The validator options
	     * @return {Promise<string>}
	     */
	    Core.prototype.executeValidator = function (field, ele, v, opts) {
	        var _this = this;
	        var elements = this.elements[field];
	        var name = this.filter.execute('validator-name', v, [v, field]);
	        opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);
	        // Simply pass the validator if
	        // - it isn't defined yet
	        // - or the associated validator isn't enabled
	        if (!this.validators[name] || opts.enabled === false) {
	            this.emit('core.validator.validated', {
	                element: ele,
	                elements: elements,
	                field: field,
	                result: this.normalizeResult(field, name, { valid: true }),
	                validator: name,
	            });
	            return Promise.resolve('Valid');
	        }
	        var validator = this.validators[name];
	        // Get the field value
	        var value = this.getElementValue(field, ele, name);
	        var willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);
	        if (!willValidate) {
	            this.emit('core.validator.notvalidated', {
	                element: ele,
	                elements: elements,
	                field: field,
	                validator: v,
	            });
	            return Promise.resolve('NotValidated');
	        }
	        this.emit('core.validator.validating', {
	            element: ele,
	            elements: elements,
	            field: field,
	            validator: v,
	        });
	        // Perform validation
	        var result = validator().validate({
	            element: ele,
	            elements: elements,
	            field: field,
	            l10n: this.localization,
	            options: opts,
	            value: value,
	        });
	        // Check whether the result is a `Promise`
	        var isPromise = 'function' === typeof result['then'];
	        if (isPromise) {
	            return result.then(function (r) {
	                var data = _this.normalizeResult(field, v, r);
	                _this.emit('core.validator.validated', {
	                    element: ele,
	                    elements: elements,
	                    field: field,
	                    result: data,
	                    validator: v,
	                });
	                return data.valid ? 'Valid' : 'Invalid';
	            });
	        }
	        else {
	            var data = this.normalizeResult(field, v, result);
	            this.emit('core.validator.validated', {
	                element: ele,
	                elements: elements,
	                field: field,
	                result: data,
	                validator: v,
	            });
	            return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
	        }
	    };
	    Core.prototype.getElementValue = function (field, ele, validator) {
	        var defaultValue = getFieldValue(this.form, field, ele, this.elements[field]);
	        return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
	    };
	    // Some getter methods
	    Core.prototype.getElements = function (field) {
	        return this.elements[field];
	    };
	    Core.prototype.getFields = function () {
	        return this.fields;
	    };
	    Core.prototype.getFormElement = function () {
	        return this.form;
	    };
	    Core.prototype.getLocale = function () {
	        return this.locale;
	    };
	    Core.prototype.getPlugin = function (name) {
	        return this.plugins[name];
	    };
	    /**
	     * Update the field status
	     *
	     * @param {string} field The field name
	     * @param {string} status The new status
	     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
	     * @return {Core}
	     */
	    Core.prototype.updateFieldStatus = function (field, status, validator) {
	        var _this = this;
	        var elements = this.elements[field];
	        var type = elements[0].getAttribute('type');
	        var list = 'radio' === type || 'checkbox' === type ? [elements[0]] : elements;
	        list.forEach(function (ele) { return _this.updateElementStatus(field, ele, status, validator); });
	        if (!validator) {
	            switch (status) {
	                case 'NotValidated':
	                    this.emit('core.field.notvalidated', field);
	                    this.results.delete(field);
	                    break;
	                case 'Validating':
	                    this.emit('core.field.validating', field);
	                    this.results.delete(field);
	                    break;
	                case 'Valid':
	                    this.emit('core.field.valid', field);
	                    this.results.set(field, 'Valid');
	                    break;
	                case 'Invalid':
	                    this.emit('core.field.invalid', field);
	                    this.results.set(field, 'Invalid');
	                    break;
	            }
	        }
	        else if (status === 'Invalid') {
	            // We need to mark the field as invalid because it doesn't pass the `validator`
	            this.emit('core.field.invalid', field);
	            this.results.set(field, 'Invalid');
	        }
	        return this;
	    };
	    /**
	     * Update the element status
	     *
	     * @param {string} field The field name
	     * @param {HTMLElement} ele The field element
	     * @param {string} status The new status
	     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
	     * @return {Core}
	     */
	    Core.prototype.updateElementStatus = function (field, ele, status, validator) {
	        var _this = this;
	        var elements = this.elements[field];
	        var fieldValidators = this.fields[field].validators;
	        var validatorArr = validator ? [validator] : Object.keys(fieldValidators);
	        switch (status) {
	            case 'NotValidated':
	                validatorArr.forEach(function (v) {
	                    return _this.emit('core.validator.notvalidated', {
	                        element: ele,
	                        elements: elements,
	                        field: field,
	                        validator: v,
	                    });
	                });
	                this.emit('core.element.notvalidated', {
	                    element: ele,
	                    elements: elements,
	                    field: field,
	                });
	                break;
	            case 'Validating':
	                validatorArr.forEach(function (v) {
	                    return _this.emit('core.validator.validating', {
	                        element: ele,
	                        elements: elements,
	                        field: field,
	                        validator: v,
	                    });
	                });
	                this.emit('core.element.validating', {
	                    element: ele,
	                    elements: elements,
	                    field: field,
	                });
	                break;
	            case 'Valid':
	                validatorArr.forEach(function (v) {
	                    return _this.emit('core.validator.validated', {
	                        element: ele,
	                        elements: elements,
	                        field: field,
	                        result: {
	                            message: fieldValidators[v].message,
	                            valid: true,
	                        },
	                        validator: v,
	                    });
	                });
	                this.emit('core.element.validated', {
	                    element: ele,
	                    elements: elements,
	                    field: field,
	                    valid: true,
	                });
	                break;
	            case 'Invalid':
	                validatorArr.forEach(function (v) {
	                    return _this.emit('core.validator.validated', {
	                        element: ele,
	                        elements: elements,
	                        field: field,
	                        result: {
	                            message: fieldValidators[v].message,
	                            valid: false,
	                        },
	                        validator: v,
	                    });
	                });
	                this.emit('core.element.validated', {
	                    element: ele,
	                    elements: elements,
	                    field: field,
	                    valid: false,
	                });
	                break;
	        }
	        return this;
	    };
	    /**
	     * Reset the form. It also clears all the messages, hide the feedback icons, etc.
	     *
	     * @param {boolean} reset If true, the method resets field value to empty
	     * or remove `checked`, `selected` attributes
	     * @return {Core}
	     */
	    Core.prototype.resetForm = function (reset) {
	        var _this = this;
	        Object.keys(this.fields).forEach(function (field) { return _this.resetField(field, reset); });
	        this.emit('core.form.reset', {
	            formValidation: this,
	            reset: reset,
	        });
	        return this;
	    };
	    /**
	     * Reset the field. It also clears all the messages, hide the feedback icons, etc.
	     *
	     * @param {string} field The field name
	     * @param {boolean} reset If true, the method resets field value to empty
	     * or remove `checked`, `selected` attributes
	     * @return {Core}
	     */
	    Core.prototype.resetField = function (field, reset) {
	        // Reset the field element value if needed
	        if (reset) {
	            var elements = this.elements[field];
	            var type_1 = elements[0].getAttribute('type');
	            elements.forEach(function (ele) {
	                if ('radio' === type_1 || 'checkbox' === type_1) {
	                    ele.removeAttribute('selected');
	                    ele.removeAttribute('checked');
	                    ele.checked = false;
	                }
	                else {
	                    ele.setAttribute('value', '');
	                    if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
	                        ele.value = '';
	                    }
	                }
	            });
	        }
	        // Mark the field as not validated yet
	        this.updateFieldStatus(field, 'NotValidated');
	        this.emit('core.field.reset', {
	            field: field,
	            reset: reset,
	        });
	        return this;
	    };
	    /**
	     * Revalidate a particular field. It's useful when the field value is effected by third parties
	     * (for example, attach another UI library to the field).
	     * Since there isn't an automatic way for FormValidation to know when the field value is modified in those cases,
	     * we need to revalidate the field manually.
	     *
	     * @param {string} field The field name
	     * @return {Promise<string>}
	     */
	    Core.prototype.revalidateField = function (field) {
	        if (!this.fields[field]) {
	            return Promise.resolve('Ignored');
	        }
	        this.updateFieldStatus(field, 'NotValidated');
	        return this.validateField(field);
	    };
	    /**
	     * Disable particular validator for given field
	     *
	     * @param {string} field The field name
	     * @param {string} validator The validator name. If it isn't specified, all validators will be disabled
	     * @return {Core}
	     */
	    Core.prototype.disableValidator = function (field, validator) {
	        if (!this.fields[field]) {
	            return this;
	        }
	        var elements = this.elements[field];
	        this.toggleValidator(false, field, validator);
	        this.emit('core.validator.disabled', {
	            elements: elements,
	            field: field,
	            formValidation: this,
	            validator: validator,
	        });
	        return this;
	    };
	    /**
	     * Enable particular validator for given field
	     *
	     * @param {string} field The field name
	     * @param {string} validator The validator name. If it isn't specified, all validators will be enabled
	     * @return {Core}
	     */
	    Core.prototype.enableValidator = function (field, validator) {
	        if (!this.fields[field]) {
	            return this;
	        }
	        var elements = this.elements[field];
	        this.toggleValidator(true, field, validator);
	        this.emit('core.validator.enabled', {
	            elements: elements,
	            field: field,
	            formValidation: this,
	            validator: validator,
	        });
	        return this;
	    };
	    /**
	     * Update option of particular validator for given field
	     *
	     * @param {string} field The field name
	     * @param {string} validator The validator name
	     * @param {string} name The option's name
	     * @param {unknown} value The option's value
	     * @return {Core}
	     */
	    Core.prototype.updateValidatorOption = function (field, validator, name, value) {
	        if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
	            this.fields[field].validators[validator][name] = value;
	        }
	        return this;
	    };
	    Core.prototype.setFieldOptions = function (field, options) {
	        this.fields[field] = options;
	        return this;
	    };
	    Core.prototype.destroy = function () {
	        var _this = this;
	        // Remove plugins and filters
	        Object.keys(this.plugins).forEach(function (id) { return _this.plugins[id].uninstall(); });
	        this.ee.clear();
	        this.filter.clear();
	        this.results.clear();
	        this.plugins = {};
	        return this;
	    };
	    Core.prototype.setLocale = function (locale, localization) {
	        this.locale = locale;
	        this.localization = localization;
	        return this;
	    };
	    Core.prototype.waterfall = function (promises) {
	        return promises.reduce(function (p, c) {
	            return p.then(function (res) {
	                return c().then(function (result) {
	                    res.push(result);
	                    return res;
	                });
	            });
	        }, Promise.resolve([]));
	    };
	    Core.prototype.queryElements = function (field) {
	        var selector = this.fields[field].selector
	            ? // Check if the selector is an ID selector which starts with `#`
	                '#' === this.fields[field].selector.charAt(0)
	                    ? "[id=\"".concat(this.fields[field].selector.substring(1), "\"]")
	                    : this.fields[field].selector
	            : "[name=\"".concat(field.replace(/"/g, '\\"'), "\"]");
	        return [].slice.call(this.form.querySelectorAll(selector));
	    };
	    Core.prototype.normalizeResult = function (field, validator, result) {
	        var opts = this.fields[field].validators[validator];
	        return Object.assign({}, result, {
	            message: result.message ||
	                (opts ? opts.message : '') ||
	                (this.localization && this.localization[validator] && this.localization[validator]['default']
	                    ? this.localization[validator]['default']
	                    : '') ||
	                "The field ".concat(field, " is not valid"),
	        });
	    };
	    Core.prototype.toggleValidator = function (enabled, field, validator) {
	        var _this = this;
	        var validatorArr = this.fields[field].validators;
	        if (validator && validatorArr && validatorArr[validator]) {
	            this.fields[field].validators[validator].enabled = enabled;
	        }
	        else if (!validator) {
	            Object.keys(validatorArr).forEach(function (v) { return (_this.fields[field].validators[v].enabled = enabled); });
	        }
	        return this.updateFieldStatus(field, 'NotValidated', validator);
	    };
	    return Core;
	}());
	function formValidation(form, options) {
	    var opts = Object.assign({}, {
	        fields: {},
	        locale: 'en_US',
	        plugins: {},
	        init: function (_) { },
	    }, options);
	    var core = new Core(form, opts.fields);
	    core.setLocale(opts.locale, opts.localization);
	    // Register plugins
	    Object.keys(opts.plugins).forEach(function (name) { return core.registerPlugin(name, opts.plugins[name]); });
	    // It's the single point that users can do a particular task before adding fields
	    // Some initialization tasks must be done at that point
	    opts.init(core);
	    // and add fields
	    Object.keys(opts.fields).forEach(function (field) { return core.addField(field, opts.fields[field]); });
	    return core;
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var Plugin = /** @class */ (function () {
	    function Plugin(opts) {
	        this.opts = opts;
	        this.isEnabled = true;
	    }
	    Plugin.prototype.setCore = function (core) {
	        this.core = core;
	        return this;
	    };
	    Plugin.prototype.enable = function () {
	        this.isEnabled = true;
	        this.onEnabled();
	        return this;
	    };
	    Plugin.prototype.disable = function () {
	        this.isEnabled = false;
	        this.onDisabled();
	        return this;
	    };
	    Plugin.prototype.isPluginEnabled = function () {
	        return this.isEnabled;
	    };
	    Plugin.prototype.onEnabled = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    Plugin.prototype.onDisabled = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    Plugin.prototype.install = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    Plugin.prototype.uninstall = function () { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    return Plugin;
	}());

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Execute a callback function
	 *
	 * @param {Function | string} functionName Can be
	 * - name of global function
	 * - name of namespace function (such as A.B.C)
	 * - a function
	 * @param {any[]} args The callback arguments
	 * @return {any}
	 */
	function call(functionName, args) {
	    if ('function' === typeof functionName) {
	        return functionName.apply(this, args);
	    }
	    else if ('string' === typeof functionName) {
	        // Node that it doesn't support node.js based environment because we are trying to access `window`
	        var name_1 = functionName;
	        if ('()' === name_1.substring(name_1.length - 2)) {
	            name_1 = name_1.substring(0, name_1.length - 2);
	        }
	        var ns = name_1.split('.');
	        var func = ns.pop();
	        var context_1 = window;
	        for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
	            var t = ns_1[_i];
	            context_1 = context_1[t];
	        }
	        return typeof context_1[func] === 'undefined' ? null : context_1[func].apply(this, args);
	    }
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var addClass = function (element, classes) {
	    classes.split(' ').forEach(function (clazz) {
	        if (element.classList) {
	            element.classList.add(clazz);
	        }
	        else if (" ".concat(element.className, " ").indexOf(" ".concat(clazz, " "))) {
	            element.className += " ".concat(clazz);
	        }
	    });
	};
	var removeClass = function (element, classes) {
	    classes.split(' ').forEach(function (clazz) {
	        element.classList
	            ? element.classList.remove(clazz)
	            : (element.className = element.className.replace(clazz, ''));
	    });
	};
	var classSet = function (element, classes) {
	    var adding = [];
	    var removing = [];
	    Object.keys(classes).forEach(function (clazz) {
	        if (clazz) {
	            classes[clazz] ? adding.push(clazz) : removing.push(clazz);
	        }
	    });
	    // Always remove before adding class because there might be a class which belong to both sets.
	    // For example, the element will have class `a` after calling
	    //  ```
	    //  classSet(element, {
	    //      'a a1 a2': true,
	    //      'a b1 b2': false
	    //  })
	    //  ```
	    removing.forEach(function (clazz) { return removeClass(element, clazz); });
	    adding.forEach(function (clazz) { return addClass(element, clazz); });
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var matches = function (element, selector) {
	    var nativeMatches = element.matches ||
	        element.webkitMatchesSelector ||
	        element['mozMatchesSelector'] ||
	        element['msMatchesSelector'];
	    if (nativeMatches) {
	        return nativeMatches.call(element, selector);
	    }
	    // In case `matchesselector` isn't supported (such as IE10)
	    // See http://caniuse.com/matchesselector
	    var nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
	    return nodes.indexOf(element) >= 0;
	};
	var closest = function (element, selector) {
	    var ele = element;
	    while (ele) {
	        if (matches(ele, selector)) {
	            break;
	        }
	        ele = ele.parentElement;
	    }
	    return ele;
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var generateString = function (length) {
	    return Array(length)
	        .fill('')
	        .map(function (v) { return Math.random().toString(36).charAt(2); })
	        .join('');
	};
	var fetch = function (url, options) {
	    var toQuery = function (obj) {
	        return Object.keys(obj)
	            .map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k])); })
	            .join('&');
	    };
	    return new Promise(function (resolve, reject) {
	        var opts = Object.assign({}, {
	            crossDomain: false,
	            headers: {},
	            method: 'GET',
	            params: {},
	        }, options);
	        // Build the params for GET request
	        var params = Object.keys(opts.params)
	            .map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(opts.params[k])); })
	            .join('&');
	        var hasQuery = url.indexOf('?') > -1;
	        var requestUrl = 'GET' === opts.method ? "".concat(url).concat(hasQuery ? '&' : '?').concat(params) : url;
	        if (opts.crossDomain) {
	            // User is making cross domain request
	            var script_1 = document.createElement('script');
	            // In some very fast systems, the different `Date.now()` invocations can return the same value
	            // which leads to the issue where there are multiple remove validators are used, for example.
	            // Appending it with a generated random string can fix the value
	            var callback_1 = "___FormValidationFetch_".concat(generateString(12), "___");
	            window[callback_1] = function (data) {
	                delete window[callback_1];
	                resolve(data);
	            };
	            script_1.src = "".concat(requestUrl).concat(hasQuery ? '&' : '?', "callback=").concat(callback_1);
	            script_1.async = true;
	            script_1.addEventListener('load', function () {
	                script_1.parentNode.removeChild(script_1);
	            });
	            script_1.addEventListener('error', function () { return reject; });
	            document.head.appendChild(script_1);
	        }
	        else {
	            var request_1 = new XMLHttpRequest();
	            request_1.open(opts.method, requestUrl);
	            // Set the headers
	            request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	            if ('POST' === opts.method) {
	                request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	            }
	            Object.keys(opts.headers).forEach(function (k) { return request_1.setRequestHeader(k, opts.headers[k]); });
	            request_1.addEventListener('load', function () {
	                // Cannot use arrow function here due to the `this` scope
	                resolve(JSON.parse(this.responseText));
	            });
	            request_1.addEventListener('error', function () { return reject; });
	            // GET request will ignore the passed data here
	            request_1.send(toQuery(opts.params));
	        }
	    });
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Format a string
	 * It's used to format the error message
	 * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
	 *
	 * @param {string} message
	 * @param {string|string[]} parameters
	 * @returns {string}
	 */
	var format = function (message, parameters) {
	    var params = Array.isArray(parameters) ? parameters : [parameters];
	    var output = message;
	    params.forEach(function (p) {
	        output = output.replace('%s', p);
	    });
	    return output;
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var hasClass = function (element, clazz) {
	    return element.classList
	        ? element.classList.contains(clazz)
	        : new RegExp("(^| )".concat(clazz, "( |$)"), 'gi').test(element.className);
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Validate a date
	 *
	 * @param {string} year The full year in 4 digits
	 * @param {string} month The month number
	 * @param {string} day The day number
	 * @param {boolean} [notInFuture] If true, the date must not be in the future
	 * @returns {boolean}
	 */
	var isValidDate = function (year, month, day, notInFuture) {
	    if (isNaN(year) || isNaN(month) || isNaN(day)) {
	        return false;
	    }
	    if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
	        return false;
	    }
	    var numDays = [
	        31,
	        // Update the number of days in Feb of leap year
	        year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 29 : 28,
	        31,
	        30,
	        31,
	        30,
	        31,
	        31,
	        30,
	        31,
	        30,
	        31,
	    ];
	    // Check the day
	    if (day <= 0 || day > numDays[month - 1]) {
	        return false;
	    }
	    if (notInFuture === true) {
	        var currentDate = new Date();
	        var currentYear = currentDate.getFullYear();
	        var currentMonth = currentDate.getMonth();
	        var currentDay = currentDate.getDate();
	        return (year < currentYear ||
	            (year === currentYear && month - 1 < currentMonth) ||
	            (year === currentYear && month - 1 === currentMonth && day < currentDay));
	    }
	    return true;
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = function (obj) {
	    return obj
	        ? Object.entries(obj).reduce(function (a, _a) {
	            var k = _a[0], v = _a[1];
	            return (v === undefined ? a : ((a[k] = v), a));
	        }, {})
	        : {};
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var index = {
	    call: call,
	    classSet: classSet,
	    closest: closest,
	    fetch: fetch,
	    format: format,
	    hasClass: hasClass,
	    isValidDate: isValidDate,
	    removeUndefined: removeUndefined,
	};

	cjs$B.Plugin = Plugin;
	cjs$B.algorithms = index$1;
	cjs$B.formValidation = formValidation;
	cjs$B.utils = index;
	return cjs$B;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$B.exports = requireIndex_min$B();
} else {
    lib$B.exports = requireCjs$B();
}

var libExports$B = lib$B.exports;

var lib$A = {exports: {}};

var index_min$A = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-alias
 * @version 2.4.0
 */

var hasRequiredIndex_min$A;

function requireIndex_min$A () {
	if (hasRequiredIndex_min$A) return index_min$A;
	hasRequiredIndex_min$A = 1;
var t=libExports$B,r=function(t,o){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r;}||function(t,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);},r(t,o)};var o=function(t){function o(r){var o=t.call(this,r)||this;return o.opts=r||{},o.validatorNameFilter=o.getValidatorName.bind(o),o}return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t;}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e);}(o,t),o.prototype.install=function(){this.core.registerFilter("validator-name",this.validatorNameFilter);},o.prototype.uninstall=function(){this.core.deregisterFilter("validator-name",this.validatorNameFilter);},o.prototype.getValidatorName=function(t,r){return this.isEnabled&&this.opts[t]||t},o}(t.Plugin);index_min$A.Alias=o;
	return index_min$A;
}

var cjs$A = {};

var hasRequiredCjs$A;

function requireCjs$A () {
	if (hasRequiredCjs$A) return cjs$A;
	hasRequiredCjs$A = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * This plugin allows to use multiple instances of the same validator by defining alias.
	 * ```
	 *  formValidation(form, {
	 *      fields: {
	 *          email: {
	 *              validators: {
	 *                  required: ...,
	 *                  pattern: ...,
	 *                  regexp: ...
	 *              }
	 *          }
	 *      },
	 *      plugins: {
	 *          alias: new Alias({
	 *              required: 'notEmpty',
	 *              pattern: 'regexp'
	 *          })
	 *      }
	 *  })
	 * ```
	 * Then, you can use the `required`, `pattern` as the same as `notEmpty`, `regexp` validators.
	 */
	var Alias = /** @class */ (function (_super) {
	    __extends(Alias, _super);
	    function Alias(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.opts = opts || {};
	        _this.validatorNameFilter = _this.getValidatorName.bind(_this);
	        return _this;
	    }
	    Alias.prototype.install = function () {
	        this.core.registerFilter('validator-name', this.validatorNameFilter);
	    };
	    Alias.prototype.uninstall = function () {
	        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
	    };
	    Alias.prototype.getValidatorName = function (validatorName, _field) {
	        return this.isEnabled ? this.opts[validatorName] || validatorName : validatorName;
	    };
	    return Alias;
	}(core.Plugin));

	cjs$A.Alias = Alias;
	return cjs$A;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$A.exports = requireIndex_min$A();
} else {
    lib$A.exports = requireCjs$A();
}

var libExports$A = lib$A.exports;

var lib$z = {exports: {}};

var index_min$z = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-aria
 * @version 2.4.0
 */

var hasRequiredIndex_min$z;

function requireIndex_min$z () {
	if (hasRequiredIndex_min$z) return index_min$z;
	hasRequiredIndex_min$z = 1;
var e=libExports$B,t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);},t(e,i)};var i=function(e){function i(){var t=e.call(this,{})||this;return t.elementValidatedHandler=t.onElementValidated.bind(t),t.fieldValidHandler=t.onFieldValid.bind(t),t.fieldInvalidHandler=t.onFieldInvalid.bind(t),t.messageDisplayedHandler=t.onMessageDisplayed.bind(t),t}return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=e;}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n);}(i,e),i.prototype.install=function(){this.core.on("core.field.valid",this.fieldValidHandler).on("core.field.invalid",this.fieldInvalidHandler).on("core.element.validated",this.elementValidatedHandler).on("plugins.message.displayed",this.messageDisplayedHandler);},i.prototype.uninstall=function(){this.core.off("core.field.valid",this.fieldValidHandler).off("core.field.invalid",this.fieldInvalidHandler).off("core.element.validated",this.elementValidatedHandler).off("plugins.message.displayed",this.messageDisplayedHandler);},i.prototype.onElementValidated=function(e){e.valid&&(e.element.setAttribute("aria-invalid","false"),e.element.removeAttribute("aria-describedby"));},i.prototype.onFieldValid=function(e){var t=this.core.getElements(e);t&&t.forEach((function(e){e.setAttribute("aria-invalid","false"),e.removeAttribute("aria-describedby");}));},i.prototype.onFieldInvalid=function(e){var t=this.core.getElements(e);t&&t.forEach((function(e){return e.setAttribute("aria-invalid","true")}));},i.prototype.onMessageDisplayed=function(e){e.messageElement.setAttribute("role","alert"),e.messageElement.setAttribute("aria-hidden","false");var t=this.core.getElements(e.field),i=t.indexOf(e.element),n="js-fv-".concat(e.field,"-").concat(i,"-").concat(Date.now(),"-message");e.messageElement.setAttribute("id",n),e.element.setAttribute("aria-describedby",n);var a=e.element.getAttribute("type");"radio"!==a&&"checkbox"!==a||t.forEach((function(e){return e.setAttribute("aria-describedby",n)}));},i}(e.Plugin);index_min$z.Aria=i;
	return index_min$z;
}

var cjs$z = {};

var hasRequiredCjs$z;

function requireCjs$z () {
	if (hasRequiredCjs$z) return cjs$z;
	hasRequiredCjs$z = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * This plugin adds ARIA attributes based on the field validity.
	 * The list include:
	 *  - `aria-invalid`, `aria-describedby` for field element
	 *  - `aria-hidden`, `role` for associated message element
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
	 */
	var Aria = /** @class */ (function (_super) {
	    __extends(Aria, _super);
	    function Aria() {
	        var _this = _super.call(this, {}) || this;
	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
	        _this.fieldValidHandler = _this.onFieldValid.bind(_this);
	        _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
	        _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
	        return _this;
	    }
	    Aria.prototype.install = function () {
	        this.core
	            .on('core.field.valid', this.fieldValidHandler)
	            .on('core.field.invalid', this.fieldInvalidHandler)
	            .on('core.element.validated', this.elementValidatedHandler)
	            .on('plugins.message.displayed', this.messageDisplayedHandler);
	    };
	    Aria.prototype.uninstall = function () {
	        this.core
	            .off('core.field.valid', this.fieldValidHandler)
	            .off('core.field.invalid', this.fieldInvalidHandler)
	            .off('core.element.validated', this.elementValidatedHandler)
	            .off('plugins.message.displayed', this.messageDisplayedHandler);
	    };
	    Aria.prototype.onElementValidated = function (e) {
	        if (e.valid) {
	            e.element.setAttribute('aria-invalid', 'false');
	            e.element.removeAttribute('aria-describedby');
	        }
	    };
	    Aria.prototype.onFieldValid = function (field) {
	        var elements = this.core.getElements(field);
	        if (elements) {
	            elements.forEach(function (ele) {
	                ele.setAttribute('aria-invalid', 'false');
	                ele.removeAttribute('aria-describedby');
	            });
	        }
	    };
	    Aria.prototype.onFieldInvalid = function (field) {
	        var elements = this.core.getElements(field);
	        if (elements) {
	            elements.forEach(function (ele) { return ele.setAttribute('aria-invalid', 'true'); });
	        }
	    };
	    Aria.prototype.onMessageDisplayed = function (e) {
	        e.messageElement.setAttribute('role', 'alert');
	        e.messageElement.setAttribute('aria-hidden', 'false');
	        var elements = this.core.getElements(e.field);
	        var index = elements.indexOf(e.element);
	        var id = "js-fv-".concat(e.field, "-").concat(index, "-").concat(Date.now(), "-message");
	        e.messageElement.setAttribute('id', id);
	        e.element.setAttribute('aria-describedby', id);
	        var type = e.element.getAttribute('type');
	        if ('radio' === type || 'checkbox' === type) {
	            elements.forEach(function (ele) { return ele.setAttribute('aria-describedby', id); });
	        }
	    };
	    return Aria;
	}(core.Plugin));

	cjs$z.Aria = Aria;
	return cjs$z;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$z.exports = requireIndex_min$z();
} else {
    lib$z.exports = requireCjs$z();
}

var libExports$z = lib$z.exports;

var lib$y = {exports: {}};

var index_min$y = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-declarative
 * @version 2.4.0
 */

var hasRequiredIndex_min$y;

function requireIndex_min$y () {
	if (hasRequiredIndex_min$y) return index_min$y;
	hasRequiredIndex_min$y = 1;
var e=libExports$B,t=function(e,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);},t(e,a)};var a=function(e){function a(t){var a=e.call(this,t)||this;return a.addedFields=new Map,a.opts=Object.assign({},{html5Input:!1,pluginPrefix:"data-fvp-",prefix:"data-fv-"},t),a.fieldAddedHandler=a.onFieldAdded.bind(a),a.fieldRemovedHandler=a.onFieldRemoved.bind(a),a}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function r(){this.constructor=e;}t(e,a),e.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r);}(a,e),a.prototype.install=function(){var e=this;this.parsePlugins();var t=this.parseOptions();Object.keys(t).forEach((function(a){e.addedFields.has(a)||e.addedFields.set(a,!0),e.core.addField(a,t[a]);})),this.core.on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler);},a.prototype.uninstall=function(){this.addedFields.clear(),this.core.off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler);},a.prototype.onFieldAdded=function(e){var t=this,a=e.elements;a&&0!==a.length&&!this.addedFields.has(e.field)&&(this.addedFields.set(e.field,!0),a.forEach((function(a){var r=t.parseElement(a);if(!t.isEmptyOption(r)){var n={selector:e.options.selector,validators:Object.assign({},e.options.validators||{},r.validators)};t.core.setFieldOptions(e.field,n);}})));},a.prototype.onFieldRemoved=function(e){e.field&&this.addedFields.has(e.field)&&this.addedFields.delete(e.field);},a.prototype.parseOptions=function(){var e=this,t=this.opts.prefix,a={},r=this.core.getFields(),n=this.core.getFormElement();return [].slice.call(n.querySelectorAll("[name], [".concat(t,"field]"))).forEach((function(r){var n=e.parseElement(r);if(!e.isEmptyOption(n)){var i=r.getAttribute("name")||r.getAttribute("".concat(t,"field"));a[i]=Object.assign({},a[i],n);}})),Object.keys(a).forEach((function(e){Object.keys(a[e].validators).forEach((function(t){a[e].validators[t].enabled=a[e].validators[t].enabled||!1,r[e]&&r[e].validators&&r[e].validators[t]&&Object.assign(a[e].validators[t],r[e].validators[t]);}));})),Object.assign({},r,a)},a.prototype.createPluginInstance=function(e,t){for(var a=e.split("."),r=window||this,n=0,i=a.length;n<i;n++)r=r[a[n]];if("function"!=typeof r)throw new Error("the plugin ".concat(e," doesn't exist"));return new r(t)},a.prototype.parsePlugins=function(){for(var e,t=this,a=this.core.getFormElement(),r=new RegExp("^".concat(this.opts.pluginPrefix,"([a-z0-9-]+)(___)*([a-z0-9-]+)*$")),n=a.attributes.length,i={},s=0;s<n;s++){var o=a.attributes[s].name,l=a.attributes[s].value,d=r.exec(o);if(d&&4===d.length){var c=this.toCamelCase(d[1]);i[c]=Object.assign({},d[3]?((e={})[this.toCamelCase(d[3])]=l,e):{enabled:""===l||"true"===l},i[c]);}}Object.keys(i).forEach((function(e){var a=i[e],r=a.enabled,n=a.class;if(r&&n){delete a.enabled,delete a.clazz;var s=t.createPluginInstance(n,a);t.core.registerPlugin(e,s);}}));},a.prototype.isEmptyOption=function(e){var t=e.validators;return 0===Object.keys(t).length&&t.constructor===Object},a.prototype.parseElement=function(e){for(var t=new RegExp("^".concat(this.opts.prefix,"([a-z0-9-]+)(___)*([a-z0-9-]+)*$")),a=e.attributes.length,r={},n=e.getAttribute("type"),i=0;i<a;i++){var s=e.attributes[i].name,o=e.attributes[i].value;if(this.opts.html5Input)switch(!0){case"minlength"===s:r.stringLength=Object.assign({},{enabled:!0,min:parseInt(o,10)},r.stringLength);break;case"maxlength"===s:r.stringLength=Object.assign({},{enabled:!0,max:parseInt(o,10)},r.stringLength);break;case"pattern"===s:r.regexp=Object.assign({},{enabled:!0,regexp:o},r.regexp);break;case"required"===s:r.notEmpty=Object.assign({},{enabled:!0},r.notEmpty);break;case"type"===s&&"color"===o:r.color=Object.assign({},{enabled:!0,type:"hex"},r.color);break;case"type"===s&&"email"===o:r.emailAddress=Object.assign({},{enabled:!0},r.emailAddress);break;case"type"===s&&"url"===o:r.uri=Object.assign({},{enabled:!0},r.uri);break;case"type"===s&&"range"===o:r.between=Object.assign({},{enabled:!0,max:parseFloat(e.getAttribute("max")),min:parseFloat(e.getAttribute("min"))},r.between);break;case"min"===s&&"date"!==n&&"range"!==n:r.greaterThan=Object.assign({},{enabled:!0,min:parseFloat(o)},r.greaterThan);break;case"max"===s&&"date"!==n&&"range"!==n:r.lessThan=Object.assign({},{enabled:!0,max:parseFloat(o)},r.lessThan);}var l=t.exec(s);if(l&&4===l.length){var d=this.toCamelCase(l[1]);r[d]||(r[d]={}),l[3]?r[d][this.toCamelCase(l[3])]=this.normalizeValue(o):!0===r[d].enabled&&!1===r[d].enabled||(r[d].enabled=""===o||"true"===o);}}return {validators:r}},a.prototype.normalizeValue=function(e){return "true"===e||""===e||"false"!==e&&e},a.prototype.toUpperCase=function(e){return e.charAt(1).toUpperCase()},a.prototype.toCamelCase=function(e){return e.replace(/-./g,this.toUpperCase)},a}(e.Plugin);index_min$y.Declarative=a;
	return index_min$y;
}

var cjs$y = {};

var hasRequiredCjs$y;

function requireCjs$y () {
	if (hasRequiredCjs$y) return cjs$y;
	hasRequiredCjs$y = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * This plugin provides the ability of declaring validator options via HTML attributes.
	 * All attributes are declared in lowercase
	 * ```
	 *  <input
	 *      data-fv-field="${fieldName}"
	 *      data-fv-{validator}="true"
	 *      data-fv-{validator}___{option}="..." />
	 * ```
	 */
	var Declarative = /** @class */ (function (_super) {
	    __extends(Declarative, _super);
	    function Declarative(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.addedFields = new Map();
	        _this.opts = Object.assign({}, {
	            html5Input: false,
	            pluginPrefix: 'data-fvp-',
	            prefix: 'data-fv-',
	        }, opts);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
	        return _this;
	    }
	    Declarative.prototype.install = function () {
	        var _this = this;
	        // Parse the plugin options
	        this.parsePlugins();
	        var opts = this.parseOptions();
	        Object.keys(opts).forEach(function (field) {
	            if (!_this.addedFields.has(field)) {
	                _this.addedFields.set(field, true);
	            }
	            _this.core.addField(field, opts[field]);
	        });
	        this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
	    };
	    Declarative.prototype.uninstall = function () {
	        this.addedFields.clear();
	        this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
	    };
	    Declarative.prototype.onFieldAdded = function (e) {
	        var _this = this;
	        var elements = e.elements;
	        // Don't add the element which is already available in the field lists
	        // Otherwise, it can cause an infinite loop
	        if (!elements || elements.length === 0 || this.addedFields.has(e.field)) {
	            return;
	        }
	        this.addedFields.set(e.field, true);
	        elements.forEach(function (ele) {
	            var declarativeOptions = _this.parseElement(ele);
	            if (!_this.isEmptyOption(declarativeOptions)) {
	                // Update validator options
	                var mergeOptions = {
	                    selector: e.options.selector,
	                    validators: Object.assign({}, e.options.validators || {}, declarativeOptions.validators),
	                };
	                _this.core.setFieldOptions(e.field, mergeOptions);
	            }
	        });
	    };
	    Declarative.prototype.onFieldRemoved = function (e) {
	        if (e.field && this.addedFields.has(e.field)) {
	            this.addedFields.delete(e.field);
	        }
	    };
	    Declarative.prototype.parseOptions = function () {
	        var _this = this;
	        // Find all fields which have either `name` or `data-fv-field` attribute
	        var prefix = this.opts.prefix;
	        var opts = {};
	        var fields = this.core.getFields();
	        var form = this.core.getFormElement();
	        var elements = [].slice.call(form.querySelectorAll("[name], [".concat(prefix, "field]")));
	        elements.forEach(function (ele) {
	            var validators = _this.parseElement(ele);
	            // Do not try to merge the options if it's empty
	            // For instance, there are multiple elements having the same name,
	            // we only set the HTML attribute to one of them
	            if (!_this.isEmptyOption(validators)) {
	                var field = ele.getAttribute('name') || ele.getAttribute("".concat(prefix, "field"));
	                opts[field] = Object.assign({}, opts[field], validators);
	            }
	        });
	        Object.keys(opts).forEach(function (field) {
	            Object.keys(opts[field].validators).forEach(function (v) {
	                // Set the `enabled` key to `false` if it isn't set
	                // (the data-fv-{validator} attribute is missing, for example)
	                opts[field].validators[v].enabled = opts[field].validators[v].enabled || false;
	                // Mix the options in declarative and programmatic modes
	                if (fields[field] && fields[field].validators && fields[field].validators[v]) {
	                    Object.assign(opts[field].validators[v], fields[field].validators[v]);
	                }
	            });
	        });
	        return Object.assign({}, fields, opts);
	    };
	    Declarative.prototype.createPluginInstance = function (clazz, opts) {
	        var arr = clazz.split('.');
	        // TODO: Find a safer way to create a plugin instance from the class
	        // Currently, I have to use `any` here instead of a construtable interface
	        var fn = window || this; // eslint-disable-line @typescript-eslint/no-explicit-any
	        for (var i = 0, len = arr.length; i < len; i++) {
	            fn = fn[arr[i]];
	        }
	        if (typeof fn !== 'function') {
	            throw new Error("the plugin ".concat(clazz, " doesn't exist"));
	        }
	        return new fn(opts);
	    };
	    Declarative.prototype.parsePlugins = function () {
	        var _a;
	        var _this = this;
	        var form = this.core.getFormElement();
	        var reg = new RegExp("^".concat(this.opts.pluginPrefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
	        var numAttributes = form.attributes.length;
	        var plugins = {};
	        for (var i = 0; i < numAttributes; i++) {
	            var name_1 = form.attributes[i].name;
	            var value = form.attributes[i].value;
	            var items = reg.exec(name_1);
	            if (items && items.length === 4) {
	                var pluginName = this.toCamelCase(items[1]);
	                plugins[pluginName] = Object.assign({}, items[3] ? (_a = {}, _a[this.toCamelCase(items[3])] = value, _a) : { enabled: '' === value || 'true' === value }, plugins[pluginName]);
	            }
	        }
	        Object.keys(plugins).forEach(function (pluginName) {
	            var opts = plugins[pluginName];
	            var enabled = opts['enabled'];
	            var clazz = opts['class'];
	            if (enabled && clazz) {
	                delete opts['enabled'];
	                delete opts['clazz'];
	                var p = _this.createPluginInstance(clazz, opts);
	                _this.core.registerPlugin(pluginName, p);
	            }
	        });
	    };
	    Declarative.prototype.isEmptyOption = function (opts) {
	        var validators = opts.validators;
	        return Object.keys(validators).length === 0 && validators.constructor === Object;
	    };
	    Declarative.prototype.parseElement = function (ele) {
	        var reg = new RegExp("^".concat(this.opts.prefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
	        var numAttributes = ele.attributes.length;
	        var opts = {};
	        var type = ele.getAttribute('type');
	        for (var i = 0; i < numAttributes; i++) {
	            var name_2 = ele.attributes[i].name;
	            var value = ele.attributes[i].value;
	            if (this.opts.html5Input) {
	                switch (true) {
	                    case 'minlength' === name_2:
	                        opts['stringLength'] = Object.assign({}, {
	                            enabled: true,
	                            min: parseInt(value, 10),
	                        }, opts['stringLength']);
	                        break;
	                    case 'maxlength' === name_2:
	                        opts['stringLength'] = Object.assign({}, {
	                            enabled: true,
	                            max: parseInt(value, 10),
	                        }, opts['stringLength']);
	                        break;
	                    case 'pattern' === name_2:
	                        opts['regexp'] = Object.assign({}, {
	                            enabled: true,
	                            regexp: value,
	                        }, opts['regexp']);
	                        break;
	                    case 'required' === name_2:
	                        opts['notEmpty'] = Object.assign({}, {
	                            enabled: true,
	                        }, opts['notEmpty']);
	                        break;
	                    case 'type' === name_2 && 'color' === value:
	                        // Only accept 6 hex character values due to the HTML 5 spec
	                        // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
	                        opts['color'] = Object.assign({}, {
	                            enabled: true,
	                            type: 'hex',
	                        }, opts['color']);
	                        break;
	                    case 'type' === name_2 && 'email' === value:
	                        opts['emailAddress'] = Object.assign({}, {
	                            enabled: true,
	                        }, opts['emailAddress']);
	                        break;
	                    case 'type' === name_2 && 'url' === value:
	                        opts['uri'] = Object.assign({}, {
	                            enabled: true,
	                        }, opts['uri']);
	                        break;
	                    case 'type' === name_2 && 'range' === value:
	                        opts['between'] = Object.assign({}, {
	                            enabled: true,
	                            max: parseFloat(ele.getAttribute('max')),
	                            min: parseFloat(ele.getAttribute('min')),
	                        }, opts['between']);
	                        break;
	                    case 'min' === name_2 && type !== 'date' && type !== 'range':
	                        opts['greaterThan'] = Object.assign({}, {
	                            enabled: true,
	                            min: parseFloat(value),
	                        }, opts['greaterThan']);
	                        break;
	                    case 'max' === name_2 && type !== 'date' && type !== 'range':
	                        opts['lessThan'] = Object.assign({}, {
	                            enabled: true,
	                            max: parseFloat(value),
	                        }, opts['lessThan']);
	                        break;
	                }
	            }
	            var items = reg.exec(name_2);
	            if (items && items.length === 4) {
	                var v = this.toCamelCase(items[1]);
	                if (!opts[v]) {
	                    opts[v] = {};
	                }
	                if (items[3]) {
	                    opts[v][this.toCamelCase(items[3])] = this.normalizeValue(value);
	                }
	                else if (opts[v]['enabled'] !== true || opts[v]['enabled'] !== false) {
	                    opts[v]['enabled'] = '' === value || 'true' === value;
	                }
	            }
	        }
	        return { validators: opts };
	    };
	    // Many validators accept `boolean` options, for example
	    // `data-fv-between___inclusive="false"` should be identical to `inclusive: false`, not `inclusive: 'false'`
	    Declarative.prototype.normalizeValue = function (value) {
	        return value === 'true' || value === '' ? true : value === 'false' ? false : value;
	    };
	    Declarative.prototype.toUpperCase = function (input) {
	        return input.charAt(1).toUpperCase();
	    };
	    Declarative.prototype.toCamelCase = function (input) {
	        return input.replace(/-./g, this.toUpperCase);
	    };
	    return Declarative;
	}(core.Plugin));

	cjs$y.Declarative = Declarative;
	return cjs$y;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$y.exports = requireIndex_min$y();
} else {
    lib$y.exports = requireCjs$y();
}

var libExports$y = lib$y.exports;

var lib$x = {exports: {}};

var index_min$x = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-default-submit
 * @version 2.4.0
 */

var hasRequiredIndex_min$x;

function requireIndex_min$x () {
	if (hasRequiredIndex_min$x) return index_min$x;
	hasRequiredIndex_min$x = 1;
var t=libExports$B,o=function(t,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o;}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);},o(t,r)};var r=function(t){function r(){var o=t.call(this,{})||this;return o.onValidHandler=o.onFormValid.bind(o),o}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t;}o(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n);}(r,t),r.prototype.install=function(){if(this.core.getFormElement().querySelectorAll('[type="submit"][name="submit"]').length)throw new Error("Do not use `submit` for the name attribute of submit button");this.core.on("core.form.valid",this.onValidHandler);},r.prototype.uninstall=function(){this.core.off("core.form.valid",this.onValidHandler);},r.prototype.onFormValid=function(){var t=this.core.getFormElement();this.isEnabled&&t instanceof HTMLFormElement&&t.submit();},r}(t.Plugin);index_min$x.DefaultSubmit=r;
	return index_min$x;
}

var cjs$x = {};

var hasRequiredCjs$x;

function requireCjs$x () {
	if (hasRequiredCjs$x) return cjs$x;
	hasRequiredCjs$x = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * This plugin will submit the form if all fields are valid after validating
	 */
	var DefaultSubmit = /** @class */ (function (_super) {
	    __extends(DefaultSubmit, _super);
	    function DefaultSubmit() {
	        var _this = _super.call(this, {}) || this;
	        _this.onValidHandler = _this.onFormValid.bind(_this);
	        return _this;
	    }
	    DefaultSubmit.prototype.install = function () {
	        var form = this.core.getFormElement();
	        if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
	            throw new Error('Do not use `submit` for the name attribute of submit button');
	        }
	        this.core.on('core.form.valid', this.onValidHandler);
	    };
	    DefaultSubmit.prototype.uninstall = function () {
	        this.core.off('core.form.valid', this.onValidHandler);
	    };
	    DefaultSubmit.prototype.onFormValid = function () {
	        var form = this.core.getFormElement();
	        if (this.isEnabled && form instanceof HTMLFormElement) {
	            form.submit();
	        }
	    };
	    return DefaultSubmit;
	}(core.Plugin));

	cjs$x.DefaultSubmit = DefaultSubmit;
	return cjs$x;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$x.exports = requireIndex_min$x();
} else {
    lib$x.exports = requireCjs$x();
}

var libExports$x = lib$x.exports;

var lib$w = {exports: {}};

var index_min$w = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-dependency
 * @version 2.4.0
 */

var hasRequiredIndex_min$w;

function requireIndex_min$w () {
	if (hasRequiredIndex_min$w) return index_min$w;
	hasRequiredIndex_min$w = 1;
var t=libExports$B,e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);},e(t,r)};var r=function(t){function r(e){var r=t.call(this,e)||this;return r.opts=e||{},r.triggerExecutedHandler=r.onTriggerExecuted.bind(r),r}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t;}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o);}(r,t),r.prototype.install=function(){this.core.on("plugins.trigger.executed",this.triggerExecutedHandler);},r.prototype.uninstall=function(){this.core.off("plugins.trigger.executed",this.triggerExecutedHandler);},r.prototype.onTriggerExecuted=function(t){if(this.isEnabled&&this.opts[t.field])for(var e=0,r=this.opts[t.field].split(" ");e<r.length;e++){var o=r[e].trim();this.opts[o]&&this.core.revalidateField(o);}},r}(t.Plugin);index_min$w.Dependency=r;
	return index_min$w;
}

var cjs$w = {};

var hasRequiredCjs$w;

function requireCjs$w () {
	if (hasRequiredCjs$w) return cjs$w;
	hasRequiredCjs$w = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var Dependency = /** @class */ (function (_super) {
	    __extends(Dependency, _super);
	    function Dependency(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.opts = opts || {};
	        _this.triggerExecutedHandler = _this.onTriggerExecuted.bind(_this);
	        return _this;
	    }
	    Dependency.prototype.install = function () {
	        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
	    };
	    Dependency.prototype.uninstall = function () {
	        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
	    };
	    Dependency.prototype.onTriggerExecuted = function (e) {
	        if (this.isEnabled && this.opts[e.field]) {
	            var dependencies = this.opts[e.field].split(' ');
	            for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
	                var d = dependencies_1[_i];
	                var dependentField = d.trim();
	                if (this.opts[dependentField]) {
	                    // Revalidate the dependent field
	                    this.core.revalidateField(dependentField);
	                }
	            }
	        }
	    };
	    return Dependency;
	}(core.Plugin));

	cjs$w.Dependency = Dependency;
	return cjs$w;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$w.exports = requireIndex_min$w();
} else {
    lib$w.exports = requireCjs$w();
}

var libExports$w = lib$w.exports;

var lib$v = {exports: {}};

var index_min$v = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-excluded
 * @version 2.4.0
 */

var hasRequiredIndex_min$v;

function requireIndex_min$v () {
	if (hasRequiredIndex_min$v) return index_min$v;
	hasRequiredIndex_min$v = 1;
var t=libExports$B,e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);},e(t,n)};var n=t.utils.removeUndefined,i=function(t){function i(e){var r=t.call(this,e)||this;return r.opts=Object.assign({},{excluded:i.defaultIgnore},n(e)),r.ignoreValidationFilter=r.ignoreValidation.bind(r),r}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t;}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i);}(i,t),i.defaultIgnore=function(t,e,n){var i=!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length),r=e.getAttribute("disabled");return ""===r||"disabled"===r||"hidden"===e.getAttribute("type")||!i},i.prototype.install=function(){this.core.registerFilter("element-ignored",this.ignoreValidationFilter);},i.prototype.uninstall=function(){this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter);},i.prototype.ignoreValidation=function(t,e,n){return !!this.isEnabled&&this.opts.excluded.apply(this,[t,e,n])},i}(t.Plugin);index_min$v.Excluded=i;
	return index_min$v;
}

var cjs$v = {};

var hasRequiredCjs$v;

function requireCjs$v () {
	if (hasRequiredCjs$v) return cjs$v;
	hasRequiredCjs$v = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	var Excluded = /** @class */ (function (_super) {
	    __extends(Excluded, _super);
	    function Excluded(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.opts = Object.assign({}, { excluded: Excluded.defaultIgnore }, removeUndefined(opts));
	        _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
	        return _this;
	    }
	    Excluded.defaultIgnore = function (_field, element, _elements) {
	        var isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
	        var disabled = element.getAttribute('disabled');
	        return disabled === '' || disabled === 'disabled' || element.getAttribute('type') === 'hidden' || !isVisible;
	    };
	    Excluded.prototype.install = function () {
	        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
	    };
	    Excluded.prototype.uninstall = function () {
	        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
	    };
	    Excluded.prototype.ignoreValidation = function (field, element, elements) {
	        if (!this.isEnabled) {
	            return false;
	        }
	        return this.opts.excluded.apply(this, [field, element, elements]);
	    };
	    return Excluded;
	}(core.Plugin));

	cjs$v.Excluded = Excluded;
	return cjs$v;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$v.exports = requireIndex_min$v();
} else {
    lib$v.exports = requireCjs$v();
}

var libExports$v = lib$v.exports;

var lib$u = {exports: {}};

var index_min$u = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-field-status
 * @version 2.4.0
 */

var hasRequiredIndex_min$u;

function requireIndex_min$u () {
	if (hasRequiredIndex_min$u) return index_min$u;
	hasRequiredIndex_min$u = 1;
var e=libExports$B,t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);},t(e,n)};var n=function(e){function n(t){var n=e.call(this,t)||this;return n.statuses=new Map,n.opts=Object.assign({},{onStatusChanged:function(){}},t),n.elementValidatingHandler=n.onElementValidating.bind(n),n.elementValidatedHandler=n.onElementValidated.bind(n),n.elementNotValidatedHandler=n.onElementNotValidated.bind(n),n.elementIgnoredHandler=n.onElementIgnored.bind(n),n.fieldAddedHandler=n.onFieldAdded.bind(n),n.fieldRemovedHandler=n.onFieldRemoved.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function d(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(d.prototype=n.prototype,new d);}(n,e),n.prototype.install=function(){this.core.on("core.element.validating",this.elementValidatingHandler).on("core.element.validated",this.elementValidatedHandler).on("core.element.notvalidated",this.elementNotValidatedHandler).on("core.element.ignored",this.elementIgnoredHandler).on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler);},n.prototype.uninstall=function(){this.statuses.clear(),this.core.off("core.element.validating",this.elementValidatingHandler).off("core.element.validated",this.elementValidatedHandler).off("core.element.notvalidated",this.elementNotValidatedHandler).off("core.element.ignored",this.elementIgnoredHandler).off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler);},n.prototype.areFieldsValid=function(){return Array.from(this.statuses.values()).every((function(e){return "Valid"===e||"NotValidated"===e||"Ignored"===e}))},n.prototype.getStatuses=function(){return this.isEnabled?this.statuses:new Map},n.prototype.onFieldAdded=function(e){this.statuses.set(e.field,"NotValidated");},n.prototype.onFieldRemoved=function(e){this.statuses.has(e.field)&&this.statuses.delete(e.field),this.handleStatusChanged(this.areFieldsValid());},n.prototype.onElementValidating=function(e){this.statuses.set(e.field,"Validating"),this.handleStatusChanged(!1);},n.prototype.onElementValidated=function(e){this.statuses.set(e.field,e.valid?"Valid":"Invalid"),e.valid?this.handleStatusChanged(this.areFieldsValid()):this.handleStatusChanged(!1);},n.prototype.onElementNotValidated=function(e){this.statuses.set(e.field,"NotValidated"),this.handleStatusChanged(!1);},n.prototype.onElementIgnored=function(e){this.statuses.set(e.field,"Ignored"),this.handleStatusChanged(this.areFieldsValid());},n.prototype.handleStatusChanged=function(e){this.isEnabled&&this.opts.onStatusChanged(e);},n}(e.Plugin);index_min$u.FieldStatus=n;
	return index_min$u;
}

var cjs$u = {};

var hasRequiredCjs$u;

function requireCjs$u () {
	if (hasRequiredCjs$u) return cjs$u;
	hasRequiredCjs$u = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var FieldStatus = /** @class */ (function (_super) {
	    __extends(FieldStatus, _super);
	    function FieldStatus(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.statuses = new Map();
	        _this.opts = Object.assign({}, {
	            onStatusChanged: function () { },
	        }, opts);
	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
	        return _this;
	    }
	    FieldStatus.prototype.install = function () {
	        this.core
	            .on('core.element.validating', this.elementValidatingHandler)
	            .on('core.element.validated', this.elementValidatedHandler)
	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
	            .on('core.element.ignored', this.elementIgnoredHandler)
	            .on('core.field.added', this.fieldAddedHandler)
	            .on('core.field.removed', this.fieldRemovedHandler);
	    };
	    FieldStatus.prototype.uninstall = function () {
	        this.statuses.clear();
	        this.core
	            .off('core.element.validating', this.elementValidatingHandler)
	            .off('core.element.validated', this.elementValidatedHandler)
	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
	            .off('core.element.ignored', this.elementIgnoredHandler)
	            .off('core.field.added', this.fieldAddedHandler)
	            .off('core.field.removed', this.fieldRemovedHandler);
	    };
	    FieldStatus.prototype.areFieldsValid = function () {
	        return Array.from(this.statuses.values()).every(function (value) {
	            return value === 'Valid' || value === 'NotValidated' || value === 'Ignored';
	        });
	    };
	    FieldStatus.prototype.getStatuses = function () {
	        return this.isEnabled ? this.statuses : new Map();
	    };
	    FieldStatus.prototype.onFieldAdded = function (e) {
	        this.statuses.set(e.field, 'NotValidated');
	    };
	    FieldStatus.prototype.onFieldRemoved = function (e) {
	        if (this.statuses.has(e.field)) {
	            this.statuses.delete(e.field);
	        }
	        this.handleStatusChanged(this.areFieldsValid());
	    };
	    FieldStatus.prototype.onElementValidating = function (e) {
	        this.statuses.set(e.field, 'Validating');
	        this.handleStatusChanged(false);
	    };
	    FieldStatus.prototype.onElementValidated = function (e) {
	        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
	        if (e.valid) {
	            this.handleStatusChanged(this.areFieldsValid());
	        }
	        else {
	            this.handleStatusChanged(false);
	        }
	    };
	    FieldStatus.prototype.onElementNotValidated = function (e) {
	        this.statuses.set(e.field, 'NotValidated');
	        this.handleStatusChanged(false);
	    };
	    FieldStatus.prototype.onElementIgnored = function (e) {
	        this.statuses.set(e.field, 'Ignored');
	        this.handleStatusChanged(this.areFieldsValid());
	    };
	    FieldStatus.prototype.handleStatusChanged = function (areFieldsValid) {
	        if (this.isEnabled) {
	            this.opts.onStatusChanged(areFieldsValid);
	        }
	    };
	    return FieldStatus;
	}(core.Plugin));

	cjs$u.FieldStatus = FieldStatus;
	return cjs$u;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$u.exports = requireIndex_min$u();
} else {
    lib$u.exports = requireCjs$u();
}

var libExports$u = lib$u.exports;

var lib$t = {exports: {}};

var index_min$t = {};

var lib$s = {exports: {}};

var index_min$s = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-message
 * @version 2.4.0
 */

var hasRequiredIndex_min$t;

function requireIndex_min$t () {
	if (hasRequiredIndex_min$t) return index_min$s;
	hasRequiredIndex_min$t = 1;
var e=libExports$B,t=function(e,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);},t(e,a)};var a=e.utils.classSet,n=function(e){function n(t){var a=e.call(this,t)||this;return a.useDefaultContainer=!1,a.messages=new Map,a.defaultContainer=document.createElement("div"),a.useDefaultContainer=!t||!t.container,a.opts=Object.assign({},{container:function(e,t){return a.defaultContainer}},t),a.elementIgnoredHandler=a.onElementIgnored.bind(a),a.fieldAddedHandler=a.onFieldAdded.bind(a),a.fieldRemovedHandler=a.onFieldRemoved.bind(a),a.validatorValidatedHandler=a.onValidatorValidated.bind(a),a.validatorNotValidatedHandler=a.onValidatorNotValidated.bind(a),a}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=e;}t(e,a),e.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n);}(n,e),n.getClosestContainer=function(e,t,a){for(var n=e;n&&n!==t&&(n=n.parentElement,!a.test(n.className)););return n},n.prototype.install=function(){this.useDefaultContainer&&this.core.getFormElement().appendChild(this.defaultContainer),this.core.on("core.element.ignored",this.elementIgnoredHandler).on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler).on("core.validator.validated",this.validatorValidatedHandler).on("core.validator.notvalidated",this.validatorNotValidatedHandler);},n.prototype.uninstall=function(){this.useDefaultContainer&&this.core.getFormElement().removeChild(this.defaultContainer),this.messages.forEach((function(e){return e.parentNode.removeChild(e)})),this.messages.clear(),this.core.off("core.element.ignored",this.elementIgnoredHandler).off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler).off("core.validator.validated",this.validatorValidatedHandler).off("core.validator.notvalidated",this.validatorNotValidatedHandler);},n.prototype.onEnabled=function(){this.messages.forEach((function(e,t,n){a(t,{"fv-plugins-message-container--enabled":!0,"fv-plugins-message-container--disabled":!1});}));},n.prototype.onDisabled=function(){this.messages.forEach((function(e,t,n){a(t,{"fv-plugins-message-container--enabled":!1,"fv-plugins-message-container--disabled":!0});}));},n.prototype.onFieldAdded=function(e){var t=this,a=e.elements;a&&(a.forEach((function(e){var a=t.messages.get(e);a&&(a.parentNode.removeChild(a),t.messages.delete(e));})),this.prepareFieldContainer(e.field,a));},n.prototype.onFieldRemoved=function(e){var t=this;if(e.elements.length&&e.field){var a=e.elements[0].getAttribute("type");("radio"===a||"checkbox"===a?[e.elements[0]]:e.elements).forEach((function(e){if(t.messages.has(e)){var a=t.messages.get(e);a.parentNode.removeChild(a),t.messages.delete(e);}}));}},n.prototype.prepareFieldContainer=function(e,t){var a=this;if(t.length){var n=t[0].getAttribute("type");"radio"===n||"checkbox"===n?this.prepareElementContainer(e,t[0],t):t.forEach((function(n){return a.prepareElementContainer(e,n,t)}));}},n.prototype.prepareElementContainer=function(e,t,n){var i;if("string"==typeof this.opts.container){var o="#"===this.opts.container.charAt(0)?'[id="'.concat(this.opts.container.substring(1),'"]'):this.opts.container;i=this.core.getFormElement().querySelector(o);}else i=this.opts.container(e,t);var r=document.createElement("div");i.appendChild(r),a(r,{"fv-plugins-message-container":!0,"fv-plugins-message-container--enabled":this.isEnabled,"fv-plugins-message-container--disabled":!this.isEnabled}),this.core.emit("plugins.message.placed",{element:t,elements:n,field:e,messageElement:r}),this.messages.set(t,r);},n.prototype.getMessage=function(e){return "string"==typeof e.message?e.message:e.message[this.core.getLocale()]},n.prototype.onValidatorValidated=function(e){var t,n=e.elements,i=e.element.getAttribute("type"),o=("radio"===i||"checkbox"===i)&&n.length>0?n[0]:e.element;if(this.messages.has(o)){var r=this.messages.get(o),s=r.querySelector('[data-field="'.concat(e.field.replace(/"/g,'\\"'),'"][data-validator="').concat(e.validator.replace(/"/g,'\\"'),'"]'));if(s||e.result.valid)s&&!e.result.valid?(s.innerHTML=this.getMessage(e.result),this.core.emit("plugins.message.displayed",{element:e.element,field:e.field,message:e.result.message,messageElement:s,meta:e.result.meta,validator:e.validator})):s&&e.result.valid&&r.removeChild(s);else {var l=document.createElement("div");l.innerHTML=this.getMessage(e.result),l.setAttribute("data-field",e.field),l.setAttribute("data-validator",e.validator),this.opts.clazz&&a(l,((t={})[this.opts.clazz]=!0,t)),r.appendChild(l),this.core.emit("plugins.message.displayed",{element:e.element,field:e.field,message:e.result.message,messageElement:l,meta:e.result.meta,validator:e.validator});}}},n.prototype.onValidatorNotValidated=function(e){var t=e.elements,a=e.element.getAttribute("type"),n="radio"===a||"checkbox"===a?t[0]:e.element;if(this.messages.has(n)){var i=this.messages.get(n),o=i.querySelector('[data-field="'.concat(e.field.replace(/"/g,'\\"'),'"][data-validator="').concat(e.validator.replace(/"/g,'\\"'),'"]'));o&&i.removeChild(o);}},n.prototype.onElementIgnored=function(e){var t=e.elements,a=e.element.getAttribute("type"),n="radio"===a||"checkbox"===a?t[0]:e.element;if(this.messages.has(n)){var i=this.messages.get(n);[].slice.call(i.querySelectorAll('[data-field="'.concat(e.field.replace(/"/g,'\\"'),'"]'))).forEach((function(e){i.removeChild(e);}));}},n}(e.Plugin);index_min$s.Message=n;
	return index_min$s;
}

var cjs$t = {};

var hasRequiredCjs$t;

function requireCjs$t () {
	if (hasRequiredCjs$t) return cjs$t;
	hasRequiredCjs$t = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var classSet = core.utils.classSet;
	var Message = /** @class */ (function (_super) {
	    __extends(Message, _super);
	    function Message(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.useDefaultContainer = false;
	        // Map the field element to message container
	        _this.messages = new Map();
	        // By default, we will display error messages at the bottom of form
	        _this.defaultContainer = document.createElement('div');
	        _this.useDefaultContainer = !opts || !opts.container;
	        _this.opts = Object.assign({}, {
	            container: function (_field, _element) { return _this.defaultContainer; },
	        }, opts);
	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
	        _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
	        _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_this);
	        return _this;
	    }
	    /**
	     * Determine the closest element that its class matches with given pattern.
	     * In popular cases, all the fields might follow the same markup, so that closest element
	     * can be used as message container.
	     *
	     * For example, if we use the Bootstrap framework then the field often be placed inside a
	     * `col-{size}-{numberOfColumns}` class, we can register the plugin as following:
	     * ```
	     *  formValidation(form, {
	     *      plugins: {
	     *          message: new Message({
	     *              container: function(field, element) {
	     *                  return Message.getClosestContainer(element, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/)
	     *              }
	     *          })
	     *      }
	     *  })
	     * ```
	     *
	     * @param element The field element
	     * @param upper The upper element, so we don't have to look for the entire page
	     * @param pattern The pattern
	     * @return {HTMLElement}
	     */
	    Message.getClosestContainer = function (element, upper, pattern) {
	        var ele = element;
	        while (ele) {
	            if (ele === upper) {
	                break;
	            }
	            ele = ele.parentElement;
	            if (pattern.test(ele.className)) {
	                break;
	            }
	        }
	        return ele;
	    };
	    Message.prototype.install = function () {
	        if (this.useDefaultContainer) {
	            this.core.getFormElement().appendChild(this.defaultContainer);
	        }
	        this.core
	            .on('core.element.ignored', this.elementIgnoredHandler)
	            .on('core.field.added', this.fieldAddedHandler)
	            .on('core.field.removed', this.fieldRemovedHandler)
	            .on('core.validator.validated', this.validatorValidatedHandler)
	            .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
	    };
	    Message.prototype.uninstall = function () {
	        if (this.useDefaultContainer) {
	            this.core.getFormElement().removeChild(this.defaultContainer);
	        }
	        this.messages.forEach(function (message) { return message.parentNode.removeChild(message); });
	        this.messages.clear();
	        this.core
	            .off('core.element.ignored', this.elementIgnoredHandler)
	            .off('core.field.added', this.fieldAddedHandler)
	            .off('core.field.removed', this.fieldRemovedHandler)
	            .off('core.validator.validated', this.validatorValidatedHandler)
	            .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
	    };
	    Message.prototype.onEnabled = function () {
	        this.messages.forEach(function (_element, message, _map) {
	            classSet(message, {
	                'fv-plugins-message-container--enabled': true,
	                'fv-plugins-message-container--disabled': false,
	            });
	        });
	    };
	    Message.prototype.onDisabled = function () {
	        this.messages.forEach(function (_element, message, _map) {
	            classSet(message, {
	                'fv-plugins-message-container--enabled': false,
	                'fv-plugins-message-container--disabled': true,
	            });
	        });
	    };
	    // Prepare message container for new added field
	    Message.prototype.onFieldAdded = function (e) {
	        var _this = this;
	        var elements = e.elements;
	        if (elements) {
	            elements.forEach(function (ele) {
	                var msg = _this.messages.get(ele);
	                if (msg) {
	                    msg.parentNode.removeChild(msg);
	                    _this.messages.delete(ele);
	                }
	            });
	            this.prepareFieldContainer(e.field, elements);
	        }
	    };
	    // When a field is removed, we remove all error messages that associates with the field
	    Message.prototype.onFieldRemoved = function (e) {
	        var _this = this;
	        if (!e.elements.length || !e.field) {
	            return;
	        }
	        var type = e.elements[0].getAttribute('type');
	        var elements = 'radio' === type || 'checkbox' === type ? [e.elements[0]] : e.elements;
	        elements.forEach(function (ele) {
	            if (_this.messages.has(ele)) {
	                var container = _this.messages.get(ele);
	                container.parentNode.removeChild(container);
	                _this.messages.delete(ele);
	            }
	        });
	    };
	    Message.prototype.prepareFieldContainer = function (field, elements) {
	        var _this = this;
	        if (elements.length) {
	            var type = elements[0].getAttribute('type');
	            if ('radio' === type || 'checkbox' === type) {
	                this.prepareElementContainer(field, elements[0], elements);
	            }
	            else {
	                elements.forEach(function (ele) { return _this.prepareElementContainer(field, ele, elements); });
	            }
	        }
	    };
	    Message.prototype.prepareElementContainer = function (field, element, elements) {
	        var container;
	        if ('string' === typeof this.opts.container) {
	            var selector = '#' === this.opts.container.charAt(0)
	                ? "[id=\"".concat(this.opts.container.substring(1), "\"]")
	                : this.opts.container;
	            container = this.core.getFormElement().querySelector(selector);
	        }
	        else {
	            container = this.opts.container(field, element);
	        }
	        var message = document.createElement('div');
	        container.appendChild(message);
	        classSet(message, {
	            'fv-plugins-message-container': true,
	            'fv-plugins-message-container--enabled': this.isEnabled,
	            'fv-plugins-message-container--disabled': !this.isEnabled,
	        });
	        this.core.emit('plugins.message.placed', {
	            element: element,
	            elements: elements,
	            field: field,
	            messageElement: message,
	        });
	        this.messages.set(element, message);
	    };
	    Message.prototype.getMessage = function (result) {
	        return typeof result.message === 'string' ? result.message : result.message[this.core.getLocale()];
	    };
	    Message.prototype.onValidatorValidated = function (e) {
	        var _a;
	        var elements = e.elements;
	        var type = e.element.getAttribute('type');
	        var element = ('radio' === type || 'checkbox' === type) && elements.length > 0 ? elements[0] : e.element;
	        if (this.messages.has(element)) {
	            var container = this.messages.get(element);
	            var messageEle = container.querySelector("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"][data-validator=\"").concat(e.validator.replace(/"/g, '\\"'), "\"]"));
	            if (!messageEle && !e.result.valid) {
	                var ele = document.createElement('div');
	                ele.innerHTML = this.getMessage(e.result);
	                ele.setAttribute('data-field', e.field);
	                ele.setAttribute('data-validator', e.validator);
	                if (this.opts.clazz) {
	                    classSet(ele, (_a = {},
	                        _a[this.opts.clazz] = true,
	                        _a));
	                }
	                container.appendChild(ele);
	                this.core.emit('plugins.message.displayed', {
	                    element: e.element,
	                    field: e.field,
	                    message: e.result.message,
	                    messageElement: ele,
	                    meta: e.result.meta,
	                    validator: e.validator,
	                });
	            }
	            else if (messageEle && !e.result.valid) {
	                // The validator returns new message
	                messageEle.innerHTML = this.getMessage(e.result);
	                this.core.emit('plugins.message.displayed', {
	                    element: e.element,
	                    field: e.field,
	                    message: e.result.message,
	                    messageElement: messageEle,
	                    meta: e.result.meta,
	                    validator: e.validator,
	                });
	            }
	            else if (messageEle && e.result.valid) {
	                // Field is valid
	                container.removeChild(messageEle);
	            }
	        }
	    };
	    Message.prototype.onValidatorNotValidated = function (e) {
	        var elements = e.elements;
	        var type = e.element.getAttribute('type');
	        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
	        if (this.messages.has(element)) {
	            var container = this.messages.get(element);
	            var messageEle = container.querySelector("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"][data-validator=\"").concat(e.validator.replace(/"/g, '\\"'), "\"]"));
	            if (messageEle) {
	                container.removeChild(messageEle);
	            }
	        }
	    };
	    Message.prototype.onElementIgnored = function (e) {
	        var elements = e.elements;
	        var type = e.element.getAttribute('type');
	        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
	        if (this.messages.has(element)) {
	            var container_1 = this.messages.get(element);
	            var messageElements = [].slice.call(container_1.querySelectorAll("[data-field=\"".concat(e.field.replace(/"/g, '\\"'), "\"]")));
	            messageElements.forEach(function (messageEle) {
	                container_1.removeChild(messageEle);
	            });
	        }
	    };
	    return Message;
	}(core.Plugin));

	cjs$t.Message = Message;
	return cjs$t;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$s.exports = requireIndex_min$t();
} else {
    lib$s.exports = requireCjs$t();
}

var libExports$t = lib$s.exports;

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-framework
 * @version 2.4.0
 */

var hasRequiredIndex_min$s;

function requireIndex_min$s () {
	if (hasRequiredIndex_min$s) return index_min$t;
	hasRequiredIndex_min$s = 1;
var e=libExports$B,t=libExports$t,o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);},o(e,t)};var n=e.utils.classSet,s=e.utils.closest,i=function(e){function i(t){var o=e.call(this,t)||this;return o.results=new Map,o.containers=new Map,o.opts=Object.assign({},{defaultMessageContainer:!0,eleInvalidClass:"",eleValidClass:"",rowClasses:"",rowValidatingClass:""},t),o.elementIgnoredHandler=o.onElementIgnored.bind(o),o.elementValidatingHandler=o.onElementValidating.bind(o),o.elementValidatedHandler=o.onElementValidated.bind(o),o.elementNotValidatedHandler=o.onElementNotValidated.bind(o),o.iconPlacedHandler=o.onIconPlaced.bind(o),o.fieldAddedHandler=o.onFieldAdded.bind(o),o.fieldRemovedHandler=o.onFieldRemoved.bind(o),o.messagePlacedHandler=o.onMessagePlaced.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e;}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}(i,e),i.prototype.install=function(){var e,o=this;n(this.core.getFormElement(),((e={})[this.opts.formClass]=!0,e["fv-plugins-framework"]=!0,e)),this.core.on("core.element.ignored",this.elementIgnoredHandler).on("core.element.validating",this.elementValidatingHandler).on("core.element.validated",this.elementValidatedHandler).on("core.element.notvalidated",this.elementNotValidatedHandler).on("plugins.icon.placed",this.iconPlacedHandler).on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler),this.opts.defaultMessageContainer&&(this.core.registerPlugin(i.MESSAGE_PLUGIN,new t.Message({clazz:this.opts.messageClass,container:function(e,n){var i="string"==typeof o.opts.rowSelector?o.opts.rowSelector:o.opts.rowSelector(e,n),a=s(n,i);return t.Message.getClosestContainer(n,a,o.opts.rowPattern)}})),this.core.on("plugins.message.placed",this.messagePlacedHandler));},i.prototype.uninstall=function(){var e;this.results.clear(),this.containers.clear(),n(this.core.getFormElement(),((e={})[this.opts.formClass]=!1,e["fv-plugins-framework"]=!1,e)),this.core.off("core.element.ignored",this.elementIgnoredHandler).off("core.element.validating",this.elementValidatingHandler).off("core.element.validated",this.elementValidatedHandler).off("core.element.notvalidated",this.elementNotValidatedHandler).off("plugins.icon.placed",this.iconPlacedHandler).off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler),this.opts.defaultMessageContainer&&(this.core.deregisterPlugin(i.MESSAGE_PLUGIN),this.core.off("plugins.message.placed",this.messagePlacedHandler));},i.prototype.onEnabled=function(){var e;n(this.core.getFormElement(),((e={})[this.opts.formClass]=!0,e)),this.opts.defaultMessageContainer&&this.core.enablePlugin(i.MESSAGE_PLUGIN);},i.prototype.onDisabled=function(){var e;n(this.core.getFormElement(),((e={})[this.opts.formClass]=!1,e)),this.opts.defaultMessageContainer&&this.core.disablePlugin(i.MESSAGE_PLUGIN);},i.prototype.onIconPlaced=function(e){},i.prototype.onMessagePlaced=function(e){},i.prototype.onFieldAdded=function(e){var t=this,o=e.elements;o&&(o.forEach((function(e){var o,s=t.containers.get(e);s&&(n(s,((o={})[t.opts.rowInvalidClass]=!1,o[t.opts.rowValidatingClass]=!1,o[t.opts.rowValidClass]=!1,o["fv-plugins-icon-container"]=!1,o)),t.containers.delete(e));})),this.prepareFieldContainer(e.field,o));},i.prototype.onFieldRemoved=function(e){var t=this;e.elements.forEach((function(e){var o,s=t.containers.get(e);s&&n(s,((o={})[t.opts.rowInvalidClass]=!1,o[t.opts.rowValidatingClass]=!1,o[t.opts.rowValidClass]=!1,o));}));},i.prototype.prepareFieldContainer=function(e,t){var o=this;if(t.length){var n=t[0].getAttribute("type");"radio"===n||"checkbox"===n?this.prepareElementContainer(e,t[0]):t.forEach((function(t){return o.prepareElementContainer(e,t)}));}},i.prototype.prepareElementContainer=function(e,t){var o,i="string"==typeof this.opts.rowSelector?this.opts.rowSelector:this.opts.rowSelector(e,t),a=s(t,i);a!==t&&(n(a,((o={})[this.opts.rowClasses]=!0,o["fv-plugins-icon-container"]=!0,o)),this.containers.set(t,a));},i.prototype.onElementValidating=function(e){this.removeClasses(e.element,e.elements);},i.prototype.onElementNotValidated=function(e){this.removeClasses(e.element,e.elements);},i.prototype.onElementIgnored=function(e){this.removeClasses(e.element,e.elements);},i.prototype.removeClasses=function(e,t){var o,s=this,i=e.getAttribute("type"),a="radio"===i||"checkbox"===i?t[0]:e;t.forEach((function(e){var t;n(e,((t={})[s.opts.eleValidClass]=!1,t[s.opts.eleInvalidClass]=!1,t));}));var l=this.containers.get(a);l&&n(l,((o={})[this.opts.rowInvalidClass]=!1,o[this.opts.rowValidatingClass]=!1,o[this.opts.rowValidClass]=!1,o));},i.prototype.onElementValidated=function(e){var t,o,s=this,i=e.elements,a=e.element.getAttribute("type"),l="radio"===a||"checkbox"===a?i[0]:e.element;i.forEach((function(t){var o;n(t,((o={})[s.opts.eleValidClass]=e.valid,o[s.opts.eleInvalidClass]=!e.valid,o));}));var r=this.containers.get(l);if(r)if(e.valid){this.results.delete(l);var d=!0;this.containers.forEach((function(e,t){e===r&&!1===s.results.get(t)&&(d=!1);})),d&&n(r,((o={})[this.opts.rowInvalidClass]=!1,o[this.opts.rowValidatingClass]=!1,o[this.opts.rowValidClass]=!0,o));}else this.results.set(l,!1),n(r,((t={})[this.opts.rowInvalidClass]=!0,t[this.opts.rowValidatingClass]=!1,t[this.opts.rowValidClass]=!1,t));},i.MESSAGE_PLUGIN="___frameworkMessage",i}(e.Plugin);index_min$t.Framework=i;
	return index_min$t;
}

var cjs$s = {};

var hasRequiredCjs$s;

function requireCjs$s () {
	if (hasRequiredCjs$s) return cjs$s;
	hasRequiredCjs$s = 1;

	var core = libExports$B;
	var pluginMessage = libExports$t;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var classSet = core.utils.classSet, closest = core.utils.closest;
	var Framework = /** @class */ (function (_super) {
	    __extends(Framework, _super);
	    function Framework(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.results = new Map();
	        _this.containers = new Map();
	        _this.opts = Object.assign({}, {
	            defaultMessageContainer: true,
	            eleInvalidClass: '',
	            eleValidClass: '',
	            rowClasses: '',
	            rowValidatingClass: '',
	        }, opts);
	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
	        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
	        _this.messagePlacedHandler = _this.onMessagePlaced.bind(_this);
	        return _this;
	    }
	    Framework.prototype.install = function () {
	        var _a;
	        var _this = this;
	        classSet(this.core.getFormElement(), (_a = {},
	            _a[this.opts.formClass] = true,
	            _a['fv-plugins-framework'] = true,
	            _a));
	        this.core
	            .on('core.element.ignored', this.elementIgnoredHandler)
	            .on('core.element.validating', this.elementValidatingHandler)
	            .on('core.element.validated', this.elementValidatedHandler)
	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
	            .on('plugins.icon.placed', this.iconPlacedHandler)
	            .on('core.field.added', this.fieldAddedHandler)
	            .on('core.field.removed', this.fieldRemovedHandler);
	        if (this.opts.defaultMessageContainer) {
	            this.core.registerPlugin(Framework.MESSAGE_PLUGIN, new pluginMessage.Message({
	                clazz: this.opts.messageClass,
	                container: function (field, element) {
	                    var selector = 'string' === typeof _this.opts.rowSelector
	                        ? _this.opts.rowSelector
	                        : _this.opts.rowSelector(field, element);
	                    var groupEle = closest(element, selector);
	                    return pluginMessage.Message.getClosestContainer(element, groupEle, _this.opts.rowPattern);
	                },
	            }));
	            this.core.on('plugins.message.placed', this.messagePlacedHandler);
	        }
	    };
	    Framework.prototype.uninstall = function () {
	        var _a;
	        this.results.clear();
	        this.containers.clear();
	        classSet(this.core.getFormElement(), (_a = {},
	            _a[this.opts.formClass] = false,
	            _a['fv-plugins-framework'] = false,
	            _a));
	        this.core
	            .off('core.element.ignored', this.elementIgnoredHandler)
	            .off('core.element.validating', this.elementValidatingHandler)
	            .off('core.element.validated', this.elementValidatedHandler)
	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
	            .off('plugins.icon.placed', this.iconPlacedHandler)
	            .off('core.field.added', this.fieldAddedHandler)
	            .off('core.field.removed', this.fieldRemovedHandler);
	        if (this.opts.defaultMessageContainer) {
	            this.core.deregisterPlugin(Framework.MESSAGE_PLUGIN);
	            this.core.off('plugins.message.placed', this.messagePlacedHandler);
	        }
	    };
	    Framework.prototype.onEnabled = function () {
	        var _a;
	        classSet(this.core.getFormElement(), (_a = {},
	            _a[this.opts.formClass] = true,
	            _a));
	        if (this.opts.defaultMessageContainer) {
	            this.core.enablePlugin(Framework.MESSAGE_PLUGIN);
	        }
	    };
	    Framework.prototype.onDisabled = function () {
	        var _a;
	        classSet(this.core.getFormElement(), (_a = {},
	            _a[this.opts.formClass] = false,
	            _a));
	        if (this.opts.defaultMessageContainer) {
	            this.core.disablePlugin(Framework.MESSAGE_PLUGIN);
	        }
	    };
	    Framework.prototype.onIconPlaced = function (_e) { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    Framework.prototype.onMessagePlaced = function (_e) { }; // eslint-disable-line @typescript-eslint/no-empty-function
	    Framework.prototype.onFieldAdded = function (e) {
	        var _this = this;
	        var elements = e.elements;
	        if (elements) {
	            elements.forEach(function (ele) {
	                var _a;
	                var groupEle = _this.containers.get(ele);
	                if (groupEle) {
	                    classSet(groupEle, (_a = {},
	                        _a[_this.opts.rowInvalidClass] = false,
	                        _a[_this.opts.rowValidatingClass] = false,
	                        _a[_this.opts.rowValidClass] = false,
	                        _a['fv-plugins-icon-container'] = false,
	                        _a));
	                    _this.containers.delete(ele);
	                }
	            });
	            this.prepareFieldContainer(e.field, elements);
	        }
	    };
	    Framework.prototype.onFieldRemoved = function (e) {
	        var _this = this;
	        e.elements.forEach(function (ele) {
	            var _a;
	            var groupEle = _this.containers.get(ele);
	            if (groupEle) {
	                classSet(groupEle, (_a = {},
	                    _a[_this.opts.rowInvalidClass] = false,
	                    _a[_this.opts.rowValidatingClass] = false,
	                    _a[_this.opts.rowValidClass] = false,
	                    _a));
	            }
	        });
	    };
	    Framework.prototype.prepareFieldContainer = function (field, elements) {
	        var _this = this;
	        if (elements.length) {
	            var type = elements[0].getAttribute('type');
	            if ('radio' === type || 'checkbox' === type) {
	                this.prepareElementContainer(field, elements[0]);
	            }
	            else {
	                elements.forEach(function (ele) { return _this.prepareElementContainer(field, ele); });
	            }
	        }
	    };
	    Framework.prototype.prepareElementContainer = function (field, element) {
	        var _a;
	        var selector = 'string' === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(field, element);
	        var groupEle = closest(element, selector);
	        if (groupEle !== element) {
	            classSet(groupEle, (_a = {},
	                _a[this.opts.rowClasses] = true,
	                _a['fv-plugins-icon-container'] = true,
	                _a));
	            this.containers.set(element, groupEle);
	        }
	    };
	    Framework.prototype.onElementValidating = function (e) {
	        this.removeClasses(e.element, e.elements);
	    };
	    Framework.prototype.onElementNotValidated = function (e) {
	        this.removeClasses(e.element, e.elements);
	    };
	    Framework.prototype.onElementIgnored = function (e) {
	        this.removeClasses(e.element, e.elements);
	    };
	    Framework.prototype.removeClasses = function (element, elements) {
	        var _a;
	        var _this = this;
	        var type = element.getAttribute('type');
	        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
	        elements.forEach(function (ele) {
	            var _a;
	            classSet(ele, (_a = {},
	                _a[_this.opts.eleValidClass] = false,
	                _a[_this.opts.eleInvalidClass] = false,
	                _a));
	        });
	        var groupEle = this.containers.get(ele);
	        if (groupEle) {
	            classSet(groupEle, (_a = {},
	                _a[this.opts.rowInvalidClass] = false,
	                _a[this.opts.rowValidatingClass] = false,
	                _a[this.opts.rowValidClass] = false,
	                _a));
	        }
	    };
	    Framework.prototype.onElementValidated = function (e) {
	        var _a, _b;
	        var _this = this;
	        var elements = e.elements;
	        var type = e.element.getAttribute('type');
	        var element = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
	        // Set the valid or invalid class for all elements
	        elements.forEach(function (ele) {
	            var _a;
	            classSet(ele, (_a = {},
	                _a[_this.opts.eleValidClass] = e.valid,
	                _a[_this.opts.eleInvalidClass] = !e.valid,
	                _a));
	        });
	        var groupEle = this.containers.get(element);
	        if (groupEle) {
	            if (!e.valid) {
	                this.results.set(element, false);
	                classSet(groupEle, (_a = {},
	                    _a[this.opts.rowInvalidClass] = true,
	                    _a[this.opts.rowValidatingClass] = false,
	                    _a[this.opts.rowValidClass] = false,
	                    _a));
	            }
	            else {
	                this.results.delete(element);
	                // Maybe there're multiple fields belong to the same row
	                var isValid_1 = true;
	                this.containers.forEach(function (value, key) {
	                    if (value === groupEle && _this.results.get(key) === false) {
	                        isValid_1 = false;
	                    }
	                });
	                // If all field(s) belonging to the row are valid
	                if (isValid_1) {
	                    classSet(groupEle, (_b = {},
	                        _b[this.opts.rowInvalidClass] = false,
	                        _b[this.opts.rowValidatingClass] = false,
	                        _b[this.opts.rowValidClass] = true,
	                        _b));
	                }
	            }
	        }
	    };
	    Framework.MESSAGE_PLUGIN = '___frameworkMessage';
	    return Framework;
	}(core.Plugin));

	cjs$s.Framework = Framework;
	return cjs$s;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$t.exports = requireIndex_min$s();
} else {
    lib$t.exports = requireCjs$s();
}

var libExports$s = lib$t.exports;

var lib$r = {exports: {}};

var index_min$r = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-icon
 * @version 2.4.0
 */

var hasRequiredIndex_min$r;

function requireIndex_min$r () {
	if (hasRequiredIndex_min$r) return index_min$r;
	hasRequiredIndex_min$r = 1;
var e=libExports$B,t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);},t(e,n)};var n=e.utils.classSet,i=function(e){function i(t){var n=e.call(this,t)||this;return n.icons=new Map,n.opts=Object.assign({},{invalid:"fv-plugins-icon--invalid",onPlaced:function(){},onSet:function(){},valid:"fv-plugins-icon--valid",validating:"fv-plugins-icon--validating"},t),n.elementValidatingHandler=n.onElementValidating.bind(n),n.elementValidatedHandler=n.onElementValidated.bind(n),n.elementNotValidatedHandler=n.onElementNotValidated.bind(n),n.elementIgnoredHandler=n.onElementIgnored.bind(n),n.fieldAddedHandler=n.onFieldAdded.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i);}(i,e),i.prototype.install=function(){this.core.on("core.element.validating",this.elementValidatingHandler).on("core.element.validated",this.elementValidatedHandler).on("core.element.notvalidated",this.elementNotValidatedHandler).on("core.element.ignored",this.elementIgnoredHandler).on("core.field.added",this.fieldAddedHandler);},i.prototype.uninstall=function(){this.icons.forEach((function(e){return e.parentNode.removeChild(e)})),this.icons.clear(),this.core.off("core.element.validating",this.elementValidatingHandler).off("core.element.validated",this.elementValidatedHandler).off("core.element.notvalidated",this.elementNotValidatedHandler).off("core.element.ignored",this.elementIgnoredHandler).off("core.field.added",this.fieldAddedHandler);},i.prototype.onEnabled=function(){this.icons.forEach((function(e,t,i){n(t,{"fv-plugins-icon--enabled":!0,"fv-plugins-icon--disabled":!1});}));},i.prototype.onDisabled=function(){this.icons.forEach((function(e,t,i){n(t,{"fv-plugins-icon--enabled":!1,"fv-plugins-icon--disabled":!0});}));},i.prototype.onFieldAdded=function(e){var t=this,n=e.elements;n&&(n.forEach((function(e){var n=t.icons.get(e);n&&(n.parentNode.removeChild(n),t.icons.delete(e));})),this.prepareFieldIcon(e.field,n));},i.prototype.prepareFieldIcon=function(e,t){var n=this;if(t.length){var i=t[0].getAttribute("type");"radio"===i||"checkbox"===i?this.prepareElementIcon(e,t[0]):t.forEach((function(t){return n.prepareElementIcon(e,t)}));}},i.prototype.prepareElementIcon=function(e,t){var i=document.createElement("i");i.setAttribute("data-field",e),t.parentNode.insertBefore(i,t.nextSibling),n(i,{"fv-plugins-icon":!0,"fv-plugins-icon--enabled":this.isEnabled,"fv-plugins-icon--disabled":!this.isEnabled});var o={classes:{invalid:this.opts.invalid,valid:this.opts.valid,validating:this.opts.validating},element:t,field:e,iconElement:i};this.core.emit("plugins.icon.placed",o),this.opts.onPlaced(o),this.icons.set(t,i);},i.prototype.onElementValidating=function(e){var t,n=this.setClasses(e.field,e.element,e.elements,((t={})[this.opts.invalid]=!1,t[this.opts.valid]=!1,t[this.opts.validating]=!0,t)),i={element:e.element,field:e.field,iconElement:n,status:"Validating"};this.core.emit("plugins.icon.set",i),this.opts.onSet(i);},i.prototype.onElementValidated=function(e){var t,n=this.setClasses(e.field,e.element,e.elements,((t={})[this.opts.invalid]=!e.valid,t[this.opts.valid]=e.valid,t[this.opts.validating]=!1,t)),i={element:e.element,field:e.field,iconElement:n,status:e.valid?"Valid":"Invalid"};this.core.emit("plugins.icon.set",i),this.opts.onSet(i);},i.prototype.onElementNotValidated=function(e){var t,n=this.setClasses(e.field,e.element,e.elements,((t={})[this.opts.invalid]=!1,t[this.opts.valid]=!1,t[this.opts.validating]=!1,t)),i={element:e.element,field:e.field,iconElement:n,status:"NotValidated"};this.core.emit("plugins.icon.set",i),this.opts.onSet(i);},i.prototype.onElementIgnored=function(e){var t,n=this.setClasses(e.field,e.element,e.elements,((t={})[this.opts.invalid]=!1,t[this.opts.valid]=!1,t[this.opts.validating]=!1,t)),i={element:e.element,field:e.field,iconElement:n,status:"Ignored"};this.core.emit("plugins.icon.set",i),this.opts.onSet(i);},i.prototype.setClasses=function(e,t,i,o){var l=t.getAttribute("type"),a="radio"===l||"checkbox"===l?i[0]:t;if(this.icons.has(a)){var s=this.icons.get(a);return n(s,o),s}return null},i}(e.Plugin);index_min$r.Icon=i;
	return index_min$r;
}

var cjs$r = {};

var hasRequiredCjs$r;

function requireCjs$r () {
	if (hasRequiredCjs$r) return cjs$r;
	hasRequiredCjs$r = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var classSet = core.utils.classSet;
	var Icon = /** @class */ (function (_super) {
	    __extends(Icon, _super);
	    function Icon(opts) {
	        var _this = _super.call(this, opts) || this;
	        // Map the field element with icon
	        _this.icons = new Map();
	        _this.opts = Object.assign({}, {
	            invalid: 'fv-plugins-icon--invalid',
	            onPlaced: function () { },
	            onSet: function () { },
	            valid: 'fv-plugins-icon--valid',
	            validating: 'fv-plugins-icon--validating',
	        }, opts);
	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
	        _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        return _this;
	    }
	    Icon.prototype.install = function () {
	        this.core
	            .on('core.element.validating', this.elementValidatingHandler)
	            .on('core.element.validated', this.elementValidatedHandler)
	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
	            .on('core.element.ignored', this.elementIgnoredHandler)
	            .on('core.field.added', this.fieldAddedHandler);
	    };
	    Icon.prototype.uninstall = function () {
	        this.icons.forEach(function (icon) { return icon.parentNode.removeChild(icon); });
	        this.icons.clear();
	        this.core
	            .off('core.element.validating', this.elementValidatingHandler)
	            .off('core.element.validated', this.elementValidatedHandler)
	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
	            .off('core.element.ignored', this.elementIgnoredHandler)
	            .off('core.field.added', this.fieldAddedHandler);
	    };
	    Icon.prototype.onEnabled = function () {
	        this.icons.forEach(function (_element, i, _map) {
	            classSet(i, {
	                'fv-plugins-icon--enabled': true,
	                'fv-plugins-icon--disabled': false,
	            });
	        });
	    };
	    Icon.prototype.onDisabled = function () {
	        this.icons.forEach(function (_element, i, _map) {
	            classSet(i, {
	                'fv-plugins-icon--enabled': false,
	                'fv-plugins-icon--disabled': true,
	            });
	        });
	    };
	    Icon.prototype.onFieldAdded = function (e) {
	        var _this = this;
	        var elements = e.elements;
	        if (elements) {
	            elements.forEach(function (ele) {
	                var icon = _this.icons.get(ele);
	                if (icon) {
	                    icon.parentNode.removeChild(icon);
	                    _this.icons.delete(ele);
	                }
	            });
	            this.prepareFieldIcon(e.field, elements);
	        }
	    };
	    Icon.prototype.prepareFieldIcon = function (field, elements) {
	        var _this = this;
	        if (elements.length) {
	            var type = elements[0].getAttribute('type');
	            if ('radio' === type || 'checkbox' === type) {
	                this.prepareElementIcon(field, elements[0]);
	            }
	            else {
	                elements.forEach(function (ele) { return _this.prepareElementIcon(field, ele); });
	            }
	        }
	    };
	    Icon.prototype.prepareElementIcon = function (field, ele) {
	        var i = document.createElement('i');
	        i.setAttribute('data-field', field);
	        // Append the icon right after the field element
	        ele.parentNode.insertBefore(i, ele.nextSibling);
	        classSet(i, {
	            'fv-plugins-icon': true,
	            'fv-plugins-icon--enabled': this.isEnabled,
	            'fv-plugins-icon--disabled': !this.isEnabled,
	        });
	        var e = {
	            classes: {
	                invalid: this.opts.invalid,
	                valid: this.opts.valid,
	                validating: this.opts.validating,
	            },
	            element: ele,
	            field: field,
	            iconElement: i,
	        };
	        this.core.emit('plugins.icon.placed', e);
	        this.opts.onPlaced(e);
	        this.icons.set(ele, i);
	    };
	    Icon.prototype.onElementValidating = function (e) {
	        var _a;
	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
	            _a[this.opts.invalid] = false,
	            _a[this.opts.valid] = false,
	            _a[this.opts.validating] = true,
	            _a));
	        var evt = {
	            element: e.element,
	            field: e.field,
	            iconElement: icon,
	            status: 'Validating',
	        };
	        this.core.emit('plugins.icon.set', evt);
	        this.opts.onSet(evt);
	    };
	    Icon.prototype.onElementValidated = function (e) {
	        var _a;
	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
	            _a[this.opts.invalid] = !e.valid,
	            _a[this.opts.valid] = e.valid,
	            _a[this.opts.validating] = false,
	            _a));
	        var evt = {
	            element: e.element,
	            field: e.field,
	            iconElement: icon,
	            status: e.valid ? 'Valid' : 'Invalid',
	        };
	        this.core.emit('plugins.icon.set', evt);
	        this.opts.onSet(evt);
	    };
	    Icon.prototype.onElementNotValidated = function (e) {
	        var _a;
	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
	            _a[this.opts.invalid] = false,
	            _a[this.opts.valid] = false,
	            _a[this.opts.validating] = false,
	            _a));
	        var evt = {
	            element: e.element,
	            field: e.field,
	            iconElement: icon,
	            status: 'NotValidated',
	        };
	        this.core.emit('plugins.icon.set', evt);
	        this.opts.onSet(evt);
	    };
	    Icon.prototype.onElementIgnored = function (e) {
	        var _a;
	        var icon = this.setClasses(e.field, e.element, e.elements, (_a = {},
	            _a[this.opts.invalid] = false,
	            _a[this.opts.valid] = false,
	            _a[this.opts.validating] = false,
	            _a));
	        var evt = {
	            element: e.element,
	            field: e.field,
	            iconElement: icon,
	            status: 'Ignored',
	        };
	        this.core.emit('plugins.icon.set', evt);
	        this.opts.onSet(evt);
	    };
	    Icon.prototype.setClasses = function (_field, element, elements, classes) {
	        var type = element.getAttribute('type');
	        var ele = 'radio' === type || 'checkbox' === type ? elements[0] : element;
	        if (this.icons.has(ele)) {
	            var icon = this.icons.get(ele);
	            classSet(icon, classes);
	            return icon;
	        }
	        else {
	            return null;
	        }
	    };
	    return Icon;
	}(core.Plugin));

	cjs$r.Icon = Icon;
	return cjs$r;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$r.exports = requireIndex_min$r();
} else {
    lib$r.exports = requireCjs$r();
}

var libExports$r = lib$r.exports;

var lib$q = {exports: {}};

var index_min$q = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-sequence
 * @version 2.4.0
 */

var hasRequiredIndex_min$q;

function requireIndex_min$q () {
	if (hasRequiredIndex_min$q) return index_min$q;
	hasRequiredIndex_min$q = 1;
var e=libExports$B,t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);},t(e,i)};var i=e.utils.removeUndefined,l=function(e){function l(t){var l=e.call(this,t)||this;return l.invalidFields=new Map,l.opts=Object.assign({},{enabled:!0},i(t)),l.validatorHandler=l.onValidatorValidated.bind(l),l.shouldValidateFilter=l.shouldValidate.bind(l),l.fieldAddedHandler=l.onFieldAdded.bind(l),l.elementNotValidatedHandler=l.onElementNotValidated.bind(l),l.elementValidatingHandler=l.onElementValidating.bind(l),l}return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function l(){this.constructor=e;}t(e,i),e.prototype=null===i?Object.create(i):(l.prototype=i.prototype,new l);}(l,e),l.prototype.install=function(){this.core.on("core.validator.validated",this.validatorHandler).on("core.field.added",this.fieldAddedHandler).on("core.element.notvalidated",this.elementNotValidatedHandler).on("core.element.validating",this.elementValidatingHandler).registerFilter("field-should-validate",this.shouldValidateFilter);},l.prototype.uninstall=function(){this.invalidFields.clear(),this.core.off("core.validator.validated",this.validatorHandler).off("core.field.added",this.fieldAddedHandler).off("core.element.notvalidated",this.elementNotValidatedHandler).off("core.element.validating",this.elementValidatingHandler).deregisterFilter("field-should-validate",this.shouldValidateFilter);},l.prototype.shouldValidate=function(e,t,i,l){return !this.isEnabled||!((!0===this.opts.enabled||!0===this.opts.enabled[e])&&this.invalidFields.has(t)&&!!this.invalidFields.get(t).length&&-1===this.invalidFields.get(t).indexOf(l))},l.prototype.onValidatorValidated=function(e){var t=this.invalidFields.has(e.element)?this.invalidFields.get(e.element):[],i=t.indexOf(e.validator);e.result.valid&&i>=0?t.splice(i,1):e.result.valid||-1!==i||t.push(e.validator),this.invalidFields.set(e.element,t);},l.prototype.onFieldAdded=function(e){e.elements&&this.clearInvalidFields(e.elements);},l.prototype.onElementNotValidated=function(e){this.clearInvalidFields(e.elements);},l.prototype.onElementValidating=function(e){this.clearInvalidFields(e.elements);},l.prototype.clearInvalidFields=function(e){var t=this;e.forEach((function(e){return t.invalidFields.delete(e)}));},l}(e.Plugin);index_min$q.Sequence=l;
	return index_min$q;
}

var cjs$q = {};

var hasRequiredCjs$q;

function requireCjs$q () {
	if (hasRequiredCjs$q) return cjs$q;
	hasRequiredCjs$q = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	/**
	 * ```
	 *  new Core(form, { ... })
	 *      .registerPlugin('sequence', new Sequence({
	 *          enabled: false // Default value is `true`
	 *      }));
	 * ```
	 *
	 * The `enabled` option can be:
	 * - `true` (default): When a field has multiple validators, all of them will be checked respectively.
	 * If errors occur in multiple validators, all of them will be displayed to the user
	 * - `false`: When a field has multiple validators, validation for this field will be terminated upon the
	 * first encountered error.
	 * Thus, only the very first error message related to this field will be displayed to the user
	 *
	 * User can set the `enabled` option to all fields as sample code above, or apply it for specific fields as following:
	 * ```
	 *  new Core(form, { ... })
	 *      .registerPlugin('sequence', new Sequence({
	 *          enabled: {
	 *              fullName: true, // It's not necessary since the default value is `true`
	 *              username: false,
	 *              email: false
	 *          }
	 *      }));
	 * ```
	 */
	var Sequence = /** @class */ (function (_super) {
	    __extends(Sequence, _super);
	    function Sequence(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.invalidFields = new Map();
	        _this.opts = Object.assign({}, { enabled: true }, removeUndefined(opts));
	        _this.validatorHandler = _this.onValidatorValidated.bind(_this);
	        _this.shouldValidateFilter = _this.shouldValidate.bind(_this);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
	        _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
	        return _this;
	    }
	    Sequence.prototype.install = function () {
	        this.core
	            .on('core.validator.validated', this.validatorHandler)
	            .on('core.field.added', this.fieldAddedHandler)
	            .on('core.element.notvalidated', this.elementNotValidatedHandler)
	            .on('core.element.validating', this.elementValidatingHandler)
	            .registerFilter('field-should-validate', this.shouldValidateFilter);
	    };
	    Sequence.prototype.uninstall = function () {
	        this.invalidFields.clear();
	        this.core
	            .off('core.validator.validated', this.validatorHandler)
	            .off('core.field.added', this.fieldAddedHandler)
	            .off('core.element.notvalidated', this.elementNotValidatedHandler)
	            .off('core.element.validating', this.elementValidatingHandler)
	            .deregisterFilter('field-should-validate', this.shouldValidateFilter);
	    };
	    Sequence.prototype.shouldValidate = function (field, element, _value, validator) {
	        if (!this.isEnabled) {
	            return true;
	        }
	        // Stop validating
	        // if the `enabled` option is set to `false`
	        // and there's at least one validator that field doesn't pass
	        var stop = (this.opts.enabled === true || this.opts.enabled[field] === true) &&
	            this.invalidFields.has(element) &&
	            !!this.invalidFields.get(element).length &&
	            this.invalidFields.get(element).indexOf(validator) === -1;
	        return !stop;
	    };
	    Sequence.prototype.onValidatorValidated = function (e) {
	        var validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
	        var index = validators.indexOf(e.validator);
	        if (e.result.valid && index >= 0) {
	            validators.splice(index, 1);
	        }
	        else if (!e.result.valid && index === -1) {
	            validators.push(e.validator);
	        }
	        this.invalidFields.set(e.element, validators);
	    };
	    Sequence.prototype.onFieldAdded = function (e) {
	        // Remove the field element from set of invalid elements
	        if (e.elements) {
	            this.clearInvalidFields(e.elements);
	        }
	    };
	    Sequence.prototype.onElementNotValidated = function (e) {
	        this.clearInvalidFields(e.elements);
	    };
	    Sequence.prototype.onElementValidating = function (e) {
	        this.clearInvalidFields(e.elements);
	    };
	    Sequence.prototype.clearInvalidFields = function (elements) {
	        var _this = this;
	        elements.forEach(function (ele) { return _this.invalidFields.delete(ele); });
	    };
	    return Sequence;
	}(core.Plugin));

	cjs$q.Sequence = Sequence;
	return cjs$q;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$q.exports = requireIndex_min$q();
} else {
    lib$q.exports = requireCjs$q();
}

var libExports$q = lib$q.exports;

var lib$p = {exports: {}};

var index_min$p = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-submit-button
 * @version 2.4.0
 */

var hasRequiredIndex_min$p;

function requireIndex_min$p () {
	if (hasRequiredIndex_min$p) return index_min$p;
	hasRequiredIndex_min$p = 1;
var t=libExports$B,e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);},e(t,i)};var i=function(t){function i(e){var i=t.call(this,e)||this;return i.isFormValid=!1,i.isButtonClicked=!1,i.opts=Object.assign({},{aspNetButton:!1,buttons:function(t){return [].slice.call(t.querySelectorAll('[type="submit"]:not([formnovalidate])'))},liveMode:!0},e),i.submitHandler=i.handleSubmitEvent.bind(i),i.buttonClickHandler=i.handleClickEvent.bind(i),i.ignoreValidationFilter=i.ignoreValidation.bind(i),i}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function n(){this.constructor=t;}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n);}(i,t),i.prototype.install=function(){var t=this;if(this.core.getFormElement()instanceof HTMLFormElement){var e=this.core.getFormElement();this.submitButtons=this.opts.buttons(e),e.setAttribute("novalidate","novalidate"),e.addEventListener("submit",this.submitHandler),this.hiddenClickedEle=document.createElement("input"),this.hiddenClickedEle.setAttribute("type","hidden"),e.appendChild(this.hiddenClickedEle),this.submitButtons.forEach((function(e){e.addEventListener("click",t.buttonClickHandler);})),this.core.registerFilter("element-ignored",this.ignoreValidationFilter);}},i.prototype.uninstall=function(){var t=this,e=this.core.getFormElement();e instanceof HTMLFormElement&&e.removeEventListener("submit",this.submitHandler),this.submitButtons.forEach((function(e){e.removeEventListener("click",t.buttonClickHandler);})),this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle),this.core.deregisterFilter("element-ignored",this.ignoreValidationFilter);},i.prototype.handleSubmitEvent=function(t){this.validateForm(t);},i.prototype.handleClickEvent=function(t){var e=t.currentTarget;if(this.isButtonClicked=!0,e instanceof HTMLElement)if(this.opts.aspNetButton&&!0===this.isFormValid);else {this.core.getFormElement().removeEventListener("submit",this.submitHandler),this.clickedButton=t.target;var i=this.clickedButton.getAttribute("name"),n=this.clickedButton.getAttribute("value");i&&n&&(this.hiddenClickedEle.setAttribute("name",i),this.hiddenClickedEle.setAttribute("value",n)),this.validateForm(t);}},i.prototype.validateForm=function(t){var e=this;this.isEnabled&&(t.preventDefault(),this.core.validate().then((function(t){"Valid"===t&&e.opts.aspNetButton&&!e.isFormValid&&e.clickedButton&&(e.isFormValid=!0,e.clickedButton.removeEventListener("click",e.buttonClickHandler),e.clickedButton.click());})));},i.prototype.ignoreValidation=function(t,e,i){return !!this.isEnabled&&(!this.opts.liveMode&&!this.isButtonClicked)},i}(t.Plugin);index_min$p.SubmitButton=i;
	return index_min$p;
}

var cjs$p = {};

var hasRequiredCjs$p;

function requireCjs$p () {
	if (hasRequiredCjs$p) return cjs$p;
	hasRequiredCjs$p = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var SubmitButton = /** @class */ (function (_super) {
	    __extends(SubmitButton, _super);
	    function SubmitButton(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.isFormValid = false;
	        _this.isButtonClicked = false;
	        _this.opts = Object.assign({}, {
	            // Set it to `true` to support classical ASP.Net form
	            aspNetButton: false,
	            // By default, don't perform validation when clicking on
	            // the submit button/input which have `formnovalidate` attribute
	            buttons: function (form) {
	                return [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])'));
	            },
	            liveMode: true,
	        }, opts);
	        _this.submitHandler = _this.handleSubmitEvent.bind(_this);
	        _this.buttonClickHandler = _this.handleClickEvent.bind(_this);
	        _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
	        return _this;
	    }
	    SubmitButton.prototype.install = function () {
	        var _this = this;
	        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
	            return;
	        }
	        var form = this.core.getFormElement();
	        this.submitButtons = this.opts.buttons(form);
	        // Disable client side validation in HTML 5
	        form.setAttribute('novalidate', 'novalidate');
	        // Disable the default submission first
	        form.addEventListener('submit', this.submitHandler);
	        this.hiddenClickedEle = document.createElement('input');
	        this.hiddenClickedEle.setAttribute('type', 'hidden');
	        form.appendChild(this.hiddenClickedEle);
	        this.submitButtons.forEach(function (button) {
	            button.addEventListener('click', _this.buttonClickHandler);
	        });
	        this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
	    };
	    SubmitButton.prototype.uninstall = function () {
	        var _this = this;
	        var form = this.core.getFormElement();
	        if (form instanceof HTMLFormElement) {
	            form.removeEventListener('submit', this.submitHandler);
	        }
	        this.submitButtons.forEach(function (button) {
	            button.removeEventListener('click', _this.buttonClickHandler);
	        });
	        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
	        this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
	    };
	    SubmitButton.prototype.handleSubmitEvent = function (e) {
	        this.validateForm(e);
	    };
	    SubmitButton.prototype.handleClickEvent = function (e) {
	        var target = e.currentTarget;
	        this.isButtonClicked = true;
	        if (target instanceof HTMLElement) {
	            if (this.opts.aspNetButton && this.isFormValid === true) ;
	            else {
	                var form = this.core.getFormElement();
	                form.removeEventListener('submit', this.submitHandler);
	                this.clickedButton = e.target;
	                var name_1 = this.clickedButton.getAttribute('name');
	                var value = this.clickedButton.getAttribute('value');
	                if (name_1 && value) {
	                    this.hiddenClickedEle.setAttribute('name', name_1);
	                    this.hiddenClickedEle.setAttribute('value', value);
	                }
	                this.validateForm(e);
	            }
	        }
	    };
	    SubmitButton.prototype.validateForm = function (e) {
	        var _this = this;
	        if (!this.isEnabled) {
	            return;
	        }
	        e.preventDefault();
	        this.core.validate().then(function (result) {
	            if (result === 'Valid' && _this.opts.aspNetButton && !_this.isFormValid && _this.clickedButton) {
	                _this.isFormValid = true;
	                _this.clickedButton.removeEventListener('click', _this.buttonClickHandler);
	                // It's the time for ASP.Net submit button to do its own submission
	                _this.clickedButton.click();
	            }
	        });
	    };
	    SubmitButton.prototype.ignoreValidation = function (_field, _element, _elements) {
	        if (!this.isEnabled) {
	            return false;
	        }
	        return this.opts.liveMode ? false : !this.isButtonClicked;
	    };
	    return SubmitButton;
	}(core.Plugin));

	cjs$p.SubmitButton = SubmitButton;
	return cjs$p;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$p.exports = requireIndex_min$p();
} else {
    lib$p.exports = requireCjs$p();
}

var libExports$p = lib$p.exports;

var lib$o = {exports: {}};

var index_min$o = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-tooltip
 * @version 2.4.0
 */

var hasRequiredIndex_min$o;

function requireIndex_min$o () {
	if (hasRequiredIndex_min$o) return index_min$o;
	hasRequiredIndex_min$o = 1;
var t=libExports$B,e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);},e(t,i)};var i=t.utils.classSet,o=function(t){function o(e){var i=t.call(this,e)||this;return i.messages=new Map,i.opts=Object.assign({},{placement:"top",trigger:"click"},e),i.iconPlacedHandler=i.onIconPlaced.bind(i),i.validatorValidatedHandler=i.onValidatorValidated.bind(i),i.elementValidatedHandler=i.onElementValidated.bind(i),i.documentClickHandler=i.onDocumentClicked.bind(i),i}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=t;}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o);}(o,t),o.prototype.install=function(){var t;this.tip=document.createElement("div"),i(this.tip,((t={"fv-plugins-tooltip":!0})["fv-plugins-tooltip--".concat(this.opts.placement)]=!0,t)),document.body.appendChild(this.tip),this.core.on("plugins.icon.placed",this.iconPlacedHandler).on("core.validator.validated",this.validatorValidatedHandler).on("core.element.validated",this.elementValidatedHandler),"click"===this.opts.trigger&&document.addEventListener("click",this.documentClickHandler);},o.prototype.uninstall=function(){this.messages.clear(),document.body.removeChild(this.tip),this.core.off("plugins.icon.placed",this.iconPlacedHandler).off("core.validator.validated",this.validatorValidatedHandler).off("core.element.validated",this.elementValidatedHandler),"click"===this.opts.trigger&&document.removeEventListener("click",this.documentClickHandler);},o.prototype.onIconPlaced=function(t){var e=this;if(i(t.iconElement,{"fv-plugins-tooltip-icon":!0}),"hover"===this.opts.trigger)t.iconElement.addEventListener("mouseenter",(function(i){return e.show(t.element,i)})),t.iconElement.addEventListener("mouseleave",(function(t){return e.hide()}));else t.iconElement.addEventListener("click",(function(i){return e.show(t.element,i)}));},o.prototype.onValidatorValidated=function(t){if(!t.result.valid){var e=t.elements,i=t.element.getAttribute("type"),o="radio"===i||"checkbox"===i?e[0]:t.element,n="string"==typeof t.result.message?t.result.message:t.result.message[this.core.getLocale()];this.messages.set(o,n);}},o.prototype.onElementValidated=function(t){if(t.valid){var e=t.elements,i=t.element.getAttribute("type"),o="radio"===i||"checkbox"===i?e[0]:t.element;this.messages.delete(o);}},o.prototype.onDocumentClicked=function(t){this.hide();},o.prototype.show=function(t,e){if(this.isEnabled&&(e.preventDefault(),e.stopPropagation(),this.messages.has(t))){i(this.tip,{"fv-plugins-tooltip--hide":!1}),this.tip.innerHTML='<div class="fv-plugins-tooltip__content">'.concat(this.messages.get(t),"</div>");var o=e.target.getBoundingClientRect(),n=this.tip.getBoundingClientRect(),l=n.height,a=n.width,s=0,r=0;switch(this.opts.placement){case"bottom":s=o.top+o.height,r=o.left+o.width/2-a/2;break;case"bottom-left":s=o.top+o.height,r=o.left;break;case"bottom-right":s=o.top+o.height,r=o.left+o.width-a;break;case"left":s=o.top+o.height/2-l/2,r=o.left-a;break;case"right":s=o.top+o.height/2-l/2,r=o.left+o.width;break;case"top-left":s=o.top-l,r=o.left;break;case"top-right":s=o.top-l,r=o.left+o.width-a;break;default:s=o.top-l,r=o.left+o.width/2-a/2;}s+=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,r+=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0,this.tip.setAttribute("style","top: ".concat(s,"px; left: ").concat(r,"px"));}},o.prototype.hide=function(){this.isEnabled&&i(this.tip,{"fv-plugins-tooltip--hide":!0});},o}(t.Plugin);index_min$o.Tooltip=o;
	return index_min$o;
}

var cjs$o = {};

var hasRequiredCjs$o;

function requireCjs$o () {
	if (hasRequiredCjs$o) return cjs$o;
	hasRequiredCjs$o = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var classSet = core.utils.classSet;
	var Tooltip = /** @class */ (function (_super) {
	    __extends(Tooltip, _super);
	    function Tooltip(opts) {
	        var _this = _super.call(this, opts) || this;
	        // Map the element with message
	        _this.messages = new Map();
	        _this.opts = Object.assign({}, {
	            placement: 'top',
	            trigger: 'click',
	        }, opts);
	        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
	        _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
	        _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
	        _this.documentClickHandler = _this.onDocumentClicked.bind(_this);
	        return _this;
	    }
	    Tooltip.prototype.install = function () {
	        var _a;
	        this.tip = document.createElement('div');
	        classSet(this.tip, (_a = {
	                'fv-plugins-tooltip': true
	            },
	            _a["fv-plugins-tooltip--".concat(this.opts.placement)] = true,
	            _a));
	        document.body.appendChild(this.tip);
	        this.core
	            .on('plugins.icon.placed', this.iconPlacedHandler)
	            .on('core.validator.validated', this.validatorValidatedHandler)
	            .on('core.element.validated', this.elementValidatedHandler);
	        if ('click' === this.opts.trigger) {
	            document.addEventListener('click', this.documentClickHandler);
	        }
	    };
	    Tooltip.prototype.uninstall = function () {
	        this.messages.clear();
	        document.body.removeChild(this.tip);
	        this.core
	            .off('plugins.icon.placed', this.iconPlacedHandler)
	            .off('core.validator.validated', this.validatorValidatedHandler)
	            .off('core.element.validated', this.elementValidatedHandler);
	        if ('click' === this.opts.trigger) {
	            document.removeEventListener('click', this.documentClickHandler);
	        }
	    };
	    Tooltip.prototype.onIconPlaced = function (e) {
	        var _this = this;
	        classSet(e.iconElement, {
	            'fv-plugins-tooltip-icon': true,
	        });
	        switch (this.opts.trigger) {
	            case 'hover':
	                e.iconElement.addEventListener('mouseenter', function (evt) { return _this.show(e.element, evt); });
	                e.iconElement.addEventListener('mouseleave', function (_evt) { return _this.hide(); });
	                break;
	            case 'click':
	            default:
	                e.iconElement.addEventListener('click', function (evt) { return _this.show(e.element, evt); });
	                break;
	        }
	    };
	    Tooltip.prototype.onValidatorValidated = function (e) {
	        if (!e.result.valid) {
	            var elements = e.elements;
	            var type = e.element.getAttribute('type');
	            var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
	            // Get the message
	            var message = typeof e.result.message === 'string' ? e.result.message : e.result.message[this.core.getLocale()];
	            this.messages.set(ele, message);
	        }
	    };
	    Tooltip.prototype.onElementValidated = function (e) {
	        if (e.valid) {
	            // Clear the message
	            var elements = e.elements;
	            var type = e.element.getAttribute('type');
	            var ele = 'radio' === type || 'checkbox' === type ? elements[0] : e.element;
	            this.messages.delete(ele);
	        }
	    };
	    Tooltip.prototype.onDocumentClicked = function (_e) {
	        this.hide();
	    };
	    Tooltip.prototype.show = function (ele, e) {
	        if (!this.isEnabled) {
	            return;
	        }
	        e.preventDefault();
	        e.stopPropagation();
	        if (!this.messages.has(ele)) {
	            return;
	        }
	        classSet(this.tip, {
	            'fv-plugins-tooltip--hide': false,
	        });
	        this.tip.innerHTML = "<div class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(ele), "</div>");
	        // Calculate position of the icon element
	        var icon = e.target;
	        var targetRect = icon.getBoundingClientRect();
	        var _a = this.tip.getBoundingClientRect(), height = _a.height, width = _a.width;
	        var top = 0;
	        var left = 0;
	        switch (this.opts.placement) {
	            case 'bottom':
	                top = targetRect.top + targetRect.height;
	                left = targetRect.left + targetRect.width / 2 - width / 2;
	                break;
	            case 'bottom-left':
	                top = targetRect.top + targetRect.height;
	                left = targetRect.left;
	                break;
	            case 'bottom-right':
	                top = targetRect.top + targetRect.height;
	                left = targetRect.left + targetRect.width - width;
	                break;
	            case 'left':
	                top = targetRect.top + targetRect.height / 2 - height / 2;
	                left = targetRect.left - width;
	                break;
	            case 'right':
	                top = targetRect.top + targetRect.height / 2 - height / 2;
	                left = targetRect.left + targetRect.width;
	                break;
	            case 'top-left':
	                top = targetRect.top - height;
	                left = targetRect.left;
	                break;
	            case 'top-right':
	                top = targetRect.top - height;
	                left = targetRect.left + targetRect.width - width;
	                break;
	            case 'top':
	            default:
	                top = targetRect.top - height;
	                left = targetRect.left + targetRect.width / 2 - width / 2;
	                break;
	        }
	        var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
	        var scrollLeft = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
	        top = top + scrollTop;
	        left = left + scrollLeft;
	        this.tip.setAttribute('style', "top: ".concat(top, "px; left: ").concat(left, "px"));
	    };
	    Tooltip.prototype.hide = function () {
	        if (this.isEnabled) {
	            classSet(this.tip, {
	                'fv-plugins-tooltip--hide': true,
	            });
	        }
	    };
	    return Tooltip;
	}(core.Plugin));

	cjs$o.Tooltip = Tooltip;
	return cjs$o;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$o.exports = requireIndex_min$o();
} else {
    lib$o.exports = requireCjs$o();
}

var libExports$o = lib$o.exports;

var lib$n = {exports: {}};

var index_min$n = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/plugin-trigger
 * @version 2.4.0
 */

var hasRequiredIndex_min$n;

function requireIndex_min$n () {
	if (hasRequiredIndex_min$n) return index_min$n;
	hasRequiredIndex_min$n = 1;
var e=libExports$B,t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);},t(e,n)};var n=function(e){function n(t){var n=e.call(this,t)||this;n.handlers=[],n.timers=new Map;var r=document.createElement("div");return n.defaultEvent="oninput"in r?"input":"keyup",n.opts=Object.assign({},{delay:0,event:n.defaultEvent,threshold:0},t),n.fieldAddedHandler=n.onFieldAdded.bind(n),n.fieldRemovedHandler=n.onFieldRemoved.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r);}(n,e),n.prototype.install=function(){this.core.on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler);},n.prototype.uninstall=function(){this.handlers.forEach((function(e){return e.element.removeEventListener(e.event,e.handler)})),this.handlers=[],this.timers.forEach((function(e){return window.clearTimeout(e)})),this.timers.clear(),this.core.off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler);},n.prototype.prepareHandler=function(e,t){var n=this;t.forEach((function(t){var r=[];if(n.opts.event&&!1===n.opts.event[e])r=[];else if(n.opts.event&&n.opts.event[e]&&"function"!=typeof n.opts.event[e])r=n.opts.event[e].split(" ");else if("string"==typeof n.opts.event&&n.opts.event!==n.defaultEvent)r=n.opts.event.split(" ");else {var o=t.getAttribute("type"),i=t.tagName.toLowerCase();r=["radio"===o||"checkbox"===o||"file"===o||"select"===i?"change":n.ieVersion>=10&&t.getAttribute("placeholder")?"keyup":n.defaultEvent];}r.forEach((function(r){var o=function(r){return n.handleEvent(r,e,t)};n.handlers.push({element:t,event:r,field:e,handler:o}),t.addEventListener(r,o);}));}));},n.prototype.handleEvent=function(e,t,n){var r=this;if(this.isEnabled&&this.exceedThreshold(t,n)&&this.core.executeFilter("plugins-trigger-should-validate",!0,[t,n])){var o=function(){return r.core.validateElement(t,n).then((function(o){r.core.emit("plugins.trigger.executed",{element:n,event:e,field:t});}))},i=this.opts.delay[t]||this.opts.delay;if(0===i)o();else {var l=this.timers.get(n);l&&window.clearTimeout(l),this.timers.set(n,window.setTimeout(o,1e3*i));}}},n.prototype.onFieldAdded=function(e){this.handlers.filter((function(t){return t.field===e.field})).forEach((function(e){return e.element.removeEventListener(e.event,e.handler)})),this.prepareHandler(e.field,e.elements);},n.prototype.onFieldRemoved=function(e){this.handlers.filter((function(t){return t.field===e.field&&e.elements.indexOf(t.element)>=0})).forEach((function(e){return e.element.removeEventListener(e.event,e.handler)}));},n.prototype.exceedThreshold=function(e,t){var n=0!==this.opts.threshold[e]&&0!==this.opts.threshold&&(this.opts.threshold[e]||this.opts.threshold);if(!n)return !0;var r=t.getAttribute("type");return -1!==["button","checkbox","file","hidden","image","radio","reset","submit"].indexOf(r)||this.core.getElementValue(e,t).length>=n},n}(e.Plugin);index_min$n.Trigger=n;
	return index_min$n;
}

var cjs$n = {};

var hasRequiredCjs$n;

function requireCjs$n () {
	if (hasRequiredCjs$n) return cjs$n;
	hasRequiredCjs$n = 1;

	var core = libExports$B;

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * Indicate the events which the validation will be executed when these events are triggered
	 *
	 * ```
	 *  const fv = formValidation(form, {
	 *      fields: {
	 *          fullName: {},
	 *          email: {},
	 *      },
	 *  });
	 *
	 *  // Validate fields when the `blur` events are triggered
	 *  fv.registerPlugin(Trigger, {
	 *      event: 'blur',
	 *  });
	 *
	 *  // We can indicate different events for each particular field
	 *  fv.registerPlugin(Trigger, {
	 *      event: {
	 *          fullName: 'blur',
	 *          email: 'change',
	 *      },
	 *  });
	 *
	 *  // If we don't want the field to be validated automatically, set the associate value to `false`
	 *  fv.registerPlugin(Trigger, {
	 *      event: {
	 *          email: false,    // The field is only validated when we click the submit button of form
	 *      },
	 *  });
	 * ```
	 */
	var Trigger = /** @class */ (function (_super) {
	    __extends(Trigger, _super);
	    function Trigger(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.handlers = [];
	        _this.timers = new Map();
	        var ele = document.createElement('div');
	        _this.defaultEvent = !('oninput' in ele) ? 'keyup' : 'input';
	        _this.opts = Object.assign({}, {
	            delay: 0,
	            event: _this.defaultEvent,
	            threshold: 0,
	        }, opts);
	        _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
	        _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
	        return _this;
	    }
	    Trigger.prototype.install = function () {
	        this.core.on('core.field.added', this.fieldAddedHandler).on('core.field.removed', this.fieldRemovedHandler);
	    };
	    Trigger.prototype.uninstall = function () {
	        this.handlers.forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
	        this.handlers = [];
	        this.timers.forEach(function (t) { return window.clearTimeout(t); });
	        this.timers.clear();
	        this.core.off('core.field.added', this.fieldAddedHandler).off('core.field.removed', this.fieldRemovedHandler);
	    };
	    Trigger.prototype.prepareHandler = function (field, elements) {
	        var _this = this;
	        elements.forEach(function (ele) {
	            var events = [];
	            if (!!_this.opts.event && _this.opts.event[field] === false) {
	                events = [];
	            }
	            else if (!!_this.opts.event && !!_this.opts.event[field] && typeof _this.opts.event[field] !== 'function') {
	                // To fix the case where `field` is a special property of String
	                // For example, `link` is the special function of `String.prototype`
	                // In this case, `this.opts.event[field]` is a function, not a string
	                events = _this.opts.event[field].split(' ');
	            }
	            else if ('string' === typeof _this.opts.event && _this.opts.event !== _this.defaultEvent) {
	                events = _this.opts.event.split(' ');
	            }
	            else {
	                var type = ele.getAttribute('type');
	                var tagName = ele.tagName.toLowerCase();
	                // IE10/11 fires the `input` event when focus on the field having a placeholder
	                var event_1 = 'radio' === type || 'checkbox' === type || 'file' === type || 'select' === tagName
	                    ? 'change'
	                    : _this.ieVersion >= 10 && ele.getAttribute('placeholder')
	                        ? 'keyup'
	                        : _this.defaultEvent;
	                events = [event_1];
	            }
	            events.forEach(function (evt) {
	                var evtHandler = function (e) { return _this.handleEvent(e, field, ele); };
	                _this.handlers.push({
	                    element: ele,
	                    event: evt,
	                    field: field,
	                    handler: evtHandler,
	                });
	                ele.addEventListener(evt, evtHandler);
	            });
	        });
	    };
	    Trigger.prototype.handleEvent = function (e, field, ele) {
	        var _this = this;
	        if (this.isEnabled &&
	            this.exceedThreshold(field, ele) &&
	            this.core.executeFilter('plugins-trigger-should-validate', true, [field, ele])) {
	            var handler = function () {
	                return _this.core.validateElement(field, ele).then(function (_) {
	                    _this.core.emit('plugins.trigger.executed', {
	                        element: ele,
	                        event: e,
	                        field: field,
	                    });
	                });
	            };
	            var delay = this.opts.delay[field] || this.opts.delay;
	            if (delay === 0) {
	                handler();
	            }
	            else {
	                var timer = this.timers.get(ele);
	                if (timer) {
	                    window.clearTimeout(timer);
	                }
	                this.timers.set(ele, window.setTimeout(handler, delay * 1000));
	            }
	        }
	    };
	    Trigger.prototype.onFieldAdded = function (e) {
	        this.handlers
	            .filter(function (item) { return item.field === e.field; })
	            .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
	        this.prepareHandler(e.field, e.elements);
	    };
	    Trigger.prototype.onFieldRemoved = function (e) {
	        this.handlers
	            .filter(function (item) { return item.field === e.field && e.elements.indexOf(item.element) >= 0; })
	            .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
	    };
	    Trigger.prototype.exceedThreshold = function (field, element) {
	        var threshold = this.opts.threshold[field] === 0 || this.opts.threshold === 0
	            ? false
	            : this.opts.threshold[field] || this.opts.threshold;
	        if (!threshold) {
	            return true;
	        }
	        // List of input type which user can't type in
	        var type = element.getAttribute('type');
	        if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(type) !== -1) {
	            return true;
	        }
	        var value = this.core.getElementValue(field, element);
	        return value.length >= threshold;
	    };
	    return Trigger;
	}(core.Plugin));

	cjs$n.Trigger = Trigger;
	return cjs$n;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$n.exports = requireIndex_min$n();
} else {
    lib$n.exports = requireCjs$n();
}

var libExports$n = lib$n.exports;

var lib$m = {exports: {}};

var index_min$m = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-between
 * @version 2.4.0
 */

var hasRequiredIndex_min$m;

function requireIndex_min$m () {
	if (hasRequiredIndex_min$m) return index_min$m;
	hasRequiredIndex_min$m = 1;
var e=libExports$B,a=e.utils.format,n=e.utils.removeUndefined;index_min$m.between=function(){var e=function(e){return parseFloat("".concat(e).replace(",","."))};return {validate:function(t){var s=t.value;if(""===s)return {valid:!0};var r=Object.assign({},{inclusive:!0,message:""},n(t.options)),i=e(r.min),l=e(r.max);return r.inclusive?{message:a(t.l10n?r.message||t.l10n.between.default:r.message,["".concat(i),"".concat(l)]),valid:parseFloat(s)>=i&&parseFloat(s)<=l}:{message:a(t.l10n?r.message||t.l10n.between.notInclusive:r.message,["".concat(i),"".concat(l)]),valid:parseFloat(s)>i&&parseFloat(s)<l}}}};
	return index_min$m;
}

var cjs$m = {};

var hasRequiredCjs$m;

function requireCjs$m () {
	if (hasRequiredCjs$m) return cjs$m;
	hasRequiredCjs$m = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
	function between() {
	    var formatValue = function (value) {
	        return parseFloat("".concat(value).replace(',', '.'));
	    };
	    return {
	        validate: function (input) {
	            var value = input.value;
	            if (value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
	            var minValue = formatValue(opts.min);
	            var maxValue = formatValue(opts.max);
	            return opts.inclusive
	                ? {
	                    message: format(input.l10n ? opts.message || input.l10n.between.default : opts.message, [
	                        "".concat(minValue),
	                        "".concat(maxValue),
	                    ]),
	                    valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
	                }
	                : {
	                    message: format(input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, [
	                        "".concat(minValue),
	                        "".concat(maxValue),
	                    ]),
	                    valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
	                };
	        },
	    };
	}

	cjs$m.between = between;
	return cjs$m;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$m.exports = requireIndex_min$m();
} else {
    lib$m.exports = requireCjs$m();
}

var libExports$m = lib$m.exports;

var lib$l = {exports: {}};

var index_min$l = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-blank
 * @version 2.4.0
 */

var hasRequiredIndex_min$l;

function requireIndex_min$l () {
	if (hasRequiredIndex_min$l) return index_min$l;
	hasRequiredIndex_min$l = 1;
index_min$l.blank=function(){return {validate:function(t){return {valid:!0}}}};
	return index_min$l;
}

var cjs$l = {};

var hasRequiredCjs$l;

function requireCjs$l () {
	if (hasRequiredCjs$l) return cjs$l;
	hasRequiredCjs$l = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	/**
	 * This validator always returns valid.
	 * It can be used when we want to show the custom message returned from server
	 */
	function blank() {
	    return {
	        validate: function (_input) {
	            return { valid: true };
	        },
	    };
	}

	cjs$l.blank = blank;
	return cjs$l;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$l.exports = requireIndex_min$l();
} else {
    lib$l.exports = requireCjs$l();
}

var libExports$l = lib$l.exports;

var lib$k = {exports: {}};

var index_min$k = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-callback
 * @version 2.4.0
 */

var hasRequiredIndex_min$k;

function requireIndex_min$k () {
	if (hasRequiredIndex_min$k) return index_min$k;
	hasRequiredIndex_min$k = 1;
var a=libExports$B.utils.call;index_min$k.callback=function(){return {validate:function(r){var t=a(r.options.callback,[r]);return "boolean"==typeof t?{valid:t}:t}}};
	return index_min$k;
}

var cjs$k = {};

var hasRequiredCjs$k;

function requireCjs$k () {
	if (hasRequiredCjs$k) return cjs$k;
	hasRequiredCjs$k = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var call = core.utils.call;
	function callback() {
	    return {
	        validate: function (input) {
	            var response = call(input.options.callback, [input]);
	            return 'boolean' === typeof response
	                ? { valid: response } // Deprecated
	                : response;
	        },
	    };
	}

	cjs$k.callback = callback;
	return cjs$k;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$k.exports = requireIndex_min$k();
} else {
    lib$k.exports = requireCjs$k();
}

var libExports$k = lib$k.exports;

var lib$j = {exports: {}};

var index_min$j = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-choice
 * @version 2.4.0
 */

var hasRequiredIndex_min$j;

function requireIndex_min$j () {
	if (hasRequiredIndex_min$j) return index_min$j;
	hasRequiredIndex_min$j = 1;
var e=libExports$B.utils.format;index_min$j.choice=function(){return {validate:function(n){var t="select"===n.element.tagName.toLowerCase()?n.element.querySelectorAll("option:checked").length:n.elements.filter((function(e){return e.checked})).length,o=n.options.min?"".concat(n.options.min):"",s=n.options.max?"".concat(n.options.max):"",a=n.l10n?n.options.message||n.l10n.choice.default:n.options.message,c=!(o&&t<parseInt(o,10)||s&&t>parseInt(s,10));switch(!0){case!!o&&!!s:a=e(n.l10n?n.l10n.choice.between:n.options.message,[o,s]);break;case!!o:a=e(n.l10n?n.l10n.choice.more:n.options.message,o);break;case!!s:a=e(n.l10n?n.l10n.choice.less:n.options.message,s);}return {message:a,valid:c}}}};
	return index_min$j;
}

var cjs$j = {};

var hasRequiredCjs$j;

function requireCjs$j () {
	if (hasRequiredCjs$j) return cjs$j;
	hasRequiredCjs$j = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format;
	function choice() {
	    return {
	        validate: function (input) {
	            var numChoices = 'select' === input.element.tagName.toLowerCase()
	                ? input.element.querySelectorAll('option:checked').length
	                : input.elements.filter(function (ele) { return ele.checked; }).length;
	            var min = input.options.min ? "".concat(input.options.min) : '';
	            var max = input.options.max ? "".concat(input.options.max) : '';
	            var msg = input.l10n ? input.options.message || input.l10n.choice.default : input.options.message;
	            var isValid = !((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10)));
	            switch (true) {
	                case !!min && !!max:
	                    msg = format(input.l10n ? input.l10n.choice.between : input.options.message, [min, max]);
	                    break;
	                case !!min:
	                    msg = format(input.l10n ? input.l10n.choice.more : input.options.message, min);
	                    break;
	                case !!max:
	                    msg = format(input.l10n ? input.l10n.choice.less : input.options.message, max);
	                    break;
	            }
	            return {
	                message: msg,
	                valid: isValid,
	            };
	        },
	    };
	}

	cjs$j.choice = choice;
	return cjs$j;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$j.exports = requireIndex_min$j();
} else {
    lib$j.exports = requireCjs$j();
}

var libExports$j = lib$j.exports;

var lib$i = {exports: {}};

var index_min$i = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-credit-card
 * @version 2.4.0
 */

var hasRequiredIndex_min$i;

function requireIndex_min$i () {
	if (hasRequiredIndex_min$i) return index_min$i;
	hasRequiredIndex_min$i = 1;
var e=libExports$B.algorithms.luhn,r={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DANKORT:{length:[16],prefix:["5019"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},ELO:{length:[16],prefix:["4011","4312","4389","4514","4573","4576","5041","5066","5067","509","6277","6362","6363","650","6516","6550"]},FORBRUGSFORENINGEN:{length:[16],prefix:["600722"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","5868","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]},VISA_ELECTRON:{length:[16],prefix:["4026","417500","4405","4508","4844","4913","4917"]}};index_min$i.CREDIT_CARD_TYPES=r,index_min$i.creditCard=function(){return {validate:function(t){if(""===t.value)return {meta:{type:null},valid:!0};if(/[^0-9-\s]+/.test(t.value))return {meta:{type:null},valid:!1};var l=t.value.replace(/\D/g,"");if(!e(l))return {meta:{type:null},valid:!1};for(var i=0,n=Object.keys(r);i<n.length;i++){var f=n[i];for(var a in r[f].prefix)if(t.value.substr(0,r[f].prefix[a].length)===r[f].prefix[a]&&-1!==r[f].length.indexOf(l.length))return {meta:{type:f},valid:!0}}return {meta:{type:null},valid:!1}}}};
	return index_min$i;
}

var cjs$i = {};

var hasRequiredCjs$i;

function requireCjs$i () {
	if (hasRequiredCjs$i) return cjs$i;
	hasRequiredCjs$i = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var luhn = core.algorithms.luhn;
	var CREDIT_CARD_TYPES = {
	    AMERICAN_EXPRESS: {
	        length: [15],
	        prefix: ['34', '37'],
	    },
	    DANKORT: {
	        length: [16],
	        prefix: ['5019'],
	    },
	    DINERS_CLUB: {
	        length: [14],
	        prefix: ['300', '301', '302', '303', '304', '305', '36'],
	    },
	    DINERS_CLUB_US: {
	        length: [16],
	        prefix: ['54', '55'],
	    },
	    DISCOVER: {
	        length: [16],
	        prefix: [
	            '6011',
	            '622126',
	            '622127',
	            '622128',
	            '622129',
	            '62213',
	            '62214',
	            '62215',
	            '62216',
	            '62217',
	            '62218',
	            '62219',
	            '6222',
	            '6223',
	            '6224',
	            '6225',
	            '6226',
	            '6227',
	            '6228',
	            '62290',
	            '62291',
	            '622920',
	            '622921',
	            '622922',
	            '622923',
	            '622924',
	            '622925',
	            '644',
	            '645',
	            '646',
	            '647',
	            '648',
	            '649',
	            '65',
	        ],
	    },
	    ELO: {
	        length: [16],
	        prefix: [
	            '4011',
	            '4312',
	            '4389',
	            '4514',
	            '4573',
	            '4576',
	            '5041',
	            '5066',
	            '5067',
	            '509',
	            '6277',
	            '6362',
	            '6363',
	            '650',
	            '6516',
	            '6550',
	        ],
	    },
	    FORBRUGSFORENINGEN: {
	        length: [16],
	        prefix: ['600722'],
	    },
	    JCB: {
	        length: [16],
	        prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
	    },
	    LASER: {
	        length: [16, 17, 18, 19],
	        prefix: ['6304', '6706', '6771', '6709'],
	    },
	    MAESTRO: {
	        length: [12, 13, 14, 15, 16, 17, 18, 19],
	        prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766'],
	    },
	    MASTERCARD: {
	        length: [16],
	        prefix: ['51', '52', '53', '54', '55'],
	    },
	    SOLO: {
	        length: [16, 18, 19],
	        prefix: ['6334', '6767'],
	    },
	    UNIONPAY: {
	        length: [16, 17, 18, 19],
	        prefix: [
	            '622126',
	            '622127',
	            '622128',
	            '622129',
	            '62213',
	            '62214',
	            '62215',
	            '62216',
	            '62217',
	            '62218',
	            '62219',
	            '6222',
	            '6223',
	            '6224',
	            '6225',
	            '6226',
	            '6227',
	            '6228',
	            '62290',
	            '62291',
	            '622920',
	            '622921',
	            '622922',
	            '622923',
	            '622924',
	            '622925',
	        ],
	    },
	    VISA: {
	        length: [16],
	        prefix: ['4'],
	    },
	    VISA_ELECTRON: {
	        length: [16],
	        prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
	    },
	};
	function creditCard() {
	    return {
	        /**
	         * Return true if the input value is valid credit card number
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return {
	                    meta: {
	                        type: null,
	                    },
	                    valid: true,
	                };
	            }
	            // Accept only digits, dashes or spaces
	            if (/[^0-9-\s]+/.test(input.value)) {
	                return {
	                    meta: {
	                        type: null,
	                    },
	                    valid: false,
	                };
	            }
	            var v = input.value.replace(/\D/g, '');
	            if (!luhn(v)) {
	                return {
	                    meta: {
	                        type: null,
	                    },
	                    valid: false,
	                };
	            }
	            for (var _i = 0, _a = Object.keys(CREDIT_CARD_TYPES); _i < _a.length; _i++) {
	                var tpe = _a[_i];
	                for (var i in CREDIT_CARD_TYPES[tpe].prefix) {
	                    // Check the prefix and length
	                    if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) ===
	                        CREDIT_CARD_TYPES[tpe].prefix[i] &&
	                        CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
	                        return {
	                            meta: {
	                                type: tpe,
	                            },
	                            valid: true,
	                        };
	                    }
	                }
	            }
	            return {
	                meta: {
	                    type: null,
	                },
	                valid: false,
	            };
	        },
	    };
	}

	cjs$i.CREDIT_CARD_TYPES = CREDIT_CARD_TYPES;
	cjs$i.creditCard = creditCard;
	return cjs$i;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$i.exports = requireIndex_min$i();
} else {
    lib$i.exports = requireCjs$i();
}

var libExports$i = lib$i.exports;

var lib$h = {exports: {}};

var index_min$h = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-date
 * @version 2.4.0
 */

var hasRequiredIndex_min$h;

function requireIndex_min$h () {
	if (hasRequiredIndex_min$h) return index_min$h;
	hasRequiredIndex_min$h = 1;
var e=libExports$B,t=e.utils.format,n=e.utils.isValidDate,a=e.utils.removeUndefined,r=function(e,t,n){var a=t.indexOf("YYYY"),r=t.indexOf("MM"),l=t.indexOf("DD");if(-1===a||-1===r||-1===l)return null;var s=e.split(" "),i=s[0].split(n);if(i.length<3)return null;var c=new Date(parseInt(i[a],10),parseInt(i[r],10)-1,parseInt(i[l],10)),o=s.length>2?s[2]:null;if(s.length>1){var g=s[1].split(":"),u=g.length>0?parseInt(g[0],10):0;c.setHours(o&&"PM"===o.toUpperCase()&&u<12?u+12:u),c.setMinutes(g.length>1?parseInt(g[1],10):0),c.setSeconds(g.length>2?parseInt(g[2],10):0);}return c},l=function(e,t){var n=t.replace(/Y/g,"y").replace(/M/g,"m").replace(/D/g,"d").replace(/:m/g,":M").replace(/:mm/g,":MM").replace(/:S/,":s").replace(/:SS/,":ss"),a=e.getDate(),r=a<10?"0".concat(a):a,l=e.getMonth()+1,s=l<10?"0".concat(l):l,i="".concat(e.getFullYear()).substr(2),c=e.getFullYear(),o=e.getHours()%12||12,g=o<10?"0".concat(o):o,u=e.getHours(),d=u<10?"0".concat(u):u,f=e.getMinutes(),m=f<10?"0".concat(f):f,p=e.getSeconds(),h=p<10?"0".concat(p):p,v={H:"".concat(u),HH:"".concat(d),M:"".concat(f),MM:"".concat(m),d:"".concat(a),dd:"".concat(r),h:"".concat(o),hh:"".concat(g),m:"".concat(l),mm:"".concat(s),s:"".concat(p),ss:"".concat(h),yy:"".concat(i),yyyy:"".concat(c)};return n.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,(function(e){return v[e]?v[e]:e.slice(1,e.length-1)}))};index_min$h.date=function(){return {validate:function(e){if(""===e.value)return {meta:{date:null},valid:!0};var s=Object.assign({},{format:e.element&&"date"===e.element.getAttribute("type")?"YYYY-MM-DD":"MM/DD/YYYY",message:""},a(e.options)),i=e.l10n?e.l10n.date.default:s.message,c={message:"".concat(i),meta:{date:null},valid:!1},o=s.format.split(" "),g=o.length>1?o[1]:null,u=o.length>2?o[2]:null,d=e.value.split(" "),f=d[0],m=d.length>1?d[1]:null,p=d.length>2?d[2]:null;if(o.length!==d.length)return c;var h=s.separator||(-1!==f.indexOf("/")?"/":-1!==f.indexOf("-")?"-":-1!==f.indexOf(".")?".":"/");if(null===h||-1===f.indexOf(h))return c;var v=f.split(h),M=o[0].split(h);if(v.length!==M.length)return c;var Y=v[M.indexOf("YYYY")],D=v[M.indexOf("MM")],x=v[M.indexOf("DD")];if(!/^\d+$/.test(Y)||!/^\d+$/.test(D)||!/^\d+$/.test(x)||Y.length>4||D.length>2||x.length>2)return c;var y=parseInt(Y,10),I=parseInt(D,10),O=parseInt(x,10);if(!n(y,I,O))return c;var H=new Date(y,I-1,O);if(g){var T=m.split(":");if(g.split(":").length!==T.length)return c;var S=T.length>0?T[0].length<=2&&/^\d+$/.test(T[0])?parseInt(T[0],10):-1:0,$=T.length>1?T[1].length<=2&&/^\d+$/.test(T[1])?parseInt(T[1],10):-1:0,b=T.length>2?T[2].length<=2&&/^\d+$/.test(T[2])?parseInt(T[2],10):-1:0;if(-1===S||-1===$||-1===b)return c;if(b<0||b>60)return c;if(S<0||S>=24||u&&S>12)return c;if($<0||$>59)return c;H.setHours(p&&"PM"===p.toUpperCase()&&S<12?S+12:S),H.setMinutes($),H.setSeconds(b);}var w="function"==typeof s.min?s.min():s.min,U=w instanceof Date?w:w?r(w,M,h):H,C="function"==typeof s.max?s.max():s.max,F=C instanceof Date?C:C?r(C,M,h):H,P=w instanceof Date?l(U,s.format):w,j=C instanceof Date?l(F,s.format):C;switch(!0){case!!P&&!j:return {message:t(e.l10n?e.l10n.date.min:i,P),meta:{date:H},valid:H.getTime()>=U.getTime()};case!!j&&!P:return {message:t(e.l10n?e.l10n.date.max:i,j),meta:{date:H},valid:H.getTime()<=F.getTime()};case!!j&&!!P:return {message:t(e.l10n?e.l10n.date.range:i,[P,j]),meta:{date:H},valid:H.getTime()<=F.getTime()&&H.getTime()>=U.getTime()};default:return {message:"".concat(i),meta:{date:H},valid:!0}}}}};
	return index_min$h;
}

var cjs$h = {};

var hasRequiredCjs$h;

function requireCjs$h () {
	if (hasRequiredCjs$h) return cjs$h;
	hasRequiredCjs$h = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format, isValidDate = core.utils.isValidDate, removeUndefined = core.utils.removeUndefined;
	/**
	 * Return a date object after parsing the date string
	 *
	 * @param {string} input The date to parse
	 * @param {string[]} inputFormat The date format
	 * The format can be:
	 * - date: Consist of DD, MM, YYYY parts which are separated by the separator option
	 * - date and time: The time can consist of h, m, s parts which are separated by :
	 * @param {string} separator The separator used to separate the date, month, and year
	 * @return {Date}
	 * @private
	 */
	var parseDate = function (input, inputFormat, separator) {
	    // Ensure that the format must consist of year, month and day patterns
	    var yearIndex = inputFormat.indexOf('YYYY');
	    var monthIndex = inputFormat.indexOf('MM');
	    var dayIndex = inputFormat.indexOf('DD');
	    if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
	        return null;
	    }
	    var sections = input.split(' ');
	    var dateSection = sections[0].split(separator);
	    if (dateSection.length < 3) {
	        return null;
	    }
	    var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));
	    var amPmSection = sections.length > 2 ? sections[2] : null;
	    if (sections.length > 1) {
	        var timeSection = sections[1].split(':');
	        var h = timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0;
	        d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
	        d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
	        d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
	    }
	    return d;
	};
	/**
	 * Format date
	 *
	 * @param {Date} input The date object to format
	 * @param {string} inputFormat The date format
	 * The format can consist of the following tokens:
	 *      d       Day of the month without leading zeros (1 through 31)
	 *      dd      Day of the month with leading zeros (01 through 31)
	 *      m       Month without leading zeros (1 through 12)
	 *      mm      Month with leading zeros (01 through 12)
	 *      yy      Last two digits of year (for example: 14)
	 *      yyyy    Full four digits of year (for example: 2014)
	 *      h       Hours without leading zeros (1 through 12)
	 *      hh      Hours with leading zeros (01 through 12)
	 *      H       Hours without leading zeros (0 through 23)
	 *      HH      Hours with leading zeros (00 through 23)
	 *      M       Minutes without leading zeros (0 through 59)
	 *      MM      Minutes with leading zeros (00 through 59)
	 *      s       Seconds without leading zeros (0 through 59)
	 *      ss      Seconds with leading zeros (00 through 59)
	 * @return {string}
	 * @private
	 */
	var formatDate = function (input, inputFormat) {
	    var dateFormat = inputFormat
	        .replace(/Y/g, 'y')
	        .replace(/M/g, 'm')
	        .replace(/D/g, 'd')
	        .replace(/:m/g, ':M')
	        .replace(/:mm/g, ':MM')
	        .replace(/:S/, ':s')
	        .replace(/:SS/, ':ss');
	    var d = input.getDate();
	    var dd = d < 10 ? "0".concat(d) : d;
	    var m = input.getMonth() + 1;
	    var mm = m < 10 ? "0".concat(m) : m;
	    var yy = "".concat(input.getFullYear()).substr(2);
	    var yyyy = input.getFullYear();
	    var h = input.getHours() % 12 || 12;
	    var hh = h < 10 ? "0".concat(h) : h;
	    var H = input.getHours();
	    var HH = H < 10 ? "0".concat(H) : H;
	    var M = input.getMinutes();
	    var MM = M < 10 ? "0".concat(M) : M;
	    var s = input.getSeconds();
	    var ss = s < 10 ? "0".concat(s) : s;
	    var replacer = {
	        H: "".concat(H),
	        HH: "".concat(HH),
	        M: "".concat(M),
	        MM: "".concat(MM),
	        d: "".concat(d),
	        dd: "".concat(dd),
	        h: "".concat(h),
	        hh: "".concat(hh),
	        m: "".concat(m),
	        mm: "".concat(mm),
	        s: "".concat(s),
	        ss: "".concat(ss),
	        yy: "".concat(yy),
	        yyyy: "".concat(yyyy),
	    };
	    return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
	        return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
	    });
	};
	var date = function () {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return {
	                    meta: {
	                        date: null,
	                    },
	                    valid: true,
	                };
	            }
	            var opts = Object.assign({}, {
	                // Force the format to `YYYY-MM-DD` as the default browser behaviour when using type="date" attribute
	                format: input.element && input.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
	                message: '',
	            }, removeUndefined(input.options));
	            var message = input.l10n ? input.l10n.date.default : opts.message;
	            var invalidResult = {
	                message: "".concat(message),
	                meta: {
	                    date: null,
	                },
	                valid: false,
	            };
	            var formats = opts.format.split(' ');
	            var timeFormat = formats.length > 1 ? formats[1] : null;
	            var amOrPm = formats.length > 2 ? formats[2] : null;
	            var sections = input.value.split(' ');
	            var dateSection = sections[0];
	            var timeSection = sections.length > 1 ? sections[1] : null;
	            var amPmSection = sections.length > 2 ? sections[2] : null;
	            if (formats.length !== sections.length) {
	                return invalidResult;
	            }
	            // Determine the separator
	            var separator = opts.separator ||
	                (dateSection.indexOf('/') !== -1
	                    ? '/'
	                    : dateSection.indexOf('-') !== -1
	                        ? '-'
	                        : dateSection.indexOf('.') !== -1
	                            ? '.'
	                            : '/');
	            if (separator === null || dateSection.indexOf(separator) === -1) {
	                return invalidResult;
	            }
	            // Determine the date
	            var dateStr = dateSection.split(separator);
	            var dateFormat = formats[0].split(separator);
	            if (dateStr.length !== dateFormat.length) {
	                return invalidResult;
	            }
	            var yearStr = dateStr[dateFormat.indexOf('YYYY')];
	            var monthStr = dateStr[dateFormat.indexOf('MM')];
	            var dayStr = dateStr[dateFormat.indexOf('DD')];
	            if (!/^\d+$/.test(yearStr) ||
	                !/^\d+$/.test(monthStr) ||
	                !/^\d+$/.test(dayStr) ||
	                yearStr.length > 4 ||
	                monthStr.length > 2 ||
	                dayStr.length > 2) {
	                return invalidResult;
	            }
	            var year = parseInt(yearStr, 10);
	            var month = parseInt(monthStr, 10);
	            var day = parseInt(dayStr, 10);
	            if (!isValidDate(year, month, day)) {
	                return invalidResult;
	            }
	            // Determine the time
	            var d = new Date(year, month - 1, day);
	            if (timeFormat) {
	                var hms = timeSection.split(':');
	                if (timeFormat.split(':').length !== hms.length) {
	                    return invalidResult;
	                }
	                var h = hms.length > 0 ? (hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1) : 0;
	                var m = hms.length > 1 ? (hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1) : 0;
	                var s = hms.length > 2 ? (hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1) : 0;
	                if (h === -1 || m === -1 || s === -1) {
	                    return invalidResult;
	                }
	                // Validate seconds
	                if (s < 0 || s > 60) {
	                    return invalidResult;
	                }
	                // Validate hours
	                if (h < 0 || h >= 24 || (amOrPm && h > 12)) {
	                    return invalidResult;
	                }
	                // Validate minutes
	                if (m < 0 || m > 59) {
	                    return invalidResult;
	                }
	                d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
	                d.setMinutes(m);
	                d.setSeconds(s);
	            }
	            // Validate day, month, and year
	            var minOption = typeof opts.min === 'function' ? opts.min() : opts.min;
	            var min = minOption instanceof Date
	                ? minOption
	                : minOption
	                    ? parseDate(minOption, dateFormat, separator)
	                    : d;
	            var maxOption = typeof opts.max === 'function' ? opts.max() : opts.max;
	            var max = maxOption instanceof Date
	                ? maxOption
	                : maxOption
	                    ? parseDate(maxOption, dateFormat, separator)
	                    : d;
	            // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
	            var minOptionStr = minOption instanceof Date ? formatDate(min, opts.format) : minOption;
	            var maxOptionStr = maxOption instanceof Date ? formatDate(max, opts.format) : maxOption;
	            switch (true) {
	                case !!minOptionStr && !maxOptionStr:
	                    return {
	                        message: format(input.l10n ? input.l10n.date.min : message, minOptionStr),
	                        meta: {
	                            date: d,
	                        },
	                        valid: d.getTime() >= min.getTime(),
	                    };
	                case !!maxOptionStr && !minOptionStr:
	                    return {
	                        message: format(input.l10n ? input.l10n.date.max : message, maxOptionStr),
	                        meta: {
	                            date: d,
	                        },
	                        valid: d.getTime() <= max.getTime(),
	                    };
	                case !!maxOptionStr && !!minOptionStr:
	                    return {
	                        message: format(input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
	                        meta: {
	                            date: d,
	                        },
	                        valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime(),
	                    };
	                default:
	                    return {
	                        message: "".concat(message),
	                        meta: {
	                            date: d,
	                        },
	                        valid: true,
	                    };
	            }
	        },
	    };
	};

	cjs$h.date = date;
	return cjs$h;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$h.exports = requireIndex_min$h();
} else {
    lib$h.exports = requireCjs$h();
}

var libExports$h = lib$h.exports;

var lib$g = {exports: {}};

var index_min$g = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-different
 * @version 2.4.0
 */

var hasRequiredIndex_min$g;

function requireIndex_min$g () {
	if (hasRequiredIndex_min$g) return index_min$g;
	hasRequiredIndex_min$g = 1;
index_min$g.different=function(){return {validate:function(t){var o="function"==typeof t.options.compare?t.options.compare.call(this):t.options.compare;return {valid:""===o||t.value!==o}}}};
	return index_min$g;
}

var cjs$g = {};

var hasRequiredCjs$g;

function requireCjs$g () {
	if (hasRequiredCjs$g) return cjs$g;
	hasRequiredCjs$g = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function different() {
	    return {
	        validate: function (input) {
	            var compareWith = 'function' === typeof input.options.compare
	                ? input.options.compare.call(this)
	                : input.options.compare;
	            return {
	                valid: compareWith === '' || input.value !== compareWith,
	            };
	        },
	    };
	}

	cjs$g.different = different;
	return cjs$g;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$g.exports = requireIndex_min$g();
} else {
    lib$g.exports = requireCjs$g();
}

var libExports$g = lib$g.exports;

var lib$f = {exports: {}};

var index_min$f = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-digits
 * @version 2.4.0
 */

var hasRequiredIndex_min$f;

function requireIndex_min$f () {
	if (hasRequiredIndex_min$f) return index_min$f;
	hasRequiredIndex_min$f = 1;
index_min$f.digits=function(){return {validate:function(t){return {valid:""===t.value||/^\d+$/.test(t.value)}}}};
	return index_min$f;
}

var cjs$f = {};

var hasRequiredCjs$f;

function requireCjs$f () {
	if (hasRequiredCjs$f) return cjs$f;
	hasRequiredCjs$f = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function digits() {
	    return {
	        /**
	         * Return true if the input value contains digits only
	         */
	        validate: function (input) {
	            return { valid: input.value === '' || /^\d+$/.test(input.value) };
	        },
	    };
	}

	cjs$f.digits = digits;
	return cjs$f;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$f.exports = requireIndex_min$f();
} else {
    lib$f.exports = requireCjs$f();
}

var libExports$f = lib$f.exports;

var lib$e = {exports: {}};

var index_min$e = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-email-address
 * @version 2.4.0
 */

var hasRequiredIndex_min$e;

function requireIndex_min$e () {
	if (hasRequiredIndex_min$e) return index_min$e;
	hasRequiredIndex_min$e = 1;
var e=libExports$B.utils.removeUndefined,a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;index_min$e.emailAddress=function(){return {validate:function(t){if(""===t.value)return {valid:!0};var i=Object.assign({},{multiple:!1,requireGlobalDomain:!1,separator:/[,;]/},e(t.options)),l=i.requireGlobalDomain?r:a;if(!0===i.multiple||"true"==="".concat(i.multiple)){for(var s=i.separator||/[,;]/,u=function(e,a){for(var r=e.split(/"/),t=r.length,i=[],l="",s=0;s<t;s++)if(s%2==0){var u=r[s].split(a),n=u.length;if(1===n)l+=u[0];else {i.push(l+u[0]);for(var o=1;o<n-1;o++)i.push(u[o]);l=u[n-1];}}else l+='"'+r[s],s<t-1&&(l+='"');return i.push(l),i}(t.value,s),n=u.length,o=0;o<n;o++)if(!l.test(u[o]))return {valid:!1};return {valid:!0}}return {valid:l.test(t.value)}}}};
	return index_min$e;
}

var cjs$e = {};

var hasRequiredCjs$e;

function requireCjs$e () {
	if (hasRequiredCjs$e) return cjs$e;
	hasRequiredCjs$e = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	// Email address regular expression
	// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	var GLOBAL_DOMAIN_OPTIONAL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var GLOBAL_DOMAIN_REQUIRED = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
	function emailAddress() {
	    var splitEmailAddresses = function (emailAddresses, separator) {
	        var quotedFragments = emailAddresses.split(/"/);
	        var quotedFragmentCount = quotedFragments.length;
	        var emailAddressArray = [];
	        var nextEmailAddress = '';
	        for (var i = 0; i < quotedFragmentCount; i++) {
	            if (i % 2 === 0) {
	                var splitEmailAddressFragments = quotedFragments[i].split(separator);
	                var splitEmailAddressFragmentCount = splitEmailAddressFragments.length;
	                if (splitEmailAddressFragmentCount === 1) {
	                    nextEmailAddress += splitEmailAddressFragments[0];
	                }
	                else {
	                    emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);
	                    for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
	                        emailAddressArray.push(splitEmailAddressFragments[j]);
	                    }
	                    nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
	                }
	            }
	            else {
	                nextEmailAddress += '"' + quotedFragments[i];
	                if (i < quotedFragmentCount - 1) {
	                    nextEmailAddress += '"';
	                }
	            }
	        }
	        emailAddressArray.push(nextEmailAddress);
	        return emailAddressArray;
	    };
	    return {
	        /**
	         * Return true if and only if the input value is a valid email address
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, {
	                multiple: false,
	                requireGlobalDomain: false,
	                separator: /[,;]/,
	            }, removeUndefined(input.options));
	            var emailRegExp = opts.requireGlobalDomain ? GLOBAL_DOMAIN_REQUIRED : GLOBAL_DOMAIN_OPTIONAL;
	            var allowMultiple = opts.multiple === true || "".concat(opts.multiple) === 'true';
	            if (allowMultiple) {
	                var separator = opts.separator || /[,;]/;
	                var addresses = splitEmailAddresses(input.value, separator);
	                var length_1 = addresses.length;
	                for (var i = 0; i < length_1; i++) {
	                    if (!emailRegExp.test(addresses[i])) {
	                        return { valid: false };
	                    }
	                }
	                return { valid: true };
	            }
	            else {
	                return { valid: emailRegExp.test(input.value) };
	            }
	        },
	    };
	}

	cjs$e.emailAddress = emailAddress;
	return cjs$e;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$e.exports = requireIndex_min$e();
} else {
    lib$e.exports = requireCjs$e();
}

var libExports$e = lib$e.exports;

var lib$d = {exports: {}};

var index_min$d = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-file
 * @version 2.4.0
 */

var hasRequiredIndex_min$d;

function requireIndex_min$d () {
	if (hasRequiredIndex_min$d) return index_min$d;
	hasRequiredIndex_min$d = 1;
var e=function(e){return -1===e.indexOf(".")?e:e.split(".").slice(0,-1).join(".")};index_min$d.file=function(){return {validate:function(t){if(""===t.value)return {valid:!0};var i,n,a=t.options.extension?t.options.extension.toLowerCase().split(",").map((function(e){return e.trim()})):[],r=t.options.type?t.options.type.toLowerCase().split(",").map((function(e){return e.trim()})):[];if(window.File&&window.FileList&&window.FileReader){var o=t.element.files,s=o.length,l=0;if(t.options.maxFiles&&s>parseInt("".concat(t.options.maxFiles),10))return {meta:{error:"INVALID_MAX_FILES"},valid:!1};if(t.options.minFiles&&s<parseInt("".concat(t.options.minFiles),10))return {meta:{error:"INVALID_MIN_FILES"},valid:!1};for(var I={},p=0;p<s;p++){if(l+=o[p].size,I={ext:i=o[p].name.substr(o[p].name.lastIndexOf(".")+1),file:o[p],size:o[p].size,type:o[p].type},t.options.minSize&&o[p].size<parseInt("".concat(t.options.minSize),10))return {meta:Object.assign({},{error:"INVALID_MIN_SIZE"},I),valid:!1};if(t.options.maxSize&&o[p].size>parseInt("".concat(t.options.maxSize),10))return {meta:Object.assign({},{error:"INVALID_MAX_SIZE"},I),valid:!1};if(a.length>0&&-1===a.indexOf(i.toLowerCase()))return {meta:Object.assign({},{error:"INVALID_EXTENSION"},I),valid:!1};if(r.length>0&&o[p].type&&-1===r.indexOf(o[p].type.toLowerCase()))return {meta:Object.assign({},{error:"INVALID_TYPE"},I),valid:!1};if(t.options.validateFileName&&!t.options.validateFileName(e(o[p].name)))return {meta:Object.assign({},{error:"INVALID_NAME"},I),valid:!1}}if(t.options.maxTotalSize&&l>parseInt("".concat(t.options.maxTotalSize),10))return {meta:Object.assign({},{error:"INVALID_MAX_TOTAL_SIZE",totalSize:l},I),valid:!1};if(t.options.minTotalSize&&l<parseInt("".concat(t.options.minTotalSize),10))return {meta:Object.assign({},{error:"INVALID_MIN_TOTAL_SIZE",totalSize:l},I),valid:!1}}else {if(i=t.value.substr(t.value.lastIndexOf(".")+1),a.length>0&&-1===a.indexOf(i.toLowerCase()))return {meta:{error:"INVALID_EXTENSION",ext:i},valid:!1};if(n=e(t.value),t.options.validateFileName&&!t.options.validateFileName(n))return {meta:{error:"INVALID_NAME",name:n},valid:!1}}return {valid:!0}}}};
	return index_min$d;
}

var cjs$d = {};

var hasRequiredCjs$d;

function requireCjs$d () {
	if (hasRequiredCjs$d) return cjs$d;
	hasRequiredCjs$d = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	// Get the file name without extension
	var getFileName = function (fileName) {
	    return fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');
	};

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function file() {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var extension;
	            var name;
	            var extensions = input.options.extension
	                ? input.options.extension
	                    .toLowerCase()
	                    .split(',')
	                    .map(function (item) { return item.trim(); })
	                : [];
	            var types = input.options.type
	                ? input.options.type
	                    .toLowerCase()
	                    .split(',')
	                    .map(function (item) { return item.trim(); })
	                : [];
	            var html5 = window['File'] && window['FileList'] && window['FileReader'];
	            if (html5) {
	                // Get FileList instance
	                var files = input.element.files;
	                var total = files.length;
	                var allSize = 0;
	                // Check the maxFiles
	                if (input.options.maxFiles && total > parseInt("".concat(input.options.maxFiles), 10)) {
	                    return {
	                        meta: { error: 'INVALID_MAX_FILES' },
	                        valid: false,
	                    };
	                }
	                // Check the minFiles
	                if (input.options.minFiles && total < parseInt("".concat(input.options.minFiles), 10)) {
	                    return {
	                        meta: { error: 'INVALID_MIN_FILES' },
	                        valid: false,
	                    };
	                }
	                var metaData = {};
	                for (var i = 0; i < total; i++) {
	                    allSize += files[i].size;
	                    extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
	                    metaData = {
	                        ext: extension,
	                        file: files[i],
	                        size: files[i].size,
	                        type: files[i].type,
	                    };
	                    // Check the minSize
	                    if (input.options.minSize && files[i].size < parseInt("".concat(input.options.minSize), 10)) {
	                        return {
	                            meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, metaData),
	                            valid: false,
	                        };
	                    }
	                    // Check the maxSize
	                    if (input.options.maxSize && files[i].size > parseInt("".concat(input.options.maxSize), 10)) {
	                        return {
	                            meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, metaData),
	                            valid: false,
	                        };
	                    }
	                    // Check file extension
	                    if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
	                        return {
	                            meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, metaData),
	                            valid: false,
	                        };
	                    }
	                    // Check file type
	                    if (types.length > 0 && files[i].type && types.indexOf(files[i].type.toLowerCase()) === -1) {
	                        return {
	                            meta: Object.assign({}, { error: 'INVALID_TYPE' }, metaData),
	                            valid: false,
	                        };
	                    }
	                    // Check file name
	                    if (input.options.validateFileName && !input.options.validateFileName(getFileName(files[i].name))) {
	                        return {
	                            meta: Object.assign({}, { error: 'INVALID_NAME' }, metaData),
	                            valid: false,
	                        };
	                    }
	                }
	                // Check the maxTotalSize
	                if (input.options.maxTotalSize && allSize > parseInt("".concat(input.options.maxTotalSize), 10)) {
	                    return {
	                        meta: Object.assign({}, {
	                            error: 'INVALID_MAX_TOTAL_SIZE',
	                            totalSize: allSize,
	                        }, metaData),
	                        valid: false,
	                    };
	                }
	                // Check the minTotalSize
	                if (input.options.minTotalSize && allSize < parseInt("".concat(input.options.minTotalSize), 10)) {
	                    return {
	                        meta: Object.assign({}, {
	                            error: 'INVALID_MIN_TOTAL_SIZE',
	                            totalSize: allSize,
	                        }, metaData),
	                        valid: false,
	                    };
	                }
	            }
	            else {
	                // Check file extension
	                extension = input.value.substr(input.value.lastIndexOf('.') + 1);
	                if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
	                    return {
	                        meta: {
	                            error: 'INVALID_EXTENSION',
	                            ext: extension,
	                        },
	                        valid: false,
	                    };
	                }
	                // Check file name
	                name = getFileName(input.value);
	                if (input.options.validateFileName && !input.options.validateFileName(name)) {
	                    return {
	                        meta: {
	                            error: 'INVALID_NAME',
	                            name: name,
	                        },
	                        valid: false,
	                    };
	                }
	            }
	            return { valid: true };
	        },
	    };
	}

	cjs$d.file = file;
	return cjs$d;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$d.exports = requireIndex_min$d();
} else {
    lib$d.exports = requireCjs$d();
}

var libExports$d = lib$d.exports;

var lib$c = {exports: {}};

var index_min$c = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-greater-than
 * @version 2.4.0
 */

var hasRequiredIndex_min$c;

function requireIndex_min$c () {
	if (hasRequiredIndex_min$c) return index_min$c;
	hasRequiredIndex_min$c = 1;
var e=libExports$B,a=e.utils.format,s=e.utils.removeUndefined;index_min$c.greaterThan=function(){return {validate:function(e){if(""===e.value)return {valid:!0};var n=Object.assign({},{inclusive:!0,message:""},s(e.options)),r=parseFloat("".concat(n.min).replace(",","."));return n.inclusive?{message:a(e.l10n?n.message||e.l10n.greaterThan.default:n.message,"".concat(r)),valid:parseFloat(e.value)>=r}:{message:a(e.l10n?n.message||e.l10n.greaterThan.notInclusive:n.message,"".concat(r)),valid:parseFloat(e.value)>r}}}};
	return index_min$c;
}

var cjs$c = {};

var hasRequiredCjs$c;

function requireCjs$c () {
	if (hasRequiredCjs$c) return cjs$c;
	hasRequiredCjs$c = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
	function greaterThan() {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
	            var minValue = parseFloat("".concat(opts.min).replace(',', '.'));
	            return opts.inclusive
	                ? {
	                    message: format(input.l10n ? opts.message || input.l10n.greaterThan.default : opts.message, "".concat(minValue)),
	                    valid: parseFloat(input.value) >= minValue,
	                }
	                : {
	                    message: format(input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "".concat(minValue)),
	                    valid: parseFloat(input.value) > minValue,
	                };
	        },
	    };
	}

	cjs$c.greaterThan = greaterThan;
	return cjs$c;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$c.exports = requireIndex_min$c();
} else {
    lib$c.exports = requireCjs$c();
}

var libExports$c = lib$c.exports;

var lib$b = {exports: {}};

var index_min$b = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-identical
 * @version 2.4.0
 */

var hasRequiredIndex_min$b;

function requireIndex_min$b () {
	if (hasRequiredIndex_min$b) return index_min$b;
	hasRequiredIndex_min$b = 1;
index_min$b.identical=function(){return {validate:function(t){var o="function"==typeof t.options.compare?t.options.compare.call(this):t.options.compare;return {valid:""===o||t.value===o}}}};
	return index_min$b;
}

var cjs$b = {};

var hasRequiredCjs$b;

function requireCjs$b () {
	if (hasRequiredCjs$b) return cjs$b;
	hasRequiredCjs$b = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function identical() {
	    return {
	        validate: function (input) {
	            var compareWith = 'function' === typeof input.options.compare
	                ? input.options.compare.call(this)
	                : input.options.compare;
	            return {
	                valid: compareWith === '' || input.value === compareWith,
	            };
	        },
	    };
	}

	cjs$b.identical = identical;
	return cjs$b;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$b.exports = requireIndex_min$b();
} else {
    lib$b.exports = requireCjs$b();
}

var libExports$b = lib$b.exports;

var lib$a = {exports: {}};

var index_min$a = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-integer
 * @version 2.4.0
 */

var hasRequiredIndex_min$a;

function requireIndex_min$a () {
	if (hasRequiredIndex_min$a) return index_min$a;
	hasRequiredIndex_min$a = 1;
var a=libExports$B.utils.removeUndefined;index_min$a.integer=function(){return {validate:function(e){if(""===e.value)return {valid:!0};var r=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},a(e.options)),t="."===r.decimalSeparator?"\\.":r.decimalSeparator,i="."===r.thousandsSeparator?"\\.":r.thousandsSeparator,o=new RegExp("^-?[0-9]{1,3}(".concat(i,"[0-9]{3})*(").concat(t,"[0-9]+)?$")),n=new RegExp(i,"g"),s="".concat(e.value);if(!o.test(s))return {valid:!1};i&&(s=s.replace(n,"")),t&&(s=s.replace(t,"."));var c=parseFloat(s);return {valid:!isNaN(c)&&isFinite(c)&&Math.floor(c)===c}}}};
	return index_min$a;
}

var cjs$a = {};

var hasRequiredCjs$a;

function requireCjs$a () {
	if (hasRequiredCjs$a) return cjs$a;
	hasRequiredCjs$a = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	function integer() {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, {
	                decimalSeparator: '.',
	                thousandsSeparator: '',
	            }, removeUndefined(input.options));
	            var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
	            var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
	            var testRegexp = new RegExp("^-?[0-9]{1,3}(".concat(thousandsSeparator, "[0-9]{3})*(").concat(decimalSeparator, "[0-9]+)?$"));
	            var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
	            var v = "".concat(input.value);
	            if (!testRegexp.test(v)) {
	                return { valid: false };
	            }
	            // Replace thousands separator with blank
	            if (thousandsSeparator) {
	                v = v.replace(thousandsReplacer, '');
	            }
	            // Replace decimal separator with a dot
	            if (decimalSeparator) {
	                v = v.replace(decimalSeparator, '.');
	            }
	            var n = parseFloat(v);
	            return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
	        },
	    };
	}

	cjs$a.integer = integer;
	return cjs$a;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$a.exports = requireIndex_min$a();
} else {
    lib$a.exports = requireCjs$a();
}

var libExports$a = lib$a.exports;

var lib$9 = {exports: {}};

var index_min$9 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-ip
 * @version 2.4.0
 */

var hasRequiredIndex_min$9;

function requireIndex_min$9 () {
	if (hasRequiredIndex_min$9) return index_min$9;
	hasRequiredIndex_min$9 = 1;
var d=libExports$B.utils.removeUndefined;index_min$9.ip=function(){return {validate:function(a){if(""===a.value)return {valid:!0};var e=Object.assign({},{ipv4:!0,ipv6:!0},d(a.options)),s=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,i=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;switch(!0){case e.ipv4&&!e.ipv6:return {message:a.l10n?e.message||a.l10n.ip.ipv4:e.message,valid:s.test(a.value)};case!e.ipv4&&e.ipv6:return {message:a.l10n?e.message||a.l10n.ip.ipv6:e.message,valid:i.test(a.value)};case e.ipv4&&e.ipv6:default:return {message:a.l10n?e.message||a.l10n.ip.default:e.message,valid:s.test(a.value)||i.test(a.value)}}}}};
	return index_min$9;
}

var cjs$9 = {};

var hasRequiredCjs$9;

function requireCjs$9 () {
	if (hasRequiredCjs$9) return cjs$9;
	hasRequiredCjs$9 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	function ip() {
	    return {
	        /**
	         * Return true if the input value is a IP address.
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, {
	                ipv4: true,
	                ipv6: true,
	            }, removeUndefined(input.options));
	            var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
	            var ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;
	            switch (true) {
	                case opts.ipv4 && !opts.ipv6:
	                    return {
	                        message: input.l10n ? opts.message || input.l10n.ip.ipv4 : opts.message,
	                        valid: ipv4Regex.test(input.value),
	                    };
	                case !opts.ipv4 && opts.ipv6:
	                    return {
	                        message: input.l10n ? opts.message || input.l10n.ip.ipv6 : opts.message,
	                        valid: ipv6Regex.test(input.value),
	                    };
	                case opts.ipv4 && opts.ipv6:
	                default:
	                    return {
	                        message: input.l10n ? opts.message || input.l10n.ip.default : opts.message,
	                        valid: ipv4Regex.test(input.value) || ipv6Regex.test(input.value),
	                    };
	            }
	        },
	    };
	}

	cjs$9.ip = ip;
	return cjs$9;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$9.exports = requireIndex_min$9();
} else {
    lib$9.exports = requireCjs$9();
}

var libExports$9 = lib$9.exports;

var lib$8 = {exports: {}};

var index_min$8 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-less-than
 * @version 2.4.0
 */

var hasRequiredIndex_min$8;

function requireIndex_min$8 () {
	if (hasRequiredIndex_min$8) return index_min$8;
	hasRequiredIndex_min$8 = 1;
var e=libExports$B,a=e.utils.format,s=e.utils.removeUndefined;index_min$8.lessThan=function(){return {validate:function(e){if(""===e.value)return {valid:!0};var n=Object.assign({},{inclusive:!0,message:""},s(e.options)),l=parseFloat("".concat(n.max).replace(",","."));return n.inclusive?{message:a(e.l10n?n.message||e.l10n.lessThan.default:n.message,"".concat(l)),valid:parseFloat(e.value)<=l}:{message:a(e.l10n?n.message||e.l10n.lessThan.notInclusive:n.message,"".concat(l)),valid:parseFloat(e.value)<l}}}};
	return index_min$8;
}

var cjs$8 = {};

var hasRequiredCjs$8;

function requireCjs$8 () {
	if (hasRequiredCjs$8) return cjs$8;
	hasRequiredCjs$8 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
	function lessThan() {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, { inclusive: true, message: '' }, removeUndefined(input.options));
	            var maxValue = parseFloat("".concat(opts.max).replace(',', '.'));
	            return opts.inclusive
	                ? {
	                    message: format(input.l10n ? opts.message || input.l10n.lessThan.default : opts.message, "".concat(maxValue)),
	                    valid: parseFloat(input.value) <= maxValue,
	                }
	                : {
	                    message: format(input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "".concat(maxValue)),
	                    valid: parseFloat(input.value) < maxValue,
	                };
	        },
	    };
	}

	cjs$8.lessThan = lessThan;
	return cjs$8;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$8.exports = requireIndex_min$8();
} else {
    lib$8.exports = requireCjs$8();
}

var libExports$8 = lib$8.exports;

var lib$7 = {exports: {}};

var index_min$7 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-not-empty
 * @version 2.4.0
 */

var hasRequiredIndex_min$7;

function requireIndex_min$7 () {
	if (hasRequiredIndex_min$7) return index_min$7;
	hasRequiredIndex_min$7 = 1;
index_min$7.notEmpty=function(){return {validate:function(t){var i=!!t.options&&!!t.options.trim,n=t.value;return {valid:!i&&""!==n||i&&""!==n&&""!==n.trim()}}}};
	return index_min$7;
}

var cjs$7 = {};

var hasRequiredCjs$7;

function requireCjs$7 () {
	if (hasRequiredCjs$7) return cjs$7;
	hasRequiredCjs$7 = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function notEmpty() {
	    return {
	        validate: function (input) {
	            var trim = !!input.options && !!input.options.trim;
	            var value = input.value;
	            return {
	                valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
	            };
	        },
	    };
	}

	cjs$7.notEmpty = notEmpty;
	return cjs$7;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$7.exports = requireIndex_min$7();
} else {
    lib$7.exports = requireCjs$7();
}

var libExports$7 = lib$7.exports;

var lib$6 = {exports: {}};

var index_min$6 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-numeric
 * @version 2.4.0
 */

var hasRequiredIndex_min$6;

function requireIndex_min$6 () {
	if (hasRequiredIndex_min$6) return index_min$6;
	hasRequiredIndex_min$6 = 1;
var a=libExports$B.utils.removeUndefined;index_min$6.numeric=function(){return {validate:function(r){if(""===r.value)return {valid:!0};var e=Object.assign({},{decimalSeparator:".",thousandsSeparator:""},a(r.options)),t="".concat(r.value);t.substr(0,1)===e.decimalSeparator?t="0".concat(e.decimalSeparator).concat(t.substr(1)):t.substr(0,2)==="-".concat(e.decimalSeparator)&&(t="-0".concat(e.decimalSeparator).concat(t.substr(2)));var c="."===e.decimalSeparator?"\\.":e.decimalSeparator,o="."===e.thousandsSeparator?"\\.":e.thousandsSeparator,i=new RegExp("^-?[0-9]{1,3}(".concat(o,"[0-9]{3})*(").concat(c,"[0-9]+)?$")),n=new RegExp(o,"g");if(!i.test(t))return {valid:!1};o&&(t=t.replace(n,"")),c&&(t=t.replace(c,"."));var s=parseFloat(t);return {valid:!isNaN(s)&&isFinite(s)}}}};
	return index_min$6;
}

var cjs$6 = {};

var hasRequiredCjs$6;

function requireCjs$6 () {
	if (hasRequiredCjs$6) return cjs$6;
	hasRequiredCjs$6 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	function numeric() {
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, {
	                decimalSeparator: '.',
	                thousandsSeparator: '',
	            }, removeUndefined(input.options));
	            var v = "".concat(input.value);
	            // Support preceding zero numbers such as .5, -.5
	            if (v.substr(0, 1) === opts.decimalSeparator) {
	                v = "0".concat(opts.decimalSeparator).concat(v.substr(1));
	            }
	            else if (v.substr(0, 2) === "-".concat(opts.decimalSeparator)) {
	                v = "-0".concat(opts.decimalSeparator).concat(v.substr(2));
	            }
	            var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
	            var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
	            var testRegexp = new RegExp("^-?[0-9]{1,3}(".concat(thousandsSeparator, "[0-9]{3})*(").concat(decimalSeparator, "[0-9]+)?$"));
	            var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
	            if (!testRegexp.test(v)) {
	                return { valid: false };
	            }
	            // Replace thousands separator with blank
	            if (thousandsSeparator) {
	                v = v.replace(thousandsReplacer, '');
	            }
	            // Replace decimal separator with a dot
	            if (decimalSeparator) {
	                v = v.replace(decimalSeparator, '.');
	            }
	            var n = parseFloat(v);
	            return { valid: !isNaN(n) && isFinite(n) };
	        },
	    };
	}

	cjs$6.numeric = numeric;
	return cjs$6;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$6.exports = requireIndex_min$6();
} else {
    lib$6.exports = requireCjs$6();
}

var libExports$6 = lib$6.exports;

var lib$5 = {exports: {}};

var index_min$5 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-promise
 * @version 2.4.0
 */

var hasRequiredIndex_min$5;

function requireIndex_min$5 () {
	if (hasRequiredIndex_min$5) return index_min$5;
	hasRequiredIndex_min$5 = 1;
var r=libExports$B.utils.call;index_min$5.promise=function(){return {validate:function(i){return r(i.options.promise,[i])}}};
	return index_min$5;
}

var cjs$5 = {};

var hasRequiredCjs$5;

function requireCjs$5 () {
	if (hasRequiredCjs$5) return cjs$5;
	hasRequiredCjs$5 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var call = core.utils.call;
	function promise() {
	    return {
	        /**
	         * The following example demonstrates how to use a promise validator to requires both width and height
	         * of an image to be less than 300 px
	         *  ```
	         *  const p = new Promise((resolve, reject) => {
	         *      const img = new Image()
	         *      img.addEventListener('load', function() {
	         *          const w = this.width
	         *          const h = this.height
	         *          resolve({
	         *              valid: w <= 300 && h <= 300
	         *              meta: {
	         *                  source: img.src // So, you can reuse it later if you want
	         *              }
	         *          })
	         *      })
	         *      img.addEventListener('error', function() {
	         *          reject({
	         *              valid: false,
	         *              message: Please choose an image
	         *          })
	         *      })
	         *  })
	         *  ```
	         *
	         * @param input
	         * @return {Promise<ValidateResult>}
	         */
	        validate: function (input) {
	            return call(input.options.promise, [input]);
	        },
	    };
	}

	cjs$5.promise = promise;
	return cjs$5;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$5.exports = requireIndex_min$5();
} else {
    lib$5.exports = requireCjs$5();
}

var libExports$5 = lib$5.exports;

var lib$4 = {exports: {}};

var index_min$4 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-regexp
 * @version 2.4.0
 */

var hasRequiredIndex_min$4;

function requireIndex_min$4 () {
	if (hasRequiredIndex_min$4) return index_min$4;
	hasRequiredIndex_min$4 = 1;
index_min$4.regexp=function(){return {validate:function(e){if(""===e.value)return {valid:!0};var t=e.options.regexp;if(t instanceof RegExp)return {valid:t.test(e.value)};var n=t.toString();return {valid:(e.options.flags?new RegExp(n,e.options.flags):new RegExp(n)).test(e.value)}}}};
	return index_min$4;
}

var cjs$4 = {};

var hasRequiredCjs$4;

function requireCjs$4 () {
	if (hasRequiredCjs$4) return cjs$4;
	hasRequiredCjs$4 = 1;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	function regexp() {
	    return {
	        /**
	         * Check if the element value matches given regular expression
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var reg = input.options.regexp;
	            if (reg instanceof RegExp) {
	                return { valid: reg.test(input.value) };
	            }
	            else {
	                var pattern = reg.toString();
	                var exp = input.options.flags ? new RegExp(pattern, input.options.flags) : new RegExp(pattern);
	                return { valid: exp.test(input.value) };
	            }
	        },
	    };
	}

	cjs$4.regexp = regexp;
	return cjs$4;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$4.exports = requireIndex_min$4();
} else {
    lib$4.exports = requireCjs$4();
}

var libExports$4 = lib$4.exports;

var lib$3 = {exports: {}};

var index_min$3 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-remote
 * @version 2.4.0
 */

var hasRequiredIndex_min$3;

function requireIndex_min$3 () {
	if (hasRequiredIndex_min$3) return index_min$3;
	hasRequiredIndex_min$3 = 1;
var e=libExports$B,a=e.utils.fetch,r=e.utils.removeUndefined;index_min$3.remote=function(){var e={crossDomain:!1,data:{},headers:{},method:"GET",validKey:"valid"};return {validate:function(t){if(""===t.value)return Promise.resolve({valid:!0});var i=Object.assign({},e,r(t.options)),o=i.data;"function"==typeof i.data&&(o=i.data.call(this,t)),"string"==typeof o&&(o=JSON.parse(o)),o[i.name||t.field]=t.value;var s="function"==typeof i.url?i.url.call(this,t):i.url;return a(s,{crossDomain:i.crossDomain,headers:i.headers,method:i.method,params:o}).then((function(e){return Promise.resolve({message:e.message,meta:e,valid:"true"==="".concat(e[i.validKey])})})).catch((function(e){return Promise.reject({valid:!1})}))}}};
	return index_min$3;
}

var cjs$3 = {};

var hasRequiredCjs$3;

function requireCjs$3 () {
	if (hasRequiredCjs$3) return cjs$3;
	hasRequiredCjs$3 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var fetch = core.utils.fetch, removeUndefined = core.utils.removeUndefined;
	function remote() {
	    var DEFAULT_OPTIONS = {
	        crossDomain: false,
	        data: {},
	        headers: {},
	        method: 'GET',
	        validKey: 'valid',
	    };
	    return {
	        validate: function (input) {
	            if (input.value === '') {
	                return Promise.resolve({
	                    valid: true,
	                });
	            }
	            var opts = Object.assign({}, DEFAULT_OPTIONS, removeUndefined(input.options));
	            var data = opts.data;
	            // Support dynamic data
	            if ('function' === typeof opts.data) {
	                data = opts.data.call(this, input);
	            }
	            // Parse string data from HTML5 attribute
	            if ('string' === typeof data) {
	                data = JSON.parse(data);
	            }
	            data[opts.name || input.field] = input.value;
	            // Support dynamic url
	            var url = 'function' === typeof opts.url
	                ? opts.url.call(this, input)
	                : opts.url;
	            return fetch(url, {
	                crossDomain: opts.crossDomain,
	                headers: opts.headers,
	                method: opts.method,
	                params: data,
	            })
	                .then(function (response) {
	                return Promise.resolve({
	                    message: response['message'],
	                    meta: response,
	                    valid: "".concat(response[opts.validKey]) === 'true',
	                });
	            })
	                .catch(function (_reason) {
	                return Promise.reject({
	                    valid: false,
	                });
	            });
	        },
	    };
	}

	cjs$3.remote = remote;
	return cjs$3;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$3.exports = requireIndex_min$3();
} else {
    lib$3.exports = requireCjs$3();
}

var libExports$3 = lib$3.exports;

var lib$2 = {exports: {}};

var index_min$2 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-case
 * @version 2.4.0
 */

var hasRequiredIndex_min$2;

function requireIndex_min$2 () {
	if (hasRequiredIndex_min$2) return index_min$2;
	hasRequiredIndex_min$2 = 1;
var e=libExports$B.utils.removeUndefined;index_min$2.stringCase=function(){return {validate:function(a){if(""===a.value)return {valid:!0};var r=Object.assign({},{case:"lower"},e(a.options)),s=(r.case||"lower").toLowerCase();return {message:r.message||(a.l10n?"upper"===s?a.l10n.stringCase.upper:a.l10n.stringCase.default:r.message),valid:"upper"===s?a.value===a.value.toUpperCase():a.value===a.value.toLowerCase()}}}};
	return index_min$2;
}

var cjs$2 = {};

var hasRequiredCjs$2;

function requireCjs$2 () {
	if (hasRequiredCjs$2) return cjs$2;
	hasRequiredCjs$2 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	function stringCase() {
	    return {
	        /**
	         * Check if a string is a lower or upper case one
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, { case: 'lower' }, removeUndefined(input.options));
	            var caseOpt = (opts.case || 'lower').toLowerCase();
	            return {
	                message: opts.message ||
	                    (input.l10n
	                        ? 'upper' === caseOpt
	                            ? input.l10n.stringCase.upper
	                            : input.l10n.stringCase.default
	                        : opts.message),
	                valid: 'upper' === caseOpt
	                    ? input.value === input.value.toUpperCase()
	                    : input.value === input.value.toLowerCase(),
	            };
	        },
	    };
	}

	cjs$2.stringCase = stringCase;
	return cjs$2;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$2.exports = requireIndex_min$2();
} else {
    lib$2.exports = requireCjs$2();
}

var libExports$2 = lib$2.exports;

var lib$1 = {exports: {}};

var index_min$1 = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-string-length
 * @version 2.4.0
 */

var hasRequiredIndex_min$1;

function requireIndex_min$1 () {
	if (hasRequiredIndex_min$1) return index_min$1;
	hasRequiredIndex_min$1 = 1;
var e=libExports$B,t=e.utils.format,n=e.utils.removeUndefined;index_min$1.stringLength=function(){return {validate:function(e){var s=Object.assign({},{message:"",trim:!1,utf8Bytes:!1},n(e.options)),a=!0===s.trim||"true"==="".concat(s.trim)?e.value.trim():e.value;if(""===a)return {valid:!0};var r=s.min?"".concat(s.min):"",i=s.max?"".concat(s.max):"",g=s.utf8Bytes?function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var s=e.charCodeAt(n);s>127&&s<=2047?t++:s>2047&&s<=65535&&(t+=2),s>=56320&&s<=57343&&n--;}return t}(a):a.length,m=!0,c=e.l10n?s.message||e.l10n.stringLength.default:s.message;switch((r&&g<parseInt(r,10)||i&&g>parseInt(i,10))&&(m=!1),!0){case!!r&&!!i:c=t(e.l10n?s.message||e.l10n.stringLength.between:s.message,[r,i]);break;case!!r:c=t(e.l10n?s.message||e.l10n.stringLength.more:s.message,"".concat(parseInt(r,10)));break;case!!i:c=t(e.l10n?s.message||e.l10n.stringLength.less:s.message,"".concat(parseInt(i,10)));}return {message:c,valid:m}}}};
	return index_min$1;
}

var cjs$1 = {};

var hasRequiredCjs$1;

function requireCjs$1 () {
	if (hasRequiredCjs$1) return cjs$1;
	hasRequiredCjs$1 = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
	// Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
	var utf8Length = function (str) {
	    var s = str.length;
	    for (var i = str.length - 1; i >= 0; i--) {
	        var code = str.charCodeAt(i);
	        if (code > 0x7f && code <= 0x7ff) {
	            s++;
	        }
	        else if (code > 0x7ff && code <= 0xffff) {
	            s += 2;
	        }
	        if (code >= 0xdc00 && code <= 0xdfff) {
	            i--;
	        }
	    }
	    return s;
	};
	function stringLength() {
	    return {
	        /**
	         * Check if the length of element value is less or more than given number
	         */
	        validate: function (input) {
	            var opts = Object.assign({}, {
	                message: '',
	                trim: false,
	                utf8Bytes: false,
	            }, removeUndefined(input.options));
	            var v = opts.trim === true || "".concat(opts.trim) === 'true' ? input.value.trim() : input.value;
	            if (v === '') {
	                return { valid: true };
	            }
	            // TODO: `min`, `max` can be dynamic options
	            var min = opts.min ? "".concat(opts.min) : '';
	            var max = opts.max ? "".concat(opts.max) : '';
	            var length = opts.utf8Bytes ? utf8Length(v) : v.length;
	            var isValid = true;
	            var msg = input.l10n ? opts.message || input.l10n.stringLength.default : opts.message;
	            if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
	                isValid = false;
	            }
	            switch (true) {
	                case !!min && !!max:
	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [
	                        min,
	                        max,
	                    ]);
	                    break;
	                case !!min:
	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "".concat(parseInt(min, 10)));
	                    break;
	                case !!max:
	                    msg = format(input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "".concat(parseInt(max, 10)));
	                    break;
	            }
	            return {
	                message: msg,
	                valid: isValid,
	            };
	        },
	    };
	}

	cjs$1.stringLength = stringLength;
	return cjs$1;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib$1.exports = requireIndex_min$1();
} else {
    lib$1.exports = requireCjs$1();
}

var libExports$1 = lib$1.exports;

var lib = {exports: {}};

var index_min = {};

/** 
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 *
 * @license https://formvalidation.io/license
 * @package @form-validation/validator-uri
 * @version 2.4.0
 */

var hasRequiredIndex_min;

function requireIndex_min () {
	if (hasRequiredIndex_min) return index_min;
	hasRequiredIndex_min = 1;
var o=libExports$B.utils.removeUndefined;index_min.uri=function(){var a={allowEmptyProtocol:!1,allowLocal:!1,protocol:"http, https, ftp"};return {validate:function(t){if(""===t.value)return {valid:!0};var l=Object.assign({},a,o(t.options)),f=!0===l.allowLocal||"true"==="".concat(l.allowLocal),r=!0===l.allowEmptyProtocol||"true"==="".concat(l.allowEmptyProtocol),e=l.protocol.split(",").join("|").replace(/\s/g,"");return {valid:new RegExp("^(?:(?:"+e+")://)"+(r?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(f?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(f?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(t.value)}}}};
	return index_min;
}

var cjs = {};

var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;

	var core = libExports$B;

	/**
	 * FormValidation (https://formvalidation.io)
	 * The best validation library for JavaScript
	 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
	 */
	var removeUndefined = core.utils.removeUndefined;
	function uri() {
	    var DEFAULT_OPTIONS = {
	        allowEmptyProtocol: false,
	        allowLocal: false,
	        protocol: 'http, https, ftp',
	    };
	    return {
	        /**
	         * Return true if the input value is a valid URL
	         */
	        validate: function (input) {
	            if (input.value === '') {
	                return { valid: true };
	            }
	            var opts = Object.assign({}, DEFAULT_OPTIONS, removeUndefined(input.options));
	            // Credit to https://gist.github.com/dperini/729294
	            //
	            // Regular Expression for URL validation
	            //
	            // Author: Diego Perini
	            // Updated: 2010/12/05
	            //
	            // the regular expression composed & commented
	            // could be easily tweaked for RFC compliance,
	            // it was expressly modified to fit & satisfy
	            // these test for an URL shortener:
	            //
	            //   http://mathiasbynens.be/demo/url-regex
	            //
	            // Notes on possible differences from a standard/generic validation:
	            //
	            // - utf-8 char class take in consideration the full Unicode range
	            // - TLDs are mandatory unless `allowLocal` is true
	            // - protocols have been restricted to ftp, http and https only as requested
	            //
	            // Changes:
	            //
	            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
	            //   first and last IP address of each class is considered invalid
	            //   (since they are broadcast/network addresses)
	            //
	            // - Added exclusion of private, reserved and/or local networks ranges
	            //   unless `allowLocal` is true
	            //
	            // - Added possibility of choosing a custom protocol
	            //
	            // - Add option to validate without protocol
	            //
	            var allowLocal = opts.allowLocal === true || "".concat(opts.allowLocal) === 'true';
	            var allowEmptyProtocol = opts.allowEmptyProtocol === true || "".concat(opts.allowEmptyProtocol) === 'true';
	            var protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
	            var urlExp = new RegExp('^' +
	                // protocol identifier
	                '(?:(?:' +
	                protocol +
	                ')://)' +
	                // allow empty protocol
	                (allowEmptyProtocol ? '?' : '') +
	                // user:pass authentication
	                '(?:\\S+(?::\\S*)?@)?' +
	                '(?:' +
	                // IP address exclusion
	                // private & local networks
	                (allowLocal
	                    ? ''
	                    : '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
	                        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
	                        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
	                // IP address dotted notation octets
	                // excludes loopback network 0.0.0.0
	                // excludes reserved space >= 224.0.0.0
	                // excludes network & broadcast addresses
	                // (first & last IP address of each class)
	                '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
	                '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
	                '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
	                '|' +
	                // host name
	                '(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)' +
	                // domain name
	                '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*' +
	                // TLD identifier
	                '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
	                // Allow intranet sites (no TLD) if `allowLocal` is true
	                (allowLocal ? '?' : '') +
	                ')' +
	                // port number
	                '(?::\\d{2,5})?' +
	                // resource path
	                '(?:/[^\\s]*)?$', 'i');
	            return { valid: urlExp.test(input.value) };
	        },
	    };
	}

	cjs.uri = uri;
	return cjs;
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */

if (process.env.NODE_ENV === 'production') {
    lib.exports = requireIndex_min();
} else {
    lib.exports = requireCjs();
}

var libExports = lib.exports;

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var plugins = {
    Alias: libExports$A.Alias,
    Aria: libExports$z.Aria,
    Declarative: libExports$y.Declarative,
    DefaultSubmit: libExports$x.DefaultSubmit,
    Dependency: libExports$w.Dependency,
    Excluded: libExports$v.Excluded,
    FieldStatus: libExports$u.FieldStatus,
    Framework: libExports$s.Framework,
    Icon: libExports$r.Icon,
    Message: libExports$t.Message,
    Sequence: libExports$q.Sequence,
    SubmitButton: libExports$p.SubmitButton,
    Tooltip: libExports$o.Tooltip,
    Trigger: libExports$n.Trigger,
};
var validators = {
    between: libExports$m.between,
    blank: libExports$l.blank,
    callback: libExports$k.callback,
    choice: libExports$j.choice,
    creditCard: libExports$i.creditCard,
    date: libExports$h.date,
    different: libExports$g.different,
    digits: libExports$f.digits,
    emailAddress: libExports$e.emailAddress,
    file: libExports$d.file,
    greaterThan: libExports$c.greaterThan,
    identical: libExports$b.identical,
    integer: libExports$a.integer,
    ip: libExports$9.ip,
    lessThan: libExports$8.lessThan,
    notEmpty: libExports$7.notEmpty,
    numeric: libExports$6.numeric,
    promise: libExports$5.promise,
    regexp: libExports$4.regexp,
    remote: libExports$3.remote,
    stringCase: libExports$2.stringCase,
    stringLength: libExports$1.stringLength,
    uri: libExports.uri,
};
// Register popular validators
var formValidationWithPopularValidators = function (form, options) {
    var instance = libExports$B.formValidation(form, options);
    Object.keys(validators).forEach(function (name) { return instance.registerValidator(name, validators[name]); });
    return instance;
};

exports.Plugin = libExports$B.Plugin;
exports.algorithms = libExports$B.algorithms;
exports.formValidation = formValidationWithPopularValidators;
exports.plugins = plugins;
exports.utils = libExports$B.utils;
exports.validators = validators;
