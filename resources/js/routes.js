export default [
    {
        path: "/signatory",
        component: () => import("./components/BillingSignatoriesComponent.vue")
    },
    {
        path: "/dmpidar",
        component: () => import("./components/DmpiDarComponent.vue")
    },
    {
        path: "/rateMasterFile",
        component: () => import("./components/RateMaster.vue")
    },
    {
        path: "/locationMaster",
        component: () => import("./components/Master/Location.vue")
    },
    {
        path: "/glMaster",
        component: () => import("./components/Master/Gl.vue")
    },
    {
        path: "/costCenterMaster",
        component: () => import("./components/Master/CostCenter.vue")
    },
    {
        path: "/activityMaster",
        component: () => import("./components/Master/activity.vue")
    },
    {
        path: "/dmpiSar",
        component: () => import("./components/dmpi/DmpiSarComponent.vue")
    },
    {
        path: "/dmpiReports",
        component: () => import("./components/reports/DmpiReportsComponent.vue")
    },
    { 
        path: "/dearbc",
        component: () => import("./components/other_clients/DearbcComponent.vue")
    },
    {
        path: "/bcc",
        component: () => import("./components/other_clients/BccComponent.vue")
    },
    {
        path: "/slers",
        component: () => import("./components/other_clients/SlersComponent.vue")
    },
    {
        path: "/SoaReactivatereport",
        component: () => import("./components/reports/SoaReactivatereport.vue")
    },
    {
        path: "/dailyBillingTransmittal",
        component: () => import("./components/reports/DailyBillingTransmittalComponent.vue")
    },

    {
        path: "/SoaStatusMonitoring",
        component: () => import("./components/reports/SoaStatusMonitoring.vue")
    },

    
    // bianca end 

    //NIQUE ROUTES
    {
        path: "/jeepmain",
        component: () => import("./components/JeepComponents/JeepMain.vue")
    },
    {
        path: "/driverlist",
        component: () => import("./components/JeepComponents/DriverList.vue")
    },
    {
        path: "/operatorlist",
        component: () => import("./components/JeepComponents/OperatorList.vue")
    },
    {
        path: "/vehiclelist",
        component: () => import("./components/JeepComponents/VehicleList.vue")
    },
    {
        path: "/jeepvehiclelogentry",
        component: () =>
            import("./components/JeepComponents/JeepVehicleLogComponent.vue")
    },
    {
        path: "/vehicletype",
        component: () =>
            import("./components/JeepComponents/VehicleTypeComponent.vue")
    },
    {
        path: "/vehiclerate",
        component: () =>
            import("./components/JeepComponents/VehicleRateComponent.vue")
    },
    {
        path: "/createsoa",
        component: () =>
            import("./components/JeepComponents/CreateSoaComponent.vue")
    },
    {
        path: "/clientlist",
        component: () => import("./components/JeepComponents/ClientList.vue")
    },
    {
        path: "/ratePercent",
        component: () => import("./components/JeepComponents/RatePercent.vue")
    },
    {
        path: "/reportlistJVL",
        component: () => import("./components/JeepComponents/ReportList.vue")
    },
    {
        path: "/reportlistJVLPerJeep",
        component: () =>
            import("./components/JeepComponents/ReportJVLPerJeep.vue")
    },
    {
        path: "/soatransactions",
        component: () => import("./components/JeepComponents/JeepSOAList.vue")
    },
    {
        path: "/JeepSOATransmittal",
        component: () => import("./components/JeepComponents/JeepSOATransmittal.vue")
    },
    //PHB
    {
        path: "/locationlist",
        component: () => import("./components/PHBComponents/LocationList.vue")
    },
    {
        path: "/phbmain",
        component: () => import("./components/PHBComponents/PHBMain.vue")
    },
    {
        path: "/phbvehiclelist",
        component: () => import("./components/PHBComponents/PHBVehicleList.vue")
    },
    {
        path: "/phbvehiclerate",
        component: () =>
            import("./components/PHBComponents/PHBVehicleRateComponent.vue")
    },
    {
        path: "/phbvehiclelogentry",
        component: () =>
            import("./components/PHBComponents/PHBVehicleLogComponent.vue")
    },
    {
        path: "/createphbsoa",
        component: () =>
            import("./components/PHBComponents/PHBCreateSoaComponent.vue")
    },
    {
        path: "/soaphbtransactions",
        component: () => import("./components/PHBComponents/PHBSOAList.vue")
    },
    {
        path: "/reportlistPHB",
        component: () => import("./components/PHBComponents/PHBReportList.vue")
    },
    {
        path: "/reportlistPHBPerJeep",
        component: () =>
            import("./components/PHBComponents/ReportPHBPerJeep.vue")
    },

    {
        path: "/darreports",
        component: () =>
            import("./components/AdminComponents/DARReportsComponent.vue")
    },
    {
        path: "/darreportsperpaystation",
        component: () =>
            import(
                "./components/AdminComponents/DARReportsPerPayStationComponent.vue"
            )
    },
    //END PHB

    //OVL
    {
        path: "/ovlmain",
        component: () => import("./components/OVLComponents/OVLMain.vue")
    },
    {
        path: "/ovlvehiclelist",
        component: () => import("./components/OVLComponents/OVLVehicleList.vue")
    },
    {
        path: "/ovlvehiclerate",
        component: () =>
            import("./components/OVLComponents/OVLVehicleRateComponent.vue")
    },
    {
        path: "/ovlvehiclelogentry",
        component: () =>
            import("./components/OVLComponents/OVLVehicleLogComponent.vue")
    },
    {
        path: "/createovlsoa",
        component: () =>
            import("./components/OVLComponents/OVLCreateSoaComponent.vue")
    },
    {
        path: "/soaovltransactions",
        component: () => import("./components/OVLComponents/OVLSOAList.vue")
    },
    {
        path: "/reportlistOVL",
        component: () => import("./components/OVLComponents/OVLReportList.vue")
    },
    //END PHB
    //END NIQUE

    {
        path: "/golfcart",
        component: () => import("./components/GolfCart/GolfCart.vue")
    },
    {
        path: "/golfcart-rental",
        component: () => import("./components/GolfCart/GolfCart-Rental.vue")
    },
    {
        path: "/golfcart-payment",
        component: () => import("./components/GolfCart/GolfCart-Payment.vue")
    },
    {
        path: "/golfcart-soa",
        component: () => import("./components/GolfCart/GolfCart-SOA.vue")
    },
    {
        path: "/golfcart-ledger",
        component: () => import("./components/GolfCart/GolfCart-Ledger.vue")
    },
    {
        path: "/golfcart-adjustment",
        component: () => import("./components/GolfCart/GolfCart-Adjustment.vue")
    },
    {
        path: "/golfcart-attachment",
        component: () => import("./components/GolfCart/GolfCart-Attachment.vue")
    },
    {
        path: "/masterfile-client",
        component: () => import("./components/masterfile/Client.vue")
    },
    {
        path: "/masterfile-vehicle",
        component: () => import("./components/masterfile/Vehicle-Type.vue")
    },
    {
        path: "/masterfile-payment",
        component: () => import("./components/masterfile/Payment-Mode.vue")
    },
    {
        path: "/wingvan-po",
        component: () => import("./components/wingvan/WingVan-PO.vue")
    },
    {
        path: "/wingvan-ledger",
        component: () => import("./components/wingvan/WingVan-Ledger.vue")
    },
    {
        path: "/wingvan-list",
        component: () => import("./components/wingvan/WingVan-List.vue")
    },
    {
        path: "/wingvan-rental",
        component: () => import("./components/wingvan/WingVan-Requisition.vue")
    },
    {
        path: "/wingvan-soa",
        component: () => import("./components/wingvan/WingVan-SOA.vue")
    },
    {
        path: "/wingvan-payment",
        component: () => import("./components/wingvan/WingVan-Payment.vue")
    },
    {
        path: "/wingvan-location",
        component: () => import("./components/wingvan/WingVan-Location.vue")
    },
    {
        path: "/wingvan-reports",
        component: () => import("./components/wingvan/WingVan-Reports.vue")
    },
    {
        path: "/vanrental-list",
        component: () => import("./components/vanrental/VanRental-List.vue")
    },
    {
        path: "/vanrental-po",
        component: () => import("./components/vanrental/VanRental-PO.vue")
    },
    {
        path: "/vanrental-rental",
        component: () =>
            import("./components/vanrental/VanRental-Requisition.vue")
    },
    {
        path: "/vanrental-soa",
        component: () => import("./components/vanrental/VanRental-SOA.vue")
    },
    {
        path: "/vanrental-payment",
        component: () => import("./components/vanrental/VanRental-Payment.vue")
    },
    {
        path: "/vanrental-location",
        component: () => import("./components/vanrental/VanRental-Location.vue")
    },
    {
        path: "/vanrental-reports",
        component: () => import("./components/vanrental/VanRental-Reports.vue")
    },
    {
        path: "/vanrental-ledger",
        component: () => import("./components/vanrental/VanRental-Ledger.vue")
    },
    {
        path: "/liftruck-list",
        component: () => import("./components/liftruck/Liftruck-List.vue")
    },
    {
        path: "/liftruck-po",
        component: () => import("./components/liftruck/Liftruck-PO.vue")
    },
    {
        path: "/liftruck-ledger",
        component: () => import("./components/liftruck/Liftruck-Ledger.vue")
    },
    {
        path: "/liftruck-soa",
        component: () => import("./components/liftruck/Liftruck-SOA.vue")
    },
    {
        path: "/liftruck-rental",
        component: () => import("./components/liftruck/Liftruck-Rental.vue")
    },
    {
        path: "/liftruck-payment",
        component: () => import("./components/liftruck/Liftruck-Payment.vue")
    },
    {
        path: "/liftruck-location",
        component: () => import("./components/liftruck/Liftruck-Location.vue")
    },
    {
        path: "/liftruck-reports",
        component: () => import("./components/liftruck/Liftruck-Reports.vue")
    },
    // DAVE ROUTES
    {
        path: "/allowance-employee-settings",
        component: () => import("./components/allowance/EmpSetting.vue")
    },
    {
        path: "/allowance-employee-department",
        component: () => import("./components/allowance/Department.vue")
    },
    {
        path: "/allowance-employee-gl",
        component: () => import("./components/allowance/GL.vue")
    },
    {
        path: "/allowance-employee-costcenter",
        component: () => import("./components/allowance/CostCenter.vue")
    },
    {
        path: "/allowance-employee-supplier",
        component: () => import("./components/allowance/Supplier.vue")
    },
    {
        path: "/allowance-entry",
        component: () => import("./components/allowance/EntryDetail.vue")
    },
    {
        path: "/allowance-soa-entry",
        component: () => import("./components/allowance/EntrySOA.vue")
    },
    {
        path: "/allowance-transmittal",
        component: () => import("./components/allowance/Transmittal.vue")
    },
    {
        path: "/allowance-ledger",
        component: () => import("./components/allowance/Ledger.vue")
    },
    {
        path: "/allowance-payment",
        component: () => import("./components/allowance/Payment.vue")
    },
    // PPE
    {
        path: "/PPE-list",
        component: () => import("./components/PPE/PPEList.vue")
    },
    {
        path: "/PPE-entry",
        component: () => import("./components/PPE/PPEEntry.vue")
    },
    {
        path: "/PPE-transmittal",
        component: () => import("./components/PPE/Transmittal.vue")
    },
    {
        path: "/PPE-payment",
        component: () => import("./components/PPE/Payment.vue")
    },
    {
        path: "/PPE-ledger",
        component: () => import("./components/PPE/Ledger.vue")
    },
    // FUEL
    {
        path: "/FUEL-list",
        component: () => import("./components/FUEL/FUELList.vue")
    },
    {
        path: "/FUEL-entry",
        component: () => import("./components/FUEL/FUELEntry.vue")
    },
    {
        path: "/FUEL-transmittal",
        component: () => import("./components/FUEL/Transmittal.vue")
    },
    {
        path: "/FUEL-payment",
        component: () => import("./components/FUEL/Payment.vue")
    },
    {
        path: "/FUEL-ledger",
        component: () => import("./components/FUEL/Ledger.vue")
    },
    // SUPPLIES
    {
        path: "/SUP-list",
        component: () => import("./components/SUPPLIES/SUPList.vue")
    },
    {
        path: "/SUP-entry",
        component: () => import("./components/SUPPLIES/SUPEntry.vue")
    },
    {
        path: "/SUP-transmittal",
        component: () => import("./components/SUPPLIES/Transmittal.vue")
    },
    {
        path: "/SUP-payment",
        component: () => import("./components/SUPPLIES/Payment.vue")
    },
    {
        path: "/SUP-ledger",
        component: () => import("./components/SUPPLIES/Ledger.vue")
    },
    // INCENTIVES
    {
        path: "/Incentives-entry",
        component: () => import("./components/Incentives/IncentivesEntry.vue")
    },
    {
        path: "/Incentives-transmittal",
        component: () => import("./components/Incentives/Transmittal.vue")
    },
    {
        path: "/Incentives-payment",
        component: () => import("./components/Incentives/Payment.vue")
    },
    {
        path: "/Incentives-ledger",
        component: () => import("./components/Incentives/Ledger.vue")
    },
    // OTHERS
    {
        path: "/Others-entry",
        component: () => import("./components/Others/OthersEntry.vue")
    },
    {
        path: "/Others-transmittal",
        component: () => import("./components/Others/Transmittal.vue")
    },
    {
        path: "/Others-payment",
        component: () => import("./components/Others/Payment.vue")
    },
    {
        path: "/Others-ledger",
        component: () => import("./components/Others/Ledger.vue")
    },
    // MONITORING
    {
        path: "/Otherins-monitoring",
        component: () => import("./components/MonitoringOtherIns/Monitoring.vue")
    },
    // MARK-UP
    {
        path: "/Mark-Up",
        component: () => import("./components/MarkUp.vue")
    },
    // END OF DAVE ROUTES
    //KURT ROUTES
    {
        path: "/otherins",
        component: require("./components/OtherInsComponent.vue").default
    },
    {
        path: "/expenses",
        component: require("./components/Expense.vue").default
    },
    { path: "/soa", component: require("./components/Soa.vue").default },
    {
        path: "/collection",
        component: require("./components/CollectionComponent.vue").default
    },
    {
        path: "/transmittalcons",
        component: require("./components/TransmittalConsComponent.vue").default
    },
    {
        path: "/entrycheck",
        component: require("./components/CheckEntryComponent.vue").default
    },
    {
        path: "/dashboardcons",
        component: require("./components/DashboardConComponent.vue").default
    },
    //KURT ROUTES END
    {
        path: "/userlist",
        component: require("./components/UserList.vue").default
    }
];
