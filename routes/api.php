<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
#BIANCA DMPI AND SAR ENTRY UPLOADING & MASTERFILE
Route::resource('billingsignatory','BillingSignatoriesController');
Route::get('billingsignatoryGetForSearch','BillingSignatoriesController@getForSearch');
Route::get('signatorySearch','BillingSignatoriesController@search');
Route::get('getPosition', 'BillingSignatoriesController@getPostion');
Route::resource('dmpidar','DmpiDarController');
Route::get('dmpidargetbatch','DmpiDarController@getSoa');
Route::get('dmpidarsearch','DmpiDarController@searchSoa');
Route::get('loadDetailRates','DmpiDarController@loadDetailRates');
Route::get('getSignatories','BillingSignatoriesController@getAll');
Route::post('loadUploaded','DmpiDarController@loadUploaded');
Route::resource('ratemaster', 'RateMasterController');
Route::get('ratemasterAll', 'RateMasterController@getAll');
Route::get('ratemasterSearch','RateMasterController@search');
Route::get('getLocation','RateMasterController@getLocation');
Route::get('getGl','RateMasterController@getGl');
Route::get('getActivity','RateMasterController@getActivity');
Route::get('getCc','RateMasterController@getCc');
 
Route::get('getBatchInfo', 'DmpiDarController@getBatchInfo');
Route::get('checkifSoaExists', 'DmpiDarController@checkIfSoaExist');
Route::post('dmpidarConfirm','DmpiDarController@confirm');
Route::post('dmpidarSubmit','DmpiDarController@submit');
Route::post('dmpidarTransmit','DmpiDarController@transmit');
Route::post('dmpidarReactivate','DmpiDarController@reactivate');
Route::resource('location','LocationController');
Route::resource('activity','ActivityController');
Route::resource('gl','GlController'); 
Route::post('getSelectedGl', 'GlController@getSelectedGl');
Route::resource('costcenter','CostCenterController');
Route::resource('dmpiSar', 'dmpi\dmpiSarController');
Route::get('deleteSarDetail', 'dmpi\dmpiSarController@deleteSarDetail');
Route::post('updateHeader', 'dmpi\dmpiSarController@updateHeader');
Route::get('dmpiSarGetLocation','dmpi\dmpiSarController@getLocation');
Route::get('dmpiSarGetActivity','dmpi\dmpiSarController@getActivity');
Route::post('getHeaderDetail','dmpi\dmpiSarController@getDetailsSAR');
Route::post('saveDetail','dmpi\dmpiSarController@storeDetail');
Route::get('dmpisarsearch','dmpi\dmpiSarController@searchSoa');
Route::post('getSarDtl','dmpi\dmpiSarController@getSarDtl');
Route::post('getLocationName','dmpi\dmpiSarController@getLocationName');
Route::get('getUnitsFromSarRate','dmpi\dmpiSarController@getUnitsFromSarRate');
Route::post('getRateSar','dmpi\dmpiSarController@getRateSar'); 
Route::post('getSelectedActivity','dmpi\dmpiSarController@getSelectedActivity');
Route::get('SarSoastatusMonitoring', 'dmpi\dmpiSarController@get_pdf_SarSoaMonitoring');

Route::get('reactivatedSOA', 'dmpi\dmpiSarController@get_pdf_reacativate');
Route::get('reactGetUser', 'dmpi\dmpiSarController@getUserMe');
Route::get('reactivatedSOA_DAR', 'DmpiDarController@get_pdf_reacativate');
Route::get('SoastatusMonitoring', 'DmpiDarController@get_pdf_SOAStatusMonitoring');

Route::post('dmpiSarConfirm','dmpi\dmpiSarController@confirm');
Route::post('dmpiSarSubmit','dmpi\dmpiSarController@submit');
Route::post('dmpiSarTransmit','dmpi\dmpiSarController@transmit');
Route::post('dmpiSarReactivate','dmpi\dmpiSarController@reactivate');

#END BIANCA DMPI AND SAR ENTRY UPLOADING & MASTERFILE

#BIANCA OTHER CLIENTS
Route::post('getPayrollPeriodInfo', 'otherclient\BccControler@getPayrollPeriodInfo');
Route::resource('bccController', 'otherclient\BccControler');
#END BIANCA OTHER CLIENTS

#BIANCA REPORTS
Route::get('DmpiBillingTransmittalReportExport','Reports\DmpiBillingTransmittalReportController@export');
Route::get('DmpiBillingTransmittalReportPreview','Reports\DmpiBillingTransmittalReportController@previewReport');
Route::get('getCompanyInfo','PayrollController@getCompanyInfo');
#BIANCA END REPORTS

//NIQUE ROUTES HEHE :) 
Route::get('findDriver','API\DriverController@search');
Route::get('findOperator','API\OperatorController@search');
Route::get('findVehicle','API\VehicleController@search');
Route::get('findVehicleType','API\VehicleTypeController@search');
Route::get('findVehicleRate','API\VehicleRateController@search');
Route::get('findJVL','API\JeepVehicleLogController@search');
Route::get('findJVLRate','API\JeepVehicleLogController@search');
Route::get('findJVCP','API\JeepVehicleCollectionPaymentController@search');
Route::get('findDateFromTo','API\JeepVehicleLogController@searchDateFromTo');
Route::get('findClient','API\ClientController@search');
Route::get('findlocation','PHBControllers\LocationController@search');
Route::get('findPHBVehicle','PHBControllers\PHBVehicleController@search');
Route::get('getJeepRate','API\JeepVehicleLogController@get_rate');
Route::post('saveJeepRate','API\JeepVehicleLogController@save_rate');
Route::get('reportGCTransmittal','API\GolfCartSoaController@print_transmittal');
Route::get('reportJeepTransmittal','API\CreateSOAController@print_transmittal');
Route::get('golfcartTransmittal','API\GolfCartSoaController@search_transmittal');
Route::get('jeepTransmittal','API\CreateSOAController@search_transmittal');
Route::get('jTNo','API\CreateSOAController@transmittal_no');

Route::get('getvehiclerate','API\JeepVehicleLogController@getRate');
Route::get('getjvcp','API\JeepVehicleCollectionPaymentController@getJeepVehicleCollectionPayment');
Route::get('getphbvcp','PHBControllers\PHBVehicleCollectionPaymentController@getPHBVehicleCollectionPayment');
Route::get('getovcp','OVLControllers\OVLVehicleCollectionPaymentController@getOVLVehicleCollectionPayment');
Route::get('getjvlfilter','API\JeepVehicleLogController@getJVLFilter');
Route::get('getphbvlfilter','PHBControllers\PHBVehicleLogController@getJVLFilter');
Route::get('getovlvlfilter','OVLControllers\OVLVehicleLogController@getJVLFilter');
Route::get('getjvlbalanceamount','API\JeepVehicleLogController@getBalanceAmount');
Route::get('getphbvlbalanceamount','PHBControllers\PHBVehicleLogController@getBalanceAmount');
Route::get('getovlvlbalanceamount','OVLControllers\OVLVehicleLogController@getBalanceAmount');
Route::get('deletephbvcpdtl','PHBControllers\PHBVehicleCollectionPaymentController@deleteEntirePaymentDetail');
Route::get('deleteallphbdtl','PHBControllers\PHBVehicleLogController@deleteAllPHBDtl');
Route::get('deletephbdtl','PHBControllers\PHBVehicleLogController@deletePHBDtl');
Route::get('deleteovldtl','OVLControllers\OVLVehicleLogController@deleteOVLDtl');
Route::get('getjvl','API\JeepVehicleLogController@getAll');
Route::get('getdriver','API\DriverController@getAll');
Route::get('getclient','API\ClientController@getAll');
Route::get('getlocation','PHBControllers\LocationController@getAll');
Route::get('getcsoa','API\CreateSOAController@kuhaSOA');
Route::get('getcphbsoa','PHBControllers\CreatePHBSOAController@kuhaSOA');
Route::get('getcovlsoa','OVLControllers\CreateOVLSOAController@kuhaSOA');
Route::get('getcsoasoa','API\CreateSOAController@kuhaSOASOA');
Route::get('getcsoatransmitted','API\CreateSOAController@kuhaSOATransmittal');
Route::get('getcphbsoasoa','PHBControllers\CreatePHBSOAController@kuhaSOASOA');
Route::get('getcovlsoasoa','OVLControllers\CreateOVLSOAController@kuhaSOASOA');
Route::get('getcsoasum','API\CreateSOAController@kuhaSumSOA');
Route::get('getcphbsoasum','PHBControllers\CreatePHBSOAController@kuhaSumSOA');
Route::get('getcovlsoasum','OVLControllers\CreateOVLSOAController@kuhaSumSOA');
Route::get('updatejvlsoa','API\CreateSOAController@updateJVLSOASOA');
Route::get('updatephbvlsoa','PHBControllers\CreatePHBSOAController@updateJVLSOASOA');
Route::get('updateovlvlsoa','OVLControllers\CreateOVLSOAController@updateJVLSOASOA');
Route::get('getcsoalatestcreated','API\CreateSOAController@getSOALATESTCREATED');
Route::get('getcphbsoalatestcreated','PHBControllers\CreatePHBSOAController@getSOALATESTCREATED');
Route::get('getcovlsoalatestcreated','OVLControllers\CreateOVLSOAController@getSOALATESTCREATED');
Route::get('getcsoaforviewindiviual','API\CreateSOAController@getSOAForIndiviualView');
Route::get('getcphbsoaforviewindiviual','PHBControllers\CreatePHBSOAController@getSOAForIndiviualView');
Route::get('getcovlsoaforviewindiviual','OVLControllers\CreateOVLSOAController@getSOAForIndiviualView');
Route::get('updatestatussoa','API\CreateSOAController@updateSOAStatus');
Route::get('updatestatusphbsoa','PHBControllers\CreatePHBSOAController@updateSOAStatus');
Route::get('updatestatusovlsoa','OVLControllers\CreateOVLSOAController@updateSOAStatus');
Route::get('cancelstatussoa','API\CreateSOAController@cancelSOAStatus');
Route::get('cancelstatusphbsoa','PHBControllers\CreatePHBSOAController@cancelSOAStatus');
Route::get('cancelstatusovlsoa','OVLControllers\CreateOVLSOAController@cancelSOAStatus');
Route::get('updatestatussoamultiple','API\CreateSOAController@updateSOAStatusMultiple');
Route::get('updatestatussoaphbmultiple','PHBControllers\CreatePHBSOAController@updateSOAStatusMultiple');
Route::get('updatestatussoaovlmultiple','OVLControllers\CreateOVLSOAController@updateSOAStatusMultiple');
Route::get('getphbvl','PHBControllers\PHBVehicleLogController@getAll');
Route::get('getphbdtl','PHBControllers\PHBVehicleLogController@getDetail');
Route::get('getovldtl','OVLControllers\OVLVehicleLogController@getDetail');
Route::get('getovl','OVLControllers\OVLVehicleLogController@getAll');
Route::get('getphbvehiclerate','PHBControllers\PHBVehicleLogController@getRate');
Route::get('insertphbdtl','PHBControllers\PHBVehicleLogController@insertDetail');
Route::get('insertovldtl','OVLControllers\OVLVehicleLogController@insertDetail');
Route::get('getovlvehiclerate','OVLControllers\OVLVehicleLogController@getRate');

Route::get('getSearchDriver','API\DriverController@getAll');
Route::get('getSearchOperator','API\OperatorController@getAll');
Route::get('getSearchVehicle','API\VehicleController@getAll');
Route::get('getSearchVehicleType','API\VehicleTypeController@getAll');
Route::get('getSearchVehicleRate','API\VehicleRateController@getAll');
Route::get('getSearchPHBVehicleRate','PHBControllers\PHBVehicleRateController@getAll');
Route::get('getSearchOVLVehicleRate','OVLControllers\OVLVehicleRateController@getAll');
Route::get('getSearchJVL','API\JeepVehicleLogController@getAll');
Route::get('getSearchJVCP','API\JeepVehicleCollectionPaymentController@getAll');
Route::get('getSearchClient','API\ClientController@getAll');
Route::get('getSearchSOA','API\CreateSOAController@getAll');
Route::get('getSearchPHBSOA','PHBControllers\CreatePHBSOAController@getAll');
Route::get('getSearchPHBVehicle','PHBControllers\PHBVehicleController@getAll');
Route::get('getSearchOVLVehicle','OVLControllers\OVLVehicleController@getAll');
Route::get('getSearchOVLSOA','OVLControllers\CreateOVLSOAController@getAll');

Route::post('phbCollection','PHBControllers\PHBVehicleLogController@insertCollection');

Route::apiResources(['driver'=>'API\DriverController']);
Route::apiResources(['operator'=>'API\OperatorController']);
Route::apiResources(['vehicle'=>'API\VehicleController']);
Route::apiResources(['vehicletype'=>'API\VehicleTypeController']);
Route::apiResources(['vehiclerate'=>'API\VehicleRateController']);
Route::apiResources(['jvl'=>'API\JeepVehicleLogController']);
Route::apiResources(['phbvl'=>'PHBControllers\PHBVehicleLogController']);
Route::apiResources(['ovl'=>'OVLControllers\OVLVehicleLogController']);
Route::apiResources(['jvljvcp'=>'API\JVLJVCPController']);
Route::apiResources(['phbvlphbvcp'=>'PHBControllers\PHBVLPHBVCPController']);
Route::apiResources(['ovlvlovlvcp'=>'OVLControllers\OVLVLOVLVCPController']);
Route::apiResources(['jvlpaidtoposted'=>'API\JVLPaidToUnpaidController']);
Route::apiResources(['phbpaidtoposted'=>'PHBControllers\PHBPaidToUnpaidController']);
Route::apiResources(['ovlpaidtoposted'=>'OVLControllers\OVLPaidToUnpaidController']);
Route::apiResources(['jvcp'=>'API\JeepVehicleCollectionPaymentController']);
Route::apiResources(['phbvcp'=>'PHBControllers\PHBVehicleCollectionPaymentController']);
Route::apiResources(['ovcp'=>'OVLControllers\OVLVehicleCollectionPaymentController']);
Route::apiResources(['deleteentirepaymentdetail'=>'API\JeepVehicleCollectionPaymentBulkController']);
Route::apiResources(['phbdeleteentirepaymentdetail'=>'PHBControllers\PHBVehicleCollectionPaymentBulkController']);
Route::apiResources(['ovldeleteentirepaymentdetail'=>'OVLControllers\OVLVehicleCollectionPaymentBulkController']);
Route::apiResources(['csoa'=>'API\CreateSOAController']);
Route::apiResources(['cphbsoa'=>'PHBControllers\CreatePHBSOAController']);
Route::apiResources(['covlsoa'=>'OVLControllers\CreateOVLSOAController']);
Route::apiResources(['client'=>'API\ClientController']);
Route::apiResources(['phbvehicle'=>'PHBControllers\PHBVehicleController']);
Route::apiResources(['ovlvehicle'=>'OVLControllers\OVLVehicleController']);
Route::apiResources(['phbvehiclerate'=>'PHBControllers\PHBVehicleRateController']);
Route::apiResources(['ovlvehiclerate'=>'OVLControllers\OVLVehicleRateController']);
Route::apiResources(['fieldlocation'=>'PHBControllers\LocationController']);

Route::post('updatejsoa', 'API\CreateSOAController@updateJeepSOA');
Route::get('getPPMonth','AdminReportsController@getPMonth');
Route::get('getPPYear','AdminReportsController@getPYear');
Route::get('getDARReport','AdminReportsController@getDARReports');
Route::get('getPPPayStation','AdminReportsController@getPPayStation');
Route::get('getDARReportPayStation','AdminReportsController@getDARReportPerPayStation');
//END NIQUE ROUTES

//OTHERS

Route::resource('golfcart','API\GolfcartListController');
Route::resource('wingvan_location','API\WingvanLocationController');
Route::resource('liftruck_location','API\LiftruckLocationController');
Route::resource('vanrental_location','API\VanRentalLocationController');
Route::resource('rentalrate','API\VehicleRentalRateController');
Route::resource('golfcart_rental','API\GolfCartLedgerController');
Route::resource('golfcart_adjustment','API\GolfCartAdjustmentController');
Route::resource('mode','API\ModeController');
Route::resource('client','API\ClientController');
Route::resource('vehicle_type','API\MotorVehicleTypeController');
Route::resource('golfcart_soa_hdr','API\GolfCartSoaController');
Route::resource('vanrental_soa_hdr','API\VanRentalSoaController');
Route::resource('wingvan_soa_hdr','API\WingVanSoaController');
Route::resource('liftruck_soa_hdr','API\LiftruckSoaController');
Route::resource('users','API\UsersController');
// DAVE ROUTES
// Some Routes
Route::get('employeeList','DControllers\AllowanceController@getEmployee');
Route::get('periodList','DControllers\AllowanceController@getPeriod');
Route::get('paystationList','DControllers\AllowanceController@getPayStation');
Route::get('signatoryList','DControllers\AllowanceController@getSignatory');
Route::get('markup','DControllers\AllowanceController@getMarkUp');
Route::post('markupSave','DControllers\AllowanceController@saveMarkUp');
// allowance
Route::get('allowance','DControllers\AllowanceController@getAllowance');
Route::post('allowanceHeader','DControllers\AllowanceController@postHeader');
Route::post('allowanceDetail','DControllers\AllowanceController@postDetail');
Route::post('allowancePayment','DControllers\AllowanceController@postPayment');
Route::post('constructionPayment','DControllers\AllowanceController@postPaymentConstruction');
Route::post('allowanceEmpSetting','DControllers\AllowanceController@saveEmpSetting');
Route::post('allowanceDepartment','DControllers\AllowanceController@saveDepartment');
Route::post('allowanceCostcenter','DControllers\AllowanceController@saveCostcenter');
Route::post('allowanceGL','DControllers\AllowanceController@saveGL');
Route::post('allowanceSupplier','DControllers\AllowanceController@saveSupplier');
Route::post('allowanceCreateTransmittal','DControllers\AllowanceController@createTransmittal');
Route::post('allowanceCreateTransmittalCons','DControllers\AllowanceController@createTransmittalCons');
Route::post('allowanceRemoveTransmittal','DControllers\AllowanceController@removeTransmittal');
Route::delete('allowance/{id}', 'DControllers\AllowanceController@deleteAllowanceHeader');
Route::delete('allowanceDtl/{id}', 'DControllers\AllowanceController@deleteAllowanceDetail');
Route::delete('allowancePaymentDelete/{id}', 'DControllers\AllowanceController@deleteAllowancePayment');
Route::post('allowanceSOAHeader','DControllers\AllowanceController@postSOAHeader');
Route::post('allowancePostLedger','DControllers\AllowanceController@postLedger');
Route::delete('allowanceSOA/{id}', 'DControllers\AllowanceController@deleteAllowanceSOA');
Route::delete('allowanceEmpSettingDelete/{id}', 'DControllers\AllowanceController@deleteEmpSetting');
Route::delete('allowanceDepartmentDelete/{id}', 'DControllers\AllowanceController@deleteDepartment');
Route::delete('allowanceCostcenterDelete/{id}', 'DControllers\AllowanceController@allowanceCostcenterDelete');
Route::delete('allowanceGLDelete/{id}', 'DControllers\AllowanceController@allowanceGLDelete');
Route::delete('allowanceSupplierDelete/{id}', 'DControllers\AllowanceController@allowanceSupplierDelete');
Route::get('reportAllowance','DControllers\AllowanceController@generate_pdf');
Route::get('reportSOA','DControllers\AllowanceController@generate_pdf_soa');
Route::post('reportAllowanceSOASave','DControllers\AllowanceController@saveSoaReport');
Route::get('reportAllowanceTransmittal','DControllers\AllowanceController@generate_pdf_transmittal');
Route::get('reportConstructionTransmittal','DControllers\AllowanceController@generate_pdf_transmittalCons');
Route::get('reactivateSOADMPI', 'DControllers\AllowanceController@get_pdf_reacativate');
// PPE
Route::get('ppe','DControllers\PPEController@getPPE');
Route::get('reportPPE','DControllers\PPEController@generate_pdf');
Route::post('ppeList','DControllers\PPEController@savePPEList');
Route::post('ppeHdr','DControllers\PPEController@savePPEHdr');
Route::post('ppeDtl','DControllers\PPEController@savePPEDtl');
Route::post('ppePayment','DControllers\PPEController@postPayment');
Route::post('ppePostLedger','DControllers\PPEController@postLedger');
Route::delete('ppeList/{id}','DControllers\PPEController@deletePPEList');
Route::delete('ppeHdrDelete/{id}','DControllers\PPEController@deletePPEHDR');
Route::delete('ppeDtlDelete/{id}','DControllers\PPEController@deletePPEDTL');
Route::delete('ppePaymentDelete/{id}', 'DControllers\PPEController@deletePPEPayment');
// FUEL
Route::get('fuel','DControllers\FUELController@getFUEL');
Route::get('reportFUEL','DControllers\FUELController@generate_pdf');
Route::post('fuelList','DControllers\FUELController@saveFUELList');
Route::post('fuelHdr','DControllers\FUELController@saveFUELHdr');
Route::post('fuelDtl','DControllers\FUELController@saveFUELDtl');
Route::post('fuelPayment','DControllers\FUELController@postPayment');
Route::post('fuelPostLedger','DControllers\FUELController@postLedger');
Route::delete('fuelList/{id}','DControllers\FUELController@deleteFUELList');
Route::delete('fuelHdrDelete/{id}','DControllers\FUELController@deleteFUELHDR');
Route::delete('fuelDtlDelete/{id}','DControllers\FUELController@deleteFUELDTL');
Route::delete('fuelPaymentDelete/{id}', 'DControllers\FUELController@deleteFUELPayment');
// SUPPLIES
Route::get('sup','DControllers\SUPController@getSUP');
Route::get('reportSUP','DControllers\SUPController@generate_pdf');
Route::post('supList','DControllers\SUPController@saveSUPList');
Route::post('supHdr','DControllers\SUPController@saveSUPHdr');
Route::post('supDtl','DControllers\SUPController@saveSUPDtl');
Route::post('supPayment','DControllers\SUPController@postPayment');
Route::post('supPostLedger','DControllers\SUPController@postLedger');
Route::delete('supList/{id}','DControllers\SUPController@deleteSUPList');
Route::delete('supHdrDelete/{id}','DControllers\SUPController@deleteSUPHDR');
Route::delete('supDtlDelete/{id}','DControllers\SUPController@deleteSUPDTL');
Route::delete('supPaymentDelete/{id}', 'DControllers\SUPController@deleteSUPPayment');
// OTHERS
Route::get('others','DControllers\OthersController@getOthers');
Route::get('reportOthers','DControllers\OthersController@generate_pdf');
Route::post('othersHdr','DControllers\OthersController@saveOthersHdr');
Route::post('othersDtl','DControllers\OthersController@saveOthersDtl');
Route::post('othersPayment','DControllers\OthersController@postPayment');
Route::post('othersPostLedger','DControllers\OthersController@postLedger');
Route::delete('othersHdrDelete/{id}','DControllers\OthersController@deleteOthersHDR');
Route::delete('othersDtlDelete/{id}','DControllers\OthersController@deleteOthersDTL');
Route::delete('othersPaymentDelete/{id}', 'DControllers\OthersController@deleteOthersPayment');
// OTHERS
Route::get('incentives','DControllers\IncentivesController@getIncentives');
Route::get('reportIncentives','DControllers\IncentivesController@generate_pdf');
Route::post('incentivesHdr','DControllers\IncentivesController@saveIncentivesHdr');
Route::post('incentivesDtl','DControllers\IncentivesController@saveIncentivesDtl');
Route::post('incentivesPayment','DControllers\IncentivesController@postPayment');
Route::post('incentivesPostLedger','DControllers\IncentivesController@postLedger');
Route::delete('incentivesHdrDelete/{id}','DControllers\IncentivesController@deleteIncentivesHDR');
Route::delete('incentivesDtlDelete/{id}','DControllers\IncentivesController@deleteIncentivesDTL');
Route::delete('incentivesPaymentDelete/{id}', 'DControllers\IncentivesController@deleteIncentivesPayment');

// END DAVE ROUTES
// <!--------------------KURT ROUTES---------------------!>
// Monitoring
Route::get('monitoring','API\MonitoringController@getMonitoring');
Route::get('projectdetail','API\MonitoringController@generate_pdf');
Route::get('projectcost','API\MonitoringController@generate_pdf_direct');
Route::get('projectsumall','API\MonitoringController@generate_pdf_sumall');
// <!--------------------PO ROUTES---------------------!>
// Route::post(['po'=>'API\PoController']);
Route::post('po','API\PoController@postHeader');
Route::get('poget','API\PoController@getPohdr');
Route::get('uom','API\PoController@getuom');
Route::resource('dtl','API\PoController');
Route::post('dtl','API\PoController@dtl');
Route::delete('poDtldelete/{id}','API\PoController@deletePoDtl');
Route::get('getdtl','API\PoController@getdtl');
Route::get('getsum','API\PoController@getsum');
Route::post('createupdatedtl','API\PoController@postDetail');
// <!--------------------END PO ROUTES---------------------!>
// <!--------------------EXPENSE ROUTES---------------------!>
Route::get('expget','API\ExpenseController@getexpense');
Route::get('supget','API\ExpenseController@getsupplier');
Route::get('refget','API\ExpenseController@getreference');
Route::get('refoverheadget','API\ExpenseController@getoverheadref');
Route::get('matdtlget','API\ExpenseController@getmaterialdtl');
Route::get('ovrheaddtlget','API\ExpenseController@getoverheaddtl');
Route::get('exphdrget','API\ExpenseHdrController@getexpensehdr');
Route::get('poexpget','API\ExpenseController@getpoexpense');
Route::get('pobalance','API\ExpenseController@getpobalance');
Route::post('createupdateexpense','API\ExpenseController@postExpense');
Route::post('createexpensehdr','API\ExpenseController@postMaterialshdr');
Route::post('createexpensedtl','API\ExpenseController@postMaterialsdtl');
Route::post('createoverheadhdr','API\ExpenseController@postOverheadhdr');
Route::post('createoverheaddtl','API\ExpenseController@postOverheaddtl');
Route::delete('podelete/{id}','API\ExpenseController@deletePoExpense');
// <!--------------------END EXPENSE ROUTES---------------------!>
// <!--------------------SOA ROUTES---------------------!>
Route::get('soaget','API\SoaController@getsoa');
Route::get('signatoriesget','API\SoaController@getsignatories');
Route::get('generatesoa','API\SoaController@generate_pdf');
Route::get('clientget','API\SoaController@getclient');
Route::post('createSoa','API\SoaController@postSoa');
Route::delete('soadelete/{id}','API\SoaController@deletePoExpense');
// <!--------------------END SOA ROUTES---------------------!>
Route::get('getCollection','API\CollectionController@getcollection');
Route::get('getpercent','API\CollectionController@getpercentage');
Route::post('createCollection','API\CollectionController@postCollection');
Route::delete('collectiondelete/{id}','API\CollectionController@deleteCollection');
// <!--------------------END OF KURT---------------------!>

