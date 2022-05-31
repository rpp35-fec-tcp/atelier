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
/* eslint-disable react/prop-types */

/* eslint-disable jsx-a11y/click-events-have-key-events */


function AddToOutfit(_ref) {
  var id = _ref.id,
      addToOutfit = _ref.addToOutfit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card",
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      return addToOutfit(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center',
      paddingTop: '54%',
      fontSize: '30px',
      color: 'gray'
    }
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: '20px',
      color: 'gray'
    }
  }, "Add to OutFit List"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToOutfit);

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
/* harmony import */ var _addToOutfit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToOutfit.jsx */ "./client/src/components/relatedItems&comparison/addToOutfit.jsx");


var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-bootstrap_esm_Button_js-node_modules_react-bootstrap_esm_Modal_js--cb9ca4"), __webpack_require__.e("client_src_components_relatedItems_comparison_card_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card.jsx */ "./client/src/components/relatedItems&comparison/card.jsx"));
});

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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Card, {
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
    return productId === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_addToOutfit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: currentProductId,
      key: currentProductId,
      addToOutfit: addToOutfit,
      draggable: false
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Card, {
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

/***/ })

}]);
//# sourceMappingURL=client_src_components_relatedItems_comparison_carousel_jsx.bundle.js.map