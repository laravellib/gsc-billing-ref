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
      <div class="container tab-content">
        <form @submit.prevent="createClient()">
          <div class="row mt-3">
            <div class="col-sm-4">
              <label for="refence">Req #</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="req_id"
                v-model="dtl.req_id"
              />
            </div>
            <div class="col-sm-4">
              <label for="refence">Date</label>
              <input
                type="date"
                class="form-control form-control-sm"
                name="req_date"
                v-model="dtl.req_date"
              />
            </div>
            <div class="col-sm-4">
              <label for="refence">Status</label>
              <p>{{ dtl.status }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-sm">
              <label for="refence">Date</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="date"
                  v-model="dtl.date"
                  disabled
                />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="searchPODetail()"
                  >Search</button>
                </span>
              </div>
            </div>
            <div class="col-sm">
              <label for="refence">Activity</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="activity"
                v-model="dtl.activity"
                disabled
              />
            </div>
            <div class="col-sm">
              <label for="refence">Route</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="route"
                v-model="dtl.route"
                disabled
              />
            </div>
            <div class="col-sm">
              <label for="refence">PO #</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="doc_no"
                v-model="dtl.doc_no"
                disabled
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-sm">
              <label for="refence">No. of Bags</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="qty"
                v-model="dtl.qty"
                v-on:keyup="calculate()"
              />
            </div>
            <div class="col-sm">
              <label for="refence">Rate</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="rate"
                v-model="dtl.rate"
                disabled
              />
            </div>
            <div class="col-sm">
              <label for="refence">Amount</label>
              <input
                type="text"
                class="form-control form-control-sm"
                name="amount"
                v-model="dtl.amount"
                disabled
              />
            </div>
          </div>
          <div class="row">
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">{{ editMode ? "Update" : "Save" }}</button>
              <button type="button" class="btn btn-success" @click="post_dmpi()">POST</button>
              <button type="button" class="btn btn-secondary" @click="dmpi_clear()">Clear</button>
              <button type="button" class="btn btn-secondary" @click="searchHeader()">Search Rental</button>
            </div>
          </div>
        </form>
      </div>
      <search-detail @data_pass="get_detail"></search-detail>
      <search-requisition @data_pass="get_header" :key="this.update_data"></search-requisition>
    </div>
  </div>
</template>

<script>
import searchDetail from "./WingVan-PO-Search-Detail.vue";
import searchRequisition from "./WingVan-Search-Requisition.vue";
export default {
  components: {
    "search-detail": searchDetail,
    "search-requisition": searchRequisition
  },
  data() {
    return {
      editModeO: false,
      editMode: false,
      update_data: 0,
      dtl: new Form({
        date: "",
        activity: "",
        route: "",
        doc_no: "",
        qty: "",
        rate: "",
        amount: "",
        req_id: "",
        req_date: "",
        id: 0,
        status: "ACTIVE",
        po_detail_id: 0
      })
    };
  },
  methods: {
    post_dmpi() {
      if (this.dtl.id == 0) {
        swal.fire("No Data Selected", "warning");
      } else if (this.dtl.status == "POSTED") {
        swal.fire("Data Already Posted.", "warning");
      } else {
        swal
          .fire({
            title: "POST RENTAL?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, POST it!"
          })
          .then(result => {
            if (result.value) {
              axios.get("wingvan/req_post/" + this.dtl.id).then(({ data }) => {
                swal.fire("POST!", "Your data has been posted.", "success");
                this.dtl.reset();
                this.update_data = 2;
              });
            }
          });
      }
    },
    searchHeader() {
      $("#searchVRequisition").modal("show");
    },
    dmpi_clear() {
      this.dtl.reset();
    },
    searchPODetail() {
      $("#searchVDPO").modal("show");
    },
    get_header(data) {
      this.dtl.date = data.po_date;
      this.dtl.activity = data.po_activity;
      this.dtl.route = data.po_route;
      this.dtl.doc_no = data.po_no;
      this.dtl.rate = data.gross_amount;
      this.dtl.qty = data.no_trips;
      this.dtl.amount = data.amount;
      this.dtl.req_id = data.req_id;
      this.dtl.req_date = data.date;
      this.dtl.id = data.id;
      this.dtl.status = data.status;
      this.editMode = true;
    },
    get_detail(data) {
      this.dtl.date = data.date;
      this.dtl.activity = data.activity;
      this.dtl.route = data.location;
      this.dtl.doc_no = data.doc_no;
      this.dtl.rate = data.price_per_bag;
      this.dtl.po_detail_id = data.id;
    },
    calculate() {
      this.dtl.amount = this.dtl.qty * this.dtl.rate;
    },
    createClient() {
      if (this.dtl.status == "POSTED") {
        swal.fire("Data Already Posted.", "warning");
      } else {
        this.$Progress.start();
        axios
          .post("wingvan/req_client", this.dtl)
          .then(data => {
            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            console.log(data);
            this.dtl.reset();
            this.editMode = true;
            this.update_data = 1;
          })
          .catch(e => {
            this.$Progress.fail();
            toast.fire({
              icon: "error",
              title: "Error Found"
            });
            console.log(e);
          });

        this.$Progress.finish();
      }
    }
  },
  created() {
    this.dtl.req_id = "WREQ-" + moment().format("HHMMSS");
    this.dtl.req_date = moment().format("YYYY-MM-DD");
  }
};
</script>
