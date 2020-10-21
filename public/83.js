(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchPHB_SearchPHBVehicle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchPHB/SearchPHBVehicle.vue */ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'search-phbvehicle': _search_SearchPHB_SearchPHBVehicle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      editmode: false,
      vehiclerates: [],
      vehicles: [],
      form: new Form({
        MVRRID: "",
        MVID_Link: "",
        PlateNumber: "",
        EffectiveDate: "",
        PerTransactionRate: "",
        DailyRate: "",
        PerKilometerRate: "",
        PerHourRate: "",
        PerAreaRate: "",
        FixedMonthlyRate: "",
        PerBagRate: "",
        PerDestinationRate: "",
        Status: ""
      })
    };
  },
  mounted: function mounted() {
    this.$parent.getSearchVehicleRate();
  },
  methods: {
    updateTitleVehicle: function updateTitleVehicle(updatedTitleVehicle) {
      this.form.MVID_Link = updatedTitleVehicle.MVID;
      this.form.PlateNumber = updatedTitleVehicle.PlateNumber;
    },
    searchVehicleFunction: function searchVehicleFunction() {
      $('#searchVehicle').modal('show');
    },
    getVehicleIsReal: function getVehicleIsReal() {
      var _this = this;

      axios.get("api/vehicle").then(function (_ref) {
        var data = _ref.data;
        return _this.vehicles = data;
      });
      console.log(this.vehicles);
    },
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/vehiclerate?page=' + page).then(function (response) {
        _this2.vehiclerates = response.data;
      });
    },
    updateVehicleRate: function updateVehicleRate(MVTID) {
      this.$Progress.start();
      this.form.put('api/phbvehiclerate/' + this.form.MVRRID);
      $('#addNew').modal('hide');
      toast.fire({
        icon: "success",
        title: "Vehicle Rate successfully updated"
      });
      this.$Progress.finish();
      this.loadVehicleRate();
    },
    deleteModal: function deleteModal(MVRRID) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          _this3.$Progress.start();

          $('#addNew').modal('hide');

          _this3.form["delete"]('api/phbvehiclerate/' + MVRRID);

          swal.fire('Deleted!', 'Your file has been deleted.', 'success');

          _this3.$Progress.finish();

          _this3.loadVehicleRate();
        }
      });
    },
    editModal: function editModal(vr) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(vr);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      var d = new Date();
      var today = new Date().toISOString().slice(0, 10);
      this.form.EffectiveDate = today;
      $('#addNew').modal('show');
    },
    loadVehicleRate: function loadVehicleRate() {
      var _this4 = this;

      // axios.get("api/vehiclerate").then(({ data }) => (this.vehiclerates = data));
      axios.get('api/getSearchPHBVehicleRate').then(function (response) {
        _this4.vehiclerates = response.data;
        console.log(_this4.vehiclerates);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createVehicleRate: function createVehicleRate() {
      var _this5 = this;

      this.$Progress.start();
      this.form.post("api/phbvehiclerate").then(function () {
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Vehicle Rate successfully created"
        });

        _this5.$Progress.finish();

        _this5.loadVehicleRate();
      })["catch"](function () {
        _this5.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Vehicle Rate not added successfully'
        });
      });
    }
  },
  created: function created() {
    this.loadVehicleRate(); //setInterval(() => this.loadDriver(),3000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-readonly] {\r\n  pointer-events: none;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
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
                        "\n                              Master File\n                              "
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
                              attrs: { to: "/phbvehiclelist" }
                            },
                            [_c("a", [_vm._v("PHB Vehicle List")])]
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
                              attrs: { to: "/phbvehiclerate" }
                            },
                            [_c("a", [_vm._v("PHB Rate List")])]
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
                              attrs: { to: "/locationlist" }
                            },
                            [_c("a", [_vm._v("Location List")])]
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
                        "\n                              Transactions\n                              "
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
                              attrs: { to: "/phbvehiclelogentry" }
                            },
                            [_c("a", [_vm._v("PHB Vehicle Log Entry")])]
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
                        "\n                              PHB Reports\n                              "
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
                              attrs: { to: "/reportlistPHB" }
                            },
                            [_c("a", [_vm._v("Standard PHB Report")])]
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
                              attrs: { to: "/reportlistPHBPerJeep" }
                            },
                            [
                              _c("a", [
                                _vm._v("PHB's Vehicle Log Billing Report")
                              ])
                            ]
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
            _c("div", { staticClass: "card-tools" }, [
              _c(
                "button",
                { staticClass: "btn btn-success", on: { click: _vm.newModal } },
                [
                  _vm._v("\n            Add New Vehicle Rate\n            "),
                  _c("i", { staticClass: "fa fa-user-plus fa fw" })
                ]
              )
            ]),
            _vm._v(" "),
            _c("br")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive pre-scrollable" },
            [
              _c("table", { staticClass: "table table-hover" }, [
                _c(
                  "tbody",
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._l(_vm.vehiclerates, function(vr) {
                      return _c("tr", { key: vr.MVRRID }, [
                        _c("td", [_vm._v(_vm._s(vr.PlateNumber))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("formatDate")(vr.EffectiveDate)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              "Php " +
                                vr.PerKilometerRate.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                  minimumFractionDigits: 2
                                })
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.editModal(vr)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-edit" })]
                          ),
                          _vm._v("\n                /\n                "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteModal(vr.MVRRID)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-trash",
                                staticStyle: { color: "red" }
                              })
                            ]
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "addNew",
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
              staticClass: "modal-dialog modal-dialog-centered",
              staticStyle: { "overflow-y": "initial !important" },
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editmode,
                          expression: "!editmode"
                        }
                      ],
                      staticClass: "modal-title",
                      attrs: { id: "addNewLabel" }
                    },
                    [_vm._v("Add New Vehicle Rate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h5",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editmode,
                          expression: "editmode"
                        }
                      ],
                      staticClass: "modal-title",
                      attrs: { id: "addNewLabel" }
                    },
                    [_vm._v("Update Vehicle Rate's Info")]
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode
                          ? _vm.updateVehicleRate()
                          : _vm.createVehicleRate()
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-body",
                        staticStyle: { height: "450px", "overflow-y": "auto" }
                      },
                      [
                        _c("div", { staticClass: "form-inline" }, [
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: {
                                "margin-left": "5px",
                                "text-transform": "uppercase"
                              }
                            },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.MVID_Link,
                                    expression: "form.MVID_Link"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "MVID_Link",
                                  placeholder: "MVID Link"
                                },
                                domProps: { value: _vm.form.MVID_Link },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "MVID_Link",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.PlateNumber,
                                    expression: "form.PlateNumber"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "PlateNumber",
                                  placeholder: "Plate Number",
                                  "data-readonly": "",
                                  required: ""
                                },
                                domProps: { value: _vm.form.PlateNumber },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "PlateNumber",
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
                                        variant: "outline-primary",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchVehicleFunction()
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-inline" }, [
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.EffectiveDate,
                                    expression: "form.EffectiveDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  placeholder: "Effective Date",
                                  required: ""
                                },
                                domProps: { value: _vm.form.EffectiveDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "EffectiveDate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-inline" }, [
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.PerKilometerRate,
                                    expression: "form.PerKilometerRate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "decimal",
                                  placeholder: "Per Kilometer Rate"
                                },
                                domProps: { value: _vm.form.PerKilometerRate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "PerKilometerRate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.editmode,
                              expression: "!editmode"
                            }
                          ],
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editmode,
                              expression: "editmode"
                            }
                          ],
                          staticClass: "btn btn-success",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update")]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("search-phbvehicle", {
        on: {
          changeTitleVehicle: function($event) {
            return _vm.updateTitleVehicle($event)
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
      _c("b", [_vm._v("PHB Rate List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Plate Number")]),
      _vm._v(" "),
      _c("th", [_vm._v("Effective Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Per Kilometer Rate")]),
      _vm._v(" "),
      _c("th", [_vm._v("Modify")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Plate Number")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("EffectiveDate")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Per Kilometer Rate")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51& */ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51&");
/* harmony import */ var _PHBVehicleRateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PHBVehicleRateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PHBVehicleRateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PHBComponents/PHBVehicleRateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PHBVehicleRateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PHBComponents/PHBVehicleRateComponent.vue?vue&type=template&id=47a3ee51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PHBVehicleRateComponent_vue_vue_type_template_id_47a3ee51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);