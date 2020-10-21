<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="card">

                <div class="card-header">
                    <h3 class="card-title">DAR SOA MONITORING STATUS</h3>
                </div>
 
                <div class="card-body">
                    
                    <div class="row mt-3">
                         <div class="col-sm-2">
                            <div class="form-group">
                            <label for="sel1">Month</label>
                            <select class="form-control form-control-sm" v-model="form.month" v-on:change="getPeriodinfo()">
                                <option v-for="month in months" :value="month" :key="month">{{month}}</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="form-group">
                            <label for="sel1">Year</label>
                            <select class="form-control form-control-sm" v-model="form.year" v-on:change="getPeriodinfo()">
                                <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="form-group">
                            <label for="sel1">Period</label>
                            <select class="form-control form-control-sm" v-model="form.period" v-on:change="getPeriodinfo()">
                                <option v-for="period in periods" :value="period" :key="period">{{ period }}</option>
                            </select>
                            </div>
                        </div>

                       
                    </div>

              
                    <div class="row mt-3">
                            <div class="col-3">
                            <label for="exampleInputEmail1">Date Range From:</label>
                                <input
                                v-model="from"
                                type="date"
                                class="form-control form-control-sm mb-2"
                                placeholder="Search Rental..."
                                />
                            </div>
                            <div class="col-3">
                            <label for="exampleInputEmail1">To:</label>
                                <input
                                v-model="to"
                                type="date"
                                class="form-control form-control-sm mb-2"
                                placeholder="Search Rental..."
                                />
                            </div>
                            <div class="col-3">

                                <button type="button" @click="printDar_SoastatusMonitoring()"  class="btn btn-success" style="margin-top: 25px;"><i class="fas fa-print"></i> Generate DAR Report</button>
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

  },
  data() {
    return {

        from: this.$root.formatDate(new Date()),
        to: this.$root.formatDate(new Date()),

        form: new Form({
                month: "",
                year: "",
                period: "",
                to:"",
                from:""
            })
       
        }
  },
  mounted(){

       //Get user
        axios
            .get("api/reactGetUser")
            .then(response => {
                this.userMe = response.data['name'];
            })
            .catch(function(error) {
                console.log(error);
            });
        
  },

  created: function() {
        var d = new Date();
        this.form.month = d.getMonth();
        this.form.year = d.getFullYear();
        
        var day = d.getDate();
        if(day < 16){
            this.form.period = 1;
        }else{
            this.form.period = 2;
        }
    },

  methods: {

       getPeriodinfo(){

                this.form.generationLoading = true;

                //get the period information base on the month, year and period selected
                if(this.month!='' && this.year!='' && this.period!=''){

                    this.form.post('api/getPayrollPeriodInfo')
                    .then(({data})=>{
                        this.form.from = data[0].PeriodFrom
                        this.form.to = data[0].PeriodTo
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    
                }

            },

         printDar_SoastatusMonitoring() {
            axios
                .get("api/SoastatusMonitoring", { params: { from: this.from, to: this.to } })
                .then(response => {
                    if (response.data.success) {
                        window.open(
                            "api/SoastatusMonitoring?from=" + this.from + 
                            "&to=" + this.to + "&report=true" + "&userMe=" + this.userMe
                        );
                    } else {
                        return toast.fire({
                            icon: "warning",
                            title: "No data found."
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
  
  }, 
 
  
  
  computed: {

            years () {
                const year = new Date().getFullYear()
                return Array.from({length: 5}, (value, index) => (year+2) - index);
            },
            months() {
                const month = 12
                return Array.from({length: 12}, (value, index) => month - index);
            },
            periods() {
                const period = 1
                return Array.from({length: 2}, (value, index) => period + index);
            }
   
    },
};
</script>
