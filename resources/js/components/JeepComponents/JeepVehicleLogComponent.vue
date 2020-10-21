<style>
input[data-readonly] {
	pointer-events: none;
}
</style>
<template>
  <div class="container" id="sweget">
    <div class="col-xs-12">
      <div class="card">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#mlist">
                  Master File
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="mlist">
                  <li><router-link class="dropdown-item" to="/driverlist"><a>Driver List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/operatorlist"><a>Operator List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/vehiclelist"><a>JEEP Vehicle List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/vehiclerate"><a>JEEP Rate List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/ratePercent"><a>Admin Rate Percentage</a></router-link></li>									
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                  Transactions
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                  <li><router-link class="dropdown-item" to="/jeepvehiclelogentry"><a>Jeep Vehicle Log Entry</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/createsoa"><a>Create Jeep SOA</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/soatransactions"><a>SOA Transaction</a></router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                  Jeep Reports
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                  <li><router-link class="dropdown-item" to="/reportlistJVL"><a>Standard Jeep Report</a></router-link></li>
                  <li><router-link class="dropdown-item" to="/reportlistJVLPerJeep"><a>Jeepney's Vehicle Log Billing Report</a></router-link></li>
									<li><router-link class="dropdown-item" to="/JeepSOATransmittal"><a>Jeepney's SOA Transmittal</a></router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div class="card-header">
          <h3 class="card-title"><b>Jeep Vehicle Log Entry</b></h3>
          <br>
          <form style="border-style: solid;border-color: coral;">
              <div class="form-inline" >
                <div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Search Date From</span>
                  </div>
                  <input  class="form-control" type="date" name="DateFrom" v-model="DateFrom">
                </div>
                <div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Search Date To</span>
                  </div>
                  <input  class="form-control" type="date" name="DateTo" v-model="DateTo">
                </div>
                <div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
                  <button type="button" class="btn btn-primary" v-on:click="filterKey = 'all'">Search</button>
                </div>
                <!--Search Vehicle Plate-->
                <div class="input-group mb-3 input-group-sm" style="margin-left:5px;margin-top:10px;">
                  <input
                  v-model="SearchJeepPlateNo" type="text" name="SearchJeepPlateNo" placeholder="Jeep Plate Number" class="form-control" />
                  
                    <b-input-group-append>
                    <b-button @click="searchsearchVehicleFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                    </b-input-group-append>
                  </div>
              </div>
            </form>
          <div class="card-tools">
            
          </div>
          <br>
        </div>
        <!-- /.box-header -->
          <div class="card-body table-responsive pre-scrollable">
            <table class="table table-hover" >
            <thead >
              <tr>
                <th ><input type="checkbox" @click="selectAll" v-model="allSelected" /> </th> 
                <th>Date</th>
                <th>VL No</th>
                <th>Plate No</th>
                <th>Driver</th>
                <th>Operator</th>
                <th>Billable Amt</th>
                <th>Less Admin</th>
                <th>Less Fuel</th>
                <th>Net Operator</th>
                <th>Status</th>
                <th>SOA No</th>
                <th>SOA Date</th>
                <th>Charge Invoice No</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="jvl in filteredBlogs" v-bind:key="jvl.JVLHDRID">
                
                <td>
                  <input type="checkbox" :value="jvl.JVLHDRID" v-model="checkedNames" />
                </td>
                <td>{{jvl.JVLDate}}</td>
                <td>{{jvl.OVLNo}}</td>
                <td>{{jvl.JeepPlateNo}}</td>
                <td>{{jvl.DriverName}}</td>
                <td>{{jvl.TruckerName}}</td>
                <td>{{'Php'+jvl.BillAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                <td>{{jvl.LessAdmin}}</td>
                <td>{{jvl.LessFuel}}</td>
                <td>{{'Php'+jvl.NetTrucker.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                <td>{{jvl.Status}}</td>
                <td>{{jvl.SOANumber}}</td>
                <td>{{jvl.SOADate}}</td>
                <td>{{jvl.ChargeInvoiceNumber}}</td>
                <td>
                  <a href="#" @click="editModal(jvl)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(jvl.JVLHDRID)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        <div class="card-footer">
        <!-- <pagination :data="jvls" @pagination-change-page="getResults"></pagination>
        {{checkedNames}} -->
        <button class="btn btn-warning" @click="newModalMultiple">
              Add New Multiple Jeep Vehicle Collection Payment
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <button class="btn btn-success" @click="newModal">
              Add New Jeep Vehicle Log
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <button class="btn btn-dark" @click="refreshtotalsoa">
              Refresh SOA Total Amount
              <i class="fa fa-spinner fa fw"></i>
            </button>
            <div style="float:right;">Total SOA Amount : {{form.TotalAmount}}</div>
        </div>
      
        <!-- /.box-body-->
      </div>
      <!-- /.box -->
    </div>
    <!-- Modal 1 -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document" style="overflow-y: initial !important;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Jeep Vehicle Log</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Jeep Vehicle Log's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateJVL() : createJVL()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
                  <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Date</span>
                          </div>
                          <input id="JVLDate" class="form-control" type="date" v-model="form.JVLDate" required>
                          <input  class="form-control" type="hidden" v-model="form.JVLHDRID">
                    </div>
                    
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">VL No</span>
                          </div>
                          <input v-model="form.OVLNo" type="text" name="OVLNo" class="form-control"/>
                    </div>

                    <!--Search Vehicle Plate-->
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <input
                      v-model="form.JeepPlateNo" type="text" name="JeepPlateNo" placeholder="Jeep Plate Number" class="form-control" readonly/>
                      <input
                      v-model="form.JeepIDLink" type="hidden" name="JeepIDLink" placeholder="JeepIDLink" class="form-control"/>
                        <b-input-group-append>
                        <b-button @click="searchVehicleFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </div>
                    <!--Serach Driver-->
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <input
                      v-model="form.DriverName" type="text" name="DriverName" placeholder="Driver Name" class="form-control" :class="{'is-invalid': form.errors.has('DriverName')}"  readonly/>
                      <input
                      v-model="form.DriverLastName"  type="hidden" name="DriverLastName" placeholder="DriverLastName" class="form-control"/>
                      <input
                      v-model="form.DriverFirstName"  type="hidden" name="DriverFirstName" placeholder="DriverFirstName" class="form-control"/>
                      <input
                      v-model="form.DriverMiddleName"  type="hidden" name="DriverMiddleName" placeholder="DriverMiddleName" class="form-control"/>
                      <input
                      v-model="form.DriverExtName"  type="hidden" name="DriverExtName" placeholder="DriverExtName" class="form-control"/>
                      <input
                      v-model="form.DriverIDLink"  type="hidden" name="DriverIDLink" placeholder="DriverIDLink" class="form-control"/>
                        <b-input-group-append>
                        <b-button @click="searchDriverFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </div>
                    <!--Serach Vehicle-->
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <input
                      v-model="form.TruckerName" type="text" name="TruckerName" placeholder="Trucker Name" class="form-control" :class="{'is-invalid': form.errors.has('TruckerName')}"  readonly/>
                      <input
                      v-model="form.TruckerIDLink"  type="hidden" name="TruckerIDLink" placeholder="TruckerIDLink" class="form-control"/>
                      <input
                      v-model="form.TruckerLastName"  type="hidden" name="TruckerLastName" placeholder="TruckerLastName" class="form-control"/>
                      <input
                      v-model="form.TruckerFirstName"  type="hidden" name="TruckerFirstName" placeholder="TruckerFirstName" class="form-control"/>
                      <input
                      v-model="form.TruckerMiddleName"  type="hidden" name="TruckerMiddleName" placeholder="TruckerMiddleName" class="form-control"/>
                      <input
                      v-model="form.TruckerExtName"  type="hidden" name="TruckerExtName" placeholder="TruckerExtName" class="form-control"/>
                        <b-input-group-append>
                        <b-button @click="searchOperatorFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                        </b-input-group-append>
                    </div>
                  </div> 
                  
   
                  <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm" style="text-transform: uppercase;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">GL Code</span>
                          </div>
                      <input
                      v-model="form.GLCode" type="text" name="GLCode"  class="form-control" />
                    </div>

                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;text-transform: uppercase;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Cost Center</span>
                          </div>
                      <input
                      v-model="form.CostCenter" type="text" name="CostCenter" class="form-control" />
                    </div>
                    
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Per Day Rate</span>
                          </div>
                      <input v-model="form.PerDayRate" type="text" name="PerDayRate" class="form-control" />
                    </div>

                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Number of Days</span>
                          </div>
                      <input
                      v-model="form.NumberofDays" v-on:input="signalChangeNumberofDays()" type="text" name="NumberofDays" class="form-control" />
                    </div>

                    
                  </div>

                  <div class="form-inline">
                    <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Bill Amount</span>
                          </div>
                      <input
                      v-model="form.BillAmount" type="text"  name="BillAmount" class="form-control" data-readonly/>
                    </div>

                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Less Admin</span>
                      </div>
                      <input
                        v-model="form.LessAdmin" type="text" name="LessAdmin" class="form-control" />
                    </div>

                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Less Fuel</span>
                      </div>
                      <input
                    v-model="form.LessFuel" v-on:input="signalChangeLessFuel()" type="text" name="LessFuel" class="form-control" />
                    </div>

                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Net Amount</span>
                      </div>
                      <input
                      v-model="form.NetTrucker" type="text" name="NetTrucker"  class="form-control" data-readonly/>
                    </div> 
                  </div>

                  <div class="form-inline" style="border-style: solid;border-color: coral;">
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Collected Amount</span>
                      </div>
                      <input
                      v-model="form.CollectedAmount" v-on:input="signalChangeCollectedAmount()" type="text" name="CollectedAmount"  class="form-control"   />
                    </div>
                    
                    <!-- EH HIDE SIYA NGA INPUT KUNG ADD NEW -->
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;" v-show="editmode" >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Balance Amount</span>
                      </div>
                      <input v-model="form.BalanceAmount" type="text" name="BalanceAmount"  class="form-control" data-readonly/>
                    </div>
                    <!-- END SA HIDE CHURVA -->
                    
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">OR No./CR No.</span>
                      </div>
                      <input
                      v-model="form.ORCRNumber" type="text" name="ORCRNumber"  class="form-control"   />
                    </div>
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">OR/CR Date</span>
                      </div>
                      <input id="date" class="form-control" type="date" name="ORCRDate" v-model="form.ORCRDate">
                    </div>
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Remarks</span>
                      </div>
                      <textarea v-model="form.Remarks" type="text" name="Remarks"  class="form-control"></textarea>
                    </div> 
                  </div>

                  <!-- COLLECTION HISTORY TABLE -->
                  <div class="pre-scrollable">
                  <table class="table table-hover" v-show="editmode">
                    <tbody>
                      <tr>
                        <th>Amount Collected</th>
                        <th>OR/CR Date</th>
                        <th>OR/CR No</th>
                        <th>Modify</th>
                      </tr>
                      <tr v-for="jvcp in JeepVehicleCollectionPayments" v-bind:key="jvcp.JVCDTLID">
                        <td>{{'Php'+jvcp.CollectedAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                        <td>{{jvcp.ORCRDate | formatDate}}</td>
                        <td>{{jvcp.ORCRNumber}}</td>
                        <!--<td>
                          <a href="#" @click="editModalJVCP(jvcp)">
                            <i class="fa fa-edit"></i>
                          </a>
                          /-->
                          <td>
                          <a href="#" @click="deleteModalJVCP(jvcp)">
                            <i class="fa fa-trash" style="color:red;"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 </div>
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editmode" class="btn btn-primary">Save</button>
              <button type="button" v-show="editmode" class="btn btn-primary" @click="SetToUnpaid">Set to Unpaid</button>
              <button type="submit" v-show="editmode" class="btn btn-success">Update</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    <!-- PARA SA MODAL NGA IKA DUHA -->
    <div class="modal fade" id="addNewMultiple" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Multiple Jeep Vehicle Log</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Multiple Jeep Vehicle Log's Info</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateJVL() : createJVCPMultiple()">
                <div class="modal-body">
                      <div class="form-inline" style="border-style: solid;border-color: coral;">
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Collected Amount</span>
                          </div>
                          <input
                      v-model="form.BillAmount" type="hidden"  name="BillAmount" class="form-control" data-readonly/>
                          <input  class="form-control" type="hidden" v-model="form.JVLHDRID_Link">
                          <input
                          v-model="form.CollectedAmount" type="text" name="CollectedAmount" v-on:input="signalChangeCollectedAmount()"  class="form-control"   />
                          <!--<input
                          v-model="form.CollectedAmountHDR"  type="text" name="CollectedAmountHDR"  class="form-control"   />-->
                        </div>
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Balance Amount</span>
                          </div>
                          <input
                          v-model="form.BalanceAmount" type="text" name="BalanceAmount"  class="form-control"   />
                          <input
                          v-model="form.BalanceAmountHDR" type="hidden" name="BalanceAmountHDR"  class="form-control"   />
                        </div>
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">OR No./CR No.</span>
                          </div>
                          <input
                          v-model="form.ORCRNumber" type="text" name="ORCRNumber"  class="form-control"   />
                        </div>
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">OR/CR Date</span>
                          </div>
                          <input id="date" class="form-control" type="date" name="ORCRDate" v-model="form.ORCRDate">
                        </div>
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Remarks</span>
                          </div>
                          <textarea v-model="form.Remarks" type="text" name="Remarks"  class="form-control"></textarea>
                        </div> 
                      </div>
                
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" v-show="!editmode" class="btn btn-primary">Save</button>
                  <button type="submit" v-show="editmode" class="btn btn-success">Update</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>


    <!-- END SA IKA DUHA NA MODAL -->

    <!-- PARA SA MODAL NGA IKA 3 -->
    <div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
          
    </div>


    <!-- END SA IKA 3 NA MODAL -->
    <search-driver v-on:changeTitle="updateTitle($event)"></search-driver>
    <search-operator v-on:changeTitleOperator="updateTitleOperator($event)"></search-operator>
    <search-vehicle v-on:changeTitleVehicle="updateTitleVehicle($event)"></search-vehicle>


  </div>
</template>

<script>
import searchDriverSweetLover from '../search/SearchJeep/SearchDriver.vue';
import searchOperatorSweetLover from '../search/SearchJeep/SearchOperator.vue';
import searchVehicleSweetLover from '../search/SearchJeep/SearchVehicle.vue';
import { log } from 'util';

export default {
	components: {
		'search-driver': searchDriverSweetLover,
		'search-operator': searchOperatorSweetLover,
		'search-vehicle': searchVehicleSweetLover,
	},
	data() {
		return {
			checkedNames: [],
			filteredblogs: [],
			csoatotals: [],
			checkedNamesFilter: [],
			editmode: false,
			equalequal: false,
			allSelected: false,
			jvls: [],
			jvlsobject: {},
			search: '',
			jvcps: {},
			drivers: [],
			vehicles: {},
			rates: {},
			operators: {},
			batch: [],
			jvlfilter: [],
			jvlbalamt: [],
			var1: '',
			var2: '',
			first: '',
			second: '',
			eq: 'true',
			truevalue: '',
			falsevalue: '',
			SearchJeepPlateNo: '',
			DateFrom: '',
			DateTo: '',
			JeepVehicleCollectionPayments: {},
			form: new Form({
				JVLHDRID: '',
				JVLHDRIDFilter: '',
				JVLDate: '',
				OVLNo: '',
				JeepIDLink: '',
				JeepPlateNo: '',
				DriverIDLink: '',
				DriverLastName: '',
				DriverFirstName: '',
				DriverMiddleName: '',
				DriverExtName: '',
				TruckerIDLink: '',
				TruckerLastName: '',
				TruckerFirstName: '',
				TruckerMiddleName: '',
				TruckerExtName: '',
				BillAmount: '',
				LessAdmin: '',
				LessFuel: '',
				NetTrucker: '',
				Status: '',
				SOANumber: '',
				SOADate: '',
				ChargeInvoiceNumber: '',
				GLCode: '',
				CostCenter: '',
				PerDayRate: '',
				NumberofDays: '',
				DriverName: '',
				TruckerName: '',
				CollectedAmount: '',
				CollectedAmountHDR: '',
				BalanceAmountHDR: '',
				BalanceAmount: '',
				ORCRNumber: '',
				ORCRDate: '',
				Remarks: '',
				JVLHDRID_Link: '',
				TotalAmount: '',
				adminRate: '',
			}),
		};
	},
	mounted() {
		this.$parent.getSearchDriver();
		this.$parent.getSearchOperator();
		this.getAdminRate();
	},
	methods: {
		getAdminRate() {
			axios
				.get('api/getJeepRate')
				.then(({ data }) => {
					if (data) {
						this.adminRate = data.rate;
					}
				})
				.catch(err => {
					toast.fire({
						icon: 'error',
						title: 'Not Successfully fetched data.',
					});
				});
		},
		refreshtotalsoa() {
			this.form.TotalAmount = '';
			this.form.JVLHDRID = this.checkedNames.join();
			axios
				.get('/api/getcsoasum', { params: { JVLHDRID: this.form.JVLHDRID } })
				.then(({ data }) => {
					this.csoatotals = data;
					this.form.TotalAmount = this.csoatotals[0].BillAmount;
					console.log(this.form.TotalAmount);
				})
				.catch(err => {});
		},
		selectAll: function() {
			this.checkedNames = [];

			if (this.allSelected == false) {
				for (var user in this.filteredBlogs) {
					this.checkedNames.push(this.filteredBlogs[user].JVLHDRID);
				}
				this.form.JVLHDRID = this.checkedNames.join();
				axios
					.get('/api/getcsoasum', { params: { JVLHDRID: this.form.JVLHDRID } })
					.then(({ data }) => {
						this.csoatotals = data;
						this.form.TotalAmount = this.csoatotals[0].BillAmount;
						console.log(this.form.TotalAmount);
					})
					.catch(err => {});
			} else {
				this.form.TotalAmount = '';
			}
		},
		select: function() {
			this.allSelected = false;
		},
		SearchDateFromTo() {
			//return this.jvls.filter(jvl =>{
			//       return jvl.JVLDate.includes(this.form.DateFrom)
			//    });
			/*var vm = this;
              var startdate = vm.form.DateFrom;
              var enddate = vm.form.DateTo;
              return _.filter(vm.jvls,(function(data){
                if ((_.isNull(startdate) && _.isNull(enddate))){
                  return true
                }
                else{
                  var date = data.JVLDate;
                  return date.includes(date >= startdate && date <= enddate);
                  
                }
              }))*/
		},
		SetToUnpaid() {
			if (this.form.Status == 'POSTED') {
				swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Can not Set to Unpaid. The Status is still POSTED.',
				});
			} else {
				this.form.Status = 'POSTED';
				this.form.BalanceAmount = this.form.BillAmount;
				this.form.CollectedAmount = 0;
				this.$Progress.start();
				this.form.put('api/jvlpaidtoposted/' + this.form.JVLHDRID);
				//$('#addNew').modal('hide');
				toast.fire({
					icon: 'success',
					title: 'Vehicle Log is back to Unpaid',
				});
				this.deleteEntirePaymentDetail();
				this.loadJVL();
				this.getJVLBalanceAmount();

				this.$Progress.finish();

				this.form.JVLHDRID_Link = this.form.JVLHDRID;
			}
		},
		signalChangeNumberofDays() {
			this.form.BillAmount = this.form.NumberofDays * this.form.PerDayRate;
			if (this.adminRate) {
				this.form.LessAdmin = this.form.BillAmount * (this.adminRate / 100);
			} else {
				this.form.LessAdmin = this.form.BillAmount * 0.1;
			}
			let semitotal = this.form.LessAdmin + this.form.LessFuel;
			this.form.NetTrucker = this.form.BillAmount - semitotal;
		},
		signalChangeLessFuel() {
			let semitotalss = this.form.LessAdmin + this.form.LessFuel;
			this.form.NetTrucker = this.form.BillAmount - this.form.LessAdmin - this.form.LessFuel;
		},
		signalChangeCollectedAmount() {
			this.form.BalanceAmount = this.form.BalanceAmountHDR - this.form.CollectedAmount;
			if (this.form.BalanceAmount == 0) {
				this.form.Status = 'PAID';
			}
			//this.form.CollectedAmount = this.form.CollectedAmountHDR;
		},
		updateTitle: function(updatedTitle) {
			this.form.DriverName =
				updatedTitle.LastName +
				',' +
				updatedTitle.FirstName +
				' ' +
				updatedTitle.MiddleName +
				' ' +
				updatedTitle.ExtName;
			this.form.DriverIDLink = updatedTitle.id;
			this.form.DriverLastName = updatedTitle.LastName;
			this.form.DriverFirstName = updatedTitle.FirstName;
			this.form.DriverMiddleName = updatedTitle.MiddleName;
			this.form.DriverExtName = updatedTitle.ExtName;
			// console.log(updatedTitle);
		},
		updateTitleOperator: function(updatedTitleOperator) {
			this.form.TruckerName =
				updatedTitleOperator.LastName +
				',' +
				updatedTitleOperator.FirstName +
				' ' +
				updatedTitleOperator.MiddleName +
				' ' +
				updatedTitleOperator.ExtName;
			this.form.TruckerIDLink = updatedTitleOperator.id;
			this.form.TruckerLastName = updatedTitleOperator.LastName;
			this.form.TruckerFirstName = updatedTitleOperator.FirstName;
			this.form.TruckerMiddleName = updatedTitleOperator.MiddleName;
			this.form.TruckerExtName = updatedTitleOperator.ExtName;
			// console.log(updatedTitle);
		},
		updateTitleVehicle: function(updatedTitleVehicle) {
			if (this.eq == 'true') {
				this.form.JeepPlateNo = updatedTitleVehicle.PlateNumber;
				this.form.JeepIDLink = updatedTitleVehicle.MVID;

				this.form.TruckerName = updatedTitleVehicle.TruckerName;
				this.form.TruckerIDLink = updatedTitleVehicle.TruckerID;
				this.form.TruckerLastName = updatedTitleVehicle.TruckerLastName;
				this.form.TruckerFirstName = updatedTitleVehicle.TruckerFirstName;
				this.form.TruckerMiddleName = updatedTitleVehicle.TruckerMiddleName;
				this.form.TruckerExtName = updatedTitleVehicle.TruckerExtName;

				this.form.DriverName = updatedTitleVehicle.DriverName;
				this.form.DriverIDLink = updatedTitleVehicle.DriverID;
				this.form.DriverLastName = updatedTitleVehicle.DriverLastName;
				this.form.DriverFirstName = updatedTitleVehicle.DriverFirstName;
				this.form.DriverMiddleName = updatedTitleVehicle.DriverMiddleName;
				this.form.DriverExtName = updatedTitleVehicle.DriverExtName;
				// console.log(updatedTitle);
				this.getVehicleRate();
			} else {
				this.form.SearchJeepPlateNo = updatedTitleVehicle.PlateNumber;
			}
		},
		getVehicleRate() {
			axios
				.get('/api/getvehiclerate', { params: { JeepIDLink: this.form.JeepIDLink } })
				.then(response => {
					this.batch = response.data;
					this.form.PerDayRate = this.batch[0].DailyRate;
					this.form.NumberofDays = 1;
					this.form.BillAmount = this.form.NumberofDays * this.form.PerDayRate;
					this.form.LessFuel = 0;
					if (this.adminRate) {
						this.form.LessAdmin = this.form.BillAmount * (this.adminRate / 100);
					} else {
						this.form.LessAdmin = this.form.BillAmount * 0.1;
					}
					let computation = this.form.LessAdmin + this.form.LessFuel;
					this.form.NetTrucker = this.form.BillAmount - computation;
					this.form.BalanceAmount = this.form.BillAmount;
				})
				.catch(err => {});
		},
		getJVLFilter() {
			axios
				.get('/api/getjvlfilter', { params: { JeepIDLink: this.form.JeepIDLink } })
				.then(response => {
					this.jvlfilter = response.data;
					//this.form.PerDayRate=this.jvlfilter[0].BillAmount;
				})
				.catch(err => {});
		},
		getJVCP() {
			axios
				.get('/api/getjvcp', { params: { JVLHDRID_Link: this.form.JVLHDRID_Link } })
				.then(({ data }) => {
					this.JeepVehicleCollectionPayments = data;
					console.log(JeepVehicleCollectionPayments);
				})
				.catch(err => {});
		},
		searchsearchVehicleFunction() {
			this.eq = 'false';
			$('#searchVehicle').modal('show');
		},
		searchVehicleFunction() {
			$('#searchVehicle').modal('show');
		},
		getVehicleIsReal() {
			axios.get('api/vehicle').then(({ data }) => (this.vehicles = data));
			console.log(this.vehicles);
		},
		searchOperatorFunction() {
			$('#searchOperator').modal('show');
		},
		getOperatorIsReal() {
			axios.get('api/operator').then(({ data }) => (this.operators = data));
			console.log(this.operators);
		},
		searchDriverFunction() {
			$('#searchDriver').modal('show');
		},
		getDriverIsReal() {
			axios.get('api/driver').then(({ data }) => (this.drivers = data));
			console.log(this.drivers);
		},
		getResults(page = 1) {
			axios.get('api/jvl?page=' + page).then(response => {
				this.jeepvehiclelog = response.data;
			});
		},
		updateJVL(JVLHDRID) {
			console.log(this.form.Status);
			console.log(this.form.BalanceAmount);

			this.$Progress.start();
			this.form.put('api/jvl/' + this.form.JVLHDRID);

			//$('#addNew').modal('hide');
			toast.fire({
				icon: 'success',
				title: 'Jeep Vehicle Log successfully updated',
			});
			this.$Progress.finish();
			if (this.form.CollectedAmount !== '') {
				//KUNG HEADER RA ANG GI UPDATE
				this.form.JVLHDRID_Link = this.form.JVLHDRID;
				this.createJVCP();
			}
			this.loadJVL();
		},
		deleteModal(JVLHDRID) {
			swal
				.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!',
				})
				.then(result => {
					if (result.value) {
						this.$Progress.start();
						this.form.delete('api/jvl/' + JVLHDRID);
						swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						this.$Progress.finish();
						this.loadJVL();
					}
				});
		},
		deleteModalJVCP(jvcp) {
			if (this.form.BalanceAmount == 0 && this.form.Status == 'PAID') {
				swal
					.fire({
						title: 'Ooopsie Doopsieee',
						text: 'The transaction is already PAID.',
						icon: 'error',
						showCancelButton: true,
						showConfirmButton: false,
						cancelButtonColor: '#d33',
					})
					.then(result => {
						if (result.value) {
						}
					});
			} else {
				swal
					.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!',
					})
					.then(result => {
						if (result.value) {
							this.form.Status = 'PAID';

							this.form.BalanceAmount = this.form.BalanceAmount + jvcp.CollectedAmount;
							var collectedamount = this.form.BillAmount - this.form.BalanceAmount;
							this.form.CollectedAmount = collectedamount;
							console.log('Bill Amount Before Delete:' + this.form.BillAmount);
							console.log('Balance Amount Before Delete:' + this.form.BalanceAmount);
							console.log(
								'Selected Payment Detail Collected Amount Before Delete:' + jvcp.CollectedAmount
							);
							console.log('Value of Collected Amount Variable' + this.form.CollectedAmount);
							this.form.ORCRNumber = jvcp.ORCRNumber;
							this.form.ORCRDate = jvcp.ORCRDate;
							this.form.Remarks = jvcp.Remarks;
							this.$Progress.start();
							//UPDATE FIRST
							this.form.put('api/jvl/' + this.form.JVLHDRID);
							//$('#addNew').modal('hide');
							this.loadJVL();
							this.form.JVLHDRID_Link = this.form.JVLHDRID;
							//END UPDATE

							this.form.delete('api/jvcp/' + jvcp.JVCDTLID);
							swal.fire('Deleted!', 'Your file has been deleted.', 'success');
							this.getJVCP();
							this.getJVLBalanceAmount();
							this.$Progress.finish();
							this.form.JVLHDRID_Link = jvcp.JVLHDRID_Link;
							this.form.CollectedAmount = '';
							this.form.ORCRNumber = '';
							this.form.ORCRDate = '';
							this.form.Remarks = '';
						}
					});
			}
		},
		editModal(jvl) {
			this.form.JVLHDRID_Link = jvl.JVLHDRID;
			this.getJVCP();
			//console.log(this.form.JVLHDRID_Link);
			this.editmode = true;
			this.form.reset();
			$('#addNew').modal('show');
			this.form.fill(jvl);
			this.form.CollectedAmount = '';
			this.form.BalanceAmount = jvl.BalanceAmount;
			this.form.BalanceAmountHDR = jvl.BalanceAmount;
			this.form.ORCRNumber = '';
			this.form.ORCRDate = '';
			this.form.Remarks = '';
		},
		newModal() {
			this.editmode = false;
			this.form.reset();
			$('#addNew').modal('show');
			let today = new Date().toISOString().slice(0, 10);
			this.form.JVLDate = today;
		},
		closeModalMultiple() {
			location.reload();
			$('#addNewMultiple').modal('hide');
		},
		newModalMultiple() {
			this.var1 = 0;
			this.first = 0;
			var i = 0;
			this.form.JVLHDRID = this.checkedNames;
			this.$Progress.start();
			if (this.checkedNames == '') {
				this.$Progress.fail();
				swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No Transaction Selected.',
				});
			} else {
				axios.get('/api/getjvlfilter', { params: { JVLHDRID: this.checkedNames } }).then(response => {
					this.jvlfilter = response.data;
					for (i = 0; i < this.jvlfilter.length; i++) {
						if (this.jvlfilter[i].BillAmount != this.jvlfilter[0].BillAmount) {
							this.$Progress.fail();
							swal
								.fire({
									title: 'Ooopsie Doopsieee',
									text:
										'The transactions that you have selected are not uniform in Bill Amount. Please review.',
									icon: 'error',
									showCancelButton: true,
									showConfirmButton: false,
									cancelButtonColor: '#d33',
								})
								.then(result => {
									if (result.value) {
									} else {
										$('#addNewMultiple').modal('hide');
									}
								});
							break;
						} else {
							this.editmode = false;
							this.form.reset();
							this.form.BillAmount = this.jvlfilter[0].BillAmount;
							this.form.BalanceAmount = this.jvlfilter[0].BalanceAmount;
							this.form.BalanceAmountHDR = this.jvlfilter[0].BalanceAmount;
							//this.form.CollectedAmount = this.jvlfilter[0].CollectedAmount;
							//this.form.BalanceAmount = this.form.BillAmount - this.form.CollectedAmount;
							$('#addNewMultiple').modal('show');
						}
					}
				}); //END AXIOS
				this.$Progress.finish();
			}
		},
		doSomething(data) {
			console.log(data);
		},
		loadJVL() {
			//axios.get("api/jvl").then(({ data }) => (this.jvls = data));
			axios
				.get('api/getjvl')
				.then(response => {
					this.jvls = response.data;
					console.log(this.jvls);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		loadJVCP() {
			axios.get('api/jvcp').then(({ data }) => (this.jvcps = data));
		},
		createJVL() {
			/*this.$Progress.start();
      this.form.post("api/driver");

      $('#addNew').modal('hide');
      $('.modal-backdrop').remove();
      toast.fire({
        icon: "success",
        title: "Driver successfully created"
      });
      this.$Progress.finish();
      this.loadDriver();*/
			this.$Progress.start();
			this.form
				.post('api/jvl')
				.then(() => {
					//$('#addNew').modal('hide');
					//$('.modal-backdrop').remove();
					this.form.reset();
					let today = new Date().toISOString().slice(0, 10);
					this.form.JVLDate = today;
					toast.fire({
						icon: 'success',
						title: 'Jeep Vehicle Log successfully created',
					});
					this.$Progress.finish();
					this.loadJVL();
				})
				.catch(() => {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'Jeep Vehicle Log not added successfully',
					});
				});
		},
		createJVCP() {
			this.form
				.post('api/jvcp')
				.then(() => {
					toast.fire({
						icon: 'success',
						title: 'Jeep Vehicle Log successfully created',
					});
					this.getJVCP();
					this.form.CollectedAmount = '';
					//this.form.BalanceAmount=0;
					this.form.ORCRNumber = '';
					this.form.ORCRDate = '';
					this.form.Remarks = '';
					this.getJVLBalanceAmount();
				})
				.catch(() => {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'Jeep Vehicle Collection Payment not added successfully',
					});
				});
		},
		getJVLBalanceAmount() {
			axios
				.get('/api/getjvlbalanceamount', { params: { JVLHDRID: this.form.JVLHDRID } })
				.then(response => {
					this.jvlbalamt = response.data;
					this.form.BalanceAmountHDR = this.jvlbalamt[0].BalanceAmount;
					console.log(this.jvlbalamt[0].BalanceAmount);
				})
				.catch(err => {});
		},
		deleteEntirePaymentDetail() {
			this.form.delete('api/deleteentirepaymentdetail/' + this.form.JVLHDRID);
			swal.fire('Deleted!', 'Your file has been deleted.', 'success');
			this.form.JVLHDRID_Link = this.form.JVLHDRID;
			this.getJVCP();
		},
		createJVCPMultiple() {
			if (this.form.BalanceAmount == 0) {
				this.form.Status = 'PAID';
			} else {
				this.form.Status = 'POSTED';
			}
			this.editmode = false;
			swal
				.fire({
					title: 'Are you sure you watn to save?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, save it!',
				})
				.then(result => {
					if (result.value) {
						this.$Progress.start();
						////console.log(this.checkedNames);
						var arr = 0;
						for (var i = 0; i < this.checkedNames.length; i++) {
							arr = i;
							console.log(this.checkedNames.length);
							this.form.JVLHDRID_Link = this.checkedNames[i];
							//console.log(this.form.JVLHDRID_Link);
							//UPDATE VEHICLE LOG HDR
							this.form.put('api/jvljvcp/' + this.checkedNames[i]);
							$('#addNewMultiple').modal('hide');

							//END UPDATE
							//CREATE INSERT TO JEEP VEHICLE COLLECTION PAYMENT
							this.form.post('api/jvcp').then(() => {
								//toast.fire({
								//   icon: "success",
								//  title: "Transaction done."
								//});
								swal.fire({
									position: 'center',
									icon: 'success',
									title: 'Your work has been saved',
									showConfirmButton: false,
									timer: 1500,
								});
							});

							//END CREATE
						}

						this.$Progress.finish();
						//location.reload();
						this.loadJVL();

						this.checkedNames = [];
					}
				});
		},
	},

	created() {
		Fire.$on('searchingJVL', () => {
			let query = this.$parent.search;
			axios
				.get('api/findJVL?q=' + query)
				.then(data => {
					this.jvls = data.data;
				})
				.catch(() => {});
		});
		this.loadJVL();

		//setInterval(() => this.loadDriver(),3000);
	},
	computed: {
		filteredBlogs() {
			if (this.DateFrom !== '' || (this.DateTo !== '' && this.SearchJeepPlateNo !== '')) {
				this.SearchJeepPlateNo = '';
				var vm = this;
				var startdate = vm.DateFrom;
				var enddate = vm.DateTo;
				return _.filter(vm.jvls, function(data) {
					if (_.isNull(startdate) && _.isNull(enddate)) {
						return true;
					} else {
						var date = data.JVLDate;
						return date >= startdate && date <= enddate;
					}
				});
			} else {
				this.DateFrom = '';
				this.DateTo = '';
				//return this.jvls.filter(jvl =>{
				//return jvl.JeepPlateNo.includes(this.form.JeepPlateNo)
				//});
				return this.jvls.filter(samsung => {
					return this.SearchJeepPlateNo.toLowerCase()
						.split(' ')
						.every(v => samsung.JeepPlateNo.toLowerCase().includes(v));
				});
			}
		},
	},
};
</script>






