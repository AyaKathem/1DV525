/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("var Quiz = __webpack_require__(1)\r\nQuiz()\r\n\r\nconsole.log('test')\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUXVpeiA9IHJlcXVpcmUoJy4vcXVpeicpXHJcblF1aXooKVxyXG5cclxuY29uc29sZS5sb2coJ3Rlc3QnKVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {global.XMLHttpRequest = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"xmlhttprequest\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\r\n\r\nexternals:[{\r\n  xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'\r\n}]\r\nvar quiz = function () {\r\n  console.log('qize')\r\n\r\n  function iFunction () {\r\n    var username = document.getElementById('username').value\r\n    var age = document.getElementById('age').value\r\n    if (username === 0 || age === 0) {\r\n      console.log('Please enter your name and your age')\r\n    } else {\r\n      document.getElementById('nextbutton1').hidden = false\r\n      document.getElementById('nextbutton').hidden = false\r\n    }\r\n  }\r\n  iFunction()\r\n  function loadDoc () {\r\n    var xhttp = new XMLHttpRequest()\r\n    xhttp.addEventListener('load', function () {\r\n      if (this.readyState === 4 && this.status === 200) {\r\n        var parsed = JSON.parse(this.responseText)\r\n        if (parsed.alternatives === undefined) {\r\n          document.getElementById('answare').hidden = false\r\n\r\n          document.getElementById('demo').innerHTML = parsed.questions\r\n          document.getElementById('answare').innerHTML = 'enter'\r\n          // var x = document.getElementById('answare').value\r\n        } else {\r\n          document.getElementById('list').hidden = false\r\n          let inputFormTemplate = document.getElementsByName('Salary')\r\n          let theForm = inputFormTemplate.content.firstElementChild\r\n          theForm.firstElementChild.textContent = parsed.question\r\n          let template = document.importNode(inputFormTemplate.content, true)\r\n          document.getElementsByName('Salary').appendChild(template)\r\n        }\r\n      }\r\n    })\r\n\r\n    xhttp.open('GET', 'http://vhost3.lnu.se:20080/question/1', true)\r\n    xhttp.send()\r\n  }\r\n  loadDoc()\r\n\r\n  function loadDoc2 () {\r\n    var xhr = new XMLHttpRequest()\r\n    xhr.open('POST', 'http://vhost3.lnu.se:20080/question/1')\r\n    xhr.setRequestHeader('Content-Type', 'application/JSON')\r\n  // const data = getFormDataAsJSON(x);\r\n    xhr.addEventListener('load', function () {\r\n      if (xhr.status === 400) {\r\n        var userInfo = JSON.parse(xhr.responseText)\r\n        alert('Something went wrong.  Name is now ' + xhr.responseText)\r\n      } else if (xhr.status < 400) {\r\n        var json = JSON.parse(xhr.responseText)\r\n        console.log(JSON.answer)\r\n      }\r\n    })\r\n    xhr.send(JSON.stringify({'answer': '2'}))\r\n  }\r\n}\r\n\r\nmodule.exports = quiz\r\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9xdWl6LmpzPzZmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3QnKVxyXG5cclxuZXh0ZXJuYWxzOlt7XHJcbiAgeG1saHR0cHJlcXVlc3Q6ICd7WE1MSHR0cFJlcXVlc3Q6WE1MSHR0cFJlcXVlc3R9J1xyXG59XVxyXG52YXIgcXVpeiA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZygncWl6ZScpXHJcblxyXG4gIGZ1bmN0aW9uIGlGdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKS52YWx1ZVxyXG4gICAgdmFyIGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKS52YWx1ZVxyXG4gICAgaWYgKHVzZXJuYW1lID09PSAwIHx8IGFnZSA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSBhbmQgeW91ciBhZ2UnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRidXR0b24xJykuaGlkZGVuID0gZmFsc2VcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRidXR0b24nKS5oaWRkZW4gPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBpRnVuY3Rpb24oKVxyXG4gIGZ1bmN0aW9uIGxvYWREb2MgKCkge1xyXG4gICAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgIHhodHRwLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQgJiYgdGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgIGlmIChwYXJzZWQuYWx0ZXJuYXRpdmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3YXJlJykuaGlkZGVuID0gZmFsc2VcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVtbycpLmlubmVySFRNTCA9IHBhcnNlZC5xdWVzdGlvbnNcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3YXJlJykuaW5uZXJIVE1MID0gJ2VudGVyJ1xyXG4gICAgICAgICAgLy8gdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2FyZScpLnZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JykuaGlkZGVuID0gZmFsc2VcclxuICAgICAgICAgIGxldCBpbnB1dEZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdTYWxhcnknKVxyXG4gICAgICAgICAgbGV0IHRoZUZvcm0gPSBpbnB1dEZvcm1UZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICAgICAgICB0aGVGb3JtLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gcGFyc2VkLnF1ZXN0aW9uXHJcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKGlucHV0Rm9ybVRlbXBsYXRlLmNvbnRlbnQsIHRydWUpXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnU2FsYXJ5JykuYXBwZW5kQ2hpbGQodGVtcGxhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHhodHRwLm9wZW4oJ0dFVCcsICdodHRwOi8vdmhvc3QzLmxudS5zZToyMDA4MC9xdWVzdGlvbi8xJywgdHJ1ZSlcclxuICAgIHhodHRwLnNlbmQoKVxyXG4gIH1cclxuICBsb2FkRG9jKClcclxuXHJcbiAgZnVuY3Rpb24gbG9hZERvYzIgKCkge1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICB4aHIub3BlbignUE9TVCcsICdodHRwOi8vdmhvc3QzLmxudS5zZToyMDA4MC9xdWVzdGlvbi8xJylcclxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vSlNPTicpXHJcbiAgLy8gY29uc3QgZGF0YSA9IGdldEZvcm1EYXRhQXNKU09OKHgpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICB2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiAgTmFtZSBpcyBub3cgJyArIHhoci5yZXNwb25zZVRleHQpXHJcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uYW5zd2VyKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoeydhbnN3ZXInOiAnMid9KSlcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcXVpelxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9xdWl6LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);