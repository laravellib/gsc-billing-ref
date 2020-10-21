<template>
    <div class="container">
        
        <!-- modal  -->
        <div class="modal fade" id="searchOperator" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Operator</h4>
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
                                    <!--<b-form-input placeholder="Search for..." @keyup="searchOperate" v-model="searchOperatorVar" ref="autofocus"></b-form-input>-->
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
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Ext Name</th>
                            <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer" class="hover-green" v-for="(operator) in filteredBlogs" v-bind:key="operator.id" v-on:click="changeTitleOperator(operator)">
                            <td>{{operator.LastName}}</td>
                            <td>{{operator.FirstName}}</td>
                            <td>{{operator.MiddleName}}</td>
                            <td>{{operator.ExtName}}</td>
                            <td>{{operator.Address}}</td>
                            <!--<td>
                                    <center>
                                <a href="#" v-on:click="changeTitleOperator(operator)">
                                    <i class="fa fa-heart" style="color:red;"></i>
                                </a>
                                </center>
                                </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!operators" class="alert alert-default" role="alert">
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
                operators: [],
                searchOperatorVar: '',
                form: new Form({
                search: ""
                })
            }
        },
        mounted(){
           this.searcherOperator();
        },
        methods: {
            changeTitleOperator:function(operator){
               // console.log(driver);
                this.$emit('changeTitleOperator',operator);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchOperator').modal('hide');
            },
            searcherOperator(){
                //axios.get("api/operator").then(({ data }) => (this.operators = data));
                //console.log(this.operators);
                axios.get('api/getSearchOperator')
                .then(response => {
                    this.operators = response.data;
                    console.log(this.operators);
                })
                .catch(function (error){
                    console.log(error);
                })
            },
            searchOperate: _.debounce(() => {
                Fire.$emit('searchOperatorStart');
            },500),
        },
        created(){
            Fire.$on('searchOperatorStart',() => {
                let query = this.searchOperatorVar;
                axios.get('api/findOperator?q='+query)
                .then((data) => {
                    this.operators = data.data
                })
            })
        },
        computed: {
            filteredBlogs(){
                //return this.drivers.filter(driver =>{
                //return driver.LastName.includes(this.form.search)
              //});
              
              return this.operators.filter((samsung) => {
                return this.form.search.toLowerCase().split(' ').every(v => samsung.LastName.toLowerCase().includes(v) || samsung.FirstName.toLowerCase().includes(v));
            });
              }
        }
    }
</script>
