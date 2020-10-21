(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      signatories: null,
      form: new Form({
        preparedBy: "",
        verifiedBy: "",
        notedBy: "",
        approvedBy: "",
        preparedByPos: "",
        verifiedByPos: "",
        notedByPos: "",
        approvedByPos: ""
      })
    };
  },
  methods: {
    close: function close() {
      $("#signatory").modal("hide");
    },
    print: function print() {
      this.$emit("signatory", this.form);
      $("#signatory").modal("hide");
    },
    getSignatories: function getSignatories() {
      var _this = this;

      axios({
        method: "GET",
        url: "/api/billingsignatoryGetForSearch"
      }).then(function (_ref) {
        var data = _ref.data;
        _this.signatories = data;
      });
    },
    sourceChangedPrepared: _.debounce(function (e) {
      var _this2 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.preparedBy
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.form.preparedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedVerified: _.debounce(function (e) {
      var _this3 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.verifiedBy
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this3.form.verifiedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedNoted: _.debounce(function (e) {
      var _this4 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.notedBy
        }
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this4.form.notedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500),
    sourceChangedApproved: _.debounce(function (e) {
      var _this5 = this;

      axios.get("/api/getPosition", {
        params: {
          name: this.form.approvedBy
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        _this5.form.approvedByPos = data[0]["position"];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500)
  },
  mounted: function mounted() {},
  created: function created() {
    this.getSignatories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_client_list_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/client-list.vue */ "./resources/js/components/search/client-list.vue");
/* harmony import */ var _search_signatory_req_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/signatory-req.vue */ "./resources/js/components/search/signatory-req.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "client-list": _search_client_list_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "signatory-req": _search_signatory_req_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    rental: {
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
      }, _defineProperty(_ref, "total_amount", 0), _defineProperty(_ref, "rentals", {}), _defineProperty(_ref, "grandtotals", {}), _ref))
    };
  },
  methods: {
    get_signatory: function get_signatory(data) {
      var _this = this;

      this.signatory = data;
      console.log(this.signatory);
      this.$Progress.start();
      axios.get("req_soa/details/" + this.form.id).then(function (_ref2) {
        var data = _ref2.data;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3___default.a();
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
            header: "Date",
            dataKey: "req_date"
          }, {
            header: "Particulars",
            dataKey: "particulars"
          }, {
            header: "Amount",
            dataKey: "amount"
          }],
          margin: {
            top: 80
          }
        });
        doc.text("Prepared By:", 30, 150);
        doc.text(_this.signatory.preparedBy, 30, 155);
        doc.text("Approved By:", 110, 150);
        doc.text(_this.signatory.approvedBy, 110, 155);
        doc.text("Noted By:", 30, 165);
        doc.text(_this.signatory.notedBy, 30, 170);
        doc.save("vanrental_soa_" + _this.form.series_no + ".pdf");
      });
      this.$Progress.finish();
    },
    print_soa: function print_soa() {
      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        $("#signatory-req").modal("show");
      }
    },
    post_soa: function post_soa() {
      var _this2 = this;

      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.form.put("api/vanrental_soa_hdr/" + this.form.id).then(function () {
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
        this.form.post("api/vanrental_soa_hdr").then(function (data) {
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
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.form.series_no = "VSOA-" + moment__WEBPACK_IMPORTED_MODULE_0___default()().format("HHMMSS");
    this.form.soa_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    this.form.period_covered = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_signatory_review_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/signatory-review.vue */ "./resources/js/components/search/signatory-review.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "signatory-review": _search_signatory_review_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      id: 0,
      soa_no: "",
      searching: "",
      billed_name: "",
      billed_address: "",
      soa_date: "",
      golfcart: {},
      filter: {},
      detail: {},
      datas: [],
      showButton: false,
      showDetail: false,
      signatory: {}
    };
  },
  methods: {
    get_signatory: function get_signatory(data) {
      var _this = this;

      this.signatory = data;
      console.log(this.signatory);
      this.$Progress.start();
      axios.get("req_soa/details/" + this.id).then(function (_ref) {
        var data = _ref.data;
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
        doc.text("SOA#" + _this.soa_no, 150, 40);
        doc.text("BILLED TO:           " + _this.billed_name, 30, 57);
        doc.text("                     " + _this.billed_address, 30, 65);
        doc.text("PERIOD COVERED:      FOR THE MONTH OF " + _this.soa_date, 30, 75);
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
            header: "Date",
            dataKey: "req_date"
          }, {
            header: "Particulars",
            dataKey: "particulars"
          }, {
            header: "Amount",
            dataKey: "amount"
          }],
          margin: {
            top: 80
          }
        });
        doc.text("Prepared By:", 30, 150);
        doc.text(_this.signatory.preparedBy, 30, 155);
        doc.text("Approved By:", 110, 150);
        doc.text(_this.signatory.approvedBy, 110, 155);
        doc.text("Noted By:", 30, 165);
        doc.text(_this.signatory.notedBy, 30, 170);
        doc.save("vanrental_soa_" + _this.soa_no + ".pdf");
      });
      this.$Progress.finish();
    },
    soa_detail: function soa_detail() {
      var _this2 = this;

      axios.get("req_soa/details/" + this.id).then(function (_ref2) {
        var data = _ref2.data;
        _this2.detail = data.data;
      });
      this.showDetail = true;
    },
    paid_soa: function paid_soa() {
      var _this3 = this;

      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        swal.fire({
          title: "Are you sure you want to set this as PAID/COLLECTED?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Cancel it!"
        }).then(function (result) {
          if (result.value) {
            axios.get("req_soa/collected/" + _this3.id).then(function (_ref3) {
              var data = _ref3.data;

              _this3.review();
            });
          }
        });
      }
    },
    view_soa: function view_soa() {
      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        $("#signatory-review").modal("show");
      }
    },
    cancel_soa: function cancel_soa(id) {
      var _this4 = this;

      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Cancel it!"
        }).then(function (result) {
          if (result.value) {
            console.log(id);
            axios.get("req_soa/cancel/" + _this4.id).then(function (_ref4) {
              var data = _ref4.data;

              _this4.review();
            });
          }
        });
      }
    },
    review: function review() {
      var _this5 = this;

      axios.get("req_soa/review/" + this.datefrom + "/" + this.dateto).then(function (_ref5) {
        var data = _ref5.data;
        _this5.rental = data.data;
        _this5.filter = _this5.rental;
        console.log(data);
      });
    },
    onChange: function onChange(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      console.log(dataItem);
      this.id = dataItem.id;
      this.soa_no = dataItem.series_no;
      this.billed_name = dataItem.billed_name;
      this.billed_address = dataItem.billed_address;
      this.soa_date = dataItem.soa_date;
      this.showButton = true;
      this.showDetail = false;
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.datefrom = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
    this.dateto = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VanRental_SOA_Req_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VanRental-SOA-Req.vue */ "./resources/js/components/vanrental/VanRental-SOA-Req.vue");
/* harmony import */ var _VanRental_SOA_Review_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VanRental-SOA-Review.vue */ "./resources/js/components/vanrental/VanRental-SOA-Review.vue");
/* harmony import */ var _search_signatory_checker_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/signatory-checker.vue */ "./resources/js/components/search/signatory-checker.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "create-soa": _VanRental_SOA_Req_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "review-soa": _VanRental_SOA_Review_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "signatory-check": _search_signatory_checker_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AgGridVue: AgGridVue
  },
  data: function data() {
    return {
      datefrom: "",
      dateto: "",
      filter: {},
      selected: [],
      rental: {},
      clients: {},
      client: [],
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      signatory: {},
      form: new Form({
        billed_id: "",
        billed_name: "",
        billed_address: "",
        series_no: "",
        soa_date: "",
        charge_invoice_no: "",
        remarks: "",
        amount: 0,
        id: 0
      })
    };
  },
  methods: {
    get_signatory: function get_signatory(data) {
      var _this = this;

      this.signatory = data;
      console.log(this.signatory);
      this.$Progress.start();
      axios.get("req_soa/details/" + this.form.id).then(function (_ref) {
        var data = _ref.data;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4___default.a();
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
            header: "Date",
            dataKey: "req_date"
          }, {
            header: "Particulars",
            dataKey: "particulars"
          }, {
            header: "Amount",
            dataKey: "amount"
          }],
          margin: {
            top: 80
          }
        });
        doc.text("Prepared By:", 30, 150);
        doc.text(_this.signatory.preparedBy, 30, 155);
        doc.text("Approved By:", 110, 150);
        doc.text(_this.signatory.approvedBy, 110, 155);
        doc.text("Noted By:", 30, 165);
        doc.text(_this.signatory.notedBy, 30, 170);
        doc.save("vanrental_soa_" + _this.form.id + ".pdf");
      });
      this.$Progress.finish();
    },
    print_soa: function print_soa() {
      if (this.form.id == 0) {
        swal.fire("No Data is Selected.", "warning");
      } else {
        $("#signatory").modal("show");
      }
    },
    create_monthly: function create_monthly() {
      var _this2 = this;

      if (this.form.id == 0) {
        this.$Progress.start();
        this.form.post("vanrental/monthly").then(function (data) {
          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          _this2.form.id = data.data.id;
          _this2.form.series_no = "VSOA-" + moment__WEBPACK_IMPORTED_MODULE_3___default()().format("HHMMSS");
        })["catch"](function () {
          _this2.$Progress.fail();

          toast.fire({
            icon: "error",
            title: "Error Found"
          });
        });
        this.$Progress.finish();
      }
    },
    preview: function preview() {
      var _this3 = this;

      axios.get("req_soa/search/" + this.datefrom + "/" + this.dateto).then(function (_ref2) {
        var data = _ref2.data;
        _this3.selected = [];
        _this3.rental = data.data;
        _this3.filter = _this3.rental;
      });
    },
    create_soa: function create_soa() {
      if (this.selected.length == 0) {
        swal.fire("No Rental Data Found.", "warning");
      } else {
        $("#createSOA").modal("show");
      }
    },
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    onChange: function onChange(e) {
      var _this4 = this;

      this.form.applied_amount = 0;
      this.selected = [];
      var selectedRows = this.gridApi.getSelectedNodes();
      var selectedData = selectedRows.map(function (node) {
        return node.data;
      });
      var push = selectedData.map(function (node) {
        return _this4.selected.push(node);
      });
      console.log(this.selected);
    },
    review_soa: function review_soa() {
      $("#reviewSOA").modal("show");
    },
    get_client: function get_client() {
      var _this5 = this;

      axios.get("search/client").then(function (_ref3) {
        var data = _ref3.data;
        _this5.clients = data.data;
        console.log(_this5.filter);
      });
    },
    select_client: function select_client() {
      this.form.billed_id = this.client.id;
      this.form.billed_name = this.client.FirstName;
      this.form.billed_address = this.client.Address;
    }
  },
  created: function created() {
    this.columnDefs = [{
      headerName: "Date",
      field: "date",
      resizable: true,
      width: 170,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: "Type",
      field: "type",
      resizable: true,
      width: 170
    }, {
      headerName: "Activity",
      field: "po_activity",
      resizable: true,
      width: 170
    }, {
      headerName: "Gross Amount",
      field: "gross_amount",
      resizable: true,
      width: 170
    }, {
      headerName: "# Trips",
      field: "no_trips",
      resizable: true,
      width: 170
    }, {
      headerName: "Amount",
      field: "amount",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }];
    this.filter = [];
    this.get_client();
    this.datefrom = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD");
    this.dateto = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD");
    this.form.soa_date = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD");
    this.form.series_no = "VSOA-" + moment__WEBPACK_IMPORTED_MODULE_3___default()().format("HHMMSS");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          id: "signatory",
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
              _c("h4", { staticClass: "modal-title" }, [_vm._v("Signatory")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.close()
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
            _c("div", { staticClass: "modal-body" }, [
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
                          _vm.$set(_vm.form, "notedByPos", $event.target.value)
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.print()
                      }
                    }
                  },
                  [_vm._v("Print")]
                )
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566& ***!
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
                              }),
                              _vm._v(" "),
                              _c("signatory-req", {
                                on: { signatory: _vm.get_signatory }
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
        _vm._v("Create Van Rental SOA")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979& ***!
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
          id: "reviewSOA",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c(
            "div",
            { staticClass: "modal-content" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "container" },
                  [
                    _c("div", { staticClass: "row mt-3" }, [
                      _vm._v(
                        "\n              Search by SOA Date\n              "
                      ),
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
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
                            staticClass: "btn btn-primary",
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
                        )
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
              _c("signatory-review", { on: { signatory: _vm.get_signatory } }),
              _vm._v(" "),
              _vm._m(1)
            ],
            1
          )
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("SOA Review")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c& ***!
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
              _vm._v("VAN RENTAL SECTION")
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
                            to: "/vanrental-list"
                          }
                        },
                        [_vm._v("Van Rental List")]
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
                            to: "/vanrental-location"
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
                            to: "/vanrental-po"
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
                            to: "/vanrental-rental"
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
                            to: "/vanrental-soa"
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
                            to: "/vanrental-payment"
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
                            to: "/vanrental-ledger"
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
                            to: "/vanrental-reports"
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
        _c("div", { staticClass: "container tab-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tab-pane fade", attrs: { id: "dmpi" } }, [
            _c("div", { staticClass: "row mt-3" }, [
              _vm._v("\n          Search by Trans Date\n          "),
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
            _c("div", { staticClass: "row mt-3" }, [
              _c(
                "div",
                { staticClass: "col-sm" },
                [
                  _c("ag-grid-vue", {
                    staticClass: "ag-theme-balham",
                    staticStyle: { width: "1050px", height: "200px" },
                    attrs: {
                      columnDefs: _vm.columnDefs,
                      rowData: _vm.filter,
                      rowSelection: "multiple"
                    },
                    on: {
                      "grid-ready": _vm.onGridReady,
                      selectionChanged: _vm.onChange
                    }
                  }),
                  _vm._v(" "),
                  _c("create-soa", { attrs: { rental: _vm.selected } }),
                  _vm._v(" "),
                  _c("review-soa")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit" },
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
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        return _vm.review_soa()
                      }
                    }
                  },
                  [_vm._v("Manage SOA")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [_vm._v("Print Charge Invoice")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [_vm._v("Print Delivery")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-pane fade", attrs: { id: "outsider" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.create_monthly()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row mt-3" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("label", { attrs: { for: "refence" } }, [
                        _vm._v("Series #")
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
                            _vm.$set(_vm.form, "series_no", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
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
                            _vm.$set(_vm.form, "soa_date", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
                        _vm._v("Billed To")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.client,
                              expression: "client"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { required: true },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.client = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.select_client
                            ]
                          }
                        },
                        _vm._l(_vm.clients, function(c) {
                          return _c(
                            "option",
                            { key: c.id, domProps: { value: c } },
                            [_vm._v(_vm._s(c.FirstName))]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
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
                        attrs: { type: "text", name: "billed_address" },
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
                    _c("div", { staticClass: "col-sm" }, [
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
                        _vm._v("SOA Date")
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
                            _vm.$set(_vm.form, "soa_date", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
                        _vm._v("Particulars")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.particulars,
                            expression: "form.particulars"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", name: "particulars" },
                        domProps: { value: _vm.form.particulars },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "particulars",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
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
                    _c("div", { staticClass: "col-sm" }, [
                      _c("label", { attrs: { for: "refence" } }, [
                        _vm._v("Amount")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.amount,
                            expression: "form.amount"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        attrs: { type: "text", name: "amount" },
                        domProps: { value: _vm.form.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "amount", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("SAVE")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
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
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Clear")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("signatory-check", { on: { signatory: _vm.get_signatory } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-3" }, [
      _c("ul", { staticClass: "nav nav-tabs" }, [
        _c("li", { staticClass: "active" }, [
          _c("a", { attrs: { "data-toggle": "tab", href: "#dmpi" } }, [
            _vm._v("Per Service Requisition")
          ])
        ]),
        _vm._v("   \n          "),
        _c("li", [
          _c("a", { attrs: { "data-toggle": "tab", href: "#outsider" } }, [
            _vm._v("Monthly")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/search/signatory-checker.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/search/signatory-checker.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signatory-checker.vue?vue&type=template&id=728ebe52& */ "./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52&");
/* harmony import */ var _signatory_checker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signatory-checker.vue?vue&type=script&lang=js& */ "./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _signatory_checker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/signatory-checker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signatory_checker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./signatory-checker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/signatory-checker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signatory_checker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./signatory-checker.vue?vue&type=template&id=728ebe52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/signatory-checker.vue?vue&type=template&id=728ebe52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signatory_checker_vue_vue_type_template_id_728ebe52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Req.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Req.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VanRental-SOA-Req.vue?vue&type=template&id=1389f566& */ "./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566&");
/* harmony import */ var _VanRental_SOA_Req_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VanRental-SOA-Req.vue?vue&type=script&lang=js& */ "./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VanRental_SOA_Req_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vanrental/VanRental-SOA-Req.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Req_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA-Req.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Req_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA-Req.vue?vue&type=template&id=1389f566& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Req.vue?vue&type=template&id=1389f566&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Req_vue_vue_type_template_id_1389f566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Review.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Review.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VanRental-SOA-Review.vue?vue&type=template&id=39c5f979& */ "./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979&");
/* harmony import */ var _VanRental_SOA_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VanRental-SOA-Review.vue?vue&type=script&lang=js& */ "./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VanRental_SOA_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vanrental/VanRental-SOA-Review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA-Review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA-Review.vue?vue&type=template&id=39c5f979& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA-Review.vue?vue&type=template&id=39c5f979&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_Review_vue_vue_type_template_id_39c5f979___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VanRental-SOA.vue?vue&type=template&id=0c3cf29c& */ "./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c&");
/* harmony import */ var _VanRental_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VanRental-SOA.vue?vue&type=script&lang=js& */ "./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VanRental_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vanrental/VanRental-SOA.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VanRental-SOA.vue?vue&type=template&id=0c3cf29c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vanrental/VanRental-SOA.vue?vue&type=template&id=0c3cf29c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VanRental_SOA_vue_vue_type_template_id_0c3cf29c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);