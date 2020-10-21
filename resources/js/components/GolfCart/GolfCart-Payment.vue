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
            <li class="nav-item active">
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
          <div class="col-sm-6">
            <label for="golfcart">Search SOA</label>
            <div class="input-group">
              <input type="text" class="form-control form-control-sm" v-model="soa_no" disabled />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="searchSOA()"
                >Search</button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="get_soa(form.soa_link)"
                >ADD SOA</button>
              </span>
              <search-soa @soa_data="getData_soa"></search-soa>
            </div>
          </div>
          <div class="col-sm-3" v-show="isUpdate">
            <label for="golfcart">To be Paid</label>
            <div class="input-group">
              <input type="text" class="form-control form-control-sm" v-model="update_balance" />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="
                                        update_balances(
                                            update_balance,
                                            update_id
                                        )
                                    "
                >UPDATE</button>
              </span>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <kendo-grid
              :height="200"
              :data-source="form.filter"
              :selectable="true"
              :sortable="true"
              v-on:change="u_balance"
            >
              <kendo-grid-column :field="'trans_date'" :title="'Date'"></kendo-grid-column>
              <kendo-grid-column :field="'golfcart_no'" :title="'Golfcart Name'"></kendo-grid-column>
              <kendo-grid-column :field="'reference_no'" :title="'Reference No'"></kendo-grid-column>
              <kendo-grid-column :field="'debit_amount'" :title="'Amount'"></kendo-grid-column>
              <kendo-grid-column :field="'balance_amount'" :title="'To be Paid'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h4>Entry Payments</h4>
            <form @submit.prevent="createRental()">
              <div class="row">
                <div class="col-3">
                  <label for="golfcart">Mode</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.mode"
                      disabled
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="searchMode()"
                      >Search</button>
                      <search-mode @golfcart_data="getData"></search-mode>
                    </span>
                  </div>
                </div>
                <div class="col-3">
                  <label for="date">Payment Date</label>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    v-model="form.payment_date"
                  />
                </div>

                <div class="col-6">
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
                  <button type="button" @click="clearData()" class="btn btn-secondary">New / Clear</button>
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
import searchMode from "../search/mode-payment.vue";
import searchSOA from "../search/soa.vue";
import moment from "moment";
export default {
  components: {
    "search-mode": searchMode,
    "search-soa": searchSOA
  },
  data() {
    return {
      soa_no: "",
      update_balance: "",
      update_id: 0,
      temp: [],
      isUpdate: false,
      addSoa: {},
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
        x_month: "",
        x_year: "",
        applied_amount: 0,
        filter: {},
        soa_link: 0
      })
    };
  },
  methods: {
    update_balances(value, id) {
      for (var i in this.form.filter) {
        if (this.form.filter[i].id == id) {
          this.temp = this.form.filter[i];
          this.temp.balance_amount = value;
          this.form.filter.splice(i, 1, this.temp);

          break; //Stop this loop, we found it!
        }
      }
      this.update_applied_amount();
      this.update_id = 0;
      this.update_balance = "";
      this.isUpdate = false;
    },
    update_applied_amount() {
      this.form.applied_amount = 0;
      for (var i in this.form.filter) {
        this.form.applied_amount =
          Number(this.form.filter[i].balance_amount) +
          Number(this.form.applied_amount);
      }
    },
    u_balance: function(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.isUpdate = true;
      this.update_id = dataItem.id;
      this.update_balance = dataItem.balance_amount;
    },
    getData_soa(data) {
      this.soa_no = data.series_no;
      this.form.soa_link = data.id;
      //this.get_soa(data.id);

      // console.log({ soa: this.soa });
    },
    searchSOA() {
      $("#searchSOA").modal("show");
    },
    clearData() {
      this.form.filter = null;
      this.soa_no = "";
      this.exact_amount = 0;
      this.form.reset();
    },
    get_soa(id) {
      axios.get("golfcart_rental/soa_ledger/" + id).then(({ data }) => {
        this.form.filter = data.data;
        this.form.amount = data.sum;
        this.form.applied_amount = data.sum;
      });
    },
    append_soa_search() {
      console.log(this.addSoa);
      this.form.filter.push({ ...this.addSoa });
    },
    searchMode() {
      $("#searchMode").modal("show");
    },
    getData(data) {
      this.form.mode = data.name;
      console.log(data);
    },
    createRental() {
      if (this.form.amount != this.form.applied_amount) {
        swal.fire("Check Amount and Rental Amount should be equal", "warning");
      } else {
        this.form.x_month = moment().format("MMMM");
        this.form.x_year = moment().format("YYYY");
        this.$Progress.start();
        this.form
          .post("golfcart_rental/payment_store")
          .then(data => {
            Fire.$emit("AfterCreate");

            toast.fire({
              icon: "success",
              title: "Added Data in successfully"
            });
            console.log(data.data);
            this.clearData();
            this.form.filter = null;
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
    this.form.payment_date = moment().format("YYYY-MM-DD");
  }
};
</script>
