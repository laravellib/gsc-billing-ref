<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><b>OTHERS PAYMENT FORM</b></h3>
                    <div class="card-tools"></div>
                </div>
                <!-- /.box-header -->
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Search SOA</label>
                                <b-input-group>
                                    <input
                                        v-model="SOANo"
                                        type="text"
                                        name="SOANo"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <b-input-group-append>
                                        <b-button
                                            @click="
                                                searchOthersHeader()
                                            "
                                            variant="outline-primary"
                                            size="sm"
                                            ><i
                                                class="fa fa-search"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label>&nbsp;</label>
                            <div class="form-group">
                                <button
                                    @click="appendSOANo()"
                                    class="btn btn-primary"
                                    type="button"
                                    bold
                                >
                                    <i
                                        class="fa fa-plus"
                                        aria-hidden="true"
                                    ></i>
                                    APPEND
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th class="text-center">SOA No</th>
                                        <th class="text-center">
                                            PERIOD
                                        </th>
                                        <th class="text-center">LOCATION</th>
                                        <th class="text-center">DATE</th>
                                        <th class="text-center">
                                            Total Billing
                                        </th>
                                        <th class="text-center">
                                            Balance
                                        </th>
                                        <th
                                            class="text-center"
                                            style="width:10%;"
                                        >
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody">
                                    <tr v-show="!this.dataInHeader">
                                        <td colspan="5" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr v-for="item in filteredBlogs">
                                        <td bold class="text-center">
                                            {{ item.SOANo }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.Period }}
                                        </td>
                                        <td>{{ item.Location }}</td>
                                        <td class="text-center">
                                            {{ item.date_created | formatDate }}
                                        </td>
                                        <td class="text-right">
                                            {{
                                                item.TotalAmount | formatNumber
                                            }}
                                        </td>
                                        <td class="text-right">
                                            {{
                                                item.Balance | formatNumber
                                            }}
                                        </td>
                                        <td
                                            style="width:10%;"
                                            class="text-center"
                                        >
                                            <i
                                                style="font-size:120%;"
                                                class="fa fa-eye text-primary"
                                                @click="clickDetails(item.OHID)"
                                            ></i>
                                            &nbsp;&nbsp;&nbsp;
                                            <i
                                                style="font-size:120%;"
                                                class="fa fa-minus-circle text-danger"
                                                @click="removeSOANo(item)"
                                            ></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit.prevent="savePayment()">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Mode of Payment</label>
                                        <input
                                            v-model="detail.paymentMode"
                                            type="text"
                                            name="paymentMode"
                                            placeholder=""
                                            class="form-control text-center bold"
                                            required
                                            list="modePayment"
                                        />
                                        <datalist id="modePayment">
                                            <option>CHECK</option>
                                            <option>CASH</option>
                                        </datalist>
                                    </div>
                                    <div class="col-md-4 offset-4">
                                        <label>Total Billing</label>
                                        <input
                                            v-model="header.billing"
                                            type="text"
                                            name="billing"
                                            placeholder=""
                                            class="form-control text-right"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>Check No</label>
                                        <input
                                            v-model="detail.check_no"
                                            type="text"
                                            name="check_no"
                                            placeholder=""
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label>OR/ Ref Number</label>
                                        <input
                                            v-model="detail.orNumber"
                                            type="text"
                                            name="orNumber"
                                            placeholder=""
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label>Check Date</label>
                                        <input
                                            v-model="detail.check_date"
                                            type="date"
                                            name="check_date"
                                            placeholder=""
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <label>Remarks</label>
                                        <input
                                            v-model="detail.remarks"
                                            type="text"
                                            name="remarks"
                                            placeholder=""
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label>Payment Amount</label>
                                        <input
                                            v-model="detail.check_amount"
                                            type="text"
                                            name="check_amount"
                                            placeholder=""
                                            class="form-control text-right"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <label>&nbsp;</label>
                                        <div class="form-group">
                                            <button
                                                @click="clearFunction('detail')"
                                                class="btn btn-primary"
                                                type="button"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-eraser"
                                                    aria-hidden="true"
                                                ></i>
                                                CLEAR
                                            </button>
                                            <button
                                                class="btn btn-success"
                                                type="submit"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-save"
                                                    aria-hidden="true"
                                                ></i>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <search-othersHeader
            v-on:rowClick="othersHeaderClose($event)"
        ></search-othersHeader>
        <search-othersDetail></search-othersDetail>
    </div>
</template>

<script>
import searchOthersDetail from "../Others/ShowDetailModal.vue";
import searchOthersHeader from "../search/SearchAllowance/SearchOthersHeader.vue";
export default {
    components: {
        "search-othersDetail": searchOthersDetail,
        "search-othersHeader": searchOthersHeader
    },
    data() {
        return {
            search: "",
            headerList: [],
            dataInHeader: false,
            header: {
                OHID: "",
                SOANo: "",
                billing: "0.00",
                balance: "0.00",
                totalPayment: "0.00"
            },
            detailList: [],
            dataInDetail: false,
            detail: {
                OPID: "",
                hdr_idLink: "",
                paymentMode: "",
                check_no: "",
                check_date: this.$root.formatDate(new Date()),
                check_amount: "0.00",
                orNumber: "",
                remarks: ""
            },
            check_amount: 0,
            SOANo: ""
        };
    },
    mounted() {
        // this.getData();
    },
    methods: {
        appendSOANo() {
            if (!this.SOANo) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select SOA Number to continue."
                });
            }
            this.$Progress.start();
            axios
                .get("api/others", {
                    params: { getViewOthers: true, SOANo: this.SOANo }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        var exist = false;
                        if (this.headerList.length > 0) {
                            this.headerList.forEach(function(item) {
                                if (item.SOANo == response.data[0].SOANo) {
                                    exist = true;
                                    return toast.fire({
                                        icon: "warning",
                                        title: "SOA Number already in the list."
                                    });
                                }
                            });
                        }
                        if (!exist) {
                            this.headerList.push(response.data[0]);
                            this.dataInHeader = true;
                            this.totalBilling();
                        }
                    } else {
                        return toast.fire({
                            icon: "warning",
                            title: "SOA Number has no details."
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        totalBilling() {
            var total = 0;
            this.headerList.forEach(function(item) {
                total = total + item.TotalAmount;
            });
            this.header.billing = this.$root.formatNumberCommaRound(total);
            this.detail.check_amount = this.$root.formatNumberCommaRound(total);
        },
        removeSOANo(item) {
            this.headerList.splice(this.headerList.indexOf(item), 1);
            this.totalBilling();
        },
        getDetail() {
            if (this.header.OHID) {
                axios
                    .get("api/others", {
                        params: { getPaymentDetail: true, id: this.header.OHID }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.detailList = response.data;
                            this.dataInDetail = true;
                        } else {
                            this.dataInDetail = false;
                            this.detailList = [];
                        }
                        this.getTotalPayment();
                        this.check_amount = 0;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        rowClick(row) {
            this.header.OHID = row.OHID;
            this.header.SOANo = row.SOANo;
            this.header.billing = this.$root.formatNumberCommaRound(
                row.TotalAmount
            );
            this.header.balance = this.$root.formatNumberCommaRound(
                row.Balance
            );
            this.clearFunction("detail");
            this.getDetail();
        },
        clickDetails(id) {
            Fire.$emit("searchOthersDetail", id);
        },
        searchOthersHeader() {
            Fire.$emit("searchOthersHeader", "payment");
        },
        othersHeaderClose: function(row) {
            this.SOANo = row.SOANo;
        },
        savePayment() {
            if (
                this.$root.formatNumber(this.detail.check_amount) == 0 ||
                this.$root.formatNumber(this.detail.check_amount) < 0
            ) {
                return toast.fire({
                    icon: "warning",
                    title: "Check Amount is invalid."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Post it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    var data = Object.assign({}, this.detail);
                    data.check_amount = this.$root.formatNumber(
                        this.detail.check_amount
                    );
                    data.hdr_idLink = this.header.OHID;
                    var soaList = [];
                    this.headerList.forEach(function(item) {
                        soaList.push(item.SOANo);
                    });
                    data.soaList = soaList;
                    axios
                        .post("api/othersPayment", data)
                        .then(response => {
                            if (response.data.success) {
                                if (response.data.id) {
                                    this.header.OPID = response.data.id;
                                }
                                toast.fire({
                                    icon: "success",
                                    title: response.data.message
                                });
                                this.$Progress.finish();
                            } else {
                                toast.fire({
                                    icon: "warning",
                                    title: response.data.message
                                });
                            }
                            this.check_amount = 0;
                            this.getDetail();
                            this.clearFunction("detail");
                            this.clearFunction("header");
                            this.SOANo = "";
                            this.headerList = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                } else {
                    swal.fire(
                        "Information!",
                        "Cancelled.",
                        "warning"
                    );
                }
            });
        },
        deletePaymentDetail() {
            if (!this.detail.OPID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select payment record to continue."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    axios
                        .delete(
                            `api/othersPaymentDelete/${this.detail.OPID}`
                        )
                        .then(response => {
                            if (response.data.success) {
                                this.clearFunction("detail");
                                this.check_amount = 0;
                                this.getDetail();
                                swal.fire(
                                    "Deleted!",
                                    response.data.message,
                                    "success"
                                );
                            } else {
                                swal.fire(
                                    "Warning!",
                                    response.data.message,
                                    "warning"
                                );
                            }
                            this.$Progress.finish();
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    swal.fire(
                        "Information!",
                        "Deletion is cancelled.",
                        "warning"
                    );
                }
            });
        },
        rowClickDetail(row) {
            this.detail = Object.assign({}, row);
            this.detail.check_amount = this.$root.formatNumberCommaRound(
                row.check_amount
            );
            this.check_amount = row.check_amount;
        },
        getTotalPayment() {
            if (this.detailList.length == 0) {
                this.header.totalPayment = "0.00";
                this.header.balance = this.header.billing;
                return;
            }
            var total = 0;
            this.detailList.forEach(function(item) {
                total = total + item.check_amount;
            });
            this.header.balance = this.$root.formatNumberCommaRound(
                this.$root.formatNumber(this.header.billing) - total
            );
            this.header.totalPayment = this.$root.formatNumberCommaRound(total);
        },
        clearFunction(type) {
            if (type == "detail") {
                this.detail = {
                    OPID: "",
                    hdr_idLink: "",
                    paymentMode: "",
                    check_no: "",
                    check_date: this.$root.formatDate(new Date()),
                    check_amount: "",
                    orNumber: "",
                    remarks: ""
                };
                this.check_amount = 0;
            } else if (type == "detailList") {
                this.detailList = [];
            } else {
                this.header = {
                    OHID: "",
                    SOANo: "",
                    billing: "0.00",
                    balance: "0.00",
                    totalPayment: "0.00"
                };
            }
        }
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.headerList.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.SOANo.toString()
                                .toLowerCase()
                                .includes(v) ||
                            item.Location.toString()
                                .toLowerCase()
                                .includes(v)
                    );
            });
        },
        filteredBlogs2() {
            return this.detailList.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(v =>
                        item.check_no
                            .toString()
                            .toLowerCase()
                            .includes(v)
                    );
            });
        }
    }
};
</script>
