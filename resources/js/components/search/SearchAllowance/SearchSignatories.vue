
<template>
    <div
        class="modal fade dave-template"
        id="SearchSignatory"
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
                                <b>Signatory List</b>
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
                                    placeholder="Search Signatory here..."
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 table-height">
                                <table class="table table-hover table-striped dave-table">
                                    <thead class="dave-thead">
                                        <tr>
                                            <th>Signatory Name</th>
                                            <th>Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody class="dave-tbody modal-tbody">
                                        <tr
                                            v-for="item in filteredBlogs"
                                            v-bind:key="item.SID"
                                            v-on:click="rowClick(item)"
                                        >
                                            <td>{{ item.SignatoryName }}</td>
                                            <td>{{ item.Designation }}</td>
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
            number: 0
        };
    },
    mounted() {
        Fire.$on("searchSignatory", (data) => {
            this.number = data;
            this.getData();
            $("#SearchSignatory").modal("show");
        });
    },
    methods: {
        rowClick: function(row) {
            row.number = this.number;
            this.$emit("rowClick", row);
            $("#SearchSignatory").modal("hide");
        },
        getData() {
            axios
                .get("api/signatoryList")
                .then(response => {
                    response.data.forEach(function(item){
                        var extname = item.ename ? " " + item.ename : "";
                        var mname = item.mname ? " " + item.mname[0] + "." : "";
                        item.SignatoryName = item.fname + mname + " " + item.lname + extname;
                        item.Designation = item.position;
                    })
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
                    .every(v => item.SignatoryName.toLowerCase().includes(v));
            });
        }
    }
};
</script>
