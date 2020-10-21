(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      from: this.$root.formatDate(new Date()),
      to: this.$root.formatDate(new Date()),
      userMe: ""
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
  methods: {
    printSar_ReactivatedSOA: function printSar_ReactivatedSOA() {
      var _this2 = this;

      axios.get("api/reactivatedSOA", {
        params: {
          from: this.from,
          to: this.to
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open("api/reactivatedSOA?from=" + _this2.from + "&to=" + _this2.to + "&report=true" + "&userMe=" + _this2.userMe);
        } else {
          return toast.fire({
            icon: "warning",
            title: "No data found."
          });
        }

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    printDar_ReactivatedSOA: function printDar_ReactivatedSOA() {
      var _this3 = this;

      axios.get("api/reactivatedSOA_DAR", {
        params: {
          from: this.from,
          to: this.to
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open("api/reactivatedSOA_DAR?from=" + _this3.from + "&to=" + _this3.to + "&report=true" + "&userMe=" + _this3.userMe);
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
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194& ***!
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
            _c("div", { staticClass: "col-3" }, [
              _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                _vm._v("Period Covered From:")
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
                _vm._v("Period Covered To:")
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
            _c("div", { staticClass: "col-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  staticStyle: { "margin-top": "25px" },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.printSar_ReactivatedSOA()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-print" }),
                  _vm._v("  Generate SAR Report")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  staticStyle: { "margin-top": "25px" },
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.printDar_ReactivatedSOA()
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
        _vm._v("REACTIVATED SOA REPORT")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reports/SoaReactivatereport.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/reports/SoaReactivatereport.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoaReactivatereport.vue?vue&type=template&id=3305c194& */ "./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194&");
/* harmony import */ var _SoaReactivatereport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoaReactivatereport.vue?vue&type=script&lang=js& */ "./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoaReactivatereport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reports/SoaReactivatereport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaReactivatereport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoaReactivatereport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaReactivatereport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoaReactivatereport.vue?vue&type=template&id=3305c194& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reports/SoaReactivatereport.vue?vue&type=template&id=3305c194&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoaReactivatereport_vue_vue_type_template_id_3305c194___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);