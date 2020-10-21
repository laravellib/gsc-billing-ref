<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchVehicleRate" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Vehicle Rate</h4>
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
                                    <b-form-input placeholder="Search for..." @keyup="searchVehiRate" v-model="searchVehicleRateVar" ref="autofocus"></b-form-input>
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
                            <th>MVID Link</th>
                            <th>Effective Date</th>
                            <th>Per Transaction Rate</th>
                            <th>Daily Rate</th>
                            <th>Per Kilometer Rate</th>
                            <th>Per Hour Rate</th>
                            <th>Per Area Rate</th>
                            <th>Fixed Monthly Rate</th>
                            <th>Per Bag Rate</th>
                            <th>Per Destination Rate</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer;" class="hover-green" v-for="(vr) in vehiclerates.data" v-bind:key="vr.MVRRID" v-on:click="changeTitleVehicleRate(vr)">
                            <td>{{vt.MVID_Link}}</td>
                            <td>{{vt.EffectiveDate}}</td>
                            <td>{{vt.PerTransactionRate}}</td>
                            <td>{{vt.DailyRate}}</td>
                            <td>{{vt.PerKilometerRate}}</td>
                            <td>{{vt.PerHourRate}}</td>
                            <td>{{vt.PerAreaRate}}</td>
                            <td>{{vt.FixedMonthlyRate}}</td>
                            <td>{{vt.PerBagRate}}</td>
                            <td>{{vt.PerDestinationRate}}</td>
                            <td>{{vt.Status}}</td>
                            <!--<td>
                                    <center>
                                <a href="#" v-on:click="changeTitleVehicleRate(vr)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!vehiclerates.data" class="alert alert-default" role="alert">
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
                vehiclerates: {},
                searchVehicleRateVar: ''
            }
        },
        mounted(){
           this.searcherVehicleRate();
        },
        methods: {
            changeTitleVehicleRate:function(vr){
                //console.log(vehicle);
                this.$emit('changeTitleVehicleRate',vr);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchVehicleRate').modal('hide');
            },
            searcherVehicleType(){
                axios.get("api/vehiclerate").then(({ data }) => (this.vehiclerates = data));
                console.log(this.vehiclerates);
            },
            searchVehiRate: _.debounce(() => {
                Fire.$emit('searchVehicleRateStart');
            },500),
        },
        created(){
            Fire.$on('searchVehicleRateStart',() => {
                let query = this.searchVehicleTypeVar;
                axios.get('api/findVehicleRate?q='+query)
                .then((data) => {
                    this.vehiclerates = data.data
                })
            })
        }
    }
</script>
