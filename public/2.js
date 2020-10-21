(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      rows: [],
      search: "",
      type: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchTransmittal", function (data) {
      _this.type = data;

      _this.getAllowanceHeaderModal();

      $("#SearchTransmittal").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchTransmittal").modal("hide");
    },
    getAllowanceHeaderModal: function getAllowanceHeaderModal() {
      var _this2 = this;

      if (this.type == "allowance") {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'ALLOWANCE'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (this.type == 'ppe') {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'PPE'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (this.type == 'fuel') {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'FUEL'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (this.type == 'supplies') {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'SUPPLIES'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (this.type == 'others') {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'OTHERS'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else if (this.type == 'incentives') {
        axios.get("api/allowance", {
          params: {
            getTransmittal: true,
            type: 'INCENTIVES'
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.rows.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.transmittal_no.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade dave-template",
      attrs: {
        id: "SearchTransmittal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "addNewLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-centered modal-lg",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body-cus" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "search",
                        placeholder: "Search here..."
                      },
                      domProps: { value: _vm.search },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 table-height" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-hover table-striped dave-table"
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          { staticClass: "dave-tbody modal-tbody" },
                          _vm._l(_vm.filteredBlogs, function(item) {
                            return _c(
                              "tr",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.rowClick(item)
                                  }
                                }
                              },
                              [
                                _c("td", { attrs: { width: "20%" } }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(item.transmittal_no) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.prepared_by))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.type))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { width: "25%" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          _vm._f("formatNumber")(
                                            item.total_billing
                                          )
                                        ) +
                                        "\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "20%" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          _vm._f("formatDate")(
                                            item.date_created
                                          )
                                        ) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [_c("b", [_vm._v("Transmittal List")])])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1" }, [
          _c(
            "button",
            {
              staticClass: "close close-modal",
              attrs: {
                type: "button",
                "data-dismiss": "modal",
                "aria-label": "Close"
              }
            },
            [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Transmittal #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Prepared By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { width: "20%" } }, [
          _vm._v("Total Billing")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { width: "20%" } }, [
          _vm._v("Date Created")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchTransmittal.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchTransmittal.vue?vue&type=template&id=6efe7de8& */ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8&");
/* harmony import */ var _SearchTransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchTransmittal.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchTransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchTransmittal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchTransmittal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchTransmittal.vue?vue&type=template&id=6efe7de8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchTransmittal.vue?vue&type=template&id=6efe7de8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTransmittal_vue_vue_type_template_id_6efe7de8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);