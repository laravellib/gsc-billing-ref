
<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchLocation" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Location</h4>
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
                                    <!--<b-form-input placeholder="Search for..." @keyup="searchDrive" v-model="searchDriverVar" ref="autofocus"></b-form-input>-->
                                    <input v-model="form.search" type="text" name="search" placeholder="Search for..." class="form-control" />
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
                            <th>Location Code</th>
                            <th>Location Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer" v-for="location in filteredBlogs" v-bind:key="location.LocationID" v-on:click="changeTitleLocation(location)">
                            <td>{{location.LocationCode}}</td>
                            <td>{{location.LocationName}}</td>
                            <!--<td>
                            <center>
                            <a href="#" v-on:click="changeTitleClient(client)">
                                <i class="fa fa-heart" style="color:red;"></i>
                            </a>
                            </center>
                            </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!locations" class="alert alert-default" role="alert">
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
                locations: [],
                swegets: [],
                searchClientVar: "",
                form: new Form({
                search: ""
            })
            }
        },
        mounted(){
           this.loadLocation();
        },
        methods: {
            changeTitleLocation:function(location){
               // console.log(driver);
                this.$emit('changeTitleLocation',location);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchLocation').modal('hide');
            },

            loadLocation() {
            axios.get('api/getlocation')
                .then(response => {
                    this.locations = response.data;
                })
                .catch(function (error){
                    console.log(error);
                })
            }
        },
        created(){
        },
        computed: {
            filteredBlogs(){
                //return this.drivers.filter(driver =>{
                //return driver.LastName.includes(this.form.search)
              //});
              
              return this.locations.filter((samsung) => {
                return this.form.search.toLowerCase().split(' ').every(v => samsung.LocationName.toLowerCase().includes(v));
            });
              }
        }
    }
</script>
