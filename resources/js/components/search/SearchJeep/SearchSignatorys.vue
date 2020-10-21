<style>

</style>
<template>
    <div class="container">
        <!-- modal  -->
        <div class="modal fade" id="searchSignatory" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Signatory</h4>
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
                                    <b-form-input placeholder="Search for..." @keyup="searchSign" v-model="searchSignVar" ref="autofocus"></b-form-input>
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
                            <th>Ext Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr id="element" style="cursor:pointer;" class="hover-red" v-for="(signatory) in signatories.data" v-bind:key="signatory.id" v-on:click="changeTitleSignatory(signatory)">
                            <td>{{signatory.lname}}</td>
                            <td>{{signatory.ename}}</td>
                            <td>{{signatory.fname}}</td>
                            <td>{{signatory.mname}}</td>
                            <td>{{signatory.position}}</td>
                            <!--<td>
                            <center>
                            <a href="#" v-on:click="changeTitleSignatory(signatory)">
                                <i class="fa fa-heart" style="color:red;"></i>
                            </a>
                            </center>
                            </td>-->
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div v-if="!signatories.data" class="alert alert-default" role="alert">
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
                signatories:{},
                searchSignVar: ''
            }
        },
        mounted(){
            this.getSignatory();
        },
        methods: {
            changeTitleSignatory:function(signatory){
               // console.log(driver);
                this.$emit('changeTitleSignatory',signatory);
               // this.$emit('kuhaDriverID',driver.id);
                $('#searchSignatory').modal('hide');
            },
            getSignatory(){
                axios({method: 'GET', url: '/api/billingsignatory'}).then(({ data }) => (this.signatories = data))
                console.log(this.signatories);
            },
            searchSign: _.debounce(() => {
                Fire.$emit('searchSignStart');
            },500),
        },
        created(){
            Fire.$on('searchSignStart',() => {
                let query = this.searchSignVar;
                axios.get('api/signatorySearch?q='+query)
                .then((data) => {
                    this.signatories = data.data
                })
            })
        }
    }
</script>
