<template>
    <div
        class="modal fade dave-template"
        id="SearchPPEHeader"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addNewLabel"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-md"
            role="document"
        >
            <div class="modal-content">
                <div class="modal-header-cus">
                    <div class="row container-fluid">
                        <div class="col-md-11">
                            <h5>
                                <b>PPE Header List</b>
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
                                            <th width="20%">SOA No</th>
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
                                            v-bind:key="item.PSHID"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td width="20%">{{ item.SOANo }}</td>
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
        Fire.$on("searchPPEHeader", (data) => {
            if(data == 'payment'){
                this.getPPEHeaderPaymentModal(); 
            }else if(data == 'transmittal') {
                this.getPPEHeaderTransmittalModal(); 
            }else{
                this.getPPEHeaderModal();
            }
            $("#SearchPPEHeader").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchPPEHeader").modal("hide");
        },
        getPPEHeaderModal() {
            this.loading = true;
            axios
                .get("api/ppe", { params: { getPPEHeader: true } })
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
        getPPEHeaderPaymentModal() {
            this.loading = true;
            axios
                .get("api/ppe", { params: { SOAHeaderPayment: true } })
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
        getPPEHeaderTransmittalModal() {
            this.loading = true;
            axios
                .get("api/ppe", { params: { SOAHeaderTransmittal: true } })
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
    created() {
    },
    computed: {
        filteredBlogs() {
            return this.rows.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(v => item.SOANo.toLowerCase().includes(v));
            });
        }
    }
};
</script>
