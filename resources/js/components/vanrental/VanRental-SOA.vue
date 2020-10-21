<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">VAN RENTAL SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-list"
              >Van Rental List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-reports"
              >Reports</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container tab-content">
        <div class="row mt-3">
          <ul class="nav nav-tabs">
            <li class="active">
              <a data-toggle="tab" href="#dmpi">Per Service Requisition</a>
            </li>&nbsp; &nbsp;
            <li>
              <a data-toggle="tab" href="#outsider">Monthly</a>
            </li>
          </ul>
        </div>
        <div id="dmpi" class="tab-pane fade">
          <div class="row mt-3">
            Search by Trans Date
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
              <button class="btn btn-secondary" @click="preview()">Preview</button>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-sm">
              <ag-grid-vue
                style="width: 1050px; height: 200px;"
                class="ag-theme-balham"
                :columnDefs="columnDefs"
                :rowData="filter"
                @grid-ready="onGridReady"
                rowSelection="multiple"
                @selectionChanged="onChange"
              ></ag-grid-vue>
              <create-soa :rental="selected"></create-soa>
              <review-soa></review-soa>
            </div>
          </div>
          <div class="row">
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" @click="create_soa()">Create SOA</button>
              <button type="submit" class="btn btn-success" @click="review_soa()">Manage SOA</button>
              <button type="submit" class="btn btn-success">Print Charge Invoice</button>
              <button type="submit" class="btn btn-success">Print Delivery</button>
            </div>
          </div>
        </div>
        <div id="outsider" class="tab-pane fade">
          <form @submit.prevent="create_monthly()">
            <div class="row mt-3">
              <div class="col-sm-4">
                <label for="refence">Series #</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="series_no"
                  v-model="form.series_no"
                />
              </div>
              <div class="col-sm-4">
                <label for="refence">Date</label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  name="soa_date"
                  v-model="form.soa_date"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm">
                <label for="refence">Billed To</label>
                <select
                  class="form-control"
                  :required="true"
                  v-model="client"
                  v-on:change="select_client"
                >
                  <option v-for="c in clients" v-bind:key="c.id" v-bind:value="c">{{ c.FirstName }}</option>
                </select>
              </div>
              <div class="col-sm">
                <label for="refence">Address</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="billed_address"
                  v-model="form.billed_address"
                />
              </div>
              <div class="col-sm">
                <label for="refence">Charge Invoice</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="charge_invoice_no"
                  v-model="form.charge_invoice_no"
                />
              </div>
              <div class="col-sm">
                <label for="refence">SOA Date</label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  name="soa_date"
                  v-model="form.soa_date"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm">
                <label for="refence">Particulars</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="particulars"
                  v-model="form.particulars"
                />
              </div>
              <div class="col-sm">
                <label for="refence">Remarks</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="remarks"
                  v-model="form.remarks"
                />
              </div>
              <div class="col-sm">
                <label for="refence">Amount</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="amount"
                  v-model="form.amount"
                />
              </div>
            </div>

            <div class="row">
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">SAVE</button>
                <button type="button" class="btn btn-success" @click="print_soa()">PRINT</button>
                <button type="button" class="btn btn-secondary">Clear</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <signatory-check @signatory="get_signatory"></signatory-check>
  </div>
</template>

<script>
import createSoa from "./VanRental-SOA-Req.vue";
import reviewSoa from "./VanRental-SOA-Review.vue";
import signatoryCheck from "../search/signatory-checker.vue";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  components: {
    "create-soa": createSoa,
    "review-soa": reviewSoa,
    "signatory-check": signatoryCheck,
    AgGridVue
  },
  data() {
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
    get_signatory(data) {
      this.signatory = data;
      console.log(this.signatory);
      this.$Progress.start();
      axios.get("req_soa/details/" + this.form.id).then(({ data }) => {
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
            1: {
              halign: "center",
              fillColor: [255, 255, 0]
            },
            2: {
              halign: "center",
              fillColor: [0, 255, 255]
            }
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

        doc.save("vanrental_soa_" + this.form.id + ".pdf");
      });
      this.$Progress.finish();
    },
    print_soa() {
      if (this.form.id == 0) {
        swal.fire("No Data is Selected.", "warning");
      } else {
        $("#signatory").modal("show");
      }
    },
    create_monthly() {
      if (this.form.id == 0) {
        this.$Progress.start();
        this.form
          .post("vanrental/monthly")
          .then(data => {
            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            this.form.id = data.data.id;
            this.form.series_no = "VSOA-" + moment().format("HHMMSS");
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
    preview() {
      axios
        .get("req_soa/search/" + this.datefrom + "/" + this.dateto)
        .then(({ data }) => {
          this.selected = [];
          this.rental = data.data;
          this.filter = this.rental;
        });
    },
    create_soa() {
      if (this.selected.length == 0) {
        swal.fire("No Rental Data Found.", "warning");
      } else {
        $("#createSOA").modal("show");
      }
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    onChange: function(e) {
      this.form.applied_amount = 0;
      this.selected = [];
      const selectedRows = this.gridApi.getSelectedNodes();
      const selectedData = selectedRows.map(node => node.data);
      const push = selectedData.map(node => this.selected.push(node));

      console.log(this.selected);
    },
    review_soa() {
      $("#reviewSOA").modal("show");
    },
    get_client() {
      axios.get("search/client").then(({ data }) => {
        this.clients = data.data;
        console.log(this.filter);
      });
    },
    select_client() {
      this.form.billed_id = this.client.id;
      this.form.billed_name = this.client.FirstName;
      this.form.billed_address = this.client.Address;
    }
  },
  created() {
    this.columnDefs = [
      {
        headerName: "Date",
        field: "date",
        resizable: true,
        width: 170,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Type",
        field: "type",
        resizable: true,
        width: 170
      },
      {
        headerName: "Activity",
        field: "po_activity",
        resizable: true,
        width: 170
      },
      {
        headerName: "Gross Amount",
        field: "gross_amount",
        resizable: true,
        width: 170
      },
      {
        headerName: "# Trips",
        field: "no_trips",
        resizable: true,
        width: 170
      },
      {
        headerName: "Amount",
        field: "amount",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      }
    ];
    this.filter = [];
    this.get_client();
    this.datefrom = moment().format("YYYY-MM-DD");
    this.dateto = moment().format("YYYY-MM-DD");
    this.form.soa_date = moment().format("YYYY-MM-DD");
    this.form.series_no = "VSOA-" + moment().format("HHMMSS");
  }
};
</script>
