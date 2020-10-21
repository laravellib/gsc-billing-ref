(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      general: new Form({
        url: ""
      })
    };
  },
  mounted: function mounted() {},
  methods: {},
  //method end
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "justify-content-center" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "col report-nav" }, [
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c(
                  "b-button",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: "/dailyBillingTransmittal",
                          target: "_blank"
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-caret-square-right" }, [
                          _vm._v("   Billing Transmittal")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c(
                  "b-button",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: "/SoaReactivatereport", target: "_blank" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-caret-square-right" }, [
                          _vm._v("   Reactivated SOA Report")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c("b-button", { attrs: { variant: "primary" } }, [
                  _c("i", { staticClass: "fa fa-caret-square-right" }, [
                    _vm._v("   Year to Date Collection Report")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c("b-button", { attrs: { variant: "primary" } }, [
                  _c("i", { staticClass: "fa fa-caret-square-right" }, [
                    _vm._v("   Year to Date Aging Report")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c("b-button", { attrs: { variant: "primary" } }, [
                  _c("i", { staticClass: "fa fa-caret-square-right" }, [
                    _vm._v("   Billing Report Per Client")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c("b-button", { attrs: { variant: "primary" } }, [
                  _c("i", { staticClass: "fa fa-caret-square-right" }, [
                    _vm._v("   Payroll Billing Annual Report")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row padding-top" },
              [
                _c(
                  "b-button",
                  { attrs: { variant: "primary" } },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: "/SoaStatusMonitoring", target: "_blank" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-caret-square-right" }, [
                          _vm._v("   SOA Status Monitoring")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Other Client & Dmpi Reports")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reports/DmpiReportsComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/reports/DmpiReportsComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DmpiReportsComponent.vue?vue&type=template&id=26833aca& */ "./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca&");
/* harmony import */ var _DmpiReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DmpiReportsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DmpiReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/DmpiReportsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiReportsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiReportsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiReportsComponent.vue?vue&type=template&id=26833aca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/DmpiReportsComponent.vue?vue&type=template&id=26833aca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiReportsComponent_vue_vue_type_template_id_26833aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);