parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"9tp6":[function(require,module,exports) {
!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.hasOwnProperty("polyfillWrapFlushCallback"))return;const t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}();
},{}],"Xyu5":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.getCode=function(){var e=location.hash.match(/(?<=\bcode=\b)[^&]*/)[0];return e?(sessionStorage.setItem("code",e),e):sessionStorage.getItem("code")},exports.getFormValue=function(e){for(var t={},o=0,r=e.elements;o<r.length;o++){var s=r[o];s.name&&(t[s.name]=s.value)}return t};
},{}],"+fUd":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,u)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},n=this;exports.__esModule=!0,require("@webcomponents/custom-elements/src/native-shim");var r=require("./utils"),a="https://productwatch.azurewebsites.net/api/watchers";function i(e){var t=document.getElementById("watcherlist");e.length?t.innerHTML=e.map(o).join(""):t.innerHTML="<li>No data found</li>"}function o(e){return"<li>\n  Created at: "+new Date(e.createdAt)+"<br/>\n  Trigger price: "+e.triggerPrice+'<br/>\n  Url: <a href="'+e.url+'" target="_blank">'+e.url+'</a><br/>\n  <button name="delete watcher" value="'+e._id+'" type="button">delete</button>\n</li>'}function u(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=a+"?code="+r.getCode(),[4,fetch(e)];case 1:return[4,t.sent().json()];case 2:return i(t.sent()),[2]}})})}u(),document.forms.namedItem("addWatcher").addEventListener("submit",function(e){e.preventDefault();var t=r.getFormValue(e.target);t.createdAt=Date.now(),c(t)}),document.getElementById("watcherlist").addEventListener("delete",function(e){var t=e.srcElement;l(t.id)});var c=function(i){return e(n,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=a+"?code="+r.getCode(),[4,fetch(e,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}})];case 1:return t.sent(),u(),[2]}})})},l=function(i){return e(n,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=a+"/"+i+"?code="+r.getCode(),[4,fetch(e,{method:"DELETE"})];case 1:return t.sent(),u(),[2]}})})};document.addEventListener("click",function(e){s(e.target)&&"delete watcher"===e.target.name&&l(e.target.value)});var s=function(e){return e instanceof HTMLButtonElement};
},{"@webcomponents/custom-elements/src/native-shim":"9tp6","./utils":"Xyu5"}]},{},["+fUd"], null)
//# sourceMappingURL=src.9dac276e.js.map