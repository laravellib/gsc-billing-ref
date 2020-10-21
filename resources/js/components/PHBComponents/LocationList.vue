<style>
input[data-readonly] {
  pointer-events: none;
}
</style>
<template>
  <div class="container" id="sweget">
                    <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#mlist">
                                Master File
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="mlist">
                                <li><router-link class="dropdown-item" to="/driverlist"><a>Driver List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehiclelist"><a>JEEP Vehicle List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehiclerate"><a>JEEP Rate List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/locationlist"><a>Location List</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                                Transactions
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                                <li><router-link class="dropdown-item" to="/jeepvehiclelogentry"><a>Jeep Vehicle Log Entry</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/createsoa"><a>Create Jeep SOA</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/soatransactions"><a>SOA Transaction</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                                Jeep Reports
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                                <li><router-link class="dropdown-item" to="/reportlistJVL"><a>Standard Jeep Report</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/reportlistJVLPerJeep"><a>Jeepney's Vehicle Log Billing Report</a></router-link></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </nav>
    <div class="col-xs-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>Location List</b></h3>
          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add Location
              <i class="fa fa-user-plus fa fw"></i>
            </button>
          </div>
          <br>
       
              
        </div>
        <!-- /.box-header -->
        <div class="card-body table-responsive pre-scrollable">
          <table class="table table-hover " >
            <thead>
                <tr>
                <th>Location Code</th>
                <th>Location Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="location in locations.data" v-bind:key="location.id">
                <td>{{location.LocationCode}}</td>
                <td>{{location.LocationName}}</td>
                <td>
                  <a href="#" @click="editModal(location)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(location.id)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        
        <div class="card-footer">
        <!--<pagination :data="clients"
        @pagination-change-page="getResults"></pagination>-->
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" style="overflow-y: initial !important;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Location</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Location's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateLocation() : createLocationt()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
              <div class="form-group">
                <input v-model="form.LocationCode" type="text" name="LocationCode" placeholder="Location Code" class="form-control" required/>
              </div> 
              <div class="form-group">
                <input v-model="form.LocationName" type="text" name="LocationName" placeholder="Location Name" class="form-control" required/>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editmode" class="btn btn-primary">Save</button>
              <button type="submit" v-show="editmode" class="btn btn-success">Update</button>
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
      editmode : false,
      locations: {},
      form: new Form({
        id: "",
        LocationCode: "",
        LocationName: ""
      })
    };
  },
  methods: {
  
    //   getResults(page = 1){
    //     axios.get('api/client?page=' + page).then(response => {
    //       this.clients = response.data;
    //     });
    //   },
      updateLocation(id){
          this.$Progress.start();
          this.form.put('api/location/'+this.form.id);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Location successfully updated"
            });
            this.$Progress.finish();
            this.loadLocation();

      },
      deleteModal(id){

            swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                this.$Progress.start();
                $('#addNew').modal('hide');
                this.form.delete('api/location/'+id);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadLocation();
            }
            })
      },
      editModal(location){
          this.editmode = true;
          this.form.reset();
          $('#addNew').modal('show');
          this.form.fill(location);
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          $('#addNew').modal('show');
      },
    loadLocation() {
      axios.get("api/location").then(({ data }) => (this.locations = data));
     
    },
    createLocation() {
      this.$Progress.start();
      this.form.post("api/location").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "location successfully created"
        });
        this.$Progress.finish();
        this.loadlocation();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'location not added successfully'
                    })
                });

      
    
    }
      
  },
  created() {
    // Fire.$on('searchingClient',() => {
    //   let query = this.$parent.search;
    //   axios.get('api/findClient?q=' + query)
    //   .then((data) => {
    //     this.clients = data.data
    //   })
    //   .catch(() => {

    //   })
    // })
    this.loadLocation();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>






