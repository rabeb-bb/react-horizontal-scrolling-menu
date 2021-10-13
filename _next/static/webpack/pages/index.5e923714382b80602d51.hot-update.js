webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(10).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, posDiff => {\n    if (scrollContainer.current) {\n      scrollContainer.current.scrollLeft += posDiff;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => dragStart,\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: []\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"c+pIa2VPxpNyb27OEdP/PlhntNc=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 156,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 170,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 189,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 244,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 245,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 248,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 243,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 250,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 226,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 268,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImlzSXRlbVNlbGVjdGVkIiwiZmluZCIsImVsIiwiZHJhZ1N0YXJ0IiwiZHJhZ1N0b3AiLCJkcmFnTW92ZSIsImRyYWdnaW5nIiwidXNlRHJhZyIsImhhbmRsZURyYWciLCJzY3JvbGxDb250YWluZXIiLCJwb3NEaWZmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJoYW5kbGVJdGVtQ2xpY2siLCJpdGVtSWQiLCJnZXRJdGVtQnlJZCIsInNjcm9sbFRvSXRlbSIsIml0ZW1TZWxlY3RlZCIsImN1cnJlbnRTZWxlY3RlZCIsImZpbHRlciIsImNvbmNhdCIsInJlc3RvcmVQb3NpdGlvbiIsInVzZUNhbGxiYWNrIiwic2F2ZVBvc2l0aW9uIiwidGhyb3R0bGUiLCJoaWRlU2Nyb2xsIiwic2hvd1Njcm9sbCIsInVzZUhpZGVCb2R5U2Nyb2xsIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIkxlZnRBcnJvdyIsIlJpZ2h0QXJyb3ciLCJpbml0Q29tcGxldGUiLCJpc0ZpcnN0SXRlbVZpc2libGUiLCJ1c2VDb250ZXh0IiwiVmlzaWJpbGl0eUNvbnRleHQiLCJpc0xhc3RJdGVtVmlzaWJsZSIsIkFycm93IiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjdXJzb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicmlnaHQiLCJvcGFjaXR5IiwidXNlclNlbGVjdCIsIkNhcmQiLCJ0aXRsZSIsInZpc2liaWxpdHkiLCJ2aXNpYmxlIiwiaXNJdGVtVmlzaWJsZSIsImNvZGUiLCJib3JkZXIiLCJtYXJnaW4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJXcmFwcGVyIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtDQUlBOztDQUdBOztDQUdBOztBQUVBO0FBRUEsTUFBTUEsTUFBTSxlQUFHQyxPQUFILDZEQUFHLFNBQVNDLEdBQVosaURBQUcsYUFBY0MsbUJBQTdCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQW5COztBQUNBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxjQUFzQkYsVUFBdEIsU0FBbUNFLEtBQW5DLENBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQ2ZDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLENBRFIsRUFFR0MsR0FGSCxDQUVPLENBQUNDLENBQUQsRUFBSUMsR0FBSixNQUFhO0FBQUVDLElBQUUsRUFBRVIsS0FBSyxDQUFDTyxHQUFEO0FBQVgsQ0FBYixDQUZQLENBREY7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLENBQ2RDLE1BRGMsRUFFZEMsRUFGYyxLQUdMO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSSxNQUFaLE1BQXdCLENBQXhCLElBQTZCRixJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSyxNQUFaLElBQXNCLEVBQXZFOztBQUVBLE1BQUlKLFdBQUosRUFBaUI7QUFDZkQsTUFBRSxDQUFDTSxlQUFI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QVYsSUFBd0JwRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5QjtBQUVBRCw4Q0FBSyxDQUFDcUUsU0FBTixDQUFnQixNQUFNO0FBQ3BCRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGRCxFQUVHLEVBRkg7QUFJQSxTQUFPRCxPQUFPLGdCQUFHLHFFQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQWEsSUFBM0I7QUFDRCxDQVJEOztJQUFNRCxPOztNQUFBQSxPO0FBVVNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9oZWxwZXJzL3NhZmFyaS1wb2x5ZmlsbCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG4vLyBOT1RFOiBwcmV2ZW50IHNjcm9sbGluZyBvbiBtYWluIHBhZ2VcbmltcG9ydCB1c2VIaWRlQm9keVNjcm9sbCBmcm9tICcuLi9oZWxwZXJzL3VzZUhpZGVCb2R5U2Nyb2xsJztcblxuLy8gTk9URSBkcmFnIHdpdGggbW91c2VcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4uL2hlbHBlcnMvdXNlRHJhZyc7XG5cbi8vIE5PVEUgaGlkZSBzY3JvbGxiYXIgaW4gX2FwcC5qc1xuXG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gJ3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUnO1xuXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzPy5lbnY/Lk5FWFRfUFVCTElDX0lTX1RFU1Q7XG5cbnR5cGUgc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUgPSBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgVmlzaWJpbGl0eUNvbnRleHQ+O1xuXG5jb25zdCBlbGVtUHJlZml4ID0gJ3Rlc3QnO1xuY29uc3QgZ2V0SWQgPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7ZWxlbVByZWZpeH0ke2luZGV4fWA7XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT5cbiAgQXJyYXkoMTApXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpbmQpIH0pKTtcblxuY29uc3Qgb25XaGVlbCA9IChcbiAgYXBpT2JqOiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSxcbiAgZXY6IFJlYWN0LldoZWVsRXZlbnRcbik6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBubyBnb29kIHN0YW5kYXJ0IHdheSB0byBkaXN0aW5ndWlzaCB0b3VjaHBhZCBzY3JvbGxpbmcgZ2VzdHVyZXNcbiAgLy8gYnV0IGNhbiBhc3N1bWUgdGhhdCBnZXN0dXJlIHdpbGwgYWZmZWN0IFggYXhpcywgbW91c2Ugc2Nyb2xsIG9ubHkgWSBheGlzXG4gIC8vIG9mIGlmIGRlbHRhWSB0b28gc21hbGwgcHJvYmFibHkgaXMgaXQgdG91Y2hwYWRcbiAgY29uc3QgaXNUaG91Y2hwYWQgPSBNYXRoLmFicyhldi5kZWx0YVgpICE9PSAwIHx8IE1hdGguYWJzKGV2LmRlbHRhWSkgPCAxNTtcblxuICBpZiAoaXNUaG91Y2hwYWQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZXYuZGVsdGFZIDwgMCkge1xuICAgIGFwaU9iai5zY3JvbGxOZXh0KCk7XG4gIH0gZWxzZSBpZiAoZXYuZGVsdGFZID4gMCkge1xuICAgIGFwaU9iai5zY3JvbGxQcmV2KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2l0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGdldEl0ZW1zKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPVxuICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gICAgICBkcmFnTW92ZShldiwgKHBvc0RpZmYpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSBwb3NEaWZmO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPVxuICAgIChpdGVtSWQ6IHN0cmluZykgPT5cbiAgICAoeyBnZXRJdGVtQnlJZCwgc2Nyb2xsVG9JdGVtIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbVNlbGVjdGVkID0gaXNJdGVtU2VsZWN0ZWQoaXRlbUlkKTtcblxuICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJlbnRTZWxlY3RlZDogc3RyaW5nW10pID0+XG4gICAgICAgIGl0ZW1TZWxlY3RlZFxuICAgICAgICAgID8gY3VycmVudFNlbGVjdGVkLmZpbHRlcigoZWwpID0+IGVsICE9PSBpdGVtSWQpXG4gICAgICAgICAgOiBjdXJyZW50U2VsZWN0ZWQuY29uY2F0KGl0ZW1JZClcbiAgICAgICk7XG5cbiAgICAgIGlmICghaXRlbVNlbGVjdGVkKSB7XG4gICAgICAgIC8vIE5PVEU6IGNlbnRlciBpdGVtIG9uIHNlbGVjdFxuICAgICAgICBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoaXRlbUlkKSwgJ3Ntb290aCcsICdjZW50ZXInLCAnbmVhcmVzdCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgcmVzdG9yZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIHNjcm9sbENvbnRhaW5lcixcbiAgICAgIGdldEl0ZW1CeUlkLFxuICAgICAgc2Nyb2xsVG9JdGVtLFxuICAgIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICAvLyBOT1RFOiBzY3JvbGwgdG8gaXRlbSwgYXV0by9zbW9vdGggZm9yIGFuaW1hdGlvblxuICAgICAgLy8gc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKCd0ZXN0MTUnKSwgJ2F1dG8nKTtcbiAgICAgIC8vIE5PVEU6IG9yIHJlc3RvcmUgZXhhY3QgcG9zaXRpb24gYnkgcGl4ZWxzXG4gICAgICAvLyBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgfSxcbiAgICBbcG9zaXRpb25dXG4gICk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBjb25zdCBzYXZlUG9zaXRpb24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICB0aHJvdHRsZShcbiAgICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAgICAgISFzY3JvbGxDb250YWluZXIuY3VycmVudCAmJlxuICAgICAgICBzZXRQb3NpdGlvbihzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0KSxcbiAgICAgIDUwMFxuICAgICksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCB7IGhpZGVTY3JvbGwsIHNob3dTY3JvbGwgfSA9IHVzZUhpZGVCb2R5U2Nyb2xsKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMjAwdmgnLCBwYWRkaW5nVG9wOiAnMjAwcHgnIH19PlxuICAgICAgICA8ZGl2IG9uTW91c2VFbnRlcj17aGlkZVNjcm9sbH0gb25Nb3VzZUxlYXZlPXtzaG93U2Nyb2xsfT5cbiAgICAgICAgICA8ZGl2IG9uTW91c2VMZWF2ZT17ZHJhZ1N0b3B9PlxuICAgICAgICAgICAgPFNjcm9sbE1lbnVcbiAgICAgICAgICAgICAgTGVmdEFycm93PXtMZWZ0QXJyb3d9XG4gICAgICAgICAgICAgIFJpZ2h0QXJyb3c9e1JpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgIG9uSW5pdD17cmVzdG9yZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gZHJhZ1N0YXJ0fVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGRyYWdTdG9wfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgICAgY2hpbGRyZW49e1tdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Lyoge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX0gKi99XG4gICAgICAgICAgICA8L1Njcm9sbE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlZnRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzRmlyc3RJdGVtVmlzaWJsZSwgc2Nyb2xsUHJldiB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcbiAgLy8gTk9URSBpbml0Q29tcGxldGUgaXMgYSBoYWNrIGZvciAgcHJldmVudCBibGlua2luZyBvbiBpbml0XG4gIC8vIENhbiBnZXQgdmlzaWJpbGl0eSBvZiBpdGVtIG9ubHkgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17IWluaXRDb21wbGV0ZSB8fCAoaW5pdENvbXBsZXRlICYmIGlzRmlyc3RJdGVtVmlzaWJsZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxQcmV2KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBMZWZ0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmlnaHRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzTGFzdEl0ZW1WaXNpYmxlLCBzY3JvbGxOZXh0IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17aW5pdENvbXBsZXRlICYmIGlzTGFzdEl0ZW1WaXNpYmxlfVxuICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsTmV4dChpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJyl9XG4gICAgPlxuICAgICAgUmlnaHRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBBcnJvdyh7XG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcmlnaHQ6ICcxJScsXG4gICAgICAgIG9wYWNpdHk6IGRpc2FibGVkID8gJzAnIDogJzEnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FyZCh7XG4gIG9uQ2xpY2ssXG4gIHNlbGVjdGVkLFxuICB0aXRsZSxcbiAgaXRlbUlkLFxufToge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbUlkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcblxuICBjb25zdCB2aXNpYmxlID1cbiAgICAhdmlzaWJpbGl0eS5pbml0Q29tcGxldGUgfHxcbiAgICAodmlzaWJpbGl0eS5pbml0Q29tcGxldGUgJiYgdmlzaWJpbGl0eS5pc0l0ZW1WaXNpYmxlKGl0ZW1JZCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1jeT17aXRlbUlkfVxuICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayh2aXNpYmlsaXR5KX1cbiAgICAgIG9uS2V5RG93bj17KGV2KSA9PiB7XG4gICAgICAgIGV2LmNvZGUgPT09ICdFbnRlcicgJiYgb25DbGljayh2aXNpYmlsaXR5KTtcbiAgICAgIH19XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZpc2libGUgPyAndHJhbnNwYXJlbnQnIDogJ2dyYXknIH19PlxuICAgICAgICAgIHZpc2libGU6IHtKU09OLnN0cmluZ2lmeSh2aXNpYmxlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+c2VsZWN0ZWQ6IHtKU09OLnN0cmluZ2lmeSghIXNlbGVjdGVkKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWQgPyAnZ3JlZW4nIDogJ2Jpc3F1ZScsXG4gICAgICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVE9ETzogbmV4dGpzIGNvbXBsYWlucyBhYm91dCB1c2VMYXlvdXRFZmZlY3RcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbW91bnRlZCA/IDxBcHAgLz4gOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})