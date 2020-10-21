<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="reviewSOA"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">SOA Review</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row mt-3">
                Search by SOA Date
                <div class="col">
                  <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    placeholder="Search Rental..."
                    v-model="datefrom"
                  />
                </div>
                <div class="col">
                  <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    placeholder="Search Rental..."
                    v-model="dateto"
                  />
                </div>
                <div class="col">
                  <button class="btn btn-secondary" @click="review()">Review</button>
                </div>
              </div>
              <kendo-grid
                :height="200"
                :data-source="filter"
                :selectable="true"
                :sortable="true"
                v-on:change="onChange"
              >
                <kendo-grid-column :field="'soa_date'" :title="'SOA Date'"></kendo-grid-column>
                <kendo-grid-column :field="'series_no'" :title="'SOA No'"></kendo-grid-column>
                <kendo-grid-column :field="'billed_name'" :title="'Billed To'"></kendo-grid-column>
                <kendo-grid-column :field="'charge_invoice_no'" :title="'Charge Invoice No'"></kendo-grid-column>
                <kendo-grid-column :field="'status'" :title="'Status'"></kendo-grid-column>
              </kendo-grid>
            </div>
          </div>
          <div class="container" v-if="showButton">
            <div class="row">
              <div class="col">
                <p>SOA: {{ soa_no }}</p>
                <button type="button" @click="soa_detail()" class="btn btn-primary">View Detail</button>

                <button type="button" class="btn btn-primary" @click="cancel_soa(id)">Cancel SOA</button>
                <button type="button" class="btn btn-primary" @click="view_soa()">Preview SOA Form</button>
              </div>
            </div>
          </div>
          <div class="container" v-if="showDetail">
            <div class="row">
              <kendo-grid :height="150" :data-source="detail" :selectable="true" :sortable="true">
                <kendo-grid-column :field="'req_date'" :title="'Date'"></kendo-grid-column>
                <kendo-grid-column :field="'particulars'" :title="'particulars'"></kendo-grid-column>
                <kendo-grid-column :field="'amount'" :title="'Amount'"></kendo-grid-column>
              </kendo-grid>
            </div>
          </div>
          <signatory-review @signatory="get_signatory"></signatory-review>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              <i class="far fa-window-close"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
import signatoryReview from "../search/signatory-review.vue";
export default {
  components: {
    "signatory-review": signatoryReview
  },
  data() {
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
    get_signatory(data) {
      this.signatory = data;
      console.log(this.signatory);
      this.$Progress.start();
      axios.get("wreq_soa/details/" + this.id).then(({ data }) => {
        var doc = new jsPDF();
        doc.setFont("courier");
        doc.setFontType("bold");
        doc.setFontSize(11);
        doc.addImage(Logo, "PNG", 15, 5, 30, 30);
        doc.setFontSize(12);
        doc.text("GENERAL SERVICES MULTIPURPOSE COOPERATIVE", 50, 15);
        doc.setFontSize(10);
        doc.setFontType("normal");
        doc.text(
          "Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon",
          50,
          20
        );
        doc.text("CDA # 9520-10019987-1 / TIN: 411-478-949-000", 50, 25);
        doc.setFontType("normal");
        doc.text("STATEMENT OF ACCOUNT", 80, 45);
        doc.text("SOA#" + this.soa_no, 150, 40);
        doc.text("BILLED TO:           " + this.billed_name, 30, 57);
        doc.text("                     " + this.billed_address, 30, 65);
        doc.text(
          "PERIOD COVERED:      FOR THE MONTH OF " + this.soa_date,
          30,
          75
        );
        doc.autoTable({
          columnStyles: {
            0: { halign: "center", fillColor: [0, 255, 0], fontSize: 9 },
            1: { halign: "center", fillColor: [255, 255, 0], fontSize: 9 },
            2: { halign: "center", fillColor: [0, 255, 255], fontSize: 9 }
          }, // European countries centered
          body: data.data,
          columns: [
            { header: "Date", dataKey: "req_date" },
            { header: "Particulars", dataKey: "particulars" },
            { header: "Amount", dataKey: "amount" }
          ],
          margin: { top: 80 }
        });
        doc.text("Prepared By:", 30, 150);
        doc.text(this.signatory.preparedBy, 30, 155);
        doc.text("Approved By:", 110, 150);
        doc.text(this.signatory.approvedBy, 110, 155);
        doc.text("Noted By:", 30, 165);
        doc.text(this.signatory.notedBy, 30, 170);
        doc.save("wingvan_soa_" + this.soa_no + ".pdf");
      });
      this.$Progress.finish();
    },
    soa_detail() {
      axios.get("wreq_soa/details/" + this.id).then(({ data }) => {
        this.detail = data.data;
      });
      this.showDetail = true;
    },
    paid_soa() {
      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        swal
          .fire({
            title: "Are you sure you want to set this as PAID/COLLECTED?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          })
          .then(result => {
            if (result.value) {
              axios.get("wreq_soa/collected/" + this.id).then(({ data }) => {
                this.review();
              });
            }
          });
      }
    },
    view_soa() {
      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        $("#signatory-review").modal("show");
      }
    },
    cancel_soa(id) {
      if (this.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          })
          .then(result => {
            if (result.value) {
              console.log(id);
              axios.get("wreq_soa/cancel/" + this.id).then(({ data }) => {
                this.review();
              });
            }
          });
      }
    },
    review() {
      axios
        .get("wreq_soa/review/" + this.datefrom + "/" + this.dateto)
        .then(({ data }) => {
          this.rental = data.data;
          this.filter = this.rental;
          console.log(data);
        });
    },
    onChange: function(e) {
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
  mounted() {},
  created() {
    this.datefrom = moment().format("YYYY-MM-DD");
    this.dateto = moment().format("YYYY-MM-DD");
  }
};
</script>
