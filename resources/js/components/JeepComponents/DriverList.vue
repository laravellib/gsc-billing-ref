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
                                <li><router-link class="dropdown-item" to="/operatorlist"><a>Operator List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehiclelist"><a>JEEP Vehicle List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehiclerate"><a>JEEP Rate List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/ratePercent"><a>Admin Rate Percentage</a></router-link></li>
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
                                <li><router-link class="dropdown-item" to="/JeepSOATransmittal"><a>Jeepney's SOA Transmittal</a></router-link></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </nav>
    <div class="col-xs-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>Driver List</b></h3>
          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add New Driver
              <i class="fa fa-user-plus fa fw"></i>
            </button>
          </div>
          <br>
       
              
        </div>
        <!-- /.box-header -->
        <div class="card-body table-responsive pre-scrollable">
          <table class="table table-hover" >
            <tbody>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Ext Name</th>
                <th>Address</th>
                <th>Gsc Driver</th>
                <th>Modify</th>
              </tr>
              <tr v-for="driver in drivers.data" v-bind:key="driver.id">
                <td>{{driver.LastName}}</td>
                <td>{{driver.FirstName}}</td>
                <td>{{driver.MiddleName}}</td>
                <td>{{driver.ExtName}}</td>
                <td>{{driver.Address}}</td>
                <td>{{driver.GSCDriver}}</td>
                <td>
                  <a href="#" @click="editModal(driver)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(driver.id)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
        <pagination :data="drivers"
        @pagination-change-page="getResults"></pagination>
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
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Driver</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Driver's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateDriver() : createDriver()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
              <div class="form-group">
                <!--<input v-model="form.FirstName" type="text" name="FirstName" placeholder="First Name" class="form-control"  style="text-transform: uppercase;" required/>-->
                <input v-model="form.FirstName" type="text" name="FirstName" placeholder="First Name" class="form-control" required/>
              </div> 
              <div class="form-group">
                <input v-model="form.MiddleName" type="text" name="MiddleName" placeholder="Middle Name" class="form-control" required/>
              </div>
              <div class="form-group">
                <input v-model="form.LastName" type="text" name="LastName" placeholder="Last Name" class="form-control" required/>
              </div>
              <div class="form-group">
                <input v-model="form.ExtName" type="text" name="ExtName" placeholder="Extension Name" class="form-control" />
              </div>
              <div class="form-group">
                <textarea
                  v-model="form.Address" type="text" name="Address" placeholder="Address" class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <input
                  v-model="form.GSCDriver" type="text" name="GSCDriver" placeholder="Is GSC Driver? Y/N" class="form-control"  style="text-transform: uppercase;"  maxlength="1" required/>
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
      drivers: {},
      form: new Form({
        id: "",
        LastName: "",
        FirstName: "",
        MiddleName: "",
        ExtName: "",
        Address: "",
        GSCDriver: ""
      })
    };
  },
  methods: {
  
      getResults(page = 1){
        axios.get('api/driver?page=' + page).then(response => {
          this.drivers = response.data;
        });
      },
      updateDriver(id){
          this.$Progress.start();
          this.form.put('api/driver/'+this.form.id);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Driver successfully updated"
            });
            this.$Progress.finish();
            this.loadDriver();

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
                this.form.delete('api/driver/'+id);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadDriver();
            }
            })
      },
      editModal(driver){
          this.editmode = true;
          this.form.reset();
          this.form.fill(driver);
          $('#addNew').modal('show');
          
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          $('#addNew').modal('show');
      },
    loadDriver() {
      axios.get("api/driver").then(({ data }) => (this.drivers = data));
     
    },
    createDriver() {
      
      /*this.$Progress.start();
      this.form.post("api/driver");

      $('#addNew').modal('hide');
      $('.modal-backdrop').remove();
      toast.fire({
        icon: "success",
        title: "Driver successfully created"
      });
      this.$Progress.finish();
      this.loadDriver();*/
      this.$Progress.start();
      this.form.post("api/driver").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Driver successfully created"
        });
        this.$Progress.finish();
        this.loadDriver();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Driver not added successfully'
                    })
                });

      
    
    }
      
  },
  created() {
    Fire.$on('searchingDriver',() => {
      let query = this.$parent.search;
      axios.get('api/findDriver?q=' + query)
      .then((data) => {
        this.drivers = data.data
      })
      .catch(() => {

      })
    })
    this.loadDriver();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>






