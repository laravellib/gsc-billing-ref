<template>
    <div
        class="modal fade dave-template"
        id="SearchPeriod"
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
                                <b>Period List</b>
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
                                            <th>Month</th>
                                            <th>Year</th>
                                            <th>Phase</th>
                                            <th>Code</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.PPID"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td>{{ item.xMonth }}</td>
                                            <td>{{ item.xYear }}</td>
                                            <td>{{ item.xPhase }}</td>
                                            <td>{{ item.code }}</td>
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
            search: ""
        };
    },
    mounted() {
        Fire.$on("searchPeriod", () => {
            this.getPeriod();
            $("#SearchPeriod").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchPeriod").modal("hide");
        },
        getPeriod() {
            axios
                .get("api/periodList")
                .then(response => {
                    response.data.forEach(function(item) {
                        var semiMonth =
                            new Date(
                                Date.parse(item.xMonth + "1, 2020")
                            ).getMonth() + 1;
                        var month = semiMonth.toString().padStart(2, "0");
                        item.code = item.xYear + month + "-" + item.xPhase;
                    });
                    this.rows = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
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
                            item.xMonth.toString().toLowerCase().includes(v) ||
                            item.xYear.toString().toLowerCase().includes(v) ||
                            item.xPhase.toString().toLowerCase().includes(v) ||
                            item.code.toString().toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
