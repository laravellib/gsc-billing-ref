<template>
    <div class="container dave-template">
        <div class="col-md-6 offset-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Modify Mark-ups</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit.prevent="save()">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Allowance Mark-Up (%)</label>
                                            <input
                                                v-model="header.ALWMarkUp"
                                                type="text"
                                                name="ALWMarkUp"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>PPE Mark-Up (%)</label>
                                            <input
                                                v-model="header.PPEMarkUp"
                                                type="text"
                                                name="PPEMarkUp"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Fuel Mark-Up (%)</label>
                                            <input
                                                v-model="header.FuelMarkUp"
                                                type="text"
                                                name="FuelMarkUp"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Supplies Mark-Up (%)</label>
                                            <input
                                                v-model="header.SupMarkUp"
                                                type="text"
                                                name="SupMarkUp"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Others Mark-Up (%)</label>
                                            <input
                                                v-model="header.OtherMarkUp"
                                                type="text"
                                                name="OtherMarkUp"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Incentive Mark-Up (%)</label>
                                            <input
                                                v-model="header.IncentiveMarkup"
                                                type="text"
                                                name="IncentiveMarkup"
                                                placeholder=""
                                                class="form-control text-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 text-right offset-8">
                                        <label>&nbsp;</label>
                                        <div class="form-group">
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
                MUID: "",
                ALWMarkUp: "",
                PPEMarkUp: "",
                FuelMarkUp: "",
                SupMarkUp: "",
                OtherMarkUp: "",
                IncentiveMarkup: "",
            }
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get("api/markup")
                .then(response => {
                    this.header = response.data[0];
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        save() {
            var data = Object.assign({}, this.header);
            this.$Progress.start();
            axios
                .post("api/markupSave", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.MUID = response.data.id;
                        }
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
        }
    },
    created() {},
    computed: {}
};
</script>
