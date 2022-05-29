"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_relatedItems_comparison_carousel_jsx"],{

/***/ "./client/src/components/relatedItems&comparison/addToOutfit.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/addToOutfit.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AddToOutfit(_ref) {
  var id = _ref.id,
      addToOutfit = _ref.addToOutfit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card",
    onClick: function onClick() {
      return addToOutfit(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center',
      paddingTop: '60%',
      fontSize: '30px'
    }
  }, "+"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToOutfit);

/***/ }),

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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/Rating/Rating.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _getAndPost_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getAndPost.jsx */ "./client/src/components/relatedItems&comparison/getAndPost.jsx");
/* harmony import */ var _compare_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compare.jsx */ "./client/src/components/relatedItems&comparison/compare.jsx");






function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var Card = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    _this = _super.call(this, props);
    _this.state = {
      relatedProductInfo: null,
      relatedProductStyle: null,
      defaultItem: null,
      reviewRating: 0,
      show: false
    };
    _this.starClicked = false;
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.update(); //unit test for getReviews, to check whether rating is calculated correctly, also check whether rating is hidden is there is no review

      (0,_getAndPost_jsx__WEBPACK_IMPORTED_MODULE_8__.getReviews)(this.props.id, function (data) {
        var ratings = data.ratings;
        var keys = Object.keys(ratings);
        var sum = 0;
        var count = 0;
        var rating = 0;

        if (keys.length > 0) {
          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;
              sum += Number(key) * Number(ratings[key]);
              count += Number(ratings[key]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          rating = sum / count;
        } else {
          rating = -1;
        }

        _this2.setState({
          reviewRating: rating
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      (0,_getAndPost_jsx__WEBPACK_IMPORTED_MODULE_8__.getOneProduct)(this.props.id, function (data) {
        _this3.setState({
          relatedProductInfo: data
        });
      });
      (0,_getAndPost_jsx__WEBPACK_IMPORTED_MODULE_8__.getOneProductStyle)(this.props.id, function (data) {
        _this3.setState({
          relatedProductStyle: data
        });

        _this3.getDefaultItem(data.results);
      });
    }
  }, {
    key: "rating",
    value: function rating(value) {
      if (value !== -1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], {
          spacing: 1
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: "read-only",
          size: "small",
          value: value,
          precision: 0.1,
          readOnly: true
        }));
      }
    } //default is not always the 1st result in results array, so we need to check the defaul? === true
    //unit test for price whether default true is selected for pricing,
    //unit test for price whether sales price is used if it is not null

  }, {
    key: "getDefaultItem",
    value: function getDefaultItem(results) {
      var defaultItem = results.filter(function (result) {
        return result['default?'];
      });
      defaultItem = defaultItem.length === 0 ? results[0] : defaultItem[0];
      this.setState({
        defaultItem: defaultItem
      });
    }
  }, {
    key: "price",
    value: function price(defaultItem) {
      if (defaultItem.sale_price === null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
          className: "originalPrice"
        }, defaultItem.original_price);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
          className: "crossOutOriginalPrice"
        }, defaultItem.original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
          className: "salePrice"
        }, defaultItem.sale_price));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "card",
        onClick: function onClick() {
          if (_this4.starClicked === false) {
            _this4.props.changeCurrentProductId(_this4.state.relatedProductInfo.id);
          } else {
            _this4.starClicked = false;
          }
        }
      }, this.state.defaultItem !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "image-holder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("img", {
        src: this.state.defaultItem.photos[0].thumbnail_url,
        className: "card-img-top",
        alt: this.state.defaultItem.name
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: "card-body"
      }, this.state.relatedProductInfo !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, this.state.relatedProductInfo.category), this.state.relatedProductInfo !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h5", {
        className: "card-title"
      }, this.state.relatedProductInfo.name), this.state.defaultItem !== null && this.price(this.state.defaultItem), this.rating(this.state.reviewRating)), this.state.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_compare_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        show: this.state.show,
        comparedProductInfo: this.state.relatedProductInfo,
        currentProductInfo: this.props.currentProductInfo,
        changeShow: this.changeShow.bind(this)
      })), this.props.type === 'related' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaRegStar, {
        className: "icon",
        onClick: function onClick(e) {
          _this4.starClicked = true;

          _this4.setState({
            show: true
          });
        }
      }), this.props.type === 'outfit' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsXLg, {
        className: "icon",
        onClick: function onClick(e) {
          _this4.props.deleteOutfit(_this4.props.id);
        }
      }));
    }
  }]);

  return Card;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./client/src/components/relatedItems&comparison/carousel.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/relatedItems&comparison/carousel.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.jsx */ "./client/src/components/relatedItems&comparison/card.jsx");
/* harmony import */ var _addToOutfit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addToOutfit.jsx */ "./client/src/components/relatedItems&comparison/addToOutfit.jsx");




var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3.5,
    paritialVisibilityGutter: 80
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2.5,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1.5,
    paritialVisibilityGutter: 30
  }
};

var SimpleCarousel = function SimpleCarousel(_ref) {
  var relatedProducts = _ref.relatedProducts,
      currentProductId = _ref.currentProductId,
      currentProductInfo = _ref.currentProductInfo,
      changeCurrentProductId = _ref.changeCurrentProductId,
      addToOutfit = _ref.addToOutfit,
      deleteOutfit = _ref.deleteOutfit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, relatedProducts[0] !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_multi_carousel__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ssr: true,
    partialVisibile: true,
    itemClass: "image-item",
    autoPlay: false,
    responsive: responsive
  }, relatedProducts.map(function (productId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: productId,
      key: productId,
      changeCurrentProductId: changeCurrentProductId,
      currentProductInfo: currentProductInfo,
      type: "related",
      draggable: false,
      style: {
        width: "100%",
        height: "100%"
      }
    }));
  })), relatedProducts[0] === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_multi_carousel__WEBPACK_IMPORTED_MODULE_0__["default"], {
    partialVisibile: true,
    itemClass: "image-item",
    autoPlay: false,
    responsive: responsive,
    renderArrowsWhenDisabled: false
  }, relatedProducts.map(function (productId) {
    return productId === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_addToOutfit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: currentProductId,
      key: currentProductId,
      addToOutfit: addToOutfit,
      draggable: false
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: productId,
      key: productId,
      addToOutfit: addToOutfit,
      changeCurrentProductId: changeCurrentProductId,
      currentProductInfo: currentProductInfo,
      type: "outfit",
      deleteOutfit: deleteOutfit,
      draggable: false,
      style: {
        width: "100%",
        height: "100%"
      }
    }));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleCarousel);

/***/ }),

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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _getAndPost_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAndPost.jsx */ "./client/src/components/relatedItems&comparison/getAndPost.jsx");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var _tableEntry_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableEntry.jsx */ "./client/src/components/relatedItems&comparison/tableEntry.jsx");








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
      current: combine[1] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrCheckmark, null) || combine[1],
      description: combine[0],
      compared: combine[2] === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__.GrCheckmark, null) || combine[2]
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
//# sourceMappingURL=client_src_components_relatedItems_comparison_carousel_jsx.bundle.js.map