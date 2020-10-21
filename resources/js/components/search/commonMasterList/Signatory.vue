<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="searchSignatory"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Search Signatory</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body search-modal">
            <div>
                <input
                type="text"
                class="form-control form-control-sm mb-2"
                v-model="searching"
                v-on:keyup="search(searching)"
                placeholder="Search by Mode..."
                />
                <kendo-grid
                :height="400"
                :data-source="filter"
                :selectable="true"
                :sortable="true"
                v-on:change="onChange"
                :scrollable-endless="true"
                :filterable="true"
                >
                <kendo-grid-column :field="'id'" :title="'ID'"></kendo-grid-column>
                <kendo-grid-column :field="'name'" :title="'Name'"></kendo-grid-column>
                <kendo-grid-column :field="'position'" :title="'Position'"></kendo-grid-column>
                </kendo-grid>
            </div>
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
      data: {},
      filter: {},
      datas: []
    };
  },
  methods: {
    loadMode() {
      axios.get("/api/billingsignatoryGetForSearch").then(({ data }) => {
        this.data = data;
        this.filter = this.data;
        console.log(this.filter)
      });
    },
    search: function(e) {
      this.filter = this.data.filter(function(item) {
        return item.name.match(e);
      });
    },
    onChange: function(e) {
      var element = e.sender.select();
      var dataItem = e.sender.dataItem(element[0]);
      
      this.$emit("selectSign", dataItem);
      $("#searchSignatory").modal("hide");
    }
  },
  mounted() {
    this.loadMode();
  },

  created() {}
};
</script>
