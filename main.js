/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/war.png */ "./src/images/war.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/forbidden.png */ "./src/icons/forbidden.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/miss.png */ "./src/icons/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/hit.png */ "./src/icons/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  font-size: 2rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;    \n}\n\n#content {\n  width: 100%;\n  height: 100vh;\n}\n\n#container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;    \n}\n\n#title {\n  width: 100%;\n  text-align: center;\n  font-size: 8rem;    \n  background-color: red;\n  margin: .5rem;\n}\n\n/* INTRO + PLAY */\n#name-label,\n#play-again-label {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n#name-input {\n  font-size: 2rem;\n  margin-bottom: 3rem;\n  border: 2px solid black;\n}\n\n#start-button,\n#play-again-button {\n  font-size: 2rem;\n  padding: 1rem;\n  border: 2px solid black;\n  border-radius: 1rem;\n  width: 100%;\n  background-color: rgb(241, 120, 120);\n}\n\n#start-button:hover,\n#play-again-button:hover {\n  background-color: rgb(245, 178, 178);\n}\n\n/* GAME SCREEN */\n#game-screen,\n#gameover-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#gameboard-panel {\n  display: flex;\n  align-items: center;\n}\n\n#placement-container {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, .7);\n  border-radius: 20px;\n  align-items: center;\n  font-size: 1.3rem;\n  padding: 5px;\n}\n\n.axes {\n  display: flex;\n  justify-content: space-evenly;\n  padding: .5rem;\n  width: 100%;\n}\n\n.axis-button {\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);    \n  width: 10rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 1rem;\n  padding: 5px;\n}\n\n.axis-button:hover {\n  border: 2px solid rgb(216, 204, 204);\n}\n\n.axis-button.clicked {\n  border: 2px solid black;\n}\n\n#ship-label {\n  color: red;\n  border-radius: 10px;\n  padding: 5px;\n  width: 100%;\n  text-align: center;\n  font-size: larger;\n}\n\n.frame {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr); \n  width: fit-content;\n}\n\n.square {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  background-color: white;\n  border: 2px solid black;\n  margin: -1px;\n  font-size: 1rem;   \n  padding: .3rem;\n  color: rgb(185, 183, 183);\n}\n\n.ship {\n  background-color: red;\n}\n\n.square.forbidden {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* BATTLE */\n.missed {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.hit {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n@media only screen and (max-width: 1000px) {  \n  #gameboard-panel {\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,eAAe;EACf,mDAAmC;EACnC,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,aAAa;AACf;;AAEA,iBAAiB;AACjB;;EAEE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,oCAAoC;AACtC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA,gBAAgB;AAChB;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yCAAyC;EACzC,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,cAAc;EACd,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kCAAkC;EAClC,YAAY;EACZ,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yDAA8C;EAC9C,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA,WAAW;AACX;EACE,yDAAyC;EACzC,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,yDAAwC;EACxC,oBAAoB;EACpB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n  font-size: 2rem;\n  background: url('./images/war.png');\n  background-size: cover;    \n}\n\n#content {\n  width: 100%;\n  height: 100vh;\n}\n\n#container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;    \n}\n\n#title {\n  width: 100%;\n  text-align: center;\n  font-size: 8rem;    \n  background-color: red;\n  margin: .5rem;\n}\n\n/* INTRO + PLAY */\n#name-label,\n#play-again-label {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n#name-input {\n  font-size: 2rem;\n  margin-bottom: 3rem;\n  border: 2px solid black;\n}\n\n#start-button,\n#play-again-button {\n  font-size: 2rem;\n  padding: 1rem;\n  border: 2px solid black;\n  border-radius: 1rem;\n  width: 100%;\n  background-color: rgb(241, 120, 120);\n}\n\n#start-button:hover,\n#play-again-button:hover {\n  background-color: rgb(245, 178, 178);\n}\n\n/* GAME SCREEN */\n#game-screen,\n#gameover-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#gameboard-panel {\n  display: flex;\n  align-items: center;\n}\n\n#placement-container {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, .7);\n  border-radius: 20px;\n  align-items: center;\n  font-size: 1.3rem;\n  padding: 5px;\n}\n\n.axes {\n  display: flex;\n  justify-content: space-evenly;\n  padding: .5rem;\n  width: 100%;\n}\n\n.axis-button {\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);    \n  width: 10rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 1rem;\n  padding: 5px;\n}\n\n.axis-button:hover {\n  border: 2px solid rgb(216, 204, 204);\n}\n\n.axis-button.clicked {\n  border: 2px solid black;\n}\n\n#ship-label {\n  color: red;\n  border-radius: 10px;\n  padding: 5px;\n  width: 100%;\n  text-align: center;\n  font-size: larger;\n}\n\n.frame {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr); \n  width: fit-content;\n}\n\n.square {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  background-color: white;\n  border: 2px solid black;\n  margin: -1px;\n  font-size: 1rem;   \n  padding: .3rem;\n  color: rgb(185, 183, 183);\n}\n\n.ship {\n  background-color: red;\n}\n\n.square.forbidden {\n  background: url('./icons/forbidden.png') white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/* BATTLE */\n.missed {\n  background: url('./icons/miss.png') white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.hit {\n  background: url('./icons/hit.png') white;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n@media only screen and (max-width: 1000px) {  \n  #gameboard-panel {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


const content = document.getElementById('content');

const Game = () => {
  // GENERAL LAYOUT
  // container for all the elements
  const container = document.createElement('div');
  container.id = 'container';

  // title header
  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = 'BATTLESHIP';
  container.appendChild(title);
  content.appendChild(container);

  // GAME DEFAULTS
  // available modes: placement (when players can place ships)
  // and battle (when players shoot at each other)
  let gameMode = 'placement';
  let currentOrientation = 'horizontal';

  // INTRO SCREEN
  const intro = document.createElement('div');
  intro.id = 'intro';

  // name entry
  const nameEntry = document.createElement('div');

  const nameLabel = document.createElement('label');
  nameLabel.id = 'name-label';
  nameLabel.htmlFor = 'name-input';
  nameLabel.textContent = "Enter player's name";

  const nameInput = document.createElement('input');
  nameInput.id = 'name-input';

  nameEntry.appendChild(nameLabel);
  nameEntry.appendChild(nameInput);

  intro.appendChild(nameEntry);

  // start button
  const startButton = document.createElement('button');
  startButton.id = 'start-button';
  startButton.textContent = 'Start Game';
  startButton.addEventListener('click', () => {
    // hide intro screen
    intro.style.display = 'none';

    // start game
    startGame(nameInput.value);
  });

  intro.appendChild(startButton);
  container.appendChild(intro);

  // GAME SCREEN
  let gameScreen;
  const createGameScreen = () => {
    gameScreen = document.createElement('div');
    gameScreen.id = 'game-screen';

    return gameScreen;
  };

  // START GAME
  let shipInfo;
  let player1;
  let player2;

  // gameboards
  let gb1;
  let gb2;

  let placementPanel;

  const startGame = (player1Name) => {
    // create game screen
    const gameScreen = createGameScreen();
    container.appendChild(gameScreen);

    // create gameboard panel
    const gameboardPanel = document.createElement('div');
    gameboardPanel.id = 'gameboard-panel';
    // gameScreen.appendChild(gameboardPanel);

    // create players
    player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(player1Name);
    player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer');

    // set and hide player2's gameboard
    player2.placeShipRandomly(player2.fleet[0]);
    player2.placeShipRandomly(player2.fleet[1]);
    player2.placeShipRandomly(player2.fleet[2]);
    player2.placeShipRandomly(player2.fleet[3]);
    player2.placeShipRandomly(player2.fleet[4]);

    gb2 = drawGameboard(player2);
    // gameScreen.appendChild(gb2);

    gameboardPanel.appendChild(gb2);

    gb2.style.display = 'none';

    // create player info and axis buttons
    placementPanel = createPlacementPanel(player1);
    gameScreen.appendChild(placementPanel);

    gameScreen.appendChild(gameboardPanel);

    shipInfo = createCurrentShipInfo(player1);
    placementPanel.appendChild(shipInfo);

    

    // show player1's gameboard
    gb1 = drawGameboard(player1);
    // gameScreen.appendChild(gb1);

    gameboardPanel.appendChild(gb1);
  };

  // update current ship
  const updateCurrentShipInfo = (player) => {
    shipInfo.textContent = `Place your ${player.currentShip.type}.`;
  };

  // CREATE PLAYER'S GAMEBOARD    
  const drawGameboard = (player) => {
    const frame = document.createElement('div');
    frame.className = 'frame';

    for (const field of player.gameboard.fields) {
      const square = document.createElement('div');
      square.className = 'square';
      square.textContent = field.x + field.y;
      square.dataset.x = field.x;
      square.dataset.y = field.y;
    
      if (!field.free && player === player1) {
        square.classList.add('ship');
      }      

      square.addEventListener('click', () => {

        // player clicks to place ships
        if (gameMode === 'placement') {
          placeShip(player, frame, field); 
          
          // player clicks to shoot
        } else {
          if (player == player2) {
            fight(field, square);
          }          
        }      
      });

      frame.appendChild(square);
    }

    return frame;
  };

  const placeShip = (player, frame, field) => {
    if (!player.shipsPlaced) {
      player.currentShip.x = field.x;
      player.currentShip.y = field.y;
      player.currentShip.orientation = currentOrientation;
    
      // let player add ship
      let shipCount = player.gameboard.ships.length;
      player.placeShip(player.currentShip);
      if (shipCount < player.gameboard.ships.length) {

        // style all squares that belong to the ship
        for (let shipPart of player.currentShip.fields) {
          let index = player.gameboard.fields.indexOf(shipPart);
          frame.children[index].classList.add('ship');
        }

        // mark fields the player can't place ships on
        for (let field of player.gameboard.fields) {
          if (!field.usable && field.free) {
            let index = player.gameboard.fields.indexOf(field);
            frame.children[index].classList.add('forbidden');
          }
        }
      
        // update current ship, so the next one to add
        if (player.gameboard.ships.length < 5) {
          player.currentShip = player.fleet[player.fleet.indexOf(player.currentShip) + 1];
          updateCurrentShipInfo(player);
        } else {
          player.shipsPlaced = true;
          startBattle();
        }
      }
    }
  };

  // CREATE PLACEMENT PANEL
  // let placementContainer;
  const createPlacementPanel = (player) => {
    const placementContainer = document.createElement('div');
    placementContainer.id = 'placement-container';

    // info text
    const info = document.createElement('div');
    info.textContent = `Hey ${player.name}, place your ships by clicking on the board. Select axis before each placement.`;
    placementContainer.appendChild(info);

    // axes
    const axes = document.createElement('div');
    axes.className = 'axes';

    const horizontalButton = document.createElement('button');
    horizontalButton.textContent = 'HORIZONTAL';
    horizontalButton.className = 'axis-button clicked';

    const verticalButton = document.createElement('button');
    verticalButton.textContent = 'VERTICAL';
    verticalButton.className = 'axis-button';

    horizontalButton.addEventListener('click', () => {
      currentOrientation = 'horizontal';
      horizontalButton.classList.add('clicked');
      verticalButton.classList.remove('clicked');
    });

    verticalButton.addEventListener('click', () => {
      currentOrientation = 'vertical';
      verticalButton.classList.add('clicked');
      horizontalButton.classList.remove('clicked');
    });

    axes.appendChild(horizontalButton);
    axes.appendChild(verticalButton);

    placementContainer.appendChild(axes);

    return placementContainer;
  };

  // CREATE CURRENT SHIP INFO
  const createCurrentShipInfo = (player) => {
    const shipLabel = document.createElement('div');
    shipLabel.id = 'ship-label';
    shipLabel.textContent = `Place your ${player.currentShip.type}.`;

    return shipLabel;
  };

  // GAME 
  const startBattle = () => {
    gameMode = 'battle';
    placementPanel.style.display = 'none';
    // gameScreen.style.flexDirection = 'row';
    gb2.style.display = 'grid';
    gb1.style.transform = 'scale(.8)';

    for (const square of gb1.children) {
      if (square.classList.contains('forbidden')) {
        square.classList.remove('forbidden');
      }
    }
  };

  const fight = (field, square) => {
    player1.shootAt(player2, field);

    if (field.missed) {
      square.classList.add('missed');
    }

    if (field.hit) {
      square.classList.add('hit');
    }

    if (player2.gameboard.allShipsSunk()) {
      isWinner(player1);
    } else {
      const target = player2.shootRandomlyAt(player1);

      const targetIndex = player1.gameboard.fields.indexOf(target);
      const targetSquare = gb1.children[targetIndex];

      if (target.missed) {
        targetSquare.classList.add('missed');
      }

      if (target.hit) {
        targetSquare.classList.add('hit');
      }

      if (player1.gameboard.allShipsSunk()) {
        isWinner(player2);
      }
    };
  };

  const isWinner = (player) => {
    gameScreen.style.display = 'none';
    const gameoverPanel = document.createElement('div');
    gameoverPanel.id = 'gameover-panel';

    const playAgainLabel = document.createElement('div');
    playAgainLabel.id = 'play-again-label';
    playAgainLabel.textContent = `The winner is ${player.name}.`;

    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'play-again-button';
    playAgainButton.textContent = 'Play Again';

    playAgainButton.addEventListener('click', () => {
      playAgain();
    });

    gameoverPanel.appendChild(playAgainLabel);
    gameoverPanel.appendChild(playAgainButton);

    container.appendChild(gameoverPanel);
  };
};

const playAgain = () => {
  content.innerHTML = '';
  Game();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
  const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const yCoords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // array of ships
  const ships = [];

  // create fields
  const fields = [];
  for (const y of yCoords) {
    for (const x of xCoords) {
      fields.push({ x, y, free: true, usable: true, missed: false, hit: false });
    }
  }
  
  const place = (ship) => {
    if (shipAllowed(ship)) {
      reserveFields(ship);
      ships.push(ship);
    }
  };

  const receiveAttack = (xPos, yPos) => {
    // find the field at xPos, yPos
    const attackedField = fields.filter((field) => field.x === xPos && field.y === yPos)[0];

    // check if there is a ship at this position
    const hitShip = attackedField.free === false;

    if (hitShip) {
      // mark field as hit
      attackedField.hit = true;

      // if a ship was hit, identify it
      const hitUnit = ships.filter((ship) => ship.fields.includes(attackedField))[0];

      // check which segment of the ship was hit
      const hitSegment = hitUnit.fields.filter((field) => field === attackedField)[0];
      // find index of hit segment
      const hitSegmentIndex = hitUnit.fields.indexOf(hitSegment);

      // hit the ship
      hitUnit.hit(hitSegmentIndex);

      // check if the ship should sink
      if (hitUnit.isSunk()) {
        const hitUnitIndex = ships.indexOf(hitUnit);
        ships.splice(hitUnitIndex, 1);
      }
    } else {
      attackedField.missed = true;
    }
  };

  // HELPER METHODS
  const reserveFields = (ship) => {
    const startField = fields.filter((field) => field.x === ship.x && field.y === ship.y)[0];

    // reserve fields for ship and disable surrounding fields
    const startFieldIndex = fields.indexOf(startField);
    // horizontal ship
    if (ship.orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        fields[startFieldIndex + i].free = false;
        ship.fields[i] = fields[startFieldIndex + i];

        // disable the field where the ship is...
        fields[startFieldIndex + i].usable = false;

        // and the fields above the ship...
        if (startFieldIndex > 9) {
          fields[startFieldIndex + i - 10].usable = false;
        }
        // and the fields below.
        if (startFieldIndex < 90) {
          fields[startFieldIndex + i + 10].usable = false;
        }
      }
      // disable the fields on both sides of the ship
      if (startFieldIndex % 10 !== 0) {
        fields[startFieldIndex - 1].usable = false;
      }
      if ((startFieldIndex + ship.length) % 10 !== 0) {
        fields[startFieldIndex + ship.length].usable = false;
      }
    // vertical ship
    } else {
      for (let i = 0; i < ship.length; i++) {
        fields[startFieldIndex + 10 * i].free = false;
        ship.fields[i] = fields[startFieldIndex + 10 * i];

        // disable the field where the ship is...
        fields[startFieldIndex + 10 * i].usable = false;

        // and the fields to the left...
        if (startFieldIndex % 10 !== 0) {
          fields[startFieldIndex + 10 * i - 1].usable = false;
        }
        // and the fields to the right.
        if ((startFieldIndex + 1) % 10 !== 0) {
          fields[startFieldIndex + 10 * i + 1].usable = false;
        }
      }
      // disable the fields on both sides of the ship
      if (startFieldIndex > 9) {
        fields[startFieldIndex - 10].usable = false;
      }
      if (startFieldIndex + 10 * (ship.length - 1) < 90) {
        fields[startFieldIndex + 10 * ship.length].usable = false;
      }
    }
  };

  const shipAllowed = (ship) => {
    const startField = fields.filter((field) => field.x === ship.x && field.y === ship.y)[0];
    const startFieldIndex = fields.indexOf(startField);

    if (ship.orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        if (fields[startFieldIndex + i].usable === false
        || (startFieldIndex % 10) > (10 - ship.length)) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (fields[startFieldIndex + 10 * i].usable === false
        || (ship.y) > (11 - ship.length)) {
          return false;
        }
      }
    }
    return true;
  };
  
  const allShipsSunk = () => ships.every((ship) => ship.isSunk());
    
  return {
    fields,
    ships,
    place,
    receiveAttack,
    allShipsSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const Player = (name) => {
  ///
  const fleet = [
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship', 4),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer', 3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine', 3),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('patrol boat', 2),
  ];

  let currentShip = fleet[0];
  let shipsPlaced = false;

  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  
  const placeShip = (ship) => {
    gameboard.place(ship);
  };

  const placeShipRandomly = (fleetShip) => {
    const shipCount = gameboard.ships.length;

    do {
      randomizeShip(fleetShip);
      placeShip(fleetShip);
    } while (shipCount === gameboard.ships.length);
  };

  const shootAt = (enemy, field) => {
    enemy.gameboard.receiveAttack(field.x, field.y);
  };

  const shootRandomlyAt = (enemy) => {
    const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // select random coords
    let x = xCoords[Math.floor(Math.random() * (xCoords.length))];
    let y = Math.floor(Math.random() * 10) + 1;

    // check whether the field was already hit or missed
    // find the field at xPos, yPos
    let target = enemy.gameboard.fields.filter((field) => field.x === x && field.y === y)[0];

    while (target.missed || target.hit) {
      x = xCoords[Math.floor(Math.random() * (xCoords.length))];
      y = Math.floor(Math.random() * 10) + 1;
      target = enemy.gameboard.fields.filter((field) => field.x === x && field.y === y)[0];
    }

    // shootAt(enemy, x, y);
    shootAt(enemy, target);

    return target;
  };

  // HELPER METHODS
  const randomizeShip = (ship) => {
    // select random orientation
    const orientationNumber = Math.floor(Math.random() * 10) + 1;
    const orientation = orientationNumber < 6 ? 'horizontal' : 'vertical';

    const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // select random coords
    let x = xCoords[Math.floor(Math.random() * (xCoords.length - ship.length))];
    let y = Math.floor(Math.random() * (10 - ship.length)) + 1;

    if (orientation === 'horizontal' && xCoords.indexOf(x) + ship.length > 10) {
      x = xCoords[Math.floor(Math.random() * (xCoords.length - ship.length))];
    }

    if (orientation === 'vertical' && y + ship.length > 11) {
      y = Math.floor(Math.random() * (10 - ship.length)) + 1;
    }

    // set ship
    ship.x = x;
    ship.y = y;
    ship.orientation = orientation;
  };

  return {
    name,
    gameboard,
    fleet,
    currentShip,
    placeShip,
    placeShipRandomly,
    shootAt,
    shootRandomlyAt,
    shipsPlaced,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (type, length, x = 'A', y = 1, orientation = 'horizontal') => {
  const fields = [];
  const hits = [];

  for (let i = 0; i < length; i++) {
    hits.push(false);
  }

  const hit = (position) => {
    hits[position] = true;
  };

  const isSunk = () => hits.every((pos) => pos === true);

  return {
    type,
    length,
    orientation,
    x,
    y,
    fields,
    hits,
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/icons/forbidden.png":
/*!*********************************!*\
  !*** ./src/icons/forbidden.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae11e786a4a9e78a6a2d.png";

/***/ }),

/***/ "./src/icons/hit.png":
/*!***************************!*\
  !*** ./src/icons/hit.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78265266a1842ea10443.png";

/***/ }),

/***/ "./src/icons/miss.png":
/*!****************************!*\
  !*** ./src/icons/miss.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ce8fd4bcd81bc0e7e50.png";

/***/ }),

/***/ "./src/images/war.png":
/*!****************************!*\
  !*** ./src/images/war.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec2b9aa0c6b0bc0afac2.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



// Initialize
const game = (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkI7O0FBRWxEO0FBQ0EsYUFBYSxpREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3dhci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2ZvcmJpZGRlbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL21pc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4cmVtOyAgICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIG1hcmdpbjogLjVyZW07XFxufVxcblxcbi8qIElOVFJPICsgUExBWSAqL1xcbiNuYW1lLWxhYmVsLFxcbiNwbGF5LWFnYWluLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI25hbWUtaW5wdXQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc3RhcnQtYnV0dG9uLFxcbiNwbGF5LWFnYWluLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMjAsIDEyMCk7XFxufVxcblxcbiNzdGFydC1idXR0b246aG92ZXIsXFxuI3BsYXktYWdhaW4tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE3OCwgMTc4KTtcXG59XFxuXFxuLyogR0FNRSBTQ1JFRU4gKi9cXG4jZ2FtZS1zY3JlZW4sXFxuI2dhbWVvdmVyLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVib2FyZC1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYWNlbWVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5heGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5heGlzLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7ICAgIFxcbiAgd2lkdGg6IDEwcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5heGlzLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE2LCAyMDQsIDIwNCk7XFxufVxcblxcbi5heGlzLWJ1dHRvbi5jbGlja2VkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2hpcC1sYWJlbCB7XFxuICBjb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5mcmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTsgXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogLTFweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTsgICBcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgY29sb3I6IHJnYigxODUsIDE4MywgMTgzKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc3F1YXJlLmZvcmJpZGRlbiB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4vKiBCQVRUTEUgKi9cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSB3aGl0ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHsgIFxcbiAgI2dhbWVib2FyZC1wYW5lbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixtREFBbUM7RUFDbkMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjtBQUNqQjs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBLGdCQUFnQjtBQUNoQjs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlEQUE4QztFQUM5QyxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx5REFBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5REFBd0M7RUFDeEMsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvd2FyLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcbn1cXG5cXG4jdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDhyZW07ICAgIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLyogSU5UUk8gKyBQTEFZICovXFxuI25hbWUtbGFiZWwsXFxuI3BsYXktYWdhaW4tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzdGFydC1idXR0b24sXFxuI3BsYXktYWdhaW4tYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDEyMCwgMTIwKTtcXG59XFxuXFxuI3N0YXJ0LWJ1dHRvbjpob3ZlcixcXG4jcGxheS1hZ2Fpbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTc4LCAxNzgpO1xcbn1cXG5cXG4vKiBHQU1FIFNDUkVFTiAqL1xcbiNnYW1lLXNjcmVlbixcXG4jZ2FtZW92ZXItcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxhY2VtZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmF4ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgICAgXFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTYsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uLmNsaWNrZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaGlwLWxhYmVsIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyBcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyAgIFxcbiAgcGFkZGluZzogLjNyZW07XFxuICBjb2xvcjogcmdiKDE4NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zcXVhcmUuZm9yYmlkZGVuIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9pY29ucy9mb3JiaWRkZW4ucG5nJykgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi8qIEJBVFRMRSAqL1xcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ljb25zL21pc3MucG5nJykgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ljb25zL2hpdC5wbmcnKSB3aGl0ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHsgIFxcbiAgI2dhbWVib2FyZC1wYW5lbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgLy8gR0VORVJBTCBMQVlPVVRcbiAgLy8gY29udGFpbmVyIGZvciBhbGwgdGhlIGVsZW1lbnRzXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcblxuICAvLyB0aXRsZSBoZWFkZXJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIC8vIEdBTUUgREVGQVVMVFNcbiAgLy8gYXZhaWxhYmxlIG1vZGVzOiBwbGFjZW1lbnQgKHdoZW4gcGxheWVycyBjYW4gcGxhY2Ugc2hpcHMpXG4gIC8vIGFuZCBiYXR0bGUgKHdoZW4gcGxheWVycyBzaG9vdCBhdCBlYWNoIG90aGVyKVxuICBsZXQgZ2FtZU1vZGUgPSAncGxhY2VtZW50JztcbiAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcblxuICAvLyBJTlRSTyBTQ1JFRU5cbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW50cm8uaWQgPSAnaW50cm8nO1xuXG4gIC8vIG5hbWUgZW50cnlcbiAgY29uc3QgbmFtZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbmFtZUxhYmVsLmlkID0gJ25hbWUtbGFiZWwnO1xuICBuYW1lTGFiZWwuaHRtbEZvciA9ICduYW1lLWlucHV0JztcbiAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBwbGF5ZXIncyBuYW1lXCI7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuXG4gIG5hbWVFbnRyeS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICBuYW1lRW50cnkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBpbnRyby5hcHBlbmRDaGlsZChuYW1lRW50cnkpO1xuXG4gIC8vIHN0YXJ0IGJ1dHRvblxuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGFydEJ1dHRvbi5pZCA9ICdzdGFydC1idXR0b24nO1xuICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gaGlkZSBpbnRybyBzY3JlZW5cbiAgICBpbnRyby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgLy8gc3RhcnQgZ2FtZVxuICAgIHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsdWUpO1xuICB9KTtcblxuICBpbnRyby5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybyk7XG5cbiAgLy8gR0FNRSBTQ1JFRU5cbiAgbGV0IGdhbWVTY3JlZW47XG4gIGNvbnN0IGNyZWF0ZUdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gICAgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVTY3JlZW4uaWQgPSAnZ2FtZS1zY3JlZW4nO1xuXG4gICAgcmV0dXJuIGdhbWVTY3JlZW47XG4gIH07XG5cbiAgLy8gU1RBUlQgR0FNRVxuICBsZXQgc2hpcEluZm87XG4gIGxldCBwbGF5ZXIxO1xuICBsZXQgcGxheWVyMjtcblxuICAvLyBnYW1lYm9hcmRzXG4gIGxldCBnYjE7XG4gIGxldCBnYjI7XG5cbiAgbGV0IHBsYWNlbWVudFBhbmVsO1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxTmFtZSkgPT4ge1xuICAgIC8vIGNyZWF0ZSBnYW1lIHNjcmVlblxuICAgIGNvbnN0IGdhbWVTY3JlZW4gPSBjcmVhdGVHYW1lU2NyZWVuKCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVTY3JlZW4pO1xuXG4gICAgLy8gY3JlYXRlIGdhbWVib2FyZCBwYW5lbFxuICAgIGNvbnN0IGdhbWVib2FyZFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkUGFuZWwuaWQgPSAnZ2FtZWJvYXJkLXBhbmVsJztcbiAgICAvLyBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVib2FyZFBhbmVsKTtcblxuICAgIC8vIGNyZWF0ZSBwbGF5ZXJzXG4gICAgcGxheWVyMSA9IFBsYXllcihwbGF5ZXIxTmFtZSk7XG4gICAgcGxheWVyMiA9IFBsYXllcignQ29tcHV0ZXInKTtcblxuICAgIC8vIHNldCBhbmQgaGlkZSBwbGF5ZXIyJ3MgZ2FtZWJvYXJkXG4gICAgcGxheWVyMi5wbGFjZVNoaXBSYW5kb21seShwbGF5ZXIyLmZsZWV0WzBdKTtcbiAgICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbMV0pO1xuICAgIHBsYXllcjIucGxhY2VTaGlwUmFuZG9tbHkocGxheWVyMi5mbGVldFsyXSk7XG4gICAgcGxheWVyMi5wbGFjZVNoaXBSYW5kb21seShwbGF5ZXIyLmZsZWV0WzNdKTtcbiAgICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbNF0pO1xuXG4gICAgZ2IyID0gZHJhd0dhbWVib2FyZChwbGF5ZXIyKTtcbiAgICAvLyBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGdiMik7XG5cbiAgICBnYW1lYm9hcmRQYW5lbC5hcHBlbmRDaGlsZChnYjIpO1xuXG4gICAgZ2IyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvLyBjcmVhdGUgcGxheWVyIGluZm8gYW5kIGF4aXMgYnV0dG9uc1xuICAgIHBsYWNlbWVudFBhbmVsID0gY3JlYXRlUGxhY2VtZW50UGFuZWwocGxheWVyMSk7XG4gICAgZ2FtZVNjcmVlbi5hcHBlbmRDaGlsZChwbGFjZW1lbnRQYW5lbCk7XG5cbiAgICBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGdhbWVib2FyZFBhbmVsKTtcblxuICAgIHNoaXBJbmZvID0gY3JlYXRlQ3VycmVudFNoaXBJbmZvKHBsYXllcjEpO1xuICAgIHBsYWNlbWVudFBhbmVsLmFwcGVuZENoaWxkKHNoaXBJbmZvKTtcblxuICAgIFxuXG4gICAgLy8gc2hvdyBwbGF5ZXIxJ3MgZ2FtZWJvYXJkXG4gICAgZ2IxID0gZHJhd0dhbWVib2FyZChwbGF5ZXIxKTtcbiAgICAvLyBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKGdiMSk7XG5cbiAgICBnYW1lYm9hcmRQYW5lbC5hcHBlbmRDaGlsZChnYjEpO1xuICB9O1xuXG4gIC8vIHVwZGF0ZSBjdXJyZW50IHNoaXBcbiAgY29uc3QgdXBkYXRlQ3VycmVudFNoaXBJbmZvID0gKHBsYXllcikgPT4ge1xuICAgIHNoaXBJbmZvLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtwbGF5ZXIuY3VycmVudFNoaXAudHlwZX0uYDtcbiAgfTtcblxuICAvLyBDUkVBVEUgUExBWUVSJ1MgR0FNRUJPQVJEICAgIFxuICBjb25zdCBkcmF3R2FtZWJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJhbWUuY2xhc3NOYW1lID0gJ2ZyYW1lJztcblxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgcGxheWVyLmdhbWVib2FyZC5maWVsZHMpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gZmllbGQueCArIGZpZWxkLnk7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0gZmllbGQueDtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSBmaWVsZC55O1xuICAgIFxuICAgICAgaWYgKCFmaWVsZC5mcmVlICYmIHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfSAgICAgIFxuXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gcGxheWVyIGNsaWNrcyB0byBwbGFjZSBzaGlwc1xuICAgICAgICBpZiAoZ2FtZU1vZGUgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgcGxhY2VTaGlwKHBsYXllciwgZnJhbWUsIGZpZWxkKTsgXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gcGxheWVyIGNsaWNrcyB0byBzaG9vdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwbGF5ZXIgPT0gcGxheWVyMikge1xuICAgICAgICAgICAgZmlnaHQoZmllbGQsIHNxdWFyZSk7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgfSAgICAgIFxuICAgICAgfSk7XG5cbiAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwbGF5ZXIsIGZyYW1lLCBmaWVsZCkgPT4ge1xuICAgIGlmICghcGxheWVyLnNoaXBzUGxhY2VkKSB7XG4gICAgICBwbGF5ZXIuY3VycmVudFNoaXAueCA9IGZpZWxkLng7XG4gICAgICBwbGF5ZXIuY3VycmVudFNoaXAueSA9IGZpZWxkLnk7XG4gICAgICBwbGF5ZXIuY3VycmVudFNoaXAub3JpZW50YXRpb24gPSBjdXJyZW50T3JpZW50YXRpb247XG4gICAgXG4gICAgICAvLyBsZXQgcGxheWVyIGFkZCBzaGlwXG4gICAgICBsZXQgc2hpcENvdW50ID0gcGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGg7XG4gICAgICBwbGF5ZXIucGxhY2VTaGlwKHBsYXllci5jdXJyZW50U2hpcCk7XG4gICAgICBpZiAoc2hpcENvdW50IDwgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGgpIHtcblxuICAgICAgICAvLyBzdHlsZSBhbGwgc3F1YXJlcyB0aGF0IGJlbG9uZyB0byB0aGUgc2hpcFxuICAgICAgICBmb3IgKGxldCBzaGlwUGFydCBvZiBwbGF5ZXIuY3VycmVudFNoaXAuZmllbGRzKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gcGxheWVyLmdhbWVib2FyZC5maWVsZHMuaW5kZXhPZihzaGlwUGFydCk7XG4gICAgICAgICAgZnJhbWUuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hcmsgZmllbGRzIHRoZSBwbGF5ZXIgY2FuJ3QgcGxhY2Ugc2hpcHMgb25cbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgcGxheWVyLmdhbWVib2FyZC5maWVsZHMpIHtcbiAgICAgICAgICBpZiAoIWZpZWxkLnVzYWJsZSAmJiBmaWVsZC5mcmVlKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwbGF5ZXIuZ2FtZWJvYXJkLmZpZWxkcy5pbmRleE9mKGZpZWxkKTtcbiAgICAgICAgICAgIGZyYW1lLmNoaWxkcmVuW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb3JiaWRkZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgY3VycmVudCBzaGlwLCBzbyB0aGUgbmV4dCBvbmUgdG8gYWRkXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFNoaXAgPSBwbGF5ZXIuZmxlZXRbcGxheWVyLmZsZWV0LmluZGV4T2YocGxheWVyLmN1cnJlbnRTaGlwKSArIDFdO1xuICAgICAgICAgIHVwZGF0ZUN1cnJlbnRTaGlwSW5mbyhwbGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5zaGlwc1BsYWNlZCA9IHRydWU7XG4gICAgICAgICAgc3RhcnRCYXR0bGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBDUkVBVEUgUExBQ0VNRU5UIFBBTkVMXG4gIC8vIGxldCBwbGFjZW1lbnRDb250YWluZXI7XG4gIGNvbnN0IGNyZWF0ZVBsYWNlbWVudFBhbmVsID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHBsYWNlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5pZCA9ICdwbGFjZW1lbnQtY29udGFpbmVyJztcblxuICAgIC8vIGluZm8gdGV4dFxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gYEhleSAke3BsYXllci5uYW1lfSwgcGxhY2UgeW91ciBzaGlwcyBieSBjbGlja2luZyBvbiB0aGUgYm9hcmQuIFNlbGVjdCBheGlzIGJlZm9yZSBlYWNoIHBsYWNlbWVudC5gO1xuICAgIHBsYWNlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIC8vIGF4ZXNcbiAgICBjb25zdCBheGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXhlcy5jbGFzc05hbWUgPSAnYXhlcyc7XG5cbiAgICBjb25zdCBob3Jpem9udGFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9yaXpvbnRhbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIT1JJWk9OVEFMJztcbiAgICBob3Jpem9udGFsQnV0dG9uLmNsYXNzTmFtZSA9ICdheGlzLWJ1dHRvbiBjbGlja2VkJztcblxuICAgIGNvbnN0IHZlcnRpY2FsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdmVydGljYWxCdXR0b24udGV4dENvbnRlbnQgPSAnVkVSVElDQUwnO1xuICAgIHZlcnRpY2FsQnV0dG9uLmNsYXNzTmFtZSA9ICdheGlzLWJ1dHRvbic7XG5cbiAgICBob3Jpem9udGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3VycmVudE9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgICAgaG9yaXpvbnRhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICB2ZXJ0aWNhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgfSk7XG5cbiAgICB2ZXJ0aWNhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICB2ZXJ0aWNhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICBob3Jpem9udGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcblxuICAgIGF4ZXMuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbEJ1dHRvbik7XG4gICAgYXhlcy5hcHBlbmRDaGlsZCh2ZXJ0aWNhbEJ1dHRvbik7XG5cbiAgICBwbGFjZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXhlcyk7XG5cbiAgICByZXR1cm4gcGxhY2VtZW50Q29udGFpbmVyO1xuICB9O1xuXG4gIC8vIENSRUFURSBDVVJSRU5UIFNISVAgSU5GT1xuICBjb25zdCBjcmVhdGVDdXJyZW50U2hpcEluZm8gPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcExhYmVsLmlkID0gJ3NoaXAtbGFiZWwnO1xuICAgIHNoaXBMYWJlbC50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7cGxheWVyLmN1cnJlbnRTaGlwLnR5cGV9LmA7XG5cbiAgICByZXR1cm4gc2hpcExhYmVsO1xuICB9O1xuXG4gIC8vIEdBTUUgXG4gIGNvbnN0IHN0YXJ0QmF0dGxlID0gKCkgPT4ge1xuICAgIGdhbWVNb2RlID0gJ2JhdHRsZSc7XG4gICAgcGxhY2VtZW50UGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBnYW1lU2NyZWVuLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICBnYjIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBnYjEuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKC44KSc7XG5cbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBnYjEuY2hpbGRyZW4pIHtcbiAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JiaWRkZW4nKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnZm9yYmlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpZ2h0ID0gKGZpZWxkLCBzcXVhcmUpID0+IHtcbiAgICBwbGF5ZXIxLnNob290QXQocGxheWVyMiwgZmllbGQpO1xuXG4gICAgaWYgKGZpZWxkLm1pc3NlZCkge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC5oaXQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyMi5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGlzV2lubmVyKHBsYXllcjEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBwbGF5ZXIyLnNob290UmFuZG9tbHlBdChwbGF5ZXIxKTtcblxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBwbGF5ZXIxLmdhbWVib2FyZC5maWVsZHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gZ2IxLmNoaWxkcmVuW3RhcmdldEluZGV4XTtcblxuICAgICAgaWYgKHRhcmdldC5taXNzZWQpIHtcbiAgICAgICAgdGFyZ2V0U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmhpdCkge1xuICAgICAgICB0YXJnZXRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBpc1dpbm5lcihwbGF5ZXIyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGlzV2lubmVyID0gKHBsYXllcikgPT4ge1xuICAgIGdhbWVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBnYW1lb3ZlclBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZW92ZXJQYW5lbC5pZCA9ICdnYW1lb3Zlci1wYW5lbCc7XG5cbiAgICBjb25zdCBwbGF5QWdhaW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXlBZ2FpbkxhYmVsLmlkID0gJ3BsYXktYWdhaW4tbGFiZWwnO1xuICAgIHBsYXlBZ2FpbkxhYmVsLnRleHRDb250ZW50ID0gYFRoZSB3aW5uZXIgaXMgJHtwbGF5ZXIubmFtZX0uYDtcblxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYXlBZ2FpbkJ1dHRvbi5pZCA9ICdwbGF5LWFnYWluLWJ1dHRvbic7XG4gICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4nO1xuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheUFnYWluKCk7XG4gICAgfSk7XG5cbiAgICBnYW1lb3ZlclBhbmVsLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkxhYmVsKTtcbiAgICBnYW1lb3ZlclBhbmVsLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZW92ZXJQYW5lbCk7XG4gIH07XG59O1xuXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIEdhbWUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHhDb29yZHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgY29uc3QgeUNvb3JkcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG5cbiAgLy8gYXJyYXkgb2Ygc2hpcHNcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAvLyBjcmVhdGUgZmllbGRzXG4gIGNvbnN0IGZpZWxkcyA9IFtdO1xuICBmb3IgKGNvbnN0IHkgb2YgeUNvb3Jkcykge1xuICAgIGZvciAoY29uc3QgeCBvZiB4Q29vcmRzKSB7XG4gICAgICBmaWVsZHMucHVzaCh7IHgsIHksIGZyZWU6IHRydWUsIHVzYWJsZTogdHJ1ZSwgbWlzc2VkOiBmYWxzZSwgaGl0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnN0IHBsYWNlID0gKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcEFsbG93ZWQoc2hpcCkpIHtcbiAgICAgIHJlc2VydmVGaWVsZHMoc2hpcCk7XG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhQb3MsIHlQb3MpID0+IHtcbiAgICAvLyBmaW5kIHRoZSBmaWVsZCBhdCB4UG9zLCB5UG9zXG4gICAgY29uc3QgYXR0YWNrZWRGaWVsZCA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSB4UG9zICYmIGZpZWxkLnkgPT09IHlQb3MpWzBdO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBzaGlwIGF0IHRoaXMgcG9zaXRpb25cbiAgICBjb25zdCBoaXRTaGlwID0gYXR0YWNrZWRGaWVsZC5mcmVlID09PSBmYWxzZTtcblxuICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICAvLyBtYXJrIGZpZWxkIGFzIGhpdFxuICAgICAgYXR0YWNrZWRGaWVsZC5oaXQgPSB0cnVlO1xuXG4gICAgICAvLyBpZiBhIHNoaXAgd2FzIGhpdCwgaWRlbnRpZnkgaXRcbiAgICAgIGNvbnN0IGhpdFVuaXQgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAuZmllbGRzLmluY2x1ZGVzKGF0dGFja2VkRmllbGQpKVswXTtcblxuICAgICAgLy8gY2hlY2sgd2hpY2ggc2VnbWVudCBvZiB0aGUgc2hpcCB3YXMgaGl0XG4gICAgICBjb25zdCBoaXRTZWdtZW50ID0gaGl0VW5pdC5maWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQgPT09IGF0dGFja2VkRmllbGQpWzBdO1xuICAgICAgLy8gZmluZCBpbmRleCBvZiBoaXQgc2VnbWVudFxuICAgICAgY29uc3QgaGl0U2VnbWVudEluZGV4ID0gaGl0VW5pdC5maWVsZHMuaW5kZXhPZihoaXRTZWdtZW50KTtcblxuICAgICAgLy8gaGl0IHRoZSBzaGlwXG4gICAgICBoaXRVbml0LmhpdChoaXRTZWdtZW50SW5kZXgpO1xuXG4gICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBzaG91bGQgc2lua1xuICAgICAgaWYgKGhpdFVuaXQuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3QgaGl0VW5pdEluZGV4ID0gc2hpcHMuaW5kZXhPZihoaXRVbml0KTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGhpdFVuaXRJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dGFja2VkRmllbGQubWlzc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSEVMUEVSIE1FVEhPRFNcbiAgY29uc3QgcmVzZXJ2ZUZpZWxkcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRGaWVsZCA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSBzaGlwLnggJiYgZmllbGQueSA9PT0gc2hpcC55KVswXTtcblxuICAgIC8vIHJlc2VydmUgZmllbGRzIGZvciBzaGlwIGFuZCBkaXNhYmxlIHN1cnJvdW5kaW5nIGZpZWxkc1xuICAgIGNvbnN0IHN0YXJ0RmllbGRJbmRleCA9IGZpZWxkcy5pbmRleE9mKHN0YXJ0RmllbGQpO1xuICAgIC8vIGhvcml6b250YWwgc2hpcFxuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0uZnJlZSA9IGZhbHNlO1xuICAgICAgICBzaGlwLmZpZWxkc1tpXSA9IGZpZWxkc1tzdGFydEZpZWxkSW5kZXggKyBpXTtcblxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBmaWVsZCB3aGVyZSB0aGUgc2hpcCBpcy4uLlxuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0udXNhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gYW5kIHRoZSBmaWVsZHMgYWJvdmUgdGhlIHNoaXAuLi5cbiAgICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCA+IDkpIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaSAtIDEwXS51c2FibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbmQgdGhlIGZpZWxkcyBiZWxvdy5cbiAgICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCA8IDkwKSB7XG4gICAgICAgICAgZmllbGRzW3N0YXJ0RmllbGRJbmRleCArIGkgKyAxMF0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgdGhlIGZpZWxkcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBzaGlwXG4gICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ICUgMTAgIT09IDApIHtcbiAgICAgICAgZmllbGRzW3N0YXJ0RmllbGRJbmRleCAtIDFdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChzdGFydEZpZWxkSW5kZXggKyBzaGlwLmxlbmd0aCkgJSAxMCAhPT0gMCkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgc2hpcC5sZW5ndGhdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIC8vIHZlcnRpY2FsIHNoaXBcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpZWxkc1tzdGFydEZpZWxkSW5kZXggKyAxMCAqIGldLmZyZWUgPSBmYWxzZTtcbiAgICAgICAgc2hpcC5maWVsZHNbaV0gPSBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpXTtcblxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBmaWVsZCB3aGVyZSB0aGUgc2hpcCBpcy4uLlxuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpXS51c2FibGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBhbmQgdGhlIGZpZWxkcyB0byB0aGUgbGVmdC4uLlxuICAgICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ICUgMTAgIT09IDApIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpIC0gMV0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYW5kIHRoZSBmaWVsZHMgdG8gdGhlIHJpZ2h0LlxuICAgICAgICBpZiAoKHN0YXJ0RmllbGRJbmRleCArIDEpICUgMTAgIT09IDApIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpICsgMV0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgdGhlIGZpZWxkcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBzaGlwXG4gICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ID4gOSkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4IC0gMTBdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCArIDEwICogKHNoaXAubGVuZ3RoIC0gMSkgPCA5MCkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBzaGlwLmxlbmd0aF0udXNhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNoaXBBbGxvd2VkID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBzdGFydEZpZWxkID0gZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkLnggPT09IHNoaXAueCAmJiBmaWVsZC55ID09PSBzaGlwLnkpWzBdO1xuICAgIGNvbnN0IHN0YXJ0RmllbGRJbmRleCA9IGZpZWxkcy5pbmRleE9mKHN0YXJ0RmllbGQpO1xuXG4gICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0udXNhYmxlID09PSBmYWxzZVxuICAgICAgICB8fCAoc3RhcnRGaWVsZEluZGV4ICUgMTApID4gKDEwIC0gc2hpcC5sZW5ndGgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZmllbGRzW3N0YXJ0RmllbGRJbmRleCArIDEwICogaV0udXNhYmxlID09PSBmYWxzZVxuICAgICAgICB8fCAoc2hpcC55KSA+ICgxMSAtIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICBcbiAgcmV0dXJuIHtcbiAgICBmaWVsZHMsXG4gICAgc2hpcHMsXG4gICAgcGxhY2UsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAvLy9cbiAgY29uc3QgZmxlZXQgPSBbXG4gICAgU2hpcCgnY2FycmllcicsIDUpLFxuICAgIFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgICBTaGlwKCdkZXN0cm95ZXInLCAzKSxcbiAgICBTaGlwKCdzdWJtYXJpbmUnLCAzKSxcbiAgICBTaGlwKCdwYXRyb2wgYm9hdCcsIDIpLFxuICBdO1xuXG4gIGxldCBjdXJyZW50U2hpcCA9IGZsZWV0WzBdO1xuICBsZXQgc2hpcHNQbGFjZWQgPSBmYWxzZTtcblxuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgZ2FtZWJvYXJkLnBsYWNlKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbWx5ID0gKGZsZWV0U2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBDb3VudCA9IGdhbWVib2FyZC5zaGlwcy5sZW5ndGg7XG5cbiAgICBkbyB7XG4gICAgICByYW5kb21pemVTaGlwKGZsZWV0U2hpcCk7XG4gICAgICBwbGFjZVNoaXAoZmxlZXRTaGlwKTtcbiAgICB9IHdoaWxlIChzaGlwQ291bnQgPT09IGdhbWVib2FyZC5zaGlwcy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IHNob290QXQgPSAoZW5lbXksIGZpZWxkKSA9PiB7XG4gICAgZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soZmllbGQueCwgZmllbGQueSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvb3RSYW5kb21seUF0ID0gKGVuZW15KSA9PiB7XG4gICAgY29uc3QgeENvb3JkcyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gICAgLy8gc2VsZWN0IHJhbmRvbSBjb29yZHNcbiAgICBsZXQgeCA9IHhDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHhDb29yZHMubGVuZ3RoKSldO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhlIGZpZWxkIHdhcyBhbHJlYWR5IGhpdCBvciBtaXNzZWRcbiAgICAvLyBmaW5kIHRoZSBmaWVsZCBhdCB4UG9zLCB5UG9zXG4gICAgbGV0IHRhcmdldCA9IGVuZW15LmdhbWVib2FyZC5maWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQueCA9PT0geCAmJiBmaWVsZC55ID09PSB5KVswXTtcblxuICAgIHdoaWxlICh0YXJnZXQubWlzc2VkIHx8IHRhcmdldC5oaXQpIHtcbiAgICAgIHggPSB4Q29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh4Q29vcmRzLmxlbmd0aCkpXTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgdGFyZ2V0ID0gZW5lbXkuZ2FtZWJvYXJkLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSB4ICYmIGZpZWxkLnkgPT09IHkpWzBdO1xuICAgIH1cblxuICAgIC8vIHNob290QXQoZW5lbXksIHgsIHkpO1xuICAgIHNob290QXQoZW5lbXksIHRhcmdldCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIC8vIEhFTFBFUiBNRVRIT0RTXG4gIGNvbnN0IHJhbmRvbWl6ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgIC8vIHNlbGVjdCByYW5kb20gb3JpZW50YXRpb25cbiAgICBjb25zdCBvcmllbnRhdGlvbk51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbk51bWJlciA8IDYgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuXG4gICAgY29uc3QgeENvb3JkcyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gICAgLy8gc2VsZWN0IHJhbmRvbSBjb29yZHNcbiAgICBsZXQgeCA9IHhDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHhDb29yZHMubGVuZ3RoIC0gc2hpcC5sZW5ndGgpKV07XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwLmxlbmd0aCkpICsgMTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHhDb29yZHMuaW5kZXhPZih4KSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgIHggPSB4Q29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh4Q29vcmRzLmxlbmd0aCAtIHNoaXAubGVuZ3RoKSldO1xuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiB5ICsgc2hpcC5sZW5ndGggPiAxMSkge1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHNoaXAubGVuZ3RoKSkgKyAxO1xuICAgIH1cblxuICAgIC8vIHNldCBzaGlwXG4gICAgc2hpcC54ID0geDtcbiAgICBzaGlwLnkgPSB5O1xuICAgIHNoaXAub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZWJvYXJkLFxuICAgIGZsZWV0LFxuICAgIGN1cnJlbnRTaGlwLFxuICAgIHBsYWNlU2hpcCxcbiAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICBzaG9vdEF0LFxuICAgIHNob290UmFuZG9tbHlBdCxcbiAgICBzaGlwc1BsYWNlZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAodHlwZSwgbGVuZ3RoLCB4ID0gJ0EnLCB5ID0gMSwgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpID0+IHtcbiAgY29uc3QgZmllbGRzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaGl0cy5wdXNoKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGhpdHNbcG9zaXRpb25dID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzLmV2ZXJ5KChwb3MpID0+IHBvcyA9PT0gdHJ1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlLFxuICAgIGxlbmd0aCxcbiAgICBvcmllbnRhdGlvbixcbiAgICB4LFxuICAgIHksXG4gICAgZmllbGRzLFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZSwgeyBjb250ZW50LCBjb250YWluZXIgfSBmcm9tICcuL2dhbWUnO1xuXG4vLyBJbml0aWFsaXplXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9