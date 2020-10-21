<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Cost Center List Entry</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-5">
                            <form @submit.prevent="save()">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Control No.</label>
                                            <input
                                                v-model="header.ACCID"
                                                type="text"
                                                name="ACCID"
                                                placeholder=""
                                                class="form-control"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Code</label>
                                            <input
                                                v-model="header.Code"
                                                type="text"
                                                name="Code"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input
                                                v-model="header.Costcenter"
                                                type="text"
                                                name="Costcenter"
                                                placeholder=""
                                                class="form-control"
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
                                                @click="deleteFUELListButton()"
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
                                                <th style="text-align:center;width:15%;">Code</th>
                                                <th style="text-align:left;">Costcenter</th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody modal-tbody">
                                            <tr
                                                v-for="item in filteredBlogs"
                                                v-on:click="rowClick(item)"
                                            >
                                                <td style="width:15%;text-align:center;">
                                                    {{ item.Code }}
                                                </td>
                                                <td>
                                                    {{ item.Costcenter }}
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [],
            search: "",
            type: "",
            header: {
                ACCID: "",
                Code: "",
                Costcenter: ""
            }
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        rowClick: function(row) {
            this.header = Object.assign({}, row);
            this.header.UnitPrice = this.$root.formatNumberCommaRound(row.UnitPrice);
            this.$emit("rowClick", row);
            $("#FUELListModal").modal("hide");
        },
        getData() {
            axios
                .get("api/allowance", { params: { getCostCenter: true } })
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        save() {
            var data = Object.assign({}, this.header);
            this.$Progress.start();
            axios
                .post("api/allowanceCostcenter", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.ACCID = response.data.id;
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
        deleteFUELListButton() {
            if (!this.header.ACCID) {
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
                        .delete(`api/allowanceCostcenterDelete/${this.header.ACCID}`)
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
                ACCID: "",
                Code: "",
                Costcenter: "",
            };
        }
    },
    created() {
        
    },
    computed: {
        filteredBlogs() {
            return this.rows.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.Code.toLowerCase().includes(v) ||
                            item.Costcenter.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
