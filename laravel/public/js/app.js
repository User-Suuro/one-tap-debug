/*! For license information please see app.js.LICENSE.txt */
(()=>{var t={670:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var f={};function h(){}function p(){}function m(){}var v={};d(v,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(O([])));b&&b!==n&&o.call(b,i)&&(v=b);var g=m.prototype=h.prototype=Object.create(v);function $(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){function n(a,i,s,c){var d=u(e[a],e,i);if("throw"!==d.type){var l=d.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(d.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=m,d(g,"constructor",m),d(m,"constructor",p),p.displayName=d(m,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,d(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},r.awrap=function(t){return{__await:t}},$(w.prototype),d(w.prototype,s,(function(){return this})),r.AsyncIterator=w,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},$(g),d(g,c,"Generator"),d(g,i,(function(){return this})),d(g,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},r}function r(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)}))}}var o,a=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:"dashboard.index"===o?s():"users.index"===o?c():"responders.index"===o?d():"alerts.index"===o&&l();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$("input[name='app_url']").val(),o=$("input[name='route_name']").val(),$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){},c=function(){$(".data-table").DataTable({order:[]}),$(".data-table").removeClass("invisible")},d=function(){$(".data-table").DataTable({order:[]}),$(".data-table").removeClass("invisible")},l=function(){$(".data-table").DataTable({order:[]}),$(".data-table").removeClass("invisible")},u=function(t){var e="Something went wrong.";if(t.responseJSON)for(var r in e=t.responseJSON.message,t.responseJSON.errors)Object.prototype.hasOwnProperty.call(t.responseJSON.errors,r)&&(e+=" "+t.responseJSON.errors[r]);$("#modal-error .message").html(e),$("#modal-error").modal("show")};$(document).ready((function(){a()})),$(document).on("click",".reload-page",(function(){$(this).prop("disabled",!0);var t=$(this).attr("data-link");t?($(this).text("Redirecting"),window.location.href=t):($(this).text("Reloading Page"),window.location.reload())}));$(document).on("submit","#login-form",(function(t){t.preventDefault();var e=$(this).find("input[type='submit']");e.prop("disabled",!0),e.html("Processing");var r=$(this).attr("action"),n=new FormData($(this)[0]);$.ajax({url:r,method:"POST",cache:!1,contentType:!1,processData:!1,data:n}).done((function(t){t.data.is_authenticated?(e.html("Logging In"),location.href="/"):($("#modal-error .message").html(t.data.message),$("#modal-error").modal("show"))})).fail((function(t){u(t)})).always((function(){e.prop("disabled",!1),e.html("Submit")}))})),$(document).on("click",".edit-role-confirm",(function(){var t=$(this).attr("data-user-role");$("input[name='user_role'][value='"+t+"']").prop("checked",!0),$("input[name='user_id']").val($(this).val()),console.log($(this).attr("data-responder-id")),$("select[name='responder_id']").prop("disabled",!("Responder"===t)),$("select[name='responder_id']").val($(this).attr("data-responder-id")),$("#modal-edit-role").modal("show")})),$(document).on("input","input[name='user_role']",(function(){$("select[name='responder_id']").prop("disabled",!("Responder"===$(this).val()))})),$(document).on("submit","#edit-role-form",(function(t){t.preventDefault();var e=$(this).find("button[data-bs-dismiss='modal']");e.addClass("d-none");var r=$(this).find("button[type='submit']");r.prop("disabled",!0),r.html("Processing");var n=$(this).attr("action"),o=new FormData($(this)[0]),a=$(this).find("input[name='user_role']:checked").val(),i=$(this).find("input[name='user_id']").val(),s=$(this).find("select[name='responder_id']").val(),c=$(".edit-role-confirm[value='"+i+"']");$.ajax({url:n,method:"POST",cache:!1,contentType:!1,processData:!1,data:o}).done((function(t){c.attr("data-user-role",a),"Responder"===a?(c.closest("tr").find(".user-role").html(a+'<div class="font-size-80">'+t.responder.name+"</div>"),c.attr("data-responder-id",s)):c.closest("tr").find(".user-role").html(a);var e=$("#modal-success");e.find(".message").html("Role Updated"),e.modal("show")})).fail((function(t){u(t)})).always((function(){r.prop("disabled",!1),r.html("Submit"),e.removeClass("d-none"),$("#modal-edit-role").modal("hide")}))})),$(document).on("click","#add-responder-show-modal",(function(){$("#modal-add-responder").modal("show")})),$(document).on("submit","#add-responder-form",(function(t){t.preventDefault();var e=$(this).find("button[data-bs-dismiss='modal']");e.addClass("d-none");var r=$(this).find("button[type='submit']");r.prop("disabled",!0),r.html("Processing");var n=$(this),o=n.attr("action"),a=new FormData(n[0]);$.ajax({url:o,method:"POST",cache:!1,contentType:!1,processData:!1,data:a}).done((function(t){$("#responders-table-container").html(t.content),$(".data-table").DataTable({order:[]}),$(".data-table").removeClass("invisible"),n.find("input[type='text']").val(""),n.find("input[type='number']").val("");var e=$("#modal-success");e.find(".message").html("Responder Added"),e.modal("show")})).fail((function(t){u(t)})).always((function(){r.prop("disabled",!1),r.html("Submit"),e.removeClass("d-none"),$("#modal-add-responder").modal("hide")}))})),$(document).on("click",".edit-responder-show-modal",(function(){var t=$("#edit-responder-form");t.find("[name='responder_id']").val($(this).val()),t.find("[name='type'][value='"+$(this).attr("data-type")+"']").prop("checked",!0),t.find("[name='name']").val($(this).attr("data-name")),t.find("[name='latitude']").val($(this).attr("data-latitude")),t.find("[name='longitude']").val($(this).attr("data-longitude")),$("#modal-edit-responder").modal("show")})),$(document).on("submit","#edit-responder-form",(function(t){t.preventDefault();var e=$(this).find("button[data-bs-dismiss='modal']");e.addClass("d-none");var r=$(this).find("button[type='submit']");r.prop("disabled",!0),r.html("Processing");var n=$(this),o=n.attr("action"),a=new FormData(n[0]);$.ajax({url:o,method:"POST",cache:!1,contentType:!1,processData:!1,data:a}).done((function(t){$("#responders-table-container").html(t.content),$(".data-table").DataTable({order:[]}),$(".data-table").removeClass("invisible"),n.find("input[type='text']").val(""),n.find("input[type='number']").val("");var e=$("#modal-success");e.find(".message").html("Responder Saved"),e.modal("show")})).fail((function(t){u(t)})).always((function(){r.prop("disabled",!1),r.html("Submit"),e.removeClass("d-none"),$("#modal-edit-responder").modal("hide")}))}))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(670)})()})();