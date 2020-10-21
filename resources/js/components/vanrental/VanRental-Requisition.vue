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
              <a data-toggle="tab" href="#dmpi">Client DMPI</a>
            </li>&nbsp; &nbsp;
            <li>
              <a data-toggle="tab" href="#outsider">Client Outsider</a>
            </li>
          </ul>
        </div>
        <div id="dmpi" class="tab-pane fade">
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
                <label for="refence">No. of Trips</label>
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
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="searchHeader()"
                >Search Rental</button>
              </div>
            </div>
          </form>
        </div>
        <div id="outsider" class="tab-pane fade">
          <form @submit.prevent="createOutsider()">
            <div class="row mt-3">
              <div class="col-sm-4">
                <label for="refence">Req #</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="req_id"
                  v-model="out.req_id"
                />
              </div>
              <div class="col-sm-4">
                <label for="refence">Date</label>
                <input
                  type="date"
                  class="form-control form-control-sm"
                  name="req_date"
                  v-model="out.req_date"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm">
                <label for="refence">Vehicle</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    name="vehicle_name"
                    v-model="out.vehicle_name"
                    disabled
                  />
                  <span class="input-group-btn">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm"
                      @click="searchVehicle()"
                    >Search</button>
                  </span>
                </div>
              </div>
              <div class="col-sm">
                <label for="refence">Serial No</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="serial_no"
                  v-model="out.serial_no"
                  disabled
                />
              </div>
              <div class="col-sm">
                <label for="refence">Client Name</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="client"
                  v-model="out.client"
                />
              </div>
              <div class="col-sm">
                <label for="refence">Activity</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="activity"
                  v-model="out.activity"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm">
                <label for="refence">No. of Trips</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="qty"
                  v-model="out.qty"
                  v-on:keyup="calculate_outsider()"
                />
              </div>
              <div class="col-sm">
                <label for="refence">Rate</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="rate"
                  v-model="out.rate"
                  disabled
                />
              </div>
              <div class="col-sm">
                <label for="refence">Amount</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name="amount"
                  v-model="out.amount"
                  disabled
                />
              </div>
            </div>
            <div class="row">
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">{{ editModeO ? "Update" : "Save" }}</button>
                <button type="button" class="btn btn-success" @click="post_outsider()">POST</button>
                <button type="button" class="btn btn-secondary" @click="outsider_clear()">Clear</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="searchHeaderO()"
                >Search Rental</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <search-detail @data_pass="get_detail"></search-detail>
      <search-vehicle @data_pass="get_vehicle"></search-vehicle>
      <search-requisition @data_pass="get_header" :key="this.update_data"></search-requisition>
      <search-requisitiono @data_pass="get_header_o"></search-requisitiono>
    </div>
  </div>
</template>

<script>
import searchDetail from "./VanRental-PO-Search-Detail.vue";
import searchVehicle from "./VanRental-Search-Vehicle.vue";
import searchRequisition from "./VanRental-Search-Requisition.vue";
import searchRequisitionO from "./VanRental-Search-RequisitionO.vue";
export default {
  components: {
    "search-detail": searchDetail,
    "search-vehicle": searchVehicle,
    "search-requisition": searchRequisition,
    "search-requisitiono": searchRequisitionO
  },
  data() {
    return {
      editModeO: false,
      editMode: false,
      update_data: 0,
      out: new Form({
        date: "",
        activity: "",
        vehicle_name: "",
        serial_no: "",
        client: "",
        qty: "",
        rate: "",
        amount: "",
        req_id: "",
        req_date: "",
        status: "ACTIVE",
        id: 0
      }),
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
    searchHeaderO() {
      $("#searchVRequisitionO").modal("show");
    },
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
              axios
                .get("vanrental/req_post/" + this.dtl.id)
                .then(({ data }) => {
                  swal.fire("POST!", "Your data has been posted.", "success");
                  this.dtl.reset();
                  this.update_data = 2;
                });
            }
          });
      }
    },
    post_outsider() {
      if (this.out.id == 0) {
        swal.fire("No Data Selected", "warning");
      } else if (this.out.status == "POSTED") {
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
              axios
                .get("vanrental/req_post_outsider/" + this.out.id)
                .then(({ data }) => {
                  swal.fire("POST!", "Your data has been posted.", "success");
                  this.out.reset();
                  this.update_data = 1;
                });
            }
          });
      }
    },
    searchHeader() {
      $("#searchVRequisition").modal("show");
    },
    outsider_clear() {
      this.out.reset();
    },
    dmpi_clear() {
      this.dtl.reset();
    },
    searchVehicle() {
      $("#searchVVehicle").modal("show");
    },
    searchPODetail() {
      $("#searchVDPO").modal("show");
    },
    get_header_o(data) {
      this.out.activity = data.po_activity;
      this.out.vehicle_name = data.vehicle_name;
      this.out.serial_no = data.serial_no;
      this.out.client = data.client;
      this.out.qty = data.no_trips;
      this.out.rate = data.gross_amount;
      this.out.amount = data.amount;
      this.out.req_id = data.req_id;
      this.out.req_date = data.date;

      this.out.id = data.id;
      this.out.status = data.status;
      this.editModeO = true;
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
      this.dtl.rate = data.u_price;
      this.dtl.po_detail_id = data.id;
    },
    get_vehicle(data) {
      this.out.vehicle_name = data.name;
      this.out.serial_no = data.serial_no;
      this.out.rate = data.daily_rate;
    },
    calculate() {
      this.dtl.amount = this.dtl.qty * this.dtl.rate;
    },
    calculate_outsider() {
      this.out.amount = this.out.qty * this.out.rate;
    },
    createClient() {
      if (this.dtl.status == "POSTED") {
        swal.fire("Data Already Posted.", "warning");
      } else {
        this.$Progress.start();
        axios
          .post("vanrental/req_client", this.dtl)
          .then(data => {
            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            console.log(data);
            this.dtl.reset();
            this.editMode = true;
            this.update_data = 1;
            this.dtl.req_id = "VREQ-" + moment().format("HHMMSS");
            this.dtl.req_date = moment().format("YYYY-MM-DD");
            this.out.req_id = "VREQ-" + moment().format("HHMMSS");
            this.out.req_date = moment().format("YYYY-MM-DD");
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
    },
    createOutsider() {
      this.$Progress.start();
      axios
        .post("vanrental/req_outsider", this.out)
        .then(data => {
          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          console.log(data);
          this.out.reset();
          this.editModeO = false;
          this.dtl.req_id = "VREQ-" + moment().format("HHMMSS");
          this.dtl.req_date = moment().format("YYYY-MM-DD");
          this.out.req_id = "VREQ-" + moment().format("HHMMSS");
          this.out.req_date = moment().format("YYYY-MM-DD");
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
  },
  created() {
    this.dtl.req_id = "VREQ-" + moment().format("HHMMSS");
    this.dtl.req_date = moment().format("YYYY-MM-DD");
    this.out.req_id = "VREQ-" + moment().format("HHMMSS");
    this.out.req_date = moment().format("YYYY-MM-DD");
  }
};
</script>
