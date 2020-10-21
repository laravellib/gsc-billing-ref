<style>
    .dave-modified-height{
        height: 300px !important;
    }
    .color-bg-white{
        background-color:white;
    }
</style>
<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>OTHERINS MONITORING</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-2">
                                    <label>For the month of:</label>
                                    <input
                                        v-model="month"
                                        type="month"
                                        name="month"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <label>Year:</label>
                                    <input
                                        v-model="year"
                                        type="text"
                                        name="year"
                                        class="form-control"
                                        maxlength="4"
                                        list="year"
                                    />
                                    <datalist id="year">
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                        <option>2028</option>
                                        <option>2029</option>
                                        <option>2030</option>
                                    </datalist>
                                </div>
                                <div class="col-md-2">
                                    <label>&nbsp;</label>
                                    <div class="form-group">
                                        <button
                                            @click="generate()"
                                            type="button"
                                            class="btn btn-primary"
                                        >
                                            GO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-12">
                            <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    @click="pageClick(1)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="1"
                                >
                                    <i><b>ALLOWANCE</b></i>
                                </button>
                                <button
                                    @click="pageClick(2)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="2"
                                >
                                    <i><b>FUEL</b></i>
                                </button>
                                <button
                                    @click="pageClick(3)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="3"
                                >
                                    <i><b>PPE</b></i>
                                </button>
                                <button
                                    @click="pageClick(4)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="4"
                                >
                                    <i><b>SUPPLIES</b></i>
                                </button>
                                <button
                                    @click="pageClick(5)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="5"
                                >
                                    <i><b>INCENTIVES</b></i>
                                </button>
                                <button
                                    @click="pageClick(6)"
                                    style="width:120px;"
                                    type="button"
                                    class="btn btn-primary"
                                    id="6"
                                >
                                    <i><b>OTHERS</b></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-show="page == 1">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.allowances.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-show="page == 2">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.fuel.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs2">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-show="page == 3">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.ppe.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs3">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-show="page == 4">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.supplies.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs4">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-show="page == 5">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.incentives.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs5">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row" v-show="page == 6">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th colspan="6"></th>
                                        <th
                                            colspan="4"
                                            style="text-align:center;border-left:1px solid black;border-right:1px solid black;"
                                        >
                                            Payment
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th class="text-center">SOANo</th>
                                        <th class="text-center">SOA Date</th>
                                        <th class="text-center">Transmittal No</th>
                                        <th class="text-center">Transmitted By</th>
                                        <th class="text-center">Particulars</th>
                                        <th class="text-center">Billed Amount</th>
                                        <th class="text-center">Check No</th>
                                        <th class="text-center">Check Date</th>
                                        <th class="text-center">Check Bank</th>
                                        <th class="text-center">Check Amount</th>
                                        <th class="text-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody dave-modified-height">
                                    <tr v-show="this.others.length == 0">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs6">
                                        <td class="text-center">{{item.SOANo}}</td>
                                        <td class="text-center">{{item.date_created | formatDate}}</td>
                                        <td class="text-center">{{item.transmittal_no}}</td>
                                        <td class="text-center">{{item.transmitted_by}}</td>
                                        <td class="text-center">{{item.billedTo}}</td>
                                        <td class="text-right">{{item.billed_amount | formatNumber}}</td>
                                        <td class="text-center">{{item.check_no}}</td>
                                        <td class="text-center">{{item.check_date | formatDate}}</td>
                                        <td class="text-center"></td>
                                        <td class="text-right">{{item.check_amount | formatNumber}}</td>
                                        <td class="text-right">{{item.balance ? item.balance : "0" | formatNumber}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            month: this.$root.formatDateMonth(new Date()),
            year: this.$root.formatDateYear(new Date()),
            allowances: [],
            fuel: [],
            ppe: [],
            supplies: [],
            incentives: [],
            others: [],
            page: 1,
            search: ""
        };
    },
    mounted() {
        this.generate();
        this.pageClick(1);
    },
    methods: {
        pageClick(number) {
            this.page = number;
            for (let i = 1; i <= 6; i++) {
                if(i != number){
                    document.getElementById(i).className = "btn btn-primary";
                    // document.getElementById(i).className.remove("color-bg-white");
                }else{
                    document.getElementById(i).className = "color-bg-white";
                }
            }
        },
        getAllowances() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getAllowanceMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.allowances = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getPPE() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getPPEMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.ppe = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getFuel() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getFuelMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.fuel = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getSupplies() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getSuppliesMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.supplies = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getIncentives() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getIncentivesMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.incentives = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getOthers() {
            this.$Progress.start();
            axios
                .get("api/monitoring", {
                    params: {
                        getOthersMonitoring: true,
                        month: this.month,
                        year: this.year
                    }
                })
                .then(response => {
                    this.others = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        generate() {
            this.getAllowances();
            this.getFuel();
            this.getPPE();
            this.getSupplies();
            this.getIncentives();
            this.getOthers();
        }
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.allowances.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        },
        filteredBlogs2() {
            return this.fuel.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        },
        filteredBlogs3() {
            return this.ppe.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        },
        filteredBlogs4() {
            return this.supplies.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        },
        filteredBlogs5() {
            return this.incentives.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        },
        filteredBlogs6() {
            return this.others.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
