<template>
    <div
        class="modal fade dave-template"
        id="SearchTransmittal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addNewLabel"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
        >
            <div class="modal-content">
                <div class="modal-header-cus">
                    <div class="row container-fluid">
                        <div class="col-md-11">
                            <h5>
                                <b>Transmittal List</b>
                            </h5>
                        </div>
                        <div class="col-md-1">
                            <button
                                type="button"
                                class="close close-modal"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-body-cus">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <input
                                    v-model="search"
                                    type="text"
                                    name="search"
                                    placeholder="Search here..."
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 table-height">
                                <table class="table table-hover table-striped dave-table">
                                    <thead class="dave-thead">
                                        <tr>
                                            <th width="20%">Transmittal #</th>
                                            <th>Prepared By</th>
                                            <th width="20%" class="text-center">Noted By</th>
                                            <th width="20%" class="text-center">Date Created</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in rows " :key="item.transmittal_id"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td width="20%">
                                                {{ item.series_no }}
                                            </td>
                                            <td>{{ item.prepared_by }}</td>
                                            <td width="25%" class="text-right">
                                                {{
                                                    item.noted_by
                                                }}
                                            </td>
                                            <td width="20%" class="text-center">
                                                {{
                                                    item.date_created
                                                        | formatDate
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			rows: [],
			search: '',
			type: '',
		};
	},
	mounted() {
		Fire.$on('searchTransmittal', data => {
			this.type = data;
			this.getAllowanceHeaderModal();
			$('#SearchTransmittal').modal('show');
		});
	},
	methods: {
		rowClick: function(row) {
			this.$emit('rowClick', row);
			$('#SearchTransmittal').modal('hide');
		},
		getAllowanceHeaderModal() {
			if (this.type == 'golfcart') {
				axios
					.get('api/golfcartTransmittal')
					.then(response => {
						this.rows = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
			}else if(this.type == 'jeep'){
                axios
					.get('api/jeepTransmittal')
					.then(response => {
						this.rows = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});
            }
		},
	},
	created() {},
	computed: {
		filteredBlogs() {
			return this.rows.filter(item => {
				return this.search
					.toLowerCase()
					.split(' ')
					.every(v => item.transmittal_no.toLowerCase().includes(v));
			});
		},
	},
};
</script>
