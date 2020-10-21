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
                                <li><router-link class="dropdown-item" to="/ovlvehiclelist"><a>OVL Vehicle List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/ovlvehiclerate"><a>OVL Rate List</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                                Transactions
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                                <li><router-link class="dropdown-item" to="/ovlvehiclelogentry"><a>OVL Vehicle Log Entry</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/createovlsoa"><a>OVL Create SOA</a></router-link></li>
                                <li><router-link class="dropdown-item" to="/soaovltransactions"><a>OVL SOA Transactions</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                                OVL Reports
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                                <li><router-link class="dropdown-item" to="/reportlistovl"><a>Standard OVL Report</a></router-link></li>
                                <!-- <li><router-link class="dropdown-item" to="/reportlistovlPerJeep"><a>OVL's Vehicle Log Billing Report</a></router-link></li> -->
                                </ul>
                            </li>
                            </ul>
                        </div>
                        </nav>
    <div class="col-xs-12">
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>Outsider Vehicle Log Entry</b></h3>
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
                  v-model="SearchOVLPlateNo" type="text" name="SearchOVLPlateNo" placeholder="OVL Plate Number" class="form-control" />
                  
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
        <!-- <button @click="getSelectedRows()">Get Selected Rows</button>
        <ag-grid-vue style="width: auto; height: 300px;"
                  class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :modules="modules"
                 rowSelection="multiple"
                 @grid-ready="onGridReady"
                 @row-selected="onRowSelected">
    </ag-grid-vue> -->
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
              <tr v-for="jvl in filteredBlogs" v-bind:key="jvl.OVLVLHDRID">
                
                <td>
                  <input type="checkbox" :value="jvl.OVLVLHDRID" v-model="checkedNames" />
                </td>
                <td>{{jvl.OVLVLDate}}</td>
                <td>{{jvl.OVLNo}}</td>
                <td>{{jvl.OVLPlateNo}}</td>
                <td>{{jvl.DriverName}}</td>
                <!-- <td>{{jvl.TruckerName}}</td> -->
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
                  <a href="#" @click="deleteModal(jvl.OVLVLHDRID)">
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
              Add New Multiple OVL Collection Payment
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <button class="btn btn-success" @click="newModal">
              Add New OVL
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <!-- <button class="btn btn-primary" @click="editModal()">
              Update OVL
              <i class="fa fa-user-plus fa fw"></i>
            </button>
            <button class="btn btn-danger" @click="deleteModal()">
              Delete OVL
              <i class="fa fa-user-plus fa fw"></i>
            </button> -->
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
            <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Outsider Vehicle Log</h5>
            <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Outsider Vehicle Log's Info</h5>
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
                                    <input id="OVLVLDate" class="form-control" type="date" v-model="form.OVLVLDate" required>
                                    <input  class="form-control" type="hidden" v-model="form.OVLVLHDRID">
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
                                    v-model="form.OVLPlateNo" type="text" name="OVLPlateNo" placeholder="Vehicle Plate Number" class="form-control" readonly/>
                                    <input
                                    v-model="form.OVLIDLink" type="hidden" name="OVLIDLink" placeholder="OVLIDLink" class="form-control"/>
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
                                <div class="input-group mb-3 input-group-sm">
                                    <input
                                    v-model="form.ClientName" type="text" name="ClientName" placeholder="Client Name" class="form-control" :class="{'is-invalid': form.errors.has('DriverName')}"  readonly/>
                                    <input
                                    v-model="form.ClientLastName"  type="hidden" name="ClientLastName" placeholder="ClientLastName" class="form-control"/>
                                    <input
                                    v-model="form.ClientFirstName"  type="hidden" name="ClientFirstName" placeholder="ClientFirstName" class="form-control"/>
                                    <input
                                    v-model="form.ClientMiddleName"  type="hidden" name="ClientMiddleName" placeholder="ClientMiddleName" class="form-control"/>
                                    <input
                                    v-model="form.ClientExtName"  type="hidden" name="ClientExtName" placeholder="ClientExtName" class="form-control"/>
                                    <input
                                    v-model="form.ClientIDLink"  type="hidden" name="ClientIDLink" placeholder="ClientIDLink" class="form-control"/>
                                        <b-input-group-append>
                                        <b-button @click="searchClientFunction()" variant="outline-primary" size="sm"><i class="fa fa-search" aria-hidden="true"></i></b-button>
                                        </b-input-group-append>
                                </div>
                            </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm" style="text-transform: uppercase;">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">GL Code</span>
                                </div>
                            <input
                            v-model="form.GLCode" type="text" name="GLCode"  class="form-control" />
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
                                    <span class="input-group-text">Per Hour Rate</span>
                                </div>
                            <input v-model="view.ViewPerHourRate" type="text" name="PerHourRate" class="form-control" />
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
                  </div>

                  <div class="col-xs-12">
                    <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Time Start</span>
                                </div>
                                <input v-on:input="signalChangestartreading()" v-model="form.startreading" type="time"  name="startreading" class="form-control" required/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Time End</span>
                                </div>
                                <input v-on:input="signalChangeendreading()" v-model="form.endreading" type="time"  name="endreading" class="form-control" required/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">No. of Hours</span>
                                </div>
                                <input v-model="form.NumberOfHours" type="number"  name="NumberOfHours" class="form-control" data-readonly/>
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
                    <div class="row">
                        <div class="col">
                        <center><h3>EXPENSES</h3></center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Fuel Liters</span>
                                </div>
                                <input v-model="form.FuelLiters" style="border-color:#E985A5;" type="text" name="FuelLiters" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Fuel Amount</span>
                                </div>
                                <input v-model="form.LessFuel" style="border-color:#E985A5;" v-on:input="signalChangeLessFuel()" step="0.01" type="number" name="LessFuel" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Maintenance Cost</span>
                                </div>
                                <input v-model="view.ViewMaintenanceCost" style="border-color:#E985A5;" type="text" name="ViewLessAdmin" class="form-control" data-readonly/>
                            </div>
                        </div>
                        
                  </div>
                  <div class="row">
                    <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Admin Cost</span>
                                </div>
                                <input v-model="form.LessAdmin" style="border-color:#E985A5;" type="text" name="ViewLessAdmin" class="form-control" data-readonly/>
                            </div>
                        </div>
                    <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Helper</span>
                                </div>
                                <input v-model="form.Helper" style="border-color:#E985A5;" v-on:input="signalChangeHelper()" step="0.01" type="number" name="Helper" class="form-control" />
                            </div>
                        </div>
                    <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="background-color:#E985A5;border-color:#E985A5;">Labor</span>
                            </div>
                            <input v-model="form.Labor" style="border-color:#E985A5;" v-on:input="signalChangeLabor()" step="0.01" type="number" name="Labor" class="form-control" />
                        </div>
                    </div>
                        
                  </div>
                  <div class="row">
                        <div class="col">
                        <center><h3>TOTAL</h3></center>
                        </div>
                    </div>
                  <div class="row">
                    <div class="col">
                          <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend" >
                                  <span class="input-group-text" style="background-color:#85E9C9;border-color:#85E9C9;">Sub-Total Cost</span>
                              </div>
                              <input v-model="view.ViewSubTotalExpense" style="border-color:#85E9C9;" type="text" name="TotalExpense" class="form-control" data-readonly/>
                          </div>
                      </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#85E9C9;border-color:#85E9C9;">Total Cost</span>
                                </div>
                                <input v-model="view.ViewTotalExpense" style="border-color:#85E9C9;" type="text" name="TotalExpense" class="form-control" data-readonly/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" style="background-color:#85E9C9;border-color:#85E9C9;">Net From Rent</span>
                                </div>
                                <input v-model="view.ViewNetTrucker" style="border-color:#85E9C9;" type="text" name="ViewNetTrucker"  class="form-control" data-readonly/>
                            </div> 
                        </div>
                  </div>
                  </div>

                  
                  <div class="col-xs-12" v-show="editmode" style="border-style: solid;border-color: coral;">
                    <div class="row">
                        <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Collected Amount</span>
                              </div>
                              <input v-model="form.CollectedAmount" v-on:input="signalChangeCollectedAmount()" type="text" name="CollectedAmount"  class="form-control"   />
                            </div>
                        </div>
                        <div class="col" v-show="editmode">
                            <!-- EH HIDE SIYA NGA INPUT KUNG ADD NEW -->
                            <div class="input-group mb-3 input-group-sm"  >
                              <div class="input-group-prepend">
                                <span class="input-group-text">Balance Amount</span>
                              </div>
                              <input v-model="view.ViewBalanceAmount" type="text" name="BalanceAmount"  class="form-control" data-readonly/>
                            </div>
                            <!-- END SA HIDE CHURVA -->
                        </div>
                        <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">OR No./CR No.</span>
                              </div>
                              <input v-model="form.ORCRNumber" type="text" name="ORCRNumber"  class="form-control"   />
                            </div>
                        </div>
                        <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">OR/CR Date</span>
                              </div>
                              <input id="date" class="form-control" type="date" name="ORCRDate" v-model="form.ORCRDate">
                            </div>
                        </div>
                  </div>
                  
                  <div class="row">
                      <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Mode of Payment</span>
                              </div>
                              <input type="text" v-model="form.ModeOfPayment" name="ModeOfPayment" style="text-transform: uppercase;" class="form-control"/>
                            </div> 
                      </div>
                      <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Check No.</span>
                              </div>
                              <input v-model="form.CheckNumber" type="text" name="CheckNumber"  class="form-control"   />
                            </div>
                        </div>
                        <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Check Date</span>
                              </div>
                              <input id="date" class="form-control" type="date" name="CheckDate" v-model="form.CheckDate">
                            </div>
                        </div>
                      <div class="col" v-show="editmode">
                            <div class="input-group mb-3 input-group-sm">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Remarks</span>
                              </div>
                              <textarea v-model="form.Remarks" type="text" name="Remarks"  class="form-control"></textarea>
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
                      <tr v-for="jvcp in JeepVehicleCollectionPayments" v-bind:key="jvcp.OVLVCDTLID">
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
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Multiple Oustider Vehicle Log</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Multiple Outsider Vehicle Log's Info</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateJVL() : createJVCPMultiple()">
                <div class="modal-body">
                      <!-- <div class="form-inline" style="border-style: solid;border-color: coral;">
                        <div class="input-group mb-3 input-group-sm" style="margin-left:5px;">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Collected Amount</span>
                          </div>
                          <input
                      v-model="form.BillAmount" type="hidden"  name="BillAmount" class="form-control" data-readonly/>
                          <input  class="form-control" type="hidden" v-model="form.OVLVLHDRID_Link">
                          <input
                          v-model="form.CollectedAmount" type="text" name="CollectedAmount" v-on:input="signalChangeCollectedAmount()"  class="form-control"   />
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
                      </div> -->
                      <div class="col-xs-12" style="border-style: solid;border-color: coral;">
                      <div class="row">
                          <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Collected Amount</span>
                                </div>
                                <input v-model="form.CollectedAmount" v-on:input="signalChangeCollectedAmount()" type="text" name="CollectedAmount"  class="form-control"   />
                              </div>
                          </div>
                          <div class="col" v-show="editmode">
                              <!-- EH HIDE SIYA NGA INPUT KUNG ADD NEW -->
                              <div class="input-group mb-3 input-group-sm"  >
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Balance Amount</span>
                                </div>
                                <input v-model="view.ViewBalanceAmount" type="text" name="BalanceAmount"  class="form-control" data-readonly/>
                              </div>
                              <!-- END SA HIDE CHURVA -->
                          </div>
                          <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">OR No./CR No.</span>
                                </div>
                                <input v-model="form.ORCRNumber" type="text" name="ORCRNumber"  class="form-control"   />
                              </div>
                          </div>
                          <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">OR/CR Date</span>
                                </div>
                                <input id="date" class="form-control" type="date" name="ORCRDate" v-model="form.ORCRDate">
                              </div>
                          </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Mode of Payment</span>
                                </div>
                                <input type="text" v-model="form.ModeOfPayment" name="ModeOfPayment" style="text-transform: uppercase;" class="form-control"/>
                              </div> 
                        </div>
                        <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Check No.</span>
                                </div>
                                <input v-model="form.CheckNumber" type="text" name="CheckNumber"  class="form-control"   />
                              </div>
                          </div>
                          <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Check Date</span>
                                </div>
                                <input id="date" class="form-control" type="date" name="CheckDate" v-model="form.CheckDate">
                              </div>
                          </div>
                        <div class="col">
                              <div class="input-group mb-3 input-group-sm">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">Remarks</span>
                                </div>
                                <textarea v-model="form.Remarks" type="text" name="Remarks"  class="form-control"></textarea>
                              </div> 
                        </div>
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
    <div class="modal fade" id="addOVLDetails" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document" style="overflow-y: initial !important;">
            <div class="modal-content" >
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add OVL Details</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update OVL Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="!editmode ? updateJVL() : createOVLDetails()">
                <div class="modal-body" style="height: 450px;overflow-y: auto;">
                  <div class="col-xs-12">
                  <div class="row">
                        <div class="col">
                          <!-- COLLECTION HISTORY TABLE -->
                          <div style="height:200px" class="pre-scrollable">
                          <table class="table table-hover" v-show="editmode" >
                              <thead>
                                <tr >
                                    <th colspan="10" style="border-color: #E985A9;"><center>LOADING</center></th>
                                    <th colspan="10" style="border-color: #85E9C5;"><center>UNLOADING</center></th>
                                </tr>
                               <tr>
                                <th style="border-color: #E985A9;">Assignment</th>
                                <th style="border-color: #E985A9;">FLD/LOG</th>
                                <th style="border-color: #E985A9;">Time In</th>
                                <th style="border-color: #E985A9;">Time Start</th>
                                <th style="border-color: #E985A9;">Time End</th>
                                <th style="border-color: #E985A9;">Remarks</th>
                                <th style="border-color: #E985A9;">Load Fill</th>
                                <th style="border-color: #E985A9;">Hired Operator Hour</th>
                                <th style="border-color: #E985A9;">Job Code</th>
                                <th style="border-color: #E985A9;">No. Of Load</th>
                               <th style="border-color: #85E9C5;">Assignment</th>
                                <th style="border-color: #85E9C5;">FLD/LOG</th>
                                <th style="border-color: #85E9C5;">Time In</th>
                                <th style="border-color: #85E9C5;">Time Start</th>
                                <th style="border-color: #85E9C5;">Time End</th>
                                <th style="border-color: #85E9C5;">Remarks</th>
                                <th style="border-color: #85E9C5;">Load Fill</th>
                                <th style="border-color: #85E9C5;">Hired Operator Hour</th>
                                <th style="border-color: #85E9C5;">Job Code</th>
                                <th style="border-color: #85E9C5;">No. Of Load</th>
                              </tr> 
                              </thead>
                              <tbody>
                              <tr v-for="OVLDTL in OVLDTLDetails" v-bind:key="OVLDTL.OVLVLDTLID">
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingAssignment}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingFLDLOG}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingTimeIn}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingTimeStart}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingTimeEnd}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingRemarks}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingLoadFill}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingHiredOperatorHour}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingJobCode}}</td>
                                <td style="border-color: #E985A9;">{{OVLDTL.LoadingNoOfLoad}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingAssignment}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingFLDLOG}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingTimeIn}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingTimeStart}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingTimeEnd}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingRemarks}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingLoadFill}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingHiredOperatorHour}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingJobCode}}</td>
                                <td style="border-color: #85E9C5;">{{OVLDTL.UnLoadingNoOfLoad}}</td>
                                <!--<td>
                                  <a href="#" @click="editModalJVCP(jvcp)">
                                    <i class="fa fa-edit"></i>
                                  </a>
                                  /-->
                                  <td>
                                  <a href="#" @click="deleteModalOVLDTL(OVLDTL)">
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
                              <span class="input-group-text" style="display:none;">Header ID</span>
                            </div>
                            <input v-model="detail.PHBVLHDRID_Link" type="hidden"  name="PHBVLHDRID_Link" class="form-control"/>
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
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Assignment</span>
                          </div>
                          <input v-model="detail.LoadingAssignment" style="border-color: #E985A9;" type="text"  name="LoadingAssignment" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading Assignment</span>
                          </div>
                          <input v-model="detail.UnLoadingAssignment" style="border-color: #85E9C5;" type="text"  name="UnLoadingAssignment" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading FLD/LOG</span>
                          </div>
                          <input v-model="detail.LoadingFLDLOG" style="border-color: #E985A9;" type="text"  name="LoadingFLDLOG" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading FLD/LOG</span>
                          </div>
                          <input v-model="detail.UnLoadingFLDLOG" style="border-color: #85E9C5;" type="text"  name="UnLoadingFLDLOG" class="form-control"/>
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
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Remraks</span>
                          </div>
                          <textarea v-model="detail.LoadingRemarks" style="border-color: #E985A9;" type="text"  name="LoadingRemarks" class="form-control"></textarea>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading Remraks</span>
                          </div>
                          <textarea v-model="detail.UnLoadingRemarks" style="border-color: #85E9C5;" type="text"  name="UnLoadingRemarks" class="form-control"></textarea>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Load Fill</span>
                          </div>
                          <input v-model="detail.LoadingLoadFill" style="border-color: #E985A9;" type="text"  name="LoadingLoadFill" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading Load Fill</span>
                          </div>
                          <input v-model="detail.UnLoadingLoadFill" style="border-color: #85E9C5;" type="text"  name="UnLoadingLoadFill" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Hired Operator Hour</span>
                          </div>
                          <input v-model="detail.LoadingHiredOperatorHour" style="border-color: #E985A9;" type="text"  name="LoadingHiredOperatorHour" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading Hired Operator Hour</span>
                          </div>
                          <input v-model="detail.UnLoadingHiredOperatorHour" style="border-color: #85E9C5;" type="text"  name="UnLoadingHiredOperatorHour" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading Job Code</span>
                          </div>
                          <input v-model="detail.LoadingJobCode" style="border-color: #E985A9;" type="text"  name="LoadingJobCode" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading Job Code</span>
                          </div>
                          <input v-model="detail.UnLoadingJobCode" style="border-color: #85E9C5;" type="text"  name="UnLoadingJobCode" class="form-control"/>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #E985A9;border-color: #E985A9;">Loading No. Of Load</span>
                          </div>
                          <input v-model="detail.LoadingNoOfLoad" style="border-color: #E985A9;" type="text"  name="LoadingNoOfLoad" class="form-control"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3 input-group-sm">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #85E9C5;border-color: #85E9C5;">Unloading No. Of Load</span>
                          </div>
                          <input v-model="detail.UnLoadingNoOfLoad" style="border-color: #85E9C5;" type="text"  name="UnLoadingNoOfLoad" class="form-control"/>
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
    <search-driver v-on:changeTitle="updateTitle($event)"></search-driver>
    <search-operator v-on:changeTitleOperator="updateTitleOperator($event)"></search-operator>
    <search-ovlvehicle v-on:changeTitleVehicle="updateTitleVehicle($event)"></search-ovlvehicle>
    <search-client v-on:changeTitleClient="updateTitleClient($event)"></search-client>

  </div>
</template>

<script>
import searchDriverSweetLover from '../search/SearchJeep/SearchDriver.vue';
import searchOperatorSweetLover from '../search/SearchJeep/SearchOperator.vue';
import searchOVLVehicleSweetLover from '../search/SearchOVL/SearchOVLVehicle.vue';
import searchClientSweetLover from '../search/SearchJeep/SearchClient.vue';
import moment from 'moment';
import { log } from 'util';
// import {AgGridVue} from "@ag-grid-community/vue";
// import {AllCommunityModules} from '@ag-grid-community/all-modules';
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";
export default {
    components: {
            'search-driver' : searchDriverSweetLover,
            'search-operator' : searchOperatorSweetLover,
            'search-ovlvehicle' : searchOVLVehicleSweetLover,
            'search-client' : searchClientSweetLover,
            // AgGridVue
        },
  data() {
    return {
      // columnDefs: null,
      // rowData: null,
      // gridApi: null,
      // columnApi: null,
      // modules: AllCommunityModules,
      OVLDTLDetails:[],
      checkedNames: [],
      filteredblogs: [],
      csoatotals: [],
      checkedNamesFilter: [],
      editmode : false,
      equalequal : false,
      allSelected: false,
      jvls: [],
      jvlsobject: {},
      search: "",
      jvcps: {},
      drivers: [],
      vehicles: {},
      rates: {},
      operators: {},
      batch: [],
      jvlfilter: [],
      jvlbalamt: [],
      var1: "",
        var2: "",
        first: "",
        second: "",
        eq: "true",
        truevalue: "",
        falsevalue: "",
        SearchOVLPlateNo: "",
        DateFrom: "",
        DateTo:"",
      JeepVehicleCollectionPayments:{},
      form: new Form({
        OVLVLHDRID: "",
        OVLVLHDRIDFilter: "",
        OVLVLDate: "",
        OVLNo: "",
        OVLIDLink: "",
        OVLPlateNo: "",
        DriverIDLink: "",
        DriverLastName: "",
        DriverFirstName: "",
        DriverMiddleName: "",
        DriverExtName: "",
        TruckerIDLink: "",
        TruckerLastName: "",
        TruckerFirstName: "",
        TruckerMiddleName: "",
        TruckerExtName: "",
        BillAmount: "",
        LessAdmin: "",
        LessFuel: "",
        NetTrucker: "",
        Status: "",
        SOANumber: "",
        SOADate: "",
        ChargeInvoiceNumber: "",
        GLCode: "",
        CostCenter: "",
        PerHourRate: "",
        NumberofDays: "",
        NumberOfHours: "",
        DriverName: "",
        TruckerName: "",
        CollectedAmount: "",
        CollectedAmountHDR: "",
        BalanceAmountHDR: "",
        BalanceAmount: "",
        ORCRNumber: "",
        ORCRDate: "",
        Remarks: "",
        OVLVLHDRID_Link: "",
        TotalAmount: "",
        startreading: "",
        endreading: "",
        ClientName: "",
        ClientFirstName: "",
        ClientMiddleName: "",
        ClientLastName: "",
        ClientExtName: "",
        ClientIDLink: "",
        ModeOfPayment: "",
        MaintenanceCost:"",
        AmountExpense: "",
        Helper:"",
        Labor:"",
        TotalExpense:"",
        SubTotalExpense:"",
        FuelLiters: ""
        
        
      }),
      view: new Form({
        ViewLessFuel: "",
        ViewBillAmount:"",
        ViewNetTrucker: "",
        ViewPerHourRate: "",
        ViewBalanceAmount:"",
        ViewMaintenanceCost:"",
        ViewTotalExpense:"",
        ViewSubTotalExpense:""
      }),
      detail: new Form({
        LoadingAssignment: "",
        PHBVLHDRID_Link:"",
        // LoadingLocationName:"",
        LoadingFLDLOG:"",
        LoadingTimeIn: "",
        LoadingTimeStart: "",
        LoadingTimeEnd: "",
        LoadingRemarks:"",
        LoadingLoadFill:"",
        LoadingHiredOperatorHour: "",
        LoadingJobCode:"",
        LoadingNoOfLoad:"",
        // UnLoadingLocationName:"",
        UnLoadingAssignment: "",
        UnLoadingFLDLOG:"",
        UnLoadingTimeIn: "",
        UnLoadingTimeStart: "",
        UnLoadingTimeEnd: "",
        UnLoadingRemarks:"",
        UnLoadingLoadFill:"",
        UnLoadingHiredOperatorHour: "",
        UnLoadingJobCode:"",
        UnLoadingNoOfLoad:"",
        OVLVLHDRID_Link: "",
        OVLVLDTLID: ""


      })
    };
  },
  mounted() {
            //this.$parent.getSearchDriver();
            //this.$parent.getSearchOperator();
        
        },
  methods: {
    refreshtotalsoa(){
        this.form.TotalAmount="";
        this.form.OVLVLHDRID = this.checkedNames.join();
            axios.get('/api/getcsoasum', {params: {OVLVLHDRID: this.form.OVLVLHDRID}})
                .then(({ data }) => {
                    this.csoatotals = data;
                    this.form.TotalAmount = this.csoatotals[0].BillAmount;
                    console.log(this.form.TotalAmount);
                })
                .catch((err)=>{
                })
    },
    selectAll: function() {
            this.checkedNames = [];

            if (this.allSelected == false) {
                for (var user in this.filteredBlogs) {
                    this.checkedNames.push(this.filteredBlogs[user].OVLVLHDRID);
                }
                // this.form.OVLVLHDRID = this.checkedNames.join();
                // // axios.get('/api/getphbcsoasum', {params: {OVLVLHDRID: this.form.OVLVLHDRID}})
                // // .then(({ data }) => {
                // //     this.csoatotals = data;
                // //     this.form.TotalAmount = this.csoatotals[0].BillAmount;
                // //     console.log(this.form.TotalAmount);
                // // })
                // // .catch((err)=>{
                // // })
            }else{this.form.TotalAmount = "";}
        },
        select: function() {
            this.allSelected = false;
            
                
        },
      SearchDateFromTo(){
        
        //return this.jvls.filter(jvl =>{
         //       return jvl.OVLVLDate.includes(this.form.DateFrom)
          //    });
        /*var vm = this;
              var startdate = vm.form.DateFrom;
              var enddate = vm.form.DateTo;
              return _.filter(vm.jvls,(function(data){
                if ((_.isNull(startdate) && _.isNull(enddate))){
                  return true
                }
                else{
                  var date = data.OVLVLDate;
                  return date.includes(date >= startdate && date <= enddate);
                  
                }
              }))*/
      },
      InsertDetails(){
        this.detail.reset();
        this.detail.OVLVLHDRID_Link = this.form.OVLVLHDRID
        this.loadOVLDTL();
                $('#addOVLDetails').modal('show');
            },
      SetToUnpaid(){
        if(this.form.Status=="POSTED"){
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Can not Set to Unpaid. The Status is still POSTED.'
            })
        }else{
          this.form.Status="POSTED";
          this.form.BalanceAmount=this.form.BillAmount;
          var numeral = require('numeral');
                 this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
          this.form.CollectedAmount=0;
                this.$Progress.start();
                this.form.put('api/ovlpaidtoposted/'+this.form.OVLVLHDRID);
                  //$('#addNew').modal('hide');
                  toast.fire({
                      icon: "success",
                      title: "Outsider Vehicle Log is back to Unpaid"
                  });
                  this.deleteEntirePaymentDetail();
                  this.loadJVL();
                  this.getJVLBalanceAmount();
                  
                  this.$Progress.finish();
                  
                  
                  this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID
        }
        
            },
      signalChangestartreading(){
                 var totalreading = 0;
                 if(this.form.endreading!==""){
                  var startTime = moment(this.form.startreading, "HH:mm:ss a");
                  var endTime = moment(this.form.endreading, "HH:mm:ss a");
                  totalreading  = endTime.diff(startTime,'hours');
                  this.form.BillAmount = parseFloat(totalreading * this.form.PerHourRate).toFixed(2);
                  this.form.MaintenanceCost = parseFloat(this.form.BillAmount * 0.1).toFixed(2);
                  let semitotal = this.form.MaintenanceCost + this.form.LessFuel;
                  this.form.NetTrucker = parseFloat(this.form.BillAmount - semitotal).toFixed(2);
                    var numeral = require('numeral');
                    this.view.ViewBillAmount = numeral(this.form.BillAmount).format('0,0.00');
                    this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');
                    this.view.ViewMaintenanceCost = numeral(this.form.MaintenanceCost).format('0,0.00');
                    this.form.NumberOfHours = totalreading;
                    var tots = 0;
                    tots = parseFloat(this.form.LessFuel)+parseFloat(this.form.MaintenanceCost)+parseFloat(this.form.LessAdmin)+parseFloat(this.form.Helper)+parseFloat(this.form.Labor);
                    this.form.TotalExpense=tots;
                      this.view.ViewTotalExpense = numeral(tots).format('0,0.00');

                    this.form.TotalExpense=tots;
                    this.view.ViewTotalExpense = numeral(tots).format('0,0.00');
                    this.form.SubTotalExpense = parseFloat(this.form.BillAmount)-parseFloat(this.form.LessFuel)-parseFloat(this.form.MaintenanceCost)-parseFloat(this.form.LessAdmin);
                    this.view.ViewSubTotalExpense = numeral(this.form.SubTotalExpense).format('0,0.00');

                    if(this.eq=="true"){
                        this.form.BalanceAmount = this.form.BillAmount;
                    }
                }
                
            },
      signalChangeendreading(){
              var totalreading = 0;
              var startTime = moment(this.form.startreading, "HH:mm:ss a");
              var endTime = moment(this.form.endreading, "HH:mm:ss a");
              totalreading  = endTime.diff(startTime,'hours');
              this.form.BillAmount = parseFloat(totalreading * this.form.PerHourRate).toFixed(2);
              this.form.MaintenanceCost = parseFloat(this.form.BillAmount * 0.1).toFixed(2);
              
                    let semitotal = this.form.MaintenanceCost + this.form.LessFuel;
                    this.form.NetTrucker = parseFloat(this.form.BillAmount - semitotal).toFixed(2);
               var numeral = require('numeral');
                 this.view.ViewBillAmount = numeral(this.form.BillAmount).format('0,0.00');
                 this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');
                 this.view.ViewMaintenanceCost = numeral(this.form.MaintenanceCost).format('0,0.00');
                 this.form.NumberOfHours = totalreading;
                 var tots = 0;
                  tots = parseFloat(this.form.LessFuel)+parseFloat(this.form.MaintenanceCost)+parseFloat(this.form.LessAdmin)+parseFloat(this.form.Helper)+parseFloat(this.form.Labor);
                  

                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');
                  this.form.SubTotalExpense = parseFloat(this.form.BillAmount)-parseFloat(this.form.LessFuel)-parseFloat(this.form.MaintenanceCost)-parseFloat(this.form.LessAdmin);
                  this.view.ViewSubTotalExpense = numeral(this.form.SubTotalExpense).format('0,0.00');

                 if(this.eq=="true"){
                     this.form.BalanceAmount = this.form.BillAmount;
                     this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
                 }
            },
      signalChangeLessFuel(){
        var numeral = require('numeral');
        var tots = 0;
              this.form.LessAdmin = parseFloat(this.form.LessFuel * 0.1).toFixed(2);
              var tots = 0;
                  tots = parseFloat(this.form.LessFuel)+parseFloat(this.form.MaintenanceCost)+parseFloat(this.form.LessAdmin)+parseFloat(this.form.Helper)+parseFloat(this.form.Labor);
                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');

                  this.form.NetTrucker = parseFloat(this.form.BillAmount) - parseFloat(tots);
                  this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');

                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');
                  this.form.SubTotalExpense = parseFloat(this.form.BillAmount)-parseFloat(this.form.LessFuel)-parseFloat(this.form.MaintenanceCost)-parseFloat(this.form.LessAdmin);
                  this.view.ViewSubTotalExpense = numeral(this.form.SubTotalExpense).format('0,0.00');

            },
      signalChangeHelper(){
        var numeral = require('numeral');
        var tots = 0;
              var tots = 0;
                  tots = parseFloat(this.form.LessFuel)+parseFloat(this.form.MaintenanceCost)+parseFloat(this.form.LessAdmin)+parseFloat(this.form.Helper)+parseFloat(this.form.Labor);
                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');

                  this.form.NetTrucker = parseFloat(this.form.BillAmount) - parseFloat(tots);
                  this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');

                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');
                  this.form.SubTotalExpense = parseFloat(this.form.BillAmount)-parseFloat(this.form.LessFuel)-parseFloat(this.form.MaintenanceCost)-parseFloat(this.form.LessAdmin);
                  this.view.ViewSubTotalExpense = numeral(this.form.SubTotalExpense).format('0,0.00');

            },
      signalChangeLabor(){
        var numeral = require('numeral');
        var tots = 0;
              var tots = 0;
                  tots = parseFloat(this.form.LessFuel)+parseFloat(this.form.MaintenanceCost)+parseFloat(this.form.LessAdmin)+parseFloat(this.form.Helper)+parseFloat(this.form.Labor);
                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');

                  this.form.NetTrucker = parseFloat(this.form.BillAmount) - parseFloat(tots);
                  this.view.ViewNetTrucker = numeral(this.form.NetTrucker).format('0,0.00');

                  this.form.TotalExpense=tots;
                  this.view.ViewTotalExpense = numeral(tots).format('0,0.00');
                  this.form.SubTotalExpense = parseFloat(this.form.BillAmount)-parseFloat(this.form.LessFuel)-parseFloat(this.form.MaintenanceCost)-parseFloat(this.form.LessAdmin);
                  this.view.ViewSubTotalExpense = numeral(this.form.SubTotalExpense).format('0,0.00');

            },
      signalChangeCollectedAmount(){
              this.form.BalanceAmount = this.form.BalanceAmountHDR - this.form.CollectedAmount;
              var numeral = require('numeral');
              this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
              if(this.form.BalanceAmount == 0){
                  this.form.Status="PAID";
              }
              //this.form.CollectedAmount = this.form.CollectedAmountHDR;
            },
      updateTitleClient:function(updatedTitleClient){
                  this.form.ClientName = updatedTitleClient.LastName+ ', ' +updatedTitleClient.FirstName + ' '+updatedTitleClient.MiddleName+' '+updatedTitleClient.ExtName;
                  this.form.ClientIDLink = updatedTitleClient.id;
                  this.form.ClientLastName  =  updatedTitleClient.LastName;
                  this.form.ClientFirstName  =  updatedTitleClient.FirstName;
                  this.form.ClientMiddleName  =  updatedTitleClient.MiddleName;
                  this.form.ClientExtName  =  updatedTitleClient.ExtName;
                },
      updateTitle:function(updatedTitle){
              this.form.DriverName = updatedTitle.LastName+ ',' +updatedTitle.FirstName + ' '+updatedTitle.MiddleName+' '+updatedTitle.ExtName;
              this.form.DriverIDLink = updatedTitle.id;
              this.form.DriverLastName  =  updatedTitle.LastName;
              this.form.DriverFirstName  =  updatedTitle.FirstName;
              this.form.DriverMiddleName  =  updatedTitle.MiddleName;
              this.form.DriverExtName  =  updatedTitle.ExtName;
               // console.log(updatedTitle);
            },
            updateTitleOperator:function(updatedTitleOperator){
              this.form.TruckerName = updatedTitleOperator.LastName + ',' + updatedTitleOperator.FirstName + ' '+updatedTitleOperator.MiddleName+' '+updatedTitleOperator.ExtName;
              this.form.TruckerIDLink = updatedTitleOperator.id;
              this.form.TruckerLastName = updatedTitleOperator.LastName;
              this.form.TruckerFirstName = updatedTitleOperator.FirstName;
              this.form.TruckerMiddleName = updatedTitleOperator.MiddleName;
              this.form.TruckerExtName = updatedTitleOperator.ExtName;
               // console.log(updatedTitle);
            },
            updateTitleVehicle:function(updatedTitleVehicle){
              if(this.eq=="true"){
                this.form.OVLPlateNo = updatedTitleVehicle.PlateNumber;
                this.form.OVLIDLink = updatedTitleVehicle.MVID;

                this.form.TruckerName = updatedTitleVehicle.TruckerName;
                this.form.TruckerIDLink = updatedTitleVehicle.TruckerID;
                this.form.TruckerLastName = updatedTitleVehicle.TruckerLastName;
                this.form.TruckerFirstName = updatedTitleVehicle.TruckerFirstName;
                this.form.TruckerMiddleName = updatedTitleVehicle.TruckerMiddleName;
                this.form.TruckerExtName = updatedTitleVehicle.TruckerExtName;

                this.form.DriverName = updatedTitleVehicle.DriverName;
                this.form.DriverIDLink = updatedTitleVehicle.DriverID;
                this.form.DriverLastName  =  updatedTitleVehicle.DriverLastName;
                this.form.DriverFirstName  =  updatedTitleVehicle.DriverFirstName;
                this.form.DriverMiddleName  =  updatedTitleVehicle.DriverMiddleName;
                this.form.DriverExtName  =  updatedTitleVehicle.DriverExtName;
                // console.log(updatedTitle);
                this.getVehicleRate();
              }
              else{
                this.form.SearchOVLPlateNo = updatedTitleVehicle.PlateNumber;
              }
              
            },
            getVehicleRate(){
              axios.get('/api/getovlvehiclerate', {params: {OVLIDLink: this.form.OVLIDLink}})
               .then(response => {
                    this.batch = response.data;
                    this.form.PerHourRate=this.batch[0].PerHourRate;  
                    var numeral = require('numeral');
                 this.view.ViewPerHourRate = numeral(this.form.PerHourRate).format('0,0.00');
                    
                })
                .catch((err)=>{
                    
                })
            },
            getJVLFilter(){
              axios.get('/api/getjvlfilter', {params: {OVLIDLink: this.form.OVLIDLink}})
               .then(response => {
                    this.jvlfilter = response.data;
                    //this.form.PerHourRate=this.jvlfilter[0].BillAmount;
                })
                .catch((err)=>{
                    
                })
            },
            getJVCP(){
              axios.get('/api/getovcp', {params: {OVLVLHDRID_Link : this.form.OVLVLHDRID_Link}})
               .then(({ data }) => {
                    this.JeepVehicleCollectionPayments = data;
                    console.log(JeepVehicleCollectionPayments);
                })
                .catch((err)=>{
                   ;
                })
            },
            searchsearchVehicleFunction(){
              this.eq="false";
                $('#searchVehicle').modal('show');
            },
            searchVehicleFunction(){
                $('#searchVehicle').modal('show');
            },
            getVehicleIsReal(){
                axios.get("api/vehicle").then(({ data }) => (this.vehicles = data));
                console.log(this.vehicles);
            },
            searchOperatorFunction(){
                $('#searchOperator').modal('show');
            },
            getOperatorIsReal(){
                axios.get("api/operator").then(({ data }) => (this.operators = data));
                console.log(this.operators);
            },
            searchDriverFunction(){
                $('#searchDriver').modal('show');
            },
            getDriverIsReal(){
                axios.get("api/driver").then(({ data }) => (this.drivers = data));
                console.log(this.drivers);
            },
            searchClientFunction(){
                $('#searchClient').modal('show');
            },
      getResults(page = 1){
        axios.get('api/jvl?page=' + page).then(response => {
          this.jeepvehiclelog = response.data;
        });
      },
      updateJVL(OVLVLHDRID){
        console.log(this.form.Status);
        console.log(this.form.BalanceAmount);
        
          this.$Progress.start();
          this.form.put('api/ovl/'+this.form.OVLVLHDRID);
          
            //$('#addNew').modal('hide');
            toast.fire({
                icon: "success",
                title: "Outsider Vehicle Log successfully updated"
            });
            this.$Progress.finish();
            
            if (this.form.CollectedAmount!==""){//KUNG HEADER RA ANG GI UPDATE
                this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID
                this.createJVCP();
            }
            this.loadJVL();
      },
      deleteModal(OVLVLHDRID){

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
                this.$Progress.start();
                this.form.delete('api/phbvl/'+OVLVLHDRID);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.form.OVLVLHDRID_Link = OVLVLHDRID;
            axios.get('/api/deletephbvcpdtl', {params: {OVLVLHDRID_Link : this.form.OVLVLHDRID_Link}})
               .then(({ data }) => {
                })
                .catch((err)=>{
                   
                })
                this.$Progress.finish();
                this.loadJVL();
            }
            })
      },
      deleteModalJVCP(jvcp){
        if(this.form.BalanceAmount == 0 && this.form.Status == "PAID"){
            swal.fire({
            title: 'Ooopsie Doopsieee',
            text: "The transaction is already PAID.",
            icon: 'error',
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: '#d33'
          }).then((result) => {
            if (result.value) {
              
            }
            
          })
        }
        else{
            
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
              this.form.Status="PAID";
              
              this.form.BalanceAmount = this.form.BalanceAmount + jvcp.CollectedAmount;
              var numeral = require('numeral');
              this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
              var collectedamount = this.form.BillAmount - this.form.BalanceAmount;
              this.form.CollectedAmount = collectedamount;
              console.log("Bill Amount Before Delete:"+this.form.BillAmount);
              console.log("Balance Amount Before Delete:"+this.form.BalanceAmount);
              console.log("Selected Payment Detail Collected Amount Before Delete:"+jvcp.CollectedAmount);
              console.log("Value of Collected Amount Variable"+ this.form.CollectedAmount);
              this.form.ORCRNumber= jvcp.ORCRNumber;
              this.form.ORCRDate= jvcp.ORCRDate;
              this.form.Remarks=jvcp.Remarks;
                this.$Progress.start();
                //UPDATE FIRST
                this.form.put('api/ovl/'+this.form.OVLVLHDRID);
                //$('#addNew').modal('hide');
                this.loadJVL();
                this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID
                //END UPDATE

                this.form.delete('api/ovcp/'+jvcp.OVLVCDTLID);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.getJVCP();
                this.getJVLBalanceAmount();
                this.$Progress.finish();
                this.form.OVLVLHDRID_Link = jvcp.OVLVLHDRID_Link;
                this.form.CollectedAmount="";
                this.form.ORCRNumber= "";
                this.form.ORCRDate= "";
                this.form.Remarks="";
                
            }
            })
        }

            
      },
      editModal(jvl){
        this.form.OVLVLHDRID_Link = jvl.OVLVLHDRID;
        var numeral = require('numeral');
        this.view.ViewBillAmount = numeral(jvl.BillAmount).format('0,0.00');
        this.view.ViewNetTrucker = numeral(jvl.NetTrucker).format('0,0.00');
        this.view.ViewLessAdmin = numeral(jvl.LessAdmin).format('0,0.00');
        this.view.ViewPerHourRate = numeral(jvl.PerHourRate).format('0,0.00');
        this.view.ViewMaintenanceCost = numeral(jvl.MaintenanceCost).format('0,0.00');
        this.view.ViewSubTotalExpense = numeral(jvl.SubTotalExpense).format('0,0.00');
        this.view.ViewTotalExpense = numeral(jvl.TotalExpense).format('0,0.00');
        this.getJVCP();
        //console.log(this.form.OVLVLHDRID_Link);
          this.editmode = true;
          this.form.reset();
          this.form.fill(jvl);
          $('#addNew').modal('show');
          
          this.form.CollectedAmount="";
          this.form.BalanceAmount=jvl.BalanceAmount;
          this.form.BalanceAmountHDR=jvl.BalanceAmount;
          var numeral = require('numeral');
              this.view.ViewBalanceAmount = numeral(this.form.BalanceAmount).format('0,0.00');
          this.form.ORCRNumber= "";
          this.form.ORCRDate= "";
          this.form.Remarks="";
          this.form.ModeOfPayment="";
          
      },
      newModal(){
          this.editmode = false;
          this.form.reset();
          this.view.reset();
          $('#addNew').modal('show');
        let today= new Date().toISOString().slice(0, 10);
        this.form.OVLVLDate = today;
        this.form.LessFuel=0;
        this.form.LessAdmin=0;
        this.form.MaintenanceCost=0;
        this.form.Helper=0;
        this.form.Labor=0;
        this.form.FuelLiters=0;
      },
      closeModalMultiple(){
          location.reload();
          $('#addNewMultiple').modal('hide');
      },
      newModalMultiple(){
        this.var1=0;
        this.first=0;
        var i = 0;
        this.form.OVLVLHDRID=this.checkedNames;
        this.$Progress.start();
        if(this.checkedNames == ""){
          this.$Progress.fail();
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Transaction Selected.'
          })
        }
        else{
            axios.get('/api/getovlvlfilter', {params: {OVLVLHDRID: this.checkedNames}})
                .then(response => {
                  this.jvlfilter = response.data;
                    for(i=0;i < this.jvlfilter.length; i++){
                        if(this.jvlfilter[i].BillAmount != this.jvlfilter[0].BillAmount){
                          this.$Progress.fail();
                            swal.fire({
                                title: 'Ooopsie Doopsieee',
                                text: "The transactions that you have selected are not uniform in Bill Amount. Please review.",
                                icon: 'error',
                                showCancelButton: true,
                                showConfirmButton: false,
                                cancelButtonColor: '#d33'
                              }).then((result) => {
                                if (result.value) {
                                  
                                }
                                else{
                                  $('#addNewMultiple').modal('hide');
                                }
                              })
                            break;
                        }
                        else{
                          
                          
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
                  })//END AXIOS
                  this.$Progress.finish();
        }
        
        
          
         
      },
      doSomething(data) {
    console.log(data);
},
    loadJVL() {
      //axios.get("api/jvl").then(({ data }) => (this.jvls = data));
      axios.get('api/getovl')
      .then(response => {
        this.jvls = response.data;
        this.rowData = response.data;
        console.log(this.jvls);
      })
      .catch(function (error){
        console.log(error);
      })
      
    },
    loadOVLDTL() {
      //axios.get("api/jvl").then(({ data }) => (this.jvls = data));
      axios.get('api/getovldtl', {params: {OVLVLHDRID_Link: this.detail.OVLVLHDRID_Link}})
      .then(response => {
        this.OVLDTLDetails = response.data;
        console.log(this.OVLDTLDetails);
      })
      .catch(function (error){
        console.log(error);
      })
      
    },
    loadJVCP() {
      axios.get("api/jvcp").then(({ data }) => (this.jvcps = data));
    },
    createJVL() {
      this.$Progress.start();
      this.form.post("api/ovl").then(()=>{
        //$('#addNew').modal('hide');
        //$('.modal-backdrop').remove();
        this.form.reset();
        this.view.reset();
        let today= new Date().toISOString().slice(0, 10);
        this.form.OVLVLDate = today;
        toast.fire({
          icon: "success",
          title: "Outsider Vehicle Log successfully created"
        });
        this.$Progress.finish();
        this.loadJVL();
        this.form.LessFuel=0;
        this.form.FuelLiters=0;
        this.form.MaintenanceCost=0;
        this.form.LessAdmin=0;
        this.form.Helper=0;
        this.form.Labor=0;

      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Outsider Vehicle Log not added successfully'
                    })
                });
    },
    createOVLDetails() {
      this.$Progress.start();
      axios.get('api/insertovldtl', {params: {OVLVLHDRID_Link: this.detail.OVLVLHDRID_Link, LoadingAssignment: this.detail.LoadingAssignment,LoadingFLDLOG: this.detail.LoadingFLDLOG,LoadingTimeIn: this.detail.LoadingTimeIn,LoadingTimeStart: this.detail.LoadingTimeStart,LoadingTimeEnd: this.detail.LoadingTimeEnd,LoadingRemarks: this.detail.LoadingRemarks,LoadingLoadFill: this.detail.LoadingLoadFill,LoadingHiredOperatorHour: this.detail.LoadingHiredOperatorHour,LoadingJobCode: this.detail.LoadingJobCode,LoadingNoOfLoad: this.detail.LoadingNoOfLoad,UnLoadingAssignment: this.detail.UnLoadingAssignment,UnLoadingFLDLOG: this.detail.UnLoadingFLDLOG,UnLoadingTimeIn: this.detail.UnLoadingTimeIn,UnLoadingTimeStart: this.detail.UnLoadingTimeStart,UnLoadingTimeEnd: this.detail.UnLoadingTimeEnd,UnLoadingRemarks: this.detail.UnLoadingRemarks,UnLoadingLoadFill: this.detail.UnLoadingLoadFill,UnLoadingHiredOperatorHour: this.detail.UnLoadingHiredOperatorHour,UnLoadingJobCode: this.detail.UnLoadingJobCode,UnLoadingNoOfLoad: this.detail.UnLoadingNoOfLoad}})
      .then(response => {
        toast.fire({
          icon: "success",
          title: "OVL Detail successfully created"
        });
        this.$Progress.finish();
        this.loadOVLDTL();
      })
      .catch(function (error){
        this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'OVL Detail not added successfully'
                    })
      })
    },
    createJVCP() {
      this.form.post("api/ovcp").then(()=>{
        toast.fire({
          icon: "success",
          title: "Outsider Vehicle Log successfully created"
        });
        this.getJVCP();
        this.form.CollectedAmount="";
        //this.form.BalanceAmount=0;
        this.form.ORCRNumber= "";
        this.form.ORCRDate= "";
        this.form.Remarks="";
        this.getJVLBalanceAmount();
      })
      .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: 'error',
                        title: 'Outsider Vehicle Collection Payment not added successfully'
                    })
                });
    },
    getJVLBalanceAmount(){
      axios.get('/api/getovlvlbalanceamount', {params: {OVLVLHDRID: this.form.OVLVLHDRID}})
               .then(response => {
                    this.jvlbalamt = response.data;
                    this.form.BalanceAmountHDR = this.jvlbalamt[0].BalanceAmount;
                    console.log(this.jvlbalamt[0].BalanceAmount);
                })
                .catch((err)=>{
                    
                })
    },
    deleteEntirePaymentDetail(){
      this.form.delete('api/ovldeleteentirepaymentdetail/'+this.form.OVLVLHDRID);
                swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                this.form.OVLVLHDRID_Link = this.form.OVLVLHDRID;
                this.JeepVehicleCollectionPayments = [];
                this.getJVCP();
               
    },
    deleteModalOVLDTL(OVLDTL){
      this.detail.OVLVLDTLID = OVLDTL.OVLVLDTLID;
            axios.get('/api/deleteovldtl', {params: {OVLVLDTLID : this.detail.OVLVLDTLID}})
               .then(({ data }) => {
                 swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                })
                .catch((err)=>{
                   
                })
                this.loadOVLDTL();
               
    },
    createJVCPMultiple() {
      if(this.form.BalanceAmount == 0){
          this.form.Status="PAID";
      }
      else
      {
        this.form.Status="POSTED";
      }
            this.editmode = false;
            swal.fire({
            title: 'Are you sure you watn to save?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
            }).then((result) => {
            if (result.value) {
              
                this.$Progress.start();
                ////console.log(this.checkedNames);
                var arr = 0;
                for(var i = 0; i <this.checkedNames.length; i++){
                  arr = i;
                    console.log(this.checkedNames.length);
                  this.form.OVLVLHDRID_Link = this.checkedNames[i];
                  //console.log(this.form.OVLVLHDRID_Link);
                  //UPDATE VEHICLE LOG HDR
                    this.form.put('api/ovlvlovlvcp/'+this.checkedNames[i]);
                      $('#addNewMultiple').modal('hide');
                      
                //END UPDATE
                  //CREATE INSERT TO JEEP VEHICLE COLLECTION PAYMENT
                      this.form.post("api/ovcp").then(()=>{
                      //toast.fire({
                       //   icon: "success",
                        //  title: "Transaction done."
                      //}); 
                      swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                       
                    })
                  
                //END CREATE 
                 
                }
                
                this.$Progress.finish();
                //location.reload();
                this.loadJVL();
               
                this.checkedNames= [];
                this.allSelected = false;
            }
            })
              
        }
        // getSelectedRows(){
        //   const selectedNodes = this.gridApi.getSelectedNodes();
        //   const selectedData = selectedNodes.map(node => node.data);
        //   this.checkedNames= selectedData.map(node => node.OVLVLHDRID).join();
        // },
        // onGridReady(params){
        //   this.gridApi = params.api;
        //   this.columnApi = params.columnApi;
        // },
        // onRowSelected(event) {
        //         const selectedNodes = this.gridApi.getSelectedNodes();
        //   const selectedData = selectedNodes.map(node => node.data);
        //   this.checkedNames= selectedData.map(node => node.OVLVLHDRID).join();
        //     },
  },
  created() {
    
    this.loadJVL();
    
    //setInterval(() => this.loadDriver(),3000);
  },
  // beforeMount() {
  //     this.columnDefs = [
  //         {headerName: 'ID', field: 'OVLVLHDRID',checkboxSelection: true},
  //         {headerName: 'Date', field: 'OVLVLDate'},
  //         {headerName: 'VL No.', field: 'OVLNo'},
  //         {headerName: 'Plate No.', field: 'OVLPlateNo',filter:true},
  //         {headerName: 'Driver', field: 'DriverName',filter:true},
  //         {headerName: 'Billable Amt.', field: 'BillAmount'},
  //         {headerName: 'Less Admin', field: 'LessAdmin'},
  //         {headerName: 'Less Fuel', field: 'LessFuel'},
  //         {headerName: 'Net Operator', field: 'NetTrucker'},
  //         {headerName: 'Status', field: 'Status'},
  //         {headerName: 'SOA No.', field: 'SOANumber'},
  //         {headerName: 'SOA Date', field: 'SOADate'}
  //     ];
  //     // fetch('https://api.myjson.com/bins/15psn9')
  //     //   .then(result => result.json())
  //     //   .then(rowData => this.rowData = rowData);
  //     // this.rowData = this.jvls;
  //     // this.rowData = [
  //     //      {OVLVLDate: this.jvls.OVLVLDate, OVLNo: this.jvls.OVLNo, OVLPlateNo: this.jvls.OVLNo,DriverName: this.jvls.DriverName,BillAmount: this.jvls.BillAmount,LessAdmin: this.jvls.LessAdmin,LessFuel: this.jvls.LessFuel,NetTrucker: this.jvls.NetTrucker,Status: this.jvls.Status,SOANumber: this.jvls.SOANumber,SOADate: this.jvls.SOADate}
  //     // ];
  // },
  computed: {
            filteredBlogs(){
              if(this.DateFrom !== "" || this.DateTo !== "" && this.SearchOVLPlateNo !==""){
                  this.SearchOVLPlateNo="";
                  var vm = this;
                  var startdate = vm.DateFrom;
                  var enddate = vm.DateTo;
                  return _.filter(vm.jvls,(function(data){
                    if ((_.isNull(startdate) && _.isNull(enddate))){
                      return true
                    }
                    else{
                      var date = data.OVLVLDate;
                      return(date >= startdate && date <= enddate);
                      
                    }
                  }))
              }
              else{
                this.DateFrom = "";
                this.DateTo = ""
                //return this.jvls.filter(jvl =>{
                //return jvl.OVLPlateNo.includes(this.form.OVLPlateNo)
              //});
              return this.jvls.filter((samsung) => {
                return this.SearchOVLPlateNo.toLowerCase().split(' ').every(v => samsung.OVLPlateNo.toLowerCase().includes(v));
            });
              }
              

              
            },
           
        }
};
</script>







