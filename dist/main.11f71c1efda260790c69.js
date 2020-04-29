/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css":
/*!******************************************************************!*\
  !*** ./assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _MessageDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageDetails */ "./components/MessageDetails.js");
/* harmony import */ var _Favorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Favorites */ "./components/Favorites.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _SearchMessageDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchMessageDetails */ "./components/SearchMessageDetails.js");
/* harmony import */ var _Lost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Lost */ "./components/Lost.js");
/* harmony import */ var _Found__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Found */ "./components/Found.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth */ "./components/Auth.js");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Landing */ "./components/Landing.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Messages */ "./components/Messages.js");
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NewPost */ "./components/NewPost.js");
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/navbar.css */ "./styles/navbar.css");
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _LoadFile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LoadFile */ "./components/LoadFile.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-len */



















var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      showNav: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem('X-Authorization') !== null) {
        this.setState({
          showNav: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var showNav = this.state.showNav;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app"
      }, showNav && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["authPath"],
        component: _Auth__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["landingPath"],
        component: _Landing__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: [_utils_routes__WEBPACK_IMPORTED_MODULE_2__["rootPath"], _utils_routes__WEBPACK_IMPORTED_MODULE_2__["homePath"]],
        render: function render() {
          return localStorage.getItem('X-Authorization') !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
            to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["landingPath"]
          });
        },
        exact: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["profilePath"],
        component: _UserProfile__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["messageDetailPath"],
        component: _MessageDetails__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["lostMessages"],
        component: _Lost__WEBPACK_IMPORTED_MODULE_8__["default"],
        exact: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["foundMessages"],
        component: _Found__WEBPACK_IMPORTED_MODULE_9__["default"],
        exact: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["searchMessagePath"],
        component: _SearchMessageDetails__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["favoritesPath"],
        component: _Favorites__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["searchPath"],
        component: _Search__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["newPostPath"],
        component: _NewPost__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["loadFilePath"],
        component: _LoadFile__WEBPACK_IMPORTED_MODULE_17__["default"]
      })))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Auth.js":
/*!****************************!*\
  !*** ./components/Auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm */ "./components/RegisterForm.js");
/* harmony import */ var _LoginFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginFrom */ "./components/LoginFrom.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/auth.css */ "./styles/auth.css");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Auth = /*#__PURE__*/function (_React$Component) {
  _inherits(Auth, _React$Component);

  var _super = _createSuper(Auth);

  function Auth() {
    var _this;

    _classCallCheck(this, Auth);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "loginHandleClick", function () {
      _this.setState({
        formMode: 'login'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "registerHandleClick", function () {
      _this.setState({
        formMode: 'register'
      });
    });

    _this.state = {
      formMode: 'login'
    };
    return _this;
  }

  _createClass(Auth, [{
    key: "render",
    value: function render() {
      var formMode = this.state.formMode;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "button",
        onClick: this.loginHandleClick
      }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "button",
        onClick: this.registerHandleClick
      }, "Register")), formMode === 'login' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginFrom__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Auth;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./components/Favorites.js":
/*!*********************************!*\
  !*** ./components/Favorites.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Favorites; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _ui_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Loader */ "./components/ui/Loader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Favorites = /*#__PURE__*/function (_Component) {
  _inherits(Favorites, _Component);

  var _super = _createSuper(Favorites);

  function Favorites(props) {
    var _this;

    _classCallCheck(this, Favorites);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchMore", function () {
      var xAuth = localStorage.getItem('X-Authorization');
      var xUser = localStorage.getItem('X-User');
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          count = _this$state.count;

      _this.setState({
        currentPage: currentPage + 1
      });

      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_SERVER_PATH"], "/favorites/").concat(xUser, "?current_page=").concat(currentPage, "&items_on_page=").concat(count);
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.posts.length === 0) {
          _this.setState({
            hasMore: false
          });
        }

        var msg = _this.state.msg;

        _this.setState({
          msg: msg.concat(result.posts)
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _this.state = {
      msg: [],
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ITEMS_ON_PAGE"],
      loading: true
    };
    return _this;
  }

  _createClass(Favorites, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xAuth = localStorage.getItem('X-Authorization');
      var xUser = localStorage.getItem('X-User');
      var _this$state2 = this.state,
          currentPage = _this$state2.currentPage,
          count = _this$state2.count;
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_SERVER_PATH"], "/favorites/").concat(xUser, "?current_page=").concat(currentPage, "&items_on_page=").concat(count);
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setState({
          loading: false,
          msg: result.posts
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          hasMore = _this$state3.hasMore,
          msg = _this$state3.msg,
          loading = _this$state3.loading;
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-text"
      }, "Your favorites. Find them here anytime."), msg.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "You don't have any favorites") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
        dataLength: msg.length,
        next: this.fetchMore,
        loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Loading..."),
        hasMore: hasMore,
        endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "End")
      }, msg.map(function (message) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: message.postId,
          owner: message.owner.email,
          avatar: message.owner.avatar,
          date: message.postDate,
          text: message.text,
          postid: message.postId,
          name: message.owner.name,
          favs: message.favorites
        });
      })));
    }
  }]);

  return Favorites;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Found.js":
/*!*****************************!*\
  !*** ./components/Found.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _SearchMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchMessage */ "./components/SearchMessage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Found = /*#__PURE__*/function (_React$Component) {
  _inherits(Found, _React$Component);

  var _super = _createSuper(Found);

  function Found(props) {
    var _this;

    _classCallCheck(this, Found);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      var _this$state = _this.state,
          _this$state$currentPa = _this$state.currentPage,
          currentPage = _this$state$currentPa === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PAGE"] : _this$state$currentPa,
          _this$state$count = _this$state.count,
          count = _this$state$count === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ITEMS_ON_PAGE"] : _this$state$count;
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["SEARCH_SERVER_PATH"], "/?typePost=found&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var xAuth = localStorage.getItem('X-Authorization');
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this.setState({
          posts: result.content,
          currentPage: currentPage + 1
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMore", function () {
      var _this$state2 = _this.state,
          currentPage = _this$state2.currentPage,
          count = _this$state2.count;

      _this.setState({
        currentPage: currentPage + 1
      });

      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["SEARCH_SERVER_PATH"], "/?typePost=found&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var xAuth = localStorage.getItem('X-Authorization');
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.content.length === 0) {
          _this.setState({
            hasMore: false
          });
        }

        var posts = _this.state.posts;

        _this.setState({
          posts: posts.concat(result.content)
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _this.state = {
      posts: [],
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ITEMS_ON_PAGE"]
    };
    return _this;
  }

  _createClass(Found, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          hasMore = _this$state3.hasMore,
          posts = _this$state3.posts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
        hasMore: hasMore,
        next: this.fetchMore,
        loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Loading..."),
        dataLength: posts.length,
        endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "The end")
      }, posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: post.lfpostId + Math.random(4),
          post: post,
          lfpostId: post.lfpostId
        });
      })));
    }
  }]);

  return Found;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Found);

/***/ }),

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");





var Landing = function Landing() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var redirectAuthHandler = function redirectAuthHandler() {
    history.push(_utils_routes__WEBPACK_IMPORTED_MODULE_2__["authPath"]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Landing component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    onClick: redirectAuthHandler
  }, "I lost my pet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    onClick: redirectAuthHandler
  }, "I found a pet")));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/LoadFile.js":
/*!********************************!*\
  !*** ./components/LoadFile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LoadFile = /*#__PURE__*/function (_React$Component) {
  _inherits(LoadFile, _React$Component);

  var _super = _createSuper(LoadFile);

  function LoadFile(props) {
    var _this;

    _classCallCheck(this, LoadFile);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      image: null
    };
    return _this;
  }

  _createClass(LoadFile, [{
    key: "render",
    value: function render() {
      var image = this.state.image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        onChange: this.onFileSelectedHandler
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.fileUploadHandler
      }, "Load")), image !== null && image.name);
    }
  }]);

  return LoadFile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoadFile);

/***/ }),

/***/ "./components/LoginFrom.js":
/*!*********************************!*\
  !*** ./components/LoginFrom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! base-64 */ "../node_modules/base-64/base64.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/auth.css */ "./styles/auth.css");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/prop-types */

/* eslint-disable no-restricted-syntax */










var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sendLogin", function (values, setSubmitting, resetForm) {
      var email = values.email,
          password = values.password;
      var errorResponse = {};
      var myHeaders = new Headers();
      myHeaders.append('Authorization', "Basic ".concat(Object(base_64__WEBPACK_IMPORTED_MODULE_4__["encode"])("".concat(email, ":").concat(password))));
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_SERVER_PATH"], "/").concat(email), requestOptions).then(function (res) {
        return res.json().then(function (data) {
          return {
            data: data,
            xAuth: res.headers.get('X-Authorization'),
            xUser: res.headers.get('X-User')
          };
        });
      }).then(function (_ref) {
        var data = _ref.data,
            xAuth = _ref.xAuth,
            xUser = _ref.xUser;

        if (xAuth !== null || xUser !== null) {
          localStorage.setItem('X-Authorization', xAuth);
          localStorage.setItem('X-User', xUser);
          setSubmitting(false);
          resetForm();

          if (localStorage.getItem('X-Authorization')) {
            var history = _this.props.history;
            history.push(_utils_routes__WEBPACK_IMPORTED_MODULE_6__["rootPath"]);
          }
        } else {
          errorResponse.status = data.status;
          errorResponse.message = data.message;
        }
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var SignInSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('This field is required').email('Must be a valid email'),
        password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('This field is required').min(8, 'Must be 8 characters at least')
      });

      var MyTextInput = function MyTextInput(_ref2) {
        var label = _ref2.label,
            props = _objectWithoutProperties(_ref2, ["label"]);

        var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
            _useField2 = _slicedToArray(_useField, 2),
            field = _useField2[0],
            meta = _useField2[1];

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          htmlFor: props.id || props.name,
          className: "inputLabel"
        }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
          className: "input"
        }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inputError"
        }, meta.error) : null);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: SignInSchema,
        onSubmit: function onSubmit(values, _ref3) {
          var setSubmitting = _ref3.setSubmitting,
              resetForm = _ref3.resetForm;
          setSubmitting(true);

          _this2.sendLogin(values, setSubmitting, resetForm);
        }
      }, function (_ref4) {
        var dirty = _ref4.dirty,
            handleReset = _ref4.handleReset,
            isValid = _ref4.isValid,
            isSubmitting = _ref4.isSubmitting;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
          label: "Email",
          name: "email",
          type: "text",
          placeholder: "Email",
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
          label: "Password",
          name: "password",
          type: "text",
          placeholder: "Password",
          autoComplete: "off"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button_wrapper"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          disabled: !isValid || !dirty || isSubmitting,
          type: "submit"
        }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: handleReset,
          type: "button"
        }, "Reset")));
      }));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginForm));

/***/ }),

/***/ "./components/Lost.js":
/*!****************************!*\
  !*** ./components/Lost.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _SearchMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchMessage */ "./components/SearchMessage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Lost = /*#__PURE__*/function (_React$Component) {
  _inherits(Lost, _React$Component);

  var _super = _createSuper(Lost);

  function Lost(props) {
    var _this;

    _classCallCheck(this, Lost);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      var _this$state = _this.state,
          _this$state$currentPa = _this$state.currentPage,
          currentPage = _this$state$currentPa === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE"] : _this$state$currentPa,
          _this$state$count = _this$state.count,
          count = _this$state$count === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ITEMS_ON_PAGE"] : _this$state$count;
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_4__["SEARCH_SERVER_PATH"], "/?typePost=lost&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var xAuth = localStorage.getItem('X-Authorization');
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this.setState({
          posts: result.content,
          currentPage: currentPage + 1
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMore", function () {
      var xAuth = localStorage.getItem('X-Authorization');
      var _this$state2 = _this.state,
          currentPage = _this$state2.currentPage,
          count = _this$state2.count;

      _this.setState({
        currentPage: currentPage + 1
      });

      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_4__["SEARCH_SERVER_PATH"], "/?typePost=lost&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.content.length === 0) {
          _this.setState({
            hasMore: false
          });
        }

        var posts = _this.state.posts;

        _this.setState({
          posts: posts.concat(result.content)
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _this.state = {
      posts: [],
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ITEMS_ON_PAGE"],
      loading: true
    };
    return _this;
  }

  _createClass(Lost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          hasMore = _this$state3.hasMore,
          posts = _this$state3.posts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hasMore: hasMore,
        next: this.fetchMore,
        loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Loading..."),
        dataLength: posts.length,
        endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "The end")
      }, posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: post.lfpostId + Math.random(4),
          post: post,
          lfpostId: post.lfpostId
        });
      })));
    }
  }]);

  return Lost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Lost.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Lost);

/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Image */ "./components/ui/Image.js");
/* harmony import */ var _helpers_convertTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/convertTime */ "./helpers/convertTime.js");
/* harmony import */ var _styles_message_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/message.css */ "./styles/message.css");
/* harmony import */ var _styles_message_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_message_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/Icon */ "./components/ui/Icon.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */










var Message = /*#__PURE__*/function (_React$Component) {
  _inherits(Message, _React$Component);

  var _super = _createSuper(Message);

  function Message(props) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {// const { postid } = this.state
      // const { history } = this.props
      // // eslint-disable-next-line react/prop-types
      // history.push(`/messages/${postid}`)
    });

    _defineProperty(_assertThisInitialized(_this), "hideHandle", function () {
      alert('Hide action');
    });

    _defineProperty(_assertThisInitialized(_this), "unfollowHandle", function () {
      alert('Unfollow action');
    });

    _defineProperty(_assertThisInitialized(_this), "favoriteHandle", function () {
      var _this$state = _this.state,
          setFavorite = _this$state.setFavorite,
          postid = _this$state.postid;
      var header = {
        'X-Authorization': localStorage.getItem('X-Authorization')
      };
      var user = localStorage.getItem('X-User');
      var requestUrl = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_SERVER_PATH"], "/").concat(postid, "/favorite/").concat(user);
      console.log(requestUrl);

      if (!setFavorite) {
        try {
          axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: 'put',
            url: requestUrl,
            headers: header
          }).then(function (response) {
            return response.data;
          }).then(function (data) {
            _this.setState({
              setFavorite: !setFavorite
            });
          });
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }

          console.log(error.config);
        }
      }

      if (setFavorite) {
        try {
          axios__WEBPACK_IMPORTED_MODULE_3___default()({
            method: 'delete',
            url: requestUrl,
            headers: header
          }).then(function (response) {
            return response.data;
          }).then(function (data) {
            _this.setState({
              setFavorite: !setFavorite
            });
          });
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }

          console.log(error.config);
        }
      }
    });

    _this.state = {
      time: Object(_helpers_convertTime__WEBPACK_IMPORTED_MODULE_5__["default"])(props.date),
      text: props.text,
      postid: props.postid,
      avatar: props.avatar,
      name: props.name,
      setFavorite: false,
      favs: props.favs
    };
    return _this;
  }

  _createClass(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$state2 = this.state,
          favs = _this$state2.favs,
          setFavorite = _this$state2.setFavorite;
      var user = localStorage.getItem('X-User');

      if (favs.includes(user) && !setFavorite) {
        this.setState({
          setFavorite: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          avatar = _this$state3.avatar,
          name = _this$state3.name,
          time = _this$state3.time,
          text = _this$state3.text,
          setFavorite = _this$state3.setFavorite,
          postid = _this$state3.postid;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-owner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: avatar,
        alt: name,
        className: "post-owner-avatar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-owner-name"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-date"
      }, time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-text"
      }, text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/messages/".concat(postid),
        onClick: this.handleClick
      }, "More")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-visibility"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "far",
        name: "eye-slash",
        className: "icon-control ",
        onClick: this.hideHandle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "fa",
        name: "times",
        className: "icon-control ",
        onClick: this.unfollowHandle
      })), setFavorite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "fa",
        name: "star",
        className: "icon-control ",
        onClick: this.favoriteHandle
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "far",
        name: "star",
        className: "icon-control",
        onClick: this.favoriteHandle
      })));
    }
  }]);

  return Message;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Message.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  postid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Message));

/***/ }),

/***/ "./components/MessageDetails.js":
/*!**************************************!*\
  !*** ./components/MessageDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable no-nested-ternary */








var MessageDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(MessageDetails, _React$Component);

  var _super = _createSuper(MessageDetails);

  function MessageDetails(props) {
    var _this;

    _classCallCheck(this, MessageDetails);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "editHandler", function () {
      var editMode = _this.state.editMode;

      _this.setState({
        editMode: !editMode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "returnEditHandler", function () {
      var previewMode = _this.state.previewMode;

      _this.setState({
        previewMode: !previewMode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previewHandler", function (values, setSubmitting) {
      var previewMode = _this.state.previewMode;
      var post = _this.state.post;
      var text = values.postText;
      post = _objectSpread({}, post, {
        text: text
      });

      _this.setState({
        previewMode: !previewMode,
        post: post
      });

      setSubmitting(false);
    });

    _defineProperty(_assertThisInitialized(_this), "saveHandler", function () {
      var post = _this.state.post;
      var text = post.text,
          images = post.images,
          postId = post.postId;
      var xAuth = localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_5__["xAuthHeader"]);
      console.log(xAuth);
      var payload = {
        text: text,
        images: images
      };
      console.log(JSON.stringify(payload));
      var myHeaders = new Headers();
      myHeaders.append(_utils_requestConst__WEBPACK_IMPORTED_MODULE_5__["xAuthHeader"], xAuth);
      myHeaders.append('Content-Type', 'application/json');
      console.log(myHeaders);
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
      };
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_SERVER_PATH"], "/").concat(postId), requestOptions).then(function (response) {
        return response.json().then(function (data) {
          return {
            data: data,
            token: response.headers.get('X-Authorization'),
            user: response.headers.get('X-User')
          };
        });
      }).then(function (_ref) {
        var data = _ref.data,
            token = _ref.token,
            user = _ref.user;

        if (token !== null || user !== null) {
          localStorage.setItem('X-Authorization', token);
          localStorage.setItem('X-User', user);
        } else {
          console.log(token);
          console.log(user);
          console.log(data.message);
        }
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "normalView", function () {
      var _this$state = _this.state,
          post = _this$state.post,
          loading = _this$state.loading;
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Post text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Post date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.postDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: _this.editHandler
      }, "Edit"));
    });

    _defineProperty(_assertThisInitialized(_this), "editView", function () {
      var _this$state2 = _this.state,
          post = _this$state2.post,
          previewMode = _this$state2.previewMode;
      return previewMode ? _this.previeView() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
        initialValues: {
          postText: post.text
        },
        onSubmit: function onSubmit(values, _ref2) {
          var setSubmitting = _ref2.setSubmitting;
          return _this.previewHandler(values, setSubmitting);
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
          postText: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Write something')
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Post date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.postDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "postText"
      }, "Your post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: "postText"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "submit"
      }, "Publish")));
    });

    _defineProperty(_assertThisInitialized(_this), "previeView", function () {
      var _this$state3 = _this.state,
          post = _this$state3.post,
          previewMode = _this$state3.previewMode;
      return previewMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Post text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Post date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.postDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: _this.saveHandler
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: _this.returnEditHandler
      }, "Edit")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "loading...");
    });

    _this.state = {
      loading: true,
      post: {},
      postid: props.match.params.postid,
      editMode: false,
      previewMode: false
    };
    return _this;
  }

  _createClass(MessageDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xAuth = localStorage.getItem('X-Authorization');
      var postid = this.state.postid;
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_SERVER_PATH"], "/").concat(postid), requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setState({
          post: result,
          loading: false
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var editMode = this.state.editMode;
      return editMode ? this.editView() : this.normalView();
    }
  }]);

  return MessageDetails;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MessageDetails.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      postid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }).isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MessageDetails);

/***/ }),

/***/ "./components/Messages.js":
/*!********************************!*\
  !*** ./components/Messages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _ui_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Loader */ "./components/ui/Loader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Messages = /*#__PURE__*/function (_Component) {
  _inherits(Messages, _Component);

  var _super = _createSuper(Messages);

  function Messages(props) {
    var _this;

    _classCallCheck(this, Messages);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchMore", function () {
      var xAuth = localStorage.getItem('X-Authorization');
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          count = _this$state.count;

      _this.setState({
        currentPage: currentPage + 1
      });

      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_SERVER_PATH"], "?current_page=").concat(currentPage, "&items_on_page=").concat(count), requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.posts.length === 0) {
          _this.setState({
            hasMore: false
          });
        }

        var msg = _this.state.msg;

        _this.setState({
          msg: msg.concat(result.posts)
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _this.state = {
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ITEMS_ON_PAGE"],
      msg: [],
      loading: true
    };
    return _this;
  }

  _createClass(Messages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xAuth = localStorage.getItem('X-Authorization');
      var _this$state2 = this.state,
          currentPage = _this$state2.currentPage,
          count = _this$state2.count;
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_SERVER_PATH"], "?current_page=").concat(currentPage, "&items_on_page=").concat(count), requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        _this2.setState({
          msg: result.posts,
          loading: false
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          msg = _this$state3.msg,
          hasMore = _this$state3.hasMore,
          loading = _this$state3.loading;
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
        dataLength: msg.length,
        next: this.fetchMore,
        hasMore: hasMore,
        loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You have seen it all"),
        className: "scroll-container"
      }, msg.map(function (message) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: message.postId,
          owner: message.owner.email,
          avatar: message.owner.avatar,
          date: message.postDate,
          text: message.text,
          postid: message.postId,
          name: message.owner.name,
          favs: message.favorites
        });
      })));
    }
  }]);

  return Messages;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navbar.css */ "./styles/navbar.css");
/* harmony import */ var _styles_navbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_css__WEBPACK_IMPORTED_MODULE_4__);






var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["homePath"],
    exact: true
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["profilePath"]
  }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["lostMessages"]
  }, "Lost")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["foundMessages"]
  }, "Found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["favoritesPath"]
  }, "Favorites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["newPostPath"]
  }, "Add Post")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["loadFilePath"]
  }, "Load Image"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-logout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: _utils_routes__WEBPACK_IMPORTED_MODULE_2__["homePath"],
    exact: true
  }, "Logout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/NewPost.js":
/*!*******************************!*\
  !*** ./components/NewPost.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _styles_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/input.css */ "./styles/input.css");
/* harmony import */ var _styles_input_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_input_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/Image */ "./components/ui/Image.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _ui_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/Loader */ "./components/ui/Loader.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/destructuring-assignment */

/* eslint-disable jsx-a11y/label-has-associated-control */












var NewPost = /*#__PURE__*/function (_React$Component) {
  _inherits(NewPost, _React$Component);

  var _super = _createSuper(NewPost);

  function NewPost(props) {
    var _this;

    _classCallCheck(this, NewPost);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sendMessage", function (values, setSubmitting) {
      var postText = values.postText;

      _this.setState({
        text: postText
      });

      var header = {
        'X-Authorization': localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_8__["xAuthHeader"])
      };

      try {
        var _this$state = _this.state,
            text = _this$state.text,
            avatar = _this$state.avatar,
            name = _this$state.name,
            images = _this$state.images;
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: 'post',
          url: "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_9__["MESSAGE_SERVER_PATH"]),
          data: {
            owner: {
              email: localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_8__["xUserHeader"]),
              name: name,
              avatar: avatar
            },
            text: text,
            images: images
          },
          headers: header
        }).then(function (response) {
          return response.data;
        }).then(function (data) {
          console.log(data); // eslint-disable-next-line react/prop-types

          var history = _this.props.history; // eslint-disable-next-line react/prop-types

          history.push('/');
        });
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

        console.log(error.config);
      }

      setSubmitting(false);
    });

    _this.state = {
      avatar: '',
      name: '',
      text: '',
      images: [],
      loading: true
    };
    return _this;
  }

  _createClass(NewPost, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var header = {
        'X-Authorization': localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_8__["xAuthHeader"])
      };

      try {
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
          method: 'post',
          url: "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_9__["ACCOUNT_SERVER_PATH"], "/").concat(localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_8__["xUserHeader"])),
          headers: header
        }).then(function (response) {
          return response.data;
        }).then(function (data) {
          _this2.setState({
            avatar: data.avatar,
            name: data.name,
            loading: false
          });
        });
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

        console.log(error.config);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var PostValidation = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
        postText: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('Write your post').max(1500, 'You exeeded maximum size')
      });
      var _this$state2 = this.state,
          avatar = _this$state2.avatar,
          name = _this$state2.name,
          loading = _this$state2.loading;
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-welcome"
      }, "Your new post! Simply text, add photos and publish."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-doc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "desc"
      }, "Text:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "instruction"
      }, "up to 1500 char")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-composer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
        initialValues: {
          postText: ''
        },
        validationSchema: PostValidation,
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting;
          return _this3.sendMessage(values, setSubmitting);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        className: "inputText",
        name: "postText",
        as: "textarea",
        placeholder: "Post a message..",
        rows: 10
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
        className: "inputError",
        component: "div",
        name: "postText"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: avatar,
        alt: name
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-name"
      }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor-control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "submit"
      }, "Publish"))))))))));
    }
  }]);

  return NewPost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NewPost));

/***/ }),

/***/ "./components/ProfileActivities.js":
/*!*****************************************!*\
  !*** ./components/ProfileActivities.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _SearchMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchMessage */ "./components/SearchMessage.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ProfileActivities = /*#__PURE__*/function (_React$Component) {
  _inherits(ProfileActivities, _React$Component);

  var _super = _createSuper(ProfileActivities);

  function ProfileActivities(props) {
    var _this;

    _classCallCheck(this, ProfileActivities);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ITEMS_ON_PAGE"],
      posts: []
    };
    return _this;
  }

  _createClass(ProfileActivities, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xAuth = localStorage.getItem('X-Authorization');
      var xUser = localStorage.getItem('X-User');
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          count = _this$state.count;
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      var _this$props$email = this.props.email,
          email = _this$props$email === void 0 ? xUser : _this$props$email;
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_SERVER_PATH"], "/").concat(email, "/activities?current_page=").concat(currentPage, "&items_on_page=").concat(count);
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setState({
          posts: result.posts
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.state.posts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "ProfileActivities component"), posts.map(function (p) {
        return p.post === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: p.lostFoundPost.lfpostId + Math.random(4),
          post: p.lostFoundPost,
          lfpostId: p.lostFoundPost.lfpostId
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: p.post.postId + Math.random(4),
          owner: p.post.owner.email,
          date: p.post.postDate,
          text: p.post.text,
          postid: p.post.postId
        });
      }));
    }
  }]);

  return ProfileActivities;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ProfileActivities.propTypes = {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileActivities);

/***/ }),

/***/ "./components/ProfileDetails.js":
/*!**************************************!*\
  !*** ./components/ProfileDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-alert */




var ProfileDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(ProfileDetails, _React$Component);

  var _super = _createSuper(ProfileDetails);

  function ProfileDetails(props) {
    var _this;

    _classCallCheck(this, ProfileDetails);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "modeViewHandler", function () {
      var editView = _this.state.editView;
      var toggle = !editView;

      _this.setState({
        editView: toggle
      }, function () {
        console.log(editView);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveHandler", function () {
      alert('your profile is saved');
    });

    _defineProperty(_assertThisInitialized(_this), "normalMode", function () {
      var _this$state = _this.state,
          loading = _this$state.loading,
          user = _this$state.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My profile"), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.phone ? user.phone : 'none')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.modeViewHandler
      }, "Edit"));
    });

    _defineProperty(_assertThisInitialized(_this), "editMode", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "ProfileDetails component Edit mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.saveHandler
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.modeViewHandler
      }, "Cancel"));
    });

    _this.state = {
      editView: false,
      loading: true,
      user: {}
    };
    return _this;
  }

  _createClass(ProfileDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xAuth = localStorage.getItem('X-Authorization');
      var xUser = localStorage.getItem('X-User');
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', xAuth);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
      var _this$props$email = this.props.email,
          email = _this$props$email === void 0 ? xUser : _this$props$email;
      fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_SERVER_PATH"], "/").concat(email), requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setState({
          loading: false,
          user: result
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line react/destructuring-assignment
      return this.state.editView ? this.editMode() : this.normalMode();
    }
  }]);

  return ProfileDetails;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


ProfileDetails.propTypes = {
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./components/RegisterForm.js":
/*!************************************!*\
  !*** ./components/RegisterForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! base-64 */ "../node_modules/base-64/base64.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/prop-types */








var pasRegex = '^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))';
var RedisterSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('This field is required'),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('This field is required').email('Must be a valid email'),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('This field is required').min(8, 'Must be 8 characters at least').matches(pasRegex, 'Must contain at least one uppercase, one lowercase, one number'),
  passwordConfirmation: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_3__["ref"]('password'), null], 'Passwords must match').required('Password confirm is required')
});

var MyTextInput = function MyTextInput(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: props.id || props.name,
    className: "inputLabel"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "input"
  }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inputError"
  }, meta.error) : null);
};

var registerUser = function registerUser(values, setSubmitting, resetForm, history) {
  console.log(values.name);
  var name = values.name,
      email = values.email,
      password = values.password;
  var errorResponse = {};
  var myHeaders = new Headers();
  myHeaders.append('Authorization', "Basic ".concat(Object(base_64__WEBPACK_IMPORTED_MODULE_4__["encode"])("".concat(email, ":").concat(password))));
  myHeaders.append('Content-Type', 'application/json');
  var user = JSON.stringify({
    name: name
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: user,
    redirect: 'follow'
  };
  fetch("".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_7__["ACCOUNT_SERVER_PATH"], "/"), requestOptions).then(function (res) {
    return res.json().then(function (data) {
      return {
        data: data,
        xAuth: res.headers.get('X-Authorization'),
        xUser: res.headers.get('X-User')
      };
    });
  }).then(function (_ref2) {
    var data = _ref2.data,
        xAuth = _ref2.xAuth,
        xUser = _ref2.xUser;

    if (xAuth !== null || xUser !== null) {
      localStorage.setItem('X-Authorization', xAuth);
      localStorage.setItem('X-User', xUser);
      setSubmitting(false);
      resetForm();
      history.push(_utils_routes__WEBPACK_IMPORTED_MODULE_6__["homePath"]);
    } else {
      errorResponse.status = data.status;
      errorResponse.message = data.message;
      console.log(xAuth);
      console.log(xUser);
      console.log(errorResponse);
    }
  }).catch(function (error) {
    return console.log('error', error);
  });
};

var RegisterForm = function RegisterForm() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: RedisterSchema,
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting,
          resetForm = _ref3.resetForm;
      setSubmitting(true);
      registerUser(values, setSubmitting, resetForm, history);
    }
  }, function (_ref4) {
    var dirty = _ref4.dirty,
        handleReset = _ref4.handleReset,
        isSubmitting = _ref4.isSubmitting,
        isValid = _ref4.isValid;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Name",
      autoComplete: "off"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Email",
      autoComplete: "off"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
      label: "Password",
      name: "password",
      type: "text",
      placeholder: "Password",
      autoComplete: "off"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTextInput, {
      label: "Confirm password",
      name: "passwordConfirmation",
      type: "text",
      placeholder: "Conform password",
      autoComplete: "off"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button_wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disabled: !isValid || !dirty || isSubmitting,
      type: "submit"
    }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: handleReset,
      type: "button"
    }, "Reset")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchFilters */ "./components/SearchFilters.js");
/* harmony import */ var _SearchMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchMessages */ "./components/SearchMessages.js");
/* harmony import */ var _SearchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchMap */ "./components/SearchMap.js");
/* eslint-disable react/jsx-props-no-spreading */






var Search = function Search(props) {
  var location = props.location;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Search component"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilters__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typePost: location.searchProps.type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMap__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Search.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/SearchFilters.js":
/*!*************************************!*\
  !*** ./components/SearchFilters.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var SearchFilters = function SearchFilters() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "SerchFilters component");
};

SearchFilters.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchFilters);

/***/ }),

/***/ "./components/SearchMap.js":
/*!*********************************!*\
  !*** ./components/SearchMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var SearchMap = function SearchMap() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "SearchMap component");
};

SearchMap.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchMap);

/***/ }),

/***/ "./components/SearchMessage.js":
/*!*************************************!*\
  !*** ./components/SearchMessage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");




var SearchMessage = function SearchMessage(props) {
  var post = props.post,
      lfpostId = props.lfpostId;

  var moreHandler = function moreHandler() {
    // eslint-disable-next-line react/prop-types
    props.history.push("/search/".concat(lfpostId));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "post number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.lfpostId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Type")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.startTimePost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: moreHandler
  }, "More"));
};

SearchMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  lfpostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SearchMessage));

/***/ }),

/***/ "./components/SearchMessageDetails.js":
/*!********************************************!*\
  !*** ./components/SearchMessageDetails.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var SearchMessageDetail = function SearchMessageDetail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "SearchMessageDetail component");
};

SearchMessageDetail.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchMessageDetail);

/***/ }),

/***/ "./components/SearchMessages.js":
/*!**************************************!*\
  !*** ./components/SearchMessages.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ "../node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/requestConst */ "./utils/requestConst.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _SearchMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchMessage */ "./components/SearchMessage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SearchMessages = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchMessages, _React$Component);

  var _super = _createSuper(SearchMessages);

  function SearchMessages(props) {
    var _this;

    _classCallCheck(this, SearchMessages);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchData", function (typePost) {
      var _this$state = _this.state,
          _this$state$currentPa = _this$state.currentPage,
          currentPage = _this$state$currentPa === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE"] : _this$state$currentPa,
          _this$state$count = _this$state.count,
          count = _this$state$count === void 0 ? _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ITEMS_ON_PAGE"] : _this$state$count; // eslint-disable-next-line max-len

      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_4__["SEARCH_SERVER_PATH"], "/?typePost=").concat(typePost, "&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var myHeaders = new Headers();
      myHeaders.append(_utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["xUserHeader"], localStorage.getItem(_utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["xUserHeader"]));
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this.setState({
          posts: result.content,
          typeRequest: typePost,
          currentPage: currentPage + 1
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMore", function () {
      var _this$state2 = _this.state,
          currentPage = _this$state2.currentPage,
          count = _this$state2.count,
          typeRequest = _this$state2.typeRequest;

      _this.setState({
        currentPage: currentPage + 1
      }); // eslint-disable-next-line max-len


      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_4__["SEARCH_SERVER_PATH"], "/?typePost=").concat(typeRequest, "&current_page=").concat(currentPage, "&items_on_page=").concat(count);
      var myHeaders = new Headers();
      myHeaders.append('X-Authorization', _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["TEMPORAL_TOKEN"]);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch(url, requestOptions).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.content.length === 0) {
          _this.setState({
            hasMore: false
          });
        }

        var posts = _this.state.posts;

        _this.setState({
          posts: posts.concat(result.content)
        });
      }).catch(function (error) {
        return console.log('error', error);
      });
    });

    var _typePost = _this.props.typePost;
    _this.state = {
      typeRequest: _typePost,
      posts: [],
      hasMore: true,
      currentPage: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PAGE"],
      count: _utils_requestConst__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ITEMS_ON_PAGE"]
    };
    return _this;
  }

  _createClass(SearchMessages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var typePost = this.props.typePost;
      this.fetchData(typePost);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var typePost = this.props.typePost;

      if (prevProps.typePost !== typePost) {
        this.fetchData(typePost);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          hasMore = _this$state3.hasMore,
          posts = _this$state3.posts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hasMore: hasMore,
        next: this.fetchMore,
        loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Loading..."),
        dataLength: posts.length,
        endMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "The end")
      }, posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: post.lfpostId + Math.random(4),
          post: post,
          lfpostId: post.lfpostId
        });
      })));
    }
  }]);

  return SearchMessages;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SearchMessages.propTypes = {
  typePost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SearchMessages);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_externalPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/externalPath */ "./utils/externalPath.js");
/* harmony import */ var _ui_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Image */ "./components/ui/Image.js");
/* harmony import */ var _styles_info_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/info.css */ "./styles/info.css");
/* harmony import */ var _styles_info_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_info_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/routes */ "./utils/routes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */








var User = /*#__PURE__*/function (_React$Component) {
  _inherits(User, _React$Component);

  var _super = _createSuper(User);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var history = _this.props.history;
      history.push("".concat(_utils_routes__WEBPACK_IMPORTED_MODULE_6__["profilePath"]));
    });

    _this.state = {
      loaded: false,
      user: {}
    };
    return _this;
  }

  _createClass(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var xUser = localStorage.getItem('X-User');
      console.log(xUser);
      var header = {
        'X-Authorization': localStorage.getItem('X-Authorization')
      };
      var url = "".concat(_utils_externalPath__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_SERVER_PATH"], "/").concat(xUser);
      console.log(url);

      try {
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: 'post',
          url: url,
          headers: header
        }).then(function (response) {
          return response.data;
        }).then(function (data) {
          _this2.setState({
            user: data,
            loaded: true
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          user = _this$state.user,
          loaded = _this$state.loaded;
      return loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: user.avatar
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-name",
        onClick: this.handleClick,
        onKeyDown: this.handleClick,
        role: "button",
        tabIndex: "0"
      }, user.name)));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(User));

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileActivities */ "./components/ProfileActivities.js");
/* harmony import */ var _ProfileDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileDetails */ "./components/ProfileDetails.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UserProfile = /*#__PURE__*/function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  var _super = _createSuper(UserProfile);

  function UserProfile(props) {
    var _this;

    _classCallCheck(this, UserProfile);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "toggleViewHandler", function () {
      var activityMode = _this.state.activityMode;
      var toggle = !activityMode;

      _this.setState({
        activityMode: toggle
      });
    });

    _this.state = {
      activityMode: false
    };
    return _this;
  }

  _createClass(UserProfile, [{
    key: "render",
    value: function render() {
      var activityMode = this.state.activityMode;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.toggleViewHandler
      }, "Profile Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.toggleViewHandler
      }, "Profile Activities"), activityMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileActivities__WEBPACK_IMPORTED_MODULE_1__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileDetails__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


UserProfile.propTypes = {};

/***/ }),

/***/ "./components/ui/Button.js":
/*!*********************************!*\
  !*** ./components/ui/Button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/button.css */ "./styles/button.css");
/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_button_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */





var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      disabled = _ref.disabled,
      active = _ref.active,
      rest = _objectWithoutProperties(_ref, ["children", "onClick", "className", "disabled", "active"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', className, {
    active: active
  });

  var onClickAction = function onClickAction(e) {
    if (disabled) {
      return e.preventDefault();
    }

    return onClick(e);
  };

  var Tag = rest.href ? 'a' : 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, rest, {
    className: classes,
    disabled: disabled,
    onClick: onClickAction
  }), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  children: 'Default button',
  onClick: function onClick() {},
  className: '',
  disabled: false,
  active: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ui/Icon.js":
/*!*******************************!*\
  !*** ./components/ui/Icon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_icon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/icon.css */ "./styles/icon.css");
/* harmony import */ var _styles_icon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_icon_css__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */





var Icon = function Icon(props) {
  var type = props.type,
      name = props.name,
      className = props.className,
      onClick = props.onClick,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["type", "name", "className", "onClick", "disabled"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(type, "fa-".concat(name), {
    func: onClick
  }, {
    disabled: disabled
  }, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, rest, {
    className: classes,
    onClick: disabled ? null : onClick,
    onKeyDown: disabled ? null : onClick
  }));
};

Icon.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Icon.defaultProps = {
  name: '',
  className: '',
  onClick: null,
  disabled: false,
  type: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/ui/Image.js":
/*!********************************!*\
  !*** ./components/ui/Image.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable react/jsx-props-no-spreading */




var Image = function Image(props) {
  var src = props.src,
      alt = props.alt,
      className = props.className;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt,
    className: classes
  });
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Image.defaultProps = {
  src: '',
  alt: '',
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/ui/Loader.js":
/*!*********************************!*\
  !*** ./components/ui/Loader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/loader.css */ "./styles/loader.css");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loader_css__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./helpers/convertTime.js":
/*!********************************!*\
  !*** ./helpers/convertTime.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var convertTime = function convertTime(postDate) {
  var millis = Date.now() - Date.parse(postDate);
  var days = Math.floor(millis / (24 * 60 * 60 * 1000));
  var daysms = millis % (24 * 60 * 60 * 1000);
  var hours = Math.floor(daysms / (60 * 60 * 1000));
  return days === 0 ? "".concat(hours, " hours") : "".concat(days, " days ").concat(hours, " hours");
};

/* harmony default export */ __webpack_exports__["default"] = (convertTime);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_fontawesome_free_5_13_0_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css */ "./assets/fonts/fontawesome-free-5.13.0-web/css/all.min.css");
/* harmony import */ var _assets_fonts_fontawesome_free_5_13_0_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_free_5_13_0_web_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./components/App.js");






var application = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(application, document.getElementById('react-app'));

/***/ }),

/***/ "./styles/auth.css":
/*!*************************!*\
  !*** ./styles/auth.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/button.css":
/*!***************************!*\
  !*** ./styles/button.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/icon.css":
/*!*************************!*\
  !*** ./styles/icon.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/info.css":
/*!*************************!*\
  !*** ./styles/info.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/input.css":
/*!**************************!*\
  !*** ./styles/input.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/loader.css":
/*!***************************!*\
  !*** ./styles/loader.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/message.css":
/*!****************************!*\
  !*** ./styles/message.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/navbar.css":
/*!***************************!*\
  !*** ./styles/navbar.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./utils/externalPath.js":
/*!*******************************!*\
  !*** ./utils/externalPath.js ***!
  \*******************************/
/*! exports provided: ACCOUNT_SERVER_PATH, SEARCH_SERVER_PATH, MESSAGE_SERVER_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_SERVER_PATH", function() { return ACCOUNT_SERVER_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SERVER_PATH", function() { return SEARCH_SERVER_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_SERVER_PATH", function() { return MESSAGE_SERVER_PATH; });
/* eslint-disable import/prefer-default-export */
var ACCOUNT_SERVER_PATH = 'https://propets-account-app-test.herokuapp.com/en/account/v1';
var SEARCH_SERVER_PATH = 'https://propets-search-app-test.herokuapp.com/en/search/v1';
var MESSAGE_SERVER_PATH = 'https://propets-messaging-app-test.herokuapp.com/en/message/v1';

/***/ }),

/***/ "./utils/requestConst.js":
/*!*******************************!*\
  !*** ./utils/requestConst.js ***!
  \*******************************/
/*! exports provided: DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE, TEMPORAL_TOKEN, xAuthHeader, xUserHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE", function() { return DEFAULT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ITEMS_ON_PAGE", function() { return DEFAULT_ITEMS_ON_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPORAL_TOKEN", function() { return TEMPORAL_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAuthHeader", function() { return xAuthHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xUserHeader", function() { return xUserHeader; });
var DEFAULT_PAGE = 0;
var DEFAULT_ITEMS_ON_PAGE = 20; // eslint-disable-next-line max-len

var TEMPORAL_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJwbGlza2F2QGdtYWlsLmNvbSIsImlhdCI6MTU4NzMxODY2M30.cmwAVnMxbLxQISKaHSkwHMTXqZ4N93FOI-kWilqshysn2VvOzshLN4N1uYsWRE4RpNp6-ksSgRVR1aComQ3d9w';
var xAuthHeader = 'X-Authorization';
var xUserHeader = 'X-User';

/***/ }),

/***/ "./utils/routes.js":
/*!*************************!*\
  !*** ./utils/routes.js ***!
  \*************************/
/*! exports provided: rootPath, homePath, messagesPath, messageDetailPath, profilePath, searchPath, lostMessages, foundMessages, searchMessagePath, contactPath, userProfileDetails, userProfileActivities, favoritesPath, authPath, landingPath, newPostPath, loadFilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootPath", function() { return rootPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePath", function() { return homePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesPath", function() { return messagesPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageDetailPath", function() { return messageDetailPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilePath", function() { return profilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPath", function() { return searchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lostMessages", function() { return lostMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundMessages", function() { return foundMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMessagePath", function() { return searchMessagePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPath", function() { return contactPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileDetails", function() { return userProfileDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileActivities", function() { return userProfileActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesPath", function() { return favoritesPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authPath", function() { return authPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingPath", function() { return landingPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPostPath", function() { return newPostPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFilePath", function() { return loadFilePath; });
var rootPath = '/';
var homePath = '/home';
var messagesPath = '/messages';
var messageDetailPath = '/messages/:postid';
var profilePath = '/profile';
var searchPath = '/search';
var lostMessages = '/search/lost';
var foundMessages = '/search/found';
var searchMessagePath = '/search/:postid';
var contactPath = '/contact';
var userProfileDetails = '/profile/details';
var userProfileActivities = '/profile/activities';
var favoritesPath = '/favorites';
var authPath = '/auth';
var landingPath = '/landing';
var newPostPath = '/post';
var loadFilePath = '/load';

/***/ })

/******/ });