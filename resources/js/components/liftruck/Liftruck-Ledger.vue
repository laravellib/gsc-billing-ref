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
          <div class="col-sm-6">
            <label for="refence">Reference #</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="reference_no"
                name="reference_no"
                disabled
              />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="searchReference()"
                >Search</button>
              </span>
            </div>
          </div>
        </div>

        <div class="row mt-6">
          <div class="col-7">
            <kendo-grid
              :height="350"
              :data-source="filter"
              v-on:change="onChange"
              :selectable="true"
              :sortable="true"
            >
              <kendo-grid-column :field="'mat_code'" :title="'Mat Code'"></kendo-grid-column>
              <kendo-grid-column :field="'location'" :title="'Location'"></kendo-grid-column>
              <kendo-grid-column :field="'price_per_bag'" :title="'Price/Bag'"></kendo-grid-column>
            </kendo-grid>
          </div>
          <div class="col-4">
            <kendo-grid :height="350" :data-source="balance" :selectable="true" :sortable="true">
              <kendo-grid-column :field="'type'" :title="'Type'"></kendo-grid-column>
              <kendo-grid-column :field="'qty'" :title="'Qty'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
        <search-header @data_pass="get_header"></search-header>
      </div>
    </div>
  </div>
</template>

<script>
import searchHeader from "./Liftruck-PO-Search.vue";
export default {
  components: {
    "search-header": searchHeader
  },
  data() {
    return {
      reference_no: "",
      header_id: "",
      filter: {},
      balance: {}
    };
  },
  methods: {
    searchReference() {
      $("#searchLPO").modal("show");
    },
    get_header(data) {
      this.header_id = data.id;
      this.reference_no = data.doc_no;
      this.get_detail();
    },
    get_detail() {
      axios.get("liftruck/dtl/" + this.header_id).then(({ data }) => {
        this.filter = data.data;
      });
    },
    onChange: function(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.get_balance(dataItem.id);
    },
    get_balance(id) {
      axios.get("liftruck/ledger/" + id).then(({ data }) => {
        this.balance = data.data;
      });
    }
  },
  created() {}
};
</script>
