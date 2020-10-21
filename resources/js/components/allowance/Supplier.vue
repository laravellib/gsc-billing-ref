<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Supplier List Entry</b>
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
                                            <label>Supplier</label>
                                            <input
                                                v-model="header.supName"
                                                type="text"
                                                name="supName"
                                                placeholder=""
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input
                                                v-model="header.supAddress"
                                                type="text"
                                                name="supAddress"
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
                                                <th>Supplier Name</th>
                                                <th>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody class="dave-tbody modal-tbody">
                                            <tr
                                                v-for="item in filteredBlogs"
                                                v-on:click="rowClick(item)"
                                            >
                                                <td>
                                                    {{ item.supName }}
                                                </td>
                                                <td>
                                                    {{ item.supAddress }}
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
                supID: "",
                supName: "",
                supAddress: ""
            }
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        rowClick: function(row) {
            this.header = Object.assign({}, row);
        },
        getData() {
            axios
                .get("api/allowance", { params: { getSupplier: true } })
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
                .post("api/allowanceSupplier", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.supID = response.data.id;
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
            if (!this.header.supID) {
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
                        .delete(`api/allowanceSupplierDelete/${this.header.supID}`)
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
                supID: "",
                supName: "",
                supAddress: "",
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
                            item.supName.toLowerCase().includes(v) ||
                            item.supAddress.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
