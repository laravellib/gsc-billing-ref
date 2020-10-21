
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
          <h3 class="card-title"><b>Vehicle Type List</b></h3>
          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add New Vehicle Type
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
                <th>ID</th>
                <th>Moto Vehicle Type</th>
                <th>Modify</th>
               
              </tr>
              <tr v-for="vt in vehicletypes.data" v-bind:key="vt.MVTID">
                <td>{{vt.MVTID}}</td>
                <td>{{vt.MVType}}</td>
                <td>
                  <a href="#" @click="editModal(vt)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(vt.MVTID)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
        <pagination :data="vehicletypes"
        @pagination-change-page="getResults"></pagination>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Driver</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Driver's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateVehicleType() : createVehicleType()">
            <div class="modal-body">
              <div class="form-group">
                <input v-model="form.MVType" type="text" name="MVType" placeholder="Motor Vehicle Name" class="form-control"  style="text-transform: uppercase;" required/>
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
			editmode: false,
			vehicletypes: {},
			form: new Form({
				MVTID: '',
				MVType: '',
			}),
		};
	},
	methods: {
		getResults(page = 1) {
			axios.get('api/vehicletype?page=' + page).then(response => {
				this.vehicletypes = response.data;
			});
		},
		updateVehicleType(MVTID) {
			this.$Progress.start();
			this.form.put('api/vehicletype/' + this.form.MVTID);
			$('#addNew').modal('hide');
			toast.fire({
				icon: 'success',
				title: 'Vehicle Type successfully updated',
			});
			this.$Progress.finish();
			this.loadVehicleType();
		},
		deleteModal(MVTID) {
			swal
				.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!',
				})
				.then(result => {
					if (result.value) {
						this.$Progress.start();
						$('#addNew').modal('hide');
						this.form.delete('api/vehicletype/' + MVTID);
						swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						this.$Progress.finish();
						this.loadVehicleType();
					}
				});
		},
		editModal(vt) {
			this.editmode = true;
			this.form.reset();
			$('#addNew').modal('show');
			this.form.fill(vt);
		},
		newModal() {
			this.editmode = false;
			this.form.reset();
			$('#addNew').modal('show');
		},
		loadVehicleType() {
			axios.get('api/vehicletype').then(({ data }) => (this.vehicletypes = data));
		},
		createVehicleType() {
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
			this.form
				.post('api/vehicletype')
				.then(() => {
					$('#addNew').modal('hide');
					$('.modal-backdrop').remove();
					toast.fire({
						icon: 'success',
						title: 'Vehicle Type successfully created',
					});
					this.$Progress.finish();
					this.loadVehicleType();
				})
				.catch(() => {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'Vehicle Rate not added successfully',
					});
				});
		},
	},
	created() {
		Fire.$on('searchingVehicleType', () => {
			let query = this.$parent.search;
			axios
				.get('api/findVehicleType?q=' + query)
				.then(data => {
					this.vehicletypes = data.data;
				})
				.catch(() => {});
		});
		this.loadVehicleType();
		//setInterval(() => this.loadDriver(),3000);
	},
};
</script>






