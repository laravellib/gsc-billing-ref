<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
        </div>
      </nav>
      <div class="row mt-3"> 
        <div class="col-sm">
          
          <form @submit.prevent="editMode ? updateData() : createData()">
            <div class="modal-body">
              <div class="form-group">
                <label>Add New Location</label>
                <input
                  type="text"
                  v-model="form.location"
                  name="location"
                  class="form-control form-control-sm"
                  placeholder="FirstName"
                  :class="{
                                        'is-invalid': form.errors.has('location')
                                    }"
                />
                <has-error :form="form" field="location"></has-error>
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
                @click="clearForm()"
              >Clear</button>
            </div>
          </form>
        </div>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control form-control-sm mb-2"
            v-model="searching"
            v-on:keyup="search(searching)"
            placeholder="Search by Client Name..."
          />
          <kendo-grid
            :height="400"
            :data-source="filter"
            :selectable="true"
            :sortable="true"
            v-on:change="onChange"
          >
            <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
            <kendo-grid-column :field="'location'" :title="'Location'"></kendo-grid-column>
            <kendo-grid-column :field="'created_at'" :title="'Created'"></kendo-grid-column>
            <kendo-grid-column :field="'updated_at'" :title="'Last Updated'"></kendo-grid-column>
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
      data_: {},
      filter: {},
      form: new Form({
        id: "",
        location: "" 
      })
    }; 
  },
  methods: {
    updateData() {
      this.form
        .put("api/location/" + this.form.id)
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
              .delete("api/location/" + id)
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
      this.filter = this.data_.filter(function(item) {
        return item.location.match(ev);
      });
    },
    loadData() {
      axios.get("api/location").then(({ data }) => {
        this.data_ = data;
        console.log(this.data_)
        this.filter = this.data_;
      });
    },
    createData() {
      this.$Progress.start();

      this.form
        .post("api/location") 
        .then((res) => {
          
          if(res.data == true){
              this.$Progress.finish();
              toast.fire({
                  icon: 'success',
                  title: 'added data successfully'
              })
              this.form.reset();
              Fire.$emit("AfterCreate");
          }else{
              this.$Progress.fail();
              toast.fire({
                  icon: 'warning',
                  title: 'data already exist'
              })
          }

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
    clearForm(){
      this.form.reset();
      this.editMode = false;
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
