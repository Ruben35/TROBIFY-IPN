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

  var changePhotoName = function changePhotoName() {
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
        lineNumber: 50,
        columnNumber: 74
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos Personales"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
            lineNumber: 60,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Paterno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Apellido Materno"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      children: "Datos de Cuenta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
            lineNumber: 69,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            type: "password",
            variant: "outlined",
            label: "Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            label: "Confirmar Contrase\xF1a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
              lineNumber: 74,
              columnNumber: 88
            }, _this), " ", photoName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
            lineNumber: 81,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), imagePreview, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "60%",
        margin: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "outlined",
          fullWidth: true,
          color: "secondary",
          children: "Registrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cm8vY2xpZW50ZS5qcyJdLCJuYW1lcyI6WyJSZWdpc3Ryb0NsaWVudGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsYXJnZSIsIndpZHRoIiwic3BhY2luZyIsImhlaWdodCIsIkZvcm0iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJwaG90b05hbWUiLCJzZXRQaG90b05hbWUiLCJpbWFnZVByZXZpZXciLCJzZXRJbWFnZVByZXZpZXciLCJwaG90byIsInVzZVJlZiIsImNoYW5nZVBob3RvTmFtZSIsIm5hbWUiLCJjdXJyZW50IiwiZmlsZXMiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLGVBQVQsR0FBMkI7QUFFdEMsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw2REFBRDtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDJEQUFEO0FBQVcsY0FBUSxFQUFDLElBQXBCO0FBQUEsOEJBQ0kscUVBQUMsNkRBQUQ7QUFBSyxlQUFPLEVBQUMsTUFBYjtBQUFvQixzQkFBYyxFQUFDLFFBQW5DO0FBQTRDLGtCQUFVLEVBQUMsUUFBdkQ7QUFBZ0UsaUJBQVMsRUFBRSxDQUEzRTtBQUE4RSxvQkFBWSxFQUFFLENBQTVGO0FBQUEsK0JBQ0kscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQUssRUFBQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLHVEQUFEO0FBQU8saUJBQVMsRUFBRSxDQUFsQjtBQUFBLCtCQUNJLHFFQUFDLDZEQUFEO0FBQUssaUJB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkNILENBOUREOztHQUFNTCxJO1VBQ2NQLFM7OztNQURkTyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdHJvL2NsaWVudGUuMjM2NDQzYmE4OTc1OWQyOGY3MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkLCBQYXBlciwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94J1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Ryb0NsaWVudGUoKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggbWluSGVpZ2h0PVwiNjRweFwiPjwvQm94PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW5Ub3A9ezJ9IG1hcmdpbkJvdHRvbT17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5SZWdpc3RybyBDbGllbnRlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHBhZGRpbmc9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS8+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxCb3ggbWluSGVpZ2h0PVwiNjRweFwiPjwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgbGFyZ2U6IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMzApLFxyXG4gICAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMzApLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT57XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW3Bob3RvTmFtZSwgc2V0UGhvdG9OYW1lXSA9IHVzZVN0YXRlKFwiU2VsZWNjaW9uYSBpbWFnZW4uLi5cIik7XHJcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3LCBzZXRJbWFnZVByZXZpZXddID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHBob3RvID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUGhvdG9OYW1lPSAoKSA9PntcclxuICAgICAgICB2YXIgbmFtZSA9IHBob3RvLmN1cnJlbnQuZmlsZXNbMF0ubmFtZTtcclxuICAgICAgICBpZihuYW1lLmxlbmd0aD4zMClcclxuICAgICAgICAgICAgbmFtZT1uYW1lLnN1YnN0cmluZygwLDMwKStcIi4uLlwiXHJcbiAgICAgICAgc2V0UGhvdG9OYW1lKG5hbWUpO1xyXG4gICAgICAgIHNldEltYWdlUHJldmlldyhcclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPXsyfT48QXZhdGFyIGFsdD1cIlJlbXkgU2hhcnBcIiBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8uY3VycmVudC5maWxlc1swXSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX0gLz48L0JveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+RGF0b3MgUGVyc29uYWxlczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgICAgICA8Qm94IG1hcmdpbj17M30+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0ganVzdGlmeT1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiTm9tYnJlXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT4gPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBsYWJlbD1cIkFwZWxsaWRvIFBhdGVybm9cIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQXBlbGxpZG8gTWF0ZXJub1wiIC8+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+RGF0b3MgZGUgQ3VlbnRhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgICAgIDxCb3ggbWFyZ2luPXszfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fSBqdXN0aWZ5PVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+IDxUZXh0RmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9XCJDb3JyZW9cIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHR5cGU9XCJwYXNzd29yZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQ29udHJhc2XDsWFcIiAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPiA8VGV4dEZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGxhYmVsPVwiQ29uZmlybWFyIENvbnRyYXNlw7FhXCIgLz48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luPXszfSBmbGV4V3JhcD1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1hcmdpblJpZ2h0PXsxfSBtYXJnaW5Cb3R0b209ezF9PjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiID48Yj5Gb3RvIGRlIFBlcmZpbDo8L2I+IHtwaG90b05hbWV9PC9UeXBvZ3JhcGh5PjwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1YmlyIEZvdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwaG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VQaG90b05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIHtpbWFnZVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiNjAlXCIgbWFyZ2luPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgIGZ1bGxXaWR0aCBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Zvcm0+ICAgICBcclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9