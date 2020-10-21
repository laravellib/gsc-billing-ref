<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchVehicleType" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Vehicle Type</h4>
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
                                    <b-form-input placeholder="Search for..." @keyup="searchVehiType" v-model="searchVehicleTypeVar" ref="autofocus"></b-form-input>
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
                            <th>ID</th>
                            <th>Motor Vehicle Type Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer;" class="hover-green" v-for="(vt) in vehicletypes.data" v-bind:key="vt.MVTID" v-on:click="changeTitleVehicleType(vt)">
                            <td>{{vt.MVTID}}</td>
                            <td>{{vt.MVType}}</td>
                    
                            <!--<td>
                                    <center>
                                <a href="#" v-on:click="changeTitleVehicleType(vt)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!vehicletypes.data" class="alert alert-default" role="alert">
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
                vehicletypes: {},
                searchVehicleTypeVar: ''
            }
        },
        mounted(){
           this.searcherVehicleType();
        },
        methods: {
            changeTitleVehicleType:function(vt){
                //console.log(vehicle);
                this.$emit('changeTitleVehicleType',vt);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchVehicleType').modal('hide');
            },
            searcherVehicleType(){
                axios.get("api/vehicletype").then(({ data }) => (this.vehicletypes = data));
                console.log(this.vehicletypes);
            },
            searchVehiType: _.debounce(() => {
                Fire.$emit('searchVehicleTypeStart');
            },500),
        },
        created(){
            Fire.$on('searchVehicleTypeStart',() => {
                let query = this.searchVehicleTypeVar;
                axios.get('api/findVehicleType?q='+query)
                .then((data) => {
                    this.vehicletypes = data.data
                })
            })
        }
    }
</script>
