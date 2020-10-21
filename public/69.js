(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_golfcart_transmittal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/golfcart-transmittal.vue */ "./resources/js/components/search/golfcart-transmittal.vue");
/* harmony import */ var _search_SearchAllowance_SearchSignatories_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchAllowance/SearchSignatories.vue */ "./resources/js/components/search/SearchAllowance/SearchSignatories.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'search-transmittal': _search_golfcart_transmittal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-signatory': _search_SearchAllowance_SearchSignatories_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      DateFrom: '',
      DateTo: '',
      columnDefs: [],
      csoas: [],
      signatories: {
        noted_by: '',
        noted_by_des: '',
        prepared_by: '',
        prepared_by_des: ''
      },
      TransmittalNo: ''
    };
  },
  mounted: function mounted() {
    this.loadCSOA();
    this.getTransmittalNo();
    this.getUser();
  },
  created: function created() {
    var today = new Date().toISOString().slice(0, 10);
    this.DateFrom = today;
    this.DateTo = today;
  },
  methods: {
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    searchSearchSignatoryButton: function searchSearchSignatoryButton(number) {
      Fire.$emit('searchSignatory', number);
    },
    transmittalClose: function transmittalClose(row) {
      this.transmittal_no = row.series_no;
    },
    signatoryClose: function signatoryClose(row) {
      if (row.number == 1) {
        this.signatories.noted_by = row.SignatoryName;
        this.signatories.noted_by_des = row.Designation;
      }
    },
    getTransmittalNo: function getTransmittalNo() {
      var _this = this;

      axios.get('api/jTNo').then(function (_ref) {
        var data = _ref.data;
        _this.TransmittalNo = data;
      });
    },
    printTransmittal: function printTransmittal() {
      var _this2 = this;

      this.$Progress.start();
      axios.get('api/reportJeepTransmittal', {
        params: {
          searchTransmittalExists: true,
          transmittal_no: this.transmittal_no
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open('api/reportJeepTransmittal?report=true&transmittal_no=' + _this2.transmittal_no);

          _this2.getTransmittalNo();

          _this2.loadCSOA();
        } else {
          return toast.fire({
            icon: 'warning',
            title: 'No data found in this transmittal number.'
          });
        }

        _this2.$Progress.finish();
      })["catch"](function (error) {
        return toast.fire({
          icon: 'warning',
          title: 'Something went wrong.'
        });
      });
    },
    searchTransmittal: function searchTransmittal() {
      Fire.$emit('searchTransmittal', 'jeep');
    },
    createTransmittal: function createTransmittal() {
      var _this3 = this;

      var selectedNodes = this.gridApi.getSelectedNodes();
      var selectedData = selectedNodes.map(function (node) {
        return node.data;
      });
      var selectedDataStringPresentation = selectedData.map(function (node) {
        return node.Soa_JeepID;
      }).join(',');

      if (!selectedDataStringPresentation) {
        return swal.fire('Confirmation!', 'Select Transaction to Proceed', 'warning');
      }

      if (!this.TransmittalNo) {
        return swal.fire('Confirmation!', 'No transmittal no to be saved', 'warning');
      }

      if (!this.signatories.noted_by) {
        return swal.fire('Confirmation!', 'Select Noted By to Proceed', 'warning');
      }

      var data = Object.assign({}, this.signatories);
      data.ids = selectedDataStringPresentation;
      axios.post('jeep/create_transmittal/', data).then(function (_ref2) {
        var response = _ref2.response;
        swal.fire('SUCCESS!', 'The transmittal has been created.', 'success');

        _this3.printTransmittal();
      })["catch"](function (error) {
        swal.fire('ERROR!', 'Something went wrong', 'error');
      });
    },
    getUser: function getUser() {
      var _this4 = this;

      axios.get('api/allowance', {
        params: {
          getUser: true
        }
      }).then(function (response) {
        _this4.signatories.prepared_by = response.data.name;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadCSOA: function loadCSOA() {
      var _this5 = this;

      this.columnDefs = [{
        headerName: 'SOA Date',
        field: 'JeepSoaDate',
        width: 200,
        resizable: true
      }, {
        headerName: 'SOA No',
        field: 'GSCSoaSeriesNo',
        width: 200,
        resizable: true
      }, {
        headerName: 'Billed To',
        field: 'BilledName',
        width: 300,
        resizable: true
      }, {
        headerName: 'Charge Invoice No',
        field: 'InvoiceNo',
        width: 200,
        resizable: true
      }, {
        headerName: 'Status',
        field: 'Status',
        resizable: true,
        width: 250
      }];
      axios.get('api/getcsoatransmitted', {
        params: {
          from: this.DateFrom,
          to: this.DateTo
        }
      }).then(function (response) {
        console.log(response.data);
        _this5.csoas = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-readonly] {\r\n\tpointer-events: none;\n}\n#stringinput {\r\n\tmin-width: 500px;\r\n\tmin-height: 80px;\r\n\tmax-width: 500px;\r\n\tmax-height: 80px;\r\n\ttext-align: left;\r\n\toverflow-y: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", attrs: { id: "sweget" } },
    [
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
                        "\n                                Master File\n                                "
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
                              attrs: { to: "/operatorlist" }
                            },
                            [_c("a", [_vm._v("Operator List")])]
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
                              attrs: { to: "/vehiclelist" }
                            },
                            [_c("a", [_vm._v("JEEP Vehicle List")])]
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
                              attrs: { to: "/vehiclerate" }
                            },
                            [_c("a", [_vm._v("JEEP Rate List")])]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/ratePercent" }
                            },
                            [_c("a", [_vm._v("Admin Rate Percentage")])]
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
                        "\n                                Transactions\n                                "
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
                              attrs: { to: "/jeepvehiclelogentry" }
                            },
                            [_c("a", [_vm._v("Jeep Vehicle Log Entry")])]
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
                              attrs: { to: "/createsoa" }
                            },
                            [_c("a", [_vm._v("Create Jeep SOA")])]
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
                              attrs: { to: "/soatransactions" }
                            },
                            [_c("a", [_vm._v("SOA Transaction")])]
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
                        "\n                                Jeep Reports\n                                "
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
                              attrs: { to: "/reportlistJVL" }
                            },
                            [_c("a", [_vm._v("Standard Jeep Report")])]
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
                              attrs: { to: "/reportlistJVLPerJeep" }
                            },
                            [
                              _c("a", [
                                _vm._v("Jeepney's Vehicle Log Billing Report")
                              ])
                            ]
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
                              attrs: { to: "/JeepSOATransmittal" }
                            },
                            [_c("a", [_vm._v("Jeepney's SOA Transmittal")])]
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
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "form",
              {
                staticStyle: {
                  "border-style": "solid",
                  "border-color": "coral"
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.loadCSOA($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "form-inline col-md-8" }, [
                    _c(
                      "div",
                      {
                        staticClass: "input-group mb-3 input-group-sm",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-left": "5px"
                        }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.DateFrom,
                              expression: "DateFrom"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            name: "DateFrom",
                            required: ""
                          },
                          domProps: { value: _vm.DateFrom },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.DateFrom = $event.target.value
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "input-group mb-3 input-group-sm",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-left": "5px"
                        }
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.DateTo,
                              expression: "DateTo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", name: "DateTo", required: "" },
                          domProps: { value: _vm.DateTo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.DateTo = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(3)
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c(
                      "div",
                      {
                        staticClass: "input-group mb-3 input-group-sm",
                        staticStyle: {
                          "margin-top": "10px",
                          "margin-left": "5px"
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.TransmittalNo,
                              expression: "TransmittalNo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "TransmittalNo",
                            readonly: ""
                          },
                          domProps: { value: _vm.TransmittalNo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.TransmittalNo = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: { type: "button" },
                              on: { click: _vm.searchTransmittal }
                            },
                            [_c("i", { staticClass: "fa fa-search" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.printTransmittal }
                            },
                            [_c("i", { staticClass: "fa fa-print" })]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("br")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c("ag-grid-vue", {
                    staticClass: "ag-theme-balham",
                    staticStyle: { width: "100%", height: "300px" },
                    attrs: {
                      columnDefs: _vm.columnDefs,
                      rowData: _vm.csoas,
                      rowSelection: "multiple"
                    },
                    on: { "grid-ready": _vm.onGridReady }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("label", [_vm._v("Prepared By")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.signatories.prepared_by,
                      expression: "signatories.prepared_by"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "Prepared_by",
                    placeholder: "",
                    required: "",
                    disabled: ""
                  },
                  domProps: { value: _vm.signatories.prepared_by },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.signatories,
                        "prepared_by",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("label", [_vm._v("Noted By")]),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.signatories.noted_by,
                            expression: "signatories.noted_by"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "Prepared_by",
                          placeholder: "",
                          required: "",
                          disabled: ""
                        },
                        domProps: { value: _vm.signatories.noted_by },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.signatories,
                              "noted_by",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-primary", size: "sm" },
                              on: {
                                click: function($event) {
                                  return _vm.searchSearchSignatoryButton(1)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-search",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: { click: _vm.createTransmittal }
                  },
                  [
                    _vm._v(
                      "\n                    Create Transmittal\n                "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("search-transmittal", {
        on: {
          rowClick: function($event) {
            return _vm.transmittalClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-signatory", {
        on: {
          rowClick: function($event) {
            return _vm.signatoryClose($event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-title" }, [
      _c("b", [_vm._v("For Transmittal Jeep SOA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Search Date From")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Search Date To")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-outline-secondary" }, [
        _vm._v("Search")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepSOATransmittal.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JeepSOATransmittal.vue?vue&type=template&id=160ff670& */ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670&");
/* harmony import */ var _JeepSOATransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JeepSOATransmittal.vue?vue&type=script&lang=js& */ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JeepSOATransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/JeepComponents/JeepSOATransmittal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepSOATransmittal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepSOATransmittal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepSOATransmittal.vue?vue&type=template&id=160ff670& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepSOATransmittal.vue?vue&type=template&id=160ff670&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepSOATransmittal_vue_vue_type_template_id_160ff670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);