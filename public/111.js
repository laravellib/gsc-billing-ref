(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchAllowance_SearchTransmittal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchAllowance/SearchTransmittal.vue */ "./resources/js/components/search/SearchAllowance/SearchTransmittal.vue");
/* harmony import */ var _SUPPLIES_ShowDetailModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SUPPLIES/ShowDetailModal.vue */ "./resources/js/components/SUPPLIES/ShowDetailModal.vue");
/* harmony import */ var _search_SearchAllowance_SearchSUPHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchAllowance/SearchSUPHeader.vue */ "./resources/js/components/search/SearchAllowance/SearchSUPHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "search-transmittal": _search_SearchAllowance_SearchTransmittal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "search-supDetail": _SUPPLIES_ShowDetailModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "search-supHeader": _search_SearchAllowance_SearchSUPHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      from: this.$root.formatDate(new Date()),
      to: this.$root.formatDate(new Date()),
      checkTableArrays: [],
      checkHeader: false,
      rows: [],
      search: "",
      transmittal_no: "",
      prepared_by: "",
      SOANo: "",
      SoaTransNo: ""
    };
  },
  mounted: function mounted() {
    this.generate();
    this.getUser();
    this.getTransmittal();
  },
  methods: {
    checkTableAll: function checkTableAll() {
      console.log(this.rows);

      if (!this.checkHeader) {
        var arrays = [];
        var index = 0;
        this.rows.forEach(function (item) {
          arrays.push(item);
          document.getElementById(item.SHID).checked = true;
        });
        this.checkTableArrays = arrays;
      } else {
        this.rows.forEach(function (item) {
          document.getElementById(item.SHID).checked = false;
        });
        this.checkTableArrays = [];
      }
    },
    checkTable: function checkTable(row) {
      if (this.checkTableArrays.indexOf(row) < 0) {
        this.checkTableArrays.push(row);
      } else {
        this.checkTableArrays.splice(this.checkTableArrays.indexOf(row), 1);
      }
    },
    generate: function generate() {
      var _this = this;

      this.checkHeader = false;
      this.checkTableArrays = [];
      axios.get("api/sup", {
        params: {
          SOAHeaderDate: true,
          from: this.from,
          to: this.to
        }
      }).then(function (response) {
        _this.rows = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      axios.get("api/allowance", {
        params: {
          getUser: true
        }
      }).then(function (response) {
        _this2.prepared_by = response.data.name;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTransmittal: function getTransmittal() {
      var _this3 = this;

      this.$Progress.start();
      axios.get("api/allowance", {
        params: {
          getTransmittalNo: true
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this3.transmittal_no = response.data;
        } else {
          var dateNow = new Date();
          var month = dateNow.getMonth() + 1;
          _this3.transmittal_no = "TF" + dateNow.getFullYear().toString().substring(2) + month.toString().padStart(2, "0") + "-1";
        }

        _this3.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    clickDetails: function clickDetails(id) {
      Fire.$emit("searchSUPDetail", id);
    },
    createTransmittal: function createTransmittal() {
      var _this4 = this;

      if (this.checkTableArrays.length < 1) {
        return toast.fire({
          icon: "warning",
          title: "No Data Selected."
        });
      }

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Create Transmittal!"
      }).then(function (result) {
        if (result.value) {
          _this4.$Progress.start();

          axios.get("api/allowance", {
            params: {
              searchTransmittalExists: true,
              transmittal_no: _this4.transmittal_no
            }
          }).then(function (response) {
            if (response.data.length > 0) {
              swal.fire({
                title: "Transmittal Number Already Exists!",
                text: "Do you want to merge current selected records?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Merge it!"
              }).then(function (result) {
                if (result.value) {
                  _this4.$Progress.start();

                  var submitArray = [];

                  _this4.checkTableArrays.forEach(function (item) {
                    submitArray.push(item.SOANo);
                  });

                  var data = {
                    transmittal_no: _this4.transmittal_no,
                    prepared_by: _this4.prepared_by,
                    soa_no_list: submitArray,
                    type: "SUPPLIES",
                    merge: true
                  };

                  _this4.$Progress.start();

                  axios.post("api/allowanceCreateTransmittal", data).then(function (response) {
                    if (response.data.success) {
                      _this4.checkTableArrays = [];
                      _this4.rows = [];
                      _this4.checkHeader = false;
                      _this4.SOANo = "";
                      _this4.prepared_by = "";
                      _this4.SoaTransNo = "";
                      window.open("api/reportAllowanceTransmittal?report=true&transmittal_no=" + _this4.transmittal_no + "&type=SUPPLIES");
                      _this4.transmittal_no = "";

                      _this4.generate();

                      _this4.getUser();

                      _this4.getTransmittal();
                    } else {
                      toast.fire({
                        icon: "warning",
                        title: response.data.message
                      });
                    }

                    _this4.$Progress.finish();
                  })["catch"](function (error) {
                    console.log(error);
                  });
                } else {
                  swal.fire("Information!", "Cancelled.", "warning");
                }
              });
            } else {
              _this4.$Progress.start();

              var submitArray = [];

              _this4.checkTableArrays.forEach(function (item) {
                submitArray.push(item.SOANo);
              });

              var data = {
                transmittal_no: _this4.transmittal_no,
                prepared_by: _this4.prepared_by,
                type: "SUPPLIES",
                soa_no_list: submitArray
              };

              _this4.$Progress.start();

              axios.post("api/allowanceCreateTransmittal", data).then(function (response) {
                if (response.data.success) {
                  _this4.checkTableArrays = [];
                  _this4.rows = [];
                  _this4.checkHeader = false;
                  _this4.SOANo = "";
                  _this4.prepared_by = "";
                  _this4.SoaTransNo = "";
                  window.open("api/reportAllowanceTransmittal?report=true&transmittal_no=" + _this4.transmittal_no + "&type=SUPPLIES");
                  _this4.transmittal_no = "";

                  _this4.generate();

                  _this4.getUser();

                  _this4.getTransmittal();
                } else {
                  toast.fire({
                    icon: "warning",
                    title: response.data.message
                  });
                }

                _this4.$Progress.finish();
              })["catch"](function (error) {
                console.log(error);
              });
            }

            _this4.$Progress.finish();
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          swal.fire("Information!", "Cancelled.", "warning");
        }
      });
    },
    removeTransmittal: function removeTransmittal() {
      var _this5 = this;

      if (!this.SOANo) {
        return toast.fire({
          icon: "warning",
          title: "Please select/enter SOA number to continue."
        });
      }

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove Transmittal #!"
      }).then(function (result) {
        if (result.value) {
          var data = {
            SOANo: _this5.SOANo,
            prepared_by: _this5.prepared_by,
            type: "SUPPLIES"
          };

          _this5.$Progress.start();

          axios.post("api/allowanceRemoveTransmittal", data).then(function (response) {
            if (response.data.success) {
              _this5.SOANo = "";
              _this5.SoaTransNo = "";
              toast.fire({
                icon: "success",
                title: response.data.message
              });
            } else {
              toast.fire({
                icon: "warning",
                title: response.data.message
              });
            }

            _this5.$Progress.finish();
          })["catch"](function (error) {
            console.log(error);
          });
        } else {
          swal.fire("Information!", "Cancelled.", "warning");
        }
      });
    },
    searchSUPHeader: function searchSUPHeader() {
      Fire.$emit("searchSUPHeader");
    },
    supHeaderClose: function supHeaderClose(row) {
      this.SoaTransNo = row.SOANo + " ( " + row.transmittal_no + ")";
      this.SOANo = row.SOANo;
    },
    searchTransmittal: function searchTransmittal() {
      Fire.$emit("searchTransmittal", "supplies");
    },
    transmittalClose: function transmittalClose(row) {
      this.transmittal_no = row.transmittal_no;
    },
    printTransmittal: function printTransmittal() {
      var _this6 = this;

      axios.get("api/reportAllowanceTransmittal", {
        params: {
          searchTransmittalExists: true,
          transmittal_no: this.transmittal_no,
          type: "SUPPLIES"
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open("api/reportAllowanceTransmittal?report=true&transmittal_no=" + _this6.transmittal_no + "&type=SUPPLIES");

          _this6.getTransmittal();
        } else {
          return toast.fire({
            icon: "warning",
            title: "No data found in this transmittal number."
          });
        }

        _this6.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this7 = this;

      return this.rows.filter(function (item) {
        return _this7.search.toLowerCase().split(" ").every(function (v) {
          return item.SOANo.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8& ***!
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
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.generate()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("SOA Date From")]),
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
                            staticClass: "form-control",
                            attrs: {
                              type: "date",
                              name: "from",
                              placeholder: ""
                            },
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
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("SOA Date From")]),
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
                            staticClass: "form-control",
                            attrs: {
                              type: "date",
                              name: "to",
                              placeholder: ""
                            },
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
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v("Transmittal Number")]),
                            _vm._v(" "),
                            _c(
                              "b-input-group",
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.transmittal_no,
                                      expression: "transmittal_no"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "transmittal_no",
                                    placeholder: "",
                                    disabled: ""
                                  },
                                  domProps: { value: _vm.transmittal_no },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.transmittal_no = $event.target.value
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
                                            return _vm.getTransmittal()
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-sync",
                                          attrs: { "aria-hidden": "true" }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          variant: "outline-primary",
                                          size: "sm"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.searchTransmittal()
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-search",
                                          attrs: { "aria-hidden": "true" }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          variant: "outline-primary",
                                          size: "sm"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.printTransmittal()
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-print",
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
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _c("thead", { staticClass: "dave-thead" }, [
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "center",
                              width: "10%"
                            }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkHeader,
                                  expression: "checkHeader"
                                }
                              ],
                              staticStyle: { height: "10px !important" },
                              attrs: {
                                type: "checkbox",
                                checked: "checked",
                                id: "checkboxAll"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.checkHeader)
                                  ? _vm._i(_vm.checkHeader, null) > -1
                                  : _vm.checkHeader
                              },
                              on: {
                                click: function($event) {
                                  return _vm.checkTableAll()
                                },
                                change: function($event) {
                                  var $$a = _vm.checkHeader,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.checkHeader = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.checkHeader = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.checkHeader = $$c
                                  }
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "text-align": "center" } }, [
                          _vm._v("SOA")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(
                            "\n                                        Billed Amount\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              "text-align": "center",
                              width: "20%"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        Action\n                                    "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody modal-tbody" },
                      _vm._l(_vm.filteredBlogs, function(item) {
                        return _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "10%",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("input", {
                                staticStyle: { height: "10px !important" },
                                attrs: { id: item.SHID, type: "checkbox" },
                                on: {
                                  click: function($event) {
                                    return _vm.checkTable(item)
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(item.SOANo) +
                                "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm._f("formatNumber")(item.TotalAmount)
                                ) +
                                "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "20%" }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-eye text-primary",
                                staticStyle: { "font-size": "120%" },
                                on: {
                                  click: function($event) {
                                    return _vm.clickDetails(item.SHID)
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Prepared By")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.prepared_by,
                            expression: "prepared_by"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "prepared_by",
                          placeholder: "",
                          disabled: ""
                        },
                        domProps: { value: _vm.prepared_by },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.prepared_by = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("label", [_vm._v(" ")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "button", bold: "" },
                          on: {
                            click: function($event) {
                              return _vm.createTransmittal()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-check-square",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                        Create Transmittal\n                                    "
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("SOA Number")]),
                        _vm._v(" "),
                        _c(
                          "b-input-group",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.SoaTransNo,
                                  expression: "SoaTransNo"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "SoaTransNo",
                                placeholder: "",
                                disabled: ""
                              },
                              domProps: { value: _vm.SoaTransNo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.SoaTransNo = $event.target.value
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
                                        return _vm.searchSUPHeader()
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
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("label", [_vm._v(" ")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button", bold: "" },
                          on: {
                            click: function($event) {
                              return _vm.removeTransmittal()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-times",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                        Remove Transmittal\n                                    "
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
      _c("search-supHeader", {
        on: {
          rowClick: function($event) {
            return _vm.supHeaderClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-supDetail")
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
        _c("b", [_vm._v("Create/Generate SUPPLIES Transmittal")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("label", [_vm._v(" ")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "submit", bold: "" }
          },
          [
            _c("i", {
              staticClass: "fa fa-search",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(
              "\n                                            SEARCH\n                                        "
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h6", [_c("b", [_c("i", [_vm._v("Create/Generate Transmittal")])])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h6", [_c("b", [_c("i", [_vm._v("Remove Transmittal Number")])])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SUPPLIES/Transmittal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/SUPPLIES/Transmittal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transmittal.vue?vue&type=template&id=6a060fd8& */ "./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8&");
/* harmony import */ var _Transmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transmittal.vue?vue&type=script&lang=js& */ "./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SUPPLIES/Transmittal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transmittal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transmittal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transmittal.vue?vue&type=template&id=6a060fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SUPPLIES/Transmittal.vue?vue&type=template&id=6a060fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transmittal_vue_vue_type_template_id_6a060fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);