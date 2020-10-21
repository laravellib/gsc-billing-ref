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
          <h3 class="card-title"><b>Client List</b></h3>
          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add Client
              <i class="fa fa-user-plus fa fw"></i>
            </button>
          </div>
          <br>
       
              
        </div>
        <!-- /.box-header -->
        <div class="card-body table-responsive">
          <table class="table table-hover" >
            <thead>
                <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Ext Name</th>
                <th>Address</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="client in clients.data" v-bind:key="client.id">
                <td>{{client.LastName}}</td>
                <td>{{client.FirstName}}</td>
                <td>{{client.MiddleName}}</td>
                <td>{{client.ExtName}}</td>
                <td>{{client.Address}}</td>
                <td>
                  <a href="#" @click="editModal(client)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(client.id)">
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
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Client</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Client's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateClient() : createClient()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
              <div class="form-group">
                <input v-model="form.FirstName" type="text" name="FirstName" placeholder="First Name" class="form-control" required/>
              </div> 
              <div class="form-group">
                <input v-model="form.MiddleName" type="text" name="MiddleName" placeholder="Middle Name" class="form-control" required/>
              </div>
              <div class="form-group">
                <input v-model="form.LastName" type="text" name="LastName" placeholder="Last Name" class="form-control" required/>
              </div>
              <div class="form-group">
                <input
                  v-model="form.ExtName" type="text" name="ExtName" placeholder="Extension Name" class="form-control"/>
              </div>
              <div class="form-group">
                <textarea
                  v-model="form.Address" type="text" name="Address" placeholder="Address" class="form-control" required></textarea>
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
      clients: {},
      form: new Form({
        id: "",
        LastName: "",
        FirstName: "",
        MiddleName: "",
        ExtName: "",
        Address: ""
      })
    };
  },
  methods: {
  
      getResults(page = 1){
        axios.get('api/client?page=' + page).then(response => {
          this.clients = response.data;
        });
      },
      updateClient(id){
          this.$Progress.start();
          this.form.put('api/client/'+this.form.id);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Client successfully updated"
            });
            this.$Progress.finish();
            this.loadClient();

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
                this.form.delete('api/client/'+id);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadClient();
            }
            })
      },
      editModal(client){
          this.editmode = true;
          this.form.reset();
          $('#addNew').modal('show');
          this.form.fill(client);
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          $('#addNew').modal('show');
      },
    loadClient() {
      axios.get("api/client").then(({ data }) => (this.clients = data));
     
    },
    createClient() {
      this.$Progress.start();
      this.form.post("api/client").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Client successfully created"
        });
        this.$Progress.finish();
        this.loadClient();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Client not added successfully'
                    })
                });

      
    
    }
      
  },
  created() {
    Fire.$on('searchingClient',() => {
      let query = this.$parent.search;
      axios.get('api/findClient?q=' + query)
      .then((data) => {
        this.clients = data.data
      })
      .catch(() => {

      })
    })
    this.loadClient();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>






