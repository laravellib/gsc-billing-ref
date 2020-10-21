(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_commonMasterList_Signatory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/commonMasterList/Signatory.vue */ "./resources/js/components/search/commonMasterList/Signatory.vue");
/* harmony import */ var _search_dmpi_dar_SearchDmpiDar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/dmpi/dar/SearchDmpiDar.vue */ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'search-signatory': _search_commonMasterList_Signatory_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'search-dmpi-dar': _search_dmpi_dar_SearchDmpiDar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      signatories: {},
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
      currentMonth: '',
      currentYear: '',
      batch: {},
      isBatchLoading: false,
      whichSignatory: '',
      soaNumberCorrect: 0,
      soaComponentKey: 0,
      form: new Form({
        refId: '',
        month: '',
        year: '',
        period: '',
        soaDate: '',
        soaNumber: '',
        preparedBy: '',
        preparedByPos: '',
        preparedByID: '',
        confirmedBy: '',
        confirmedByPos: '',
        confirmedByID: '',
        approvedBy: '',
        approvedByPos: '',
        approvedByID: '',
        fileupload: null,
        batchKey: '',
        batchNumber: '',
        darUploadedDtl: {},
        darUploadedRates: {},
        darUploadTotals: {},
        isUploadingLoading: false,
        batchInfo: {},
        allWarnings: [],
        status: '-',
        isClubhouse: 0,
        dateTransmittedToOperation: '',
        dateSignedBySupervisor: '',
        dateSignedByManager: '',
        dateReceivedbyDataController: '',
        dateReceivedbyBillingClerk: '',
        dateReceivedbyDmpiAccount: '',
        transmittalNumber: '',
        reasonofreactivation: ""
      })
    };
  },
  created: function created() {
    var d = new Date();
    this.form.month = d.getMonth();
    this.form.year = d.getFullYear();
    var day = d.getDate();

    if (day < 16) {
      this.form.period = 1;
    } else {
      this.form.period = 2;
    }
  },
  mounted: function mounted() {
    this.getSoas();
    this.$parent.getSignatories();
    document.getElementById('soaDate').valueAsDate = new Date();
    this.getSignatory();
    var currentDate = new Date();
    this.soaDate = currentDate;
    console.log('date' + currentDate);
  },
  methods: {
    clearFiles: function clearFiles() {
      this.$refs['file-input'].reset();
      this.form.darUploadedDtl = {};
      this.form.darUploadedRates = {};
      this.form.darUploadTotals = {};
      this.form.allWarnings = [];
    },
    onFileChange: function onFileChange(e) {
      var _this = this;

      this.form.isUploadingLoading = true;
      this.form.fileupload = e.target.files[0]; // retrive the file in controller then return the data for display 

      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('file', this.form.fileupload);
      formData.append('batch', this.form.batchInfo[0]['Location']);
      axios.post('api/loadUploaded', formData, config).then(function (res) {
        _this.form.darUploadedDtl = res.data['details'];
        _this.form.darUploadedRates = res.data['rates'];
        _this.form.darUploadTotals = res.data['totals'];

        _this.checkForErrors();

        _this.form.isUploadingLoading = false;
      })["catch"](function (err) {
        console.log(err);

        _this.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Signatory not created successfully'
        });
        _this.form.isUploadingLoading = true;
      }); // filters
    },
    getBatchInfo: function getBatchInfo() {
      var _this2 = this;

      this.isBatchLoading = true;
      this.form.soaNumber = "";
      axios.get('/api/getBatchInfo', {
        params: {
          id: this.form.batchKey
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.form.batchInfo = data;
        _this2.form.batchNumber = data[0]['BNo'];
        _this2.form.soaNumber = data[0]['Code_Location'] + data[0]['Code_Date'] + data[0]['Code_Series'];
        console.log(data[0]['Code_Location']);
        _this2.isBatchLoading = false;

        _this2.checkForErrors();

        _this2.soaNumberCheck();
      })["catch"](function (err) {
        _this2.isBatchLoading = true;
        console.log(err);
        console.log("we have error");
      });
    },
    getData: function getData() {
      axios({
        method: 'GET',
        url: 'api/dmpidar'
      }).then(function (result) {
        console.log(result.data);
      }, function (error) {
        console.error(error);
      });
    },
    getSoas: function getSoas() {
      var _this3 = this;

      this.isBatchLoading = true;
      axios.get('/api/dmpidargetbatch', {
        params: {
          month: this.form.month,
          year: this.form.year,
          period: this.form.period,
          isVolume: 0
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this3.batch = data;
        _this3.isBatchLoading = false;
      })["catch"](function (err) {
        _this3.isBatchLoading = true;
      });
    },
    saveData: function saveData() {
      var _this4 = this;

      this.soaNumberCheck();
      this.$Progress.start(); // console.log(this.form);

      var hasError = 0;
      var hasWarning = 0; // console.log(this.form.allWarnings);
      // if ang all warning kay walay error warning lang ang naa sa sulod then proceed, else show error

      for (var i = 0; i < this.form.allWarnings.length; i++) {
        if (this.form.allWarnings[i]['type'] == 'error') {
          hasError += 1;
        } else if (this.form.allWarnings[i]['type'] == 'warning') {
          hasWarning += 1;
        }
      }

      console.log("warnings " + this.form.allWarnings);

      if (this.soaNumberCorrect < 2) {
        hasError += 1;
        console.log("soa error");
      }

      if (hasError) {
        toast.fire({
          icon: 'error',
          title: 'You have ' + hasError + ' error/s.'
        });
        this.$Progress.fail();
        $(window).scrollTop($('#errors').offset().top);
      } else {
        this.form.post('api/dmpidar').then(function (res) {
          toast.fire({
            icon: 'success',
            title: 'data sucessfully saved.'
          });

          _this4.$Progress.finish();
        })["catch"](function (err) {
          console.log(err);
          toast.fire({
            icon: 'error',
            title: 'backend error.'
          });

          _this4.$Progress.fail();
        });
      }
    },
    searchSignatory: function searchSignatory(wS) {
      $('#searchSignatory').modal('show');
      this.whichSignatory = wS;
    },
    searchDmpiDar: function searchDmpiDar() {
      $('#searchDmpiDar').modal('show');
    },
    getSignatory: function getSignatory() {
      var _this5 = this;

      axios({
        method: 'GET',
        url: '/api/billingsignatory'
      }).then(function (_ref3) {
        var data = _ref3.data;
        return _this5.signatories = data;
      });
      console.log(this.signatories);
    },
    setSign: function setSign(value) {
      if (this.whichSignatory == 'approved') {
        this.form.approvedBy = value.name;
        this.form.approvedByPos = value.position;
        this.form.approvedByID = value.id;
      } else if (this.whichSignatory == 'confirmed') {
        this.form.confirmedBy = value.name;
        this.form.confirmedByPos = value.position;
        this.form.confirmedByID = value.id;
      } else {
        //prepared
        this.form.preparedBy = value.name;
        this.form.preparedByPos = value.position;
        this.form.preparedByID = value.id;
      }
    },
    setSoa: function setSoa(value) {
      this.form.refId = value.id;
      this.provideDataForSelectedSoa(value);
      this.soaComponentKey += 1;
    },
    provideDataForSelectedSoa: function provideDataForSelectedSoa(hdr) {
      var _this6 = this;

      // set the header
      this.form.year = hdr.pmy.substring(0, 4);
      this.form.month = parseInt(hdr.pmy.substring(4, 6), 10);
      this.form.Period = hdr.period;
      this.form.batchKey = hdr.batcIDLink;
      this.form.batchNumber = hdr.batchInfo; // console.log('id', hdr.batcIDLink)

      this.form.soaDate = hdr.soaDate;
      this.form.soaNumber = hdr.soaNumber; // console.log(hdr.batchInfo)

      this.form.preparedBy = hdr.preparedBy;
      this.form.preparedByPos = hdr.preparedByPosition;
      this.form.approvedBy = hdr.approvedBy;
      this.form.approvedByPos = hdr.approvedByPosition;
      this.form.confirmedBy = hdr.confirmedBy;
      this.form.confirmedByPos = hdr.confirmedByPosition;
      this.form.status = hdr.status; // this.form.fill(hdr);

      this.form.isClubhouse = hdr.isClubhouse;
      this.form.dateTransmittedToOperation = hdr.dateTransmittedToOperation;
      this.form.dateSignedBySupervisor = hdr.dateSignedBySupervisor;
      this.form.dateSignedByManager = hdr.dateSignedByManager;
      this.form.dateReceivedbyDataController = hdr.dateReceivedByDataController;
      this.form.dateReceivedbyBillingClerk = hdr.dateReceivedByBillingClerk;
      this.form.dateReceivedbyDmpiAccount = hdr.DateReceivedByDmpiAccount;
      this.form.transmittalNumber = hdr.TransmittalNumber; // set details 

      axios.get('/api/loadDetailRates', {
        params: {
          id: hdr.id
        }
      }).then(function (res) {
        _this6.form.darUploadedDtl = res.data['details'];
        _this6.form.darUploadedRates = res.data['rates'];
        _this6.form.darUploadTotals = res.data['totals'];

        _this6.getSoas();

        _this6.getBatchInfo();

        _this6.soaNumberCheck();

        _this6.checkForErrors();
      })["catch"](function (err) {
        console.log(err);

        _this6.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Details not loaded successfully'
        });
        _this6.form.isUploadingLoading = true;
      });
    },
    checkForErrors: function checkForErrors() {
      //required : batch number & file upload
      // dapat completo tanan ayha ipa dagan ang kani nga filter.  naay  selected batch ug naay soa uploaded
      this.form.allWarnings = [];

      if (this.form.darUploadTotals.length > 0 && this.form.batchInfo.length > 0 && this.form.darUploadedDtl.length > 0) {
        //, gl, cc, activity, dapat mag match ang hours sa batch ug uplaoded excel soa, rate
        // excel totals: st, ot, nd, ndot per row
        for (var i = 0; i < this.form.darUploadedDtl.length; i++) {
          // this.$set(this.form.darUploadedDtl[i],['checking'], 'hey');
          if (this.form.darUploadedDtl[i]['totalst'] != this.form.darUploadedDtl[i]['c_totalst']) {
            this.form.allWarnings.push({
              type: 'error',
              error: 'ST amt error',
              description: 'Amount: ' + this.form.darUploadedDtl[i]['totalst'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalst']
            });
          }

          if (this.form.darUploadedDtl[i]['totalot'] != this.form.darUploadedDtl[i]['c_totalot']) {
            this.form.allWarnings.push({
              type: 'error',
              error: 'OT amt error',
              description: 'Amount: ' + this.form.darUploadedDtl[i]['totalot'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalot']
            });
          }

          if (this.form.darUploadedDtl[i]['totalnd'] != this.form.darUploadedDtl[i]['c_totalnd']) {
            this.form.allWarnings.push({
              type: 'error',
              error: 'ND amt error',
              description: 'Amount: ' + this.form.darUploadedDtl[i]['totalnd'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalnd']
            });
          }

          if (this.form.darUploadedDtl[i]['totalndot'] != this.form.darUploadedDtl[i]['c_totalndot']) {
            this.form.allWarnings.push({
              type: 'error',
              error: 'NDOT amt error',
              description: 'Amount: ' + this.form.darUploadedDtl[i]['totalndot'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalndot']
            });
          }

          if (this.form.darUploadedDtl[i]['totalAmt'] != this.form.darUploadedDtl[i]['c_totalAmt']) {
            this.form.allWarnings.push({
              type: 'error',
              error: 'Total amt error',
              description: 'Amount: ' + this.form.darUploadedDtl[i]['totalAmt'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalAmt']
            });
          }
        }

        console.log('data not complete'); //check compare hours sa batch ug soa

        if (this.form.darUploadTotals[0]['gtSt'] != this.form.batchInfo[0]['THW_ST']) {
          this.form.allWarnings.push({
            type: 'warning',
            error: 'Batch st hrs does not match',
            description: 'Batch ST: ' + this.form.batchInfo[0]['THW_ST'] + ', Uploaded ST: ' + this.form.darUploadTotals[0]['gtSt']
          });
        }

        if (this.form.darUploadTotals[0]['gtOt'] != this.form.batchInfo[0]['THW_OT']) {
          this.form.allWarnings.push({
            type: 'warning',
            error: 'Batch ot hrs does not match',
            description: 'Batch OT: ' + this.form.batchInfo[0]['THW_OT'] + ', Uploaded OT: ' + this.form.darUploadTotals[0]['gtOt']
          });
        }

        if (this.form.darUploadTotals[0]['gtNd'] != this.form.batchInfo[0]['THW_ND']) {
          this.form.allWarnings.push({
            type: 'warning',
            error: 'Batch nd hrs does not match',
            description: 'Batch ND: ' + this.form.batchInfo[0]['THW_ND'] + ', Uploaded ND: ' + this.form.darUploadTotals[0]['gtNd']
          });
        }

        if (this.form.darUploadTotals[0]['gtNdot'] != this.form.batchInfo[0]['THW_NDOT']) {
          this.form.allWarnings.push({
            type: 'warning',
            error: 'Batch ndot hrs does not match',
            description: 'Batch NDOT: ' + this.form.batchInfo[0]['THW_NDOT'] + ', Uploaded NDOT: ' + this.form.darUploadTotals[0]['gtNdot']
          });
        } // if naay rate nga wala ge match


        var rateWithNoMatch = 0;

        for (var i = 0; i < this.form.darUploadedRates.length; i++) {
          console.log('test- errpr ' + this.form.darUploadedRates[i]['checking']);

          if (this.form.darUploadedRates[i]['checking'] == 'false') {
            rateWithNoMatch += 1;
          }
        }

        if (rateWithNoMatch > 0) {
          this.form.allWarnings.push({
            type: 'error',
            error: 'Rate Error',
            description: rateWithNoMatch + ' rate/s doesn\'t match the active rate in rate master file'
          });
        }
      }
    },
    clearAll: function clearAll() {
      this.signatories = {}, this.sizes = ['Small', 'Medium', 'Large', 'Extra Large'], this.currentMonth = '', this.currentYear = '', this.batch = {}, this.isBatchLoading = false, this.whichSignatory = '', this.soaNumberCorrect = 0, this.form.refId = '', this.form.month = '', this.form.year = '', this.form.period = '', this.form.soaDate = '', this.form.soaNumber = '', this.form.preparedBy = '', this.form.preparedByPos = '', this.form.preparedByID = '', this.form.confirmedBy = '', this.form.confirmedByPos = '', this.form.confirmedByID = '', this.form.approvedBy = '', this.form.approvedByPos = '', this.form.approvedByID = '', this.form.fileupload = null, this.form.batchKey = '', this.form.batchNumber = '', this.form.darUploadedDtl = {}, this.form.darUploadedRates = {}, this.form.darUploadTotals = {}, this.form.isUploadingLoading = false, this.form.batchInfo = {}, this.form.allWarnings = [], this.form.status = '-', this.form.dateTransmittedToOperation = '', this.form.dateSignedBySupervisor = '', this.form.dateSignedByManager = '', this.form.dateReceivedbyDataController = '', this.form.dateReceivedbyBillingClerk = '', this.form.dateReceivedbyDmpiAccount = '', this.form.transmittalNumber = '';
      var d = new Date();
      this.form.month = d.getMonth();
      this.form.year = d.getFullYear();
      var day = d.getDate();

      if (day < 16) {
        this.form.period = 1;
      } else {
        this.form.period = 2;
      }
    },
    deleteAll: function deleteAll() {
      var _this7 = this;

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
          _this7.form["delete"]('api/dmpidar/' + _this7.form.refId).then(function (res) {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this7.clearAll();

            console.log(res);
          })["catch"](function (err) {
            swal.fire('Failed!', 'Something went wrong.', 'error');
            console.log(err);
          });
        }
      });
    },
    soaNumberCheck: function soaNumberCheck() {
      var _this8 = this;

      if (this.form.soaNumber.trim() != "") {
        axios.get('/api/checkifSoaExists', {
          params: {
            soaNumber: this.form.soaNumber,
            id: this.form.refId,
            type: "DAR"
          }
        }).then(function (_ref4) {
          var data = _ref4.data;

          if (data == true) {
            _this8.soaNumberCorrect = 1;
          } else {
            _this8.soaNumberCorrect = 2;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.soaNumberCorrect = 0;
      }
    },
    submit: function submit() {
      var _this9 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpidarSubmit').then(function (_ref5) {
        var data = _ref5.data;
        _this9.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully submitted'
        });

        _this9.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this9.$Progress.fail();
      });
    },
    confirm: function confirm() {
      var _this10 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpidarConfirm').then(function (_ref6) {
        var data = _ref6.data;
        _this10.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully confirmed'
        });

        _this10.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this10.$Progress.fail();
      });
    },
    transmit: function transmit() {
      var _this11 = this;

      this.$Progress.start();
      console.log(this.form.refId);
      this.form.post('/api/dmpidarTransmit').then(function (_ref7) {
        var data = _ref7.data;
        _this11.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully transmitted'
        });

        _this11.$Progress.finish();
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this11.$Progress.fail();
      });
    },
    reactivate_detail: function reactivate_detail() {
      $('#reactivate_details').modal('show');
    },
    reactivate: function reactivate() {
      var _this12 = this;

      this.$Progress.start();
      console.log(this.form.refID);
      this.form.post('/api/dmpidarReactivate').then(function (_ref8) {
        var data = _ref8.data;
        _this12.form.status = data;
        console.log;
        toast.fire({
          icon: 'success',
          title: 'Successfully reactivated'
        });
        _this12.form.refID = data;

        _this12.$Progress.finish();

        $('#reactivate_details').modal('hide');
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Something went wrong'
        });

        _this12.$Progress.fail();
      });
    },
    printPdf: function printPdf() {
      console.log(this.form.allWarnings);
      this.$Progress.start();
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a("l", "pt", "long");
      var pageHeight = 650;
      var startsY = 10;
      doc.setProperties({
        title: "vanrental_po_monitoring.pdf"
      }); //HEADER

      doc.setFont("courier");
      doc.setFontType("bold");
      doc.setFontSize(14);
      doc.text("GENERAL SERVICES MULTI-PURPOSE COOPERATIVE", 400, 50, "center");
      doc.setFontSize(10);
      doc.setFontType("regular");
      doc.text("Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon", 400, 60, "center");
      doc.text("CDA # 9520-10019987-1 / TIN 411-478-949-000", 400, 70, "center");
      doc.setFontType("bold");
      doc.text("DMPI DAR SOA", 400, 85, "center");
      doc.setFontType("regular");
      doc.addImage(Logo, "JPEG", 90, 40, 50, 50);
      doc.setLineWidth(1.5);
      doc.line(40, 115, 800, 115);
      doc.setLineWidth(2);
      doc.line(40, 118, 800, 118); //END HEADER

      doc.text("Ref #: " + this.form.refId, 40, 150);
      doc.text("Status: " + this.form.status, 240, 150);
      doc.text("Month: " + this.form.month, 440, 150);
      doc.text("Year: " + this.form.year, 640, 150);
      doc.text("Period: " + this.form.period, 40, 165);
      doc.text("SOA Date: " + this.form.soaDate, 240, 165);
      doc.text("Batch Number: " + this.form.batchNumber, 440, 165);
      doc.text("SOA Number: " + this.form.soaNumber, 640, 165);
      doc.text("Prepared By: " + this.form.preparedBy, 40, 190);
      doc.text("Prepared By Position: " + this.form.preparedByPos, 40, 205);
      doc.text("Confirmed By: " + this.form.confirmedBy, 240, 190);
      doc.text("Confirmed By Position: " + this.form.confirmedByPos, 240, 205);
      doc.text("Approved By: " + this.form.approvedBy, 440, 190);
      doc.text("Approved By: " + this.form.approvedByPos, 440, 205);
      console.log(this.form.batchInfo);
      doc.text("Details:", 40, 230);
      doc.autoTable({
        styles: {
          fontSize: 7
        },
        body: this.form.batchInfo,
        columns: [{
          header: "BNO",
          dataKey: "BNo"
        }, {
          header: "ST",
          dataKey: "THW_ST"
        }, {
          header: "OT",
          dataKey: "THW_OT"
        }, {
          header: "ND",
          dataKey: "THW_ND"
        }, {
          header: "NDOT",
          dataKey: "THW_NDOT"
        }],
        startY: 240
      });
      doc.autoTable({
        styles: {
          fontSize: 7
        },
        body: this.form.allWarnings,
        columns: [{
          header: "Type",
          dataKey: "type"
        }, {
          header: "Error",
          dataKey: "error"
        }, {
          header: "Description",
          dataKey: "description"
        }]
      });
      doc.autoTable({
        styles: {
          fontSize: 5
        },
        body: this.form.darUploadedDtl,
        columns: [{
          header: "Activity",
          dataKey: "activity"
        }, {
          header: "Field",
          dataKey: "field"
        }, {
          header: "Accomplished",
          dataKey: "accomplished"
        }, {
          header: "GL",
          dataKey: "gl"
        }, {
          header: "CC",
          dataKey: "cc"
        }, {
          header: "RD-ST",
          dataKey: "rdst"
        }, {
          header: "RD-OT",
          dataKey: "rdot"
        }, {
          header: "RD-ND",
          dataKey: "rdnd"
        }, {
          header: "RD-NDOT",
          dataKey: "rdndot"
        }, {
          header: "SHOL-ST",
          dataKey: "sholst"
        }, {
          header: "SHOL-OT",
          dataKey: "sholot"
        }, {
          header: "SHOL-ND",
          dataKey: "sholnd"
        }, {
          header: "SHOL-NDOT",
          dataKey: "sholndot"
        }, {
          header: "SHRD-ST",
          dataKey: "shrdst"
        }, {
          header: "SHRD-OT",
          dataKey: "shrdot"
        }, {
          header: "SHRD-ND",
          dataKey: "shrdnd"
        }, {
          header: "SHRD-NDOT",
          dataKey: "shrdndot"
        }, {
          header: "RHOL-ST",
          dataKey: "rholst"
        }, {
          header: "RHOL-OT",
          dataKey: "rholot"
        }, {
          header: "RHOL-ND",
          dataKey: "rholnd"
        }, {
          header: "RHOL-NDOT",
          dataKey: "rholndot"
        }, {
          header: "RHRD-ST",
          dataKey: "rhrdst"
        }, {
          header: "RHRD-OT",
          dataKey: "rhrdot"
        }, {
          header: "RHRD-ND",
          dataKey: "rhrdnd"
        }, {
          header: "RHRD-NDOT",
          dataKey: "rhrdndot"
        }, {
          header: "TOTAL-ST",
          dataKey: "totalst"
        }, {
          header: "TOTAL-OT",
          dataKey: "totalot"
        }, {
          header: "TOTAL-ND",
          dataKey: "totalnd"
        }, {
          header: "TOTAL-NDOT",
          dataKey: "totalndot"
        }, {
          header: "TOTAL",
          dataKey: "totalAmt"
        }, {
          header: "HC",
          dataKey: "headCount"
        }]
      });
      doc.autoTable({
        styles: {
          fontSize: 5
        },
        body: this.form.darUploadedRates,
        columns: [{
          header: "Activity",
          dataKey: "activity"
        }, {
          header: "RDST",
          dataKey: "rd_st"
        }, {
          header: "RDOT",
          dataKey: "rd_ot"
        }, {
          header: "RDND",
          dataKey: "rd_nd"
        }, {
          header: "RDNDOT",
          dataKey: "rd_ndot"
        }, {
          header: "SHOLST",
          dataKey: "shol_st"
        }, {
          header: "SHOLOT",
          dataKey: "shol_ot"
        }, {
          header: "SHOLND",
          dataKey: "shol_nd"
        }, {
          header: "SHOLNDOT",
          dataKey: "shol_ndot"
        }, {
          header: "SHRDST",
          dataKey: "shrd_st"
        }, {
          header: "SHRDOT",
          dataKey: "shrd_ot"
        }, {
          header: "SHRDND",
          dataKey: "shrd_nd"
        }, {
          header: "SHRDNDOT",
          dataKey: "shrd_ndot"
        }, {
          header: "RHOLST",
          dataKey: "rhol_st"
        }, {
          header: "RHOLOT",
          dataKey: "rhol_ot"
        }, {
          header: "RHOLND",
          dataKey: "rhol_nd"
        }, {
          header: "RHOLNDOT",
          dataKey: "rhol_ndot"
        }, {
          header: "RHRDST",
          dataKey: "rhrd_st"
        }, {
          header: "RHRDOT",
          dataKey: "rhrd_ot"
        }, {
          header: "RHRDND",
          dataKey: "rhrd_nd"
        }, {
          header: "RHRDNDOT",
          dataKey: "rhrd_ndot"
        }, {
          header: "RHRD-ND",
          dataKey: "checking"
        }]
      });
      window.open(doc.output("bloburl"), "_blank"); //doc.save("golfcart_adjstment.pdf");

      this.$Progress.finish();
    }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js& ***!
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
        url: '/api/dmpidarsearch'
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
      $('#searchDmpiDar').modal('hide'); // console.log(data)
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
      axios.get('/api/dmpidarsearch', {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card full-width", attrs: { id: "app" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { ref: "content", staticClass: "card-body" }, [
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
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "b-form-checkbox",
                          {
                            attrs: {
                              id: "checkbox-1",
                              name: "checkbox-1",
                              value: "1",
                              "unchecked-value": "0"
                            },
                            model: {
                              value: _vm.form.isClubhouse,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "isClubhouse", $$v)
                              },
                              expression: "form.isClubhouse"
                            }
                          },
                          [
                            _vm._v(
                              "is Clubhouse\n                                "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Search entry (Ref ID):")]),
                          _vm._v(" "),
                          _c(
                            "b-input-group",
                            { staticClass: "mt-3", attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: { disabled: "" },
                                model: {
                                  value: _vm.form.refId,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "refId", $$v)
                                  },
                                  expression: "form.refId"
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
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchDmpiDar()
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
                      _c("div", { staticClass: "col-sm-6" }, [
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
                    _c("hr"),
                    _vm._v(" "),
                    _vm._l(_vm.form.allWarnings, function(warning) {
                      return _c(
                        "div",
                        {
                          staticClass: "callout cust-pad",
                          class: [
                            warning.type == "error"
                              ? "callout-danger"
                              : "callout-warning"
                          ],
                          attrs: { id: "errors" }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: [
                                warning.type == "error" ? "red" : "orange"
                              ]
                            },
                            [
                              _c("i", {
                                staticClass: "icon fas fa-exclamation-triangle"
                              }),
                              _vm._v(" " + _vm._s(warning.error))
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("h6", [_vm._v(_vm._s(warning.description))])
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { ref: "up", staticClass: "row" }, [
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
                                  value: _vm.form.month,
                                  expression: "form.month"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                disabled:
                                  _vm.form.status != "active" &&
                                  _vm.form.status != "-"
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
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
                                { key: month, domProps: { value: month } },
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
                                  value: _vm.form.year,
                                  expression: "form.year"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                disabled:
                                  _vm.form.status != "active" &&
                                  _vm.form.status != "-"
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
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
                                { key: year, domProps: { value: year } },
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
                                  value: _vm.form.period,
                                  expression: "form.period"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                disabled:
                                  _vm.form.status != "active" &&
                                  _vm.form.status != "-"
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
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
                                { key: period, domProps: { value: period } },
                                [_vm._v(_vm._s(period))]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [_vm._v("SOA Date:")]),
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
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            disabled:
                              _vm.form.status != "active" &&
                              _vm.form.status != "-",
                            required: "",
                            id: "soaDate",
                            type: "date",
                            value: ""
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
                      _c(
                        "div",
                        { staticClass: "col-sm-3" },
                        [
                          _c("strong", [_vm._v("Batch Number:")]),
                          _vm._v(" "),
                          _c("b-spinner", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isBatchLoading,
                                expression: "isBatchLoading"
                              }
                            ],
                            staticClass: "batch_load",
                            staticStyle: { width: "1rem", height: "1rem" },
                            attrs: {
                              label: "Large Spinner",
                              type: "grow",
                              variant: "success"
                            }
                          }),
                          _vm._v(" "),
                          !_vm.batch.length
                            ? _c(
                                "b-badge",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.isBatchLoading,
                                      expression: "!isBatchLoading"
                                    }
                                  ],
                                  attrs: { pill: "", variant: "danger" }
                                },
                                [_vm._v("No batch for selected period")]
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
                                  value: _vm.form.batchKey,
                                  expression: "form.batchKey"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: {
                                required: "",
                                disabled:
                                  _vm.isBatchLoading ||
                                  (_vm.form.status != "active" &&
                                    _vm.form.status != "-")
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
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
                            _vm._l(_vm.batch, function(soa) {
                              return _c(
                                "option",
                                { key: soa.BID, domProps: { value: soa.BID } },
                                [_vm._v(_vm._s(soa.BNo))]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-3" },
                        [
                          _c("strong", [_vm._v("SOA Number:")]),
                          _vm._v(" "),
                          _vm.soaNumberCorrect == 2
                            ? _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.soaNumberCorrect == 2,
                                    expression: "soaNumberCorrect==2"
                                  }
                                ],
                                staticClass: "fas fa-check green"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.soaNumberCorrect == 1
                            ? _c(
                                "b-badge",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.soaNumberCorrect == 1,
                                      expression: "soaNumberCorrect==1"
                                    }
                                  ],
                                  attrs: { pill: "", variant: "danger" }
                                },
                                [_vm._v("Soa number already exists")]
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
                            attrs: {
                              disabled: "",
                              required: "",
                              type: "text",
                              value: ""
                            },
                            domProps: { value: _vm.form.soaNumber },
                            on: {
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
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [
                          _vm._v("Date Transmitted to Operation:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateTransmittedToOperation,
                              expression: "form.dateTransmittedToOperation"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: {
                            value: _vm.form.dateTransmittedToOperation
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateTransmittedToOperation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [_vm._v("Date Signed by Supervisor:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateSignedBySupervisor,
                              expression: "form.dateSignedBySupervisor"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: { value: _vm.form.dateSignedBySupervisor },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateSignedBySupervisor",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [_vm._v("Date Signed by Manager:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateSignedByManager,
                              expression: "form.dateSignedByManager"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: { value: _vm.form.dateSignedByManager },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateSignedByManager",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [
                          _vm._v("Date Received by Data Controller:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateReceivedbyDataController,
                              expression: "form.dateReceivedbyDataController"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: {
                            value: _vm.form.dateReceivedbyDataController
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateReceivedbyDataController",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [
                          _vm._v("Date Received by Billing Clerk:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateReceivedbyBillingClerk,
                              expression: "form.dateReceivedbyBillingClerk"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: {
                            value: _vm.form.dateReceivedbyBillingClerk
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateReceivedbyBillingClerk",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [
                          _vm._v("Date Received by DMPI Account:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.dateReceivedbyDmpiAccount,
                              expression: "form.dateReceivedbyDmpiAccount"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { id: "soaDate", type: "date", value: "" },
                          domProps: {
                            value: _vm.form.dateReceivedbyDmpiAccount
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "dateReceivedbyDmpiAccount",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("strong", [_vm._v("Transmittal Number:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.transmittalNumber,
                              expression: "form.transmittalNumber"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: { type: "text", value: "" },
                          domProps: { value: _vm.form.transmittalNumber },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "transmittalNumber",
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
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "lb-dar" }, [
                      _vm._v("Data and Comparison")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dmpi-dar-upload" }, [
                      _c("div", { staticClass: "row width-100" }, [
                        _c(
                          "h5",
                          [
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "info" } },
                              [_vm._v("Selected batch data")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row preview-uploaded-dar width-100" },
                        [
                          _c("div", { staticClass: " table-responsive" }, [
                            _c(
                              "table",
                              {
                                staticClass: "table table-sm table-upload-dar"
                              },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.batchInfo, function(batch) {
                                    return _c("tr", [
                                      _c("td", [_vm._v(_vm._s(batch.BNo))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(batch.xDate))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(batch.DayType))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(batch.Location))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(batch.THW_ST))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(batch.THW_OT))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(batch.THW_ND))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(batch.THW_NDOT))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(batch.BatchedBy))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(batch.EncodedBy))
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(
                      "\n                                 \n                                "
                    ),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Prepared By:")]),
                          _vm._v(" "),
                          _c(
                            "b-input-group",
                            { staticClass: "mt-3", attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.preparedBy,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "preparedBy", $$v)
                                  },
                                  expression: "form.preparedBy"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-"
                                },
                                model: {
                                  value: _vm.form.preparedByPos,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "preparedByPos", $$v)
                                  },
                                  expression: "form.preparedByPos"
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
                                        disabled:
                                          _vm.form.status != "active" &&
                                          _vm.form.status != "-",
                                        variant: "outline-success",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchSignatory("prepared")
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
                    _vm._v(
                      "\n                                 \n                                "
                    ),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Confirmed By:")]),
                          _vm._v(" "),
                          _c(
                            "b-input-group",
                            { staticClass: "mt-3", attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.confirmedBy,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "confirmedBy", $$v)
                                  },
                                  expression: "form.confirmedBy"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-"
                                },
                                model: {
                                  value: _vm.form.confirmedByPos,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "confirmedByPos", $$v)
                                  },
                                  expression: "form.confirmedByPos"
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
                                        disabled:
                                          _vm.form.status != "active" &&
                                          _vm.form.status != "-",
                                        variant: "outline-success",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchSignatory(
                                            "confirmed"
                                          )
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
                    _vm._v(
                      "\n                                 \n                                "
                    ),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("Approved By:")]),
                          _vm._v(" "),
                          _c(
                            "b-input-group",
                            { staticClass: "mt-3", attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.approvedBy,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "approvedBy", $$v)
                                  },
                                  expression: "form.approvedBy"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-form-input", {
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-"
                                },
                                model: {
                                  value: _vm.form.approvedByPos,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "approvedByPos", $$v)
                                  },
                                  expression: "form.approvedByPos"
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
                                        disabled:
                                          _vm.form.status != "active" &&
                                          _vm.form.status != "-",
                                        variant: "outline-success",
                                        size: "sm"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchSignatory("approved")
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
                    _vm._v(
                      "\n                                 \n                                "
                    ),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c("strong", [_vm._v("File:")]),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c("b-form-file", {
                                ref: "file-input",
                                attrs: {
                                  disabled:
                                    _vm.form.status != "active" &&
                                    _vm.form.status != "-",
                                  id: "file-small",
                                  size: "sm"
                                },
                                on: { change: _vm.onFileChange },
                                model: {
                                  value: _vm.form.fileupload,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fileupload", $$v)
                                  },
                                  expression: "form.fileupload"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    disabled:
                                      _vm.form.status != "active" &&
                                      _vm.form.status != "-",
                                    size: "sm",
                                    variant: "outline-danger"
                                  },
                                  on: { click: _vm.clearFiles }
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-minus-square"
                                  }),
                                  _vm._v(" remove selected file")
                                ]
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
                        { staticClass: "col-sm-1 mg-top-23" },
                        [
                          _c("b-spinner", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.form.isUploadingLoading,
                                expression: "form.isUploadingLoading"
                              }
                            ],
                            staticClass: "batch_load",
                            staticStyle: { width: "1rem", height: "1rem" },
                            attrs: {
                              label: "Large Spinner",
                              type: "grow",
                              variant: "success"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "lb-dar" }, [
                      _vm._v("Data and Comparison")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dmpi-dar-upload" }, [
                      _c("div", { staticClass: "row width-100" }, [
                        _c(
                          "h5",
                          [
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "info" } },
                              [_vm._v("Uploaded DMPI DAR details")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row preview-uploaded-dar width-100" },
                        [
                          _c("div", { staticClass: " table-responsive" }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-sm table-upload-dar dmpi-dar-uploaded",
                                attrs: { id: "dtl" }
                              },
                              [
                                _vm._m(2),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.darUploadedDtl, function(
                                    dtl,
                                    key
                                  ) {
                                    return _c("tr", { key: dtl.id }, [
                                      _c("td", [_vm._v(_vm._s(++key))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.activity))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.field))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(dtl.accomplished))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.gl))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.cc))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rdst))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rdot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rdnd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rdndot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.sholst))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.sholot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.sholnd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.sholndot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.shrdst))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.shrdot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.shrdnd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.shrdndot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rholst))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rholot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rholnd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rholndot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rhrdst))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rhrdot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rhrdnd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.rhrdndot))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                dtl.totalst != dtl.c_totalst,
                                              expression:
                                                "dtl.totalst != dtl.c_totalst"
                                            }
                                          ],
                                          staticClass: "fas fa-times red",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "right",
                                            title:
                                              "Total Amt did not match the computation"
                                          }
                                        }),
                                        _vm._v(" " + _vm._s(dtl.totalst))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "i",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  dtl.totalot != dtl.c_totalot,
                                                expression:
                                                  "dtl.totalot != dtl.c_totalot"
                                              }
                                            ],
                                            staticClass: "fas fa-times red",
                                            attrs: {
                                              "data-toggle": "tooltip",
                                              "data-placement": "right",
                                              title:
                                                "Total Amt did not match the computation"
                                            }
                                          },
                                          [_vm._v(" " + _vm._s(dtl.totalot))]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                dtl.totalnd != dtl.c_totalnd,
                                              expression:
                                                "dtl.totalnd != dtl.c_totalnd"
                                            }
                                          ],
                                          staticClass: "fas fa-times red",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "right",
                                            title:
                                              "Total Amt did not match the computation"
                                          }
                                        }),
                                        _vm._v(" " + _vm._s(dtl.totalnd))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                dtl.totalndot !=
                                                dtl.c_totalndot,
                                              expression:
                                                "dtl.totalndot != dtl.c_totalndot"
                                            }
                                          ],
                                          staticClass: "fas fa-times red",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "right",
                                            title:
                                              "Total Amt did not match the computation"
                                          }
                                        }),
                                        _vm._v(" " + _vm._s(dtl.totalndot))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                dtl.totalAmt != dtl.c_totalAmt,
                                              expression:
                                                "dtl.totalAmt != dtl.c_totalAmt"
                                            }
                                          ],
                                          staticClass: "fas fa-times red",
                                          attrs: {
                                            "data-toggle": "tooltip",
                                            "data-placement": "right",
                                            title:
                                              "Total Amt did not match the computation"
                                          }
                                        }),
                                        _vm._v(" " + _vm._s(dtl.totalAmt))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(dtl.headCount))])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row width-100" }, [
                        _c(
                          "h5",
                          [
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "info" } },
                              [_vm._v("Uploaded DMPI DAR rates")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "row width-100 preview-uploaded-dar rate-table"
                        },
                        [
                          _c("div", { staticClass: " table-responsive" }, [
                            _c(
                              "table",
                              {
                                staticClass: "table table-sm table-upload-dar",
                                attrs: { id: "rate" }
                              },
                              [
                                _vm._m(3),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.form.darUploadedRates, function(
                                    rate
                                  ) {
                                    return _c("tr", { key: rate.id }, [
                                      _c("td", [
                                        _c("span", [
                                          _vm._v(_vm._s(rate.activity))
                                        ]),
                                        _c(
                                          "span",
                                          { staticClass: "fl-right" },
                                          [
                                            _c("i", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    rate.checking != "true",
                                                  expression:
                                                    "rate.checking !='true'"
                                                }
                                              ],
                                              staticClass: "fas fa-check green",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title:
                                                  "Rate matched in rate masterfile"
                                              }
                                            }),
                                            _c("i", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    rate.checking == "false",
                                                  expression:
                                                    "rate.checking=='false'"
                                                }
                                              ],
                                              staticClass: "fas fa-times red",
                                              attrs: {
                                                "data-toggle": "tooltip",
                                                "data-placement": "right",
                                                title:
                                                  "Rate did not match the rate masterfile"
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.gl))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.cc))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rd_st))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rd_ot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rd_nd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rd_ndot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shol_st))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shol_ot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shol_nd))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(rate.shol_ndot))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shrd_st))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shrd_ot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.shrd_nd))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(rate.shrd_ndot))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhol_st))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhol_ot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhol_nd))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(rate.rhol_ndot))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhrd_st))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhrd_ot))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhrd_nd))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rate.rhrd_ndot))])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-9" }, [
                          !this.form.refId
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  attrs: {
                                    disabled:
                                      _vm.form.status != "active" &&
                                      _vm.form.status != "-",
                                    type: "submit"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveData()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-save" }),
                                  _vm._v("    Save")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          this.form.refId
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  attrs: {
                                    disabled:
                                      _vm.form.status != "active" &&
                                      _vm.form.status != "-",
                                    type: "submit"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveData()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-save" }),
                                  _vm._v("    Update")
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
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
                              attrs: {
                                disabled: _vm.form.status != "submitted"
                              },
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
                              attrs: {
                                disabled: _vm.form.status != "confirmed"
                              },
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
                              attrs: { disabled: _vm.form.status == "active" },
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
                          ),
                          _vm._v(" "),
                          this.form.refId
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  attrs: {
                                    disabled:
                                      _vm.form.status != "active" &&
                                      _vm.form.status != "-"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteAll()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-trash" }),
                                  _vm._v("    Delete")
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success float-right",
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
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("search-signatory", { on: { selectSign: _vm.setSign } }),
      _vm._v(" "),
      _c("search-dmpi-dar", {
        key: this.soaComponentKey,
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
                _vm._m(4),
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
                            value: _vm.form.reasonofreactivation,
                            expression: "form.reasonofreactivation"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has(
                            "reasonofreactivation"
                          )
                        },
                        attrs: { "aria-label": "With textarea" },
                        domProps: { value: _vm.form.reasonofreactivation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("DMPI DAR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("BNo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Day Type")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Batched By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Encoded By")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("RD")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("SHOL")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("SHRD")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("RHOL")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("RHRD")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "bg-bl-tr", attrs: { scope: "col" } }, [
          _vm._v("Total")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "no-border", attrs: { scope: "col" } })
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Activity")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Field")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Accomplished")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("GL")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("CC")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ST")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("OT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ND")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("NDOT")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Amt")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("HC")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("activity")]),
        _vm._v(" "),
        _c("th", [_vm._v("GL")]),
        _vm._v(" "),
        _c("th", [_vm._v("CC")]),
        _vm._v(" "),
        _c("th", [_vm._v("rd-st")]),
        _vm._v(" "),
        _c("th", [_vm._v("rd-ot")]),
        _vm._v(" "),
        _c("th", [_vm._v("rd-nd")]),
        _vm._v(" "),
        _c("th", [_vm._v("rd-ndot")]),
        _vm._v(" "),
        _c("th", [_vm._v("shol-st")]),
        _vm._v(" "),
        _c("th", [_vm._v("shol-ot")]),
        _vm._v(" "),
        _c("th", [_vm._v("shol-nd")]),
        _vm._v(" "),
        _c("th", [_vm._v("shol-ndot")]),
        _vm._v(" "),
        _c("th", [_vm._v("shrd-st")]),
        _vm._v(" "),
        _c("th", [_vm._v("shrd-ot")]),
        _vm._v(" "),
        _c("th", [_vm._v("shrd-nd")]),
        _vm._v(" "),
        _c("th", [_vm._v("shrd-ndot")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhol-st")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhol-ot")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhol-nd")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhol-ndot")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhrd-st")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhrd-ot")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhrd-nd")]),
        _vm._v(" "),
        _c("th", [_vm._v("rhrd-ndot")])
      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10& ***!
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
          id: "searchDmpiDar",
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
                              _c("td", [_vm._v(_vm._s(soa.BatchNo))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(soa.period))]),
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search DMPI DAR")]),
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
        _c("th", [_vm._v("Batch Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Period")]),
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

/***/ "./resources/js/components/DmpiDarComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/DmpiDarComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DmpiDarComponent.vue?vue&type=template&id=f75b2896& */ "./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896&");
/* harmony import */ var _DmpiDarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DmpiDarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DmpiDarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DmpiDarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiDarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiDarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DmpiDarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiDarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DmpiDarComponent.vue?vue&type=template&id=f75b2896& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DmpiDarComponent.vue?vue&type=template&id=f75b2896&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DmpiDarComponent_vue_vue_type_template_id_f75b2896___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchDmpiDar.vue?vue&type=template&id=109a7c10& */ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10&");
/* harmony import */ var _SearchDmpiDar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDmpiDar.vue?vue&type=script&lang=js& */ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchDmpiDar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/dmpi/dar/SearchDmpiDar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiDar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDmpiDar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiDar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchDmpiDar.vue?vue&type=template&id=109a7c10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/dmpi/dar/SearchDmpiDar.vue?vue&type=template&id=109a7c10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchDmpiDar_vue_vue_type_template_id_109a7c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);