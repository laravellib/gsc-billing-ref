<style>
.scroll-thead
{
    width: 100%;
    display: inline-table;
}

.scroll-tbody-y
{
    display: block;
    overflow-y: scroll;
}
.table-td-date{
    width: 29.6%;
}
.table-td-dates{
    width: 29.6%;
}
.table-td{
    width: 30.9%;
}
.table-th{
    width: 30.2%;
}
.table-body{
    height: 300px;
    width: 100%;
}
</style>
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-10">
                                <h3 class="card-title">
                                    <i class="fas fa-money-bill-alt"></i>
                                    <strong>&nbsp;Collection Update</strong>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <!-------------------------------modal PO start--------------------------------->
                        <div
                        class="modal fade bd-example-modal-lg-table"
                        id="header"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Choose header
                                    </h5>
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
                                    <div class="row mb-1">
                                        <div class="col-md-4">
                                            <label>Search Document #</label>
                                            <input type="text" v-model="docQuery">
                                        </div>
                                    </div>
                                    <table class="table table-hover">
                                        <thead class="scroll-thead-po ">
                                            <tr>
                                                <th class="table-th-po">DOC #</th>
                                                <th class="table-th-po">DOC DATE</th>
                                                <th class="table-th-po">TERMS</th>
                                                <th class="table-th-po">INCOTERMS</th>
                                                <th class="table-th-po">VENDOR</th>
                                                <th class="table-th-po">CLIENT</th>
                                                <th class="table-th-po">STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody class="scroll-tbody-y-po table-body-posearch">
                                            <tr
                                                v-for="po in filteredPo"
                                                v-bind:key="po.POid"
                                                v-on:click="checkHeader(po)"
                                            >
                                                <td class="table-td-po">{{ po.DocumentNum }}</td>
                                                <td class="table-td-po">{{ po.DocumentDate }}</td>
                                                <td class="table-td-po">{{ po.PaymentTerms }}</td>
                                                <td class="table-td-po">{{ po.IncoTerms }}</td>
                                                <td class="table-td-po">{{ po.Vendor }}</td>
                                                <td class="table-td-po">{{ po.Client }}</td>
                                                <td class="table-td-po">{{ po.Status }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-------------------------------modal PO end--------------------------------->
                        <!-------------------------------modal POdtl start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="detail"
                            tabindex="-1"
                            role="dialog"
                            aria-hidden="true"
                        >
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5
                                            class="modal-title"
                                            id="exampleModalLabel"
                                        >
                                            Choose PO Detail
                                        </h5>
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="row mb-1">
                                        <div class="col-md-4">
                                            <label>Line #</label>
                                            <input type="text" v-model="lineQuery">
                                        </div>
                                    </div>
                                        <table
                                            class="table table-hover pre-scrollable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Line #</th>
                                                    <th>Mat Code</th>
                                                    <th>Item Description</th>
                                                    <th
                                                        style="text-align:right;"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th>UoM</th>
                                                    <th
                                                        style="text-align:right;"
                                                    >
                                                        Unit Price
                                                    </th>
                                                    <th
                                                        style="text-align:right;"
                                                    >
                                                        Amount
                                                    </th>
                                                    <th>Del. Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="dl in filteredDtl"
                                                    v-bind:key="dl.PODtlid"
                                                    v-on:click="checkDtl(dl)"
                                                >
                                                    <td>{{ dl.LineNum }}</td>
                                                    <td>{{ dl.MatCode }}</td>
                                                    <td>{{ dl.ItemDesc }}</td>
                                                    <td
                                                        style="text-align:right;"
                                                    >
                                                        {{ dl.Quantity }}
                                                    </td>
                                                    <td>{{ dl.Uom }}</td>
                                                    <td
                                                        style="text-align:right;"
                                                    >
                                                        {{ dl.UnitPrice }}
                                                    </td>
                                                    <td
                                                        style="text-align:right;"
                                                    >
                                                        {{ dl.Amt }}
                                                    </td>
                                                    <td>{{ dl.DelDate }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal POdtl end--------------------------------->

                        <form @submit.prevent="createCompletion()">
                            <div class="row mb-1">
                                <div class="col-md-12 text-right">
                                    <h5 style="font-weight:bold">PO PERCENTAGE COMPLETION: <strong style="color:red;">{{completion}}</strong></h5>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>SELECT PO</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.Ponum"
                                        required
                                    />
                                    <button
                                        type="button"
                                        @click="openSearch"
                                        class="btn btn-secondary"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>DETAIL</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.Linenum"
                                        required
                                    />
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        @click="openSearchDtl"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>% Complete</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control text-right"
                                        v-model="variables.completion"
                                        required
                                    />
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>Date </strong>
                                        </span>
                                    </div>
                                    <input
                                        type="date"
                                        class="form-control"
                                        v-model="variables.as_of"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-12">
                                    <table class="table table-hover">
                                            <thead class="scroll-thead thead-dark">
                                                <tr>
                                                    <th class="table-th">DOC #</th>
                                                    <th class="table-th">Line #</th>
                                                    <th class="table-th">Completion</th>
                                                    <th class="table-th">AS OF</th>
                                                </tr>
                                            </thead>
                                            <tbody class="scroll-tbody-y table-body">
                                                <tr
                                                    v-for="col in collections"
                                                    v-bind:key="col.collectionID"
                                                    v-on:click="checkCollection(col)"
                                                >
                                                    <td class="table-td">
                                                        {{ col.Ponum }}
                                                    </td>
                                                    <td class="table-td">
                                                        {{ col.Linenum }}
                                                    </td>
                                                    <td class="table-td-date">
                                                        {{ col.completion }}%
                                                    </td>
                                                    <td class="table-td-dates">{{ col.as_of | formatDate}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-right">
                                    <button type="button" class="btn btn-primary btn-md " @click="clearHeader">
                                        Clear
                                    </button>
                                    <button type="submit" class="btn btn-success btn-md ">
                                        Save
                                    </button>
                                    <button type="button" class="btn btn-danger btn-md " @click="deleteCompletionButton">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </form>
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
            collections: {},
            percentages: {},
            pos: [],
            dtls: [],
            docQuery: "",
            lineQuery: "",
            completion: "0%",

            variables: new Form({
                collectionID: "",
                Ponum: "",
                POid: "",
                Linenum: "",
                PODtlid: "",
                completion: "",
                as_of: this.$root.formatDate(new Date())
            })
        };
    },
    methods: {
        openSearch() {
            // this.Pototal = "";
            // this.expenses = {};
            $("#header").modal("show");
            this.clearHeader();
            this.collections = {};
        },
        openSearchDtl() {
            if (!this.variables.POid) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose PO first to proceed."
                });
            } else {
                $("#detail").modal("show");
            }
        },
        loadDriver() {
            axios
                .get("api/poget")
                .then(response => {
                    this.pos = response.data;
                    // console.log(response.data.data);
                })
                .catch(err => {});
        },

         loadCollection(data) {
            axios
                .get("api/getCollection", 
                    {params: { PODtlid: data}
                })
                .then(response => {
                    this.collections = response.data;
                })
                .catch(err => {});
        },

        createCompletion() {
            var data = Object.assign({}, this.variables);
            this.$Progress.start();
            axios
                .post("api/createCollection", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.variables.completionID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                         axios
                            .get("api/getCollection", 
                                {params: { PODtlid: this.variables.PODtlid}
                            })
                            .then(response => {
                                this.collections = response.data;
                            })
                            .catch(err => {});
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.$Progress.finish();
                    this.percentage(this.variables.PODtlid);
                    // this.loadDriver();
                    // this.loadCollection();
                    // this.variables = new Form({
                    //     completion: "",
                    //     as_of: this.$root.formatDate(new Date())
                    // })
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        deleteCompletionButton() {
            console.log(this.variables.collectionID);
            if (!this.variables.collectionID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Item to continue."
                });
            }
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    axios
                        .delete(`api/collectiondelete/${this.variables.collectionID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.dtls = [];
                                swal.fire(
                                    "Deleted!",
                                    response.data.message,
                                    "success"
                                );
                            } else {
                                swal.fire(
                                    "Warning!",
                                    response.data.message,
                                    "warning"
                                );
                            }
                            this.$Progress.finish();
                            this.clearFew();
                            this.percentage(this.variables.PODtlid);
                            this.loadCollection(this.variables.PODtlid);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    swal.fire(
                        "Information!",
                        "Deletion is cancelled.",
                        "warning"
                    );
                }
            });
        },

        clearHeader(){
            this.variables = new Form({
                collectionID: "",
                Ponum: "",
                POid: "",
                Linenum: "",
                PODtlid: "",
                completion: "",
                as_of: this.$root.formatDate(new Date())
            })
            this.completion = "0%";
            this.collections = [];
        },
        clearFew(){
            this.variables = new Form({
                completion: 0,
                as_of: this.$root.formatDate(new Date())
            })
            this.completion = "0%";
            // this.percentage(this.variables.PODtlid);
        },
        
         checkCollection(col) {
             console.log("here");
            this.variables.collectionID = col.collectionID;
            this.variables.Ponum = col.Ponum;
            this.variables.Linenum = col.Linenum;
            this.variables.completion = col.completion;
            this.variables.as_of = col.as_of;
        },
        checkHeader(pos) {
            this.variables.POid = pos.POid;
            this.variables.Ponum = pos.DocumentNum;
            console.log(this.variables.Ponum);
            axios
                .get("api/getdtl", {
                    params: { POhdrlink_id: this.variables.POid }
                })
                .then(response => {
                        this.dtls = response.data;
                })
                .catch(err => {
                    toast.fire({
                        icon: "warning",
                        title: "Internal Server Error (500)"
                    });
                });
            $("#header").modal("hide");
            $(".modal-backdrop").remove();
        },
        checkDtl(dls) {
            this.variables.PODtlid = dls.PODtlid;
            this.variables.Linenum = dls.LineNum;
            // this.variables.Amount = dls.Amt;
            axios
                .get("api/getCollection", 
                    {params: { PODtlid: this.variables.PODtlid}
                })
                .then(response => {
                    this.collections = response.data;
                })
                .catch(err => {});
                this.percentage(this.variables.PODtlid);
            $("#detail").modal("hide");
        },
        percentage(data){
            axios
                .get("api/getpercent", 
                    {params: { PODtlid: data}
                })
                .then(response => {
                    this.percentages = response.data;
                    this.completion =this.percentages[0].completion +"%";
                })
                .catch(err => {});
        },
    },
    computed: {
        filteredPo() {
            return this.pos.filter(form => {
                return form.DocumentNum.toLowerCase().includes(this.docQuery.toLowerCase())
            })
        },
        filteredDtl() {
            return this.dtls.filter(variables => {
                return variables.LineNum.toLowerCase().includes(this.lineQuery.toLowerCase())
            })
        },
    },
    created() {
        this.loadDriver();
        // this.loadCollection();
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
