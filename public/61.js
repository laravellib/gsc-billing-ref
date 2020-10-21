(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinner_dist_vue_spinner_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinner/dist/vue-spinner.min.js */ "./node_modules/vue-spinner/dist/vue-spinner.min.js");
/* harmony import */ var vue_spinner_dist_vue_spinner_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_spinner_dist_vue_spinner_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdminComponents_BarChart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AdminComponents/BarChart.js */ "./resources/js/components/AdminComponents/BarChart.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LineChart: _AdminComponents_BarChart_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      PayStation: "",
      Month: "",
      Year: "",
      Phase: "",
      datacollection: {},
      datacollection2: {},
      selectedMonth: "",
      selectedYear: "",
      selectedPhase: "",
      selectedPayStation: "",
      Paystations: "",
      Totals: "",
      Dates: "",
      TotalsAmount: "",
      darreportsresult: [],
      tangtanglastcomma: "",
      tangtanglastcommadates: "",
      tangtanglastcommatotal: "",
      tangtanglastcommatotalamount: "",
      stringtoarrayna: [],
      stringtoarraynadates: [],
      stringtoarraynatotal: [],
      stringtoarraynatotalamount: [],
      color: "",
      tangtanglastcommacolor: "",
      stringtoarraynacolor: [],
      min: 1,
      max: 255,
      TotalAverageHeadCount: 0,
      FinalViewTotalAverageHeadCount: 0,
      TotalNetAmount: 0,
      index: 0
    };
  },
  mounted: function mounted() {
    this.LoadPayrollPeriodMonth();
    this.LoadPayrollPeriodYear();
    this.LoadPayrollPeriodPayStation();
  },
  methods: {
    getPhoto: function getPhoto() {
      return "img/source (1).gif";
    },
    doMath: function doMath(index) {
      return index + 1;
    },
    generateDarReport: function generateDarReport() {
      var _this = this;

      //   this.fillData();
      // $('#addNew').modal('show');
      document.getElementById('overlay').style.display = "block"; // axios.get('/api/getDARReportPayStation', {params: {selectedMonth: this.selectedMonth, selectedYear: this.selectedYear, selectedPhase: this.selectedPhase,selectedPayStation: this.selectedPayStation}})

      axios.get('/api/getDARReportPayStation', {
        params: {
          selectedMonth: this.selectedMonth,
          selectedYear: this.selectedYear,
          selectedPhase: this.selectedPhase,
          selectedPayStation: this.selectedPayStation
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.darreportsresult = data;
        _this.Paystations = "";
        _this.Totals = "";
        _this.TotalsAmount = "";
        _this.Dates = "";
        _this.color = "";
        _this.TotalAverageHeadCount = 0;
        _this.TotalNetAmount = 0; //   this.Paystations = this.darreportsresult.PayStation;
        //   this.Totals = this.darreportsresult.Total;
        //  this.fillData();

        console.log(_this.darreportsresult);

        for (var i = 0; i < _this.darreportsresult.length; i++) {
          // this.Paystations = this.darreportsresult[i].PayStation;
          _this.Paystations = _this.darreportsresult[i].PayStation + ',' + _this.Paystations;
          _this.Totals = _this.darreportsresult[i].Total + ',' + _this.Totals;
          _this.TotalsAmount = _this.darreportsresult[i].TotalAmount + ',' + _this.TotalsAmount;
          _this.Dates = _this.darreportsresult[i].PeriodDate + ' ,' + _this.Dates;
          var r = Math.floor(Math.random() * (_this.max - _this.min + 1) + _this.min);
          var g = Math.floor(Math.random() * (_this.max - _this.min + 1) + _this.min);
          var b = Math.floor(Math.random() * (_this.max - _this.min + 1) + _this.min);
          _this.color = 'rgb(' + r + ',' + g + ',' + b + ') ,' + _this.color;
          _this.TotalAverageHeadCount = _this.darreportsresult[i].Total + _this.TotalAverageHeadCount;
          _this.TotalNetAmount = _this.darreportsresult[i].TotalAmount + _this.TotalNetAmount;
        } //    $('#addNew').modal('hide');
        // $('.modal-backdrop').remove();


        swal.fire({
          icon: 'success',
          title: 'Finished!',
          text: 'Done Generating Report!'
        });
        document.getElementById('overlay').style.display = "none";

        _this.fillData();
      })["catch"](function (err) {});
    },
    fillData: function fillData() {
      this.FinalViewTotalAverageHeadCount = this.TotalAverageHeadCount / this.darreportsresult.length;
      this.tangtanglastcomma = this.Paystations.replace(/,\s*$/, "");
      this.tangtanglastcommatotal = this.Totals.replace(/,\s*$/, "");
      this.tangtanglastcommatotalamount = this.TotalsAmount.replace(/,\s*$/, "");
      this.tangtanglastcommacolor = this.color.replace(/,\s*$/, "");
      this.tangtanglastcommadates = this.Dates.replace(/,\s*$/, "");
      this.stringtoarrayna = this.tangtanglastcomma.split(",");
      this.stringtoarraynatotal = this.tangtanglastcommatotal.split(",");
      this.stringtoarraynatotalamount = this.tangtanglastcommatotalamount.split(",");
      this.stringtoarraynacolor = this.tangtanglastcommacolor.split(" ,");
      this.stringtoarraynadates = this.tangtanglastcommadates.split(" ,");
      console.log('Dates: ' + this.stringtoarraynadates);
      console.log('Amount: ' + this.stringtoarraynatotal); //var data =this.Paystations.split(",");

      this.datacollection = {
        labels: this.stringtoarraynadates,
        datasets: [{
          label: 'Data One',
          backgroundColor: this.stringtoarraynacolor,
          data: this.stringtoarraynatotal
        }],
        options: {
          scaleShowValues: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      };
      this.datacollection2 = {
        labels: this.stringtoarraynadates,
        datasets: [{
          label: 'Data Two',
          backgroundColor: this.stringtoarraynacolor,
          data: this.stringtoarraynatotalamount
        }],
        options: {
          scaleShowValues: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                autoSkip: false,
                labelString: 'hehefeefefefe'
              }
            }]
          }
        }
      };
    },
    LoadPayrollPeriodMonth: function LoadPayrollPeriodMonth() {
      var _this2 = this;

      axios.get('api/getPPMonth').then(function (response) {
        _this2.Month = response.data;
        console.log(_this2.Month);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    LoadPayrollPeriodYear: function LoadPayrollPeriodYear() {
      var _this3 = this;

      axios.get('api/getPPYear').then(function (response) {
        _this3.Year = response.data;
        console.log(_this3.Year);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    LoadPayrollPeriodPayStation: function LoadPayrollPeriodPayStation() {
      var _this4 = this;

      axios.get('api/getPPPayStation').then(function (response) {
        _this4.PayStation = response.data;
        console.log(_this4.PayStation);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.fillData();
  },
  computed: {
    totals: function totals() {
      return this.darreportsresult;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.small {\n  max-width: 600px;\n  margin:  150px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-xs-12" }, [
    _c(
      "div",
      { attrs: { id: "overlay" } },
      [
        _c(
          "center",
          [
            _c("b-spinner", {
              staticStyle: {
                width: "6rem",
                height: "6rem",
                "margin-top": "300px",
                color: "#82E0AA"
              },
              attrs: { label: "Large Spinner", type: "grow" }
            }),
            _vm._v(" "),
            _c("b-spinner", {
              staticStyle: {
                width: "6rem",
                height: "6rem",
                "margin-top": "300px",
                color: "#82E0AA"
              },
              attrs: { label: "Large Spinner", type: "grow" }
            }),
            _vm._v(" "),
            _c("b-spinner", {
              staticStyle: {
                width: "6rem",
                height: "6rem",
                "margin-top": "300px",
                color: "#82E0AA"
              },
              attrs: { label: "Large Spinner", type: "grow" }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-xs-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("label", { staticClass: "mr-sm-2" }, [
                      _vm._v("Select Month")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedMonth,
                            expression: "selectedMonth"
                          }
                        ],
                        attrs: { required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedMonth = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("Choose Month...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.Month, function(momonth) {
                          return _c(
                            "option",
                            {
                              key: momonth.id,
                              domProps: { value: momonth.xMonth }
                            },
                            [
                              _vm._v(
                                "\r\n                    " +
                                  _vm._s(momonth.xMonth) +
                                  "\r\n                  "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("label", { staticClass: "mr-sm-2" }, [
                      _vm._v("Select Year")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedYear,
                            expression: "selectedYear"
                          }
                        ],
                        attrs: { required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedYear = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("Choose Year...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.Year, function(yeyear) {
                          return _c(
                            "option",
                            {
                              key: yeyear.id,
                              domProps: { value: yeyear.xYear }
                            },
                            [
                              _vm._v(
                                "\r\n                    " +
                                  _vm._s(yeyear.xYear) +
                                  "\r\n                  "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "div",
                      { staticClass: "input-group mb-3 input-group-sm" },
                      [
                        _c("label", { staticClass: "mr-sm-2" }, [
                          _vm._v("Select Phase")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedPhase,
                                expression: "selectedPhase"
                              }
                            ],
                            attrs: { required: "" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectedPhase = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "", selected: "" } },
                              [_vm._v("Choose Phase...")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("1")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("2")
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("label", { staticClass: "mr-sm-2" }, [
                      _vm._v("Select Pay Station")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedPayStation,
                            expression: "selectedPayStation"
                          }
                        ],
                        attrs: { required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedPayStation = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("Choose Pay Station...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.PayStation, function(ps) {
                          return _c(
                            "option",
                            { key: ps.id, domProps: { value: ps.PayStation } },
                            [
                              _vm._v(
                                "\r\n                    " +
                                  _vm._s(ps.PayStation) +
                                  "\r\n                  "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "div",
                      { staticClass: "input-group mb-3 input-group-sm" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: { click: _vm.generateDarReport }
                          },
                          [_vm._v("Generate")]
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("line-chart", {
                attrs: { width: 300, "chart-data": _vm.datacollection }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("line-chart", {
                    attrs: {
                      width: 300,
                      height: 428,
                      "chart-data": _vm.datacollection2
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body table-responsive pre-scrollables" }, [
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.darreportsresult, function(dar, index) {
              return _c("tr", { key: dar.id }, [
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(_vm._s(_vm.doMath(index)))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(_vm._s(dar.PeriodDate))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(_vm._s(dar.Total))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    _vm._s(
                      "Php" +
                        dar.TotalAmount.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2
                        })
                    )
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _c("thead", { staticClass: "thead-dark" }, [
        _c("tr", [
          _c("th", { staticStyle: { "text-align": "right" } }, [
            _vm._v(_vm._s("GRAND TOTAL"))
          ]),
          _vm._v(" "),
          _c("th", { staticStyle: { "text-align": "right" } }, [
            _vm._v(
              _vm._s(
                "Total Average Head Count: " +
                  this.FinalViewTotalAverageHeadCount.toLocaleString(
                    undefined,
                    { maximumFractionDigits: 0, minimumFractionDigits: 0 }
                  )
              )
            )
          ]),
          _vm._v(" "),
          _c("th", { staticStyle: { "text-align": "right" } }, [
            _vm._v(
              _vm._s(
                "Total Amount: Php" +
                  this.TotalNetAmount.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })
              )
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
    return _c("div", { staticClass: "col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("h2", { staticClass: "card-title" }, [
            _c("b", [
              _vm._v("DAR Statistics Per Pay Station(AVERAGE HEAD COUNT)")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("h2", { staticClass: "card-title" }, [
            _c("b", [_vm._v("DAR Statistics Per Pay Station(TOTAL AMOUNT)")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { "text-align": "right" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "right" } }, [
          _vm._v("Pay Station")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "right" } }, [
          _vm._v("Average Head Count")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "right" } }, [_vm._v("Amount")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AdminComponents/BarChart.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/AdminComponents/BarChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [reactiveProp],
  props: ['options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33& */ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33&");
/* harmony import */ var _DARReportsPerPayStationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DARReportsPerPayStationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DARReportsPerPayStationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DARReportsPerPayStationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AdminComponents/DARReportsPerPayStationComponent.vue?vue&type=template&id=5dfc6f33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DARReportsPerPayStationComponent_vue_vue_type_template_id_5dfc6f33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);