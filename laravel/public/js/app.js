/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var appUrl;
var currentRouteName;
var pageOnload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return allOnload();
          case 2:
            if (currentRouteName === "dashboard.index") {
              homeOnload();
            } else if (currentRouteName === "users.index") {
              usersOnload();
            } else if (currentRouteName === "responders.index") {
              respondersOnload();
            } else if (currentRouteName === "alerts.index") {
              alertsOnload();
            }
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function pageOnload() {
    return _ref.apply(this, arguments);
  };
}();
var allOnload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            appUrl = $("input[name='app_url']").val();
            currentRouteName = $("input[name='route_name']").val();
            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
            });
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function allOnload() {
    return _ref2.apply(this, arguments);
  };
}();
var homeOnload = function homeOnload() {};
var usersOnload = function usersOnload() {
  $('.data-table').DataTable({
    order: []
  });
  $('.data-table').removeClass("invisible");
};
var respondersOnload = function respondersOnload() {
  $('.data-table').DataTable({
    order: []
  });
  $('.data-table').removeClass("invisible");
};
var alertsOnload = function alertsOnload() {
  $('.data-table').DataTable({
    order: []
  });
  $('.data-table').removeClass("invisible");
};
var numberFormat = function numberFormat(x, decimal) {
  x = parseFloat(x);
  var parts = x;
  if (decimal !== false) {
    parts = parts.toFixed(decimal);
  }
  parts = parts.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (decimal !== 0) {
    return parts.join(".");
  } else {
    return parts[0];
  }
};
var initializeReloadButton = function initializeReloadButton(link) {
  var modalSuccess = $("#modal-success");
  modalSuccess.attr("data-bs-backdrop", "static");
  modalSuccess.attr("data-bs-keyboard", "false");
  modalSuccess.find("button").removeAttr("data-bs-dismiss");
  modalSuccess.find("button").addClass("reload-page");
  modalSuccess.find("button").attr("data-link", link);
};
var showErrorFromAjax = function showErrorFromAjax(error) {
  var content = "Something went wrong.";
  if (error.responseJSON) {
    content = error.responseJSON.message;
    for (var prop in error.responseJSON.errors) {
      if (Object.prototype.hasOwnProperty.call(error.responseJSON.errors, prop)) {
        content += ' ' + error.responseJSON.errors[prop];
      }
    }
  }
  $("#modal-error .message").html(content);
  $("#modal-error").modal("show");
};
$(document).ready(function () {
  pageOnload();
});
$(document).on("click", ".reload-page", function () {
  $(this).prop("disabled", true);
  var link = $(this).attr("data-link");
  if (link) {
    $(this).text("Redirecting");
    window.location.href = link;
  } else {
    $(this).text("Reloading Page");
    window.location.reload();
  }
});

// Home Page
var findGetParameter = function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
};

// Auth
$(document).on("submit", "#login-form", function (e) {
  e.preventDefault();
  var button = $(this).find("input[type='submit']");
  button.prop("disabled", true);
  button.html("Processing");
  var url = $(this).attr("action");
  var formData = new FormData($(this)[0]);
  $.ajax({
    url: url,
    method: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: formData
  }).done(function (response) {
    if (response.data.is_authenticated) {
      button.html("Logging In");
      location.href = "/";
    } else {
      $("#modal-error .message").html(response.data.message);
      $("#modal-error").modal("show");
    }
  }).fail(function (error) {
    showErrorFromAjax(error);
  }).always(function () {
    button.prop("disabled", false);
    button.html("Submit");
  });
});

// Users
$(document).on("click", ".edit-role-confirm", function () {
  var userRole = $(this).attr("data-user-role");
  $("input[name='user_role'][value='" + userRole + "']").prop("checked", true);
  $("input[name='user_id']").val($(this).val());
  console.log($(this).attr("data-responder-id"));
  $("select[name='responder_id']").prop("disabled", !(userRole === "Responder"));
  $("select[name='responder_id']").val($(this).attr("data-responder-id"));
  $("#modal-edit-role").modal("show");
});
$(document).on("input", "input[name='user_role']", function () {
  $("select[name='responder_id']").prop("disabled", !($(this).val() === "Responder"));
});
$(document).on("submit", "#edit-role-form", function (e) {
  e.preventDefault();
  var cancelButton = $(this).find("button[data-bs-dismiss='modal']");
  cancelButton.addClass("d-none");
  var button = $(this).find("button[type='submit']");
  button.prop("disabled", true);
  button.html("Processing");
  var url = $(this).attr("action");
  var formData = new FormData($(this)[0]);
  var userRole = $(this).find("input[name='user_role']:checked").val();
  var userId = $(this).find("input[name='user_id']").val();
  var responderId = $(this).find("select[name='responder_id']").val();
  var editRoleButton = $(".edit-role-confirm[value='" + userId + "']");
  $.ajax({
    url: url,
    method: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: formData
  }).done(function (response) {
    editRoleButton.attr('data-user-role', userRole);
    if (userRole === "Responder") {
      editRoleButton.closest('tr').find('.user-role').html(userRole + '<div class="font-size-80">' + response.responder.name + '</div>');
      editRoleButton.attr('data-responder-id', responderId);
    } else {
      editRoleButton.closest('tr').find('.user-role').html(userRole);
    }
    var modalSuccess = $("#modal-success");
    modalSuccess.find(".message").html("Role Updated");
    modalSuccess.modal("show");
  }).fail(function (error) {
    showErrorFromAjax(error);
  }).always(function () {
    button.prop("disabled", false);
    button.html("Submit");
    cancelButton.removeClass("d-none");
    $("#modal-edit-role").modal("hide");
  });
});
$(document).on("click", "#add-responder-show-modal", function () {
  $("#modal-add-responder").modal("show");
});
$(document).on("submit", "#add-responder-form", function (e) {
  e.preventDefault();
  var cancelButton = $(this).find("button[data-bs-dismiss='modal']");
  cancelButton.addClass("d-none");
  var button = $(this).find("button[type='submit']");
  button.prop("disabled", true);
  button.html("Processing");
  var form = $(this);
  var url = form.attr("action");
  var formData = new FormData(form[0]);
  $.ajax({
    url: url,
    method: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: formData
  }).done(function (response) {
    $("#responders-table-container").html(response.content);
    $('.data-table').DataTable({
      order: []
    });
    $('.data-table').removeClass("invisible");
    form.find("input[type='text']").val("");
    form.find("input[type='number']").val("");
    var modalSuccess = $("#modal-success");
    modalSuccess.find(".message").html("Responder Added");
    modalSuccess.modal("show");
  }).fail(function (error) {
    showErrorFromAjax(error);
  }).always(function () {
    button.prop("disabled", false);
    button.html("Submit");
    cancelButton.removeClass("d-none");
    $("#modal-add-responder").modal("hide");
  });
});
$(document).on("click", ".edit-responder-show-modal", function () {
  var form = $("#edit-responder-form");
  form.find("[name='responder_id']").val($(this).val());
  form.find("[name='type'][value='" + $(this).attr("data-type") + "']").prop("checked", true);
  form.find("[name='name']").val($(this).attr("data-name"));
  form.find("[name='latitude']").val($(this).attr("data-latitude"));
  form.find("[name='longitude']").val($(this).attr("data-longitude"));
  $("#modal-edit-responder").modal("show");
});
$(document).on("submit", "#edit-responder-form", function (e) {
  e.preventDefault();
  var cancelButton = $(this).find("button[data-bs-dismiss='modal']");
  cancelButton.addClass("d-none");
  var button = $(this).find("button[type='submit']");
  button.prop("disabled", true);
  button.html("Processing");
  var form = $(this);
  var url = form.attr("action");
  var formData = new FormData(form[0]);
  $.ajax({
    url: url,
    method: "POST",
    cache: false,
    contentType: false,
    processData: false,
    data: formData
  }).done(function (response) {
    $("#responders-table-container").html(response.content);
    $('.data-table').DataTable({
      order: []
    });
    $('.data-table').removeClass("invisible");
    form.find("input[type='text']").val("");
    form.find("input[type='number']").val("");
    var modalSuccess = $("#modal-success");
    modalSuccess.find(".message").html("Responder Saved");
    modalSuccess.modal("show");
  }).fail(function (error) {
    showErrorFromAjax(error);
  }).always(function () {
    button.prop("disabled", false);
    button.html("Submit");
    cancelButton.removeClass("d-none");
    $("#modal-edit-responder").modal("hide");
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./resources/js/script.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;