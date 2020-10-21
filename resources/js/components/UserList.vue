<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">AUTHORIZATION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/userlist"
              >User List</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" active-class="active" exact to="/roles">Roles</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/permissions"
              >Permissions</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="row mt-3">
        <div class="col-sm">
          Add New User
          <form @submit.prevent="editMode ? updateData() : createGolfCart()">
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.name"
                  name="name"
                  class="form-control form-control-sm"
                  placeholder="Name"
                  :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                />
                <has-error :form="form" field="golfcart_name"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  v-model="form.email"
                  name="email"
                  class="form-control form-control-sm"
                  placeholder="Email"
                  :class="{
                                        'is-invalid': form.errors.has('email')
                                    }"
                />
                <has-error :form="form" field="asset_no"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.password"
                  name="password"
                  class="form-control form-control-sm"
                  placeholder="Password"
                  :class="{
                                        'is-invalid': form.errors.has('password')
                                    }"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  v-model="form.role"
                  name="role"
                  class="form-control form-control-sm"
                  placeholder="Role"
                  :class="{
                                        'is-invalid': form.errors.has('role')
                                    }"
                />
                <has-error :form="form" field="role"></has-error>
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
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control form-control-sm mb-2"
            v-model="searching"
            v-on:keyup="search(searching)"
            placeholder="Search by Name..."
          />
          <kendo-grid
            :height="400"
            :data-source="filter"
            :selectable="true"
            :sortable="true"
            v-on:change="onChange"
          >
            <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
            <kendo-grid-column :field="'name'" :title="'Name'"></kendo-grid-column>
            <kendo-grid-column :field="'email'" :title="'Email'"></kendo-grid-column>
            <kendo-grid-column :field="'role_id'" :title="'Role'"></kendo-grid-column>
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
        name: "",
        email: "",
        password: "",
        role_id: ""
      })
    };
  },
  methods: {
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
      axios.get("api/users").then(({ data }) => {
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
