<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="card">

                <div class="card-header">
                    <h3 class="card-title">DMPI SAR / Volume DAR</h3>
                </div>
 
                <div class="card-body">

                  <!-- start --> 
                  <!-- SAR HEADER  -->
                  <div class="row">
                    <div class="col col-3">
                      <label>Search entry (Ref ID):</label>
                      <b-input-group size="sm">
                          <b-form-input disabled v-model="form.refID"></b-form-input>
                          <b-input-group-append>
                            <b-button v-if="!form.refID" @click="searchDmpiSar()" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                            <b-button v-if="form.refID" @click="sarHeaderEntry()" variant="outline-success" size="sm"><i class="fa fa-pen" aria-hidden="true"></i></b-button>
                            <b-button v-if="!form.refID" @click="sarHeaderEntry()" variant="outline-success" size="sm"><i class="fa fa-plus" aria-hidden="true"></i></b-button>
                          </b-input-group-append>
                      </b-input-group>
                    </div>
                    <div class="col-3">
                      <label for="exampleInputEmail1">To Payment Of:</label>
                      <select disabled class="form-control form-control-sm" :required="true" v-model="form.locationID">
                          <option v-for="loc in (general.batchLocation)" :key="loc.LocationID" :value="loc.LocationID">{{loc.Location}}</option>
                      </select>
                    </div>
                    <div class="col-3">
                      <label for="exampleInputEmail1">SOA Number</label>
                      <input disabled
                          type="text"
                          class="form-control form-control-sm"
                          v-model="form.soaNumber"
                      />
                    </div>
                    <div class="col-sm-3">
                        <h2 v-if="form.status == 'active'"><b-badge class="float-right" variant="primary">{{this.form.status}}</b-badge></h2>
                        <h2 v-if="form.status == 'submitted'"><b-badge class="float-right" variant="success">{{this.form.status}}</b-badge></h2>
                        <h2 v-if="form.status == 'confirmed'"><b-badge class="float-right" variant="warning">{{this.form.status}}</b-badge></h2>
                        <h2 v-if="form.status == 'transmitted'"><b-badge class="float-right" variant="danger">{{this.form.status}}</b-badge></h2>
                    </div>

                  </div>

                  <div class="row mt-3">
                    <div class="col-3">
                      <label for="exampleInputEmail1">Period Covered From:</label>
                      <input disabled
                      type="date"
                      class="form-control form-control-sm mb-2"
                      placeholder="Search Rental..."
                      v-model="form.periodCoveredFrom"
                      />
                    </div>

                    <div class="col-3">
                      <label for="exampleInputEmail1">Period Covered To:</label>
                        <input disabled
                        type="date"
                        class="form-control form-control-sm mb-2"
                        placeholder="Search Rental..."
                        v-model="form.periodCoveredTo"
                        />
                    </div>

                    <div class="col-3">
                      <label for="exampleInputEmail1">SOA Date:</label>
                        <input disabled
                        type="date"
                        class="form-control form-control-sm mb-2"
                        placeholder="Search Rental..."
                        v-model="form.soaDate"
                        />
                    </div>

                    <div class="col-3">
                      <label for="exampleInputEmail1">Control Number</label>
                      <input disabled
                          type="text"
                          class="form-control form-control-sm"
                          v-model="form.controlNo"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">

                    <div class="col-sm-6">

                        <strong>Prepared By:</strong>
                        <b-form-input disabled size="sm" list="preparedBy" v-model="form.preparedBy"></b-form-input>
                        <datalist id="preparedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>

                    </div>

                    <div class="col-sm-6">

                        <strong>Verified and Checked By:</strong>
                        <b-form-input disabled size="sm" list="verifiedBy" v-model="form.verifiedBy"></b-form-input>
                        <datalist id="verifiedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>

                    </div>

                    <div class="col-sm-6">
 
                        <strong>Noted By:</strong>

                        <b-form-input disabled size="sm" list="notedBy" v-model="form.notedBy"></b-form-input>
                        <datalist id="notedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>
                    </div>

                    <div class="col-sm-6">

                      <strong>Approved By:</strong>
                      <b-form-input disabled size="sm" list="approvedBy" v-model="form.approvedBy"></b-form-input>

                      <datalist id="approvedBy">
                        <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                      </datalist>

                    </div>

                  </div>

                    <!-- END SAR HEADER  -->

                  <hr class="hr-1">

                  <div class="row">
                      <div class="col-12">
                        <b-button type="button" :disabled="(form.refID == '')" class="float-right" variant="success" @click="sarDetailModal('add')"><i class="far fa-plus-square"> Add new detail</i></b-button>
                        <b-button type="button" v-if="(this.general.selectedData.length==1)" class="float-right" variant="primary" @click="sarDetailModal('edit')"><i class="fa fa-pen"> Edit detail</i></b-button>
                        <b-button type="button" v-if="(this.general.selectedData.length>0)" class="float-right" variant="danger" @click="deleteSarDetail"><i class="fa fa-trash"> Delete selected</i></b-button>
                      </div>
                  </div>
 
                  <!-- DATA TABLE  -->
                  <div class="row mt-2">
                    <div class="col">
                      <ag-grid-vue
                        style="width: 100%; height: 200px;"
                        class="ag-theme-balham"
                        :columnDefs="columnDefs"
                        :rowData="general.filter"
                        @grid-ready="onGridReady"
                        rowSelection="multiple"
                        @selectionChanged="onChange"
                      ></ag-grid-vue>
                    </div>
                  </div>
                  <!-- END DATA TABLE  -->

                  <br>
                  <div class="row">
                      <div class="col-9">
                        <button :disabled="(form.status != 'active')" @click="submit()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Submit</button>
                        <button :disabled="(form.status != 'submitted')" @click="confirm()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Confirm</button>
                        <button :disabled="(form.status != 'confirmed')" @click="transmit()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Transmit</button>
                        <button :disabled="(form.status == 'active' || form.status =='-')" @click="reactivate_detail()" class="btn btn-warning"><i class="fas fa-redo"></i> &nbsp; Reactivate</button>
                      </div>
                      <div class="col-3">
                        <button type="button" @click="clearAll()" class="btn btn-success float-right"><i class="fas fa-backspace"></i> &nbsp;  Clear</button>
                      </div>
                  </div>
                  <div class="row margin-top-10"> 
                      <div class="col-12">
                          <button type="button" @click="printPdf()" class="btn btn-outline-info btn-sm"><i class="fas fa-print"></i> &nbsp; print pdf</button>
                      </div>
                  </div>

                    <!-- end -->

                </div>
            </div>
        </div>

    <!-- modal  -->
    <div class="modal modal-overflow fade" id="sarEntry" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title">Add new SAR</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <form @submit.prevent="">
            <div class="modal-body">

                <div class="row mt-3">
                  <div class="col-3">
                    <label for="">RefID</label>
                    <input disabled v-model="form.id" class="form-control form-control-sm" type="text" name="id">
                  </div>        
                  <div class="col-6">
                    <label for="exampleInputEmail1">To Payment Of:</label>
                    <select class="form-control form-control-sm" :required="true" v-model="form.locationID">
                        <option v-for="loc in (general.batchLocation)" :key="loc.LocationID" :value="loc.LocationID">{{loc.Location}}</option>
                    </select>
                  </div>
                  <div class="col-3">
                    <label for="exampleInputEmail1">Period Covered From:</label>
                    <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    placeholder="Search Rental..."
                    v-model="form.periodCoveredFrom" :class="{'is-invalid': form.errors.has('periodCoveredFrom')}"
                    />
                  </div>
                </div>

              <hr>
 
              <div class="row mt-3">

                <div class="col-3">
                  <label for="exampleInputEmail1">Period Covered To:</label>
                    <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    placeholder="Search Rental..."
                    v-model="form.periodCoveredTo" :class="{'is-invalid': form.errors.has('periodCoveredTo')}"
                    />
                </div>

                <div class="col-3">
                  <label for="exampleInputEmail1">SOA Date:</label>
                    <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    placeholder="Search Rental..."
                    v-model="form.soaDate" :class="{'is-invalid': form.errors.has('soaDate')}"
                    />
                </div>

                <div class="col-3">
                  <label for="exampleInputEmail1">Control Number</label>
                  <input
                      type="text"
                      class="form-control form-control-sm"
                      v-model="form.controlNo" :class="{'is-invalid': form.errors.has('controlNo')}"
                  />
                </div>

                 <div class="col-3">
                    <label>SOA Number:</label>
                    <i class="fas fa-check green" v-show="general.soaNumberCorrect==2" v-if="general.soaNumberCorrect==2"></i>
                    <b-badge v-show="general.soaNumberCorrect==1" v-if="general.soaNumberCorrect==1" pill variant="danger">Soa # exists</b-badge>
                    <input :class="{'is-invalid': form.errors.has('soaNumber')}" required v-model="form.soaNumber" class="form-control form-control-sm" type="text" @change="soaNumberCheck">
                 
                </div>
                
              </div>

              <hr>

                <div class="row mt-3">

                    <div class="col-sm-6">

                        <strong>Prepared By:</strong>
                        <b-form-input size="sm" list="preparedBy" v-model="form.preparedBy"  @keyup="sourceChangedPrepared" :class="{'is-invalid': form.errors.has('preparedBy')}"></b-form-input>
                        <input type="text" class="form-control form-control-sm" v-model="form.preparedByPos" :class="{'is-invalid': form.errors.has('preparedByPos')}"/>
                        <datalist id="preparedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>

                    </div>

                    <div class="col-sm-6">

                        <strong>Verified and Checked By:</strong>
                        <b-form-input size="sm" list="verifiedBy" v-model="form.verifiedBy" @keyup="sourceChangedVerified" :class="{'is-invalid': form.errors.has('verifiedBy')}"></b-form-input>
                        <input type="text" class="form-control form-control-sm" v-model="form.verifiedByPos" :class="{'is-invalid': form.errors.has('verifiedByPos')}"/>
                        <datalist id="verifiedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>
                        
                    </div>

                </div>

                <div class="row mt-3">
                    
                    <div class="col-sm-6">
                      
                        <strong>Noted By:</strong>

                        <b-form-input size="sm" list="notedBy" v-model="form.notedBy" @keyup="sourceChangedNoted" :class="{'is-invalid': form.errors.has('notedBy')}"></b-form-input>
                        <input type="text" class="form-control form-control-sm" v-model="form.notedByPos" :class="{'is-invalid': form.errors.has('notedByPos')}"/>
                        <datalist id="notedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>
                    </div>

                    <div class="col-sm-6">

                        <strong>Approved By:</strong>
                        <b-form-input size="sm" list="approvedBy" v-model="form.approvedBy" @keyup="sourceChangedApproved" :class="{'is-invalid': form.errors.has('approvedBy')}"></b-form-input>
                        <input type="text" class="form-control form-control-sm" v-model="form.approvedByPos" :class="{'is-invalid': form.errors.has('approvedByPos')}"/>
                        <datalist id="approvedBy">
                          <option v-for="signatory in general.signatories" :value="signatory.name" :key="signatory.id"></option>
                        </datalist>

                    </div>

                </div>

              <br>
                    
            </div>
            <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="far fa-window-close"></i> Close</button>
            <button v-if="!form.refID" @click="saveNewHeader()" type="button" class="btn btn-primary"><i class="far fa-save"></i> Create</button>
            <button v-if="form.refID" @click="updateHeader()" type="button" class="btn btn-primary"><i class="far fa-save"></i> Update</button>
            </div>
            </form>
        </div>
        </div>
    </div>
    <!-- end modal -->

    <!-- modal for per item  -->
    <div class="modal modal-overflow fade" id="sardetail" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h4 v-if="this.soaForm.refID != ''" class="modal-title">Update</h4>
            <h4 v-else class="modal-title">Add New</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <!-- payroll batch option  --> 

            <div class="row mt-3">
                <div class="col-6">
                    <b-form-checkbox @change="checkUncheckBatch" id="checkbox-1" v-model="general.checked">Link a batch from payroll</b-form-checkbox>
                </div>
            </div>
            <br>
            <!-- BATCH LINK FROM PAYROLL -->
            <div id="payrollbatch" class="row mt-3" v-if="general.checked">

                <div class="col-12">

                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Batch Information</h3>
                        </div>

                    <!-- /.card-header -->
                    <div class="card-body">

                      <div id="auto" class="row">
                          <div class="col-sm-3">
                              <div class="form-group">
                                  <label for="sel1">Month</label>
                                  <select class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('month')}" v-model="soaForm.month" v-on:change="getSoas()">
                                      <option v-for="month in months" :value="month" :key="month">{{month}}</option>
                                  </select>
                              </div>
                          </div>

                          <div class="col-sm-3">
                              <div class="form-group">
                                  <label for="sel1">Year</label>
                                  <select class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('year')}" v-model="soaForm.year" v-on:change="getSoas()">
                                      <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                                  </select>
                              </div>
                          </div>
                      
                          <div class="col-sm-3">
                              <div class="form-group">
                                  <label for="sel1">Period</label>
                                  <select class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('period')}" v-model="soaForm.period" v-on:change="getSoas()">
                                      <option v-for="period in periods" :value="period" :key="period">{{ period }}</option>
                                  </select>
                              </div>
                          </div>

                          <div class="col-sm-3">
                              <label>Batch Number:</label> <b-spinner v-show="general.isBatchLoading" class="batch_load" style="width: 1rem; height: 1rem;" label="Large Spinner" type="grow" variant="success"></b-spinner>
                              <b-badge v-show="!general.isBatchLoading" v-if="!general.batch.length" pill variant="danger">No batch found</b-badge>
                              <select required class="form-control form-control-sm" v-on:change="getBatchInfo()" v-model="soaForm.batchKey" :class="{'is-invalid': soaForm.errors.has('batchNumber')}">
                                  <option v-for="soa in general.batch" :value="soa.BID" :key="soa.BID">{{soa.BNo}}</option>
                              </select>
                          </div>
                          
                      </div>
                    </div>
                    <!-- /.card-body -->

                  </div>
                </div>
              </div>
            <!-- end payroll batch option  --> 

            <div id="manual" class="row">

              <div class="col-3">
                <div class="form-group">
                  <label for="sel1">Select a DayType</label>
                  <select class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('batchDaytypeID')}" v-model="soaForm.batchDaytypeID" @change="getSarRate()">
                      <option v-for="day in general.dayTypeData" :value="day.id">{{day.day}}</option>
                  </select>
                </div>
              </div>

              <div class="col-3">
                <label for="date">Date Performed</label>
                <input type="date" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('datePerformed')}" v-model="soaForm.datePerformed"/>
              </div>

              <div class="col-3">
                <label for="refence">Service Number</label>
                <input type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('serviceNumber')}" v-model="soaForm.serviceNumber" />
              </div>

              <div class="col-3">
                <label for="exampleInputEmail1">Activity / Operation:</label>
                <select class="form-control form-control-sm" :required="true" :class="{'is-invalid': soaForm.errors.has('activityID')}" v-model="soaForm.activityID" @change="activityChange">
                    <option v-for="activity in (general.SarActivity)" :key="activity.SAID" :value="activity.SAID">{{activity.activity}}</option>
                </select>
              </div>
            </div>

            <div class="row">

              <div class="col-3">
                <label for="refence">PO Number</label>
                <input type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('poNumber')}" v-model="soaForm.poNumber"/>
              </div>

              <div class="col-3">
                <label for="exampleInputEmail1">GL Account:</label>
                <select class="form-control form-control-sm" :required="true" :class="{'is-invalid': soaForm.errors.has('glID')}" v-model="soaForm.glID">
                    <option v-for="gl in (general.glSar)" :key="gl.id" :value="gl.id">{{gl.gl}}</option>
                </select>
              </div>

              <div class="col-3">
                <label for="exampleInputEmail1">Cost Center</label>
                <input type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('costCenter')}" v-model="soaForm.costCenter"/>
              </div>

              <div class="col-3">
                <label for="exampleInputEmail1">Qty</label>
                <input type="number" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('qty')}" v-model="soaForm.qty" style="text-align:right;" @change="getSarRate"/>
              </div>

            </div>

            <div class="row mt-3">

              <div class="col-3">
                <label>Unit:</label>
                <select class="form-control form-control-sm" :required="true" :class="{'is-invalid': soaForm.errors.has('unit')}" v-model="soaForm.unit" @change="getSarRate">
                    <option v-for="unit in (general.units)" :key="unit.unit" :value="unit.unit">{{unit.unit}}</option>
                </select>
              </div>

              <div class="col-3">
                <label for="exampleInputEmail1">Rate</label>
                <input disabled type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('rate')}" v-model="soaForm.rate" style="text-align:right;" />
              </div>

              <div class="col-3">
              <label for="exampleInputEmail1">Amount</label>
              <input disabled type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('amount')}" v-model="soaForm.amount" style="text-align:right;" />
              </div>

              <div class="col-3">
              <label for="exampleInputEmail1">Entry Sheet Number</label>
              <input type="text" class="form-control form-control-sm" :class="{'is-invalid': soaForm.errors.has('entrySheetNumber')}" v-model="soaForm.entrySheetNumber" />
              </div>

            </div>

          </div>

          <div class="modal-footer">
            <div>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="far fa-window-close"></i> Close</button>
            </div>

            <button v-if="this.soaForm.refID != ''" @click="updateDetail" type="button" class="btn btn-success"><i class="fas fa-save"></i> &nbsp;  Update</button>
            <button v-else @click="saveNewDetail" type="button" class="btn btn-success"><i class="fas fa-save"></i> &nbsp;  Save</button>
            
          </div>

        </div>
      </div>
    </div>
    <!-- end modal for per item  -->

    <search-signatory v-on:selectSign="setSign"></search-signatory>
    <search-dmpi-sar v-on:selectSoa="setSoa" :key="this.general.soaComponentKey"></search-dmpi-sar>

      <div class="modal fade" id="reactivate_details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Reactivation Detail</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                 <div class="input-group">
                    <div class="col-12">
                      <label>Reason of Reactivation</label>
                      <textarea class="form-control" :class="{'is-invalid': reactivateForm.errors.has('reasonofreactivation')}" v-model="reactivateForm.reasonofreactivation" aria-label="With textarea"></textarea>
                    </div>
                  </div>

            </div>
            <div class="modal-footer">
              <button type="button"  @click="reactivate()" class="btn btn-warning"><i class="fas fa-redo"></i> &nbsp;Reactivate</button>
            </div>
          </div>
        </div>
      </div>

    </div>


</template>

<script>

import searchsignatory from '../search/commonMasterList/Signatory.vue';
import searchdmpisar from '../search/dmpi/sar/SearchDmpiSar.vue';

import moment from "moment";

export default {
  components: {
    AgGridVue,
    'search-signatory' : searchsignatory,
    'search-dmpi-sar' : searchdmpisar
  },
  data() {
    return {

      general: new Form({
        batchLocation: {},
        SarActivity: {},
        glSar: {},
        whichSignatory: "",
        signatories: "",
        batch: {},
        isBatchLoading: false,
        soaNumberCorrect: 0, //0-loading, 1=error, 2=correct
        header:{},
        soaComponentKey: "",
        units: {},
        checked: false,
        dayTypeData: [
          {id: 1, day: 'REGULAR DAY'},
          {id: 3, day: 'SUNDAY/ REST DAY'},
          {id: 4, day: 'SPECIAL HOLIDAY'},
          {id: 5, day: 'SPECIAL HOLIDAY ON REST DAY'},
          {id: 6, day: 'REGULAR HOLIDAY'},
          {id: 6, day: 'REGULAR HOLIDAY ON REST DAY'}
        ],
        filter: null,
        selectedData: {},
        IdToDelete: [],
      }),

      form: new Form({
        refID: "",
        locationID: "", 
        toPaymentOf: "",
        periodCoveredFrom: "",
        periodCoveredTo: "",
        soaDate: "",
        controlNo: "",
        preparedBy: "",
        verifiedBy: "",
        notedBy: "",
        approvedBy: "", 
        preparedByPos: "",
        verifiedByPos: "",
        notedByPos: "",
        approvedByPos: "",
        test:"",
        soaNumber: "",
        sarData: {},
        isPayrollBatched: false,
        status: '-'
      }),

      soaForm: new Form({
        hdrid: "", //form.refID
        refID: "",
        datePerformed: "",
        serviceNumber: "",
        activityID: "",
        poNumber: "",
        glAccount: "",
        costCenter: "",
        qty: "",
        unit: "",
        rate: "",
        rateID: "",
        amount: "",
        entrySheetNumber: "",
        details:{},
        glID: "",
        batchDaytype: "",
        batchDaytypeID: "",
        month: "",
        year: "",
        period: "",
        batchNumber: "",
        batchKey: "",
        batchInfo: {},
        filter: null,
        activity: "",
        gl: "",
      }),

       reactivateForm: new Form({
          reasonofreactivation: ""
      })

    };
  },
  mounted(){
      this.getBatchLocation();
      this.getSarRateActivity();
      this.getGl();
      this.getSignatories();
      this.getUnitsFromSarRate();
  },
  methods: {
    onChange: function(e) {
      this.general.IdToDelete = []
      this.form.applied_amount = 0;
      this.form.filter = [];
      const selectedRows = this.gridApi.getSelectedNodes();
      console.log('lenght', selectedRows.length)
      this.general.selectedData = selectedRows.map(node => node.data);
      const selectedDataStringPresentation = this.general.selectedData.map(
        node =>
          this.general.IdToDelete.push(node.id)
      );

      const push = this.general.selectedData.map(node => this.form.filter.push(node));
      console.log(this.general.IdToDelete)
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    getBatchLocation()
    {
      axios.get("api/dmpiSarGetLocation/")
      .then(({ data }) => {
          this.general.batchLocation = data;
      });
    },
    getSarRateActivity()
    {
      axios
        .get("api/dmpiSarGetActivity/")
        .then(({ data }) => {
          
            this.general.SarActivity = data;
        });
    },
    getGl()
    {
      axios.post("api/getSelectedGl", { type: 'SAR'}).then(({ data }) => {
        this.general.glSar = data;
      });
    },
    sarHeaderEntry()
    {
      $('#sarEntry').modal('show');
    },

    reactivate_detail()
    {
      $('#reactivate_details').modal('show');
    },

    searchSignatory(wS)
    {
        $('#searchSignatory').modal('show');
        this.general.whichSignatory = wS;
    },
    setSign(value)
    {

      if (this.general.whichSignatory == 'prepared'){
          this.form.preparedBy = value.name
          this.form.preparedByPos = value.position
      }else if(this.general.whichSignatory == 'verified'){
          this.form.verifiedBy = value.name
          this.form.verifiedByPos = value.position
      }else if(this.general.whichSignatory == 'noted'){
          this.form.notedBy = value.name
          this.form.notedByPos = value.position
      }else if(this.general.whichSignatory == 'approved'){
          this.form.approvedBy = value.name
          this.form.approvedByPos = value.position
      }

    },
    saveNewHeader()
    {
      this.$Progress.start();
      if (this.general.soaNumberCorrect==2){

        this.form.post("api/dmpiSar")
        .then(({ data }) => {

          toast.fire({
              icon: 'success',
              title: 'data successfully saved.'
          })
          
          this.getHeaderDetail(data);
          this.$Progress.finish();
          $('#sarEntry').modal('hide');

        }).catch(({err}) => {
          
          toast.fire({
              icon: 'error',
              title: 'Something went wrong'
          })
          this.$Progress.fail();
          console.log(err)
        });
      }else{
        toast.fire({
              icon: 'error',
              title: 'Check SOA Number'
          })
        this.$Progress.fail();
      }
    },
    updateHeader(){

      this.$Progress.start();
      this.form.post("api/updateHeader")
      .then(({data})=>{

        this.$Progress.finish();
        toast.fire({
            icon: 'success',
            title: 'data sucessfully updated.'
        })
        
      })
      .catch(({error}) =>{

        toast.fire({
            icon: 'error',
            title: 'Something went wrong'
        })
        this.$Progress.fail();
        console.log(error)

      })
    },
    saveNewDetail(){
      
      this.$Progress.start();

      this.soaForm.hdrid = this.form.refID

      this.soaForm.post("api/saveDetail")
      .then(({ data }) => {

        toast.fire({
            icon: 'success',
            title: 'data successfully saved.'
        }) 
        
        console.log('success', data)
        this.soaForm.refID = data
        this.$Progress.finish();
        this.getSarDetails(this.form.refID)
        $('#sardetail').modal('hide');

      }).catch(({err}) => {
        
        toast.fire({
            icon: 'error',
            title: 'Something went wrong'
        })
        this.$Progress.fail();
        console.log(err)
      });
        
    },
    updateDetail(){

      console.log('dtlid',this.soaForm.refID)
      this.$Progress.start();

      this.soaForm.hdrid = this.form.refID

      this.soaForm.put("api/dmpiSar/"+this.soaForm.refID)
      .then(({ data }) => {

        toast.fire({
            icon: 'success',
            title: 'data successfully saved.'
        }) 
        
        this.soaForm.refID = data
        this.$Progress.finish();
        $('#sardetail').modal('hide');

        this.getSarDetails(this.form.refID);

      }).catch(({err}) => {
        
        toast.fire({
            icon: 'error',
            title: 'Something went wrong'
        })
        this.$Progress.fail();
        console.log(err)
      });
    },
    getSignatories(){
      axios({method: 'GET', url: '/api/billingsignatoryGetForSearch'}).then(({ data }) => {
        this.general.signatories = data
      })
    },
    getSoas()
    {
      this.general.isBatchLoading = true;

      axios.get('/api/dmpidargetbatch', {params: {month: this.soaForm.month, year: this.soaForm.year, period: this.soaForm.period, isVolume: 1}})
      .then(({ data }) => {
          this.general.batch = data
          this.general.isBatchLoading = false;
      })
      .catch((err)=>{
          this.general.isBatchLoading = true;
      })
    },
    getBatchInfo()
    {
      
      this.general.isBatchLoading = true;
      // this.form.soaNumber = ""
      axios.get('/api/getBatchInfo', {params: {id: this.soaForm.batchKey}})
      .then(({ data }) => {
        this.soaForm.batchInfo = data
        this.soaForm.batchNumber = data[0]['BNo']
        this.soaForm.batchDaytype = this.soaForm.batchInfo[0]['DayType']
        this.soaForm.batchDaytypeID = this.soaForm.batchInfo[0]['DayTypeID_Link']
        // this.form.soaNumber = data[0]['Code_Location'] + data[0]['Code_Date'] + data[0]['Code_Series']

        this.general.isBatchLoading = false;
        // this.soaNumberCheck(); 
        
      })
      .catch((err)=>{
        this.general.isBatchLoading = true;
        console.log(err)
      })
        
    },
    getHeaderDetail(id){

      this.form.refID = id

      axios.post('/api/getHeaderDetail', {id: id})
      .then(({data}) => {
        console.log(data)
        this.general.header = data['hdr'];
        this.form.details = data['dtl'];
      })
      .catch(({error}) => {
        console.log(error)
      })

    },
    soaNumberCheck() {
                
        if (this.form.soaNumber.trim() != ""){
            axios.get('/api/checkifSoaExists', {params: {soaNumber: this.form.soaNumber, id: this.form.refID, type: "SAR"}})
            .then(({ data }) => {
                if(data == true){
                    this.general.soaNumberCorrect = 1;
                }else{
                    this.general.soaNumberCorrect = 2;
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            this.general.soaNumberCorrect = 0;
        }

    },
    sourceChangedPrepared: _.debounce(function(e){

      axios.get('/api/getPosition', {params: {name: this.form.preparedBy}})
        .then(({data}) => {
          this.form.preparedByPos = data[0]['position'];
        })
        .catch((err)=>{
          console.log(err)
        })
      
    }, 1000),
    sourceChangedVerified: _.debounce(function(e){
      
      axios.get('/api/getPosition', {params: {name: this.form.verifiedBy}})
        .then(({data}) => {
          this.form.verifiedByPos = data[0]['position'];
        })
        .catch((err)=>{
          console.log(err)
        })
      
    }, 1000),
    sourceChangedNoted: _.debounce(function(e){
      
      axios.get('/api/getPosition', {params: {name: this.form.notedBy}})
        .then(({data}) => {
          this.form.notedByPos = data[0]['position'];
        })
        .catch((err)=>{
          console.log(err)
        })
      
    }, 1000),
    sourceChangedApproved: _.debounce(function(e){
      
      axios.get('/api/getPosition', {params: {name: this.form.approvedBy}})
        .then(({data}) => {
          this.form.approvedByPos = data[0]['position'];
        })
        .catch((err)=>{
          console.log(err)
        })
      
    }, 1000),
    getSarRate(){
      
      this.soaForm.post('api/getRateSar')
      .then(({data}) => {
          this.soaForm.rate = data[0]['rate']
          this.soaForm.rateID = data[0]['VRALID']

          if(this.soaForm.qty != ''){
            this.soaForm.amount = (this.soaForm.rate * this.soaForm.qty).toFixed(3);
          }
      })
      .catch(({error}) => {
        console.log(error)
      })

    },
    setSoa(value)
    {
        console.log(value)
        this.form.refID = value.id;
        this.provideDataForSelectedSoa(value);
        this.general.soaComponentKey += 1;
    },
    provideDataForSelectedSoa(hdr)
    {
      // set the header
      this.form.locationID = hdr.locationID
      this.form.periodCoveredFrom = hdr.periodCoveredFrom
      this.form.periodCoveredTo = hdr.periodCoveredTo
      this.form.soaDate = hdr.soaDate
      this.form.controlNo = hdr.controlNo
      this.form.preparedBy = hdr.preparedBy
      this.form.verifiedBy = hdr.verifiedBy
      this.form.notedBy = hdr.notedBy
      this.form.approvedBy = hdr.approvedBy
      this.form.preparedByPos = hdr.approvedByPosition
      this.form.verifiedByPos = hdr.verifiedByPosition
      this.form.notedByPos = hdr.notedByPosition
      this.form.approvedByPos = hdr.approvedByPosition
      this.form.soaNumber = hdr.soaNumber
      this.form.status = hdr.status

      // get sar details 
      this.getSarDetails(hdr.id)

    },
    getSarDetails(id){
      console.log('hdr',id)
      axios.post("api/getSarDtl/", {refID: id})
      .then(({ data }) => {
        this.general.filter = data;
      });
    }, 
    getUnitsFromSarRate(){
      axios.get('api/getUnitsFromSarRate').
      then(({data}) => {
        this.general.units = data;
        console.log(data)
      })
      .catch(({error}) => {
        console.log(error)
      })
    },
    getLocationName(loc_ID){

      axios.post('api/getLocationName', {loc: loc_ID})
      .then(({data}) => {
        this.form.location = data
      })
      .catch(({error}) => {
        console.log(error)
      })
    },
    searchDmpiSar(){
      $('#searchDmpiSar').modal('show');
    },
    deleteSarHeader(){
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
            this.form.delete('api/billingsignatory/'+id).then(() => {
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
  checkUncheckBatch(){
    
    // if (this.checked){
      
    //   if(this.form.batchInfo[0]['DayTypeID_Link']){
    //     this.soaForm.batchDaytypeID = this.form.batchInfo[0]['DayTypeID_Link']
        
    //   }
    // }
    this.getSarRate
  },
  clearAll(){
    this.general.reset();
    this.soaForm.reset();
    this.form.reset();
    
    this.getBatchLocation();
    this.getSarRateActivity();
    this.getGl();
    this.getSignatories();
    this.getUnitsFromSarRate();
  },
  activityChange(){
    
    axios.post('api/getSelectedActivity', {id: this.soaForm.activityID})
      .then(({data}) => {
        this.soaForm.activity = data[0]['SubActivity'];
      })
      .catch(({error}) => {
        console.log(error)
      })
    
    this.getSarRate
  },
  sarDetailModal(editOrDelete){ 
    if(this.form.refID != ""){

      if(editOrDelete=="add"){
        $('#sardetail').modal('show');
        this.soaForm.reset();
        this.general.checked = false;
      }else if(editOrDelete=="edit"){
        console.log(this.general.selectedData[0])
        this.soaForm.fill(this.general.selectedData[0])
        this.soaForm.refID = this.general.selectedData[0].id
        this.soaForm.hdrid = this.general.selectedData[0].hdr_id
        this.soaForm.rateID = this.general.selectedData[0].rate_id

        if (this.general.selectedData[0].batchID){
          this.general.checked = true;
          this.soaForm.month = (this.general.selectedData[0].pmy).substr((this.general.selectedData[0].pmy).length - 2);
          this.soaForm.year = (this.general.selectedData[0].pmy).substring(0,4);
          this.getSoas()
          this.soaForm.batchKey = this.general.selectedData[0].batchID
          this.soaForm.batchNumber = this.general.selectedData[0].batchNo
        }else{
          this.general.checked = false;
        }
        
        // pmy: (...)
        $('#sardetail').modal('show');
      }
      
    }
  },
  deleteSarDetail(){
    console.log('ids to delete', this.general.IdToDelete)
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
          axios.get('/api/deleteSarDetail', {params: {ids: this.general.IdToDelete}})
          .then((res) => {
                  swal.fire(
                  'Deleted!',
                  'Data has been deleted.',
                  'success'
                  )
              console.log('res', res)
              this.getSarDetails(this.form.refID);

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
  submit()
  {
      this.$Progress.start();
      console.log(this.form.refId)
      this.form.post('/api/dmpiSarSubmit')
      .then(({ data }) => {
          this.form.status = data;
          console.log
          toast.fire({
                  icon: 'success',
                  title: 'Successfully submitted'
              })
              this.$Progress.finish();
      })
      .catch((err)=>{
          toast.fire({
              icon: 'error',
              title: 'Something went wrong'
          })
          this.$Progress.fail();
      })

  },
  confirm()
  {
      this.$Progress.start();
      console.log(this.form.refId)
      this.form.post('/api/dmpiSarConfirm')
      .then(({ data }) => {
          this.form.status = data;
          console.log
          toast.fire({
                  icon: 'success',
                  title: 'Successfully confirmed'
              })
              this.$Progress.finish();
      })
      .catch((err)=>{
          toast.fire({
              icon: 'error',
              title: 'Something went wrong'
          })
          this.$Progress.fail();
      })

  },
  transmit()
  {

      this.$Progress.start();
      console.log(this.form.refId)
      this.form.post('/api/dmpiSarTransmit')
      .then(({ data }) => {
          this.form.status = data;
          console.log
          toast.fire({
                  icon: 'success',
                  title: 'Successfully transmitted'
              })
              this.$Progress.finish();
      })
      .catch((err)=>{
          toast.fire({
              icon: 'error',
              title: 'Something went wrong'
          })
          this.$Progress.fail();
      })

  },
  reactivate()
  {

      this.$Progress.start();
      this.reactivateForm.refID = this.form.refID;
      this.reactivateForm.post('/api/dmpiSarReactivate')
      .then(({ data }) => {
          this.form.status = data;
          toast.fire({
                  icon: 'success',
                  title: 'Successfully reactivated'
              })
            this.soaForm.refID = data
            this.$Progress.finish();
            this.getSarDetails(this.form.refID)
            $('#reactivate_details').modal('hide');
               
      })
      .catch((err)=>{
          toast.fire({
              icon: 'error',
              title: 'Something went wrong'
          })
          this.$Progress.fail();
      })
  },

  }, //method end
 
  created() {

    // data grid 
    this.columnDefs = [
      {
        headerName: "Date Performed",
        field: "datePerformed",
        resizable: true,
        width: 170,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Service Number",
        field: "serviceNumber",
        resizable: true,
        width: 170
      },
      {
        headerName: "Activity",
        field: "activity",
        resizable: true,
        width: 170
      },
      {
        headerName: "PO Number",
        field: "poNumber",
        resizable: true,
        width: 170
      },
      {
        headerName: "GL Account",
        field: "gl",
        resizable: true,
        width: 170
      },
      {
        headerName: "Cost Center",
        field: "costCenter",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      },
      {
        headerName: "Quantity",
        field: "qty",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      },
      {
        headerName: "Unit",
        field: "unit",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" }
      },
      {
        headerName: "Rate",
        field: "rate",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      },
      {
        headerName: "Amount",
        field: "amount",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      },
      {
        headerName: "Entry sheet number",
        field: "entrySheetNumber",
        resizable: true,
        width: 170,
        cellStyle: { textAlign: "center" },
        valueFormatter: this.$root.currencyFormatter
      }
    ];
    this.general.filter = [];
    // end data grid 

    var d = new Date();
    this.soaForm.month = d.getMonth();
    this.soaForm.year = d.getFullYear();
    
    var day = d.getDate();
    if(day < 16){
        this.soaForm.period = 1;
    }else{
        this.soaForm.period = 2;
    }

    this.getSoas()

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
