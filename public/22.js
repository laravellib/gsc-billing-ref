(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_create_soa_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/create-soa.vue */ "./resources/js/components/search/create-soa.vue");
/* harmony import */ var _search_soa_review_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/soa-review.vue */ "./resources/js/components/search/soa-review.vue");
/* harmony import */ var _search_SearchAllowance_SearchSignatories_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchAllowance/SearchSignatories.vue */ "./resources/js/components/search/SearchAllowance/SearchSignatories.vue");
/* harmony import */ var _search_golfcart_transmittal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/golfcart-transmittal.vue */ "./resources/js/components/search/golfcart-transmittal.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'create-soa': _search_create_soa_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'review-soa': _search_soa_review_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-signatory': _search_SearchAllowance_SearchSignatories_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'search-transmittal': _search_golfcart_transmittal_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      filter: null,
      rental: {},
      grandtotal: {},
      datefrom: '',
      dateto: '',
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      transmittal: false,
      searchBy: 1,
      transmittalList: [],
      searchSOANo: '',
      searchPayee: '',
      transmittal_no: '',
      signatories: {
        noted_by: '',
        noted_by_des: '',
        prepared_by: '',
        prepared_by_des: ''
      }
    };
  },
  mounted: function mounted() {
    this.getUser();
    this.transmittal_preview();
    this.getTransmittalNo();
  },
  methods: {
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    preview: function preview() {
      var _this = this;

      axios.get('soa/search/' + this.datefrom + '/' + this.dateto).then(function (_ref) {
        var data = _ref.data;
        _this.rental = data.data;
        _this.filter = _this.rental;
        _this.grandtotal = data.grandtotal;
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      axios.get('api/allowance', {
        params: {
          getUser: true
        }
      }).then(function (response) {
        _this2.signatories.prepared_by = response.data.name;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getTransmittalNo: function getTransmittalNo() {
      var _this3 = this;

      axios.get('soa/tNo').then(function (_ref2) {
        var data = _ref2.data;
        _this3.transmittal_no = data;
      });
    },
    transmittal_preview: function transmittal_preview() {
      var _this4 = this;

      this.columnDefs = [{
        headerName: 'SOA Date',
        field: 'soa_date',
        resizable: true
      }, {
        headerName: 'SOA No',
        field: 'series_no',
        resizable: true
      }, {
        headerName: 'Billed To',
        field: 'billed_name',
        resizable: true
      }, {
        headerName: 'Charge Invoice No',
        field: 'charge_invoice_no',
        resizable: true
      }, {
        headerName: 'Status',
        field: 'status',
        resizable: true
      }];

      if (this.searchBy == 1) {
        axios.get('soa/reviewt/' + this.datefrom + '/' + this.dateto).then(function (_ref3) {
          var data = _ref3.data;
          _this4.transmittalList = data.data;
        });
      } else if (this.searchBy == 2) {
        axios.get('soa/soa_number/' + this.searchSOANo).then(function (_ref4) {
          var data = _ref4.data;
          _this4.transmittalList = data.data;
        });
      } else {
        axios.get('soa/payee/' + this.searchPayee).then(function (_ref5) {
          var data = _ref5.data;
          _this4.transmittalList = data.data;
        });
      }
    },
    create_transmittal: function create_transmittal() {
      var _this5 = this;

      var selectedNodes = this.gridApi.getSelectedNodes();
      var selectedData = selectedNodes.map(function (node) {
        return node.data;
      });
      var selectedDataStringPresentation = selectedData.map(function (node) {
        return node.id;
      }).join(',');

      if (!selectedDataStringPresentation) {
        return swal.fire('Confirmation!', 'Select Transaction to Proceed', 'warning');
      }

      if (!this.transmittal_no) {
        return swal.fire('Confirmation!', 'No transmittal no to be saved', 'warning');
      }

      if (!this.signatories.noted_by) {
        return swal.fire('Confirmation!', 'Select Noted By to Proceed', 'warning');
      }

      var data = Object.assign({}, this.signatories);
      data.ids = selectedDataStringPresentation;
      axios.post('soa/create_transmittal/', data).then(function (_ref6) {
        var response = _ref6.response;
        swal.fire('SUCCESS!', 'The transmittal has been created.', 'success');

        _this5.print_transmittal();
      })["catch"](function (error) {
        swal.fire('ERROR!', 'Something went wrong', 'error');
      });
    },
    searchTransmittal: function searchTransmittal() {
      console.log('yes');
      Fire.$emit('searchTransmittal', 'golfcart');
    },
    print_transmittal: function print_transmittal() {
      var _this6 = this;

      this.$Progress.start();
      axios.get('api/reportGCTransmittal', {
        params: {
          searchTransmittalExists: true,
          transmittal_no: this.transmittal_no
        }
      }).then(function (response) {
        if (response.data.success) {
          window.open('api/reportGCTransmittal?report=true&transmittal_no=' + _this6.transmittal_no);

          _this6.getTransmittalNo();

          _this6.transmittal_preview();
        } else {
          return toast.fire({
            icon: 'warning',
            title: 'No data found in this transmittal number.'
          });
        }

        _this6.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
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
    create_soa: function create_soa() {
      var _this7 = this;

      axios.get('soa/search/' + this.datefrom + '/' + this.dateto).then(function (_ref7) {
        var data = _ref7.data;
        _this7.rental = data.data;
        _this7.filter = _this7.rental;
        _this7.grandtotal = data.grandtotal;

        if (_this7.filter.length == 0) {
          swal.fire('No Rental Data Found.', 'warning');
        } else {
          $('#createSOA').modal('show');
        }
      });
    },
    review_soa: function review_soa() {
      $('#reviewSOA').modal('show');
    },
    clearData: function clearData() {
      this.form.reset();
    },
    searchGolfcart: function searchGolfcart() {
      $('#searchGolfcart').modal('show');
    },
    getData: function getData(data) {
      this.form.golfcart_no = data.name;
      this.form.gcid_link = data.id;
    }
  },
  created: function created() {
    this.datefrom = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
    this.dateto = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/client-list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/client-list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searching: "",
      golfcart: {},
      filter: {},
      datas: []
    };
  },
  methods: {
    close_modal: function close_modal() {
      $("#searchGolfcart").modal("hide");
    },
    loadGolfcart: function loadGolfcart() {
      var _this = this;

      axios.get("search/client").then(function (_ref) {
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
    onChange: function onChange(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      console.log(dataItem);
      this.$emit("golfcart_data", dataItem);
      $("#searchGolfcart").modal("hide");
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loadGolfcart();
    Fire.$on("AfterCreate", function () {
      _this2.loadGolfcart();
    });
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/create-soa.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/create-soa.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_client_list_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/client-list.vue */ "./resources/js/components/search/client-list.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "client-list": _search_client_list_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    rental: {
      type: [Object, Array]
    },
    grandtotal: {
      type: [Object, Array]
    }
  },
  data: function data() {
    var _ref;

    return {
      searching: "",
      golfcart: {},
      details_data: {},
      detail: {},
      filter: {},
      datas: [],
      signatory: {},
      signatories: {},
      form: new Form((_ref = {
        id: "",
        series_no: "",
        billed_id: "",
        billed_name: "",
        billed_address: "",
        soa_date: "",
        charge_invoice_no: "",
        period_covered: "",
        total_amount: "",
        remarks: "",
        details: "",
        status: "ACTIVE"
      }, _defineProperty(_ref, "total_amount", 0), _defineProperty(_ref, "rentals", {}), _defineProperty(_ref, "grandtotals", {}), _defineProperty(_ref, "preparedBy", ""), _defineProperty(_ref, "verifiedBy", ""), _defineProperty(_ref, "notedBy", ""), _defineProperty(_ref, "approvedBy", ""), _defineProperty(_ref, "preparedByPos", ""), _defineProperty(_ref, "verifiedByPos", ""), _defineProperty(_ref, "notedByPos", ""), _defineProperty(_ref, "approvedByPos", ""), _ref))
    };
  },
  methods: {
    print_soa: function print_soa() {
      var _this = this;

      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.$Progress.start();
        axios.get("soa/details/" + this.form.id).then(function (_ref2) {
          var data = _ref2.data;
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a();
          doc.setFont("courier");
          doc.setFontType("bold");
          doc.setFontSize(12);
          doc.addImage(Logo, "PNG", 15, 5, 30, 30);
          doc.setFontSize(14);
          doc.text("GENERAL SERVICES MULTIPURPOSE COOPERATIVE", 50, 15);
          doc.setFontSize(11);
          doc.text("Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon", 50, 20);
          doc.text("CDA # 9520-10019987-1 / TIN: 411-478-949-000", 50, 25);
          doc.setFontType("normal");
          doc.text("STATEMENT OF ACCOUNT", 80, 45);
          doc.text("SOA#" + _this.form.series_no, 150, 40);
          doc.text("BILLED TO:           " + _this.form.billed_name, 30, 57);
          doc.text("                     " + _this.form.billed_address, 30, 65);
          doc.text("PERIOD COVERED:      FOR THE MONTH OF " + _this.form.soa_date, 30, 75);
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
              }
            },
            // European countries centered
            body: data.data,
            columns: [{
              header: "Month",
              dataKey: "period_month"
            }, {
              header: "Year",
              dataKey: "year"
            }, {
              header: "Amount",
              dataKey: "amount"
            }],
            margin: {
              top: 80
            }
          });
          doc.text("Prepared By:", 30, 150);
          doc.text(_this.form.preparedBy, 30, 155);
          doc.text("Approved By:", 110, 150);
          doc.text(_this.form.approvedBy, 110, 155);
          doc.text("Noted By:", 30, 165);
          doc.text(_this.form.notedBy, 30, 170);
          doc.save("golfcart_soa_" + _this.form.series_no + ".pdf");
        });
        this.$Progress.finish();
      }
    },
    post_soa: function post_soa() {
      var _this2 = this;

      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.form.put("api/golfcart_soa_hdr/" + this.form.id).then(function () {
          toast.fire({
            icon: "success",
            title: "Update data successfully"
          });

          _this2.form.reset();
        })["catch"](function () {
          swal.fire("Error Found.", "warning");
        });
      }
    },
    createData: function createData() {
      var _this3 = this;

      if (this.form.id == "") {
        this.form.rentals = this.rental;
        this.form.grandtotals = this.grandtotal;
        this.$Progress.start();
        this.form.post("api/golfcart_soa_hdr").then(function (data) {
          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          _this3.form.id = data.data.id;
        })["catch"](function () {
          _this3.$Progress.fail();

          toast.fire({
            icon: "error",
            title: "Error Found"
          });
        });
        this.$Progress.finish();
      }
    },
    searchClient: function searchClient() {
      $("#searchGolfcart").modal("show");
    },
    getData: function getData(data) {
      this.form.billed_id = data.id;
      this.form.billed_name = data.FirstName;
      this.form.billed_address = data.Address;
    },
    soa_data: function soa_data(data) {
      this.form.fill(data);
    },
    searchSoa: function searchSoa() {
      $("#searchSOA").modal("show");
    },
    getSignatories: function getSignatories() {
      var _this4 = this;

      axios({
        method: "GET",
        url: "/api/billingsignatoryGetForSearch"
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this4.signatories = data;
      });
    },
    sourceChangedPrepared: _.debounce(function (e) {
      var _this5 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.preparedBy
        }
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this5.form.preparedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedVerified: _.debounce(function (e) {
      var _this6 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.verifiedBy
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        _this6.form.verifiedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedNoted: _.debounce(function (e) {
      var _this7 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.notedBy
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        _this7.form.notedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedApproved: _.debounce(function (e) {
      var _this8 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.approvedBy
        }
      }).then(function (_ref7) {
        var data = _ref7.data;
        _this8.form.approvedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500)
  },
  mounted: function mounted() {},
  created: function created() {
    this.form.series_no = "GSOA-" + moment__WEBPACK_IMPORTED_MODULE_0___default()().format("HHMMSS");
    this.form.soa_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    this.form.period_covered = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    this.getSignatories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/soa-review.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/soa-review.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: 0,
      soa_no: '',
      searching: '',
      billed_name: '',
      billed_address: '',
      preparedBy: '',
      notedBy: '',
      approvedBy: '',
      preparedByPos: '',
      notedByPos: '',
      approvedByPos: '',
      soa_date: '',
      golfcart: {},
      filter: {},
      detail: {},
      datas: [],
      showButton: false,
      showDetail: false,
      signatory: {},
      status: 'ACTIVE',
      table_status: ''
    };
  },
  methods: {
    soa_detail: function soa_detail() {
      var _this = this;

      axios.get('soa/details/' + this.id).then(function (_ref) {
        var data = _ref.data;
        _this.detail = data.data;
      });
      this.showDetail = true;
    },
    paid_soa: function paid_soa() {
      var _this2 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        swal.fire({
          title: 'Are you sure you want to set this as PAID/COLLECTED?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Cancel it!'
        }).then(function (result) {
          if (result.value) {
            axios.get('soa/collected/' + _this2.id).then(function (_ref2) {
              var data = _ref2.data;

              _this2.review();
            });
          }
        });
      }
    },
    view_soa: function view_soa() {
      var _this3 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        this.$Progress.start();
        axios.get('soa/details/' + this.id).then(function (_ref3) {
          var data = _ref3.data;
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a(); // doc.setFont("courier");

          doc.setFontType('bold');
          doc.setFontSize(10);
          doc.addImage(Logo, 'PNG', 15, 5, 30, 30);
          doc.setFontSize(12);
          doc.text('GENERAL SERVICES MULTIPURPOSE COOPERATIVE', 50, 15);
          doc.setFontSize(9);
          doc.text('Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon', 50, 20);
          doc.text('CDA # 9520-10019987-1 / TIN: 411-478-949-000', 50, 25);
          doc.setFontType('normal');
          doc.text('STATEMENT OF ACCOUNT', 80, 45);
          doc.text('SOA# ' + _this3.soa_no, 150, 40);
          doc.text('BILLED TO:                    ' + _this3.billed_name, 15, 57);
          doc.text(_this3.billed_address, 50, 65);
          doc.text('PERIOD COVERED:      FOR THE MONTH OF ' + moment__WEBPACK_IMPORTED_MODULE_0___default()(String(_this3.soa_date)).format('MMMM YYYY'), 15, 75);
          doc.autoTable({
            columnStyles: {
              0: {
                halign: 'left'
              },
              1: {
                halign: 'left'
              },
              2: {
                halign: 'left'
              },
              3: {
                halign: 'left'
              }
            },
            // European countries centered
            body: data.data,
            columns: [{
              header: 'Month',
              dataKey: 'period_month'
            }, {
              header: 'Year',
              dataKey: 'year'
            }, {
              header: 'Particulars',
              dataKey: 'particulars'
            }, {
              header: 'Amount',
              dataKey: 'amount'
            }],
            margin: {
              top: 80
            }
          });

          var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

          var tots = numeral(data.sum).format('0,0.00');
          doc.text('TOTAL AMOUNT: ' + tots, 140, 140);

          var converter = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/numberToWords.min.js");

          var words = converter.toWords(data.sum).toUpperCase() + ' PESOS ONLY';
          var splitTitle = doc.splitTextToSize(words, 260);
          doc.text('Amount in words: ' + splitTitle, 15, 150);
          doc.text('Please issue check in the name of GENERAL SERVICES MULTIPURPOSE COOPERATIVE', 15, 160);
          doc.text('PREPARED/CHECKED BY:', 15, 180);
          doc.text(_this3.preparedBy, 15, 190);
          doc.setFontSize(9);
          doc.text(_this3.preparedByPos, 15, 195);
          doc.setFontSize(10);
          doc.text('APPROVED FOR PAYMENT:', 110, 180);
          doc.text(_this3.approvedBy, 110, 190);
          doc.setFontSize(9);
          doc.text(_this3.preparedByPos, 110, 195);
          doc.setFontSize(10);
          doc.text('NOTED BY:', 15, 205);
          doc.text(_this3.notedBy, 15, 210);
          doc.setFontSize(9);
          doc.text(_this3.notedByPos, 15, 215);
          doc.setFontSize(9);
          doc.text('Contact #s: 0917-7011814 / 0917-7022814 / 0917-7033814 / 0917-3199733 / 0917-3199714 / 0917-77796580', 20, 260);
          doc.setFontSize(10);
          doc.text('Website: www.gsc.com.ph / Email add: gensercoop@yahoo.com', 50, 265);
          doc.text('``Resourceful Workmanship``', 80, 270);
          doc.save('golfcart_soa_' + _this3.soa_no + '.pdf');
        });
        this.$Progress.finish();
      }
    },
    for_transmittal: function for_transmittal() {
      var _this4 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Submit it!'
        }).then(function (result) {
          if (result.value) {
            axios.get('soa/transmit/' + _this4.id).then(function (_ref4) {
              var data = _ref4.data;

              _this4.review();
            });
          }
        });
      }
    },
    for_posting: function for_posting() {
      var _this5 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
          if (result.value) {
            axios.get('soa/post/' + _this5.id).then(function (_ref5) {
              var data = _ref5.data;

              _this5.review();
            });
          }
        });
      }
    },
    for_reactivation: function for_reactivation() {
      var _this6 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Reactivate it!'
        }).then(function (result) {
          if (result.value) {
            axios.get('soa/reactivate/' + _this6.id).then(function (_ref6) {
              var data = _ref6.data;

              _this6.review();
            });
          }
        });
      }
    },
    cancel_soa: function cancel_soa(id) {
      var _this7 = this;

      if (this.id == '') {
        swal.fire('No Data is Selected.', 'warning');
      } else {
        swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Cancel it!'
        }).then(function (result) {
          if (result.value) {
            axios.get('soa/cancel/' + _this7.id).then(function (_ref7) {
              var data = _ref7.data;

              _this7.review();
            });
          }
        });
      }
    },
    review: function review() {
      var _this8 = this;

      axios.get('soa/review/' + this.datefrom + '/' + this.dateto + '/' + this.status).then(function (_ref8) {
        var data = _ref8.data;
        _this8.rental = data.data;
        _this8.filter = _this8.rental;
      });
    },
    onChange: function onChange(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.id = dataItem.id;
      this.soa_no = dataItem.series_no;
      this.billed_name = dataItem.billed_name;
      this.billed_address = dataItem.billed_address;
      this.soa_date = dataItem.soa_date;
      this.table_status = dataItem.status;
      this.preparedBy = dataItem.preparedBy;
      this.notedBy = dataItem.notedBy;
      this.approvedBy = dataItem.approvedBy;
      this.preparedByPos = dataItem.preparedByPos;
      this.notedByPos = dataItem.notedByPos;
      this.approvedByPos = dataItem.approvedByPos;
      this.showButton = true;
      this.showDetail = false;
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.datefrom = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
    this.dateto = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD');
  }
});

/***/ }),

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):undefined}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c(
          "nav",
          { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
          [
            _c("span", { staticClass: "navbar-brand mb-0 h3" }, [
              _vm._v("GOLFCART SECTION")
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
                        { staticClass: "nav-link", attrs: { to: "/golfcart" } },
                        [_vm._v("Masterfile")]
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
                          attrs: { to: "/golfcart-rental" }
                        },
                        [_vm._v("Rental")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item active" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/golfcart-soa" }
                        },
                        [_vm._v("Statement of Account (SOA)")]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("(current)")
                      ])
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
                          attrs: { to: "/golfcart-payment" }
                        },
                        [_vm._v("Payment")]
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
                          attrs: { to: "/golfcart-ledger" }
                        },
                        [_vm._v("General / Subsidiary Ledger")]
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
                          attrs: { to: "/golfcart-adjustment" }
                        },
                        [_vm._v("Adjustment")]
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
        !_vm.transmittal
          ? _c(
              "div",
              { staticClass: "container" },
              [
                _c("div", { staticClass: "row mt-2" }, [
                  _vm._v("\n        Search by Trans Date\n        "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.datefrom,
                          expression: "datefrom"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      attrs: { type: "date", placeholder: "Search Rental..." },
                      domProps: { value: _vm.datefrom },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.datefrom = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.dateto,
                          expression: "dateto"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      attrs: { type: "date", placeholder: "Search Rental..." },
                      domProps: { value: _vm.dateto },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.dateto = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        on: {
                          click: function($event) {
                            return _vm.preview()
                          }
                        }
                      },
                      [_vm._v("Preview")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c(
                    "div",
                    { staticClass: "col" },
                    [
                      _c(
                        "kendo-grid",
                        {
                          attrs: {
                            height: 250,
                            "data-source": _vm.filter,
                            selectable: true,
                            sortable: true
                          }
                        },
                        [
                          _c("kendo-grid-column", {
                            attrs: { field: "trans_date", title: "Date" }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "golfcart_no",
                              title: "Golfcart Name"
                            }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "reference_no",
                              title: "Reference No"
                            }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "description",
                              title: "Description"
                            }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "account_code",
                              title: "Account Code"
                            }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "debit_amount",
                              title: "Amount",
                              format: "{0:c2}"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c(
                    "div",
                    { staticClass: "col" },
                    [
                      _c("p", [_vm._v("Monthly Total")]),
                      _vm._v(" "),
                      _c(
                        "kendo-grid",
                        {
                          attrs: {
                            height: 100,
                            width: 100,
                            "data-source": _vm.grandtotal,
                            selectable: true,
                            sortable: true
                          }
                        },
                        [
                          _c("kendo-grid-column", {
                            attrs: { field: "x_month", title: "Month" }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: { field: "x_year", title: "Year" }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: { field: "total_amount", title: "Total" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("create-soa", {
                  attrs: { rental: _vm.filter, grandtotal: _vm.grandtotal }
                }),
                _vm._v(" "),
                _c("review-soa"),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-2" }, [
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.create_soa()
                          }
                        }
                      },
                      [_vm._v("Create SOA")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.review_soa()
                          }
                        }
                      },
                      [_vm._v("Manage SOA Golfcart")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.transmittal = true
                          }
                        }
                      },
                      [_vm._v("Create SOA Transmittal")]
                    )
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.transmittal
          ? _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row mt-2" }, [
                _c("div", { staticClass: "col" }, [
                  _vm._v("\n          Search by:\n          "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchBy,
                          expression: "searchBy"
                        }
                      ],
                      staticClass: "form-control form-control-sm mb-2",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.searchBy = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Trans Date")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("SOA Number")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [_vm._v("Payee")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.searchBy == 1
                  ? _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _vm._v("\n               \n            "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.datefrom,
                                expression: "datefrom"
                              }
                            ],
                            staticClass: "form-control form-control-sm mb-2",
                            attrs: {
                              type: "date",
                              placeholder: "Search Rental..."
                            },
                            domProps: { value: _vm.datefrom },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.datefrom = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _vm._v("\n               \n              "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dateto,
                                expression: "dateto"
                              }
                            ],
                            staticClass: "form-control form-control-sm mb-2",
                            attrs: {
                              type: "date",
                              placeholder: "Search Rental..."
                            },
                            domProps: { value: _vm.dateto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.dateto = $event.target.value
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.searchBy == 2
                  ? _c("div", { staticClass: "col-4" }, [
                      _vm._v("\n            \n          "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchSOANo,
                            expression: "searchSOANo"
                          }
                        ],
                        staticClass: "form-control form-control-sm mb-2",
                        attrs: {
                          type: "text",
                          placeholder: "Search SOA Number..."
                        },
                        domProps: { value: _vm.searchSOANo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.searchSOANo = $event.target.value
                          }
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.searchBy == 3
                  ? _c("div", { staticClass: "col-4" }, [
                      _vm._v("\n            \n          "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchPayee,
                            expression: "searchPayee"
                          }
                        ],
                        staticClass: "form-control form-control-sm mb-2",
                        attrs: { type: "text", placeholder: "Search Payee..." },
                        domProps: { value: _vm.searchPayee },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.searchPayee = $event.target.value
                          }
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col mt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      on: {
                        click: function($event) {
                          return _vm.transmittal_preview()
                        }
                      }
                    },
                    [_vm._v("Preview")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._v("\n            Transmittal Number\n            "),
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
                                      return _vm.print_transmittal()
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-2" }, [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c("ag-grid-vue", {
                      staticClass: "ag-theme-balham",
                      staticStyle: { width: "100%", height: "300px" },
                      attrs: {
                        columnDefs: _vm.columnDefs,
                        rowData: _vm.transmittalList,
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
                                attrs: {
                                  variant: "outline-primary",
                                  size: "sm"
                                },
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-2" }, [
                _c("div", { staticClass: "col" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.transmittal = false
                        }
                      }
                    },
                    [_vm._v("Back to Create SOA")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.create_transmittal()
                        }
                      }
                    },
                    [_vm._v("Save Transmittal")]
                  )
                ])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("search-signatory", {
        on: {
          rowClick: function($event) {
            return _vm.signatoryClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-transmittal", {
        on: {
          rowClick: function($event) {
            return _vm.transmittalClose($event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          id: "searchGolfcart",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-md" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v("Search Client")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close_modal()
                    }
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
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
                  attrs: { type: "text", placeholder: "Search by Name..." },
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
                      height: 200,
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
                      attrs: { field: "FirstName", title: "Name" }
                    }),
                    _vm._v(" "),
                    _c("kendo-grid-column", {
                      attrs: { field: "Address", title: "Address" }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close_modal()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "far fa-window-close" }),
                  _vm._v(" Close\n                    ")
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          id: "createSOA",
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
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createData()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "golfcart" } }, [
                          _vm._v("SOA No")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.series_no,
                              expression: "form.series_no"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", name: "series_no" },
                          domProps: { value: _vm.form.series_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "series_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "refence" } }, [
                          _vm._v("Date")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.soa_date,
                              expression: "form.soa_date"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "date", name: "soa_date" },
                          domProps: { value: _vm.form.soa_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "soa_date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "refence" } }, [
                          _vm._v("Status")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.form.status))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col",
                          staticStyle: { "text-align": "center" }
                        },
                        [
                          _c("label", { attrs: { for: "refence" } }, [
                            _vm._v("Amount")
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.form.total_amount))])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "golfcart" } }, [
                          _vm._v("Billed to")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.billed_name,
                                expression: "form.billed_name"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: {
                              type: "text",
                              disabled: "",
                              name: "billed_name"
                            },
                            domProps: { value: _vm.form.billed_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "billed_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "input-group-btn" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-primary btn-sm",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.searchClient()
                                    }
                                  }
                                },
                                [_vm._v("Search")]
                              ),
                              _vm._v(" "),
                              _c("client-list", {
                                on: { golfcart_data: _vm.getData }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "refence" } }, [
                          _vm._v("Period Covered")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.period_covered,
                              expression: "form.period_covered"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "date", name: "period_convered" },
                          domProps: { value: _vm.form.period_covered },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "period_covered",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "date" } }, [
                          _vm._v("Address")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billed_address,
                              expression: "form.billed_address"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "text",
                            name: "billed_address",
                            disabled: ""
                          },
                          domProps: { value: _vm.form.billed_address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billed_address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "refence" } }, [
                          _vm._v("Charge Invoice")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.charge_invoice_no,
                              expression: "form.charge_invoice_no"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", name: "charge_invoice_no" },
                          domProps: { value: _vm.form.charge_invoice_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "charge_invoice_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "date" } }, [
                          _vm._v("Remarks")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.remarks,
                              expression: "form.remarks"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", name: "remarks" },
                          domProps: { value: _vm.form.remarks },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "remarks", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("label", { attrs: { for: "refence" } }, [
                          _vm._v("Details")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.details,
                              expression: "form.details"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", name: "details" },
                          domProps: { value: _vm.form.details },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "details", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Prepared By:")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { size: "sm", list: "preparedBy" },
                            on: { keyup: _vm.sourceChangedPrepared },
                            model: {
                              value: _vm.form.preparedBy,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "preparedBy", $$v)
                              },
                              expression: "form.preparedBy"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.preparedByPos,
                                expression: "form.preparedByPos"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.preparedByPos },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "preparedByPos",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "datalist",
                            { attrs: { id: "preparedBy" } },
                            _vm._l(_vm.signatories, function(signatory) {
                              return _c("option", {
                                key: signatory.id,
                                domProps: { value: signatory.name }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Verified and Checked By:")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { size: "sm", list: "verifiedBy" },
                            on: { keyup: _vm.sourceChangedVerified },
                            model: {
                              value: _vm.form.verifiedBy,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "verifiedBy", $$v)
                              },
                              expression: "form.verifiedBy"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.verifiedByPos,
                                expression: "form.verifiedByPos"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.verifiedByPos },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "verifiedByPos",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "datalist",
                            { attrs: { id: "verifiedBy" } },
                            _vm._l(_vm.signatories, function(signatory) {
                              return _c("option", {
                                key: signatory.id,
                                domProps: { value: signatory.name }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Noted By:")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { size: "sm", list: "notedBy" },
                            on: { keyup: _vm.sourceChangedNoted },
                            model: {
                              value: _vm.form.notedBy,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "notedBy", $$v)
                              },
                              expression: "form.notedBy"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.notedByPos,
                                expression: "form.notedByPos"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.notedByPos },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "notedByPos",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "datalist",
                            { attrs: { id: "notedBy" } },
                            _vm._l(_vm.signatories, function(signatory) {
                              return _c("option", {
                                key: signatory.id,
                                domProps: { value: signatory.name }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Approved By:")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { size: "sm", list: "approvedBy" },
                            on: { keyup: _vm.sourceChangedApproved },
                            model: {
                              value: _vm.form.approvedBy,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "approvedBy", $$v)
                              },
                              expression: "form.approvedBy"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.approvedByPos,
                                expression: "form.approvedByPos"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.form.approvedByPos },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "approvedByPos",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "datalist",
                            { attrs: { id: "approvedBy" } },
                            _vm._l(_vm.signatories, function(signatory) {
                              return _c("option", {
                                key: signatory.id,
                                domProps: { value: signatory.name }
                              })
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Create")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.print_soa()
                          }
                        }
                      },
                      [_vm._v("PRINT")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Close")]
                    )
                  ])
                ]
              )
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
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Create Golf Cart SOA")
      ]),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          id: "reviewSOA",
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
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "div",
                { staticClass: "container" },
                [
                  _c("div", { staticClass: "row mt-3" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _vm._v("\n                Status\n                "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.status,
                              expression: "status"
                            }
                          ],
                          staticClass: "form-control form-control-sm mb-2",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.status = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", [_vm._v("ACTIVE")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("TRANSMITTED")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("CANCELLED")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("POSTED")])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _vm._v(
                        "\n                SOA Date From\n                "
                      ),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.datefrom,
                            expression: "datefrom"
                          }
                        ],
                        staticClass: "form-control form-control-sm mb-2",
                        attrs: { type: "date" },
                        domProps: { value: _vm.datefrom },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.datefrom = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _vm._v("\n                SOA Date To\n                "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.dateto,
                            expression: "dateto"
                          }
                        ],
                        staticClass: "form-control form-control-sm mb-2",
                        attrs: { type: "date" },
                        domProps: { value: _vm.dateto },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.dateto = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3 mt-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          on: {
                            click: function($event) {
                              return _vm.review()
                            }
                          }
                        },
                        [_vm._v("Review")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "kendo-grid",
                    {
                      attrs: {
                        height: 200,
                        "data-source": _vm.filter,
                        selectable: true,
                        sortable: true
                      },
                      on: { change: _vm.onChange }
                    },
                    [
                      _c("kendo-grid-column", {
                        attrs: { field: "soa_date", title: "SOA Date" }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: { field: "series_no", title: "SOA No" }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: { field: "billed_name", title: "Billed To" }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: {
                          field: "charge_invoice_no",
                          title: "Charge Invoice No"
                        }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: { field: "status", title: "Status" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm.showButton
              ? _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("p", [_vm._v("SOA: " + _vm._s(_vm.soa_no))]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.soa_detail()
                            }
                          }
                        },
                        [_vm._v("View Detail")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.cancel_soa(_vm.id)
                            }
                          }
                        },
                        [_vm._v("Cancel SOA")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.view_soa()
                            }
                          }
                        },
                        [_vm._v("Preview SOA Form")]
                      ),
                      _vm._v(" "),
                      _vm.table_status === "ACTIVE"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.for_transmittal()
                                }
                              }
                            },
                            [_vm._v("Submit for Transmittal")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.table_status === "TRANSMITTED"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.for_posting()
                                }
                              }
                            },
                            [_vm._v("POST")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.table_status === "CANCELLED" ||
                      _vm.table_status === "POSTED"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.for_reactivation()
                                }
                              }
                            },
                            [_vm._v("REACTIVATE")]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showDetail
              ? _c("div", { staticClass: "container" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c(
                        "kendo-grid",
                        {
                          attrs: {
                            height: 150,
                            "data-source": _vm.detail,
                            selectable: true,
                            sortable: true
                          }
                        },
                        [
                          _c("kendo-grid-column", {
                            attrs: {
                              field: "period_month",
                              title: "Period Month"
                            }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: { field: "year", title: "Year" }
                          }),
                          _vm._v(" "),
                          _c("kendo-grid-column", {
                            attrs: { field: "amount", title: "Amount" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
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
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Golf Cart SOA Review")
      ]),
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

/***/ "./resources/js/components/GolfCart/GolfCart-SOA.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/GolfCart/GolfCart-SOA.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GolfCart-SOA.vue?vue&type=template&id=9d027568& */ "./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568&");
/* harmony import */ var _GolfCart_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GolfCart-SOA.vue?vue&type=script&lang=js& */ "./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GolfCart_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GolfCart/GolfCart-SOA.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GolfCart_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GolfCart-SOA.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GolfCart_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GolfCart-SOA.vue?vue&type=template&id=9d027568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GolfCart/GolfCart-SOA.vue?vue&type=template&id=9d027568&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GolfCart_SOA_vue_vue_type_template_id_9d027568___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/client-list.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/search/client-list.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-list.vue?vue&type=template&id=45ace484& */ "./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484&");
/* harmony import */ var _client_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-list.vue?vue&type=script&lang=js& */ "./resources/js/components/search/client-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _client_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__["render"],
  _client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/client-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/client-list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/search/client-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/client-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_client_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./client-list.vue?vue&type=template&id=45ace484& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/client-list.vue?vue&type=template&id=45ace484&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_client_list_vue_vue_type_template_id_45ace484___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/create-soa.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/search/create-soa.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-soa.vue?vue&type=template&id=4901cfc0& */ "./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0&");
/* harmony import */ var _create_soa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-soa.vue?vue&type=script&lang=js& */ "./resources/js/components/search/create-soa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_soa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/create-soa.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/create-soa.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/search/create-soa.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_soa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create-soa.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/create-soa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_soa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create-soa.vue?vue&type=template&id=4901cfc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/create-soa.vue?vue&type=template&id=4901cfc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_soa_vue_vue_type_template_id_4901cfc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/soa-review.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/search/soa-review.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soa-review.vue?vue&type=template&id=5836cda8& */ "./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8&");
/* harmony import */ var _soa_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soa-review.vue?vue&type=script&lang=js& */ "./resources/js/components/search/soa-review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _soa_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/soa-review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/soa-review.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/search/soa-review.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_soa_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./soa-review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/soa-review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_soa_review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./soa-review.vue?vue&type=template&id=5836cda8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/soa-review.vue?vue&type=template&id=5836cda8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_soa_review_vue_vue_type_template_id_5836cda8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);