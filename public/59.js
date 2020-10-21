(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      searching: "",
      golfcart: null,
      filter: null,
      datas: [],
      gridApi: null,
      columnApi: null,
      columnDefs: null
    };
  },
  methods: {
    loadMode: function loadMode() {
      var _this = this;

      this.columnDefs = [{
        headerName: "Doc #",
        field: "doc_no",
        sortable: true,
        filter: true,
        resizable: true,
        width: 225
      }, {
        headerName: "Date",
        field: "date",
        resizable: true,
        width: 225
      }, {
        headerName: "Status",
        field: "status",
        resizable: true,
        width: 225
      }];
      axios.get("wingvan/hdr").then(function (_ref) {
        var data = _ref.data;
        _this.golfcart = data.data;
        _this.filter = _this.golfcart;
        console.log(_this.filter);
      });
    },
    search: function search(ev) {
      this.filter = this.golfcart.filter(function (item) {
        return item.name.match(ev);
      });
    },
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    onChange: function onChange(e) {
      var selectedRows = this.gridApi.getSelectedNodes();
      this.$emit("data_pass", selectedRows[0].data);
      $("#searchWPO").modal("hide");
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loadMode();
    Fire.$on("AfterCreate", function () {
      _this2.loadMode();
    });
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WingVan_PO_Search_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WingVan-PO-Search.vue */ "./resources/js/components/wingvan/WingVan-PO-Search.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "search-header": _WingVan_PO_Search_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      report_data: {},
      reference_no: "",
      header_id: 0,
      doc_no: ""
    };
  },
  methods: {
    clear: function clear() {
      this.report_data = 0;
    },
    searchPOHeader: function searchPOHeader() {
      $("#searchWPO").modal("show");
    },
    get_header: function get_header(data) {
      this.reference_no = data.doc_no;
      this.header_id = data.id;
      this.doc_no = data.doc_no;
    },
    generate: function generate() {
      var _this = this;

      if (this.reference_no == "") {
        swal.fire("Select Reference #", "warning");
      } else {
        this.$Progress.start();
        axios.get("wingvan/dtl/" + this.header_id).then(function (_ref) {
          var data = _ref.data;
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a("p", "pt", "letter");
          var pageHeight = 650;
          var startsY = 10;
          doc.setProperties({
            title: "wingvan_po_monitoring.pdf"
          }); //HEADER

          doc.setFont("courier");
          doc.setFontType("bold");
          doc.setFontSize(14);
          doc.text("GENERAL SERVICES MULTI-PURPOSE COOPERATIVE", 306, 50, "center");
          doc.setFontSize(10);
          doc.setFontType("regular");
          doc.text("Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon", 306, 60, "center");
          doc.text("CDA # 9520-10019987-1 / TIN 411-478-949-000", 306, 70, "center");
          doc.setFontType("bold");
          doc.text("WING VAN PO MONITORING", 306, 85, "center");
          doc.setFontType("regular");
          doc.addImage(Logo, "JPEG", 70, 40, 50, 50);
          doc.setLineWidth(1.5);
          doc.line(40, 94, 571, 94);
          doc.setLineWidth(2);
          doc.line(40, 97, 571, 97); //END HEADER

          doc.text("PO #: " + _this.reference_no, 40, 150);
          doc.autoTable({
            columnStyles: {
              0: {
                halign: "center",
                fillColor: [0, 255, 0]
              },
              1: {
                halign: "center",
                fillColor: [255, 255, 0]
              },
              2: {
                halign: "center",
                fillColor: [0, 255, 255]
              },
              3: {
                halign: "center",
                fillColor: [0, 255, 0]
              },
              4: {
                halign: "center",
                fillColor: [255, 255, 0]
              },
              5: {
                halign: "center",
                fillColor: [0, 255, 255]
              },
              6: {
                halign: "center",
                fillColor: [0, 255, 0]
              },
              7: {
                halign: "center",
                fillColor: [255, 255, 0]
              }
            },
            // European countries centered
            body: data.data,
            columns: [{
              header: "Location",
              dataKey: "location"
            }, {
              header: "Mat Code",
              dataKey: "mat_code"
            }, {
              header: "No. of Bags",
              dataKey: "no_bags"
            }, {
              header: "Unit",
              dataKey: "unit"
            }, {
              header: "Price/Bag/Hr.",
              dataKey: "price_per_bag"
            }, {
              header: "Amount",
              dataKey: "amount"
            }, {
              header: "Usage",
              dataKey: "usage"
            }, {
              header: "Balance",
              dataKey: "balance"
            }],
            margin: {
              top: 180
            }
          });
          window.open(doc.output("bloburl"), "_blank");
        }); //doc.save("golfcart_adjstment.pdf");

        this.$Progress.finish();
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "searchWPO",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searching,
                      expression: "searching"
                    }
                  ],
                  staticClass: "form-control form-control-sm mb-2",
                  attrs: { type: "text", placeholder: "Search by Mode..." },
                  domProps: { value: _vm.searching },
                  on: {
                    keyup: function($event) {
                      return _vm.search(_vm.searching)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searching = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("ag-grid-vue", {
                  staticClass: "ag-theme-balham",
                  staticStyle: { width: "765px", height: "250px" },
                  attrs: {
                    columnDefs: _vm.columnDefs,
                    rowData: _vm.filter,
                    rowSelection: "single"
                  },
                  on: {
                    "grid-ready": _vm.onGridReady,
                    rowClicked: _vm.onChange
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search PO")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [
          _c("i", { staticClass: "far fa-window-close" }),
          _vm._v(" Close\n          ")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
        [
          _c("span", { staticClass: "navbar-brand mb-0 h3" }, [
            _vm._v("WING VAN SECTION")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarNav" }
            },
            [
              _c("ul", { staticClass: "navbar-nav" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-list"
                        }
                      },
                      [_vm._v("Wing Van List")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-location"
                        }
                      },
                      [_vm._v("Route")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-po"
                        }
                      },
                      [_vm._v("Purchase Order")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-rental"
                        }
                      },
                      [_vm._v("Rental")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-soa"
                        }
                      },
                      [_vm._v("Create SOA")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-payment"
                        }
                      },
                      [_vm._v("Payment Collection")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-ledger"
                        }
                      },
                      [_vm._v("Ledger")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          tag: "a",
                          "active-class": "active",
                          exact: "",
                          to: "/wingvan-reports"
                        }
                      },
                      [_vm._v("Reports")]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("label", { attrs: { for: "refence" } }, [
                _vm._v("Reference #")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.reference_no,
                      expression: "reference_no"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { type: "text", name: "reference_no", disabled: "" },
                  domProps: { value: _vm.reference_no },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.reference_no = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary btn-sm",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.searchPOHeader()
                        }
                      }
                    },
                    [_vm._v("Search")]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("search-header", { on: { data_pass: _vm.get_header } }),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-1" }, [
            _c("div", { staticClass: "col-sm" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function($event) {
                      return _vm.generate()
                    }
                  }
                },
                [_vm._v("GENERATE REPORT")]
              )
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-PO-Search.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-PO-Search.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef& */ "./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef&");
/* harmony import */ var _WingVan_PO_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WingVan-PO-Search.vue?vue&type=script&lang=js& */ "./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WingVan_PO_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/wingvan/WingVan-PO-Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_PO_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WingVan-PO-Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_PO_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-PO-Search.vue?vue&type=template&id=0ea3e0ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_PO_Search_vue_vue_type_template_id_0ea3e0ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-Reports.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-Reports.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WingVan-Reports.vue?vue&type=template&id=c2cd7610& */ "./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610&");
/* harmony import */ var _WingVan_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WingVan-Reports.vue?vue&type=script&lang=js& */ "./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WingVan_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/wingvan/WingVan-Reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WingVan-Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WingVan-Reports.vue?vue&type=template&id=c2cd7610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/wingvan/WingVan-Reports.vue?vue&type=template&id=c2cd7610&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WingVan_Reports_vue_vue_type_template_id_c2cd7610___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);