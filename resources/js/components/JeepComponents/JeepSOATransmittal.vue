<style>
input[data-readonly] {
	pointer-events: none;
}
#stringinput {
	min-width: 500px;
	min-height: 80px;
	max-width: 500px;
	max-height: 80px;
	text-align: left;
	overflow-y: auto;
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
    <div class="col-xs-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title"><b>For Transmittal Jeep SOA</b></h3>
          <br>
          <form style="border-style: solid;border-color: coral;" @submit.prevent="loadCSOA">
			  	<div class="row">
				  <div class="form-inline col-md-8">
					<div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
						<div class="input-group-prepend">
							<span class="input-group-text">Search Date From</span>
						</div>
						<input  class="form-control" type="date" name="DateFrom" v-model="DateFrom" required>
					</div>
					<div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
						<div class="input-group-prepend">
							<span class="input-group-text">Search Date To</span>
						</div>
						<input  class="form-control" type="date" name="DateTo" v-model="DateTo" required>
						<div class="input-group-append">
							<button class="btn btn-outline-secondary">Search</button>
						</div>
					</div>
            	   </div>
				   <div class="col-md-3">
					   	<div class="input-group mb-3 input-group-sm" style="margin-top:10px;margin-left:5px;">
							<input  class="form-control" type="text" name="TransmittalNo" v-model="TransmittalNo" readonly>
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" @click="searchTransmittal"><i class="fa fa-search"></i></button>
								<button class="btn btn-outline-primary"  type="button" @click="printTransmittal"><i class="fa fa-print"></i></button>
							</div>
						</div>
				   </div>
			  </div>
              
            </form>
          <br>
        </div>
		<div class="card-body">
			<div class="row">
				<div class="col-md-12">
					<ag-grid-vue
						style="width: 100%; height: 300px;"
						class="ag-theme-balham"
						:columnDefs="columnDefs"
						:rowData="csoas"
						rowSelection="multiple"
						@grid-ready="onGridReady">
					</ag-grid-vue>
				</div>
			</div>
			 <div class="row">
          <div class="col-md-6">
            <label>Prepared By</label>
              <input
                v-model="signatories.prepared_by"
                type="text"
                name="Prepared_by"
                placeholder=""
                class="form-control"
                required
                disabled
              />
          </div>
          <div class="col-md-6">
            <label>Noted By</label>
            <b-input-group>
              <input
                v-model="signatories.noted_by"
                type="text"
                name="Prepared_by"
                placeholder=""
                class="form-control"
                required
                disabled
              />
              <b-input-group-append>
                <b-button
                  @click="searchSearchSignatoryButton(1)"
                  variant="outline-primary"
                  size="sm"
                ><i class="fa fa-search" aria-hidden="true"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
		</div>
		  
        <div class="card-footer">
        <div class="row">
            <div class="col">
                <button class="btn btn-success" @click="createTransmittal">
                    Create Transmittal
                </button>
            </div>
        </div>
            
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
	<search-transmittal v-on:rowClick="transmittalClose($event)"></search-transmittal>
	<search-signatory v-on:rowClick="signatoryClose($event)"></search-signatory>
  </div>
</template>
<script>
import { log } from 'util';
import searchTransmittal from '../search/golfcart-transmittal.vue';
import searchSignatory from '../search/SearchAllowance/SearchSignatories.vue';
import moment from 'moment';
export default {
	components: {
		'search-transmittal': searchTransmittal,
		'search-signatory': searchSignatory,
		AgGridVue,
	},
	data() {
		return {
			DateFrom: '',
			DateTo: '',
			columnDefs: [],
			csoas: [],
			signatories: {
				noted_by: '',
				noted_by_des: '',
				prepared_by: '',
				prepared_by_des: '',
			},
			TransmittalNo: '',
		};
	},
	mounted() {
		this.loadCSOA();
		this.getTransmittalNo();
		this.getUser();
	},
	created() {
		let today = new Date().toISOString().slice(0, 10);
		this.DateFrom = today;
		this.DateTo = today;
	},
	methods: {
		onGridReady(params) {
			this.gridApi = params.api;
			this.columnApi = params.columnApi;
		},
		searchSearchSignatoryButton(number) {
			Fire.$emit('searchSignatory', number);
		},
		transmittalClose: function(row) {
			this.transmittal_no = row.series_no;
		},
		signatoryClose: function(row) {
			if (row.number == 1) {
				this.signatories.noted_by = row.SignatoryName;
				this.signatories.noted_by_des = row.Designation;
			}
		},
		getTransmittalNo() {
			axios.get('api/jTNo').then(({ data }) => {
				this.TransmittalNo = data;
			});
		},
		printTransmittal() {
			this.$Progress.start();
			axios
				.get('api/reportJeepTransmittal', {
					params: { searchTransmittalExists: true, transmittal_no: this.transmittal_no },
				})
				.then(response => {
					if (response.data.success) {
						window.open('api/reportJeepTransmittal?report=true&transmittal_no=' + this.transmittal_no);
						this.getTransmittalNo();
						this.loadCSOA();
					} else {
						return toast.fire({
							icon: 'warning',
							title: 'No data found in this transmittal number.',
						});
					}
					this.$Progress.finish();
				})
				.catch(function(error) {
					return toast.fire({
						icon: 'warning',
						title: 'Something went wrong.',
					});
				});
		},
		searchTransmittal() {
			Fire.$emit('searchTransmittal', 'jeep');
		},
		createTransmittal() {
			var selectedNodes = this.gridApi.getSelectedNodes();
			var selectedData = selectedNodes.map(node => node.data);
			var selectedDataStringPresentation = selectedData.map(node => node.Soa_JeepID).join(',');
			if (!selectedDataStringPresentation) {
				return swal.fire('Confirmation!', 'Select Transaction to Proceed', 'warning');
			}
			if (!this.TransmittalNo) {
				return swal.fire('Confirmation!', 'No transmittal no to be saved', 'warning');
			}
			if (!this.signatories.noted_by) {
				return swal.fire('Confirmation!', 'Select Noted By to Proceed', 'warning');
			}
			var data = Object.assign({}, this.signatories);
			data.ids = selectedDataStringPresentation;
			axios
				.post('jeep/create_transmittal/', data)
				.then(({ response }) => {
					swal.fire('SUCCESS!', 'The transmittal has been created.', 'success');
					this.printTransmittal();
				})
				.catch(function(error) {
					swal.fire('ERROR!', 'Something went wrong', 'error');
				});
		},
		getUser() {
			axios
				.get('api/allowance', { params: { getUser: true } })
				.then(response => {
					this.signatories.prepared_by = response.data.name;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		loadCSOA() {
			this.columnDefs = [
				{
					headerName: 'SOA Date',
					field: 'JeepSoaDate',
					width: 200,
					resizable: true,
				},
				{
					headerName: 'SOA No',
					field: 'GSCSoaSeriesNo',
					width: 200,
					resizable: true,
				},
				{
					headerName: 'Billed To',
					field: 'BilledName',
					width: 300,
					resizable: true,
				},
				{
					headerName: 'Charge Invoice No',
					field: 'InvoiceNo',
					width: 200,
					resizable: true,
				},
				{
					headerName: 'Status',
					field: 'Status',
					resizable: true,
					width: 250,
				},
			];
			axios
				.get('api/getcsoatransmitted', { params: { from: this.DateFrom, to: this.DateTo } })
				.then(response => {
					console.log(response.data);
					this.csoas = response.data;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>






