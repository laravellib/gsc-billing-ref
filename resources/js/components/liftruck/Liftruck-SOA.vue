<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">LIFT TRUCK SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-list"
              >Lift Truck List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-reports"
              >Reports</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="dmpi">
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
    </div>
  </div>
</template>

<script>
import createSoa from "./Liftruck-SOA-Req.vue";
import reviewSoa from "./Liftruck-SOA-Review.vue";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  components: {
    "create-soa": createSoa,
    "review-soa": reviewSoa,
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
    print_soa: function() {
      if (this.form.id == 0) {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.$Progress.start();
        axios
          .get("rental_liftruck_soa/details/" + this.form.id)
          .then(({ data }) => {
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
            doc.text(
              "                     " + this.form.billed_address,
              30,
              65
            );
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
            doc.text("Approved By:", 85, 150);
            doc.text("Noted By:", 150, 150);

            doc.save("liftruck_soa_" + this.form.id + ".pdf");
          });
        this.$Progress.finish();
      }
    },
    preview() {
      axios
        .get("rental_liftruck_soa/search/" + this.datefrom + "/" + this.dateto)
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
  }
};
</script>
