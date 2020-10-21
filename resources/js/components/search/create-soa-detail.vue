<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="searchSoaDetail"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Detail</h4>
            <button type="button" class="close" aria-label="Close" @click="exit()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <kendo-grid
              :height="200"
              :data-source="filter"
              :selectable="true"
              :sortable="true"
              v-on:change="onChange"
            >
              <kendo-grid-column :field="'period'" :title="'Period'"></kendo-grid-column>
              <kendo-grid-column :field="'year'" :title="'Year'"></kendo-grid-column>
              <kendo-grid-column :field="'amount'" :title="'Amount'"></kendo-grid-column>
            </kendo-grid>-->
            <form @submit.prevent="createData()">
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <label for="date">Period</label>
                    <select
                      id="type"
                      v-model="form.period_month"
                      name="type"
                      class="form-control form-control-sm"
                    >
                      <option value>Select Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>

                  <div class="col">
                    <label for="refence">Year</label>
                    <input type="text" class="form-control form-control-sm" v-model="form.year" />
                  </div>
                  <div class="col">
                    <label for="refence">Amount</label>
                    <input type="text" class="form-control form-control-sm" v-model="form.amount" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" @click="add_details()">New</button>
                <button type="submit" class="btn btn-primary">Create</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="current_data()"
                >Tag from Current Data</button>
                <button type="button" class="btn btn-danger" @click="exit()">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    passedData: {
      type: String
    }
  },
  data() {
    return {
      form: new Form({
        id: "",
        soa_hdr_id: 0,
        period_month: "",
        year: "",
        amount: ""
      })
    };
  },
  methods: {
    current_data() {
      this.form.period_month = moment().format("MMMM");
      this.form.year = moment().format("YYYY");
      this.form.soa_hdr_id = this.passedData;
    },
    createData() {
      this.form.soa_hdr_id = this.passedData;
      this.$Progress.start();
      this.form
        .post("golfcart_soa/store_detail")
        .then(data => {
          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          console.log(data.data);
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
    },
    exit() {
      $("#searchSoaDetail").modal("hide");
    }
  },
  mounted() {},
  created() {}
};
</script>
