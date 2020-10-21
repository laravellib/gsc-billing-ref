<style>
.scroll-thead-clients
{
    width: 100%;
    display: inline-table;
    
}

.scroll-tbody-y-clients
{
    display: block;
    overflow-y: scroll;
}

.table-td-clients{
   width: 12.9%;
}
.table-th-clients{
   width: 10%;
}
.table-body-clients{
    height: 250px;
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
                                    <strong>&nbsp;Create SOA</strong>
                                </h3>
                            </div>
                            <div class="col-md-2 text-right">
                                <button @click="openSoa" class="btn btn-md btn-success"><span class="fa fa-search"></span> Search SOA</button>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        <!-------------------------------modal less start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="less"
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
                                            Choose percent completion
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
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal SOA end--------------------------------->


                      <!-------------------------------modal SOA start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="soa"
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
                                            Choose created SOA
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
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>DOC #</th>
                                                    <th>Line #</th>
                                                    <th>SOA DATE</th>
                                                    <th>Client</th>
                                                    <th>Company</th>
                                                    <th>%Advance</th>
                                                    <th>Billed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="soaget in soagets"
                                                    v-bind:key="soaget.soaID"
                                                    v-on:click="checkSoa(soaget)"
                                                >
                                                    <td>{{ soaget.poNumber}}</td>
                                                    <td>{{ soaget.Linenum}}</td>
                                                    <td>{{ soaget.soaDate}}</td>
                                                    <td>{{ soaget.clientName}}</td>
                                                    <td>{{ soaget.companyName}}</td>
                                                    <td>{{ soaget.percentAdvance}}</td>
                                                    <td>{{ soaget.amountInFigure}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal SOA end--------------------------------->

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
                                            <span aria-hidden="true"
                                                >&times;</span
                                            >
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="row mb-1">
                                        <div class="col-md-4">
                                            <label>Search Lastname</label>
                                            <input type="text" v-model="clientsQuery">
                                        </div>
                                    </div>
                                        <table
                                            class="table table-hover pre-scrollable"
                                        >
                                            <thead class="scroll-thead-clients">
                                                <tr>
                                                    <th class="table-th-clients">First name</th>
                                                    <th class="table-th-clients">Middle name</th>
                                                    <th class="table-th-clients">Last name</th>
                                                    <th class="table-th-clients">Designation</th>
                                                    <th class="table-th-clients">office</th>
                                                </tr>
                                            </thead>
                                            <tbody class="scroll-tbody-y-clients table-body-clients">
                                                <tr
                                                    v-for="soa in filteredClients"
                                                    v-bind:key="soa.id"
                                                    v-on:click="checkclient(soa)"
                                                >
                                                    <td class="table-td-clients">{{ soa.FirstName }}</td>
                                                    <td class="table-td-clients">{{ soa.MiddleName }}</td>
                                                    <td class="table-td-clients">{{ soa.LastName }}</td>
                                                    <td class="table-td-clients">{{ soa.designation }}</td>
                                                    <td class="table-td-clients">{{ soa.office }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal client end--------------------------------->

                          <!-------------------------------modal signatory start--------------------------------->
                        <div
                            class="modal fade bd-example-modal-lg-table"
                            id="signatories"
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
                                            Choose signatory
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
                                            <div class="col-md-3">
                                                <label>Search Firstname</label>
                                                <input type="text" v-model="signatoryFirstnameQuery">
                                            </div>
                                            <div class="col-md-3">
                                                <label>Search Lastname</label>
                                                <input type="text" v-model="signatoryQuery">
                                            </div>
                                        </div>
                                        <table
                                            class="table table-hover pre-scrollable"
                                        >
                                            <thead class="scroll-thead-clients">
                                                <tr>
                                                    <th class="table-th-clients">First name</th>
                                                    <th class="table-th-clients">Middle name</th>
                                                    <th class="table-th-clients">Last name</th>
                                                    <th class="table-th-clients">Ext. name</th>
                                                    <th class="table-th-clients">Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody class="scroll-tbody-y-clients table-body-clients">
                                                <tr
                                                    v-for="sig in filteredSignatory"
                                                    v-bind:key="sig.id"
                                                    v-on:click="checksignatories(sig)"
                                                >
                                                    <td class="table-td-clients">{{ sig.fname }}</td>
                                                    <td class="table-td-clients">{{ sig.mname }}</td>
                                                    <td class="table-td-clients">{{ sig.lname }}</td>
                                                    <td class="table-td-clients">{{ sig.ename }}</td>
                                                    <td class="table-td-clients">{{ sig.position }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- <pagination :data="pos" @pagination-change-page="getResults"></pagination> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-------------------------------modal client end--------------------------------->


                        <form @submit.prevent="createSoa()">
                            <div class="row mb-1">
                                <div class="input-group col-md-3">
                                    <!-- <div class="input-group-prepend"> -->
                                        <span class="input-group-text"
                                            ><strong>Doc #</strong></span
                                        >
                                    <!-- </div> -->
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.poNumber"
                                    />
                                    <button
                                        @click="openSearch"
                                        class="btn btn-secondary"
                                        type="button"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Line #</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.Linenum"
                                    />
                                    <button
                                        class="btn btn-secondary"
                                        type="button"
                                        @click="openSearchDtl"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>% Less</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control text-right"
                                        v-model="variables.percentAdvance"
                                        v-on:keyup="getbilledamt"
                                        disabled
                                       
                                    />
                                    <button
                                        class="btn btn-secondary"
                                        type="button"
                                         @click="openless"
                                    >
                                    <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Amount</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control text-right"
                                        disabled
                                        style="color:red;"
                                        v-model="variables.amount"
                                        v-on:keyup="getbilledamt"
                                    />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Client</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="variables.clientName"
                                    />
                                    <button
                                        class="btn btn-secondary"
                                        type="button"
                                        @click="openClient"
                                    >
                                        <span class="fa fa-search"></span>
                                    </button>
                                </div>
                                <div class="input-group col-md-6">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong
                                                >Client Company</strong
                                            ></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="variables.companyName"
                                    />
                                </div>
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Payment #</label>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect01" v-model="variables.payment">
                                        <option selected>Choose...</option>
                                        <option value="advance">Advance payment</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                        <option value="13th">13th</option>
                                        <option value="14th">14th</option>
                                        <option value="15th">15th</option>
                                        <option value="16th">16th</option>
                                        <option value="17th">17th</option>
                                        <option value="18th">18th</option>
                                        <option value="19th">19th</option>
                                        <option value="20th">20th</option>
                                        <option value="21th">21th</option>
                                        <option value="22nd">22nd</option>
                                        <option value="23rd">23rd</option>
                                        <option value="24th">24th</option>
                                        <option value="25th">25th</option>
                                        <option value="26th">26th</option>
                                        <option value="27th">27th</option>
                                        <option value="28th">28th</option>
                                        <option value="29th">29th</option>
                                        <option value="30th">30th</option>
                                        <option value="31st">31st</option>
                                        <option value="32nd">32nd</option>
                                        <option value="33rd">33rd</option>
                                        <option value="34th">34th</option>
                                        <option value="35th">35th</option>
                                        <option value="36th">36th</option>
                                    </select>
                                    </div>
                                </div>
                            <div class="row mb-1">
                                <div class="input-group col-md-5">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Vendor</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        disabled
                                        v-model="
                                            variables.vendorCompanyName
                                        "
                                    />
                                </div>
                                <div class="input-group col-md-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Signatory</strong></span
                                        >
                                    </div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            v-model="variables.vendorName"
                                        />
                                        <button type="button" class="btn btn-md btn-secondary" @click="openSig"><span class="fa fa-search"></span></button>
                                   
                                </div>
                                <div class="input-group col-md-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>Thru</strong></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="variables.thru"
                                    />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="input-group col-md-9 text-left">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong
                                                >(Billed) Amt in words</strong
                                            ></span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="variables.amountInWords"
                                    />
                                </div>
                                <div class="input-group col-md-3 text-right">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>SOA Date</strong></span
                                        >
                                    </div>
                                    <input
                                        type="date"
                                        class="form-control"
                                        v-model="variables.soaDate"
                                    />
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="input-group col-md-12">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            ><strong>ITEM DESC</strong></span
                                        >
                                        <textarea
                                            cols="650"
                                            rows="3"
                                            class="form-control"
                                            aria-label="With textarea"
                                            required
                                            disabled
                                            v-model="variables.poDescription"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-12 text-right">
                                    <h5 style="font-weight:bold;">
                                        Billed Amt:
                                        <strong style="color:red;"
                                            >{{billedamt}}</strong
                                        >
                                    </h5>
                                </div>
                            </div>
                            <div class="row mb-1">
                                <div class="col-md-6 text-left">
                                    <button
                                        type="button"
                                        class="btn btn-info"
                                    >
                                       Print Billing Statement
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        @click="generatePrint"
                                    >
                                        Print SOA
                                    </button>
                                </div>
                                <div class="col-md-6 text-right">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        CLEAR
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                    >
                                        SAVE
                                    </button>
                                    <button
                                        @click="deleteDtlButton"
                                        type="button"
                                        class="btn btn-danger"
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
            collections: {},
            soas: {},
            pos: [],
            dtls: [],
            soagets: {},
            clients: [],
            sigs: [],
            billedamt: "",
            amount: this.$root.formatNumberCommaRound(0),
            clientsQuery: "",
            signatoryQuery: "",
            signatoryFirstnameQuery: "",
            docQuery:"",
            lineQuery:"",

            variables: new Form({
                soaID: "",
                clientName: "",
                clientID: "",
                clientDesignation: "",
                clientOffice: "",
                soaDate: this.$root.formatDate(new Date()),
                thru: "",
                companyName: "",
                poDescription: "",
                poNumber: "",
                amountInWords: "",
                amountInFigure: "",
                percentAdvance: "",
                vendorCompanyName: "GENERAL SERVICES MULTIPURPOSE COOPERATIVE",
                vendorID: 1,
                vendorDesig: "GSMPC GENERAL MANAGER",
                vendorName: "MR. BERNARDITO M. GRACIA",
                PODtlid: "",
                Linenum: "",
                amountInFigure1: "",
                payment: ""
            })
        };
    },
    methods: {
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
        generatePrint() {
            if (!this.variables.PODtlid || this.variables.length == 0) {
                return swal.fire(
                    "Information!",
                    "Nothing to Print.",
                    "warning"
                );
            }
            this.$Progress.start();
            axios
                .get("api/generatesoa", {
                    params: { PODtlid: this.variables.PODtlid, soaID: this.variables.soaID }
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        window.open(
                            "api/generatesoa?report=true&PODtlid=" +
                                this.variables.PODtlid + "&&soaID=" + 
                                this.variables.soaID
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
        getbilledamt(){
            this.billedamt = this.$root.formatNumberCommaRound((this.variables.percentAdvance/100) * this.variables.amountInFigure1); 
        },
        openless(){
            $("#less").modal("show");
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
        openSoa() {
                $("#soa").modal("show");
                this.loadSoa();
        },
        openSig(){
             $("#signatories").modal("show");
        },
        checkDtl(dls) {
            this.variables.POiddtllink = dls.PODtlid;
            this.variables.Linenum = dls.LineNum;
            this.variables.PODtlid = dls.PODtlid;
            this.variables.amountInFigure1 = dls.Amt;
            this.variables.poDescription = dls.ItemDesc;
            this.variables.amount =  this.$root.formatNumberCommaRound(this.variables.amountInFigure1);
            this.loadCollection(this.variables.PODtlid);
            $("#detail").modal("hide");
        },
        checkSoa(soaget) {
            this.variables.soaID = soaget.soaID;
            this.variables.clientName = soaget.clientName;
            this.variables.clientID = soaget.clientID;
            this.variables.clientDesignation = soaget.clientDesignation;
            this.variables.clientOffice = soaget.clientOffice;
            this.variables.soaDate = soaget.soaDate;
            this.variables.thru = soaget.thru;
            this.variables.companyName = soaget.companyName;
            this.variables.poDescription = soaget.poDescription;
            this.variables.poNumber = soaget.poNumber;
            this.variables.amountInWords = soaget.amountInWords;
            this.variables.amountInFigure = soaget.amountInFigure;
            this.billedamt = this.$root.formatNumberCommaRound(soaget.amountInFigure);
            this.variables.percentAdvance = soaget.percentAdvance;
            this.variables.vendorCompanyName = soaget.vendorCompanyName;
            this.variables.vendorID = soaget.vendorID;
            this.variables.vendorName = soaget.vendorName;
            this.variables.vendorDesig = soaget.vendorDesig;
            this.variables.PODtlid = soaget.PODtlid;
            this.variables.Linenum = soaget.Linenum;
            this.variables.POidhdrlink = soaget.POid;
            this.variables.payment = soaget.payment;
            this.variables.amountInFigure1 = soaget.poAmount;
            this.variables.amount =  this.$root.formatNumberCommaRound(this.variables.amountInFigure1);
            console.log(this.amountInFigure1);
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
            // this.variables.amount =  this.$root.formatNumberCommaRound(this.amountInFigure1);
            $("#soa").modal("hide");
        },
        checkclient(soa) {
            var middle = soa.MiddleName.charAt(0).toUpperCase();
            this.variables.clientName = soa.FirstName + " " + middle + "."+ " " + soa.LastName;
            this.variables.clientID =  soa.id;
            this.variables.clientDesignation = soa.designation;
            this.variables.clientOffice = soa.office;
            // this.variables.Linenum = soa.LineNum;
            // this.variables.amountInFigure = soa.Amt;
            // this.variables.poDescription = soa.ItemDesc;
            $("#client").modal("hide");
        },
        checksignatories(sig) {
            if(!sig.mname){
                sig.mname = "";
                var middle = sig.mname.charAt(0).toUpperCase();
                this.variables.vendorName = sig.fname + " " + middle + " " + sig.lname + " " + sig.ename;
                this.variables.vendorID =  sig.id;
                this.variables.vendorDesig = sig.position;
            }
            else if(!sig.ename){
                sig.ename = "";
                var middle = sig.mname.charAt(0).toUpperCase();
                this.variables.vendorName = sig.fname + " " + middle + "." + " " + sig.lname + " " + sig.ename;
                this.variables.vendorID =  sig.id;
                this.variables.vendorDesig = sig.position;
            }
            else{
                var middle = sig.mname.charAt(0).toUpperCase();
                this.variables.vendorName = sig.fname + " " + middle + "."+ " " + sig.lname + " " + sig.ename;
                this.variables.vendorID =  sig.id;
                this.variables.vendorDesig = sig.position;
            }
            console.log(this.variables.vendorDesig);
            $("#signatories").modal("hide");
        },
        openSearch() {
            $("#header").modal("show");
        },
        openClient() {
            $("#client").modal("show");
            axios
                .get("api/clientget")
                .then(response => {
                    this.clients = response.data;
                    console.log(this.clients);
                })
                .catch(err => {});
        },
        loadDriver() {
            axios
                .get("api/poget")
                .then(response => {
                    this.pos = response.data;
                })
                .catch(err => {});
        },
        loadSoa() {
            axios
                .get("api/soaget")
                .then(response => {
                    this.soagets = response.data;
                })
                .catch(err => {});
        },
        loadclient() {
            axios
                .get("api/clientget")
                .then(response => {
                    this.clients = response.data;
                })
                .catch(err => {});
        },
        loadsignatories() {
            axios
                .get("api/signatoriesget")
                .then(response => {
                    this.sigs = response.data;
                    console.log(this.sigs);
                })
                .catch(err => {});
        },
        checkHeader(pos) {
            this.variables.POidhdrlink = pos.POid;
            this.variables.poNumber = pos.DocumentNum;
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
            $(".modal-backdrop").remove();
        },
        createSoa() {
            this.variables.amountInFigure = this.$root.formatNumber(this.billedamt);
            var data = Object.assign({}, this.variables);
            this.$Progress.start();
            axios
                .post("api/createSoa", data)
                .then(response => {
                    if (response.data.success) {
                        if (response.data.id) {
                            this.variables.soaID = response.data.id;
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
                    this.$Progress.finish();
                    this.checkHeader();
                    this.loadDriver();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        clearHeader() {
            this.variables = new Form({
                soaID: "",
                clientName: "",
                clientID: "",
                clientDesignation: "",
                clientOffice: "",
                soaDate: "",
                thru: "",
                companyName: "",
                poDescription: "",
                poNumber: "",
                amountInWords: "",
                amountInFigure: "",
                percentAdvance: "",
                vendorCompanyName: "GENERAL SERVICES MULTIPURPOSE COOPERATIVE",
                vendorID: 1,
                vendorName: "MR. BERNARDITO M. GRACIA",
                PODtlid: "",
                Linenum: "",
                amountInFigure1: ""
            })
        },
        checkCollection(col) {
             console.log("here");
            this.variables.percentAdvance = col.completion;
            this.getbilledamt();
             $("#less").modal("hide");
        },
        deleteDtlButton() {
            if (!this.variables.soaID) {
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
                        .delete(`api/soadelete/${this.variables.soaID}`)
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
                // this.clearHeader();
                this.loadDriver();
                this.loadclient();
            });
        },
    },
    created(){
        this.loadDriver();
        this.loadsignatories();
    },
    computed: {
        filteredClients() {
            return this.clients.filter(variables => {
                return variables.LastName.toLowerCase().includes(this.clientsQuery.toLowerCase())
            })
        },
        filteredSignatory() {
            if(this.signatoryQuery){
                return this.sigs.filter(variables => {
                    return variables.lname.toLowerCase().includes(this.signatoryQuery.toLowerCase())
                })
            }
            else{
                return this.sigs.filter(variables => {
                    return variables.fname.toLowerCase().includes(this.signatoryFirstnameQuery.toLowerCase())
                })
            }
        },
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
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
