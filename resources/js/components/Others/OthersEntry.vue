<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <b>Others Entry</b>
                    </h3>
                    <div class="card-tools"></div>
                </div>
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Control No.</label>
                                <b-input-group>
                                    <input
                                        v-model="header.OHID"
                                        type="text"
                                        name="OHID"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <b-input-group-append>
                                        <b-button
                                            @click="searchOthersHeader(1)"
                                            variant="outline-primary"
                                            size="sm"
                                            ><i
                                                class="fa fa-search"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            :disabled="
                                                this.header.Status != 'ACTIVE'
                                            "
                                            @click="updateHdr()"
                                            variant="outline-success"
                                            size="sm"
                                            ><i
                                                class="fa fa-edit"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            :disabled="
                                                this.header.Status != 'ACTIVE'
                                            "
                                            @click="deleteHdr()"
                                            variant="outline-danger"
                                            size="sm"
                                            ><i
                                                class="fa fa-trash"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>SOANo</label>
                                <input
                                    v-model="header.SOANo"
                                    type="text"
                                    name="SOANo"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Prepared By</label>
                                <input
                                    v-model="header.Prepared_by"
                                    type="text"
                                    name="Prepared_by"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Checked By</label>
                                <input
                                    v-model="header.Checked_by"
                                    type="text"
                                    name="Checked_by"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-4 text-right">
                            <label class="text-danger">{{
                                header.Status
                            }}</label>
                            <div class="form-group">
                                <button
                                    :disabled="
                                        this.header.Status != 'TRANSMITTED'
                                    "
                                    @click="postLedger()"
                                    class="btn btn-warning"
                                    type="button"
                                    bold
                                >
                                    <i
                                        class="fa fa-calculator"
                                        aria-hidden="true"
                                    ></i>
                                    POST
                                </button>
                                <button
                                    @click="reportModal()"
                                    class="btn btn-warning"
                                    type="button"
                                    bold
                                >
                                    <i
                                        class="fa fa-print"
                                        aria-hidden="true"
                                    ></i>
                                    PRINT
                                </button>
                                <button
                                    @click="openOthersHdr()"
                                    class="btn btn-primary"
                                    type="button"
                                    bold
                                >
                                    <i
                                        class="fa fa-plus"
                                        aria-hidden="true"
                                    ></i>
                                    NEW OTHERS HEADER
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Noted By</label>
                                <input
                                    v-model="header.Noted_by"
                                    type="text"
                                    name="Noted_by"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Approved By</label>
                                <input
                                    v-model="header.Approved_by"
                                    type="text"
                                    name="Approved_by"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Approved By</label>
                                <input
                                    v-model="header.Approved_by2"
                                    type="text"
                                    name="Approved_by2"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-4 text-right">
                            <b>TOTAL AMOUNT :</b>
                        </div>
                        <div class="col-md-2">
                            <input
                                v-model="TotalAmount"
                                type="text"
                                name="TotalAmount"
                                placeholder=""
                                class="form-control text-primary text-right"
                                disabled
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th>Date</th>
                                        <th>Invoice No.</th>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Unit</th>
                                        <th>Unit Price</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody tbody-160">
                                    <tr v-show="!dtlData">
                                        <td colspan="7" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr
                                        v-for="item in filteredBlogs"
                                        v-on:click="rowClick(item)"
                                    >
                                        <td>{{ item.Date | formatDate }}</td>
                                        <td>{{ item.InvoiceNo }}</td>
                                        <td>{{ item.Description }}</td>
                                        <td>{{ item.Qty }}</td>
                                        <td>{{ item.Unit }}</td>
                                        <td>{{ item.Price | formatNumber }}</td>
                                        <td>
                                            {{ item.Amount | formatNumber }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <form @submit.prevent="saveDtl()">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input
                                        v-model="dtl.Description"
                                        type="text"
                                        name="Description"
                                        placeholder=""
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Unit</label>
                                    <input
                                        v-model="dtl.Unit"
                                        type="text"
                                        name="Unit"
                                        placeholder=""
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Unit Price</label>
                                    <input
                                        v-model="dtl.Price"
                                        type="text"
                                        name="Price"
                                        placeholder=""
                                        class="form-control"
                                        text-right
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Markup (%)</label>
                                    <input
                                        v-on:keyup="computeMarkup()"
                                        v-model="dtl.markup"
                                        type="text"
                                        name="markup"
                                        placeholder=""
                                        class="form-control"
                                        text-right
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Markup Price</label>
                                    <input
                                        v-model="dtl.subPrice"
                                        type="text"
                                        name="subPrice"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                        text-right
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Qty</label>
                                    <input
                                        v-on:keyup="computeAmount()"
                                        v-model="dtl.Qty"
                                        type="text"
                                        name="Qty"
                                        placeholder=""
                                        class="form-control"
                                        text-right
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Amount</label>
                                    <input
                                        v-model="dtl.Amount"
                                        type="text"
                                        name="Amount"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                        text-right
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Date</label>
                                    <input
                                        v-model="dtl.Date"
                                        type="date"
                                        name="Date"
                                        placeholder=""
                                        class="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Invoice No</label>
                                    <input
                                        v-model="dtl.InvoiceNo"
                                        type="text"
                                        name="InvoiceNo"
                                        placeholder=""
                                        class="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>GL</label>
                                    <input
                                        v-model="dtl.GL"
                                        type="text"
                                        name="Amount"
                                        placeholder=""
                                        class="form-control"
                                        list="gl"
                                        required
                                    />
                                    <datalist id="gl">
                                        <option v-for="item in GLList">{{
                                            item.GL
                                        }}</option>
                                    </datalist>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Cost Center</label>
                                    <input
                                        v-model="dtl.CC"
                                        type="text"
                                        name="CC"
                                        placeholder=""
                                        class="form-control"
                                        list="costcenter"
                                        required
                                    />
                                    <datalist id="costcenter">
                                        <option v-for="item in CCList">{{
                                            item.Costcenter
                                        }}</option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Sub Amount</label>
                                    <input
                                        v-model="dtl.subAmount"
                                        type="text"
                                        name="subAmount"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                        text-right
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <label>&nbsp;</label>
                                <div class="form-group">
                                    <button
                                        @click="clearHeader('detail')"
                                        class="btn btn-primary"
                                        type="button"
                                        bold
                                    >
                                        <i
                                            class="fa fa-eraser"
                                            aria-hidden="true"
                                        ></i>
                                        CLEAR
                                    </button>
                                    <button
                                        :disabled="
                                            this.header.Status != 'ACTIVE'
                                        "
                                        @click="deleteDtl()"
                                        class="btn btn-danger"
                                        type="button"
                                        bold
                                    >
                                        <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                        ></i>
                                        DELETE
                                    </button>
                                    <button
                                        :disabled="
                                            this.header.Status != 'ACTIVE'
                                        "
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
            <!-- MODAl -->
            <div
                class="modal fade"
                id="OthersHdrModal"
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
                                        <b v-show="!updateMeHeader"
                                            >CREATE OTHERS HEADER</b
                                        >
                                        <b v-show="updateMeHeader"
                                            >UPDATE OTHERS HEADER</b
                                        >
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
                                <form @submit.prevent="saveHdr()">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>SOANo</label>
                                                <input
                                                    v-model="formHeader.SOANo"
                                                    type="text"
                                                    name="SOANo"
                                                    placeholder=""
                                                    class="form-control"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Prepared By</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            formHeader.Prepared_by
                                                        "
                                                        type="text"
                                                        name="Prepared_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    1
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Checked By</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            formHeader.Checked_by
                                                        "
                                                        type="text"
                                                        name="Checked_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    2
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Noted By</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            formHeader.Noted_by
                                                        "
                                                        type="text"
                                                        name="Noted_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    3
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Approved By</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            formHeader.Approved_by
                                                        "
                                                        type="text"
                                                        name="Approved_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    4
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Approved By</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            formHeader.Approved_by2
                                                        "
                                                        type="text"
                                                        name="Approved_by2"
                                                        placeholder=""
                                                        class="form-control"
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    5
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-right">
                                            <label>&nbsp;</label>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="modal fade"
                id="reportModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="addNewLabel"
                aria-hidden="true"
            >
                <div
                    class="modal-dialog modal-dialog-centered modal-xl"
                    role="document"
                >
                    <div class="modal-content">
                        <div class="modal-header-cus">
                            <div class="row container-fluid">
                                <div class="col-md-11">
                                    <h5>
                                        <b>Generate SOA Report</b>
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
                                <div class="row" v-show="modalPage == 1">
                                    <div
                                        class="col-md-6"
                                        style="border-right: 2px solid black;"
                                    >
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button
                                                    @click="viewReport()"
                                                    class="btn btn-primary btn-xs"
                                                    type="button"
                                                    bold
                                                >
                                                    <i
                                                        class="fa fa-eye"
                                                        aria-hidden="true"
                                                    ></i>
                                                    View Report
                                                </button>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <h6><i>Page 1</i></h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>TO:</label>
                                                <textarea
                                                    style="width:100%;height:100px;"
                                                    v-model="reportData.to"
                                                ></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <label>THRU:</label>
                                                <textarea
                                                    style="width:100%;height:100px;"
                                                    v-model="reportData.thru"
                                                ></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <label>BODY:</label>
                                                <textarea
                                                    style="width:100%;height:130px;"
                                                    v-model="reportData.body"
                                                ></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <label>BODY2:</label>
                                                <textarea
                                                    style="width:100%;height:100px;"
                                                    v-model="reportData.body2"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-md-6"
                                        style="border-right: 2px solid black;"
                                    >
                                        <div class="row">
                                            <div class="col-md-6"></div>
                                            <div class="col-md-6 text-right">
                                                <h6>
                                                    <i>Page 2 (Attachment)</i>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Prepared By:</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            reportData.Prepared_by
                                                        "
                                                        type="text"
                                                        name="Prepared_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        required
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    6
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Checked By:</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            reportData.Checked_by
                                                        "
                                                        type="text"
                                                        name="Checked_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        required
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    7
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Noted By:</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            reportData.Noted_by
                                                        "
                                                        type="text"
                                                        name="Noted_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        required
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    8
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Approved By:</label>
                                                <b-input-group>
                                                    <input
                                                        v-model="
                                                            reportData.Approved_by
                                                        "
                                                        type="text"
                                                        name="Approved_by"
                                                        placeholder=""
                                                        class="form-control"
                                                        required
                                                        disabled
                                                    />
                                                    <b-input-group-append>
                                                        <b-button
                                                            @click="
                                                                searchSearchSignatoryButton(
                                                                    9
                                                                )
                                                            "
                                                            variant="outline-primary"
                                                            size="sm"
                                                            ><i
                                                                class="fa fa-search"
                                                                aria-hidden="true"
                                                            ></i
                                                        ></b-button>
                                                    </b-input-group-append>
                                                </b-input-group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-show="modalPage == 2">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button
                                                    @click="viewReport()"
                                                    class="btn btn-primary btn-xs"
                                                    type="button"
                                                    bold
                                                >
                                                    <i
                                                        class="fa fa-arrow-left"
                                                        aria-hidden="true"
                                                    ></i>
                                                    Back to Setting
                                                </button>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <h6><i>Page 1</i></h6>
                                            </div>
                                        </div>
                                        <iframe
                                            width="100%"
                                            height="550px"
                                            v-bind:src="reportData.url1"
                                        ></iframe>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-6"></div>
                                            <div class="col-md-6 text-right">
                                                <h6>
                                                    <i>Page 2 (Attachment)</i>
                                                </h6>
                                            </div>
                                        </div>
                                        <iframe
                                            width="100%"
                                            height="550px"
                                            v-bind:src="reportData.url2"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <search-signatory
            v-on:rowClick="signatoryClose($event)"
        ></search-signatory>
        <search-othersHeader
            v-on:rowClick="othersHeaderClose($event)"
        ></search-othersHeader>
    </div>
</template>

<script>
import searchSignatory from "../search/SearchAllowance/SearchSignatories.vue";
import searchOthersHeader from "../search/SearchAllowance/SearchOthersHeader.vue";
export default {
    components: {
        "search-signatory": searchSignatory,
        "search-othersHeader": searchOthersHeader
    },
    data() {
        return {
            rows: [],
            search: "",
            type: "",
            formHeader: {
                OHID: "",
                SOANo: "",
                Prepared_by: "",
                Prepared_by_desig: "",
                Checked_by: "",
                Checked_by_desig: "",
                Noted_by: "",
                Noted_by_desig: "",
                Approved_by: "",
                Approved_by_desig: "",
                Approved_by2: "",
                Approved_by_desig2: ""
            },
            header: {
                OHID: "",
                SOANo: "",
                Prepared_by: "",
                Prepared_by_desig: "",
                Checked_by: "",
                Checked_by_desig: "",
                Noted_by: "",
                Noted_by_desig: "",
                Approved_by: "",
                Approved_by_desig: "",
                Approved_by2: "",
                Approved_by_desig2: ""
            },
            dtl: {
                OEDID: "",
                hdr_idLink: "",
                Date: this.$root.formatDate(new Date()),
                InvoiceNo: "",
                Qty: "0",
                Unit: "",
                Description: "",
                Price: "0.00",
                Amount: "0.00",
                Supplier: "",
                GL: "",
                CC: "",
                markup: "",
                subPrice: "0.00",
                subtAmount: "0.00"
            },
            details: [],
            dtlData: false,
            updateMeHeader: false,
            TotalAmount: "0.00",
            markup: 0,
            CCList: [],
            GLList: [],
            reportData: {
                to: "",
                thru: "",
                body: "",
                body2: "",
                Prepared_by: "",
                Prepared_by_desig: "",
                Checked_by: "",
                Checked_by_desig: "",
                Noted_by: "",
                Noted_by_desig: "",
                Approved_by: "",
                Approved_by_desig: "",
                department: "",
                url1: "",
                url2: ""
            },
            modalPage: 1,
            depList: []
        };
    },
    mounted() {
        this.getDropDownData();
    },
    methods: {
        getDropDownData() {
            axios
                .get("api/allowance", { params: { getCostCenter: true } })
                .then(response => {
                    console.log(response.data);
                    this.CCList = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
            axios
                .get("api/allowance", { params: { getGL: true } })
                .then(response => {
                    console.log(response.data);
                    this.GLList = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        openOthersHdr() {
            this.clearHeader("formHeader");
            $("#OthersHdrModal").modal("show");
            this.updateMeHeader = false;
        },
        getDetail() {
            if (this.header.OHID) {
                axios
                    .get("api/others", {
                        params: { getDtl: true, id: this.header.OHID }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.details = response.data;
                            this.dtlData = true;
                        } else {
                            this.dtlData = false;
                        }
                        this.getTotal();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        getTotal() {
            if (this.header.OHID) {
                axios
                    .get("api/others", {
                        params: { getTotal: true, id: this.header.OHID }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.TotalAmount = this.$root.formatNumberCommaRound(
                                response.data[0].TotalAmount
                            );
                        } else {
                            this.TotalAmount = "0.00";
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        getMarkup() {
            axios
                .get("api/markup")
                .then(response => {
                    this.markup = response.data[0].OtherMarkUp;
                    this.dtl.markup = this.markup;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        rowClick(row) {
            this.dtl = Object.assign({}, row);
            this.dtl.Price = this.$root.formatNumberCommaRound(row.Price);
            this.dtl.Amount = this.$root.formatNumberCommaRound(row.Amount);
            this.dtl.subPrice = this.$root.formatNumberCommaRound(row.subPrice);
            this.dtl.subAmount = this.$root.formatNumberCommaRound(
                row.subAmount
            );
        },
        saveHdr() {
            var data = Object.assign({}, this.formHeader);
            this.$Progress.start();
            axios
                .post("api/othersHdr", data)
                .then(response => {
                    if (response.data.success) {
                        this.header = Object.assign({}, this.formHeader);
                        if (response.data.id) {
                            this.header.OHID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.clearHeader("formHeader");
                        this.clearHeader("detail");
                        if(!this.updateMeHeader){
                            this.details = [];
                        }
                        $("#OthersHdrModal").modal("hide");
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
        },
        updateHdr() {
            if (!this.header.OHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select/save OTHERS Header to continue."
                });
            }
            this.formHeader = Object.assign({}, this.header);
            this.updateMeHeader = true;
            $("#OthersHdrModal").modal("show");
        },
        deleteHdr() {
            if (!this.header.OHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select OTHERS SOA Header to continue."
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
                        .delete(`api/othersHdrDelete/${this.header.OHID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.clearAll();
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
        searchOthersHeader() {
            Fire.$emit("searchOthersHeader");
        },
        othersHeaderClose: function(row) {
            this.header = Object.assign({}, row);
            this.getDetail();
            this.getMarkup();
        },
        searchSearchSignatoryButton(number) {
            Fire.$emit("searchSignatory", number);
        },
        signatoryClose: function(row) {
            if (row.number == 1) {
                this.formHeader.Prepared_by = row.SignatoryName;
                this.formHeader.Prepared_by_desig = row.Designation;
            } else if (row.number == 2) {
                this.formHeader.Checked_by = row.SignatoryName;
                this.formHeader.Checked_by_desig = row.Designation;
            } else if (row.number == 3) {
                this.formHeader.Noted_by = row.SignatoryName;
                this.formHeader.Noted_by_desig = row.Designation;
            } else if (row.number == 4) {
                this.formHeader.Approved_by = row.SignatoryName;
                this.formHeader.Approved_by_desig = row.Designation;
            } else if (row.number == 5) {
                this.formHeader.Approved_by2 = row.SignatoryName;
                this.formHeader.Approved_by_desig2 = row.Designation;
            } else if (row.number == 6) {
                this.reportData.Prepared_by = row.SignatoryName;
                this.reportData.Prepared_by_desig = row.Designation;
            } else if (row.number == 7) {
                this.reportData.Checked_by = row.SignatoryName;
                this.reportData.Checked_by_desig = row.Designation;
            } else if (row.number == 8) {
                this.reportData.Noted_by = row.SignatoryName;
                this.reportData.Noted_by_desig = row.Designation;
            } else if (row.number == 9) {
                this.reportData.Approved_by = row.SignatoryName;
                this.reportData.Approved_by_desig = row.Designation;
            }
        },
        computeMarkup() {
            if (this.dtl.markup == 0) {
                this.dtl.subPrice = this.dtl.Price;
            } else {
                if (this.dtl.markup) {
                    if (!isNaN(this.dtl.Qty)) {
                        this.dtl.subPrice = this.$root.formatNumberCommaRound(
                            this.$root.formatNumber(this.dtl.Price) +
                                (this.dtl.markup / 100) *
                                    this.$root.formatNumber(this.dtl.Price)
                        );
                    }
                }
            }
            this.computeAmount();
        },
        computeAmount() {
            if (this.dtl.Qty) {
                if (!isNaN(this.dtl.Qty)) {
                    this.dtl.Amount = this.$root.formatNumberCommaRound(
                        this.$root.formatNumber(this.dtl.Qty) *
                            this.$root.formatNumber(this.dtl.Price)
                    );
                    this.dtl.subAmount = this.$root.formatNumberCommaRound(
                        this.$root.formatNumber(this.dtl.Qty) *
                            this.$root.formatNumber(this.dtl.subPrice)
                    );
                } else {
                    this.dtl.Amount = "0.00";
                }
            } else {
                this.dtl.Amount = "0.00";
            }
        },
        saveDtl() {
            if (
                this.$root.formatNumber(this.dtl.Amount) == 0 ||
                this.$root.formatNumber(this.dtl.Amount) < 0
            ) {
                return toast.fire({
                    icon: "warning",
                    title: "Amount is invalid."
                });
            }
            var data = Object.assign({}, this.dtl);
            data.Price = this.$root.formatNumber(this.dtl.Price);
            data.Amount = this.$root.formatNumber(this.dtl.Amount);
            data.subPrice = this.$root.formatNumber(this.dtl.subPrice);
            data.subAmount = this.$root.formatNumber(this.dtl.subAmount);
            data.hdr_idLink = this.header.OHID;
            this.$Progress.start();
            axios
                .post("api/othersDtl", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.header.OEDID = response.data.id;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.getDetail();
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
        },
        deleteDtl() {
            if (!this.dtl.OEDID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select OTHERS Detail to continue."
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
                        .delete(`api/deleteOthersHDR/${this.dtl.OEDID}`)
                        .then(response => {
                            if (response.data.success) {
                                this.getDetail();
                                this.clearHeader("detail");
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
        generatePrint() {
            this.$Progress.start();
            axios
                .get("api/reportOthers", {
                    params: { SOANo: this.header.SOANo }
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        this.reportData.url2 =
                            "api/reportOthers?report=true&SOANo=" +
                                this.header.SOANo
                        ;
                    } else {
                        swal.fire("Warning!", response.data.message, "warning");
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        postLedger() {
            swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Post it!"
            }).then(result => {
                if (result.value) {
                    this.$Progress.start();
                    var data = {
                        SOANo: this.header.SOANo,
                        amount: this.$root.formatNumber(this.TotalAmount)
                    };
                    axios
                        .post("api/othersPostLedger", data)
                        .then(response => {
                            if (response.data.success) {
                                this.header.Status = "POSTED TO LEDGER";
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
                } else {
                    swal.fire("Information!", "Cancelled.", "warning");
                }
            });
        },
        clearAll() {
            this.clearHeader("header");
            this.clearHeader("formHeader");
            this.clearHeader("detail");
            this.details = [];
        },
        clearHeader($type) {
            if ($type == "header") {
                this.header = {
                    OHID: "",
                    SOANo: "",
                    Prepared_by: "",
                    Prepared_by_desig: "",
                    Checked_by: "",
                    Checked_by_desig: "",
                    Noted_by: "",
                    Noted_by_desig: "",
                    Approved_by: "",
                    Approved_by_desig: "",
                    Approved_by2: "",
                    Approved_by_desig2: ""
                };
            } else if ($type == "formHeader") {
                this.formHeader = {
                    OHID: "",
                    SOANo: "",
                    Prepared_by: "",
                    Prepared_by_desig: "",
                    Checked_by: "",
                    Checked_by_desig: "",
                    Noted_by: "",
                    Noted_by_desig: "",
                    Approved_by: "",
                    Approved_by_desig: "",
                    Approved_by2: "",
                    Approved_by_desig2: ""
                };
            } else if ($type == "reportData") {
                this.reportData = {
                    to: "",
                    thru: "",
                    body: "",
                    body2: "",
                    Prepared_by: "",
                    Prepared_by_desig: "",
                    Checked_by: "",
                    Checked_by_desig: "",
                    Noted_by: "",
                    Noted_by_desig: "",
                    Approved_by: "",
                    Approved_by_desig: "",
                    department: "",
                    url1: "",
                    url2: ""
                };
            } else {
                this.dtl = {
                    OEDID: "",
                    hdr_idLink: "",
                    Date: this.$root.formatDate(new Date()),
                    InvoiceNo: "",
                    Qty: "0",
                    Unit: "",
                    Description: "",
                    Price: "0.00",
                    Amount: "0.00",
                    Supplier: "",
                    GL: "",
                    CC: "",
                    markup: "",
                    subPrice: "0.00",
                    subtAmount: "0.00"
                };
                this.getMarkup();
            }
        },
        // modal for print
        viewReport() {
            if (this.modalPage == 1) {
                this.modalPage = 2;
                axios
                    .post("api/reportAllowanceSOASave", { to: this.reportData.to, thru: this.reportData.thru, body: this.reportData.body, body2: this.reportData.body2 })
                    .then(response => {
                        if (response.data.success) {
                            this.reportData.url1 =
                                "api/reportSOA?report=true&SOANo=" +
                                this.header.SOANo +
                                "&Prepared_by=" +
                                this.reportData.Prepared_by +
                                "&Checked_by=" +
                                this.reportData.Checked_by +
                                "&Noted_by=" +
                                this.reportData.Noted_by +
                                "&Approved_by=" +
                                this.reportData.Approved_by +
                                "&reportID=" + response.data.id + "&type=OTHERS";
                        }
                        this.$Progress.finish();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                this.generatePrint();
            } else {
                this.modalPage = 1;
            }
        },
        reportModal() {
            console.log(this.$root.formatNumber(this.TotalAmount));
            var dec = this.$root
                .formatNumber(this.TotalAmount)
                .toString()
                .split(".");
            if (dec.length == 1) {
                var decimal = "00";
            } else {
                var decimal = dec[1].toString().padEnd(2, "0");
            }
            var numberToWord = this.$root
                .number2word(this.$root.formatNumber(this.TotalAmount))
                .toString()
                .toUpperCase();
            this.reportData.to =
                "TO: MS.LORNA SEVILLEJO\n\xa0\xa0\xa0\xa0Accounting Supervisor\n\xa0\xa0\xa0\xa0Del Monte, Inc\n\xa0\xa0\xa0\xa0Camp Philips, Manolo Fortich, Bukidnon";
            this.reportData.thru =
                "THRU:\n\xa0\xa0\xa0\xa0MS.KAREN I. DOMINGUEZ\n\xa0\xa0\xa0\xa0HR Plantation Supervisor\n\xa0\xa0\xa0\xa0Del Monte, Inc\n\xa0\xa0\xa0\xa0Camp Philips, Manolo Fortich, Bukidnon";
            this.reportData.body =
                "Dear Ms. Sevillejo,\n\n\nThis is to bill Del Monte, Inc. the amount of " +
                numberToWord +
                " PESOS & " +
                decimal +
                "/100 ONLY (Php " +
                this.TotalAmount +
                ") for PPE issuance of Philpack Freezing Plant production employees. Please see attached file for your perusal.";
            this.reportData.body2 = "Please issue check in the name of GENERAL SERVICES MULTIPURPOSE COOPERATIVE.";
            this.reportData.Prepared_by = this.header.Prepared_by;
            this.reportData.Prepared_by_desig = this.header.Prepared_by_desig;
            this.reportData.Noted_by = this.header.Noted_by;
            this.reportData.Noted_by_desig = this.header.Noted_by_desig;
            this.reportData.Approved_by = this.header.Approved_by;
            this.reportData.Approved_by_desig = this.header.Approved_by_desig;
            $("#reportModal").modal("show");
        }
    },
    created() {},
    computed: {
        filteredBlogs() {
            return this.details.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.InvoiceNo.toLowerCase().includes(v) ||
                            item.Description.toLowerCase().includes(v)
                    );
            });
        }
    }
};
</script>
