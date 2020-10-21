<style>
.scroll-thead-exp {
    width: 100%;
    display: inline-table;
}

.scroll-tbody-y-exp {
    display: block;
    overflow-y: scroll;
}

.table-td-exp {
    width: 9.5%;
}
.table-td-ref {
    width: 24.7%;
}
.table-th-ref {
    width: 22.6%;
}
.table-th-exp {
    width: 5%;
}
.table-body-exp {
    height: 100px;
    width: 100%;
}
.table-body-exps {
    height: 200px;
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
                                    <i class="fas fa-file-invoice"></i>
                                    <strong>&nbsp;Entry Expenses Detail</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
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
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
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

                        <!---------------------------------------------MODAL materials START---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg"
                            id="materials"
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
                                            Create materials details
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
                                        <form>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >REFERENCE#</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        required
                                                        v-model="
                                                            variables.reference
                                                        "
                                                    />
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                        @click="openReference"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >DATE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        placeholder="DOCUMENT DATE"
                                                        required
                                                        v-model="variables.date"
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >SUPPLIER</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="
                                                            variables.supplier
                                                        "
                                                        disabled
                                                        required
                                                    />
                                                    <button
                                                        @click="Addsupplier"
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="col-md-12 text-right"
                                                ></div>
                                            </div>
                                            <div class="row mb-1">
                                                <div class="col-md-12">
                                                    <table
                                                        class="table table-hover"
                                                    >
                                                        <thead
                                                            class="scroll-thead-po "
                                                        >
                                                            <tr>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    QTY
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    UOM
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    DESCRIPTION
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    PRICE
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    AMT DUE
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody
                                                            class="scroll-tbody-y-po table-body-exp"
                                                        >
                                                            <tr
                                                                v-for="matdtl in filteredMaterial"
                                                                v-bind:key="
                                                                    matdtl.materialsdtlID
                                                                "
                                                                v-on:click="
                                                                    checkmaterialdtl(
                                                                        matdtl
                                                                    )
                                                                "
                                                            >
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.qty
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.uom
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.description
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.price
                                                                            | formatNumber
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.amtdue
                                                                            | formatNumber
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >QTY</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="variables.qty"
                                                        v-on:keyup="
                                                            amtdueComputation
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >UOM</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        required
                                                        disabled
                                                        v-model="variables.uom"
                                                    />
                                                    <button
                                                        @click="openUOM(1)"
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >PRICE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="
                                                            variables.price
                                                        "
                                                        v-on:keyup="
                                                            amtdueComputation
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >AMT DUE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="
                                                            variables.amtdue
                                                        "
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-10"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            ><strong
                                                                >DESCRIPTION</strong
                                                            ></span
                                                        >
                                                        <textarea
                                                            cols="650"
                                                            rows="3"
                                                            class="form-control"
                                                            aria-label="With textarea"
                                                            required
                                                            v-model="
                                                                variables.description
                                                            "
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 text-left">
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-success"
                                                        @click="
                                                            saveMaterials(1)
                                                        "
                                                    >
                                                        SAVE HEADER
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-primary"
                                                    >
                                                        CLEAR ALL
                                                    </button>
                                                </div>
                                                <div
                                                    class="col-md-6 text-right"
                                                >
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary btn-md"
                                                    >
                                                        NEW/CLEAR
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-success btn-md"
                                                        @click="
                                                            saveMaterials(2)
                                                        "
                                                    >
                                                        SAVE DETAILS
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal materials end--------------------------------->


                 <!---------------------------------------------MODAL overhead START---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg"
                            id="overhead"
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
                                            Create overhead details
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
                                        <form>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >REFERENCE#</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        required
                                                        v-model="
                                                            variables.reference
                                                        "
                                                    />
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                        @click="openReferenceoverhead"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >DATE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        placeholder="DOCUMENT DATE"
                                                        required
                                                        v-model="variables.date"
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-4"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >SUPPLIER</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="
                                                            variables.supplier
                                                        "
                                                        disabled
                                                        required
                                                    />
                                                    <button
                                                        @click="Addsupplieroverhead"
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="col-md-12 text-right"
                                                ></div>
                                            </div>
                                            <div class="row mb-1">
                                                <div class="col-md-12">
                                                    <table
                                                        class="table table-hover"
                                                    >
                                                        <thead
                                                            class="scroll-thead-po "
                                                        >
                                                            <tr>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    QTY
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    UOM
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    DESCRIPTION
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    PRICE
                                                                </th>
                                                                <th
                                                                    class="table-th-ref"
                                                                >
                                                                    AMT DUE
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody
                                                            class="scroll-tbody-y-po table-body-exp"
                                                        >
                                                            <tr
                                                                v-for="matdtl in filteredMaterial"
                                                                v-bind:key="
                                                                    matdtl.materialsdtlID
                                                                "
                                                                v-on:click="
                                                                    checkmaterialdtl(
                                                                        matdtl
                                                                    )
                                                                "
                                                            >
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.qty
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.uom
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.description
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.price
                                                                            | formatNumber
                                                                    }}
                                                                </td>
                                                                <td
                                                                    class="table-td-ref"
                                                                >
                                                                    {{
                                                                        matdtl.amtdue
                                                                            | formatNumber
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >QTY</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="variables.qty"
                                                        v-on:keyup="
                                                            amtdueComputation
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >UOM</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        required
                                                        disabled
                                                        v-model="variables.uom"
                                                    />
                                                    <button
                                                        @click="openUOM(2)"
                                                        type="button"
                                                        class="btn btn-md btn-secondary"
                                                    >
                                                        <span
                                                            class="fa fa-search"
                                                        ></span>
                                                    </button>
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >PRICE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="
                                                            variables.price
                                                        "
                                                        v-on:keyup="
                                                            amtdueComputation
                                                        "
                                                    />
                                                </div>
                                                <div
                                                    class="input-group col-md-3"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            >AMT DUE</span
                                                        >
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control text-right"
                                                        required
                                                        v-model="
                                                            variables.amtdue
                                                        "
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mb-1">
                                                <div
                                                    class="input-group col-md-10"
                                                >
                                                    <div
                                                        class="input-group-prepend"
                                                    >
                                                        <span
                                                            class="input-group-text"
                                                            ><strong
                                                                >DESCRIPTION</strong
                                                            ></span
                                                        >
                                                        <textarea
                                                            cols="650"
                                                            rows="3"
                                                            class="form-control"
                                                            aria-label="With textarea"
                                                            required
                                                            v-model="
                                                                variables.description
                                                            "
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 text-left">
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-success"
                                                        @click="
                                                            saveOverhead(1)
                                                        "
                                                    >
                                                        SAVE HEADER
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-md btn-primary"
                                                    >
                                                        CLEAR ALL
                                                    </button>
                                                </div>
                                                <div
                                                    class="col-md-6 text-right"
                                                >
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary btn-md"
                                                    >
                                                        NEW/CLEAR
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-success btn-md"
                                                        @click="
                                                            saveOverhead(2)
                                                        "
                                                    >
                                                        SAVE DETAILS
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal overhead end--------------------------------->


                        <!---------------------------------------------MODAL reference START---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg"
                            id="reference"
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
                                            Search material header
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
                                            <div
                                                class="col-md-12 text-right"
                                            ></div>
                                        </div>
                                        <div class="row mb-1">
                                            <div class="col-md-12">
                                                <table
                                                    class="table table-hover"
                                                >
                                                    <thead
                                                        class="scroll-thead-po "
                                                    >
                                                        <tr>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Reference
                                                            </th>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Date
                                                            </th>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Supplier
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        class="scroll-tbody-y-po table-body-exp"
                                                    >
                                                        <tr
                                                            v-for="ref in filteredReference"
                                                            v-bind:key="
                                                                ref.materialshdrID
                                                            "
                                                            v-on:click="
                                                                checkReference(
                                                                    ref
                                                                )
                                                            "
                                                        >
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{
                                                                    ref.reference
                                                                }}
                                                            </td>
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{ ref.date }}
                                                            </td>
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{
                                                                    ref.supplier
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
                        <!-------------------------------modal materials end--------------------------------->

                         <!---------------------------------------------MODAL reference START---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg"
                            id="referenceoverhead"
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
                                            Search overhead header
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
                                            <div
                                                class="col-md-12 text-right"
                                            ></div>
                                        </div>
                                        <div class="row mb-1">
                                            <div class="col-md-12">
                                                <table
                                                    class="table table-hover"
                                                >
                                                    <thead
                                                        class="scroll-thead-po "
                                                    >
                                                        <tr>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Reference
                                                            </th>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Date
                                                            </th>
                                                            <th
                                                                class="table-th-po"
                                                            >
                                                                Supplier
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        class="scroll-tbody-y-po table-body-exp"
                                                    >
                                                        <tr
                                                            v-for="ref in filteredReference"
                                                            v-bind:key="
                                                                ref.materialshdrID
                                                            "
                                                            v-on:click="
                                                                checkReferenceoverhead(
                                                                    ref
                                                                )
                                                            "
                                                        >
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{
                                                                    ref.reference
                                                                }}
                                                            </td>
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{ ref.date }}
                                                            </td>
                                                            <td
                                                                class="table-td-poadjusted"
                                                            >
                                                                {{
                                                                    ref.supplier
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
                        <!-------------------------------modal materials end--------------------------------->

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
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
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
                                                <input
                                                    type="text"
                                                    v-model="lineQuery"
                                                />
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

                        <!-------------------------------modal expense start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="expense"
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
                                            Choose Expense Type
                                        </h5>
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            required
                                        >
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row mb-1">
                                            <div class="col-md-3">
                                                <label>Search expense</label>
                                                <input
                                                    type="text"
                                                    v-model="ExpQuery"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <table
                                            class="table table-hover pre-scrollable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Expense</th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                class="table-body-exps scroll-tbody-y-exp"
                                            >
                                                <tr
                                                    v-for="exp in filteredExp"
                                                    v-bind:key="exp.expid"
                                                    v-on:click="checkExp(exp)"
                                                >
                                                    <td class="table-td-exp">
                                                        {{ exp.Expensetype }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal expense end--------------------------------->
                        <!-------------------------------modal expensehdr start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="expensehdr"
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
                                            Choose Expense Header
                                        </h5>
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                            required
                                        >
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row mb-1">
                                            <div class="col-md-3">
                                                <label>Search expense</label>
                                                <input
                                                    type="text"
                                                    v-model="ExpQuery"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <table
                                            class="table table-hover pre-scrollable"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Expense</th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                class="table-body-exps scroll-tbody-y-exp"
                                            >
                                                <tr
                                                    v-for="expenseshdr in filteredExpHdr"
                                                    v-bind:key="
                                                        expenseshdr.ExpenseHdrID
                                                    "
                                                    v-on:click="
                                                        checkExpHdr(expenseshdr)
                                                    "
                                                >
                                                    <td class="table-td-exp">
                                                        {{
                                                            expenseshdr.expenseName
                                                        }}
                                                    </td>
                                                    <td class="table-td-exp">
                                                        {{
                                                            expenseshdr.expenseAbb
                                                        }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal expensehdr end--------------------------------->

                        <!---------------------------------------------MODAL METER---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="supplier"
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
                                            Choose Supplier
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
                                                <label>Search Supplier</label>
                                                <input
                                                    type="text"
                                                    v-model="SupQuery"
                                                />
                                            </div>
                                        </div>
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th>SUPPLIER NAME</th>
                                                </tr>
                                                <tr
                                                    v-for="sup in filteredSupplier"
                                                    v-bind:key="sup.supid"
                                                    v-on:click="
                                                        checkSupplier(sup)
                                                    "
                                                >
                                                    <td>{{ sup.supName }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                           <!---------------------------------------------MODAL METER---------------------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="supplieroverhead"
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
                                            Choose Supplier for overhead
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
                                                <label>Search Supplier</label>
                                                <input
                                                    type="text"
                                                    v-model="SupQuery"
                                                />
                                            </div>
                                        </div>
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th>SUPPLIER NAME</th>
                                                </tr>
                                                <tr
                                                    v-for="sup in filteredSupplier"
                                                    v-bind:key="sup.supid"
                                                    v-on:click="
                                                        checkSupplieroverhead(sup)
                                                    "
                                                >
                                                    <td>{{ sup.supName }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-1">
                            <div class="col-md-6">
                                <h6 style="font-weight: bold;">
                                    PO Total Balance:
                                    <strong style="color:red;">{{
                                        Pototal
                                    }}</strong>
                                </h6>
                            </div>
                        </div>
                        <form @submit.prevent="createExpense()">
                            <div class="row mb-1">
                                <div class="col-md-6 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>SELECT PO</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.Docnum"
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
                                <div class="col-md-6 input-group">
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
                                        @click="openSearchDtl"
                                        type="button"
                                        class="btn btn-secondary"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-hover">
                                        <thead
                                            class="scroll-thead-exp thead-dark"
                                        >
                                            <tr>
                                                <th class="table-th-exp">
                                                    DOC #
                                                </th>
                                                <th class="table-th-exp">
                                                    LINE #
                                                </th>
                                                <th class="table-th-exp">
                                                    Amount
                                                </th>
                                                <th class="table-th-exp">
                                                    Date
                                                </th>
                                                <th class="table-th-exp">
                                                    Expenses type
                                                </th>
                                                <th class="table-th-exp">
                                                    Remarks
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="scroll-tbody-y-exp table-body-exp"
                                        >
                                            <tr
                                                v-for="expense in expenses"
                                                v-bind:key="expense.POexid"
                                                v-on:click="checkPoExp(expense)"
                                            >
                                                <td class="table-td-exp">
                                                    {{ expense.Docnum }}
                                                </td>
                                                <td class="table-td-exp">
                                                    {{ expense.Linenum }}
                                                </td>
                                                <td class="table-td-exp">
                                                    {{
                                                        expense.Amount
                                                            | formatNumber
                                                    }}
                                                </td>
                                                <td class="table-td-exp">
                                                    {{ expense.POdateexpense }}
                                                </td>
                                                <td class="table-td-exp">
                                                    {{ expense.Expensetype }}
                                                </td>
                                                <td class="table-td-exp">
                                                    {{ expense.remarks }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>Date</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="date"
                                        class="form-control"
                                        v-model="variables.POdateexpense"
                                        required
                                    />
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>Expenses</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        required
                                        v-model="variables.expenseName"
                                    />
                                    <button
                                        @click="openExpenseHdr"
                                        type="button"
                                        class="btn btn-secondary"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>Expenses Type</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        required
                                        v-model="variables.Expensetype"
                                    />
                                    <button
                                        @click="openExpense"
                                        type="button"
                                        class="btn btn-secondary"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="col-md-3 input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <strong>Amount</strong>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control text-right"
                                        required
                                        v-model="variables.Amount"
                                        style="color:red;"
                                    />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="input-group col-md-10">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>REMARKS</strong></span
                                        >
                                        <textarea
                                            cols="650"
                                            rows="3"
                                            class="form-control"
                                            aria-label="With textarea"
                                            required
                                            v-model="variables.remarks"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="text-right col-md 12">
                                    <button
                                        @click="Addoverhead"
                                        type="button"
                                        class="btn btn-info btn-md"
                                    >
                                        Add details for overhead
                                    </button>
                                    <button
                                        @click="Addmaterials"
                                        type="button"
                                        class="btn btn-info btn-md"
                                    >
                                        Add details for direct materials
                                    </button>
                                    <button
                                        @click="clearBelow"
                                        type="button"
                                        class="btn btn-primary btn-md"
                                    >
                                        CLEAR
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-success btn-md"
                                    >
                                        SAVE
                                    </button>
                                    <button
                                        @click="deleteDtlButton"
                                        type="button"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            pos: [],
            sups: [],
            dtls: [],
            exps: [],
            uoms: [],
            matdtls: [],
            refs: [],
            mats: [],
            expenseshdrs: [],
            expenses: {},
            balance: {},
            Pototal: this.$root.formatNumberCommaRound(0),
            docQuery: "",
            lineQuery: "",
            ExpQuery: "",
            ExpHdrQuery: "",
            SupQuery: "",
            unitQuery: "",
            matQuery: "",
            refQuery: "",
            materialQuery: "",

            variables: new Form({
                POexid: "",
                materialshdrID: "",
                POidhdrlink: "",
                POiddtllink: "",
                POdateexpense: this.$root.formatDate(new Date()),
                Expensetype: "",
                expenseName: "",
                expenseHdrID: "",
                Expenseid: "",
                remarks: "",
                Docnum: "",
                Linenum: "",
                supplier: "",
                supid: "",
                date: this.$root.formatDate(new Date()),
                reference: "",
                Amount: this.$root.formatNumberCommaRound(0),
                qty: 0,
                uom: "",
                price: this.$root.formatNumberCommaRound(0),
                amtdue: this.$root.formatNumberCommaRound(0),
                description: ""
            })
        };
    },

    methods: {
        amtdueComputation() {
            var total;
            total = this.variables.qty * this.variables.price;
            this.variables.amtdue = this.$root.formatNumberCommaRound(total);
        },
        checkUom(uoms) {
            this.variables.uom = uoms.unit_name;
            $("#meter").modal("hide");
            $("#materials").modal("show");
        },
        checkUom(uoms) {
            this.variables.uom = uoms.unit_name;
            $("#meter").modal("hide");
            $("#overhead").modal("show");
        },
        openUOM(data) {
            if (data === 1){
                    axios
                    .get("api/uom")
                    .then(response => {
                        this.uoms = response.data;
                    })
                    .catch(err => {});
                $("#meter").modal("show");
                $("#materials").modal("hide");
            }
            else{
                  axios
                    .get("api/uom")
                    .then(response => {
                        this.uoms = response.data;
                    })
                    .catch(err => {});
                $("#meter").modal("show");
                $("#overhead").modal("hide");
            }
            
        },
        openUOMoverhead() {
            axios
                .get("api/uom")
                .then(response => {
                    this.uoms = response.data;
                })
                .catch(err => {});
            $("#meter").modal("show");
            $("#overhead").modal("hide");
        },
        Addmaterials() {
            if (!this.variables.POiddtllink) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose detail first."
                });
            }
            if (this.variables.expenseHdrID != 1) {
                toast.fire({
                    icon: "warning",
                    title:
                        "Please choose direct material expense to add details."
                });
            } else {
                $("#materials").modal("show");
            }
        },
        Addoverhead() {
            if (!this.variables.POiddtllink) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose detail first."
                });
            }
            else if (this.variables.expenseHdrID != 3) {
                toast.fire({
                    icon: "warning",
                    title:
                        "Please choose overhead expense to add details."
                });
            } else {
                $("#overhead").modal("show");
            }
        },
        openReference() {
            axios
                .get("api/refget")
                .then(response => {
                    this.refs = response.data;
                    console.log(this.refs);
                })
                .catch(err => {});
            $("#reference").modal("show");
            $("#materials").modal("hide");
        },
        openReferenceoverhead() {
            axios
                .get("api/refoverheadget")
                .then(response => {
                    this.refs = response.data;
                    console.log(this.refs);
                })
                .catch(err => {});
            $("#referenceoverhead").modal("show");
            $("#overhead").modal("hide");
        },
        checkReference(ref) {
            this.variables.materialshdrID = ref.materialshdrID;
            this.variables.reference = ref.reference;
            this.variables.date = ref.date;
            this.variables.supplier = ref.supplier;
            $("#reference").modal("hide");
            $("#materials").modal("show");
            // console.log(this.variables.materialshdrID);
            axios
                .get("api/matdtlget", {
                    params: { materialshdrID: this.variables.materialshdrID }
                })
                .then(response => {
                    this.matdtls = response.data.result1;
                    if (response.data.result2.length > 0) {
                        this.variables.Amount = this.$root.formatNumberCommaRound(
                            response.data.result2[0].totaldue
                        );
                    } else {
                        this.variables.Amount = this.$root.formatNumberCommaRound(
                            0
                        );
                    }
                })
                .catch(err => {});
        },
        checkReferenceoverhead(ref) {
            this.variables.materialshdrID = ref.materialshdrID;
            this.variables.reference = ref.reference;
            this.variables.date = ref.date;
            this.variables.supplier = ref.supplier;
            $("#referenceoverhead").modal("hide");
            $("#overhead").modal("show");
            // console.log(this.variables.materialshdrID);
            axios
                .get("api/ovrheaddtlget", {
                    params: { materialshdrID: this.variables.materialshdrID }
                })
                .then(response => {
                    this.matdtls = response.data.result1;
                    if (response.data.result2.length > 0) {
                        this.variables.Amount = this.$root.formatNumberCommaRound(
                            response.data.result2[0].totaldue
                        );
                    } else {
                        this.variables.Amount = this.$root.formatNumberCommaRound(
                            0
                        );
                    }
                })
                .catch(err => {});
        },
        checkmaterialdtl(data) {
            this.variables.qty = data.qty;
            this.variables.uom = data.uom;
            this.variables.price = this.$root.formatNumberCommaRound(
                data.price
            );
            this.variables.amtdue = this.$root.formatNumberCommaRound(
                data.amtdue
            );
            this.variables.materialsdtlID = data.materialsdtlID;
            this.variables.description = data.description;
            this.variables.POidhdrlink = data.POid;
            this.variables.POiddtllink = data.POdtlid;
        },
        Addsupplier() {
            $("#materials").modal("hide");
            $("#supplier").modal("show");
            axios
                .get("api/supget")
                .then(response => {
                    this.sups = response.data;
                    // console.log(response.data.data);
                })
                .catch(err => {});
        },
        Addsupplieroverhead() {
            $("#overhead").modal("hide");
            $("#supplieroverhead").modal("show");
            axios
                .get("api/supget")
                .then(response => {
                    this.sups = response.data;
                    // console.log(response.data.data);
                })
                .catch(err => {});
        },
        openExpenseHdr() {
            $("#expensehdr").modal("show");
            axios
                .get("api/exphdrget")
                .then(response => {
                    this.expenseshdrs = response.data;
                    console.log(response.data);
                })
                .catch(err => {});
        },
        openSearch() {
            this.clearHeader();
            this.expenses = {};
            $("#header").modal("show");
        },
        checkExpHdr(checkExpHdr) {
            this.variables.expenseHdrID = checkExpHdr.expenseHdrID;
            this.variables.expenseName = checkExpHdr.expenseName;
            console.log(this.variables.expenseHdrID);
            $("#expensehdr").modal("hide");
        },
        checkSupplier(sup) {
            console.log(sup);
            this.variables.supid = sup.supID;
            this.variables.supplier = sup.supName;
            console.log(this.variables.supid);
            $("#supplier").modal("hide");
            $("#materials").modal("show");
        },
        checkSupplieroverhead(sup) {
            console.log(sup);
            this.variables.supid = sup.supID;
            this.variables.supplier = sup.supName;
            console.log(this.variables.supid);
            $("#supplieroverhead").modal("hide");
            $("#overhead").modal("show");
        },
        checkPoExp(exps) {
            this.variables.expenseHdrID = exps.expenseHdrID;
            this.variables.expenseName = exps.expenseName;
            this.variables.POexid = exps.POexid;
            this.variables.POidhdrlink = exps.POidhdrlink;
            this.variables.POiddtllink = exps.POiddtllink;
            this.variables.Docnum = exps.Docnum;
            this.variables.Linenum = exps.Linenum;
            this.variables.Amount = this.$root.formatNumberCommaRound(
                exps.Amount
            );
            this.variables.POdateexpense = exps.POdateexpense;
            this.variables.Expensetype = exps.Expensetype;
            this.variables.Expenseid = exps.Expenseid;
            this.variables.remarks = exps.remarks;
            this.checkBalance(this.variables.POiddtllink);

            axios
                .get("api/getdtl", {
                    params: { POhdrlink_id: this.variables.POidhdrlink }
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
        },
        openSearchDtl() {
            if (!this.variables.POidhdrlink) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose PO first to proceed."
                });
            } else {
                $("#detail").modal("show");
            }
        },
        loadExpense() {
            axios
                .get("api/expget")
                .then(response => {
                    this.exps = response.data;
                })
                .catch(err => {});
        },
        openExpense() {
            if (!this.variables.expenseName) {
                toast.fire({
                    icon: "warning",
                    title: "Please choose expense first."
                });
            } else {
                this.loadExpense();
                $("#expense").modal("show");
            }
        },
        checkExp(row) {
            this.variables.Expenseid = row.expid;
            this.variables.Expensetype = row.Expensetype;
            $("#expense").modal("hide");
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
        loadPoExpense(data) {
            axios
                .get("api/poexpget", { params: { POiddtllink: data } })
                .then(response => {
                    this.expenses = response.data;
                    console.log(response.data);
                })
                .catch(err => {});
        },
        checkDtl(dls) {
            this.variables.POiddtllink = dls.PODtlid;
            this.variables.Linenum = dls.LineNum;
            // this.variables.Amount = dls.Amt;
            axios
                .get("api/poexpget", {
                    params: { POiddtllink: this.variables.POiddtllink }
                })
                .then(response => {
                    this.expenses = response.data;
                    console.log(response.data);
                })
                .catch(err => {});
            this.checkBalance(this.variables.POiddtllink);

            $("#detail").modal("hide");
        },
        checkBalance(data) {
            axios
                .get("api/pobalance", { params: { PODtlid: data } })
                .then(response => {
                    // console.log(response);
                    if (response.data.length > 0) {
                        this.Pototal = this.$root.formatNumberCommaRound(
                            response.data[0].balance
                        );
                        console.log(this.Pototal);
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
            //  this.Pototal = this.$root.formatNumberCommaRound(this.balance);
        },
        checkHeader(pos) {
            this.variables.POidhdrlink = pos.POid;
            this.variables.Docnum = pos.DocumentNum;

            axios
                .get("api/getdtl", {
                    params: { POhdrlink_id: this.variables.POidhdrlink }
                })
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
            // this.getSum();
            // console.log(this.dtl);
            // this.dtl.reset();
            $("#header").modal("hide");
            $(".modal-backdrop").remove();
        },
        createExpense() {
            this.variables.Amount = this.$root.formatNumber(
                this.variables.Amount
            );
            var data = Object.assign({}, this.variables);
            this.$Progress.start();
            axios
                .post("api/createupdateexpense", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.variables.POexid = response.data.id;
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
                    // this.exps = [];
                    this.$Progress.finish();
                    this.loadDriver();
                    this.loadPoExpense(this.variables.POiddtllink);
                    // this.clearfunction();
                    this.checkBalance(this.variables.POiddtllink);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        saveMaterials(data) {
        // if (this.variables.)
            if (data === 1) {
                var data = Object.assign({}, this.variables);
                this.$Progress.start();
                axios
                    .post("api/createexpensehdr", data)
                    .then(response => {
                        if (response.data.success) {
                            if (response.data.id) {
                                this.variables.materialshdrID =
                                    response.data.id;
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
                        // this.exps = [];
                        this.$Progress.finish();
                        // this.clearfunction();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                if (!this.variables.materialshdrID) {
                    toast.fire({
                        icon: "warning",
                        title:
                            "Please save header first or choose header first."
                    });
                } else {
                    this.variables.amtdue = this.$root.formatNumber(
                        this.variables.amtdue
                    );
                    this.variables.price = this.$root.formatNumber(
                        this.variables.price
                    );
                    var data = Object.assign({}, this.variables);
                    this.$Progress.start();
                    axios
                        .post("api/createexpensedtl", data)
                        .then(response => {
                            if (response.data.success) {
                                if (response.data.id) {
                                    this.variables.materialsdtlID =
                                        response.data.id;
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
                            // this.exps = [];
                            this.$Progress.finish();
                            // this.clearfunction();
                            // axios
                            //     .get("api/matdtlget", {params:{ POdtlid: this.variables.POiddtllink }
                            //     })
                            //     .then(response => {
                            //         this.matdtls = response.data.result1;
                            //         // console.log(response.data.data);
                            //     })
                            //     .catch(err => {});
                            this.variables.amtdue = this.$root.formatNumberCommaRound(
                                this.variables.amtdue
                            );
                            this.variables.price = this.$root.formatNumber(
                                this.variables.price
                            );
                            axios
                                .get("api/matdtlget", {
                                    params: {
                                        materialshdrID: this.variables
                                            .materialshdrID
                                    }
                                })
                                .then(response => {
                                    this.matdtls = response.data.result1;
                                    if (response.data.result2.length > 0) {
                                        this.variables.Amount = this.$root.formatNumberCommaRound(
                                            response.data.result2[0].totaldue
                                        );
                                    } else {
                                        this.variables.Amount = this.$root.formatNumberCommaRound(
                                            0
                                        );
                                    }
                                })
                                .catch(err => {});
                        })
                        .catch(function(error) {
                            console.log(error);
                            this.clearMaterials();
                        });
                }
            }
        },

        saveOverhead(data) {
        // if (this.variables.)
            if (data === 1) {
                var data = Object.assign({}, this.variables);
                this.$Progress.start();
                axios
                    .post("api/createoverheadhdr", data)
                    .then(response => {
                        if (response.data.success) {
                            if (response.data.id) {
                                this.variables.materialshdrID =
                                    response.data.id;
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
                        // this.exps = [];
                        this.$Progress.finish();
                        // this.clearfunction();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                if (!this.variables.materialshdrID) {
                    toast.fire({
                        icon: "warning",
                        title:
                            "Please save header first or choose header first."
                    });
                } else {
                    this.variables.amtdue = this.$root.formatNumber(
                        this.variables.amtdue
                    );
                    this.variables.price = this.$root.formatNumber(
                        this.variables.price
                    );
                    var data = Object.assign({}, this.variables);
                    this.$Progress.start();
                    axios
                        .post("api/createoverheaddtl", data)
                        .then(response => {
                            if (response.data.success) {
                                if (response.data.id) {
                                    this.variables.materialsdtlID =
                                        response.data.id;
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
                            // this.exps = [];
                            this.$Progress.finish();
                            // this.clearfunction();
                            // axios
                            //     .get("api/matdtlget", {params:{ POdtlid: this.variables.POiddtllink }
                            //     })
                            //     .then(response => {
                            //         this.matdtls = response.data.result1;
                            //         // console.log(response.data.data);
                            //     })
                            //     .catch(err => {});
                            this.variables.amtdue = this.$root.formatNumberCommaRound(
                                this.variables.amtdue
                            );
                            this.variables.price = this.$root.formatNumber(
                                this.variables.price
                            );
                            axios
                                .get("api/matdtlget", {
                                    params: {
                                        materialshdrID: this.variables
                                            .materialshdrID
                                    }
                                })
                                .then(response => {
                                    this.matdtls = response.data.result1;
                                    if (response.data.result2.length > 0) {
                                        this.variables.Amount = this.$root.formatNumberCommaRound(
                                            response.data.result2[0].totaldue
                                        );
                                    } else {
                                        this.variables.Amount = this.$root.formatNumberCommaRound(
                                            0
                                        );
                                    }
                                })
                                .catch(err => {});
                        })
                        .catch(function(error) {
                            console.log(error);
                            this.clearMaterials();
                        });
                }
            }
        },
        deleteDtlButton() {
            console.log(this.variables.POexid);
            if (!this.variables.POexid) {
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
                        .delete(`api/podelete/${this.variables.POexid}`)
                        .then(response => {
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
                            this.$Progress.finish();
                            this.loadPoExpense(this.variables.POiddtllink);
                            this.checkBalance(this.variables.POiddtllink);
                            this.variables = {};
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
        clearHeader() {
            this.Pototal = this.$root.formatNumberCommaRound(0);
            this.variables = new Form({
                POexid: "",
                POidhdrlink: "",
                POiddtllink: "",
                POdateexpense: this.$root.formatDate(new Date()),
                Expensetype: "",
                expenseName: "",
                expenseHdrID: "",
                Expenseid: "",
                remarks: "",
                Docnum: "",
                Linenum: "",
                supplier: "",
                supid: "",
                date: this.$root.formatDate(new Date()),
                reference: "",
                Amount: this.$root.formatNumberCommaRound(0),
                qty: 0,
                uom: "",
                price: this.$root.formatNumberCommaRound(0),
                amtdue: this.$root.formatNumberCommaRound(0),
                description: ""
            });
        },
        clearBelow() {
            this.variables = new Form({
                POdateexpense: this.$root.formatDate(new Date()),
                Expensetype: "",
                Expenseid: "",
                remarks: "",
                Amount: ""
            });
        },
        clearMaterials() {
            this.variables = new Form({
                qty: 0,
                uom: "",
                price: this.$root.formatNumberCommaRound(0),
                amtdue: this.$root.formatNumberCommaRound(0),
                description: ""
            });
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
        filteredDtl() {
            return this.dtls.filter(variables => {
                return variables.LineNum.toLowerCase().includes(
                    this.lineQuery.toLowerCase()
                );
            });
        },
        filteredExp() {
            return this.exps.filter(variables => {
                return variables.Expensetype.toLowerCase().includes(
                    this.ExpQuery.toLowerCase()
                );
            });
        },
        filteredExpHdr() {
            return this.expenseshdrs.filter(variables => {
                return variables.expenseName
                    .toLowerCase()
                    .includes(this.ExpHdrQuery.toLowerCase());
            });
        },
        filteredSupplier() {
            return this.sups.filter(variables => {
                return variables.supName
                    .toLowerCase()
                    .includes(this.SupQuery.toLowerCase());
            });
        },
        filteredunit() {
            return this.uoms.filter(form => {
                return form.unit_name
                    .toLowerCase()
                    .includes(this.unitQuery.toLowerCase());
            });
        },
        filteredMaterial() {
            return this.matdtls.filter(variables => {
                return variables.description
                    .toLowerCase()
                    .includes(this.matQuery.toLowerCase());
            });
        },
        filteredReference() {
            return this.refs.filter(variables => {
                return variables.reference
                    .toLowerCase()
                    .includes(this.refQuery.toLowerCase());
            });
        }
    },
    created() {
        this.loadDriver();
        this.loadExpense();
        // this.loadPoExpense();
    }
    // mounted() {
    //     console.log('Component mounted.')

    // }
};
</script>
