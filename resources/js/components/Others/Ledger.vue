<style>
    .height-modified {
        height:300px !important;
    }
    .height-modified2 {
        height:100px !important;
    }
    .bcolor-red {
        background-color: #5eff69 !important;
    }
    .bcolor-blue {
        background-color: #e5e1fc !important;
    }
</style>
<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><b>VIEW LEDGER</b></h3>
                    <div class="card-tools"></div>
                </div>
                <!-- /.box-header -->
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-12 table-height2">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th class="text-center" width="20%">
                                            PDate
                                        </th>
                                        <th class="text-center" width="20%">
                                            SOA #
                                        </th>
                                        <th class="text-center" width="20%">
                                            Check #
                                        </th>
                                        <th class="text-center" width="20%">
                                            OR #
                                        </th>
                                        <th class="text-center" width="20%">
                                            PMode
                                        </th>
                                        <th class="text-center" width="20%">
                                            DEBIT
                                        </th>
                                        <th class="text-center" width="20%">
                                            CREDIT
                                        </th>
                                        <th class="text-center" width="20%">
                                            BALANCE
                                        </th>
                                        <th class="text-center" width="20%">
                                            REMARKS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody height-modified">
                                    <tr v-show="this.loading">
                                        <td colspan="4" class="text-center b">
                                            <i>Loading...</i>
                                        </td>
                                    </tr>
                                    <tr v-show="this.noDataFound">
                                        <td colspan="4" class="text-center">
                                            <b>No Data Found</b>
                                        </td>
                                    </tr>
                                    <tr
                                        v-for="item in filteredBlogs"
                                        v-on:click="rowClick(item)"
                                        v-bind:class="item.bcolor"
                                    >
                                        <td width="20%" class="text-center">
                                            {{ item.paymentDate | formatDate }}
                                        </td>
                                        <td width="20%" class="text-center">
                                            <b>{{
                                                item.SOANo
                                                    ? item.SOANo
                                                    : "PAYMENT"
                                            }}</b>
                                        </td>
                                        <td width="20%" class="text-center">
                                            {{ item.check_no }}
                                        </td>
                                        <td width="20%" class="text-center">
                                            {{ item.orNumber }}
                                        </td>
                                        <td width="20%" class="text-center">
                                            {{ item.paymentMode }}
                                        </td>
                                        <td width="20%" class="text-right">
                                            <b>{{
                                                item.paymentType == "DEBIT"
                                                    ? item.Amount
                                                    : "0" | formatNumber
                                            }}</b>
                                        </td>
                                        <td width="20%" class="text-right">
                                            <b>{{
                                                item.paymentType == "CREDIT"
                                                    ? item.Amount
                                                    : "0" | formatNumber
                                            }}</b>
                                        </td>
                                        <td width="20%" class="text-right">
                                            <b>{{
                                                item.Balance
                                                    ? item.Balance
                                                    : "0" | formatNumber
                                            }}</b>
                                        </td>
                                        <td width="20%">{{ item.remarks }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row" v-show="showTable1">
                                <div class="col-md-12 table-height">
                                    <table
                                        class="table table-hover table-striped dave-table"
                                    >
                                        <thead class="dave-thead">
                                            <tr>
                                                <th class="text-center">
                                                    Payment Mode
                                                </th>
                                                <th class="text-center">
                                                    Payment Date
                                                </th>
                                                <th class="text-center">
                                                    Check #
                                                </th>
                                                <th class="text-center">
                                                    OR #
                                                </th>
                                                <th class="text-center">
                                                    Amount
                                                </th>
                                                <th class="text-center">
                                                    Payment Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody height-modified2">
                                            <tr v-show="this.noDataFound2">
                                                <td
                                                    colspan="6"
                                                    class="text-center"
                                                >
                                                    <b>No Data Found</b>
                                                </td>
                                            </tr>
                                            <tr
                                                v-for="item in detailRows"
                                            >
                                                <td class="text-center">{{item.paymentMode}}</td>
                                                <td class="text-center">{{item.paymentDate | formatDate}}</td>
                                                <td class="text-center">{{item.check_no}}</td>
                                                <td class="text-center">{{item.orNumber}}</td>
                                                <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                                <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row" v-show="!showTable1">
                                <div class="col-md-12 table-height">
                                    <table
                                        class="table table-hover table-striped dave-table"
                                    >
                                        <thead class="dave-thead">
                                            <tr>
                                                <th class="text-center">
                                                    SOANo
                                                </th>
                                                <th class="text-center">
                                                    Amount
                                                </th>
                                                <th class="text-center">
                                                    Payment Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody height-modified2">
                                            <tr v-show="this.noDataFound2">
                                                <td
                                                    colspan="3"
                                                    class="text-center"
                                                >
                                                    <b>No Data Found</b>
                                                </td>
                                            </tr>
                                            <tr
                                                v-for="item in detailRows"
                                            >
                                                <td class="text-center">{{item.SOANo}}</td>
                                                <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                                <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 text-right">
                            <b>OVERALL BALANCE :</b>
                        </div>
                        <div class="col-md-2">
                            <input
                                v-model="OverAllBalance"
                                type="text"
                                name="OverAllBalance"
                                placeholder=""
                                class="form-control text-right"
                            />
                        </div>
                    </div>
                </div>
                <div class="card-footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            rows: [],
            noDataFound: true,
            noDataFound2: true,
            loading: false,
            search: "",
            OverAllBalance: 0,
            detailRows: [],
            showTable1: true
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.loading = true;
            this.$Progress.start();
            axios
                .get("api/others", { params: { getLedger: true } })
                .then(response => {
                    if (response.data.length > 0) {
                        var Balance = 0;
                        response.data.forEach(function(item) {
                            item.bcolor = item.SOANo != '' ? "bcolor-blue" : "bcolor-red";
                            Balance = Balance + item.Amount;
                            item.Balance = Balance;
                        });
                        this.OverAllBalance = this.$root.formatNumberCommaRound(
                            Balance
                        );
                        this.rows = response.data;
                        this.noDataFound = false;
                    } else {
                        this.noDataFound = true;
                    }
                    this.$Progress.finish();
                    this.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        rowClick(row) {
            if (row.SOANo == "") {
                this.showTable1 = false;
                this.$Progress.start();
                axios
                    .get("api/others", {
                        params: { getLedgerPayment: true, id: row.PLID }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.detailRows = response.data;
                            this.noDataFound2 = false;
                        } else {
                            this.detailRows = [];
                            this.noDataFound2 = true;
                        }
                        this.$Progress.finish();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }else{
                this.showTable1 = true;
                this.$Progress.start();
                axios
                    .get("api/others", {
                        params: { getLedgerPaymentSOA: true, SOANo: row.SOANo }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.detailRows = response.data;
                            this.noDataFound2 = false;
                        } else {
                            this.detailRows = [];
                            this.noDataFound2 = true;
                        }
                        this.$Progress.finish();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
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
                            item.SOANo.toString()
                                .toLowerCase()
                                .includes(v) ||
                            item.check_no
                                .toString()
                                .toLowerCase()
                                .includes(v) ||
                            item.orNumber
                                .toString()
                                .toLowerCase()
                                .includes(v)
                    );
            });
        }
    }
};
</script>
