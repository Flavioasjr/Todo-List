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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(230px, 1fr) 5fr;\n}\n\n.header {\n    background-color: #db4c3f;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 40px;\n    grid-column: 1 / 3;\n}\n\n.left-header, .right-header{\n    gap: 10px;\n    display: flex;\n}\n\n.btn-show-menu, .btn-home, .btn-header-task,\n.btn-productivity, .btn-help, .btn-notifications {\n    background-color: #db4c3f;\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    min-width: 28px;\n    padding: 0;\n}\n\n.icon-menu {\n    color: white;\n    height: 28px;\n    min-width: 28px;\n}\n\n.find {\n    width: 200px;\n    position: relative;\n    display: flex;\n}\n\n.input-header {\n    background: hsla(0,0%,100%,.2);\n    margin: 0;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    width: 100%;\n    color: #fff;\n    padding: 5px 0 5px 34px;\n    transition: width .2s ease-in,background .15s cubic-bezier(.4,0,.2,1);\n}\n\n.input-header::placeholder {\n    color: white;\n}\n\n.icon-search {\n    position: absolute;\n    color: #fff;\n    cursor: text;\n    left: 5px;\n    top: 5%;\n}\n\n.dashboard {\n    background-color: #fafafa;\n}\n\n.list-dashboard {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px\n}\n\n.icon-inbox {\n    color: blue;\n}\n\n.icon-today {\n    color: green;\n}\n\n.icon-upcoming {\n    color: purple;\n}\n\n.svg-dashboard {\n    width: 24px;\n    height: 24px;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;;IAEI,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,SAAS;IACT,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,qEAAqE;AACzE;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,OAAO;AACX;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT;AACJ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(230px, 1fr) 5fr;\n}\n\n.header {\n    background-color: #db4c3f;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 40px;\n    grid-column: 1 / 3;\n}\n\n.left-header, .right-header{\n    gap: 10px;\n    display: flex;\n}\n\n.btn-show-menu, .btn-home, .btn-header-task,\n.btn-productivity, .btn-help, .btn-notifications {\n    background-color: #db4c3f;\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    min-width: 28px;\n    padding: 0;\n}\n\n.icon-menu {\n    color: white;\n    height: 28px;\n    min-width: 28px;\n}\n\n.find {\n    width: 200px;\n    position: relative;\n    display: flex;\n}\n\n.input-header {\n    background: hsla(0,0%,100%,.2);\n    margin: 0;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    width: 100%;\n    color: #fff;\n    padding: 5px 0 5px 34px;\n    transition: width .2s ease-in,background .15s cubic-bezier(.4,0,.2,1);\n}\n\n.input-header::placeholder {\n    color: white;\n}\n\n.icon-search {\n    position: absolute;\n    color: #fff;\n    cursor: text;\n    left: 5px;\n    top: 5%;\n}\n\n.dashboard {\n    background-color: #fafafa;\n}\n\n.list-dashboard {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px\n}\n\n.icon-inbox {\n    color: blue;\n}\n\n.icon-today {\n    color: green;\n}\n\n.icon-upcoming {\n    color: purple;\n}\n\n.svg-dashboard {\n    width: 24px;\n    height: 24px;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}"],"sourceRoot":""}]);
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

/***/ "./src/formTask.js":
/*!*************************!*\
  !*** ./src/formTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formTask)
/* harmony export */ });
function formTask() {
    const inputTitle = document.querySelector('#title');
    const inputDescription = document.querySelector('#description');
    const inputDate = document.querySelector('#date');
    const inputPriority = document.querySelector('#priority');
    const inputNotes = document.querySelector('#notes');

    let taskContent = [];
        
    if (!inputTitle.value || !inputDate.value) return false;

    taskContent.push(inputTitle.value);
    taskContent.push(inputDescription.value);
    taskContent.push(inputDate.value);
    taskContent.push(inputPriority.checked);
    taskContent.push(inputNotes.value);

    return taskContent;
}

/***/ }),

/***/ "./src/saveTasks.js":
/*!**************************!*\
  !*** ./src/saveTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveTasks)
/* harmony export */ });
let tasks = [];

function saveTasks(task) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/***/ }),

/***/ "./src/showTasks.js":
/*!**************************!*\
  !*** ./src/showTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTasks)
/* harmony export */ });
function showTasks() {
    const content = document.querySelector('.content');
    let div = [];

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i=0; i < storageTasks.length; i++) {
        div[i] = document.createElement('div');
        div[i].textContent = 'Title:' + storageTasks[i].title + ' Date:' + storageTasks[i].dueDate;
        content.appendChild(div[i]);
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _formTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formTask.js */ "./src/formTask.js");
/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveTasks.js */ "./src/saveTasks.js");
/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showTasks.js */ "./src/showTasks.js");






(0,_showTasks_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

const btnAddTask = document.querySelector('.btn-add-task');

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    const taskContent = (0,_formTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if(!taskContent) return;
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskContent[0], taskContent[1], taskContent[2],
        taskContent[3], taskContent[4]);

    (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__["default"])(task);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDZCQUE2QixnQkFBZ0IsR0FBRyxnQkFBZ0Isb0JBQW9CLG9EQUFvRCxHQUFHLGFBQWEsZ0NBQWdDLG1CQUFtQixvQkFBb0IscUNBQXFDLHlCQUF5Qix5QkFBeUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLG9CQUFvQixHQUFHLG9HQUFvRyxnQ0FBZ0MsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLGlCQUFpQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLHNCQUFzQixHQUFHLFdBQVcsbUJBQW1CLHlCQUF5QixvQkFBb0IsR0FBRyxtQkFBbUIscUNBQXFDLGdCQUFnQixvQ0FBb0MseUJBQXlCLGtCQUFrQixrQkFBa0IsOEJBQThCLDRFQUE0RSxHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxrQkFBa0IseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGNBQWMsR0FBRyxnQkFBZ0IsZ0NBQWdDLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDBCQUEwQixpQkFBaUIsa0JBQWtCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQixHQUFHLFFBQVEsdUJBQXVCLEdBQUcsT0FBTyw0QkFBNEIsbUJBQW1CLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxnQ0FBZ0MsNkJBQTZCLGdCQUFnQixHQUFHLGdCQUFnQixvQkFBb0Isb0RBQW9ELEdBQUcsYUFBYSxnQ0FBZ0MsbUJBQW1CLG9CQUFvQixxQ0FBcUMseUJBQXlCLHlCQUF5QixHQUFHLGdDQUFnQyxnQkFBZ0Isb0JBQW9CLEdBQUcsb0dBQW9HLGdDQUFnQyxtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQixtQkFBbUIsc0JBQXNCLEdBQUcsV0FBVyxtQkFBbUIseUJBQXlCLG9CQUFvQixHQUFHLG1CQUFtQixxQ0FBcUMsZ0JBQWdCLG9DQUFvQyx5QkFBeUIsa0JBQWtCLGtCQUFrQiw4QkFBOEIsNEVBQTRFLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLGtCQUFrQix5QkFBeUIsa0JBQWtCLG1CQUFtQixnQkFBZ0IsY0FBYyxHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxxQkFBcUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsMEJBQTBCLGlCQUFpQixrQkFBa0IsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsbUJBQW1CLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxPQUFPLDRCQUE0QixtQkFBbUIsR0FBRyxtQkFBbUI7QUFDeHBJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDUTtBQUNRO0FBQ0U7QUFDQTs7QUFFdkMseURBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix3REFBUTs7QUFFaEM7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekI7O0FBRUEsSUFBSSx5REFBUztBQUNiLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NhdmVUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2hvd1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjMwcHgsIDFmcikgNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4ubGVmdC1oZWFkZXIsIC5yaWdodC1oZWFkZXJ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0bi1zaG93LW1lbnUsIC5idG4taG9tZSwgLmJ0bi1oZWFkZXItdGFzayxcXG4uYnRuLXByb2R1Y3Rpdml0eSwgLmJ0bi1oZWxwLCAuYnRuLW5vdGlmaWNhdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtaW4td2lkdGg6IDI4cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5pY29uLW1lbnUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWluLXdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uZmluZCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5wdXQtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLDAlLDEwMCUsLjIpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDM0cHg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluLGJhY2tncm91bmQgLjE1cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG59XFxuXFxuLmlucHV0LWhlYWRlcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pY29uLXNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0b3A6IDUlO1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLmxpc3QtZGFzaGJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweFxcbn1cXG5cXG4uaWNvbi1pbmJveCB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaWNvbi10b2RheSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmljb24tdXBjb21pbmcge1xcbiAgICBjb2xvcjogcHVycGxlO1xcbn1cXG5cXG4uc3ZnLWRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsT0FBTztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjMwcHgsIDFmcikgNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4ubGVmdC1oZWFkZXIsIC5yaWdodC1oZWFkZXJ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0bi1zaG93LW1lbnUsIC5idG4taG9tZSwgLmJ0bi1oZWFkZXItdGFzayxcXG4uYnRuLXByb2R1Y3Rpdml0eSwgLmJ0bi1oZWxwLCAuYnRuLW5vdGlmaWNhdGlvbnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtaW4td2lkdGg6IDI4cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5pY29uLW1lbnUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWluLXdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uZmluZCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5wdXQtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLDAlLDEwMCUsLjIpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDM0cHg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluLGJhY2tncm91bmQgLjE1cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG59XFxuXFxuLmlucHV0LWhlYWRlcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pY29uLXNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogdGV4dDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0b3A6IDUlO1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLmxpc3QtZGFzaGJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweFxcbn1cXG5cXG4uaWNvbi1pbmJveCB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaWNvbi10b2RheSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmljb24tdXBjb21pbmcge1xcbiAgICBjb2xvcjogcHVycGxlO1xcbn1cXG5cXG4uc3ZnLWRhc2hib2FyZCB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1UYXNrKCkge1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgaW5wdXROb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuXG4gICAgbGV0IHRhc2tDb250ZW50ID0gW107XG4gICAgICAgIFxuICAgIGlmICghaW5wdXRUaXRsZS52YWx1ZSB8fCAhaW5wdXREYXRlLnZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0YXNrQ29udGVudC5wdXNoKGlucHV0VGl0bGUudmFsdWUpO1xuICAgIHRhc2tDb250ZW50LnB1c2goaW5wdXREZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgdGFza0NvbnRlbnQucHVzaChpbnB1dERhdGUudmFsdWUpO1xuICAgIHRhc2tDb250ZW50LnB1c2goaW5wdXRQcmlvcml0eS5jaGVja2VkKTtcbiAgICB0YXNrQ29udGVudC5wdXNoKGlucHV0Tm90ZXMudmFsdWUpO1xuXG4gICAgcmV0dXJuIHRhc2tDb250ZW50O1xufSIsImxldCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlVGFza3ModGFzaykge1xuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUYXNrcygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgZGl2ID0gW107XG5cbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHN0b3JhZ2VUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXZbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2W2ldLnRleHRDb250ZW50ID0gJ1RpdGxlOicgKyBzdG9yYWdlVGFza3NbaV0udGl0bGUgKyAnIERhdGU6JyArIHN0b3JhZ2VUYXNrc1tpXS5kdWVEYXRlO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdltpXSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgZm9ybVRhc2sgZnJvbSAnLi9mb3JtVGFzay5qcyc7XG5pbXBvcnQgc2F2ZVRhc2tzIGZyb20gJy4vc2F2ZVRhc2tzLmpzJztcbmltcG9ydCBzaG93VGFza3MgZnJvbSAnLi9zaG93VGFza3MuanMnO1xuXG5zaG93VGFza3MoKTtcblxuY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWRkLXRhc2snKTtcblxuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGZvcm1UYXNrKCk7XG5cbiAgICBpZighdGFza0NvbnRlbnQpIHJldHVybjtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0NvbnRlbnRbMF0sIHRhc2tDb250ZW50WzFdLCB0YXNrQ29udGVudFsyXSxcbiAgICAgICAgdGFza0NvbnRlbnRbM10sIHRhc2tDb250ZW50WzRdKTtcblxuICAgIHNhdmVUYXNrcyh0YXNrKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==