(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchJeep_SearchClient_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/SearchJeep/SearchClient.vue */ "./resources/js/components/search/SearchJeep/SearchClient.vue");
/* harmony import */ var _search_SearchJeep_SearchSignatorys_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/SearchJeep/SearchSignatorys.vue */ "./resources/js/components/search/SearchJeep/SearchSignatorys.vue");
/* harmony import */ var _search_SearchOVL_SearchOVLSOA_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/SearchOVL/SearchOVLSOA.vue */ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'search-client': _search_SearchJeep_SearchClient_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'search-signatorys': _search_SearchJeep_SearchSignatorys_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-SOA': _search_SearchOVL_SearchOVLSOA_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _ref;

    return {
      signator: "",
      signatorSOA: "",
      content: "",
      arrayshit: [],
      csoas: [],
      csoacounts: [],
      csoatotals: [],
      soaforupdate: [],
      filteredblogs: [],
      checkedNames: [],
      clients: [],
      checkedNamesFilter: [],
      editmode: false,
      equalequal: false,
      jvls: [],
      search: "",
      jvcps: {},
      drivers: [],
      vehicles: {},
      rates: {},
      operators: {},
      batch: [],
      jvlfilter: [],
      jvlbalamt: [],
      var1: "",
      var2: "",
      first: "",
      second: "",
      eq: "true",
      truevalue: "",
      falsevalue: "",
      allSelected: false,
      DateFrom: "",
      DateTo: "",
      SearchJeepPlateNo: "",
      JeepVehicleCollectionPayments: {},
      form: new Form((_ref = {
        OVLVLHDRID: "",
        OVLVLHDRIDFilter: "",
        OVLSoaDate: "",
        OVLNo: "",
        JeepIDLink: "",
        JeepPlateNo: "",
        DriverIDLink: "",
        DriverLastName: "",
        DriverFirstName: "",
        DriverMiddleName: "",
        DriverExtName: "",
        TruckerIDLink: "",
        TruckerLastName: "",
        TruckerFirstName: "",
        TruckerMiddleName: "",
        TruckerExtName: "",
        BillAmount: "",
        LessAdmin: "",
        LessFuel: "",
        NetTrucker: "",
        Status: "",
        SOANumber: "",
        SOADate: "",
        ChargeInvoiceNumber: "",
        GLCode: "",
        CostCenter: "",
        PerDayRate: "",
        NumberofDays: "",
        DriverName: "",
        TruckerName: "",
        CollectedAmount: "",
        CollectedAmountHDR: "",
        BalanceAmountHDR: "",
        BalanceAmount: "",
        ORCRNumber: "",
        ORCRDate: "",
        Remarks: "",
        OVLVLHDRID_Link: ""
      }, _defineProperty(_ref, "Status", ""), _defineProperty(_ref, "GSCSoaSeriesNo", ""), _defineProperty(_ref, "TotalAmount", ""), _defineProperty(_ref, "BilledName", ""), _defineProperty(_ref, "BilledToIDLink", ""), _defineProperty(_ref, "BilledAddress", ""), _defineProperty(_ref, "BilledTin", ""), _defineProperty(_ref, "THRUName", ""), _defineProperty(_ref, "THRUPos", ""), _defineProperty(_ref, "NotedBy", ""), _defineProperty(_ref, "NotedByPos", ""), _defineProperty(_ref, "CheckedBy", ""), _defineProperty(_ref, "CheckedByPos", ""), _defineProperty(_ref, "PreparedBy", ""), _defineProperty(_ref, "PreparedByPos", ""), _defineProperty(_ref, "Soa_OVLID", ""), _defineProperty(_ref, "Salutation", ""), _defineProperty(_ref, "BodyofLetter", ""), _ref)),
      formSOA: new Form({
        Soa_OVLID: "",
        GSCSoaSeriesNo: "",
        Status: "",
        BilledToIDLink: "",
        BilledName: "",
        BilledAddress: "",
        BilledTIN: "",
        THRUName: "",
        THRUPos: "",
        OVLSoaDate: "",
        PreparedBy: "",
        PreparedByPos: "",
        CheckedBy: "",
        CheckedByPos: "",
        NotedBy: "",
        NotedByPos: "",
        Salutation: "",
        BodyofLetter: "",
        ApprovedBy: "",
        ApprovedByPos: "",
        CDateFrom: "",
        CDateTo: ""
      })
    };
  },
  mounted: function mounted() {//this.$parent.getSearchDriver();
    //this.$parent.getSearchOperator();
  },
  methods: {
    check: function check(e) {
      var _this = this;

      this.form.OVLVLHDRID = this.checkedNames.join();

      if (this.form.OVLVLHDRID == "") {
        this.form.TotalAmount = 0;
        this.allSelected = false;
      } else {
        axios.get('/api/getcovlsoasum', {
          params: {
            OVLVLHDRID: this.form.OVLVLHDRID
          }
        }).then(function (_ref2) {
          var data = _ref2.data;
          _this.csoatotals = data;
          _this.form.TotalAmount = _this.csoatotals[0].BillAmount;
          console.log(_this.form.TotalAmount);
        })["catch"](function (err) {});
      }
    },
    soapost: function soapost() {
      var _this2 = this;

      if (typeof this.formSOA.Soa_OVLID == "undefined" || this.formSOA.Soa_OVLID == "") {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No SOA Searched.'
        });
      } else {
        swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        }).then(function (result) {
          if (result.value) {
            _this2.$Progress.start();

            _this2.formSOA.Status = "POSTED";
            axios.get('/api/updatestatusovlsoa', {
              params: {
                Soa_OVLID: _this2.formSOA.Soa_OVLID,
                Status: _this2.formSOA.Status
              }
            }).then(function (_ref3) {//this.csoas = data;

              var data = _ref3.data;
            })["catch"](function (err) {}); //UPDATE SOA

            _this2.form.OVLVLHDRID = _this2.checkedNames.join();
            axios.get('/api/updateovlvlsoa', {
              params: {
                OVLVLHDRID: _this2.form.OVLVLHDRID,
                Soa_OVLID: _this2.formSOA.Soa_OVLID,
                GSCSoaSeriesNo: _this2.formSOA.GSCSoaSeriesNo,
                OVLSoaDate: _this2.formSOA.OVLSoaDate
              }
            }).then(function (_ref4) {
              var data = _ref4.data;
              _this2.csoatotals = data;
            })["catch"](function (err) {}); //END UPDATE SOA

            _this2.loadJVL();

            swal.fire('Posted!', 'Your file has been posted!', 'success');

            _this2.$Progress.finish(); //location.reload();


            _this2.loadJVL();

            $('#addNewMultiple').modal('hide');
            $('.modal-backdrop').remove();
            _this2.checkedNames = [];
            _this2.allSelected = false;
          }
        });
      }
    },
    fakeVmodel: function fakeVmodel(e) {
      this.content = e.target.innerText;
    },
    downloadPDFSOA: function downloadPDFSOA() {
      console.log(this.formSOA.Soa_OVLID);

      if (typeof this.formSOA.Soa_OVLID == "undefined" || this.formSOA.Soa_OVLID == "") {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No SOA Searched.'
        });
      } else {
        // var cont  = "<div align='center' text-indent='50px' style='font-size: 14px;'>  &#160;"+document.getElementById('stringinput').innerHTML +"</div>";
        //console.log(cont);
        var imageData = 'data:image/png;base64,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';
        window.jsPDF = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
        var pdf = new jsPDF();
        pdf.setProperties({
          title: 'SOA of ' + this.formSOA.GSCSoaSeriesNo + '.pdf'
        }); //HEADER

        pdf.setFont("helvetica");
        pdf.setFontType("bold");
        pdf.setFontSize(14);
        pdf.text('GENERAL SERVICES MULTI-PURPOSE COOPERATIVE', 105, 10, 'center');
        pdf.setFontSize(10);
        pdf.setFontType("regular");
        pdf.text('Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon', 105, 14, 'center');
        pdf.text('CDA # 9520-10019987-1 / TIN 411-478-949-000', 105, 18, 'center');
        pdf.addImage(imageData, 'JPEG', 20, 5, 20, 20);
        pdf.setLineWidth(.5);
        pdf.line(15, 27, 195, 27);
        pdf.setLineWidth(1);
        pdf.line(15, 28, 195, 28); //END HEADER
        //BODY

        pdf.setFont("helvetica");
        pdf.setFontSize(13);
        pdf.setFontType("bold");
        pdf.text('STATEMENT OF ACCOUNT', 105, 40, 'center');
        pdf.setFont("helvetica");
        pdf.setFontSize(9);
        pdf.setFontType("regular");
        pdf.text('CLIENT:', 15, 50, 'left');
        pdf.text(this.formSOA.BilledName, 40, 50, 'left');
        pdf.text('ADDRESS:', 15, 55, 'left');
        var splitTitle = pdf.splitTextToSize(this.formSOA.BilledAddress, 90);
        pdf.text(40, 55, splitTitle);
        var widths = pdf.getTextWidth(this.formSOA.BilledAddress);

        if (widths < 90) {
          pdf.text('VAT REG. TIN:', 15, 60, 'left');
          pdf.text(this.formSOA.BilledTin, 40, 60);
        } else {
          pdf.text('VAT REG. TIN:', 15, 65, 'left');
          pdf.text(this.formSOA.BilledTin, 40, 65);
        } //ACCROSS


        pdf.setFontType("regular");
        pdf.setFontSize(9);
        pdf.text('Document Number:', 130, 50, 'left');
        pdf.setFontSize(9);
        pdf.text(this.formSOA.GSCSoaSeriesNo, 156, 50, 'left');
        var datetoday = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.formSOA.OVLSoaDate).format('MMMM DD, YYYY');
        pdf.setFontType("regular");
        pdf.setFontSize(9);
        pdf.text('Document Date:', 130, 55, 'left');
        pdf.setFontSize(9);
        pdf.text(datetoday, 156, 55, 'left');
        var cdatefrom = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.formSOA.CDateFrom).format('MMMM DD, YYYY');
        var cdateto = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.formSOA.CDateTo).format('MMMM DD, YYYY');
        pdf.setFontType("regular");
        pdf.setFontSize(9);
        pdf.text('Coverage Dates:', 130, 60, 'left');
        pdf.text('From:', 130, 65, 'left');
        pdf.setFontSize(9);
        pdf.text(cdatefrom, 140, 65, 'left');
        pdf.text('To:', 130, 70, 'left');
        pdf.setFontSize(9);
        pdf.text(cdateto, 140, 70, 'left'); //END
        //BOX SHAPE

        pdf.setLineWidth(.5); //across

        pdf.line(15, 80, 195, 80);
        pdf.text('PARTICULARS', 105, 83.5, 'center');
        pdf.line(15, 85, 195, 85);
        pdf.line(15, 230, 195, 230); //horizontal line

        pdf.line(15, 80, 15, 230);
        pdf.line(195, 80, 195, 230); //BOX SHAPE
        //SUULOD SA BOX

        pdf.setFontType("bold");
        pdf.text('Period Covered: ', 20, 95, 'left');
        pdf.text(cdatefrom + ' to ' + cdateto, 43.5, 95, 'left');
        pdf.setFontType("regular");
        pdf.text('Sales ', 20, 140, 'left');

        var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

        var totsamount = numeral(this.formSOA.TotalAmount).format('0,0.00');
        pdf.text(totsamount, 170, 140, 'right');
        pdf.setFontType("regular");
        pdf.text('12% VAT ', 20, 145, 'left');
        pdf.text('0.00', 170, 145, 'right');
        pdf.setLineWidth(.5);
        pdf.line(80, 146.5, 170, 146.5);
        pdf.text('Total Sales w/ VAT', 20, 150, 'left');
        pdf.text(totsamount, 170, 150, 'right');
        pdf.text('Withholding Tax', 20, 155, 'left');
        pdf.text('0.00', 170, 155, 'right');
        pdf.line(80, 156.5, 170, 156.5);
        pdf.text('NET Amount', 20, 160, 'left');
        pdf.text(totsamount, 170, 160, 'right');
        pdf.line(80, 161.5, 170, 161.5);
        pdf.line(80, 162.5, 170, 162.5);
        pdf.setFontSize(9);
        var textWidth = pdf.getTextWidth(this.formSOA.PreparedBy);
        pdf.text(this.formSOA.PreparedBy, 20, 180, 'left');
        pdf.line(20, 181.5, 20 + textWidth, 181.5);
        pdf.text('Prepared By:', 20, 185, 'left');
        var textWidths = pdf.getTextWidth(this.formSOA.ApprovedBy);
        pdf.text(this.formSOA.ApprovedBy, 20, 205, 'left');
        pdf.line(20, 206.5, 20 + textWidths, 206.5);
        pdf.text('Approved By:', 20, 210, 'left');
        pdf.setFontSize(8);
        pdf.setFontType("bold");
        pdf.text('*THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAXES*', 20, 220, 'left');
        pdf.setFontType("regular"); //END SULOD SA BOX
        //FOOTER

        pdf.setLineWidth(1);
        pdf.line(15, 250, 195, 250);
        pdf.setFontType("regular");
        pdf.setFontSize(10);
        pdf.text('Contact #s: 0917-7011814 / 09017-7022814 / 0917-3199733 / 0917-77796580', 105, 255, 'center');
        pdf.setFontType("bold");
        pdf.setFontSize(9);
        pdf.text('Website: www.gsc.com.ph / Email add: gensercoop@yahoo.com', 105, 259, 'center');
        pdf.setFontType("bold");
        pdf.setFontSize(14);
        pdf.setFontType("italic");
        pdf.text('"Resourceful Workmanship"', 105, 264, 'center'); //END FOOTER
        //pdf.save('info.pdf');

        window.open(pdf.output('bloburl'), '_blank');
      }
    },
    downloadPDF: function downloadPDF() {
      // var cont  = "<div align='center' text-indent='50px' style='font-size: 14px;'>  &#160;"+document.getElementById('stringinput').innerHTML +"</div>";
      //console.log(cont);
      var imageData = 'data:image/png;base64,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';
      var pdf = new jsPDF();
      pdf.setProperties({
        title: 'SOA of ' + this.formSOA.GSCSoaSeriesNo + '.pdf'
      }); //HEADER

      pdf.setFont("helvetica");
      pdf.setFontType("bold");
      pdf.setFontSize(14);
      pdf.text('GENERAL SERVICES MULTI-PURPOSE COOPERATIVE', 105, 10, 'center');
      pdf.setFontSize(10);
      pdf.setFontType("regular");
      pdf.text('Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon', 105, 14, 'center');
      pdf.text('CDA # 9520-10019987-1 / TIN 411-478-949-000', 105, 18, 'center');
      pdf.addImage(imageData, 'JPEG', 20, 5, 20, 20);
      pdf.setLineWidth(.5);
      pdf.line(15, 27, 195, 27);
      pdf.setLineWidth(1);
      pdf.line(15, 28, 195, 28); //END HEADER
      //BODY

      pdf.setFont("helvetica");
      pdf.setFontSize(14);
      pdf.setFontType("bold");
      pdf.text('STATEMENT OF ACCOUNT', 105, 40, 'center');
      pdf.setFont("helvetica");
      pdf.setFontSize(10);
      pdf.setFontType("regular");
      pdf.text('CLIENT:', 30, 50, 'left');
      pdf.text(this.form.BilledName, 50, 50, 'left');
      pdf.text('ADDRESS:', 30, 60, 'left');
      pdf.text(this.form.BilledName, 50, 60, 'left'); //ACCROSS

      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('SOA #:', 140, 50, 'left');
      pdf.setFontType("bold");
      pdf.setFontSize(9);
      pdf.text(this.form.GSCSoaSeriesNo, 152, 50, 'left'); //END

      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('THRU:', 30, 58, 'left');
      pdf.setFontType("bold");
      pdf.setFontSize(9);
      pdf.text(this.form.THRUName, 50, 58, 'left');
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text(this.form.THRUPos, 50, 61, 'left'); //END BODY
      //SALUTATION

      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text(this.form.Salutation, 30, 70, 'left'); //END SALUTATION
      //BODY OF LETTER
      //pdf.text('            ' +this.content,30, 80,{maxWidth: 145, align: "justify"});

      pdf.fromHTML(this.form.BodyofLetter, 30, 80, {
        'width': 145
      });
      pdf.setFontType("regular");
      pdf.setFontSize(12);

      var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

      var stringTotalAmount = numeral(this.form.TotalAmount).format('0,0.00');
      var textWidth = pdf.getTextWidth('Php ' + stringTotalAmount);
      console.log(textWidth);
      pdf.text('Php ' + stringTotalAmount, 105, 105, 'center');
      pdf.setLineWidth(.2);
      pdf.line(94.5, 106, 94.5 + textWidth, 106);
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('Please issue check in the name of', 30, 117, 'left');
      pdf.setFontType("bold");
      pdf.setFontSize(9);
      pdf.text('GENERAL SERVICES MULTIPURPOSE COOPERATIVE.', 78.5, 117, 'left');
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('Prepared by:', 30, 130, 'left');
      pdf.text(this.form.PreparedBy, 30, 140, 'left');
      var textWidths = pdf.getTextWidth(this.form.PreparedBy);
      pdf.setLineWidth(.2);
      pdf.line(30, 141, 30 + textWidths, 141);
      pdf.text(this.form.PreparedByPos, 30, 144, 'left');
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('Checked by:', 30, 160, 'left');
      pdf.text(this.form.CheckedBy, 30, 170, 'left');
      var textWidthss = pdf.getTextWidth(this.form.CheckedBy);
      pdf.setLineWidth(.2);
      pdf.line(30, 171, 30 + textWidthss, 171);
      pdf.text(this.form.CheckedByPos, 30, 174, 'left');
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('Noted by:', 30, 190, 'left');
      pdf.text(this.form.NotedBy, 30, 200, 'left');
      var textWidthsss = pdf.getTextWidth(this.form.NotedBy);
      pdf.setLineWidth(.2);
      pdf.line(30, 201, 30 + textWidthsss, 201);
      pdf.text(this.form.NotedByPos, 30, 204, 'left'); //END BODDY OF LETTER
      //FOOTER

      pdf.setLineWidth(1);
      pdf.line(15, 250, 195, 250);
      pdf.setFontType("regular");
      pdf.setFontSize(10);
      pdf.text('Contact #s: 0917-7011814 / 09017-7022814 / 0917-3199733 / 0917-77796580', 105, 255, 'center');
      pdf.setFontType("bold");
      pdf.setFontSize(9);
      pdf.text('Website: www.gsc.com.ph / Email add: gensercoop@yahoo.com', 105, 259, 'center');
      pdf.setFontType("bold");
      pdf.setFontSize(14);
      pdf.setFontType("italic");
      pdf.text('"Resourceful Workmanship"', 105, 264, 'center'); //END FOOTER
      //pdf.save('info.pdf');

      window.open(pdf.output('bloburl'), '_blank');
    },
    selectAll: function selectAll() {
      var _this3 = this;

      this.checkedNames = [];

      if (this.allSelected == false) {
        for (var user in this.filteredBlogs) {
          this.checkedNames.push(this.filteredBlogs[user].OVLVLHDRID);
        }

        this.form.OVLVLHDRID = this.checkedNames.join();

        if (this.form.OVLVLHDRID == "") {} else {
          axios.get('/api/getcovlsoasum', {
            params: {
              OVLVLHDRID: this.form.OVLVLHDRID
            }
          }).then(function (_ref5) {
            var data = _ref5.data;
            _this3.csoatotals = data;
            _this3.form.TotalAmount = _this3.csoatotals[0].BillAmount;
            console.log(_this3.form.TotalAmount);
          })["catch"](function (err) {});
        }
      } else {
        this.form.TotalAmount = "0.00";
      }
    },
    select: function select() {
      this.allSelected = false;
    },
    updateTitleSOA: function updateTitleSOA(updatedTitleSOA) {
      this.formSOA.Soa_OVLID = updatedTitleSOA.Soa_OVLID;
      this.formSOA.GSCSoaSeriesNo = updatedTitleSOA.GSCSoaSeriesNo;
      this.formSOA.OVLSoaDate = updatedTitleSOA.OVLSoaDate;
      this.formSOA.Status = updatedTitleSOA.Status;
      this.formSOA.BilledToIDLink = updatedTitleSOA.BilledToIDLink;
      this.formSOA.BilledName = updatedTitleSOA.BilledName;
      this.formSOA.BilledAddress = updatedTitleSOA.BilledAddress;
      this.formSOA.BilledTin = updatedTitleSOA.BilledTin;
      this.formSOA.CDateFrom = updatedTitleSOA.CDateFrom;
      this.formSOA.CDateTo = updatedTitleSOA.CDateTo;
      this.formSOA.PreparedBy = updatedTitleSOA.PreparedBy;
      this.formSOA.PreparedByPos = updatedTitleSOA.PreparedByPos;
      this.formSOA.ApprovedBy = updatedTitleSOA.ApprovedBy;
      this.formSOA.ApprovedByPos = updatedTitleSOA.ApprovedByPos;
      this.formSOA.TotalAmount = parseFloat(updatedTitleSOA.TotalAmount).toFixed(2); // console.log(updatedTitle);
    },
    updateTitleSignatory: function updateTitleSignatory(_updateTitleSignatory) {
      if (this.signator == "THRU") {
        if (this.signatorSOA == "THRUSOA") {
          this.formSOA.THRUName = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.formSOA.THRUPos = _updateTitleSignatory.position;
        } else {
          this.form.THRUName = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.form.THRUPos = _updateTitleSignatory.position;
        } // console.log(updatedTitle);

      } else if (this.signator == "Prepared") {
        if (this.signatorSOA == "PreparedSOA") {
          this.formSOA.PreparedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.formSOA.PreparedByPos = _updateTitleSignatory.position;
        } else {
          this.form.PreparedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.form.PreparedByPos = _updateTitleSignatory.position;
        } // console.log(updatedTitle);

      } else if (this.signator == "Checked") {
        if (this.signatorSOA == "CheckedSOA") {
          this.formSOA.CheckedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.formSOA.CheckedByPos = _updateTitleSignatory.position;
        } else {
          this.form.CheckedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.form.CheckedByPos = _updateTitleSignatory.position;
        } // console.log(updatedTitle);

      } else if (this.signator == "Noted") {
        if (this.signatorSOA == "NotedSOA") {
          this.formSOA.NotedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.formSOA.NotedByPos = _updateTitleSignatory.position;
        } else {
          this.form.NotedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.form.NotedByPos = _updateTitleSignatory.position;
        } // console.log(updatedTitle);

      } else if (this.signator == "Approved") {
        if (this.signatorSOA == "ApprovedSOA") {
          this.formSOA.ApprovedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.formSOA.ApprovedByPos = _updateTitleSignatory.position;
        } else {
          this.form.ApprovedBy = _updateTitleSignatory.lname + ', ' + _updateTitleSignatory.fname + ' ' + _updateTitleSignatory.mname + ' ' + _updateTitleSignatory.ename;
          this.form.ApprovedByPos = _updateTitleSignatory.position;
        } // console.log(updatedTitle);

      }
    },
    updateTitleClient: function updateTitleClient(updatedTitleClient) {
      if (this.signatorSOA == "ClientSOA") {
        if (updatedTitleClient.FirstName == "") {
          //KUNG BLANK IYA FIRST NAME KIBALE COMPANY NA CLIENT
          this.formSOA.BilledName = updatedTitleClient.LastName;
          this.formSOA.BilledToIDLink = updatedTitleClient.id;
          this.formSOA.BilledAddress = updatedTitleClient.Address;
          this.formSOA.BilledTin = updatedTitleClient.tin;
        } else {
          this.formSOA.BilledName = updatedTitleClient.LastName + ', ' + updatedTitleClient.FirstName + ' ' + updatedTitleClient.MiddleName + ' ' + updatedTitleClient.ExtName;
          this.formSOA.BilledToIDLink = updatedTitleClient.id;
          this.formSOA.BilledAddress = updatedTitleClient.Address;
          this.formSOA.BilledTin = updatedTitleClient.tin;
        }
      } else {
        this.form.BilledName = updatedTitleClient.LastName + ', ' + updatedTitleClient.FirstName + ' ' + updatedTitleClient.MiddleName + ' ' + updatedTitleClient.ExtName;
        this.form.BilledToIDLink = updatedTitleClient.id;
        this.form.BilledAddress = updatedTitleClient.Address;
      } // console.log(updatedTitle);

    },
    getJVCP: function getJVCP() {
      var _this4 = this;

      axios.get('/api/getovcp', {
        params: {
          OVLVLHDRID_Link: this.form.OVLVLHDRID_Link
        }
      }).then(function (_ref6) {
        var data = _ref6.data;
        _this4.JeepVehicleCollectionPayments = data;
        console.log(JeepVehicleCollectionPayments);
      })["catch"](function (err) {
        ;
      });
    },
    searchSignatoryNotedSOAFunction: function searchSignatoryNotedSOAFunction() {
      this.signator = "Noted";
      this.signatorSOA = "NotedSOA";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryApprovedSOAFunction: function searchSignatoryApprovedSOAFunction() {
      this.signator = "Approved";
      this.signatorSOA = "ApprovedSOA";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryCheckedSOAFunction: function searchSignatoryCheckedSOAFunction() {
      this.signator = "Checked";
      this.signatorSOA = "CheckedSOA";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryPreparedSOAFunction: function searchSignatoryPreparedSOAFunction() {
      this.signator = "Prepared";
      this.signatorSOA = "PreparedSOA";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryNotedFunction: function searchSignatoryNotedFunction() {
      this.signator = "Noted";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryCheckedFunction: function searchSignatoryCheckedFunction() {
      this.signator = "Checked";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryPreparedFunction: function searchSignatoryPreparedFunction() {
      this.signator = "Prepared";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryTHRUSOAFunction: function searchSignatoryTHRUSOAFunction() {
      this.signator = "THRU";
      this.signatorSOA = "THRUSOA";
      $('#searchSignatory').modal('show');
    },
    searchSignatoryTHRUFunction: function searchSignatoryTHRUFunction() {
      this.signator = "THRU";
      $('#searchSignatory').modal('show');
    },
    getSignatoryIsReal: function getSignatoryIsReal() {
      var _this5 = this;

      axios.get("api/billingsignatory").then(function (_ref7) {
        var data = _ref7.data;
        return _this5.clients = data;
      });
      console.log(this.clients);
    },
    searchSOAFunction: function searchSOAFunction() {
      this.signator = "SOA";
      $('#searchSOA').modal('show');
    },
    searchFormSOAFunction: function searchFormSOAFunction() {
      this.signator = "formSOA";
      $('#searchSOA').modal('show');
    },
    getSOAIsReal: function getSOAIsReal() {
      var _this6 = this;

      axios.get("api/getcsoasoa").then(function (_ref8) {
        var data = _ref8.data;
        return _this6.csoas = data;
      });
      console.log(this.csoas);
    },
    searchClientFunction: function searchClientFunction() {
      $('#searchClient').modal('show');
    },
    searchClientSOAFunction: function searchClientSOAFunction() {
      this.signatorSOA = "ClientSOA";
      $('#searchClient').modal('show');
    },
    getClientIsReal: function getClientIsReal() {
      var _this7 = this;

      axios.get("api/client").then(function (_ref9) {
        var data = _ref9.data;
        return _this7.clients = data;
      });
      console.log(this.clients);
    },
    getResults: function getResults() {
      var _this8 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/jvl?page=' + page).then(function (response) {
        _this8.jeepvehiclelog = response.data;
      });
    },
    updateJSOA: function updateJSOA(OVLVLHDRID) {
      console.log(this.form.Status);
      console.log(this.form.BalanceAmount);
      this.$Progress.start();
      this.form.put('api/ovl/' + this.form.OVLVLHDRID); //$('#addNew').modal('hide');

      toast.fire({
        icon: "success",
        title: "Outsider Vehicle Log successfully updated"
      });
      this.$Progress.finish();
      this.loadJVL();
      this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID;
      this.createJVCP();
    },
    deleteModal: function deleteModal(OVLVLHDRID) {
      var _this9 = this;

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
          _this9.$Progress.start();

          _this9.form["delete"]('api/ovl/' + OVLVLHDRID);

          swal.fire('Deleted!', 'Your file has been deleted.', 'success');

          _this9.$Progress.finish();

          _this9.loadJVL();
        }
      });
    },
    deleteModalJVCP: function deleteModalJVCP(jvcp) {
      var _this10 = this;

      if (this.form.BalanceAmount == 0 && this.form.Status == "PAID") {
        swal.fire({
          title: 'Ooopsie Doopsieee',
          text: "The transaction is already PAID.",
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
            _this10.form.Status = "PAID";
            _this10.form.BalanceAmount = _this10.form.BalanceAmount + jvcp.CollectedAmount;
            var collectedamount = _this10.form.BillAmount - _this10.form.BalanceAmount;
            _this10.form.CollectedAmount = collectedamount;
            console.log("Bill Amount Before Delete:" + _this10.form.BillAmount);
            console.log("Balance Amount Before Delete:" + _this10.form.BalanceAmount);
            console.log("Selected Payment Detail Collected Amount Before Delete:" + jvcp.CollectedAmount);
            console.log("Value of Collected Amount Variable" + _this10.form.CollectedAmount);
            _this10.form.ORCRNumber = jvcp.ORCRNumber;
            _this10.form.ORCRDate = jvcp.ORCRDate;
            _this10.form.Remarks = jvcp.Remarks;

            _this10.$Progress.start(); //UPDATE FIRST


            _this10.form.put('api/jvl/' + _this10.form.OVLVLHDRID); //$('#addNew').modal('hide');


            _this10.loadJVL();

            _this10.form.OVLVLHDRID_Link = _this10.form.OVLVLHDRID; //END UPDATE

            _this10.form["delete"]('api/ovcp/' + jvcp.OVLVCDTLID);

            swal.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this10.getJVCP();

            _this10.getJVLBalanceAmount();

            _this10.$Progress.finish();

            _this10.form.OVLVLHDRID_Link = jvcp.OVLVLHDRID_Link;
            _this10.form.CollectedAmount = "";
            _this10.form.ORCRNumber = "";
            _this10.form.ORCRDate = "";
            _this10.form.Remarks = "";
          }
        });
      }
    },
    editModal: function editModal(jvl) {
      this.form.OVLVLHDRID_Link = jvl.OVLVLHDRID;
      this.getJVCP(); //console.log(this.form.OVLVLHDRID_Link);

      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(jvl);
      this.form.CollectedAmount = "";
      this.form.BalanceAmount = jvl.BalanceAmount;
      this.form.BalanceAmountHDR = jvl.BalanceAmount;
      this.form.ORCRNumber = "";
      this.form.ORCRDate = "";
      this.form.Remarks = "";
    },
    getCountSOA: function getCountSOA() {},
    newModal: function newModal() {
      var _this11 = this;

      this.form.OVLVLHDRID = this.checkedNames.join();

      if (this.form.OVLVLHDRID == "") {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Transaction Selected.'
        });
      } else {
        axios.get('/api/getcovlsoasum', {
          params: {
            OVLVLHDRID: this.form.OVLVLHDRID
          }
        }).then(function (_ref10) {
          var data = _ref10.data;

          if (_this11.checkedNames == "") {
            _this11.$Progress.fail();

            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No Transaction Selected.'
            });
          } else {
            _this11.editmode = false;

            _this11.form.reset();

            _this11.form.Status = "ACTIVE"; //this.form.TotalAmount=parseFloat(this.total).toFixed(2);

            _this11.form.TotalAmount = "";
            _this11.form.OVLVLHDRID = _this11.checkedNames.join();
            axios.get('/api/getcovlsoasum', {
              params: {
                OVLVLHDRID: _this11.form.OVLVLHDRID
              }
            }).then(function (_ref11) {
              var data = _ref11.data;
              _this11.csoatotals = data;
              _this11.form.TotalAmount = parseFloat(_this11.csoatotals[0].BillAmount).toFixed(2);
              console.log(_this11.form.TotalAmount);
            })["catch"](function (err) {});
            var d = new Date();
            var today = new Date().toISOString().slice(0, 10);
            _this11.form.OVLSoaDate = today;
            axios.get('/api/getcovlsoa', {
              params: {
                OVLSoaDate: _this11.form.OVLSoaDate
              }
            }).then(function (_ref12) {
              var data = _ref12.data;
              _this11.csoacounts = data;

              if (_this11.csoacounts[0].SOAIncrement == 0) {
                _this11.form.GSCSoaSeriesNo = "PUOV" + new Date().getFullYear() + new Date().toISOString().slice(5, 7) + "-1";
              } else {
                var num = _this11.csoacounts[0].SOAIncrement + 1;
                _this11.form.GSCSoaSeriesNo = "PUOV" + new Date().getFullYear() + new Date().toISOString().slice(5, 7) + '-' + num;
              }
            })["catch"](function (err) {});
            $('#addNew').modal('show');
          }
        })["catch"](function (err) {});
      }
    },
    closeModalMultiple: function closeModalMultiple() {},
    soaForm: function soaForm() {
      var _this12 = this;

      this.form.OVLVLHDRID = this.checkedNames.join();

      if (this.form.OVLVLHDRID == "") {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Transaction Selected.'
        });
      } else {
        axios.get('/api/getcovlsoasum', {
          params: {
            OVLVLHDRID: this.form.OVLVLHDRID
          }
        }).then(function (_ref13) {
          var data = _ref13.data;

          if (_this12.checkedNames == "") {
            _this12.$Progress.fail();

            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No Transaction Selected.'
            });
          } else {
            _this12.editmode = false;

            _this12.formSOA.reset();

            _this12.formSOA.Status = "ACTIVE"; //this.form.TotalAmount=parseFloat(this.total).toFixed(2);

            _this12.formSOA.TotalAmount = "";
            _this12.form.OVLVLHDRID = _this12.checkedNames.join();
            axios.get('/api/getcovlsoasum', {
              params: {
                OVLVLHDRID: _this12.form.OVLVLHDRID
              }
            }).then(function (_ref14) {
              var data = _ref14.data;
              _this12.csoatotals = data;
              _this12.formSOA.TotalAmount = parseFloat(_this12.csoatotals[0].BillAmount).toFixed(2);
              console.log(_this12.formSOA.TotalAmount);
            })["catch"](function (err) {});
            var d = new Date();
            var today = new Date().toISOString().slice(0, 10);
            _this12.formSOA.OVLSoaDate = today;
            axios.get('/api/getcovlsoa', {
              params: {
                OVLSoaDate: _this12.formSOA.OVLSoaDate
              }
            }).then(function (_ref15) {
              var data = _ref15.data;
              _this12.csoacounts = data;

              if (_this12.csoacounts[0].SOAIncrement == 0) {
                _this12.formSOA.GSCSoaSeriesNo = "PUOVL" + new Date().getFullYear() + new Date().toISOString().slice(5, 7) + "-1";
              } else {
                var num = _this12.csoacounts[0].SOAIncrement + 1;
                _this12.formSOA.GSCSoaSeriesNo = "PUOVL" + new Date().getFullYear() + new Date().toISOString().slice(5, 7) + '-' + num;
              }
            })["catch"](function (err) {});
            $('#addNewMultiple').modal('show');
          }
        })["catch"](function (err) {});
      }
    },
    doSomething: function doSomething(data) {
      console.log(data);
    },
    loadJVL: function loadJVL() {
      var _this13 = this;

      //axios.get("api/jvl").then(({ data }) => (this.jvls = data));
      axios.get('api/getovl').then(function (response) {
        _this13.jvls = response.data;
        console.log(_this13.jvls);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadCSOA: function loadCSOA() {
      var _this14 = this;

      //axios.get("api/jvl").then(({ data }) => (this.jvls = data));
      axios.get('api/getSearchOVLSOA').then(function (response) {
        _this14.csoas = response.data;
        console.log(_this14.csoas);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createJSOA: function createJSOA() {
      var _this15 = this;

      if (this.formSOA.Soa_OVLID !== "") {
        //UPDATE
        this.formSOA.put('api/covlsoa/' + this.formSOA.Soa_OVLID);
        toast.fire({
          icon: 'success',
          title: 'SOA Form successfully updated!'
        });
      } else {
        //INSERT
        // this.formSOA.BodyofLetter = "<p style='font-size:12px;text-justify: inter-word;'>"+document.getElementById('stringinputs').innerHTML+"</p>";
        this.$Progress.start();
        this.formSOA.post("api/covlsoa").then(function () {
          //$('#addNew').modal('hide');
          //$('.modal-backdrop').remove();
          //this.form.reset();
          var today = new Date().toISOString().slice(0, 10);
          /*toast.fire({
          icon: "success",
          title: "OVL SOA Form successfully created"
          });*/

          axios.get('api/getcovlsoalatestcreated').then(function (response) {
            _this15.soaforupdate = response.data;
            _this15.formSOA.Soa_OVLID = _this15.soaforupdate[0].Soa_OVLID;
          });
          toast.fire({
            icon: "success",
            title: "SOA successfully added. The page will refresh in a second."
          });

          _this15.loadJVL();

          _this15.loadCSOA();
        })["catch"](function () {
          _this15.$Progress.fail();

          toast.fire({
            icon: 'error',
            title: 'Outside SOA Form not added successfully'
          });
        });
        this.$Progress.finish();
      }
    },
    createJVCP: function createJVCP() {
      var _this16 = this;

      this.form.post("api/ovcp").then(function () {
        toast.fire({
          icon: "success",
          title: "Outside Vehicle Log successfully created"
        });

        _this16.getJVCP();

        _this16.form.CollectedAmount = ""; //this.form.BalanceAmount=0;

        _this16.form.ORCRNumber = "";
        _this16.form.ORCRDate = "";
        _this16.form.Remarks = "";

        _this16.getJVLBalanceAmount();
      })["catch"](function () {
        _this16.$Progress.fail();

        toast.fire({
          icon: 'error',
          title: 'Outside Vehicle Collection Payment not added successfully'
        });
      });
    },
    getJVLBalanceAmount: function getJVLBalanceAmount() {
      var _this17 = this;

      axios.get('/api/getovlvlbalanceamount', {
        params: {
          OVLVLHDRID: this.form.OVLVLHDRID
        }
      }).then(function (response) {
        _this17.jvlbalamt = response.data;
        _this17.form.BalanceAmountHDR = _this17.jvlbalamt[0].BalanceAmount;
        console.log(_this17.jvlbalamt[0].BalanceAmount);
      })["catch"](function (err) {});
    },
    deleteEntirePaymentDetail: function deleteEntirePaymentDetail() {
      this.form["delete"]('api/ovldeleteentirepaymentdetail/' + this.form.OVLVLHDRID);
      swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID;
      this.getJVCP();
    },
    createJVCPMultiple: function createJVCPMultiple() {
      var _this18 = this;

      if (this.form.BalanceAmount == 0) {
        this.form.Status = "PAID";
      } else {
        this.form.Status = "POSTED";
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
          _this18.$Progress.start(); ////console.log(this.checkedNames);


          var arr = 0;

          for (var i = 0; i < _this18.checkedNames.length; i++) {
            arr = i;
            console.log(_this18.checkedNames.length);
            _this18.form.OVLVLHDRID_Link = _this18.checkedNames[i]; //console.log(this.form.OVLVLHDRID_Link);
            //UPDATE VEHICLE LOG HDR

            _this18.form.put('api/ovlvlovlvcp/' + _this18.checkedNames[i]);

            $('#addNewMultiple').modal('hide'); //END UPDATE
            //CREATE INSERT TO OVL VEHICLE COLLECTION PAYMENT

            _this18.form.post("api/jvcp").then(function () {
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

          _this18.$Progress.finish(); //location.reload();


          _this18.loadJVL();

          _this18.checkedNames = [];
        }
      });
    }
  },
  created: function created() {
    this.loadJVL();
    var today = new Date().toISOString().slice(0, 10);
    this.DateFrom = today;
    this.DateTo = today;
    this.form.TotalAmount = "0.00"; //setInterval(() => this.loadDriver(),3000);
  },
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this19 = this;

      if (this.DateFrom !== "" || this.DateTo !== "" && this.SearchJeepPlateNo !== "") {
        this.SearchJeepPlateNo = "";
        var vm = this;
        var startdate = vm.DateFrom;
        var enddate = vm.DateTo;
        return _.filter(vm.jvls, function (data) {
          if (_.isNull(startdate) && _.isNull(enddate)) {
            return true;
            this.filteredblogs = data.OVLVLHDRID;
            console.log(this.filteredblogs);
          } else {
            var date = data.OVLVLDate;
            return date >= startdate && date <= enddate;
            this.filteredblogs = data.OVLVLHDRID;
          }
        });
      } else {
        this.form.DateFrom = "";
        this.form.DateTo = ""; //return this.jvls.filter(jvl =>{
        //return jvl.JeepPlateNo.includes(this.form.JeepPlateNo)
        //});

        return this.jvls.filter(function (samsung) {
          return _this19.SearchJeepPlateNo.toLowerCase().split(' ').every(function (v) {
            return samsung.OVLPlateNo.toLowerCase().includes(v);
          });
          _this19.filteredblogs = samsung.OVLVLHDRID;
        });
      }
    },
    total: function total() {
      var vm = this;
      /*vm.sum = vm.filteredBlogs.filter((item) =>item.BillAmount)
                  .map((item) => +item.BillAmount)
                  .reduce((sum, current) => sum + current);
              console.log(vm.sum);
           return vm.sum;*/

      return vm.filteredBlogs.reduce(function (sum, item) {
        var tot = sum + item.BillAmount;
        vm.sum = tot;
        return sum + item.BillAmount;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js& ***!
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
  props: ['csoas'],
  data: function data() {
    return {
      searchSOAS: [],
      swegets: [],
      searchSOAVar: "",
      form: new Form({
        search: ""
      })
    };
  },
  mounted: function mounted() {
    this.loadSOA();
  },
  methods: {
    changeTitleSOA: function changeTitleSOA(soa) {
      // console.log(driver);
      this.$emit('changeTitleSOA', soa); // this.$emit('kuhaDriverID',driver.id);

      $('#searchSOA').modal('hide');
    },
    loadSOA: function loadSOA() {
      var _this = this;

      axios.get('api/getSearchOVLSOA').then(function (response) {
        _this.searchSOAS = response.data;
        console.log(_this.searchSOAS);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.loadSOA();
  },
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this2 = this;

      //return this.drivers.filter(driver =>{
      //return driver.LastName.includes(this.form.search)
      //});
      //var vm = this;
      if (this.csoas == "") {
        return this.searchSOAS.filter(function (samsung) {
          return _this2.form.search.toLowerCase().split(' ').every(function (v) {
            return samsung.GSCSoaSeriesNo.toLowerCase().includes(v);
          });
        });
      } else {
        return this.csoas.filter(function (samsung) {
          return _this2.form.search.toLowerCase().split(' ').every(function (v) {
            return samsung.GSCSoaSeriesNo.toLowerCase().includes(v);
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-readonly] {\r\n  pointer-events: none;\n}\n#stringinputs {\r\n    min-width: 500px;\r\n    min-height: 80px;\r\n    max-width: 500px;\r\n    max-height: 80px;\r\n    text-align: left;\r\n    overflow-y: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c& ***!
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
                    _c("th", [_vm._v("OVL No")]),
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
                    _c("th", [_vm._v("Charge Invoice No")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.filteredBlogs, function(jvl) {
                    return _c("tr", { key: jvl.OVLVLHDRID }, [
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
                            value: jvl.OVLVLHDRID,
                            checked: Array.isArray(_vm.checkedNames)
                              ? _vm._i(_vm.checkedNames, jvl.OVLVLHDRID) > -1
                              : _vm.checkedNames
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.checkedNames,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = jvl.OVLVLHDRID,
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
                              },
                              function($event) {
                                return _vm.check($event)
                              }
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.OVLVLDate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.OVLNo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.OVLPlateNo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.DriverName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.TruckerName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s("Php" + jvl.BillAmount))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.LessAdmin))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.LessFuel))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s("Php" + jvl.NetTrucker))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.Status))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.SOANumber))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.SOADate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(jvl.ChargeInvoiceNumber))])
                    ])
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-warning",
                      attrs: {
                        to: "/soaovltransactions",
                        tag: "button",
                        "active-class": "active",
                        exact: ""
                      }
                    },
                    [
                      _vm._v("\n          Browse Printing OVL SOA\n          "),
                      _c("i", { staticClass: "fa fa-search fa fw" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: { click: _vm.soaForm }
                    },
                    [
                      _vm._v(
                        "\n              Create OVL SOA Form\n              "
                      ),
                      _c("i", { staticClass: "fa fa-user-plus fa fw" })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("div", { staticStyle: { float: "right" } }, [
                  _vm._v(
                    " \n            " +
                      _vm._s(
                        "Total Bill Amount: " +
                          parseFloat(_vm.formSOA.TotalAmount).toFixed(2)
                      ) +
                      "\n            "
                  )
                ])
              ])
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
                    [_vm._v("Create OVL SOA Form")]
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
                    [_vm._v("Update OVL SOA Form")]
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
                        _vm.editmode ? _vm.updateJSOA() : _vm.createJSOA()
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
                                    value: _vm.form.Soa_OVLID,
                                    expression: "form.Soa_OVLID"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "Soa_OVLID",
                                  type: "number",
                                  readonly: "",
                                  required: ""
                                },
                                domProps: { value: _vm.form.Soa_OVLID },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "Soa_OVLID",
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
                                          return _vm.searchFormSOAFunction()
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
                            { staticClass: "input-group mb-3 input-group-sm" },
                            [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.OVLSoaDate,
                                    expression: "form.OVLSoaDate"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "OVLSoaDate",
                                  type: "date",
                                  required: ""
                                },
                                domProps: { value: _vm.form.OVLSoaDate },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "OVLSoaDate",
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
                                    value: _vm.form.OVLVLHDRID,
                                    expression: "form.OVLVLHDRID"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "hidden", name: "OVLVLHDRID" },
                                domProps: { value: _vm.form.OVLVLHDRID },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "OVLVLHDRID",
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
                                    value: _vm.form.SOAID_Link,
                                    expression: "form.SOAID_Link"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "hidden", name: "SOAID_Link" },
                                domProps: { value: _vm.form.SOAID_Link },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "SOAID_Link",
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
                              _vm._m(6),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.Status,
                                    expression: "form.Status"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "Status",
                                  "data-readonly": ""
                                },
                                domProps: { value: _vm.form.Status },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "Status",
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
                                "text-transform": "uppercase",
                                "margin-left": "5px"
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
                                    value: _vm.form.GSCSoaSeriesNo,
                                    expression: "form.GSCSoaSeriesNo"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "GSCSoaSeriesNo" },
                                domProps: { value: _vm.form.GSCSoaSeriesNo },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "GSCSoaSeriesNo",
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
                              _vm._m(8),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.BilledName,
                                    expression: "form.BilledName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "BilledName",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.BilledName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BilledName",
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
                                    value: _vm.form.BilledToIDLink,
                                    expression: "form.BilledToIDLink"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "hidden",
                                  name: "BilledToIDLink",
                                  placeholder: "BilledToIDLink"
                                },
                                domProps: { value: _vm.form.BilledToIDLink },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BilledToIDLink",
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
                                          return _vm.searchClientFunction()
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
                              staticStyle: { "text-transform": "uppercase" }
                            },
                            [
                              _vm._m(9),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.BilledAddress,
                                    expression: "form.BilledAddress"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "BilledAddress" },
                                domProps: { value: _vm.form.BilledAddress },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "BilledAddress",
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
                              _vm._m(10),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.TotalAmount,
                                    expression: "form.TotalAmount"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", name: "TotalAmount" },
                                domProps: { value: _vm.form.TotalAmount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "TotalAmount",
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
                                    value: _vm.form.THRUName,
                                    expression: "form.THRUName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "THRUName",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.THRUName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "THRUName",
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
                                          return _vm.searchSignatoryTHRUFunction()
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
                              _vm._m(12),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.THRUPos,
                                    expression: "form.THRUPos"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "THRUPos",
                                  readonly: ""
                                },
                                domProps: { value: _vm.form.THRUPos },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "THRUPos",
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
                              _vm._m(13),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.Salutation,
                                    expression: "form.Salutation"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "Salutation",
                                  required: ""
                                },
                                domProps: { value: _vm.form.Salutation },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "Salutation",
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
                              _vm._m(14),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "form-control",
                                  attrs: {
                                    contenteditable: "true",
                                    id: "stringinput"
                                  },
                                  on: { input: _vm.fakeVmodel }
                                },
                                [_vm._v("     ")]
                              )
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
                                staticStyle: {
                                  "margin-left": "5px",
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(15),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.PreparedBy,
                                      expression: "form.PreparedBy"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "PreparedBy",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.PreparedBy },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "PreparedBy",
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
                                            return _vm.searchSignatoryPreparedFunction()
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
                                staticStyle: {
                                  "margin-left": "5px",
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(16),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.PreparedByPos,
                                      expression: "form.PreparedByPos"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "PreparedByPos",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.PreparedByPos },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "PreparedByPos",
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
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(17),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.CheckedBy,
                                      expression: "form.CheckedBy"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "CheckedBy",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.CheckedBy },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "CheckedBy",
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
                                            return _vm.searchSignatoryCheckedFunction()
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
                                staticStyle: {
                                  "margin-left": "5px",
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(18),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.CheckedByPos,
                                      expression: "form.CheckedByPos"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "CheckedByPos",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.CheckedByPos },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "CheckedByPos",
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
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(19),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.NotedBy,
                                      expression: "form.NotedBy"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "NotedBy",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.NotedBy },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "NotedBy",
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
                                            return _vm.searchSignatoryNotedFunction()
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
                                staticStyle: {
                                  "margin-left": "5px",
                                  "margin-top": "5px"
                                }
                              },
                              [
                                _vm._m(20),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.NotedByPos,
                                      expression: "form.NotedByPos"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "NotedByPos",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.form.NotedByPos },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "NotedByPos",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
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
                          attrs: { type: "button" },
                          on: { click: _vm.downloadPDF }
                        },
                        [_vm._v("Print SOA")]
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
                          staticClass: "btn btn-success",
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
                              value: !_vm.editmode,
                              expression: "!editmode"
                            }
                          ],
                          staticClass: "btn btn-warning",
                          attrs: { type: "button" },
                          on: { click: _vm.soapost }
                        },
                        [_vm._v("Post")]
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
                    [_vm._v("OVL SOA Form")]
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
                    [_vm._v("Update OVL SOA Form")]
                  ),
                  _vm._v(" "),
                  _vm._m(21)
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode ? _vm.updateJSOA() : _vm.createJSOA()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "col-xs-12" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(22),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.Soa_OVLID,
                                      expression: "formSOA.Soa_OVLID"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", "data-readonly": "" },
                                  domProps: { value: _vm.formSOA.Soa_OVLID },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "Soa_OVLID",
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
                                            return _vm.searchSOAFunction()
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
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(23),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.OVLSoaDate,
                                      expression: "formSOA.OVLSoaDate"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "OVLSoaDate",
                                    type: "date",
                                    required: ""
                                  },
                                  domProps: { value: _vm.formSOA.OVLSoaDate },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "OVLSoaDate",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "text-transform": "uppercase" }
                              },
                              [
                                _vm._m(24),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.GSCSoaSeriesNo,
                                      expression: "formSOA.GSCSoaSeriesNo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "GSCSoaSeriesNo"
                                  },
                                  domProps: {
                                    value: _vm.formSOA.GSCSoaSeriesNo
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "GSCSoaSeriesNo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "text-transform": "uppercase" }
                              },
                              [
                                _vm._m(25),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.BilledName,
                                      expression: "formSOA.BilledName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "BilledName",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.formSOA.BilledName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "BilledName",
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
                                      value: _vm.formSOA.BilledToIDLink,
                                      expression: "formSOA.BilledToIDLink"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "hidden",
                                    name: "BilledToIDLink",
                                    placeholder: "BilledToIDLink"
                                  },
                                  domProps: {
                                    value: _vm.formSOA.BilledToIDLink
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "BilledToIDLink",
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
                                      value: _vm.formSOA.BilledTin,
                                      expression: "formSOA.BilledTin"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "hidden", name: "BilledTin" },
                                  domProps: { value: _vm.formSOA.BilledTin },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "BilledTin",
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
                                            return _vm.searchClientSOAFunction()
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
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm",
                                staticStyle: { "text-transform": "uppercase" }
                              },
                              [
                                _vm._m(26),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.BilledAddress,
                                      expression: "formSOA.BilledAddress"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "BilledAddress"
                                  },
                                  domProps: {
                                    value: _vm.formSOA.BilledAddress
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "BilledAddress",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(27),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.TotalAmount,
                                      expression: "formSOA.TotalAmount"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", name: "TotalAmount" },
                                  domProps: { value: _vm.formSOA.TotalAmount },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "TotalAmount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(28),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.CDateFrom,
                                      expression: "formSOA.CDateFrom"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date", name: "CDateFrom" },
                                  domProps: { value: _vm.formSOA.CDateFrom },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "CDateFrom",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(29),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.CDateTo,
                                      expression: "formSOA.CDateTo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "date", name: "CDateTo" },
                                  domProps: { value: _vm.formSOA.CDateTo },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "CDateTo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xs-12" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(30),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.PreparedBy,
                                      expression: "formSOA.PreparedBy"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "PreparedBy",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.formSOA.PreparedBy },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "PreparedBy",
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
                                            return _vm.searchSignatoryPreparedSOAFunction()
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
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(31),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.ApprovedBy,
                                      expression: "formSOA.ApprovedBy"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "ApprovedBy",
                                    readonly: ""
                                  },
                                  domProps: { value: _vm.formSOA.ApprovedBy },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "ApprovedBy",
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
                                            return _vm.searchSignatoryApprovedSOAFunction()
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(32),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.PreparedByPos,
                                      expression: "formSOA.PreparedByPos"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "PreparedByPos",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value: _vm.formSOA.PreparedByPos
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "PreparedByPos",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group mb-3 input-group-sm"
                              },
                              [
                                _vm._m(33),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.formSOA.ApprovedByPos,
                                      expression: "formSOA.ApprovedByPos"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: "NotedByPos",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value: _vm.formSOA.ApprovedByPos
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.formSOA,
                                        "ApprovedByPos",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
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
                          attrs: { type: "button" },
                          on: { click: _vm.downloadPDFSOA }
                        },
                        [_vm._v("Print SOA")]
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
                          staticClass: "btn btn-success",
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
                              value: !_vm.editmode,
                              expression: "!editmode"
                            }
                          ],
                          staticClass: "btn btn-warning",
                          attrs: { type: "button" },
                          on: { click: _vm.soapost }
                        },
                        [_vm._v("Post")]
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
      _c("search-client", {
        on: {
          changeTitleClient: function($event) {
            return _vm.updateTitleClient($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-signatorys", {
        on: {
          changeTitleSignatory: function($event) {
            return _vm.updateTitleSignatory($event)
          }
        }
      }),
      _vm._v(" "),
      _c("search-SOA", {
        attrs: { csoas: _vm.csoas },
        on: {
          changeTitleSOA: function($event) {
            return _vm.updateTitleSOA($event)
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
      _c("b", [_vm._v("Create OVL SOA")])
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("SOA ID")])
    ])
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Status")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("SOA Number")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Billed To")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Billed Address")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Total Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("THRU Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("THRU Pos.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Salutation")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Body of Letter")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Prepared By")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Prepared Pos.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Checked By")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Checked Pos.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Noted By")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Noted Pos.")])
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("SOA ID")])
    ])
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
      _c("span", { staticClass: "input-group-text" }, [_vm._v("SOA Number")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Client")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Client Address")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Total Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Cover Date From")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Cover Date To")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Prepared By:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Approved By:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Prepared Pos.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Approved Pos.")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6& ***!
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
          id: "searchSOA",
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
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.search,
                                  expression: "form.search"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "search",
                                placeholder: "Search for..."
                              },
                              domProps: { value: _vm.form.search },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "search",
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
                          _vm._l(_vm.filteredBlogs, function(soa) {
                            return _c(
                              "tr",
                              {
                                key: soa.Soa_OVLID,
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "element" },
                                on: {
                                  click: function($event) {
                                    return _vm.changeTitleSOA(soa)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(soa.GSCSoaSeriesNo))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(soa.OVLSoaDate))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(soa.Status))])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.searchSOAS
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Search OVL SOA")]),
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
        _c("th", [_vm._v("SOA Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("SOA Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
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

/***/ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c& */ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c&");
/* harmony import */ var _OVLCreateSoaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OVLCreateSoaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OVLCreateSoaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OVLComponents/OVLCreateSoaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLCreateSoaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OVLComponents/OVLCreateSoaComponent.vue?vue&type=template&id=6581a22c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OVLCreateSoaComponent_vue_vue_type_template_id_6581a22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/search/SearchOVL/SearchOVLSOA.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchOVLSOA.vue?vue&type=template&id=245109a6& */ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6&");
/* harmony import */ var _SearchOVLSOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchOVLSOA.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchOVLSOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchOVL/SearchOVLSOA.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchOVLSOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchOVLSOA.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchOVLSOA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchOVLSOA.vue?vue&type=template&id=245109a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchOVL/SearchOVLSOA.vue?vue&type=template&id=245109a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchOVLSOA_vue_vue_type_template_id_245109a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);