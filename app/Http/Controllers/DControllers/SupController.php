<?php

namespace App\Http\Controllers\DControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use Mpdf\Mpdf;
use DB;
class SupController extends Controller
{
    public function getSUP(Request $request){
        if($request['getSUPList']){
            $query = DB::connection('mysql')->select("SELECT * from tblsuplist ORDER BY Description desc");
        }elseif($request['getSUPHeader']){
            $query = DB::connection('mysql')->select("SELECT * from tblsuphdr ORDER BY date_created desc");
        }elseif($request['getDtl']){
            $query = DB::connection('mysql')->select("SELECT * from tblsupdtl WHERE hdr_idLink=" . $request['id'] . " ORDER BY Description asc");
        }elseif($request['getTotal']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE SHID=" . $request['id']);
        }elseif($request['getViewSUP']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        }elseif($request['getPaymentDetail']){
            $query = DB::connection('mysql')->select("SELECT * from tblsuppayment WHERE hdr_idLink=". $request['id'] ." ORDER BY date_created desc");
        }elseif($request['searchByDate']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE date_created >= '".$request['from']."' AND date_created <= '".$request['to']."' ORDER BY SOANo desc");
        }elseif($request['searchByPaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE balance = 0 ORDER BY SOANo desc");
        }elseif($request['searchByUnpaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE balance <> 0 ORDER BY SOANo desc");
        }elseif ($request['SOAHeaderPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsuphdr WHERE SOANo IN(SELECT DISTINCT(SOANo) FROM tblsupledger) ORDER BY date_created desc");
        }elseif ($request['SOAHeaderTransmittal']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsuphdr WHERE transmittal_no <> '' AND Status='TRANSMITTED' ORDER BY date_created desc");
        }elseif ($request['SOAHeaderDate']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountSUP WHERE date_created >= '".$request['from']." 00:00:00' AND date_created <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY date_created desc");
        }elseif ($request['getLedger']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsupledger");
        }elseif ($request['getLedgerPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsuppayment WHERE ledger_id=".$request['id']."");
        }elseif ($request['getLedgerPaymentSOA']) {
            $query = DB::connection('mysql')->select("SELECT * from tblsuppayment p, tblsupledger l WHERE p.SOANo='".$request['SOANo']."' AND l.PLID = p.ledger_id");
        }
        return $query;
    }

    public function saveSUPList(Request $request){
        // return $post;
        $data = array(
            'SLID' => $request['SLID'] ? $request['SLID'] : "",
            'Code' => $request['Code'] ? $request['Code'] : "",
            'Description' => $request['Description'] ? $request['Description'] : "",
            'Unit' => $request['Unit'] ? $request['Unit'] : "",
            'UnitPrice' => $request['UnitPrice'] ? $request['UnitPrice'] : ""
        );
        if($request['SLID']){
            $query = DB::connection('mysql')
                ->table('tblsuplist')
                ->where('SLID', $request['SLID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblsuplist')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function saveSUPHdr(Request $request){
        // return $post;
        $data = array(
            'SHID' => $request['SHID'] ? $request['SHID'] : "",
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
        if($request['SHID']){
            $query = DB::connection('mysql')
                ->table('tblsuphdr')
                ->where('SHID', $request['SHID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblsuphdr')->insertGetId($data);
            if($id){
                $data['SOANo'] = "SUP" . date('y') . date('m') . "-" . $id;
                DB::connection('mysql')
                    ->table('tblsuphdr')
                    ->where('SHID', $id)
                    ->update(array('SOANo' => $data['SOANo']));
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function saveSUPDtl(Request $request){
        // return $post;
        $data = array(
            'SEDID' => $request['SEDID'] ? $request['SEDID'] : "",
            'hdr_idLink' => $request['hdr_idLink'] ? $request['hdr_idLink'] : "",
            'Date' => $request['Date'] ? $request['Date'] : "",
            'InvoiceNo' => $request['InvoiceNo'] ? $request['InvoiceNo'] : "",
            'Qty' => $request['Qty'] ? $request['Qty'] : "",
            'Unit' => $request['Unit'] ? $request['Unit'] : "",
            'Description' => $request['Description'] ? $request['Description'] : "",
            'Price' => $request['Price'] ? $request['Price'] : "",
            'markup' => $request['markup'] ? $request['markup'] : "",
            'Amount' => $request['Amount'] ? $request['Amount'] : "",
            'subPrice' => $request['subPrice'] ? $request['subPrice'] : "",
            'subAmount' => $request['subAmount'] ? $request['subAmount'] : "",
            'Supplier' => $request['Supplier'] ? $request['Supplier'] : "",
            'GL' => $request['GL'] ? $request['GL'] : "",
            'CC' => $request['CC'] ? $request['CC'] : "",
        );
        if($request['SEDID']){
            $query = DB::connection('mysql')
                ->table('tblsupdtl')
                ->where('SEDID', $request['SEDID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblsupdtl')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function postPayment(Request $request){
        // return $post;
        $data = array(
            'SPID' => $request['SPID'] ? $request['SPID'] : "",
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
        $id = DB::connection('mysql')->table('tblsupledger')->insertGetId($ledger_data);
        $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountsup WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->TotalAmount;
                    $data['hdr_idLink'] = $record->SHID;
                    DB::connection('mysql')->table('tblsuppayment')->insertGetId($data);
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
        $id = DB::connection('mysql')->table('tblsupledger')->insertGetId($ledger_data);
        if ($id) {
            DB::connection('mysql')
                ->table('tblsuphdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status' => "POSTED TO LEDGER"));
            return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
        }
    }

    public function deleteSUPList($id){
        $query = DB::connection('mysql')
            ->table('tblsuplist')
            ->select('*')
            ->where('SLID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblsuplist')
                ->where('SLID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deleteSUPHDR($id){
        $query = DB::connection('mysql')
            ->table('tblsuphdr')
            ->select('*')
            ->where('SHID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblsuphdr')
                ->where('SHID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deleteSUPDTL($id){
        $query = DB::connection('mysql')
            ->table('tblsupdtl')
            ->select('*')
            ->where('SEDID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblsupdtl')
                ->where('SEDID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deleteSUPPayment($id){
        $query = DB::connection('mysql')
            ->table('tblsuppayment')
            ->select('*')
            ->where('SPID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblsuppayment')
                ->where('SPID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT h.*, d.*, t.TotalAmount from tblsuphdr h, tblsupdtl d, v_totalamountsup t WHERE h.SHID = t.SHID AND h.SHID = d.hdr_idLink AND h.SOANo = '" . $request['SOANo'] . "' ORDER BY d.Description asc");
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
            $html = view('pdf.supplies', $report_data);
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
            $mpdf->Output('SUPReport.pdf', 'I');
        }
    }
}