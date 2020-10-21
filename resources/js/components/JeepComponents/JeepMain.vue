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
            <div class="col-md-8">
                <div class="card">
                    
                    <!-- <div class="card-header"></div> -->

                    <!-- <div class="card-body">
                    </div> -->
                </div>
                
            </div>
            <h1><center>Welcome to JEEP section :)</center></h1>
    </div>
</template>

<script>
export default {
	mounted() {},
};
</script>
