<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="createSOA"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Create Golf Cart SOA</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createData()">
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <label for="golfcart">SOA No</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.series_no"
                      name="series_no"
                    />
                  </div>
                  <div class="col">
                    <label for="refence">Date</label>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.soa_date"
                      name="soa_date"
                    />
                  </div>
                  <div class="col">
                    <label for="refence">Status</label>
                    <p>{{ form.status }}</p>
                  </div>
                  <div class="col" style="text-align:center;">
                    <label for="refence">Amount</label>
                    <p>{{ form.total_amount }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="golfcart">Billed to</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        disabled
                        v-model="form.billed_name"
                        name="billed_name"
                      />
                      <span class="input-group-btn">
                        <button
                          type="button"
                          class="btn btn-outline-primary btn-sm"
                          @click="searchClient()"
                        >Search</button>
                        <client-list @golfcart_data="getData"></client-list>
                      </span>
                    </div>
                  </div>

                  <div class="col">
                    <label for="refence">Period Covered</label>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.period_covered"
                      name="period_convered"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="date">Address</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.billed_address"
                      name="billed_address"
                      disabled
                    />
                  </div>

                  <div class="col">
                    <label for="refence">Charge Invoice</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.charge_invoice_no"
                      name="charge_invoice_no"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="date">Remarks</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.remarks"
                      name="remarks"
                    />
                  </div>

                  <div class="col">
                    <label for="refence">Details</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.details"
                      name="details"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-6">
                    <strong>Prepared By:</strong>
                    <b-form-input
                      size="sm"
                      list="preparedBy"
                      v-model="form.preparedBy"
                      @keyup="sourceChangedPrepared"
                    ></b-form-input>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.preparedByPos"
                      disabled
                    />
                    <datalist id="preparedBy">
                      <option
                        v-for="signatory in signatories"
                        :value="signatory.name"
                        :key="signatory.id"
                      ></option>
                    </datalist>
                  </div>

                  <div class="col-sm-6">
                    <strong>Verified and Checked By:</strong>
                    <b-form-input
                      size="sm"
                      list="verifiedBy"
                      v-model="form.verifiedBy"
                      @keyup="sourceChangedVerified"
                    ></b-form-input>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.verifiedByPos"
                      disabled
                    />
                    <datalist id="verifiedBy">
                      <option
                        v-for="signatory in signatories"
                        :value="signatory.name"
                        :key="signatory.id"
                      ></option>
                    </datalist>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-6">
                    <strong>Noted By:</strong>

                    <b-form-input
                      size="sm"
                      list="notedBy"
                      v-model="form.notedBy"
                      @keyup="sourceChangedNoted"
                    ></b-form-input>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.notedByPos"
                      disabled
                    />
                    <datalist id="notedBy">
                      <option
                        v-for="signatory in signatories"
                        :value="signatory.name"
                        :key="signatory.id"
                      ></option>
                    </datalist>
                  </div>

                  <div class="col-sm-6">
                    <strong>Approved By:</strong>
                    <b-form-input
                      size="sm"
                      list="approvedBy"
                      v-model="form.approvedBy"
                      @keyup="sourceChangedApproved"
                    ></b-form-input>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.approvedByPos"
                      disabled
                    />
                    <datalist id="approvedBy">
                      <option
                        v-for="signatory in signatories"
                        :value="signatory.name"
                        :key="signatory.id"
                      ></option>
                    </datalist>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Create</button>
                <!-- <button
                                    type="button"
                                    class="btn btn-success"
                                    @click="post_soa()"
                                >
                                    POST
                </button>-->
                <button type="button" class="btn btn-secondary" @click="print_soa()">PRINT</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
import moment from "moment";
import clientList from "../search/client-list.vue";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  components: {
    "client-list": clientList
  },
  props: {
    rental: {
      type: [Object, Array]
    },
    grandtotal: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      searching: "",
      golfcart: {},
      details_data: {},
      detail: {},
      filter: {},
      datas: [],
      signatory: {},
      signatories: {},
      form: new Form({
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
        status: "ACTIVE",
        total_amount: 0,
        rentals: {},
        grandtotals: {},
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
    print_soa: function() {
      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.$Progress.start();
        axios.get("soa/details/" + this.form.id).then(({ data }) => {
          var doc = new jsPDF();
          doc.setFont("courier");
          doc.setFontType("bold");
          doc.setFontSize(12);
          doc.addImage(Logo, "PNG", 15, 5, 30, 30);
          doc.setFontSize(14);
          doc.text("GENERAL SERVICES MULTIPURPOSE COOPERATIVE", 50, 15);
          doc.setFontSize(11);
          doc.text(
            "Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon",
            50,
            20
          );
          doc.text("CDA # 9520-10019987-1 / TIN: 411-478-949-000", 50, 25);
          doc.setFontType("normal");
          doc.text("STATEMENT OF ACCOUNT", 80, 45);
          doc.text("SOA#" + this.form.series_no, 150, 40);
          doc.text("BILLED TO:           " + this.form.billed_name, 30, 57);
          doc.text("                     " + this.form.billed_address, 30, 65);
          doc.text(
            "PERIOD COVERED:      FOR THE MONTH OF " + this.form.soa_date,
            30,
            75
          );

          doc.autoTable({
            columnStyles: {
              0: { halign: "center", fillColor: [0, 255, 0] },
              1: { halign: "center", fillColor: [255, 255, 0] },
              2: { halign: "center", fillColor: [0, 255, 255] }
            }, // European countries centered
            body: data.data,
            columns: [
              { header: "Month", dataKey: "period_month" },
              { header: "Year", dataKey: "year" },
              { header: "Amount", dataKey: "amount" }
            ],
            margin: { top: 80 }
          });

          doc.text("Prepared By:", 30, 150);
          doc.text(this.form.preparedBy, 30, 155);
          doc.text("Approved By:", 110, 150);
          doc.text(this.form.approvedBy, 110, 155);
          doc.text("Noted By:", 30, 165);
          doc.text(this.form.notedBy, 30, 170);

          doc.save("golfcart_soa_" + this.form.series_no + ".pdf");
        });
        this.$Progress.finish();
      }
    },
    post_soa() {
      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.form
          .put("api/golfcart_soa_hdr/" + this.form.id)
          .then(() => {
            toast.fire({
              icon: "success",
              title: "Update data successfully"
            });
            this.form.reset();
          })
          .catch(() => {
            swal.fire("Error Found.", "warning");
          });
      }
    },
    createData() {
      if (this.form.id == "") {
        this.form.rentals = this.rental;
        this.form.grandtotals = this.grandtotal;
        this.$Progress.start();
        this.form
          .post("api/golfcart_soa_hdr")
          .then(data => {
            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            this.form.id = data.data.id;
          })
          .catch(() => {
            this.$Progress.fail();
            toast.fire({
              icon: "error",
              title: "Error Found"
            });
          });
        this.$Progress.finish();
      }
    },
    searchClient() {
      $("#searchGolfcart").modal("show");
    },
    getData(data) {
      this.form.billed_id = data.id;
      this.form.billed_name = data.FirstName;
      this.form.billed_address = data.Address;
    },
    soa_data(data) {
      this.form.fill(data);
    },
    searchSoa() {
      $("#searchSOA").modal("show");
    },
    getSignatories() {
      axios({ method: "GET", url: "/api/billingsignatoryGetForSearch" }).then(
        ({ data }) => {
          this.signatories = data;
        }
      );
    },
    sourceChangedPrepared: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.preparedBy } })
        .then(({ data }) => {
          this.form.preparedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedVerified: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.verifiedBy } })
        .then(({ data }) => {
          this.form.verifiedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedNoted: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.notedBy } })
        .then(({ data }) => {
          this.form.notedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedApproved: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.approvedBy } })
        .then(({ data }) => {
          this.form.approvedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500)
  },
  mounted() {},
  created() {
    this.form.series_no = "GSOA-" + moment().format("HHMMSS");
    this.form.soa_date = moment().format("YYYY-MM-DD");
    this.form.period_covered = moment().format("YYYY-MM-DD");
    this.getSignatories();
  }
};
</script>
