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
          <h3 class="card-title" ><b>OVL Vehicle List</b></h3>

          <div class="card-tools">
            <button class="btn btn-success" @click="newModal">
              Add New OVL Vehicle
              <i class="fa fa-user-plus fa fw"></i>
            </button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="card-body table-responsive pre-scrollable">
          <table class="table table-hover" >
            <tbody>
              <tr>
                <th>Plate Number</th>
                <th>Driver Name</th>
                <th>Operator Name</th>
                <th>Engine</th>
                <th>Serial Number</th>
                <th>Modify</th>
              </tr>
              <tr v-for="vehicle in vehicles" v-bind:key="vehicle.MVID">
                <td>{{vehicle.PlateNumber}}</td>
                <td>{{vehicle.DriverName}}</td>
                <td>{{vehicle.TruckerName}}</td>
                <td>{{vehicle.EngineNumber}}</td>
                <td>{{vehicle.SerialNumber}}</td>
                <td>
                  <a href="#" @click="editModal(vehicle)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(vehicle.MVID)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
            <!--<pagination :data="vehicles"
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
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New OVL Vehicle</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update OVL Vehicle's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateVehicle() : createVehicle()" id="sweget">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
              <div class="form-group">
                <input v-model="form.PlateNumber" type="text" name="PlateNumber" placeholder="Plate Number" class="form-control" required/>
              </div> 
              <div class="form-group">
                <input v-model="form.EngineNumber" type="text" name="EngineNumber" placeholder="Engine Number" class="form-control" required/>
              </div>
              <div class="form-group">
                <input v-model="form.SerialNumber" type="text" name="SerialNumber" placeholder="Serial Number" class="form-control" required/>
              </div>
              <div class="form-group">
                <input
                  v-model="form.AssetNumber" type="text" name="AssetNumber" placeholder="Asset Number" class="form-control" required/>
              </div>
              <div class="form-group">
                  <b-input-group class="mt-3">     
                  <input
                  v-model="form.DriverName" type="text" name="DriverName" placeholder="Driver Name" class="form-control" required data-readonly />
                  <input
                  v-model="form.DriverID"  type="hidden" name="DriverID" placeholder="DriverID" class="form-control"/>
                  <input
                  v-model="form.DriverLastName"  type="hidden" name="DriverLastName" placeholder="DriverLastName" class="form-control"/>
                  <input
                  v-model="form.DriverFirstName"  type="hidden" name="DriverFirstName" placeholder="DriverFirstName" class="form-control"/>
                  <input
                  v-model="form.DriverMiddleName"  type="hidden" name="DriverMiddleName" placeholder="DriverMiddleName" class="form-control"/>
                  <input
                  v-model="form.DriverExtName"  type="hidden" name="DriverExtName" placeholder="DriverExtName" class="form-control"/>
                    <b-input-group-append>
                    <b-button @click="searchDriverFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                    </b-input-group-append>
                  </b-input-group>
              </div>
              <!-- <div class="form-group">
                  <b-input-group class="mt-3" >
                  <input
                  v-model="form.TruckerName" type="text" name="TruckerName" placeholder="Trucker Name" class="form-control" required data-readonly/>
                  <input
                  v-model="form.TruckerID"  type="hidden" name="TruckerID" placeholder="TruckerID" class="form-control"/>
                  <input
                  v-model="form.TruckerLastName"  type="hidden" name="TruckerLastName" placeholder="TruckerLastName" class="form-control"/>
                  <input
                  v-model="form.TruckerFirstName"  type="hidden" name="TruckerFirstName" placeholder="TruckerFirstName" class="form-control"/>
                  <input
                  v-model="form.TruckerMiddleName"  type="hidden" name="TruckerMiddleName" placeholder="TruckerMiddleName" class="form-control"/>
                  <input
                  v-model="form.TruckerExtName"  type="hidden" name="TruckerExtName" placeholder="TruckerExtName" class="form-control"/>
                    <b-input-group-append>
                    <b-button @click="searchOperatorFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                    </b-input-group-append>
                  </b-input-group>

              </div> -->
              <div class="form-group">
                
                  <b-input-group class="mt-3" >
                  <input
                  v-model="form.MVTID_Link" type="hidden" name="MVTID_Link" class="form-control"  />
                <input
                  v-model="form.MVTypeName" type="text" name="Type" placeholder="Vehicle Type" class="form-control" data-readonly/>
                    <b-input-group-append>
                    <b-button @click="searchVehicleTypeFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                    </b-input-group-append>
                  </b-input-group>
              </div>
              <div class="form-group">
                <input
                  v-model="form.IsGSCUnit" type="text" name="Type" placeholder="Is GSC Unit? Y/N" class="form-control" style="text-transform: uppercase;" maxlength="1" required/>
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
    <search-driver v-on:changeTitle="updateTitle($event)"></search-driver>
    <search-operator v-on:changeTitleOperator="updateTitleOperator($event)"></search-operator>
    <search-vehicletype v-on:changeTitleVehicleType="updateTitleVehicleType($event)"></search-vehicletype>
  </div>
</template>

<script>
import searchDriverSweetLover from '../search/SearchJeep/SearchDriver.vue';
import searchOperatorSweetLover from '../search/SearchJeep/SearchOperator.vue';
import searchVehicleTypeSweetLover from '../search/SearchJeep/SearchVehicleType.vue';
export default {

  components: {
            'search-driver' : searchDriverSweetLover,
            'search-operator' : searchOperatorSweetLover,
            'search-vehicletype' : searchVehicleTypeSweetLover
        },

  data() {
    
    return {
      drivers: [],
      driverses: [],
      signatories:{},
      vehicletypes:{},
      operators:{},
      editmode : false,
      vehicles: [],
      title: '',
      kdid: '',
      form: new Form({
        MVID: "",
        PlateNumber: "",
        EngineNumber: "",
        SerialNumber: "",
        AssetNumber: "",
        DriverName: "",
        DriverLastName: "",
        DriverFirstName: "",
        DriverMiddleName: "",
        DriverExtName: "",
        DriverID: "",
        TruckerName: "",
        TruckerLastName: "",
        TruckerFirstName: "",
        TruckerMiddleName: "",
        TruckerExtName: "",
        TruckerID:"",
        MVTID_Link: "",
        MVTypeName: "",
        IsGSCUnit: ""
      })
    };
  },
  mounted() {
           // this.$parent.getSearchDriver();
           // this.$parent.getSearchOperator();
            //this.$parent.getSearchVehicleType();
        },
  methods: {
         
            updateTitle:function(updatedTitle){
              this.form.DriverName = updatedTitle.LastName+ ',' +updatedTitle.FirstName + ' '+updatedTitle.MiddleName+' '+updatedTitle.ExtName;
              this.form.DriverID = updatedTitle.id;
              this.form.DriverLastName  =  updatedTitle.LastName;
              this.form.DriverFirstName  =  updatedTitle.FirstName;
              this.form.DriverMiddleName  =  updatedTitle.MiddleName;
              this.form.DriverExtName  =  updatedTitle.ExtName;
               // console.log(updatedTitle);
            },
            updateTitleOperator:function(updatedTitleOperator){
              this.form.TruckerName = updatedTitleOperator.LastName + ',' + updatedTitleOperator.FirstName + ' '+updatedTitleOperator.MiddleName+' '+updatedTitleOperator.ExtName;
              this.form.TruckerID = updatedTitleOperator.id;
              this.form.TruckerLastName = updatedTitleOperator.LastName;
              this.form.TruckerFirstName = updatedTitleOperator.FirstName;
              this.form.TruckerMiddleName = updatedTitleOperator.MiddleName;
              if(updatedTitleOperator.ExtName==""){
                this.form.TruckerExtName =" ";
              }
              else{
                this.form.TruckerExtName = updatedTitleOperator.ExtName;
              }
            },
            updateTitleVehicleType:function(updatedTitleVehicleType){
              this.form.MVTID_Link = updatedTitleVehicleType.MVTID;
              this.form.MVTypeName = updatedTitleVehicleType.MVType;
               // console.log(updatedTitle);
            },
            searchVehicleTypeFunction(){
                $('#searchVehicleType').modal('show');
            },
            getVehicleTypeIsReal(){
                axios.get("api/vehicletype").then(({ data }) => (this.vehicletypes = data));
                console.log(this.vehicletypes);
            },
            searchOperatorFunction(){
                $('#searchOperator').modal('show');
            },
            getOperatorIsReal(){
                axios.get("api/operator").then(({ data }) => (this.operators = data));
                console.log(this.operators);
            },
            searchDriverFunction(){
                $('#searchDriver').modal('show');
            },
            getDriverIsReal(){
                axios.get("api/driver").then(({ data }) => (this.drivers = data));
                console.log(this.drivers);
            },
      getResults(page = 1){
        axios.get('api/ovlvehicle?page=' + page).then(response => {
          this.vehicles = response;
        });
      },
      updateVehicle(MVID){
          console.log(MVID);
          this.$Progress.start();
          this.form.put('api/ovlvehicle/'+this.form.MVID);
            $('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Vehicle successfully updated"
            });
            this.$Progress.finish();
            this.loadVehicle();
      },
      deleteModal(MVID){
            console.log(MVID);
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
                this.form.delete('api/ovlvehicle/'+MVID);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.$Progress.finish();
                this.loadVehicle();
            }
            })
      },
      editModal(vehicle){
          this.editmode = true;
          this.form.reset();
          $('#addNew').modal('show');
          this.form.fill(vehicle);
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          $('#addNew').modal('show');
      },
      loadVehicle() {
     // axios.get("api/getSearchVehicle").then(({ data }) => (this.vehicles = data));
     axios.get('api/getSearchOVLVehicle')
     .then(response => {
            this.vehicles = response.data;
            console.log(this.vehicles);
        })
        .catch(function (error){
            console.log(error);
        })
    },
    createVehicle() {
      /*this.$Progress.start();
      this.form.post("api/vehicle");

      $('#addNew').modal('hide');
      $('.modal-backdrop').remove();
      toast.fire({
        icon: "success",
        title: "Vehicle successfully created"
      });
      this.$Progress.finish();
      this.loadVehicle();*/
      this.$Progress.start();
      this.form.post("api/ovlvehicle").then(()=>{
        $('#addNew').modal('hide');
        $('.modal-backdrop').remove();
        toast.fire({
          icon: "success",
          title: "Vehicle successfully created"
        });
        this.$Progress.finish();
        this.loadVehicle();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Vehicle not added successfully'
                    })
                });
    
    }
      
  },
  created() {
     
    this.loadVehicle();
    //setInterval(() => this.loadDriver(),3000);
  }
};
</script>
