<style>
input[data-readonly] {
  pointer-events: none;
}
</style>
<template>
  <div class="container">
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
          <h3 class="card-title"><b>Operator List</b></h3>

          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add New Operator
              <i class="fa fa-user-plus fa fw"></i>
            </button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="card-body table-responsive pre-scrollable">
          <table class="table table-hover " >
            <tbody>
              <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Ext Name</th>
                <th>Address</th>
                <th>Modify</th>
              </tr>
              <tr v-for="operator in operators.data" v-bind:key="operator.id">
                <td>{{operator.LastName}}</td>
                <td>{{operator.FirstName}}</td>
                <td>{{operator.MiddleName}}</td>
                <td>{{operator.ExtName}}</td>
                <td>{{operator.Address}}</td>
                <td>
                  <a href="#" @click="editModal(operator)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(operator.id)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="card-footer">
            <pagination :data="operators"
            @pagination-change-page="getResults"></pagination>
        </div> -->
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document" style="overflow-y: initial !important;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Operator</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Operator's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateOperator() : createOperator()">
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
      operators: {},
      form: new Form({
        id: "",
        LastName: "",
        FirstName: "",
        MiddleName: "",
        ExtName: "",
        Address: "",
      })
    };
  },
  methods: {
      getResults(page = 1){
        axios.get('api/operator?page=' + page).then(response => {
          this.operators = response.data;
        });
      },
      updateOperator(id){
          this.$Progress.start();
          this.form.put('api/operator/'+this.form.id);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Operator successfully updated"
            });
            this.$Progress.finish();
            this.loadOperator();

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
                this.form.delete('api/operator/'+id);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadOperator();
            }
            })
      },
      editModal(operator){
          this.editmode = true;
          this.form.reset();
          $('#addNew').modal('show');
          this.form.fill(operator);
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          $('#addNew').modal('show');
      },
    loadOperator() {
      axios.get("api/operator").then(({ data }) => (this.operators = data));
    },
    createOperator() {
      this.$Progress.start();
      this.form.post("api/operator").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Trucker/Operator successfully created"
        });
        this.$Progress.finish();
        this.loadOperator();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Trucker/Operator not added successfully'
                    })
                });
    
    }
      
  },
  created() {
    Fire.$on('searchingOperator',() => {
      let query = this.$parent.search;
      axios.get('api/findOperator?q=' + query)
      .then((data) => {
        this.operators = data.data
      })
      .catch(() => {

      })
    })
    this.loadOperator();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>
