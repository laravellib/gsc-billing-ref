<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="shortcut icon" href="{{asset('img/logo.png')}}">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/billing.css') }}" rel="stylesheet">

    {{-- theme  --}}
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="{{asset('theme/plugins/fontawesome-free/css/all.min.css')}}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('theme/dist/css/adminlte.min.css')}}">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

    @yield('link')
</head>
<body class="sidebar-mini text-sm">


<div class="wrapper" id="app">

<!-- Navbar -->
<nav class="main-header navbar navbar-expand text-sm navbar-dark navbar-teal">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
    </li>
    </ul>

    <!-- SEARCH FORM -->
    <div class="form-inline ml-3">
    <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" @keyup="searchit" v-model="search" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
        <button class="btn btn-navbar" type="submit" @click="searchit">
            <i class="fas fa-search"></i>
        </button>
        </div>
    </div>
    </div>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
            {{ __('Logout') }}
            <i class="fas fa-sign-out-alt"></i>
        </a>
        

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    </li>
    </ul>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
    <img src="{{asset('img/logo.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
            style="opacity: .8">
    <span class="brand-text font-weight-light">BILLING</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
        {{-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> --}}
        </div>
        <div class="info">
        <span  style="color:#fff !important;" class="d-block"> Logged in as :  <strong>{{ Auth::user()->name }}</strong> </span>
        </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-circle"></i>
                    <p>
                    Billing
                    <i class="right fas fa-angle-left"></i>
                    <span class="badge badge-info right">2</span>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                        DMPI
                        <i class="right fas fa-angle-left"></i>
                        <span class="badge badge-info right">2</span>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                        <router-link to="/dmpidar" tag="a" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>DAR</p>
                        </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dmpiSar" tag="a" class="nav-link"  active-class="active" exact>
                                <i class="far fa-dot-circle nav-icon"></i>
                                <p>SAR</p>
                            </router-link>
                        </li>
                    </ul>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                        Other Clients
                        <i class="right fas fa-angle-left"></i>
                        <span class="badge badge-info right">3</span>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                        <router-link to="/bcc" tag="a" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>BCC</p>
                        </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link to="/dearbc" tag="a" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>DEARBC</p>
                        </router-link>
                        </li>
                        <li class="nav-item">
                        <router-link to="/slers" tag="a" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>SLERS</p>
                        </router-link>
                        </li>
                    </ul>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                        Reports
                        <i class="right fas fa-angle-left"></i>
                        <span class="badge badge-info right">3</span>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                        <router-link to="/dmpiReports" tag="a" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>DMPI & Other Clients Reports</p>
                        </router-link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt brown"></i>
                <p>
                    Settings
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/signatory" tag="a" class="nav-link"  active-class="active" exact>
                    <i class="far fa-circle nav-icon"></i>
                    <p>Billing Signatories</p>
                    </router-link>
                </li>
                </ul>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                    <router-link to="/rateMasterFile" tag="a" class="nav-link"  active-class="active" exact>
                    <i class="far fa-circle nav-icon"></i>
                    <p>Rate Master File</p>
                    </router-link>
                </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/locationMaster" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Location Master</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/costCenterMaster" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Cost Center Master</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/glMaster" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>GL Master</p>
                        </router-link>
                    </li>
                </ul>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/activityMaster" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Activity Master</p>
                        </router-link>
                    </li>
                </ul>
            </li>

            <!-- REPORTS -->
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-user-alt brown"></i>
                <p>
                   ADMIN REPORTS
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                <li class="nav-item">
                <router-link to="/darreports" class="nav-link"  active-class="active" exact>
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p>DAR Reports</p>
                </router-link>
                </li>
                <li class="nav-item">
                <router-link to="/darreportsperpaystation" class="nav-link"  active-class="active" exact>
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p>DAR Per Pay Station</p>
                </router-link>
                </li>
                </ul>
            </li>
            <!-- END REPORTS -->
            <!--END NIQUE MENU -->

            <!-- TRUCKING -->
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-car-alt brown"></i>
                <p>
                   TRUCKING ENTRY
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/Masterfile-client" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Masterfile</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/golfcart" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>GolfCart</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/jeepmain" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Jeep</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/phbmain" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>PHB</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/liftruck-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Liftruck</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ovlmain" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>OVL</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/vanrental-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Van Rental</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/wingvan-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Wing Van</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <!-- END TRUCKING -->
			            <!-- DAVE MENU -->
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-chalkboard-teacher brown"></i>
                <p>
                    ALLOWANCE
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/allowance-employee-settings" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Employee Setting</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Details</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-soa-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Create SOA</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>View Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-dolly brown"></i>
                <p>
                    PPE
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/PPE-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>PPE List</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/PPE-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>PPE Entry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/PPE-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>PPE Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/PPE-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/PPE-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-burn brown"></i>
                <p>
                    FUEL
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/FUEL-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>FUEL List</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/FUEL-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>FUEL Entry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/FUEL-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>FUEL Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/FUEL-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/FUEL-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-shopping-basket brown"></i>
                <p>
                    SUPPLIES
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/SUP-list" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>SUP List</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SUP-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>SUP Entry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SUP-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>SUP Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SUP-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SUP-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-certificate brown"></i>
                <p>
                    INCENTIVES
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/Incentives-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Incentives Entry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Incentives-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Incentives Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Incentives-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Incentives-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-shapes brown"></i>
                <p>
                    OTHERS
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/Others-entry" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Others Entry</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Others-transmittal" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Others Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Others-payment" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Entry Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Others-ledger" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Ledger</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item has-treeview menu-close">
                <a href="#" class="nav-link">
                <i class="nav-icon fas fa-cog brown"></i>
                <p>
                    OTHERINS SETTINGS
                    <i class="right fas fa-angle-left"></i>
                </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/Mark-Up" class="nav-link"  active-class="active" exact>
                            <i class="fas fa-arrow-alt-circle-up nav-icon brown"></i>
                            <p>MARK-UP</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-employee-department" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Department</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-employee-gl" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>GL</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-employee-costcenter" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>CostCenter</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/allowance-employee-supplier" class="nav-link"  active-class="active" exact>
                            <i class="far fa-dot-circle nav-icon"></i>
                            <p>Supplier</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/Otherins-monitoring" class="nav-link"  active-class="active" exact>
                    <i class="fas fa-bullseye nav-icon brown"></i>
                    <p>OTHERINS MONITORING</p>
                </router-link>
            </li>
            <!-- END OF DAVE MENU -->
			<!-- BEGINNING OF KURT MENU -->
				<li class="nav-item has-treeview menu-close">
            <!-- <router-link to="/otherins" class="nav-link"> -->
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-building brown"></i>
                    <p>
                        CONSTRUCTIONS <i class="right fas fa-angle-left"></i>
                        <span class="badge badge-info right">8</span>
                    </p>
                </a>

                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="/jeepvehiclelogentry" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Construction Settings</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dashboardcons" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Dashboard/Monitoring</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/otherins" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Entry PO</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/expenses" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Entry Expenses Detail</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/collection" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Update Collection/Payment</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/soa" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Update Project Status/Create SOA</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/transmittalcons" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Transmittal</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/entrycheck" tag="a" class="nav-link"  active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Entry Check</p>
                        </router-link>
                    </li>
                </ul>
                
            </li>
			<!-- END OF KURT MENU -->
            <li class="nav-item">
                <router-link to="/userlist" class="nav-link"  active-class="active" exact>
                    <i class="fas fa-user-alt nav-icon brown"></i>
                        <p>AUTHORIZATION</p>
                </router-link>
            </li>
        </ul>
    </nav>
    <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
        <div class="col-sm-6">
            @yield('title')
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                @yield('path')
            </ol>
        </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
    <div class="container-fluid">
        <div class="row">
            @yield('body')
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
    <h5>Title</h5>
    <p>Sidebar content</p>
    </div>
</aside>
<!-- /.control-sidebar -->

<!-- Main Footer -->
<footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
    Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2019-2020 <a href="#">SCL</a>.</strong> All rights reserved.
</footer>
</div>


{{-- theme scripts --}}
<!-- jQuery -->
<script src="{{asset('theme/plugins/jquery/jquery.min.js')}}"></script>
<!-- Bootstrap 4 -->
<script src="{{asset('theme/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('theme/dist/js/adminlte.min.js')}}"></script>
@yield('script')

</body>
</html>
