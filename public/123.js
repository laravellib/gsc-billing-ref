(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      form: new Form({
        month: "",
        year: "",
        period: "",
        periodDateFrom: "",
        periodDateTo: "",
        periodID: "",
        clientID: "0",
        filter: null,
        selectedData: {},
        selectRow: {},
        generationLoading: false,
        generationLoadingBCC: false,
        generationLoadingDEARBC: false,
        generationLoadingSLERS: false
      })
    };
  },
  created: function created() {
    // data grid 
    this.columnDefs = [{
      headerName: "Chapa",
      field: "OldChapaNo",
      resizable: true,
      width: 100
    }, {
      headerName: "Name",
      field: "FullName",
      resizable: true,
      width: 250
    }, {
      headerName: "Activity",
      field: "activity",
      resizable: true,
      width: 170
    }, {
      headerName: "Pay Station",
      field: "PayStation",
      resizable: true,
      width: 170
    }, {
      headerName: "Field",
      field: "Field",
      resizable: true,
      width: 170
    }, {
      headerName: "Reg",
      field: "RegularHours",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "OT",
      field: "OT",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "ND",
      field: "ND",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "NDOT",
      field: "NDOT",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "LEG",
      field: "LEG",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "ADJS",
      field: "ADJS",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "XTRA",
      field: "ExtraPay",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "Incentive",
      field: "Incentive",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "AddPay",
      field: "AddPay",
      resizable: true,
      width: 70,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "TotalAmount",
      field: "TotalAmount",
      resizable: true,
      width: 100,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }];
    this.form.filter = []; // end data grid 

    var d = new Date();
    this.form.month = d.getMonth();
    this.form.year = d.getFullYear();
    var day = d.getDate();

    if (day < 16) {
      this.form.period = 1;
    } else {
      this.form.period = 2;
    }
  },
  methods: {
    onChange: function onChange(e) {
      this.form.filter = [];
      var selectedRows = this.gridApi.getSelectedNodes();
      this.form.selectedData = selectedRows.map(function (node) {
        return node.data;
      }); // const selectedDataStringPresentation = this.form.selectedData.map(
      //     node =>
      //     this.form.IdToDelete.push(node.id)
      // );
    },
    getPeriodinfo: function getPeriodinfo() {
      var _this = this;

      this.form.generationLoading = true; //get the period information base on the month, year and period selected

      if (this.month != '' && this.year != '' && this.period != '') {
        this.form.post('api/getPayrollPeriodInfo').then(function (_ref) {
          var data = _ref.data;
          _this.form.periodDateFrom = data[0].PeriodFrom;
          _this.form.periodDateTo = data[0].PeriodTo;
          _this.form.generationLoading = false;
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    generateBilling: function generateBilling(clientGenerated) {
      var _this2 = this;

      if (this.month != '' && this.year != '' && this.period != '') {
        if (clientGenerated == 'bcc') {
          this.form.generationLoadingBCC = true;
          this.form.post('api/bccController').then(function (_ref2) {
            var data = _ref2.data;
            _this2.form.filter = data;
            _this2.form.clientID = "4";
            _this2.form.generationLoadingBCC = false;
            console.log(data);
          })["catch"](function (err) {
            console.log(err);
          });
        } else if (clientGenerated == 'dearbc') {
          this.form.generationLoadingDEARBC = true;
        } else if (clientGenerated == 'slers') {
          this.form.generationLoadingSLERS = true;
        }
      }
    },
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    }
  },
  computed: {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: 5
      }, function (value, index) {
        return year + 2 - index;
      });
    },
    months: function months() {
      var month = 12;
      return Array.from({
        length: 12
      }, function (value, index) {
        return month - index;
      });
    },
    periods: function periods() {
      var period = 1;
      return Array.from({
        length: 2
      }, function (value, index) {
        return period + index;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card full-width" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("div", { ref: "up", staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "sel1" } }, [_vm._v("Month")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.month,
                      expression: "form.month"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "month",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function($event) {
                        return _vm.getPeriodinfo()
                      }
                    ]
                  }
                },
                _vm._l(_vm.months, function(month) {
                  return _c(
                    "option",
                    { key: month, domProps: { value: month } },
                    [_vm._v(_vm._s(month))]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "sel1" } }, [_vm._v("Year")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.year,
                      expression: "form.year"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "year",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function($event) {
                        return _vm.getPeriodinfo()
                      }
                    ]
                  }
                },
                _vm._l(_vm.years, function(year) {
                  return _c(
                    "option",
                    { key: year, domProps: { value: year } },
                    [_vm._v(_vm._s(year))]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "sel1" } }, [_vm._v("Period")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.period,
                      expression: "form.period"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "period",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function($event) {
                        return _vm.getPeriodinfo()
                      }
                    ]
                  }
                },
                _vm._l(_vm.periods, function(period) {
                  return _c(
                    "option",
                    { key: period, domProps: { value: period } },
                    [_vm._v(_vm._s(period))]
                  )
                }),
                0
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-3" }, [
            _c("strong", [_vm._v("Date Period From:")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.periodDateFrom,
                  expression: "form.periodDateFrom"
                }
              ],
              staticClass: "form-control form-control-sm",
              attrs: { disabled: "", id: "soaDate", type: "date", value: "" },
              domProps: { value: _vm.form.periodDateFrom },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "periodDateFrom", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("strong", [_vm._v("Date Period To:")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.periodDateTo,
                  expression: "form.periodDateTo"
                }
              ],
              staticClass: "form-control form-control-sm",
              attrs: { disabled: "", id: "soaDate", type: "date", value: "" },
              domProps: { value: _vm.form.periodDateTo },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "periodDateTo", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: {
              disabled: _vm.form.generationLoadingBCC,
              variant: "primary"
            },
            on: {
              click: function($event) {
                return _vm.generateBilling("bcc")
              }
            }
          },
          [
            _c("b-spinner", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.form.generationLoadingBCC,
                  expression: "(form.generationLoadingBCC)"
                }
              ],
              attrs: { small: "", type: "grow" }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-square-right" }, [
              _vm._v("   Generate BCC Billing")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: {
              disabled: _vm.form.generationLoadingDEARBC,
              variant: "primary"
            },
            on: {
              click: function($event) {
                return _vm.generateBilling("dearbc")
              }
            }
          },
          [
            _c("b-spinner", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.form.generationLoadingDEARBC,
                  expression: "(form.generationLoadingDEARBC)"
                }
              ],
              attrs: { small: "", type: "grow" }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-square-right" }, [
              _vm._v("   Generate DEARBC Billing")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-button",
          {
            attrs: {
              disabled: _vm.form.generationLoadingSLERS,
              variant: "primary"
            },
            on: {
              click: function($event) {
                return _vm.generateBilling("slers")
              }
            }
          },
          [
            _c("b-spinner", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.form.generationLoadingSLERS,
                  expression: "(form.generationLoadingSLERS)"
                }
              ],
              attrs: { small: "", type: "grow" }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-square-right" }, [
              _vm._v("   Generate SLERS Billing")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("ag-grid-vue", {
                staticClass: "ag-theme-balham",
                staticStyle: { width: "100%", height: "200px" },
                attrs: { columnDefs: _vm.columnDefs, rowData: _vm.form.filter },
                on: { "grid-ready": _vm.onGridReady }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("OTHER CLIENT")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/other_clients/BccComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/other_clients/BccComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BccComponent.vue?vue&type=template&id=77ead108& */ "./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108&");
/* harmony import */ var _BccComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BccComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BccComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other_clients/BccComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BccComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BccComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/other_clients/BccComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BccComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BccComponent.vue?vue&type=template&id=77ead108& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/other_clients/BccComponent.vue?vue&type=template&id=77ead108&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BccComponent_vue_vue_type_template_id_77ead108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);