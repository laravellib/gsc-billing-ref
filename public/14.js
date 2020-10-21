(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      type: "",
      detailList: [],
      dataInDetail: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchAllowanceDetail", function (data) {
      _this.getData(data);

      $("#SearchAllowanceDetail").modal("show");
    });
  },
  methods: {
    getData: function getData(id) {
      var _this2 = this;

      axios.get("api/allowance", {
        params: {
          detail: true,
          id: id
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this2.dataInDetail = true;
          response.data.forEach(function (item) {
            item.FullName = item.LName + " " + item.ExtName + ", " + item.FName + " " + item.MName;
          });
          _this2.detailList = response.data;
        } else {
          _this2.detailList = [];
          _this2.dataInDetail = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.detailList.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.FullName.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        id: "SearchAllowanceDetail",
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
                                    value: !this.dataInDetail,
                                    expression: "!this.dataInDetail"
                                  }
                                ]
                              },
                              [_vm._m(2)]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.filteredBlogs, function(item) {
                              return _c("tr", { key: item.ADID }, [
                                _c("td", { attrs: { bold: "" } }, [
                                  _vm._v(_vm._s(item.Chapa))
                                ]),
                                _vm._v(" "),
                                _c("td", { attrs: { width: "20%" } }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(item.FullName) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(item.Gasoline)
                                      ) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(
                                          item.Communication
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(
                                          item.RentalMaintenance
                                        )
                                      ) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(item.Others)
                                      ) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(item.AdminFee)
                                      ) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatNumber")(item.SubTotal)
                                      ) +
                                      "\n                                        "
                                  )
                                ])
                              ])
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
          _c("h5", [_c("b", [_vm._v("Allowance Detail List")])])
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
        _c("th", [_vm._v("Chapa")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Fullname")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gasoline")]),
        _vm._v(" "),
        _c("th", [_vm._v("Comm")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rent&Maint")]),
        _vm._v(" "),
        _c("th", [_vm._v("Others")]),
        _vm._v(" "),
        _c("th", [_vm._v("AdminFee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sub Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "8" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/allowance/ShowDetailModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/allowance/ShowDetailModal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowDetailModal.vue?vue&type=template&id=970a5c66& */ "./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66&");
/* harmony import */ var _ShowDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowDetailModal.vue?vue&type=script&lang=js& */ "./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/allowance/ShowDetailModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowDetailModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowDetailModal.vue?vue&type=template&id=970a5c66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/ShowDetailModal.vue?vue&type=template&id=970a5c66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowDetailModal_vue_vue_type_template_id_970a5c66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);