<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">GOLFCART SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart">Masterfile</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/golfcart-rental">Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-soa">Statement of Account (SOA)</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-payment">Payment</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-ledger">General / Subsidiary Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-adjustment">Adjustment</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <!-- <div class="row mt-3">
          Search by Trans Date
          <div class="col">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
            />
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
            />
          </div>
          <div class="col">
            <button class="btn btn-secondary">GO</button>
          </div>
        </div>-->
        <div class="row mt-2">
          <div class="col">
            <ag-grid-vue
              style="width: 1050px; height: 200px;"
              class="ag-theme-balham"
              :columnDefs="columnDefs"
              :rowData="filter"
              @grid-ready="onGridReady"
              rowSelection="single"
              @rowClicked="onChange"
            ></ag-grid-vue>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h4>Golf Cart Rental Entry</h4>
            <form
              @submit.prevent="
                                editMode ? updateData() : createRental()
                            "
            >
              <div class="row">
                <div class="col-3">
                  <label for="date">Date</label>
                  <input type="date" class="form-control form-control-sm" v-model="form.trans_date" />
                </div>
                <div class="col-3">
                  <label for="golfcart">Golf Cart</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.golfcart_no"
                      disabled
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="searchGolfcart()"
                      >Search</button>
                      <search-golfcart @golfcart_data="getData"></search-golfcart>
                    </span>
                  </div>
                </div>

                <div class="col-6">
                  <label for="refence">Reference</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.reference_no"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label for="exampleInputEmail1">Description</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.description"
                  />
                </div>
                <div class="col-3">
                  <label for="exampleInputEmail1">Account Code</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.account_code"
                  />
                </div>
                <div class="col-3">
                  <label for="exampleInputEmail1">Amount</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.debit_amount"
                    style="text-align:right;"
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <button type="button" class="btn btn-primary" @click="print_pdf()">Print</button>
                  <button type="button" @click="clearData()" class="btn btn-secondary">New / Clear</button>
                  <button type="submit" class="btn btn-success">{{ editMode ? "Update" : "Save" }}</button>
                  <button type="button" class="btn btn-danger" @click="deleteData(form.id)">Delete</button>
                  <button type="button" class="btn btn-success" @click="excel_upload()">Upload Excel</button>
                  <upload-excel @upload_data="load_upload"></upload-excel>
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
import searchGolfcart from "../search/golfcart-modal.vue";
import uploadExcel from "./GolfCart-Rental-Upload.vue";
import moment from "moment";
export default {
  components: {
    "search-golfcart": searchGolfcart,
    "upload-excel": uploadExcel,
    AgGridVue
  },
  data() {
    return {
      filter: null,
      rental: null,
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      searching: "",
      editMode: false,
      form: new Form({
        id: "",
        trans_date: "",
        gcid_link: 0,
        golfcart_no: "",
        reference_no: "",
        description: "",
        account_code: "",
        debit_amount: 0,
        x_month: "",
        x_year: ""
      })
    };
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    onChange: function(e) {
      const selectedRows = this.gridApi.getSelectedNodes();
      this.form.fill(selectedRows[0].data);
      this.editMode = true;
    },
    excel_upload() {
      $("#uploadExcel").modal("show");
    },
    print_pdf() {
      window.open("golfcart_rental/pdf");
    },
    clearData() {
      this.form.reset();
    },
    updateData() {
      this.form
        .put("api/golfcart_rental/" + this.form.id)
        .then(() => {
          Fire.$emit("AfterCreate");
          toast.fire({
            icon: "success",
            title: "Update data successfully"
          });
          this.editMode = false;
          this.form.reset();
        })
        .catch(() => {
          swal.fire("Error Found.", "warning");
        });
    },
    deleteData(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.form
              .delete("api/golfcart_rental/" + id)
              .then(() => {
                swal.fire("Deleted!", "Your file has been deleted.", "success");
                this.editMode = false;
                this.form.reset();
              })
              .catch(() => {
                swal.fire("Error Found.", "warning");
              });
            Fire.$emit("AfterCreate");
          }
        });
    },
    loadRental() {
      this.columnDefs = [
        {
          headerName: "Date",
          field: "trans_date",
          resizable: true,
          width: 170
        },
        {
          headerName: "Golfcart Name",
          field: "golfcart_no",
          resizable: true,
          width: 170
        },
        {
          headerName: "Reference No",
          field: "reference_no",
          resizable: true,
          width: 170
        },
        {
          headerName: "Description",
          field: "description",
          resizable: true,
          width: 170
        },
        {
          headerName: "Account Code",
          field: "account_code",
          resizable: true,
          width: 170
        },
        {
          headerName: "Amount",
          field: "debit_amount",
          resizable: true,
          width: 170,
          cellStyle: { textAlign: "center" },
          valueFormatter: this.$root.currencyFormatter
        }
      ];
      axios.get("api/golfcart_rental").then(({ data }) => {
        this.rental = data.data;
        this.filter = this.rental;
      });
    },
    load_upload(e) {
      axios.get("api/golfcart_rental").then(({ data }) => {
        this.rental = data.data;
        this.filter = this.rental;
      });
    },
    searchGolfcart() {
      $("#searchGolfcart").modal("show");
    },
    getData(data) {
      this.form.golfcart_no = data.name;
      this.form.gcid_link = data.id;
    },
    createRental() {
      this.form.x_month = moment().format("MMMM");
      this.form.x_year = moment().format("YYYY");
      this.$Progress.start();
      this.form
        .post("api/golfcart_rental")
        .then(() => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.form.reset();
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
  created() {
    this.loadRental();
    Fire.$on("AfterCreate", () => {
      this.loadRental();
    });
    this.form.trans_date = moment().format("YYYY-MM-DD");
  }
};
</script>
