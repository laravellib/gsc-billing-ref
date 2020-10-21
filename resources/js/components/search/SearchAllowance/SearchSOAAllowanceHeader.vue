<template>
    <div
        class="modal fade dave-template"
        id="SearchSOAAllowanceHeader"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addNewLabel"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
        >
            <div class="modal-content">
                <div class="modal-header-cus">
                    <div class="row container-fluid">
                        <div class="col-md-11">
                            <h5>
                                <b>Allowance SOA Header List</b>
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
                                            <th width="15%">SOA No</th>
                                            <th width="15%">Period</th>
                                            <th>Location</th>
                                            <th width="15%">Date</th>
                                            <th width="15%">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr v-show="this.loading">
                                            <td colspan="4" class="text-center"><i>Loading...</i></td>
                                        </tr>
                                        <tr v-show="this.noDataFound">
                                            <td colspan="4" class="text-center"><b>No Data Found</b></td>
                                        </tr>
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.ASHID"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td width="15%">{{ item.SOANo }}</td>
                                            <td width="15%">{{ item.Period }}</td>
                                            <td>{{ item.Location }}</td>
                                            <td width="15%">{{ item.date_created | formatDate }}</td>
                                            <td width="15%">{{ item.Status }}</td>
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
            search: "",
            loading: false,
            noDataFound: false,
        };
    },
    mounted() {
        Fire.$on("searchSOAAllowanceHeader", (data) => {
            if(data == 'payment'){
                this.getAllowanceHeaderPaymentModal(); 
            }else if(data == 'transmittal') {
                this.getAllowanceHeaderTransmittalModal(); 
            }else{
                this.getAllowanceHeaderModal();
            }
            $("#SearchSOAAllowanceHeader").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchSOAAllowanceHeader").modal("hide");
        },
        getAllowanceHeaderModal() {
            this.loading = true;
            axios
                .get("api/allowance", { params: { SOAHeader: true } })
                .then(response => {
                    if(response.data.length > 0){
                        this.rows = response.data;
                        this.noDataFound = false;
                    }else{
                        this.noDataFound = true;
                    }
                    this.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getAllowanceHeaderPaymentModal() {
            this.loading = true;
            axios
                .get("api/allowance", { params: { SOAHeaderPayment: true } })
                .then(response => {
                    if(response.data.length > 0){
                        this.rows = response.data;
                        this.noDataFound = false;
                    }else{
                        this.noDataFound = true;
                    }
                    this.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getAllowanceHeaderTransmittalModal() {
            this.loading = true;
            axios
                .get("api/allowance", { params: { SOAHeaderTransmittal: true } })
                .then(response => {
                    if(response.data.length > 0){
                        this.rows = response.data;
                        this.noDataFound = false;
                    }else{
                        this.noDataFound = true;
                    }
                    this.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.rows.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v) ||
                            item.Period.toLowerCase().includes(v) ||
                            item.Location.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
