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
  var name = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var apPat = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var apMat = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var email = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var pswd = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var confPswd = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

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
    var isPhotoEmpty = photo.current.files.length != 1;
    alert("hola");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos Personales"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
            lineNumber: 73,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Paterno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Materno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos de Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
            variant: "outlined",
            label: "Correo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            variant: "outlined",
            label: "Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Confirmar Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
              lineNumber: 87,
              columnNumber: 88
            }, _this), " ", photoName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 94,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
          lineNumber: 105,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }, _this);
};

_s(Form, "esenYdPaokkwERdy8dLVde8yLFE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cm8vY2xpZW50ZS5qcyJdLCJuYW1lcyI6WyJSZWdpc3Ryb0NsaWVudGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsYXJnZSIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsIkZvcm0iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwaG90b05hbWUiLCJzZXRQaG90b05hbWUiLCJpbWFnZVByZXZpZXciLCJzZXRJbWFnZVByZXZpZXciLCJwaG90byIsInVzZVJlZiIsIm5hbWUiLCJhcFBhdCIsImFwTWF0IiwiZW1haWwiLCJwc3dkIiwiY29uZlBzd2QiLCJjaGFuZ2VQaG90b05hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZmlsZXMiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVTdWJtaXQiLCJpc1Bob3RvRW1wdHkiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsZUFBVCxHQUEyQjtBQUV0QyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDZEQUFEO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsMkRBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDSSxxRUFBQyw2REFBRDtBQUFLLGVBQU8sRUFBQyxNQUFiO0FBQW9CLHNCQUFjLEVBQUMsUUFBbkM7QUFBNEMsa0JBQVUsRUFBQyxRQUF2RDtBQUFnRSxpQkFBUyxFQUFFLENBQTNFO0FBQThFLG9CQUFZLEVBQUUsQ0FBNUY7QUFBQSwrQkFDSSxxRUFBQyw0REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBSyxFQUFDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFDLE9BQXBCO0FBQUEsb0NBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QixPQUFxRHJCLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsd0RBQUQ7QUFDSSxpQkFBTyxFQUFDLFdBRFo7QUFFSSxtQkFBUyxFQUFDLE9BRmQ7QUFHSSxlQUFLLEVBQUMsU0FIVjtBQUFBLGdEQU1JO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksa0JBQU0sTUFGVjtBQUdJLGtCQUFNLEVBQUMsU0FIWDtBQUlJLGVBQUcsRUFBRUksS0FKVDtBQUtJLG9CQUFRLEVBQUVRO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosRUF1QktWLFlBdkJMLGVBd0JJLHFFQUFDLDZEQUFEO0FBQUssYUFBSyxFQUFDLEtBQVg7QUFBaUIsY0FBTSxFQUFDLE1BQXhCO0FBQUEsK0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFVBQWhCO0FBQTJCLGNBQUksRUFBRSxRQUFqQztBQUEyQyxtQkFBUyxNQUFwRDtBQUFxRCxlQUFLLEVBQUMsV0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkNILENBM0VEOztHQUFNTCxJO1VBQ2NQLFM7OztNQURkTyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdHJvL2NsaWVudGUuODdlNzNiMGQ3NzYyMmM5MzEwNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkLCBQYXBlciwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94J1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Ryb0NsaWVudGUoKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggbWluSGVpZ2h0PVwiNjRweFwiPjwvQm94PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW5Ub3A9ezJ9IG1hcmdpbkJvdHRvbT17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5SZWdpc3RybyBDbGllbnRlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS8+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxCb3ggbWluSGVpZ2h0PVwiNjRweFwiPjwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgbGFyZ2U6IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMzApLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMzApLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT57XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob3RvTmFtZSwgc2V0UGhvdG9OYW1lXSA9IHVzZVN0YXRlKFwiU2VsZWNjaW9uYSBpbWFnZW4uLi5cIik7XHJcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3LCBzZXRJbWFnZVByZXZpZXddID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHBob3RvID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBuYW1lID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBhcFBhdCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYXBNYXQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBwc3dkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBjb25mUHN3ZCA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVBob3RvTmFtZT0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbmFtZSA9IHBob3RvLmN1cnJlbnQuZmlsZXNbMF0ubmFtZTtcclxuICAgICAgICBpZihuYW1lLmxlbmd0aD4zMClcclxuICAgICAgICAgICAgbmFtZT1uYW1lLnN1YnN0cmluZygwLDMwKStcIi4uLlwiXHJcbiAgICAgICAgc2V0UGhvdG9OYW1lKG5hbWUpO1xyXG4gICAgICAgIHNldEltYWdlUHJldmlldyhcclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsyfT48QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uY3VycmVudC5maWxlc1swXSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz48L0JveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlzUGhvdG9FbXB0eT1waG90by5jdXJyZW50LmZpbGVzLmxlbmd0aCE9MTtcclxuICAgICAgICBhbGVydChcImhvbGFcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5EYXRvcyBQZXJzb25hbGVzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luPXszfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fSBqdXN0aWZ5PVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJOb21icmVcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQXBlbGxpZG8gUGF0ZXJub1wiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJBcGVsbGlkbyBNYXRlcm5vXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5EYXRvcyBkZSBDdWVudGE8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezN9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnk9XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB0eXBlPVwiZW1haWxcIiB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvcnJlb1wiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJDb250cmFzZcOxYVwiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJDb25maXJtYXIgQ29udHJhc2XDsWFcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW49ezN9IGZsZXhXcmFwPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWFyZ2luUmlnaHQ9ezF9IG1hcmdpbkJvdHRvbT17MX0+PFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgPjxiPkZvdG8gZGUgUGVyZmlsOjwvYj4ge3Bob3RvTmFtZX08L1R5cG9ncmFwaHk+PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3ViaXIgRm90b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBob3RvTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUHJldmlld31cclxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCI2MCVcIiBtYXJnaW49XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiB0eXBlPXtcInN1Ym1pdFwifSBmdWxsV2lkdGggY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9mb3JtPiAgICAgXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==