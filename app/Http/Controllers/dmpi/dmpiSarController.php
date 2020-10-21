<?php

namespace App\Http\Controllers\dmpi;

use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use DB;
use App\Payroll;
use App\dmpi\dmpiSar;
use App\dmpi\dmpiSarDtl;
use Illuminate\Support\Facades\Auth;
use App\GlMaster;
use Mpdf\Mpdf;

class dmpiSarController extends Controller
{

    public function __construct() 
    {
        $this->middleware('auth:api')->except(['get_pdf_reacativate']);
        date_default_timezone_set('Asia/Manila');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) #header
    {
        $data = request()->validate([
            'locationID' => 'required',
            'periodCoveredFrom' => 'required',
            'periodCoveredTo' => 'required',
            'soaDate' => 'required',
            'controlNo' => 'required',
            'preparedBy' => 'required',
            'preparedByPos' => 'required',
            'verifiedBy' => 'required',
            'verifiedByPos' => 'required',
            'approvedBy' => 'required',
            'approvedByPos' => 'required',
            'notedBy' => 'required',
            'notedByPos' => 'required',
            'soaNumber' => 'required'
        ]);

        $sar = dmpiSar::create([
            'locationID' => $request['locationID'],
            'periodCoveredFrom' => $request['periodCoveredFrom'],
            'periodCoveredTo' => $request['periodCoveredTo'],
            'soaDate' => $request['soaDate'],
            'controlNo' => $request['controlNo'],
            'preparedBy' => $request['preparedBy'],
            'preparedByPosition' => $request['preparedByPos'],
            'verifiedBy' => $request['verifiedBy'],
            'verifiedByPosition' => $request['verifiedByPos'],
            'notedBy' => $request['notedBy'],
            'notedByPosition' => $request['notedByPos'],
            'approvedBy' => $request['approvedBy'],
            'approvedByPosition' => $request['approvedByPos'],
            'status' => 'active',
            'adminencodedById' => Auth::user()->id,
            'adminencodedby' => Auth::user()->name,
            'soaNumber' => $request['soaNumber']
        ]);

        return $sar->id;
    }

    public function storeDetail(Request $request){

        $payroll = new Payroll();
        $dt = $payroll->getBatchDayType($request['batchDaytypeID']);
        
        $data = request()->validate([ 
            'hdrid' => 'required',
            'batchDaytypeID' => 'required',
            'datePerformed' => 'required',
            'serviceNumber' => 'required',
            'activityID' => 'required',
            'rateID' => 'required',
            'poNumber' => 'required',
            'glID' => 'required',
            'costCenter' => 'required',
            'qty' => 'required',
            'unit' => 'required',
            'rate' => 'required',
            'amount' => 'required',
            'entrySheetNumber' => 'required',
            'activity' => 'required'
        ]);

        $gl = GlMaster::find($request['glID']);

        $sarDtl = dmpiSarDtl::create([
            'hdr_id' => $request['hdrid'],
            'datePerformed' => $request['datePerformed'],
            'serviceNumber' => $request['serviceNumber'],
            'activityID' => $request['activityID'],
            'rate_id' => $request['rateID'],
            'poNumber' => $request['poNumber'],
            'glID' => $request['glID'],
            'costCenter' => $request['costCenter'],
            'qty' => $request['qty'],
            'unit' => $request['unit'],
            'rate' => $request['rate'],
            'amount' => $request['amount'],
            'entrySheetNumber' => $request['entrySheetNumber'],
            'batchID' => $request['batchKey'],
            'batchNo' => $request['batchNumber'],
            'pmy' => $request['year'].sprintf('%02d',$request['month']),
            'period' => $request->input('period'),
            'batchDaytype' => $dt[0]->RateDayType,
            'batchDaytypeID' => $request['batchDaytypeID'],
            'gl' => $gl['gl'],
            'activity' => $request['activity']
        ]); 
        
        // return $sarDtl->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = request()->validate([ 
            'hdrid' => 'required',
            'batchDaytype' => 'required',
            'batchDaytypeID' => 'required',
            'datePerformed' => 'required',
            'serviceNumber' => 'required',
            'activityID' => 'required',
            'rateID' => 'required',
            'poNumber' => 'required',
            'glID' => 'required',
            'costCenter' => 'required',
            'qty' => 'required',
            'unit' => 'required',
            'rate' => 'required',
            'amount' => 'required',
            'entrySheetNumber' => 'required',
            'activity' => 'required'
        ]);

        dmpiSarDtl::where('id', $id)
            ->update([
                'hdr_id' => $request['hdrid'],
                'datePerformed' => $request['datePerformed'],
                'serviceNumber' => $request['serviceNumber'],
                'activityID' => $request['activityID'],
                'rate_id' => $request['rateID'],
                'poNumber' => $request['poNumber'],
                'glID' => $request['glID'],
                'costCenter' => $request['costCenter'],
                'qty' => $request['qty'],
                'unit' => $request['unit'],
                'rate' => $request['rate'],
                'amount' => number_format(number_format($request['rate'],3,'.','')*number_format($request['qty'],3,'.',''),3,'.',''), 
                'entrySheetNumber' => $request['entrySheetNumber'],
                'batchID' => $request['batchKey'],
                'batchNo' => $request['batchNumber'],
                'pmy' => $request['year'].sprintf('%02d',$request['month']),
                'period' => $request->input('period'),
                'batchDaytype' => $request['batchDaytype'],
                'batchDaytypeID' => $request['batchDaytypeID'],
                'gl' => $request['gl'],
                'activity' => $request['activity']
            ]);
         
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateHeader(Request $request)
    {
        $data = request()->validate([
            'locationID' => 'required',
            'periodCoveredFrom' => 'required',
            'periodCoveredTo' => 'required',
            'soaDate' => 'required',
            'controlNo' => 'required',
            'preparedBy' => 'required',
            'preparedByPos' => 'required',
            'verifiedBy' => 'required',
            'verifiedByPos' => 'required',
            'approvedBy' => 'required',
            'approvedByPos' => 'required',
            'notedBy' => 'required',
            'notedByPos' => 'required',
            'soaNumber' => 'required'
        ]);

        dmpiSar::where('id','=',$request['refID'])
                ->update([
                    'locationID' => $request['locationID'],
                    'periodCoveredFrom' => $request['periodCoveredFrom'],
                    'periodCoveredTo' => $request['periodCoveredTo'],
                    'soaDate' => $request['soaDate'],
                    'controlNo' => $request['controlNo'],
                    'preparedBy' => $request['preparedBy'],
                    'preparedByPosition' => $request['preparedByPos'],
                    'verifiedBy' => $request['verifiedBy'],
                    'verifiedByPosition' => $request['verifiedByPos'],
                    'notedBy' => $request['notedBy'],
                    'notedByPosition' => $request['notedByPos'],
                    'approvedBy' => $request['approvedBy'],
                    'approvedByPosition' => $request['approvedByPos'],
                    'status' => 'ACTIVE',
                    'adminencodedById' => Auth::user()->id,
                    'adminencodedby' => Auth::user()->name,
                    'soaNumber' => $request['soaNumber']
                ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteSarDetail(Request $request)
    {
        dmpiSarDtl::destroy($request['ids']);
        
    }

    public function getLocation()
    { 
        $payroll = new Payroll();
        $location = $payroll->getBatchLocation();
        return $location;
    }
    public function getLocationName(Request $request)
    { 
        $payroll = new Payroll();
        $location = $payroll->getLocationName($request['locationID']);
        return $location;
    }
    public function getActivity()
    {
        $payroll = new Payroll();
        $activity = $payroll->getSarActivity();
        return $activity;
    }
    public function getDetailsSAR(Request $request)
    {
        $data['hdr'] = dmpiSar::where('id','=',$request['id'])->get();
        $data['dtl'] = dmpiSarDtl::where('hdr_id','=',$request['id'])->get();

        return $data;
    }
    public function getSoaRate(Request $request)
    {
        $payroll = new Payroll();
        $location = $payroll->getBatchLocation();
        return $location;
    }

    public function getUnitsFromSarRate()
    {
        $payroll = new Payroll();
        $units = $payroll->getUnitsFromSarRate();
        return $units;
    }
    public function getRateSar(Request $request)
    {
        $payroll = new Payroll();
        $rate = $payroll->getRateSar($request['activityID'], $request['unit'], $request['batchDaytypeID']);

        return $rate;
    }
    public function searchSoa(Request $request)
    {

        $soaNumber = $request['soa'];

        $soa = dmpiSar::where('soaNumber', 'LIKE', "%$soaNumber%")
                        ->orwhere('soaDate', 'LIKE', "%$soaNumber%")
                        ->orwhere('adminencodedby', 'LIKE', "%$soaNumber%")
                        ->orwhere('created_at', 'LIKE', "%$soaNumber%")
                        ->orwhere('updated_at', 'LIKE', "%$soaNumber%")
                        ->get();
        return $soa;
      
    }
    public function getSarDtl(Request $request)
    {
        $data = dmpiSarDtl::select('*')
                ->where('hdr_id','=',$request['refID'])
                ->get();

        return $data;
    }
    public function getSelectedActivity(Request $request)
    {
        $payroll = new Payroll();
        $data = $payroll->getSelectedActivity($request['id']);
        return $data;
    }
    public function submit(Request $request)
    {
        $query = dmpiSar::where('id', $request['refID'])
                ->update(['status' => 'submitted'
                ]);
        return 'submitted';
    }
    public function confirm(Request $request)
    {
    
        $query = dmpiSar::where('id', $request['refID'])
                ->update(['status' => 'confirmed',
                          'adminConfirmedDate' => date('Y-m-d h:i:s'),
                          'adminConfirmedBy' => Auth::user()->name,
                          'adminConfirmedById'  => Auth::user()->id
                ]);
        return 'confirmed';
    }
    public function transmit(Request $request)
    {

        $query = dmpiSar::where('id', $request['refID'])
                ->update(['status' => 'transmitted',
                         'adminTransmittedDate' => date('Y-m-d h:i:s'),
                         'adminTransmittedBy' => Auth::user()->name,
                         'adminTransmittedById'  => Auth::user()->id
                ]);
        return 'transmitted';
    }
    
    public function reactivate(Request $request)
    {

        $data = request()->validate([
            'reasonofreactivation' => 'required',
        ]);
        
        $query = dmpiSar::where('id', $request['refID'])
                ->update([
                    'status' => 'active',
                    'reactivatedBy' => Auth::user()->name,
                    'reasonofreactivation' => $request['reasonofreactivation'],
                    'Datetime_reactivation' => date('Y-m-d h:i:s')
                ]);
        return 'active';
    }

    public function getUserMe(Request $request){
        return Auth::user();
    }

    public function get_pdf_reacativate(request $request)
    {
    
        $query=DB::connection('mysql')->select("SELECT hdr.soaNumber, hdr.Datetime_reactivation,hdr.reasonofreactivation, hdr.reactivatedBy,(SELECT SUM(dtl.qty) FROM dmpi_sar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS Qty,
        (SELECT SUM(dtl.rate) FROM dmpi_sar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS rate,
        (SELECT SUM(dtl.amount) FROM dmpi_sar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS total FROM dmpi_sars hdr  WHERE hdr.Datetime_reactivation BETWEEN
        '" . $request['from'] . " 00:00:00' AND '" . $request['to'] . " 23:59:59' AND hdr.`status` = 'ACTIVE' ORDER BY hdr.Datetime_reactivation asc");

        if (!$request['report']) {
            return $query ? response()->json(array('success' => true, 'message' => 'Generation Successful.')) : response()->json(array('success' => false, 'message' => 'No Data Found.'));
        } else {
            if (!$query) {
                $records = 'fail';
            } else {
                $records = $query;
            }
            $report_data = [
                'records' => $records,
                'preparedby' => $request['userMe'],
                'from' => $request['from'],
                'to' => $request['to']
            ];
            $html = view('billingRPTpdf.dmpiSar_ReactivateSOA', $report_data);
            $mpdf = new Mpdf([
                'default_font_size' => 9,
                'default_font' => 'tahoma',
            ]);
            $mpdf->useFixedNormalLineHeight = false;
            $mpdf->useFixedTextBaseline = false;
            $mpdf->adjustFontDescLineheight = 0.5;
            $mpdf->packTableData = true;
            $mpdf->shrink_tables_to_fit = 1;
            $mpdf->WriteHTML($html);
            $mpdf->Output('TOna.pdf', 'I');
        }
    }

   
}
