<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="searchGolfcart"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Search Golf Cart</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control form-control-sm mb-2"
              v-model="searching"
              v-on:keyup="search(searching)"
              placeholder="Search by Golf Cart Name..."
            />
            <ag-grid-vue
              style="width: 465px; height: 300px;"
              class="ag-theme-balham"
              :columnDefs="columnDefs"
              :rowData="filter"
              @grid-ready="onGridReady"
              rowSelection="single"
              @rowClicked="onChange"
            ></ag-grid-vue>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              <i class="far fa-window-close"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      searching: "",
      golfcart: null,
      filter: null,
      datas: [],
      gridApi: null,
      columnApi: null,
      columnDefs: null
    };
  },
  methods: {
    loadGolfcart() {
      this.columnDefs = [
        {
          headerName: "Name",
          field: "name",
          sortable: true,
          filter: true,
          resizable: true,
          width: 225
        },
        {
          headerName: "Asset No",
          field: "asset_no",
          resizable: true,
          width: 225
        }
      ];
      axios.get("api/golfcart").then(({ data }) => {
        this.golfcart = data.data;
        this.filter = this.golfcart;
        console.log(this.filter);
      });
    },
    search: function(ev) {
      this.filter = this.golfcart.filter(function(item) {
        return item.name.match(ev);
      });
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    onChange: function(e) {
      const selectedRows = this.gridApi.getSelectedNodes();
      this.$emit("golfcart_data", selectedRows[0].data);
      $("#searchGolfcart").modal("hide");
    }
  },
  mounted() {
    this.loadGolfcart();
    Fire.$on("AfterCreate", () => {
      this.loadGolfcart();
    });
  },
  created() {}
};
</script>
