<template>
    <div class="container">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#mlist">
                            Master File
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="mlist">
                            <li><router-link class="dropdown-item" to="/driverlist"><a>Driver List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/operatorlist"><a>Operator List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/vehiclelist"><a>JEEP Vehicle List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/vehicletype"><a>Vehicle Type List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/vehiclerate"><a>JEEP Rate List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/clientlist"><a>Client List</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/ratePercent"><a>Admin Rate Percentage</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#trans">
                            Transactions
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="trans">
                            <li><router-link class="dropdown-item" to="/jeepvehiclelogentry"><a>Jeep Vehicle Log Entry</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/createsoa"><a>Create Jeep SOA</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/soatransactions"><a>SOA Transaction</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-target="#report">
                            Jeep Reports
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="report">
                            <li><router-link class="dropdown-item" to="/reportlistJVL"><a>Standard Jeep Report</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/reportlistJVLPerJeep"><a>Jeepney's Vehicle Log Billing Report</a></router-link></li>
                            <li><router-link class="dropdown-item" to="/JeepSOATransmittal"><a>Jeepney's SOA Transmittal</a></router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h2>Admin Rate Percentage</h2>
                    </div>
                    <div class="card-body">
                        <input type="number" class="form-control" v-model="percent">
                    </div>
                    <div class="card-footer">
                        <div class="text-right">
                            <button class="btn btn-success btn-sm" @click="save()">Save</button>
                            <router-link class="btn btn-sm btn-primary" to="/jeepmain"><a>Cancel</a></router-link>
                        </div>
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
			percent: 0,
			id: '',
		};
	},
	methods: {
		save() {
			var data = { id: this.id, rate: this.percent };
			axios
				.post('api/saveJeepRate', data)
				.then(({ data }) => {
					if (data.id) {
						this.id = data.id;
					}
					toast.fire({
						icon: 'success',
						title: data.message,
					});
				})
				.catch(err => {
					toast.fire({
						icon: 'error',
						title: 'Nothing changed. Failed saving',
					});
				});
		},
		getRate() {
			axios
				.get('api/getJeepRate')
				.then(({ data }) => {
					if (data) {
						this.id = data.id;
						this.percent = data.rate;
					}
				})
				.catch(err => {
					toast.fire({
						icon: 'error',
						title: 'Not Successfully fetched data.',
					});
				});
		},
	},
	mounted() {
		this.getRate();
	},
};
</script>
