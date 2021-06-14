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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      apPat = _useState4[0],
      setApPat = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      apMat = _useState5[0],
      setApMat = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      pswd = _useState7[0],
      setPswd = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      confPswd = _useState8[0],
      setConfPswd = _useState8[1];

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
        lineNumber: 57,
        columnNumber: 74
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var error = "";
    var isPhotoNoEmpty = photo.current.files.length != 1;

    if (photo.current.files.length != 1) {
      error = "Seleccione una foto de perfil";
    }

    if (name === "") {
      error = "Agregue su nombre completo";
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos Personales"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
            error: true,
            value: name,
            onChange: function onChange(e) {
              setName(e.target.value);
            },
            label: "Nombre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            value: apPat,
            onChange: function onChange(e) {
              setApPat(e.target.value);
            },
            label: "Apellido Paterno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            value: apMat,
            onChange: function onChange(e) {
              setApMat(e.target.value);
            },
            label: "Apellido Materno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos de Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            type: "email",
            value: email,
            onChange: function onChange(e) {
              setEmail(e.target.value);
            },
            variant: "outlined",
            label: "Correo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            value: pswd,
            onChange: function onChange(e) {
              setPswd(e.target.value);
            },
            variant: "outlined",
            label: "Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            value: confPswd,
            onChange: function onChange(e) {
              setConfPswd(e.target.value);
            },
            variant: "outlined",
            label: "Confirmar Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
              lineNumber: 93,
              columnNumber: 88
            }, _this), " ", photoName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
            lineNumber: 100,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), imagePreview, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "60%",
        margin: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "outlined",
          type: "submit",
          fullWidth: true,
          color: "secondary",
          children: "Registrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, _this);
};

_s(Form, "LJSUnRWJ4ynNuFgAsCFP8CrF1bM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cm8vY2xpZW50ZS5qcyJdLCJuYW1lcyI6WyJSZWdpc3Ryb0NsaWVudGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsYXJnZSIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsIkZvcm0iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwaG90b05hbWUiLCJzZXRQaG90b05hbWUiLCJpbWFnZVByZXZpZXciLCJzZXRJbWFnZVByZXZpZXciLCJwaG90byIsInVzZVJlZiIsIm5hbWUiLCJzZXROYW1lIiwiYXBQYXQiLCJzZXRBcFBhdCIsImFwTWF0Iiwic2V0QXBNYXQiLCJlbWFpbCIsInNldEVtYWlsIiwicHN3ZCIsInNldFBzd2QiLCJjb25mUHN3ZCIsInNldENvbmZQc3dkIiwiY2hhbmdlUGhvdG9OYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsImZpbGVzIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJpc1Bob3RvTm9FbXB0eSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxlQUFULEdBQTJCO0FBRXRDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkRBQUQ7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNJLHFFQUFDLDZEQUFEO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0Isc0JBQWMsRUFBQyxRQUFuQztBQUE0QyxrQkFBVSxFQUFDLFFBQXZEO0FBQWdFLGlCQUFTLEVBQUUsQ0FBM0U7QUFBOEUsb0JBQVksRUFBRSxDQUE1RjtBQUFBLCtCQUNJ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QUFDLFdBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZDSCxDQWpGRDs7R0FBTUwsSTtVQUNjUCxTOzs7TUFEZE8sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Ryby9jbGllbnRlLjIwOGNiZjM0OWRmZGY2ZWI3YTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgUGFwZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cm9DbGllbnRlKCkge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjY0cHhcIj48L0JveD5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luVG9wPXsyfSBtYXJnaW5Cb3R0b209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwic2Vjb25kYXJ5XCI+UmVnaXN0cm8gQ2xpZW50ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0vPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjY0cHhcIj48L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGxhcmdlOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDMwKSxcclxuICAgICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMwKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+e1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtwaG90b05hbWUsIHNldFBob3RvTmFtZV0gPSB1c2VTdGF0ZShcIlNlbGVjY2lvbmEgaW1hZ2VuLi4uXCIpO1xyXG4gICAgY29uc3QgW2ltYWdlUHJldmlldywgc2V0SW1hZ2VQcmV2aWV3XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBwaG90byA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYXBQYXQsIHNldEFwUGF0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FwTWF0LCBzZXRBcE1hdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcHN3ZCwgc2V0UHN3ZF0gPSB1c2VTdGF0ZShcIlwiKTsgXHJcbiAgICBjb25zdCBbY29uZlBzd2Qsc2V0Q29uZlBzd2RdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGhvdG9OYW1lPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBuYW1lID0gcGhvdG8uY3VycmVudC5maWxlc1swXS5uYW1lO1xyXG4gICAgICAgIGlmKG5hbWUubGVuZ3RoPjMwKVxyXG4gICAgICAgICAgICBuYW1lPW5hbWUuc3Vic3RyaW5nKDAsMzApK1wiLi4uXCJcclxuICAgICAgICBzZXRQaG90b05hbWUobmFtZSk7XHJcbiAgICAgICAgc2V0SW1hZ2VQcmV2aWV3KFxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYXJnaW5Cb3R0b209ezJ9PjxBdmF0YXIgYWx0PVwiUmVteSBTaGFycFwiIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChwaG90by5jdXJyZW50LmZpbGVzWzBdKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhcmdlfSAvPjwvQm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZXJyb3I9XCJcIjtcclxuICAgICAgICB2YXIgaXNQaG90b05vRW1wdHk9cGhvdG8uY3VycmVudC5maWxlcy5sZW5ndGghPTE7XHJcbiAgICAgICAgaWYocGhvdG8uY3VycmVudC5maWxlcy5sZW5ndGghPTEpe1xyXG4gICAgICAgICAgICBlcnJvcj1cIlNlbGVjY2lvbmUgdW5hIGZvdG8gZGUgcGVyZmlsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5hbWU9PT1cIlwiKXtcclxuICAgICAgICAgICAgZXJyb3I9XCJBZ3JlZ3VlIHN1IG5vbWJyZSBjb21wbGV0b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkRhdG9zIFBlcnNvbmFsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezN9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnk9XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBlcnJvciB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKT0+e3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0gbGFiZWw9XCJOb21icmVcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHZhbHVlPXthcFBhdH0gb25DaGFuZ2U9eyhlKT0+e3NldEFwUGF0KGUudGFyZ2V0LnZhbHVlKX19IGxhYmVsPVwiQXBlbGxpZG8gUGF0ZXJub1wiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgdmFsdWU9e2FwTWF0fSBvbkNoYW5nZT17KGUpPT57c2V0QXBNYXQoZS50YXJnZXQudmFsdWUpfX0gbGFiZWw9XCJBcGVsbGlkbyBNYXRlcm5vXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5EYXRvcyBkZSBDdWVudGE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezN9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnk9XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvcnJlb1wiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bzd2R9IG9uQ2hhbmdlPXsoZSk9PntzZXRQc3dkKGUudGFyZ2V0LnZhbHVlKX19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtjb25mUHN3ZH0gb25DaGFuZ2U9eyhlKT0+e3NldENvbmZQc3dkKGUudGFyZ2V0LnZhbHVlKX19IHZhcmlhbnQ9XCJvdXRsaW5lZFwibGFiZWw9XCJDb25maXJtYXIgQ29udHJhc2XDsWFcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW49ezN9IGZsZXhXcmFwPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luUmlnaHQ9ezF9IG1hcmdpbkJvdHRvbT17MX0+PFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgPjxiPkZvdG8gZGUgUGVyZmlsOjwvYj4ge3Bob3RvTmFtZX08L1R5cG9ncmFwaHk+PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3ViaXIgRm90b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBob3RvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUHJldmlld31cclxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI2MCVcIiBtYXJnaW49XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiB0eXBlPXtcInN1Ym1pdFwifSBmdWxsV2lkdGggY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9mb3JtPiAgICAgXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==