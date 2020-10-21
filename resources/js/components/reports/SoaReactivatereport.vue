<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="card">

                <div class="card-header">
                    <h3 class="card-title">REACTIVATED SOA REPORT</h3>
                </div>
 
                <div class="card-body">
                    
                  
    
                    <div class="row mt-3">
                            <div class="col-3">
                            <label for="exampleInputEmail1">Period Covered From:</label>
                                <input
                                v-model="from"
                                type="date"
                                class="form-control form-control-sm mb-2"
                                placeholder="Search Rental..."
                                />
                            </div>
                            <div class="col-3">
                            <label for="exampleInputEmail1">Period Covered To:</label>
                                <input
                                v-model="to"
                                type="date"
                                class="form-control form-control-sm mb-2"
                                placeholder="Search Rental..."
                                />
                            </div>
                            <div class="col-6">
                                <button type="button" @click="printSar_ReactivatedSOA()"  class="btn btn-primary" style="margin-top: 25px;"><i class="fas fa-print"></i> &nbsp;Generate SAR Report</button>
                                <button type="button" @click="printDar_ReactivatedSOA()"  class="btn btn-success" style="margin-top: 25px;"><i class="fas fa-print"></i> Generate DAR Report</button>
                            </div>
                    </div>
                 
                </div>
                    
            </div>
        </div>

    </div>
</template>

<script>

import moment from "moment";

export default {
  components: {

  },
  data() {
    return {
        from: this.$root.formatDate(new Date()),
        to: this.$root.formatDate(new Date()),
        userMe: ""
    };
  },
  mounted(){
         //Get user
            axios
                .get("api/reactGetUser")
                .then(response => {
                    this.userMe = response.data['name'];
                })
                .catch(function(error) {
                    console.log(error);
                });
  },
  methods: {
     printSar_ReactivatedSOA() {
            axios
                .get("api/reactivatedSOA", { params: { from: this.from, to: this.to } })
                .then(response => {
                    if (response.data.success) {
                        window.open(
                            "api/reactivatedSOA?from=" + this.from + 
                            "&to=" + this.to + "&report=true" + "&userMe=" + this.userMe
                        );
                    } else {
                        return toast.fire({
                            icon: "warning",
                            title: "No data found."
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

    printDar_ReactivatedSOA() {
            axios
                .get("api/reactivatedSOA_DAR", { params: { from: this.from, to: this.to } })
                .then(response => {
                    if (response.data.success) {
                        window.open(
                            "api/reactivatedSOA_DAR?from=" + this.from + 
                            "&to=" + this.to + "&report=true" + "&userMe=" + this.userMe
                        );
                    } else {
                        return toast.fire({
                            icon: "warning",
                            title: "No data found."
                        });
                    }
                    this.$Progress.finish();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

  
  }, 
 
  created() {

  },
  
  computed: {
   
},
};
</script>
