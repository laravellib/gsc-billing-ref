(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      from: this.$root.formatDate(new Date()),
      to: this.$root.formatDate(new Date()),
      form: new Form({
        month: "",
        year: "",
        period: "",
        to: "",
        from: ""
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    //Get user
    axios.get("api/reactGetUser").then(function (response) {
      _this.userMe = response.data['name'];
    })["catch"](function (error) {
      console.log(error);
    });
  },
  created: function created() {
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
    getPeriodinfo: function getPeriodinfo() {
      var _this2 = this;

      this.form.generationLoading = true; //get the period information base on the month, year and period selected

      if (this.month != '' && this.year != '' && this.period != '') {
        this.form.post('api/getPayrollPeriodInfo').then(function (_ref) {
          var data = _ref.data;
          _this2.form.from = data[0].PeriodFrom;
          _this2.form.to = data[0].PeriodTo;
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    printDar_SoastatusMonitoring: function printDar_SoastatusMonitoring() {
      var _this3 = this;

      axios.get("api/SoastatusMonitoring", {
        params: {
          from: this.from,
          to: this.to
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open("api/SoastatusMonitoring?from=" + _this3.from + "&to=" + _this3.to + "&report=true" + "&userMe=" + _this3.userMe);
        } else {
          return toast.fire({
            icon: "warning",
            title: "No data found."
          });
        }

        _this3.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-sm-2" }, [
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
            _c("div", { staticClass: "col-sm-2" }, [
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
            _c("div", { staticClass: "col-sm-2" }, [
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
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-3" }, [
              _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                _vm._v("Date Range From:")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.from,
                    expression: "from"
                  }
                ],
                staticClass: "form-control form-control-sm mb-2",
                attrs: { type: "date", placeholder: "Search Rental..." },
                domProps: { value: _vm.from },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.from = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                _vm._v("To:")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.to,
                    expression: "to"
                  }
                ],
                staticClass: "form-control form-control-sm mb-2",
                attrs: { type: "date", placeholder: "Search Rental..." },
                domProps: { value: _vm.to },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.to = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  staticStyle: { "margin-top": "25px" },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.printDar_SoastatusMonitoring()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-print" }),
                  _vm._v(" Generate DAR Report")
                ]
              )
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
        _vm._v("DAR SOA MONITORING STATUS")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reports/SoaStatusMonitoring.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/reports/SoaStatusMonitoring.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoaStatusMonitoring.vue?vue&type=template&id=292eaa94& */ "./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94&");
/* harmony import */ var _SoaStatusMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoaStatusMonitoring.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoaStatusMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/SoaStatusMonitoring.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaStatusMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoaStatusMonitoring.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaStatusMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoaStatusMonitoring.vue?vue&type=template&id=292eaa94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaStatusMonitoring.vue?vue&type=template&id=292eaa94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaStatusMonitoring_vue_vue_type_template_id_292eaa94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);