(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchAllowance_SearchPeriod_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchAllowance/SearchPeriod.vue */ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue");
/* harmony import */ var _search_SearchAllowance_SearchPayStation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchAllowance/SearchPayStation.vue */ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue");
/* harmony import */ var _search_SearchAllowance_SearchAllowanceHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchAllowance/SearchAllowanceHeader.vue */ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue");
/* harmony import */ var _search_SearchAllowance_SearchEmployee_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/SearchAllowance/SearchEmployee.vue */ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "search-period": _search_SearchAllowance_SearchPeriod_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "search-paystation": _search_SearchAllowance_SearchPayStation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "search-allowanceHeader": _search_SearchAllowance_SearchAllowanceHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "search-allowanceEmployee": _search_SearchAllowance_SearchEmployee_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      header: {
        AHID: "",
        Location: "",
        LocID: "",
        Period: "",
        PeriodID: ""
      },
      formHeader: {
        AHID: "",
        Location: "",
        Period: "",
        PeriodID: ""
      },
      detail: {
        ADID: "",
        hdr_idLink: "",
        EmpID: "",
        Chapa: "",
        FName: "",
        MName: "",
        LName: "",
        ExtName: "",
        manDays: "",
        GL: "",
        CostCenter: "",
        Gasoline: "0.00",
        Communication: "0.00",
        RentalMaintenance: "0.00",
        Others: "0.00",
        markup: 0,
        AdminFee: "0.00",
        SubTotal: "0.00"
      },
      detailList: [],
      updateMeHeader: false,
      search: "",
      dataInDetail: false,
      TotalAmount: "0.00",
      multiplierGas: "None",
      multiplierComm: "None",
      multiplierRental: "None",
      GLList: [],
      CCList: []
    };
  },
  mounted: function mounted() {
    this.getDropDownData();
  },
  methods: {
    newModal: function newModal() {
      this.formHeader = {
        AHID: "",
        Location: "",
        Period: "",
        PeriodID: ""
      };
      this.updateMeHeader = false;
      $("#addNew").modal("show");
    },
    updateAllowanceHeaderButton: function updateAllowanceHeaderButton() {
      if (!this.header.AHID) {
        return toast.fire({
          icon: "warning",
          title: "Please select/save Allowance Header to continue."
        });
      }

      this.formHeader = Object.assign({}, this.header);
      this.updateMeHeader = true;
      $("#addNew").modal("show");
    },
    deleteAllowanceHeaderButton: function deleteAllowanceHeaderButton() {
      var _this = this;

      if (!this.header.AHID) {
        return toast.fire({
          icon: "warning",
          title: "Please select Allowance Header to continue."
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
          _this.$Progress.start();

          axios["delete"]("api/allowance/".concat(_this.header.AHID)).then(function (response) {
            if (response.data.success) {
              _this.header = {};
              _this.detailList = [];

              _this.clearDetail();

              swal.fire("Deleted!", response.data.message, "success");
            } else {
              swal.fire("Warning!", response.data.message, "warning");
            }

            _this.$Progress.finish();
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          swal.fire("Information!", "Deletion is cancelled.", "warning");
        }
      });
    },
    getDropDownData: function getDropDownData() {
      var _this2 = this;

      axios.get("api/allowance", {
        params: {
          getCostCenter: true
        }
      }).then(function (response) {
        console.log(response.data);
        _this2.CCList = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
      axios.get("api/allowance", {
        params: {
          getGL: true
        }
      }).then(function (response) {
        console.log(response.data);
        _this2.GLList = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getMarkup: function getMarkup() {
      var _this3 = this;

      axios.get("api/markup").then(function (response) {
        _this3.detail.markup = response.data[0].ALWMarkUp;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    searchAllowanceHeaderButton: function searchAllowanceHeaderButton() {
      Fire.$emit("searchAllowanceHeader");
    },
    searchPeriodButton: function searchPeriodButton() {
      Fire.$emit("searchPeriod");
    },
    searchPayStationButton: function searchPayStationButton() {
      Fire.$emit("searchPayStation");
    },
    allowanceHeaderClose: function allowanceHeaderClose(row) {
      this.header = Object.assign({}, row);
      this.clearDetail();
      this.getAllowanceDetail();
      this.getTotalAmount();
    },
    periodClose: function periodClose(row) {
      this.formHeader.Period = row.code;
      this.formHeader.PeriodID = row.PPID;
    },
    locationClose: function locationClose(row) {
      this.formHeader.Location = row.PayStation;
    },
    saveHeader: function saveHeader() {
      var _this4 = this;

      var data = Object.assign({}, this.formHeader);
      this.$Progress.start();
      axios.post("api/allowanceHeader", data).then(function (response) {
        if (response.data.success) {
          _this4.header = Object.assign({}, _this4.formHeader);

          if (response.data.id) {
            _this4.header.AHID = response.data.id;
          }

          toast.fire({
            icon: "success",
            title: response.data.message
          });
          $("#addNew").modal("hide");
          _this4.formHeader = {};
        } else {
          toast.fire({
            icon: "warning",
            title: response.data.message
          });
        }

        _this4.clearDetail();

        _this4.detailList = [];

        _this4.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // DETAIL
    getTotalAmount: function getTotalAmount() {
      var _this5 = this;

      if (this.header.AHID) {
        axios.get("api/allowance", {
          params: {
            total: true,
            id: this.header.AHID
          }
        }).then(function (response) {
          if (response.data.length > 0) {
            _this5.TotalAmount = _this5.$root.formatNumberCommaRound(response.data[0].TotalAmount);
          } else {
            _this5.TotalAmount = "0.00";
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    searchEmployeeButton: function searchEmployeeButton() {
      if (!this.header.AHID) {
        return toast.fire({
          icon: "warning",
          title: "Please select Allowance Header to continue."
        });
      }

      Fire.$emit("searchEmployee");
    },
    employeeClose: function employeeClose(row) {
      var _this6 = this;

      this.clearDetail();
      this.multiplierGas = "None";
      this.multiplierComm = "None";
      this.multiplierRental = "None";
      axios.get("api/allowance", {
        params: {
          checkEmpSetting: true,
          EmpID: row.EmpID
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this6.multiplierGas = _this6.$root.formatNumberCommaRound(response.data[0].GasolineRate);
          _this6.multiplierComm = _this6.$root.formatNumberCommaRound(response.data[0].CommRate);
          _this6.multiplierRental = _this6.$root.formatNumberCommaRound(response.data[0].RentalRate);
        }
      })["catch"](function (error) {
        console.log(error);
      });
      this.detail.EmpID = row.EmpID;
      this.detail.Chapa = row.Chapa;
      this.detail.FName = row.FName;
      this.detail.MName = row.MName;
      this.detail.LName = row.LName;
      this.detail.ExtName = row.ExtName;
    },
    changeManDays: function changeManDays() {
      if (this.$root.formatNumber(this.multiplierGas) > 0) {
        this.detail.Gasoline = this.$root.formatNumberCommaRound(this.$root.formatNumber(this.multiplierGas) * this.$root.formatNumber(this.detail.manDays));
      }

      if (this.$root.formatNumber(this.multiplierComm) > 0) {
        this.detail.Communication = this.$root.formatNumberCommaRound(this.$root.formatNumber(this.multiplierComm) * this.$root.formatNumber(this.detail.manDays));
      }

      if (this.$root.formatNumber(this.multiplierRental) > 0) {
        this.detail.RentalMaintenance = this.$root.formatNumberCommaRound(this.$root.formatNumber(this.multiplierRental) * this.$root.formatNumber(this.detail.manDays));
      }

      this.autoCompute();
    },
    getAllowanceDetail: function getAllowanceDetail() {
      var _this7 = this;

      axios.get("api/allowance", {
        params: {
          detail: true,
          id: this.header.AHID
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          _this7.dataInDetail = true;
          response.data.forEach(function (item) {
            item.FullName = item.LName + " " + item.ExtName + ", " + item.FName + " " + item.MName;
          });
          _this7.detailList = response.data;
        } else {
          _this7.detailList = [];
          _this7.dataInDetail = false;
        }

        _this7.getMarkup();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveDetail: function saveDetail() {
      var _this8 = this;

      if (!this.header.AHID) {
        return toast.fire({
          icon: "warning",
          title: "Please select Allowance Header to continue."
        });
      }

      this.$Progress.start();
      var data = Object.assign({}, this.detail);
      data.hdr_idLink = this.header.AHID;
      data.Gasoline = this.$root.formatNumber(this.detail.Gasoline);
      data.Communication = this.$root.formatNumber(this.detail.Communication);
      data.RentalMaintenance = this.$root.formatNumber(this.detail.RentalMaintenance);
      data.Others = this.$root.formatNumber(this.detail.Others);
      data.AdminFee = this.$root.formatNumber(this.detail.AdminFee);
      data.SubTotal = this.$root.formatNumber(this.detail.SubTotal);
      axios.post("api/allowanceDetail", data).then(function (response) {
        if (response.data.success) {
          if (response.data.id) {
            _this8.detail.ADID = response.data.id;
          }

          toast.fire({
            icon: "success",
            title: response.data.message
          });

          _this8.getAllowanceDetail();

          _this8.getTotalAmount();

          _this8.clearDetail();
        } else {
          toast.fire({
            icon: "warning",
            title: response.data.message
          });
        }

        _this8.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    rowClick: function rowClick(row) {
      var _this9 = this;

      this.detail = Object.assign({}, row);
      this.detail.Gasoline = this.$root.formatNumberCommaRound(row.Gasoline);
      this.detail.Communication = this.$root.formatNumberCommaRound(row.Communication);
      this.detail.RentalMaintenance = this.$root.formatNumberCommaRound(row.RentalMaintenance);
      this.detail.Others = this.$root.formatNumberCommaRound(row.Others);
      this.detail.SubTotal = this.$root.formatNumberCommaRound(row.SubTotal);
      this.detail.AdminFee = this.$root.formatNumberCommaRound(row.AdminFee);
      this.multiplierGas = "None";
      this.multiplierComm = "None";
      this.multiplierRental = "None";
      axios.get("api/allowance", {
        params: {
          checkEmpSetting: true,
          EmpID: row.EmpID
        }
      }).then(function (response) {
        if (response.data.length > 0) {
          if (response.data[0].GasolineRate > 0) {
            _this9.multiplierGas = _this9.$root.formatNumberCommaRound(response.data[0].GasolineRate);
          }

          if (response.data[0].CommRate > 0) {
            _this9.multiplierComm = _this9.$root.formatNumberCommaRound(response.data[0].CommRate);
          }

          if (response.data[0].RentalRate > 0) {
            _this9.multiplierRental = _this9.$root.formatNumberCommaRound(response.data[0].RentalRate);
          }
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    autoCompute: function autoCompute() {
      this.detail.AdminFee = this.$root.formatNumberCommaRound((this.$root.formatNumber(this.detail.Gasoline ? this.detail.Gasoline : 0) + this.$root.formatNumber(this.detail.Communication ? this.detail.Communication : 0) + this.$root.formatNumber(this.detail.RentalMaintenance ? this.detail.RentalMaintenance : 0) + this.$root.formatNumber(this.detail.Others ? this.detail.Others : 0)) * (this.detail.markup / 100) //multiply to 10%
      );
      this.detail.SubTotal = this.$root.formatNumberCommaRound(this.$root.formatNumber(this.detail.Gasoline ? this.detail.Gasoline : 0) + this.$root.formatNumber(this.detail.Communication ? this.detail.Communication : 0) + this.$root.formatNumber(this.detail.RentalMaintenance ? this.detail.RentalMaintenance : 0) + this.$root.formatNumber(this.detail.Others ? this.detail.Others : 0) + this.$root.formatNumber(this.detail.AdminFee ? this.detail.AdminFee : 0));
    },
    deleteAllowanceDtlButton: function deleteAllowanceDtlButton() {
      var _this10 = this;

      if (!this.detail.ADID) {
        return toast.fire({
          icon: "warning",
          title: "Please select Allowance Detail to continue."
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
          _this10.$Progress.start();

          axios["delete"]("api/allowanceDtl/".concat(_this10.detail.ADID)).then(function (response) {
            if (response.data.success) {
              _this10.clearDetail();

              _this10.getAllowanceDetail();

              swal.fire("Deleted!", response.data.message, "success");

              _this10.getTotalAmount();
            } else {
              swal.fire("Warning!", response.data.message, "warning");
            }

            _this10.$Progress.finish();
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          swal.fire("Information!", "Deletion is cancelled.", "warning");
        }
      });
    },
    clearDetail: function clearDetail() {
      this.detail = _defineProperty({
        ADID: "",
        hdr_idLink: "",
        EmpID: "",
        Chapa: "",
        FName: "",
        MName: "",
        LName: "",
        ExtName: "",
        manDays: "",
        GL: "",
        CostCenter: "",
        Gasoline: "0.00",
        Communication: "0.00",
        RentalMaintenance: "0.00",
        Others: "0.00",
        markup: 0,
        AdminFee: "0.00",
        SubTotal: "0.00"
      }, "SubTotal", "0.00");
      this.getMarkup();
      this.multiplierGas = "None";
      this.multiplierComm = "None";
      this.multiplierRental = "None";
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this11 = this;

      return this.detailList.filter(function (item) {
        return _this11.search.toLowerCase().split(" ").every(function (v) {
          return item.Chapa.toString().toLowerCase().includes(v) || item.FullName.toString().toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: [],
      search: "",
      type: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchAllowanceHeader", function (data) {
      _this.type = data;

      _this.getAllowanceHeaderModal();

      $("#SearchAllowanceHeader").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchAllowanceHeader").modal("hide");
    },
    getAllowanceHeaderModal: function getAllowanceHeaderModal() {
      var _this2 = this;

      if (this.type == "soa") {
        axios.get("api/allowance", {
          params: {
            SOAOnly: true
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        axios.get("api/allowance", {
          params: {
            header: true
          }
        }).then(function (response) {
          _this2.rows = response.data;
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.rows.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.Period.toLowerCase().includes(v) || item.Location.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: [],
      search: "",
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchEmployee", function () {
      _this.getData();

      $("#SearchEmployee").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchEmployee").modal("hide");
    },
    getData: function getData() {
      var _this2 = this;

      this.loading = true;
      axios.get("api/employeeList").then(function (response) {
        if (response.data) {
          _this2.rows = response.data;
        }

        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.rows.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.Chapa.toString().toLowerCase().includes(v) || item.LName.toString().toLowerCase().includes(v) || item.FName.toString().toLowerCase().includes(v) || item.MName.toString().toLowerCase().includes(v) || item.ExtName.toString().toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rows: [],
      search: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchPayStation", function () {
      _this.getPaystation();

      $("#SearchPayStation").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchPayStation").modal("hide");
    },
    getPaystation: function getPaystation() {
      var _this2 = this;

      axios.get("api/paystationList").then(function (response) {
        _this2.rows = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.rows.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.PayStation.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js& ***!
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
      search: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    Fire.$on("searchPeriod", function () {
      _this.getPeriod();

      $("#SearchPeriod").modal("show");
    });
  },
  methods: {
    rowClick: function rowClick(row) {
      this.$emit("rowClick", row);
      $("#SearchPeriod").modal("hide");
    },
    getPeriod: function getPeriod() {
      var _this2 = this;

      axios.get("api/periodList").then(function (response) {
        response.data.forEach(function (item) {
          var semiMonth = new Date(Date.parse(item.xMonth + "1, 2020")).getMonth() + 1;
          var month = semiMonth.toString().padStart(2, "0");
          item.code = item.xYear + month + "-" + item.xPhase;
        });
        _this2.rows = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {},
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      return this.rows.filter(function (item) {
        return _this3.search.toLowerCase().split(" ").every(function (v) {
          return item.xMonth.toString().toLowerCase().includes(v) || item.xYear.toString().toLowerCase().includes(v) || item.xPhase.toString().toLowerCase().includes(v) || item.code.toString().toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede& ***!
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
    { staticClass: "container dave-template" },
    [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Control#")]),
                    _vm._v(" "),
                    _c(
                      "b-input-group",
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.header.AHID,
                              expression: "header.AHID"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "control_no",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.header.AHID },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.header, "AHID", $event.target.value)
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
                                    return _vm.searchAllowanceHeaderButton()
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
                                  variant: "outline-success",
                                  size: "sm"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.updateAllowanceHeaderButton()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-edit",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  variant: "outline-danger",
                                  size: "sm"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteAllowanceHeaderButton()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-trash",
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
              _c("div", { staticClass: "col-md-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Period")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.header.Period,
                        expression: "header.Period"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "Period",
                      placeholder: "",
                      disabled: ""
                    },
                    domProps: { value: _vm.header.Period },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.header, "Period", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Location")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.header.Location,
                        expression: "header.Location"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "Location",
                      placeholder: "",
                      disabled: ""
                    },
                    domProps: { value: _vm.header.Location },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.header, "Location", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 text-right" }, [
                _c("label", [_vm._v(" ")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { bold: "" },
                      on: { click: _vm.newModal }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus fa fw" }),
                      _vm._v(
                        "\n                                New Allowance Header\n                            "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 table-height" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped dave-table" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "dave-tbody" },
                      [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !this.dataInDetail,
                                expression: "!this.dataInDetail"
                              }
                            ],
                            staticClass: "dave-tr"
                          },
                          [_vm._m(2)]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.filteredBlogs, function(item) {
                          return _c(
                            "tr",
                            {
                              key: item.ADID,
                              on: {
                                click: function($event) {
                                  return _vm.rowClick(item)
                                }
                              }
                            },
                            [
                              _c("td", { attrs: { bold: "" } }, [
                                _vm._v(_vm._s(item.Chapa))
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { width: "20%" } }, [
                                _vm._v(_vm._s(item.FullName))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(item.Gasoline)
                                    ) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(item.Communication)
                                    ) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(
                                        item.RentalMaintenance
                                      )
                                    ) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(item.Others)
                                    ) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(item.AdminFee)
                                    ) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      _vm._f("formatNumber")(item.SubTotal)
                                    ) +
                                    "\n                                    "
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 text-right",
                  staticStyle: {
                    "border-bottom": "2px solid black",
                    "font-size": "120%",
                    color: "blue"
                  }
                },
                [
                  _c("span", { attrs: { bold: "" } }, [
                    _vm._v(_vm._s(_vm.TotalAmount))
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.saveDetail()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-2" },
                    [
                      _c("label", [_vm._v("EmpID")]),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.detail.EmpID,
                                expression: "detail.EmpID"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "EmpID",
                              placeholder: "",
                              disabled: ""
                            },
                            domProps: { value: _vm.detail.EmpID },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.detail,
                                  "EmpID",
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
                                      return _vm.searchEmployeeButton()
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
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Chapa")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.Chapa,
                          expression: "detail.Chapa"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "Chapa",
                        placeholder: "",
                        disabled: ""
                      },
                      domProps: { value: _vm.detail.Chapa },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "Chapa", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-7" },
                    [
                      _c("label", [_vm._v("Fullname")]),
                      _vm._v(" "),
                      _c("b-input-group", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.FName,
                              expression: "detail.FName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "FName",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.detail.FName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.detail, "FName", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.MName,
                              expression: "detail.MName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "MName",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.detail.MName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.detail, "MName", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.LName,
                              expression: "detail.LName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "LName",
                            placeholder: "",
                            disabled: ""
                          },
                          domProps: { value: _vm.detail.LName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.detail, "LName", $event.target.value)
                            }
                          }
                        })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-1" }, [
                    _c("label", [_vm._v("ExtName")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.ExtName,
                          expression: "detail.ExtName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "ExtName",
                        placeholder: "",
                        disabled: ""
                      },
                      domProps: { value: _vm.detail.ExtName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "ExtName", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Man Days")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.manDays,
                          expression: "detail.manDays"
                        }
                      ],
                      staticClass: "form-control text-center",
                      attrs: { type: "text", name: "manDays", placeholder: "" },
                      domProps: { value: _vm.detail.manDays },
                      on: {
                        keyup: _vm.changeManDays,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "manDays", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("GL")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.GL,
                          expression: "detail.GL"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "GL",
                        placeholder: "",
                        list: "gl"
                      },
                      domProps: { value: _vm.detail.GL },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "GL", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "datalist",
                      { attrs: { id: "gl" } },
                      _vm._l(_vm.GLList, function(item) {
                        return _c("option", { key: item.id }, [
                          _vm._v(_vm._s(item.GL))
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Cost Center")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.CostCenter,
                          expression: "detail.CostCenter"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "CostCenter",
                        placeholder: "",
                        list: "costcenter"
                      },
                      domProps: { value: _vm.detail.CostCenter },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detail,
                            "CostCenter",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "datalist",
                      { attrs: { id: "costcenter" } },
                      _vm._l(_vm.CCList, function(item) {
                        return _c("option", { key: item.id }, [
                          _vm._v(_vm._s(item.Costcenter))
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [
                      _vm._v("Gasoline (x" + _vm._s(_vm.multiplierGas) + ")")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.Gasoline,
                          expression: "detail.Gasoline"
                        }
                      ],
                      staticClass: "form-control text-danger",
                      attrs: {
                        type: "text",
                        name: "Gasoline",
                        placeholder: "",
                        "text-right": ""
                      },
                      domProps: { value: _vm.detail.Gasoline },
                      on: {
                        keyup: _vm.autoCompute,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "Gasoline", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [
                      _vm._v("Comm (x" + _vm._s(_vm.multiplierComm) + ")")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.Communication,
                          expression: "detail.Communication"
                        }
                      ],
                      staticClass: "form-control text-danger",
                      attrs: {
                        type: "text",
                        name: "Communication",
                        placeholder: "",
                        "text-right": ""
                      },
                      domProps: { value: _vm.detail.Communication },
                      on: {
                        keyup: _vm.autoCompute,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detail,
                            "Communication",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [
                      _vm._v("Rental (x" + _vm._s(_vm.multiplierRental) + ")")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.RentalMaintenance,
                          expression: "detail.RentalMaintenance"
                        }
                      ],
                      staticClass: "form-control text-danger",
                      attrs: {
                        type: "text",
                        name: "RentalMaintenance",
                        placeholder: "",
                        "text-right": ""
                      },
                      domProps: { value: _vm.detail.RentalMaintenance },
                      on: {
                        keyup: _vm.autoCompute,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detail,
                            "RentalMaintenance",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Others")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.Others,
                          expression: "detail.Others"
                        }
                      ],
                      staticClass: "form-control text-danger",
                      attrs: {
                        type: "text",
                        name: "Others",
                        placeholder: "",
                        "text-right": ""
                      },
                      domProps: { value: _vm.detail.Others },
                      on: {
                        keyup: _vm.autoCompute,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "Others", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Markup")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.markup,
                          expression: "detail.markup"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "markup",
                        placeholder: "",
                        "text-right": "",
                        bold: ""
                      },
                      domProps: { value: _vm.detail.markup },
                      on: {
                        keyup: _vm.autoCompute,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "markup", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("Admin Fee")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.AdminFee,
                          expression: "detail.AdminFee"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "AdminFee",
                        placeholder: "",
                        disabled: "",
                        "text-right": "",
                        bold: ""
                      },
                      domProps: { value: _vm.detail.AdminFee },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "AdminFee", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("label", [_vm._v("SubTotal")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.SubTotal,
                          expression: "detail.SubTotal"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "SubTotal",
                        placeholder: "",
                        disabled: "",
                        "text-right": "",
                        bold: ""
                      },
                      domProps: { value: _vm.detail.SubTotal },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.detail, "SubTotal", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 text-right" }, [
                    _c("label", [_vm._v(" ")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button", bold: "" },
                          on: {
                            click: function($event) {
                              return _vm.clearDetail()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-eraser",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                    CLEAR\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button", bold: "" },
                          on: {
                            click: function($event) {
                              return _vm.deleteAllowanceDtlButton()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-trash",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n                                    DELETE\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(4)
                    ])
                  ])
                ])
              ]
            )
          ]),
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
              staticClass: "modal-dialog modal-dialog-centered modal-md",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header-cus" }, [
                  _c("div", { staticClass: "row container-fluid" }, [
                    _c("div", { staticClass: "col-md-11" }, [
                      _c("h5", [
                        _c(
                          "b",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !this.updateMeHeader,
                                expression: "!this.updateMeHeader"
                              }
                            ]
                          },
                          [_vm._v("Create Allowance Header")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: this.updateMeHeader,
                                expression: "this.updateMeHeader"
                              }
                            ]
                          },
                          [_vm._v("Update Allowance Header")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveHeader()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body-cus" }, [
                      _c("div", { staticClass: "row container-fluid" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Period")]),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formHeader.Period,
                                        expression: "formHeader.Period"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "Location",
                                      placeholder: "",
                                      required: "",
                                      disabled: ""
                                    },
                                    domProps: { value: _vm.formHeader.Period },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formHeader,
                                          "Period",
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
                                              return _vm.searchPeriodButton()
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
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", [_vm._v("Location")]),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formHeader.Location,
                                        expression: "formHeader.Location"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "Location",
                                      placeholder: "",
                                      required: "",
                                      disabled: ""
                                    },
                                    domProps: {
                                      value: _vm.formHeader.Location
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formHeader,
                                          "Location",
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
                                              return _vm.searchPayStationButton()
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
                        _vm._m(6)
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("search-period", {
        on: {
          rowClick: function($event) {
            return _vm.periodClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-paystation", {
        on: {
          rowClick: function($event) {
            return _vm.locationClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-allowanceHeader", {
        on: {
          rowClick: function($event) {
            return _vm.allowanceHeaderClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-allowanceEmployee", {
        on: {
          rowClick: function($event) {
            return _vm.employeeClose($event)
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _c("b", [_vm._v("ALLOWANCE DETAIL ENTRY")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "dave-thead" }, [
      _c("tr", [
        _c("th", [_vm._v("Chapa")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Fullname")]),
        _vm._v(" "),
        _c("th", [_vm._v("Gasoline")]),
        _vm._v(" "),
        _c("th", [_vm._v("Comm")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rent&Maint")]),
        _vm._v(" "),
        _c("th", [_vm._v("Others")]),
        _vm._v(" "),
        _c("th", [_vm._v("Admin Fee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sub Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "8" } }, [
      _c("i", [_vm._v("No Data Found...")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 offset-8 text-right" }, [
      _c("b", { attrs: { "text-right": "" } }, [_vm._v("Total:")])
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
          "\n                                    SAVE\n                                "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-1" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-right" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit", bold: "" } },
        [
          _vm._v(
            "\n                                    SAVE\n                                "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade dave-template",
      attrs: {
        id: "SearchAllowanceHeader",
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
            _vm._m(0),
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          { staticClass: "dave-tbody modal-tbody" },
                          _vm._l(_vm.filteredBlogs, function(item) {
                            return _c(
                              "tr",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.rowClick(item)
                                  }
                                }
                              },
                              [
                                _c("td", { attrs: { width: "20%" } }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(item.Period) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.Location))]),
                                _vm._v(" "),
                                _c("td", { attrs: { width: "25%" } }, [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(
                                        _vm._f("formatDate")(item.date_created)
                                      ) +
                                      "\n                                        "
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [_c("b", [_vm._v("Allowance Header List")])])
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
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Period")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "25%" } }, [_vm._v("Date Created")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e& ***!
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
    {
      staticClass: "modal fade dave-template",
      attrs: {
        id: "SearchEmployee",
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
          staticClass: "modal-dialog modal-dialog-centered modal-lg",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          { staticClass: "dave-tbody modal-tbody" },
                          [
                            _c(
                              "tr",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: this.loading,
                                    expression: "this.loading"
                                  }
                                ]
                              },
                              [_vm._m(2)]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.filteredBlogs, function(item) {
                              return _c(
                                "tr",
                                {
                                  key: item.EmpID,
                                  on: {
                                    click: function($event) {
                                      return _vm.rowClick(item)
                                    }
                                  }
                                },
                                [
                                  _c("td", { attrs: { width: "10%" } }, [
                                    _vm._v(_vm._s(item.Chapa))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.LName))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.FName))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.MName))]),
                                  _vm._v(" "),
                                  _c("td", { attrs: { width: "10%" } }, [
                                    _vm._v(_vm._s(item.ExtName))
                                  ])
                                ]
                              )
                            })
                          ],
                          2
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [_c("b", [_vm._v("Employee List")])])
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
        _c("th", { attrs: { width: "10%" } }, [_vm._v("ChapaID")]),
        _vm._v(" "),
        _c("th", [_vm._v("LName")]),
        _vm._v(" "),
        _c("th", [_vm._v("FName")]),
        _vm._v(" "),
        _c("th", [_vm._v("MName")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("ExtName")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("i", [_vm._v("Loading...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade dave-template",
      attrs: {
        id: "SearchPayStation",
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
            _vm._m(0),
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
                        placeholder: "Search Pay Station here..."
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          { staticClass: "dave-tbody modal-tbody" },
                          _vm._l(_vm.filteredBlogs, function(item) {
                            return _c(
                              "tr",
                              {
                                key: item.PSID,
                                on: {
                                  click: function($event) {
                                    return _vm.rowClick(item)
                                  }
                                }
                              },
                              [_c("td", [_vm._v(_vm._s(item.PayStation))])]
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [_c("b", [_vm._v("Pay Station List")])])
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
      _c("tr", [_c("th", [_vm._v("PayStation")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade dave-template",
      attrs: {
        id: "SearchPeriod",
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
            _vm._m(0),
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          { staticClass: "dave-tbody modal-tbody" },
                          _vm._l(_vm.filteredBlogs, function(item) {
                            return _c(
                              "tr",
                              {
                                key: item.PPID,
                                on: {
                                  click: function($event) {
                                    return _vm.rowClick(item)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(item.xMonth))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.xYear))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.xPhase))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.code))])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header-cus" }, [
      _c("div", { staticClass: "row container-fluid" }, [
        _c("div", { staticClass: "col-md-11" }, [
          _c("h5", [_c("b", [_vm._v("Period List")])])
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
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", [_vm._v("Year")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phase")]),
        _vm._v(" "),
        _c("th", [_vm._v("Code")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/allowance/EntryDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/allowance/EntryDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntryDetail.vue?vue&type=template&id=69077ede& */ "./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede&");
/* harmony import */ var _EntryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntryDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/allowance/EntryDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntryDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/EntryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntryDetail.vue?vue&type=template&id=69077ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/allowance/EntryDetail.vue?vue&type=template&id=69077ede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntryDetail_vue_vue_type_template_id_69077ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c& */ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c&");
/* harmony import */ var _SearchAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchAllowanceHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchAllowanceHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAllowanceHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchAllowanceHeader.vue?vue&type=template&id=5395bd3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAllowanceHeader_vue_vue_type_template_id_5395bd3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchEmployee.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchEmployee.vue?vue&type=template&id=3e53ed3e& */ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e&");
/* harmony import */ var _SearchEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchEmployee.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchEmployee.vue?vue&type=template&id=3e53ed3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchEmployee.vue?vue&type=template&id=3e53ed3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmployee_vue_vue_type_template_id_3e53ed3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPayStation.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPayStation.vue?vue&type=template&id=7bef945f& */ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f&");
/* harmony import */ var _SearchPayStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPayStation.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchPayStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchPayStation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPayStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPayStation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPayStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPayStation.vue?vue&type=template&id=7bef945f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPayStation.vue?vue&type=template&id=7bef945f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPayStation_vue_vue_type_template_id_7bef945f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPeriod.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPeriod.vue?vue&type=template&id=0ddbe1b4& */ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4&");
/* harmony import */ var _SearchPeriod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPeriod.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchPeriod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchAllowance/SearchPeriod.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPeriod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPeriod.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPeriod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPeriod.vue?vue&type=template&id=0ddbe1b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchAllowance/SearchPeriod.vue?vue&type=template&id=0ddbe1b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPeriod_vue_vue_type_template_id_0ddbe1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);