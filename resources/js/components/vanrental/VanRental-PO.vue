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
      <div class="container">
        <div class="row mt-3">
          <div class="col-sm">
            <label for="refence">Doc #</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="doc_no"
                v-model="doc_no"
                disabled
              />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="searchPOHeader()"
                >Search</button>
              </span>
            </div>
          </div>
          <div class="col-sm">
            <label for="refence">Date</label>
            <input
              type="text"
              class="form-control form-control-sm"
              name="date"
              v-model="date"
              disabled
            />
          </div>
          <div class="col-sm">
            <label for="refence">STATUS</label>
            <p>
              <strong>{{ status }}</strong>
            </p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <ag-grid-vue
              style="width: 1050px; height: 300px;"
              class="ag-theme-balham"
              :columnDefs="columnDefs"
              :rowData="filter"
            ></ag-grid-vue>
          </div>
        </div>
        <new-po @po_pass="get_header"></new-po>
        <add-detail :passedData="this.header_id" @push_data="push_detail"></add-detail>
        <search-header @data_pass="get_header" :key="this.update_data"></search-header>
        <div class="row">
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary" @click="new_po()">New Purchase Order</button>
            <button type="button" class="btn btn-secondary" @click="clear()">Clear</button>
            <button type="button" class="btn btn-primary" @click="post_po(header_id)">POST</button>
            <button type="button" class="btn btn-danger" @click="cancel_po(header_id)">CANCEL</button>
            <button type="button" class="btn btn-success" @click="add_detail()">Add Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newPO from "./VanRental-PO-New.vue";
import addDetail from "./VanRental-PO-Detail.vue";
import searchHeader from "./VanRental-PO-Search.vue";
export default {
  components: {
    "new-po": newPO,
    "add-detail": addDetail,
    "search-header": searchHeader,
    AgGridVue
  },
  data() {
    return {
      header_id: 0,
      doc_no: "",
      date: "",
      status: "ACTIVE",
      filter: {},
      datas: {},
      total_amount: 0,
      update_data: 0
    };
  },
  methods: {
    clear() {
      this.header_id = 0;
      this.doc_no = "";
      this.date = "";
      this.status = "ACTIVE";
      this.filter = null;
      this.datas = null;
      this.total_amount = 0;
      this.update_data = 0;
    },
    cancel_po(id) {
      if (this.status == "CANCELLED") {
        swal.fire("Transaction already Cancelled.", "warning");
      } else if (this.status == "POSTED") {
        swal.fire("Transaction already Closed.", "warning");
      } else {
        if (this.header_id == 0) {
          swal.fire("No Data is Selected.", "warning");
        } else {
          swal
            .fire({
              title: "CANCEL PURCHASE ORDER?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, CANCEL it!"
            })
            .then(result => {
              if (result.value) {
                console.log(id);
                axios
                  .get("vanrental/cancel_po/" + this.header_id)
                  .then(({ data }) => {
                    swal.fire(
                      "CANCELLED!",
                      "Your data has been cancelled.",
                      "success"
                    );
                    this.clear();
                    this.update_data = 1;
                  });
              }
            });
        }
      }
    },
    post_po(id) {
      if (this.status == "CANCELLED") {
        swal.fire("Transaction already Cancelled.", "warning");
      } else if (this.status == "POSTED") {
        swal.fire("Transaction already Closed.", "warning");
      } else {
        if (this.header_id == 0) {
          swal.fire("No Data is Selected.", "warning");
        } else {
          swal
            .fire({
              title: "POST PURCHASE ORDER?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, POST it!"
            })
            .then(result => {
              if (result.value) {
                console.log(id);
                axios
                  .get("vanrental/post_po/" + this.header_id)
                  .then(({ data }) => {
                    swal.fire("POST!", "Your data has been posted.", "success");
                    this.clear();
                    this.update_data = 2;
                  });
              }
            });
        }
      }
    },
    searchPOHeader() {
      $("#searchVPO").modal("show");
    },
    get_header(data) {
      this.header_id = data.id;
      this.doc_no = data.doc_no;
      this.date = data.date;
      this.status = data.status;
      this.get_detail();
    },
    get_detail() {
      axios.get("vanrental/dtl/" + this.header_id).then(({ data }) => {
        this.datas = data.data;
        this.filter = this.datas;
        this.total_amount = data.sum;
      });
    },
    new_po() {
      this.clear();
      $("#newVanRentalPO").modal("show");
    },
    add_detail() {
      if (this.status == "CANCELLED") {
        swal.fire("Transaction already Cancelled.", "warning");
      } else if (this.status == "POSTED") {
        swal.fire("Transaction already Closed.", "warning");
      } else {
        if (this.header_id == 0) {
          swal.fire("No Data is Selected.", "warning");
        } else {
          $("#newVanRentalDetail").modal("show");
        }
      }
    },
    clearData() {
      this.form.reset();
    },
    push_detail(data) {
      this.filter.push(data);
    }
  },
  created() {
    this.columnDefs = [
      {
        headerName: "Activity",
        field: "activity",
        resizable: true,
        width: 170
      },
      {
        headerName: "Route",
        field: "location",
        resizable: true,
        width: 170
      },
      {
        headerName: "Mat. Code",
        field: "mat_code",
        resizable: true,
        width: 170
      },
      {
        headerName: "Qty",
        field: "qty",
        resizable: true,
        width: 170
      },
      {
        headerName: "U Price",
        field: "u_price",
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
  }
};
</script>
