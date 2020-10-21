<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="newLiftruckCIDetail"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add Detail</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createDetail()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Article</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="article"
                        v-model="form.article"
                        disabled
                      />
                      <span class="input-group-btn">
                        <button
                          type="button"
                          class="btn btn-outline-primary btn-sm"
                          @click="searchLocation()"
                        >Search</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Unit</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="unit"
                      v-model="form.unit"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Qty</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="qty"
                      v-model="form.qty"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">U Price</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="u_price"
                      v-model="form.u_price"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Amount</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      name="amount"
                      v-model="form.amount"
                    />
                  </div>
                </div>
              </div>
              <search-location @data_pass="get_location"></search-location>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">SAVE</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
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
import searchLocation from "./Liftruck-Search-Location.vue";
export default {
  components: {
    "search-location": searchLocation
  },
  props: {
    passedData: {
      type: Number
    }
  },
  data() {
    return {
      form: new Form({
        id: 0,
        header_id: 0,
        article: "",
        u_price: "",
        qty: 0,
        amount: 0
      })
    };
  },
  methods: {
    get_location(data) {
      this.form.article = data.name;
    },
    searchLocation() {
      $("#searchLLocation").modal("show");
    },
    createDetail() {
      this.form.header_id = this.passedData;
      this.$Progress.start();
      this.form
        .post("liftruck/store_dtl_ci")
        .then(data => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.$emit("push_data", data.data);
          this.form.reset();
          $("#newLiftruckCIDetail").modal("hide");
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
  mounted() {},
  created() {}
};
</script>
