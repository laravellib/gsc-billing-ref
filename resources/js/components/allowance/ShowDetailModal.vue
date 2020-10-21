<template>
    <div
        class="modal fade dave-template"
        id="SearchAllowanceDetail"
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
                                <b>Allowance Detail List</b>
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
                                <table class="table table-hover table-striped dave-table">
                                    <thead class="dave-thead">
                                        <tr>
                                            <th>Chapa</th>
                                            <th width="20%">Fullname</th>
                                            <th>Gasoline</th>
                                            <th>Comm</th>
                                            <th>Rent&Maint</th>
                                            <th>Others</th>
                                            <th>AdminFee</th>
                                            <th>Sub Total</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr v-show="!this.dataInDetail">
                                            <td colspan="8" class="text-center">
                                                <i>No Data Found...</i>
                                            </td>
                                        </tr>
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.ADID"
                                        >
                                            <td bold>{{ item.Chapa }}</td>
                                            <td width="20%">
                                                {{ item.FullName }}
                                            </td>
                                            <td>
                                                {{
                                                    item.Gasoline | formatNumber
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    item.Communication
                                                        | formatNumber
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    item.RentalMaintenance
                                                        | formatNumber
                                                }}
                                            </td>
                                            <td>
                                                {{ item.Others | formatNumber }}
                                            </td>
                                            <td>
                                                {{
                                                    item.AdminFee | formatNumber
                                                }}
                                            </td>
                                            <td>
                                                {{
                                                    item.SubTotal | formatNumber
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
        Fire.$on("searchAllowanceDetail", data => {
            this.getData(data);
            $("#SearchAllowanceDetail").modal("show");
        });
    },
    methods: {
        getData(id) {
            axios
                .get("api/allowance", {
                    params: { detail: true, id: id }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        this.dataInDetail = true;
                        response.data.forEach(function(item) {
                            item.FullName =
                                item.LName +
                                " " +
                                item.ExtName +
                                ", " +
                                item.FName +
                                " " +
                                item.MName;
                        });
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
                    .every(v => item.FullName.toLowerCase().includes(v));
            });
        }
    }
};
</script>
