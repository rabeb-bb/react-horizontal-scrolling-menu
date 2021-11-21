webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/usePreventBodyScroll */ \"./helpers/usePreventBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n // import Styler from 'stylefire';\n// import { animate } from 'popmotion/dist/popmotion.min.js';\n// NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(150).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, posDiff => {\n    if (scrollContainer.current) {\n      scrollContainer.current.scrollLeft += posDiff;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test7'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(({\n    scrollContainer\n  }) => {\n    !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft);\n  }, 500), []);\n  const {\n    disableScroll,\n    enableScroll\n  } = Object(_helpers_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const handleRemoveLast = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(() => {\n    setItems(prev => prev.slice(0, prev.length - 1));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: disableScroll,\n        onMouseLeave: enableScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => dragStart,\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: handleRemoveLast,\n            children: \"Remove last\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"footer\",\n      style: {\n        width: '120vw'\n      },\n      children: \"Footer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 119,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"Gu37oJ7SDquFy5xWyD6Rjscyzfo=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _helpers_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 161,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth', undefined, undefined, {// ease: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),\n    }) // onClick={() =>\n    //   scrollNext((instructions) => {\n    //     const [{ el, left }] = instructions;\n    //     const styler = Styler(el);\n    //     animate({\n    //       from: el.scrollLeft,\n    //       to: left,\n    //       type: 'spring',\n    //       onUpdate: (left) => styler.set('scrollLeft', left),\n    //     });\n    //   })\n    // }\n    ,\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 211,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_5__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 266,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 267,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 270,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 265,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 272,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 248,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 290,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwiaGFuZGxlRHJhZyIsInNjcm9sbENvbnRhaW5lciIsInBvc0RpZmYiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW1JZCIsImdldEl0ZW1CeUlkIiwic2Nyb2xsVG9JdGVtIiwiaXRlbVNlbGVjdGVkIiwiY3VycmVudFNlbGVjdGVkIiwiZmlsdGVyIiwiY29uY2F0IiwicmVzdG9yZVBvc2l0aW9uIiwidXNlQ2FsbGJhY2siLCJzYXZlUG9zaXRpb24iLCJ0aHJvdHRsZSIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJ1c2VQcmV2ZW50Qm9keVNjcm9sbCIsImhhbmRsZVJlbW92ZUxhc3QiLCJwcmV2Iiwic2xpY2UiLCJsZW5ndGgiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyIsIndpZHRoIiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJ1bmRlZmluZWQiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIldyYXBwZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTtBQUVBOztDQUdBOztDQUdBOztBQUVBO0FBRUEsTUFBTUEsTUFBTSxlQUFHQyxPQUFILDZEQUFHLFNBQVNDLEdBQVosaURBQUcsYUFBY0MsbUJBQTdCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQW5COztBQUNBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxjQUFzQkYsVUFBdEIsU0FBbUNFLEtBQW5DLENBQWQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQ2ZDLEtBQUssQ0FBQyxHQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLENBRFIsRUFFR0MsR0FGSCxDQUVPLENBQUNDLENBQUQsRUFBSUMsR0FBSixNQUFhO0FBQUVDLElBQUUsRUFBRVIsS0FBSyxDQUFDTyxHQUFEO0FBQVgsQ0FBYixDQUZQLENBREY7O0FBS0EsTUFBTUUsT0FBTyxHQUFHLENBQ2RDLE1BRGMsRUFFZEMsRUFGYyxLQUdMO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsRUFBRSxDQUFDSSxNQUFaLE1BQXdCLENBQXhCLElBQTZCRixJQUFJLENBQUNDLEdBQUws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LE1BQU07QUFDcEJELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUlBLFNBQU9ELE9BQU8sZ0JBQUcscUVBQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBYSxJQUEzQjtBQUNELENBUkQ7O0lBQU1ELE87O01BQUFBLE87QUFVU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbi8vIGltcG9ydCBTdHlsZXIgZnJvbSAnc3R5bGVmaXJlJztcbi8vIGltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdwb3Btb3Rpb24vZGlzdC9wb3Btb3Rpb24ubWluLmpzJztcblxuLy8gTk9URTogcHJldmVudCBzY3JvbGxpbmcgb24gbWFpbiBwYWdlXG5pbXBvcnQgdXNlUHJldmVudEJvZHlTY3JvbGwgZnJvbSAnLi4vaGVscGVycy91c2VQcmV2ZW50Qm9keVNjcm9sbCc7XG5cbi8vIE5PVEUgZHJhZyB3aXRoIG1vdXNlXG5pbXBvcnQgdXNlRHJhZyBmcm9tICcuLi9oZWxwZXJzL3VzZURyYWcnO1xuXG4vLyBOT1RFIGhpZGUgc2Nyb2xsYmFyIGluIF9hcHAuanNcblxuaW1wb3J0IHsgU2Nyb2xsTWVudSwgVmlzaWJpbGl0eUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51JztcblxuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcz8uZW52Py5ORVhUX1BVQkxJQ19JU19URVNUO1xuXG50eXBlIHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlID0gUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIFZpc2liaWxpdHlDb250ZXh0PjtcblxuY29uc3QgZWxlbVByZWZpeCA9ICd0ZXN0JztcbmNvbnN0IGdldElkID0gKGluZGV4OiBudW1iZXIpID0+IGAke2VsZW1QcmVmaXh9JHtpbmRleH1gO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+XG4gIEFycmF5KDE1MClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGluZCkgfSkpO1xuXG5jb25zdCBvbldoZWVsID0gKFxuICBhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLFxuICBldjogUmVhY3QuV2hlZWxFdmVudFxuKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IG5vIGdvb2Qgc3RhbmRhcnQgd2F5IHRvIGRpc3Rpbmd1aXNoIHRvdWNocGFkIHNjcm9sbGluZyBnZXN0dXJlc1xuICAvLyBidXQgY2FuIGFzc3VtZSB0aGF0IGdlc3R1cmUgd2lsbCBhZmZlY3QgWCBheGlzLCBtb3VzZSBzY3JvbGwgb25seSBZIGF4aXNcbiAgLy8gb2YgaWYgZGVsdGFZIHRvbyBzbWFsbCBwcm9iYWJseSBpcyBpdCB0b3VjaHBhZFxuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGdldEl0ZW1zKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPVxuICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gICAgICBkcmFnTW92ZShldiwgKHBvc0RpZmYpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCArPSBwb3NEaWZmO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPVxuICAgIChpdGVtSWQ6IHN0cmluZykgPT5cbiAgICAoeyBnZXRJdGVtQnlJZCwgc2Nyb2xsVG9JdGVtIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbVNlbGVjdGVkID0gaXNJdGVtU2VsZWN0ZWQoaXRlbUlkKTtcblxuICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJlbnRTZWxlY3RlZDogc3RyaW5nW10pID0+XG4gICAgICAgIGl0ZW1TZWxlY3RlZFxuICAgICAgICAgID8gY3VycmVudFNlbGVjdGVkLmZpbHRlcigoZWwpID0+IGVsICE9PSBpdGVtSWQpXG4gICAgICAgICAgOiBjdXJyZW50U2VsZWN0ZWQuY29uY2F0KGl0ZW1JZClcbiAgICAgICk7XG5cbiAgICAgIGlmICghaXRlbVNlbGVjdGVkKSB7XG4gICAgICAgIC8vIE5PVEU6IGNlbnRlciBpdGVtIG9uIHNlbGVjdFxuICAgICAgICBzY3JvbGxUb0l0ZW0oZ2V0SXRlbUJ5SWQoaXRlbUlkKSwgJ3Ntb290aCcsICdjZW50ZXInLCAnbmVhcmVzdCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgcmVzdG9yZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIHNjcm9sbENvbnRhaW5lcixcbiAgICAgIGdldEl0ZW1CeUlkLFxuICAgICAgc2Nyb2xsVG9JdGVtLFxuICAgIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gICAgICAvLyBOT1RFOiBzY3JvbGwgdG8gaXRlbSwgYXV0by9zbW9vdGggZm9yIGFuaW1hdGlvblxuICAgICAgLy8gc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKCd0ZXN0NycpLCAnYXV0bycpO1xuICAgICAgLy8gTk9URTogb3IgcmVzdG9yZSBleGFjdCBwb3NpdGlvbiBieSBwaXhlbHNcbiAgICAgIC8vIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICB9LFxuICAgIFtwb3NpdGlvbl1cbiAgKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGNvbnN0IHNhdmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIHRocm90dGxlKCh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgISFzY3JvbGxDb250YWluZXIuY3VycmVudCAmJlxuICAgICAgICBzZXRQb3NpdGlvbihzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0KTtcbiAgICB9LCA1MDApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgeyBkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwgfSA9IHVzZVByZXZlbnRCb2R5U2Nyb2xsKCk7XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlTGFzdCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJdGVtcygocHJldikgPT4gcHJldi5zbGljZSgwLCBwcmV2Lmxlbmd0aCAtIDEpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHZoJywgcGFkZGluZ1RvcDogJzIwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2Rpc2FibGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17ZW5hYmxlU2Nyb2xsfT5cbiAgICAgICAgICA8ZGl2IG9uTW91c2VMZWF2ZT17ZHJhZ1N0b3B9PlxuICAgICAgICAgICAgPFNjcm9sbE1lbnVcbiAgICAgICAgICAgICAgTGVmdEFycm93PXtMZWZ0QXJyb3d9XG4gICAgICAgICAgICAgIFJpZ2h0QXJyb3c9e1JpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgIG9uSW5pdD17cmVzdG9yZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gZHJhZ1N0YXJ0fVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGRyYWdTdG9wfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTWVudT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVtb3ZlTGFzdH0+UmVtb3ZlIGxhc3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMjB2dycgfX0+XG4gICAgICAgIEZvb3RlclxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlZnRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzRmlyc3RJdGVtVmlzaWJsZSwgc2Nyb2xsUHJldiB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFZpc2liaWxpdHlDb250ZXh0KTtcbiAgLy8gTk9URSBpbml0Q29tcGxldGUgaXMgYSBoYWNrIGZvciAgcHJldmVudCBibGlua2luZyBvbiBpbml0XG4gIC8vIENhbiBnZXQgdmlzaWJpbGl0eSBvZiBpdGVtIG9ubHkgYWZ0ZXIgaXQncyByZW5kZXJlZFxuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17IWluaXRDb21wbGV0ZSB8fCAoaW5pdENvbXBsZXRlICYmIGlzRmlyc3RJdGVtVmlzaWJsZSl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxQcmV2KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBMZWZ0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmlnaHRBcnJvdygpIHtcbiAgY29uc3QgeyBpbml0Q29tcGxldGUsIGlzTGFzdEl0ZW1WaXNpYmxlLCBzY3JvbGxOZXh0IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEFycm93XG4gICAgICBkaXNhYmxlZD17aW5pdENvbXBsZXRlICYmIGlzTGFzdEl0ZW1WaXNpYmxlfVxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgc2Nyb2xsTmV4dChpc1Rlc3QgPyAnYXV0bycgOiAnc21vb3RoJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAvLyBlYXNlOiAodCkgPT4gKHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdCksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBvbkNsaWNrPXsoKSA9PlxuICAgICAgLy8gICBzY3JvbGxOZXh0KChpbnN0cnVjdGlvbnMpID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBbeyBlbCwgbGVmdCB9XSA9IGluc3RydWN0aW9ucztcbiAgICAgIC8vICAgICBjb25zdCBzdHlsZXIgPSBTdHlsZXIoZWwpO1xuXG4gICAgICAvLyAgICAgYW5pbWF0ZSh7XG4gICAgICAvLyAgICAgICBmcm9tOiBlbC5zY3JvbGxMZWZ0LFxuICAgICAgLy8gICAgICAgdG86IGxlZnQsXG4gICAgICAvLyAgICAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICAgIC8vICAgICAgIG9uVXBkYXRlOiAobGVmdCkgPT4gc3R5bGVyLnNldCgnc2Nyb2xsTGVmdCcsIGxlZnQpLFxuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuICAgID5cbiAgICAgIFJpZ2h0XG4gICAgPC9BcnJvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXJyb3coe1xuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb247XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHJpZ2h0OiAnMSUnLFxuICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCA/ICcwJyA6ICcxJyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmQoe1xuICBvbkNsaWNrLFxuICBzZWxlY3RlZCxcbiAgdGl0bGUsXG4gIGl0ZW1JZCxcbn06IHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1JZDogc3RyaW5nO1xufSkge1xuICBjb25zdCB2aXNpYmlsaXR5ID0gUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgY29uc3QgdmlzaWJsZSA9XG4gICAgIXZpc2liaWxpdHkuaW5pdENvbXBsZXRlIHx8XG4gICAgKHZpc2liaWxpdHkuaW5pdENvbXBsZXRlICYmIHZpc2liaWxpdHkuaXNJdGVtVmlzaWJsZShpdGVtSWQpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtY3k9e2l0ZW1JZH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmlzaWJpbGl0eSl9XG4gICAgICBvbktleURvd249eyhldikgPT4ge1xuICAgICAgICBldi5jb2RlID09PSAnRW50ZXInICYmIG9uQ2xpY2sodmlzaWJpbGl0eSk7XG4gICAgICB9fVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2aXNpYmxlID8gJ3RyYW5zcGFyZW50JyA6ICdncmF5JyB9fT5cbiAgICAgICAgICB2aXNpYmxlOiB7SlNPTi5zdHJpbmdpZnkodmlzaWJsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PnNlbGVjdGVkOiB7SlNPTi5zdHJpbmdpZnkoISFzZWxlY3RlZCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkID8gJ2dyZWVuJyA6ICdiaXNxdWUnLFxuICAgICAgICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRPRE86IG5leHRqcyBjb21wbGFpbnMgYWJvdXQgdXNlTGF5b3V0RWZmZWN0XG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG1vdW50ZWQgPyA8QXBwIC8+IDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})