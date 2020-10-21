<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="reviewSOA"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Golf Cart SOA Review</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row mt-3">
                <div class="col-3">
                  Status
                  <select class="form-control form-control-sm mb-2" v-model="status">
                    <option>ACTIVE</option>
                    <option>TRANSMITTED</option>
                    <option>CANCELLED</option>
                    <option>POSTED</option>
                  </select>
                </div>
                <div class="col-3">
                  SOA Date From
                  <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    v-model="datefrom"
                  />
                </div>
                <div class="col-3">
                  SOA Date To
                  <input
                    type="date"
                    class="form-control form-control-sm mb-2"
                    v-model="dateto"
                  />
                </div>
                <div class="col-3 mt-3">
                  <button class="btn btn-secondary" @click="review()">Review</button>
                </div>
              </div>
              <kendo-grid
                :height="200"
                :data-source="filter"
                :selectable="true"
                :sortable="true"
                v-on:change="onChange"
              >
                <kendo-grid-column :field="'soa_date'" :title="'SOA Date'"></kendo-grid-column>
                <kendo-grid-column :field="'series_no'" :title="'SOA No'"></kendo-grid-column>
                <kendo-grid-column :field="'billed_name'" :title="'Billed To'"></kendo-grid-column>
                <kendo-grid-column :field="'charge_invoice_no'" :title="'Charge Invoice No'"></kendo-grid-column>
                <kendo-grid-column :field="'status'" :title="'Status'"></kendo-grid-column>
              </kendo-grid>
            </div>
          </div>
          <div class="container" v-if="showButton">
            <div class="row">
              <div class="col">
                <p>SOA: {{ soa_no }}</p>
                <button type="button" @click="soa_detail()" class="btn btn-primary">View Detail</button>

                <button type="button" class="btn btn-danger" @click="cancel_soa(id)">Cancel SOA</button>
                <button type="button" class="btn btn-primary" @click="view_soa()">Preview SOA Form</button>
                <button type="button" class="btn btn-success" v-if="table_status === 'ACTIVE'" @click="for_transmittal()">Submit for Transmittal</button>
                <button type="button" class="btn btn-success" v-if="table_status === 'TRANSMITTED'" @click="for_posting()">POST</button>
                <button type="button" class="btn btn-warning" v-if="table_status === 'CANCELLED' || table_status === 'POSTED'" @click="for_reactivation()">REACTIVATE</button>
                <!-- <button
                                    type="button"
                                    class="btn btn-primary"
                                    @click="paid_soa()"
                                >
                                    Set as PAID / COLLECTED
                </button>-->
              </div>
            </div>
          </div>
          <div class="container" v-if="showDetail">
            <div class="row">
              <kendo-grid :height="150" :data-source="detail" :selectable="true" :sortable="true">
                <kendo-grid-column :field="'period_month'" :title="'Period Month'"></kendo-grid-column>
                <kendo-grid-column :field="'year'" :title="'Year'"></kendo-grid-column>
                <kendo-grid-column :field="'amount'" :title="'Amount'"></kendo-grid-column>
              </kendo-grid>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              <i class="far fa-window-close"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
export default {
	data() {
		return {
			id: 0,
			soa_no: '',
			searching: '',
			billed_name: '',
			billed_address: '',
			preparedBy: '',
			notedBy: '',
			approvedBy: '',
			preparedByPos: '',
			notedByPos: '',
			approvedByPos: '',
			soa_date: '',
			golfcart: {},
			filter: {},
			detail: {},
			datas: [],
			showButton: false,
			showDetail: false,
      signatory: {},
      status: 'ACTIVE',
      table_status: '',
		};
	},
	methods: {
		soa_detail() {
			axios.get('soa/details/' + this.id).then(({ data }) => {
				this.detail = data.data;
			});
			this.showDetail = true;
		},
		paid_soa() {
			if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				swal
					.fire({
						title: 'Are you sure you want to set this as PAID/COLLECTED?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, Cancel it!',
					})
					.then(result => {
						if (result.value) {
							axios.get('soa/collected/' + this.id).then(({ data }) => {
								this.review();
							});
						}
					});
			}
		},
		view_soa() {
			if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				this.$Progress.start();
				axios.get('soa/details/' + this.id).then(({ data }) => {
					var doc = new jsPDF();
					// doc.setFont("courier");
					doc.setFontType('bold');
					doc.setFontSize(10);
					doc.addImage(Logo, 'PNG', 15, 5, 30, 30);
					doc.setFontSize(12);
					doc.text('GENERAL SERVICES MULTIPURPOSE COOPERATIVE', 50, 15);
					doc.setFontSize(9);
					doc.text('Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon', 50, 20);
					doc.text('CDA # 9520-10019987-1 / TIN: 411-478-949-000', 50, 25);
					doc.setFontType('normal');
					doc.text('STATEMENT OF ACCOUNT', 80, 45);
					doc.text('SOA# ' + this.soa_no, 150, 40);
					doc.text('BILLED TO:                    ' + this.billed_name, 15, 57);
					doc.text(this.billed_address, 50, 65);
					doc.text(
						'PERIOD COVERED:      FOR THE MONTH OF ' + moment(String(this.soa_date)).format('MMMM YYYY'),
						15,
						75
					);

					doc.autoTable({
						columnStyles: {
							0: { halign: 'left' },
							1: { halign: 'left' },
							2: { halign: 'left' },
							3: { halign: 'left' },
						}, // European countries centered
						body: data.data,
						columns: [
							{ header: 'Month', dataKey: 'period_month' },
							{ header: 'Year', dataKey: 'year' },
							{ header: 'Particulars', dataKey: 'particulars' },
							{ header: 'Amount', dataKey: 'amount' },
						],
						margin: { top: 80 },
					});
					var numeral = require('numeral');
					var tots = numeral(data.sum).format('0,0.00');
					doc.text('TOTAL AMOUNT: ' + tots, 140, 140);
					var converter = require('number-to-words');
					var words = converter.toWords(data.sum).toUpperCase() + ' PESOS ONLY';
					var splitTitle = doc.splitTextToSize(words, 260);
					doc.text('Amount in words: ' + splitTitle, 15, 150);
					doc.text('Please issue check in the name of GENERAL SERVICES MULTIPURPOSE COOPERATIVE', 15, 160);
					doc.text('PREPARED/CHECKED BY:', 15, 180);
					doc.text(this.preparedBy, 15, 190);
					doc.setFontSize(9);
					doc.text(this.preparedByPos, 15, 195);
					doc.setFontSize(10);
					doc.text('APPROVED FOR PAYMENT:', 110, 180);
					doc.text(this.approvedBy, 110, 190);
					doc.setFontSize(9);
					doc.text(this.preparedByPos, 110, 195);
					doc.setFontSize(10);
					doc.text('NOTED BY:', 15, 205);
					doc.text(this.notedBy, 15, 210);
					doc.setFontSize(9);
					doc.text(this.notedByPos, 15, 215);
					doc.setFontSize(9);
					doc.text(
						'Contact #s: 0917-7011814 / 0917-7022814 / 0917-7033814 / 0917-3199733 / 0917-3199714 / 0917-77796580',
						20,
						260
					);
					doc.setFontSize(10);
					doc.text('Website: www.gsc.com.ph / Email add: gensercoop@yahoo.com', 50, 265);
					doc.text('``Resourceful Workmanship``', 80, 270);
					doc.save('golfcart_soa_' + this.soa_no + '.pdf');
				});
				this.$Progress.finish();
			}
		},
		for_transmittal() {
			if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				swal
					.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, Submit it!',
					})
					.then(result => {
						if (result.value) {
							axios.get('soa/transmit/' + this.id).then(({ data }) => {
								this.review();
							});
						}
					});
			}
    },
    for_posting(){
      if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				swal
					.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, Post it!',
					})
					.then(result => {
						if (result.value) {
							axios.get('soa/post/' + this.id).then(({ data }) => {
								this.review();
							});
						}
					});
			}
    },
    for_reactivation(){
      if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				swal
					.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, Reactivate it!',
					})
					.then(result => {
						if (result.value) {
							axios.get('soa/reactivate/' + this.id).then(({ data }) => {
								this.review();
							});
						}
					});
			}
    },
		cancel_soa(id) {
			if (this.id == '') {
				swal.fire('No Data is Selected.', 'warning');
			} else {
				swal
					.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, Cancel it!',
					})
					.then(result => {
						if (result.value) {
							axios.get('soa/cancel/' + this.id).then(({ data }) => {
								this.review();
							});
						}
					});
			}
		},
		review() {
			axios.get('soa/review/' + this.datefrom + '/' + this.dateto + '/' + this.status).then(({ data }) => {
				this.rental = data.data;
				this.filter = this.rental;
			});
		},
		onChange: function(e) {
			var element = e.sender.select();
			var dataItem = e.sender.dataItem(element[0]);
			this.id = dataItem.id;
			this.soa_no = dataItem.series_no;
			this.billed_name = dataItem.billed_name;
			this.billed_address = dataItem.billed_address;
      this.soa_date = dataItem.soa_date;
      this.table_status = dataItem.status;

			this.preparedBy = dataItem.preparedBy;
			this.notedBy = dataItem.notedBy;
			this.approvedBy = dataItem.approvedBy;
			this.preparedByPos = dataItem.preparedByPos;
			this.notedByPos = dataItem.notedByPos;
			this.approvedByPos = dataItem.approvedByPos;
			this.showButton = true;
      this.showDetail = false;
		},
	},
	mounted() {},
	created() {
		this.datefrom = moment().format('YYYY-MM-DD');
		this.dateto = moment().format('YYYY-MM-DD');
	},
};
</script>
