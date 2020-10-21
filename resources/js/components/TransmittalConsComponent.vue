<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-header">
                                <strong
                                    ><i class="fas fa-file-invoice"></i
                                    >&nbsp;&nbsp;TRANSMITTAL CONSTRUCTION</strong
                                >
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-12">
                            <form @submit.prevent="generate()">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>SOA Date From</label>
                                            <input
                                                v-model="from"
                                                type="date"
                                                name="from"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>SOA Date From</label>
                                            <input
                                                v-model="to"
                                                type="date"
                                                name="to"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <label>&nbsp;</label>
                                        <div class="form-group">
                                            <button
                                                class="btn btn-primary"
                                                type="submit"
                                                bold
                                            >
                                                <i
                                                    class="fa fa-search"
                                                    aria-hidden="true"
                                                ></i>
                                                SEARCH
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Transmittal Number</label>
                                            <b-input-group>
                                                <input
                                                    v-model="transmittal_no"
                                                    type="text"
                                                    name="transmittal_no"
                                                    placeholder=""
                                                    class="form-control"
                                                    disabled
                                                />
                                                <b-input-group-append>
                                                    <b-button
                                                        @click="
                                                            getTransmittal()
                                                        "
                                                        variant="outline-primary"
                                                        size="sm"
                                                        ><i
                                                            class="fa fa-sync"
                                                            aria-hidden="true"
                                                        ></i
                                                    ></b-button>
                                                    <b-button
                                                        @click="
                                                            searchTransmittal()
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
                                                            printTransmittal()
                                                        "
                                                        variant="outline-primary"
                                                        size="sm"
                                                        ><i
                                                            class="fa fa-print"
                                                            aria-hidden="true"
                                                        ></i
                                                    ></b-button>
                                                </b-input-group-append>
                                            </b-input-group>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-md-6 table-height">
                                <table
                                    class="table table-hover table-striped dave-table"
                                >
                                    <thead class="dave-thead">
                                        <tr>
                                            <th
                                                style="text-align:center;width:10%;"
                                            >
                                                <input
                                                    style="height:10px !important;"
                                                    type="checkbox"
                                                    v-model="checkHeader"
                                                    checked="checked"
                                                    v-on:click="checkTableAll()"
                                                    id="checkboxAll"
                                                />
                                            </th>
                                            <th style="text-align:center;">
                                                SOA
                                            </th>
                                            <th style="text-align:center;">
                                                Billed Amount
                                            </th>
                                            <th
                                                style="text-align:center;width:20%;"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr v-for="item in filteredBlogs">
                                            <td
                                                style="width:10%;text-align:center;"
                                            >
                                                <input
                                                    v-bind:id="item.AHID"
                                                    style="height:10px !important;"
                                                    type="checkbox"
                                                    v-on:click="
                                                        checkTable(item)
                                                    "
                                                />
                                            </td>
                                            <td class="text-center">
                                                {{ item.SOANo }}
                                            </td>
                                            <td class="text-center">
                                                {{
                                                    item.amountInFigure
                                                        | formatNumber
                                                }}
                                            </td>
                                            <td
                                                style="width:20%;"
                                                class="text-center"
                                            >
                                                <i
                                                    style="font-size:120%;"
                                                    class="fa fa-eye text-primary"
                                                    @click="
                                                        clickDetails(item.soaID)
                                                    "
                                                ></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <h6>
                                        <b
                                            ><i
                                                >Create/Generate Transmittal</i
                                            ></b
                                        >
                                    </h6>
                                </div>
                                <div class="col-md-7">
                                    <div class="form-group">
                                        <label>Prepared By</label>
                                        <input
                                            v-model="prepared_by"
                                            type="text"
                                            name="prepared_by"
                                            placeholder=""
                                            class="form-control"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <label>&nbsp;</label>
                                    <div class="form-group">
                                        <button
                                            class="btn btn-success"
                                            type="button"
                                            @click="createTransmittal()"
                                            bold
                                        >
                                            <i
                                                class="fa fa-check-square"
                                                aria-hidden="true"
                                            ></i>
                                            Create Transmittal
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <div class="col-md-12">
                                    <h6>
                                        <b><i>Remove Transmittal Number</i></b>
                                    </h6>
                                </div>
                                <div class="col-md-7">
                                    <div class="form-group">
                                        <label>SOA Number</label>
                                        <b-input-group>
                                            <input
                                                v-model="SoaTransNo"
                                                type="text"
                                                name="SoaTransNo"
                                                placeholder=""
                                                class="form-control"
                                                disabled
                                            />
                                            <b-input-group-append>
                                                <b-button
                                                    @click="
                                                        searchAllowanceSOAHeaderButton()
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
                                <div class="col-md-5">
                                    <label>&nbsp;</label>
                                    <div class="form-group">
                                        <button
                                            class="btn btn-danger"
                                            type="button"
                                            @click="removeTransmittal()"
                                            bold
                                        >
                                            <i
                                                class="fa fa-times"
                                                aria-hidden="true"
                                            ></i>
                                            Remove Transmittal
                                        </button>
                                    </div>
                                </div>
                            </div> -->
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
            from: this.$root.formatDate(new Date()),
            to: this.$root.formatDate(new Date()),
            checkTableArrays: [],
            checkHeader: false,
            rows: [],
            search: "",
            transmittal_no: "",
            prepared_by: "",
            SOANo: "",
            SoaTransNo: ""
        };
    },
    methods: {
        checkTableAll() {
            console.log(this.rows);
            if (!this.checkHeader) {
                var arrays = [];
                var index = 0;
                this.rows.forEach(function(item) {
                    arrays.push(item);
                    document.getElementById(item.soaID).checked = true;
                });
                this.checkTableArrays = arrays;
            } else {
                this.rows.forEach(function(item) {
                    document.getElementById(item.soaID).checked = false;
                });
                this.checkTableArrays = [];
            }
        },
        checkTable(row) {
            if (this.checkTableArrays.indexOf(row) < 0) {
                this.checkTableArrays.push(row);
            } else {
                this.checkTableArrays.splice(
                    this.checkTableArrays.indexOf(row),
                    1
                );
            }
        },
        generate() {
            this.checkHeader = false;
            this.checkTableArrays = [];
            axios
                .get("api/allowance", {
                    params: {
                        SOAHeaderDateCons: true,
                        from: this.from,
                        to: this.to
                    }
                })
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getUser() {
            axios
                .get("api/allowance", { params: { getUser: true } })
                .then(response => {
                    this.prepared_by = response.data.name;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getTransmittal() {
            console.log("done");
            this.$Progress.start();
            axios
                .get("api/allowance", { params: { getTransmittalNo: true } })
                .then(response => {
                    if (response.data.length > 0) {
                        this.transmittal_no = response.data;
                    } else {
                        var dateNow = new Date();
                        var month = dateNow.getMonth() + 1;
                        this.transmittal_no =
                            "TF" +
                            dateNow
                                .getFullYear()
                                .toString()
                                .substring(2) +
                            month.toString().padStart(2, "0") +
                            "-1";
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        clickDetails(id) {
            Fire.$emit("searchAllowanceDetail", id);
        },
        createTransmittal() {
            if (this.checkTableArrays.length < 1) {
                return toast.fire({
                    icon: "warning",
                    title: "No Data Selected."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Create Transmittal!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    axios
                        .get("api/allowance", {
                            params: {
                                searchTransmittalExists: true,
                                transmittal_no: this.transmittal_no
                            }
                        })
                        .then(response => {
                            if (response.data.length > 0) {
                                swal.fire({
                                    title: "Transmittal Number Already Exists!",
                                    text:
                                        "Do you want to merge current selected records?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, Merge it!"
                                }).then(result => {
                                    if (result.value) {
                                        this.$Progress.start();
                                        var submitArray = [];
                                        this.checkTableArrays.forEach(function(
                                            item
                                        ) {
                                            submitArray.push(item.SOANo);
                                        });
                                        var data = {
                                            transmittal_no: this.transmittal_no,
                                            prepared_by: this.prepared_by,
                                            soa_no_list: submitArray,
                                            merge: true
                                        };
                                        this.$Progress.start();
                                        axios
                                            .post(
                                                "api/allowanceCreateTransmittalCons",
                                                data
                                            )
                                            .then(response => {
                                                if (response.data.success) {
                                                    this.checkTableArrays = [];
                                                    this.rows = [];
                                                    this.checkHeader = false;
                                                    this.SOANo = "";
                                                    this.prepared_by = "";
                                                    this.SoaTransNo = "";
                                                    window.open(
                                                        "api/reportConstructionTransmittal?report=true&transmittal_no=" +
                                                            this.transmittal_no
                                                    );
                                                    this.transmittal_no = "";
                                                    this.generate();
                                                    this.getUser();
                                                    this.getTransmittal();
                                                } else {
                                                    toast.fire({
                                                        icon: "warning",
                                                        title:
                                                            response.data
                                                                .message
                                                    });
                                                }
                                                this.$Progress.finish();
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
                            } else {
                                console.log("sa else nisulod");
                                this.$Progress.start();
                                var submitArray = [];
                                this.checkTableArrays.forEach(function(item) {
                                    submitArray.push(item.SOANo);
                                });
                                var data = {
                                    transmittal_no: this.transmittal_no,
                                    prepared_by: this.prepared_by,
                                    soa_no_list: submitArray
                                };
                                this.$Progress.start();
                                axios
                                    .post(
                                        "api/allowanceCreateTransmittalCons",
                                        data
                                    )
                                    .then(response => {
                                        if (response.data.success) {
                                            this.checkTableArrays = [];
                                            this.rows = [];
                                            this.checkHeader = false;
                                            this.SOANo = "";
                                            this.prepared_by = "";
                                            this.SoaTransNo = "";
                                            window.open(
                                                "api/reportConstructionTransmittal?report=true&transmittal_no=" +
                                                    this.transmittal_no
                                            );
                                            this.transmittal_no = "";
                                            this.generate();
                                            this.getUser();
                                            this.getTransmittal();
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
                            }
                            this.$Progress.finish();
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                } else {
                    swal.fire("Information!", "Cancelled.", "warning");
                }
            });
        },
        removeTransmittal() {
            if (!this.SOANo) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select/enter SOA number to continue."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Remove Transmittal #!"
            }).then(result => {
                if (result.value) {
                    var data = {
                        SOANo: this.SOANo,
                        prepared_by: this.prepared_by
                    };
                    this.$Progress.start();
                    axios
                        .post("api/allowanceRemoveTransmittal", data)
                        .then(response => {
                            if (response.data.success) {
                                this.SOANo = "";
                                this.SoaTransNo = "";
                                toast.fire({
                                    icon: "success",
                                    title: response.data.message
                                });
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
                } else {
                    swal.fire("Information!", "Cancelled.", "warning");
                }
            });
        },
        searchAllowanceSOAHeaderButton() {
            Fire.$emit("searchSOAAllowanceHeader", "transmittal");
        },
        allowanceSOAHeaderClose: function(row) {
            this.SoaTransNo = row.SOANo + " ( " + row.transmittal_no + ")";
            this.SOANo = row.SOANo;
        },
        searchTransmittal() {
            Fire.$emit("searchTransmittal", "allowance");
        },
        transmittalClose: function(row) {
            this.transmittal_no = row.transmittal_no;
        },
        printTransmittal() {
            axios
                .get("api/reportAllowanceTransmittal", { params: { searchTransmittalExists: true, transmittal_no: this.transmittal_no } })
                .then(response => {
                    if (response.data.success) {
                        window.open(
                            "api/reportAllowanceTransmittal?report=true&transmittal_no=" +
                                this.transmittal_no
                        );
                        this.getTransmittal();
                    } else {
                        return toast.fire({
                            icon: "warning",
                            title: "No data found in this transmittal number."
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.generate();
        this.getUser();
        this.getTransmittal();
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
