<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="card">

                <div class="card-header">
                    <h3 class="card-title">Other Client & Dmpi Reports</h3>
                </div>
                

                


                <div class="card-body">
                    <div class="col report-nav">
                       
                        <div class="row padding-top">
                             <b-button  variant="primary" >
                                <router-link class="nav-link" to="/dailyBillingTransmittal" target="_blank"><i class="fa fa-caret-square-right"> &nbsp; Billing Transmittal</i></router-link>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <router-link class="nav-link" to="/SoaReactivatereport" target="_blank"><i class="fa fa-caret-square-right"> &nbsp; Reactivated SOA Report</i></router-link>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <i class="fa fa-caret-square-right"> &nbsp; Year to Date Collection Report</i>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <i class="fa fa-caret-square-right"> &nbsp; Year to Date Aging Report</i>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <i class="fa fa-caret-square-right"> &nbsp; Billing Report Per Client</i>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <i class="fa fa-caret-square-right"> &nbsp; Payroll Billing Annual Report</i>
                            </b-button>
                        </div>
                        <div class="row padding-top">
                            <b-button variant="primary" >
                                <!-- <b-spinner small type="grow"></b-spinner> -->
                                <router-link class="nav-link" to="/SoaStatusMonitoring" target="_blank"><i class="fa fa-caret-square-right"> &nbsp; SOA Status Monitoring</i></router-link>
                            </b-button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import moment from "moment";

export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
        general: new Form({
            url: ""
        }),
    };
  },
  mounted(){
      
  },
  methods: {
      
  }, //method end
 
  created() {
      
  },
  
  computed: {
   
},
};
</script>
