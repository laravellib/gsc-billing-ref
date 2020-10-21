<template>
    <div
        class="modal fade dave-template"
        id="SearchSUPHeader"
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
                                <b>SUPPLIES Header List</b>
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
                                            <th>SOA No</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td>{{ item.SOANo }}</td>
                                            <td>{{ item.date_created | formatDate }}</td>
                                            <td>{{ item.Status }}</td>
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
            search: ""
        };
    },
    mounted() {
        Fire.$on("searchSUPHeader", (data) => {
            if(data == 'payment'){
                this.getSUPHeaderPaymentModal(); 
            }else if(data == 'transmittal') {
                this.getSUPHeaderTransmittalModal(); 
            }else{
                this.getData();
            }
            $("#SearchSUPHeader").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchSUPHeader").modal("hide");
        },
        getData() {
            axios
                .get("api/sup", {params: {getSUPHeader: true}})
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getSUPHeaderPaymentModal() {
            this.loading = true;
            axios
                .get("api/sup", { params: { SOAHeaderPayment: true } })
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
        getSUPHeaderTransmittalModal() {
            this.loading = true;
            axios
                .get("api/sup", { params: { SOAHeaderTransmittal: true } })
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
