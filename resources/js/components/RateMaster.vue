<template>
    <div class="card full-width container">
    <div class="card-header">


    <h3 class="card-title">Rate Master File</h3>
    <button class="btn btn-secondary float-right" @click="createMode">
        <i class="fas fa-plus-circle"></i> Add rate
    </button>
    </div>

    <div class="row margin-top-10">
        <div class="col-3">
            <select class="form-control form-control-sm" v-model="selectedLocationID" v-on:change="getResults()">
                <option disabled selected value> -- select a location -- </option>
                <option v-for="location in locationData" :key="location.id" :value="location.id">{{location.location}}</option>
            </select>
        </div>
        <div class="col-3">
             <select class="form-control form-control-sm" v-model="selectedActivityID" v-on:change="getResults()">
                <option selected value> -- select an activity -- </option>
                <option v-for="activity in activityData" :key="activity.id" :value="activity.id">{{activity.activity}}</option>
            </select>
        </div>
        <div class="col-3">
             <select class="form-control form-control-sm" v-model="selectedGlID" v-on:change="getResults()">
                <option selected value> -- select a gl -- </option>
                <option v-for="gl in glData" :key="gl.id" :value="gl.id">{{gl.gl}}</option>
            </select>
        </div>
        <div class="col-3">
             <select class="form-control form-control-sm" v-model="selectedCcID" v-on:change="getResults()">
                <option selected value> -- select a costcenter -- </option>
                <option v-for="cc in ccData" :key="cc.id" :value="cc.id">{{cc.costcenter}}</option>
            </select>
        </div>
    </div>
 
    <!-- <div class=" table-responsive custom-shell-table">
        <table class="table table-sm table-upload-dar"> -->
    <div class="table-responsive custom-shell-table">
        <table class="table table-rate table-sm table-bordered table-hover">
            <thead> 
                <tr>
                    <th>activity</th>
                    <th>gl</th>
                    <th>costcenter</th>
                    <th>status</th> 
                    <th>rd-st</th>
                    <th>rd-ot</th>
                    <th>rd-nd</th>
                    <th>rd-ndot</th>
                    <th>shol-st</th>
                    <th>shol-ot</th>
                    <th>shol-nd</th>
                    <th>shol-ndot</th>
                    <th>shrd-st</th>
                    <th>shrd-ot</th>
                    <th>shrd-nd</th>
                    <th>shrd-ndot</th>
                    <th>rhol-st</th>
                    <th>rhol-ot</th> 
                    <th>rhol-nd</th>
                    <th>rhol-ndot</th>
                    <th>rhrd-st</th>
                    <th>rhrd-ot</th>
                    <th>rhrd-nd</th>
                    <th>rhrd-ndot</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rate) in rates.data" v-bind:key="rate.id">
                    <td class="bgg-gray">{{rate.activity}} 
                        <b-button-group size="sm" class="fl-right"> 
                            <b-button @click="editMode(rate)" v-show="rate.status=='active'"><i class="fa fa-edit"></i></b-button>
                            <b-button @click="viewMode(rate)" v-show="rate.status=='previous'"><i class="fa fa-eye"></i></b-button>
                        </b-button-group>
                    </td>
                    <td>{{rate.gl}}</td>
                    <td>{{rate.costcenter}}</td>
                    <td>{{rate.status}}</td>
                    <td>{{rate.rd_st}}</td>
                    <td>{{rate.rd_ot}}</td>
                    <td>{{rate.rd_nd}}</td>
                    <td>{{rate.rd_ndot}}</td>
                    <td>{{rate.shol_st}}</td>
                    <td>{{rate.shol_ot}}</td>
                    <td>{{rate.shol_nd}}</td>
                    <td>{{rate.shol_ndot}}</td>
                    <td>{{rate.shrd_st}}</td>
                    <td>{{rate.shrd_ot}}</td>
                    <td>{{rate.shrd_nd}}</td>
                    <td>{{rate.shrd_ndot}}</td>
                    <td>{{rate.rhol_st}}</td>
                    <td>{{rate.rhol_ot}}</td>
                    <td>{{rate.rhol_nd}}</td>
                    <td>{{rate.rhol_ndot}}</td>
                    <td>{{rate.rhrd_st}}</td>
                    <td>{{rate.rhrd_ot}}</td>
                    <td>{{rate.rhrd_nd}}</td>
                    <td>{{rate.rhrd_ndot}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- /.card-body -->
    <div class="card-footer clearfix pagination">
        <pagination 
        :data="rates" 
        @pagination-change-page="getResults"
        :limit="2"
        ></pagination>
    </div>

    <!-- modal  -->
    <div class="modal fade" id="addNewRate" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Change active rate for selected activity</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form @submit.prevent="">

                    <div class="modal-body">
                            <input hidden="true" v-model="form.id" class="form-control form-control-sm" type="text" name="id">

                            <!-- gl,cc,act,loc -->
                            <div class="row margin-top-10">
                                <div class="col-3">
                                    <select class="form-control form-control-sm" v-model="selectedLocationID" v-on:change="getResults()">
                                        <option disabled selected value> -- select a location -- </option>
                                        <option v-for="location in locationData" :key="location.id" :value="location.id">{{location.location}}</option>
                                    </select>
                                    <has-error :form="form" field="selectedLocationID"></has-error>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm" v-model="selectedActivityID" v-on:change="getResults()">
                                        <option selected value> -- select an activity -- </option>
                                        <option v-for="activity in activityData" :key="activity.id" :value="activity.id">{{activity.activity}}</option>
                                    </select>
                                    <has-error :form="form" field="selectedActivityID"></has-error>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm" v-model="selectedGlID" v-on:change="getResults()">
                                        <option selected value> -- select a gl -- </option>
                                        <option v-for="gl in glData" :key="gl.id" :value="gl.id">{{gl.gl}}</option>
                                    </select>
                                    <has-error :form="form" field="selectedGlID"></has-error>
                                </div>
                                <div class="col-3">
                                    <select class="form-control form-control-sm" v-model="selectedCcID" v-on:change="getResults()">
                                        <option selected value> -- select a costcenter -- </option>
                                        <option v-for="cc in ccData" :key="cc.id" :value="cc.id">{{cc.costcenter}}</option>
                                    </select>
                                    <has-error :form="form" field="selectedCcID"></has-error>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b-badge pill variant="info">Regular Day</b-badge>
                                </div> 
                                <div class="col-sm-2">
                                    <label for="fname">ST</label>
                                    <input v-model="form.rd_st" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rd_st')}" type="text" name="rd_st">
                                    <has-error :form="form" field="rd_st"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="mname">OT</label>
                                    <input v-model="form.rd_ot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rd_ot')}" type="text" name="rd_ot">
                                    <has-error :form="form" field="rd_ot"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">ND</label>
                                    <input v-model="form.rd_nd" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rd_nd')}" type="text" name="rd_nd">
                                    <has-error :form="form" field="rd_nd"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">NDOT</label>
                                    <input v-model="form.rd_ndot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rd_ndot')}" type="text" name="rd_ndot">
                                    <has-error :form="form" field="rd_ndot"></has-error>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b-badge pill variant="info">Special Holiday</b-badge>
                                </div>
                                <div class="col-sm-2">
                                    <label for="fname">ST</label>
                                    <input v-model="form.shol_st" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shol_st')}" type="text" name="shol_st">
                                    <has-error :form="form" field="shol_st"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="mname">OT</label>
                                    <input v-model="form.shol_ot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shol_ot')}" type="text" name="shol_ot">
                                    <has-error :form="form" field="shol_ot"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">ND</label>
                                    <input v-model="form.shol_nd" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shol_nd')}" type="text" name="shol_nd">
                                    <has-error :form="form" field="shol_nd"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">NDOT</label>
                                    <input v-model="form.shol_ndot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shol_ndot')}" type="text" name="shol_ndot">
                                    <has-error :form="form" field="shol_ndot"></has-error>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b-badge pill variant="info">Special Holiday on Rest Day</b-badge>
                                </div>
                                <div class="col-sm-2">
                                    <label for="fname">ST</label>
                                    <input v-model="form.shrd_st" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shrd_st')}" type="text" name="shrd_st">
                                    <has-error :form="form" field="shrd_st"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="mname">OT</label>
                                    <input v-model="form.shrd_ot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shrd_ot')}" type="text" name="shrd_ot">
                                    <has-error :form="form" field="shrd_ot"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">ND</label>
                                    <input v-model="form.shrd_nd" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shrd_nd')}" type="text" name="shrd_nd">
                                    <has-error :form="form" field="shrd_nd"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">NDOT</label>
                                    <input v-model="form.shrd_ndot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('shrd_ndot')}" type="text" name="shrd_ndot">
                                    <has-error :form="form" field="shrd_ndot"></has-error>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b-badge pill variant="info">Regular Holiday</b-badge>
                                </div>
                                <div class="col-sm-2">
                                    <label for="fname">ST</label>
                                    <input v-model="form.rhol_st" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhol_st')}" type="text" name="rhol_st">
                                    <has-error :form="form" field="rhol_st"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="mname">OT</label>
                                    <input v-model="form.rhol_ot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhol_ot')}" type="text" name="rhol_ot">
                                    <has-error :form="form" field="rhol_ot"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">ND</label>
                                    <input v-model="form.rhol_nd" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhol_nd')}" type="text" name="rhol_nd">
                                    <has-error :form="form" field="rhol_nd"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">NDOT</label>
                                    <input v-model="form.rhol_ndot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhol_ndot')}" type="text" name="rhol_ndot">
                                    <has-error :form="form" field="rhol_ndot"></has-error>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b-badge pill variant="info">Reglar Holiday on Rest Day</b-badge>
                                </div>
                                <div class="col-sm-2">
                                    <label for="fname">ST</label>
                                    <input v-model="form.rhrd_st" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhrd_st')}" type="text" name="rhrd_st">
                                    <has-error :form="form" field="rhrd_st"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="mname">OT</label>
                                    <input v-model="form.rhrd_ot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhrd_ot')}" type="text" name="rhrd_ot">
                                    <has-error :form="form" field="rhrd_ot"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">ND</label>
                                    <input v-model="form.rhrd_nd" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhrd_nd')}" type="text" name="rhrd_nd">
                                    <has-error :form="form" field="rhrd_nd"></has-error>
                                </div>
                                <div class="col-sm-2">
                                    <label for="position">NDOT</label>
                                    <input v-model="form.rhrd_ndot" class="form-control form-control-sm" :class="{'is-invalid': form.errors.has('rhrd_ndot')}" type="text" name="rhrd_ndot">
                                    <has-error :form="form" field="rhrd_ndot"></has-error>
                                </div>
                            </div>
                        
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><i class="far fa-window-close"></i> Close</button>
                        <button type="button" v-show="isEdit==2" @click="updateRate()" class="btn btn-success"><i class="far fa-save"></i> Update</button>
                        <button type="button" v-show="isEdit==3" @click="addNewRate()" class="btn btn-primary"><i class="far fa-save"></i> Create</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    <!-- end modal -->

</div>
</template>

<script>
import { log } from 'util';

    export default {
        data(){
            return{
                rates:{},
                isSubmit: false,
                validationError: [],
                isEdit: 0, // 1 = preview, 1 = edit, 3 = add
                locationData:{},
                glData:{},
                ccData:{},
                activityData:{},
                selectedRate: [],
                form: new Form({
                    id:'',
                    activity: ' ',
                    dayType: ' ',
                    rd_st: '',
                    rd_ot: '',
                    rd_nd: '',
                    rd_ndot: '',
                    shol_st: '',
                    shol_ot: '',
                    shol_nd: '',
                    shol_ndot: '',
                    shrd_st: '',
                    shrd_ot: '',
                    shrd_nd: '',
                    shrd_ndot: '',
                    rhol_st: '',
                    rhol_ot: '',
                    rhol_nd: '',
                    rhol_ndot: '',
                    rhrd_st: '',
                    rhrd_ot: '',
                    rhrd_nd: '',
                    rhrd_ndot: '',
                    status:'active',
                    selectedLocationID:'',
                    selectedActivityID:'',
                    selectedGlID:'',
                    selectedCcID:'',
                }),

                selectedLocationID:'',
                selectedActivityID:'',
                selectedGlID:'',
                selectedCcID:'',
                
            }
        },
        mounted(){
            
            this.selectedLocationID = '17';
            this.getResults();
            this.getLocation();
            this.getCc();
            this.getActivity();
            this.getGl();

        },
        methods: {
            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                
                axios.get('/api/ratemaster?page=' + page, {params: {id: this.selectedLocationID,
                                                                    ccId: this.selectedCcID,
                                                                    glId: this.selectedGlID,
                                                                    activityId: this.selectedActivityID}}) 
                    .then(response => {
                        this.rates = response.data;
                        console.log(this.rates)
                    });
            },
            onFileChange(e){
                console.log(e.target.files[0]);
                this.file = e.target.files[0];
            },
            createJob: function () {
                console.log("test");
            },
            getTasks(){
                axios({method: 'GET', url: '/api/ratemaster'}).then(({ data }) => (this.rates = data))
            },
            toUpper(){
                this.form.activity = this.$parent.toCapitalizeFirstLetter(this.form.activity);
            },
           addNewRate(e)
           {
                this.$Progress.start();

                this.toUpper();

                this.form.selectedLocationID = this.selectedLocationID;
                this.form.selectedActivityID = this.selectedActivityID;
                this.form.selectedGlID = this.selectedGlID;
                this.form.selectedCcID = this.selectedCcID;

                this.form.post('api/ratemaster')
                    .then((res)=>{
                        console.log(res.data)
                    if(res.data == true){
                        $('#addNewRate').modal('hide')
                            this.$Progress.finish();
                            this.getResults();
                            toast.fire({
                                icon: 'success',
                                title: 'Created successfully'
                            })
                    }else{
                        this.getResults();
                        this.$Progress.fail();
                            toast.fire({
                                icon: 'warning',
                                title: 'Data already exist'
                            })
                    }
                        
                    })
                    .catch((err)=>{
                        this.$Progress.fail();
                        toast.fire({
                            icon: 'error',
                            title: 'Something went wrong'
                        })
                    })

            },
            updateRate()
            {
                this.$Progress.start();
                this.toUpper();

                this.form.selectedLocationID = this.selectedRate['locationID'];
                this.form.selectedActivityID = this.selectedRate['activityID'];
                this.form.selectedGlID = this.selectedRate['glID'];
                this.form.selectedCcID = this.selectedRate['costCenterID'];

                this.form.put('api/ratemaster/'+this.form.id)
                .then((res) => {
                    console.log(res);
                    if(res.data == true){
                       $('#addNewRate').modal('hide')
                        this.$Progress.finish();
                        this.getResults();
                        toast.fire({
                            icon: 'success',
                            title: 'Rate successfully updated'
                        })
                   }else{
                       this.getResults();
                       this.$Progress.fail();
                        toast.fire({
                            icon: 'warning',
                            title: 'Rate already exist'
                        })
                   }

                })
                .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'rate not updated successfully'
                    })
                });
            },
            editMode(rate)
            {
                this.isEdit = 2;
                this.form.reset();
                $('#addNewRate').modal('show');
                this.form.fill(rate);
                this.selectedRate = rate;
            },
            createMode()
            {
                this.isEdit = 3;
                this.form.reset();
                $('#addNewRate').modal('show');
            },
            deleteRate(id)
            {
                swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {

                        if (result.value) {
                            this.form.delete('api/ratemaster/'+id).then(() => {
                                    swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                    )
                                
                                this.getResults();

                            }).catch(()=>{
                                swal.fire(
                                    'Failed!',
                                    'Something went wrong.',
                                    'error'
                                    )
                            });
                        }
                    })
                    
            },
            getLocation()
            {
                
                axios.get('/api/getLocation')
                .then(({data}) => {
                    this.locationData = data;
                }).catch((err)=>{
                    console.log(err);
                })
                
            },
            getCc()
            {

                axios.get('/api/getCc')
                .then(({data}) => {
                    this.ccData = data;
                }).catch((err)=>{
                    console.log(err);
                })

            },
            getGl()
            {
                axios.post("api/getSelectedGl", { type: 'DAR' }).then(({ data }) => {
                   this.glData = data;
                   console.log('data',data)
                }).catch((err) => {
                    console.log(err)
                })

            },
            getActivity()
            {

                axios.get('/api/getActivity')
                .then(({data}) => {
                    this.activityData = data;
                }).catch((err)=>{
                    console.log(err);
                })

            },
            viewMode(rate)
            {
                this.isEdit = 1;
                this.form.reset();
                $('#addNewRate').modal('show');
                this.form.fill(rate);
            }
        },
        created(){
            Fire.$on('searching',() => {
                let query = this.$parent.search;
                axios.get('api/ratemasterSearch?q='+query)
                .then(({ data }) => {
                    this.rates = data
                })
            })
        }
    }
</script>
