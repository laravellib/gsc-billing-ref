
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
                                <li><router-link class="dropdown-item" to="/ovlvehiclelist"><a>OVL Vehicle List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/ovlvehiclerate"><a>OVL Rate List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                                Transactions
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                                <li><router-link class="dropdown-item" to="/ovlvehiclelogentry"><a>OVL Vehicle Log Entry</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/createovlsoa"><a>OVL Create SOA</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/soaovltransactions"><a>OVL SOA Transactions</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                                OVL Reports
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                                <li><router-link class="dropdown-item" to="/reportlistovl"><a>Standard OVL Report</a></router-link></li>
                                <!-- <li><router-link class="dropdown-item" to="/reportlistovlPerJeep"><a>OVL's Vehicle Log Billing Report</a></router-link></li> -->
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </nav>
    <div class="col-xs-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>OVL Rate List</b></h3>
          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add New Vehicle Rate
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
                <th>Plate Number</th>
                <th>Effective Date</th>
                <th>Per Kilometer Rate</th>
                <th>Modify</th>
               
              </tr>
              <tr v-for="vr in vehiclerates" v-bind:key="vr.MVRRID">
                <td>{{vr.PlateNumber}}</td>
                <td>{{vr.EffectiveDate | formatDate}}</td>
                <td>{{'Php '+vr.PerHourRate.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                <td>
                  <a href="#" @click="editModal(vr)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(vr.MVRRID)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
        <!--<pagination :data="vehiclerates"
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
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Vehicle Rate</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Vehicle Rate's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateVehicleRate() : createVehicleRate()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
              <!--Search Vehicle Plate-->
                <div class="form-inline">
                  <div class="input-group mb-3 input-group-sm" style="margin-left:5px;text-transform: uppercase;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Plate Number</span>
                          </div>
                     <input v-model="form.MVID_Link" type="hidden" name="MVID_Link" placeholder="MVID Link" class="form-control"/>
                      <input v-model="form.PlateNumber" type="text" name="PlateNumber" placeholder="Plate Number" class="form-control" data-readonly required/>
                      <b-input-group-append>
                        <b-button @click="searchVehicleFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </div>
                </div>
                <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">EffectiveDate</span>
                          </div>
                         <input class="form-control" type="date" v-model="form.EffectiveDate" placeholder="Effective Date" required>
                    </div>
                    
                </div>
                <!--<div class="input-group">
                    <input class="form-control" type="text" v-model="form.PerTransactionRate" placeholder="Per Transaction Rate">
                </div>
                <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Daily Rate</span>
                          </div>
                         <input class="form-control" type="text" v-model="form.DailyRate" placeholder="Daily Rate">
                    </div>
                </div>-->
                <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Per Hour Rate</span>
                          </div>
                         <input class="form-control" type="decimal" v-model="form.PerHourRate" placeholder="Per Kilometer Rate">
                    </div>
                </div>
                <!--<div class="input-group">
                    
                </div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model="form.PerHourRate" placeholder="Per Hour Rate">
                </div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model="form.PerAreaRate" placeholder="Per Area Rate">
                </div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model="form.FixedMonthlyRate" placeholder="Fixed Monthly Rate">
                </div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model="form.PerBagRate" placeholder="Per Bag Rate">
                </div>
                <div class="input-group">
                    <input class="form-control" type="text" v-model="form.PerDestinationRate" placeholder="Per Destination Rate">
                </div>-->
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
   <search-ovlvehicle v-on:changeTitleVehicle="updateTitleVehicle($event)"></search-ovlvehicle>
  </div>
</template>

<script>
import searchOVLVehicleSweetLover from '../search/SearchOVL/SearchOVLVehicle.vue';
export default {
    components: {
            'search-ovlvehicle' : searchOVLVehicleSweetLover
  
        },
  data() {
    return {
      editmode : false,
      vehiclerates: [],
      vehicles: [],
      form: new Form({
        MVRRID: "",
        MVID_Link: "",
        PlateNumber: "",
        EffectiveDate: "",
        PerTransactionRate: "",
        DailyRate: "",
        PerKilometerRate: "",
        PerHourRate: "",
        PerAreaRate: "",
        FixedMonthlyRate: "",
        PerBagRate: "",
        PerDestinationRate: "",
        Status: ""
      
      })
    };
  },
mounted() {
        this.$parent.getSearchVehicleRate();
    },
  methods: {
     updateTitleVehicle:function(updatedTitleVehicle){
              this.form.MVID_Link = updatedTitleVehicle.MVID;
              this.form.PlateNumber = updatedTitleVehicle.PlateNumber;

            },
    searchVehicleFunction(){
        $('#searchVehicle').modal('show');
    },
    getVehicleIsReal(){
        axios.get("api/vehicle").then(({ data }) => (this.vehicles = data));
        console.log(this.vehicles);
    },
      getResults(page = 1){
        axios.get('api/vehiclerate?page=' + page).then(response => {
          this.vehiclerates = response.data;
        });
      },
      updateVehicleRate(MVTID){
          this.$Progress.start();
          this.form.put('api/ovlvehiclerate/'+this.form.MVRRID);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Vehicle Rate successfully updated"
            });
            this.$Progress.finish();
            this.loadVehicleRate();

      },
      deleteModal(MVRRID){

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
                this.form.delete('api/ovlvehiclerate/'+MVRRID);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadVehicleRate();
            }
            })
      },
      editModal(vr){
          this.editmode = true;
          this.form.reset();
          $('#addNew').modal('show');
          this.form.fill(vr);
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          var d = new Date();
          let today= new Date().toISOString().slice(0, 10);
          this.form.EffectiveDate = today;
          $('#addNew').modal('show');
      },
    loadVehicleRate() {
     // axios.get("api/vehiclerate").then(({ data }) => (this.vehiclerates = data));
     axios.get('api/getSearchOVLVehicleRate')
     .then(response => {
            this.vehiclerates = response.data;
            console.log(this.vehiclerates);
        })
        .catch(function (error){
            console.log(error);
        })
    },
    createVehicleRate() {
      this.$Progress.start();
      this.form.post("api/ovlvehiclerate").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Vehicle Rate successfully created"
        });
        this.$Progress.finish();
        this.loadVehicleRate();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Vehicle Rate not added successfully'
                    })
                });
    }
      
  },
  created() {
    
    this.loadVehicleRate();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>






