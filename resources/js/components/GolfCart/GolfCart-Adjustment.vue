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
            <li class="nav-item active">
              <router-link class="nav-link" to="/golfcart-adjustment">Adjustment</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row mt-3">
          <div class="col">
            <h4>Golf Cart Adjustment</h4>
            <form
              @submit.prevent="editMode ? updateData() : createAdjustment()"
            >
              <div class="row">
                <div class="col-3">
                  <label for="golfcart">Adjustment No</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.id"
                      disabled
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="searchAdjustment()"
                      >Search</button>
                      <search-adjustment @golfcart_data="getData" :key="this.update_data"></search-adjustment>
                    </span>
                  </div>
                </div>
                <div class="col-3">
                  <label for="golfcart">Golfcart</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.golfcart_no"
                      disabled
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="searchGolfcart()"
                      >Search</button>
                      <search-golfcart @golfcart_data="getDatas"></search-golfcart>
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-3">
                  <label for="date">Date</label>
                  <input type="date" class="form-control form-control-sm" v-model="form.date" />
                </div>

                <div class="col-3">
                  <label for="refence">Series</label>
                  <input type="text" class="form-control form-control-sm" v-model="form.series_no" />
                </div>
                <div class="col-3">
                  <label for="refence">Status</label>
                  <p>{{ form.status }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label for="exampleInputEmail1">Particulars</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.particulars"
                  />
                </div>
                <div class="col-3">
                  <label for="exampleInputEmail1">Adjust as</label>
                  <select
                    id="type"
                    v-model="form.post_as"
                    name="type"
                    class="form-control form-control-sm"
                  >
                    <option value>Select Mode</option>
                    <option value="DEBIT">DEBIT</option>
                    <option value="CREDIT">CREDIT</option>
                  </select>
                </div>
                <div class="col-3">
                  <label for="exampleInputEmail1">Amount</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="form.amount"
                    style="text-align:right;"
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <button type="button" class="btn btn-primary" @click="print_pdf()">Print</button>
                  <button type="button" @click="clearData()" class="btn btn-secondary">New / Clear</button>
                  <button type="submit" class="btn btn-success">{{ editMode ? "Update" : "Save" }}</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="post_adjustment()"
                  >Post Adjustment</button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="cancel_adjustment()"
                  >Cancel Adjustment</button>
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
import searchAdjustment from "../search/golfcart-adjustment.vue";
import searchGolfcart from "../search/golfcart-modal.vue";
import jsPDF from "jspdf";
export default {
  components: {
    "search-adjustment": searchAdjustment,
    "search-golfcart": searchGolfcart
  },
  data() {
    return {
      logo: "/img/logo.png",
      filter: {},
      rental: {},
      searching: "",
      editMode: false,
      form: new Form({
        id: "",
        date: "",
        series_no: "",
        post_as: "",
        status: "ACTIVE",
        particulars: "",
        amount: "",
        golfcart_no: "",
        golfcart_id: 0
      }),
      update_data: 0
    };
  },
  methods: {
    print_pdf() {
      if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.$Progress.start();
        var doc = new jsPDF();
        doc.setFont("courier");
        doc.setFontType("bold");
        doc.setFontSize(12);
        doc.addImage(Logo, "PNG", 15, 5, 30, 30);
        doc.text("GENERAL SERVICES COOPERATIVE", 50, 15);
        doc.text("Borja Road, Damilag, Manolo Fortich, Bukidnon", 50, 20);
        doc.text("NON VAT REG. TIN: 411-478-949-000", 50, 25);
        doc.setFontSize(11);
        doc.setFontType("normal");
        doc.text("Date:" + this.form.date, 30, 50);
        doc.text("Series:" + this.form.series_no, 120, 50);
        doc.text("Particulars:" + this.form.particulars, 30, 57);
        doc.text("Adjust as:" + this.form.post_as, 30, 65);
        doc.text("Amount:" + this.form.amount, 120, 65);

        doc.text("Prepared By:", 30, 100);
        doc.text("Approved By:", 85, 100);
        doc.text("Noted By:", 150, 100);

        doc.save("golfcart_adjstment_" + this.form.id + ".pdf");
        this.$Progress.finish();
      }
    },
    post_adjustment() {
      if (this.form.status == "POSTED") {
        swal.fire("Data Already Posted.", "warning");
      } else if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.$Progress.start();
        this.form
          .post("api/golfcart_adjustment/post")
          .then(() => {
            toast.fire({
              icon: "success",
              title: "Data Posted to Ledger"
            });
            this.form.reset();
            this.update_data = 1;
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
    cancel_adjustment() {
      if (this.form.status == "POSTED") {
        swal.fire("Data Already Posted.", "warning");
      } else if (this.form.id == "") {
        swal.fire("No Data is Selected.", "warning");
      } else {
        this.form
          .get("api/golfcart_adjustment/cancel/" + this.form.id)
          .then(() => {
            toast.fire({
              icon: "success",
              title: "Cancel Data"
            });
            this.editMode = false;
            this.form.reset();
            this.update_data = 2;
          })
          .catch(() => {
            swal.fire("Error Found.", "warning");
          });
      }
    },
    clearData() {
      this.form.reset();
      this.update_data = 0;
      this.editMode = false;
    },
    updateData() {
      this.form
        .put("api/golfcart_adjustment/" + this.form.id)
        .then(() => {
          toast.fire({
            icon: "success",
            title: "Update data successfully"
          });
          this.editMode = false;
          this.form.reset();
        })
        .catch(() => {
          swal.fire("Error Found.", "warning");
        });
    },
    searchAdjustment() {
      $("#searchAdjustment").modal("show");
    },
    searchGolfcart() {
      $("#searchGolfcart").modal("show");
    },
    getData(data) {
      this.editMode = true;
      this.form.fill(data);
    },
    getDatas(data) {
      this.form.golfcart_no = data.name;
      this.form.golfcart_id = data.id;
    },
    createAdjustment() {
      this.$Progress.start();
      this.form
        .post("api/golfcart_adjustment")
        .then(data => {
          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
          this.form.id = data.data.id;
          //this.form.reset();
          this.editMode = true;
          this.update_data = 1;
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
  created() {
    this.form.date = moment().format("YYYY-MM-DD");
  }
};
</script>
