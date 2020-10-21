<template>
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-list"
                                >Lift Truck List</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-location"
                                >Location</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-po"
                                >Purchase Order</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-ledger"
                                >Ledger</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-delivery"
                                >Delivery</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-charge"
                                >Charge Invoice</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                tag="a"
                                class="nav-link"
                                active-class="active"
                                exact
                                to="/liftruck-reports"
                                >Reports</router-link
                            >
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <div class="row mt-3">
                    <div class="col-sm">
                        <label for="refence">CH #</label>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="ch_no"
                                v-model="ch_no"
                                disabled
                            />
                            <span class="input-group-btn">
                                <button
                                    type="button"
                                    class="btn btn-outline-primary btn-sm"
                                    @click="searchPOHeader()"
                                >
                                    Search
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <label for="refence">Date</label>
                        <input
                            type="text"
                            class="form-control form-control-sm"
                            name="date"
                            v-model="date"
                            disabled
                        />
                    </div>
                    <div class="col-sm">
                        <label for="refence">STATUS</label>
                        <p>
                            <strong>{{ status }}</strong>
                        </p>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-sm">
                        <label for="refence">Charged</label>
                        <input
                            type="text"
                            class="form-control form-control-sm"
                            name="charged"
                            v-model="charged"
                            disabled
                        />
                    </div>
                    <div class="col-sm">
                        <label for="refence">TIN</label>
                        <input
                            type="text"
                            class="form-control form-control-sm"
                            name="tin"
                            v-model="tin"
                            disabled
                        />
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-sm">
                        <label for="refence">Address</label>
                        <input
                            type="text"
                            class="form-control form-control-sm"
                            name="address"
                            v-model="address"
                            disabled
                        />
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col">
                        <kendo-grid
                            :height="220"
                            :data-source="filter"
                            :selectable="true"
                            :sortable="true"
                        >
                            <kendo-grid-column
                                :field="'qty'"
                                :title="'Qty'"
                            ></kendo-grid-column>
                            <kendo-grid-column
                                :field="'unit'"
                                :title="'Unit'"
                            ></kendo-grid-column>
                            <kendo-grid-column
                                :field="'article'"
                                :title="'Article'"
                            ></kendo-grid-column>
                            <kendo-grid-column
                                :field="'u_price'"
                                :title="'U Price'"
                            ></kendo-grid-column>
                            <kendo-grid-column
                                :field="'amount'"
                                :title="'Amount'"
                            ></kendo-grid-column>
                        </kendo-grid>
                    </div>
                </div>
                <add-detail
                    :passedData="this.header_id"
                    @push_data="push_detail"
                ></add-detail>
                <new-ci @po_pass="get_header"></new-ci>
                <search-header
                    @data_pass="get_header"
                    :key="this.update_data"
                ></search-header>
                <div class="row">
                    <div class="modal-footer">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="new_ci()"
                        >
                            New Charge Invoice
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="clear()"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="post_po(header_id)"
                        >
                            POST
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="cancel_po(header_id)"
                        >
                            CANCEL
                        </button>
                        <button
                            type="button"
                            class="btn btn-success"
                            @click="add_detail()"
                        >
                            Add Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newCI from "./Liftruck-Charge-New.vue";
import addDetail from "./Liftruck-Charge-Detail.vue";
import searchHeader from "./Liftruck-Charge-Search.vue";
export default {
    components: {
        "new-ci": newCI,
        "add-detail": addDetail,
        "search-header": searchHeader
    },
    data() {
        return {
            header_id: 0,
            ch_no: "",
            date: "",
            charged: "",
            tin: "",
            address: "",
            status: "ACTIVE",
            filter: {},
            datas: {},
            update_data: 0
        };
    },
    methods: {
        clear() {
            this.header_id = 0;
            this.ch_no = "";
            this.date = "";
            this.charged = "";
            this.tin = "";
            this.address = "";
            this.status = "ACTIVE";
            this.filter = null;
            this.datas = null;
            this.update_data = 0;
        },
        cancel_po(id) {
            if (this.status == "CANCELLED") {
                swal.fire("Transaction already Cancelled.", "warning");
            } else if (this.status == "POSTED") {
                swal.fire("Transaction already Closed.", "warning");
            } else {
                if (this.header_id == 0) {
                    swal.fire("No Data is Selected.", "warning");
                } else {
                    swal.fire({
                        title: "CANCEL Charge Invoice?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, CANCEL it!"
                    }).then(result => {
                        if (result.value) {
                            console.log(id);
                            axios
                                .get("liftruck/cancel_ci/" + this.header_id)
                                .then(({ data }) => {
                                    swal.fire(
                                        "CANCELLED!",
                                        "Your data has been cancelled.",
                                        "success"
                                    );
                                    this.clear();
                                    this.update_data = 1;
                                });
                        }
                    });
                }
            }
        },
        post_po(id) {
            if (this.status == "CANCELLED") {
                swal.fire("Transaction already Cancelled.", "warning");
            } else if (this.status == "POSTED") {
                swal.fire("Transaction already Closed.", "warning");
            } else {
                if (this.header_id == 0) {
                    swal.fire("No Data is Selected.", "warning");
                } else {
                    swal.fire({
                        title: "POST Charge Invoice?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, POST it!"
                    }).then(result => {
                        if (result.value) {
                            console.log(id);
                            axios
                                .get("liftruck/post_ci/" + this.header_id)
                                .then(({ data }) => {
                                    swal.fire(
                                        "POST!",
                                        "Your data has been posted.",
                                        "success"
                                    );
                                    this.clear();
                                    this.update_data = 2;
                                });
                        }
                    });
                }
            }
        },
        searchPOHeader() {
            $("#searchCCI").modal("show");
        },
        get_header(data) {
            this.header_id = data.id;
            this.ch_no = data.ch_no;
            this.date = data.date;
            this.charged = data.charged;
            this.tin = data.tin;
            this.address = data.address;
            this.status = data.status;
            this.get_detail();
        },
        get_detail() {
            axios.get("liftruck/dtl_ci/" + this.header_id).then(({ data }) => {
                this.datas = data.data;
                this.filter = this.datas;
            });
        },
        new_ci() {
            this.clear();
            $("#newLiftruckCI").modal("show");
        },
        add_detail() {
            if (this.status == "CANCELLED") {
                swal.fire("Transaction already Cancelled.", "warning");
            } else if (this.status == "POSTED") {
                swal.fire("Transaction already Closed.", "warning");
            } else {
                if (this.header_id == 0) {
                    swal.fire("No Data is Selected.", "warning");
                } else {
                    $("#newLiftruckCIDetail").modal("show");
                }
            }
        },
        clearData() {
            this.form.reset();
        },
        push_detail(data) {
            this.filter.push(data);
        }
    },
    created() {}
};
</script>
