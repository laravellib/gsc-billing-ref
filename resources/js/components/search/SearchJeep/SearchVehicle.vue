<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchVehicle" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Jeep Plate Number</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form>

                <div class="modal-body">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <b-input-group class="mt-3" size="sm">
                                    <!--<b-form-input placeholder="Search for..." @keyup="searchVehi" v-model="searchVehicleVar" ref="autofocus"></b-form-input>-->
                                    <b-form-input placeholder="Search for..." v-model="form.search" ref="autofocus"></b-form-input>
                                    <b-input-group-append>
                                    <b-button variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->
                    <div class="card-body table-responsive pre-scrollable">
                    <table class="table table-hover" >
                        <thead>                  
                            <tr>
                            <th>Plate Number</th>
                            <th>Driver Name</th>
                            <th>Operator Name</th>
                            <th>Engine</th>
                            <th>Serial Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer;" class="hover-green" v-for="(vehicle) in filteredBlogs" v-bind:key="vehicle.id" v-on:click="changeTitleVehicle(vehicle)">
                            <td>{{vehicle.PlateNumber}}</td>
                            <td>{{vehicle.DriverName}}</td>
                            <td>{{vehicle.TruckerName}}</td>
                            <td>{{vehicle.EngineNumber}}</td>
                            <td>{{vehicle.SerialNumber}}</td>
                            <!--<td>
                                    <center>
                                <a href="#" v-on:click="changeTitleVehicle(vehicle)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!vehicles" class="alert alert-default" role="alert">
                            No Data
                        </div>
                </div>

                </div>

                <div class="modal-footer ">
                    <button type="button" class="btn btn-default" data-dismiss="modal"><i class="far fa-window-close"></i> Close</button>
                </div>

                </form>
            </div>
            </div>
        </div>
        <!-- end modal -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                vehicles: [],
                searchVehicleVar: '',
                form: new Form({
                search: ""
                })
            }
        },
        mounted(){
           this.searcherVehicle();
        },
        methods: {
            changeTitleVehicle:function(vehicle){
                //console.log(vehicle);
                this.$emit('changeTitleVehicle',vehicle);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchVehicle').modal('hide');
            },
            searcherVehicle(){
                //axios.get("api/vehicle").then(({ data }) => (this.vehicles = data));
                //console.log(this.vehicles);
                axios.get('api/getSearchVehicle')
                .then(response => {
                    this.vehicles = response.data;
                    console.log(this.vehicles);
                })
                .catch(function (error){
                    console.log(error);
                })
            },
            searchVehi: _.debounce(() => {
                Fire.$emit('searchVehicleStart');
            },500),
        },
        created(){
            Fire.$on('searchVehicleStart',() => {
                let query = this.searchVehicleVar;
                axios.get('api/findVehicle?q='+query)
                .then((data) => {
                    this.vehicles = data.data
                })
            })
        },
        computed: {
            filteredBlogs(){
                //return this.drivers.filter(driver =>{
                //return driver.LastName.includes(this.form.search)
              //});
              
              return this.vehicles.filter((samsung) => {
                return this.form.search.toLowerCase().split(' ').every(v => samsung.PlateNumber.toLowerCase().includes(v) || samsung.DriverName.toLowerCase().includes(v) || samsung.TruckerName.toLowerCase().includes(v) || samsung.EngineNumber.toLowerCase().includes(v));
            });
              }
        }
    }
</script>
