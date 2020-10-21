<template>
    <div
        class="modal fade dave-template"
        id="SearchEmployee"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addNewLabel"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
        >
            <div class="modal-content">
                <div class="modal-header-cus">
                    <div class="row container-fluid">
                        <div class="col-md-11">
                            <h5>
                                <b>Employee List</b>
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
                                            <th width="10%">ChapaID</th>
                                            <th>LName</th>
                                            <th>FName</th>
                                            <th>MName</th>
                                            <th width="10%">ExtName</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr v-show="this.loading">
                                            <td colspan="5" class="text-center"><i>Loading...</i></td>
                                        </tr>
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.EmpID"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td width="10%">{{ item.Chapa }}</td>
                                            <td>{{ item.LName }}</td>
                                            <td>{{ item.FName }}</td>
                                            <td>{{ item.MName }}</td>
                                            <td width="10%">{{ item.ExtName }}</td>
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
            loading: false
        };
    },
    mounted() {
        Fire.$on("searchEmployee", () => {
            this.getData();
            $("#SearchEmployee").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            this.$emit("rowClick", row);
            $("#SearchEmployee").modal("hide");
        },
        getData() {
            this.loading = true;
            axios
                .get("api/employeeList")
                .then(response => {
                    if(response.data){
                        this.rows = response.data;
                    }
                    this.loading = false;
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
                            item.Chapa.toString().toLowerCase().includes(v) ||
                            item.LName.toString().toLowerCase().includes(v) ||
                            item.FName.toString().toLowerCase().includes(v) ||
                            item.MName.toString().toLowerCase().includes(v) ||
                            item.ExtName.toString().toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
