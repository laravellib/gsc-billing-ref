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
      <div class="container">
        <div class="row mt-3">
          <div class="col-sm">
            <label for="refence">Reference #</label>
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
            <kendo-grid :height="250" :data-source="filter" :selectable="true" :sortable="true">
              <kendo-grid-column :field="'location'" :title="'Location'"></kendo-grid-column>
              <kendo-grid-column :field="'activity'" :title="'Activity'"></kendo-grid-column>
              <kendo-grid-column :field="'mat_code'" :title="'Mat. Code'"></kendo-grid-column>
              <kendo-grid-column :field="'no_bags'" :title="'Hour'"></kendo-grid-column>
              <kendo-grid-column :field="'unit'" :title="'Unit'"></kendo-grid-column>
              <kendo-grid-column :field="'price_per_bag'" :title="'Price/Hr'"></kendo-grid-column>
              <kendo-grid-column :field="'amount'" :title="'Amount'"></kendo-grid-column>
            </kendo-grid>
            <new-po @po_pass="get_header"></new-po>
            <add-detail :passedData="this.header_id" @push_data="push_detail"></add-detail>
            <search-header @data_pass="get_header" :key="this.update_data"></search-header>
          </div>
        </div>
        <div class="row">
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary" @click="new_po()">New Purchase Order</button>
            <button type="button" class="btn btn-secondary" @click="clear()">Clear</button>
            <button type="button" class="btn btn-primary" @click="post_po(header_id)">POST</button>
            <button type="button" class="btn btn-danger" @click="cancel_po(header_id)">CANCEL</button>
            <button type="button" class="btn btn-secondary" @click="add_detail()">Add Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newPO from "./Liftruck-PO-New.vue";
import addDetail from "./Liftruck-PO-Detail.vue";
import searchHeader from "./Liftruck-PO-Search.vue";
export default {
  components: {
    "new-po": newPO,
    "add-detail": addDetail,
    "search-header": searchHeader
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
      this.datas = {};
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
                  .get("liftruck/cancel_po/" + this.header_id)
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
                  .get("liftruck/post_po/" + this.header_id)
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
      $("#searchLPO").modal("show");
    },
    get_header(data) {
      this.header_id = data.id;
      this.doc_no = data.doc_no;
      this.date = data.date;
      this.status = data.status;
      this.get_detail();
    },
    get_detail() {
      axios.get("liftruck/dtl/" + this.header_id).then(({ data }) => {
        this.datas = data.data;
        this.filter = this.datas;
        this.total_amount = data.sum;
      });
    },
    new_po() {
      this.clear();
      $("#newLiftruckPO").modal("show");
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
          $("#newWingVanPODetail").modal("show");
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
  created() {}
};
</script>
