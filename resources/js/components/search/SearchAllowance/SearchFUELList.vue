<template>
    <div
        class="modal fade dave-template"
        id="FUELListModal"
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
                                <b>FUEL List</b>
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
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Unit</th>
                                            <th>Unit Price</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td>
                                                {{ item.Code }}
                                            </td>
                                            <td>
                                                {{ item.Description }}
                                            </td>
                                            <td>{{ item.Unit }}</td>
                                            <td>
                                                {{
                                                    item.UnitPrice
                                                        | formatNumber
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
        Fire.$on("FUELListModal", data => {
            this.getData();
            $("#FUELListModal").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#FUELListModal").modal("hide");
        },
        getData() {
            axios
                .get("api/fuel", { params: { getFUELList: true } })
                .then(response => {
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
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
                            item.Code.toLowerCase().includes(v) ||
                            item.Description.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
