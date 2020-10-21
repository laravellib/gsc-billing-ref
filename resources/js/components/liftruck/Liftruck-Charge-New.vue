<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="newLiftruckCI"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">New Charge Invoice</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createData()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">CH #</label>
                    <input
                      type="text"
                      v-model="form.ch_no"
                      name="ch_no"
                      class="form-control form-control-sm"
                    />
                  </div>
                  <div class="col-sm">
                    <label for="refence">Date</label>
                    <input
                      type="date"
                      v-model="form.date"
                      name="date"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Charged</label>
                    <input
                      type="text"
                      v-model="form.charged"
                      name="charged"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">TIN</label>
                    <input
                      type="text"
                      v-model="form.tin"
                      name="tin"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Address</label>
                    <input
                      type="text"
                      v-model="form.address"
                      name="address"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
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
export default {
  data() {
    return {
      form: new Form({
        id: 0,
        ch_no: "",
        date: "",
        charged: "",
        tin: "",
        address: "",
        encoded_by: "DANIEL",
        encoded_id: 1,
        status: "ACTIVE"
      })
    };
  },
  methods: {
    createData() {
      this.$Progress.start();
      this.form
        .post("liftruck/store_hdr_ci")
        .then(data => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.form.id = data.data.id;
          this.$emit("po_pass", this.form);
          this.form.reset();
          $("#newLiftruckCI").modal("hide");
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
