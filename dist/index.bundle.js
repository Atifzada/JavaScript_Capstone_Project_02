"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const logo = __webpack_require__(16);

const img = document.getElementById('img');
img.src = logo;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Puritan&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Alkatra\", cursive;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(60deg, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.nav {\r\n  color: #fff;\r\n  display: flex;\r\n\r\n  /* position: fixed; */\r\n  padding: 10px 30px;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  background: #2600c1;\r\n}\r\n\r\n.logo img {\r\n  height: 50px;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-list a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.smoothie-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 2em;\r\n  gap: 10%;\r\n}\r\n\r\n.smoothie-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 5em;\r\n  gap: 10%;\r\n}\r\n\r\n.myCard {\r\n  width: 17em;\r\n  height: auto;\r\n  margin: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-radius: 25px;\r\n  background: #2600c1;\r\n  box-shadow: 0 0 0.5em #0000;\r\n}\r\n\r\n.cardContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cardImg {\r\n  width: 12em;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.cardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.interation {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.likeBtn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.likeCounter {\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: #ffff;\r\n  margin: 2px;\r\n}\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\";\r\n  color: wheat;\r\n}\r\n\r\nfooter {\r\n  height: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter h5 {\r\n  color: #fff;\r\n  background: #2600c1;\r\n  padding: 20px;\r\n}\r\n\r\n/* Comments Popup */\r\n#closeBtn {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  align-self: self-end;\r\n  padding: 0 10px;\r\n  top: 0;\r\n}\r\n\r\n.popup {\r\n  padding: 0;\r\n}\r\n\r\n.dialog-container {\r\n  position: fixed;\r\n  border-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #ef5350;\r\n  width: 60vw;\r\n  border-radius: 2%;\r\n  margin: auto;\r\n  padding: 2%;\r\n  gap: 2%;\r\n}\r\n\r\n.specs {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n#popup-img {\r\n  width: 30%;\r\n  height: auto;\r\n  background-color: #fff;\r\n  border-radius: 3rem;\r\n}\r\n\r\n.comments-list {\r\n  height: 200px;\r\n}\r\n\r\n.comments-topic {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  color: #fff;\r\n  padding-top: 3%;\r\n}\r\n\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  gap: 12px;\r\n  width: auto;\r\n  color: #fff;\r\n}\r\n\r\n.contents {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: auto;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.comments-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  text-align: left;\r\n  align-self: self-start;\r\n}\r\n\r\n.comments-number {\r\n  align-self: center;\r\n}\r\n\r\n#list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n\r\nform,\r\n#add-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  padding: 5px 0 5px 8px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n#name {\r\n  width: 70%;\r\n}\r\n\r\n#submit {\r\n  /* width: 30%; */\r\n  align-self: self-start;\r\n  border: 2px solid #000;\r\n  box-shadow: 10px 10px 8px 1px #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n.display-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  border-color: transparent;\r\n  background: #343bb6;\r\n  width: 50%;\r\n  border-radius: 2rem;\r\n  margin: auto;\r\n  padding: 0 0 20px 0;\r\n  gap: 5px;\r\n}\r\n\r\n.no-scroll {\r\n  overflow: hidden;\r\n  position: sticky;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Puritan&family=Roboto&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Alkatra\", cursive;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(60deg, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.nav {\r\n  color: #fff;\r\n  display: flex;\r\n\r\n  /* position: fixed; */\r\n  padding: 10px 30px;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  background: #2600c1;\r\n}\r\n\r\n.logo img {\r\n  height: 50px;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-list a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.smoothie-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 2em;\r\n  gap: 10%;\r\n}\r\n\r\n.smoothie-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 5em;\r\n  gap: 10%;\r\n}\r\n\r\n.myCard {\r\n  width: 17em;\r\n  height: auto;\r\n  margin: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-radius: 25px;\r\n  background: #2600c1;\r\n  box-shadow: 0 0 0.5em #0000;\r\n}\r\n\r\n.cardContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cardImg {\r\n  width: 12em;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.cardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.interation {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.likeBtn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.likeCounter {\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: #ffff;\r\n  margin: 2px;\r\n}\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\";\r\n  color: wheat;\r\n}\r\n\r\nfooter {\r\n  height: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter h5 {\r\n  color: #fff;\r\n  background: #2600c1;\r\n  padding: 20px;\r\n}\r\n\r\n/* Comments Popup */\r\n#closeBtn {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  align-self: self-end;\r\n  padding: 0 10px;\r\n  top: 0;\r\n}\r\n\r\n.popup {\r\n  padding: 0;\r\n}\r\n\r\n.dialog-container {\r\n  position: fixed;\r\n  border-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #ef5350;\r\n  width: 60vw;\r\n  border-radius: 2%;\r\n  margin: auto;\r\n  padding: 2%;\r\n  gap: 2%;\r\n}\r\n\r\n.specs {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n#popup-img {\r\n  width: 30%;\r\n  height: auto;\r\n  background-color: #fff;\r\n  border-radius: 3rem;\r\n}\r\n\r\n.comments-list {\r\n  height: 200px;\r\n}\r\n\r\n.comments-topic {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  color: #fff;\r\n  padding-top: 3%;\r\n}\r\n\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  gap: 12px;\r\n  width: auto;\r\n  color: #fff;\r\n}\r\n\r\n.contents {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: auto;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.comments-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  text-align: left;\r\n  align-self: self-start;\r\n}\r\n\r\n.comments-number {\r\n  align-self: center;\r\n}\r\n\r\n#list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n\r\nform,\r\n#add-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  padding: 5px 0 5px 8px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n#name {\r\n  width: 70%;\r\n}\r\n\r\n#submit {\r\n  /* width: 30%; */\r\n  align-self: self-start;\r\n  border: 2px solid #000;\r\n  box-shadow: 10px 10px 8px 1px #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n.display-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  border-color: transparent;\r\n  background: #343bb6;\r\n  width: 50%;\r\n  border-radius: 2rem;\r\n  margin: auto;\r\n  padding: 0 0 20px 0;\r\n  gap: 5px;\r\n}\r\n\r\n.no-scroll {\r\n  overflow: hidden;\r\n  position: sticky;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _likesCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);





const counter = document.getElementById('add-new-link');
const container = document.getElementById('smoothie-container');
const fetchData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=42');
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    const myArray = data.results;
    // console.log(myArray);
    const LoadMyArray = myArray.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      // console.log(data);
      const myCard = document.createElement('div');
      myCard.classList = 'myCard';
      myCard.id = `${data.id}`;
      // console.log(data.id);
      myCard.innerHTML = `<div class="cardContent">
    <img src="${data.sprites.front_default}" alt="${data.name}" class="cardImg">
    <div class="cardTitle">
    <h2>${data.name}</h2>
    </div>
    <div class="interation">
    <button class='likeBtn' id="likeBtn"><i class="fa-regular fa-thumbs-up"></i></button>
    <span class='likeCounter'>0</span>
    <button data-modal-target="#popup${data.id}" class="comments-btn" id='${data.id}'>Comments</button>
    </div>
    
    <dialog id='popup${data.id}' class='comments-popup'>
    <button data-close-button id="closeDialoge" class="absolute btn-noBg" type="button" title="closing button">
     <a> &times;</a>
    </button>
    <img src="${data.sprites.front_default}" alt="${data.name}" id="popup-img">
    <div class="comments-topic">
      <h3>${data.name}</h3>
    </div>
    <div class="popup-content">
      <div class="contents">
        <div class="first-contents" >
        <p>Order: ${data.order}</p>
        <p>Weight: ${data.weight}</p>
        </div>
        <div class="second-contents">       
          <p>Height: ${data.height}</p>
          <p>Base experience: ${data.base_experience}</p>
        </div>
      </div>
      <div class="comments-display" id="comments-display">
      <h3 class="comments-number" id="comments-number">Comments (0)</h3>
      </div>
    
    <div id = "add-comments">
      <form id = 'comments-form'>
      <h4>Add a comment</h4> 
        <input id="name" type="text" placeholder="Your Name" required>
        <textarea id="comment" name="your-insights" placeholder="your-insights"></textarea>
        <button class="submit" id="submit" type="submit">Comment</button>
      </form>
    </div>
  </div> 
  </dialog>
    `;
      container.appendChild(myCard);
    });
    await Promise.all(LoadMyArray);
    (0,_likesCount_js__WEBPACK_IMPORTED_MODULE_1__.likes)();
    (0,_likesCount_js__WEBPACK_IMPORTED_MODULE_1__.likesDisplay)();
    (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__.commentsDisplay)();
    (0,_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(myArray.length, counter);
  } catch (error) {
    const errorMessage = 'Error, try again later.';
    const errorElement = document.createElement('div');
    errorElement.innerText = errorMessage;
    document.body.appendChild(errorElement);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemsCounter = (count, counter) => {
  counter.innerHTML = `Items count = ${count}`;
  return count;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likes": () => (/* binding */ likes),
/* harmony export */   "likesDisplay": () => (/* binding */ likesDisplay)
/* harmony export */ });
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/likes';

const likesDisplay = async () => {
  const likeBtns = document.querySelectorAll('.likeBtn');
  const likesCounter = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      likesCounter[index].innerHTML = Number(likesCounter[index].innerHTML) + 1;
      await fetch(involvementApi, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};
const likes = async () => {
  const likeCount = document.querySelectorAll('.likeCounter');
  const cards = document.querySelectorAll('.myCard');
  await fetch(involvementApi)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const cardsArray = Array.from(cards);
      // console.log(cardsArray);
      cardsArray.forEach((myCard, index) => {
        data.map((item) => {
          if (item.item_id === myCard.id) {
            likeCount[index].innerHTML = item.likes;
          }
          return likeCount[index].innerHTML;
        });
      });
    });
};



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsPopup = () => {
  // Open reservation modal
  const displayPopup = document.querySelectorAll('[data-modal-target]');
  displayPopup.forEach((button) => {
    button.addEventListener('click', () => {
      const displaySection = document.querySelector(button.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      displaySection.classList.add('display-section');
      if (!displaySection.open) {
        displaySection.showModal();
      }
    });
  });
  // Close comments modal
  document.addEventListener('DOMContentLoaded', () => {
    const closeBtns = document.querySelectorAll('[data-close-button]');
    console.log(closeBtns);
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        const displaySection = document.querySelector('.display-section');
        if (displaySection) {
          // const dialog = displaySection.getElementsById('closeBtn');
          const dialog = displaySection.querySelector('dialog');
          dialog.close();
          displaySection.classList.remove('display-section');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comments": () => (/* binding */ comments),
/* harmony export */   "commentsDisplay": () => (/* binding */ commentsDisplay)
/* harmony export */ });
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sExEVU49eBfzgZOnwbX2/comments';

// const comments = async () => {
//   const commentsCount = document.getElementById('comments-number');
//   const displaySection = document.querySelectorAll('.display-section');
//   await fetch(involvementApi)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       const cardsArray = Array.from(displaySection);
//       // console.log(cardsArray);

//       cardsArray.forEach((myCard, index) => {
//         const filterData = data.filter((item) => item.item_id === myCard.id);
//         const count = filterData.length;
//         commentsCount[index].innerHTML = count;
//       });
//     });
// };

// const commentsDisplay = async () => {
//   const submitBtns = document.querySelectorAll('.submit');
//   // const thumbsUp = document.querySelectorAll('.fa-thumbs-up');
//   const commentsCount = document.getElementById('comments-number');
//   const cards = document.querySelectorAll('.myCard');
//   // console.log(submitBtns);
//   if (submitBtns) {
//     submitBtns.forEach((button, index) => {
//       button.addEventListener('click', async () => {
//         commentsCount.innerHTML = Number(commentsCount.innerHTML) + 1;
//         await fetch(involvementApi, {
//           method: 'POST',
//           body: JSON.stringify({
//             item_id: cards[index].id,
//           }),
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         });
//       });
//     });
//   }
// };

const comments = async (info) => {
  const commentsHeader = new Headers();
  commentsHeader.append('Content-Type', 'application/json');
  const sendRequest = {
    method: 'POST',
    headers: commentsHeader,
    body: info,
    redirect: 'follow',
  };
  const request = new Request(involvementApi);
  await fetch(request, sendRequest);
};

const commentsDisplay = async () => {
  const myCard = document.querySelectorAll('.myCard');
  myCard.forEach((card) => {
    const displayPopup = card.querySelectorAll('[data-modal-target]');
    displayPopup.forEach((button) => {
      button.addEventListener('click', async () => {
        const details = JSON.stringify({
          item_id: `${button.id}`,
          username: card.querySelector('#name').value,
          comment: card.querySelector('#comment').value,
        });
        card.querySelector('#name').value = '';
        card.querySelector('#comment').value = '';
        await comments(details);
        /* Reload comments */
        const response = await fetch(`${involvementApi}?item_id=${button.id}`);
        const data = await response.json();
        const commentsCount = card.querySelector('.comments-number');
        commentsCount.innerHTML = '';
        data.forEach((cmnt) => {
          const list = document.createElement('li');
          list.innerHTML = `${cmnt.comment} - ${cmnt.creation_date} by ${cmnt.username}`;
          commentsCount.appendChild(list);
        });
      });
    });
  });
};



/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd443fb97d24182e6e75.png";

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZCxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZSxXQUFXLFVBQVU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjLElBQUksb0JBQW9CLEtBQUssY0FBYztBQUN2RjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZGlzcGxheURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9saWtlc0NvdW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2ZldGNoQ29tbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5RGF0YS5qcyc7XG5cbmZldGNoRGF0YSgpO1xuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uL3NvdXJjZXMvbXlsb2dvLnBuZycpO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nJyk7XG5pbWcuc3JjID0gbG9nbztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QdXJpdGFuJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxrYXRyYVxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2IoMjUyLCAwLCAyNTUpIDAlLCByZ2IoMCwgMjE5LCAyMjIpIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyNjAwYzE7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zbW9vdGhpZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5teUNhcmQge1xcclxcbiAgd2lkdGg6IDE3ZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyNjAwYzE7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzAwMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRJbWcge1xcclxcbiAgd2lkdGg6IDEyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnRlcmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRodW1icy11cDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2NFxcXCI7XFxyXFxuICBjb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGg1IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzI2MDBjMTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnRzIFBvcHVwICovXFxyXFxuI2Nsb3NlQnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYWxpZ24tc2VsZjogc2VsZi1lbmQ7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGdhcDogMiU7XFxyXFxufVxcclxcblxcclxcbi5zcGVjcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10b3BpYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy10b3A6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLW51bWJlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0sXFxyXFxuI2FkZC1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogNXB4IDAgNXB4IDhweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgLyogd2lkdGg6IDMwJTsgKi9cXHJcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAxcHggIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZDogIzM0M2JiNjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0ZBQW9GO0VBQ3BGLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhOztFQUViLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxh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QUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QdXJpdGFuJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWxrYXRyYVxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2IoMjUyLCAwLCAyNTUpIDAlLCByZ2IoMCwgMjE5LCAyMjIpIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyNjAwYzE7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zbW9vdGhpZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5teUNhcmQge1xcclxcbiAgd2lkdGg6IDE3ZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyNjAwYzE7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzAwMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRJbWcge1xcclxcbiAgd2lkdGg6IDEyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnRlcmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRodW1icy11cDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2NFxcXCI7XFxyXFxuICBjb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGg1IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzI2MDBjMTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnRzIFBvcHVwICovXFxyXFxuI2Nsb3NlQnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYWxpZ24tc2VsZjogc2VsZi1lbmQ7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGdhcDogMiU7XFxyXFxufVxcclxcblxcclxcbi5zcGVjcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10b3BpYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy10b3A6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLW51bWJlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0sXFxyXFxuI2FkZC1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogNXB4IDAgNXB4IDhweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgLyogd2lkdGg6IDMwJTsgKi9cXHJcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAxcHggIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZDogIzM0M2JiNjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsImltcG9ydCBpdGVtc0NvdW50ZXIgZnJvbSAnLi9jb3VudGVyLmpzJztcbmltcG9ydCB7IGxpa2VzLCBsaWtlc0Rpc3BsYXkgfSBmcm9tICcuL2xpa2VzQ291bnQuanMnO1xuaW1wb3J0IGNvbW1lbnRzUG9wdXAgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBjb21tZW50c0Rpc3BsYXkgfSBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctbGluaycpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ntb290aGllLWNvbnRhaW5lcicpO1xuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9MCZsaW1pdD00MicpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IG15QXJyYXkgPSBkYXRhLnJlc3VsdHM7XG4gICAgLy8gY29uc29sZS5sb2cobXlBcnJheSk7XG4gICAgY29uc3QgTG9hZE15QXJyYXkgPSBteUFycmF5Lm1hcChhc3luYyAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbGVtZW50LnVybCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zdCBteUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG15Q2FyZC5jbGFzc0xpc3QgPSAnbXlDYXJkJztcbiAgICAgIG15Q2FyZC5pZCA9IGAke2RhdGEuaWR9YDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuaWQpO1xuICAgICAgbXlDYXJkLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2FyZENvbnRlbnRcIj5cbiAgICA8aW1nIHNyYz1cIiR7ZGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHR9XCIgYWx0PVwiJHtkYXRhLm5hbWV9XCIgY2xhc3M9XCJjYXJkSW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRUaXRsZVwiPlxuICAgIDxoMj4ke2RhdGEubmFtZX08L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcmF0aW9uXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz0nbGlrZUJ0bicgaWQ9XCJsaWtlQnRuXCI+PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRodW1icy11cFwiPjwvaT48L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz0nbGlrZUNvdW50ZXInPjA8L3NwYW4+XG4gICAgPGJ1dHRvbiBkYXRhLW1vZGFsLXRhcmdldD1cIiNwb3B1cCR7ZGF0YS5pZH1cIiBjbGFzcz1cImNvbW1lbnRzLWJ0blwiIGlkPScke2RhdGEuaWR9Jz5Db21tZW50czwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaWFsb2cgaWQ9J3BvcHVwJHtkYXRhLmlkfScgY2xhc3M9J2NvbW1lbnRzLXBvcHVwJz5cbiAgICA8YnV0dG9uIGRhdGEtY2xvc2UtYnV0dG9uIGlkPVwiY2xvc2VEaWFsb2dlXCIgY2xhc3M9XCJhYnNvbHV0ZSBidG4tbm9CZ1wiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cImNsb3NpbmcgYnV0dG9uXCI+XG4gICAgIDxhPiAmdGltZXM7PC9hPlxuICAgIDwvYnV0dG9uPlxuICAgIDxpbWcgc3JjPVwiJHtkYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCIke2RhdGEubmFtZX1cIiBpZD1cInBvcHVwLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy10b3BpY1wiPlxuICAgICAgPGgzPiR7ZGF0YS5uYW1lfTwvaDM+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3QtY29udGVudHNcIiA+XG4gICAgICAgIDxwPk9yZGVyOiAke2RhdGEub3JkZXJ9PC9wPlxuICAgICAgICA8cD5XZWlnaHQ6ICR7ZGF0YS53ZWlnaHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZC1jb250ZW50c1wiPiAgICAgICBcbiAgICAgICAgICA8cD5IZWlnaHQ6ICR7ZGF0YS5oZWlnaHR9PC9wPlxuICAgICAgICAgIDxwPkJhc2UgZXhwZXJpZW5jZTogJHtkYXRhLmJhc2VfZXhwZXJpZW5jZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtZGlzcGxheVwiIGlkPVwiY29tbWVudHMtZGlzcGxheVwiPlxuICAgICAgPGgzIGNsYXNzPVwiY29tbWVudHMtbnVtYmVyXCIgaWQ9XCJjb21tZW50cy1udW1iZXJcIj5Db21tZW50cyAoMCk8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZCA9IFwiYWRkLWNvbW1lbnRzXCI+XG4gICAgICA8Zm9ybSBpZCA9ICdjb21tZW50cy1mb3JtJz5cbiAgICAgIDxoND5BZGQgYSBjb21tZW50PC9oND4gXG4gICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRcIiBuYW1lPVwieW91ci1pbnNpZ2h0c1wiIHBsYWNlaG9sZGVyPVwieW91ci1pbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PiBcbiAgPC9kaWFsb2c+XG4gICAgYDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteUNhcmQpO1xuICAgIH0pO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKExvYWRNeUFycmF5KTtcbiAgICBsaWtlcygpO1xuICAgIGxpa2VzRGlzcGxheSgpO1xuICAgIGNvbW1lbnRzUG9wdXAoKTtcbiAgICBjb21tZW50c0Rpc3BsYXkoKTtcbiAgICBpdGVtc0NvdW50ZXIobXlBcnJheS5sZW5ndGgsIGNvdW50ZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdFcnJvciwgdHJ5IGFnYWluIGxhdGVyLic7XG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yRWxlbWVudCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7IiwiY29uc3QgaXRlbXNDb3VudGVyID0gKGNvdW50LCBjb3VudGVyKSA9PiB7XG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gYEl0ZW1zIGNvdW50ID0gJHtjb3VudH1gO1xuICByZXR1cm4gY291bnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgaXRlbXNDb3VudGVyO1xuIiwiY29uc3QgaW52b2x2ZW1lbnRBcGkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvc0V4RVZVNDllQmZ6Z1pPbndiWDIvbGlrZXMnO1xuXG5jb25zdCBsaWtlc0Rpc3BsYXkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VCdG4nKTtcbiAgY29uc3QgbGlrZXNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VDb3VudGVyJyk7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Q2FyZCcpO1xuICBsaWtlQnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGlrZXNDb3VudGVyW2luZGV4XS5pbm5lckhUTUwgPSBOdW1iZXIobGlrZXNDb3VudGVyW2luZGV4XS5pbm5lckhUTUwpICsgMTtcbiAgICAgIGF3YWl0IGZldGNoKGludm9sdmVtZW50QXBpLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogY2FyZHNbaW5kZXhdLmlkLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgbGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlQ291bnRlcicpO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5teUNhcmQnKTtcbiAgYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRBcGkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgY2FyZHNBcnJheSA9IEFycmF5LmZyb20oY2FyZHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coY2FyZHNBcnJheSk7XG4gICAgICBjYXJkc0FycmF5LmZvckVhY2goKG15Q2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBteUNhcmQuaWQpIHtcbiAgICAgICAgICAgIGxpa2VDb3VudFtpbmRleF0uaW5uZXJIVE1MID0gaXRlbS5saWtlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxpa2VDb3VudFtpbmRleF0uaW5uZXJIVE1MO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgbGlrZXMsIGxpa2VzRGlzcGxheSB9OyIsImNvbnN0IGNvbW1lbnRzUG9wdXAgPSAoKSA9PiB7XG4gIC8vIE9wZW4gcmVzZXJ2YXRpb24gbW9kYWxcbiAgY29uc3QgZGlzcGxheVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpO1xuICBkaXNwbGF5UG9wdXAuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgICBkaXNwbGF5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LXNlY3Rpb24nKTtcbiAgICAgIGlmICghZGlzcGxheVNlY3Rpb24ub3Blbikge1xuICAgICAgICBkaXNwbGF5U2VjdGlvbi5zaG93TW9kYWwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8vIENsb3NlIGNvbW1lbnRzIG1vZGFsXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpO1xuICAgIGNvbnNvbGUubG9nKGNsb3NlQnRucyk7XG4gICAgY2xvc2VCdG5zLmZvckVhY2goKGNsb3NlQnRuKSA9PiB7XG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1zZWN0aW9uJyk7XG4gICAgICAgIGlmIChkaXNwbGF5U2VjdGlvbikge1xuICAgICAgICAgIC8vIGNvbnN0IGRpYWxvZyA9IGRpc3BsYXlTZWN0aW9uLmdldEVsZW1lbnRzQnlJZCgnY2xvc2VCdG4nKTtcbiAgICAgICAgICBjb25zdCBkaWFsb2cgPSBkaXNwbGF5U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICBkaXNwbGF5U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXNlY3Rpb24nKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNQb3B1cDsiLCJjb25zdCBpbnZvbHZlbWVudEFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9zRXhFVlU0OWVCZnpnWk9ud2JYMi9jb21tZW50cyc7XG5cbi8vIGNvbnN0IGNvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCBjb21tZW50c0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzLW51bWJlcicpO1xuLy8gICBjb25zdCBkaXNwbGF5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXNwbGF5LXNlY3Rpb24nKTtcbi8vICAgYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRBcGkpXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgY29uc3QgY2FyZHNBcnJheSA9IEFycmF5LmZyb20oZGlzcGxheVNlY3Rpb24pO1xuLy8gICAgICAgLy8gY29uc29sZS5sb2coY2FyZHNBcnJheSk7XG5cbi8vICAgICAgIGNhcmRzQXJyYXkuZm9yRWFjaCgobXlDYXJkLCBpbmRleCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBmaWx0ZXJEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gbXlDYXJkLmlkKTtcbi8vICAgICAgICAgY29uc3QgY291bnQgPSBmaWx0ZXJEYXRhLmxlbmd0aDtcbi8vICAgICAgICAgY29tbWVudHNDb3VudFtpbmRleF0uaW5uZXJIVE1MID0gY291bnQ7XG4vLyAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH07XG5cbi8vIGNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IGFzeW5jICgpID0+IHtcbi8vICAgY29uc3Qgc3VibWl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtaXQnKTtcbi8vICAgLy8gY29uc3QgdGh1bWJzVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdGh1bWJzLXVwJyk7XG4vLyAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMtbnVtYmVyJyk7XG4vLyAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Q2FyZCcpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhzdWJtaXRCdG5zKTtcbi8vICAgaWYgKHN1Ym1pdEJ0bnMpIHtcbi8vICAgICBzdWJtaXRCdG5zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbi8vICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgY29tbWVudHNDb3VudC5pbm5lckhUTUwgPSBOdW1iZXIoY29tbWVudHNDb3VudC5pbm5lckhUTUwpICsgMTtcbi8vICAgICAgICAgYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRBcGksIHtcbi8vICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICBpdGVtX2lkOiBjYXJkc1tpbmRleF0uaWQsXG4vLyAgICAgICAgICAgfSksXG4vLyAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyxcbi8vICAgICAgICAgICB9LFxuLy8gICAgICAgICB9KTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9O1xuXG5jb25zdCBjb21tZW50cyA9IGFzeW5jIChpbmZvKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gbmV3IEhlYWRlcnMoKTtcbiAgY29tbWVudHNIZWFkZXIuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBjb25zdCBzZW5kUmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBjb21tZW50c0hlYWRlcixcbiAgICBib2R5OiBpbmZvLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgfTtcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGludm9sdmVtZW50QXBpKTtcbiAgYXdhaXQgZmV0Y2gocmVxdWVzdCwgc2VuZFJlcXVlc3QpO1xufTtcblxuY29uc3QgY29tbWVudHNEaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBteUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXlDYXJkJyk7XG4gIG15Q2FyZC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheVBvcHVwID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJyk7XG4gICAgZGlzcGxheVBvcHVwLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGAke2J1dHRvbi5pZH1gLFxuICAgICAgICAgIHVzZXJuYW1lOiBjYXJkLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogY2FyZC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnZhbHVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBhd2FpdCBjb21tZW50cyhkZXRhaWxzKTtcbiAgICAgICAgLyogUmVsb2FkIGNvbW1lbnRzICovXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBcGl9P2l0ZW1faWQ9JHtidXR0b24uaWR9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1udW1iZXInKTtcbiAgICAgICAgY29tbWVudHNDb3VudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZGF0YS5mb3JFYWNoKChjbW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGlzdC5pbm5lckhUTUwgPSBgJHtjbW50LmNvbW1lbnR9IC0gJHtjbW50LmNyZWF0aW9uX2RhdGV9IGJ5ICR7Y21udC51c2VybmFtZX1gO1xuICAgICAgICAgIGNvbW1lbnRzQ291bnQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY29tbWVudHMsIGNvbW1lbnRzRGlzcGxheSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==