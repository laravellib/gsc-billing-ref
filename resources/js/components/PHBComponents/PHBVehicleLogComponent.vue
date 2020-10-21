<style>
input[data-readonly] {
	pointer-events: none;
}
</style>
<template>
  <div class="container" id="sweget">
                    <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#mlist">
                                Master File
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="mlist">
                                <li><router-link class="dropdown-item" to="/driverlist"><a>Driver List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/phbvehiclelist"><a>PHB Vehicle List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/phbvehiclerate"><a>PHB Rate List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/locationlist"><a>Location List</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                                Transactions
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                                <li><router-link class="dropdown-item" to="/phbvehiclelogentry"><a>PHB Vehicle Log Entry</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                                PHB Reports
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                                <li><router-link class="dropdown-item" to="/reportlistPHB"><a>Standard PHB Report</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/reportlistPHBPerJeep"><a>PHB's Vehicle Log Billing Report</a></router-link></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </nav>
    <div class="col-xs-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>PHB Vehicle Log Entry</b></h3>
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
                  v-model="SearchPHBPlateNo" type="text" name="SearchPHBPlateNo" placeholder="PHB Plate Number" class="form-control" />
                  
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
            <thead>
              <tr>
                <th><input type="checkbox" @click="selectAll" v-model="allSelected" /> </th> 
                <th>Date</th>
                <th>VL No</th>
                <th>Plate No</th>
                <th>Driver</th>
                <!-- <th>Operator</th> -->
                <th>Billable Amt</th>
                <th>Less Fuel</th>
                <th>Net Operator</th>
                <th>Status</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="jvl in filteredBlogs" v-bind:key="jvl.PHBVLHDRID">
                
                <td>
                  <input type="checkbox" :value="jvl.PHBVLHDRID" v-model="checkedNames" />
                </td>
                <td>{{jvl.PHBVLDate}}</td>
                <td>{{jvl.OVLNo}}</td>
                <td>{{jvl.PHBPlateNo}}</td>
                <td>{{jvl.DriverName}}</td>
                <!-- <td>{{jvl.TruckerName}}</td> -->
                <td>{{'Php'+jvl.BillAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                <td>{{jvl.LessFuel}}</td>
                <td>{{'Php'+jvl.NetTrucker.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                <td>{{jvl.Status}}</td>
                <td>
                  <a href="#" @click="editModal(jvl)">
                    <i class="fa fa-edit"></i>
                  </a>
                  /
                  <a href="#" @click="deleteModal(jvl.PHBVLHDRID)">
                    <i class="fa fa-trash" style="color:red;"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        <div class="card-footer">
        <!--<pagination :data="jvls" @pagination-change-page="getResults"></pagination>-->
        <!--{{checkedNames}}-->
        <button class="btn btn-warning" @click="newModalMultiple">
              Add New Multiple PHB Vehicle Collection Payment
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <button class="btn btn-success" @click="newModal">
              Add New PHB Vehicle Log
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <!-- <button class="btn btn-dark" @click="refreshtotalsoa">
              Refresh SOA Total Amount
              <i class="fa fa-spinner fa fw"></i>
            </button> -->
            <div style="float:right;">Total SOA Amount : {{form.TotalAmount}}</div>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- Modal 1 -->
    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document" style="overflow-y: initial !important;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New PHB Vehicle Log</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update PHB Vehicle Log's Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editmode ? updateJVL() : createJVL()">
            <div class="modal-body" style="height: 450px;overflow-y: auto;">
                  <div class="col-xs-12">
                      <div class="row">
                            <div class="col">
                                <div class="input-group mb-3 input-group-sm">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Date</span>
                                    </div>
                                    <input id="PHBVLDate" class="form-control" type="date" v-model="form.PHBVLDate" required>
                                    <input  class="form-control" type="hidden" v-model="form.PHBVLHDRID">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-3 input-group-sm">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">VL No</span>
                                    </div>
                                    <input v-model="form.OVLNo" type="text" name="OVLNo" class="form-control"/>
                                </div>
                            </div>
                            <div class="col">
                                <!--Search Vehicle Plate-->
                                <div class="input-group mb-3 input-group-sm">
                                    <input
                                    v-model="form.PHBPlateNo" type="text" name="PHBPlateNo" placeholder="PHB Plate Number" class="form-control" readonly/>
                                    <input
                                    v-model="form.PHBIDLink" type="hidden" name="PHBIDLink" placeholder="PHBIDLink" class="form-control"/>
                                        <b-input-group-append>
                                        <b-button @click="searchVehicleFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                        </b-input-group-append>
                                </div>
                            </div>
                            <div class="col">
                                <!--Serach Driver-->
                                <div class="input-group mb-3 input-group-sm">
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
                            </div>
                            <!-- <div class="col">
                                Serach Vehicle
                                <div class="input-group mb-3 input-group-sm">
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
                            </div> -->
                      </div>
                  </div> 
                  
   
                  <div class="col-xs-12">
                    <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm" style="text-transform: uppercase;">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">GL Code</span>
                                </div>
                            <input
                            v-model="form.GLCode" type="text" name="GLCode" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm" style="text-transform: uppercase;">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Cost Center</span>
                                </div>
                            <input
                            v-model="form.CostCenter" type="text" name="CostCenter" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm" >
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Per Kilometer Rate</span>
                                </div>
                            <input v-model="view.ViewPerKilometerRate" type="text" name="PerKilometerRate" class="form-control" />
                            </div>
                        </div>
                            <!-- <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Number of Days</span>
                                </div>
                            <input
                            v-model="form.NumberofDays" v-on:input="signalChangeNumberofDays()" type="text" name="NumberofDays" class="form-control" />
                            </div> -->
                        
                    </div>
                    <div class="row">
                        <div class="col">
                            <!--Serach Location-->
                            <div class="input-group mb-3 input-group-sm">
                                <input v-model="form.LocationName" type="text" name="LocationName" placeholder="Location Name" class="form-control" :class="{'is-invalid': form.errors.has('LocationName')}"  readonly/>
                                    <b-input-group-append>
                                    <b-button @click="searchLocationFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                    </b-input-group-append>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm" style="text-transform: uppercase;">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Assignment</span>
                                </div>
                            <input v-model="form.Assignment" type="text" name="Assignment" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Time In</span>
                                </div>
                                <input v-model="form.TimeIn" type="time"  name="TimeIn" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Time Out</span>
                                </div>
                                <input v-model="form.TimeOut" type="time"  name="TimeOut" class="form-control" />
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="row">
                        <div class="col">
                          <center><h3>Kilometer Run - DMPI</h3></center>
                        </div>
                        <div class="col">
                          <center><h3>Actual Kilometer Run - GSC</h3></center>
                        </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                        <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #82E0AA;border-color: #82E0AA;">Start Reading</span>
                                </div>
                                <input v-on:input="signalChangestartreading()" v-model="form.startreading" type="number"  name="startreading" class="form-control" style="border-color: #82E0AA;" required/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #85C1E9;border-color: #85C1E9;">Actual Start Reading</span>
                                </div>
                                <input v-on:input="signalChangeactualstartreading()" v-model="form.actualstartreading" type="number"  name="endreading" class="form-control" style="border-color: #85C1E9;" required/>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #82E0AA;border-color: #82E0AA;">End Reading</span>
                                </div>
                                <input v-on:input="signalChangestartreading()" v-model="form.endreading" type="number"  name="startreading" class="form-control" style="border-color: #82E0AA;" required/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #85C1E9;border-color: #85C1E9;">Actual End Reading</span>
                                </div>
                                <input v-on:input="signalChangeactualendreading()" v-model="form.actualendreading" type="number"  name="endreading" style="border-color: #85C1E9;" class="form-control" required/>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #82E0AA;border-color: #82E0AA;">Total DMPI Run</span>
                                </div>
                                <input v-model="form.totalrun" type="number" style="border-color: #82E0AA;" name="totalrun" class="form-control" data-readonly/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color: #85C1E9;border-color: #85C1E9;">Total Actual Run</span>
                                </div>
                                <input v-model="form.totalactualrun" style="border-color: #85C1E9;" type="number"  name="totalactualrun" class="form-control" data-readonly/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div class="col-xs-12">
                    <div class="row">
                        <!-- <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Less Admin</span>
                                </div>
                                <input v-model="view.ViewLessAdmin" type="text" name="ViewLessAdmin" class="form-control" />
                            </div>
                        </div> -->
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">No. Of Liters</span>
                                </div>
                                <input v-model="form.FuelLiters" type="number" name="FuelLiters" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Less Fuel</span>
                                </div>
                                <input v-model="form.LessFuel" v-on:input="signalChangeLessFuel()" type="number" name="LessFuel" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Net Amount</span>
                                </div>
                                <input v-model="view.ViewNetTrucker" type="text" name="ViewNetTrucker"  class="form-control" data-readonly/>
                            </div> 
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Bill Amount</span>
                                </div>
                                <input v-model="view.ViewBillAmount" type="text"  name="ViewBillAmount" class="form-control" data-readonly/>
                            </div>
                        </div>
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
                      <tr v-for="jvcp in JeepVehicleCollectionPayments" v-bind:key="jvcp.PHBVCDTLID">
                        <td>{{'Php'+jvcp.CollectedAmount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}</td>
                        <td>{{jvcp.ORCRDate | formatDate}}</td>
                        <td>{{jvcp.ORCRNumber}}</td>
                        <td>
                          <!-- <a href="#" @click="editModalJVCP(jvcp)">
                            <i class="fa fa-edit"></i>
                          </a>
                          / -->
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
              <button type="button" v-show="editmode" class="btn btn-primary" @click="AddCollection">Add PHB Amount Collection</button>
              <button type="button" v-show="editmode" class="btn btn-primary" @click="InsertDetails">Add PHB Details</button>
              <button type="button" v-show="editmode" class="btn btn-warning" @click="SetToUnpaid">Set to Unpaid</button>
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
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Multiple PHB Vehicle Log</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Multiple PHB Vehicle Log's Info</h5>
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
                          <input  class="form-control" type="hidden" v-model="form.PHBVLHDRID_Link">
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
    <div class="modal fade" id="addPHBDetails" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document" style="overflow-y: initial !important;">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add PHB Details</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update PHB Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="!editmode ? updateJVL() : createPHBDetails()">
                <div class="modal-body" style="height: 450px;overflow-y: auto;">
                  <div class="col-xs-12">
                  <div class="row">
                        <div class="col">
                          <!-- COLLECTION HISTORY TABLE -->
                          <div class="pre-scrollable">
                          <table class="table table-hover" v-show="editmode">
                            <tbody>
                              <tr>
                                <th>Assignment</th>
                                <th>Loading Location</th>
                                <th>Loading Time In</th>
                                <th>Loading Time Start</th>
                                <th>Loading Time End</th>
                                <th>UnLoading Location</th>
                                <th>UnLoading Time In</th>
                                <th>UnLoading Time Start</th>
                                <th>UnLoading Time End</th>
                              </tr>
                              <tr v-for="PHBDTL in PHBDetails" v-bind:key="PHBDTL.PHBVLDTLID">
                                <td>{{PHBDTL.Assignment}}</td>
                                <td>{{PHBDTL.LoadingLocationName}}</td>
                                <td>{{PHBDTL.LoadingTimeIn}}</td>
                                <td>{{PHBDTL.LoadingTimeStart}}</td>
                                <td>{{PHBDTL.LoadingTimeEnd}}</td>
                                <td>{{PHBDTL.UnLoadingLocationName}}</td>
                                <td>{{PHBDTL.UnLoadingTimeIn}}</td>
                                <td>{{PHBDTL.UnLoadingTimeStart}}</td>
                                <td>{{PHBDTL.UnLoadingTimeEnd}}</td>
                                <!--<td>
                                  <a href="#" @click="editModalJVCP(jvcp)">
                                    <i class="fa fa-edit"></i>
                                  </a>
                                  /-->
                                  <td>
                                  <a href="#" @click="deleteModalPHBDTL(PHBDTL)">
                                    <i class="fa fa-trash" style="color:red;"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        </div>
                  </div>
                  <div class="row">
                        <div class="col">
                          <div class="input-group mb-3 input-group-sm">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Header ID</span>
                            </div>
                            <input v-model="detail.PHBVLHDRID_Link" type="text"  name="PHBVLHDRID_Link" class="form-control"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="input-group mb-3 input-group-sm">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Assignment</span>
                            </div>
                            <input v-model="detail.Assignment" type="text"  name="Assignment" class="form-control"/>
                          </div>
                        </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <center><h3>LOADING</h3></center>
                      </div>
                      <div class="col">
                        <center><h3>UNLOADING</h3></center>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                            <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Location</span>
                          </div>
                            <input v-model="detail.LoadingLocationName" type="text" name="LoadingLocationName" class="form-control" :class="{'is-invalid': form.errors.has('LoadingLocationName')}" style="border-color: #E985A9;" data-readonl/>
                                <b-input-group-append>
                                <b-button @click="searchLoadingLocationFunction()" style="border-color: #E985A9;" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                </b-input-group-append>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                            <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">UnLoading Location</span>
                          </div>
                            <input v-model="detail.UnLoadingLocationName" type="text" name="UnLoadingLocationName" class="form-control" :class="{'is-invalid': form.errors.has('UnLoadingLocationName')}" style="border-color: #85E9C5;" data-readonl/>
                                <b-input-group-append>
                                <b-button @click="searchUnLoadingLocationFunction()" style="border-color: #85E9C5;" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                </b-input-group-append>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Time In</span>
                          </div>
                          <input v-model="detail.LoadingTimeIn" style="border-color: #E985A9;" type="time"  name="LoadingLocationName" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Time In</span>
                          </div>
                          <input v-model="detail.UnLoadingTimeIn" style="border-color: #85E9C5;" type="time"  name="UnLoadingTimeIn" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Time Start</span>
                          </div>
                          <input v-model="detail.LoadingTimeStart" style="border-color: #E985A9;" type="time"  name="LoadingTimeStart" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Time Start</span>
                          </div>
                          <input v-model="detail.UnLoadingTimeStart" style="border-color: #85E9C5;" type="time"  name="UnLoadingTimeStart" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Time End</span>
                          </div>
                          <input v-model="detail.LoadingTimeEnd" style="border-color: #E985A9;" type="time"  name="LoadingTimeEnd" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Time End</span>
                          </div>
                          <input v-model="detail.UnLoadingTimeEnd" style="border-color: #85E9C5;" type="time"  name="UnLoadingTimeEnd" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" v-show="editmode" class="btn btn-primary">Save</button>
                  <button type="submit" v-show="!editmode" class="btn btn-success">Update</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
    <!-- END SA IKA 3 NA MODAL -->
    <div class="modal fade" id="addPHBCollection"  tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-m" role="document" style="overflow-y: initial !important;">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editCollection" id="addNewLabel">Add PHB Collection</h5>
                <h5 class="modal-title" v-show="editCollection" id="addNewLabel">Update PHB Collection</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editCollection ? updateCollection() : createPHBCollection()">
                <div class="modal-body" style="height: 300px;overflow-y: auto;">
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Collected Amount</span>
                      </div>
                      <input
                      v-model="collection.CollectedAmount" type="text" name="CollectedAmount"  class="form-control"   />
                    </div>
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">OR No./CR No.</span>
                      </div>
                      <input
                      v-model="collection.ORCRNumber" type="text" name="ORCRNumber"  class="form-control"   />
                    </div>
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">OR/CR Date</span>
                      </div>
                      <input id="date" class="form-control" type="date" name="ORCRDate" v-model="collection.ORCRDate">
                    </div>
                    <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Remarks</span>
                      </div>
                      <textarea v-model="collection.Remarks" type="text" name="Remarks"  class="form-control"></textarea>
                    </div> 
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" v-show="!editCollection" class="btn btn-primary">Save</button>
                  <button type="submit" v-show="editCollection" class="btn btn-success">Update</button>
                </div>
              </form>
            </div>
          </div>
    </div>
    <search-driver v-on:changeTitle="updateTitle($event)"></search-driver>
    <search-operator v-on:changeTitleOperator="updateTitleOperator($event)"></search-operator>
    <search-phbvehicle v-on:changeTitleVehicle="updateTitleVehicle($event)"></search-phbvehicle>
    <search-location v-on:changeTitleLocation="updateTitleLocation($event)"></search-location>
  </div>
</template>

<script>
import searchDriverSweetLover from '../search/SearchJeep/SearchDriver.vue';
import searchOperatorSweetLover from '../search/SearchJeep/SearchOperator.vue';
import searchPHBVehicleSweetLover from '../search/SearchPHB/SearchPHBVehicle.vue';
import searchLocationSweetLover from '../search/SearchPHB/SearchLocation.vue';
import { log } from 'util';

export default {
	components: {
		'search-driver': searchDriverSweetLover,
		'search-operator': searchOperatorSweetLover,
		'search-phbvehicle': searchPHBVehicleSweetLover,
		'search-location': searchLocationSweetLover,
	},
	data() {
		return {
			PHBDetails: [],
			loc: '',
			checkedNames: [],
			filteredblogs: [],
			csoatotals: [],
			checkedNamesFilter: [],
			editmode: false,
			equalequal: false,
			allSelected: false,
			editCollection: false,
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
			SearchPHBPlateNo: '',
			DateFrom: '',
			DateTo: '',
			JeepVehicleCollectionPayments: {},
			form: new Form({
				PHBVLHDRID: '',
				PHBVLHDRIDFilter: '',
				PHBVLDate: '',
				OVLNo: '',
				PHBIDLink: '',
				PHBPlateNo: '',
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
				PerKilometerRate: '',
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
				PHBVLHDRID_Link: '',
				TotalAmount: '',
				startreading: '',
				endreading: '',
				actualstartreading: '',
				actualendreading: '',
				totalrun: '',
				totalactualrun: '',
				LocationName: '',
				LocationID: '',
				Assignment: '',
				TimeIn: '',
				TimeOut: '',
				FuelLiters: '',
			}),
			view: new Form({
				ViewLessFuel: '',
				ViewBillAmount: '',
				ViewNetTrucker: '',
				ViewPerKilometerRate: '',
				ViewBalanceAmount: '',
			}),
			collection: new Form({
				PHBVCDTLID: '',
				CollectedAmount: '',
				ORCRNumber: '',
				ORCRDate: '',
				Remarks: '',
			}),
			detail: new Form({
				Assignment: '',
				PHBVLHDRID_Link: '',
				LoadingLocationName: '',
				LoadingTimeIn: '',
				LoadingTimeStart: '',
				LoadingTimeEnd: '',
				UnLoadingLocationName: '',
				UnLoadingTimeIn: '',
				UnLoadingTimeStart: '',
				UnLoadingTimeEnd: '',
				PHBVLDTLID: '',
			}),
		};
	},
	mounted() {
		//this.$parent.getSearchDriver();
		//this.$parent.getSearchOperator();
	},
	methods: {
		refreshtotalsoa() {
			this.form.TotalAmount = '';
			this.form.PHBVLHDRID = this.checkedNames.join();
			axios
				.get('/api/getcsoasum', { params: { PHBVLHDRID: this.form.PHBVLHDRID } })
				.then(({ data }) => {
					this.csoatotals = data;
					this.form.TotalAmount = this.csoatotals[0].BillAmount;
				})
				.catch(err => {});
		},
		selectAll: function() {
			this.checkedNames = [];

			if (this.allSelected == false) {
				for (var user in this.filteredBlogs) {
					this.checkedNames.push(this.filteredBlogs[user].PHBVLHDRID);
				}
				// this.form.PHBVLHDRID = this.checkedNames.join();
				// // axios.get('/api/getphbcsoasum', {params: {PHBVLHDRID: this.form.PHBVLHDRID}})
				// // .then(({ data }) => {
				// //     this.csoatotals = data;
				// //     this.form.TotalAmount = this.csoatotals[0].BillAmount;
				// //     console.log(this.form.TotalAmount);
				// // })
				// // .catch((err)=>{
				// // })
			} else {
				this.form.TotalAmount = '';
			}
		},
		select: function() {
			this.allSelected = false;
		},
		SearchDateFromTo() {
			//return this.jvls.filter(jvl =>{
			//       return jvl.PHBVLDate.includes(this.form.DateFrom)
			//    });
			/*var vm = this;
              var startdate = vm.form.DateFrom;
              var enddate = vm.form.DateTo;
              return _.filter(vm.jvls,(function(data){
                if ((_.isNull(startdate) && _.isNull(enddate))){
                  return true
                }
                else{
                  var date = data.PHBVLDate;
                  return date.includes(date >= startdate && date <= enddate);
                  
                }
              }))*/
		},
		AddCollection() {
			this.editCollection = false;
			this.collection.reset();
			let today = new Date().toISOString().slice(0, 10);
			this.collection.ORCRDate = today;
			$('#addPHBCollection').modal('show');
		},
		UpdateCollection() {
			this.editCollection = true;
			$('#addPHBCollection').modal('show');
		},
		createPHBCollection() {
			this.$Progress.start();
			this.collection.PHBVLHDRID_Link = this.form.PHBVLHDRID;
			this.collection
				.post('api/phbCollection')
				.then(() => {
					let today = new Date().toISOString().slice(0, 10);
					this.collection.ORCRDate = today;
					toast.fire({
						icon: 'success',
						title: 'PHB Collection successfully saved',
					});
					this.$Progress.finish();
					this.getJVCP();
          $('#addPHBCollection').modal('hide');
				})
				.catch(() => {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'PHB Vehicle Log not added successfully',
					});
				});
		},
		InsertDetails() {
			this.detail.reset();
			this.detail.PHBVLHDRID_Link = this.form.PHBVLHDRID;
			this.loadPHBDTL();
			$('#addPHBDetails').modal('show');
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
				var numeral = require('numeral');
				this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
				this.form.CollectedAmount = 0;
				this.$Progress.start();
				this.form.put('api/jvlpaidtoposted/' + this.form.PHBVLHDRID);
				//$('#addNew').modal('hide');
				toast.fire({
					icon: 'success',
					title: 'Vehicle Log is back to Unpaid',
				});
				this.deleteEntirePaymentDetail();
				this.loadJVL();
				this.getJVLBalanceAmount();

				this.$Progress.finish();

				this.form.PHBVLHDRID_Link = this.form.PHBVLHDRID;
			}
		},
		signalChangestartreading() {
			var totalreading = 0;
			if (this.form.endreading !== '') {
				totalreading = this.form.endreading - this.form.startreading;
				this.form.BillAmount = parseFloat(totalreading * this.form.PerKilometerRate).toFixed(2);
				this.form.LessAdmin = 0; //parseFloat(this.form.BillAmount * 0.1).toFixed(2);
				let semitotal = this.form.LessAdmin + this.form.LessFuel;
				this.form.NetTrucker = parseFloat(this.form.BillAmount - semitotal).toFixed(2);
				this.form.totalrun = totalreading;
				var numeral = require('numeral');
				this.view.ViewBillAmount = numeral(this.form.BillAmount).format('0,0.00');
				this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');
				this.view.ViewLessAdmin = numeral(this.form.LessAdmin).format('0,0.00');
				if (this.eq == 'true') {
					this.form.BalanceAmount = this.form.BillAmount;
				}
			}
		},
		signalChangeactualstartreading() {
			var totalreading = 0;
			if (this.form.endreading !== '') {
				totalreading = this.form.actualendreading - this.form.actualstartreading;

				this.form.totalactualrun = totalreading;

				if (this.eq == 'true') {
					// this.form.BalanceAmount = this.form.BillAmount;
				}
			}
		},
		signalChangeendreading() {
			var totalreading = 0;
			totalreading = this.form.endreading - this.form.startreading;
			this.form.BillAmount = parseFloat(totalreading * this.form.PerKilometerRate).toFixed(2);
			this.form.LessAdmin = 0; //parseFloat(this.form.BillAmount * 0.1).toFixed(2);
			let semitotal = this.form.LessAdmin + this.form.LessFuel;
			this.form.NetTrucker = parseFloat(this.form.BillAmount - semitotal).toFixed(2);
			this.form.totalrun = totalreading;
			var numeral = require('numeral');
			this.view.ViewBillAmount = numeral(this.form.BillAmount).format('0,0.00');
			this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');
			this.view.ViewLessAdmin = numeral(this.form.LessAdmin).format('0,0.00');
			if (this.eq == 'true') {
				this.form.BalanceAmount = this.form.BillAmount;
				this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
			}
		},
		signalChangeactualendreading() {
			var totalreading = 0;
			totalreading = this.form.actualendreading - this.form.actualstartreading;

			this.form.totalactualrun = totalreading;

			if (this.eq == 'true') {
				// this.form.BalanceAmount = this.form.BillAmount;
				// this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
			}
		},
		signalChangeLessFuel() {
			var semitotalss = 0 + this.form.LessFuel; //this.form.LessAdmin + this.form.LessFuel;
			this.form.NetTrucker = this.form.BillAmount - this.form.LessFuel; //this.form.BillAmount - this.form.LessAdmin - this.form.LessFuel;
			var numeral = require('numeral');
			this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');
		},
		signalChangeCollectedAmount() {
			this.collection.BalanceAmount = this.form.BalanceAmountHDR - this.form.CollectedAmount;
			var numeral = require('numeral');
			this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
			if (this.form.BalanceAmount == 0) {
				this.form.Status = 'PAID';
			}
			//this.form.CollectedAmount = this.form.CollectedAmountHDR;
		},
		updateTitleLocation: function(updatedTitleLocation) {
			if (this.loc == 'MAIN') {
				this.form.LocationName = updatedTitleLocation.LocationName;
			} else if (this.loc == 'LOADING') {
				this.detail.LoadingLocationName = updatedTitleLocation.LocationName;
			} else if (this.loc == 'UNLOADING') {
				this.detail.UnLoadingLocationName = updatedTitleLocation.LocationName;
			}

			// console.log(updatedTitle);
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
				this.form.PHBPlateNo = updatedTitleVehicle.PlateNumber;
				this.form.PHBIDLink = updatedTitleVehicle.MVID;

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
				this.form.SearchPHBPlateNo = updatedTitleVehicle.PlateNumber;
			}
		},
		getVehicleRate() {
			axios
				.get('/api/getphbvehiclerate', { params: { PHBIDLink: this.form.PHBIDLink } })
				.then(response => {
					this.batch = response.data;
					this.form.PerKilometerRate = this.batch[0].PerKilometerRate;
					var numeral = require('numeral');
					this.view.ViewPerKilometerRate = numeral(this.form.PerKilometerRate).format('0,0.00');
				})
				.catch(err => {});
		},
		getJVLFilter() {
			axios
				.get('/api/getphbfilter', { params: { PHBIDLink: this.form.PHBIDLink } })
				.then(response => {
					this.jvlfilter = response.data;
					//this.form.PerKilometerRate=this.jvlfilter[0].BillAmount;
				})
				.catch(err => {});
		},
		getJVCP() {
      console.log(this.form.PHBVLHDRID);
			axios
				.get('/api/getphbvcp', { params: { PHBVLHDRID_Link: this.form.PHBVLHDRID } })
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
		searchLocationFunction() {
			this.loc = 'MAIN';
			$('#searchLocation').modal('show');
		},
		searchLoadingLocationFunction() {
			this.loc = 'LOADING';
			$('#searchLocation').modal('show');
		},
		searchUnLoadingLocationFunction() {
			this.loc = 'UNLOADING';
			$('#searchLocation').modal('show');
		},
		getDriverIsReal() {
			axios.get('api/driver').then(({ data }) => (this.drivers = data));
		},
		getResults(page = 1) {
			axios.get('api/jvl?page=' + page).then(response => {
				this.jeepvehiclelog = response.data;
			});
		},
		updateJVL(PHBVLHDRID) {
			this.$Progress.start();
			this.form.put('api/phbvl/' + this.form.PHBVLHDRID);

			//$('#addNew').modal('hide');
			toast.fire({
				icon: 'success',
				title: 'PHB Vehicle Log successfully updated',
			});
			this.$Progress.finish();

			if (this.form.CollectedAmount !== '') {
				//KUNG HEADER RA ANG GI UPDATE
				this.form.PHBVLHDRID_Link = this.form.PHBVLHDRID;
				this.createJVCP();
			}
			this.loadJVL();
		},
		deleteModal(PHBVLHDRID) {
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
						this.form.delete('api/phbvl/' + PHBVLHDRID);
						swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						this.form.PHBVLHDRID_Link = PHBVLHDRID;
						axios
							.get('/api/deletephbvcpdtl', { params: { PHBVLHDRID_Link: this.form.PHBVLHDRID_Link } })
							.then(({ data }) => {})
							.catch(err => {});
						axios
							.get('/api/deleteallphbdtl', { params: { PHBVLHDRID_Link: this.form.PHBVLHDRID_Link } })
							.then(({ data }) => {})
							.catch(err => {});
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
							var numeral = require('numeral');
							this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
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
							this.form.put('api/phbvl/' + this.form.PHBVLHDRID);
							//$('#addNew').modal('hide');
							this.loadJVL();
							this.form.PHBVLHDRID_Link = this.form.PHBVLHDRID;
							//END UPDATE

							this.form.delete('api/phbvcp/' + jvcp.PHBVCDTLID);
							swal.fire('Deleted!', 'Your file has been deleted.', 'success');
							this.getJVCP();
							this.getJVLBalanceAmount();
							this.$Progress.finish();
							this.form.PHBVLHDRID_Link = jvcp.PHBVLHDRID_Link;
							this.form.CollectedAmount = '';
							this.form.ORCRNumber = '';
							this.form.ORCRDate = '';
							this.form.Remarks = '';
						}
					});
			}
		},
		editModal(jvl) {
			this.form.PHBVLHDRID_Link = jvl.PHBVLHDRID;
			var numeral = require('numeral');
			this.view.ViewBillAmount = numeral(jvl.BillAmount).format('0,0.00');
			this.view.ViewNetTrucker = numeral(jvl.NetTrucker).format('0,0.00');
			this.view.ViewLessAdmin = numeral(jvl.LessAdmin).format('0,0.00');
			this.view.ViewPerKilometerRate = numeral(jvl.PerKilometerRate).format('0,0.00');
			//console.log(this.form.PHBVLHDRID_Link);
			this.editmode = true;
			this.form.reset();
			$('#addNew').modal('show');
			this.form.fill(jvl);
			this.form.CollectedAmount = '';
			this.form.BalanceAmount = jvl.BalanceAmount;
			this.form.BalanceAmountHDR = jvl.BalanceAmount;
			var numeral = require('numeral');
			this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
			this.form.ORCRNumber = '';
			this.form.ORCRDate = '';
			this.form.Remarks = '';
      this.getJVCP();
		},
		newModal() {
			this.editmode = false;
			this.form.reset();
			this.view.reset();
			$('#addNew').modal('show');
			let today = new Date().toISOString().slice(0, 10);
			this.form.PHBVLDate = today;
			this.form.LessFuel = 0;
			this.form.FuelLiters = 0;
		},
		closeModalMultiple() {
			location.reload();
			$('#addNewMultiple').modal('hide');
		},
		newModalMultiple() {
			this.var1 = 0;
			this.first = 0;
			var i = 0;
			this.form.PHBVLHDRID = this.checkedNames;
			this.$Progress.start();
			if (this.checkedNames == '') {
				this.$Progress.fail();
				swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No Transaction Selected.',
				});
			} else {
				axios.get('/api/getphbvlfilter', { params: { PHBVLHDRID: this.checkedNames } }).then(response => {
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
							var numeral = require('numeral');
							this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
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
				.get('api/getphbvl')
				.then(response => {
					this.jvls = response.data;
					console.log(this.jvls);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		loadPHBDTL() {
			//axios.get("api/jvl").then(({ data }) => (this.jvls = data));

			axios
				.get('api/getphbdtl', { params: { PHBVLHDRID_Link: this.detail.PHBVLHDRID_Link } })
				.then(response => {
					this.PHBDetails = response.data;
					console.log(this.PHBDetails);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		loadJVCP() {
			axios.get('api/jvcp').then(({ data }) => (this.jvcps = data));
		},
		createJVL() {
			this.$Progress.start();
			this.form
				.post('api/phbvl')
				.then(() => {
					//$('#addNew').modal('hide');
					//$('.modal-backdrop').remove();
					this.form.reset();
					this.view.reset();
					let today = new Date().toISOString().slice(0, 10);
					this.form.PHBVLDate = today;
					toast.fire({
						icon: 'success',
						title: 'PHB Vehicle Log successfully created',
					});
					this.$Progress.finish();
					this.loadJVL();
					this.form.LessFuel = 0;
					this.form.FuelLiters = 0;
				})
				.catch(() => {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'PHB Vehicle Log not added successfully',
					});
				});
		},
		createPHBDetails() {
			this.$Progress.start();
			axios
				.get('api/insertphbdtl', {
					params: {
						PHBVLHDRID_Link: this.detail.PHBVLHDRID_Link,
						Assignment: this.detail.Assignment,
						LoadingLocationName: this.detail.LoadingLocationName,
						LoadingTimeIn: this.detail.LoadingTimeIn,
						LoadingTimeStart: this.detail.LoadingTimeStart,
						UnLoadingLocationName: this.detail.UnLoadingLocationName,
						UnLoadingTimeIn: this.detail.UnLoadingTimeIn,
						UnLoadingTimeStart: this.detail.UnLoadingTimeStart,
						UnLoadingTimeEnd: this.detail.UnLoadingTimeEnd,
					},
				})
				.then(response => {
					toast.fire({
						icon: 'success',
						title: 'PHB Detail successfully created',
					});
					this.$Progress.finish();
					this.loadPHBDTL();
				})
				.catch(function(error) {
					this.$Progress.fail();
					toast.fire({
						icon: 'error',
						title: 'PHB Detail not added successfully',
					});
				});
		},
		createJVCP() {
			this.form
				.post('api/phbvcp')
				.then(() => {
					toast.fire({
						icon: 'success',
						title: 'PHB Vehicle Log successfully created',
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
						title: 'PHB Vehicle Collection Payment not added successfully',
					});
				});
		},
		getJVLBalanceAmount() {
			axios
				.get('/api/getphbvlbalanceamount', { params: { PHBVLHDRID: this.form.PHBVLHDRID } })
				.then(response => {
					this.jvlbalamt = response.data;
					this.form.BalanceAmountHDR = this.jvlbalamt[0].BalanceAmount;
					console.log(this.jvlbalamt[0].BalanceAmount);
				})
				.catch(err => {});
		},
		deleteEntirePaymentDetail() {
			this.form.delete('api/phbdeleteentirepaymentdetail/' + this.form.PHBVLHDRID);
			swal.fire('Deleted!', 'Your file has been deleted.', 'success');
			this.form.PHBVLHDRID_Link = this.form.PHBVLHDRID;
			this.getJVCP();
		},
		deleteModalPHBDTL(PHBDTL) {
			this.detail.PHBVLDTLID = PHBDTL.PHBVLDTLID;
			axios
				.get('/api/deletephbdtl', { params: { PHBVLDTLID: this.detail.PHBVLDTLID } })
				.then(({ data }) => {
					swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				})
				.catch(err => {});
			this.loadPHBDTL();
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
							this.form.PHBVLHDRID_Link = this.checkedNames[i];
							//console.log(this.form.PHBVLHDRID_Link);
							//UPDATE VEHICLE LOG HDR
							this.form.put('api/phbvlphbvcp/' + this.checkedNames[i]);
							$('#addNewMultiple').modal('hide');

							//END UPDATE
							//CREATE INSERT TO JEEP VEHICLE COLLECTION PAYMENT
							this.form.post('api/phbvcp').then(() => {
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
		this.loadJVL();

		//setInterval(() => this.loadDriver(),3000);
	},
	computed: {
		filteredBlogs() {
			if (this.DateFrom !== '' || (this.DateTo !== '' && this.SearchPHBPlateNo !== '')) {
				this.SearchPHBPlateNo = '';
				var vm = this;
				var startdate = vm.DateFrom;
				var enddate = vm.DateTo;
				return _.filter(vm.jvls, function(data) {
					if (_.isNull(startdate) && _.isNull(enddate)) {
						return true;
					} else {
						var date = data.PHBVLDate;
						return date >= startdate && date <= enddate;
					}
				});
			} else {
				this.DateFrom = '';
				this.DateTo = '';
				//return this.jvls.filter(jvl =>{
				//return jvl.PHBPlateNo.includes(this.form.PHBPlateNo)
				//});
				return this.jvls.filter(samsung => {
					return this.SearchPHBPlateNo.toLowerCase()
						.split(' ')
						.every(v => samsung.PHBPlateNo.toLowerCase().includes(v));
				});
			}
		},
	},
};
</script>






