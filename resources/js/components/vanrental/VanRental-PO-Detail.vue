<template>
    <div class="container">
        <!-- modal  -->
        <div
            class="modal fade"
            id="newVanRentalDetail"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addNewLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Detail</h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createDetail()">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <label for="refence">Route</label>
                                        <div class="input-group">
                                            <input
                                                type="text"
                                                class="form-control form-control-sm"
                                                name="location"
                                                v-model="form.location"
                                                disabled
                                            />
                                            <span class="input-group-btn">
                                                <button
                                                    type="button"
                                                    class="btn btn-outline-primary btn-sm"
                                                    @click="searchLocation()"
                                                >
                                                    Search
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <label for="refence">Activity</label>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="activity"
                                            v-model="form.activity"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label for="refence">Rate</label>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="u_price"
                                            v-model="form.u_price"
                                            disabled
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <label for="refence"
                                            >Qty / No. of Trips</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="qty"
                                            v-model="form.qty"
                                            v-on:keyup="calculate()"
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <label for="refence">Amount</label>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="amount"
                                            v-model="form.amount"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label for="refence"
                                            >Description / Note</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="description"
                                            v-model="form.description"
                                        />
                                    </div>
                                </div>
                            </div>
                            <search-location
                                @data_pass="get_location"
                            ></search-location>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">
                                    SAVE
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- end modal -->
    </div>
</template>

<script>
import searchLocation from "./VanRental-Search-Location.vue";
export default {
    components: {
        "search-location": searchLocation
    },
    props: {
        passedData: {
            type: Number
        }
    },
    data() {
        return {
            form: new Form({
                header_id: 0,
                mat_code: "",
                location: "",
                description: "",
                activity: "",
                qty: 0,
                u_price: 0,
                amount: 0
            })
        };
    },
    methods: {
        calculate() {
            this.form.amount = this.form.qty * this.form.u_price;
        },
        get_location(data) {
            this.form.mat_code = data.mat_code;
            this.form.location = data.name;
            this.form.activity = data.activity;
            this.form.u_price = data.rate;
        },
        searchLocation() {
            $("#searchVLocation").modal("show");
        },
        createDetail() {
            this.form.header_id = this.passedData;
            this.$Progress.start();
            this.form
                .post("vanrental/store_dtl")
                .then(data => {
                    toast.fire({
                        icon: "success",
                        title: "Added Data in successfully"
                    });
                    this.$emit("push_data", data.data);
                    this.form.reset();
                    $("#newVanRentalDetail").modal("hide");
                })
                .catch(() => {
                    this.$Progress.fail();
                    toast.fire({
                        icon: "error",
                        title: "Error Found"
                    });
                });

            this.$Progress.finish();
        }
    },
    mounted() {},
    created() {}
};
</script>
