<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="newLiftruckDR"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">New Delivery</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createData()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Delivered To</label>
                    <input
                      type="text"
                      v-model="form.delivered_to"
                      name="delivered_to"
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
                    <label for="refence">Unit #</label>
                    <input
                      type="text"
                      v-model="form.unit_no"
                      name="unit_no"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">From</label>
                    <input
                      type="text"
                      v-model="form.from"
                      name="from"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">To</label>
                    <input
                      type="text"
                      v-model="form.to"
                      name="to"
                      class="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">START</label>
                    <input
                      type="text"
                      v-model="form.start"
                      name="start"
                      class="form-control form-control-sm"
                    />
                  </div>
                  <div class="col-sm">
                    <label for="refence">END</label>
                    <input
                      type="text"
                      v-model="form.end"
                      name="end"
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
        delivered_to: "",
        date: "",
        unit_no: "",
        from: "",
        to: "",
        start: "",
        end: "",
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
        .post("liftruck/store_hdr_dr")
        .then(data => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.form.id = data.data.id;
          this.$emit("po_pass", this.form);
          this.form.reset();
          $("#newLiftruckDR").modal("hide");
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
