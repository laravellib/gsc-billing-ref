<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/signatories','BillingSignatoriesController@view');

//OTHER

Route::get('api/golfcart_rental/pdf','API\GolfCartLedgerController@pdf');
Route::get('golfcart_rental/ledger','API\GolfCartLedgerController@ledger');
Route::get('golfcart_rental/soa_ledger/{id}','API\GolfCartLedgerController@soa_ledger');
Route::get('golfcart_rental/general_ledger/{id}','API\GolfCartLedgerController@general_ledger');
Route::post('golfcart_rental/upload_excel','API\GolfCartLedgerController@upload_excel');
Route::get('api/golfcart_adjustment/cancel/{id}','API\GolfCartAdjustmentController@cancel');
Route::get('soa/search/{from}/{to}','API\GolfCartLedgerController@search');
Route::get('soa/review/{from}/{to}/{status}','API\GolfCartSoaController@search');
Route::get('soa/reviewt/{from}/{to}','API\GolfCartSoaController@previewt');
Route::get('soa/tNo','API\GolfCartSoaController@transmittal_no');
Route::get('soa/cancel/{id}','API\GolfCartSoaController@cancel');
Route::get('soa/post/{id}','API\GolfCartSoaController@post');
Route::get('soa/reactivate/{id}','API\GolfCartSoaController@reactivate');
Route::get('soa/transmit/{id}','API\GolfCartSoaController@transmit');
Route::get('soa/payee/{id}','API\GolfCartSoaController@payee');
Route::get('soa/soa_number/{id}','API\GolfCartSoaController@soa_number');
Route::get('soa/collected/{id}','API\GolfCartSoaController@collected');
Route::get('soa/details/{id}','API\GolfCartSoaController@details');
Route::post('api/golfcart_adjustment/post','API\GolfCartAdjustmentController@post');
Route::post('golfcart_rental/payment_store','API\GolfCartLedgerController@payment_store');
Route::post('golfcart_soa/store_detail','API\GolfCartSoaController@store_detail');
Route::post('soa/create_transmittal','API\GolfCartSoaController@create_transmittal');
Route::post('jeep/create_transmittal','API\CreateSOAController@create_transmittal');
Route::get('search/client','API\SearchController@client_list');
Route::get('motorvehicle_list/{id}','API\GolfcartListController@motorvehicle_list');
Route::get('motorvehicle_rate_list/{id}','API\GolfcartListController@motorvehicle_rate_list');
//WingVan Route
  //Location
Route::get('wingvan/location_get_rate/{id}','API\WingVanLocationController@get_rate');
Route::post('wingvan/location_add_rate','API\WingVanLocationController@add_rate');
  //PO
Route::post('wingvan/store_hdr','API\WingVanController@po_header_add');
Route::post('wingvan/store_dtl','API\WingVanController@po_detail_add');
Route::get('wingvan/hdr','API\WingVanController@index');
Route::get('wingvan/dtl/{id}','API\WingVanController@get_detail');
Route::get('wingvan/post_po/{id}','API\WingVanController@post_po');
Route::get('wingvan/cancel_po/{id}','API\WingVanController@cancel_po');
Route::get('wingvan/ledger/{id}','API\WingVanController@ledger_balance');
Route::get('wingvan/all_dtl','API\WingVanController@get_all_detail');
 //Rental
Route::post('wingvan/req_client','API\WingVanReqController@store_client');
Route::post('wingvan/req_outsider','API\WingVanReqController@store_outsider');
Route::get('wingvan/get_client','API\WingVanReqController@get_requisition_dmpi');
Route::get('wingvan/get_req_outsider','API\WingVanReqController@get_requisition_outsider');
Route::put('wingvan/update_client/{id}','API\WingVanReqController@update_client');
Route::get('wingvan/req_post/{id}','API\WingVanReqController@req_post');
Route::get('wingvan/req_post_outsider/{id}','API\WingVanReqController@req_post_outsider');
Route::get('wreq_soa/search/{from}/{to}','API\WingVanReqController@search');
Route::get('wreq_soa/review/{from}/{to}','API\WingVanSoaController@search');
Route::get('wreq_soa/cancel/{id}','API\WingVanSoaController@cancel');
Route::get('wreq_soa/collected/{id}','API\WingVanSoaController@collected');
Route::get('wreq_soa/details/{id}','API\WingVanSoaController@details');
Route::get('wreq_soa/payment/{from}/{to}/{id}','API\WingVanSoaController@payment');
Route::post('wingvan/monthly','API\WingVanSoaController@store_monthly');
Route::post('wingvan/payment_store','API\WingVanController@payment_store');
//End WingVan Route

//VanRental Route
//Location
Route::get('vanrental/location_get_rate/{id}','API\VanRentalLocationController@get_rate');
Route::post('vanrental/location_add_rate','API\VanRentalLocationController@add_rate');
//Rental
Route::post('vanrental/req_client','API\VanRentaReqController@store_client');
Route::post('vanrental/req_outsider','API\VanRentaReqController@store_outsider');
Route::get('vanrental/get_client','API\VanRentaReqController@get_requisition_dmpi');
Route::get('vanrental/get_req_outsider','API\VanRentaReqController@get_requisition_outsider');
Route::put('vanrental/update_client/{id}','API\VanRentaReqController@update_client');
Route::get('vanrental/req_post/{id}','API\VanRentaReqController@req_post');
Route::get('vanrental/req_post_outsider/{id}','API\VanRentaReqController@req_post_outsider');
Route::get('req_soa/search/{from}/{to}','API\VanRentaReqController@search');
Route::get('req_soa/review/{from}/{to}','API\VanRentalSoaController@search');
Route::get('req_soa/cancel/{id}','API\VanRentalSoaController@cancel');
Route::get('req_soa/collected/{id}','API\VanRentalSoaController@collected');
Route::get('req_soa/details/{id}','API\VanRentalSoaController@details');
Route::get('req_soa/payment/{from}/{to}/{id}','API\VanRentalSoaController@payment');
Route::post('vanrental/monthly','API\VanRentalSoaController@store_monthly');
Route::post('vanrental/payment_store','API\VanRentalController@payment_store');

  //PO
Route::post('vanrental/store_hdr','API\VanRentalController@po_header_add');
Route::post('vanrental/store_dtl','API\VanRentalController@po_detail_add');
Route::get('vanrental/hdr','API\VanRentalController@index');
Route::get('vanrental/dtl/{id}','API\VanRentalController@get_detail');
Route::get('vanrental/all_dtl','API\VanRentalController@get_all_detail');
Route::get('vanrental/post_po/{id}','API\VanRentalController@post_po');
Route::get('vanrental/cancel_po/{id}','API\VanRentalController@cancel_po');
Route::get('vanrental/ledger/{id}','API\VanRentalController@ledger_balance');
//End VanRental Route

//Liftruck Route
  //Location
Route::get('liftruck/location_get_rate/{id}','API\LiftruckLocationController@get_rate');
Route::post('liftruck/location_add_rate','API\LiftruckLocationController@add_rate');
  //PO
Route::post('liftruck/store_hdr','API\LiftruckController@po_header_add');
Route::post('liftruck/store_dtl','API\LiftruckController@po_detail_add');
Route::get('liftruck/hdr','API\LiftruckController@index');
Route::get('liftruck/dtl/{id}','API\LiftruckController@get_detail');
Route::get('liftruck/post_po/{id}','API\LiftruckController@post_po');
Route::get('liftruck/cancel_po/{id}','API\LiftruckController@cancel_po');
Route::get('liftruck/ledger/{id}','API\LiftruckController@ledger_balance');
Route::get('liftruck/all_dtl','API\LiftruckController@get_all_detail');
//Rental
Route::post('liftruck/req_client','API\LiftruckRentalController@store_client');
Route::post('liftruck/req_outsider','API\LiftruckRentalController@store_outsider');
Route::get('liftruck/get_client','API\LiftruckRentalController@get_requisition_dmpi');
Route::get('liftruck/get_req_outsider','API\LiftruckRentalController@get_requisition_outsider');
Route::put('liftruck/update_client/{id}','API\LiftruckRentalController@update_client');
Route::get('liftruck/req_post/{id}','API\LiftruckRentalController@req_post');
Route::get('liftruck/req_post_outsider/{id}','API\LiftruckRentalController@req_post_outsider');
Route::get('rental_liftruck_soa/search/{from}/{to}','API\LiftruckRentalController@search');
 //SOA
Route::get('rental_liftruck_soa/review/{from}/{to}','API\LiftruckSoaController@search');
Route::get('rental_liftruck_soa/cancel/{id}','API\LiftruckSoaController@cancel');
Route::get('rental_liftruck_soa/collected/{id}','API\LiftruckSoaController@collected');
Route::get('rental_liftruck_soa/details/{id}','API\LiftruckSoaController@details');
Route::get('rental_liftruck_soa/payment/{from}/{to}/{id}','API\LiftruckSoaController@payment');
Route::post('liftruck/monthly','API\LiftruckSoaController@store_monthly');
Route::post('liftruck/payment_store','API\LiftruckSoaController@payment_store');
//End Liftruck Route

//OTHER
Route::get('{path}', 'HomeController@index')->where( 'path' , '([A-z\d\-\/_.]+)?' );