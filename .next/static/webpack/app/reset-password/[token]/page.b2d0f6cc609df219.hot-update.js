"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reset-password/[token]/page",{

/***/ "(app-pages-browser)/./src/app/reset-password/[token]/page.tsx":
/*!*************************************************!*\
  !*** ./src/app/reset-password/[token]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AuthForm */ \"(app-pages-browser)/./src/components/AuthForm.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ResetPassword = (param)=>{\n    let { params } = param;\n    _s();\n    const [verified, setVerified] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const verifyToken = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/verify-token\", {\n                    token: params.token\n                });\n                setVerified(true);\n                const userData = await res.data;\n                setUser(userData);\n            } catch (error) {\n                console.log(error);\n                setVerified(true);\n            }\n        };\n        verifyToken();\n    }, [\n        params.token\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            password,\n            email: user === null || user === void 0 ? void 0 : user.email\n        };\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/reset-password\", data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"border-2 border-black\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"SUBMIT\"\n                }, void 0, false, {\n                    fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/crownstack/quick-release/src/app/reset-password/[token]/page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResetPassword, \"cqUSX5yN5e8o1zMCpKvwI0UL1DY=\");\n_c = ResetPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPassword);\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QztBQUNuQjtBQUNrQjtBQWM1QyxNQUFNSSxnQkFBZ0I7UUFBQyxFQUFFQyxNQUFNLEVBQU87O0lBQ3BDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGNBQWM7WUFDbEIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1aLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMscUJBQXFCO29CQUNoREMsT0FBT1YsT0FBT1UsS0FBSztnQkFDckI7Z0JBQ0FSLFlBQVk7Z0JBQ1osTUFBTVMsV0FBVyxNQUFNSCxJQUFJSSxJQUFJO2dCQUUvQlIsUUFBUU87WUFDVixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pYLFlBQVk7WUFDZDtRQUNGO1FBQ0FLO0lBQ0YsR0FBRztRQUFDUCxPQUFPVSxLQUFLO0tBQUM7SUFFakIsTUFBTU0sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNTixPQUFPO1lBQ1hQO1lBQ0FjLEtBQUssRUFBRWhCLGlCQUFBQSwyQkFBQUEsS0FBTWdCLEtBQUs7UUFDcEI7UUFFQSxJQUFJO1lBQ0YsTUFBTVgsTUFBTSxNQUFNWiw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLHVCQUF1Qkc7UUFDdEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNsQiw0REFBUUE7a0JBQ1AsNEVBQUN5QjtZQUFLQyxVQUFVTDs7OEJBQ2QsOERBQUNNO29CQUNDQyxNQUFLO29CQUNMQyxXQUFVO29CQUNWQyxPQUFPcEI7b0JBQ1BxQixVQUFVLENBQUNULElBQU1YLFlBQVlXLEVBQUVVLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzhCQUU3Qyw4REFBQ0c7b0JBQU9MLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBbERNeEI7S0FBQUE7QUFvRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL3BhZ2UudHN4PzlkOGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9BdXRoRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIGNyZWF0ZWRBdDogU3RyaW5nO1xuICBlbWFpbDogU3RyaW5nO1xuICBmaXJzdE5hbWU6IFN0cmluZztcbiAgaWQ6IFN0cmluZztcbiAgbGFzdE5hbWU6IFN0cmluZztcbiAgb3JnTmFtZTogU3RyaW5nO1xuICBwYXNzd29yZDogU3RyaW5nO1xuICByZXNldFRva2VuOiBTdHJpbmc7XG4gIHJlc2V0VG9rZW5FeHBpcnk6IFN0cmluZztcbn1cblxuY29uc3QgUmVzZXRQYXNzd29yZCA9ICh7IHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvdmVyaWZ5LXRva2VuXCIsIHtcbiAgICAgICAgICB0b2tlbjogcGFyYW1zLnRva2VuLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VmVyaWZpZWQodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzLmRhdGE7XG5cbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHNldFZlcmlmaWVkKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmVyaWZ5VG9rZW4oKTtcbiAgfSwgW3BhcmFtcy50b2tlbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcGFzc3dvcmQsXG4gICAgICBlbWFpbDogdXNlcj8uZW1haWwsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9yZXNldC1wYXNzd29yZFwiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8QXV0aEZvcm0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2tcIlxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U1VCTUlUPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9BdXRoRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVzZXRQYXNzd29yZCIsInBhcmFtcyIsInZlcmlmaWVkIiwic2V0VmVyaWZpZWQiLCJ1c2VyIiwic2V0VXNlciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ2ZXJpZnlUb2tlbiIsInJlcyIsInBvc3QiLCJ0b2tlbiIsInVzZXJEYXRhIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/reset-password/[token]/page.tsx\n"));

/***/ })

});