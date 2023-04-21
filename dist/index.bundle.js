"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



(0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const logo = __webpack_require__(18);

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Alkatra\", cursive;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(60deg, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.nav {\r\n  color: #2600c1;\r\n  display: flex;\r\n  padding: 10px 30px;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  background: #f1f1f1;\r\n}\r\n\r\n.logo img {\r\n  height: 50px;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-list a {\r\n  text-decoration: none;\r\n  color: #2600c1;\r\n  font-size: x-large;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5%;\r\n  font-size: 3rem;\r\n  text-shadow: 2px 10px 4px #000;\r\n  font-size: 4rem;\r\n  color: #fff;\r\n}\r\n\r\n.smoothie-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 2em;\r\n  gap: 10%;\r\n}\r\n\r\n.smoothie-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 10%;\r\n}\r\n\r\n.myCard {\r\n  width: 17em;\r\n  height: auto;\r\n  margin: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-radius: 25px;\r\n  background: #1f1e24;\r\n  box-shadow: 0 0 0.5em #0000;\r\n}\r\n\r\n.cardContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cardImg {\r\n  width: 12em;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.cardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.interation {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.likeBtn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.likeCounter {\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: #ffff;\r\n  margin: 2px;\r\n}\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\";\r\n  color: wheat;\r\n}\r\n\r\n#closeBtn {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  align-self: self-end;\r\n  padding: 0 10px;\r\n  top: 0;\r\n}\r\n\r\n.popup {\r\n  padding: 0;\r\n}\r\n\r\n.dialog-container {\r\n  position: fixed;\r\n  border-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #ef5350;\r\n  width: 60vw;\r\n  border-radius: 2%;\r\n  margin: auto;\r\n  padding: 2%;\r\n  gap: 2%;\r\n}\r\n\r\n\r\n#popup-img {\r\n  width: 20%;\r\n  background-color: #fff;\r\n  border-radius: 3rem;\r\n}\r\n\r\n.comments-list {\r\n  height: 200px;\r\n}\r\n\r\n.comments-topic {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  color: #fff;\r\n  padding-top: 3%;\r\n}\r\n\r\n.comments-btn {\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  gap: 12px;\r\n  width: auto;\r\n  color: #fff;\r\n}\r\n\r\n.contents {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: auto;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.comments-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  text-align: left;\r\n  align-self: self-start;\r\n}\r\n\r\n.comments-number {\r\n  align-self: center;\r\n}\r\n\r\n#list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n\r\nform,\r\n#add-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  padding: 5px 0 5px 8px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n#name {\r\n  width: 70%;\r\n}\r\n\r\n#submit {\r\n  align-self: self-start;\r\n  border: 2px solid #000;\r\n  box-shadow: 10px 10px 8px 1px #000;\r\n  padding: 5px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.display-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  border-color: transparent;\r\n  background: #8b8b8b;\r\n  width: 60%;\r\n  height: 100vh;\r\n  border-radius: 2rem;\r\n  margin: auto;\r\n  padding: 0 0 20px 0;\r\n  gap: 5px;\r\n}\r\n\r\n.no-scroll {\r\n  overflow: hidden;\r\n  position: sticky;\r\n}\r\n\r\nfooter {\r\n  height: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter h5 {\r\n  color: #fff;\r\n  background: #2600c1;\r\n  padding: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Puritan&family=Roboto&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Alkatra\", cursive;\r\n}\r\n\r\nbody {\r\n  background-image: linear-gradient(60deg, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.nav {\r\n  color: #2600c1;\r\n  display: flex;\r\n  padding: 10px 30px;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  background: #f1f1f1;\r\n}\r\n\r\n.logo img {\r\n  height: 50px;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.nav-list a {\r\n  text-decoration: none;\r\n  color: #2600c1;\r\n  font-size: x-large;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 5%;\r\n  font-size: 3rem;\r\n  text-shadow: 2px 10px 4px #000;\r\n  font-size: 4rem;\r\n  color: #fff;\r\n}\r\n\r\n.smoothie-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-top: 2em;\r\n  gap: 10%;\r\n}\r\n\r\n.smoothie-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 10%;\r\n}\r\n\r\n.myCard {\r\n  width: 17em;\r\n  height: auto;\r\n  margin: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1rem 0.5rem;\r\n  border-radius: 25px;\r\n  background: #1f1e24;\r\n  box-shadow: 0 0 0.5em #0000;\r\n}\r\n\r\n.cardContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cardImg {\r\n  width: 12em;\r\n  height: auto;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.cardTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  color: #fff;\r\n}\r\n\r\n.interation {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.likeBtn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n}\r\n\r\n.likeCounter {\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: #ffff;\r\n  margin: 2px;\r\n}\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\";\r\n  color: wheat;\r\n}\r\n\r\n#closeBtn {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  height: 30px;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  align-self: self-end;\r\n  padding: 0 10px;\r\n  top: 0;\r\n}\r\n\r\n.popup {\r\n  padding: 0;\r\n}\r\n\r\n.dialog-container {\r\n  position: fixed;\r\n  border-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #ef5350;\r\n  width: 60vw;\r\n  border-radius: 2%;\r\n  margin: auto;\r\n  padding: 2%;\r\n  gap: 2%;\r\n}\r\n\r\n\r\n#popup-img {\r\n  width: 20%;\r\n  background-color: #fff;\r\n  border-radius: 3rem;\r\n}\r\n\r\n.comments-list {\r\n  height: 200px;\r\n}\r\n\r\n.comments-topic {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 12px;\r\n  color: #fff;\r\n  padding-top: 3%;\r\n}\r\n\r\n.comments-btn {\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-self: center;\r\n  gap: 12px;\r\n  width: auto;\r\n  color: #fff;\r\n}\r\n\r\n.contents {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: auto;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.comments-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  text-align: left;\r\n  align-self: self-start;\r\n}\r\n\r\n.comments-number {\r\n  align-self: center;\r\n}\r\n\r\n#list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n\r\nform,\r\n#add-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  padding: 5px 0 5px 8px;\r\n  border: 2px solid #000;\r\n  border-radius: 0.1rem;\r\n}\r\n\r\n#name {\r\n  width: 70%;\r\n}\r\n\r\n#submit {\r\n  align-self: self-start;\r\n  border: 2px solid #000;\r\n  box-shadow: 10px 10px 8px 1px #000;\r\n  padding: 5px;\r\n  border-radius: 7px;\r\n}\r\n\r\n.display-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: fixed;\r\n  border-color: transparent;\r\n  background: #8b8b8b;\r\n  width: 60%;\r\n  height: 100vh;\r\n  border-radius: 2rem;\r\n  margin: auto;\r\n  padding: 0 0 20px 0;\r\n  gap: 5px;\r\n}\r\n\r\n.no-scroll {\r\n  overflow: hidden;\r\n  position: sticky;\r\n}\r\n\r\nfooter {\r\n  height: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter h5 {\r\n  color: #fff;\r\n  background: #2600c1;\r\n  padding: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);






const counter = document.getElementById('add-new-link');
const container = document.getElementById('smoothie-container');
const fetchData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=42');
    const data = await response.json();
    const myArray = data.results;
    const LoadMyArray = myArray.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      const myCard = document.createElement('div');
      myCard.classList = 'myCard';
      myCard.id = `${data.id}`;
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
    <button data-close-button id='closeBtn' class='closeBtn' title ='closing button' type='button'>
     <a> &times;</a>
    </button>
    <img src="${data.sprites.front_default}" alt="${data.name}" id="popup-img">
    <div class="comments-topic">
      <h2>${data.name}</h2>
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
      <div class="commentsList" id="commentsList">
      </div>
    <div id = "add-comments">
      <form id = 'comments-form' action = '' class = 'form'>
      <h4>Add a comment</h4> 
        <input id="name" class = "name" type="text" placeholder="Your Name" required/>
        <textarea id="textarea" class = "textarea" name="your-insights" placeholder="your-insights"></textarea>
        <button class="submit" id="submit" type="button">Comment</button>
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
    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/likes';

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
      const cardsArray = Array.from(cards);
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
  const closeButton = document.querySelectorAll('[data-close-button]');
  closeButton.forEach((btnC) => {
    btnC.addEventListener('click', () => {
      const popup = btnC.closest('.display-section');
      const dialogContainer = document.querySelector('.display-section');
      popup.close();
      dialogContainer.classList.remove('display-section');
      document.body.classList.remove('no-scroll');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsPopup);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/comments';

const AddComments = async () => {
  /* Selecting the cards */
  const cardContainers = document.querySelectorAll('.myCard');
  cardContainers.forEach((card) => {
    /* Selecting cards components (btns - title) */
    const modal = card.querySelectorAll('.submit');
    const commentsCount = card.querySelectorAll('.comments-number');
    modal.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        const commentForm = card.querySelectorAll('.form');
        /* Getting the values from the form */
        commentForm.forEach(async (form) => {
          const data = {
            item_id: `${card.id}`,
            username: form.querySelector('#name').value,
            comment: form.querySelector('#textarea').value,
          };
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow',
          };
          await fetch(InvolvementApi, requestOptions);
          /* Reset the form */
          form.querySelector('#name').value = '';
          form.querySelector('#textarea').value = '';
          /* Reload comments */
          const res = await fetch(`${InvolvementApi}?item_id=${card.id}`);
          const comments = await res.json();
          const commentCounter = comments.length;
          const div = card.querySelector('.commentsList');
          div.innerHTML = '';
          comments.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: "${comment.comment}"`;
            div.appendChild(li);
          });
          commentsCount.forEach((count) => {
            if (commentCounter > 0) {
              (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(commentCounter, count);
            }
          });
        });
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddComments);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (counter, link) => {
  link.innerHTML = `Comments (${counter})`;
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


const InvolvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bTEn2aJ1AxwKWzc1t6qt/comments';
const displayComments = async () => {
  const cardContainers = document.querySelectorAll('.myCard');
  cardContainers.forEach((card) => {
    const commentsCount = card.querySelectorAll('.comments-number');
    const modal = card.querySelectorAll('[data-modal-target]');
    modal.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const res = await fetch(`${InvolvementApi}?item_id=${btn.id}`);
          const data = await res.json();
          const commentCounter = data.length;
          const div = card.querySelector('.commentsList');
          div.innerHTML = '';
          data.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: "${comment.comment}"`;
            div.appendChild(li);
          });
          commentsCount.forEach((count) => {
            if (commentCounter > 0) {
              (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(commentCounter, count);
            }
          });
          return true;
        } catch (error) {
          return error;
        }
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd443fb97d24182e6e75.png";

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxX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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWUsV0FBVyxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUIsRUFBRSxpQkFBaUIsS0FBSyxnQkFBZ0I7QUFDN0Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGNBQWMsK0RBQWU7QUFDN0I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7QUN0RDFCO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7OztBQ0xxQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWUsV0FBVyxPQUFPO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUIsRUFBRSxpQkFBaUIsS0FBSyxnQkFBZ0I7QUFDN0Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGNBQWMsK0RBQWU7QUFDN0I7QUFDQSxXQUFXO0FBQ1g7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlJdGVtcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2xpa2VzQ291bnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZmV0Y2hDb21tZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL21vZHVsZXMvZGlzcGxheUl0ZW1zLmpzJztcblxuZmV0Y2hEYXRhKCk7XG5jb25zdCBsb2dvID0gcmVxdWlyZSgnLi4vc291cmNlcy9teWxvZ28ucG5nJyk7XG5cbmNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcnKTtcbmltZy5zcmMgPSBsb2dvO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVB1cml0YW4mZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGthdHJhXFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsIHJnYigyNTIsIDAsIDI1NSkgMCUsIHJnYigwLCAyMTksIDIyMikgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGNvbG9yOiAjMjYwMGMxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzI2MDBjMTtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA1JTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMTBweCA0cHggIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc21vb3RoaWUtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5zbW9vdGhpZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlDYXJkIHtcXHJcXG4gIHdpZHRoOiAxN2VtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMWYxZTI0O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkSW1nIHtcXHJcXG4gIHdpZHRoOiAxMmVtO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkVGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50ZXJhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VCdG4ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlQ291bnRlciB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5mYS10aHVtYnMtdXA6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGYxNjRcXFwiO1xcclxcbiAgY29sb3I6IHdoZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2VCdG4ge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBhbGlnbi1zZWxmOiBzZWxmLWVuZDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1MzUwO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgZ2FwOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3BvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10b3BpYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy10b3A6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbnVtYmVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSxcXHJcXG4jYWRkLWNvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0LFxcclxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMCA1cHggOHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggMXB4ICMwMDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQ6ICM4YjhiOGI7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uby1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGg1IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzI2MDBjMTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxvRkFBb0Y7RUFDcEYsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87QUFDVDs7O0FBR0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHVyaXRhbiZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFsa2F0cmFcXFwiLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgcmdiKDI1MiwgMCwgMjU1KSAwJSwgcmdiKDAsIDIxOSwgMjIyKSAxMDAlKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgY29sb3I6ICMyNjAwYzE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMjYwMGMxO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDUlO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAxMHB4IDRweCAjMDAwO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zbW9vdGhpZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5teUNhcmQge1xcclxcbiAgd2lkdGg6IDE3ZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxZjFlMjQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzAwMDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRJbWcge1xcclxcbiAgd2lkdGg6IDEyZW07XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRUaXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnRlcmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VDb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRodW1icy11cDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjE2NFxcXCI7XFxyXFxuICBjb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZUJ0biB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBnYXA6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcG9wdXAtaW1nIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLXRvcGljIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLXRvcDogMyU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG4ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1udW1iZXIge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLFxcclxcbiNhZGQtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQsXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA4cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCAxcHggIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZDogIzhiOGI4YjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaDUge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjYwMGMxO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJpbXBvcnQgaXRlbXNDb3VudGVyIGZyb20gJy4vY291bnRlci5qcyc7XG5pbXBvcnQgeyBsaWtlcywgbGlrZXNEaXNwbGF5IH0gZnJvbSAnLi9saWtlc0NvdW50LmpzJztcbmltcG9ydCBjb21tZW50c1BvcHVwIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IEFkZENvbW1lbnRzIGZyb20gJy4vZmV0Y2hDb21tZW50cy5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LWxpbmsnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbW9vdGhpZS1jb250YWluZXInKTtcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PTAmbGltaXQ9NDInKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IG15QXJyYXkgPSBkYXRhLnJlc3VsdHM7XG4gICAgY29uc3QgTG9hZE15QXJyYXkgPSBteUFycmF5Lm1hcChhc3luYyAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbGVtZW50LnVybCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgbXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBteUNhcmQuY2xhc3NMaXN0ID0gJ215Q2FyZCc7XG4gICAgICBteUNhcmQuaWQgPSBgJHtkYXRhLmlkfWA7XG4gICAgICBteUNhcmQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjYXJkQ29udGVudFwiPlxuICAgIDxpbWcgc3JjPVwiJHtkYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCIke2RhdGEubmFtZX1cIiBjbGFzcz1cImNhcmRJbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFRpdGxlXCI+XG4gICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImludGVyYXRpb25cIj5cbiAgICA8YnV0dG9uIGNsYXNzPSdsaWtlQnRuJyBpZD1cImxpa2VCdG5cIj48aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdGh1bWJzLXVwXCI+PC9pPjwvYnV0dG9uPlxuICAgIDxzcGFuIGNsYXNzPSdsaWtlQ291bnRlcic+MDwvc3Bhbj5cbiAgICA8YnV0dG9uIGRhdGEtbW9kYWwtdGFyZ2V0PVwiI3BvcHVwJHtkYXRhLmlkfVwiIGNsYXNzPVwiY29tbWVudHMtYnRuXCIgaWQ9JyR7ZGF0YS5pZH0nPkNvbW1lbnRzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpYWxvZyBpZD0ncG9wdXAke2RhdGEuaWR9JyBjbGFzcz0nY29tbWVudHMtcG9wdXAnPlxuICAgIDxidXR0b24gZGF0YS1jbG9zZS1idXR0b24gaWQ9J2Nsb3NlQnRuJyBjbGFzcz0nY2xvc2VCdG4nIHRpdGxlID0nY2xvc2luZyBidXR0b24nIHR5cGU9J2J1dHRvbic+XG4gICAgIDxhPiAmdGltZXM7PC9hPlxuICAgIDwvYnV0dG9uPlxuICAgIDxpbWcgc3JjPVwiJHtkYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIiBhbHQ9XCIke2RhdGEubmFtZX1cIiBpZD1cInBvcHVwLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy10b3BpY1wiPlxuICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3QtY29udGVudHNcIiA+XG4gICAgICAgIDxwPk9yZGVyOiAke2RhdGEub3JkZXJ9PC9wPlxuICAgICAgICA8cD5XZWlnaHQ6ICR7ZGF0YS53ZWlnaHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZC1jb250ZW50c1wiPiAgICAgICBcbiAgICAgICAgICA8cD5IZWlnaHQ6ICR7ZGF0YS5oZWlnaHR9PC9wPlxuICAgICAgICAgIDxwPkJhc2UgZXhwZXJpZW5jZTogJHtkYXRhLmJhc2VfZXhwZXJpZW5jZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtZGlzcGxheVwiIGlkPVwiY29tbWVudHMtZGlzcGxheVwiPlxuICAgICAgPGgzIGNsYXNzPVwiY29tbWVudHMtbnVtYmVyXCIgaWQ9XCJjb21tZW50cy1udW1iZXJcIj5Db21tZW50cyAoMCk8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzTGlzdFwiIGlkPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkID0gXCJhZGQtY29tbWVudHNcIj5cbiAgICAgIDxmb3JtIGlkID0gJ2NvbW1lbnRzLWZvcm0nIGFjdGlvbiA9ICcnIGNsYXNzID0gJ2Zvcm0nPlxuICAgICAgPGg0PkFkZCBhIGNvbW1lbnQ8L2g0PiBcbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzID0gXCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkLz5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dGFyZWFcIiBjbGFzcyA9IFwidGV4dGFyZWFcIiBuYW1lPVwieW91ci1pbnNpZ2h0c1wiIHBsYWNlaG9sZGVyPVwieW91ci1pbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PiBcbiAgPC9kaWFsb2c+XG4gICAgYDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteUNhcmQpO1xuICAgIH0pO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKExvYWRNeUFycmF5KTtcbiAgICBsaWtlcygpO1xuICAgIGxpa2VzRGlzcGxheSgpO1xuICAgIGNvbW1lbnRzUG9wdXAoKTtcbiAgICBkaXNwbGF5Q29tbWVudHMoKTtcbiAgICBBZGRDb21tZW50cygpO1xuICAgIGl0ZW1zQ291bnRlcihteUFycmF5Lmxlbmd0aCwgY291bnRlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ0Vycm9yLCB0cnkgYWdhaW4gbGF0ZXIuJztcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50KTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTsiLCJjb25zdCBpdGVtc0NvdW50ZXIgPSAoY291bnQsIGNvdW50ZXIpID0+IHtcbiAgY291bnRlci5pbm5lckhUTUwgPSBgSXRlbXMgY291bnQgPSAke2NvdW50fWA7XG4gIHJldHVybiBjb3VudDtcbn07XG5leHBvcnQgZGVmYXVsdCBpdGVtc0NvdW50ZXI7XG4iLCJjb25zdCBpbnZvbHZlbWVudEFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iVEVuMmFKMUF4d0tXemMxdDZxdC9saWtlcyc7XG5cbmNvbnN0IGxpa2VzRGlzcGxheSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZUJ0bicpO1xuICBjb25zdCBsaWtlc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZUNvdW50ZXInKTtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXlDYXJkJyk7XG4gIGxpa2VCdG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBsaWtlc0NvdW50ZXJbaW5kZXhdLmlubmVySFRNTCA9IE51bWJlcihsaWtlc0NvdW50ZXJbaW5kZXhdLmlubmVySFRNTCkgKyAxO1xuICAgICAgYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRBcGksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBjYXJkc1tpbmRleF0uaWQsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBsaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VDb3VudGVyJyk7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Q2FyZCcpO1xuICBhd2FpdCBmZXRjaChpbnZvbHZlbWVudEFwaSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY2FyZHNBcnJheSA9IEFycmF5LmZyb20oY2FyZHMpO1xuICAgICAgY2FyZHNBcnJheS5mb3JFYWNoKChteUNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gbXlDYXJkLmlkKSB7XG4gICAgICAgICAgICBsaWtlQ291bnRbaW5kZXhdLmlubmVySFRNTCA9IGl0ZW0ubGlrZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsaWtlQ291bnRbaW5kZXhdLmlubmVySFRNTDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IGxpa2VzLCBsaWtlc0Rpc3BsYXkgfTsiLCJjb25zdCBjb21tZW50c1BvcHVwID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJyk7XG4gIGRpc3BsYXlQb3B1cC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uLmRhdGFzZXQubW9kYWxUYXJnZXQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICAgIGRpc3BsYXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktc2VjdGlvbicpO1xuICAgICAgaWYgKCFkaXNwbGF5U2VjdGlvbi5vcGVuKSB7XG4gICAgICAgIGRpc3BsYXlTZWN0aW9uLnNob3dNb2RhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG4gIGNsb3NlQnV0dG9uLmZvckVhY2goKGJ0bkMpID0+IHtcbiAgICBidG5DLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcG9wdXAgPSBidG5DLmNsb3Nlc3QoJy5kaXNwbGF5LXNlY3Rpb24nKTtcbiAgICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXNlY3Rpb24nKTtcbiAgICAgIHBvcHVwLmNsb3NlKCk7XG4gICAgICBkaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1zZWN0aW9uJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb21tZW50c1BvcHVwOyIsImltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xuXG5jb25zdCBJbnZvbHZlbWVudEFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iVEVuMmFKMUF4d0tXemMxdDZxdC9jb21tZW50cyc7XG5cbmNvbnN0IEFkZENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAvKiBTZWxlY3RpbmcgdGhlIGNhcmRzICovXG4gIGNvbnN0IGNhcmRDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Q2FyZCcpO1xuICBjYXJkQ29udGFpbmVycy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgLyogU2VsZWN0aW5nIGNhcmRzIGNvbXBvbmVudHMgKGJ0bnMgLSB0aXRsZSkgKi9cbiAgICBjb25zdCBtb2RhbCA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1pdCcpO1xuICAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cy1udW1iZXInKTtcbiAgICBtb2RhbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKTtcbiAgICAgICAgLyogR2V0dGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGZvcm0gKi9cbiAgICAgICAgY29tbWVudEZvcm0uZm9yRWFjaChhc3luYyAoZm9ybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBpdGVtX2lkOiBgJHtjYXJkLmlkfWAsXG4gICAgICAgICAgICB1c2VybmFtZTogZm9ybS5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlLFxuICAgICAgICAgICAgY29tbWVudDogZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKS52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYXdhaXQgZmV0Y2goSW52b2x2ZW1lbnRBcGksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgICAvKiBSZXNldCB0aGUgZm9ybSAqL1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI3RleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICAgICAgICAvKiBSZWxvYWQgY29tbWVudHMgKi9cbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtJbnZvbHZlbWVudEFwaX0/aXRlbV9pZD0ke2NhcmQuaWR9YCk7XG4gICAgICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgIGNvbnN0IGNvbW1lbnRDb3VudGVyID0gY29tbWVudHMubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzTGlzdCcpO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06IFwiJHtjb21tZW50LmNvbW1lbnR9XCJgO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21tZW50c0NvdW50LmZvckVhY2goKGNvdW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWVudENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbW1lbnRzQ291bnRlcihjb21tZW50Q291bnRlciwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRzOyIsImNvbnN0IGNvbW1lbnRzQ291bnRlciA9IChjb3VudGVyLCBsaW5rKSA9PiB7XG4gIGxpbmsuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KWA7XG4gIHJldHVybiBjb3VudGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudGVyOyIsImltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xuXG5jb25zdCBJbnZvbHZlbWVudEFwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9iVEVuMmFKMUF4d0tXemMxdDZxdC9jb21tZW50cyc7XG5jb25zdCBkaXNwbGF5Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNhcmRDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15Q2FyZCcpO1xuICBjYXJkQ29udGFpbmVycy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY29uc3QgY29tbWVudHNDb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzLW51bWJlcicpO1xuICAgIGNvbnN0IG1vZGFsID0gY2FyZC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXRdJyk7XG4gICAgbW9kYWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7SW52b2x2ZW1lbnRBcGl9P2l0ZW1faWQ9JHtidG4uaWR9YCk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgY29uc3QgY29tbWVudENvdW50ZXIgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBkaXYgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50c0xpc3QnKTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06IFwiJHtjb21tZW50LmNvbW1lbnR9XCJgO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21tZW50c0NvdW50LmZvckVhY2goKGNvdW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWVudENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbW1lbnRzQ291bnRlcihjb21tZW50Q291bnRlciwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbW1lbnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==