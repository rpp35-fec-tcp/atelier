"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_relatedItems_comparison_card_jsx"],{

/***/ "./client/src/components/relatedItems&comparison/card.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/card.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _starRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starRating */ "./client/src/components/relatedItems&comparison/starRating.jsx");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./price */ "./client/src/components/relatedItems&comparison/price.jsx");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compare */ "./client/src/components/relatedItems&comparison/compare.jsx");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactions */ "./client/src/components/relatedItems&comparison/interactions.jsx");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/prop-types */








var Card = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    _this = _super.call(this, props);
    _this.state = {
      comparedProductInfo: _this.props.productInfo,
      show: false
    };
    _this.starClicked = false;
    _this.changeShow = _this.changeShow.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.cardClicked = _this.cardClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "changeShow",
    value: function changeShow() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "cardClicked",
    value: function cardClicked(e) {
      if (this.starClicked === false) {
        this.props.changeCurrentProductId(this.state.comparedProductInfo.id);
        (0,_interactions__WEBPACK_IMPORTED_MODULE_7__["default"])(e, 'related');
      } else {
        this.starClicked = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "card",
        role: "button",
        tabIndex: "0",
        onClick: function onClick(e) {
          return _this2.cardClicked(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "image-holder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("img", {
        src: this.state.comparedProductInfo.defaultItem.photos[0].thumbnail_url,
        element: "changeCardClicked",
        className: "card-image",
        alt: this.state.comparedProductInfo.defaultItem.name
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, this.state.comparedProductInfo.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h5", {
        className: "card-title"
      }, this.state.comparedProductInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_price__WEBPACK_IMPORTED_MODULE_8__["default"], {
        defaultItem: this.state.comparedProductInfo.defaultItem
      }), this.state.comparedProductInfo.reviewRating !== -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_starRating__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: this.state.comparedProductInfo.reviewRating
      })), this.state.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_compare__WEBPACK_IMPORTED_MODULE_10__["default"], {
        show: this.state.show,
        comparedProductInfo: this.state.comparedProductInfo,
        currentProductInfo: this.props.currentProductInfo,
        changeShow: this.changeShow
      })), this.props.type === 'related' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaRegStar, {
        title: "star",
        className: "iconTop",
        onClick: function onClick() {
          _this2.starClicked = true;

          _this2.setState({
            show: true
          });
        }
      }), this.props.type === 'outfit' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__.BsXLg, {
        className: "iconTop",
        element: "comparison",
        onClick: function onClick() {
          _this2.props.deleteOutfit(_this2.props.productInfo.id);
        }
      }));
    }
  }]);

  return Card;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/compare.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/compare.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var _tableEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableEntry */ "./client/src/components/relatedItems&comparison/tableEntry.jsx");
/* eslint-disable react/no-array-index-key */

/* eslint-disable no-plusplus */

/* eslint-disable react/prop-types */







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

    for (var _i = 0; _i < com.length; _i++) {
      if (!existedFeatures.has(com[_i].feature)) {
        combinedFeatures[combinedFeatures.length] = [com[_i].feature, '', com[_i].value];
      }
    }
  };

  getFeatures();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "modal",
    show: show,
    onHide: changeShow,
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Comparing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    role: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    title: "currentTitle",
    className: "currentTitle"
  }, currentProductInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    title: "comparedTitle"
  }, comparedProductInfo.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: currentProductInfo.slogan,
    description: "slogan",
    compared: comparedProductInfo.slogan
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: currentProductInfo.description,
    description: "description",
    compared: comparedProductInfo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: currentProductInfo.default_price,
    description: "default price",
    compared: comparedProductInfo.default_price
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: currentProductInfo.category,
    description: "category",
    compared: comparedProductInfo.category
  }), combinedFeatures.length > 0 && combinedFeatures.map(function (combine, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tableEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      current: combine[1] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrCheckmark, null) || combine[1],
      description: combine[0],
      compared: combine[2] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrCheckmark, null) || combine[2]
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "button",
    variant: "secondary",
    onClick: function onClick() {
      return changeShow();
    }
  }, "Close"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/interactions.jsx":
/*!************************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/interactions.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function Interaction(e, widget) {
  var d = new Date();
  var time = "".concat(d.getTime());
  var element = e.target.getAttribute('element');
  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
    type: 'POST',
    url: '/related/interactions',
    data: JSON.stringify({
      element: element,
      widget: widget,
      time: time
    }),
    contentType: 'application/json',
    success: function success() {
      return console.log('success');
    },
    err: function err(_err) {
      return console.log(_err);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interaction);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/price.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/price.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/prop-types */


function Price(_ref) {
  var defaultItem = _ref.defaultItem;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, defaultItem.sale_price === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "originalPrice"
  }, defaultItem.original_price), defaultItem.sale_price !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "crossOutOriginalPrice"
  }, defaultItem.original_price), defaultItem.sale_price !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "salePrice"
  }, defaultItem.sale_price));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/starRating.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/starRating.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/Rating/Rating.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* eslint-disable react/prop-types */




function StarRating(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "read-only",
    size: "small",
    value: value,
    precision: 0.1,
    readOnly: true
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/tableEntry.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/tableEntry.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/prop-types */


function TableEntry(_ref) {
  var current = _ref.current,
      description = _ref.description,
      compared = _ref.compared;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, current || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "description"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, compared || ''));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableEntry);

/***/ })

}]);
//# sourceMappingURL=client_src_components_relatedItems_comparison_card_jsx.bundle.js.map