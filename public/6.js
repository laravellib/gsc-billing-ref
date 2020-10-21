(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: [],
      search: "",
      loading: false,
      noDataFound: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchSOAAllowanceHeader", function (data) {
      if (data == 'payment') {
        _this.getAllowanceHeaderPaymentModal();
      } else if (data == 'transmittal') {
        _this.getAllowanceHeaderTransmittalModal();
      } else {
        _this.getAllowanceHeaderModal();
      }

      $("#SearchSOAAllowanceHeader").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchSOAAllowanceHeader").modal("hide");
    },
    getAllowanceHeaderModal: function getAllowanceHeaderModal() {
      var _this2 = this;

      this.loading = true;
      axios.get("api/allowance", {
        params: {
          SOAHeader: true
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this2.rows = response.data;
          _this2.noDataFound = false;
        } else {
          _this2.noDataFound = true;
        }

        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAllowanceHeaderPaymentModal: function getAllowanceHeaderPaymentModal() {
      var _this3 = this;

      this.loading = true;
      axios.get("api/allowance", {
        params: {
          SOAHeaderPayment: true
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this3.rows = response.data;
          _this3.noDataFound = false;
        } else {
          _this3.noDataFound = true;
        }

        _this3.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAllowanceHeaderTransmittalModal: function getAllowanceHeaderTransmittalModal() {
      var _this4 = this;

      this.loading = true;
      axios.get("api/allowance", {
        params: {
          SOAHeaderTransmittal: true
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this4.rows = response.data;
          _this4.noDataFound = false;
        } else {
          _this4.noDataFound = true;
        }

        _this4.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this5 = this;

      return this.rows.filter(function (item) {
        return _this5.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v) || item.Period.toLowerCase().includes(v) || item.Location.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        id: "SearchSOAAllowanceHeader",
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
          staticClass: "modal-dialog modal-dialog-centered modal-xl",
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
                          [
                            _c(
                              "tr",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: this.loading,
                                    expression: "this.loading"
                                  }
                                ]
                              },
                              [_vm._m(2)]
                            ),
                            _vm._v(" "),
                            _c(
                              "tr",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: this.noDataFound,
                                    expression: "this.noDataFound"
                                  }
                                ]
                              },
                              [_vm._m(3)]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.filteredBlogs, function(item) {
                              return _c(
                                "tr",
                                {
                                  key: item.ASHID,
                                  on: {
                                    click: function($event) {
                                      return _vm.rowClick(item)
                                    }
                                  }
                                },
                                [
                                  _c("td", { attrs: { width: "15%" } }, [
                                    _vm._v(_vm._s(item.SOANo))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { attrs: { width: "15%" } }, [
                                    _vm._v(_vm._s(item.Period))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.Location))]),
                                  _vm._v(" "),
                                  _c("td", { attrs: { width: "15%" } }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(item.date_created)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { attrs: { width: "15%" } }, [
                                    _vm._v(_vm._s(item.Status))
                                  ])
                                ]
                              )
                            })
                          ],
                          2
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
          _c("h5", [_c("b", [_vm._v("Allowance SOA Header List")])])
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
        _c("th", { attrs: { width: "15%" } }, [_vm._v("SOA No")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [_vm._v("Period")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [_vm._v("Status")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "4" } }, [
      _c("i", [_vm._v("Loading...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "4" } }, [
      _c("b", [_vm._v("No Data Found")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73& */ "./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73&");
/* harmony import */ var _SearchSOAAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchSOAAllowanceHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchSOAAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchSOAAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchSOAAllowanceHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchSOAAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchSOAAllowanceHeader.vue?vue&type=template&id=39581c73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchSOAAllowanceHeader_vue_vue_type_template_id_39581c73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);