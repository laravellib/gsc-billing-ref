<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="signatory"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Signatory</h4>
            <button type="button" class="close" @click="close()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row mt-3">
              <div class="col-sm-6">
                <strong>Prepared By:</strong>
                <b-form-input
                  size="sm"
                  list="preparedBy"
                  v-model="form.preparedBy"
                  @keyup="sourceChangedPrepared"
                ></b-form-input>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.preparedByPos"
                  disabled
                />
                <datalist id="preparedBy">
                  <option
                    v-for="signatory in signatories"
                    :value="signatory.name"
                    :key="signatory.id"
                  ></option>
                </datalist>
              </div>

              <div class="col-sm-6">
                <strong>Verified and Checked By:</strong>
                <b-form-input
                  size="sm"
                  list="verifiedBy"
                  v-model="form.verifiedBy"
                  @keyup="sourceChangedVerified"
                ></b-form-input>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.verifiedByPos"
                  disabled
                />
                <datalist id="verifiedBy">
                  <option
                    v-for="signatory in signatories"
                    :value="signatory.name"
                    :key="signatory.id"
                  ></option>
                </datalist>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-6">
                <strong>Noted By:</strong>

                <b-form-input
                  size="sm"
                  list="notedBy"
                  v-model="form.notedBy"
                  @keyup="sourceChangedNoted"
                ></b-form-input>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.notedByPos"
                  disabled
                />
                <datalist id="notedBy">
                  <option
                    v-for="signatory in signatories"
                    :value="signatory.name"
                    :key="signatory.id"
                  ></option>
                </datalist>
              </div>

              <div class="col-sm-6">
                <strong>Approved By:</strong>
                <b-form-input
                  size="sm"
                  list="approvedBy"
                  v-model="form.approvedBy"
                  @keyup="sourceChangedApproved"
                ></b-form-input>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.approvedByPos"
                  disabled
                />
                <datalist id="approvedBy">
                  <option
                    v-for="signatory in signatories"
                    :value="signatory.name"
                    :key="signatory.id"
                  ></option>
                </datalist>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="print()">Print</button>
            </div>
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
      signatories: null,
      form: new Form({
        preparedBy: "",
        verifiedBy: "",
        notedBy: "",
        approvedBy: "",
        preparedByPos: "",
        verifiedByPos: "",
        notedByPos: "",
        approvedByPos: ""
      })
    };
  },
  methods: {
    close() {
      $("#signatory").modal("hide");
    },
    print() {
      this.$emit("signatory", this.form);
      $("#signatory").modal("hide");
    },
    getSignatories() {
      axios({ method: "GET", url: "/api/billingsignatoryGetForSearch" }).then(
        ({ data }) => {
          this.signatories = data;
        }
      );
    },
    sourceChangedPrepared: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.preparedBy } })
        .then(({ data }) => {
          this.form.preparedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedVerified: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.verifiedBy } })
        .then(({ data }) => {
          this.form.verifiedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedNoted: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.notedBy } })
        .then(({ data }) => {
          this.form.notedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500),
    sourceChangedApproved: _.debounce(function(e) {
      axios
        .get("/api/getPosition", { params: { name: this.form.approvedBy } })
        .then(({ data }) => {
          this.form.approvedByPos = data[0]["position"];
        })
        .catch(err => {
          console.log(err);
        });
    }, 500)
  },
  mounted() {},
  created() {
    this.getSignatories();
  }
};
</script>
