<template>
    <div
        class="modal fade dave-template"
        id="SearchAllowanceHeader"
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
                                <b>Allowance Header List</b>
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
                <div class="modal-body-cus">
                    <div class="container-fluid">
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
                                <table class="table table-hover table-striped dave-table">
                                    <thead class="dave-thead">
                                        <tr>
                                            <th width="20%">Period</th>
                                            <th>Location</th>
                                            <th width="25%">Date Created</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td width="20%">
                                                {{ item.Period }}
                                            </td>
                                            <td>{{ item.Location }}</td>
                                            <td width="25%">
                                                {{
                                                    item.date_created
                                                        | formatDate
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
</template>

<script>
export default {
    data() {
        return {
            rows: [],
            search: "",
            type: ""
        };
    },
    mounted() {
        Fire.$on("searchAllowanceHeader", (data) => {
            this.type = data;
            this.getAllowanceHeaderModal();
            $("#SearchAllowanceHeader").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchAllowanceHeader").modal("hide");
        },
        getAllowanceHeaderModal() {
            if (this.type == "soa") {
                axios
                    .get("api/allowance", { params: { SOAOnly: true } })
                    .then(response => {
                        this.rows = response.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                axios
                    .get("api/allowance", { params: { header: true } })
                    .then(response => {
                        this.rows = response.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
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
                            item.Period.toLowerCase().includes(v) ||
                            item.Location.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
