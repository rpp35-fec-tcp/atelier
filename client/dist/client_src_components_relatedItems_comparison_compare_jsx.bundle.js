"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_relatedItems_comparison_compare_jsx"],{

/***/ "./client/src/components/relatedItems&comparison/compare.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/compare.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _getAndPost_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAndPost.jsx */ "./client/src/components/relatedItems&comparison/getAndPost.jsx");
/* harmony import */ var _tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableEntry.jsx */ "./client/src/components/relatedItems&comparison/tableEntry.jsx");






var _React$lazy = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-icons_gr_index_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js"));
}),
    GrCheckmark = _React$lazy.GrCheckmark;



function Compare(_ref) {
  var show = _ref.show,
      comparedProductInfo = _ref.comparedProductInfo,
      currentProductInfo = _ref.currentProductInfo,
      changeShow = _ref.changeShow;
  var cur = currentProductInfo.features;
  var com = comparedProductInfo.features;
  var combinedFeatures = [];
  var existedFeatures = new Set();

  var getFeatures = function getFeatures() {
    for (var i = 0; i < cur.length; i++) {
      combinedFeatures[i] = [];
      combinedFeatures[i][0] = cur[i].feature;
      combinedFeatures[i][1] = cur[i].value;
      existedFeatures.add(cur[i].feature);

      for (var j = 0; j < com.length; j++) {
        if (com[j].feature === cur[i].feature) {
          combinedFeatures[i][2] = com[j].value;
        } else {
          combinedFeatures[i][2] = '';
        }
      }
    }

    for (var i = 0; i < com.length; i++) {
      if (!existedFeatures.has(com[i].feature)) {
        combinedFeatures[combinedFeatures.length] = [com[i].feature, '', com[i].value];
      }
    }
  };

  getFeatures();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: show,
    onHide: changeShow,
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, "Comparing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "currentTitle"
  }, currentProductInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, comparedProductInfo.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__.TableEntry, {
    current: currentProductInfo.slogan,
    description: "slogan",
    compared: comparedProductInfo.slogan
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__.TableEntry, {
    current: currentProductInfo.description,
    description: "description",
    compared: comparedProductInfo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__.TableEntry, {
    current: currentProductInfo.default_price,
    description: "default price",
    compared: comparedProductInfo.default_price
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__.TableEntry, {
    current: currentProductInfo.category,
    description: "category",
    compared: comparedProductInfo.category
  }), combinedFeatures.length > 0 && combinedFeatures.map(function (combine, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__.TableEntry, {
      key: index,
      current: combine[1] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrCheckmark, null) || combine[1],
      description: combine[0],
      compared: combine[2] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrCheckmark, null) || combine[2]
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "secondary",
    onClick: function onClick() {
      return changeShow();
    }
  }, "Close"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/tableEntry.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/tableEntry.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableEntry": () => (/* binding */ TableEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TableEntry(_ref) {
  var current = _ref.current,
      description = _ref.description,
      compared = _ref.compared;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, current || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "description"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, compared || ''));
}

/***/ })

}]);
//# sourceMappingURL=client_src_components_relatedItems_comparison_compare_jsx.bundle.js.map