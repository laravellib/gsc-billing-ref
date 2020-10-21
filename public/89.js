(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FUEL_ShowDetailModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FUEL/ShowDetailModal.vue */ "./resources/js/components/FUEL/ShowDetailModal.vue");
/* harmony import */ var _search_SearchAllowance_SearchFUELHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchAllowance/SearchFUELHeader.vue */ "./resources/js/components/search/SearchAllowance/SearchFUELHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "search-fuelDetail": _FUEL_ShowDetailModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "search-fuelHeader": _search_SearchAllowance_SearchFUELHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: "",
      headerList: [],
      dataInHeader: false,
      header: {
        FHID: "",
        SOANo: "",
        billing: "0.00",
        balance: "0.00",
        totalPayment: "0.00"
      },
      detailList: [],
      dataInDetail: false,
      detail: {
        FPID: "",
        hdr_idLink: "",
        paymentMode: "",
        check_no: "",
        check_date: this.$root.formatDate(new Date()),
        check_amount: "0.00",
        orNumber: "",
        remarks: ""
      },
      check_amount: 0,
      SOANo: ""
    };
  },
  mounted: function mounted() {// this.getData();
  },
  methods: {
    appendSOANo: function appendSOANo() {
      var _this = this;

      if (!this.SOANo) {
        return toast.fire({
          icon: "warning",
          title: "Please select SOA Number to continue."
        });
      }

      this.$Progress.start();
      axios.get("api/fuel", {
        params: {
          getViewFUEL: true,
          SOANo: this.SOANo
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          var exist = false;

          if (_this.headerList.length > 0) {
            _this.headerList.forEach(function (item) {
              if (item.SOANo == response.data[0].SOANo) {
                exist = true;
                return toast.fire({
                  icon: "warning",
                  title: "SOA Number already in the list."
                });
              }
            });
          }

          if (!exist) {
            _this.headerList.push(response.data[0]);

            _this.dataInHeader = true;

            _this.totalBilling();
          }
        } else {
          return toast.fire({
            icon: "warning",
            title: "SOA Number has no details."
          });
        }

        _this.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    totalBilling: function totalBilling() {
      var total = 0;
      this.headerList.forEach(function (item) {
        total = total + item.TotalAmount;
      });
      this.header.billing = this.$root.formatNumberCommaRound(total);
      this.detail.check_amount = this.$root.formatNumberCommaRound(total);
    },
    removeSOANo: function removeSOANo(item) {
      this.headerList.splice(this.headerList.indexOf(item), 1);
      this.totalBilling();
    },
    getDetail: function getDetail() {
      var _this2 = this;

      if (this.header.FHID) {
        axios.get("api/fuel", {
          params: {
            getPaymentDetail: true,
            id: this.header.FHID
          }
        }).then(function (response) {
          if (response.data.length > 0) {
            _this2.detailList = response.data;
            _this2.dataInDetail = true;
          } else {
            _this2.dataInDetail = false;
            _this2.detailList = [];
          }

          _this2.getTotalPayment();

          _this2.check_amount = 0;
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    rowClick: function rowClick(row) {
      this.header.FHID = row.FHID;
      this.header.SOANo = row.SOANo;
      this.header.billing = this.$root.formatNumberCommaRound(row.TotalAmount);
      this.header.balance = this.$root.formatNumberCommaRound(row.Balance);
      this.clearFunction("detail");
      this.getDetail();
    },
    clickDetails: function clickDetails(id) {
      Fire.$emit("searchFUELDetail", id);
    },
    searchFUELHeader: function searchFUELHeader() {
      Fire.$emit("searchFUELHeader", "payment");
    },
    fuelHeaderClose: function fuelHeaderClose(row) {
      this.SOANo = row.SOANo;
    },
    savePayment: function savePayment() {
      var _this3 = this;

      if (this.$root.formatNumber(this.detail.check_amount) == 0 || this.$root.formatNumber(this.detail.check_amount) < 0) {
        return toast.fire({
          icon: "warning",
          title: "Check Amount is invalid."
        });
      }

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Post it!"
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          var data = Object.assign({}, _this3.detail);
          data.check_amount = _this3.$root.formatNumber(_this3.detail.check_amount);
          data.hdr_idLink = _this3.header.FHID;
          var soaList = [];

          _this3.headerList.forEach(function (item) {
            soaList.push(item.SOANo);
          });

          data.soaList = soaList;
          axios.post("api/fuelPayment", data).then(function (response) {
            if (response.data.success) {
              if (response.data.id) {
                _this3.header.FPID = response.data.id;
              }

              toast.fire({
                icon: "success",
                title: response.data.message
              });

              _this3.$Progress.finish();
            } else {
              toast.fire({
                icon: "warning",
                title: response.data.message
              });
            }

            _this3.check_amount = 0;

            _this3.getDetail();

            _this3.clearFunction("detail");

            _this3.clearFunction("header");

            _this3.SOANo = "";
            _this3.headerList = [];
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          swal.fire("Information!", "Cancelled.", "warning");
        }
      });
    },
    deletePaymentDetail: function deletePaymentDetail() {
      var _this4 = this;

      if (!this.detail.FPID) {
        return toast.fire({
          icon: "warning",
          title: "Please select payment record to continue."
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
          _this4.$Progress.start();

          axios["delete"]("api/fuelPaymentDelete/".concat(_this4.detail.FPID)).then(function (response) {
            if (response.data.success) {
              _this4.clearFunction("detail");

              _this4.check_amount = 0;

              _this4.getDetail();

              swal.fire("Deleted!", response.data.message, "success");
            } else {
              swal.fire("Warning!", response.data.message, "warning");
            }

            _this4.$Progress.finish();
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          swal.fire("Information!", "Deletion is cancelled.", "warning");
        }
      });
    },
    rowClickDetail: function rowClickDetail(row) {
      this.detail = Object.assign({}, row);
      this.detail.check_amount = this.$root.formatNumberCommaRound(row.check_amount);
      this.check_amount = row.check_amount;
    },
    getTotalPayment: function getTotalPayment() {
      if (this.detailList.length == 0) {
        this.header.totalPayment = "0.00";
        this.header.balance = this.header.billing;
        return;
      }

      var total = 0;
      this.detailList.forEach(function (item) {
        total = total + item.check_amount;
      });
      this.header.balance = this.$root.formatNumberCommaRound(this.$root.formatNumber(this.header.billing) - total);
      this.header.totalPayment = this.$root.formatNumberCommaRound(total);
    },
    clearFunction: function clearFunction(type) {
      if (type == "detail") {
        this.detail = {
          FPID: "",
          hdr_idLink: "",
          paymentMode: "",
          check_no: "",
          check_date: this.$root.formatDate(new Date()),
          check_amount: "",
          orNumber: "",
          remarks: ""
        };
        this.check_amount = 0;
      } else if (type == "detailList") {
        this.detailList = [];
      } else {
        this.header = {
          FHID: "",
          SOANo: "",
          billing: "0.00",
          balance: "0.00",
          totalPayment: "0.00"
        };
      }
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this5 = this;

      return this.headerList.filter(function (item) {
        return _this5.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toString().toLowerCase().includes(v) || item.Location.toString().toLowerCase().includes(v);
        });
      });
    },
    filteredBlogs2: function filteredBlogs2() {
      var _this6 = this;

      return this.detailList.filter(function (item) {
        return _this6.search.toLowerCase().split(" ").every(function (v) {
          return item.check_no.toString().toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container dave-template" },
    [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Search SOA")]),
                    _vm._v(" "),
                    _c(
                      "b-input-group",
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.SOANo,
                              expression: "SOANo"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "SOANo",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.SOANo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.SOANo = $event.target.value
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
                                attrs: {
                                  variant: "outline-primary",
                                  size: "sm"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.searchFUELHeader()
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("label", [_vm._v(" ")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", bold: "" },
                      on: {
                        click: function($event) {
                          return _vm.appendSOANo()
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-plus",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(
                        "\n                                APPEND\n                            "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !this.dataInHeader,
                                expression: "!this.dataInHeader"
                              }
                            ]
                          },
                          [_vm._m(2)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs, function(item) {
                          return _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                attrs: { bold: "" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(item.SOANo) +
                                    "\n                                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(item.Period) +
                                  "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.Location))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm._f("formatDate")(item.date_created)
                                  ) +
                                  "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(
                                    _vm._f("formatNumber")(item.TotalAmount)
                                  ) +
                                  "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm._f("formatNumber")(item.Balance)) +
                                  "\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "10%" }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-eye text-primary",
                                  staticStyle: { "font-size": "120%" },
                                  on: {
                                    click: function($event) {
                                      return _vm.clickDetails(item.FHID)
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                           \n                                        "
                                ),
                                _c("i", {
                                  staticClass: "fa fa-minus-circle text-danger",
                                  staticStyle: { "font-size": "120%" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeSOANo(item)
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.savePayment()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Mode of Payment")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.paymentMode,
                              expression: "detail.paymentMode"
                            }
                          ],
                          staticClass: "form-control text-center bold",
                          attrs: {
                            type: "text",
                            name: "paymentMode",
                            placeholder: "",
                            required: "",
                            list: "modePayment"
                          },
                          domProps: { value: _vm.detail.paymentMode },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "paymentMode",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(3)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 offset-4" }, [
                        _c("label", [_vm._v("Total Billing")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.billing,
                              expression: "header.billing"
                            }
                          ],
                          staticClass: "form-control text-right",
                          attrs: {
                            type: "text",
                            name: "billing",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.header.billing },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.header,
                                "billing",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Check No")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.check_no,
                              expression: "detail.check_no"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "check_no",
                            placeholder: "",
                            required: ""
                          },
                          domProps: { value: _vm.detail.check_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "check_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("OR/ Ref Number")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.orNumber,
                              expression: "detail.orNumber"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "orNumber",
                            placeholder: ""
                          },
                          domProps: { value: _vm.detail.orNumber },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "orNumber",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Check Date")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.check_date,
                              expression: "detail.check_date"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            name: "check_date",
                            placeholder: "",
                            required: ""
                          },
                          domProps: { value: _vm.detail.check_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "check_date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("label", [_vm._v("Remarks")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.remarks,
                              expression: "detail.remarks"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "remarks",
                            placeholder: ""
                          },
                          domProps: { value: _vm.detail.remarks },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "remarks",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("label", [_vm._v("Payment Amount")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.check_amount,
                              expression: "detail.check_amount"
                            }
                          ],
                          staticClass: "form-control text-right",
                          attrs: {
                            type: "text",
                            name: "check_amount",
                            placeholder: "",
                            required: ""
                          },
                          domProps: { value: _vm.detail.check_amount },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "check_amount",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12 text-right" }, [
                        _c("label", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button", bold: "" },
                              on: {
                                click: function($event) {
                                  return _vm.clearFunction("detail")
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
                          _vm._m(4)
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("search-fuelHeader", {
        on: {
          rowClick: function($event) {
            return _vm.fuelHeaderClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-fuelDetail")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _c("b", [_vm._v("FUEL PAYMENT FORM")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("SOA No")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v(
            "\n                                        PERIOD\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("LOCATION")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v(
            "\n                                        Total Billing\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v(
            "\n                                        Balance\n                                    "
          )
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [
            _vm._v(
              "\n                                        ACTION\n                                    "
            )
          ]
        )
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
    return _c("datalist", { attrs: { id: "modePayment" } }, [
      _c("option", [_vm._v("CHECK")]),
      _vm._v(" "),
      _c("option", [_vm._v("CASH")])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FUEL/Payment.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FUEL/Payment.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment.vue?vue&type=template&id=41a82bd8& */ "./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8&");
/* harmony import */ var _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment.vue?vue&type=script&lang=js& */ "./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FUEL/Payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FUEL/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=template&id=41a82bd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FUEL/Payment.vue?vue&type=template&id=41a82bd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_41a82bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);