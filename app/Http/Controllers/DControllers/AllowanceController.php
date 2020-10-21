<?php

namespace App\Http\Controllers\DControllers;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mpdf\Mpdf;

class AllowanceController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth:api')->only(['getAllowance']);
        // $this->middleware('auth:api')->only(['get_pdf_reacativate']);
    }

    public function getAllowance(Request $request)
    {
        if ($request['header']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancehdr ORDER BY Period desc, date_created desc");
        } elseif ($request['detail']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancedtl WHERE hdr_idLink= " . $request['id'] . "  ORDER BY LName asc");
        } elseif ($request['total']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountallowance WHERE AHID= " . $request['id']);
        } elseif ($request['SOAHeader']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancesoahdr ORDER BY Date desc");
        } elseif ($request['SOAHeaderPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancesoahdr WHERE SOANo IN(SELECT DISTINCT(SOANo) FROM tblallowanceledger) AND Status='POSTED TO LEDGER' ORDER BY Date desc");
        } elseif ($request['SOAHeaderTransmittal']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancesoahdr WHERE transmittal_no <> '' AND Status='TRANSMITTED' ORDER BY Date desc");
        } elseif ($request['SOAOnly']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancehdr WHERE AHID NOT IN(SELECT hdr_idLink FROM tblallowancesoahdr) ORDER BY Period desc");
        } elseif ($request['getViewAllowance']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountallowance WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        } elseif ($request['getViewConstruction']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsoa WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        } elseif ($request['getPaymentDetail']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancepayment WHERE hdr_idLink=" . $request['id'] . " ORDER BY date_created desc");
        } elseif ($request['getPaymentDetail']) {
            $query = DB::connection('mysql')->select("SELECT * from tblconstructionpayment WHERE hdr_idLink=" . $request['id'] . " ORDER BY date_created desc");
        } elseif ($request['getEmpSetting']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowanceempsetting ORDER BY LName, FName asc");
        } elseif ($request['checkEmpSetting']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowanceempsetting WHERE EmpID=" . $request['EmpID'] . " ORDER BY LName, FName asc");
        } elseif ($request['getDepartment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancedepartment ORDER BY Department asc");
        } elseif ($request['getCostCenter']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancecostcenter ORDER BY Costcenter asc");
        } elseif ($request['getGL']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancegl ORDER BY GL asc");
        } elseif ($request['getLedger']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowanceledger");
        } elseif ($request['getLedgerPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancepayment WHERE ledger_id=".$request['id']."");
        } elseif ($request['getLedgerPaymentSOA']) {
            $query = DB::connection('mysql')->select("SELECT * from tblallowancepayment p, tblallowanceledger l WHERE p.SOANo='".$request['SOANo']."' AND l.ALID = p.ledger_id");
        } elseif ($request['getSupplier']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsupplier ORDER BY supName asc");
        } elseif ($request['SOAHeaderDate']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountallowance WHERE date_created >= '".$request['from']." 00:00:00' AND date_created <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY date_created desc, Location asc");
        } elseif ($request['SOAHeaderDateCons']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsoa WHERE soaDate >= '".$request['from']." 00:00:00' AND soaDate <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY soaDate desc");
        } elseif ($request['getTransmittal']) {
            $total_billing = "(SELECT sum(d.SubTotal) FROM tblallowancedtl d, tblallowancesoahdr h WHERE d.hdr_idLink = h.hdr_idLink AND t.transmittal_no = h.transmittal_no GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT t.*, ".$total_billing." AS total_billing from tblothertransmittal t WHERE t.type='".$request['type']."' ORDER BY t.date_created desc");
        } elseif ($request['searchTransmittalExists']) {
            $query = DB::connection('mysql')->select("SELECT * from tblothertransmittal WHERE transmittal_no='".$request['transmittal_no']."' ORDER BY transmittal_no desc LIMIT 1");
        } elseif ($request['getUser']) {
            return Auth::user();
        } elseif ($request['getTransmittalNo']) {
            $query = DB::connection('mysql')->select("SELECT * from tblothertransmittal ORDER BY transmittal_no desc LIMIT 1");
            if($query){
                foreach($query as $record){
                    $ex = explode('-', $record->transmittal_no);
                    $month = substr((string)$ex[0], 4, 2);
                    $monthNow = date('m');
                    $year = substr($ex[0], 2, 2);
                    $yearNow = date('y');
                    if($month != $monthNow or $year != $yearNow){
                        return "TF" . date('ym') . "-1";
                    }
                    return $ex[0] . "-" . ((int)$ex[1] + 1);
                }
            }
        } 
        return $query;
    }
    public function getPeriod()
    {
        $query = DB::connection('mysql2')->select("SELECT * from tblpayrollperiod ORDER BY PPID desc");
        // $query = DB::connection('mysql')->select("SELECT * from tblpayrollperiod ORDER BY PPID desc");
        return $query;
    }
    public function getEmployee()
    {
        $query = DB::connection('mysql2')->select("SELECT EmpID, ChapaID_Old as Chapa, LName, FName, MName, ExtName from tblemployeemasterfile ORDER BY LName asc");
        // $query = DB::connection('mysql')->select("SELECT EmpID, ChapaID_Old as Chapa, LName, FName, MName, ExtName from tblemployeemasterfile ORDER BY LName asc");
        return $query;
    }
    public function getPayStation()
    {
        $query = DB::connection('mysql2')->select("SELECT * from tblpaystation ORDER BY PayStation asc");
        // $query = DB::connection('mysql')->select("SELECT * from tblpaystation ORDER BY PayStation asc");
        return $query;
    }
    public function getSignatory()
    {
        $query = DB::connection('mysql')->select("SELECT * from billing_signatories ORDER BY lname asc, fname asc");
        return $query;
    }
    public function getMarkUp()
    {
        $query = DB::connection('mysql')->select("SELECT * from tblmarkup");
        return $query;
    }

    public function saveMarkUp(Request $request)
    {
        // return $post;
        $data = array(
            'MUID' => $request['MUID'] ? $request['MUID'] : "",
            'ALWMarkUp' => $request['ALWMarkUp'] ? $request['ALWMarkUp'] : "",
            'PPEMarkUp' => $request['PPEMarkUp'] ? $request['PPEMarkUp'] : "",
            'FuelMarkUp' => $request['FuelMarkUp'] ? $request['FuelMarkUp'] : "",
            'SupMarkUp' => $request['SupMarkUp'] ? $request['SupMarkUp'] : "",
            'OtherMarkUp' => $request['OtherMarkUp'] ? $request['OtherMarkUp'] : "",
            'IncentiveMarkup' => $request['IncentiveMarkup'] ? $request['IncentiveMarkup'] : "",
        );
        if ($request['MUID']) {
            $query = DB::connection('mysql')
                ->table('tblmarkup')
                ->where('MUID', $request['MUID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblmarkup')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function postHeader(Request $request)
    {
        // return $post;
        $data = array(
            'AHID' => $request['AHID'] ? $request['AHID'] : "",
            'Location' => $request['Location'] ? $request['Location'] : "",
            'Period' => $request['Period'] ? $request['Period'] : "",
            'PeriodID' => $request['PeriodID'] ? $request['PeriodID'] : "",
        );
        if ($request['AHID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancehdr')
                ->where('AHID', $request['AHID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowancehdr')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function postDetail(Request $request)
    {
        // return $post;
        $data = array(
            'ADID' => $request['ADID'] ? $request['ADID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'EmpID' => $request['EmpID'] ? $request['EmpID'] : "",
            'Chapa' => $request['Chapa'] ? $request['Chapa'] : "",
            'FName' => $request['FName'] ? $request['FName'] : "",
            'MName' => $request['MName'] ? $request['MName'] : "",
            'LName' => $request['LName'] ? $request['LName'] : "",
            'ExtName' => $request['ExtName'] ? $request['ExtName'] : "",
            'manDays' => $request['manDays'] ? $request['manDays'] : "",
            'GL' => $request['GL'] ? $request['GL'] : "",
            'CostCenter' => $request['CostCenter'] ? $request['CostCenter'] : "",
            'Gasoline' => $request['Gasoline'] ? $request['Gasoline'] : 0,
            'Communication' => $request['Communication'] ? $request['Communication'] : 0,
            'RentalMaintenance' => $request['RentalMaintenance'] ? $request['RentalMaintenance'] : 0,
            'Others' => $request['Others'] ? $request['Others'] : 0,
            'markup' => $request['markup'] ? $request['markup'] : 0,
            'AdminFee' => $request['AdminFee'] ? $request['AdminFee'] : 0,
            'SubTotal' => $request['SubTotal'] ? $request['SubTotal'] : 0,
        );
        if ($request['ADID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancedtl')
                ->where('ADID', $request['ADID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowancedtl')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function postPayment(Request $request)
    {
        // return $post;
        $data = array(
            'APID' => $request['APID'] ? $request['APID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'SOANo' => $request['SOANo'] ? $request['SOANo'] : "",
            'billed_amount' => $request['billed_amount'] ? $request['billed_amount'] : 0,
            'check_no' => $request['check_no'] ? $request['check_no'] : "",
            'check_date' => $request['check_date'] ? $request['check_date'] : "",
            'check_amount' => $request['check_amount'] ? $request['check_amount'] : 0,
            'orNumber' => $request['orNumber'] ? $request['orNumber'] : "",
            'paymentMode' => $request['paymentMode'] ? $request['paymentMode'] : "",
            'remarks' => $request['remarks'] ? $request['remarks'] : "",
        );
        $ledger_data = array(
            'check_no' => $request['check_no'] ? $request['check_no'] : "",
            'orNumber' => $request['orNumber'] ? $request['orNumber'] : "",
            'paymentDate' => $request['check_date'] ? $request['check_date'] : "",
            'remarks' => $request['remarks'] ? $request['remarks'] : "",
            'paymentMode' => $request['paymentMode'] ? $request['paymentMode'] : "",
            'paymentType' => "CREDIT",
            'Amount' => $request['check_amount'] * -1,
        );
        $id = DB::connection('mysql')->table('tblallowanceledger')->insertGetId($ledger_data);
        $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountallowance WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->TotalAmount;
                    $data['hdr_idLink'] = $record->AHID;
                    DB::connection('mysql')->table('tblallowancepayment')->insertGetId($data);
                }
            }
        }
        return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
    }

    public function postPaymentConstruction(Request $request)
    {
        // return $post;
        $data = array(
            'APID' => $request['APID'] ? $request['APID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'SOANo' => $request['SOANo'] ? $request['SOANo'] : "",
            'billed_amount' => $request['billed_amount'] ? $request['billed_amount'] : 0,
            'check_no' => $request['check_no'] ? $request['check_no'] : "",
            'check_date' => $request['check_date'] ? $request['check_date'] : "",
            'check_amount' => $request['check_amount'] ? $request['check_amount'] : 0,
            'orNumber' => $request['orNumber'] ? $request['orNumber'] : "",
            'paymentMode' => $request['paymentMode'] ? $request['paymentMode'] : "",
            'remarks' => $request['remarks'] ? $request['remarks'] : "",
        );
        // $ledger_data = array(
        //     'check_no' => $request['check_no'] ? $request['check_no'] : "",
        //     'orNumber' => $request['orNumber'] ? $request['orNumber'] : "",
        //     'paymentDate' => $request['check_date'] ? $request['check_date'] : "",
        //     'remarks' => $request['remarks'] ? $request['remarks'] : "",
        //     'paymentMode' => $request['paymentMode'] ? $request['paymentMode'] : "",
        //     'paymentType' => "CREDIT",
        //     'Amount' => $request['check_amount'] * -1,
        // );
        // $id = DB::connection('mysql')->table('tblallowanceledger')->insertGetId($ledger_data);
        // $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from tblsoa WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->amountInFigure;
                    $data['hdr_idLink'] = $record->soaID;
                    DB::connection('mysql')->table('tblconstructionpayment')->insertGetId($data);
                }
            }
        }
        return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
    }

    public function postLedger(Request $request)
    {
        $ledger_data = array(
            'SOANo' => $request['SOANo'] ? $request['SOANo'] : "",
            'remarks' => "",
            'paymentType' => "DEBIT",
            'paymentDate' => date("Y-m-d"),
            'Amount' => $request['amount'] ? $request['amount'] : "",
        );
        $id = DB::connection('mysql')->table('tblallowanceledger')->insertGetId($ledger_data);
        if ($id) {
            DB::connection('mysql')
                ->table('tblallowancesoahdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status' => "POSTED TO LEDGER"));
            return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
        }
    }

    public function saveEmpSetting(Request $request)
    {
        // return $post;
        $data = array(
            'ESID' => $request['ESID'] ? $request['ESID'] : "",
            'FName' => $request['FName'] ? $request['FName'] : "",
            'MName' => $request['MName'] ? $request['MName'] : "",
            'LName' => $request['LName'] ? $request['LName'] : "",
            'ExtName' => $request['ExtName'] ? $request['ExtName'] : "",
            'GasolineRate' => $request['GasolineRate'] ? $request['GasolineRate'] : "",
            'CommRate' => $request['CommRate'] ? $request['CommRate'] : "",
            'RentalRate' => $request['RentalRate'] ? $request['RentalRate'] : "",
            'Chapa' => $request['Chapa'] ? $request['Chapa'] : "",
            'EmpID' => $request['EmpID'] ? $request['EmpID'] : "",
        );
        if ($request['ESID']) {
            $query = DB::connection('mysql')
                ->table('tblallowanceempsetting')
                ->where('ESID', $request['ESID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowanceempsetting')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function saveDepartment(Request $request)
    {
        // return $post;
        $data = array(
            'ADID' => $request['ADID'] ? $request['ADID'] : "",
            'Code' => $request['Code'] ? $request['Code'] : "",
            'Department' => $request['Department'] ? $request['Department'] : "",
        );
        if ($request['ADID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancedepartment')
                ->where('ADID', $request['ADID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowancedepartment')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function saveCostcenter(Request $request)
    {
        // return $post;
        $data = array(
            'ACCID' => $request['ACCID'] ? $request['ACCID'] : "",
            'Code' => $request['Code'] ? $request['Code'] : "",
            'Costcenter' => $request['Costcenter'] ? $request['Costcenter'] : "",
        );
        if ($request['ACCID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancecostcenter')
                ->where('ACCID', $request['ACCID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowancecostcenter')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function saveGL(Request $request)
    {
        // return $post;
        $data = array(
            'AGID' => $request['AGID'] ? $request['AGID'] : "",
            'Code' => $request['Code'] ? $request['Code'] : "",
            'GL' => $request['GL'] ? $request['GL'] : "",
        );
        if ($request['AGID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancegl')
                ->where('AGID', $request['AGID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblallowancegl')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function saveSupplier(Request $request)
    {
        // return $post;
        $data = array(
            'supID' => $request['supID'] ? $request['supID'] : "",
            'supName' => $request['supName'] ? $request['supName'] : "",
            'supAddress' => $request['supAddress'] ? $request['supAddress'] : "",
        );
        if ($request['supID']) {
            $query = DB::connection('mysql')
                ->table('tblsupplier')
                ->where('supID', $request['supID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $id = DB::connection('mysql')->table('tblsupplier')->insertGetId($data);
            if ($id) {
                return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function createTransmittal(Request $request)
    {
        // return $post;
        if(!$request['merge']){
            $data = array(
                'transmittal_no' => $request['transmittal_no'] ? $request['transmittal_no'] : "",
                'prepared_by' => $request['prepared_by'] ? $request['prepared_by'] : "",
                'type' => $request['type'] ? $request['type'] : "",
            );
            $id = DB::connection('mysql')->table('tblothertransmittal')->insertGetId($data);
            if($id){
                foreach($request['soa_no_list'] as $item){
                    if($request['type'] == 'ALLOWANCE'){
                        $query = DB::connection('mysql')
                            ->table('tblallowancesoahdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }elseif($request['type'] == 'PPE'){
                        $query = DB::connection('mysql')
                            ->table('tblppehdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }elseif($request['type'] == 'FUEL'){
                        $query = DB::connection('mysql')
                            ->table('tblfuelhdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }elseif($request['type'] == 'SUPPLIES'){
                        $query = DB::connection('mysql')
                            ->table('tblsuphdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }elseif($request['type'] == 'OTHERS'){
                        $query = DB::connection('mysql')
                            ->table('tblothershdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }elseif($request['type'] == 'INCENTIVES'){
                        $query = DB::connection('mysql')
                            ->table('tblincentiveshdr')
                            ->where('SOANo', $item)
                            ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                    }
                }
                return response()->json(array('success' => true, 'message' => 'Successfully created transmittal.'));
            }else{
                return response()->json(array('success' => false, 'message' => 'Failed creating transmittal.'));
            }
        }else{
            foreach($request['soa_no_list'] as $item){
                if($request['type'] == 'ALLOWANCE'){
                    $query = DB::connection('mysql')
                        ->table('tblallowancesoahdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }elseif($request['type'] == 'PPE'){
                    $query = DB::connection('mysql')
                        ->table('tblppehdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }elseif($request['type'] == 'FUEL'){
                    $query = DB::connection('mysql')
                        ->table('tblfuelhdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }elseif($request['type'] == 'SUPPLIES'){
                    $query = DB::connection('mysql')
                        ->table('tblsuphdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }elseif($request['type'] == 'OTHERS'){
                    $query = DB::connection('mysql')
                        ->table('tblothershdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }elseif($request['type'] == 'INCENTIVES'){
                    $query = DB::connection('mysql')
                        ->table('tblincentiveshdr')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }
            }
            return response()->json(array('success' => true, 'message' => 'Successfully merged soa to transmittal number '.$request['transmittal_no'].'.'));
        }
    }

    public function createTransmittalCons(Request $request)
    {
        // return $post;
        if(!$request['merge']){
            $data = array(
                'transmittal_no' => $request['transmittal_no'] ? $request['transmittal_no'] : "",
                'prepared_by' => $request['prepared_by'] ? $request['prepared_by'] : "",
                'type' => 'CONSTRUCTION'
            );
            $id = DB::connection('mysql')->table('tblothertransmittal')->insertGetId($data);
            if($id){
                foreach($request['soa_no_list'] as $item){
                    $query = DB::connection('mysql')
                        ->table('tblsoa')
                        ->where('SOANo', $item)
                        ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
                }
                return response()->json(array('success' => true, 'message' => 'Successfully created transmittal.'));
            }else{
                return response()->json(array('success' => false, 'message' => 'Failed creating transmittal.'));
            }
        }else{
            foreach($request['soa_no_list'] as $item){
                $query = DB::connection('mysql')
                    ->table('tblsoa')
                    ->where('SOANo', $item)
                    ->update(array('Status'=>'TRANSMITTED', 'transmittal_no'=>$request['transmittal_no']));
            }
            return response()->json(array('success' => true, 'message' => 'Successfully merged soa to transmittal number '.$request['transmittal_no'].'.'));
        }
    }

    public function removeTransmittal(Request $request)
    {
        // return $post;
        if($request['type'] == 'ALLOWANCE'){
            $query = DB::connection('mysql')
                ->table('tblallowancesoahdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }elseif($request['type'] == 'PPE'){
            $query = DB::connection('mysql')
                ->table('tblppehdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }elseif($request['type'] == 'FUEL'){
            $query = DB::connection('mysql')
                ->table('tblfuelhdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }elseif($request['type'] == 'SUPPLIES'){
            $query = DB::connection('mysql')
                ->table('tblsuphdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }elseif($request['type'] == 'OTHERS'){
            $query = DB::connection('mysql')
                ->table('tblothershdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }elseif($request['type'] == 'INCENTIVES'){
            $query = DB::connection('mysql')
                ->table('tblincentiveshdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status'=>'ACTIVE', 'transmittal_no'=>'', 'last_removed_by'=>$request['prepared_by']));
        }
        if($query){
            return response()->json(array('success' => true, 'message' => 'Successfully removed transmittal number.'));
        }else{
            return response()->json(array('success' => false, 'message' => 'Failed removing transmittal number.'));
        }
    }

    public function deleteAllowanceHeader($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancehdr')
            ->select('*')
            ->where('AHID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancehdr')
                ->where('AHID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function deleteAllowanceDetail($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancedtl')
            ->select('*')
            ->where('ADID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancedtl')
                ->where('ADID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function deleteAllowancePayment($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancepayment')
            ->select('*')
            ->where('APID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancepayment')
                ->where('APID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function deleteEmpSetting($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowanceempsetting')
            ->select('*')
            ->where('ESID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowanceempsetting')
                ->where('ESID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function deleteDepartment($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancedepartment')
            ->select('*')
            ->where('ADID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancedepartment')
                ->where('ADID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function allowanceCostcenterDelete($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancecostcenter')
            ->select('*')
            ->where('ACCID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancecostcenter')
                ->where('ACCID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function allowanceGLDelete($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancegl')
            ->select('*')
            ->where('AGID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancegl')
                ->where('AGID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function allowanceSupplierDelete($id)
    {
        $query = DB::connection('mysql')
            ->table('tblsupplier')
            ->select('*')
            ->where('supID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblsupplier')
                ->where('supID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    // SOA
    public function postSOAHeader(Request $request)
    {
        // return $post;
        $data = array(
            'ASHID' => $request['ASHID'] ? $request['ASHID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'Period' => $request['Period'] ? $request['Period'] : "",
            'Location' => $request['Location'] ? $request['Location'] : "",
            'Date' => $request['Date'] ? $request['Date'] : "",
            'billedTo' => $request['billedTo'] ? $request['billedTo'] : "",
            'TIN' => $request['TIN'] ? $request['TIN'] : "",
            'Address' => $request['Address'] ? $request['Address'] : "",
            'Status' => $request['Status'] ? $request['Status'] : "",
            'Prepared_by' => $request['Prepared_by'] ? $request['Prepared_by'] : "",
            'Prepared_by_desig' => $request['Prepared_by_desig'] ? $request['Prepared_by_desig'] : "",
            'Noted_by' => $request['Noted_by'] ? $request['Noted_by'] : "",
            'Noted_by_desig' => $request['Noted_by_desig'] ? $request['Noted_by_desig'] : "",
            'Approved_by' => $request['Approved_by'] ? $request['Approved_by'] : "",
            'Approved_by_desig' => $request['Approved_by_desig'] ? $request['Approved_by_desig'] : "",
            'Approved_by2' => $request['Approved_by2'] ? $request['Approved_by2'] : "",
            'Approved_by2_desig' => $request['Approved_by2_desig'] ? $request['Approved_by2_desig'] : "",
        );
        if ($request['ASHID']) {
            $query = DB::connection('mysql')
                ->table('tblallowancesoahdr')
                ->where('ASHID', $request['ASHID'])
                ->update($data);
            if ($query) {
                return response()->json(array('success' => true, 'message' => 'Successfully updated.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Nothing has changed.'));
            }
        } else {
            $data['Status'] = 'ACTIVE';
            $id = DB::connection('mysql')->table('tblallowancesoahdr')->insertGetId($data);
            $data['SOANo'] = "ALW" . date('y') . date('m') . "-" . $id;
            DB::connection('mysql')
                ->table('tblallowancesoahdr')
                ->where('ASHID', $id)
                ->update(array('SOANo' => $data['SOANo']));
            if ($id) {
                return response()->json(array('SOANo' => $data['SOANo'], 'id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
            } else {
                return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
            }
        }
    }

    public function deleteAllowanceSOA($id)
    {
        $query = DB::connection('mysql')
            ->table('tblallowancesoahdr')
            ->select('*')
            ->where('ASHID', $id)
            ->get();
        if ($query) {
            $query = DB::connection('mysql')
                ->table('tblallowancesoahdr')
                ->where('ASHID', $id)
                ->delete();
            return $query ? response()->json(array('success' => true, 'message' => 'Successfully deleted.')) : response()->json(array('success' => false, 'message' => 'Delete failed.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Id passed not found.'));
        }
    }

    public function generate_pdf(Request $request)
    {
        $query = DB::connection('mysql')->select("SELECT h.*, d.*, t.TotalAmount from tblallowancesoahdr h, tblallowancedtl d, v_totalamountallowance t WHERE h.hdr_idLink = t.AHID AND h.hdr_idLink = d.hdr_idLink AND h.SOANo = '" . $request['SOANo'] . "' ORDER BY d.LName asc");
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
                'department' => $request['department'] ? $request['department'] : ""
            ];
            $html = view('pdf.allowance_soa', $report_data);
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
            $mpdf->Output('AllowanceReport.pdf', 'I');
        }
    }

    public function generate_pdf_soa(Request $request)
    {
        if($request['type'] == 'ALLOWANCE'){
            $billed_amount = "(SELECT sum(SubTotal) FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(AdminFee) FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink markup > 0 GROUP BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CostCenter FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'allowance' AS type FROM tblallowancesoahdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }elseif($request['type'] == 'PPE'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(subPrice) FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP markup > 0 BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CC FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'ppe' AS type FROM tblppehdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }elseif($request['type'] == 'FUEL'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(subPrice) FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID AND markup > 0 GROUP BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CC FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'ppe' AS type FROM tblfuelhdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }elseif($request['type'] == 'SUPPLIES'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(subPrice) FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID AND markup > 0 GROUP BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CC FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'ppe' AS type FROM tblsuphdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }elseif($request['type'] == 'OTHERS'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(subPrice) FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID AND markup > 0 GROUP BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CC FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'ppe' AS type FROM tblothershdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }elseif($request['type'] == 'INCENTIVES'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $admin_fee = "(SELECT sum(admin_fee) FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID AND markup > 0 GROUP BY d.hdr_idLink)";
            $markup = "(SELECT markup FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $gl = "(SELECT GL FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $cc = "(SELECT CC FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, ".$billed_amount." AS billed_amount, ".$markup." AS markup, ".$gl." AS gl, ".$cc." AS cc, ".$admin_fee." AS admin_fee, 'ppe' AS type FROM tblincentiveshdr h WHERE h.SOANo='".$request['SOANo']."' ORDER BY date_created asc");
        }
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
                'details' => array(
                    'Prepared_by' => $request['Prepared_by'] ? $request['Prepared_by'] : "",
                    'Checked_by' => $request['Checked_by'] ? $request['Checked_by'] : "",
                    'Noted_by' => $request['Noted_by'] ? $request['Noted_by'] : "",
                    'Approved_by' => $request['Approved_by'] ? $request['Approved_by'] : ""
                ),
                'records2' => DB::connection('mysql')->select("SELECT * from tblreportsoa WHERE RSID = ".$request['reportID']."")
            ];
            $html = view('pdf.soa_allowance', $report_data);
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
            $mpdf->Output('TransmittalReport.pdf', 'I');
        }
    }

    public function saveSoaReport(Request $request)
    {
        // return $post;
        $data = array(
            'to' => $request['to'] ? $request['to'] : "",
            'thru' => $request['thru'] ? $request['thru'] : "",
            'body' => $request['body'] ? $request['body'] : "",
            'body2' => $request['body2'] ? $request['body2'] : "",
        );
        $query = DB::connection('mysql')
            ->table('tblreportsoa')
            ->select('*')
            ->get();
        if ($query) {
            DB::connection('mysql')
                ->table('tblreportsoa')
                ->delete();
        }
        $id = DB::connection('mysql')->table('tblreportsoa')->insertGetId($data);
        if ($id) {
            return response()->json(array('id' => $id, 'success' => true, 'message' => 'Successfully inserted.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
        }
    }

    public function generate_pdf_transmittal(Request $request)
    {
        if($request['type'] == 'ALLOWANCE'){
            $billed_amount = "(SELECT sum(SubTotal) FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, '' AS InvoiceNo FROM tblallowancesoahdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }elseif($request['type'] == 'PPE'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $invoice_no = "(SELECT InvoiceNo FROM tblppedtl d WHERE d.hdr_idLink = h.PHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, ".$invoice_no." AS InvoiceNo FROM tblppehdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }elseif($request['type'] == 'FUEL'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $invoice_no = "(SELECT InvoiceNo FROM tblfueldtl d WHERE d.hdr_idLink = h.FHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, ".$invoice_no." AS InvoiceNo FROM tblfuelhdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }elseif($request['type'] == 'SUPPLIES'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $invoice_no = "(SELECT InvoiceNo FROM tblsupdtl d WHERE d.hdr_idLink = h.SHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, ".$invoice_no." AS InvoiceNo FROM tblsuphdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }elseif($request['type'] == 'OTHERS'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $invoice_no = "(SELECT InvoiceNo FROM tblothersdtl d WHERE d.hdr_idLink = h.OHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, ".$invoice_no." AS InvoiceNo FROM tblothershdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }elseif($request['type'] == 'INCENTIVES'){
            $billed_amount = "(SELECT sum(SubAmount) FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $invoice_no = "(SELECT InvoiceNo FROM tblincentivesdtl d WHERE d.hdr_idLink = h.IHID GROUP BY d.hdr_idLink)";
            $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, ".$billed_amount." AS billed_amount, ".$invoice_no." AS InvoiceNo FROM tblincentiveshdr h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY date_created asc");
        }
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
                'type' => $request['type']
            ];
            $html = view('pdf.allowance_transmittal', $report_data);
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
            $mpdf->Output('AllowanceTransmittalReport.pdf', 'I');
        }
    }

    public function generate_pdf_transmittalCons(Request $request)
    {
        // $billed_amount = "(SELECT sum(SubTotal) FROM tblallowancedtl d WHERE d.hdr_idLink = h.hdr_idLink GROUP BY d.hdr_idLink)";
        $query = DB::connection('mysql')->select("SELECT h.*, t.prepared_by, h.amountInFigure AS billed_amount FROM tblsoa h, tblothertransmittal t WHERE h.transmittal_no = '" . $request['transmittal_no'] . "' AND t.transmittal_no = h.transmittal_no ORDER BY soaDate asc");
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
            ];
            $html = view('pdf.allowance_transmittalCons', $report_data);
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
            $mpdf->Output('allowance_transmittalCons.pdf', 'I');
        }
    }

    public function get_pdf_reacativate(request $request)
    {
        $query = DB::connection('mysql')->select("SELECT hdr.soaNumber, hdr.Datetime_reactivation,hdr.reasonofreactivation, hdr.reactivatedBy, SUM(dtl.qty) AS Qty, SUM(dtl.rate) AS rate, SUM(dtl.amount) AS total FROM dmpi_sars hdr LEFT JOIN dmpi_sar_dtls dtl ON dtl.hdr_id= hdr.id WHERE hdr.Datetime_reactivation BETWEEN
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
                'preparedby' => ""//Auth::user()->name
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
