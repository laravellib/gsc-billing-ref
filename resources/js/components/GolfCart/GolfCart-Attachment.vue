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
              <span class="sr-only">(current)</span>
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
            <button class="btn btn-danger">Print</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <kendo-grid :height="350" :data-source="filter" :selectable="true" :sortable="true">
              <kendo-grid-column :field="'trans_date'" :title="'Date'"></kendo-grid-column>
              <kendo-grid-column :field="'golfcart_no'" :title="'Golfcart Name'"></kendo-grid-column>
              <kendo-grid-column :field="'reference_no'" :title="'Reference No'"></kendo-grid-column>
              <kendo-grid-column :field="'description'" :title="'Description'"></kendo-grid-column>
              <kendo-grid-column :field="'account_code'" :title="'Account Code'"></kendo-grid-column>
              <kendo-grid-column :field="'debit_amount'" :title="'Amount'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      filter: {},
      rental: {},
      searching: "",
      soa: {},
      datefrom: "",
      dateto: ""
    };
  },
  methods: {
    preview(data) {
      axios
        .get("soa/search/" + this.datefrom + "/" + this.dateto)
        .then(({ data }) => {
          this.rental = data.data;
          this.filter = this.rental;
        });
    }
  },
  created() {
    this.datefrom = moment().format("YYYY-MM-DD");
    this.dateto = moment().format("YYYY-MM-DD");
  }
};
</script>
