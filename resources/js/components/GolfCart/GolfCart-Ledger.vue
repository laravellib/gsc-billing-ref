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
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-rental">Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-soa">Statement of Account (SOA)</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-payment">Payment</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/golfcart-ledger">General / Subsidiary Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-adjustment">Adjustment</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row mt-3">
          <div class="col-sm-6">
            <label for="golfcart">Golf Cart</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="golfcart_no"
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
              &nbsp; &nbsp;
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="generate_all()"
                >GENERATE ALL</button>
              </span>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <kendo-grid :height="300" :data-source="filter" :selectable="true" :sortable="true">
              <kendo-grid-column :field="'trans_date'" :title="'Date'"></kendo-grid-column>
              <kendo-grid-column :field="'golfcart_no'" :title="'Golfcart No'"></kendo-grid-column>
              <kendo-grid-column :field="'reference_no'" :title="'Reference No'"></kendo-grid-column>
              <kendo-grid-column :field="'debit_amount'" :title="'Debit'"></kendo-grid-column>
              <kendo-grid-column :field="'credit_amount'" :title="'Credit'"></kendo-grid-column>
              <kendo-grid-column :field="'balance_amount'" :title="'Line Balance'"></kendo-grid-column>
              <kendo-grid-column :field="'balance'" :title="'Running Balance'"></kendo-grid-column>
              <kendo-grid-column :field="'type'" :title="'Type'"></kendo-grid-column>
              <kendo-grid-column :field="'remarks'" :title="'Remarks'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchGolfcart from "../search/golfcart-modal.vue";
export default {
  components: {
    "search-golfcart": searchGolfcart
  },
  data() {
    return {
      filter: {},
      golfcart_no: "",
      gcid_link: 0
    };
  },
  methods: {
    searchGolfcart() {
      $("#searchGolfcart").modal("show");
    },
    getData(data) {
      this.golfcart_no = data.name;
      this.get_ledger(data.id);
    },
    get_ledger(id) {
      axios.get("golfcart_rental/general_ledger/" + id).then(({ data }) => {
        this.filter = data.data;
      });
    },
    generate_all() {
      axios.get("golfcart_rental/ledger").then(({ data }) => {
        this.filter = data.data;
      });
    }
  },
  created() {}
};
</script>
