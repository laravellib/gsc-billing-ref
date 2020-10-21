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
          Add New Location
          <form
            @submit.prevent="
                            editMode ? updateData() : createGolfCart()
                        "
          >
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.name"
                  name="name"
                  class="form-control form-control-sm"
                  placeholder="Location"
                  :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.mat_code"
                  name="mat_code"
                  class="form-control form-control-sm"
                  placeholder="Mat Code"
                  :class="{
                                        'is-invalid': form.errors.has(
                                            'mat_code'
                                        )
                                    }"
                />
                <has-error :form="form" field="mat_code"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.description"
                  name="description"
                  class="form-control form-control-sm"
                  placeholder="Description"
                  :class="{
                                        'is-invalid': form.errors.has(
                                            'description'
                                        )
                                    }"
                />
                <has-error :form="form" field="description"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.activity"
                  name="activity"
                  class="form-control form-control-sm"
                  placeholder="Activity"
                  :class="{
                                        'is-invalid': form.errors.has(
                                            'activity'
                                        )
                                    }"
                />
                <has-error :form="form" field="activity"></has-error>
                <location-rate :loc_id="this.form.id" :rate="this.rate"></location-rate>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                v-if="editMode"
                @click="addRateModal()"
              >Add Rate</button>
              <button type="submit" class="btn btn-primary">{{ editMode ? "Update" : "Add New" }}</button>
              <button
                type="button"
                class="btn btn-danger"
                v-if="editMode"
                @click="deleteData(form.id)"
              >Delete</button>
            </div>
          </form>
        </div>
        <div class="col-sm-8">
          <!-- <input
            type="text"
            class="form-control form-control-sm mb-2"
            v-model="searching"
            v-on:keyup="search(searching)"
            placeholder="Search by Golf Cart Name..."
          />-->
          <kendo-grid
            :height="400"
            :data-source="filter"
            :selectable="true"
            :sortable="true"
            v-on:change="onChange"
          >
            <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
            <kendo-grid-column :field="'name'" :title="'Location'"></kendo-grid-column>
            <kendo-grid-column :field="'mat_code'" :title="'Mat Code'"></kendo-grid-column>
            <kendo-grid-column :field="'description'" :title="'Description'"></kendo-grid-column>
            <kendo-grid-column :field="'activity'" :title="'Activity'"></kendo-grid-column>
          </kendo-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import locationRate from "./WingVan-Location-Rate.vue";
export default {
  components: {
    "location-rate": locationRate
  },
  data() {
    return {
      editMode: false,
      searching: "",
      golfcart: {},
      filter: {},
      rate: 0,
      form: new Form({
        id: 0,
        name: "",
        mat_code: "",
        description: "",
        activity: ""
      })
    };
  },
  methods: {
    addRateModal() {
      axios
        .get("wingvan/location_get_rate/" + this.form.id)
        .then(({ data }) => {
          if (data.data == null) {
            this.rate = 0;
          } else {
            this.rate = data.data.rate;
          }
        });
      $("#rateLModal").modal("show");
    },
    updateData() {
      this.form
        .put("api/wingvan_location/" + this.form.id)
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
              .delete("api/wingvan_location/" + id)
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
      axios.get("api/wingvan_location").then(({ data }) => {
        this.golfcart = data.data;
        this.filter = this.golfcart;
        console.log(this.filter);
      });
    },
    createGolfCart() {
      this.$Progress.start();
      this.form
        .post("api/wingvan_location")
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
