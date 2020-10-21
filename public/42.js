(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchJeep_SearchDriver_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchJeep/SearchDriver.vue */ "./resources/js/components/search/SearchJeep/SearchDriver.vue");
/* harmony import */ var _search_SearchJeep_SearchOperator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchJeep/SearchOperator.vue */ "./resources/js/components/search/SearchJeep/SearchOperator.vue");
/* harmony import */ var _search_SearchJeep_SearchVehicleType_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchJeep/SearchVehicleType.vue */ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'search-driver': _search_SearchJeep_SearchDriver_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'search-operator': _search_SearchJeep_SearchOperator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-vehicletype': _search_SearchJeep_SearchVehicleType_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      drivers: [],
      driverses: [],
      signatories: {},
      vehicletypes: {},
      operators: {},
      editmode: false,
      vehicles: [],
      title: '',
      kdid: '',
      form: new Form({
        MVID: "",
        PlateNumber: "",
        EngineNumber: "",
        SerialNumber: "",
        AssetNumber: "",
        DriverName: "",
        DriverLastName: "",
        DriverFirstName: "",
        DriverMiddleName: "",
        DriverExtName: "",
        DriverID: "",
        TruckerName: "",
        TruckerLastName: "",
        TruckerFirstName: "",
        TruckerMiddleName: "",
        TruckerExtName: "",
        TruckerID: "",
        MVTID_Link: "",
        MVTypeName: "",
        IsGSCUnit: ""
      })
    };
  },
  mounted: function mounted() {// this.$parent.getSearchDriver();
    // this.$parent.getSearchOperator();
    //this.$parent.getSearchVehicleType();
  },
  methods: {
    updateTitle: function updateTitle(updatedTitle) {
      this.form.DriverName = updatedTitle.LastName + ',' + updatedTitle.FirstName + ' ' + updatedTitle.MiddleName + ' ' + updatedTitle.ExtName;
      this.form.DriverID = updatedTitle.id;
      this.form.DriverLastName = updatedTitle.LastName;
      this.form.DriverFirstName = updatedTitle.FirstName;
      this.form.DriverMiddleName = updatedTitle.MiddleName;
      this.form.DriverExtName = updatedTitle.ExtName; // console.log(updatedTitle);
    },
    updateTitleOperator: function updateTitleOperator(updatedTitleOperator) {
      this.form.TruckerName = updatedTitleOperator.LastName + ',' + updatedTitleOperator.FirstName + ' ' + updatedTitleOperator.MiddleName + ' ' + updatedTitleOperator.ExtName;
      this.form.TruckerID = updatedTitleOperator.id;
      this.form.TruckerLastName = updatedTitleOperator.LastName;
      this.form.TruckerFirstName = updatedTitleOperator.FirstName;
      this.form.TruckerMiddleName = updatedTitleOperator.MiddleName;

      if (updatedTitleOperator.ExtName == "") {
        this.form.TruckerExtName = " ";
      } else {
        this.form.TruckerExtName = updatedTitleOperator.ExtName;
      }
    },
    updateTitleVehicleType: function updateTitleVehicleType(updatedTitleVehicleType) {
      this.form.MVTID_Link = updatedTitleVehicleType.MVTID;
      this.form.MVTypeName = updatedTitleVehicleType.MVType; // console.log(updatedTitle);
    },
    searchVehicleTypeFunction: function searchVehicleTypeFunction() {
      $('#searchVehicleType').modal('show');
    },
    getVehicleTypeIsReal: function getVehicleTypeIsReal() {
      var _this = this;

      axios.get("api/vehicletype").then(function (_ref) {
        var data = _ref.data;
        return _this.vehicletypes = data;
      });
      console.log(this.vehicletypes);
    },
    searchOperatorFunction: function searchOperatorFunction() {
      $('#searchOperator').modal('show');
    },
    getOperatorIsReal: function getOperatorIsReal() {
      var _this2 = this;

      axios.get("api/operator").then(function (_ref2) {
        var data = _ref2.data;
        return _this2.operators = data;
      });
      console.log(this.operators);
    },
    searchDriverFunction: function searchDriverFunction() {
      $('#searchDriver').modal('show');
    },
    getDriverIsReal: function getDriverIsReal() {
      var _this3 = this;

      axios.get("api/driver").then(function (_ref3) {
        var data = _ref3.data;
        return _this3.drivers = data;
      });
      console.log(this.drivers);
    },
    getResults: function getResults() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/ovlvehicle?page=' + page).then(function (response) {
        _this4.vehicles = response;
      });
    },
    updateVehicle: function updateVehicle(MVID) {
      console.log(MVID);
      this.$Progress.start();
      this.form.put('api/ovlvehicle/' + this.form.MVID);
      $('#addNew').modal('hide');
      toast.fire({
        icon: "success",
        title: "Vehicle successfully updated"
      });
      this.$Progress.finish();
      this.loadVehicle();
    },
    deleteModal: function deleteModal(MVID) {
      var _this5 = this;

      console.log(MVID);
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
          _this5.$Progress.start();

          $('#addNew').modal('hide');

          _this5.form["delete"]('api/ovlvehicle/' + MVID);

          swal.fire('Deleted!', 'Your file has been deleted.', 'success');

          _this5.$Progress.finish();

          _this5.loadVehicle();
        }
      });
    },
    editModal: function editModal(vehicle) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(vehicle);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    loadVehicle: function loadVehicle() {
      var _this6 = this;

      // axios.get("api/getSearchVehicle").then(({ data }) => (this.vehicles = data));
      axios.get('api/getSearchOVLVehicle').then(function (response) {
        _this6.vehicles = response.data;
        console.log(_this6.vehicles);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createVehicle: function createVehicle() {
      var _this7 = this;

      /*this.$Progress.start();
      this.form.post("api/vehicle");
        $('#addNew').modal('hide');
      $('.modal-backdrop').remove();
      toast.fire({
        icon: "success",
        title: "Vehicle successfully created"
      });
      this.$Progress.finish();
      this.loadVehicle();*/
      this.$Progress.start();
      this.form.post("api/ovlvehicle").then(function () {
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Vehicle successfully created"
        });

        _this7.$Progress.finish();

        _this7.loadVehicle();
      })["catch"](function () {
        _this7.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Vehicle not added successfully'
        });
      });
    }
  },
  created: function created() {
    this.loadVehicle(); //setInterval(() => this.loadDriver(),3000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
      vehicletypes: {},
      searchVehicleTypeVar: ''
    };
  },
  mounted: function mounted() {
    this.searcherVehicleType();
  },
  methods: {
    changeTitleVehicleType: function changeTitleVehicleType(vt) {
      //console.log(vehicle);
      this.$emit('changeTitleVehicleType', vt); // this.$emit('kuhaDriverID',driver.id);

      $('#searchVehicleType').modal('hide');
    },
    searcherVehicleType: function searcherVehicleType() {
      var _this = this;

      axios.get("api/vehicletype").then(function (_ref) {
        var data = _ref.data;
        return _this.vehicletypes = data;
      });
      console.log(this.vehicletypes);
    },
    searchVehiType: _.debounce(function () {
      Fire.$emit('searchVehicleTypeStart');
    }, 500)
  },
  created: function created() {
    var _this2 = this;

    Fire.$on('searchVehicleTypeStart', function () {
      var query = _this2.searchVehicleTypeVar;
      axios.get('api/findVehicleType?q=' + query).then(function (data) {
        _this2.vehicletypes = data.data;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-readonly] {\r\n  pointer-events: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLVehicleList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                              attrs: { to: "/ovlvehiclelist" }
                            },
                            [_c("a", [_vm._v("OVL Vehicle List")])]
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
                              attrs: { to: "/ovlvehiclerate" }
                            },
                            [_c("a", [_vm._v("OVL Rate List")])]
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
                              attrs: { to: "/ovlvehiclelogentry" }
                            },
                            [_c("a", [_vm._v("OVL Vehicle Log Entry")])]
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
                              attrs: { to: "/createovlsoa" }
                            },
                            [_c("a", [_vm._v("OVL Create SOA")])]
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
                              attrs: { to: "/soaovltransactions" }
                            },
                            [_c("a", [_vm._v("OVL SOA Transactions")])]
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
                        "\n                              OVL Reports\n                              "
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
                              attrs: { to: "/reportlistovl" }
                            },
                            [_c("a", [_vm._v("Standard OVL Report")])]
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
                  _vm._v("\n            Add New OVL Vehicle\n            "),
                  _c("i", { staticClass: "fa fa-user-plus fa fw" })
                ]
              )
            ])
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
                    _vm._l(_vm.vehicles, function(vehicle) {
                      return _c("tr", { key: vehicle.MVID }, [
                        _c("td", [_vm._v(_vm._s(vehicle.PlateNumber))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vehicle.DriverName))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vehicle.TruckerName))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vehicle.EngineNumber))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vehicle.SerialNumber))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.editModal(vehicle)
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
                                  return _vm.deleteModal(vehicle.MVID)
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
                    [_vm._v("Add New OVL Vehicle")]
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
                    [_vm._v("Update OVL Vehicle's Info")]
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { id: "sweget" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode ? _vm.updateVehicle() : _vm.createVehicle()
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
                        _c("div", { staticClass: "form-group" }, [
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
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.EngineNumber,
                                expression: "form.EngineNumber"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "EngineNumber",
                              placeholder: "Engine Number",
                              required: ""
                            },
                            domProps: { value: _vm.form.EngineNumber },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "EngineNumber",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.SerialNumber,
                                expression: "form.SerialNumber"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "SerialNumber",
                              placeholder: "Serial Number",
                              required: ""
                            },
                            domProps: { value: _vm.form.SerialNumber },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "SerialNumber",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.AssetNumber,
                                expression: "form.AssetNumber"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "AssetNumber",
                              placeholder: "Asset Number",
                              required: ""
                            },
                            domProps: { value: _vm.form.AssetNumber },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "AssetNumber",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "b-input-group",
                              { staticClass: "mt-3" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.DriverName,
                                      expression: "form.DriverName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "DriverName",
                                    placeholder: "Driver Name",
                                    required: "",
                                    "data-readonly": ""
                                  },
                                  domProps: { value: _vm.form.DriverName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverName",
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
                                      value: _vm.form.DriverID,
                                      expression: "form.DriverID"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "DriverID",
                                    placeholder: "DriverID"
                                  },
                                  domProps: { value: _vm.form.DriverID },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverID",
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
                                      value: _vm.form.DriverLastName,
                                      expression: "form.DriverLastName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "DriverLastName",
                                    placeholder: "DriverLastName"
                                  },
                                  domProps: { value: _vm.form.DriverLastName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverLastName",
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
                                      value: _vm.form.DriverFirstName,
                                      expression: "form.DriverFirstName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "DriverFirstName",
                                    placeholder: "DriverFirstName"
                                  },
                                  domProps: { value: _vm.form.DriverFirstName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverFirstName",
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
                                      value: _vm.form.DriverMiddleName,
                                      expression: "form.DriverMiddleName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "DriverMiddleName",
                                    placeholder: "DriverMiddleName"
                                  },
                                  domProps: {
                                    value: _vm.form.DriverMiddleName
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverMiddleName",
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
                                      value: _vm.form.DriverExtName,
                                      expression: "form.DriverExtName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "DriverExtName",
                                    placeholder: "DriverExtName"
                                  },
                                  domProps: { value: _vm.form.DriverExtName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "DriverExtName",
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
                                            return _vm.searchDriverFunction()
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
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "b-input-group",
                              { staticClass: "mt-3" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.MVTID_Link,
                                      expression: "form.MVTID_Link"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "hidden", name: "MVTID_Link" },
                                  domProps: { value: _vm.form.MVTID_Link },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "MVTID_Link",
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
                                      value: _vm.form.MVTypeName,
                                      expression: "form.MVTypeName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "Type",
                                    placeholder: "Vehicle Type",
                                    "data-readonly": ""
                                  },
                                  domProps: { value: _vm.form.MVTypeName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "MVTypeName",
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
                                            return _vm.searchVehicleTypeFunction()
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
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.IsGSCUnit,
                                expression: "form.IsGSCUnit"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { "text-transform": "uppercase" },
                            attrs: {
                              type: "text",
                              name: "Type",
                              placeholder: "Is GSC Unit? Y/N",
                              maxlength: "1",
                              required: ""
                            },
                            domProps: { value: _vm.form.IsGSCUnit },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "IsGSCUnit",
                                  $event.target.value
                                )
                              }
                            }
                          })
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
      _c("search-driver", {
        on: {
          changeTitle: function($event) {
            return _vm.updateTitle($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-operator", {
        on: {
          changeTitleOperator: function($event) {
            return _vm.updateTitleOperator($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-vehicletype", {
        on: {
          changeTitleVehicleType: function($event) {
            return _vm.updateTitleVehicleType($event)
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
      _c("b", [_vm._v("OVL Vehicle List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Plate Number")]),
      _vm._v(" "),
      _c("th", [_vm._v("Driver Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Operator Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Engine")]),
      _vm._v(" "),
      _c("th", [_vm._v("Serial Number")]),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
          id: "searchVehicleType",
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
                            _c("b-form-input", {
                              ref: "autofocus",
                              attrs: { placeholder: "Search for..." },
                              on: { keyup: _vm.searchVehiType },
                              model: {
                                value: _vm.searchVehicleTypeVar,
                                callback: function($$v) {
                                  _vm.searchVehicleTypeVar = $$v
                                },
                                expression: "searchVehicleTypeVar"
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
                          _vm._l(_vm.vehicletypes.data, function(vt) {
                            return _c(
                              "tr",
                              {
                                key: vt.MVTID,
                                staticClass: "hover-green",
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "element" },
                                on: {
                                  click: function($event) {
                                    return _vm.changeTitleVehicleType(vt)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(vt.MVTID))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(vt.MVType))])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.vehicletypes.data
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search Vehicle Type")]),
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Motor Vehicle Type Name")])
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

/***/ "./resources/js/components/OVLComponents/OVLVehicleList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLVehicleList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OVLVehicleList.vue?vue&type=template&id=464421f8& */ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8&");
/* harmony import */ var _OVLVehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OVLVehicleList.vue?vue&type=script&lang=js& */ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OVLVehicleList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OVLVehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OVLComponents/OVLVehicleList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLVehicleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLVehicleList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLVehicleList.vue?vue&type=template&id=464421f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLVehicleList.vue?vue&type=template&id=464421f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLVehicleList_vue_vue_type_template_id_464421f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchVehicleType.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchVehicleType.vue?vue&type=template&id=d79c782e& */ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e&");
/* harmony import */ var _SearchVehicleType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchVehicleType.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchVehicleType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchJeep/SearchVehicleType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchVehicleType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchVehicleType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchVehicleType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchVehicleType.vue?vue&type=template&id=d79c782e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchJeep/SearchVehicleType.vue?vue&type=template&id=d79c782e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchVehicleType_vue_vue_type_template_id_d79c782e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);