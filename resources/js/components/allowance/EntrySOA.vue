<template>
    <div class="container dave-template">
        <div class="col-xs-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><b>ALLOWANCE SOA ENTRY</b></h3>
                    <div class="card-tools"></div>
                </div>
                <!-- /.box-header -->
                <div class="card-body table-responsive">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Control#</label>
                                <b-input-group>
                                    <input
                                        v-model="header.ASHID"
                                        type="text"
                                        name="control_no"
                                        placeholder=""
                                        class="form-control"
                                        disabled
                                    />
                                    <b-input-group-append>
                                        <b-button
                                            @click="
                                                searchAllowanceSOAHeaderButton()
                                            "
                                            variant="outline-primary"
                                            size="sm"
                                            ><i
                                                class="fa fa-search"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            :disabled="
                                                header.Status != 'ACTIVE'
                                            "
                                            @click="
                                                updateAllowanceSOAHeaderButton()
                                            "
                                            variant="outline-success"
                                            size="sm"
                                            ><i
                                                class="fa fa-edit"
                                                aria-hidden="true"
                                            ></i
                                        ></b-button>
                                        <b-button
                                            :disabled="
                                                header.Status != 'ACTIVE'
                                            "
                                            @click="
                                                deleteAllowanceHeaderButton()
                                            "
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
                                <label>SOA No.</label>
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
                                <label>Date</label>
                                <input
                                    v-model="header.Date"
                                    type="date"
                                    name="Date"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Billed To</label>
                                <input
                                    v-model="header.billedTo"
                                    type="text"
                                    name="billedTo"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <label class="text-danger"
                                ><b>{{ header.Status }}</b></label
                            >
                            <div class="form-group text-right">
                                <button
                                    class="btn btn-primary"
                                    @click="newModal"
                                    bold
                                >
                                    New SOA Header
                                    <i class="fa fa-user-plus fa fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>TIN</label>
                                <input
                                    v-model="header.TIN"
                                    type="text"
                                    name="TIN"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Address</label>
                                <input
                                    v-model="header.Address"
                                    type="text"
                                    name="Address"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Period</label>
                                <input
                                    v-model="header.Period"
                                    type="text"
                                    name="Period"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Location</label>
                                <input
                                    v-model="header.Location"
                                    type="text"
                                    name="Location"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Total</label>
                                <input
                                    v-model="Total"
                                    type="text"
                                    name="Total"
                                    placeholder=""
                                    class="form-control"
                                    disabled
                                    text-right
                                    bold
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 table-height">
                            <table
                                class="table table-hover table-striped dave-table"
                            >
                                <thead class="dave-thead">
                                    <tr>
                                        <th class="text-center">Chapa</th>
                                        <th class="text-center" width="20%">
                                            Fullname
                                        </th>
                                        <th class="text-center">Gasoline</th>
                                        <th class="text-center">Comm</th>
                                        <th class="text-center">Rent&Maint</th>
                                        <th class="text-center">Others</th>
                                        <th class="text-center">Admin Fee</th>
                                        <th class="text-center">Sub Total</th>
                                    </tr>
                                </thead>
                                <tbody class="dave-tbody">
                                    <tr v-show="!this.dataInDetail">
                                        <td colspan="8" class="text-center">
                                            <i>No Data Found...</i>
                                        </td>
                                    </tr>
                                    <tr
                                        v-for="item in detailList"
                                        v-bind:key="item.ADID"
                                        v-on:click="rowClick(item)"
                                    >
                                        <td bold>{{ item.Chapa }}</td>
                                        <td width="20%">{{ item.FullName }}</td>
                                        <td class="text-right">
                                            {{ item.Gasoline | formatNumber }}
                                        </td>
                                        <td class="text-right">
                                            {{
                                                item.Communication
                                                    | formatNumber
                                            }}
                                        </td>
                                        <td class="text-right">
                                            {{
                                                item.RentalMaintenance
                                                    | formatNumber
                                            }}
                                        </td>
                                        <td class="text-right">
                                            {{ item.Others | formatNumber }}
                                        </td>
                                        <td class="text-right">
                                            {{ item.AdminFee | formatNumber }}
                                        </td>
                                        <td class="text-right">
                                            {{ item.SubTotal | formatNumber }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
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
                        <div class="col-md-3">
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
                        <div class="col-md-3">
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
                        <div class="col-md-3">
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
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-12 text-right">
                            <button
                                @click="clearAll()"
                                class="btn btn-default"
                                type="button"
                                bold
                            >
                                <i class="fa fa-eraser" aria-hidden="true"></i>
                                Clear
                            </button>
                            <button
                                :disabled="!this.header.ASHID"
                                @click="reportModal()"
                                class="btn btn-primary"
                                type="button"
                                bold
                            >
                                <i class="fa fa-print" aria-hidden="true"></i>
                                Print
                            </button>
                            <button
                                :disabled="this.header.Status != 'TRANSMITTED'"
                                @click="postLedger()"
                                class="btn btn-warning"
                                type="button"
                                bold
                            >
                                <i
                                    class="fa fa-calculator"
                                    aria-hidden="true"
                                ></i>
                                POST to Ledger
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <!--<pagination :data="vehicles"
            @pagination-change-page="getResults"></pagination>-->
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="addNew"
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
                                    <b v-show="!this.updateMeHeader"
                                        >Create Allowance SOA Header</b
                                    >
                                    <b v-show="this.updateMeHeader"
                                        >Update Allowance SOA Header</b
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
                    <form @submit.prevent="saveSOAHeader()">
                        <div class="modal-body-cus">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label>Date</label>
                                            <input
                                                v-model="formHeader.Date"
                                                type="date"
                                                name="Date"
                                                placeholder=""
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label>Billed To</label>
                                            <input
                                                v-model="formHeader.billedTo"
                                                type="text"
                                                name="billedTo"
                                                placeholder=""
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>TIN</label>
                                            <input
                                                v-model="formHeader.TIN"
                                                type="text"
                                                name="TIN"
                                                placeholder=""
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input
                                                v-model="formHeader.Address"
                                                type="text"
                                                name="Address"
                                                placeholder=""
                                                class="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <label>Location</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Location"
                                                type="text"
                                                name="Location"
                                                placeholder=""
                                                class="form-control"
                                                required
                                                disabled
                                            />
                                            <b-input-group-append>
                                                <b-button
                                                    @click="
                                                        searchAllowanceHeaderButton()
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
                                    <div class="col-md-2">
                                        <label>Period</label>
                                        <input
                                            v-model="formHeader.Period"
                                            type="text"
                                            name="Period"
                                            placeholder=""
                                            class="form-control"
                                            required
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Prepared By</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Prepared_by"
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
                                    <div class="col-md-6">
                                        <label>Noted By</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Noted_by"
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
                                    <div class="col-md-6">
                                        <label>Approved By</label>
                                        <b-input-group>
                                            <input
                                                v-model="formHeader.Approved_by"
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
                                    <div class="col-md-6">
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
                                                required
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
                                <br />
                                <div class="row">
                                    <div class="col-md-12 text-right">
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
                            </div>
                        </div>
                    </form>
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
                                            <h6><i>Page 2 (Attachment)</i></h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Department:</label>
                                            <input
                                                v-model="reportData.department"
                                                type="text"
                                                name="department"
                                                placeholder=""
                                                class="form-control"
                                                list="department"
                                            />
                                            <datalist id="department">
                                                <option
                                                    v-for="item in depList" :key="item.id"
                                                    >{{
                                                        item.Department
                                                    }}</option
                                                >
                                            </datalist>
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
                                            <h6><i>Page 2 (Attachment)</i></h6>
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
        <search-allowanceHeader
            v-on:rowClick="allowanceHeaderClose($event)"
        ></search-allowanceHeader>
        <search-allowanceSOAHeader
            v-on:rowClick="allowanceSOAHeaderClose($event)"
        ></search-allowanceSOAHeader>
        <search-signatory
            v-on:rowClick="signatoryClose($event)"
        ></search-signatory>
    </div>
</template>

<script>
import searchAllowanceHeader from "../search/SearchAllowance/SearchAllowanceHeader.vue";
import searchSOAAllowanceHeader from "../search/SearchAllowance/SearchSOAAllowanceHeader.vue";
import searchSignatory from "../search/SearchAllowance/SearchSignatories.vue";
export default {
    components: {
        "search-allowanceHeader": searchAllowanceHeader,
        "search-allowanceSOAHeader": searchSOAAllowanceHeader,
        "search-signatory": searchSignatory
    },
    data() {
        return {
            header: {
                ASHID: "",
                SOANo: "",
                hdr_idLink: "",
                Period: "",
                Location: "",
                Date: "",
                billedTo: "",
                TIN: "",
                Address: "",
                Status: ""
            },
            formHeader: {
                ASHID: "",
                SOANo: "",
                hdr_idLink: "",
                Period: "",
                Location: "",
                Date: this.$root.formatDate(new Date()),
                billedTo: "Del Monte Philippines, Inc.",
                TIN: "000-291-799-000",
                Address: "Camp Phillips, Bukidnon",
                Prepared_by: "",
                Prepared_by_desig: "",
                Noted_by: "",
                Noted_by_desig: "",
                Approved_by: "",
                Approved_by_desig: "",
                Approved_by2: "",
                Approved_by2_desig: ""
            },
            detail: {
                ADID: "",
                hdr_idLink: "",
                EmpID: "",
                Chapa: "",
                FName: "",
                MName: "",
                LName: "",
                ExtName: "",
                manDays: "",
                GL: "",
                CostCenter: "",
                Gasoline: "0.00",
                Communication: "0.00",
                RentalMaintenance: "0.00",
                Others: "0.00",
                AdminFee: "0.00",
                SubTotal: "0.00",
                SubTotal: "0.00"
            },
            updateMeHeader: false,
            detailList: [],
            dataInDetail: false,
            Total: "0.00",
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
    mounted() {},
    methods: {
        newModal() {
            this.clearHeader("formHeader");
            this.updateMeHeader = false;
            $("#addNew").modal("show");
        },
        updateAllowanceSOAHeaderButton() {
            if (!this.header.ASHID) {
                return toast.fire({
                    icon: "warning",
                    title:
                        "Please select/save Allowance SOA Header to continue."
                });
            }
            this.formHeader = Object.assign({}, this.header);
            this.updateMeHeader = true;
            $("#addNew").modal("show");
        },
        deleteAllowanceHeaderButton() {
            if (!this.header.ASHID) {
                return toast.fire({
                    icon: "warning",
                    title: "Please select Allowance SOA Header to continue."
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
                        .delete(`api/allowanceSOA/${this.header.ASHID}`)
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
        searchAllowanceHeaderButton() {
            Fire.$emit("searchAllowanceHeader");
        },
        allowanceHeaderClose: function(row) {
            this.formHeader.Period = row.Period;
            this.formHeader.Location = row.Location;
            this.formHeader.hdr_idLink = row.AHID;
        },
        searchAllowanceSOAHeaderButton() {
            Fire.$emit("searchSOAAllowanceHeader");
        },
        allowanceSOAHeaderClose: function(row) {
            this.header = Object.assign({}, row);
            this.getTotalAmount();
            this.getAllowanceDetail();
        },
        searchSearchSignatoryButton(number) {
            Fire.$emit("searchSignatory", number);
        },
        signatoryClose: function(row) {
            if (row.number == 1) {
                this.formHeader.Prepared_by = row.SignatoryName;
                this.formHeader.Prepared_by_desig = row.Designation;
            } else if (row.number == 2) {
                this.formHeader.Noted_by = row.SignatoryName;
                this.formHeader.Noted_by_desig = row.Designation;
            } else if (row.number == 3) {
                this.formHeader.Approved_by = row.SignatoryName;
                this.formHeader.Approved_by_desig = row.Designation;
            } else if (row.number == 4) {
                this.formHeader.Approved_by2 = row.SignatoryName;
                this.formHeader.Approved_by2_desig = row.Designation;
            } else if (row.number == 5) {
                this.reportData.Prepared_by = row.SignatoryName;
                this.reportData.Prepared_by_desig = row.Designation;
            } else if (row.number == 6) {
                this.reportData.Checked_by = row.SignatoryName;
                this.reportData.Checked_by_desig = row.Designation;
            } else if (row.number == 7) {
                this.reportData.Noted_by = row.SignatoryName;
                this.reportData.Noted_by_desig = row.Designation;
            } else if (row.number == 8) {
                this.reportData.Approved_by = row.SignatoryName;
                this.reportData.Approved_by_desig = row.Designation;
            }
        },
        saveSOAHeader() {
            var data = Object.assign({}, this.formHeader);
            this.$Progress.start();
            axios
                .post("api/allowanceSOAHeader", data)
                .then(response => {
                    if (response.data.success) {
                        this.header = Object.assign({}, this.formHeader);
                        console.log(this.formHeader);
                        if (response.data.id) {
                            this.header.ASHID = response.data.id;
                            this.header.SOANo = response.data.SOANo;
                        }
                        toast.fire({
                            icon: "success",
                            title: response.data.message
                        });
                        this.header.Status = "ACTIVE";
                        $("#addNew").modal("hide");
                        this.formHeader = {};
                    } else {
                        toast.fire({
                            icon: "warning",
                            title: response.data.message
                        });
                    }
                    this.getTotalAmount();
                    this.getAllowanceDetail();
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getTotalAmount() {
            if (this.header.hdr_idLink) {
                axios
                    .get("api/allowance", {
                        params: { total: true, id: this.header.hdr_idLink }
                    })
                    .then(response => {
                        if (response.data.length > 0) {
                            this.Total = this.$root.formatNumberCommaRound(
                                response.data[0].TotalAmount
                            );
                        } else {
                            this.Total = "0.00";
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        getAllowanceDetail() {
            axios
                .get("api/allowance", {
                    params: { detail: true, id: this.header.hdr_idLink }
                })
                .then(response => {
                    if (response.data.length > 0) {
                        this.dataInDetail = true;
                        response.data.forEach(function(item) {
                            item.FullName =
                                item.LName +
                                " " +
                                item.ExtName +
                                ", " +
                                item.FName +
                                " " +
                                item.MName;
                        });
                        this.detailList = response.data;
                    } else {
                        this.detailList = [];
                        this.dataInDetail = false;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        printSOA() {
            this.$Progress.start();
            axios
                .get("api/reportAllowance", {
                    params: {
                        SOANo: this.header.SOANo,
                        department: this.reportData["department"],
                        type: 'ALLOWANCE'
                    }
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        this.reportData.url2 =
                            "api/reportAllowance?report=true&SOANo=" +
                            this.header.SOANo +
                            "&department=" +
                            this.reportData.department + "&type=ALLOWANCE";
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
                    console.log(this.$root.formatNumber(this.Total));
                    this.$Progress.start();
                    var data = {
                        SOANo: this.header.SOANo,
                        amount: this.$root.formatNumber(this.Total)
                    };
                    axios
                        .post("api/allowancePostLedger", data)
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
        clearHeader(type) {
            if (type == "header") {
                this.header = {};
            } else if (type == "reportData") {
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
                this.formHeader = {
                    ASHID: "",
                    SOANo: "",
                    hdr_idLink: "",
                    Period: "",
                    Location: "",
                    Date: this.$root.formatDate(new Date()),
                    billedTo: "Del Monte Philippines, Inc.",
                    TIN: "000-291-799-000",
                    Address: "Camp Phillips, Bukidnon",
                    Prepared_by: "",
                    Prepared_by_desig: "",
                    Noted_by: "",
                    Noted_by_desig: "",
                    Approved_by: "",
                    Approved_by_desig: "",
                    Approved_by2: "",
                    Approved_by2_desig: ""
                };
            }
        },
        clearAll() {
            this.clearHeader("header");
            this.clearHeader("formHeader");
            this.detailList = [];
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
                                "&reportID=" + response.data.id + "&type=ALLOWANCE";
                        }
                        this.$Progress.finish();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                this.printSOA();
            } else {
                this.modalPage = 1;
            }
        },
        getDepartment() {
            this.$Progress.start();
            axios
                .get("api/allowance", { params: { getDepartment: true } })
                .then(response => {
                    this.depList = response.data;
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        reportModal() {
            this.getDepartment();
            var dec = this.$root
                .formatNumber(this.Total)
                .toString()
                .split(".");
            if (dec.length == 1) {
                var decimal = "00";
            } else {
                var decimal = dec[1].toString().padEnd(2, "0");
            }
            var numberToWord = this.$root
                .number2word(this.$root.formatNumber(this.Total))
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
                this.Total +
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
            return this.detailList.filter(item => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every(
                        v =>
                            item.Chapa.toString()
                                .toLowerCase()
                                .includes(v) ||
                            item.FullName.toString()
                                .toLowerCase()
                                .includes(v)
                    );
            });
        }
    }
};
</script>
