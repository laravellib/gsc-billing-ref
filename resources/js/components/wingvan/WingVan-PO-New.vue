<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="newWingVanPO"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">New Pruchase Order</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editMode ? updateData() : createData()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Doc #</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.doc_no"
                      name="doc_no"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <label for="refence">Date</label>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      v-model="form.date"
                      name="date"
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
import moment from "moment";
export default {
  data() {
    return {
      editMode: false,
      golfcart: {},
      filter: {},
      datas: [],
      form: new Form({
        id: 0,
        date: "",
        doc_no: "",
        status: "ACTIVE"
      })
    };
  },
  methods: {
    createData() {
      this.$Progress.start();
      this.form
        .post("wingvan/store_hdr")
        .then(data => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.form.id = data.data.id;
          this.$emit("po_pass", this.form);
          this.form.reset();
          this.form.doc_no = "WPO-" + moment().format("HHMMSS");
          $("#newWingVanPO").modal("hide");
        })
        .catch(e => {
          console.log(e);
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
  created() {
    this.form.doc_no = "WPO-" + moment().format("HHMMSS");
    this.form.date = moment().format("YYYY-MM-DD");
  }
};
</script>
