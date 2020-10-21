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
                        <label for="refence">Delivered To</label>
                        <div class="input-group">
                            <input
                                type="text"
                                name="delivered_to"
                                v-model="delivered_to"
                                class="form-control form-control-sm"
                                disabled
                            />
                            <span class="input-group-btn">
                                <button
                                    type="button"
                                    class="btn btn-outline-primary btn-sm"
                                    @click="searchDRHeader()"
                                >
                                    Search
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <label for="refence">Date</label>
                        <input
                            type="date"
                            name="date"
                            v-model="date"
                            class="form-control form-control-sm"
                        />
                    </div>
                    <div class="col-sm">
                        <label for="refence">STATUS</label>
                        <p>{{ status }}</p>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col">
                        <label for="refence">From</label>
                        <input
                            type="text"
                            name="from"
                            v-model="from"
                            class="form-control form-control-sm"
                            disabled
                        />
                    </div>
                    <div class="col">
                        <label for="refence">To</label>
                        <input
                            type="text"
                            name="to"
                            v-model="to"
                            class="form-control form-control-sm"
                            disabled
                        />
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="col">
                        <label for="refence">Unit</label>
                        <input
                            type="text"
                            name="unit_no"
                            v-model="unit_no"
                            class="form-control form-control-sm"
                        />
                    </div>
                    <div class="col">
                        <label for="refence">Odometer START</label>
                        <input
                            type="text"
                            name="start"
                            v-model="start"
                            class="form-control form-control-sm"
                        />
                    </div>
                    <div class="col">
                        <label for="refence">END</label>
                        <input
                            type="text"
                            name="end"
                            v-model="end"
                            class="form-control form-control-sm"
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
                                :field="'location'"
                                :title="'Description'"
                            ></kendo-grid-column>
                        </kendo-grid>
                    </div>
                </div>
                <new-dr @po_pass="get_header"></new-dr>
                <add-detail
                    :passedData="this.header_id"
                    @push_data="push_detail"
                ></add-detail>
                <search-header
                    @data_pass="get_header"
                    :key="this.update_data"
                ></search-header>
                <div class="row">
                    <div class="modal-footer">
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="new_dr()"
                        >
                            New Delivery
                        </button>
                        <button
                            type="submit"
                            class="btn btn-success"
                            @click="post_dr()"
                        >
                            POST
                        </button>
                        <button
                            type="submit"
                            class="btn btn-danger"
                            @click="cancel_dr()"
                        >
                            CANCEL
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
import newDR from "./Liftruck-Delivery-New.vue";
import addDetail from "./Liftruck-Delivery-Detail.vue";
import searchHeader from "./Liftruck-Delivery-Search.vue";
export default {
    components: {
        "new-dr": newDR,
        "add-detail": addDetail,
        "search-header": searchHeader
    },
    data() {
        return {
            filter: {},
            rental: {},
            header_id: 0,
            delivered_to: "",
            date: "",
            from: "",
            to: "",
            unit_no: "",
            start: "",
            end: "",
            status: "ACTIVE",
            total_amount: 0,
            update_data: 0
        };
    },
    methods: {
        cancel_dr() {
            if (this.status == "CANCELLED") {
                swal.fire("Transaction already Cancelled.", "warning");
            } else if (this.status == "POSTED") {
                swal.fire("Transaction already Closed.", "warning");
            } else {
                if (this.header_id == 0) {
                    swal.fire("No Data is Selected.", "warning");
                } else {
                    swal.fire({
                        title: "CANCEL DELIVERY?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, CANCEL it!"
                    }).then(result => {
                        if (result.value) {
                            axios
                                .get("liftruck/cancel_dr/" + this.header_id)
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
        post_dr() {
            if (this.status == "CANCELLED") {
                swal.fire("Transaction already Cancelled.", "warning");
            } else if (this.status == "POSTED") {
                swal.fire("Transaction already Closed.", "warning");
            } else {
                if (this.header_id == 0) {
                    swal.fire("No Data is Selected.", "warning");
                } else {
                    swal.fire({
                        title: "POST DELIVERY?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, POST it!"
                    }).then(result => {
                        if (result.value) {
                            axios
                                .get("liftruck/post_dr/" + this.header_id)
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
        clear() {
            this.filter = null;
            this.rental = null;
            this.header_id = 0;
            this.delivered_to = "";
            this.date = "";
            this.from = "";
            this.to = "";
            this.unit_no = "";
            this.start = "";
            this.end = "";
            this.status = "ACTIVE";
            this.total_amount = 0;
            this.update_data = 0;
        },
        searchDRHeader() {
            $("#searchLDR").modal("show");
        },
        get_header(data) {
            console.log(data);
            this.header_id = data.id;
            this.delivered_to = data.delivered_to;
            this.date = data.date;
            this.unit_no = data.unit_no;
            this.from = data.from;
            this.to = data.to;
            this.start = data.start;
            this.end = data.end;
            this.status = data.status;
            this.get_detail();
        },
        get_detail() {
            axios.get("liftruck/dtl_dr/" + this.header_id).then(({ data }) => {
                this.datas = data.data;
                this.filter = this.datas;
                this.total_amount = data.sum;
            });
        },
        new_dr() {
            this.clear();
            $("#newLiftruckDR").modal("show");
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
                    $("#newLiftruckDRDetail").modal("show");
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
