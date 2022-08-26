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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  font-size: 2rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;    \n}\n\n#content {\n  width: 100%;\n  height: 100vh;\n}\n\n#container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;    \n}\n\n#title {\n  width: 100%;\n  text-align: center;\n  font-size: 8rem;    \n  background-color: red;\n  margin: .5rem;\n}\n\n/* INTRO */\n#name-label {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n#name-input {\n  font-size: 2rem;\n  margin-bottom: 3rem;\n  border: 2px solid black;\n}\n\n#start-button {\n  font-size: 2rem;\n  padding: 1rem;\n  border: 2px solid black;\n  border-radius: 1rem;\n  width: 100%;\n  background-color: rgb(241, 120, 120);\n}\n\n#start-button:hover {\n  background-color: rgb(245, 178, 178);\n}\n\n/* GAMEBOARD */\n#gb-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-info {\n  font-size: 1.5rem;\n  /* margin-bottom: 1rem; */\n  background-color: white;\n  padding: 5px;\n}\n\n.axes {\n  display: flex;\n  justify-content: space-evenly;\n  padding: .5rem;\n  width: 100%;\n}\n\n.axis-button {\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);    \n  width: 10rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 1rem;\n  padding: 5px;\n}\n\n.axis-button:hover {\n  border: 2px solid rgb(216, 204, 204);\n}\n\n.axis-button.clicked {\n  border: 2px solid black;\n}\n\n#ship-label {\n  color: red;\n  background-color: white;\n  border-radius: 10px;\n  padding: 5px;\n  width: 10rem;\n  text-align: center;\n}\n\n.frame {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr); \n  width: fit-content;\n}\n\n.square {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  background-color: white;\n  border: 2px solid black;\n  margin: -1px;\n  font-size: 1rem;   \n  padding: .3rem;\n  color: rgb(185, 183, 183);\n}\n\n.square.usable:hover {\n  background-color: rgb(218, 214, 214);\n}\n\n.ship {\n  background-color: red;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,eAAe;EACf,mDAAmC;EACnC,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,aAAa;AACf;;AAEA,UAAU;AACV;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,cAAc;EACd,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kCAAkC;EAClC,YAAY;EACZ,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n  font-size: 2rem;\n  background: url('./images/war.png');\n  background-size: cover;    \n}\n\n#content {\n  width: 100%;\n  height: 100vh;\n}\n\n#container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;    \n}\n\n#title {\n  width: 100%;\n  text-align: center;\n  font-size: 8rem;    \n  background-color: red;\n  margin: .5rem;\n}\n\n/* INTRO */\n#name-label {\n  display: block;\n  margin-bottom: 1rem;\n}\n\n#name-input {\n  font-size: 2rem;\n  margin-bottom: 3rem;\n  border: 2px solid black;\n}\n\n#start-button {\n  font-size: 2rem;\n  padding: 1rem;\n  border: 2px solid black;\n  border-radius: 1rem;\n  width: 100%;\n  background-color: rgb(241, 120, 120);\n}\n\n#start-button:hover {\n  background-color: rgb(245, 178, 178);\n}\n\n/* GAMEBOARD */\n#gb-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-info {\n  font-size: 1.5rem;\n  /* margin-bottom: 1rem; */\n  background-color: white;\n  padding: 5px;\n}\n\n.axes {\n  display: flex;\n  justify-content: space-evenly;\n  padding: .5rem;\n  width: 100%;\n}\n\n.axis-button {\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: rgba(0, 0, 0, 0);    \n  width: 10rem;\n  border: 2px solid rgba(0, 0, 0, 0);\n  border-radius: 1rem;\n  padding: 5px;\n}\n\n.axis-button:hover {\n  border: 2px solid rgb(216, 204, 204);\n}\n\n.axis-button.clicked {\n  border: 2px solid black;\n}\n\n#ship-label {\n  color: red;\n  background-color: white;\n  border-radius: 10px;\n  padding: 5px;\n  width: 10rem;\n  text-align: center;\n}\n\n.frame {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr); \n  width: fit-content;\n}\n\n.square {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  background-color: white;\n  border: 2px solid black;\n  margin: -1px;\n  font-size: 1rem;   \n  padding: .3rem;\n  color: rgb(185, 183, 183);\n}\n\n.square.usable:hover {\n  background-color: rgb(218, 214, 214);\n}\n\n.ship {\n  background-color: red;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axes": () => (/* binding */ axes),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "drawGameboard": () => (/* binding */ drawGameboard),
/* harmony export */   "gbScreen": () => (/* binding */ gbScreen),
/* harmony export */   "horizontalButton": () => (/* binding */ horizontalButton),
/* harmony export */   "informPlayer": () => (/* binding */ informPlayer),
/* harmony export */   "intro": () => (/* binding */ intro),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "shipLabel": () => (/* binding */ shipLabel),
/* harmony export */   "startButton": () => (/* binding */ startButton),
/* harmony export */   "verticalButton": () => (/* binding */ verticalButton)
/* harmony export */ });
// general layout
const content = document.getElementById('content');

const container = document.createElement('div');
container.id = 'container';

// title header
const title = document.createElement('div');
title.id = 'title';
title.textContent = 'BATTLESHIP';
container.appendChild(title);

// INTRO SCREEN
const intro = document.createElement('div');
intro.id = 'intro';

// name entry
const nameEntry = document.createElement('div');
nameEntry.id = 'name-entry';

const nameLabel = document.createElement('label');
nameLabel.id = 'name-label';
nameLabel.htmlFor = 'name-input';
nameLabel.textContent = "Enter player's name";

const nameInput = document.createElement('input');
nameInput.id = 'name-input';

nameEntry.appendChild(nameLabel);
nameEntry.appendChild(nameInput);

intro.appendChild(nameEntry);

const startButton = document.createElement('button');
startButton.id = 'start-button';
startButton.textContent = 'Start Game';

intro.appendChild(startButton);

container.appendChild(intro);

// GAMEBOARD SCREEN
const gbScreen = document.createElement('div');
gbScreen.id = 'gb-screen';

// info for player 1
const informPlayer = (player) => {
  const playerInfo = document.createElement('div');
  playerInfo.className = 'player-info';
  const infoLine1 = document.createElement('div');
  const infoLine2 = document.createElement('div');

  infoLine1.textContent = `Hey ${player.name}, place your ships by clicking on the board.`;
  infoLine2.textContent = 'Select axis before each placement.';

  playerInfo.appendChild(infoLine1);
  playerInfo.appendChild(infoLine2);

  return playerInfo;
};

// axes
const axes = document.createElement('div');
axes.className = 'axes';

const horizontalButton = document.createElement('button');
horizontalButton.textContent = 'HORIZONTAL';
horizontalButton.className = 'axis-button clicked';

const shipLabel = document.createElement('div');
shipLabel.id = 'ship-label';

const verticalButton = document.createElement('button');
verticalButton.textContent = 'VERTICAL';
verticalButton.className = 'axis-button';

let currentOrientation = 'horizontal';

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
axes.appendChild(shipLabel);
axes.appendChild(verticalButton);

// gameboard
const drawGameboard = (player) => {
  const frame = document.createElement('div');
  frame.className = 'frame';

  for (const field of player.gameboard.fields) {
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = field.x + field.y;
    square.dataset.x = field.x;
    square.dataset.y = field.y;
    
    if (!field.free) {
      square.classList.add('ship');
    }

    square.addEventListener('click', () => {
      if (!player.shipsPlaced) {        
        player.currentShip.x = field.x;
        player.currentShip.y = field.y;
        player.currentShip.orientation = currentOrientation;
        
        
        let shipCount = player.gameboard.ships.length;
        player.placeShip(player.currentShip);
        if (shipCount < player.gameboard.ships.length) {

          for (let shipPart of player.currentShip.fields) {
            let index = player.gameboard.fields.indexOf(shipPart);
            frame.children[index].classList.add('ship');
          }

          if (player.gameboard.ships.length < 5) {
            player.currentShip = player.fleet[player.fleet.indexOf(player.currentShip) + 1];
            shipLabel.textContent = player.currentShip.type;
          } else {
            player.shipsPlaced = true;
            console.log('All ships placed.');
          }
        } else {
          console.log('not added');
        }       
      }
    });

    frame.appendChild(square);
  }

  return frame;
};


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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const Game = (playerName) => {  
  // set defaults
  // available modes: placement (when players can place ships)
  // and battle (when players shoot at each other)
  // let currentMode = 'placement';
  // let currentOrientation = 'horizontal';

  // hide intro and display gameboard screen
  _dom__WEBPACK_IMPORTED_MODULE_2__.intro.style.display = 'none';
  _dom__WEBPACK_IMPORTED_MODULE_2__.container.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.gbScreen);

  // set players
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(playerName);
  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer');

  // set player2's gameboard
  player2.placeShipRandomly(player2.fleet[0]);
  player2.placeShipRandomly(player2.fleet[1]);
  player2.placeShipRandomly(player2.fleet[2]);
  player2.placeShipRandomly(player2.fleet[3]);
  player2.placeShipRandomly(player2.fleet[4]);

  // create and hide player2's gameboard
  const gb2 = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawGameboard)(player2);
  _dom__WEBPACK_IMPORTED_MODULE_2__.gbScreen.appendChild(gb2);
  gb2.style.display = 'none';

  // create player info text
  const playerInfo = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.informPlayer)(player1);
  _dom__WEBPACK_IMPORTED_MODULE_2__.gbScreen.appendChild(playerInfo);

  // display axis buttons
  _dom__WEBPACK_IMPORTED_MODULE_2__.gbScreen.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__.axes);

  // shipLabel.textContent = currentShip.type;
  _dom__WEBPACK_IMPORTED_MODULE_2__.shipLabel.textContent = player1.currentShip.type;

  // horizontalButton.addEventListener('click', () => {
  //   currentOrientation = 'horizontal';
  //   horizontalButton.classList.add('clicked');
  //   verticalButton.classList.remove('clicked');
  // });

  // verticalButton.addEventListener('click', () => {
  //   currentOrientation = 'vertical';
  //   verticalButton.classList.add('clicked');
  //   horizontalButton.classList.remove('clicked');
  // });

  // display player1's gameboard
  const gb1 = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.drawGameboard)(player1);
  _dom__WEBPACK_IMPORTED_MODULE_2__.gbScreen.appendChild(gb1);

  // for (const square of gb1.children) {
  //   square.addEventListener('click', () => {
  //     if (currentMode === 'placement' && player1.gameboard.ships.length < 5) {
  //       let playerShipCount = player1.gameboard.ships.length;

  //       currentShip.x = square.dataset.x;
  //       currentShip.y = +square.dataset.y;
  //       currentShip.orientation = currentOrientation;
  //       player1.placeShip(currentShip);

  //       if (player1.gameboard.ships.length > playerShipCount) {
  //         let lastShip = player1.gameboard.ships[player1.gameboard.ships.length - 1];
  //         // square.classList.add('ship');      
  //       }

        

  //       let currentShipIndex = fleet.indexOf(currentShip);
  //       if (currentShipIndex < 4) {
  //         currentShip = fleet[fleet.indexOf(currentShip) + 1];
  //       }
        
        

  //       console.log(player1.gameboard.ships.length);
  //       }
  //   })
  // }



  // for (const square of gb1.children) {
  //   square.addEventListener('click', () => {
  //     if (player1.gameboard.ships.length < 5) {
  //       let playerShipCount = player1.gameboard.ships.length;

  //       currentShip.x = square.dataset.x;
  //       currentShip.y = +square.dataset.y;
  //       currentShip.orientation = currentOrientation;
  //       player1.placeShip(currentShip);

  //       if (player1.gameboard.ships.length > playerShipCount) {
  //         let lastShip = player1.gameboard.ships[player1.gameboard.ships.length - 1];
  //         // square.classList.add('ship');      
  //       }

        

  //       let currentShipIndex = fleet.indexOf(currentShip);
  //       if (currentShipIndex < 4) {
  //         currentShip = fleet[fleet.indexOf(currentShip) + 1];
  //       }
        
        

  //       console.log(player1.gameboard.ships.length);
  //       }
  //   })
  // }


  
  return { player1, player2 };
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


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

    // check if all ships are sunk
    if (allShipsSunk(ships)) {
      //
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

  const allShipsSunk = (ships) => {
    if (ships.length === 0) {
      return true;
    }
    return false;
  };


  return { fields, ships, place, receiveAttack };
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

  const shootAt = (enemy, x, y) => {
    enemy.gameboard.receiveAttack(x, y);
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
      target = fields.filter((field) => field.x === x && field.y === y)[0];
    }

    shootAt(enemy, x, y);

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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _images_war_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/war.png */ "./src/images/war.png");
/* harmony import */ var _icons_forbidden_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/forbidden.png */ "./src/icons/forbidden.png");
/* harmony import */ var _icons_hit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/hit.png */ "./src/icons/hit.png");
/* harmony import */ var _icons_miss_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/miss.png */ "./src/icons/miss.png");








// Initialize
_dom__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.container);
_dom__WEBPACK_IMPORTED_MODULE_1__.startButton.addEventListener('click', () => {
  const game = (0,_game__WEBPACK_IMPORTED_MODULE_2__["default"])(_dom__WEBPACK_IMPORTED_MODULE_1__.nameInput.value);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ0FxQjtBQUM4QztBQUN6QztBQUNjO0FBQ1U7QUFDWjtBQUNFOztBQUV4QztBQUNBLHFEQUFtQixDQUFDLDJDQUFTO0FBQzdCLDhEQUE0QjtBQUM1QixlQUFlLGlEQUFJLENBQUMsaURBQWU7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3dhci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcbn1cXG5cXG4jdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDhyZW07ICAgIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuLyogSU5UUk8gKi9cXG4jbmFtZS1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNuYW1lLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3N0YXJ0LWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMjAsIDEyMCk7XFxufVxcblxcbiNzdGFydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTc4LCAxNzgpO1xcbn1cXG5cXG4vKiBHQU1FQk9BUkQgKi9cXG4jZ2Itc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgLyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYXhlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYXhpcy1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyAgICBcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYXhpcy1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIxNiwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uYXhpcy1idXR0b24uY2xpY2tlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3NoaXAtbGFiZWwge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyBcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyAgIFxcbiAgcGFkZGluZzogLjNyZW07XFxuICBjb2xvcjogcmdiKDE4NSwgMTgzLCAxODMpO1xcbn1cXG5cXG4uc3F1YXJlLnVzYWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTQsIDIxNCk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLG1EQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL3dhci5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4cmVtOyAgICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIG1hcmdpbjogLjVyZW07XFxufVxcblxcbi8qIElOVFJPICovXFxuI25hbWUtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzdGFydC1idXR0b24ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMTIwLCAxMjApO1xcbn1cXG5cXG4jc3RhcnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE3OCwgMTc4KTtcXG59XFxuXFxuLyogR0FNRUJPQVJEICovXFxuI2diLXNjcmVlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaW5mbyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmF4ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgICAgXFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTYsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uLmNsaWNrZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaGlwLWxhYmVsIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTsgXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogLTFweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTsgICBcXG4gIHBhZGRpbmc6IC4zcmVtO1xcbiAgY29sb3I6IHJnYigxODUsIDE4MywgMTgzKTtcXG59XFxuXFxuLnNxdWFyZS51c2FibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE0LCAyMTQpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBnZW5lcmFsIGxheW91dFxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcblxuLy8gdGl0bGUgaGVhZGVyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGUuaWQgPSAndGl0bGUnO1xudGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4vLyBJTlRSTyBTQ1JFRU5cbmV4cG9ydCBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW50cm8uaWQgPSAnaW50cm8nO1xuXG4vLyBuYW1lIGVudHJ5XG5jb25zdCBuYW1lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hbWVFbnRyeS5pZCA9ICduYW1lLWVudHJ5JztcblxuY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbm5hbWVMYWJlbC5pZCA9ICduYW1lLWxhYmVsJztcbm5hbWVMYWJlbC5odG1sRm9yID0gJ25hbWUtaW5wdXQnO1xubmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBwbGF5ZXIncyBuYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuXG5uYW1lRW50cnkuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbm5hbWVFbnRyeS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG5pbnRyby5hcHBlbmRDaGlsZChuYW1lRW50cnkpO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnN0YXJ0QnV0dG9uLmlkID0gJ3N0YXJ0LWJ1dHRvbic7XG5zdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcblxuaW50cm8uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8pO1xuXG4vLyBHQU1FQk9BUkQgU0NSRUVOXG5leHBvcnQgY29uc3QgZ2JTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdiU2NyZWVuLmlkID0gJ2diLXNjcmVlbic7XG5cbi8vIGluZm8gZm9yIHBsYXllciAxXG5leHBvcnQgY29uc3QgaW5mb3JtUGxheWVyID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllckluZm8uY2xhc3NOYW1lID0gJ3BsYXllci1pbmZvJztcbiAgY29uc3QgaW5mb0xpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGluZm9MaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGluZm9MaW5lMS50ZXh0Q29udGVudCA9IGBIZXkgJHtwbGF5ZXIubmFtZX0sIHBsYWNlIHlvdXIgc2hpcHMgYnkgY2xpY2tpbmcgb24gdGhlIGJvYXJkLmA7XG4gIGluZm9MaW5lMi50ZXh0Q29udGVudCA9ICdTZWxlY3QgYXhpcyBiZWZvcmUgZWFjaCBwbGFjZW1lbnQuJztcblxuICBwbGF5ZXJJbmZvLmFwcGVuZENoaWxkKGluZm9MaW5lMSk7XG4gIHBsYXllckluZm8uYXBwZW5kQ2hpbGQoaW5mb0xpbmUyKTtcblxuICByZXR1cm4gcGxheWVySW5mbztcbn07XG5cbi8vIGF4ZXNcbmV4cG9ydCBjb25zdCBheGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5heGVzLmNsYXNzTmFtZSA9ICdheGVzJztcblxuZXhwb3J0IGNvbnN0IGhvcml6b250YWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmhvcml6b250YWxCdXR0b24udGV4dENvbnRlbnQgPSAnSE9SSVpPTlRBTCc7XG5ob3Jpem9udGFsQnV0dG9uLmNsYXNzTmFtZSA9ICdheGlzLWJ1dHRvbiBjbGlja2VkJztcblxuZXhwb3J0IGNvbnN0IHNoaXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcExhYmVsLmlkID0gJ3NoaXAtbGFiZWwnO1xuXG5leHBvcnQgY29uc3QgdmVydGljYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnZlcnRpY2FsQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZFUlRJQ0FMJztcbnZlcnRpY2FsQnV0dG9uLmNsYXNzTmFtZSA9ICdheGlzLWJ1dHRvbic7XG5cbmxldCBjdXJyZW50T3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbmhvcml6b250YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgaG9yaXpvbnRhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gIHZlcnRpY2FsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbn0pO1xuXG52ZXJ0aWNhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgdmVydGljYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICBob3Jpem9udGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbn0pO1xuXG5heGVzLmFwcGVuZENoaWxkKGhvcml6b250YWxCdXR0b24pO1xuYXhlcy5hcHBlbmRDaGlsZChzaGlwTGFiZWwpO1xuYXhlcy5hcHBlbmRDaGlsZCh2ZXJ0aWNhbEJ1dHRvbik7XG5cbi8vIGdhbWVib2FyZFxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lYm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZyYW1lLmNsYXNzTmFtZSA9ICdmcmFtZSc7XG5cbiAgZm9yIChjb25zdCBmaWVsZCBvZiBwbGF5ZXIuZ2FtZWJvYXJkLmZpZWxkcykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBmaWVsZC54ICsgZmllbGQueTtcbiAgICBzcXVhcmUuZGF0YXNldC54ID0gZmllbGQueDtcbiAgICBzcXVhcmUuZGF0YXNldC55ID0gZmllbGQueTtcbiAgICBcbiAgICBpZiAoIWZpZWxkLmZyZWUpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfVxuXG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCFwbGF5ZXIuc2hpcHNQbGFjZWQpIHsgICAgICAgIFxuICAgICAgICBwbGF5ZXIuY3VycmVudFNoaXAueCA9IGZpZWxkLng7XG4gICAgICAgIHBsYXllci5jdXJyZW50U2hpcC55ID0gZmllbGQueTtcbiAgICAgICAgcGxheWVyLmN1cnJlbnRTaGlwLm9yaWVudGF0aW9uID0gY3VycmVudE9yaWVudGF0aW9uO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlwQ291bnQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aDtcbiAgICAgICAgcGxheWVyLnBsYWNlU2hpcChwbGF5ZXIuY3VycmVudFNoaXApO1xuICAgICAgICBpZiAoc2hpcENvdW50IDwgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGgpIHtcblxuICAgICAgICAgIGZvciAobGV0IHNoaXBQYXJ0IG9mIHBsYXllci5jdXJyZW50U2hpcC5maWVsZHMpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHBsYXllci5nYW1lYm9hcmQuZmllbGRzLmluZGV4T2Yoc2hpcFBhcnQpO1xuICAgICAgICAgICAgZnJhbWUuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBwbGF5ZXIuY3VycmVudFNoaXAgPSBwbGF5ZXIuZmxlZXRbcGxheWVyLmZsZWV0LmluZGV4T2YocGxheWVyLmN1cnJlbnRTaGlwKSArIDFdO1xuICAgICAgICAgICAgc2hpcExhYmVsLnRleHRDb250ZW50ID0gcGxheWVyLmN1cnJlbnRTaGlwLnR5cGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci5zaGlwc1BsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxsIHNoaXBzIHBsYWNlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vdCBhZGRlZCcpO1xuICAgICAgICB9ICAgICAgIFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn07XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtcbiAgaW50cm8sXG4gIGNvbnRhaW5lcixcbiAgZ2JTY3JlZW4sXG4gIGRyYXdHYW1lYm9hcmQsXG4gIGluZm9ybVBsYXllcixcbiAgYXhlcyxcbiAgLy8gaG9yaXpvbnRhbEJ1dHRvbixcbiAgLy8gdmVydGljYWxCdXR0b24sXG4gIHNoaXBMYWJlbFxufSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgR2FtZSA9IChwbGF5ZXJOYW1lKSA9PiB7ICBcbiAgLy8gc2V0IGRlZmF1bHRzXG4gIC8vIGF2YWlsYWJsZSBtb2RlczogcGxhY2VtZW50ICh3aGVuIHBsYXllcnMgY2FuIHBsYWNlIHNoaXBzKVxuICAvLyBhbmQgYmF0dGxlICh3aGVuIHBsYXllcnMgc2hvb3QgYXQgZWFjaCBvdGhlcilcbiAgLy8gbGV0IGN1cnJlbnRNb2RlID0gJ3BsYWNlbWVudCc7XG4gIC8vIGxldCBjdXJyZW50T3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgLy8gaGlkZSBpbnRybyBhbmQgZGlzcGxheSBnYW1lYm9hcmQgc2NyZWVuXG4gIGludHJvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYlNjcmVlbik7XG5cbiAgLy8gc2V0IHBsYXllcnNcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcignQ29tcHV0ZXInKTtcblxuICAvLyBzZXQgcGxheWVyMidzIGdhbWVib2FyZFxuICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbMF0pO1xuICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbMV0pO1xuICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbMl0pO1xuICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbM10pO1xuICBwbGF5ZXIyLnBsYWNlU2hpcFJhbmRvbWx5KHBsYXllcjIuZmxlZXRbNF0pO1xuXG4gIC8vIGNyZWF0ZSBhbmQgaGlkZSBwbGF5ZXIyJ3MgZ2FtZWJvYXJkXG4gIGNvbnN0IGdiMiA9IGRyYXdHYW1lYm9hcmQocGxheWVyMik7XG4gIGdiU2NyZWVuLmFwcGVuZENoaWxkKGdiMik7XG4gIGdiMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIC8vIGNyZWF0ZSBwbGF5ZXIgaW5mbyB0ZXh0XG4gIGNvbnN0IHBsYXllckluZm8gPSBpbmZvcm1QbGF5ZXIocGxheWVyMSk7XG4gIGdiU2NyZWVuLmFwcGVuZENoaWxkKHBsYXllckluZm8pO1xuXG4gIC8vIGRpc3BsYXkgYXhpcyBidXR0b25zXG4gIGdiU2NyZWVuLmFwcGVuZENoaWxkKGF4ZXMpO1xuXG4gIC8vIHNoaXBMYWJlbC50ZXh0Q29udGVudCA9IGN1cnJlbnRTaGlwLnR5cGU7XG4gIHNoaXBMYWJlbC50ZXh0Q29udGVudCA9IHBsYXllcjEuY3VycmVudFNoaXAudHlwZTtcblxuICAvLyBob3Jpem9udGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGN1cnJlbnRPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgLy8gICBob3Jpem9udGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgLy8gICB2ZXJ0aWNhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gIC8vIH0pO1xuXG4gIC8vIHZlcnRpY2FsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGN1cnJlbnRPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIC8vICAgdmVydGljYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAvLyAgIGhvcml6b250YWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAvLyB9KTtcblxuICAvLyBkaXNwbGF5IHBsYXllcjEncyBnYW1lYm9hcmRcbiAgY29uc3QgZ2IxID0gZHJhd0dhbWVib2FyZChwbGF5ZXIxKTtcbiAgZ2JTY3JlZW4uYXBwZW5kQ2hpbGQoZ2IxKTtcblxuICAvLyBmb3IgKGNvbnN0IHNxdWFyZSBvZiBnYjEuY2hpbGRyZW4pIHtcbiAgLy8gICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgICBpZiAoY3VycmVudE1vZGUgPT09ICdwbGFjZW1lbnQnICYmIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgLy8gICAgICAgbGV0IHBsYXllclNoaXBDb3VudCA9IHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aDtcblxuICAvLyAgICAgICBjdXJyZW50U2hpcC54ID0gc3F1YXJlLmRhdGFzZXQueDtcbiAgLy8gICAgICAgY3VycmVudFNoaXAueSA9ICtzcXVhcmUuZGF0YXNldC55O1xuICAvLyAgICAgICBjdXJyZW50U2hpcC5vcmllbnRhdGlvbiA9IGN1cnJlbnRPcmllbnRhdGlvbjtcbiAgLy8gICAgICAgcGxheWVyMS5wbGFjZVNoaXAoY3VycmVudFNoaXApO1xuXG4gIC8vICAgICAgIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggPiBwbGF5ZXJTaGlwQ291bnQpIHtcbiAgLy8gICAgICAgICBsZXQgbGFzdFNoaXAgPSBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwc1twbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5sZW5ndGggLSAxXTtcbiAgLy8gICAgICAgICAvLyBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpOyAgICAgIFxuICAvLyAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgLy8gICAgICAgbGV0IGN1cnJlbnRTaGlwSW5kZXggPSBmbGVldC5pbmRleE9mKGN1cnJlbnRTaGlwKTtcbiAgLy8gICAgICAgaWYgKGN1cnJlbnRTaGlwSW5kZXggPCA0KSB7XG4gIC8vICAgICAgICAgY3VycmVudFNoaXAgPSBmbGVldFtmbGVldC5pbmRleE9mKGN1cnJlbnRTaGlwKSArIDFdO1xuICAvLyAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcblxuICAvLyAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5sZW5ndGgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfVxuXG5cblxuICAvLyBmb3IgKGNvbnN0IHNxdWFyZSBvZiBnYjEuY2hpbGRyZW4pIHtcbiAgLy8gICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgICBpZiAocGxheWVyMS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoIDwgNSkge1xuICAvLyAgICAgICBsZXQgcGxheWVyU2hpcENvdW50ID0gcGxheWVyMS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoO1xuXG4gIC8vICAgICAgIGN1cnJlbnRTaGlwLnggPSBzcXVhcmUuZGF0YXNldC54O1xuICAvLyAgICAgICBjdXJyZW50U2hpcC55ID0gK3NxdWFyZS5kYXRhc2V0Lnk7XG4gIC8vICAgICAgIGN1cnJlbnRTaGlwLm9yaWVudGF0aW9uID0gY3VycmVudE9yaWVudGF0aW9uO1xuICAvLyAgICAgICBwbGF5ZXIxLnBsYWNlU2hpcChjdXJyZW50U2hpcCk7XG5cbiAgLy8gICAgICAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA+IHBsYXllclNoaXBDb3VudCkge1xuICAvLyAgICAgICAgIGxldCBsYXN0U2hpcCA9IHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzW3BsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgICAgIC8vIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7ICAgICAgXG4gIC8vICAgICAgIH1cblxuICAgICAgICBcblxuICAvLyAgICAgICBsZXQgY3VycmVudFNoaXBJbmRleCA9IGZsZWV0LmluZGV4T2YoY3VycmVudFNoaXApO1xuICAvLyAgICAgICBpZiAoY3VycmVudFNoaXBJbmRleCA8IDQpIHtcbiAgLy8gICAgICAgICBjdXJyZW50U2hpcCA9IGZsZWV0W2ZsZWV0LmluZGV4T2YoY3VycmVudFNoaXApICsgMV07XG4gIC8vICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICB9KVxuICAvLyB9XG5cblxuICBcbiAgcmV0dXJuIHsgcGxheWVyMSwgcGxheWVyMiB9O1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgeENvb3JkcyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCB5Q29vcmRzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcblxuICAvLyBhcnJheSBvZiBzaGlwc1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIC8vIGNyZWF0ZSBmaWVsZHNcbiAgY29uc3QgZmllbGRzID0gW107XG4gIGZvciAoY29uc3QgeSBvZiB5Q29vcmRzKSB7XG4gICAgZm9yIChjb25zdCB4IG9mIHhDb29yZHMpIHtcbiAgICAgIGZpZWxkcy5wdXNoKHsgeCwgeSwgZnJlZTogdHJ1ZSwgdXNhYmxlOiB0cnVlLCBtaXNzZWQ6IGZhbHNlLCBoaXQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlID0gKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcEFsbG93ZWQoc2hpcCkpIHtcbiAgICAgIHJlc2VydmVGaWVsZHMoc2hpcCk7XG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhQb3MsIHlQb3MpID0+IHtcbiAgICAvLyBmaW5kIHRoZSBmaWVsZCBhdCB4UG9zLCB5UG9zXG4gICAgY29uc3QgYXR0YWNrZWRGaWVsZCA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSB4UG9zICYmIGZpZWxkLnkgPT09IHlQb3MpWzBdO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBzaGlwIGF0IHRoaXMgcG9zaXRpb25cbiAgICBjb25zdCBoaXRTaGlwID0gYXR0YWNrZWRGaWVsZC5mcmVlID09PSBmYWxzZTtcblxuICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICAvLyBtYXJrIGZpZWxkIGFzIGhpdFxuICAgICAgYXR0YWNrZWRGaWVsZC5oaXQgPSB0cnVlO1xuXG4gICAgICAvLyBpZiBhIHNoaXAgd2FzIGhpdCwgaWRlbnRpZnkgaXRcbiAgICAgIGNvbnN0IGhpdFVuaXQgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAuZmllbGRzLmluY2x1ZGVzKGF0dGFja2VkRmllbGQpKVswXTtcblxuICAgICAgLy8gY2hlY2sgd2hpY2ggc2VnbWVudCBvZiB0aGUgc2hpcCB3YXMgaGl0XG4gICAgICBjb25zdCBoaXRTZWdtZW50ID0gaGl0VW5pdC5maWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQgPT09IGF0dGFja2VkRmllbGQpWzBdO1xuICAgICAgLy8gZmluZCBpbmRleCBvZiBoaXQgc2VnbWVudFxuICAgICAgY29uc3QgaGl0U2VnbWVudEluZGV4ID0gaGl0VW5pdC5maWVsZHMuaW5kZXhPZihoaXRTZWdtZW50KTtcblxuICAgICAgLy8gaGl0IHRoZSBzaGlwXG4gICAgICBoaXRVbml0LmhpdChoaXRTZWdtZW50SW5kZXgpO1xuXG4gICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBzaG91bGQgc2lua1xuICAgICAgaWYgKGhpdFVuaXQuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3QgaGl0VW5pdEluZGV4ID0gc2hpcHMuaW5kZXhPZihoaXRVbml0KTtcbiAgICAgICAgc2hpcHMuc3BsaWNlKGhpdFVuaXRJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dGFja2VkRmllbGQubWlzc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICBpZiAoYWxsU2hpcHNTdW5rKHNoaXBzKSkge1xuICAgICAgLy9cbiAgICB9XG4gIH07XG5cbiAgLy8gSEVMUEVSIE1FVEhPRFNcbiAgY29uc3QgcmVzZXJ2ZUZpZWxkcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRGaWVsZCA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSBzaGlwLnggJiYgZmllbGQueSA9PT0gc2hpcC55KVswXTtcblxuICAgIC8vIHJlc2VydmUgZmllbGRzIGZvciBzaGlwIGFuZCBkaXNhYmxlIHN1cnJvdW5kaW5nIGZpZWxkc1xuICAgIGNvbnN0IHN0YXJ0RmllbGRJbmRleCA9IGZpZWxkcy5pbmRleE9mKHN0YXJ0RmllbGQpO1xuICAgIC8vIGhvcml6b250YWwgc2hpcFxuICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0uZnJlZSA9IGZhbHNlO1xuICAgICAgICBzaGlwLmZpZWxkc1tpXSA9IGZpZWxkc1tzdGFydEZpZWxkSW5kZXggKyBpXTtcblxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBmaWVsZCB3aGVyZSB0aGUgc2hpcCBpcy4uLlxuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0udXNhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gYW5kIHRoZSBmaWVsZHMgYWJvdmUgdGhlIHNoaXAuLi5cbiAgICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCA+IDkpIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaSAtIDEwXS51c2FibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbmQgdGhlIGZpZWxkcyBiZWxvdy5cbiAgICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCA8IDkwKSB7XG4gICAgICAgICAgZmllbGRzW3N0YXJ0RmllbGRJbmRleCArIGkgKyAxMF0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgdGhlIGZpZWxkcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBzaGlwXG4gICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ICUgMTAgIT09IDApIHtcbiAgICAgICAgZmllbGRzW3N0YXJ0RmllbGRJbmRleCAtIDFdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChzdGFydEZpZWxkSW5kZXggKyBzaGlwLmxlbmd0aCkgJSAxMCAhPT0gMCkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgc2hpcC5sZW5ndGhdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIC8vIHZlcnRpY2FsIHNoaXBcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpZWxkc1tzdGFydEZpZWxkSW5kZXggKyAxMCAqIGldLmZyZWUgPSBmYWxzZTtcbiAgICAgICAgc2hpcC5maWVsZHNbaV0gPSBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpXTtcblxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBmaWVsZCB3aGVyZSB0aGUgc2hpcCBpcy4uLlxuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpXS51c2FibGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBhbmQgdGhlIGZpZWxkcyB0byB0aGUgbGVmdC4uLlxuICAgICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ICUgMTAgIT09IDApIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpIC0gMV0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYW5kIHRoZSBmaWVsZHMgdG8gdGhlIHJpZ2h0LlxuICAgICAgICBpZiAoKHN0YXJ0RmllbGRJbmRleCArIDEpICUgMTAgIT09IDApIHtcbiAgICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBpICsgMV0udXNhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgdGhlIGZpZWxkcyBvbiBib3RoIHNpZGVzIG9mIHRoZSBzaGlwXG4gICAgICBpZiAoc3RhcnRGaWVsZEluZGV4ID4gOSkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4IC0gMTBdLnVzYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0RmllbGRJbmRleCArIDEwICogKHNoaXAubGVuZ3RoIC0gMSkgPCA5MCkge1xuICAgICAgICBmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgMTAgKiBzaGlwLmxlbmd0aF0udXNhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNoaXBBbGxvd2VkID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBzdGFydEZpZWxkID0gZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkLnggPT09IHNoaXAueCAmJiBmaWVsZC55ID09PSBzaGlwLnkpWzBdO1xuICAgIGNvbnN0IHN0YXJ0RmllbGRJbmRleCA9IGZpZWxkcy5pbmRleE9mKHN0YXJ0RmllbGQpO1xuXG4gICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmaWVsZHNbc3RhcnRGaWVsZEluZGV4ICsgaV0udXNhYmxlID09PSBmYWxzZVxuICAgICAgICB8fCAoc3RhcnRGaWVsZEluZGV4ICUgMTApID4gKDEwIC0gc2hpcC5sZW5ndGgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZmllbGRzW3N0YXJ0RmllbGRJbmRleCArIDEwICogaV0udXNhYmxlID09PSBmYWxzZVxuICAgICAgICB8fCAoc2hpcC55KSA+ICgxMSAtIHNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoc2hpcHMpID0+IHtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG5cbiAgcmV0dXJuIHsgZmllbGRzLCBzaGlwcywgcGxhY2UsIHJlY2VpdmVBdHRhY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIC8vL1xuICBjb25zdCBmbGVldCA9IFtcbiAgICBTaGlwKCdjYXJyaWVyJywgNSksXG4gICAgU2hpcCgnYmF0dGxlc2hpcCcsIDQpLFxuICAgIFNoaXAoJ2Rlc3Ryb3llcicsIDMpLFxuICAgIFNoaXAoJ3N1Ym1hcmluZScsIDMpLFxuICAgIFNoaXAoJ3BhdHJvbCBib2F0JywgMiksXG4gIF07XG5cbiAgbGV0IGN1cnJlbnRTaGlwID0gZmxlZXRbMF07XG4gIGxldCBzaGlwc1BsYWNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXApID0+IHtcbiAgICBnYW1lYm9hcmQucGxhY2Uoc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwUmFuZG9tbHkgPSAoZmxlZXRTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcENvdW50ID0gZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aDtcblxuICAgIGRvIHtcbiAgICAgIHJhbmRvbWl6ZVNoaXAoZmxlZXRTaGlwKTtcbiAgICAgIHBsYWNlU2hpcChmbGVldFNoaXApO1xuICAgIH0gd2hpbGUgKHNoaXBDb3VudCA9PT0gZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvb3RBdCA9IChlbmVteSwgeCwgeSkgPT4ge1xuICAgIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IHNob290UmFuZG9tbHlBdCA9IChlbmVteSkgPT4ge1xuICAgIGNvbnN0IHhDb29yZHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICAgIC8vIHNlbGVjdCByYW5kb20gY29vcmRzXG4gICAgbGV0IHggPSB4Q29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh4Q29vcmRzLmxlbmd0aCkpXTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBmaWVsZCB3YXMgYWxyZWFkeSBoaXQgb3IgbWlzc2VkXG4gICAgLy8gZmluZCB0aGUgZmllbGQgYXQgeFBvcywgeVBvc1xuICAgIGxldCB0YXJnZXQgPSBlbmVteS5nYW1lYm9hcmQuZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkLnggPT09IHggJiYgZmllbGQueSA9PT0geSlbMF07XG5cbiAgICB3aGlsZSAodGFyZ2V0Lm1pc3NlZCB8fCB0YXJnZXQuaGl0KSB7XG4gICAgICB4ID0geENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoeENvb3Jkcy5sZW5ndGgpKV07XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgIHRhcmdldCA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC54ID09PSB4ICYmIGZpZWxkLnkgPT09IHkpWzBdO1xuICAgIH1cblxuICAgIHNob290QXQoZW5lbXksIHgsIHkpO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICAvLyBIRUxQRVIgTUVUSE9EU1xuICBjb25zdCByYW5kb21pemVTaGlwID0gKHNoaXApID0+IHtcbiAgICAvLyBzZWxlY3QgcmFuZG9tIG9yaWVudGF0aW9uXG4gICAgY29uc3Qgb3JpZW50YXRpb25OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25OdW1iZXIgPCA2ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcblxuICAgIGNvbnN0IHhDb29yZHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICAgIC8vIHNlbGVjdCByYW5kb20gY29vcmRzXG4gICAgbGV0IHggPSB4Q29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh4Q29vcmRzLmxlbmd0aCAtIHNoaXAubGVuZ3RoKSldO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gc2hpcC5sZW5ndGgpKSArIDE7XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiB4Q29vcmRzLmluZGV4T2YoeCkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICB4ID0geENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoeENvb3Jkcy5sZW5ndGggLSBzaGlwLmxlbmd0aCkpXTtcbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgeSArIHNoaXAubGVuZ3RoID4gMTEpIHtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzaGlwLmxlbmd0aCkpICsgMTtcbiAgICB9XG5cbiAgICAvLyBzZXQgc2hpcFxuICAgIHNoaXAueCA9IHg7XG4gICAgc2hpcC55ID0geTtcbiAgICBzaGlwLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWVib2FyZCxcbiAgICBmbGVldCxcbiAgICBjdXJyZW50U2hpcCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgc2hvb3RBdCxcbiAgICBzaG9vdFJhbmRvbWx5QXQsXG4gICAgc2hpcHNQbGFjZWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKHR5cGUsIGxlbmd0aCwgeCA9ICdBJywgeSA9IDEsIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKSA9PiB7XG4gIGNvbnN0IGZpZWxkcyA9IFtdO1xuICBjb25zdCBoaXRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGhpdHMucHVzaChmYWxzZSk7XG4gIH1cblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBoaXRzW3Bvc2l0aW9uXSA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cy5ldmVyeSgocG9zKSA9PiBwb3MgPT09IHRydWUpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBsZW5ndGgsXG4gICAgb3JpZW50YXRpb24sXG4gICAgeCxcbiAgICB5LFxuICAgIGZpZWxkcyxcbiAgICBoaXRzLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29udGVudCwgY29udGFpbmVyLCBuYW1lSW5wdXQsIHN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBXYXJJbWFnZSBmcm9tICcuL2ltYWdlcy93YXIucG5nJztcbmltcG9ydCBGb3JiaWRkZW5JY29uIGZyb20gJy4vaWNvbnMvZm9yYmlkZGVuLnBuZyc7XG5pbXBvcnQgSGl0SWNvbiBmcm9tICcuL2ljb25zL2hpdC5wbmcnO1xuaW1wb3J0IE1pc3NJY29uIGZyb20gJy4vaWNvbnMvbWlzcy5wbmcnO1xuXG4vLyBJbml0aWFsaXplXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IEdhbWUobmFtZUlucHV0LnZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9