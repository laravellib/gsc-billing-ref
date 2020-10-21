<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Employee Setting</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-5">
                            <form @submit.prevent="save()">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Employee ({{this.header.Chapa}})</label>
                                            <b-input-group>
                                                <input
                                                    v-model="DisplayName"
                                                    type="text"
                                                    name="DisplayName"
                                                    placeholder=""
                                                    class="form-control"
                                                    disabled
                                                />
                                                <b-input-group-append>
                                                    <b-button
                                                        @click="
                                                            searchEmployeeButton()
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
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Gasoline Rate</label>
                                            <input
                                                v-model="header.GasolineRate"
                                                type="text"
                                                name="GasolineRate"
                                                placeholder=""
                                                class="form-control text-right"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Comm Rate</label>
                                            <input
                                                v-model="header.CommRate"
                                                type="text"
                                                name="CommRate"
                                                placeholder=""
                                                class="form-control text-right"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Rental Rate</label>
                                            <input
                                                v-model="header.RentalRate"
                                                type="text"
                                                name="RentalRate"
                                                placeholder=""
                                                class="form-control text-right"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <div class="form-group">
                                            <label>&nbsp;</label>
                                            <button
                                                @click="clearButton()"
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
                                            <label>&nbsp;</label>
                                            <button
                                                @click="deleteEmpSetting()"
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
                                            <label>&nbsp;</label>
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
                        <div class="col-md-7">
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
                                    <table
                                        class="table table-hover table-striped dave-table"
                                    >
                                        <thead class="dave-thead">
                                            <tr>
                                                <th
                                                    style="text-align:center;width:15%;"
                                                >
                                                    Chapa
                                                </th>
                                                <th style="text-align:left;">
                                                    Last Name
                                                </th>
                                                <th
                                                    style="text-align:center;width:15%;"
                                                >
                                                    Gasoline
                                                </th>
                                                <th
                                                    style="text-align:center;width:15%;"
                                                >
                                                    Comm
                                                </th>
                                                 <th
                                                    style="text-align:center;width:15%;"
                                                >
                                                    Rental
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody modal-tbody">
                                            <tr v-show="loading">
                                                <td class="text-center"><i>Loading...</i></td>
                                            </tr>
                                            <tr
                                                v-for="item in filteredBlogs"
                                                v-on:click="rowClick(item)"
                                            >
                                                <td
                                                    style="width:15%;text-align:center;"
                                                >
                                                    {{ item.Chapa }}
                                                </td>
                                                <td>
                                                    {{ item.DisplayName }}
                                                </td>
                                                <td
                                                    style="width:15%;text-align:right;"
                                                >
                                                    {{ item.GasolineRate | formatNumber}}
                                                </td>
                                                <td
                                                    style="width:15%;text-align:right;"
                                                >
                                                    {{
                                                        item.CommRate | formatNumber
                                                    }}
                                                </td>
                                                <td
                                                    style="width:15%;text-align:right;"
                                                >
                                                    {{
                                                        item.RentalRate | formatNumber
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
        <search-allowanceEmployee
            v-on:rowClick="employeeClose($event)"
        ></search-allowanceEmployee>
    </div>
</template>

<script>
import searchEmployee from "../search/SearchAllowance/SearchEmployee.vue";
export default {
    components: {
        "search-allowanceEmployee": searchEmployee
    },
    data() {
        return {
            rows: [],
            search: "",
            type: "",
            header: {
                ESID: "",
                FName: "",
                MName: "",
                LName: "",
                ExtName: "",
                GasolineRate: "0.00",
                CommRate: "0.00",
                RentalRate: "0.00",
                Chapa: "",
                EmpID: "",
            },
            DisplayName: "",
            loading: false
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        rowClick: function(row) {
            this.header = Object.assign({}, row);
            var extname = '';
            if(row.ExtName != ''){
                extname = row.ExtName + " ";
            }else{
                extname = "";
            }
            this.DisplayName = row.LName + ", " + extname + row.FName + " " + row.MName;
            this.header.GasolineRate = this.$root.formatNumberCommaRound(
                row.GasolineRate
            );
            this.header.CommRate = this.$root.formatNumberCommaRound(
                row.CommRate
            );
            this.header.RentalRate = this.$root.formatNumberCommaRound(
                row.RentalRate
            );
        },
        getData() {
            this.loading = true;
            axios
                .get("api/allowance", { params: { getEmpSetting: true } })
                .then(response => {
                    response.data.forEach(function(item){
                        var extname = '';
                        if(item.ExtName != ''){
                            extname = item.ExtName + " ";
                        }else{
                            extname = "";
                        }
                        item.DisplayName = item.LName + ", " + extname + item.FName + " " + item.MName;
                    })
                    this.rows = response.data;
                    this.loading = false;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        searchEmployeeButton() {
            Fire.$emit("searchEmployee");
        },
        employeeClose: function(row) {
            var extname = '';
            // check if existing
            axios
                .get("api/allowance", { params: { checkEmpSetting: true, EmpID: row.EmpID } })
                .then(response => {
                    if(response.data.length > 0) {
                        this.header = response.data[0];
                        this.header.GasolineRate = this.$root.formatNumberCommaRound(
                            response.data[0].GasolineRate
                        );
                        this.header.CommRate = this.$root.formatNumberCommaRound(
                            response.data[0].CommRate
                        );
                        this.header.RentalRate = this.$root.formatNumberCommaRound(
                            response.data[0].RentalRate
                        );
                        if(response.data[0].ExtName != ''){
                            extname = response.data[0].ExtName + " ";
                        }else{
                            extname = "";
                        }
                        this.DisplayName = response.data[0].LName + ", " + extname + response.data[0].FName + " " + response.data[0].MName;
                    }else{
                        this.header.EmpID = row.EmpID;
                        this.header.Chapa = row.Chapa;
                        this.header.FName = row.FName;
                        this.header.MName = row.MName;
                        this.header.LName = row.LName;
                        this.header.ExtName = row.ExtName;
                        if(row.ExtName != ''){
                            extname = row.ExtName + " ";
                        }else{
                            extname = "";
                        }
                        this.DisplayName = row.LName + ", " + extname + row.FName + " " + row.MName;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        save() {
            var data = Object.assign({}, this.header);
            data.GasolineRate = this.$root.formatNumber(this.header.GasolineRate);
            data.CommRate = this.$root.formatNumber(this.header.CommRate);
            data.RentalRate = this.$root.formatNumber(this.header.RentalRate);
            this.$Progress.start();
            axios
                .post("api/allowanceEmpSetting", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.ESID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.clearButton();
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.getData();
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        deleteEmpSetting() {
            if (!this.header.ESID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select a record to continue."
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
                        .delete(`api/allowanceEmpSettingDelete/${this.header.ESID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.getData();
                                this.clearButton();
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
        clearButton() {
            this.header = {
                ESID: "",
                FName: "",
                MName: "",
                LName: "",
                ExtName: "",
                GasolineRate: "0.00",
                CommRate: "0.00",
                RentalRate: "0.00",
                Chapa: "",
                EmpID: "",
            };
            this.DisplayName = "";
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
                            item.Chapa.toLowerCase().includes(v) ||
                            item.FName.toLowerCase().includes(v) ||
                            item.LName.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
