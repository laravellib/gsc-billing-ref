<?php

namespace App\Http\Controllers\DControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use Mpdf\Mpdf;
use DB;
class IncentivesController extends Controller
{
    public function getIncentives(Request $request){
        if($request['getIncentivesHeader']){
            $query = DB::connection('mysql')->select("SELECT * from tblincentiveshdr ORDER BY date_created desc");
        }elseif($request['getDtl']){
            $query = DB::connection('mysql')->select("SELECT * from tblincentivesdtl WHERE hdr_idLink=" . $request['id'] . " ORDER BY LName asc, FName asc");
        }elseif($request['getTotal']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE IHID=" . $request['id']);
        }elseif($request['getViewIncentives']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        }elseif($request['getPaymentDetail']){
            $query = DB::connection('mysql')->select("SELECT * from tblincentivespayment WHERE hdr_idLink=". $request['id'] ." ORDER BY date_created desc");
        }elseif($request['searchByDate']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE date_created >= '".$request['from']."' AND date_created <= '".$request['to']."' ORDER BY SOANo desc");
        }elseif($request['searchByPaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE balance = 0 ORDER BY SOANo desc");
        }elseif($request['searchByUnpaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE balance <> 0 ORDER BY SOANo desc");
        }elseif ($request['SOAHeaderPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblincentiveshdr WHERE SOANo IN(SELECT DISTINCT(SOANo) FROM tblincentivesledger) ORDER BY date_created desc");
        }elseif ($request['SOAHeaderTransmittal']) {
            $query = DB::connection('mysql')->select("SELECT * from tblincentiveshdr WHERE transmittal_no <> '' AND Status='TRANSMITTED' ORDER BY date_created desc");
        }elseif ($request['SOAHeaderDate']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountIncentives WHERE date_created >= '".$request['from']." 00:00:00' AND date_created <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY date_created desc");
        }elseif ($request['getLedger']) {
            $query = DB::connection('mysql')->select("SELECT * from tblincentivesledger");
        }elseif ($request['getLedgerPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblincentivespayment WHERE ledger_id=".$request['id']."");
        }elseif ($request['getLedgerPaymentSOA']) {
            $query = DB::connection('mysql')->select("SELECT * from tblincentivespayment p, tblincentivesledger l WHERE p.SOANo='".$request['SOANo']."' AND l.PLID = p.ledger_id");
        }
        return $query;
    }

    public function saveIncentivesHdr(Request $request){
        // return $post;
        $data = array(
            'IHID' => $request['IHID'] ? $request['IHID'] : "",
            'SOANo' => $request['SOANo'] ? $request['SOANo'] : "",
            'Prepared_by' => $request['Prepared_by'] ? $request['Prepared_by'] : "",
            'Prepared_by_desig' => $request['Prepared_by_desig'] ? $request['Prepared_by_desig'] : "",
            'Checked_by' => $request['Checked_by'] ? $request['Checked_by'] : "",
            'Checked_by_desig' => $request['Checked_by_desig'] ? $request['Checked_by_desig'] : "",
            'Noted_by' => $request['Noted_by'] ? $request['Noted_by'] : "",
            'Noted_by_desig' => $request['Noted_by_desig'] ? $request['Noted_by_desig'] : "",
            'Prepared_by' => $request['Prepared_by'] ? $request['Prepared_by'] : "",
            'Prepared_by_desig' => $request['Prepared_by_desig'] ? $request['Prepared_by_desig'] : "",
            'Approved_by' => $request['Approved_by'] ? $request['Approved_by'] : "",
            'Approved_by_desig' => $request['Approved_by_desig'] ? $request['Approved_by_desig'] : "",
            'Approved_by2' => $request['Approved_by2'] ? $request['Approved_by2'] : "",
            'Approved_by_desig2' => $request['Approved_by_desig2'] ? $request['Approved_by_desig2'] : "",
        );
        if($request['IHID']){
            $query = DB::connection('mysql')
                ->table('tblincentiveshdr')
                ->where('IHID', $request['IHID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblincentiveshdr')->insertGetId($data);
            if($id){
                $data['SOANo'] = "O" . date('y') . date('m') . "-" . $id;
                DB::connection('mysql')
                    ->table('tblincentiveshdr')
                    ->where('IHID', $id)
                    ->update(array('SOANo' => $data['SOANo']));
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function saveIncentivesDtl(Request $request){
        // return $post;
        $data = array(
            'IEDID' => $request['IEDID'] ? $request['IEDID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'EmpID' => $request['EmpID'] ? $request['EmpID'] : "",
            'Chapa' => $request['Chapa'] ? $request['Chapa'] : "",
            'FName' => $request['FName'] ? $request['FName'] : "",
            'MName' => $request['MName'] ? $request['MName'] : "",
            'LName' => $request['LName'] ? $request['LName'] : "",
            'ExtName' => $request['ExtName'] ? $request['ExtName'] : "",
            'Date' => $request['Date'] ? $request['Date'] : "",
            'InvoiceNo' => $request['InvoiceNo'] ? $request['InvoiceNo'] : "",
            'markup' => $request['markup'] ? $request['markup'] : "",
            'Amount' => $request['Amount'] ? $request['Amount'] : "",
            'admin_fee' => $request['admin_fee'] ? $request['admin_fee'] : "",
            'subAmount' => $request['subAmount'] ? $request['subAmount'] : "",
            'Supplier' => $request['Supplier'] ? $request['Supplier'] : "",
            'GL' => $request['GL'] ? $request['GL'] : "",
            'CC' => $request['CC'] ? $request['CC'] : "",
        );
        if($request['IEDID']){
            $query = DB::connection('mysql')
                ->table('tblincentivesdtl')
                ->where('IEDID', $request['IEDID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblincentivesdtl')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
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
        $id = DB::connection('mysql')->table('tblincentivesledger')->insertGetId($ledger_data);
        if ($id) {
            DB::connection('mysql')
                ->table('tblincentiveshdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status' => "POSTED TO LEDGER"));
            return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
        }
    }

    public function postPayment(Request $request){
        // return $post;
        $data = array(
            'IPID' => $request['IPID'] ? $request['IPID'] : "",
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
        $id = DB::connection('mysql')->table('tblincentivesledger')->insertGetId($ledger_data);
        $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountincentives WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->TotalAmount;
                    $data['hdr_idLink'] = $record->IHID;
                    DB::connection('mysql')->table('tblincentivespayment')->insertGetId($data);
                }
            }
        }
        return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
    }

    public function deleteIncentivesHDR($id){
        $query = DB::connection('mysql')
            ->table('tblincentiveshdr')
            ->select('*')
            ->where('IHID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblincentiveshdr')
                ->where('IHID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deleteIncentivesDTL($id){
        $query = DB::connection('mysql')
            ->table('tblincentivesdtl')
            ->select('*')
            ->where('IEDID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblincentivesdtl')
                ->where('IEDID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT h.*, d.*, t.TotalAmount from tblincentiveshdr h, tblincentivesdtl d, v_totalamountincentives t WHERE h.IHID = t.IHID AND h.IHID = d.hdr_idLink AND h.SOANo = '" . $request['SOANo'] . "' ORDER BY d.LName asc, d.FName asc");
        if(!$request['report']){
            return $query ? response()->json(array('success'=>true,'message'=>'Generation Successful.')) : response()->json(array('success'=>false,'message'=>'No Data Found.'));
        }else{
            if(!$query){
                $records = 'fail';
            }else{
                $records = $query;
            }
            $report_data = [
                'records' => $records
            ];
            $html = view('pdf.incentives', $report_data);
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
            $mpdf->Output('IncentivesReport.pdf', 'I');
        }
    }
}