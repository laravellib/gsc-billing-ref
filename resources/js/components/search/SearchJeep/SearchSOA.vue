<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchSOA" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search SOA</h4>
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
                            <th>SOA Number</th>
                            <th>SOA Date</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer;" v-for="soa in filteredBlogs" v-bind:key="soa.Soa_JeepID" v-on:click="changeTitleSOA(soa)">
                            <td>{{soa.GSCSoaSeriesNo}}</td>
                            <td>{{soa.JeepSoaDate}}</td>
                            <td>{{soa.Status}}</td>
                            <!--<td>
                                <center>
                                <a href="#" v-on:click="changeTitleSOA(soa)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!searchSOAS" class="alert alert-default" role="alert">
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
        props: ['csoas'],
        data(){
            return {
                searchSOAS: [],
                swegets: [],
                searchSOAVar: "",
                form: new Form({
                search: ""
            })
            }
        },
        mounted(){
           this.loadSOA();
        },
        methods: {
            changeTitleSOA:function(soa){
               // console.log(driver);
                this.$emit('changeTitleSOA',soa);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchSOA').modal('hide');
            },

            loadSOA() {
            axios.get('api/getSearchSOA')
                .then(response => {
                    this.searchSOAS = response.data;
                    console.log(this.searchSOAS);
                })
                .catch(function (error){
                    console.log(error);
                })
            }
        },
        created(){
            Fire.$on('searchSOAStart',() => {
                let query = this.searchSOAVar;
                axios.get('api/findSOA?q='+query)
                .then((data) => {
                    this.searchSOAS = data.data
                })
            })
            this.loadSOA();
        },
        computed: {
            filteredBlogs(){
                //return this.drivers.filter(driver =>{
                //return driver.LastName.includes(this.form.search)
              //});
              //var vm = this;
              if(this.csoas ==""){
                  return this.searchSOAS.filter((samsung) => {
                    return this.form.search.toLowerCase().split(' ').every(v => samsung.GSCSoaSeriesNo.toLowerCase().includes(v));
                });
              }
              else{
                  return this.csoas.filter((samsung) => {
                    return this.form.search.toLowerCase().split(' ').every(v => samsung.GSCSoaSeriesNo.toLowerCase().includes(v));
                });
              }
              
              }
        }
    }
</script>
