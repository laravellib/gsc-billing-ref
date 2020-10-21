<template>
    <div class="container">
        <!-- modal  -->
        <div
            class="modal fade"
            id="rateLModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addNewLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Rate</h4>
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
                        <form @submit.prevent="saveRate()">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <label for="refence"
                                            >Prev. Active Rate</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="u_price"
                                            v-model="this.rate"
                                            disabled
                                        />
                                    </div>
                                    <div class="col-sm">
                                        <label for="refence">Rate</label>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            name="u_price"
                                            v-model="form.rate"
                                        />
                                    </div>
                                </div>
                            </div>
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
export default {
    props: {
        loc_id: {
            type: Number
        },
        rate: {
            type: Number
        }
    },
    data() {
        return {
            form: new Form({
                id: "",
                loc_id: 0,
                rate: 0
            })
        };
    },
    methods: {
        saveRate() {
            this.form.loc_id = this.loc_id;
            this.$Progress.start();
            this.form
                .post("vanrental/location_add_rate")
                .then(() => {
                    toast.fire({
                        icon: "success",
                        title: "Rate Added in successfully"
                    });
                    this.form.reset();
                    $("#rateLModal").modal("hide");
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
