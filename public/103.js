(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
      },
      [
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarNavDropdown" }
          },
          [
            _c("ul", { staticClass: "navbar-nav" }, [
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      href: "#",
                      id: "navbarDropdownMenuLink",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      "data-target": "#mlist"
                    }
                  },
                  [
                    _vm._v(
                      "\n                            Master File\n                            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu",
                    attrs: {
                      "aria-labelledby": "navbarDropdownMenuLink",
                      id: "mlist"
                    }
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/driverlist" }
                          },
                          [_c("a", [_vm._v("Driver List")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/ovlvehiclelist" }
                          },
                          [_c("a", [_vm._v("OVL Vehicle List")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/vehicletype" }
                          },
                          [_c("a", [_vm._v("Vehicle Type List")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/ovlvehiclerate" }
                          },
                          [_c("a", [_vm._v("OVL Rate List")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/clientlist" }
                          },
                          [_c("a", [_vm._v("Client List")])]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      href: "#",
                      id: "navbarDropdownMenuLink",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      "data-target": "#trans"
                    }
                  },
                  [
                    _vm._v(
                      "\n                            Transactions\n                            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu",
                    attrs: {
                      "aria-labelledby": "navbarDropdownMenuLink",
                      id: "trans"
                    }
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/ovlvehiclelogentry" }
                          },
                          [_c("a", [_vm._v("OVL Vehicle Log Entry")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/createovlsoa" }
                          },
                          [_c("a", [_vm._v("OVL Create SOA")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/soaovltransactions" }
                          },
                          [_c("a", [_vm._v("OVL SOA Transactions")])]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      href: "#",
                      id: "navbarDropdownMenuLink",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      "data-target": "#report"
                    }
                  },
                  [
                    _vm._v(
                      "\n                            OVL Reports\n                            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "dropdown-menu",
                    attrs: {
                      "aria-labelledby": "navbarDropdownMenuLink",
                      id: "report"
                    }
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: "/reportlistovl" }
                          },
                          [_c("a", [_vm._v("Standard OVL Report")])]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("h1", [_c("center", [_vm._v("Welcome to OVL section :)")])], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLMain.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLMain.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OVLMain.vue?vue&type=template&id=55963e8f& */ "./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f&");
/* harmony import */ var _OVLMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OVLMain.vue?vue&type=script&lang=js& */ "./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OVLMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OVLComponents/OVLMain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLMain.vue?vue&type=template&id=55963e8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLMain.vue?vue&type=template&id=55963e8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLMain_vue_vue_type_template_id_55963e8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);