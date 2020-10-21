<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><b>ALLOWANCE DETAIL ENTRY</b></h3>
                    <div class="card-tools"></div>
                </div>
                <!-- /.box-header -->
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Control#</label>
                                <b-input-group>
                                    <input
                                        v-model="header.AHID"
                                        type="text"
                                        name="control_no"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <b-input-group-append>
                                        <b-button
                                            @click="
                                                searchAllowanceHeaderButton()
                                            "
                                            variant="outline-primary"
                                            size="sm"
                                            ><i
                                                class="fa fa-search"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            @click="
                                                updateAllowanceHeaderButton()
                                            "
                                            variant="outline-success"
                                            size="sm"
                                            ><i
                                                class="fa fa-edit"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            @click="
                                                deleteAllowanceHeaderButton()
                                            "
                                            variant="outline-danger"
                                            size="sm"
                                            ><i
                                                class="fa fa-trash"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Period</label>
                                <input
                                    v-model="header.Period"
                                    type="text"
                                    name="Period"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Location</label>
                                <input
                                    v-model="header.Location"
                                    type="text"
                                    name="Location"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-3 text-right">
                            <label>&nbsp;</label>
                            <div class="form-group">
                                <button
                                    class="btn btn-primary"
                                    @click="newModal"
                                    bold
                                >
                                    <i class="fa fa-plus fa fw"></i>
                                    New Allowance Header
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
                                        <th>Chapa</th>
                                        <th width="20%">Fullname</th>
                                        <th>Gasoline</th>
                                        <th>Comm</th>
                                        <th>Rent&Maint</th>
                                        <th>Others</th>
                                        <th>Admin Fee</th>
                                        <th>Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody">
                                    <tr
                                        class="dave-tr"
                                        v-show="!this.dataInDetail"
                                    >
                                        <td colspan="8" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr
                                        v-for="item in filteredBlogs"
                                        v-bind:key="item.ADID"
                                        v-on:click="rowClick(item)"
                                    >
                                        <td bold>{{ item.Chapa }}</td>
                                        <td width="20%">{{ item.FullName }}</td>
                                        <td>
                                            {{ item.Gasoline | formatNumber }}
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
                                            {{ item.AdminFee | formatNumber }}
                                        </td>
                                        <td>
                                            {{ item.SubTotal | formatNumber }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-2 offset-8 text-right">
                            <b text-right>Total:</b>
                        </div>
                        <div
                            class="col-md-2 text-right"
                            style="border-bottom:2px solid black;font-size:120%;color:blue;"
                        >
                            <span bold>{{ TotalAmount }}</span>
                        </div>
                    </div>
                    <form @submit.prevent="saveDetail()">
                        <div class="row">
                            <div class="col-md-2">
                                <label>EmpID</label>
                                <b-input-group>
                                    <input
                                        v-model="detail.EmpID"
                                        type="text"
                                        name="EmpID"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <b-input-group-append>
                                        <b-button
                                            @click="searchEmployeeButton()"
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
                            <div class="col-md-2">
                                <label>Chapa</label>
                                <input
                                    v-model="detail.Chapa"
                                    type="text"
                                    name="Chapa"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                            <div class="col-md-7">
                                <label>Fullname</label>
                                <b-input-group>
                                    <input
                                        v-model="detail.FName"
                                        type="text"
                                        name="FName"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <input
                                        v-model="detail.MName"
                                        type="text"
                                        name="MName"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <input
                                        v-model="detail.LName"
                                        type="text"
                                        name="LName"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                </b-input-group>
                            </div>
                            <div class="col-md-1">
                                <label>ExtName</label>
                                <input
                                    v-model="detail.ExtName"
                                    type="text"
                                    name="ExtName"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>Man Days</label>
                                <input
                                    v-on:keyup="changeManDays"
                                    v-model="detail.manDays"
                                    type="text"
                                    name="manDays"
                                    placeholder=""
                                    class="form-control text-center"
                                />
                            </div>
                            <div class="col-md-2">
                                <label>GL</label>
                                <input
                                    v-model="detail.GL"
                                    type="text"
                                    name="GL"
                                    placeholder=""
                                    class="form-control"
                                    list="gl"
                                />
                                <datalist id="gl">
                                    <option v-for="item in GLList" :key="item.id">{{
                                        item.GL
                                    }}</option>
                                </datalist>
                            </div>
                            <div class="col-md-2">
                                <label>Cost Center</label>
                                <input
                                    v-model="detail.CostCenter"
                                    type="text"
                                    name="CostCenter"
                                    placeholder=""
                                    class="form-control"
                                    list="costcenter"
                                />
                                <datalist id="costcenter">
                                    <option v-for="item in CCList" :key="item.id">{{
                                        item.Costcenter
                                    }}</option>
                                </datalist>
                            </div>
                            <div class="col-md-2">
                                <label>Gasoline (x{{ multiplierGas }})</label>
                                <input
                                    v-on:keyup="autoCompute"
                                    v-model="detail.Gasoline"
                                    type="text"
                                    name="Gasoline"
                                    placeholder=""
                                    class="form-control text-danger"
                                    text-right
                                />
                            </div>
                            <div class="col-md-2">
                                <label>Comm (x{{ multiplierComm }})</label>
                                <input
                                    v-on:keyup="autoCompute"
                                    v-model="detail.Communication"
                                    type="text"
                                    name="Communication"
                                    placeholder=""
                                    class="form-control text-danger"
                                    text-right
                                />
                            </div>
                            <div class="col-md-2">
                                <label>Rental (x{{ multiplierRental }})</label>
                                <input
                                    v-on:keyup="autoCompute"
                                    v-model="detail.RentalMaintenance"
                                    type="text"
                                    name="RentalMaintenance"
                                    placeholder=""
                                    class="form-control text-danger"
                                    text-right
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <label>Others</label>
                                <input
                                    v-on:keyup="autoCompute"
                                    v-model="detail.Others"
                                    type="text"
                                    name="Others"
                                    placeholder=""
                                    class="form-control text-danger"
                                    text-right
                                />
                            </div>
                            <div class="col-md-2">
                                <label>Markup</label>
                                <input
                                    v-on:keyup="autoCompute"
                                    v-model="detail.markup"
                                    type="text"
                                    name="markup"
                                    placeholder=""
                                    class="form-control"
                                    text-right
                                    bold
                                />
                            </div>
                            <div class="col-md-2">
                                <label>Admin Fee</label>
                                <input
                                    v-model="detail.AdminFee"
                                    type="text"
                                    name="AdminFee"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                    text-right
                                    bold
                                />
                            </div>
                            <div class="col-md-2">
                                <label>SubTotal</label>
                                <input
                                    v-model="detail.SubTotal"
                                    type="text"
                                    name="SubTotal"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                    text-right
                                    bold
                                />
                            </div>
                            <div class="col-md-4 text-right">
                                <label>&nbsp;</label>
                                <div class="form-group">
                                    <button
                                        @click="clearDetail()"
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
                                        @click="deleteAllowanceDtlButton()"
                                        class="btn btn-danger"
                                        type="button"
                                        bold
                                    >
                                        <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                        ></i>
                                        DELETE
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
                <div class="card-footer">
                    <!--<pagination :data="vehicles"
            @pagination-change-page="getResults"></pagination>-->
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="addNew"
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
                                    <b v-show="!this.updateMeHeader"
                                        >Create Allowance Header</b
                                    >
                                    <b v-show="this.updateMeHeader"
                                        >Update Allowance Header</b
                                    >
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
                    <form @submit.prevent="saveHeader()">
                        <div class="modal-body-cus">
                            <div class="row container-fluid">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Period</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Period"
                                                type="text"
                                                name="Location"
                                                placeholder=""
                                                class="form-control"
                                                required
                                                disabled
                                            />
                                            <b-input-group-append>
                                                <b-button
                                                    @click="
                                                        searchPeriodButton()
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
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Location"
                                                type="text"
                                                name="Location"
                                                placeholder=""
                                                class="form-control"
                                                required
                                                disabled
                                            />
                                            <b-input-group-append>
                                                <b-button
                                                    @click="
                                                        searchPayStationButton()
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
                                <div class="col-md-12 text-right">
                                    <button
                                        class="btn btn-success"
                                        type="submit"
                                        bold
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <search-period v-on:rowClick="periodClose($event)"></search-period>
        <search-paystation
            v-on:rowClick="locationClose($event)"
        ></search-paystation>
        <search-allowanceHeader
            v-on:rowClick="allowanceHeaderClose($event)"
        ></search-allowanceHeader>
        <search-allowanceEmployee
            v-on:rowClick="employeeClose($event)"
        ></search-allowanceEmployee>
    </div>
</template>

<script>
import searchPeriod from "../search/SearchAllowance/SearchPeriod.vue";
import searchPayStation from "../search/SearchAllowance/SearchPayStation.vue";
import searchAllowanceHeader from "../search/SearchAllowance/SearchAllowanceHeader.vue";
import searchEmployee from "../search/SearchAllowance/SearchEmployee.vue";
export default {
    components: {
        "search-period": searchPeriod,
        "search-paystation": searchPayStation,
        "search-allowanceHeader": searchAllowanceHeader,
        "search-allowanceEmployee": searchEmployee
    },
    data() {
        return {
            header: {
                AHID: "",
                Location: "",
                LocID: "",
                Period: "",
                PeriodID: ""
            },
            formHeader: {
                AHID: "",
                Location: "",
                Period: "",
                PeriodID: ""
            },
            detail: {
                ADID: "",
                hdr_idLink: "",
                EmpID: "",
                Chapa: "",
                FName: "",
                MName: "",
                LName: "",
                ExtName: "",
                manDays: "",
                GL: "",
                CostCenter: "",
                Gasoline: "0.00",
                Communication: "0.00",
                RentalMaintenance: "0.00",
                Others: "0.00",
                markup: 0,
                AdminFee: "0.00",
                SubTotal: "0.00"
            },
            detailList: [],
            updateMeHeader: false,
            search: "",
            dataInDetail: false,
            TotalAmount: "0.00",
            multiplierGas: "None",
            multiplierComm: "None",
            multiplierRental: "None",
            GLList: [],
            CCList: []
        };
    },
    mounted() {
        this.getDropDownData();
    },
    methods: {
        newModal() {
            this.formHeader = {
                AHID: "",
                Location: "",
                Period: "",
                PeriodID: ""
            };
            this.updateMeHeader = false;
            $("#addNew").modal("show");
        },
        updateAllowanceHeaderButton() {
            if (!this.header.AHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select/save Allowance Header to continue."
                });
            }
            this.formHeader = Object.assign({}, this.header);
            this.updateMeHeader = true;
            $("#addNew").modal("show");
        },
        deleteAllowanceHeaderButton() {
            if (!this.header.AHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Allowance Header to continue."
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
                        .delete(`api/allowance/${this.header.AHID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.header = {};
                                this.detailList = [];
                                this.clearDetail();
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
        getDropDownData() {
            axios
                .get("api/allowance", { params: { getCostCenter: true } })
                .then(response => {
                    console.log(response.data);
                    this.CCList = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            axios
                .get("api/allowance", { params: { getGL: true } })
                .then(response => {
                    console.log(response.data);
                    this.GLList = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getMarkup() {
            axios
                .get("api/markup")
                .then(response => {
                    this.detail.markup = response.data[0].ALWMarkUp;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        searchAllowanceHeaderButton() {
            Fire.$emit("searchAllowanceHeader");
        },
        searchPeriodButton() {
            Fire.$emit("searchPeriod");
        },
        searchPayStationButton() {
            Fire.$emit("searchPayStation");
        },
        allowanceHeaderClose: function(row) {
            this.header = Object.assign({}, row);
            this.clearDetail();
            this.getAllowanceDetail();
            this.getTotalAmount();
        },
        periodClose: function(row) {
            this.formHeader.Period = row.code;
            this.formHeader.PeriodID = row.PPID;
        },
        locationClose: function(row) {
            this.formHeader.Location = row.PayStation;
        },
        saveHeader() {
            var data = Object.assign({}, this.formHeader);
            this.$Progress.start();
            axios
                .post("api/allowanceHeader", data)
                .then(response => {
                    if (response.data.success) {
                        this.header = Object.assign({}, this.formHeader);
                        if (response.data.id) {
                            this.header.AHID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        $("#addNew").modal("hide");
                        this.formHeader = {};
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.clearDetail();
                    this.detailList = [];
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // DETAIL
        getTotalAmount() {
            if (this.header.AHID) {
                axios
                    .get("api/allowance", {
                        params: { total: true, id: this.header.AHID }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.TotalAmount = this.$root.formatNumberCommaRound(
                                response.data[0].TotalAmount
                            );
                        } else {
                            this.TotalAmount = "0.00";
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        searchEmployeeButton() {
            if (!this.header.AHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Allowance Header to continue."
                });
            }
            Fire.$emit("searchEmployee");
        },
        employeeClose: function(row) {
            this.clearDetail();
            this.multiplierGas = "None";
            this.multiplierComm = "None";
            this.multiplierRental = "None";
            axios
                .get("api/allowance", {
                    params: { checkEmpSetting: true, EmpID: row.EmpID }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        this.multiplierGas = this.$root.formatNumberCommaRound(
                            response.data[0].GasolineRate
                        );
                        this.multiplierComm = this.$root.formatNumberCommaRound(
                            response.data[0].CommRate
                        );
                        this.multiplierRental = this.$root.formatNumberCommaRound(
                            response.data[0].RentalRate
                        );
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            this.detail.EmpID = row.EmpID;
            this.detail.Chapa = row.Chapa;
            this.detail.FName = row.FName;
            this.detail.MName = row.MName;
            this.detail.LName = row.LName;
            this.detail.ExtName = row.ExtName;
        },
        changeManDays() {
            if (this.$root.formatNumber(this.multiplierGas) > 0) {
                this.detail.Gasoline = this.$root.formatNumberCommaRound(
                    this.$root.formatNumber(this.multiplierGas) *
                        this.$root.formatNumber(this.detail.manDays)
                );
            }
            if (this.$root.formatNumber(this.multiplierComm) > 0) {
                this.detail.Communication = this.$root.formatNumberCommaRound(
                    this.$root.formatNumber(this.multiplierComm) *
                        this.$root.formatNumber(this.detail.manDays)
                );
            }
            if (this.$root.formatNumber(this.multiplierRental) > 0) {
                this.detail.RentalMaintenance = this.$root.formatNumberCommaRound(
                    this.$root.formatNumber(this.multiplierRental) *
                        this.$root.formatNumber(this.detail.manDays)
                );
            }
            this.autoCompute();
        },
        getAllowanceDetail() {
            axios
                .get("api/allowance", {
                    params: { detail: true, id: this.header.AHID }
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
                    this.getMarkup();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        saveDetail() {
            if (!this.header.AHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Allowance Header to continue."
                });
            }
            this.$Progress.start();
            var data = Object.assign({}, this.detail);
            data.hdr_idLink = this.header.AHID;
            data.Gasoline = this.$root.formatNumber(this.detail.Gasoline);
            data.Communication = this.$root.formatNumber(
                this.detail.Communication
            );
            data.RentalMaintenance = this.$root.formatNumber(
                this.detail.RentalMaintenance
            );
            data.Others = this.$root.formatNumber(this.detail.Others);
            data.AdminFee = this.$root.formatNumber(this.detail.AdminFee);
            data.SubTotal = this.$root.formatNumber(this.detail.SubTotal);
            axios
                .post("api/allowanceDetail", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.detail.ADID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.getAllowanceDetail();
                        this.getTotalAmount();
                        this.clearDetail();
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        rowClick(row) {
            this.detail = Object.assign({}, row);
            this.detail.Gasoline = this.$root.formatNumberCommaRound(
                row.Gasoline
            );
            this.detail.Communication = this.$root.formatNumberCommaRound(
                row.Communication
            );
            this.detail.RentalMaintenance = this.$root.formatNumberCommaRound(
                row.RentalMaintenance
            );
            this.detail.Others = this.$root.formatNumberCommaRound(row.Others);
            this.detail.SubTotal = this.$root.formatNumberCommaRound(
                row.SubTotal
            );
            this.detail.AdminFee = this.$root.formatNumberCommaRound(
                row.AdminFee
            );
            this.multiplierGas = "None";
            this.multiplierComm = "None";
            this.multiplierRental = "None";
            axios
                .get("api/allowance", {
                    params: { checkEmpSetting: true, EmpID: row.EmpID }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        if (response.data[0].GasolineRate > 0) {
                            this.multiplierGas = this.$root.formatNumberCommaRound(
                                response.data[0].GasolineRate
                            );
                        }
                        if (response.data[0].CommRate > 0) {
                            this.multiplierComm = this.$root.formatNumberCommaRound(
                                response.data[0].CommRate
                            );
                        }
                        if (response.data[0].RentalRate > 0) {
                            this.multiplierRental = this.$root.formatNumberCommaRound(
                                response.data[0].RentalRate
                            );
                        }
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        autoCompute() {
            this.detail.AdminFee = this.$root.formatNumberCommaRound(
                (this.$root.formatNumber(
                    this.detail.Gasoline ? this.detail.Gasoline : 0
                ) +
                    this.$root.formatNumber(
                        this.detail.Communication
                            ? this.detail.Communication
                            : 0
                    ) +
                    this.$root.formatNumber(
                        this.detail.RentalMaintenance
                            ? this.detail.RentalMaintenance
                            : 0
                    ) +
                    this.$root.formatNumber(
                        this.detail.Others ? this.detail.Others : 0
                    )) *
                    (this.detail.markup / 100) //multiply to 10%
            );
            this.detail.SubTotal = this.$root.formatNumberCommaRound(
                this.$root.formatNumber(
                    this.detail.Gasoline ? this.detail.Gasoline : 0
                ) +
                    this.$root.formatNumber(
                        this.detail.Communication
                            ? this.detail.Communication
                            : 0
                    ) +
                    this.$root.formatNumber(
                        this.detail.RentalMaintenance
                            ? this.detail.RentalMaintenance
                            : 0
                    ) +
                    this.$root.formatNumber(
                        this.detail.Others ? this.detail.Others : 0
                    ) +
                    this.$root.formatNumber(
                        this.detail.AdminFee ? this.detail.AdminFee : 0
                    )
            );
        },
        deleteAllowanceDtlButton() {
            if (!this.detail.ADID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Allowance Detail to continue."
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
                        .delete(`api/allowanceDtl/${this.detail.ADID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.clearDetail();
                                this.getAllowanceDetail();
                                swal.fire(
                                    "Deleted!",
                                    response.data.message,
                                    "success"
                                );
                                this.getTotalAmount();
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
        clearDetail() {
            this.detail = {
                ADID: "",
                hdr_idLink: "",
                EmpID: "",
                Chapa: "",
                FName: "",
                MName: "",
                LName: "",
                ExtName: "",
                manDays: "",
                GL: "",
                CostCenter: "",
                Gasoline: "0.00",
                Communication: "0.00",
                RentalMaintenance: "0.00",
                Others: "0.00",
                markup: 0,
                AdminFee: "0.00",
                SubTotal: "0.00",
                SubTotal: "0.00"
            };
            this.getMarkup();
            this.multiplierGas = "None";
            this.multiplierComm = "None";
            this.multiplierRental = "None";
        }
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.detailList.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.Chapa.toString()
                                .toLowerCase()
                                .includes(v) ||
                            item.FullName.toString()
                                .toLowerCase()
                                .includes(v)
                    );
            });
        }
    }
};
</script>
