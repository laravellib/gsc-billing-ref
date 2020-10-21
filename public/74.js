(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      month: this.$root.formatDateMonth(new Date()),
      year: this.$root.formatDateYear(new Date()),
      allowances: [],
      fuel: [],
      ppe: [],
      supplies: [],
      incentives: [],
      others: [],
      page: 1,
      search: ""
    };
  },
  mounted: function mounted() {
    this.generate();
    this.pageClick(1);
  },
  methods: {
    pageClick: function pageClick(number) {
      this.page = number;

      for (var i = 1; i <= 6; i++) {
        if (i != number) {
          document.getElementById(i).className = "btn btn-primary"; // document.getElementById(i).className.remove("color-bg-white");
        } else {
          document.getElementById(i).className = "color-bg-white";
        }
      }
    },
    getAllowances: function getAllowances() {
      var _this = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getAllowanceMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this.allowances = response.data;

        _this.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPPE: function getPPE() {
      var _this2 = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getPPEMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this2.ppe = response.data;

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getFuel: function getFuel() {
      var _this3 = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getFuelMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this3.fuel = response.data;

        _this3.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getSupplies: function getSupplies() {
      var _this4 = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getSuppliesMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this4.supplies = response.data;

        _this4.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getIncentives: function getIncentives() {
      var _this5 = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getIncentivesMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this5.incentives = response.data;

        _this5.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getOthers: function getOthers() {
      var _this6 = this;

      this.$Progress.start();
      axios.get("api/monitoring", {
        params: {
          getOthersMonitoring: true,
          month: this.month,
          year: this.year
        }
      }).then(function (response) {
        _this6.others = response.data;

        _this6.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    generate: function generate() {
      this.getAllowances();
      this.getFuel();
      this.getPPE();
      this.getSupplies();
      this.getIncentives();
      this.getOthers();
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this7 = this;

      return this.allowances.filter(function (item) {
        return _this7.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs2: function filteredBlogs2() {
      var _this8 = this;

      return this.fuel.filter(function (item) {
        return _this8.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs3: function filteredBlogs3() {
      var _this9 = this;

      return this.ppe.filter(function (item) {
        return _this9.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs4: function filteredBlogs4() {
      var _this10 = this;

      return this.supplies.filter(function (item) {
        return _this10.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs5: function filteredBlogs5() {
      var _this11 = this;

      return this.incentives.filter(function (item) {
        return _this11.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs6: function filteredBlogs6() {
      var _this12 = this;

      return this.others.filter(function (item) {
        return _this12.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dave-modified-height{\n    height: 300px !important;\n}\n.color-bg-white{\n    background-color:white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Monitoring.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-2" }, [
                  _c("label", [_vm._v("For the month of:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.month,
                        expression: "month"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "month", name: "month" },
                    domProps: { value: _vm.month },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.month = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("label", [_vm._v("Year:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.year,
                        expression: "year"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "year",
                      maxlength: "4",
                      list: "year"
                    },
                    domProps: { value: _vm.year },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.year = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("label", [_vm._v(" ")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.generate()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                        GO\n                                    "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass: "btn-group",
                  attrs: { role: "group", "aria-label": "Basic example" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "1" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(1)
                        }
                      }
                    },
                    [_vm._m(2)]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "2" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(2)
                        }
                      }
                    },
                    [_vm._m(3)]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "3" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(3)
                        }
                      }
                    },
                    [_vm._m(4)]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "4" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(4)
                        }
                      }
                    },
                    [_vm._m(5)]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "5" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(5)
                        }
                      }
                    },
                    [_vm._m(6)]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      staticStyle: { width: "120px" },
                      attrs: { type: "button", id: "6" },
                      on: {
                        click: function($event) {
                          return _vm.pageClick(6)
                        }
                      }
                    },
                    [_vm._m(7)]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 1,
                  expression: "page == 1"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(8),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.allowances.length == 0,
                                expression: "this.allowances.length == 0"
                              }
                            ]
                          },
                          [_vm._m(9)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 2,
                  expression: "page == 2"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.fuel.length == 0,
                                expression: "this.fuel.length == 0"
                              }
                            ]
                          },
                          [_vm._m(11)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs2, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 3,
                  expression: "page == 3"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(12),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.ppe.length == 0,
                                expression: "this.ppe.length == 0"
                              }
                            ]
                          },
                          [_vm._m(13)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs3, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 4,
                  expression: "page == 4"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(14),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.supplies.length == 0,
                                expression: "this.supplies.length == 0"
                              }
                            ]
                          },
                          [_vm._m(15)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs4, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 5,
                  expression: "page == 5"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(16),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.incentives.length == 0,
                                expression: "this.incentives.length == 0"
                              }
                            ]
                          },
                          [_vm._m(17)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs5, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.page == 6,
                  expression: "page == 6"
                }
              ],
              staticClass: "row"
            },
            [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(18),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody dave-modified-height" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.others.length == 0,
                                expression: "this.others.length == 0"
                              }
                            ]
                          },
                          [_vm._m(19)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs6, function(item) {
                          return _c("tr", [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.SOANo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.date_created))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmittal_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.transmitted_by))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.billedTo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.billed_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(item.check_no))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(item.check_date))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(item.check_amount)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatNumber")(
                                    item.balance ? item.balance : "0"
                                  )
                                )
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
            ]
          )
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
        _c("b", [_vm._v("OTHERINS MONITORING")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("datalist", { attrs: { id: "year" } }, [
      _c("option", [_vm._v("2019")]),
      _vm._v(" "),
      _c("option", [_vm._v("2020")]),
      _vm._v(" "),
      _c("option", [_vm._v("2021")]),
      _vm._v(" "),
      _c("option", [_vm._v("2022")]),
      _vm._v(" "),
      _c("option", [_vm._v("2023")]),
      _vm._v(" "),
      _c("option", [_vm._v("2024")]),
      _vm._v(" "),
      _c("option", [_vm._v("2025")]),
      _vm._v(" "),
      _c("option", [_vm._v("2026")]),
      _vm._v(" "),
      _c("option", [_vm._v("2027")]),
      _vm._v(" "),
      _c("option", [_vm._v("2028")]),
      _vm._v(" "),
      _c("option", [_vm._v("2029")]),
      _vm._v(" "),
      _c("option", [_vm._v("2030")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("ALLOWANCE")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("FUEL")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("PPE")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("SUPPLIES")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("INCENTIVES")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("i", [_c("b", [_vm._v("OTHERS")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "6" } }),
        _vm._v(" "),
        _c(
          "th",
          {
            staticStyle: {
              "text-align": "center",
              "border-left": "1px solid black",
              "border-right": "1px solid black"
            },
            attrs: { colspan: "4" }
          },
          [
            _vm._v(
              "\n                                        Payment\n                                    "
            )
          ]
        ),
        _vm._v(" "),
        _c("th")
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOANo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmittal No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Transmitted By")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Particulars")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Billed Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Bank")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Check Amount")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Balance")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MonitoringOtherIns/Monitoring.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/MonitoringOtherIns/Monitoring.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Monitoring.vue?vue&type=template&id=476d3816& */ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816&");
/* harmony import */ var _Monitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Monitoring.vue?vue&type=script&lang=js& */ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Monitoring.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Monitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MonitoringOtherIns/Monitoring.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Monitoring.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Monitoring.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Monitoring.vue?vue&type=template&id=476d3816& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MonitoringOtherIns/Monitoring.vue?vue&type=template&id=476d3816&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monitoring_vue_vue_type_template_id_476d3816___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);