(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Master/activity.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Master/activity.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editMode: false,
      editModeRate: false,
      searching: "",
      data_: {},
      filter: {},
      form: new Form({
        id: "",
        activity: ""
      })
    };
  },
  methods: {
    updateData: function updateData() {
      var _this = this;

      this.form.put("api/activity/" + this.form.id).then(function () {
        Fire.$emit("AfterCreate");
        toast.fire({
          icon: "success",
          title: "Update data successfully"
        });
        _this.editMode = false;

        _this.form.reset();
      })["catch"](function () {
        swal.fire("Error Found.", "warning");
      });
    },
    deleteData: function deleteData(id) {
      var _this2 = this;

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
          console.log(id);

          _this2.form["delete"]("api/activity/" + id).then(function () {
            swal.fire("Deleted!", "Your file has been deleted.", "success");
            _this2.editMode = false;

            _this2.form.reset();
          })["catch"](function () {
            swal.fire("Error Found.", "warning");
          });

          Fire.$emit("AfterCreate");
        }
      });
    },
    onChange: function onChange(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.form.fill(dataItem);
      this.editMode = true;
    },
    search: function search(ev) {
      this.filter = this.data_.filter(function (item) {
        return item.activity.match(ev);
      });
    },
    loadData: function loadData() {
      var _this3 = this;

      axios.get("api/activity").then(function (_ref) {
        var data = _ref.data;
        _this3.data_ = data;
        _this3.filter = _this3.data_;
      });
    },
    createData: function createData() {
      var _this4 = this;

      this.$Progress.start();
      this.form.post("api/activity").then(function (res) {
        if (res.data == true) {
          _this4.$Progress.finish();

          toast.fire({
            icon: 'success',
            title: 'added data successfully'
          });

          _this4.form.reset();

          Fire.$emit("AfterCreate");
        } else {
          _this4.$Progress.fail();

          toast.fire({
            icon: 'warning',
            title: 'data already exist'
          });
        }
      })["catch"](function () {
        _this4.$Progress.fail();

        toast.fire({
          icon: "error",
          title: "Error Found"
        });
      });
      this.$Progress.finish();
    },
    clearForm: function clearForm() {
      this.form.reset();
      this.editMode = false;
    }
  },
  created: function created() {
    var _this5 = this;

    this.loadData();
    Fire.$on("AfterCreate", function () {
      _this5.loadData();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Master/activity.vue?vue&type=template&id=62265681&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Master/activity.vue?vue&type=template&id=62265681& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-sm" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.editMode ? _vm.updateData() : _vm.createData()
                }
              }
            },
            [
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Add New Activity")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.activity,
                          expression: "form.activity"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.form.errors.has("activity")
                      },
                      attrs: {
                        type: "text",
                        name: "activity",
                        placeholder: "FirstName"
                      },
                      domProps: { value: _vm.form.activity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "activity", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "activity" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v(_vm._s(_vm.editMode ? "Update" : "Add New"))]
                ),
                _vm._v(" "),
                _vm.editMode
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.deleteData(_vm.form.id)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.editMode
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.clearForm()
                          }
                        }
                      },
                      [_vm._v("Clear")]
                    )
                  : _vm._e()
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-8" },
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
              attrs: { type: "text", placeholder: "Search by Client Name..." },
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
            _c(
              "kendo-grid",
              {
                attrs: {
                  height: 400,
                  "data-source": _vm.filter,
                  selectable: true,
                  sortable: true
                },
                on: { change: _vm.onChange }
              },
              [
                _c("kendo-grid-column", {
                  attrs: { field: "id", title: "ID" }
                }),
                _vm._v(" "),
                _c("kendo-grid-column", {
                  attrs: { field: "activity", title: "Activity" }
                }),
                _vm._v(" "),
                _c("kendo-grid-column", {
                  attrs: { field: "created_at", title: "Created" }
                }),
                _vm._v(" "),
                _c("kendo-grid-column", {
                  attrs: { field: "updated_at", title: "Last Updated" }
                })
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
      [
        _c("div", {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "navbarNav" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Master/activity.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Master/activity.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity.vue?vue&type=template&id=62265681& */ "./resources/js/components/Master/activity.vue?vue&type=template&id=62265681&");
/* harmony import */ var _activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.vue?vue&type=script&lang=js& */ "./resources/js/components/Master/activity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Master/activity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Master/activity.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Master/activity.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./activity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Master/activity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Master/activity.vue?vue&type=template&id=62265681&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Master/activity.vue?vue&type=template&id=62265681& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./activity.vue?vue&type=template&id=62265681& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Master/activity.vue?vue&type=template&id=62265681&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_template_id_62265681___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);