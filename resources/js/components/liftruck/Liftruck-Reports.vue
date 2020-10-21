<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">LIFT TRUCK SECTION</span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-list"
              >Lift Truck List</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-location"
              >Route</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-po"
              >Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-rental"
              >Rental</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-soa"
              >Create SOA</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-payment"
              >Payment Collection</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-ledger"
              >Ledger</router-link>
            </li>
            <li class="nav-item">
              <router-link
                tag="a"
                class="nav-link"
                active-class="active"
                exact
                to="/liftruck-reports"
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
                name="reference_no"
                v-model="reference_no"
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
import searchHeader from "./Liftruck-PO-Search.vue";
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
      po_no: ""
    };
  },
  methods: {
    clear() {
      this.report_data = 0;
    },
    searchPOHeader() {
      $("#searchLPO").modal("show");
    },
    get_header(data) {
      this.reference_no = data.doc_no;
      this.header_id = data.id;
      this.po_no = data.doc_no;
    },
    generate() {
      if (this.reference_no == "") {
        swal.fire("Select Reference #", "warning");
      } else {
        this.$Progress.start();
        axios.get("liftruck/dtl/" + this.header_id).then(({ data }) => {
          var doc = new jsPDF("p", "pt", "letter");
          var pageHeight = 650;
          var startsY = 10;

          doc.setProperties({
            title: "liftruck_po_monitoring.pdf"
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
          doc.text("LIFT TRUCK PO MONITORING", 306, 85, "center");
          doc.setFontType("regular");
          doc.addImage(Logo, "JPEG", 70, 40, 50, 50);
          doc.setLineWidth(1.5);
          doc.line(40, 94, 571, 94);
          doc.setLineWidth(2);
          doc.line(40, 97, 571, 97);
          //END HEADER
          doc.text(
            "Reference #: " + this.reference_no + "     PO #: " + this.po_no,
            40,
            150
          );
          doc.autoTable({
            columnStyles: {
              0: { halign: "center", fillColor: [0, 255, 0] },
              1: { halign: "center", fillColor: [255, 255, 0] },
              2: { halign: "center", fillColor: [0, 255, 255] },
              3: { halign: "center", fillColor: [0, 255, 0] },
              4: { halign: "center", fillColor: [255, 255, 0] },
              5: { halign: "center", fillColor: [0, 255, 255] },
              6: { halign: "center", fillColor: [0, 255, 0] },
              7: { halign: "center", fillColor: [255, 255, 0] }
            }, // European countries centered
            body: data.data,
            columns: [
              { header: "Location", dataKey: "location" },
              { header: "Mat Code", dataKey: "mat_code" },
              { header: "No. of Bags", dataKey: "no_bags" },
              { header: "Unit", dataKey: "unit" },
              {
                header: "Price/Bag/Hr.",
                dataKey: "price_per_bag"
              },
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
