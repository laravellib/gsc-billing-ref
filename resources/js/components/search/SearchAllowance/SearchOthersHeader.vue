<template>
    <div
        class="modal fade dave-template"
        id="SearchOthersHeader"
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
                                <b>Others Header List</b>
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
        Fire.$on("searchOthersHeader", (data) => {
            if(data == 'payment'){
                this.getOthersHeaderPaymentModal(); 
            }else if(data == 'transmittal') {
                this.getOthersHeaderTransmittalModal(); 
            }else{
                this.getData();
            }
            $("#SearchOthersHeader").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchOthersHeader").modal("hide");
        },
        getData() {
            axios
                .get("api/others", {params: {getOthersHeader: true}})
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getOthersHeaderPaymentModal() {
            this.loading = true;
            axios
                .get("api/others", { params: { SOAHeaderPayment: true } })
                .then(response => {
                    console.log(response);
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
        getOthersHeaderTransmittalModal() {
            this.loading = true;
            axios
                .get("api/others", { params: { SOAHeaderTransmittal: true } })
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
