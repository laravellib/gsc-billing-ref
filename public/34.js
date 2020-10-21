(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_commonMasterList_Signatory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/commonMasterList/Signatory.vue */ "./resources/js/components/search/commonMasterList/Signatory.vue");
/* harmony import */ var _search_dmpi_sar_SearchDmpiSar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/dmpi/sar/SearchDmpiSar.vue */ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AgGridVue: AgGridVue,
    'search-signatory': _search_commonMasterList_Signatory_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'search-dmpi-sar': _search_dmpi_sar_SearchDmpiSar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      general: new Form({
        batchLocation: {},
        SarActivity: {},
        glSar: {},
        whichSignatory: "",
        signatories: "",
        batch: {},
        isBatchLoading: false,
        soaNumberCorrect: 0,
        //0-loading, 1=error, 2=correct
        header: {},
        soaComponentKey: "",
        units: {},
        checked: false,
        dayTypeData: [{
          id: 1,
          day: 'REGULAR DAY'
        }, {
          id: 3,
          day: 'SUNDAY/ REST DAY'
        }, {
          id: 4,
          day: 'SPECIAL HOLIDAY'
        }, {
          id: 5,
          day: 'SPECIAL HOLIDAY ON REST DAY'
        }, {
          id: 6,
          day: 'REGULAR HOLIDAY'
        }, {
          id: 6,
          day: 'REGULAR HOLIDAY ON REST DAY'
        }],
        filter: null,
        selectedData: {},
        IdToDelete: []
      }),
      form: new Form({
        refID: "",
        locationID: "",
        toPaymentOf: "",
        periodCoveredFrom: "",
        periodCoveredTo: "",
        soaDate: "",
        controlNo: "",
        preparedBy: "",
        verifiedBy: "",
        notedBy: "",
        approvedBy: "",
        preparedByPos: "",
        verifiedByPos: "",
        notedByPos: "",
        approvedByPos: "",
        test: "",
        soaNumber: "",
        sarData: {},
        isPayrollBatched: false,
        status: '-'
      }),
      soaForm: new Form({
        hdrid: "",
        //form.refID
        refID: "",
        datePerformed: "",
        serviceNumber: "",
        activityID: "",
        poNumber: "",
        glAccount: "",
        costCenter: "",
        qty: "",
        unit: "",
        rate: "",
        rateID: "",
        amount: "",
        entrySheetNumber: "",
        details: {},
        glID: "",
        batchDaytype: "",
        batchDaytypeID: "",
        month: "",
        year: "",
        period: "",
        batchNumber: "",
        batchKey: "",
        batchInfo: {},
        filter: null,
        activity: "",
        gl: ""
      }),
      reactivateForm: new Form({
        reasonofreactivation: ""
      })
    };
  },
  mounted: function mounted() {
    this.getBatchLocation();
    this.getSarRateActivity();
    this.getGl();
    this.getSignatories();
    this.getUnitsFromSarRate();
  },
  methods: {
    onChange: function onChange(e) {
      var _this = this;

      this.general.IdToDelete = [];
      this.form.applied_amount = 0;
      this.form.filter = [];
      var selectedRows = this.gridApi.getSelectedNodes();
      console.log('lenght', selectedRows.length);
      this.general.selectedData = selectedRows.map(function (node) {
        return node.data;
      });
      var selectedDataStringPresentation = this.general.selectedData.map(function (node) {
        return _this.general.IdToDelete.push(node.id);
      });
      var push = this.general.selectedData.map(function (node) {
        return _this.form.filter.push(node);
      });
      console.log(this.general.IdToDelete);
    },
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    getBatchLocation: function getBatchLocation() {
      var _this2 = this;

      axios.get("api/dmpiSarGetLocation/").then(function (_ref) {
        var data = _ref.data;
        _this2.general.batchLocation = data;
      });
    },
    getSarRateActivity: function getSarRateActivity() {
      var _this3 = this;

      axios.get("api/dmpiSarGetActivity/").then(function (_ref2) {
        var data = _ref2.data;
        _this3.general.SarActivity = data;
      });
    },
    getGl: function getGl() {
      var _this4 = this;

      axios.post("api/getSelectedGl", {
        type: 'SAR'
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this4.general.glSar = data;
      });
    },
    sarHeaderEntry: function sarHeaderEntry() {
      $('#sarEntry').modal('show');
    },
    reactivate_detail: function reactivate_detail() {
      $('#reactivate_details').modal('show');
    },
    searchSignatory: function searchSignatory(wS) {
      $('#searchSignatory').modal('show');
      this.general.whichSignatory = wS;
    },
    setSign: function setSign(value) {
      if (this.general.whichSignatory == 'prepared') {
        this.form.preparedBy = value.name;
        this.form.preparedByPos = value.position;
      } else if (this.general.whichSignatory == 'verified') {
        this.form.verifiedBy = value.name;
        this.form.verifiedByPos = value.position;
      } else if (this.general.whichSignatory == 'noted') {
        this.form.notedBy = value.name;
        this.form.notedByPos = value.position;
      } else if (this.general.whichSignatory == 'approved') {
        this.form.approvedBy = value.name;
        this.form.approvedByPos = value.position;
      }
    },
    saveNewHeader: function saveNewHeader() {
      var _this5 = this;

      this.$Progress.start();

      if (this.general.soaNumberCorrect == 2) {
        this.form.post("api/dmpiSar").then(function (_ref4) {
          var data = _ref4.data;
          toast.fire({
            icon: 'success',
            title: 'data successfully saved.'
          });

          _this5.getHeaderDetail(data);

          _this5.$Progress.finish();

          $('#sarEntry').modal('hide');
        })["catch"](function (_ref5) {
          var err = _ref5.err;
          toast.fire({
            icon: 'error',
            title: 'Something went wrong'
          });

          _this5.$Progress.fail();

          console.log(err);
        });
      } else {
        toast.fire({
          icon: 'error',
          title: 'Check SOA Number'
        });
        this.$Progress.fail();
      }
    },
    updateHeader: function updateHeader() {
      var _this6 = this;

      this.$Progress.start();
      this.form.post("api/updateHeader").then(function (_ref6) {
        var data = _ref6.data;

        _this6.$Progress.finish();

        toast.fire({
          icon: 'success',
          title: 'data sucessfully updated.'
        });
      })["catch"](function (_ref7) {
        var error = _ref7.error;
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this6.$Progress.fail();

        console.log(error);
      });
    },
    saveNewDetail: function saveNewDetail() {
      var _this7 = this;

      this.$Progress.start();
      this.soaForm.hdrid = this.form.refID;
      this.soaForm.post("api/saveDetail").then(function (_ref8) {
        var data = _ref8.data;
        toast.fire({
          icon: 'success',
          title: 'data successfully saved.'
        });
        console.log('success', data);
        _this7.soaForm.refID = data;

        _this7.$Progress.finish();

        _this7.getSarDetails(_this7.form.refID);

        $('#sardetail').modal('hide');
      })["catch"](function (_ref9) {
        var err = _ref9.err;
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this7.$Progress.fail();

        console.log(err);
      });
    },
    updateDetail: function updateDetail() {
      var _this8 = this;

      console.log('dtlid', this.soaForm.refID);
      this.$Progress.start();
      this.soaForm.hdrid = this.form.refID;
      this.soaForm.put("api/dmpiSar/" + this.soaForm.refID).then(function (_ref10) {
        var data = _ref10.data;
        toast.fire({
          icon: 'success',
          title: 'data successfully saved.'
        });
        _this8.soaForm.refID = data;

        _this8.$Progress.finish();

        $('#sardetail').modal('hide');

        _this8.getSarDetails(_this8.form.refID);
      })["catch"](function (_ref11) {
        var err = _ref11.err;
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this8.$Progress.fail();

        console.log(err);
      });
    },
    getSignatories: function getSignatories() {
      var _this9 = this;

      axios({
        method: 'GET',
        url: '/api/billingsignatoryGetForSearch'
      }).then(function (_ref12) {
        var data = _ref12.data;
        _this9.general.signatories = data;
      });
    },
    getSoas: function getSoas() {
      var _this10 = this;

      this.general.isBatchLoading = true;
      axios.get('/api/dmpidargetbatch', {
        params: {
          month: this.soaForm.month,
          year: this.soaForm.year,
          period: this.soaForm.period,
          isVolume: 1
        }
      }).then(function (_ref13) {
        var data = _ref13.data;
        _this10.general.batch = data;
        _this10.general.isBatchLoading = false;
      })["catch"](function (err) {
        _this10.general.isBatchLoading = true;
      });
    },
    getBatchInfo: function getBatchInfo() {
      var _this11 = this;

      this.general.isBatchLoading = true; // this.form.soaNumber = ""

      axios.get('/api/getBatchInfo', {
        params: {
          id: this.soaForm.batchKey
        }
      }).then(function (_ref14) {
        var data = _ref14.data;
        _this11.soaForm.batchInfo = data;
        _this11.soaForm.batchNumber = data[0]['BNo'];
        _this11.soaForm.batchDaytype = _this11.soaForm.batchInfo[0]['DayType'];
        _this11.soaForm.batchDaytypeID = _this11.soaForm.batchInfo[0]['DayTypeID_Link']; // this.form.soaNumber = data[0]['Code_Location'] + data[0]['Code_Date'] + data[0]['Code_Series']

        _this11.general.isBatchLoading = false; // this.soaNumberCheck(); 
      })["catch"](function (err) {
        _this11.general.isBatchLoading = true;
        console.log(err);
      });
    },
    getHeaderDetail: function getHeaderDetail(id) {
      var _this12 = this;

      this.form.refID = id;
      axios.post('/api/getHeaderDetail', {
        id: id
      }).then(function (_ref15) {
        var data = _ref15.data;
        console.log(data);
        _this12.general.header = data['hdr'];
        _this12.form.details = data['dtl'];
      })["catch"](function (_ref16) {
        var error = _ref16.error;
        console.log(error);
      });
    },
    soaNumberCheck: function soaNumberCheck() {
      var _this13 = this;

      if (this.form.soaNumber.trim() != "") {
        axios.get('/api/checkifSoaExists', {
          params: {
            soaNumber: this.form.soaNumber,
            id: this.form.refID,
            type: "SAR"
          }
        }).then(function (_ref17) {
          var data = _ref17.data;

          if (data == true) {
            _this13.general.soaNumberCorrect = 1;
          } else {
            _this13.general.soaNumberCorrect = 2;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.general.soaNumberCorrect = 0;
      }
    },
    sourceChangedPrepared: _.debounce(function (e) {
      var _this14 = this;

      axios.get('/api/getPosition', {
        params: {
          name: this.form.preparedBy
        }
      }).then(function (_ref18) {
        var data = _ref18.data;
        _this14.form.preparedByPos = data[0]['position'];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 1000),
    sourceChangedVerified: _.debounce(function (e) {
      var _this15 = this;

      axios.get('/api/getPosition', {
        params: {
          name: this.form.verifiedBy
        }
      }).then(function (_ref19) {
        var data = _ref19.data;
        _this15.form.verifiedByPos = data[0]['position'];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 1000),
    sourceChangedNoted: _.debounce(function (e) {
      var _this16 = this;

      axios.get('/api/getPosition', {
        params: {
          name: this.form.notedBy
        }
      }).then(function (_ref20) {
        var data = _ref20.data;
        _this16.form.notedByPos = data[0]['position'];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 1000),
    sourceChangedApproved: _.debounce(function (e) {
      var _this17 = this;

      axios.get('/api/getPosition', {
        params: {
          name: this.form.approvedBy
        }
      }).then(function (_ref21) {
        var data = _ref21.data;
        _this17.form.approvedByPos = data[0]['position'];
      })["catch"](function (err) {
        console.log(err);
      });
    }, 1000),
    getSarRate: function getSarRate() {
      var _this18 = this;

      this.soaForm.post('api/getRateSar').then(function (_ref22) {
        var data = _ref22.data;
        _this18.soaForm.rate = data[0]['rate'];
        _this18.soaForm.rateID = data[0]['VRALID'];

        if (_this18.soaForm.qty != '') {
          _this18.soaForm.amount = (_this18.soaForm.rate * _this18.soaForm.qty).toFixed(3);
        }
      })["catch"](function (_ref23) {
        var error = _ref23.error;
        console.log(error);
      });
    },
    setSoa: function setSoa(value) {
      console.log(value);
      this.form.refID = value.id;
      this.provideDataForSelectedSoa(value);
      this.general.soaComponentKey += 1;
    },
    provideDataForSelectedSoa: function provideDataForSelectedSoa(hdr) {
      // set the header
      this.form.locationID = hdr.locationID;
      this.form.periodCoveredFrom = hdr.periodCoveredFrom;
      this.form.periodCoveredTo = hdr.periodCoveredTo;
      this.form.soaDate = hdr.soaDate;
      this.form.controlNo = hdr.controlNo;
      this.form.preparedBy = hdr.preparedBy;
      this.form.verifiedBy = hdr.verifiedBy;
      this.form.notedBy = hdr.notedBy;
      this.form.approvedBy = hdr.approvedBy;
      this.form.preparedByPos = hdr.approvedByPosition;
      this.form.verifiedByPos = hdr.verifiedByPosition;
      this.form.notedByPos = hdr.notedByPosition;
      this.form.approvedByPos = hdr.approvedByPosition;
      this.form.soaNumber = hdr.soaNumber;
      this.form.status = hdr.status; // get sar details 

      this.getSarDetails(hdr.id);
    },
    getSarDetails: function getSarDetails(id) {
      var _this19 = this;

      console.log('hdr', id);
      axios.post("api/getSarDtl/", {
        refID: id
      }).then(function (_ref24) {
        var data = _ref24.data;
        _this19.general.filter = data;
      });
    },
    getUnitsFromSarRate: function getUnitsFromSarRate() {
      var _this20 = this;

      axios.get('api/getUnitsFromSarRate').then(function (_ref25) {
        var data = _ref25.data;
        _this20.general.units = data;
        console.log(data);
      })["catch"](function (_ref26) {
        var error = _ref26.error;
        console.log(error);
      });
    },
    getLocationName: function getLocationName(loc_ID) {
      var _this21 = this;

      axios.post('api/getLocationName', {
        loc: loc_ID
      }).then(function (_ref27) {
        var data = _ref27.data;
        _this21.form.location = data;
      })["catch"](function (_ref28) {
        var error = _ref28.error;
        console.log(error);
      });
    },
    searchDmpiSar: function searchDmpiSar() {
      $('#searchDmpiSar').modal('show');
    },
    deleteSarHeader: function deleteSarHeader() {
      var _this22 = this;

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
          _this22.form["delete"]('api/billingsignatory/' + id).then(function () {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this22.getResults();
          })["catch"](function () {
            swal.fire('Failed!', 'Something went wrong.', 'error');
          });
        }
      });
    },
    checkUncheckBatch: function checkUncheckBatch() {
      // if (this.checked){
      //   if(this.form.batchInfo[0]['DayTypeID_Link']){
      //     this.soaForm.batchDaytypeID = this.form.batchInfo[0]['DayTypeID_Link']
      //   }
      // }
      this.getSarRate;
    },
    clearAll: function clearAll() {
      this.general.reset();
      this.soaForm.reset();
      this.form.reset();
      this.getBatchLocation();
      this.getSarRateActivity();
      this.getGl();
      this.getSignatories();
      this.getUnitsFromSarRate();
    },
    activityChange: function activityChange() {
      var _this23 = this;

      axios.post('api/getSelectedActivity', {
        id: this.soaForm.activityID
      }).then(function (_ref29) {
        var data = _ref29.data;
        _this23.soaForm.activity = data[0]['SubActivity'];
      })["catch"](function (_ref30) {
        var error = _ref30.error;
        console.log(error);
      });
      this.getSarRate;
    },
    sarDetailModal: function sarDetailModal(editOrDelete) {
      if (this.form.refID != "") {
        if (editOrDelete == "add") {
          $('#sardetail').modal('show');
          this.soaForm.reset();
          this.general.checked = false;
        } else if (editOrDelete == "edit") {
          console.log(this.general.selectedData[0]);
          this.soaForm.fill(this.general.selectedData[0]);
          this.soaForm.refID = this.general.selectedData[0].id;
          this.soaForm.hdrid = this.general.selectedData[0].hdr_id;
          this.soaForm.rateID = this.general.selectedData[0].rate_id;

          if (this.general.selectedData[0].batchID) {
            this.general.checked = true;
            this.soaForm.month = this.general.selectedData[0].pmy.substr(this.general.selectedData[0].pmy.length - 2);
            this.soaForm.year = this.general.selectedData[0].pmy.substring(0, 4);
            this.getSoas();
            this.soaForm.batchKey = this.general.selectedData[0].batchID;
            this.soaForm.batchNumber = this.general.selectedData[0].batchNo;
          } else {
            this.general.checked = false;
          } // pmy: (...)


          $('#sardetail').modal('show');
        }
      }
    },
    deleteSarDetail: function deleteSarDetail() {
      var _this24 = this;

      console.log('ids to delete', this.general.IdToDelete);
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
          axios.get('/api/deleteSarDetail', {
            params: {
              ids: _this24.general.IdToDelete
            }
          }).then(function (res) {
            swal.fire('Deleted!', 'Data has been deleted.', 'success');
            console.log('res', res);

            _this24.getSarDetails(_this24.form.refID);
          })["catch"](function () {
            swal.fire('Failed!', 'Something went wrong.', 'error');
          });
        }
      });
    },
    submit: function submit() {
      var _this25 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpiSarSubmit').then(function (_ref31) {
        var data = _ref31.data;
        _this25.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully submitted'
        });

        _this25.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this25.$Progress.fail();
      });
    },
    confirm: function confirm() {
      var _this26 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpiSarConfirm').then(function (_ref32) {
        var data = _ref32.data;
        _this26.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully confirmed'
        });

        _this26.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this26.$Progress.fail();
      });
    },
    transmit: function transmit() {
      var _this27 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpiSarTransmit').then(function (_ref33) {
        var data = _ref33.data;
        _this27.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully transmitted'
        });

        _this27.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this27.$Progress.fail();
      });
    },
    reactivate: function reactivate() {
      var _this28 = this;

      this.$Progress.start();
      this.reactivateForm.refID = this.form.refID;
      this.reactivateForm.post('/api/dmpiSarReactivate').then(function (_ref34) {
        var data = _ref34.data;
        _this28.form.status = data;
        toast.fire({
          icon: 'success',
          title: 'Successfully reactivated'
        });
        _this28.soaForm.refID = data;

        _this28.$Progress.finish();

        _this28.getSarDetails(_this28.form.refID);

        $('#reactivate_details').modal('hide');
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this28.$Progress.fail();
      });
    }
  },
  //method end
  created: function created() {
    // data grid 
    this.columnDefs = [{
      headerName: "Date Performed",
      field: "datePerformed",
      resizable: true,
      width: 170,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: "Service Number",
      field: "serviceNumber",
      resizable: true,
      width: 170
    }, {
      headerName: "Activity",
      field: "activity",
      resizable: true,
      width: 170
    }, {
      headerName: "PO Number",
      field: "poNumber",
      resizable: true,
      width: 170
    }, {
      headerName: "GL Account",
      field: "gl",
      resizable: true,
      width: 170
    }, {
      headerName: "Cost Center",
      field: "costCenter",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "Quantity",
      field: "qty",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "Unit",
      field: "unit",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      }
    }, {
      headerName: "Rate",
      field: "rate",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "Amount",
      field: "amount",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }, {
      headerName: "Entry sheet number",
      field: "entrySheetNumber",
      resizable: true,
      width: 170,
      cellStyle: {
        textAlign: "center"
      },
      valueFormatter: this.$root.currencyFormatter
    }];
    this.general.filter = []; // end data grid 

    var d = new Date();
    this.soaForm.month = d.getMonth();
    this.soaForm.year = d.getFullYear();
    var day = d.getDate();

    if (day < 16) {
      this.soaForm.period = 1;
    } else {
      this.soaForm.period = 2;
    }

    this.getSoas();
  },
  computed: {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: 5
      }, function (value, index) {
        return year + 2 - index;
      });
    },
    months: function months() {
      var month = 12;
      return Array.from({
        length: 12
      }, function (value, index) {
        return month - index;
      });
    },
    periods: function periods() {
      var period = 1;
      return Array.from({
        length: 2
      }, function (value, index) {
        return period + index;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searching: "",
      data: {},
      filter: {},
      datas: []
    };
  },
  methods: {
    loadMode: function loadMode() {
      var _this = this;

      axios.get("/api/billingsignatoryGetForSearch").then(function (_ref) {
        var data = _ref.data;
        _this.data = data;
        _this.filter = _this.data;
        console.log(_this.filter);
      });
    },
    search: function search(e) {
      this.filter = this.data.filter(function (item) {
        return item.name.match(e);
      });
    },
    onChange: function onChange(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.$emit("selectSign", dataItem);
      $("#searchSignatory").modal("hide");
    }
  },
  mounted: function mounted() {
    this.loadMode();
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchAll: false,
      soas: {},
      selectedSoa: {},
      searchSoaVar: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    getSoa: function getSoa() {
      var _this = this;

      axios({
        method: 'GET',
        url: '/api/dmpisarsearch'
      }).then(function (_ref) {
        var data = _ref.data;
        return _this.soas = data;
      });
      console.log(this.soas);
    },
    searchSoa: _.debounce(function () {
      Fire.$emit('searchSignStart');
    }, 500),
    setsoa: function setsoa(data) {
      this.selectedSoa = data;
      this.selectSoa();
      $('#searchDmpiSar').modal('hide'); // console.log(data)
    },
    selectSoa: function selectSoa(event) {
      this.$emit('selectSoa', this.selectedSoa);
      this.soas = {};
      this.selectedSoa = {};
    }
  },
  created: function created() {
    var _this2 = this;

    Fire.$on('searchSignStart', function () {
      axios.get('/api/dmpisarsearch', {
        params: {
          soa: _this2.searchSoaVar
        }
      }).then(function (data) {
        _this2.soas = data.data;
      })["catch"](function (err) {
        console.log(err.data);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026& ***!
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
      _c("div", { staticClass: "justify-content-center" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col col-3" },
                [
                  _c("label", [_vm._v("Search entry (Ref ID):")]),
                  _vm._v(" "),
                  _c(
                    "b-input-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-form-input", {
                        attrs: { disabled: "" },
                        model: {
                          value: _vm.form.refID,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "refID", $$v)
                          },
                          expression: "form.refID"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          !_vm.form.refID
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-success",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.searchDmpiSar()
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
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.refID
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-success",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.sarHeaderEntry()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-pen",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.form.refID
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-success",
                                    size: "sm"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.sarHeaderEntry()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-plus",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            : _vm._e()
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
              _c("div", { staticClass: "col-3" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("To Payment Of:")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.locationID,
                        expression: "form.locationID"
                      }
                    ],
                    staticClass: "form-control form-control-sm",
                    attrs: { disabled: "", required: true },
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
                        _vm.$set(
                          _vm.form,
                          "locationID",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.general.batchLocation, function(loc) {
                    return _c(
                      "option",
                      {
                        key: loc.LocationID,
                        domProps: { value: loc.LocationID }
                      },
                      [_vm._v(_vm._s(loc.Location))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("SOA Number")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.soaNumber,
                      expression: "form.soaNumber"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.soaNumber },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "soaNumber", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _vm.form.status == "active"
                  ? _c(
                      "h2",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "float-right",
                            attrs: { variant: "primary" }
                          },
                          [_vm._v(_vm._s(this.form.status))]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.status == "submitted"
                  ? _c(
                      "h2",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "float-right",
                            attrs: { variant: "success" }
                          },
                          [_vm._v(_vm._s(this.form.status))]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.status == "confirmed"
                  ? _c(
                      "h2",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "float-right",
                            attrs: { variant: "warning" }
                          },
                          [_vm._v(_vm._s(this.form.status))]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.status == "transmitted"
                  ? _c(
                      "h2",
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "float-right",
                            attrs: { variant: "danger" }
                          },
                          [_vm._v(_vm._s(this.form.status))]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
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
                      value: _vm.form.periodCoveredFrom,
                      expression: "form.periodCoveredFrom"
                    }
                  ],
                  staticClass: "form-control form-control-sm mb-2",
                  attrs: {
                    disabled: "",
                    type: "date",
                    placeholder: "Search Rental..."
                  },
                  domProps: { value: _vm.form.periodCoveredFrom },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "periodCoveredFrom",
                        $event.target.value
                      )
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
                      value: _vm.form.periodCoveredTo,
                      expression: "form.periodCoveredTo"
                    }
                  ],
                  staticClass: "form-control form-control-sm mb-2",
                  attrs: {
                    disabled: "",
                    type: "date",
                    placeholder: "Search Rental..."
                  },
                  domProps: { value: _vm.form.periodCoveredTo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "periodCoveredTo", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("SOA Date:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.soaDate,
                      expression: "form.soaDate"
                    }
                  ],
                  staticClass: "form-control form-control-sm mb-2",
                  attrs: {
                    disabled: "",
                    type: "date",
                    placeholder: "Search Rental..."
                  },
                  domProps: { value: _vm.form.soaDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "soaDate", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Control Number")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.controlNo,
                      expression: "form.controlNo"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.controlNo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "controlNo", $event.target.value)
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
                    attrs: { disabled: "", size: "sm", list: "preparedBy" },
                    model: {
                      value: _vm.form.preparedBy,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "preparedBy", $$v)
                      },
                      expression: "form.preparedBy"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "preparedBy" } },
                    _vm._l(_vm.general.signatories, function(signatory) {
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
                    attrs: { disabled: "", size: "sm", list: "verifiedBy" },
                    model: {
                      value: _vm.form.verifiedBy,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "verifiedBy", $$v)
                      },
                      expression: "form.verifiedBy"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "verifiedBy" } },
                    _vm._l(_vm.general.signatories, function(signatory) {
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
                  _c("strong", [_vm._v("Noted By:")]),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: { disabled: "", size: "sm", list: "notedBy" },
                    model: {
                      value: _vm.form.notedBy,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "notedBy", $$v)
                      },
                      expression: "form.notedBy"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "notedBy" } },
                    _vm._l(_vm.general.signatories, function(signatory) {
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
                    attrs: { disabled: "", size: "sm", list: "approvedBy" },
                    model: {
                      value: _vm.form.approvedBy,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "approvedBy", $$v)
                      },
                      expression: "form.approvedBy"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "approvedBy" } },
                    _vm._l(_vm.general.signatories, function(signatory) {
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
            _c("hr", { staticClass: "hr-1" }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "float-right",
                      attrs: {
                        type: "button",
                        disabled: _vm.form.refID == "",
                        variant: "success"
                      },
                      on: {
                        click: function($event) {
                          return _vm.sarDetailModal("add")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "far fa-plus-square" }, [
                        _vm._v(" Add new detail")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  this.general.selectedData.length == 1
                    ? _c(
                        "b-button",
                        {
                          staticClass: "float-right",
                          attrs: { type: "button", variant: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.sarDetailModal("edit")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-pen" }, [
                            _vm._v(" Edit detail")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.general.selectedData.length > 0
                    ? _c(
                        "b-button",
                        {
                          staticClass: "float-right",
                          attrs: { type: "button", variant: "danger" },
                          on: { click: _vm.deleteSarDetail }
                        },
                        [
                          _c("i", { staticClass: "fa fa-trash" }, [
                            _vm._v(" Delete selected")
                          ])
                        ]
                      )
                    : _vm._e()
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
                  _c("ag-grid-vue", {
                    staticClass: "ag-theme-balham",
                    staticStyle: { width: "100%", height: "200px" },
                    attrs: {
                      columnDefs: _vm.columnDefs,
                      rowData: _vm.general.filter,
                      rowSelection: "multiple"
                    },
                    on: {
                      "grid-ready": _vm.onGridReady,
                      selectionChanged: _vm.onChange
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-9" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { disabled: _vm.form.status != "active" },
                    on: {
                      click: function($event) {
                        return _vm.submit()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-save" }),
                    _vm._v("    Submit")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { disabled: _vm.form.status != "submitted" },
                    on: {
                      click: function($event) {
                        return _vm.confirm()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-save" }),
                    _vm._v("    Confirm")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { disabled: _vm.form.status != "confirmed" },
                    on: {
                      click: function($event) {
                        return _vm.transmit()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-save" }),
                    _vm._v("    Transmit")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    attrs: {
                      disabled:
                        _vm.form.status == "active" || _vm.form.status == "-"
                    },
                    on: {
                      click: function($event) {
                        return _vm.reactivate_detail()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-redo" }),
                    _vm._v("   Reactivate")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success float-right",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.clearAll()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-backspace" }),
                    _vm._v("    Clear")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row margin-top-10" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info btn-sm",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.printPdf()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v("   print pdf")
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal modal-overflow fade",
          attrs: {
            id: "sarEntry",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "addNewLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "row mt-3" }, [
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("RefID")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.id,
                              expression: "form.id"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { disabled: "", type: "text", name: "id" },
                          domProps: { value: _vm.form.id },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "id", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("To Payment Of:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.locationID,
                                expression: "form.locationID"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { required: true },
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
                                _vm.$set(
                                  _vm.form,
                                  "locationID",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.general.batchLocation, function(loc) {
                            return _c(
                              "option",
                              {
                                key: loc.LocationID,
                                domProps: { value: loc.LocationID }
                              },
                              [_vm._v(_vm._s(loc.Location))]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
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
                              value: _vm.form.periodCoveredFrom,
                              expression: "form.periodCoveredFrom"
                            }
                          ],
                          staticClass: "form-control form-control-sm mb-2",
                          class: {
                            "is-invalid": _vm.form.errors.has(
                              "periodCoveredFrom"
                            )
                          },
                          attrs: {
                            type: "date",
                            placeholder: "Search Rental..."
                          },
                          domProps: { value: _vm.form.periodCoveredFrom },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "periodCoveredFrom",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
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
                              value: _vm.form.periodCoveredTo,
                              expression: "form.periodCoveredTo"
                            }
                          ],
                          staticClass: "form-control form-control-sm mb-2",
                          class: {
                            "is-invalid": _vm.form.errors.has("periodCoveredTo")
                          },
                          attrs: {
                            type: "date",
                            placeholder: "Search Rental..."
                          },
                          domProps: { value: _vm.form.periodCoveredTo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "periodCoveredTo",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("SOA Date:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.soaDate,
                              expression: "form.soaDate"
                            }
                          ],
                          staticClass: "form-control form-control-sm mb-2",
                          class: {
                            "is-invalid": _vm.form.errors.has("soaDate")
                          },
                          attrs: {
                            type: "date",
                            placeholder: "Search Rental..."
                          },
                          domProps: { value: _vm.form.soaDate },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "soaDate", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Control Number")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.controlNo,
                              expression: "form.controlNo"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            "is-invalid": _vm.form.errors.has("controlNo")
                          },
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.controlNo },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "controlNo",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-3" },
                        [
                          _c("label", [_vm._v("SOA Number:")]),
                          _vm._v(" "),
                          _vm.general.soaNumberCorrect == 2
                            ? _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.general.soaNumberCorrect == 2,
                                    expression: "general.soaNumberCorrect==2"
                                  }
                                ],
                                staticClass: "fas fa-check green"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.general.soaNumberCorrect == 1
                            ? _c(
                                "b-badge",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.general.soaNumberCorrect == 1,
                                      expression: "general.soaNumberCorrect==1"
                                    }
                                  ],
                                  attrs: { pill: "", variant: "danger" }
                                },
                                [_vm._v("Soa # exists")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.soaNumber,
                                expression: "form.soaNumber"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.form.errors.has("soaNumber")
                            },
                            attrs: { required: "", type: "text" },
                            domProps: { value: _vm.form.soaNumber },
                            on: {
                              change: _vm.soaNumberCheck,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "soaNumber",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Prepared By:")]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            class: {
                              "is-invalid": _vm.form.errors.has("preparedBy")
                            },
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
                            class: {
                              "is-invalid": _vm.form.errors.has("preparedByPos")
                            },
                            attrs: { type: "text" },
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
                            _vm._l(_vm.general.signatories, function(
                              signatory
                            ) {
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
                            class: {
                              "is-invalid": _vm.form.errors.has("verifiedBy")
                            },
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
                            class: {
                              "is-invalid": _vm.form.errors.has("verifiedByPos")
                            },
                            attrs: { type: "text" },
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
                            _vm._l(_vm.general.signatories, function(
                              signatory
                            ) {
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
                            class: {
                              "is-invalid": _vm.form.errors.has("notedBy")
                            },
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
                            class: {
                              "is-invalid": _vm.form.errors.has("notedByPos")
                            },
                            attrs: { type: "text" },
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
                            _vm._l(_vm.general.signatories, function(
                              signatory
                            ) {
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
                            class: {
                              "is-invalid": _vm.form.errors.has("approvedBy")
                            },
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
                            class: {
                              "is-invalid": _vm.form.errors.has("approvedByPos")
                            },
                            attrs: { type: "text" },
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
                            _vm._l(_vm.general.signatories, function(
                              signatory
                            ) {
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
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-footer justify-content-between" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      !_vm.form.refID
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.saveNewHeader()
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "far fa-save" }),
                              _vm._v(" Create")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.refID
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.updateHeader()
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "far fa-save" }),
                              _vm._v(" Update")
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal modal-overflow fade",
          attrs: {
            id: "sardetail",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "addNewLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-xl" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                this.soaForm.refID != ""
                  ? _c("h4", { staticClass: "modal-title" }, [_vm._v("Update")])
                  : _c("h4", { staticClass: "modal-title" }, [
                      _vm._v("Add New")
                    ]),
                _vm._v(" "),
                _vm._m(3)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-6" },
                    [
                      _c(
                        "b-form-checkbox",
                        {
                          attrs: { id: "checkbox-1" },
                          on: { change: _vm.checkUncheckBatch },
                          model: {
                            value: _vm.general.checked,
                            callback: function($$v) {
                              _vm.$set(_vm.general, "checked", $$v)
                            },
                            expression: "general.checked"
                          }
                        },
                        [_vm._v("Link a batch from payroll")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.general.checked
                  ? _c(
                      "div",
                      {
                        staticClass: "row mt-3",
                        attrs: { id: "payrollbatch" }
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "card card-success" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c(
                                "div",
                                { staticClass: "row", attrs: { id: "auto" } },
                                [
                                  _c("div", { staticClass: "col-sm-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "sel1" } }, [
                                        _vm._v("Month")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.soaForm.month,
                                              expression: "soaForm.month"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.soaForm.errors.has(
                                              "month"
                                            )
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.soaForm,
                                                  "month",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              },
                                              function($event) {
                                                return _vm.getSoas()
                                              }
                                            ]
                                          }
                                        },
                                        _vm._l(_vm.months, function(month) {
                                          return _c(
                                            "option",
                                            {
                                              key: month,
                                              domProps: { value: month }
                                            },
                                            [_vm._v(_vm._s(month))]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "sel1" } }, [
                                        _vm._v("Year")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.soaForm.year,
                                              expression: "soaForm.year"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.soaForm.errors.has(
                                              "year"
                                            )
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.soaForm,
                                                  "year",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              },
                                              function($event) {
                                                return _vm.getSoas()
                                              }
                                            ]
                                          }
                                        },
                                        _vm._l(_vm.years, function(year) {
                                          return _c(
                                            "option",
                                            {
                                              key: year,
                                              domProps: { value: year }
                                            },
                                            [_vm._v(_vm._s(year))]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "sel1" } }, [
                                        _vm._v("Period")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.soaForm.period,
                                              expression: "soaForm.period"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.soaForm.errors.has(
                                              "period"
                                            )
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.soaForm,
                                                  "period",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              },
                                              function($event) {
                                                return _vm.getSoas()
                                              }
                                            ]
                                          }
                                        },
                                        _vm._l(_vm.periods, function(period) {
                                          return _c(
                                            "option",
                                            {
                                              key: period,
                                              domProps: { value: period }
                                            },
                                            [_vm._v(_vm._s(period))]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-3" },
                                    [
                                      _c("label", [_vm._v("Batch Number:")]),
                                      _vm._v(" "),
                                      _c("b-spinner", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.general.isBatchLoading,
                                            expression: "general.isBatchLoading"
                                          }
                                        ],
                                        staticClass: "batch_load",
                                        staticStyle: {
                                          width: "1rem",
                                          height: "1rem"
                                        },
                                        attrs: {
                                          label: "Large Spinner",
                                          type: "grow",
                                          variant: "success"
                                        }
                                      }),
                                      _vm._v(" "),
                                      !_vm.general.batch.length
                                        ? _c(
                                            "b-badge",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !_vm.general
                                                    .isBatchLoading,
                                                  expression:
                                                    "!general.isBatchLoading"
                                                }
                                              ],
                                              attrs: {
                                                pill: "",
                                                variant: "danger"
                                              }
                                            },
                                            [_vm._v("No batch found")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.soaForm.batchKey,
                                              expression: "soaForm.batchKey"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.soaForm.errors.has(
                                              "batchNumber"
                                            )
                                          },
                                          attrs: { required: "" },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.soaForm,
                                                  "batchKey",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              },
                                              function($event) {
                                                return _vm.getBatchInfo()
                                              }
                                            ]
                                          }
                                        },
                                        _vm._l(_vm.general.batch, function(
                                          soa
                                        ) {
                                          return _c(
                                            "option",
                                            {
                                              key: soa.BID,
                                              domProps: { value: soa.BID }
                                            },
                                            [_vm._v(_vm._s(soa.BNo))]
                                          )
                                        }),
                                        0
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "row", attrs: { id: "manual" } }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "sel1" } }, [
                        _vm._v("Select a DayType")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.soaForm.batchDaytypeID,
                              expression: "soaForm.batchDaytypeID"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            "is-invalid": _vm.soaForm.errors.has(
                              "batchDaytypeID"
                            )
                          },
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
                                _vm.$set(
                                  _vm.soaForm,
                                  "batchDaytypeID",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getSarRate()
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.general.dayTypeData, function(day) {
                          return _c("option", { domProps: { value: day.id } }, [
                            _vm._v(_vm._s(day.day))
                          ])
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "date" } }, [
                      _vm._v("Date Performed")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.datePerformed,
                          expression: "soaForm.datePerformed"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.soaForm.errors.has("datePerformed")
                      },
                      attrs: { type: "date" },
                      domProps: { value: _vm.soaForm.datePerformed },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.soaForm,
                            "datePerformed",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "refence" } }, [
                      _vm._v("Service Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.serviceNumber,
                          expression: "soaForm.serviceNumber"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.soaForm.errors.has("serviceNumber")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.soaForm.serviceNumber },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.soaForm,
                            "serviceNumber",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Activity / Operation:")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.soaForm.activityID,
                            expression: "soaForm.activityID"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        class: {
                          "is-invalid": _vm.soaForm.errors.has("activityID")
                        },
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
                              _vm.$set(
                                _vm.soaForm,
                                "activityID",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.activityChange
                          ]
                        }
                      },
                      _vm._l(_vm.general.SarActivity, function(activity) {
                        return _c(
                          "option",
                          {
                            key: activity.SAID,
                            domProps: { value: activity.SAID }
                          },
                          [_vm._v(_vm._s(activity.activity))]
                        )
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "refence" } }, [
                      _vm._v("PO Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.poNumber,
                          expression: "soaForm.poNumber"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.soaForm.errors.has("poNumber")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.soaForm.poNumber },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.soaForm, "poNumber", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("GL Account:")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.soaForm.glID,
                            expression: "soaForm.glID"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        class: { "is-invalid": _vm.soaForm.errors.has("glID") },
                        attrs: { required: true },
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
                            _vm.$set(
                              _vm.soaForm,
                              "glID",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.general.glSar, function(gl) {
                        return _c(
                          "option",
                          { key: gl.id, domProps: { value: gl.id } },
                          [_vm._v(_vm._s(gl.gl))]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Cost Center")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.costCenter,
                          expression: "soaForm.costCenter"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.soaForm.errors.has("costCenter")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.soaForm.costCenter },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.soaForm,
                            "costCenter",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Qty")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.qty,
                          expression: "soaForm.qty"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: { "is-invalid": _vm.soaForm.errors.has("qty") },
                      staticStyle: { "text-align": "right" },
                      attrs: { type: "number" },
                      domProps: { value: _vm.soaForm.qty },
                      on: {
                        change: _vm.getSarRate,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.soaForm, "qty", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", [_vm._v("Unit:")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.soaForm.unit,
                            expression: "soaForm.unit"
                          }
                        ],
                        staticClass: "form-control form-control-sm",
                        class: { "is-invalid": _vm.soaForm.errors.has("unit") },
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
                              _vm.$set(
                                _vm.soaForm,
                                "unit",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.getSarRate
                          ]
                        }
                      },
                      _vm._l(_vm.general.units, function(unit) {
                        return _c(
                          "option",
                          { key: unit.unit, domProps: { value: unit.unit } },
                          [_vm._v(_vm._s(unit.unit))]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Rate")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.rate,
                          expression: "soaForm.rate"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: { "is-invalid": _vm.soaForm.errors.has("rate") },
                      staticStyle: { "text-align": "right" },
                      attrs: { disabled: "", type: "text" },
                      domProps: { value: _vm.soaForm.rate },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.soaForm, "rate", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Amount")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.amount,
                          expression: "soaForm.amount"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: { "is-invalid": _vm.soaForm.errors.has("amount") },
                      staticStyle: { "text-align": "right" },
                      attrs: { disabled: "", type: "text" },
                      domProps: { value: _vm.soaForm.amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.soaForm, "amount", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Entry Sheet Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soaForm.entrySheetNumber,
                          expression: "soaForm.entrySheetNumber"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      class: {
                        "is-invalid": _vm.soaForm.errors.has("entrySheetNumber")
                      },
                      attrs: { type: "text" },
                      domProps: { value: _vm.soaForm.entrySheetNumber },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.soaForm,
                            "entrySheetNumber",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _vm._m(5),
                _vm._v(" "),
                this.soaForm.refID != ""
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.updateDetail }
                      },
                      [
                        _c("i", { staticClass: "fas fa-save" }),
                        _vm._v("    Update")
                      ]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.saveNewDetail }
                      },
                      [
                        _c("i", { staticClass: "fas fa-save" }),
                        _vm._v("    Save")
                      ]
                    )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("search-signatory", { on: { selectSign: _vm.setSign } }),
      _vm._v(" "),
      _c("search-dmpi-sar", {
        key: this.general.soaComponentKey,
        on: { selectSoa: _vm.setSoa }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "reactivate_details",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("label", [_vm._v("Reason of Reactivation")]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.reactivateForm.reasonofreactivation,
                            expression: "reactivateForm.reasonofreactivation"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.reactivateForm.errors.has(
                            "reasonofreactivation"
                          )
                        },
                        attrs: { "aria-label": "With textarea" },
                        domProps: {
                          value: _vm.reactivateForm.reasonofreactivation
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.reactivateForm,
                              "reasonofreactivation",
                              $event.target.value
                            )
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
                      staticClass: "btn btn-warning",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.reactivate()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-redo" }),
                      _vm._v("  Reactivate")
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("DMPI SAR / Volume DAR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Add new SAR")]),
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
    return _c(
      "button",
      {
        staticClass: "btn btn-default",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [_c("i", { staticClass: "far fa-window-close" }), _vm._v(" Close")]
    )
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Batch Information")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("i", { staticClass: "far fa-window-close" }), _vm._v(" Close")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Reactivation Detail")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
          id: "searchSignatory",
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
            _c("div", { staticClass: "modal-body search-modal" }, [
              _c(
                "div",
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
                  _c(
                    "kendo-grid",
                    {
                      attrs: {
                        height: 400,
                        "data-source": _vm.filter,
                        selectable: true,
                        sortable: true,
                        "scrollable-endless": true,
                        filterable: true
                      },
                      on: { change: _vm.onChange }
                    },
                    [
                      _c("kendo-grid-column", {
                        attrs: { field: "id", title: "ID" }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: { field: "name", title: "Name" }
                      }),
                      _vm._v(" "),
                      _c("kendo-grid-column", {
                        attrs: { field: "position", title: "Position" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search Signatory")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          id: "searchDmpiSar",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-xl" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
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
                                attrs: { placeholder: "Search for..." },
                                on: { keyup: _vm.searchSoa },
                                model: {
                                  value: _vm.searchSoaVar,
                                  callback: function($$v) {
                                    _vm.searchSoaVar = $$v
                                  },
                                  expression: "searchSoaVar"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "btn-modal-lock",
                              attrs: { variant: "warning", size: "sm" }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-lock",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" Show All Active")
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("table", { staticClass: "table table-bordered" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.soas, function(soa) {
                          return _c(
                            "tr",
                            {
                              key: soa.id,
                              staticClass: "hover-green",
                              on: {
                                click: function($event) {
                                  return _vm.setsoa(soa)
                                }
                              }
                            },
                            [
                              _c("td", [_vm._v(_vm._s(soa.soaNumber))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(soa.soaDate))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(soa.adminencodedby))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(soa.created_at))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(soa.updated_at))])
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    !_vm.soas
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
              ]
            )
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search DMPI SAR")]),
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
        _c("th", [_vm._v("Soa Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Soa Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Encoded By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Updated")])
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

/***/ "./resources/js/components/dmpi/DmpiSarComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dmpi/DmpiSarComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DmpiSarComponent.vue?vue&type=template&id=e5260026& */ "./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026&");
/* harmony import */ var _DmpiSarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DmpiSarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DmpiSarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dmpi/DmpiSarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiSarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiSarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiSarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiSarComponent.vue?vue&type=template&id=e5260026& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dmpi/DmpiSarComponent.vue?vue&type=template&id=e5260026&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiSarComponent_vue_vue_type_template_id_e5260026___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/commonMasterList/Signatory.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/search/commonMasterList/Signatory.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signatory.vue?vue&type=template&id=521139e4& */ "./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4&");
/* harmony import */ var _Signatory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signatory.vue?vue&type=script&lang=js& */ "./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signatory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/commonMasterList/Signatory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signatory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Signatory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signatory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Signatory.vue?vue&type=template&id=521139e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/commonMasterList/Signatory.vue?vue&type=template&id=521139e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signatory_vue_vue_type_template_id_521139e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDmpiSar.vue?vue&type=template&id=31e35124& */ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124&");
/* harmony import */ var _SearchDmpiSar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDmpiSar.vue?vue&type=script&lang=js& */ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchDmpiSar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/dmpi/sar/SearchDmpiSar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiSar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDmpiSar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiSar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDmpiSar.vue?vue&type=template&id=31e35124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/sar/SearchDmpiSar.vue?vue&type=template&id=31e35124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiSar_vue_vue_type_template_id_31e35124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);