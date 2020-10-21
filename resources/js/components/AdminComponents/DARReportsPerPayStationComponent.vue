<template>
<div class="col-xs-12">
    <!-- <div id="overlay"><img :src="getPhoto()"></div> -->
    <div id="overlay"><center>
      <!-- <pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader> -->
      <b-spinner style="width: 6rem; height: 6rem;margin-top: 300px;color:#82E0AA    " label="Large Spinner" type="grow"></b-spinner>
      <b-spinner style="width: 6rem; height: 6rem;margin-top: 300px;color:#82E0AA    " label="Large Spinner" type="grow"></b-spinner>
      <b-spinner style="width: 6rem; height: 6rem;margin-top: 300px;color:#82E0AA    " label="Large Spinner" type="grow"></b-spinner>
      </center></div> 
<div class="row">
<div class="col">
<div class="card">
        <div class="card-body">
        <div class="col-xs-12">
          <div class="row">
            <div class="col">
              <h2 class="card-title"><b>DAR Statistics Per Pay Station(AVERAGE HEAD COUNT)</b></h2>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
        <div class="row">
        <div class="col">
                <label class="mr-sm-2" >Select Month</label>
                <select v-model="selectedMonth" required>
                  <option value ="" selected>Choose Month...</option>
                  <option v-for="momonth in Month" :value="momonth.xMonth" :key="momonth.id">
                    {{ momonth.xMonth }}
                  </option>
                </select>
            </div>
            <div class="col">
                <label class="mr-sm-2" >Select Year</label>
                <select v-model="selectedYear" required>
                  <option value ="" selected>Choose Year...</option>
                  <option v-for="yeyear in Year" :value="yeyear.xYear" :key="yeyear.id">
                    {{ yeyear.xYear }}
                  </option>
                </select>
            </div>
            <div class="col">
                <div class="input-group mb-3 input-group-sm">
                <label class="mr-sm-2">Select Phase</label>
                <select v-model="selectedPhase" required>
                  <option value ="" selected>Choose Phase...</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                </select>
                </div>
            </div>
            <div class="col">
                <label class="mr-sm-2" >Select Pay Station</label>
                <select v-model="selectedPayStation" required>
                  <option value ="" selected>Choose Pay Station...</option>
                  <option v-for="ps in PayStation" :value="ps.PayStation" :key="ps.id">
                    {{ ps.PayStation }}
                  </option>
                </select>
            </div>
            <div class="col">
              <div class="input-group mb-3 input-group-sm">
                <button type="button" class="btn btn-primary" @click="generateDarReport">Generate</button>
              </div>
            </div>
        </div>
        </div>
        <line-chart :width="300" :chart-data="datacollection"></line-chart>  
        </div>
      
  </div><!-- CARD -->
  </div><!-- COLUMN -->
 <div class="col">
    <div class="row">
<div class="col">
<div class="card">
        <div class="card-body">
        <div class="col-xs-12">
          <div class="row">
            <div class="col">
              <h2 class="card-title"><b>DAR Statistics Per Pay Station(TOTAL AMOUNT)</b></h2>
            </div>
          </div>
        </div>
        <line-chart :width="300" :height="428" :chart-data="datacollection2"></line-chart>  
        </div>
      
  </div><!-- CARD -->
  </div><!-- COLUMN -->
  </div> <!-- ROW -->
    
  </div>
  </div> <!-- ROW -->
  <div class="card">
    <div class="card-body table-responsive pre-scrollables" >
      <table class="table table-hover" >
      <thead>
        <tr>
          <th style="text-align: right;">#</th>
          <th style="text-align: right;">Pay Station</th>
          <th style="text-align: right;">Average Head Count</th>
          <th style="text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dar,index) in darreportsresult" v-bind:key="dar.id">
          <td style="text-align: right;">{{doMath(index)}}</td>
          <td style="text-align: right;">{{dar.PeriodDate}}</td>
          <td style="text-align: right;">{{dar.Total}}</td>
          <td style="text-align: right;">{{'Php'+dar.TotalAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
     <table class="table">
  <thead class="thead-dark">
    <tr>
      <th style="text-align: right;">{{'GRAND TOTAL'}}</th>
      <th style="text-align: right;">{{'Total Average Head Count: '+this.FinalViewTotalAverageHeadCount.toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}}</th>
      <th style="text-align: right;">{{'Total Amount: Php'+this.TotalNetAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</th>
    </tr>
  </thead>
</table>
 


  </div>
  
</template>

<script>
import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min.js'
  import LineChart from '../AdminComponents/BarChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        
        PayStation: "",
        Month: "",
        Year: "",
        Phase: "",
        datacollection: {},
        datacollection2: {},
        selectedMonth:"",
        selectedYear:"",
        selectedPhase: "",
        selectedPayStation:"",
        Paystations: "",
        Totals: "",
        Dates: "",
        TotalsAmount:"",
        darreportsresult:[],
        tangtanglastcomma: "",
        tangtanglastcommadates: "",
        tangtanglastcommatotal: "",
        tangtanglastcommatotalamount: "",
        stringtoarrayna: [],
        stringtoarraynadates: [],
        stringtoarraynatotal:[],
        stringtoarraynatotalamount:[],
        color:"",
        tangtanglastcommacolor: "",
        stringtoarraynacolor: [],
        min:1,
        max:255,
        TotalAverageHeadCount: 0,
        FinalViewTotalAverageHeadCount: 0,
        TotalNetAmount: 0,
        index: 0
        
      }
    },
    mounted () {
      this.LoadPayrollPeriodMonth();
      this.LoadPayrollPeriodYear();
      this.LoadPayrollPeriodPayStation();
    },
    methods: {
      getPhoto(){
        return "img/source (1).gif";
      },
      doMath: function (index) {
      return index+1;
    },
      generateDarReport(){
        //   this.fillData();
        // $('#addNew').modal('show');

        document.getElementById('overlay').style.display = "block";
        // axios.get('/api/getDARReportPayStation', {params: {selectedMonth: this.selectedMonth, selectedYear: this.selectedYear, selectedPhase: this.selectedPhase,selectedPayStation: this.selectedPayStation}})
               axios.get('/api/getDARReportPayStation', {params: {selectedMonth: this.selectedMonth, selectedYear: this.selectedYear, selectedPhase: this.selectedPhase,selectedPayStation: this.selectedPayStation}})
                .then(({ data }) => {
                    this.darreportsresult = data;
                    this.Paystations="";
                    this.Totals="";
                    this.TotalsAmount="";
                    this.Dates ="";
                    this.color="";
                    this.TotalAverageHeadCount=0;
                    this.TotalNetAmount=0;
                  //   this.Paystations = this.darreportsresult.PayStation;
                  //   this.Totals = this.darreportsresult.Total;
                  //  this.fillData();
                      console.log(this.darreportsresult);
                       for(var i = 0; i< this.darreportsresult.length;i++){
                        // this.Paystations = this.darreportsresult[i].PayStation;
                        this.Paystations=  this.darreportsresult[i].PayStation+',' +this.Paystations;
                        this.Totals =this.darreportsresult[i].Total+',' +this.Totals;
                        this.TotalsAmount =this.darreportsresult[i].TotalAmount+',' +this.TotalsAmount;
                        this.Dates = this.darreportsresult[i].PeriodDate+' ,' +this.Dates;
                        var r = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
                        var g = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
                        var b = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
                        this.color = 'rgb('+r+','+g+','+b+') ,'+this.color;
                        this.TotalAverageHeadCount = this.darreportsresult[i].Total + this.TotalAverageHeadCount;
                        this.TotalNetAmount = this.darreportsresult[i].TotalAmount+this.TotalNetAmount;
                       }
                    //    $('#addNew').modal('hide');
                    // $('.modal-backdrop').remove();
                    swal.fire({
                        icon: 'success',
                        title: 'Finished!',
                        text: 'Done Generating Report!'
                        })
                    document.getElementById('overlay').style.display = "none";
                    this.fillData();
                })
                .catch((err)=>{
                    
                })
      },
      fillData () {
        this.FinalViewTotalAverageHeadCount = this.TotalAverageHeadCount/this.darreportsresult.length;
        this.tangtanglastcomma = this.Paystations.replace(/,\s*$/, "");
        this.tangtanglastcommatotal = this.Totals.replace(/,\s*$/, "");
        this.tangtanglastcommatotalamount = this.TotalsAmount.replace(/,\s*$/, "");
        this.tangtanglastcommacolor = this.color.replace(/,\s*$/, "");
        this.tangtanglastcommadates = this.Dates.replace(/,\s*$/, "");

        this.stringtoarrayna = this.tangtanglastcomma.split(",");
        this.stringtoarraynatotal = this.tangtanglastcommatotal.split(",");
        this.stringtoarraynatotalamount = this.tangtanglastcommatotalamount.split(",");
        this.stringtoarraynacolor = this.tangtanglastcommacolor.split(" ,");
        this.stringtoarraynadates = this.tangtanglastcommadates.split(" ,");
        console.log('Dates: '+this.stringtoarraynadates);
        console.log('Amount: '+this.stringtoarraynatotal);
        //var data =this.Paystations.split(",");
        this.datacollection = {
          labels: this.stringtoarraynadates,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: this.stringtoarraynacolor,
              data: this.stringtoarraynatotal
            }
          ],
          options: {
            scaleShowValues: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }]
            }
          }
        }
            
        this.datacollection2 = {
          labels: this.stringtoarraynadates,
          
          datasets: [
            {
              label: 'Data Two',
              backgroundColor: this.stringtoarraynacolor,
              data: this.stringtoarraynatotalamount
            }
          ],
          options: {
            scaleShowValues: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: false,
                  labelString:'hehefeefefefe'
                }
              }]
            }
          }
        }
      },
      LoadPayrollPeriodMonth(){
        axios.get('api/getPPMonth')
        .then(response => {
                this.Month = response.data;
                console.log(this.Month);
            })
            .catch(function (error){
                console.log(error);
            })
      },
      LoadPayrollPeriodYear(){
        axios.get('api/getPPYear')
        .then(response => {
                this.Year = response.data;
                console.log(this.Year);
            })
            .catch(function (error){
                console.log(error);
            })
      },
      LoadPayrollPeriodPayStation(){
        axios.get('api/getPPPayStation')
        .then(response => {
                this.PayStation = response.data;
                console.log(this.PayStation);
            })
            .catch(function (error){
                console.log(error);
            })
      },
    },
    created(){
        this.fillData();
    },
    computed:{
      totals(){
        return this.darreportsresult
      }
    }

  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>