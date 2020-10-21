<style>
    .font-adjustment {
        font-size: 70%;
    }
    .adjust-monitoring-td {
        width: 8%;
    }
</style>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <b><i class="fa fa-desktop" aria-hidden="true"></i> &nbsp;&nbsp;Dashboard/Monitoring</b>
                                        </div>
                                        <div class="col-md-6 text-right">
                                                <button type="button" @click="sumall" class="btn btn-md btn-success">SUM ALL PROJECTS</button>
                                                <button type="button" @click="project_cost" class="btn btn-md btn-primary">DIRECT COST ENTRY</button>
                                                <button type="button" @click="project_detail" class="btn btn-md btn-info">PROJECT DETAILS</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="card-body">
                       <div class="row mb-1">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-hover ">
                                    <thead class="scroll-thead-po thead-dark">
                                        <tr>
                                            <th class="table-th-dash font-adjustment">Month/Date</th>
                                            <th class="table-th-dash font-adjustment">
                                                Batch
                                            </th>
                                            <th
                                                class="table-th-dash font-adjustment"
                                                style="text-align:left;"
                                            >
                                                Project
                                            </th>
                                            <th class="table-th-dash font-adjustment">Expenses</th>
                                            <th
                                                class="table-th-dash font-adjustment"
                                            >
                                                STD Expense Account
                                            </th>
                                            <th
                                                class="table-th-dash font-adjustment"
                                            >
                                                DR NO./ PO NO /REF. NO.
                                            </th>
                                            <!-- <th class="table-th-dash font-adjustment">
                                                Qty
                                            </th> -->
                                            <!-- <th class="table-th-dash font-adjustment">
                                                Unit
                                            </th>
                                            <th class="table-th-dash font-adjustment">
                                                Unit Price
                                            </th> -->
                                            <th class="table-th-dash font-adjustment">
                                                Amount
                                            </th>
                                            <!-- <th class="table-th-dash font-adjustment">
                                                Description
                                            </th>
                                            <th class="table-th-dash font-adjustment">
                                                Supplier
                                            </th> -->
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="scroll-tbody-y-po table-body-dash scroll-thead-x-po"
                                    >
                                    <tr v-for="row in filteredBlogs">
                                            <td class="text-center adjust-monitoring-td">
                                                {{ row.DocumentDate | formatDate }}
                                            </td>
                                            <td class="text-left adjust-monitoring-td">
                                                {{
                                                    row.batchNo
                                                }}
                                            </td>
                                            <td class="text-left adjust-monitoring-td"> 
                                                {{
                                                    row.ItemDesc
                                                }}
                                            </td>
                                            <td class="text-left adjust-monitoring-td">
                                                {{
                                                    row.Expensetype
                                                }}
                                            </td>
                                            <td class="text-left adjust-monitoring-td">
                                                {{
                                                    row.expenseName
                                                }}
                                            </td>
                                            <td class="text-center adjust-monitoring-td">
                                                {{
                                                    row.DocumentNum
                                                }}
                                            </td>
                                            <td class="text-right adjust-monitoring-td">
                                                {{
                                                    row.Amount | formatNumber
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- <pagination :data="dtls" @pagination-change-page="pageDtl"></pagination> -->
                            </div>
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
            monQuery: "",

            variables: new Form({
                DocumentNum: "",
           
            })
        };
    },
        methods: {
        generate() {
            axios
                .get("api/monitoring")
                .then(response => {
                    this.rows = response.data;
                    console.log(this.rows);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        project_detail(){
            axios
                .get("api/projectdetail")
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        window.open(
                            "api/projectdetail?report=true"
                        );
                    } else {
                        swal.fire("Warning!", response.data.message, "warning");
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        project_cost(){
            axios
                .get("api/projectcost")
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        window.open(
                            "api/projectcost?report=true"
                        );
                    } else {
                        swal.fire("Warning!", response.data.message, "warning");
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        sumall(){
            axios
                .get("api/projectsumall")
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        window.open(
                            "api/projectsumall?report=true"
                        );
                    } else {
                        swal.fire("Warning!", response.data.message, "warning");
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        



    },
        mounted() {
            console.log('Component mounted.')
            this.generate();
        },
        computed: {
        filteredBlogs() {
            return this.rows.filter(variables => {
                return variables.DocumentNum
                    .toLowerCase()
                    .includes(this.monQuery.toLowerCase());
            });
        }
    }
    }
</script>
