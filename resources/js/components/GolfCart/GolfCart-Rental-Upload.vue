<template>
  <div class="container">
    <!-- modal  -->
    <div
      class="modal fade"
      id="uploadExcel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Upload Excel</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col">
              <strong>File:</strong>
              <b-form-group>
                <b-form-file
                  id="file-small"
                  size="sm"
                  ref="file-input"
                  v-model="form.fileupload"
                  v-on:change="onFileChange"
                ></b-form-file>
                <b-button v-if="countRows > 0" size="sm" variant="outline-danger" @click="clearFiles">
                  <i class="far fa-minus-square"></i> remove
                  selected file
                </b-button>
                <b-button v-if="countRows > 0" size="sm" variant="outline-success" @click="uploadFile">
                  <i class="far fa-plus-square"></i> Upload Excel File
                </b-button>
              </b-form-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal -->
  </div>
</template>

<script>
import XLSX from 'xlsx';
import moment from "moment";
// import $q from "$q";
export default {
	data() {
		return {
      uploads: null,
      fileUpload: null,
			countRows: 0,
			form: new Form({
				fileupload: null,
				files: null,
			}),
		};
	},
	methods: {
		onFileChange(e) {
      var files = e.target.files, f = files[0];
      if(f.name){
        this.file = e;
        this.countRows = 1;
      }else{
        this.countRows = 0;
      }
    },
    uploadFile(){
      var e = this.file;
      var files = e.target.files, f = files[0];
      var reader = new FileReader();
			reader.onload = function(e) {
				var data = new Uint8Array(e.target.result);
				var workbook = XLSX.read(data, { type: 'array' });
				let sheetName = workbook.SheetNames[0];
				/* DO SOMETHING WITH workbook HERE */
				let worksheet = workbook.Sheets[sheetName];

				//SAVE TO DATABASE
				var newArray = [];
        var upload = XLSX.utils.sheet_to_json(worksheet);
				var multipleUpload = [];
				upload.forEach(function(item) {
					var count = 0;
					var keys = [];
					for (var key in item) {
						count++;
						keys.push(key);
					}
					var start = 5;
					var diff = count - 5;
					if (diff > 0) {
						for (var i = 0; i < diff; i++) {
							var data = {
								trans_date: moment(ExcelDateToJSDate(item.Date)).format("YYYY-MM-DD"),
								golf_cart: keys[start],
								reference_no: item.Reference,
								debit_amount: item[keys[start]],
								description: item.Description,
								account_code: item.Account,
								x_month: moment(ExcelDateToJSDate(item.Date)).format("MMMM"),
								x_year: moment(ExcelDateToJSDate(item.Date)).format("YYYY"),
              };
              multipleUpload.push(data);
							start++;
						}
					}
        });
        function ExcelDateToJSDate(serial) {
          var utc_days = Math.floor(serial - 25569);
            var utc_value = utc_days * 86400;
            var date_info = new Date(utc_value * 1000);

            var fractional_day = serial - Math.floor(serial) + 0.0000001;

            var total_seconds = Math.floor(86400 * fractional_day);

            var seconds = total_seconds % 60;

            total_seconds -= seconds;

            var hours = Math.floor(total_seconds / (60 * 60));
            var minutes = Math.floor(total_seconds / 60) % 60;

            return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
        };
        this.uploads = multipleUpload;
				axios
				  .post("golfcart_rental/upload_excel", { files: this.uploads })
				  .then(res => {
				    swal.fire("SUCCESS!", "Your data has been uploaded.", "success");
				    window.location.reload();
				  })
				  .catch(err => {
				    toast.fire({
				      icon: "error",
				      title: "Upload Fail. Error Found"
				    });
				  });
			};

      var files = reader.readAsArrayBuffer(f);
    },
		clearFiles() {
      this.countRows = 0;
			this.$refs['file-input'].reset();
    },
	},
	mounted() {},
	created() {},
};
</script>
