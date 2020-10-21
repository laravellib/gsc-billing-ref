<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/masterfile-client">Client List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/masterfile-vehicle">Vehicle Type</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/masterfile-payment">Payment Mode</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="row mt-4">
        <div class="col-sm">
          Add New Vehicle Type
          <form @submit.prevent="editMode ? updateData() : createData()">
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.type"
                  name="type"
                  class="form-control form-control-sm"
                  placeholder="Type"
                  :class="{
                                        'is-invalid': form.errors.has('type')
                                    }"
                />
                <has-error :form="form" field="type"></has-error>
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
            </div>
          </form>
        </div>
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control form-control-sm mb-2"
            v-model="searching"
            v-on:keyup="search(searching)"
            placeholder="Search by Vehicle Type Name..."
          />
          <kendo-grid
            :height="400"
            :data-source="filter"
            :selectable="true"
            :sortable="true"
            v-on:change="onChange"
          >
            <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
            <kendo-grid-column :field="'type'" :title="'Type'"></kendo-grid-column>
          </kendo-grid>
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
        type: ""
      })
    };
  },
  methods: {
    updateData() {
      this.form
        .put("api/vehicle_type/" + this.form.id)
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
              .delete("api/vehicle_type/" + id)
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
    loadData() {
      axios.get("api/vehicle_type").then(({ data }) => {
        this.golfcart = data.data;
        this.filter = this.golfcart;
        console.log(this.filter);
      });
    },
    createData() {
      this.$Progress.start();
      this.form
        .post("api/vehicle_type")
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
    this.loadData();
    Fire.$on("AfterCreate", () => {
      this.loadData();
    });
  }
};
</script>
