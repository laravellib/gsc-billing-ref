<template>
    <div class="container">
        <!-- modal  -->
        <div class="modal fade" id="searchDmpiDar" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Search DMPI DAR</h4>
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
                                    
                                    <b-form-input placeholder="Search for..." @keyup="searchSoa" v-model="searchSoaVar"></b-form-input>
                                    <b-input-group-append>
                                    <b-button variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                    </b-input-group-append>

                                </b-input-group>
                            </div><!-- /.col-lg-6 -->
                             <div class="col-lg-6">
                                <b-button class="btn-modal-lock" variant="warning" size="sm"><i class="fa fa-lock" aria-hidden="true"> </i> Show All Active</b-button>
                            </div>
                        </div><!-- /.row -->
                    <table class="table table-bordered">
                        <thead>                  
                            <tr>
                                <th>Soa Number</th>
                                <th>Batch Number</th>
                                <th>Period</th>
                                <th>Soa Date</th>
                                <th>Encoded By</th>
                                <th>Created</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="hover-green" v-for="(soa) in soas" v-bind:key="soa.id" @click="setsoa(soa)">
                            <td>{{soa.soaNumber}}</td>
                            <td>{{soa.BatchNo}}</td>
                            <td>{{soa.period}}</td>
                            <td>{{soa.soaDate}}</td>
                            <td>{{soa.adminencodedby}}</td>
                            <td>{{soa.created_at}}</td>
                            <td>{{soa.updated_at}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div v-if="!soas" class="alert alert-default" role="alert">
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
                searchAll: false,
                soas:{},
                selectedSoa:{},
                searchSoaVar: '',
               
            }
        },
        mounted() {
        },
        methods: {
            
            getSoa(){
                axios({method: 'GET', url: '/api/dmpidarsearch'}).then(({ data }) => (this.soas = data))
                console.log(this.soas);
            },
            searchSoa: _.debounce(() => {
                Fire.$emit('searchSignStart');
            },500),
            setsoa(data){
                this.selectedSoa = data;
                this.selectSoa();
                $('#searchDmpiDar').modal('hide');
                // console.log(data)
            },
            selectSoa(event){
                this.$emit('selectSoa', this.selectedSoa);
                this.soas = {}
                this.selectedSoa = {}
            }
        },
        created(){
            Fire.$on('searchSignStart',() => {
                axios.get('/api/dmpidarsearch', 
                {params: {soa: this.searchSoaVar}})
                .then((data) => {
                    this.soas = data.data
                })
                .catch((err)=>{
                    console.log(err.data)
                })
            })
        }
    }
</script>
