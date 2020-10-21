<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchDriver" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Driver</h4>
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
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Ext Name</th>
                            <th>Address</th>
                            <th>Gsc Driver</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer" v-for="driver in filteredBlogs" v-bind:key="driver.id" v-on:click="changeTitle(driver)">
                            <td>{{driver.LastName}}</td>
                            <td>{{driver.FirstName}}</td>
                            <td>{{driver.MiddleName}}</td>
                            <td>{{driver.ExtName}}</td>
                            <td>{{driver.Address}}</td>
                            <td>{{driver.GSCDriver}}</td>
                            <!--<td>
                                <center>
                                <a href="#" v-on:click="changeTitle(driver)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!drivers" class="alert alert-default" role="alert">
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
                drivers: [],
                swegets: [],
                searchDriverVar: "",
                form: new Form({
                search: ""
            })
            }
        },
        mounted(){
           this.loadDriver();
        },
        methods: {
            changeTitle:function(driver){
               // console.log(driver);
                this.$emit('changeTitle',driver);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchDriver').modal('hide');
            },

            loadDriver() {
            axios.get('api/getdriver')
                .then(response => {
                    this.drivers = response.data;
                    console.log(this.drivers);
                })
                .catch(function (error){
                    console.log(error);
                })
            }
        },
        created(){
            Fire.$on('searchDriverStart',() => {
                let query = this.searchDriverVar;
                axios.get('api/findDriver?q='+query)
                .then((data) => {
                    this.drivers = data.data
                })
            })
        },
        computed: {
            filteredBlogs(){
                //return this.drivers.filter(driver =>{
                //return driver.LastName.includes(this.form.search)
              //});
              
              return this.drivers.filter((samsung) => {
                return this.form.search.toLowerCase().split(' ').every(v => samsung.LastName.toLowerCase().includes(v) || samsung.FirstName.toLowerCase().includes(v));
            });
              }
        }
    }
</script>
