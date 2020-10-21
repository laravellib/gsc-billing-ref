<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">VAN RENTAL SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-list"
              >Van Rental List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/vanrental-reports"
              >Reports</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="row mt-3">
          <div class="col-sm-6">
            <label for="refence">Reference #</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                name="doc_no"
                v-model="doc_no"
                disabled
              />
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="searchPOHeader()"
                >Search</button>
              </span>
            </div>
          </div>
        </div>
        <search-header @data_pass="get_header"></search-header>
        <div class="row mt-1">
          <div class="col-sm">
            <button class="btn btn-success" @click="generate()">GENERATE REPORT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchHeader from "./VanRental-PO-Search.vue";
import jsPDF from "jspdf";
export default {
  components: {
    "search-header": searchHeader
  },
  data() {
    return {
      report_data: {},
      reference_no: "",
      header_id: 0,
      doc_no: ""
    };
  },
  methods: {
    clear() {
      this.report_data = 0;
    },
    searchPOHeader() {
      $("#searchVPO").modal("show");
    },
    get_header(data) {
      this.header_id = data.id;
      this.doc_no = data.doc_no;
    },
    generate() {
      if (this.doc_no == "") {
        swal.fire("Select Reference #", "warning");
      } else {
        this.$Progress.start();
        axios.get("vanrental/dtl/" + this.header_id).then(({ data }) => {
          var doc = new jsPDF("p", "pt", "letter");
          var pageHeight = 650;
          var startsY = 10;

          doc.setProperties({
            title: "vanrental_po_monitoring.pdf"
          });
          //HEADER
          doc.setFont("courier");
          doc.setFontType("bold");
          doc.setFontSize(14);
          doc.text(
            "GENERAL SERVICES MULTI-PURPOSE COOPERATIVE",
            306,
            50,
            "center"
          );
          doc.setFontSize(10);
          doc.setFontType("regular");
          doc.text(
            "Office Address: Borja Road, Damilag, Manolo Fortich, Bukidnon",
            306,
            60,
            "center"
          );
          doc.text(
            "CDA # 9520-10019987-1 / TIN 411-478-949-000",
            306,
            70,
            "center"
          );
          doc.setFontType("bold");
          doc.text("VAN RENTAL PO MONITORING", 306, 85, "center");
          doc.setFontType("regular");
          doc.addImage(Logo, "JPEG", 70, 40, 50, 50);
          doc.setLineWidth(1.5);
          doc.line(40, 94, 571, 94);
          doc.setLineWidth(2);
          doc.line(40, 97, 571, 97);
          //END HEADER
          doc.text("Doc #: " + this.doc_no, 40, 150);
          doc.autoTable({
            columnStyles: {
              0: { halign: "center", fillColor: [0, 255, 0] },
              1: {
                halign: "center",
                fillColor: [255, 255, 0]
              },
              2: {
                halign: "center",
                fillColor: [0, 255, 255]
              },
              3: { halign: "center", fillColor: [0, 255, 0] },
              4: {
                halign: "center",
                fillColor: [255, 255, 0]
              },
              5: {
                halign: "center",
                fillColor: [0, 255, 255]
              },
              6: { halign: "center", fillColor: [0, 255, 0] },
              7: {
                halign: "center",
                fillColor: [255, 255, 0]
              }
            }, // European countries centered
            body: data.data,
            columns: [
              { header: "Location", dataKey: "description" },
              { header: "Mat Code", dataKey: "mat_code" },
              { header: "No. of Bags", dataKey: "qty" },
              { header: "Unit", dataKey: "u_price" },
              { header: "Amount", dataKey: "amount" },
              { header: "Usage", dataKey: "usage" },
              { header: "Balance", dataKey: "balance" }
            ],
            margin: { top: 180 }
          });
          window.open(doc.output("bloburl"), "_blank");
        });
        //doc.save("golfcart_adjstment.pdf");
        this.$Progress.finish();
      }
    }
  },
  created() {}
};
</script>
