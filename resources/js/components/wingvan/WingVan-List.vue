<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">WING VAN SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-list"
              >Wing Van List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/wingvan-reports"
              >Reports</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="row mt-3">
        <div class="col-sm">
          Add New Wing Van
          <form @submit.prevent="editMode ? updateData() : createGolfCart()">
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.name"
                  name="name"
                  class="form-control form-control-sm"
                  placeholder="Wing Van Name"
                  :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                />
                <has-error :form="form" field="golfcart_name"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.asset_no"
                  name="asset_no"
                  class="form-control form-control-sm"
                  placeholder="Asset No"
                  :class="{
                                        'is-invalid': form.errors.has('asset_no')
                                    }"
                />
                <has-error :form="form" field="asset_no"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.engine_no"
                  name="engine_no"
                  class="form-control form-control-sm"
                  placeholder="Engine No"
                  :class="{
                                        'is-invalid': form.errors.has('engine_no')
                                    }"
                />
                <has-error :form="form" field="engine_no"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.serial_no"
                  name="serial_no"
                  class="form-control form-control-sm"
                  placeholder="Serial No"
                  :class="{
                                        'is-invalid': form.errors.has('serial_no')
                                    }"
                />
                <has-error :form="form" field="serial_no"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">{{ editMode ? 'Update':'Add New'}}</button>
              <button
                type="button"
                class="btn btn-danger"
                v-if="editMode"
                @click="deleteData(form.id)"
              >Delete</button>
              <button
                type="button"
                class="btn btn-success"
                v-if="editMode"
                @click="addRateModal()"
              >Add Rate</button>
            </div>
          </form>
        </div>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control form-control-sm mb-2"
            v-model="searching"
            v-on:keyup="search(searching)"
            placeholder="Search by Golf Cart Name..."
          />
          <kendo-grid
            :height="400"
            :data-source="filter"
            :selectable="true"
            :sortable="true"
            v-on:change="onChange"
          >
            <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
            <kendo-grid-column :field="'name'" :title="'Wing Van'"></kendo-grid-column>
            <kendo-grid-column :field="'asset_no'" :title="'Asset No'"></kendo-grid-column>
            <kendo-grid-column :field="'engine_no'" :title="'Engine No'"></kendo-grid-column>
            <kendo-grid-column :field="'serial_no'" :title="'Serial No'"></kendo-grid-column>
          </kendo-grid>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="rateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Rates</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editModeRate ? updateRates() : saveRates()">
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <label for="date">Per Bag</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    v-model="rate.per_bag_rate"
                    style="text-align:right;"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">{{editModeRate ? 'Update' : 'Save'}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
      editModeRate: false,
      searching: "",
      golfcart: {},
      filter: {},
      form: new Form({
        id: "",
        name: "",
        engine_no: "",
        serial_no: "",
        asset_no: "",
        type_id: 2
      }),
      rate: new Form({
        id: "",
        mvid_link: "",
        daily_rate: 0,
        per_kilometer_rate: 0,
        per_transaction_rate: 0,
        per_hour_rate: 0,
        per_area_rate: 0,
        fixed_monthly_rate: 0,
        per_bag_rate: 0,
        per_destination_rate: 0
      })
    };
  },
  methods: {
    updateRates() {
      this.rate
        .put("api/rentalrate/" + this.rate.id)
        .then(() => {
          toast.fire({
            icon: "success",
            title: "Update Rate data successfully"
          });
          this.editModeRate = false;
          this.rate.reset();
          $("#rateModal").modal("hide");
        })
        .catch(() => {
          swal.fire("Error Found.", "warning");
        });
    },
    addRateModal() {
      this.rate.reset();
      axios.get("api/rentalrate/" + this.form.id).then(({ data }) => {
        if (data != "add") {
          this.rate.fill(data);
          this.editModeRate = true;
        } else {
          this.editModeRate = false;
        }
      });
      $("#rateModal").modal("show");
    },
    saveRates() {
      this.rate.mvid_link = this.form.id;
      this.$Progress.start();
      this.rate
        .post("api/rentalrate")
        .then(() => {
          Fire.$emit("AfterCreate");
          $("#rateModal").modal("hide");
          toast.fire({
            icon: "success",
            title: "Rate Added in successfully"
          });
          this.rate.reset();
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
    updateData() {
      this.form
        .put("api/golfcart/" + this.form.id)
        .then(() => {
          Fire.$emit("AfterCreate");
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
    deleteData(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            console.log(id);
            this.form
              .delete("api/golfcart/" + id)
              .then(() => {
                swal.fire("Deleted!", "Your file has been deleted.", "success");
                this.editMode = false;
                this.form.reset();
              })
              .catch(() => {
                swal.fire("Error Found.", "warning");
              });
            Fire.$emit("AfterCreate");
          }
        });
    },
    onChange: function(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      this.form.fill(dataItem);
      this.editMode = true;
    },
    search: function(ev) {
      this.filter = this.golfcart.filter(function(item) {
        return item.name.match(ev);
      });
    },
    loadGolfcart() {
      axios.get("motorvehicle_list/2").then(({ data }) => {
        this.golfcart = data.data;
        this.filter = this.golfcart;
        console.log(this.filter);
      });
    },
    createGolfCart() {
      this.$Progress.start();
      this.form
        .post("api/golfcart")
        .then(() => {
          Fire.$emit("AfterCreate");

          toast.fire({
            icon: "success",
            title: "Added Data in successfully"
          });
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
    }
  },
  created() {
    this.loadGolfcart();
    Fire.$on("AfterCreate", () => {
      this.loadGolfcart();
    });
  }
};
</script>
