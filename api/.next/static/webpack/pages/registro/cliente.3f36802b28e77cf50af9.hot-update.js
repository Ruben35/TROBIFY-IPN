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



var _jsxFileName = "C:\\Users\\ruben\\Documents\\ESCOM\\6to Semestre\\ISW\\Proyecto\\TROBIFY-IPN\\web\\pages\\registro\\cliente.js",
    _this = undefined,
    _s = $RefreshSig$();




function RegistroCliente() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      minHeight: "64px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
          lineNumber: 13,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
        elevation: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
          padding: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = RegistroCliente;
;

var Form = function Form() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Selecciona imagen..."),
      photoName = _useState[0],
      setPhotoName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      imagePreview = _useState2[0],
      setImagePreview = _useState2[1];

  var photo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var changePhotoName = function changePhotoName() {
    setPhotoName(photo.current.files[0].name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos Personales"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 41,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Paterno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Materno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos de Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
            lineNumber: 50,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            variant: "outlined",
            label: "Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Confirmar Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
              lineNumber: 55,
              columnNumber: 88
            }, _this), " ", photoName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
            lineNumber: 62,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(Form, "smiyw/zyR+hnnm7A6uURblhsWP8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cm8vY2xpZW50ZS5qcyJdLCJuYW1lcyI6WyJSZWdpc3Ryb0NsaWVudGUiLCJGb3JtIiwidXNlU3RhdGUiLCJwaG90b05hbWUiLCJzZXRQaG90b05hbWUiLCJpbWFnZVByZXZpZXciLCJzZXRJbWFnZVByZXZpZXciLCJwaG90byIsInVzZVJlZiIsImNoYW5nZVBob3RvTmFtZSIsImN1cnJlbnQiLCJmaWxlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxlQUFULEdBQTJCO0FBRXRDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkRBQUQ7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNJLHFFQUFDLDZEQUFEO0FBQUssZUFBTyxFQUFDLE1BQWI7QUFBb0Isc0JBQWMsRUFBQyxRQUFuQztBQUE0QyxrQkFBVSxFQUFDLFFBQXZEO0FBQWdFLGlCQUFTLEVBQUUsQ0FBM0U7QUFBOEUsb0JBQVksRUFBRSxDQUE1RjtBQUFBLCtCQUNJLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFLLEVBQUMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyx1REFBRDtBQUFPLGlCQUFTLEVBQUUsQ0FBbEI7QUFBQSwrQkFDSSxxRUFBQyw2REFBRDtBQUFLLGlCQUFPLEVBQUUsQ0FBZDtBQUFBLGlDQUNJLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7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ZTc3Y2Y1MGFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIERpdmlkZXIsIEdyaWQsIFBhcGVyLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnXHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cm9DbGllbnRlKCkge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjY0cHhcIj48L0JveD5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luVG9wPXsyfSBtYXJnaW5Cb3R0b209ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwic2Vjb25kYXJ5XCI+UmVnaXN0cm8gQ2xpZW50ZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0vPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT57XHJcbiAgICBjb25zdCBbcGhvdG9OYW1lLCBzZXRQaG90b05hbWVdID0gdXNlU3RhdGUoXCJTZWxlY2Npb25hIGltYWdlbi4uLlwiKTtcclxuICAgIGNvbnN0IFtpbWFnZVByZXZpZXcsIHNldEltYWdlUHJldmlld10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgcGhvdG8gPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQaG90b05hbWU9ICgpID0+e1xyXG4gICAgICAgIHNldFBob3RvTmFtZShwaG90by5jdXJyZW50LmZpbGVzWzBdLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkRhdG9zIFBlcnNvbmFsZXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyLz5cclxuICAgICAgICAgICAgPEJveCBtYXJnaW49ezN9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGp1c3RpZnk9XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIk5vbWJyZVwiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJBcGVsbGlkbyBQYXRlcm5vXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkFwZWxsaWRvIE1hdGVybm9cIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkRhdG9zIGRlIEN1ZW50YTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgICAgICA8Qm94IG1hcmdpbj17M30+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0ganVzdGlmeT1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQ29ycmVvXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvbnRyYXNlw7FhXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkNvbmZpcm1hciBDb250cmFzZcOxYVwiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1hcmdpbj17M30gZmxleFdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYXJnaW5SaWdodD17MX0gbWFyZ2luQm90dG9tPXsxfT48VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiA+PGI+Rm90byBkZSBQZXJmaWw6PC9iPiB7cGhvdG9OYW1lfTwvVHlwb2dyYXBoeT48L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJpciBGb3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlUGhvdG9OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvZm9ybT4gICAgIFxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=