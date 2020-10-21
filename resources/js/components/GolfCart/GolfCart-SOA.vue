<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">GOLFCART SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart">Masterfile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-rental">Rental</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/golfcart-soa">Statement of Account (SOA)</router-link>
              <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-payment">Payment</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-ledger">General / Subsidiary Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/golfcart-adjustment">Adjustment</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container" v-if="!transmittal">
        <div class="row mt-2">
          Search by Trans Date
          <div class="col">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
              v-model="datefrom"
            />
          </div>
          <div class="col">
            <input
              type="date"
              class="form-control form-control-sm mb-2"
              placeholder="Search Rental..."
              v-model="dateto"
            />
          </div>
          <div class="col">
            <button class="btn btn-secondary" @click="preview()">Preview</button>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <!-- <ag-grid-vue
              style="width: 1050px; height: 250px;"
              class="ag-theme-balham"
              :columnDefs="columnDefs"
              :rowData="filter"
              @grid-ready="onGridReady"
            ></ag-grid-vue> -->
            <kendo-grid :height="250" :data-source="filter" :selectable="true" :sortable="true">
              <kendo-grid-column :field="'trans_date'" :title="'Date'"></kendo-grid-column>
              <kendo-grid-column :field="'golfcart_no'" :title="'Golfcart Name'"></kendo-grid-column>
              <kendo-grid-column :field="'reference_no'" :title="'Reference No'"></kendo-grid-column>
              <kendo-grid-column :field="'description'" :title="'Description'"></kendo-grid-column>
              <kendo-grid-column :field="'account_code'" :title="'Account Code'"></kendo-grid-column>
              <kendo-grid-column :field="'debit_amount'" :title="'Amount'" :format="'{0:c2}'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <p>Monthly Total</p>
            <kendo-grid
              :height="100"
              :width="100"
              :data-source="grandtotal"
              :selectable="true"
              :sortable="true"
            >
              <kendo-grid-column :field="'x_month'" :title="'Month'"></kendo-grid-column>
              <kendo-grid-column :field="'x_year'" :title="'Year'"></kendo-grid-column>
              <kendo-grid-column :field="'total_amount'" :title="'Total'"></kendo-grid-column>
            </kendo-grid>
          </div>
        </div>
        <create-soa :rental="filter" :grandtotal="grandtotal"></create-soa>
        <review-soa></review-soa>
        <div class="row mt-2">
          <div class="col">
            <button type="button" class="btn btn-primary" @click="create_soa()">Create SOA</button>
            <button type="button" class="btn btn-success" @click="review_soa()">Manage SOA Golfcart</button>
            <button type="button" class="btn btn-info" @click="transmittal = true">Create SOA Transmittal</button>
          </div>
        </div>
      </div>
      <div class="container" v-if="transmittal">
        <div class="row mt-2">
          <div class="col">
            Search by:
            <select class="form-control form-control-sm mb-2" v-model="searchBy">
              <option value="1">Trans Date</option>
              <option value="2">SOA Number</option>
              <option value="3">Payee</option>
            </select>
          </div>
          <div class="col-4" v-if="searchBy == 1">
            <div class="row">
              <div class="col-6">
                &nbsp;
              <input
                type="date"
                class="form-control form-control-sm mb-2"
                placeholder="Search Rental..."
                v-model="datefrom"
              />
              </div>
              <div class="col-6">
                &nbsp;
                <input
                  type="date"
                  class="form-control form-control-sm mb-2"
                  placeholder="Search Rental..."
                  v-model="dateto"
                />
            </div> 
            </div>
          </div>
          <div class="col-4" v-if="searchBy == 2">
             &nbsp;
            <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder="Search SOA Number..."
                v-model="searchSOANo"
              />
          </div>
          <div class="col-4" v-if="searchBy == 3">
             &nbsp;
            <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder="Search Payee..."
                v-model="searchPayee"
              />
          </div>
          <div class="col mt-3">
            <button class="btn btn-secondary" @click="transmittal_preview()">Preview</button>
          </div>
          <div class="col">
            <div class="form-group">
              Transmittal Number
              <b-input-group>
              <input
                v-model="transmittal_no"
                type="text"
                name="transmittal_no"
                placeholder=""
                class="form-control"
                disabled
              />
              <b-input-group-append>
              <b-button
                @click="searchTransmittal()"
                variant="outline-primary"
                size="sm"
              ><i class="fa fa-search" aria-hidden="true"></i>
              </b-button>
              <b-button
                @click="print_transmittal()"
                variant="outline-primary"
                size="sm"
              ><i class="fa fa-print" aria-hidden="true"></i></b-button>
              </b-input-group-append></b-input-group>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12">
            <ag-grid-vue
                 style="width: 100%; height: 300px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="transmittalList"
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
        <div class="row mt-2">
          <div class="col">
            <button type="button" class="btn btn-primary" @click="transmittal = false">Back to Create SOA</button>
            <button type="button" class="btn btn-success" @click="create_transmittal()">Save Transmittal</button>
          </div>
        </div>
      </div>
    </div>
    <search-signatory v-on:rowClick="signatoryClose($event)"></search-signatory>
    <search-transmittal v-on:rowClick="transmittalClose($event)"></search-transmittal>
  </div>
</template>

<script>
import createSoa from '../search/create-soa.vue';
import reviewSoa from '../search/soa-review.vue';
import searchSignatory from '../search/SearchAllowance/SearchSignatories.vue';
import searchTransmittal from '../search/golfcart-transmittal.vue';
import moment from 'moment';
export default {
	components: {
		'create-soa': createSoa,
		'review-soa': reviewSoa,
		'search-signatory': searchSignatory,
		'search-transmittal': searchTransmittal,
		AgGridVue,
	},
	data() {
		return {
			filter: null,
			rental: {},
			grandtotal: {},
			datefrom: '',
			dateto: '',
			columnDefs: null,
			gridApi: null,
			columnApi: null,
			transmittal: false,
			searchBy: 1,
			transmittalList: [],
			searchSOANo: '',
			searchPayee: '',
			transmittal_no: '',
			signatories: {
				noted_by: '',
				noted_by_des: '',
				prepared_by: '',
				prepared_by_des: '',
			},
		};
	},
	mounted() {
		this.getUser();
		this.transmittal_preview();
		this.getTransmittalNo();
	},
	methods: {
		onGridReady(params) {
			this.gridApi = params.api;
			this.columnApi = params.columnApi;
		},
		preview() {
			axios.get('soa/search/' + this.datefrom + '/' + this.dateto).then(({ data }) => {
				this.rental = data.data;
				this.filter = this.rental;
				this.grandtotal = data.grandtotal;
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
		getTransmittalNo() {
			axios.get('soa/tNo').then(({ data }) => {
				this.transmittal_no = data;
			});
		},
		transmittal_preview() {
			this.columnDefs = [
				{
					headerName: 'SOA Date',
					field: 'soa_date',
					resizable: true,
				},
				{
					headerName: 'SOA No',
					field: 'series_no',
					resizable: true,
				},
				{
					headerName: 'Billed To',
					field: 'billed_name',
					resizable: true,
				},
				{
					headerName: 'Charge Invoice No',
					field: 'charge_invoice_no',
					resizable: true,
				},
				{
					headerName: 'Status',
					field: 'status',
					resizable: true,
				},
			];
			if (this.searchBy == 1) {
				axios.get('soa/reviewt/' + this.datefrom + '/' + this.dateto).then(({ data }) => {
					this.transmittalList = data.data;
				});
			} else if (this.searchBy == 2) {
				axios.get('soa/soa_number/' + this.searchSOANo).then(({ data }) => {
					this.transmittalList = data.data;
				});
			} else {
				axios.get('soa/payee/' + this.searchPayee).then(({ data }) => {
					this.transmittalList = data.data;
				});
			}
		},
		create_transmittal() {
			var selectedNodes = this.gridApi.getSelectedNodes();
			var selectedData = selectedNodes.map(node => node.data);
			var selectedDataStringPresentation = selectedData.map(node => node.id).join(',');
			if (!selectedDataStringPresentation) {
				return swal.fire('Confirmation!', 'Select Transaction to Proceed', 'warning');
			}
			if (!this.transmittal_no) {
				return swal.fire('Confirmation!', 'No transmittal no to be saved', 'warning');
			}
			if (!this.signatories.noted_by) {
				return swal.fire('Confirmation!', 'Select Noted By to Proceed', 'warning');
			}
			var data = Object.assign({}, this.signatories);
			data.ids = selectedDataStringPresentation;
			axios
				.post('soa/create_transmittal/', data)
				.then(({ response }) => {
					swal.fire('SUCCESS!', 'The transmittal has been created.', 'success');
					this.print_transmittal();
				})
				.catch(function(error) {
					swal.fire('ERROR!', 'Something went wrong', 'error');
				});
		},
		searchTransmittal() {
      console.log('yes');
			Fire.$emit('searchTransmittal', 'golfcart');
		},
		print_transmittal() {
			this.$Progress.start();
			axios
				.get('api/reportGCTransmittal', {
					params: { searchTransmittalExists: true, transmittal_no: this.transmittal_no },
				})
				.then(response => {
					if (response.data.success) {
						window.open('api/reportGCTransmittal?report=true&transmittal_no=' + this.transmittal_no);
						this.getTransmittalNo();
						this.transmittal_preview();
					} else {
						return toast.fire({
							icon: 'warning',
							title: 'No data found in this transmittal number.',
						});
					}
					this.$Progress.finish();
				})
				.catch(function(error) {
					console.log(error);
				});
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
		create_soa() {
			axios.get('soa/search/' + this.datefrom + '/' + this.dateto).then(({ data }) => {
				this.rental = data.data;
				this.filter = this.rental;
				this.grandtotal = data.grandtotal;
				if (this.filter.length == 0) {
					swal.fire('No Rental Data Found.', 'warning');
				} else {
					$('#createSOA').modal('show');
				}
			});
		},
		review_soa() {
			$('#reviewSOA').modal('show');
		},
		clearData() {
			this.form.reset();
		},
		searchGolfcart() {
			$('#searchGolfcart').modal('show');
		},
		getData(data) {
			this.form.golfcart_no = data.name;
			this.form.gcid_link = data.id;
		},
	},
	created() {
		this.datefrom = moment().format('YYYY-MM-DD');
		this.dateto = moment().format('YYYY-MM-DD');
	},
};
</script>
