<template>
    <div class="container">
        <div class="justify-content-center">

          <form @submit.prevent="downloadExcel()">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Billing Transmittal</h3>
                </div>
                
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6 mt-3">
                        <strong>Prepared By:</strong>
                        <b-input-group size="sm">
                            <b-form-input required v-model="form.preparedBy"></b-form-input>
                            <b-form-input v-model="form.preparedByPos"></b-form-input>
                            <b-input-group-append>
                            <b-button @click="searchSignatory('prepared')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mt-3">
                        <strong>Checked By:</strong>
                        <b-input-group size="sm">
                            <b-form-input required v-model="form.checkedBy"></b-form-input>
                            <b-form-input v-model="form.checkedBy"></b-form-input>
                            <b-input-group-append>
                            <b-button @click="searchSignatory('checked')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mt-3">
                        <strong>Approved By:</strong>
                        <b-input-group size="sm">
                            <b-form-input required v-model="form.approvedBy"></b-form-input>
                            <b-form-input v-model="form.approvedBy"></b-form-input>
                            <b-input-group-append>
                            <b-button variant="outline-success" @click="searchSignatory('approved')" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mt-3">
                        <strong>Received By:</strong>
                        <b-input-group size="sm">
                            <b-form-input required v-model="form.receivedBy"></b-form-input>
                            <b-form-input v-model="form.receivedBy"></b-form-input>
                            <b-input-group-append>
                            <b-button @click="searchSignatory('received')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>
                <br>
                <hr>
                <br>
                <div style ="display:none;" class="row mt-3" ref='up'>
                  <div class="col-sm-2">
                      <div class="form-group">
                      <label for="sel1">Month</label>
                      <select class="form-control form-control-sm" v-model="form.month">
                          <option v-for="month in months" :value="month" :key="month">{{month}}</option>
                      </select>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="form-group">
                      <label for="sel1">Year</label>
                      <select class="form-control form-control-sm" v-model="form.year">
                          <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                      </select>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="form-group">
                      <label for="sel1">Period</label>
                      <select class="form-control form-control-sm" v-model="form.period">
                          <option v-for="period in periods" :value="period" :key="period">{{ period }}</option>
                      </select>
                      </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-sm-3">
                      <strong>Date From:</strong>
                      <input required v-model="form.dateFrom" class="form-control form-control-sm" type="date" value="">
                  </div>
                  <div class="col-sm-3">
                      <strong>Date To:</strong>
                      <input required v-model="form.dateTo" class="form-control form-control-sm" type="date" value="">
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-sm-2">
                    <b-button type="submit" download="file.xlsx" size="sm"><i class="far fa-arrow-alt-circle-down"></i> &nbsp; Download Excel</b-button>
                  </div>
                </div>

                </div>
                
            </div>
            <search-signatory v-on:selectSign="setSign"></search-signatory>
          </form>
        </div>
      
    </div>

    
</template>

<script>

import searchsignatory from '../search/commonMasterList/Signatory.vue';
import moment from "moment";

export default {
  components: {
    AgGridVue,
    'search-signatory' : searchsignatory,
  },
 
  data() {
    return {
      form: new Form({
        dateFrom:'',
        dateTo:'',
        approvedBy: '',
        approvedByPos: '',
        approvedByID: '',
        checkedBy: '',
        checkedByPos: '',
        checkedByID: '',
        preparedBy: '',
        preparedByPos: '',
        preparedByID: '',
        receivedBy: '',
        receivedByPos: '',
        receivedByID: '',
        month: '',
        year:'',
        period:'',
      }),
    };
  },
  mounted(){
      
  },
  methods: {
    downloadExcel()
      {
        
      window.open(
          "api/DmpiBillingTransmittalReportExport?dateFrom=" + this.form.dateFrom + 
          "&dateTo=" + this.form.dateTo + "&approvedBy=" + this.form.approvedBy + "&approvedPos=" + this.form.approvedByPos
          + "&checkedBy=" + this.form.checkedBy + "&checkedPos=" + this.form.checkedByPosPos + "&preparedBy=" + this.form.preparedBy
          + "&preparedPos=" + this.form.preparedByPos + "&receivedBy=" + this.form.receivedBy + "&receivedPos=" + this.form.receivedByPos
      );
        
      },
    searchSignatory(wS)
      {
          $('#searchSignatory').modal('show');
          this.whichSignatory = wS;
      },
    setSign(value)
      {
        
          if(this.whichSignatory=='prepared'){
            this.form.preparedBy = value.name;
            this.form.preparedByPos = value.position;
            this.form.preparedByID = value.id;
          }else if(this.whichSignatory=='checked'){
            this.form.checkedBy = value.name;
            this.form.checkedByPos = value.position;
            this.form.checkedByID = value.id;
          }else if(this.whichSignatory=='approved'){
            this.form.approvedBy = value.name;
            this.form.approvedByPos = value.position;
            this.form.approvedByID = value.id;
          }else{ //prepared
            this.form.receivedBy = value.name;
            this.form.receivedByPos = value.position;
            this.form.receivedByID = value.id;
          }

      },
  }, //method end
 
  created() {

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
};
</script>
