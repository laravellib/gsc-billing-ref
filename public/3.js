(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      clients: [],
      swegets: [],
      searchClientVar: "",
      form: new Form({
        search: ""
      })
    };
  },
  mounted: function mounted() {
    this.loadClient();
  },
  methods: {
    changeTitleClient: function changeTitleClient(client) {
      // console.log(driver);
      this.$emit('changeTitleClient', client); // this.$emit('kuhaDriverID',driver.id);

      $('#searchClient').modal('hide');
    },
    loadClient: function loadClient() {
      var _this = this;

      axios.get('api/getclient').then(function (response) {
        _this.clients = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    Fire.$on('searchClientStart', function () {
      var query = _this2.searchClientVar;
      axios.get('api/findClient?q=' + query).then(function (data) {
        _this2.clients = data.data;
      });
    });
  },
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      //return this.drivers.filter(driver =>{
      //return driver.LastName.includes(this.form.search)
      //});
      return this.clients.filter(function (samsung) {
        return _this3.form.search.toLowerCase().split(' ').every(function (v) {
          return samsung.LastName.toLowerCase().includes(v) || samsung.FirstName.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          id: "searchClient",
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
            _c("form", [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-input-group",
                          { staticClass: "mt-3", attrs: { size: "sm" } },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.search,
                                  expression: "form.search"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "search",
                                placeholder: "Search for..."
                              },
                              domProps: { value: _vm.form.search },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "search",
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
                                    attrs: {
                                      variant: "outline-success",
                                      size: "sm"
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
                  _c(
                    "div",
                    {
                      staticClass: "card-body table-responsive pre-scrollable"
                    },
                    [
                      _c("table", { staticClass: "table table-hover" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.filteredBlogs, function(client) {
                            return _c(
                              "tr",
                              {
                                key: client.id,
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "element" },
                                on: {
                                  click: function($event) {
                                    return _vm.changeTitleClient(client)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(client.LastName))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(client.FirstName))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(client.MiddleName))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(client.ExtName))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(client.Address))])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.clients
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-default",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                        No Data\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search Client")]),
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Last Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("First Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Middle Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ext Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer " }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("i", { staticClass: "far fa-window-close" }), _vm._v(" Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchClient.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchClient.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchClient.vue?vue&type=template&id=79d72e38& */ "./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38&");
/* harmony import */ var _SearchClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchClient.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchJeep/SearchClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchClient.vue?vue&type=template&id=79d72e38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchClient.vue?vue&type=template&id=79d72e38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchClient_vue_vue_type_template_id_79d72e38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);