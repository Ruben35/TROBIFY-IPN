webpackHotUpdate_N_E("pages/registro/cliente",{

/***/ "./pages/registro/cliente.js":
/*!***********************************!*\
  !*** ./pages/registro/cliente.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistroCliente; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");



var _jsxFileName = "C:\\Users\\ruben\\Documents\\ESCOM\\6to Semestre\\ISW\\Proyecto\\TROBIFY-IPN\\web\\pages\\registro\\cliente.js",
    _this = undefined,
    _s = $RefreshSig$();







function RegistroCliente() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      minHeight: "64px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxWidth: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "h3",
          color: "secondary",
          children: "Registro Cliente"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
        elevation: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
          padding: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      minHeight: "64px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = RegistroCliente;
;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30)
    }
  };
});

var Form = function Form() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Selecciona imagen..."),
      photoName = _useState[0],
      setPhotoName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      imagePreview = _useState2[0],
      setImagePreview = _useState2[1];

  var photo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var changePhotoName = function changePhotoName(e) {
    e.preventDefault();
    var name = photo.current.files[0].name;
    if (name.length > 30) name = name.substring(0, 30) + "...";
    setPhotoName(name);
    setImagePreview( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      display: "flex",
      justifyContent: "center",
      marginBottom: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        alt: "Remy Sharp",
        src: URL.createObjectURL(photo.current.files[0]),
        className: classes.large
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 74
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(photo);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos Personales"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      margin: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 5,
        justify: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Nombre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Paterno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Materno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos de Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      margin: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        spacing: 5,
        justify: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Correo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            variant: "outlined",
            label: "Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Confirmar Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
        flexWrap: "wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
          marginRight: 1,
          marginBottom: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "body1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Foto de Perfil:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 88
            }, _this), " ", photoName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "contained",
          component: "label",
          color: "primary",
          children: ["Subir Foto", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            hidden: true,
            accept: "image/*",
            ref: photo,
            onChange: changePhotoName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), imagePreview, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "60%",
        margin: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "outlined",
          onClick: handleSubmit,
          fullWidth: true,
          color: "secondary",
          children: "Registrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, _this);
};

_s(Form, "9bay/pHwlTT00eTRpStGBTkDMjI=", false, function () {
  return [useStyles];
});

_c2 = Form;

var _c, _c2;

$RefreshReg$(_c, "RegistroCliente");
$RefreshReg$(_c2, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cm8vY2xpZW50ZS5qcyJdLCJuYW1lcyI6WyJSZWdpc3Ryb0NsaWVudGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsYXJnZSIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsIkZvcm0iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwaG90b05hbWUiLCJzZXRQaG90b05hbWUiLCJpbWFnZVByZXZpZXciLCJzZXRJbWFnZVByZXZpZXciLCJwaG90byIsInVzZVJlZiIsImNoYW5nZVBob3RvTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwiZmlsZXMiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxlQUFULEdBQTJCO0FBRXRDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkRBQUQ7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNJLHFFQUFDLDZEQUFEO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0Isc0JBQWMsRUFBQyxRQUFuQztBQUE0QyxrQkFBVSxFQUFDLFFBQXZEO0FBQWdFLGlCQUFTLEVBQUUsQ0FBM0U7QUFBOEUsb0JBQVksRUFBRSxDQUE1RjtBQUFBLCtCQUNJLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFLLEVBQUMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyx1REFBRDtB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LGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLEVBdUJLSixZQXZCTCxlQXdCSSxxRUFBQyw2REFBRDtBQUFLLGFBQUssRUFBQyxLQUFYO0FBQWlCLGNBQU0sRUFBQyxNQUF4QjtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sRUFBQyxVQUFoQjtBQUEyQixpQkFBTyxFQUFFYyxZQUFwQztBQUFrRCxtQkFBUyxNQUEzRDtBQUE0RCxlQUFLLEVBQUMsV0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkNILENBcEVEOztHQUFNbkIsSTtVQUNjUCxTOzs7TUFEZE8sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Ryby9jbGllbnRlLjY2NjIxZWQ3YTc5ZGFmY2UxNjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgUGFwZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cm9DbGllbnRlKCkge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjY0cHhcIj48L0JveD5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luVG9wPXsyfSBtYXJnaW5Cb3R0b209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwic2Vjb25kYXJ5XCI+UmVnaXN0cm8gQ2xpZW50ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0vPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjY0cHhcIj48L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGxhcmdlOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMwKSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMwKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+e1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtwaG90b05hbWUsIHNldFBob3RvTmFtZV0gPSB1c2VTdGF0ZShcIlNlbGVjY2lvbmEgaW1hZ2VuLi4uXCIpO1xyXG4gICAgY29uc3QgW2ltYWdlUHJldmlldywgc2V0SW1hZ2VQcmV2aWV3XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBwaG90byA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBob3RvTmFtZT0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbmFtZSA9IHBob3RvLmN1cnJlbnQuZmlsZXNbMF0ubmFtZTtcclxuICAgICAgICBpZihuYW1lLmxlbmd0aD4zMClcclxuICAgICAgICAgICAgbmFtZT1uYW1lLnN1YnN0cmluZygwLDMwKStcIi4uLlwiXHJcbiAgICAgICAgc2V0UGhvdG9OYW1lKG5hbWUpO1xyXG4gICAgICAgIHNldEltYWdlUHJldmlldyhcclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsyfT48QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uY3VycmVudC5maWxlc1swXSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz48L0JveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkRhdG9zIFBlcnNvbmFsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezN9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnk9XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIk5vbWJyZVwiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJBcGVsbGlkbyBQYXRlcm5vXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkFwZWxsaWRvIE1hdGVybm9cIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkRhdG9zIGRlIEN1ZW50YTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgICAgICA8Qm94IG1hcmdpbj17M30+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0ganVzdGlmeT1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQ29ycmVvXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvbnRyYXNlw7FhXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvbmZpcm1hciBDb250cmFzZcOxYVwiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1hcmdpbj17M30gZmxleFdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYXJnaW5SaWdodD17MX0gbWFyZ2luQm90dG9tPXsxfT48VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiA+PGI+Rm90byBkZSBQZXJmaWw6PC9iPiB7cGhvdG9OYW1lfTwvVHlwb2dyYXBoeT48L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJpciBGb3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlUGhvdG9OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD1cIjYwJVwiIG1hcmdpbj1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gZnVsbFdpZHRoIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvZm9ybT4gICAgIFxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=