<template>
    <div class="card full-width" id="app">

        <div class="card-header">
            <h3 class="card-title">DMPI DAR</h3>
        </div>
 
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body" ref='content'>
                                <form @submit.prevent="">
                                <div class="row">
                                    <b-form-checkbox
                                        id="checkbox-1"
                                        v-model="form.isClubhouse"
                                        name="checkbox-1"
                                        value="1"
                                        unchecked-value="0">is Clubhouse
                                    </b-form-checkbox> 
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <strong>Search entry (Ref ID):</strong>
                                        <b-input-group class="mt-3" size="sm">
                                            <b-form-input disabled v-model="form.refId"></b-form-input>
                                            <b-input-group-append>
                                            <b-button @click="searchDmpiDar()" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </div>
                                    <div class="col-sm-6">
                                        <h2 v-if="form.status == 'active'"><b-badge class="float-right" variant="primary">{{this.form.status}}</b-badge></h2>
                                        <h2 v-if="form.status == 'submitted'"><b-badge class="float-right" variant="success">{{this.form.status}}</b-badge></h2>
                                        <h2 v-if="form.status == 'confirmed'"><b-badge class="float-right" variant="warning">{{this.form.status}}</b-badge></h2>
                                        <h2 v-if="form.status == 'transmitted'"><b-badge class="float-right" variant="danger">{{this.form.status}}</b-badge></h2>
                                    </div>
                                </div>
                                <hr>
                                <div id="errors" v-for="(warning) in form.allWarnings" class="callout cust-pad" :class="[warning.type=='error' ? 'callout-danger' : 'callout-warning']">
                                    <h6 :class="[warning.type == 'error' ? 'red' : 'orange']"><i class="icon fas fa-exclamation-triangle"></i> {{warning.error}}</h6>
                                    <div><h6>{{warning.description}}</h6></div>
                                </div>

                                    <div class="row" ref='up'>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                            <label for="sel1">Month</label>
                                            <select :disabled="(form.status != 'active' && form.status != '-')" class="form-control form-control-sm" v-model="form.month" v-on:change="getSoas()">
                                                <option v-for="month in months" :value="month" :key="month">{{month}}</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                            <label for="sel1">Year</label>
                                            <select :disabled="(form.status != 'active' && form.status != '-')" class="form-control form-control-sm" v-model="form.year" v-on:change="getSoas()">
                                                <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                            <label for="sel1">Period</label>
                                            <select :disabled="(form.status != 'active' && form.status != '-')" class="form-control form-control-sm" v-model="form.period" v-on:change="getSoas()">
                                                <option v-for="period in periods" :value="period" :key="period">{{ period }}</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <strong>SOA Date:</strong>
                                            <input :disabled="(form.status != 'active' && form.status != '-')" required v-model="form.soaDate" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Batch Number:</strong> <b-spinner v-show="isBatchLoading" class="batch_load" style="width: 1rem; height: 1rem;" label="Large Spinner" type="grow" variant="success"></b-spinner>
                                            <b-badge v-show="!isBatchLoading" v-if="!batch.length" pill variant="danger">No batch for selected period</b-badge>
                                            <select required class="form-control form-control-sm" :disabled = "(isBatchLoading) || (form.status != 'active' && form.status != '-')" v-on:change="getBatchInfo()" v-model="form.batchKey">
                                                <option v-for="soa in batch" :value="soa.BID" :key="soa.BID">{{soa.BNo}}</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>SOA Number:</strong>
                                            <i class="fas fa-check green" v-show="soaNumberCorrect==2" v-if="soaNumberCorrect==2"></i>
                                            <b-badge v-show="soaNumberCorrect==1" v-if="soaNumberCorrect==1" pill variant="danger">Soa number already exists</b-badge>
                                            <input disabled required v-model="form.soaNumber" class="form-control form-control-sm" type="text" value="">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <strong>Date Transmitted to Operation:</strong>
                                            <input v-model="form.dateTransmittedToOperation" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Date Signed by Supervisor:</strong>
                                            <input v-model="form.dateSignedBySupervisor" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Date Signed by Manager:</strong>
                                            <input v-model="form.dateSignedByManager" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Date Received by Data Controller:</strong>
                                            <input v-model="form.dateReceivedbyDataController" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Date Received by Billing Clerk:</strong>
                                            <input v-model="form.dateReceivedbyBillingClerk" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Date Received by DMPI Account:</strong>
                                            <input v-model="form.dateReceivedbyDmpiAccount" class="form-control form-control-sm" id="soaDate" type="date" value="">
                                        </div>
                                        <div class="col-sm-3">
                                            <strong>Transmittal Number:</strong>
                                            <input v-model="form.transmittalNumber" class="form-control form-control-sm" type="text" value="">
                                        </div>
                                    </div>
                                    <hr>
                                    <br>
                                    <span class="lb-dar">Data and Comparison</span>
                                    <div class="dmpi-dar-upload">
                                        <div class="row width-100"><h5><b-badge pill variant="info">Selected batch data</b-badge></h5></div>
                                        <div class="row preview-uploaded-dar width-100">
                                            
                                            <div class=" table-responsive">
                                                <table class="table table-sm table-upload-dar">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">BNo</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Day Type</th>
                                                            <th scope="col">Location</th>
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                            <th scope="col">Batched By</th>
                                                            <th scope="col">Encoded By</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(batch) in form.batchInfo">
                                                            <td>{{batch.BNo}}</td>
                                                            <td>{{batch.xDate}}</td>
                                                            <td>{{batch.DayType}}</td>
                                                            <td>{{batch.Location}}</td>
                                                            <td>{{batch.THW_ST}}</td>
                                                            <td>{{batch.THW_OT}}</td>
                                                            <td>{{batch.THW_ND}}</td>
                                                            <td>{{batch.THW_NDOT}}</td>
                                                            <td>{{batch.BatchedBy}}</td>
                                                            <td>{{batch.EncodedBy}}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <strong>Prepared By:</strong>
                                            <b-input-group class="mt-3" size="sm">
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" required v-model="form.preparedBy"></b-form-input>
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" v-model="form.preparedByPos"></b-form-input>
                                                <b-input-group-append>
                                                <b-button :disabled="(form.status != 'active' && form.status != '-')" @click="searchSignatory('prepared')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                                </b-input-group-append>
                                            </b-input-group>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <strong>Confirmed By:</strong>
                                            <b-input-group class="mt-3" size="sm">
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" required v-model="form.confirmedBy"></b-form-input>
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" v-model="form.confirmedByPos"></b-form-input>
                                                <b-input-group-append>
                                                <b-button :disabled="(form.status != 'active' && form.status != '-')" @click="searchSignatory('confirmed')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                                </b-input-group-append>
                                            </b-input-group>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <strong>Approved By:</strong>
                                            <b-input-group class="mt-3" size="sm">
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" required v-model="form.approvedBy"></b-form-input>
                                                <b-form-input :disabled="(form.status != 'active' && form.status != '-')" v-model="form.approvedByPos"></b-form-input>
                                                <b-input-group-append>
                                                <b-button :disabled="(form.status != 'active' && form.status != '-')" @click="searchSignatory('approved')" variant="outline-success" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                                </b-input-group-append>
                                            </b-input-group>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <strong>File:</strong>
                                            <b-form-group>
                                                <b-form-file :disabled="(form.status != 'active' && form.status != '-')" id="file-small" size="sm" v-model="form.fileupload" v-on:change="onFileChange" ref="file-input"></b-form-file>
                                                <b-button :disabled="(form.status != 'active' && form.status != '-')" @click="clearFiles" size="sm" variant="outline-danger"><i class="far fa-minus-square"></i> remove selected file</b-button>
                                            </b-form-group>
                                        </div>
                                        <div class="col-sm-1 mg-top-23">
                                            <b-spinner v-show="form.isUploadingLoading" class="batch_load" style="width: 1rem; height: 1rem;" label="Large Spinner" type="grow" variant="success"></b-spinner>    
                                        </div>
                                    </div>
                                    <span class="lb-dar">Data and Comparison</span>
                                    <div class="dmpi-dar-upload">
                                        <div class="row width-100"><h5><b-badge pill variant="info">Uploaded DMPI DAR details</b-badge></h5></div>
                                        <div class="row preview-uploaded-dar width-100">
                                            
                                            <div class=" table-responsive">
                                                <table class="table table-sm table-upload-dar dmpi-dar-uploaded" id="dtl">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            
                                                            <th scope="col" class="bg-bl-tr">RD</th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                          

                                                            <th scope="col" class="bg-bl-tr">SHOL</th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>

                                                           
                                                            <th scope="col" class="bg-bl-tr">SHRD</th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                           
                                                            <th scope="col" class="bg-bl-tr">RHOL</th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                           
                                                            <th scope="col" class="bg-bl-tr">RHRD</th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>
                                                            <th scope="col" class="no-border"></th>

                                                            <th scope="col" class="bg-bl-tr">Total</th>
                                                            <th scope="col" class="no-border"></th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Activity</th>
                                                            <th scope="col">Field</th>
                                                            <th scope="col">Accomplished</th>
                                                            <th scope="col">GL</th>
                                                            <th scope="col">CC</th>
                                                            
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                          
 
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>

                                                           
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                           
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                           
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                            
                                                            <th scope="col">ST</th>
                                                            <th scope="col">OT</th>
                                                            <th scope="col">ND</th>
                                                            <th scope="col">NDOT</th>
                                                            <th scope="col">Total Amt</th>
                                                            <th scope="col">HC</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(dtl, key) in form.darUploadedDtl" v-bind:key="dtl.id">
                                                            <td>{{++key}}</td>
                                                            <td>{{dtl.activity}}</td>
                                                            <td>{{dtl.field}}</td>
                                                            <td>{{dtl.accomplished}}</td>
                                                            <td>{{dtl.gl}}</td>
                                                            <td>{{dtl.cc}}</td>
                                                            
                                                            <td>{{dtl.rdst}}</td>
                                                            <td>{{dtl.rdot}}</td>
                                                            <td>{{dtl.rdnd}}</td>
                                                            <td>{{dtl.rdndot}}</td>

                                                            <td>{{dtl.sholst}}</td>
                                                            <td>{{dtl.sholot}}</td>
                                                            <td>{{dtl.sholnd}}</td>
                                                            <td>{{dtl.sholndot}}</td>

                                                            <td>{{dtl.shrdst}}</td>
                                                            <td>{{dtl.shrdot}}</td>
                                                            <td>{{dtl.shrdnd}}</td>
                                                            <td>{{dtl.shrdndot}}</td>

                                                            <td>{{dtl.rholst}}</td>
                                                            <td>{{dtl.rholot}}</td>
                                                            <td>{{dtl.rholnd}}</td>
                                                            <td>{{dtl.rholndot}}</td>

                                                            <td>{{dtl.rhrdst}}</td>
                                                            <td>{{dtl.rhrdot}}</td>
                                                            <td>{{dtl.rhrdnd}}</td>
                                                            <td>{{dtl.rhrdndot}}</td>

                                                            <td><i v-show="dtl.totalst != dtl.c_totalst" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Total Amt did not match the computation"></i> {{dtl.totalst}}</td>
                                                            <td><i v-show="dtl.totalot != dtl.c_totalot" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Total Amt did not match the computation"> {{dtl.totalot}}</i></td>
                                                            <td><i v-show="dtl.totalnd != dtl.c_totalnd" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Total Amt did not match the computation"></i> {{dtl.totalnd}}</td>
                                                            <td><i v-show="dtl.totalndot != dtl.c_totalndot" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Total Amt did not match the computation"></i> {{dtl.totalndot}}</td>
                                                            <td><i v-show="dtl.totalAmt != dtl.c_totalAmt" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Total Amt did not match the computation"></i> {{dtl.totalAmt}}</td>
                                                        
                                                            <td>{{dtl.headCount}}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="row width-100"><h5><b-badge pill variant="info">Uploaded DMPI DAR rates</b-badge></h5></div>
                                        <div class="row width-100 preview-uploaded-dar rate-table">
                                        <div class=" table-responsive">
                                                <table class="table table-sm table-upload-dar" id="rate">
                                                    <thead>
                                                        <tr>
                                                            <th>activity</th>
                                                            <th>GL</th>
                                                            <th>CC</th>
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
                                                        <tr v-for="(rate) in form.darUploadedRates" v-bind:key="rate.id">
                                                            <td><span>{{rate.activity}}</span><span class="fl-right"><i v-show="rate.checking !='true'" class="fas fa-check green" data-toggle="tooltip" data-placement="right" title="Rate matched in rate masterfile"></i><i v-show="rate.checking=='false'" class="fas fa-times red" data-toggle="tooltip" data-placement="right" title="Rate did not match the rate masterfile"></i></span></td>
                                                            <td>{{rate.gl}}</td>
                                                            <td>{{rate.cc}}</td>
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
                                        </div>
                                    </div>
                                    <br>

                                <div>
                                    <div class="row">
                                        <div class="col-9">
                                        <button :disabled="(form.status != 'active' && form.status != '-')" @click="saveData()" v-if="!this.form.refId" type="submit" class="btn btn-success"><i class="fas fa-save"></i> &nbsp;  Save</button>
                                        <button :disabled="(form.status != 'active' && form.status != '-')" @click="saveData()" v-if="this.form.refId" type="submit" class="btn btn-success"><i class="fas fa-save"></i> &nbsp;  Update</button>
                                        <button :disabled="(form.status != 'active')" @click="submit()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Submit</button>
                                        <button :disabled="(form.status != 'submitted')" @click="confirm()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Confirm</button>
                                        <button :disabled="(form.status != 'confirmed')" @click="transmit()" class="btn btn-primary"><i class="fas fa-save"></i> &nbsp;  Transmit</button>
                                        <button :disabled="(form.status == 'active')" @click="reactivate_detail()" class="btn btn-warning"><i class="fas fa-redo"></i> &nbsp; Reactivate</button>
                                        <button :disabled="(form.status != 'active' && form.status != '-')" @click="deleteAll()" v-if="this.form.refId" class="btn btn-danger"><i class="fas fa-trash"></i> &nbsp;  Delete</button>
                                        </div>
                                        <div class="col-3">
                                        <button @click="clearAll()" class="btn btn-success float-right"><i class="fas fa-backspace"></i> &nbsp;  Clear</button>
                                        </div>
                                    </div>
                                    <div class="row margin-top-10"> 
                                        <div class="col-12">
                                            <button @click="printPdf()" class="btn btn-outline-info btn-sm"><i class="fas fa-print"></i> &nbsp; print pdf</button>
                                        </div>
                                    </div>
                                </div>
                                
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        <search-signatory v-on:selectSign="setSign"></search-signatory>
        <search-dmpi-dar v-on:selectSoa="setSoa" :key="this.soaComponentKey"></search-dmpi-dar>

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
                      <textarea class="form-control" :class="{'is-invalid': form.errors.has('reasonofreactivation')}" v-model="form.reasonofreactivation" aria-label="With textarea"></textarea>
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

    import searchsignatory from './search/commonMasterList/Signatory.vue';
    import searchdmpidar from './search/dmpi/dar/SearchDmpiDar.vue';
    import jsPDF from "jspdf";

    export default {
        components: {
            'search-signatory' : searchsignatory,
            'search-dmpi-dar' : searchdmpidar
        },

        data(){
            return{
                signatories:{},
                sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
                currentMonth: '',
                currentYear: '',
                batch: {},
                isBatchLoading: false,
                whichSignatory:'',
                soaNumberCorrect: 0,
                soaComponentKey: 0,
                
                form: new Form({
                    refId:'',
                    month: '',
                    year: '',
                    period: '',
                    soaDate: '',
                    soaNumber: '',
                    preparedBy: '',
                    preparedByPos: '',
                    preparedByID: '',
                    confirmedBy: '',
                    confirmedByPos: '',
                    confirmedByID: '',
                    approvedBy: '',
                    approvedByPos: '',
                    approvedByID:'',
                    fileupload: null,
                    batchKey: '',
                    batchNumber: '',
                    darUploadedDtl:{},
                    darUploadedRates:{},
                    darUploadTotals:{},
                    isUploadingLoading: false,
                    batchInfo: {},
                    allWarnings: [],
                    status: '-',
                    isClubhouse: 0,
                    dateTransmittedToOperation: '',
                    dateSignedBySupervisor: '',
                    dateSignedByManager: '',
                    dateReceivedbyDataController: '',
                    dateReceivedbyBillingClerk: '',
                    dateReceivedbyDmpiAccount: '',
                    transmittalNumber: '',
                    reasonofreactivation: ""
                }),
            }
        },
        created: function() 
        {
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
        mounted() 
        {
            this.getSoas();
            this.$parent.getSignatories();
            document.getElementById('soaDate').valueAsDate = new Date();
            this.getSignatory();

            var currentDate = new Date();
            this.soaDate = currentDate;
            console.log('date' + currentDate)
        },
        methods: {
            clearFiles() 
            {
                this.$refs['file-input'].reset();
                this.form.darUploadedDtl = {}
                this.form.darUploadedRates = {}
                this.form.darUploadTotals = {}
                this.form.allWarnings = []
            },
            onFileChange(e)
            {

                this.form.isUploadingLoading = true;

                this.form.fileupload = e.target.files[0];
                
                // retrive the file in controller then return the data for display 
                
                let currentObj = this;
   
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
    
                let formData = new FormData();

                formData.append('file', this.form.fileupload);
                formData.append('batch', this.form.batchInfo[0]['Location']);

                axios.post('api/loadUploaded', formData, config)
                .then((res)=>{

                    this.form.darUploadedDtl = res.data['details']
                    this.form.darUploadedRates = res.data['rates']
                    this.form.darUploadTotals = res.data['totals']

                    this.checkForErrors();

                    this.form.isUploadingLoading = false;
                })
                .catch((err)=>{
                    console.log(err)
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Signatory not created successfully'
                    })
                    this.form.isUploadingLoading = true;
                })

                // filters
                
            },
            getBatchInfo()
            {
                
                this.isBatchLoading = true;
                this.form.soaNumber = ""
                axios.get('/api/getBatchInfo', {params: {id: this.form.batchKey}})
                .then(({ data }) => {
                    this.form.batchInfo = data
                    this.form.batchNumber = data[0]['BNo']
                    
                    this.form.soaNumber = data[0]['Code_Location'] + data[0]['Code_Date'] + data[0]['Code_Series']
                    console.log(data[0]['Code_Location'])

                    this.isBatchLoading = false;

                    this.checkForErrors();
                    this.soaNumberCheck();
                })
                .catch((err)=>{
                    this.isBatchLoading = true;
                    console.log(err)
                    console.log("we have error")
                })
                
            },
            getData()
            {
                axios({method: 'GET', url: 'api/dmpidar'}).then(
                    result => {
                        console.log(result.data);
                    },
                    error => {
                        console.error(error)
                    }
                )
            },
            getSoas()
            {
                this.isBatchLoading = true;
                
                axios.get('/api/dmpidargetbatch', {params: {month: this.form.month, year: this.form.year, period: this.form.period, isVolume: 0}})
                .then(({ data }) => {
                    this.batch = data
                    this.isBatchLoading = false;
                })
                .catch((err)=>{
                    this.isBatchLoading = true;
                })
            },
            saveData()
            {
                this.soaNumberCheck();
                this.$Progress.start();
                // console.log(this.form);
                var hasError = 0;
                var hasWarning = 0;
                // console.log(this.form.allWarnings);

                // if ang all warning kay walay error warning lang ang naa sa sulod then proceed, else show error
                for (var i = 0; i < this.form.allWarnings.length; i++) {
                    if (this.form.allWarnings[i]['type'] == 'error'){
                        hasError += 1;
                    }else if(this.form.allWarnings[i]['type'] == 'warning'){
                        hasWarning +=1;
                    }
                }
                console.log("warnings " + this.form.allWarnings)

                if (this.soaNumberCorrect < 2){
                    hasError += 1;
                    console.log("soa error")
                }

                if(hasError){

                    toast.fire({
                        icon: 'error',
                        title: 'You have ' + hasError + ' error/s.'
                    })
                    this.$Progress.fail();
                    $(window).scrollTop($('#errors').offset().top);

                }else{
                    
                    this.form.post('api/dmpidar')
                    .then((res)=>{
                        toast.fire({
                            icon: 'success',
                            title: 'data sucessfully saved.'
                        })
                        this.$Progress.finish();
                    })
                    .catch((err)=>{

                        console.log(err)

                        toast.fire({
                            icon: 'error',
                            title: 'backend error.'
                        })

                        this.$Progress.fail();
                    })
                }

            },
            searchSignatory(wS)
            {
                $('#searchSignatory').modal('show');
                this.whichSignatory = wS;
            },
            searchDmpiDar()
            {
                $('#searchDmpiDar').modal('show');

            },
            getSignatory()
            {
                axios({method: 'GET', url: '/api/billingsignatory'}).then(({ data }) => (this.signatories = data))
                console.log(this.signatories);
            },
            setSign(value)
            {
              
                if(this.whichSignatory=='approved'){
                    this.form.approvedBy = value.name;
                    this.form.approvedByPos = value.position;
                    this.form.approvedByID = value.id;
                }else if(this.whichSignatory=='confirmed'){
                    this.form.confirmedBy = value.name;
                    this.form.confirmedByPos = value.position;
                    this.form.confirmedByID = value.id;
                }else{ //prepared
                    this.form.preparedBy = value.name;
                    this.form.preparedByPos = value.position;
                    this.form.preparedByID = value.id;
                }
            },
            setSoa(value)
            {
                this.form.refId = value.id;
                this.provideDataForSelectedSoa(value);
                this.soaComponentKey += 1;
            },
            provideDataForSelectedSoa(hdr)
            {

                // set the header
                this.form.year = hdr.pmy.substring(0,4);
                this.form.month = parseInt(hdr.pmy.substring(4,6), 10);
                this.form.Period = hdr.period;
                
                this.form.batchKey = hdr.batcIDLink
                this.form.batchNumber = hdr.batchInfo
                // console.log('id', hdr.batcIDLink)
                this.form.soaDate = hdr.soaDate;
                this.form.soaNumber = hdr.soaNumber
                // console.log(hdr.batchInfo)
                this.form.preparedBy = hdr.preparedBy
                this.form.preparedByPos = hdr.preparedByPosition
                this.form.approvedBy = hdr.approvedBy
                this.form.approvedByPos = hdr.approvedByPosition
                this.form.confirmedBy = hdr.confirmedBy
                this.form.confirmedByPos = hdr.confirmedByPosition
                this.form.status = hdr.status
                // this.form.fill(hdr);
                this.form.isClubhouse = hdr.isClubhouse
                this.form.dateTransmittedToOperation = hdr.dateTransmittedToOperation
                this.form.dateSignedBySupervisor = hdr.dateSignedBySupervisor
                this.form.dateSignedByManager = hdr.dateSignedByManager
                this.form.dateReceivedbyDataController = hdr.dateReceivedByDataController
                this.form.dateReceivedbyBillingClerk = hdr.dateReceivedByBillingClerk
                this.form.dateReceivedbyDmpiAccount = hdr.DateReceivedByDmpiAccount
                this.form.transmittalNumber = hdr.TransmittalNumber
                // set details 
                axios.get('/api/loadDetailRates', {params: {id: hdr.id}})
                .then((res)=>{
                    this.form.darUploadedDtl = res.data['details']
                    this.form.darUploadedRates = res.data['rates']
                    this.form.darUploadTotals = res.data['totals']
                    this.getSoas();
                    this.getBatchInfo();
                    this.soaNumberCheck();
                    this.checkForErrors();
                })
                .catch((err)=>{
                    console.log(err)
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Details not loaded successfully'
                    })
                    this.form.isUploadingLoading = true;
                })

            },
            checkForErrors()
            { 
                //required : batch number & file upload

                // dapat completo tanan ayha ipa dagan ang kani nga filter.  naay  selected batch ug naay soa uploaded

                this.form.allWarnings = [];

                if (this.form.darUploadTotals.length > 0 && this.form.batchInfo.length > 0 && this.form.darUploadedDtl.length > 0)
                {
                    //, gl, cc, activity, dapat mag match ang hours sa batch ug uplaoded excel soa, rate

                    // excel totals: st, ot, nd, ndot per row
                    for (var i = 0; i < this.form.darUploadedDtl.length; i++) 
                    {
                        
                        // this.$set(this.form.darUploadedDtl[i],['checking'], 'hey');
                        if (this.form.darUploadedDtl[i]['totalst'] != this.form.darUploadedDtl[i]['c_totalst']){

                            this.form.allWarnings.push({type: 'error', error: 'ST amt error',  description: 'Amount: ' + this.form.darUploadedDtl[i]['totalst'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalst']});
                            
                        }
                        if (this.form.darUploadedDtl[i]['totalot'] != this.form.darUploadedDtl[i]['c_totalot']){

                            this.form.allWarnings.push({type: 'error', error: 'OT amt error', description: 'Amount: ' + this.form.darUploadedDtl[i]['totalot'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalot']});
                            
                        }
                        if (this.form.darUploadedDtl[i]['totalnd'] != this.form.darUploadedDtl[i]['c_totalnd']){

                            this.form.allWarnings.push({type: 'error', error: 'ND amt error', description: 'Amount: ' + this.form.darUploadedDtl[i]['totalnd'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalnd']});
                            
                        }
                        if (this.form.darUploadedDtl[i]['totalndot'] != this.form.darUploadedDtl[i]['c_totalndot']){

                            this.form.allWarnings.push({type: 'error', error: 'NDOT amt error', description: 'Amount: ' + this.form.darUploadedDtl[i]['totalndot'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalndot']});
                            
                        }
                        if (this.form.darUploadedDtl[i]['totalAmt'] != this.form.darUploadedDtl[i]['c_totalAmt']){

                            this.form.allWarnings.push({type: 'error', error: 'Total amt error', description: 'Amount: ' + this.form.darUploadedDtl[i]['totalAmt'] + ', Computed Amount: ' + this.form.darUploadedDtl[i]['c_totalAmt']});
                            
                        }

                    }
                     console.log('data not complete');
                    

                    //check compare hours sa batch ug soa
                    if (this.form.darUploadTotals[0]['gtSt'] != this.form.batchInfo[0]['THW_ST']){
                        this.form.allWarnings.push({type: 'warning', error: 'Batch st hrs does not match', description: 'Batch ST: ' + this.form.batchInfo[0]['THW_ST'] + ', Uploaded ST: ' + this.form.darUploadTotals[0]['gtSt']});
                    }
                    if(this.form.darUploadTotals[0]['gtOt'] != this.form.batchInfo[0]['THW_OT']){
                        this.form.allWarnings.push({type: 'warning', error: 'Batch ot hrs does not match', description: 'Batch OT: ' + this.form.batchInfo[0]['THW_OT'] + ', Uploaded OT: ' + this.form.darUploadTotals[0]['gtOt']});
                    }
                    if(this.form.darUploadTotals[0]['gtNd'] != this.form.batchInfo[0]['THW_ND']){
                        this.form.allWarnings.push({type: 'warning', error: 'Batch nd hrs does not match', description: 'Batch ND: ' + this.form.batchInfo[0]['THW_ND'] + ', Uploaded ND: ' + this.form.darUploadTotals[0]['gtNd']});
                    }
                    if(this.form.darUploadTotals[0]['gtNdot'] != this.form.batchInfo[0]['THW_NDOT']){
                        this.form.allWarnings.push({type: 'warning', error: 'Batch ndot hrs does not match', description: 'Batch NDOT: ' + this.form.batchInfo[0]['THW_NDOT'] + ', Uploaded NDOT: ' + this.form.darUploadTotals[0]['gtNdot']});
                    }

                    // if naay rate nga wala ge match
                    var rateWithNoMatch = 0;
                    for(var i = 0; i < this.form.darUploadedRates.length; i++){
                        console.log('test- errpr ' + this.form.darUploadedRates[i]['checking'])
                        if (this.form.darUploadedRates[i]['checking'] == 'false'){
                            rateWithNoMatch +=1;
                        }
                    }

                    if(rateWithNoMatch > 0){
                        this.form.allWarnings.push({type: 'error', error: 'Rate Error', description: rateWithNoMatch + ' rate/s doesn\'t match the active rate in rate master file'});
                    }
                }
                
            },
            clearAll()
            {
                this.signatories = {},
                this.sizes = ['Small', 'Medium', 'Large', 'Extra Large'],
                this.currentMonth = '',
                this.currentYear = '',
                this.batch = {},
                this.isBatchLoading = false,
                this.whichSignatory = '',
                this.soaNumberCorrect =  0,
                this.form.refId = '',
                this.form.month = '',
                this.form.year = '',
                this.form.period = '',
                this.form.soaDate = '',
                this.form.soaNumber = '',
                this.form.preparedBy = '',
                this.form.preparedByPos = '',
                this.form.preparedByID = '',
                this.form.confirmedBy = '',
                this.form.confirmedByPos = '',
                this.form.confirmedByID = '',
                this.form.approvedBy = '',
                this.form.approvedByPos = '',
                this.form.approvedByID = '',
                this.form.fileupload = null,
                this.form.batchKey = '',
                this.form.batchNumber = '',
                this.form.darUploadedDtl = {},
                this.form.darUploadedRates = {},
                this.form.darUploadTotals = {},
                this.form.isUploadingLoading = false,
                this.form.batchInfo = {},
                this.form.allWarnings = [],
                this.form.status = '-',
                this.form.dateTransmittedToOperation = '',
                this.form.dateSignedBySupervisor= '',
                this.form.dateSignedByManager= '',
                this.form.dateReceivedbyDataController= '',
                this.form.dateReceivedbyBillingClerk= '',
                this.form.dateReceivedbyDmpiAccount= '',
                this.form.transmittalNumber= ''


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
            deleteAll()
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
                            this.form.delete('api/dmpidar/'+this.form.refId).then((res) => {
                                    swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success' 
                                    )
                                this.clearAll()
                                console.log(res)
                            }).catch((err)=>{
                                swal.fire(
                                    'Failed!', 
                                    'Something went wrong.',
                                    'error'
                                    )
                                console.log(err)
                            });
                        }
                    })
            },
            soaNumberCheck() {
                
                if (this.form.soaNumber.trim() != ""){
                    axios.get('/api/checkifSoaExists', {params: {soaNumber: this.form.soaNumber, id: this.form.refId, type: "DAR"}})
                    .then(({ data }) => {
                        if(data == true){
                            this.soaNumberCorrect = 1;
                        }else{
                            this.soaNumberCorrect = 2;
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }else{
                    this.soaNumberCorrect = 0;
                }


            },
            submit()
            {
                this.$Progress.start();
                console.log(this.form.refId)
                this.form.post('/api/dmpidarSubmit')
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
                this.form.post('/api/dmpidarConfirm')
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
                this.form.post('/api/dmpidarTransmit')
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

            reactivate_detail()
            {
                 $('#reactivate_details').modal('show');
            },

            reactivate()
            {

                this.$Progress.start();
                 console.log(this.form.refID)
                this.form.post('/api/dmpidarReactivate')
                .then(({ data }) => {
                    this.form.status = data;
                    console.log
                    toast.fire({
                            icon: 'success',
                            title: 'Successfully reactivated'
                        })
                        this.form.refID = data
                        this.$Progress.finish();
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
            printPdf()
            {
                console.log(this.form.allWarnings)
               this.$Progress.start();
               
                var doc = new jsPDF("l", "pt", "long");
                        var pageHeight = 650;
                        var startsY = 10;

                        doc.setProperties({
                            title: "vanrental_po_monitoring.pdf"
                        });
                        //HEADER
                        doc.setFont("courier");
                        doc.setFontType("bold");
                        doc.setFontSize(14);
                        doc.text(
                            "GENERAL SERVICES MULTI-PURPOSE COOPERATIVE",
                            400,
                            50,
                            "center"
                        );
                        doc.setFontSize(10);
                        doc.setFontType("regular");
                        doc.text(
                            "Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon",
                            400,
                            60,
                            "center"
                        );
                        doc.text(
                            "CDA # 9520-10019987-1 / TIN 411-478-949-000",
                            400,
                            70,
                            "center"
                        );
                        doc.setFontType("bold");
                        doc.text("DMPI DAR SOA", 400, 85, "center");
                        doc.setFontType("regular");
                        doc.addImage(Logo, "JPEG", 90, 40, 50, 50);
                        doc.setLineWidth(1.5);
                        doc.line(40, 115, 800, 115);
                        doc.setLineWidth(2);
                        doc.line(40, 118, 800, 118);

                        //END HEADER
                        doc.text("Ref #: " + this.form.refId, 40, 150);
                        doc.text("Status: " + this.form.status, 240, 150);
                        doc.text("Month: " + this.form.month, 440, 150);
                        doc.text("Year: " + this.form.year, 640, 150);
                        doc.text("Period: " + this.form.period, 40, 165);
                        doc.text("SOA Date: " + this.form.soaDate, 240, 165);
                        doc.text("Batch Number: " + this.form.batchNumber, 440, 165);
                        doc.text("SOA Number: " + this.form.soaNumber, 640, 165);
                        doc.text("Prepared By: " + this.form.preparedBy, 40, 190);
                        doc.text("Prepared By Position: " + this.form.preparedByPos, 40, 205);
                        doc.text("Confirmed By: " + this.form.confirmedBy, 240, 190);
                        doc.text("Confirmed By Position: " + this.form.confirmedByPos, 240, 205);
                        doc.text("Approved By: " + this.form.approvedBy, 440, 190);
                        doc.text("Approved By: " + this.form.approvedByPos, 440, 205);

                        console.log(this.form.batchInfo)
                        doc.text("Details:", 40, 230);
                        
                        doc.autoTable({
                            styles: { fontSize: 7 },
                            body: this.form.batchInfo,
                            columns: [
                                { header: "BNO", dataKey: "BNo" },
                                { header: "ST", dataKey: "THW_ST" },
                                { header: "OT", dataKey: "THW_OT" },
                                { header: "ND", dataKey: "THW_ND" },
                                { header: "NDOT", dataKey: "THW_NDOT" }
                            ],
                            startY: 240
                        });

                        doc.autoTable({
                            styles: { fontSize: 7 },
                            body: this.form.allWarnings,
                            columns: [
                                { header: "Type", dataKey: "type" },
                                { header: "Error", dataKey: "error" },
                                { header: "Description", dataKey: "description" }
                            ],
                        });
                        
                        doc.autoTable({
                            styles: { fontSize: 5 },
                            body: this.form.darUploadedDtl,
                            columns: [
                                { header: "Activity", dataKey: "activity" },
                                { header: "Field", dataKey: "field" },
                                { header: "Accomplished", dataKey: "accomplished" },
                                { header: "GL", dataKey: "gl" },
                                { header: "CC", dataKey: "cc" },
                                { header: "RD-ST", dataKey: "rdst" },
                                { header: "RD-OT", dataKey: "rdot" },
                                { header: "RD-ND", dataKey: "rdnd" },
                                { header: "RD-NDOT", dataKey: "rdndot" },
                                { header: "SHOL-ST", dataKey: "sholst" },
                                { header: "SHOL-OT", dataKey: "sholot" },
                                { header: "SHOL-ND", dataKey: "sholnd" },
                                { header: "SHOL-NDOT", dataKey: "sholndot" },
                                { header: "SHRD-ST", dataKey: "shrdst" },
                                { header: "SHRD-OT", dataKey: "shrdot" },
                                { header: "SHRD-ND", dataKey: "shrdnd" },
                                { header: "SHRD-NDOT", dataKey: "shrdndot" },
                                { header: "RHOL-ST", dataKey: "rholst" },
                                { header: "RHOL-OT", dataKey: "rholot" },
                                { header: "RHOL-ND", dataKey: "rholnd" },
                                { header: "RHOL-NDOT", dataKey: "rholndot" },
                                { header: "RHRD-ST", dataKey: "rhrdst" },
                                { header: "RHRD-OT", dataKey: "rhrdot" },
                                { header: "RHRD-ND", dataKey: "rhrdnd" },
                                { header: "RHRD-NDOT", dataKey: "rhrdndot" },
                                { header: "TOTAL-ST", dataKey: "totalst" },
                                { header: "TOTAL-OT", dataKey: "totalot" },
                                { header: "TOTAL-ND", dataKey: "totalnd" },
                                { header: "TOTAL-NDOT", dataKey: "totalndot" },
                                { header: "TOTAL", dataKey: "totalAmt" },
                                { header: "HC", dataKey: "headCount" },
                                
                            ],
                        });
                        
                        doc.autoTable({
                            styles: { fontSize: 5 },
                            body: this.form.darUploadedRates,
                            columns: [
                                { header: "Activity", dataKey: "activity" },
                                { header: "RDST", dataKey: "rd_st" },
                                { header: "RDOT", dataKey: "rd_ot" },
                                { header: "RDND", dataKey: "rd_nd" },
                                { header: "RDNDOT", dataKey: "rd_ndot" },
                                { header: "SHOLST", dataKey: "shol_st" },
                                { header: "SHOLOT", dataKey: "shol_ot" },
                                { header: "SHOLND", dataKey: "shol_nd" },
                                { header: "SHOLNDOT", dataKey: "shol_ndot" },
                                { header: "SHRDST", dataKey: "shrd_st" },
                                { header: "SHRDOT", dataKey: "shrd_ot" },
                                { header: "SHRDND", dataKey: "shrd_nd" },
                                { header: "SHRDNDOT", dataKey: "shrd_ndot" },
                                { header: "RHOLST", dataKey: "rhol_st" },
                                { header: "RHOLOT", dataKey: "rhol_ot" },
                                { header: "RHOLND", dataKey: "rhol_nd" },
                                { header: "RHOLNDOT", dataKey: "rhol_ndot" },
                                { header: "RHRDST", dataKey: "rhrd_st" },
                                { header: "RHRDOT", dataKey: "rhrd_ot" },
                                { header: "RHRDND", dataKey: "rhrd_nd" },
                                { header: "RHRDNDOT", dataKey: "rhrd_ndot" },
                                { header: "RHRD-ND", dataKey: "checking" }
                                
                            ],
                        });

                        

                        window.open(doc.output("bloburl"), "_blank");

                //doc.save("golfcart_adjstment.pdf");
                this.$Progress.finish();
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
            },
        },
        
    }
     
    
</script>
