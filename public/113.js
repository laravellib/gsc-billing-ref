(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/Department.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/Department.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      header: {
        ADID: "",
        Code: "",
        Department: ""
      }
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    rowClick: function rowClick(row) {
      this.header = Object.assign({}, row);
      this.header.UnitPrice = this.$root.formatNumberCommaRound(row.UnitPrice);
      this.$emit("rowClick", row);
      $("#FUELListModal").modal("hide");
    },
    getData: function getData() {
      var _this = this;

      axios.get("api/allowance", {
        params: {
          getDepartment: true
        }
      }).then(function (response) {
        _this.rows = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    save: function save() {
      var _this2 = this;

      var data = Object.assign({}, this.header);
      this.$Progress.start();
      axios.post("api/allowanceDepartment", data).then(function (response) {
        if (response.data.success) {
          if (response.data.id) {
            _this2.header.ADID = response.data.id;
          }

          toast.fire({
            icon: "success",
            title: response.data.message
          });

          _this2.clearButton();
        } else {
          toast.fire({
            icon: "warning",
            title: response.data.message
          });
        }

        _this2.getData();

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteFUELListButton: function deleteFUELListButton() {
      var _this3 = this;

      if (!this.header.ADID) {
        return toast.fire({
          icon: "warning",
          title: "Please select a record to continue."
        });
      }

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          axios["delete"]("api/allowanceDepartmentDelete/".concat(_this3.header.ADID)).then(function (response) {
            if (response.data.success) {
              _this3.getData();

              _this3.clearButton();

              swal.fire("Deleted!", response.data.message, "success");
            } else {
              swal.fire("Warning!", response.data.message, "warning");
            }

            _this3.$Progress.finish();
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          swal.fire("Information!", "Deletion is cancelled.", "warning");
        }
      });
    },
    clearButton: function clearButton() {
      this.header = {
        ADID: "",
        Code: "",
        Department: ""
      };
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this4 = this;

      return this.rows.filter(function (item) {
        return _this4.search.toLowerCase().split(" ").every(function (v) {
          return item.Code.toLowerCase().includes(v) || item.Department.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container dave-template" }, [
    _c("div", { staticClass: "col-xs-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.save()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Control No.")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.ADID,
                              expression: "header.ADID"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "ADID",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.header.ADID },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.header, "ADID", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Code")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.Code,
                              expression: "header.Code"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "Code",
                            placeholder: ""
                          },
                          domProps: { value: _vm.header.Code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.header, "Code", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Description")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.Department,
                              expression: "header.Department"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "Department",
                            placeholder: ""
                          },
                          domProps: { value: _vm.header.Department },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.header,
                                "Department",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12 text-right" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button", bold: "" },
                            on: {
                              click: function($event) {
                                return _vm.clearButton()
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-eraser",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(
                              "\n                                            CLEAR\n                                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("label", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", bold: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteFUELListButton()
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-trash",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(
                              "\n                                            DELETE\n                                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("label", [_vm._v(" ")]),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-7" }, [
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
                      staticClass: "table table-hover table-striped dave-table"
                    },
                    [
                      _vm._m(2),
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
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    width: "15%",
                                    "text-align": "center"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(item.Code) +
                                      "\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(item.Department) +
                                    "\n                                            "
                                )
                              ])
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
        _c("b", [_vm._v("Department List Entry")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success", attrs: { type: "submit", bold: "" } },
      [
        _c("i", {
          staticClass: "fa fa-save",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(
          "\n                                            SAVE\n                                        "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { staticStyle: { "text-align": "center", width: "15%" } }, [
          _vm._v("Code")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "left" } }, [
          _vm._v("Department")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/allowance/Department.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/allowance/Department.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Department.vue?vue&type=template&id=6dc31a14& */ "./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14&");
/* harmony import */ var _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department.vue?vue&type=script&lang=js& */ "./resources/js/components/allowance/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/allowance/Department.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/allowance/Department.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/allowance/Department.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=template&id=6dc31a14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/Department.vue?vue&type=template&id=6dc31a14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_6dc31a14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);