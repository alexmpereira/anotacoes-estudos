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

"use strict";


var _myFile = __webpack_require__(1);

var _style = _interopRequireDefault(__webpack_require__(2));

var _jsLogo = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgElement = document.querySelector('#my-image');
var numberElement = document.querySelector('#my-number');

var MyClass = function MyClass() {
  _classCallCheck(this, MyClass);

  this.x = 5;
};

var a = new MyClass();
imgElement.setAttribute('src', _jsLogo.default);
imgElement.classList.add(_style.default['img-border']);
numberElement.addEventListener('click',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(numberElement.value);
          (0, _myFile.abc)();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

if (false) {
  module.hot.accept('./modules/my-file.js', function () {
    console.log('UPDATE: my-file.js');
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abc = abc;
exports.asdf = asdf;

function abc() {
  console.log('abcdefg');
}

function asdf() {
  console.log('asdf');
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body { \r\n| \tbackground-color: orange;\r\n| \tcolor: green;\r");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);