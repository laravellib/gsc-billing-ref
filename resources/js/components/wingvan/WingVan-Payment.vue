<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">WING VAN SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-list"
              >Wing Van List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-reports"
              >Reports</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row mt-3">
          Search by SOA Date
          <div class="col-sm">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
              v-model="datefrom"
            />
          </div>
          <div class="col-sm">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
              v-model="dateto"
            />
          </div>
          <div class="col">
            <button class="btn btn-secondary" @click="get_soa()">Generate</button>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <ag-grid-vue
              style="width: 1050px; height: 200px;"
              class="ag-theme-balham"
              :columnDefs="columnDefs"
              :rowData="filter"
              @grid-ready="onGridReady"
              rowSelection="multiple"
              @selectionChanged="onChange"
            ></ag-grid-vue>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h4>Entry Payments</h4>
            <form @submit.prevent="create_payment()">
              <div class="row">
                <div class="col-sm">
                  <label for="refence">Billed To</label>
                  <select class="form-control form-control-sm" :required="true" v-model="form.mode">
                    <option v-for="m in mode" v-bind:key="m.id" v-bind:value="m.name">{{ m.name }}</option>
                  </select>
                </div>
                <div class="col-sm">
                  <label for="date">Payment Date</label>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    v-model="form.payment_date"
                  />
                </div>

                <div class="col-sm-6">
                  <label for="refence">OR / Ref No</label>
                  <input type="text" class="form-control form-control-sm" v-model="form.or_ref_no" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="exampleInputEmail1">Check Card No</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.check_card_no"
                  />
                </div>
                <div class="col">
                  <label for="exampleInputEmail1">Check Card / Bank Name</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.check_card_bank_name"
                  />
                </div>
                <div class="col">
                  <label for="exampleInputEmail1">Amount</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.amount"
                    style="text-align:right;"
                  />
                </div>
                <div class="col">
                  <label for="exampleInputEmail1">Applied Amount</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.applied_amount"
                    style="text-align:right;"
                    disabled
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <label for="remarks">Remarks</label>
                  <input type="text" class="form-control form-control-sm" v-model="form.remarks" />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <button type="button" @click="clear()" class="btn btn-secondary">New / Clear</button>
                  <button type="submit" class="btn btn-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      datas: {},
      mode: {},
      payment_type: "REQ",
      gridApi: null,
      columnApi: null,
      filter: null,
      form: new Form({
        id: "",
        gclid_link: 0,
        mode: "",
        payment_date: "",
        or_ref_no: "",
        check_card_no: "",
        check_card_bank_name: "",
        amount: 0,
        remarks: "",
        applied_amount: 0,
        filter: null,
        soa_link: 0
      })
    };
  },
  methods: {
    onChange: function(e) {
      this.form.applied_amount = 0;
      this.form.filter = [];
      const selectedRows = this.gridApi.getSelectedNodes();
      const selectedData = selectedRows.map(node => node.data);
      const selectedDataStringPresentation = selectedData.map(
        node =>
          (this.form.applied_amount = this.form.applied_amount + node.amount)
      );

      const push = selectedData.map(node => this.form.filter.push(node));

      console.log(this.form.filter);
    },
    clear() {
      this.filter = null;
      this.soa_no = "";
      this.exact_amount = 0;
      this.form.reset();
    },
    get_soa() {
      axios
        .get(
          "wreq_soa/payment/" +
            this.datefrom +
            "/" +
            this.dateto +
            "/" +
            this.payment_type
        )
        .then(({ data }) => {
          console.log(data);
          this.filter = data.data;
        });
    },
    loadMode() {
      axios.get("api/mode").then(({ data }) => {
        this.mode = data.data;
      });
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    create_payment() {
      if (this.form.applied_amount == 0) {
        swal.fire("Select SOA", "warning");
      } else if (this.form.amount != this.form.applied_amount) {
        swal.fire("Check Amount and Rental Amount should be equal", "warning");
      } else {
        this.$Progress.start();
        this.form
          .post("wingvan/payment_store")
          .then(data => {
            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            console.log(data.data);
            this.clear();
            this.filter = null;
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
    }
  },
  created() {
    this.columnDefs = [
      {
        headerName: "SOA Date",
        field: "soa_date",
        resizable: true,
        width: 170,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "SOA No",
        field: "series_no",
        resizable: true,
        width: 170
      },
      {
        headerName: "Billed To",
        field: "billed_name",
        resizable: true,
        width: 170
      },
      {
        headerName: "Charge Invoice No",
        field: "charge_invoice_no",
        resizable: true,
        width: 170
      },
      {
        headerName: "Status",
        field: "status",
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
    this.loadMode();
    this.datefrom = moment().format("YYYY-MM-DD");
    this.dateto = moment().format("YYYY-MM-DD");
    this.form.payment_date = moment().format("YYYY-MM-DD");
  }
};
</script>
