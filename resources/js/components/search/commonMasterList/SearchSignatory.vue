<template>
    <div class="container">
        <!-- modal  -->
        <div class="modal fade" id="searchSignatoryold" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search Signatory</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form @submit.prevent="">

                <div class="modal-body">
                    <div class="card-body">
                        
                        <div class="row">
                            <div class="col-lg-6">
                                <b-input-group class="mt-3" size="sm">
                                    
                                    <b-form-input placeholder="Search for..." @keyup="searchSign" v-model="searchSignVar"></b-form-input>
                                    <b-input-group-append>
                                    <b-button variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div><!-- /.col-lg-6 -->
                        </div><!-- /.row -->
                    <table class="table table-bordered">
                        <thead>                  
                            <tr>
                            <th>Batch #</th>
                            <th>period</th>
                            <th>Soa #</th>
                            <th>Soa Date</th>
                            <th>Prepared By</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="hover-green" v-for="(signatory) in signatories.data" v-bind:key="signatory.id" @click="setSignatory(signatory)">
                            <td>{{signatory.lname}}</td>
                            <td>{{signatory.ename}}</td>
                            <td>{{signatory.fname}}</td>
                            <td>{{signatory.mname}}</td>
                            <td>{{signatory.position}}</td>
                        </tr>
                        </tbody>
                    </table>
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
                searchSignVar: '',
                selectedSignatory:{}
            }
        },
        mounted(){
           
        },
        methods: {
            
            getSignatory(){
                axios({method: 'GET', url: '/api/billingsignatory'}).then(({ data }) => (this.signatories = data))
            },
            searchSign: _.debounce(() => {
                Fire.$emit('searchSignStart');
            },500),
            setSignatory(sign){
                this.selectedSignatory = sign;
                this.selectSign();
                $('#searchSignatory').modal('hide');
            },
            selectSign(event){
                this.$emit('selectSign', this.selectedSignatory);
            }
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
