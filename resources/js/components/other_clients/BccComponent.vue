<template>
    <div class="card full-width">
        <div class="card-header">
            <h3 class="card-title">OTHER CLIENT</h3>
        </div>
        <div class="card-body"> 
            <div class="row" ref='up'>
                <div class="col-sm-3">
                    <div class="form-group">
                    <label for="sel1">Month</label>
                    <select class="form-control form-control-sm" v-model="form.month" v-on:change="getPeriodinfo()">
                        <option v-for="month in months" :value="month" :key="month">{{month}}</option>
                    </select>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group">
                    <label for="sel1">Year</label>
                    <select class="form-control form-control-sm" v-model="form.year" v-on:change="getPeriodinfo()">
                        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                    </select>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group">
                    <label for="sel1">Period</label>
                    <select class="form-control form-control-sm" v-model="form.period" v-on:change="getPeriodinfo()">
                        <option v-for="period in periods" :value="period" :key="period">{{ period }}</option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-3">
                    <strong>Date Period From:</strong>
                    <input disabled v-model="form.periodDateFrom" class="form-control form-control-sm" id="soaDate" type="date" value="">
                </div>
                <div class="col-3">
                    <strong>Date Period To:</strong>
                    <input disabled v-model="form.periodDateTo" class="form-control form-control-sm" id="soaDate" type="date" value="">
                </div>

            </div>
             <hr>
             <b-button :disabled="(form.generationLoadingBCC)" @click="generateBilling('bcc')" variant="primary" >
                <b-spinner small type="grow" v-show="(form.generationLoadingBCC)"></b-spinner>
                <i class="fa fa-caret-square-right"> &nbsp; Generate BCC Billing</i>
            </b-button>
            <b-button :disabled="(form.generationLoadingDEARBC)" @click="generateBilling('dearbc')" variant="primary" >
                <b-spinner small type="grow" v-show="(form.generationLoadingDEARBC)"></b-spinner>
                <i class="fa fa-caret-square-right"> &nbsp; Generate DEARBC Billing</i>
            </b-button>
            <b-button :disabled="(form.generationLoadingSLERS)" @click="generateBilling('slers')" variant="primary" >
                <b-spinner small type="grow" v-show="(form.generationLoadingSLERS)"></b-spinner>
                <i class="fa fa-caret-square-right"> &nbsp; Generate SLERS Billing</i>
            </b-button>
            <hr>

             <!-- DATA TABLE  -->
            <div class="row mt-2">
                <div class="col">
                    <ag-grid-vue style="width: 100%; height: 200px;" class="ag-theme-balham" 
                    :columnDefs="columnDefs" 
                    :rowData="form.filter"
                    @grid-ready="onGridReady"
                    ></ag-grid-vue>
                </div>
            </div>
            <!-- END DATA TABLE  -->

        </div>
    </div>
</template>

<script>
    export default {
        components: {
            AgGridVue,
        },
        data(){
            return{
                form: new Form({
                    month: "",
                    year: "",
                    period: "",
                    periodDateFrom: "",
                    periodDateTo: "",
                    periodID: "",
                    clientID: "0",
                    filter: null,
                    selectedData: {},
                    selectRow: {},
                    generationLoading: false,
                    generationLoadingBCC: false,
                    generationLoadingDEARBC: false,
                    generationLoadingSLERS: false
                })
            }
        },
        created: function() 
        {
            // data grid 
            this.columnDefs = [
                {
                    headerName: "Chapa",
                    field: "OldChapaNo",
                    resizable: true,
                    width: 100
                },
                {
                    headerName: "Name",
                    field: "FullName",
                    resizable: true,
                    width: 250
                },
                {
                    headerName: "Activity",
                    field: "activity",
                    resizable: true,
                    width: 170
                },
                {
                    headerName: "Pay Station",
                    field: "PayStation",
                    resizable: true,
                    width: 170
                },
                {
                    headerName: "Field",
                    field: "Field",
                    resizable: true,
                    width: 170,
                },
                {
                    headerName: "Reg",
                    field: "RegularHours",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "OT",
                    field: "OT",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "ND",
                    field: "ND",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "NDOT",
                    field: "NDOT",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "LEG",
                    field: "LEG",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "ADJS",
                    field: "ADJS",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "XTRA",
                    field: "ExtraPay",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "Incentive",
                    field: "Incentive",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "AddPay",
                    field: "AddPay",
                    resizable: true,
                    width: 70,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                },
                {
                    headerName: "TotalAmount",
                    field: "TotalAmount",
                    resizable: true,
                    width: 100,
                    cellStyle: { textAlign: "center" },
                    valueFormatter: this.$root.currencyFormatter
                }
            ];
            this.form.filter = [];
            // end data grid 

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

            onChange: function(e) {

                this.form.filter = [];
                const selectedRows = this.gridApi.getSelectedNodes();
                this.form.selectedData = selectedRows.map(node => node.data);
                // const selectedDataStringPresentation = this.form.selectedData.map(
                //     node =>
                //     this.form.IdToDelete.push(node.id)
                // );

            },
            getPeriodinfo(){

                this.form.generationLoading = true;

                //get the period information base on the month, year and period selected
                if(this.month!='' && this.year!='' && this.period!=''){
                    this.form.post('api/getPayrollPeriodInfo')
                    .then(({data})=>{
                        this.form.periodDateFrom = data[0].PeriodFrom
                        this.form.periodDateTo = data[0].PeriodTo
                        this.form.generationLoading = false;
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }

            },
            generateBilling(clientGenerated){
                
                if(this.month!='' && this.year!='' && this.period!=''){

                    if(clientGenerated == 'bcc'){

                        this.form.generationLoadingBCC = true;

                        this.form.post('api/bccController')
                        .then(({data})=>{
                            this.form.filter = data;
                            this.form.clientID = "4";
                            this.form.generationLoadingBCC = false;
                            console.log(data)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })

                    }else if(clientGenerated == 'dearbc'){
                        this.form.generationLoadingDEARBC = true;
                        
                    }else if(clientGenerated == 'slers'){
                        this.form.generationLoadingSLERS = true;

                    }
                }
               
            },
            onGridReady(params) {
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
            },
            
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
            },
        },

    }
</script>