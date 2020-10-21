(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: [],
      suppliers: [],
      search: "",
      type: "",
      header: {
        PLID: "",
        Code: "",
        Description: "",
        Unit: "",
        UnitPrice: "0.00",
        Supplier: ""
      }
    };
  },
  mounted: function mounted() {
    this.getData();
    this.getSupplier();
  },
  methods: {
    rowClick: function rowClick(row) {
      this.header = Object.assign({}, row);
      this.header.UnitPrice = this.$root.formatNumberCommaRound(row.UnitPrice);
      this.$emit("rowClick", row);
      $("#PPEListModal").modal("hide");
    },
    getData: function getData() {
      var _this = this;

      axios.get("api/ppe", {
        params: {
          getPPEList: true
        }
      }).then(function (response) {
        _this.rows = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getSupplier: function getSupplier() {
      var _this2 = this;

      axios.get("api/allowance", {
        params: {
          getSupplier: true
        }
      }).then(function (response) {
        _this2.suppliers = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    save: function save() {
      var _this3 = this;

      var data = Object.assign({}, this.header);
      data.UnitPrice = this.$root.formatNumber(this.header.UnitPrice);
      this.$Progress.start();
      axios.post("api/ppeList", data).then(function (response) {
        if (response.data.success) {
          if (response.data.id) {
            _this3.header.PLID = response.data.id;
          }

          toast.fire({
            icon: "success",
            title: response.data.message
          });
          _this3.formHeader = {};
        } else {
          toast.fire({
            icon: "warning",
            title: response.data.message
          });
        }

        _this3.getData();

        _this3.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deletePPEListButton: function deletePPEListButton() {
      var _this4 = this;

      if (!this.header.PLID) {
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
          _this4.$Progress.start();

          axios["delete"]("api/ppeList/".concat(_this4.header.PLID)).then(function (response) {
            if (response.data.success) {
              _this4.getData();

              _this4.clearButton();

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
    clearButton: function clearButton() {
      this.header = {
        PLID: "",
        Code: "",
        Description: "",
        Unit: "",
        UnitPrice: "0.00",
        Supplier: ""
      };
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this5 = this;

      return this.rows.filter(function (item) {
        return _this5.search.toLowerCase().split(" ").every(function (v) {
          return item.Code.toLowerCase().includes(v) || item.Description.toLowerCase().includes(v) || item.Supplier.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584& ***!
  \**************************************************************************************************************************************************************************************************************/
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
                              value: _vm.header.PLID,
                              expression: "header.PLID"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "PLID",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.header.PLID },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.header, "PLID", $event.target.value)
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
                              value: _vm.header.Description,
                              expression: "header.Description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "Description",
                            placeholder: ""
                          },
                          domProps: { value: _vm.header.Description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.header,
                                "Description",
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
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Supplier")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.Supplier,
                              expression: "header.Supplier"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "Supplier",
                            placeholder: "",
                            list: "supplier"
                          },
                          domProps: { value: _vm.header.Supplier },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.header,
                                "Supplier",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "datalist",
                          { attrs: { id: "supplier" } },
                          _vm._l(_vm.suppliers, function(item) {
                            return _c("option", [_vm._v(_vm._s(item.supName))])
                          }),
                          0
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Unit")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.Unit,
                              expression: "header.Unit"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "Unit",
                            placeholder: ""
                          },
                          domProps: { value: _vm.header.Unit },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.header, "Unit", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Unit Price")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.UnitPrice,
                              expression: "header.UnitPrice"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "UnitPrice",
                            placeholder: "",
                            "text-right": "",
                            bold: ""
                          },
                          domProps: { value: _vm.header.UnitPrice },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.header,
                                "UnitPrice",
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
                                return _vm.deletePPEListButton()
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
                              key: item.AHID,
                              on: {
                                click: function($event) {
                                  return _vm.rowClick(item)
                                }
                              }
                            },
                            [
                              _c("td", [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(item.Description) +
                                    "\n                                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(item.Supplier) +
                                    "\n                                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    width: "15%",
                                    "text-align": "center"
                                  }
                                },
                                [_vm._v(_vm._s(item.Unit))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    width: "15%",
                                    "text-align": "right"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(
                                        _vm._f("formatNumber")(item.UnitPrice)
                                      ) +
                                      "\n                                            "
                                  )
                                ]
                              )
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
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "SearchSignatory",
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
              staticClass: "modal-dialog modal-dialog-centered modal-md",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(3),
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
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              { staticClass: "dave-tbody modal-tbody" },
                              _vm._l(_vm.filteredBlogs, function(item) {
                                return _c(
                                  "tr",
                                  {
                                    key: item.AHID,
                                    on: {
                                      click: function($event) {
                                        return _vm.rowClick(item)
                                      }
                                    }
                                  },
                                  [
                                    _c("td", [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(item.Code) +
                                          "\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(item.Description) +
                                          "\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.Unit))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(
                                            _vm._f("formatNumber")(
                                              item.UnitPrice
                                            )
                                          ) +
                                          "\n                                                "
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
            ]
          )
        ]
      )
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
        _c("b", [_vm._v("Personal Protective Equipments List Entry")])
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
        _c("th", { staticStyle: { "text-align": "left" } }, [
          _vm._v("Description")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center", width: "15%" } }, [
          _vm._v("Unit")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center", width: "15%" } }, [
          _vm._v("Unit Price")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [
            _c("b", [
              _vm._v(
                "Personal Protective Equipments\n                                        List"
              )
            ])
          ])
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
        _c("th", [_vm._v("Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit Price")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PPE/PPEList.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/PPE/PPEList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPEList.vue?vue&type=template&id=a8796584& */ "./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584&");
/* harmony import */ var _PPEList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPEList.vue?vue&type=script&lang=js& */ "./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PPEList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PPE/PPEList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPEList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PPEList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PPE/PPEList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPEList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PPEList.vue?vue&type=template&id=a8796584& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PPE/PPEList.vue?vue&type=template&id=a8796584&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PPEList_vue_vue_type_template_id_a8796584___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);