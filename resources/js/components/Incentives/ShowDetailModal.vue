<template>
    <div
        class="modal fade dave-template"
        id="SearchIncentivesDetail"
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
                                <b>I Detail List</b>
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
                        <!--<div class="row">
                            <div class="col-md-12">
                                <input
                                    v-model="search"
                                    type="text"
                                    name="search"
                                    placeholder="Search here..."
                                    class="form-control"
                                />
                            </div>
                        </div> -->
                        <div class="row">
                            <div class="col-md-12 table-height">
                                <table
                                    class="table table-hover table-striped dave-table"
                                >
                                    <thead class="dave-thead">
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Markup</th>
                                            <th>Sub Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr v-show="!dataInDetail">
                                            <td colspan="7" class="text-center">
                                                <i>No Data Found...</i>
                                            </td>
                                        </tr>
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.IEDID"
                                        >
                                            <td>
                                                {{ item.Date | formatDate }}
                                            </td>
                                            <td>
                                                {{ item.LName }},
                                                {{ item.FName }}
                                                {{ item.MName }}
                                                {{ item.ExtName }}
                                            </td>
                                            <td>
                                                {{ item.Amount | formatNumber }}
                                            </td>
                                            <td>
                                                {{
                                                    item.admin_fee
                                                        | formatNumber
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    item.subAmount
                                                        | formatNumber
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
            search: "",
            type: "",
            detailList: [],
            dataInDetail: false
        };
    },
    mounted() {
        Fire.$on("searchIncentivesDetail", data => {
            this.getData(data);
            $("#SearchIncentivesDetail").modal("show");
        });
    },
    methods: {
        getData(id) {
            axios
                .get("api/incentives", {
                    params: { getDtl: true, id: id }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        this.dataInDetail = true;
                        this.detailList = response.data;
                    } else {
                        this.detailList = [];
                        this.dataInDetail = false;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.detailList.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(v =>
                        item.FName.toLowerCase().includes(v) ||
                        item.LName.toLowerCase().includes(v)
                        );
            });
        }
    }
};
</script>
