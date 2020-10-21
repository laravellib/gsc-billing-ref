<style>
input[data-readonly] {
    pointer-events: none;
}
.scroll-thead-po {
    width: 100%;
    display: inline-table;
}

.scroll-tbody-y-po {
    display: block;
    overflow-y: scroll;
}
.scroll-thead-x-po {
    display: block;
    overflow-x: scroll;
}

.table-td-po {
    width: 12.9%;
}
.table-td-poadjusted {
    width: 8.9%;
}
.table-th-po {
    width: 12%;
}
.table-th-dash {
    width: 8%;
}
.table-td-desc {
    width: 23%;
}
.table-th-desc {
    width: 20%;
}
.table-body-po {
    height: 100px;
    width: 100%;
}
.table-body-dash {
    height: 400px;
    width: 100%;
}
.table-body-posearch {
    height: 300px;
    width: 100%;
}
</style>
<template>
    <div class="container">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-10">
                            <h3 class="card-title">
                                <i class="nav-icon fas fa-file"></i
                                ><strong>&nbsp;Entry PO</strong>
                            </h3>
                        </div>
                        <div class="col-md-2 text-right">
                            <button
                                type="button"
                                @click="newModal"
                                class="btn btn-success btn-md"
                                data-toggle="modal"
                            >
                                <span class="fa fa-plus"></span> CREATE NEW PO
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <!-------------------------------modal client start--------------------------------->
                    <div
                        class="modal fade bd-example-modal-lg-table"
                        id="client"
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
                                        Choose Client
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
                                    <table
                                        class="table table-hover pre-scrollable"
                                    >
                                        <thead>
                                            <tr>
                                                <th>First name</th>
                                                <th>Last name</th>
                                                <th>Designation</th>
                                                <th>office</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="soa in clients"
                                                v-bind:key="soa.id"
                                                v-on:click="checkclient(soa)"
                                            >
                                                <td>{{ soa.FirstName }}</td>
                                                <td>{{ soa.MiddleName }}</td>
                                                <td>{{ soa.LastName }}</td>
                                                <td>{{ soa.designation }}</td>
                                                <td>{{ soa.office }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-------------------------------modal client end--------------------------------->
                    <!---------------------------------------------MODAL METER---------------------------------------------->
                    <div
                        class="modal fade bd-example-modal-lg-table"
                        id="meter"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Choose Unit of measure
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
                                            <label>Search Unit</label>
                                            <input
                                                type="text"
                                                v-model="unitQuery"
                                            />
                                        </div>
                                    </div>
                                    <table class="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>UNIT NAME</th>
                                            </tr>
                                            <tr
                                                v-for="uom in filteredunit"
                                                v-bind:key="uom.unit_id"
                                                v-on:click="checkUom(uom)"
                                            >
                                                <td>{{ uom.unit_name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                </div>
                            </div>
                        </div>
                    </div>

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
                                            <input
                                                type="text"
                                                v-model="docQuery"
                                            />
                                        </div>
                                    </div>
                                    <table class="table table-hover">
                                        <thead class="scroll-thead-po ">
                                            <tr>
                                                <th class="table-th-po">
                                                    DOC #
                                                </th>
                                                <th class="table-th-po">
                                                    DOC DATE
                                                </th>
                                                <th class="table-th-po">
                                                    TERMS
                                                </th>
                                                <th class="table-th-po">
                                                    INCOTERMS
                                                </th>
                                                <th class="table-th-po">
                                                    VENDOR
                                                </th>
                                                <th class="table-th-po">
                                                    CLIENT
                                                </th>
                                                <th class="table-th-po">
                                                    STATUS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="scroll-tbody-y-po table-body-posearch"
                                        >
                                            <tr
                                                v-for="po in filteredPo"
                                                v-bind:key="po.POid"
                                                v-on:click="checkHeader(po)"
                                            >
                                                <td class="table-td-po">
                                                    {{ po.DocumentNum }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.DocumentDate }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.PaymentTerms }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.IncoTerms }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.Vendor }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.Client }}
                                                </td>
                                                <td class="table-td-po">
                                                    {{ po.Status }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!---------------------------------------------MODAL PO START---------------------------------------------->
                    <div
                        class="modal fade bd-example-modal-lg"
                        id="addNew"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Create Purchase Order
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
                                    <form @submit.prevent="createPO()">
                                        <div class="col-md-12 text-right">
                                            <h5 style="font-weight:bold;">
                                                STATUS:
                                                <strong style="color:red;">{{
                                                    form.Status
                                                }}</strong>
                                            </h5>
                                        </div>
                                        <div class="row mb-1">
                                            <div class="input-group col-md-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >DOC#</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.DocumentNum"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="DOCUMENT NUMBER"
                                                    required
                                                />
                                            </div>
                                            <div class="input-group col-md-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >DOC DATE</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.DocumentDate"
                                                    type="date"
                                                    class="form-control"
                                                    placeholder="DOCUMENT DATE"
                                                    required
                                                />
                                            </div>
                                            <div class="input-group col-md-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >TERMS</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.PaymentTerms"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="PAYMENT TERMS"
                                                    required
                                                />
                                            </div>
                                            <div class="input-group col-md-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >BATCH NO</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.batchNo"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="row mb-1">
                                            <div class="input-group col-md-6">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >VENDOR</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.Vendor"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div class="input-group col-md-6">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text"
                                                        >CLIENT</span
                                                    >
                                                </div>
                                                <input
                                                    v-model="form.Client"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    disabled
                                                    required
                                                />
                                                <button
                                                    @click="openClient"
                                                    type="button"
                                                    class="btn btn-md btn-secondary"
                                                >
                                                    <span
                                                        class="fa fa-search"
                                                    ></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-right">
                                                <button
                                                    type="button"
                                                    class="btn btn-primary btn-md"
                                                >
                                                    NEW/CLEAR
                                                </button>
                                                <button
                                                    type="submit"
                                                    v-show="!editmode"
                                                    class="btn btn-success btn-md"
                                                >
                                                    SAVE
                                                </button>
                                                <button
                                                    type="submit"
                                                    v-show="editmode"
                                                    class="btn btn-success btn-md"
                                                >
                                                    UPDATE
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-md-6 text-left">
                            <h5 style="font-weight:bold;">
                                TOTAL:
                                <strong style="color:red;">{{ Total }}</strong>
                            </h5>
                        </div>
                        <div class="col-md-6 text-right">
                            <h5 style="font-weight:bold;">
                                STATUS:
                                <strong style="color:red;">{{
                                    form.Status
                                }}</strong>
                            </h5>
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="input-group col-md-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>DOC#</strong></span
                                >
                            </div>
                            <input
                                v-model="form.DocumentNum"
                                type="text"
                                class="form-control"
                                placeholder="DOCUMENT NUMBER"
                                disabled
                            />
                            <div class="input-group-append">
                                <button
                                    type="button"
                                    @click="openSearch"
                                    class="btn btn-secondary"
                                    data-toggle="modal"
                                >
                                    <span class="fa fa-search"></span>
                                </button>
                                <button
                                    type="button"
                                    @click="openEdit(form)"
                                    class="btn btn-secondary"
                                    data-toggle="modal"
                                >
                                    <span class="fa fa-edit"></span>
                                </button>
                            </div>
                        </div>
                        <div class="input-group col-md-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>DOC DATE</strong></span
                                >
                            </div>
                            <input
                                v-model="form.DocumentDate"
                                type="date"
                                class="form-control"
                                placeholder="DOCUMENT DATE"
                                disabled
                            />
                        </div>
                        <div class="input-group col-md-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>TERMS</strong></span
                                >
                            </div>
                            <input
                                v-model="form.PaymentTerms"
                                type="text"
                                class="form-control"
                                placeholder="PAYMENT TERMS"
                                disabled
                            />
                        </div>
                        <div class="input-group col-md-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><strong>BATCH NO</strong></span>
                            </div>
                            <input
                                v-model="form.batchNo"
                                type="text"
                                class="form-control"
                                placeholder=""
                                required
                            />
                        </div>
                        <!-- <div class="input-group col-md-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>INCOTERMS</strong></span
                                >
                            </div>
                            <input
                                v-model="form.IncoTerms"
                                type="text"
                                class="form-control"
                                placeholder=""
                                disabled
                            />
                        </div> -->
                    </div>
                    <div class="row mb-1">
                        <div class="input-group col-md-6">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>VENDOR</strong></span
                                >
                            </div>
                            <input
                                v-model="form.Vendor"
                                type="text"
                                class="form-control"
                                placeholder=""
                                disabled
                            />
                        </div>
                        <div class="input-group col-md-6">
                            <div class="input-group-prepend">
                                <span class="input-group-text"
                                    ><strong>CLIENT</strong></span
                                >
                            </div>
                            <input
                                v-model="form.Client"
                                type="text"
                                class="form-control"
                                placeholder=""
                                disabled
                            />
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-hover ">
                                    <thead class="scroll-thead-po thead-dark">
                                        <tr>
                                            <th class="table-th-po">Line #</th>
                                            <th class="table-th-po">
                                                Mat Code
                                            </th>
                                            <th class="table-th-desc">
                                                Item Desc
                                            </th>
                                            <th
                                                class="table-th-po"
                                                style="text-align:right;"
                                            >
                                                Quantity
                                            </th>
                                            <th class="table-th-po">UoM</th>
                                            <th
                                                class="table-th-po"
                                                style="text-align:right;"
                                            >
                                                Unit Price
                                            </th>
                                            <th
                                                class="table-th-po"
                                                style="text-align:right;"
                                            >
                                                Amount
                                            </th>
                                            <th class="table-th-po">
                                                Del. Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="scroll-tbody-y-po table-body-po"
                                    >
                                        <tr
                                            v-for="dl in dtls"
                                            v-bind:key="dl.PODtlid"
                                            v-on:click="checkDtl(dl)"
                                        >
                                            <td class="table-td-po">
                                                {{ dl.LineNum }}
                                            </td>
                                            <td class="table-td-po">
                                                {{ dl.MatCode }}
                                            </td>
                                            <td class="table-td-desc">
                                                {{ dl.ItemDesc }}
                                            </td>
                                            <td
                                                class="table-td-po"
                                                style="text-align:right;"
                                            >
                                                {{ dl.Quantity }}
                                            </td>
                                            <td class="table-td-po">
                                                {{ dl.Uom }}
                                            </td>
                                            <td
                                                class="table-td-po"
                                                style="text-align:right;"
                                            >
                                                {{
                                                    dl.UnitPrice | formatNumber
                                                }}
                                            </td>
                                            <td
                                                class="table-td-po"
                                                style="text-align:right;"
                                            >
                                                {{ dl.Amt | formatNumber }}
                                            </td>
                                            <td class="table-td-po">
                                                {{ dl.DelDate | formatDate }}
                                            </td>
                                            <!-- <td>
                                    <button class="btn btn-sm btn-secondary"><span class="fa fa-edit"></span></button>
                                    <button class="btn btn-sm btn-danger"><span class="fa fa-trash"></span></button>
                                </td> -->
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- <pagination :data="dtls" @pagination-change-page="pageDtl"></pagination> -->
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent="createPODetail()">
                        <div class="row mb-1">
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><strong>LINE#</strong></span
                                    >
                                </div>
                                <input
                                    type="text"
                                    v-model="dtl.LineNum"
                                    class="form-control"
                                    placeholder="LINE NUMBER"
                                    required
                                />
                            </div>
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><strong>MAT CODE</strong></span
                                    >
                                </div>
                                <input
                                    type="text"
                                    v-model="dtl.MatCode"
                                    class="form-control"
                                    required
                                />
                            </div>
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><strong>QUANTITY</strong></span
                                    >
                                </div>
                                <input
                                    type="text"
                                    v-on:keyup="getdtlAmount"
                                    v-model="dtl.Quantity"
                                    class="form-control"
                                    placeholder="QUANTITY"
                                    style="text-align:right;"
                                    required
                                />
                            </div>
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <strong>UOM</strong>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    v-model="dtl.Uom"
                                    class="form-control"
                                    placeholder="UNIT OF MEASURE"
                                    required
                                    disabled
                                />
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    @click="openUOM"
                                >
                                    <span class="fa fa-search"></span>
                                </button>
                            </div>
                        </div>
                        <div class="row mb-1">
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <strong>UNIT PRICE</strong>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    v-on:keyup="getdtlAmount"
                                    v-model="dtl.UnitPrice"
                                    class="form-control"
                                    placeholder=""
                                    style="text-align:right;"
                                    required
                                />
                            </div>
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <strong>AMT</strong>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    v-model="dtl.Amt"
                                    class="form-control"
                                    sty
                                    placeholder="AMOUNT"
                                    style="text-align:right;"
                                    disabled
                                    required
                                />
                            </div>
                            <div class="input-group col-md-3">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <strong>DEL. DATE</strong>
                                    </div>
                                </div>
                                <input
                                    type="date"
                                    v-model="dtl.DelDate"
                                    class="form-control"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>
                        <div class="row mb-1">
                            <div class="input-group col-md-6">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><strong>ITEM DESC</strong></span
                                    >
                                    <textarea
                                        v-model="dtl.ItemDesc"
                                        cols="650"
                                        rows="3"
                                        class="form-control"
                                        aria-label="With textarea"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div class="input-group col-md-6">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"
                                        ><strong>ITEM SCOPE</strong></span
                                    >
                                    <textarea
                                        v-model="dtl.ItemScope"
                                        cols="650"
                                        rows="3"
                                        class="form-control"
                                        aria-label="With textarea"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button
                                    type="button"
                                    @click="clearAll"
                                    class="btn btn-primary btn-md"
                                >
                                    CLEAR ALL
                                </button>
                                <button
                                    type="button"
                                    @click="clearFunction"
                                    class="btn btn-primary btn-md"
                                >
                                    CLEAR DETAIL
                                </button>
                                <button
                                    type="submit"
                                    class="btn btn-success btn-md"
                                >
                                    SAVE
                                </button>
                                <button
                                    type="button"
                                    @click="deleteDtlButton"
                                    class="btn btn-danger btn-md"
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editmode: true,
            pos: [],
            dtls: {},
            uoms: [],
            clients: {},
            Total: this.$root.formatNumberCommaRound(0),
            docQuery: "",
            unitQuery: "",
            form: new Form({
                POid: "",
                DocumentNum: "",
                DocumentDate: this.$root.formatDate(new Date()),
                PaymentTerms: "",
                IncoTerms: "",
                Vendor: "GENERAL SERVICE MULTI-PURPOSE",
                Client: "DMPI PLANTATION PLANT",
                Status: "ACTIVE",
                batchNo: ""
            }),
            dtl: new Form({
                PODtlid: "",
                LineNum: "",
                MatCode: "",
                Quantity: parseFloat(0),
                Uom: "",
                UnitPrice: this.$root.formatNumberCommaRound(0),
                Amt: this.$root.formatNumberCommaRound(0),
                DelDate: this.$root.formatDate(new Date()),
                ItemDesc: "",
                ItemScope: "",
                POhdrlink_id: ""
            })
        };
    },
    methods: {
        clearAll() {
            (this.form = new Form({
                POid: "",
                DocumentNum: "",
                DocumentDate: this.$root.formatDate(new Date()),
                PaymentTerms: "",
                IncoTerms: "",
                Vendor: "GENERAL SERVICE MULTI-PURPOSE",
                Client: "DMPI PLANTATION PLANT",
                Status: "ACTIVE",
                batchNo: ""
            })),
                (this.dtl = new Form({
                    PODtlid: "",
                    LineNum: "",
                    MatCode: "",
                    Quantity: parseFloat(0),
                    Uom: "",
                    UnitPrice: this.$root.formatNumberCommaRound(0),
                    Amt: this.$root.formatNumberCommaRound(0),
                    DelDate: this.$root.formatDate(new Date()),
                    ItemDesc: "",
                    ItemScope: "",
                    POhdrlink_id: ""
                }));
            this.dtls = {};
            this.Total = this.$root.formatNumberCommaRound(0);
        },
        checkUom(uoms) {
            this.dtl.Uom = uoms.unit_name;
            $("#meter").modal("hide");
        },
        openClient() {
            $("#addNew").modal("hide");
            $("#client").modal("show");
            axios
                .get("api/clientget")
                .then(response => {
                    this.clients = response.data;
                    console.log(this.clients);
                })
                .catch(err => {});
        },
        checkclient(soa) {
            var middle = soa.MiddleName.charAt(0).toUpperCase();
            this.form.Client =
                soa.FirstName + " " + middle + "." + " " + soa.LastName;
            // this.variables.Linenum = soa.LineNum;
            // this.variables.amountInFigure = soa.Amt;
            // this.variables.poDescription = soa.ItemDesc;
            $("#addNew").modal("show");
            $("#client").modal("hide");
        },

        checkHeader(pos) {
            this.form.POid = pos.POid;
            this.form.DocumentNum = pos.DocumentNum;
            this.form.DocumentDate = pos.DocumentDate;
            this.form.PaymentTerms = pos.PaymentTerms;
            this.form.IncoTerms = pos.IncoTerms;
            this.form.Vendor = pos.Vendor;
            this.form.Client = pos.Client;
            this.form.Status = pos.Status;
            this.form.batchNo = pos.batchNo;
            // axios.get('/api/getdtl',{params: {POhdrlink_id: this.form.POid}}).then(({data}) => (this.dtl = data));

            axios
                .get("api/getdtl", { params: { POhdrlink_id: this.form.POid } })
                .then(response => {
                    this.dtls = response.data;
                    console.log(this.dtls);
                })
                .catch(err => {
                    toast.fire({
                        icon: "warning",
                        title: "Internal Server Error (500)"
                    });
                });
            this.getSum();
            // console.log(this.dtl);
            this.dtl.reset();
            $("#header").modal("hide");
            $(".modal-backdrop").remove();
        },
        getSum() {
            axios
                .get("api/getsum", { params: { id: this.form.POid } })
                .then(response => {
                    // console.log(response);
                    if (response.data.length > 0) {
                        console.log(response);
                        this.Total = this.$root.formatNumberCommaRound(
                            response.data[0].SUMASS
                        );
                    } else {
                        this.Total = 0;
                    }
                })
                .catch(err => {
                    toast.fire({
                        icon: "warning",
                        title: "Internal Server Error (501)"
                    });
                });
        },
        checkDtl(dtls) {
            this.dtl.PODtlid = dtls.PODtlid;
            this.dtl.LineNum = dtls.LineNum;
            this.dtl.MatCode = dtls.MatCode;
            this.dtl.Uom = dtls.Uom;
            this.dtl.Quantity = dtls.Quantity;
            this.dtl.UnitPrice = this.$root.formatNumberCommaRound(
                dtls.UnitPrice
            );
            this.dtl.Amt = this.$root.formatNumberCommaRound(dtls.Amt);
            this.dtl.DelDate = dtls.DelDate;
            this.dtl.ItemDesc = dtls.ItemDesc;
            this.dtl.ItemScope = dtls.ItemScope;
            this.dtl.POhdrlink_id = dtls.POhdrlink_id;
            console.log(this.dtl.PODtlid);
        },
        getdtlAmount() {
            var dtlamt = 0;
            dtlamt =
                parseFloat(this.dtl.Quantity) * parseFloat(this.dtl.UnitPrice);
            this.dtl.Amt = this.$root.formatNumberCommaRound(dtlamt);
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
        openSearch() {
            $("#header").modal("show");
        },
        openUOM() {
            axios
                .get("api/uom")
                .then(response => {
                    this.uoms = response.data;
                    // console.log(response.data.data);
                })
                .catch(err => {});
            $("#meter").modal("show");
        },
        openEdit(data) {
            if (!this.form.POid) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose header to edit."
                });
            } else {
                $("#addNew").modal("show");
                this.editmode = true;
                console.log(data);
            }
        },
        updatePo() {
            $("#addNew").modal("show");
            //  $('.modal-backdrop').remove();
            this.$Progress.start();
            this.form.put("api/po/" + this.form.POid);
            $("#addNew").modal("hide");
            $(".modal-backdrop").remove();
            toast.fire({
                icon: "success",
                title: "Purchase successfully updated"
            });
            this.$Progress.finish();
            this.loadDriver();
            this.loadDtl(this.form.POid);
            axios
                .get("api/getdtl", {
                    params: { POhdrlink_id: this.form.POid }
                })
                .then(response => {
                    this.dtls = response.data;
                    console.log(this.dtls);
                })
                .catch(err => {
                    toast.fire({
                        icon: "Warning",
                        title: "Internal Server Error (500)"
                    });
                });
        },
        newModal() {
            $("#addNew").modal("show");
            this.editmode = false;
            this.form.reset();
            this.dtl.reset();
            this.dtls = {};
            this.Total = this.$root.formatNumberCommaRound(0);
        },

        clearFunction() {
            this.dtl.reset();
        },

        createPO() {
            var data = Object.assign({}, this.form);
            this.$Progress.start();
            axios
                .post("api/po", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.form.POid = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        $("#addNew").modal("hide");
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.dtls = [];
                    this.$Progress.finish();
                    this.loadDriver();
                    axios
                        .get("api/getdtl", {
                            params: { POhdrlink_id: this.form.POid }
                        })
                        .then(response => {
                            this.dtls = response.data;
                            console.log(this.dtls);
                        })
                        .catch(err => {
                            toast.fire({
                                icon: "Warning",
                                title: "Internal Server Error (500)"
                            });
                        });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        createPODetail() {
            if (!this.form.POid) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose header first."
                });
            } else {
                this.dtl.UnitPrice = this.$root.formatNumber(
                    this.dtl.UnitPrice
                );
                this.dtl.Amt = this.$root.formatNumber(this.dtl.Amt);
                this.dtl.POhdrlink_id = this.form.POid;
                var data = Object.assign({}, this.dtl);
                this.$Progress.start();
                axios
                    .post("api/createupdatedtl", data)
                    .then(response => {
                        if (response.data.success) {
                            if (response.data.id) {
                                this.dtl.PODtlid = response.data.id;
                            }
                            toast.fire({
                                icon: "success",
                                title: response.data.message
                            });
                            // this.header = Object.assign({}, this.formHeader);
                            $("#addNew").modal("hide");
                            this.getSum();
                        } else {
                            toast.fire({
                                icon: "warning",
                                title: response.data.message
                            });
                        }
                        this.clearFunction();
                        this.$Progress.finish();
                        this.loadDriver();
                        axios
                            .get("api/getdtl", {
                                params: { POhdrlink_id: this.form.POid }
                            })
                            .then(response => {
                                this.dtls = response.data;
                                console.log(this.dtls);
                            })
                            .catch(err => {
                                toast.fire({
                                    icon: "Warning",
                                    title: "Internal Server Error (500)"
                                });
                            });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        deleteDtlButton() {
            // console.log(this.dtl.PODtlid);
            if (!this.dtl.PODtlid) {
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
                        .delete(`api/poDtldelete/${this.dtl.PODtlid}`)
                        .then(response => {
                            console.log(response);
                            if (response.data.success) {
                                this.dtls = {};
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
                            this.getSum();
                            this.$Progress.finish();
                            this.clearFunction();
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
                axios
                    .get("api/getdtl", {
                        params: { POhdrlink_id: this.form.POid }
                    })
                    .then(response => {
                        this.dtls = response.data;
                        console.log(this.dtls);
                    })
                    .catch(err => {
                        toast.fire({
                            icon: "Warning",
                            title: "Internal Server Error (500)"
                        });
                    });
            });
        },
        createPODtl() {
            if (!this.form.POid) {
                this.dtl.POhdrlink_id = this.form.POid;
                this.$Progress.start();
                this.dtl
                    .post("api/createupdatedtl")
                    .then(() => {
                        toast.fire({
                            icon: "success",
                            title: "Purchase Order successfully created"
                        });
                        this.$Progress.finish();
                        this.loadDriver();
                        axios
                            .get("api/getdtl", {
                                params: { POhdrlink_id: this.form.POid }
                            })
                            .then(response => {
                                this.dtls = response.data;
                                this.getSum();
                                this.clearFunction();
                            })
                            .catch(err => {
                                toast.fire({
                                    icon: "Warning",
                                    title: "Internal Server Error (500)"
                                });
                            });
                    })
                    .catch(() => {
                        this.$Progress.fail();
                        toast.fire({
                            icon: "error",
                            title: "Please choose Purchase order header first."
                        });
                    });
            } else {
                if (!this.form.POid) {
                    toast.fire({
                        icon: "warning",
                        title: "Please choose Purchase order first."
                    });
                } else {
                    this.$Progress.start();
                    this.dtl.put("api/updatedtl", {
                        params: { PODtlid: this.dtl.PODtlid }
                    });
                    toast.fire({
                        icon: "success",
                        title: "Purchase Order successfully updated"
                    });
                    this.$Progress.finish();
                    axios
                        .get("api/getdtl", {
                            params: { page: page, POhdrlink_id: this.form.POid }
                        })
                        .then(response => {
                            this.dtls = response.data;
                            console.log(this.dtls);
                        });
                    this.getSum();
                    this.loadDriver();
                }
            }
        }
    },
    computed: {
        filteredPo() {
            return this.pos.filter(form => {
                return form.DocumentNum.toLowerCase().includes(
                    this.docQuery.toLowerCase()
                );
            });
        },
        filteredunit() {
            return this.uoms.filter(form => {
                return form.unit_name
                    .toLowerCase()
                    .includes(this.unitQuery.toLowerCase());
            });
        }
    },
    created() {
        this.loadDriver();
    }
};
</script>
