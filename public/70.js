(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchJeep_SearchDriver_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchJeep/SearchDriver.vue */ "./resources/js/components/search/SearchJeep/SearchDriver.vue");
/* harmony import */ var _search_SearchJeep_SearchOperator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchJeep/SearchOperator.vue */ "./resources/js/components/search/SearchJeep/SearchOperator.vue");
/* harmony import */ var _search_SearchJeep_SearchVehicle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchJeep/SearchVehicle.vue */ "./resources/js/components/search/SearchJeep/SearchVehicle.vue");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    'search-vehicle': _search_SearchJeep_SearchVehicle_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      checkedNames: [],
      filteredblogs: [],
      csoatotals: [],
      checkedNamesFilter: [],
      editmode: false,
      equalequal: false,
      allSelected: false,
      jvls: [],
      jvlsobject: {},
      search: '',
      jvcps: {},
      drivers: [],
      vehicles: {},
      rates: {},
      operators: {},
      batch: [],
      jvlfilter: [],
      jvlbalamt: [],
      var1: '',
      var2: '',
      first: '',
      second: '',
      eq: 'true',
      truevalue: '',
      falsevalue: '',
      SearchJeepPlateNo: '',
      DateFrom: '',
      DateTo: '',
      JeepVehicleCollectionPayments: {},
      form: new Form({
        JVLHDRID: '',
        JVLHDRIDFilter: '',
        JVLDate: '',
        OVLNo: '',
        JeepIDLink: '',
        JeepPlateNo: '',
        DriverIDLink: '',
        DriverLastName: '',
        DriverFirstName: '',
        DriverMiddleName: '',
        DriverExtName: '',
        TruckerIDLink: '',
        TruckerLastName: '',
        TruckerFirstName: '',
        TruckerMiddleName: '',
        TruckerExtName: '',
        BillAmount: '',
        LessAdmin: '',
        LessFuel: '',
        NetTrucker: '',
        Status: '',
        SOANumber: '',
        SOADate: '',
        ChargeInvoiceNumber: '',
        GLCode: '',
        CostCenter: '',
        PerDayRate: '',
        NumberofDays: '',
        DriverName: '',
        TruckerName: '',
        CollectedAmount: '',
        CollectedAmountHDR: '',
        BalanceAmountHDR: '',
        BalanceAmount: '',
        ORCRNumber: '',
        ORCRDate: '',
        Remarks: '',
        JVLHDRID_Link: '',
        TotalAmount: '',
        adminRate: ''
      })
    };
  },
  mounted: function mounted() {
    this.$parent.getSearchDriver();
    this.$parent.getSearchOperator();
    this.getAdminRate();
  },
  methods: {
    getAdminRate: function getAdminRate() {
      var _this = this;

      axios.get('api/getJeepRate').then(function (_ref) {
        var data = _ref.data;

        if (data) {
          _this.adminRate = data.rate;
        }
      })["catch"](function (err) {
        toast.fire({
          icon: 'error',
          title: 'Not Successfully fetched data.'
        });
      });
    },
    refreshtotalsoa: function refreshtotalsoa() {
      var _this2 = this;

      this.form.TotalAmount = '';
      this.form.JVLHDRID = this.checkedNames.join();
      axios.get('/api/getcsoasum', {
        params: {
          JVLHDRID: this.form.JVLHDRID
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.csoatotals = data;
        _this2.form.TotalAmount = _this2.csoatotals[0].BillAmount;
        console.log(_this2.form.TotalAmount);
      })["catch"](function (err) {});
    },
    selectAll: function selectAll() {
      var _this3 = this;

      this.checkedNames = [];

      if (this.allSelected == false) {
        for (var user in this.filteredBlogs) {
          this.checkedNames.push(this.filteredBlogs[user].JVLHDRID);
        }

        this.form.JVLHDRID = this.checkedNames.join();
        axios.get('/api/getcsoasum', {
          params: {
            JVLHDRID: this.form.JVLHDRID
          }
        }).then(function (_ref3) {
          var data = _ref3.data;
          _this3.csoatotals = data;
          _this3.form.TotalAmount = _this3.csoatotals[0].BillAmount;
          console.log(_this3.form.TotalAmount);
        })["catch"](function (err) {});
      } else {
        this.form.TotalAmount = '';
      }
    },
    select: function select() {
      this.allSelected = false;
    },
    SearchDateFromTo: function SearchDateFromTo() {//return this.jvls.filter(jvl =>{
      //       return jvl.JVLDate.includes(this.form.DateFrom)
      //    });

      /*var vm = this;
                 var startdate = vm.form.DateFrom;
                 var enddate = vm.form.DateTo;
                 return _.filter(vm.jvls,(function(data){
                   if ((_.isNull(startdate) && _.isNull(enddate))){
                     return true
                   }
                   else{
                     var date = data.JVLDate;
                     return date.includes(date >= startdate && date <= enddate);
                     
                   }
                 }))*/
    },
    SetToUnpaid: function SetToUnpaid() {
      if (this.form.Status == 'POSTED') {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Can not Set to Unpaid. The Status is still POSTED.'
        });
      } else {
        this.form.Status = 'POSTED';
        this.form.BalanceAmount = this.form.BillAmount;
        this.form.CollectedAmount = 0;
        this.$Progress.start();
        this.form.put('api/jvlpaidtoposted/' + this.form.JVLHDRID); //$('#addNew').modal('hide');

        toast.fire({
          icon: 'success',
          title: 'Vehicle Log is back to Unpaid'
        });
        this.deleteEntirePaymentDetail();
        this.loadJVL();
        this.getJVLBalanceAmount();
        this.$Progress.finish();
        this.form.JVLHDRID_Link = this.form.JVLHDRID;
      }
    },
    signalChangeNumberofDays: function signalChangeNumberofDays() {
      this.form.BillAmount = this.form.NumberofDays * this.form.PerDayRate;

      if (this.adminRate) {
        this.form.LessAdmin = this.form.BillAmount * (this.adminRate / 100);
      } else {
        this.form.LessAdmin = this.form.BillAmount * 0.1;
      }

      var semitotal = this.form.LessAdmin + this.form.LessFuel;
      this.form.NetTrucker = this.form.BillAmount - semitotal;
    },
    signalChangeLessFuel: function signalChangeLessFuel() {
      var semitotalss = this.form.LessAdmin + this.form.LessFuel;
      this.form.NetTrucker = this.form.BillAmount - this.form.LessAdmin - this.form.LessFuel;
    },
    signalChangeCollectedAmount: function signalChangeCollectedAmount() {
      this.form.BalanceAmount = this.form.BalanceAmountHDR - this.form.CollectedAmount;

      if (this.form.BalanceAmount == 0) {
        this.form.Status = 'PAID';
      } //this.form.CollectedAmount = this.form.CollectedAmountHDR;

    },
    updateTitle: function updateTitle(updatedTitle) {
      this.form.DriverName = updatedTitle.LastName + ',' + updatedTitle.FirstName + ' ' + updatedTitle.MiddleName + ' ' + updatedTitle.ExtName;
      this.form.DriverIDLink = updatedTitle.id;
      this.form.DriverLastName = updatedTitle.LastName;
      this.form.DriverFirstName = updatedTitle.FirstName;
      this.form.DriverMiddleName = updatedTitle.MiddleName;
      this.form.DriverExtName = updatedTitle.ExtName; // console.log(updatedTitle);
    },
    updateTitleOperator: function updateTitleOperator(updatedTitleOperator) {
      this.form.TruckerName = updatedTitleOperator.LastName + ',' + updatedTitleOperator.FirstName + ' ' + updatedTitleOperator.MiddleName + ' ' + updatedTitleOperator.ExtName;
      this.form.TruckerIDLink = updatedTitleOperator.id;
      this.form.TruckerLastName = updatedTitleOperator.LastName;
      this.form.TruckerFirstName = updatedTitleOperator.FirstName;
      this.form.TruckerMiddleName = updatedTitleOperator.MiddleName;
      this.form.TruckerExtName = updatedTitleOperator.ExtName; // console.log(updatedTitle);
    },
    updateTitleVehicle: function updateTitleVehicle(updatedTitleVehicle) {
      if (this.eq == 'true') {
        this.form.JeepPlateNo = updatedTitleVehicle.PlateNumber;
        this.form.JeepIDLink = updatedTitleVehicle.MVID;
        this.form.TruckerName = updatedTitleVehicle.TruckerName;
        this.form.TruckerIDLink = updatedTitleVehicle.TruckerID;
        this.form.TruckerLastName = updatedTitleVehicle.TruckerLastName;
        this.form.TruckerFirstName = updatedTitleVehicle.TruckerFirstName;
        this.form.TruckerMiddleName = updatedTitleVehicle.TruckerMiddleName;
        this.form.TruckerExtName = updatedTitleVehicle.TruckerExtName;
        this.form.DriverName = updatedTitleVehicle.DriverName;
        this.form.DriverIDLink = updatedTitleVehicle.DriverID;
        this.form.DriverLastName = updatedTitleVehicle.DriverLastName;
        this.form.DriverFirstName = updatedTitleVehicle.DriverFirstName;
        this.form.DriverMiddleName = updatedTitleVehicle.DriverMiddleName;
        this.form.DriverExtName = updatedTitleVehicle.DriverExtName; // console.log(updatedTitle);

        this.getVehicleRate();
      } else {
        this.form.SearchJeepPlateNo = updatedTitleVehicle.PlateNumber;
      }
    },
    getVehicleRate: function getVehicleRate() {
      var _this4 = this;

      axios.get('/api/getvehiclerate', {
        params: {
          JeepIDLink: this.form.JeepIDLink
        }
      }).then(function (response) {
        _this4.batch = response.data;
        _this4.form.PerDayRate = _this4.batch[0].DailyRate;
        _this4.form.NumberofDays = 1;
        _this4.form.BillAmount = _this4.form.NumberofDays * _this4.form.PerDayRate;
        _this4.form.LessFuel = 0;

        if (_this4.adminRate) {
          _this4.form.LessAdmin = _this4.form.BillAmount * (_this4.adminRate / 100);
        } else {
          _this4.form.LessAdmin = _this4.form.BillAmount * 0.1;
        }

        var computation = _this4.form.LessAdmin + _this4.form.LessFuel;
        _this4.form.NetTrucker = _this4.form.BillAmount - computation;
        _this4.form.BalanceAmount = _this4.form.BillAmount;
      })["catch"](function (err) {});
    },
    getJVLFilter: function getJVLFilter() {
      var _this5 = this;

      axios.get('/api/getjvlfilter', {
        params: {
          JeepIDLink: this.form.JeepIDLink
        }
      }).then(function (response) {
        _this5.jvlfilter = response.data; //this.form.PerDayRate=this.jvlfilter[0].BillAmount;
      })["catch"](function (err) {});
    },
    getJVCP: function getJVCP() {
      var _this6 = this;

      axios.get('/api/getjvcp', {
        params: {
          JVLHDRID_Link: this.form.JVLHDRID_Link
        }
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this6.JeepVehicleCollectionPayments = data;
        console.log(JeepVehicleCollectionPayments);
      })["catch"](function (err) {});
    },
    searchsearchVehicleFunction: function searchsearchVehicleFunction() {
      this.eq = 'false';
      $('#searchVehicle').modal('show');
    },
    searchVehicleFunction: function searchVehicleFunction() {
      $('#searchVehicle').modal('show');
    },
    getVehicleIsReal: function getVehicleIsReal() {
      var _this7 = this;

      axios.get('api/vehicle').then(function (_ref5) {
        var data = _ref5.data;
        return _this7.vehicles = data;
      });
      console.log(this.vehicles);
    },
    searchOperatorFunction: function searchOperatorFunction() {
      $('#searchOperator').modal('show');
    },
    getOperatorIsReal: function getOperatorIsReal() {
      var _this8 = this;

      axios.get('api/operator').then(function (_ref6) {
        var data = _ref6.data;
        return _this8.operators = data;
      });
      console.log(this.operators);
    },
    searchDriverFunction: function searchDriverFunction() {
      $('#searchDriver').modal('show');
    },
    getDriverIsReal: function getDriverIsReal() {
      var _this9 = this;

      axios.get('api/driver').then(function (_ref7) {
        var data = _ref7.data;
        return _this9.drivers = data;
      });
      console.log(this.drivers);
    },
    getResults: function getResults() {
      var _this10 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/jvl?page=' + page).then(function (response) {
        _this10.jeepvehiclelog = response.data;
      });
    },
    updateJVL: function updateJVL(JVLHDRID) {
      console.log(this.form.Status);
      console.log(this.form.BalanceAmount);
      this.$Progress.start();
      this.form.put('api/jvl/' + this.form.JVLHDRID); //$('#addNew').modal('hide');

      toast.fire({
        icon: 'success',
        title: 'Jeep Vehicle Log successfully updated'
      });
      this.$Progress.finish();

      if (this.form.CollectedAmount !== '') {
        //KUNG HEADER RA ANG GI UPDATE
        this.form.JVLHDRID_Link = this.form.JVLHDRID;
        this.createJVCP();
      }

      this.loadJVL();
    },
    deleteModal: function deleteModal(JVLHDRID) {
      var _this11 = this;

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
          _this11.$Progress.start();

          _this11.form["delete"]('api/jvl/' + JVLHDRID);

          swal.fire('Deleted!', 'Your file has been deleted.', 'success');

          _this11.$Progress.finish();

          _this11.loadJVL();
        }
      });
    },
    deleteModalJVCP: function deleteModalJVCP(jvcp) {
      var _this12 = this;

      if (this.form.BalanceAmount == 0 && this.form.Status == 'PAID') {
        swal.fire({
          title: 'Ooopsie Doopsieee',
          text: 'The transaction is already PAID.',
          icon: 'error',
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: '#d33'
        }).then(function (result) {
          if (result.value) {}
        });
      } else {
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
            _this12.form.Status = 'PAID';
            _this12.form.BalanceAmount = _this12.form.BalanceAmount + jvcp.CollectedAmount;
            var collectedamount = _this12.form.BillAmount - _this12.form.BalanceAmount;
            _this12.form.CollectedAmount = collectedamount;
            console.log('Bill Amount Before Delete:' + _this12.form.BillAmount);
            console.log('Balance Amount Before Delete:' + _this12.form.BalanceAmount);
            console.log('Selected Payment Detail Collected Amount Before Delete:' + jvcp.CollectedAmount);
            console.log('Value of Collected Amount Variable' + _this12.form.CollectedAmount);
            _this12.form.ORCRNumber = jvcp.ORCRNumber;
            _this12.form.ORCRDate = jvcp.ORCRDate;
            _this12.form.Remarks = jvcp.Remarks;

            _this12.$Progress.start(); //UPDATE FIRST


            _this12.form.put('api/jvl/' + _this12.form.JVLHDRID); //$('#addNew').modal('hide');


            _this12.loadJVL();

            _this12.form.JVLHDRID_Link = _this12.form.JVLHDRID; //END UPDATE

            _this12.form["delete"]('api/jvcp/' + jvcp.JVCDTLID);

            swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this12.getJVCP();

            _this12.getJVLBalanceAmount();

            _this12.$Progress.finish();

            _this12.form.JVLHDRID_Link = jvcp.JVLHDRID_Link;
            _this12.form.CollectedAmount = '';
            _this12.form.ORCRNumber = '';
            _this12.form.ORCRDate = '';
            _this12.form.Remarks = '';
          }
        });
      }
    },
    editModal: function editModal(jvl) {
      this.form.JVLHDRID_Link = jvl.JVLHDRID;
      this.getJVCP(); //console.log(this.form.JVLHDRID_Link);

      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(jvl);
      this.form.CollectedAmount = '';
      this.form.BalanceAmount = jvl.BalanceAmount;
      this.form.BalanceAmountHDR = jvl.BalanceAmount;
      this.form.ORCRNumber = '';
      this.form.ORCRDate = '';
      this.form.Remarks = '';
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
      var today = new Date().toISOString().slice(0, 10);
      this.form.JVLDate = today;
    },
    closeModalMultiple: function closeModalMultiple() {
      location.reload();
      $('#addNewMultiple').modal('hide');
    },
    newModalMultiple: function newModalMultiple() {
      var _this13 = this;

      this.var1 = 0;
      this.first = 0;
      var i = 0;
      this.form.JVLHDRID = this.checkedNames;
      this.$Progress.start();

      if (this.checkedNames == '') {
        this.$Progress.fail();
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Transaction Selected.'
        });
      } else {
        axios.get('/api/getjvlfilter', {
          params: {
            JVLHDRID: this.checkedNames
          }
        }).then(function (response) {
          _this13.jvlfilter = response.data;

          for (i = 0; i < _this13.jvlfilter.length; i++) {
            if (_this13.jvlfilter[i].BillAmount != _this13.jvlfilter[0].BillAmount) {
              _this13.$Progress.fail();

              swal.fire({
                title: 'Ooopsie Doopsieee',
                text: 'The transactions that you have selected are not uniform in Bill Amount. Please review.',
                icon: 'error',
                showCancelButton: true,
                showConfirmButton: false,
                cancelButtonColor: '#d33'
              }).then(function (result) {
                if (result.value) {} else {
                  $('#addNewMultiple').modal('hide');
                }
              });
              break;
            } else {
              _this13.editmode = false;

              _this13.form.reset();

              _this13.form.BillAmount = _this13.jvlfilter[0].BillAmount;
              _this13.form.BalanceAmount = _this13.jvlfilter[0].BalanceAmount;
              _this13.form.BalanceAmountHDR = _this13.jvlfilter[0].BalanceAmount; //this.form.CollectedAmount = this.jvlfilter[0].CollectedAmount;
              //this.form.BalanceAmount = this.form.BillAmount - this.form.CollectedAmount;

              $('#addNewMultiple').modal('show');
            }
          }
        }); //END AXIOS

        this.$Progress.finish();
      }
    },
    doSomething: function doSomething(data) {
      console.log(data);
    },
    loadJVL: function loadJVL() {
      var _this14 = this;

      //axios.get("api/jvl").then(({ data }) => (this.jvls = data));
      axios.get('api/getjvl').then(function (response) {
        _this14.jvls = response.data;
        console.log(_this14.jvls);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadJVCP: function loadJVCP() {
      var _this15 = this;

      axios.get('api/jvcp').then(function (_ref8) {
        var data = _ref8.data;
        return _this15.jvcps = data;
      });
    },
    createJVL: function createJVL() {
      var _this16 = this;

      /*this.$Progress.start();
         this.form.post("api/driver");
           $('#addNew').modal('hide');
         $('.modal-backdrop').remove();
         toast.fire({
           icon: "success",
           title: "Driver successfully created"
         });
         this.$Progress.finish();
         this.loadDriver();*/
      this.$Progress.start();
      this.form.post('api/jvl').then(function () {
        //$('#addNew').modal('hide');
        //$('.modal-backdrop').remove();
        _this16.form.reset();

        var today = new Date().toISOString().slice(0, 10);
        _this16.form.JVLDate = today;
        toast.fire({
          icon: 'success',
          title: 'Jeep Vehicle Log successfully created'
        });

        _this16.$Progress.finish();

        _this16.loadJVL();
      })["catch"](function () {
        _this16.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Jeep Vehicle Log not added successfully'
        });
      });
    },
    createJVCP: function createJVCP() {
      var _this17 = this;

      this.form.post('api/jvcp').then(function () {
        toast.fire({
          icon: 'success',
          title: 'Jeep Vehicle Log successfully created'
        });

        _this17.getJVCP();

        _this17.form.CollectedAmount = ''; //this.form.BalanceAmount=0;

        _this17.form.ORCRNumber = '';
        _this17.form.ORCRDate = '';
        _this17.form.Remarks = '';

        _this17.getJVLBalanceAmount();
      })["catch"](function () {
        _this17.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Jeep Vehicle Collection Payment not added successfully'
        });
      });
    },
    getJVLBalanceAmount: function getJVLBalanceAmount() {
      var _this18 = this;

      axios.get('/api/getjvlbalanceamount', {
        params: {
          JVLHDRID: this.form.JVLHDRID
        }
      }).then(function (response) {
        _this18.jvlbalamt = response.data;
        _this18.form.BalanceAmountHDR = _this18.jvlbalamt[0].BalanceAmount;
        console.log(_this18.jvlbalamt[0].BalanceAmount);
      })["catch"](function (err) {});
    },
    deleteEntirePaymentDetail: function deleteEntirePaymentDetail() {
      this.form["delete"]('api/deleteentirepaymentdetail/' + this.form.JVLHDRID);
      swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      this.form.JVLHDRID_Link = this.form.JVLHDRID;
      this.getJVCP();
    },
    createJVCPMultiple: function createJVCPMultiple() {
      var _this19 = this;

      if (this.form.BalanceAmount == 0) {
        this.form.Status = 'PAID';
      } else {
        this.form.Status = 'POSTED';
      }

      this.editmode = false;
      swal.fire({
        title: 'Are you sure you watn to save?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(function (result) {
        if (result.value) {
          _this19.$Progress.start(); ////console.log(this.checkedNames);


          var arr = 0;

          for (var i = 0; i < _this19.checkedNames.length; i++) {
            arr = i;
            console.log(_this19.checkedNames.length);
            _this19.form.JVLHDRID_Link = _this19.checkedNames[i]; //console.log(this.form.JVLHDRID_Link);
            //UPDATE VEHICLE LOG HDR

            _this19.form.put('api/jvljvcp/' + _this19.checkedNames[i]);

            $('#addNewMultiple').modal('hide'); //END UPDATE
            //CREATE INSERT TO JEEP VEHICLE COLLECTION PAYMENT

            _this19.form.post('api/jvcp').then(function () {
              //toast.fire({
              //   icon: "success",
              //  title: "Transaction done."
              //});
              swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }); //END CREATE

          }

          _this19.$Progress.finish(); //location.reload();


          _this19.loadJVL();

          _this19.checkedNames = [];
        }
      });
    }
  },
  created: function created() {
    var _this20 = this;

    Fire.$on('searchingJVL', function () {
      var query = _this20.$parent.search;
      axios.get('api/findJVL?q=' + query).then(function (data) {
        _this20.jvls = data.data;
      })["catch"](function () {});
    });
    this.loadJVL(); //setInterval(() => this.loadDriver(),3000);
  },
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this21 = this;

      if (this.DateFrom !== '' || this.DateTo !== '' && this.SearchJeepPlateNo !== '') {
        this.SearchJeepPlateNo = '';
        var vm = this;
        var startdate = vm.DateFrom;
        var enddate = vm.DateTo;
        return _.filter(vm.jvls, function (data) {
          if (_.isNull(startdate) && _.isNull(enddate)) {
            return true;
          } else {
            var date = data.JVLDate;
            return date >= startdate && date <= enddate;
          }
        });
      } else {
        this.DateFrom = '';
        this.DateTo = ''; //return this.jvls.filter(jvl =>{
        //return jvl.JeepPlateNo.includes(this.form.JeepPlateNo)
        //});

        return this.jvls.filter(function (samsung) {
          return _this21.SearchJeepPlateNo.toLowerCase().split(' ').every(function (v) {
            return samsung.JeepPlateNo.toLowerCase().includes(v);
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-readonly] {\r\n\tpointer-events: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", attrs: { id: "sweget" } },
    [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "card" }, [
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
                            "\n                  Master File\n                "
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
                                  attrs: { to: "/vehiclelist" }
                                },
                                [_c("a", [_vm._v("JEEP Vehicle List")])]
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
                                  attrs: { to: "/vehiclerate" }
                                },
                                [_c("a", [_vm._v("JEEP Rate List")])]
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
                                  attrs: { to: "/ratePercent" }
                                },
                                [_c("a", [_vm._v("Admin Rate Percentage")])]
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
                            "\n                  Transactions\n                "
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
                                  attrs: { to: "/jeepvehiclelogentry" }
                                },
                                [_c("a", [_vm._v("Jeep Vehicle Log Entry")])]
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
                                  attrs: { to: "/createsoa" }
                                },
                                [_c("a", [_vm._v("Create Jeep SOA")])]
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
                                  attrs: { to: "/soatransactions" }
                                },
                                [_c("a", [_vm._v("SOA Transaction")])]
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
                            "\n                  Jeep Reports\n                "
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
                                  attrs: { to: "/reportlistJVL" }
                                },
                                [_c("a", [_vm._v("Standard Jeep Report")])]
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
                                  attrs: { to: "/reportlistJVLPerJeep" }
                                },
                                [
                                  _c("a", [
                                    _vm._v(
                                      "Jeepney's Vehicle Log Billing Report"
                                    )
                                  ])
                                ]
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
                                  attrs: { to: "/JeepSOATransmittal" }
                                },
                                [_c("a", [_vm._v("Jeepney's SOA Transmittal")])]
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
          _c("div", { staticClass: "card-header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "form",
              {
                staticStyle: {
                  "border-style": "solid",
                  "border-color": "coral"
                }
              },
              [
                _c("div", { staticClass: "form-inline" }, [
                  _c(
                    "div",
                    {
                      staticClass: "input-group mb-3 input-group-sm",
                      staticStyle: {
                        "margin-top": "10px",
                        "margin-left": "5px"
                      }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.DateFrom,
                            expression: "DateFrom"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date", name: "DateFrom" },
                        domProps: { value: _vm.DateFrom },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.DateFrom = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input-group mb-3 input-group-sm",
                      staticStyle: {
                        "margin-top": "10px",
                        "margin-left": "5px"
                      }
                    },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.DateTo,
                            expression: "DateTo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date", name: "DateTo" },
                        domProps: { value: _vm.DateTo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.DateTo = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input-group mb-3 input-group-sm",
                      staticStyle: {
                        "margin-top": "10px",
                        "margin-left": "5px"
                      }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.filterKey = "all"
                            }
                          }
                        },
                        [_vm._v("Search")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input-group mb-3 input-group-sm",
                      staticStyle: {
                        "margin-left": "5px",
                        "margin-top": "10px"
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.SearchJeepPlateNo,
                            expression: "SearchJeepPlateNo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "SearchJeepPlateNo",
                          placeholder: "Jeep Plate Number"
                        },
                        domProps: { value: _vm.SearchJeepPlateNo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.SearchJeepPlateNo = $event.target.value
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
                              attrs: { variant: "outline-primary", size: "sm" },
                              on: {
                                click: function($event) {
                                  return _vm.searchsearchVehicleFunction()
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
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }),
            _vm._v(" "),
            _c("br")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive pre-scrollable" },
            [
              _c("table", { staticClass: "table table-hover" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.allSelected,
                            expression: "allSelected"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.allSelected)
                            ? _vm._i(_vm.allSelected, null) > -1
                            : _vm.allSelected
                        },
                        on: {
                          click: _vm.selectAll,
                          change: function($event) {
                            var $$a = _vm.allSelected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.allSelected = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.allSelected = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.allSelected = $$c
                            }
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("VL No")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Plate No")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Driver")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Operator")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Billable Amt")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Less Admin")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Less Fuel")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Net Operator")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Status")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("SOA No")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("SOA Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Charge Invoice No")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Modify")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.filteredBlogs, function(jvl) {
                    return _c("tr", { key: jvl.JVLHDRID }, [
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.checkedNames,
                              expression: "checkedNames"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: jvl.JVLHDRID,
                            checked: Array.isArray(_vm.checkedNames)
                              ? _vm._i(_vm.checkedNames, jvl.JVLHDRID) > -1
                              : _vm.checkedNames
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.checkedNames,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = jvl.JVLHDRID,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.checkedNames = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.checkedNames = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.checkedNames = $$c
                              }
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.JVLDate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.OVLNo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.JeepPlateNo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.DriverName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.TruckerName))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            "Php" +
                              jvl.BillAmount.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2
                              })
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.LessAdmin))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.LessFuel))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            "Php" +
                              jvl.NetTrucker.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2
                              })
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.Status))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.SOANumber))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.SOADate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.ChargeInvoiceNumber))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.editModal(jvl)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v("\n                  /\n                  "),
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.deleteModal(jvl.JVLHDRID)
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
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-warning",
                on: { click: _vm.newModalMultiple }
              },
              [
                _vm._v(
                  "\n              Add New Multiple Jeep Vehicle Collection Payment\n              "
                ),
                _c("i", { staticClass: "fa fa-user-plus fa fw" })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-success", on: { click: _vm.newModal } },
              [
                _vm._v(
                  "\n              Add New Jeep Vehicle Log\n              "
                ),
                _c("i", { staticClass: "fa fa-user-plus fa fw" })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-dark",
                on: { click: _vm.refreshtotalsoa }
              },
              [
                _vm._v(
                  "\n              Refresh SOA Total Amount\n              "
                ),
                _c("i", { staticClass: "fa fa-spinner fa fw" })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticStyle: { float: "right" } }, [
              _vm._v("Total SOA Amount : " + _vm._s(_vm.form.TotalAmount))
            ])
          ])
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
              staticClass: "modal-dialog modal-xl",
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
                    [_vm._v("Add New Jeep Vehicle Log")]
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
                    [_vm._v("Update Jeep Vehicle Log's Info")]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode ? _vm.updateJVL() : _vm.createJVL()
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
                            { staticClass: "input-group mb-3 input-group-sm" },
                            [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.JVLDate,
                                    expression: "form.JVLDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "JVLDate",
                                  type: "date",
                                  required: ""
                                },
                                domProps: { value: _vm.form.JVLDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "JVLDate",
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
                                    value: _vm.form.JVLHDRID,
                                    expression: "form.JVLHDRID"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "hidden" },
                                domProps: { value: _vm.form.JVLHDRID },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "JVLHDRID",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
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
                                    value: _vm.form.OVLNo,
                                    expression: "form.OVLNo"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "OVLNo" },
                                domProps: { value: _vm.form.OVLNo },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "OVLNo",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.JeepPlateNo,
                                    expression: "form.JeepPlateNo"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "JeepPlateNo",
                                  placeholder: "Jeep Plate Number",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.JeepPlateNo },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "JeepPlateNo",
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
                                    value: _vm.form.JeepIDLink,
                                    expression: "form.JeepIDLink"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "JeepIDLink",
                                  placeholder: "JeepIDLink"
                                },
                                domProps: { value: _vm.form.JeepIDLink },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "JeepIDLink",
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
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
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
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "DriverName"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "DriverName",
                                  placeholder: "Driver Name",
                                  readonly: ""
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
                                domProps: { value: _vm.form.DriverMiddleName },
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
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.DriverIDLink,
                                    expression: "form.DriverIDLink"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "DriverIDLink",
                                  placeholder: "DriverIDLink"
                                },
                                domProps: { value: _vm.form.DriverIDLink },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "DriverIDLink",
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
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.TruckerName,
                                    expression: "form.TruckerName"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "TruckerName"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "TruckerName",
                                  placeholder: "Trucker Name",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.TruckerName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerName",
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
                                    value: _vm.form.TruckerIDLink,
                                    expression: "form.TruckerIDLink"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "TruckerIDLink",
                                  placeholder: "TruckerIDLink"
                                },
                                domProps: { value: _vm.form.TruckerIDLink },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerIDLink",
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
                                    value: _vm.form.TruckerLastName,
                                    expression: "form.TruckerLastName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "TruckerLastName",
                                  placeholder: "TruckerLastName"
                                },
                                domProps: { value: _vm.form.TruckerLastName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerLastName",
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
                                    value: _vm.form.TruckerFirstName,
                                    expression: "form.TruckerFirstName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "TruckerFirstName",
                                  placeholder: "TruckerFirstName"
                                },
                                domProps: { value: _vm.form.TruckerFirstName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerFirstName",
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
                                    value: _vm.form.TruckerMiddleName,
                                    expression: "form.TruckerMiddleName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "TruckerMiddleName",
                                  placeholder: "TruckerMiddleName"
                                },
                                domProps: { value: _vm.form.TruckerMiddleName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerMiddleName",
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
                                    value: _vm.form.TruckerExtName,
                                    expression: "form.TruckerExtName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "TruckerExtName",
                                  placeholder: "TruckerExtName"
                                },
                                domProps: { value: _vm.form.TruckerExtName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TruckerExtName",
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
                                          return _vm.searchOperatorFunction()
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
                              staticStyle: { "text-transform": "uppercase" }
                            },
                            [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.GLCode,
                                    expression: "form.GLCode"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "GLCode" },
                                domProps: { value: _vm.form.GLCode },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "GLCode",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
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
                              _vm._m(7),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.CostCenter,
                                    expression: "form.CostCenter"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "CostCenter" },
                                domProps: { value: _vm.form.CostCenter },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "CostCenter",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(8),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.PerDayRate,
                                    expression: "form.PerDayRate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "PerDayRate" },
                                domProps: { value: _vm.form.PerDayRate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "PerDayRate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(9),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.NumberofDays,
                                    expression: "form.NumberofDays"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "NumberofDays" },
                                domProps: { value: _vm.form.NumberofDays },
                                on: {
                                  input: [
                                    function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "NumberofDays",
                                        $event.target.value
                                      )
                                    },
                                    function($event) {
                                      return _vm.signalChangeNumberofDays()
                                    }
                                  ]
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-inline" }, [
                          _c(
                            "div",
                            { staticClass: "input-group mb-3 input-group-sm" },
                            [
                              _vm._m(10),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.BillAmount,
                                    expression: "form.BillAmount"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "BillAmount",
                                  "data-readonly": ""
                                },
                                domProps: { value: _vm.form.BillAmount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BillAmount",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(11),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.LessAdmin,
                                    expression: "form.LessAdmin"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "LessAdmin" },
                                domProps: { value: _vm.form.LessAdmin },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "LessAdmin",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(12),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.LessFuel,
                                    expression: "form.LessFuel"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "LessFuel" },
                                domProps: { value: _vm.form.LessFuel },
                                on: {
                                  input: [
                                    function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "LessFuel",
                                        $event.target.value
                                      )
                                    },
                                    function($event) {
                                      return _vm.signalChangeLessFuel()
                                    }
                                  ]
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(13),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.NetTrucker,
                                    expression: "form.NetTrucker"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "NetTrucker",
                                  "data-readonly": ""
                                },
                                domProps: { value: _vm.form.NetTrucker },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "NetTrucker",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-inline",
                            staticStyle: {
                              "border-style": "solid",
                              "border-color": "coral"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "margin-left": "5px" }
                              },
                              [
                                _vm._m(14),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.CollectedAmount,
                                      expression: "form.CollectedAmount"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "CollectedAmount"
                                  },
                                  domProps: { value: _vm.form.CollectedAmount },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "CollectedAmount",
                                          $event.target.value
                                        )
                                      },
                                      function($event) {
                                        return _vm.signalChangeCollectedAmount()
                                      }
                                    ]
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.editmode,
                                    expression: "editmode"
                                  }
                                ],
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "margin-left": "5px" }
                              },
                              [
                                _vm._m(15),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.BalanceAmount,
                                      expression: "form.BalanceAmount"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "BalanceAmount",
                                    "data-readonly": ""
                                  },
                                  domProps: { value: _vm.form.BalanceAmount },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "BalanceAmount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "margin-left": "5px" }
                              },
                              [
                                _vm._m(16),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.ORCRNumber,
                                      expression: "form.ORCRNumber"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", name: "ORCRNumber" },
                                  domProps: { value: _vm.form.ORCRNumber },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "ORCRNumber",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "margin-left": "5px" }
                              },
                              [
                                _vm._m(17),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.ORCRDate,
                                      expression: "form.ORCRDate"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "date",
                                    type: "date",
                                    name: "ORCRDate"
                                  },
                                  domProps: { value: _vm.form.ORCRDate },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "ORCRDate",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "margin-left": "5px" }
                              },
                              [
                                _vm._m(18),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.Remarks,
                                      expression: "form.Remarks"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", name: "Remarks" },
                                  domProps: { value: _vm.form.Remarks },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "Remarks",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pre-scrollable" }, [
                          _c(
                            "table",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.editmode,
                                  expression: "editmode"
                                }
                              ],
                              staticClass: "table table-hover"
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _vm._m(19),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.JeepVehicleCollectionPayments,
                                    function(jvcp) {
                                      return _c("tr", { key: jvcp.JVCDTLID }, [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              "Php" +
                                                jvcp.CollectedAmount.toLocaleString(
                                                  undefined,
                                                  {
                                                    maximumFractionDigits: 2,
                                                    minimumFractionDigits: 2
                                                  }
                                                )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatDate")(
                                                jvcp.ORCRDate
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(jvcp.ORCRNumber))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "a",
                                            {
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.deleteModalJVCP(
                                                    jvcp
                                                  )
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
                                    }
                                  )
                                ],
                                2
                              )
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
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.SetToUnpaid }
                        },
                        [_vm._v("Set to Unpaid")]
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
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "addNewMultiple",
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
              staticClass: "modal-dialog modal-xl",
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
                    [_vm._v("Add New Multiple Jeep Vehicle Log")]
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
                    [_vm._v("Update Multiple Jeep Vehicle Log's Info")]
                  ),
                  _vm._v(" "),
                  _vm._m(20)
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode
                          ? _vm.updateJVL()
                          : _vm.createJVCPMultiple()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-inline",
                          staticStyle: {
                            "border-style": "solid",
                            "border-color": "coral"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(21),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.BillAmount,
                                    expression: "form.BillAmount"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "BillAmount",
                                  "data-readonly": ""
                                },
                                domProps: { value: _vm.form.BillAmount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BillAmount",
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
                                    value: _vm.form.JVLHDRID_Link,
                                    expression: "form.JVLHDRID_Link"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "hidden" },
                                domProps: { value: _vm.form.JVLHDRID_Link },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "JVLHDRID_Link",
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
                                    value: _vm.form.CollectedAmount,
                                    expression: "form.CollectedAmount"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "CollectedAmount"
                                },
                                domProps: { value: _vm.form.CollectedAmount },
                                on: {
                                  input: [
                                    function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "CollectedAmount",
                                        $event.target.value
                                      )
                                    },
                                    function($event) {
                                      return _vm.signalChangeCollectedAmount()
                                    }
                                  ]
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(22),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.BalanceAmount,
                                    expression: "form.BalanceAmount"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "BalanceAmount" },
                                domProps: { value: _vm.form.BalanceAmount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BalanceAmount",
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
                                    value: _vm.form.BalanceAmountHDR,
                                    expression: "form.BalanceAmountHDR"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "BalanceAmountHDR"
                                },
                                domProps: { value: _vm.form.BalanceAmountHDR },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BalanceAmountHDR",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(23),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.ORCRNumber,
                                    expression: "form.ORCRNumber"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "ORCRNumber" },
                                domProps: { value: _vm.form.ORCRNumber },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "ORCRNumber",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(24),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.ORCRDate,
                                    expression: "form.ORCRDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "date",
                                  type: "date",
                                  name: "ORCRDate"
                                },
                                domProps: { value: _vm.form.ORCRDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "ORCRDate",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "input-group mb-3 input-group-sm",
                              staticStyle: { "margin-left": "5px" }
                            },
                            [
                              _vm._m(25),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.Remarks,
                                    expression: "form.Remarks"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "Remarks" },
                                domProps: { value: _vm.form.Remarks },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "Remarks",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]),
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
      _c("div", {
        staticClass: "modal fade",
        attrs: {
          id: "loading",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      }),
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
      _c("search-vehicle", {
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
      _c("b", [_vm._v("Jeep Vehicle Log Entry")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Search Date From")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Search Date To")
      ])
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Date")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("VL No")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("GL Code")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Cost Center")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Per Day Rate")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Number of Days")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Bill Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Less Admin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Less Fuel")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Net Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Collected Amount")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Balance Amount")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("OR No./CR No.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("OR/CR Date")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Remarks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Amount Collected")]),
      _vm._v(" "),
      _c("th", [_vm._v("OR/CR Date")]),
      _vm._v(" "),
      _c("th", [_vm._v("OR/CR No")]),
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
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Collected Amount")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Balance Amount")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("OR No./CR No.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("OR/CR Date")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Remarks")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JeepVehicleLogComponent.vue?vue&type=template&id=3686e437& */ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437&");
/* harmony import */ var _JeepVehicleLogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JeepVehicleLogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JeepVehicleLogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/JeepComponents/JeepVehicleLogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepVehicleLogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JeepVehicleLogComponent.vue?vue&type=template&id=3686e437& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/JeepComponents/JeepVehicleLogComponent.vue?vue&type=template&id=3686e437&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JeepVehicleLogComponent_vue_vue_type_template_id_3686e437___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);