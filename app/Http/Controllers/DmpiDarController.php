<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payroll;
use App\DmpiDarHdr;
use App\DmpiDarDtl; 
use App\DmpiDarRate;
use App\RateMaster;
use App\DmpiDarWarning;
use Illuminate\Support\Facades\Auth;
use DB;
use App\dmpi\dmpiSar;
use Mpdf\Mpdf;

class DmpiDarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function __construct() 
    {
        // $this->middleware('auth:api')->only(['store']);
        $this->middleware('auth:api')->except(['get_pdf_reacativate','get_pdf_SOAStatusMonitoring']);
        date_default_timezone_set('Asia/Manila');
    }

    public function index()
    {
        // month
        $months = array();
        for ($i = 0; $i < 12; $i++) {
            $timestamp = mktime(0, 0, 0, date('n') - $i, 1);
            $months[date('n', $timestamp)] = date('F', $timestamp);
        }

        // year
        $year = array();
        for ($i=0; $i < 3; $i++){
            $year[$i] = (date("Y")-2) + $i;
        }
        
        // period
        $period = array('1','2');

    }

    public function getSoa(Request $request)
    {
        $phase = $request->input('period');
        $period = $request->input('year').sprintf('%02d',$request->input('month'));
        $payroll = new Payroll();
        $batches = $payroll->getBatch($period,$phase, $request['isVolume']);
        return $batches;
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
    public function store(Request $request)
    {
        $createOrUpdateHdrId = 0;
        foreach($request['darUploadTotals'] as $key){
            $gtSt_ = $key['gtSt'];
            $gtOt_ = $key['gtOt'];
            $gtNd_ = $key['gtNd'];
            $gtNdot_ = $key['gtNdot'];
        }

        if($request['refId'] == ""){

            // save hdr 
            $hdr = DmpiDarHdr::create([
                'batcIDLink' => $request['batchKey'],
                'batchNo' => $request['batchNumber'],
                'pmy' => $request['year'].sprintf('%02d',$request['month']),
                'period' => $request['period'],
                'soaNumber' => $request['soaNumber'],
                'soaDate' => $request['soaDate'],
                'preparedBy' => $request['preparedBy'],
                'preparedByPosition' => $request['preparedByPos'],
                'confirmedBy' => $request['confirmedBy'],
                'confirmedByPosition' => $request['confirmedByPos'],
                'approvedBy' => $request['approvedBy'],
                'approvedByPosition' => $request['approvedByPos'],
                'adminencodedById' => Auth::user()->id, 
                'adminencodedby' => Auth::user()->name,
                'adminConfirmedById' => '',
                'adminConfirmedBy' => '',
                'adminTransmittedById' => '',
                'adminTransmittedBy' => '',
                'gtSt' => $gtSt_,
                'gtOt' => $gtOt_,
                'gtNdot' => $gtNdot_,
                'gtNd' => $gtNd_,
                'status' => 'active',
                'isClubhouse' => $request['isClubhouse'],
                'dateTransmittedToOperation' => $request['dateTransmittedToOperation'],
                'dateSignedBySupervisor' => $request['dateSignedBySupervisor'],
                'dateSignedByManager' => $request['dateSignedByManager'],
                'dateReceivedByDataController' => $request['dateReceivedbyDataController'],
                'dateReceivedByBillingClerk' => $request['dateReceivedbyBillingClerk'],
                'DateReceivedByDmpiAccount' => $request['dateReceivedbyDmpiAccount'],
                'TransmittalNumber' => $request['transmittalNumber']
            ]);

            $createOrUpdateHdrId = $hdr->id;
        }else{

            # update hdr
            DB::table('dmpi_dar_hdrs')
                ->where('id', $request['refId'])
                ->update(['batcIDLink' => $request['batchKey'],
                        'batchNo' => $request['batchNumber'],
                        'pmy' => $request['year'].sprintf('%02d',$request['month']),
                        'period'  => $request['period'],
                        'soaNumber' => $request['soaNumber'],
                        'soaDate' => $request['soaDate'],
                        'preparedBy' => $request['preparedBy'],
                        'preparedByPosition' => $request['preparedByPos'],
                        'confirmedBy' => $request['confirmedBy'],
                        'confirmedByPosition' => $request['confirmedByPos'],
                        'approvedBy' => $request['approvedBy'],
                        'approvedByPosition' => $request['approvedByPos'],
                        'adminencodedById' => Auth::user()->id,
                        'adminencodedby' => Auth::user()->name,
                        'adminConfirmedById' => '',
                        'adminConfirmedBy' => '',
                        'adminTransmittedById' => '',
                        'adminTransmittedBy' => '',
                        'isClubhouse' => $request['isClubhouse'],
                        'dateTransmittedToOperation' => $request['dateTransmittedToOperation'],
                        'dateSignedBySupervisor' => $request['dateSignedBySupervisor'],
                        'dateSignedByManager' => $request['dateSignedByManager'],
                        'dateReceivedByDataController' => $request['dateReceivedbyDataController'],
                        'dateReceivedByBillingClerk' => $request['dateReceivedbyBillingClerk'],
                        'DateReceivedByDmpiAccount' => $request['dateReceivedbyDmpiAccount'],
                        'TransmittalNumber' => $request['transmittalNumber']
                ]);

            # delete details 
            DB::table('dmpi_dar_dtls')->where('hdr_id', '=', $request['refId'])->delete();

            # delete warnings
            DB::table('dmpi_dar_warnings')->where('hdr_id', '=', $request['refId'])->delete();

            $createOrUpdateHdrId = $request['refId'];
        }
        

        // save dtl
        $details = array();
        foreach($request['darUploadedDtl'] as $key){
            array_push($details, array(
                'hdr_id' => $createOrUpdateHdrId,
                'rate_id' => $key['rate_id'],
                'activity' => $key['activity'],
                'field' => $key['field'],
                'accomplished' => $key['accomplished'],
                'gl' => $key['gl'],
                'cc' => $key['cc'],
                'rdst' => number_format(is_numeric(str_replace(",","",$key['rdst'])) ? str_replace(",","",$key['rdst']) : 0,2,'.',''),
                'rdot' => number_format(is_numeric(str_replace(",","",$key['rdot'])) ? str_replace(",","",$key['rdot']) : 0,2,'.',''),
                'rdnd' => number_format(is_numeric(str_replace(",","",$key['rdnd'])) ? str_replace(",","",$key['rdnd']) : 0,2,'.',''),
                'rdndot' => number_format(is_numeric(str_replace(",","",$key['rdndot'])) ? str_replace(",","",$key['rdndot']) : 0,2,'.',''),
                'sholst' => number_format(is_numeric(str_replace(",","",$key['sholst'])) ? str_replace(",","",$key['sholst']) : 0,2,'.',''),
                'sholot' => number_format(is_numeric(str_replace(",","",$key['sholot'])) ? str_replace(",","",$key['sholot']) : 0,2,'.',''),
                'sholnd' => number_format(is_numeric(str_replace(",","",$key['sholnd'])) ? str_replace(",","",$key['sholnd']) : 0,2,'.',''),
                'sholndot' => number_format(is_numeric(str_replace(",","",$key['sholndot'])) ? str_replace(",","",$key['sholndot']) : 0,2,'.',''),
                'shrdst' => number_format(is_numeric(str_replace(",","",$key['shrdst'])) ? str_replace(",","",$key['shrdst']) : 0,2,'.',''),
                'shrdot' => number_format(is_numeric(str_replace(",","",$key['shrdot'])) ? str_replace(",","",$key['shrdot']) : 0,2,'.',''),
                'shrdnd' => number_format(is_numeric(str_replace(",","",$key['shrdnd'])) ? str_replace(",","",$key['shrdnd']) : 0,2,'.',''),
                'shrdndot' => number_format(is_numeric(str_replace(",","",$key['shrdndot'])) ? str_replace(",","",$key['shrdndot']) : 0,2,'.',''),
                'rholst' => number_format(is_numeric(str_replace(",","",$key['rholst'])) ? str_replace(",","",$key['rholst']) : 0,2,'.',''),
                'rholot' => number_format(is_numeric(str_replace(",","",$key['rholot'])) ? str_replace(",","",$key['rholot']) : 0,2,'.',''),
                'rholnd' => number_format(is_numeric(str_replace(",","",$key['rholnd'])) ? str_replace(",","",$key['rholnd']) : 0,2,'.',''),
                'rholndot' => number_format(is_numeric(str_replace(",","",$key['rholndot'])) ? str_replace(",","",$key['rholndot']) : 0,2,'.',''),
                'rhrdst' => number_format(is_numeric(str_replace(",","",$key['rhrdst'])) ? str_replace(",","",$key['rhrdst']) : 0,2,'.',''),
                'rhrdot' => number_format(is_numeric(str_replace(",","",$key['rhrdot'])) ? str_replace(",","",$key['rhrdot']) : 0,2,'.',''),
                'rhrdnd' => number_format(is_numeric(str_replace(",","",$key['rhrdnd'])) ? str_replace(",","",$key['rhrdnd']) : 0,2,'.',''),
                'rhrdndot' => number_format(is_numeric(str_replace(",","",$key['rhrdndot'])) ? str_replace(",","",$key['rhrdndot']) : 0,2,'.',''),
                'totalst' => number_format(is_numeric(str_replace(",","",$key['totalst'])) ? str_replace(",","",$key['totalst']) : 0,2,'.',''),
                'totalot' => number_format(is_numeric(str_replace(",","",$key['totalot'])) ? str_replace(",","",$key['totalot']) : 0,2,'.',''),
                'totalnd' => number_format(is_numeric(str_replace(",","",$key['totalnd'])) ? str_replace(",","",$key['totalnd']) : 0,2,'.',''),
                'totalndot' => number_format(is_numeric(str_replace(",","",$key['totalndot'])) ? str_replace(",","",$key['totalndot']) : 0,2,'.',''),
                'totalAmt' => number_format(is_numeric(str_replace(",","",$key['totalAmt'])) ? str_replace(",","",$key['totalAmt']) : 0,2,'.',''),
                'c_totalst' => number_format(is_numeric(str_replace(",","",$key['c_totalst'])) ? str_replace(",","",$key['c_totalst']) : 0,2,'.',''),
                'c_totalnd' => number_format(is_numeric(str_replace(",","",$key['c_totalnd'])) ? str_replace(",","",$key['c_totalnd']) : 0,2,'.',''),
                'c_totalndot' => number_format(is_numeric(str_replace(",","",$key['c_totalndot'])) ? str_replace(",","",$key['c_totalndot']) : 0,2,'.',''),
                'c_totalot' => number_format(is_numeric(str_replace(",","",$key['c_totalot'])) ? str_replace(",","",$key['c_totalot']) : 0,2,'.',''),
                'c_totalAmt' => number_format(is_numeric(str_replace(",","",$key['c_totalAmt'])) ? str_replace(",","",$key['c_totalAmt']) : 0,2,'.',''),
                'headCount' => number_format(is_numeric(str_replace(",","",$key['headCount'])) ? str_replace(",","",$key['headCount']) : 0,2,'.',''),
            ));
        }
        DmpiDarDtl::insert($details);

        // all warning 
        $warnings = array();
        foreach($request['allWarnings'] as $key){
            array_push($warnings, array(
                'hdr_id' =>  $createOrUpdateHdrId,
                'title' => $key['error'],
                'description' => $key['description'],
                'remarks' => ''
            ));
        }
        DmpiDarWarning::insert($warnings);

    }

    public function loadUploaded(Request $request)
    {
        $upload=$request->file('file');
        $filePath=$upload->getRealPath();

        $file=fopen($filePath, 'r');

        $dataDtl = array();
        $dataRate = array();
        $count = 0;
        $dayTypeRate = '';
        $gtSt = 0;
        $gtOt = 0;
        $gtNd = 0;
        $gtNdot = 0;
        $gtTotal = 0;
        $gtHc = 0;
        $totals = array();

        // from upload to dtl
        while($columns=fgetcsv($file))
        {
            $count++;
            $checking = '';
            $rateMatchedID = '';
            if ($count >= 10){
                if ($columns[0] != "" & is_numeric($columns[0])){
                    
                    // 'query check the rate if it matches with masterfile'
                    $match = RateMaster::join('acivity_masters','acivity_masters.id','=','rate_masters.activityID')
                                    ->join('location_masters','location_masters.id','=','rate_masters.locationID')
                                    ->join('gl_masters','gl_masters.id','=','rate_masters.glID')
                                    ->join('cost_center_masters','cost_center_masters.id','=','rate_masters.costCenterID')
                                    ->select('rate_masters.*')
                                    ->where([
                                ['activity','=', $columns[1]],
                                ['costcenter','=', $columns[5]],
                                ['gl','=', $columns[4]], 
                                ['location','=', $request['batch']],
                                ['status','=', 'active'],
                                ['rd_st','=',number_format($columns[26], 3, '.', ',')],
                                ['rd_ot','=',number_format($columns[27], 3, '.', ',')],
                                ['rd_nd','=',number_format($columns[28], 3, '.', ',')],
                                ['rd_ndot','=',number_format($columns[29], 3, '.', ',')],
                                ['shol_st','=',number_format($columns[30], 3, '.', ',')],
                                ['shol_ot','=',number_format($columns[31], 3, '.', ',')],
                                ['shol_nd','=',number_format($columns[32], 3, '.', ',')],
                                ['shol_ndot','=',number_format($columns[33], 3, '.', ',')],
                                ['shrd_st','=',number_format($columns[34], 3, '.', ',')],
                                ['shrd_ot','=',number_format($columns[35], 3, '.', ',')],
                                ['shrd_nd','=',number_format($columns[36], 3, '.', ',')],
                                ['shrd_ndot','=',number_format($columns[37], 3, '.', ',')],
                                ['rhol_st','=',number_format($columns[38], 3, '.', ',')],
                                ['rhol_ot','=',number_format($columns[39], 3, '.', ',')],
                                ['rhol_nd','=',number_format($columns[40], 3, '.', ',')],
                                ['rhol_ndot','=',number_format($columns[41], 3, '.', ',')],
                                ['rhrd_st','=',number_format($columns[42], 3, '.', ',')],
                                ['rhrd_ot','=',number_format($columns[43], 3, '.', ',')],
                                ['rhrd_nd','=',number_format($columns[44], 3, '.', ',')],
                                ['rhrd_ndot','=',number_format($columns[45], 3, '.', ',')],
                            ])
                            ->get();
                    
                    
                    if ($match->isEmpty()){
                        $checking = 'false';
                    }else{
                        $checking = 'true';
                        $rateMatchedID = $match[0]->id;
                    }

                    #save the rates
                    array_push($dataRate, array(
                        "activity"=>$columns[1],
                        "gl"=>$columns[4],
                        "cc"=>$columns[5],
                        "rd_st"=>number_format($columns[26], 3, '.', ','),
                        "rd_ot"=>number_format($columns[27], 3, '.', ','),
                        "rd_nd"=>number_format($columns[28], 3, '.', ','),
                        "rd_ndot"=>number_format($columns[29], 3, '.', ','),
                        "shol_st"=>number_format($columns[30], 3, '.', ','),
                        "shol_ot"=>number_format($columns[31], 3, '.', ','),
                        "shol_nd"=>number_format($columns[32], 3, '.', ','),
                        "shol_ndot"=>number_format($columns[33], 3, '.', ','),
                        "shrd_st"=>number_format($columns[34], 3, '.', ','),
                        "shrd_ot"=>number_format($columns[35], 3, '.', ','),
                        "shrd_nd"=>number_format($columns[36], 3, '.', ','),
                        "shrd_ndot"=>number_format($columns[37], 3, '.', ','),
                        "rhol_st"=>number_format($columns[38], 3, '.', ','),
                        "rhol_ot"=>number_format($columns[39], 3, '.', ','),
                        "rhol_nd"=>number_format($columns[40], 3, '.', ','),
                        "rhol_ndot"=>number_format($columns[41], 3, '.', ','),
                        "rhrd_st"=>number_format($columns[42], 3, '.', ','),
                        "rhrd_ot"=>number_format($columns[43], 3, '.', ','),
                        "rhrd_nd"=>number_format($columns[44], 3, '.', ','),
                        "rhrd_ndot"=>number_format($columns[45], 3, '.', ','),
                        "checking"=>$checking,
                        "rateMatchedLinked" => $rateMatchedID
                    ));
                    
                    #variable resets every row
                    $rdst = is_numeric(str_replace(",","",$columns[6])) ? str_replace(",","",$columns[6]) : 0;
                    $rdot = is_numeric(str_replace(",","",$columns[7])) ? str_replace(",","",$columns[7]) : 0;
                    $rdnd = is_numeric(str_replace(",","",$columns[8])) ? str_replace(",","",$columns[8]) : 0;
                    $rdndot = is_numeric(str_replace(",","",$columns[9])) ? str_replace(",","",$columns[9]) : 0;

                    $sholst = is_numeric(str_replace(",","",$columns[10])) ? str_replace(",","",$columns[10]) : 0;
                    $sholot = is_numeric(str_replace(",","",$columns[11])) ? str_replace(",","",$columns[11]) : 0;
                    $sholnd = is_numeric(str_replace(",","",$columns[12])) ? str_replace(",","",$columns[12]) : 0;
                    $sholndot = is_numeric(str_replace(",","",$columns[13])) ? str_replace(",","",$columns[13]) : 0;

                    $shrdst = is_numeric(str_replace(",","",$columns[14])) ? str_replace(",","",$columns[14]) : 0;
                    $shrdot = is_numeric(str_replace(",","",$columns[15])) ? str_replace(",","",$columns[15]) : 0;
                    $shrdnd = is_numeric(str_replace(",","",$columns[16])) ? str_replace(",","",$columns[16]) : 0;
                    $shrdndot = is_numeric(str_replace(",","",$columns[17])) ? str_replace(",","",$columns[17]) : 0;

                    $rholst = is_numeric(str_replace(",","",$columns[18])) ? str_replace(",","",$columns[18]) : 0;
                    $rholot = is_numeric(str_replace(",","",$columns[19])) ? str_replace(",","",$columns[19]) : 0;
                    $rholnd = is_numeric(str_replace(",","",$columns[20])) ? str_replace(",","",$columns[20]) : 0;
                    $rholndot = is_numeric(str_replace(",","",$columns[21])) ? str_replace(",","",$columns[21]) : 0;
                    
                    $rhrdst = is_numeric(str_replace(",","",$columns[22])) ? str_replace(",","",$columns[22]) : 0;
                    $rhrdot = is_numeric(str_replace(",","",$columns[23])) ? str_replace(",","",$columns[23]) : 0;
                    $rhrdnd = is_numeric(str_replace(",","",$columns[24])) ? str_replace(",","",$columns[24]) : 0;
                    $rhrdndot = is_numeric(str_replace(",","",$columns[25])) ? str_replace(",","",$columns[25]) : 0;

                    $totalst = number_format(is_numeric(str_replace(",","",$columns[46])) ? str_replace(",","",$columns[46]) : 0, 2, '.', '');
                    $totalot = number_format(is_numeric(str_replace(",","",$columns[47])) ? str_replace(",","",$columns[47]) : 0, 2, '.', '');
                    $totalnd = number_format(is_numeric(str_replace(",","",$columns[48])) ? str_replace(",","",$columns[48]) : 0, 2, '.', '');
                    $totalndot = number_format(is_numeric(str_replace(",","",$columns[49])) ? str_replace(",","",$columns[49]) : 0, 2, '.', '');

                    $c_totalst = ($rdst * (is_numeric(str_replace(",","",$columns[26])) ? str_replace(",","",$columns[26]) : 0)) +
                                ($sholst * (is_numeric(str_replace(",","",$columns[30])) ? str_replace(",","",$columns[30]) : 0)) +
                                ($shrdst * (is_numeric(str_replace(",","",$columns[34])) ? str_replace(",","",$columns[34]) : 0)) +
                                ($rholst * (is_numeric(str_replace(",","",$columns[38])) ? str_replace(",","",$columns[38]) : 0)) +
                                ($rhrdst * (is_numeric(str_replace(",","",$columns[42])) ? str_replace(",","",$columns[42]) : 0));
                    
                    $c_totalot = ($rdot * (is_numeric(str_replace(",","",$columns[27])) ? str_replace(",","",$columns[27]) : 0)) +
                                ($sholot * (is_numeric(str_replace(",","",$columns[31])) ? str_replace(",","",$columns[31]) : 0)) +
                                ($shrdot * (is_numeric(str_replace(",","",$columns[35])) ? str_replace(",","",$columns[35]) : 0)) +
                                ($rholot * (is_numeric(str_replace(",","",$columns[39])) ? str_replace(",","",$columns[39]) : 0)) +
                                ($rhrdot * (is_numeric(str_replace(",","",$columns[43])) ? str_replace(",","",$columns[43]) : 0));

                    $c_totalnd = ($rdnd * (is_numeric(str_replace(",","",$columns[28])) ? str_replace(",","",$columns[28]) : 0)) +
                                ($sholnd * (is_numeric(str_replace(",","",$columns[32])) ? str_replace(",","",$columns[32]) : 0)) +
                                ($shrdnd * (is_numeric(str_replace(",","",$columns[36])) ? str_replace(",","",$columns[36]) : 0)) +
                                ($rholnd * (is_numeric(str_replace(",","",$columns[40])) ? str_replace(",","",$columns[40]) : 0)) +
                                ($rhrdnd * (is_numeric(str_replace(",","",$columns[44])) ? str_replace(",","",$columns[44]) : 0));

                    $c_totalndot = ($rdndot * (is_numeric(str_replace(",","",$columns[29])) ? str_replace(",","",$columns[29]) : 0)) +
                                ($sholndot * (is_numeric(str_replace(",","",$columns[33])) ? str_replace(",","",$columns[33]) : 0)) +
                                ($shrdndot * (is_numeric(str_replace(",","",$columns[37])) ? str_replace(",","",$columns[37]) : 0)) +
                                ($rholndot * (is_numeric(str_replace(",","",$columns[41])) ? str_replace(",","",$columns[41]) : 0)) +
                                ($rhrdndot * (is_numeric(str_replace(",","",$columns[45])) ? str_replace(",","",$columns[45]) : 0));

                    $total = number_format(is_numeric(str_replace(",","",$columns[50])) ? str_replace(",","",$columns[50]) : 0, 2,'.','');
                    $c_total = number_format(((is_numeric(str_replace(",","",$c_totalst)) ? str_replace(",","",$c_totalst) : 0) + 
                                            (is_numeric(str_replace(",","",$c_totalot)) ? str_replace(",","",$c_totalot) : 0) + 
                                            (is_numeric(str_replace(",","",$c_totalnd)) ? str_replace(",","",$c_totalnd) : 0) + 
                                            (is_numeric(str_replace(",","",$c_totalndot)) ? str_replace(",","",$c_totalndot) : 0)),2,'.','');

                    $c_totalst = number_format($c_totalst, 2,'.','');
                    $c_totalot = number_format($c_totalot, 2,'.','');
                    $c_totalnd = number_format($c_totalnd, 2,'.','');
                    $c_totalndot = number_format($c_totalndot, 2,'.','');
         
                    $hc = 0;

                    #grand totals
                    $gtSt = $gtSt + $totalst;
                    $gtOt = $gtOt + $totalot;
                    $gtNd = $gtNd + $totalnd;
                    $gtNdot = $gtNdot + $totalndot;
                    $gtTotal = $gtTotal + $total;
                    $gtHc = $gtHc + $columns[51];
                    
                    #store SOA details
                    array_push($dataDtl, array(
                        "activity"=>$columns[1],
                        "field"=>$columns[2],
                        "accomplished"=>$columns[3],
                        "gl"=>$columns[4],
                        "cc"=>$columns[5],
                        "rdst"=>$rdst,
                        "rdot"=>$rdot,
                        "rdnd"=>$rdnd,
                        "rdndot"=>$rdndot,
                        "sholst"=>$sholst,
                        "sholot"=>$sholot,
                        "sholnd"=>$sholnd,
                        "sholndot"=>$sholndot,
                        "shrdst"=>$shrdst,
                        "shrdot"=>$shrdot,
                        "shrdnd"=>$shrdnd,
                        "shrdndot"=>$shrdndot,
                        "rholst"=>$rholst,
                        "rholot"=>$rholot,
                        "rholnd"=>$rholnd,
                        "rholndot"=>$rholndot,
                        "rhrdst"=>$rholst,
                        "rhrdot"=>$rhrdot,
                        "rhrdnd"=>$rhrdnd,
                        "rhrdndot"=>$rhrdndot,
                        "totalst"=>$totalst,
                        "totalot"=>$totalot,
                        "totalnd"=>$totalnd,
                        "totalndot"=>$totalndot,
                        "totalAmt"=>$total,
                        "c_totalst"=>$c_totalst,
                        "c_totalot"=>$c_totalot,
                        "c_totalnd"=>$c_totalnd,
                        "c_totalndot"=>$c_totalndot,
                        "c_totalAmt"=>$c_total,
                        "headCount"=>$columns[51],
                        "rate_id"=>$rateMatchedID
                    ));
                    
                }
            }
        }
        
        array_push($totals, array(
            "gtSt" => number_format($gtSt, 2, '.', ','),
            "gtOt" => number_format($gtOt, 2, '.', ','),
            "gtNd" => number_format($gtNd, 2, '.', ','),
            "gtNdot" => number_format($gtNdot, 2, '.', ','),
            "gtTotal" => number_format($gtTotal, 2, '.', ','),
            "gtHc" => number_format($gtHc, 2, '.', ',')
        ));

        $finalData['totals'] = $totals;
        $finalData['details'] = $dataDtl;
        $finalData['rates'] = $dataRate;

        return $finalData;
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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('dmpi_dar_warnings')->where('hdr_id', '=', $id)->delete();
        DB::table('dmpi_dar_dtls')->where('hdr_id', '=', $id)->delete();
        DB::table('dmpi_dar_hdrs')->where('id', '=', $id)->delete();
    }
    public function getBatchInfo(Request $request)
    {
        $payroll = new Payroll();
        $batches = $payroll->getBatchInfo($request->input('id'));
        return $batches;
    }

    public function checkIfSoaExist(Request $request)
    {
        if ($request['type']=="DAR"){
            // if update baby
            if ($request['id'] == ""){
                if(DmpiDarHdr::where('soaNumber', $request->input('soaNumber'))->exists()){
                    return 'true';
                }else{
                    return 'false';
                }
            }else{
                if(DmpiDarHdr::where([['soaNumber','=', $request['soaNumber']],['id','!=', $request['id']]])->exists()){
                    return 'true';
                }else{
                    return 'false';
                }
            }
        }elseif($request['type']=="SAR"){
            // if update baby
            if ($request['id'] == ""){
                if(dmpiSar::where('soaNumber', $request->input('soaNumber'))->exists()){
                    return 'true';
                }else{
                    return 'false';
                }
            }else{
                if(dmpiSar::where([['soaNumber','=', $request['soaNumber']],['id','!=', $request['id']]])->exists()){
                    return 'true';
                }else{
                    return 'false';
                }
            }
        }
            
    }

    public function searchSoa(Request $request)
    {

        $soaNumber = $request['soa'];

        $soa = DmpiDarHdr::where('soaNumber', 'LIKE', "%$soaNumber%")
                        ->orwhere('batchNo', 'LIKE', "%$soaNumber%")
                        ->orwhere('period', 'LIKE', "%$soaNumber%")
                        ->orwhere('soaDate', 'LIKE', "%$soaNumber%")
                        ->orwhere('adminencodedby', 'LIKE', "%$soaNumber%")
                        ->orwhere('created_at', 'LIKE', "%$soaNumber%")
                        ->orwhere('updated_at', 'LIKE', "%$soaNumber%")
                        ->get();
        return $soa;
      
    }

    public function loadDetailRates(Request $request)
    {
        // $dataTotals = array();
        $dtl = DmpiDarDtl::where('hdr_id','=',$request['id'])->get();

        $rates = RateMaster::join('acivity_masters','acivity_masters.id','=','rate_masters.activityID')
                        ->join('location_masters','location_masters.id','=','rate_masters.locationID')
                        ->join('gl_masters','gl_masters.id','=','rate_masters.glID')
                        ->join('cost_center_masters','cost_center_masters.id','=','rate_masters.costCenterID')
                        ->select('rate_masters.*', 'acivity_masters.activity','location_masters.location','gl_masters.gl','cost_center_masters.costcenter as cc')
                        ->whereIn('rate_masters.id', (DmpiDarDtl::select('rate_id')->where('hdr_id','=',$request['id'])->get()))
                        ->get();

        $hdr = DmpiDarHdr::where('id', '=', $request['id'])->get();

        $finalData['details'] = $dtl;
        $finalData['rates'] = $rates;
        $finalData['totals'] = $hdr;

        return $finalData;
    }

    public function submit(Request $request)
    {
        $query = DB::table('dmpi_dar_hdrs')
                ->where('id', $request['refId'])
                ->update(['status' => 'submitted'
                ]);
        return 'submitted';
    }

    public function confirm(Request $request)
    {

        $query = DB::table('dmpi_dar_hdrs')
                ->where('id', $request['refId'])
                ->update(['status' => 'confirmed',
                'ConfirmedDateTime' => date('Y-m-d h:i:s'),
                'adminConfirmedById' => Auth::user()->id,
                'adminConfirmedBy' => Auth::user()->name
                ]);
        return 'confirmed';
    }

    public function transmit(Request $request)
    {
        $query = DB::table('dmpi_dar_hdrs')
                ->where('id', $request['refId'])
                ->update([
                    'status' => 'transmitted',
                    'TransmittedDate' => date('Y-m-d h:i:s'),
                    'adminTransmittedById' => Auth::user()->id,
                    'adminTransmittedBy' => Auth::user()->name
                ]);
        return 'transmitted';
    }

    public function reactivate(Request $request)
    {
        
        $query = DB::table('dmpi_dar_hdrs')
                ->where('id', $request['refId'])
                ->update([
                    'status' => 'active',
                    'reactivatedBy' => Auth::user()->name,
                    'reasonofreactivation' => $request['reasonofreactivation'],
                    'Datetime_reactivation' => date('Y-m-d h:i:s'),
                    'adminConfirmedById' => '',
                    'adminConfirmedBy' => '',
                    'adminTransmittedById' => '',
                    'adminTransmittedBy' => '',
                    'TransmittedDate' => NULL,
                    'ConfirmedDateTime' => NULL
                ]);
        return 'active';
    }

    public function get_pdf_reacativate(request $request)
    {
    
        $query=DB::connection('mysql')->select("SELECT hdr.soaNumber, hdr.reactivatedBy, hdr.reasonofreactivation, hdr.Datetime_reactivation, 
        (SELECT SUM(dtl.rdst)+SUM(dtl.sholst)+SUM(dtl.shrdst)+SUM(dtl.rholst)+SUM(dtl.rhrdst) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS ST,
        (SELECT SUM(dtl.rdot)+SUM(dtl.sholot)+SUM(dtl.shrdot)+SUM(dtl.rholot)+SUM(dtl.rhrdot) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS OT,
        (SELECT SUM(dtl.rdnd)+SUM(dtl.sholnd)+SUM(dtl.shrdnd)+SUM(dtl.rholnd)+SUM(dtl.rhrdnd) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS ND,
        (SELECT SUM(dtl.rdndot)+SUM(dtl.sholndot)+SUM(dtl.shrdndot)+SUM(dtl.rholndot)+SUM(dtl.rhrdndot) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS ND_OT,
        (SELECT SUM(dtl.c_totalAmt) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS TOTAL_AMT
        FROM dmpi_dar_hdrs hdr
        WHERE hdr.Datetime_reactivation BETWEEN '" . $request['from'] . " 00:00:00' AND '" . $request['to'] . " 23:59:59' AND STATUS= 'ACTIVE' ORDER BY hdr.Datetime_reactivation asc");    

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
            $html = view('billingRPTpdf.dmpiDar_ReactivateSOA', $report_data);
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

    public function get_pdf_SOAStatusMonitoring(request $request)
    {
    
        $query=DB::connection('mysql')->select("SELECT hdr.id,hdr.soaNumber,hdr.created_at, hdr.preparedBy, hdr.ConfirmedDateTime,hdr.adminConfirmedBy,hdr.TransmittedDate,hdr.`status`, batch.xDate, 
                (SELECT SUM(dtl.totalAmt) FROM dmpi_dar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS amount FROM dmpi_dar_hdrs hdr LEFT JOIN 201filedb.tblbatch batch ON batch.BID = hdr.batcIDLink WHERE hdr.soaDate BETWEEN '" . $request['from'] . " 00:00:00' AND '" . $request['to'] . " 23:59:59' ORDER BY hdr.soaDate asc");    
        
        $query_sar=DB::connection('mysql')->select("SELECT hdr.soaNumber,hdr.created_at, hdr.preparedBy, hdr.adminConfirmedDate,hdr.adminConfirmedBy,hdr.adminTransmittedDate, hdr.`status`,batch.xDate, (SELECT SUM(dtl.amount) FROM dmpi_sar_dtls dtl WHERE dtl.hdr_id= hdr.id) AS amount FROM dmpi_sars hdr LEFT JOIN 201filedb.tblbatch batch ON batch.BNo = hdr.soaNumber WHERE hdr.soaDate BETWEEN '" . $request['from'] . " 00:00:00' AND '" . $request['to'] . " 23:59:59' ORDER BY hdr.soaDate asc");

    
        if (!$request['report']) {
            if($query or $query_sar){
                return response()->json(array('success' => true, 'message' => 'Generation Successful.'));
            }else{
                return response()->json(array('success' => false, 'message' => 'No Data Found.'));
            }
            // return $query ?  response()->json(array('success' => true, 'message' => 'Generation Successful.')) : response()->json(array('success' => false, 'message' => 'No Data Found.'));
        } else {

            //DAR 
            if (!$query) {
                $records = 'fail';
            } else {
                $records = $query;
            }

            //SAR
            if (!$query_sar) {
                $records_sar = 'fail';
            } else {
                $records_sar = $query_sar;
            }

            $report_data = [
                'records' => $records,
                'records_sar' => $records_sar,
                'preparedby' => $request['userMe'],
                'from' => $request['from'],
                'to' => $request['to']
            ];
            $html = view('billingRPTpdf.dmpiDar_SoaMonitoring', $report_data);
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

