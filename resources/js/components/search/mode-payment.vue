<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="searchMode"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Search Mode</h4>
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
              placeholder="Search by Mode..."
            />
            <kendo-grid
              :height="200"
              :data-source="filter"
              :selectable="true"
              :sortable="true"
              v-on:change="onChange"
            >
              <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
              <kendo-grid-column :field="'name'" :title="'Mode'"></kendo-grid-column>
            </kendo-grid>
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
  data() {
    return {
      searching: "",
      golfcart: {},
      filter: {},
      datas: []
    };
  },
  methods: {
    loadMode() {
      axios.get("api/mode").then(({ data }) => {
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
    onChange: function(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      console.log(dataItem);
      this.$emit("golfcart_data", dataItem);
      $("#searchMode").modal("hide");
    }
  },
  mounted() {
    this.loadMode();
    Fire.$on("AfterCreate", () => {
      this.loadMode();
    });
  },
  created() {}
};
</script>
