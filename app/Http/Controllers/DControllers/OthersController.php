<?php

namespace App\Http\Controllers\DControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use Mpdf\Mpdf;
use DB;
class OthersController extends Controller
{
    public function getOthers(Request $request){
        if($request['getOthersHeader']){
            $query = DB::connection('mysql')->select("SELECT * from tblothershdr ORDER BY date_created desc");
        }elseif($request['getDtl']){
            $query = DB::connection('mysql')->select("SELECT * from tblothersdtl WHERE hdr_idLink=" . $request['id'] . " ORDER BY Description asc");
        }elseif($request['getTotal']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE OHID=" . $request['id']);
        }elseif($request['getViewOthers']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        }elseif($request['getPaymentDetail']){
            $query = DB::connection('mysql')->select("SELECT * from tblotherspayment WHERE hdr_idLink=". $request['id'] ." ORDER BY date_created desc");
        }elseif($request['searchByDate']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE date_created >= '".$request['from']."' AND date_created <= '".$request['to']."' ORDER BY SOANo desc");
        }elseif($request['searchByPaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE balance = 0 ORDER BY SOANo desc");
        }elseif($request['searchByUnpaid']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE balance <> 0 ORDER BY SOANo desc");
        }elseif ($request['SOAHeaderPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblothershdr WHERE SOANo IN(SELECT DISTINCT(SOANo) FROM tblothersledger) ORDER BY date_created desc");
        }elseif ($request['SOAHeaderTransmittal']) {
            $query = DB::connection('mysql')->select("SELECT * from tblothershdr WHERE transmittal_no <> '' AND Status='TRANSMITTED' ORDER BY date_created desc");
        }elseif ($request['SOAHeaderDate']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountOthers WHERE date_created >= '".$request['from']." 00:00:00' AND date_created <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY date_created desc");
        }elseif ($request['getLedger']) {
            $query = DB::connection('mysql')->select("SELECT * from tblothersledger");
        }elseif ($request['getLedgerPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblotherspayment WHERE ledger_id=".$request['id']."");
        }elseif ($request['getLedgerPaymentSOA']) {
            $query = DB::connection('mysql')->select("SELECT * from tblotherspayment p, tblothersledger l WHERE p.SOANo='".$request['SOANo']."' AND l.PLID = p.ledger_id");
        }
        return $query;
    }

    public function saveOthersHdr(Request $request){
        // return $post;
        $data = array(
            'OHID' => $request['OHID'] ? $request['OHID'] : "",
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
        if($request['OHID']){
            $query = DB::connection('mysql')
                ->table('tblothershdr')
                ->where('OHID', $request['OHID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblothershdr')->insertGetId($data);
            if($id){
                $data['SOANo'] = "O" . date('y') . date('m') . "-" . $id;
                DB::connection('mysql')
                    ->table('tblothershdr')
                    ->where('OHID', $id)
                    ->update(array('SOANo' => $data['SOANo']));
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function saveOthersDtl(Request $request){
        // return $post;
        $data = array(
            'OEDID' => $request['OEDID'] ? $request['OEDID'] : "",
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
        if($request['OEDID']){
            $query = DB::connection('mysql')
                ->table('tblothersdtl')
                ->where('OEDID', $request['OEDID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblothersdtl')->insertGetId($data);
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
        $id = DB::connection('mysql')->table('tblothersledger')->insertGetId($ledger_data);
        if ($id) {
            DB::connection('mysql')
                ->table('tblothershdr')
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
            'OPID' => $request['OPID'] ? $request['OPID'] : "",
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
        $id = DB::connection('mysql')->table('tblothersledger')->insertGetId($ledger_data);
        $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountothers WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->TotalAmount;
                    $data['hdr_idLink'] = $record->OHID;
                    DB::connection('mysql')->table('tblotherspayment')->insertGetId($data);
                }
            }
        }
        return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
    }

    public function deleteOthersHDR($id){
        $query = DB::connection('mysql')
            ->table('tblothershdr')
            ->select('*')
            ->where('OHID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblothershdr')
                ->where('OHID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deleteOthersDTL($id){
        $query = DB::connection('mysql')
            ->table('tblothersdtl')
            ->select('*')
            ->where('OEDID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblothersdtl')
                ->where('OEDID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT h.*, d.*, t.TotalAmount from tblothershdr h, tblothersdtl d, v_totalamountothers t WHERE h.OHID = t.OHID AND h.OHID = d.hdr_idLink AND h.SOANo = '" . $request['SOANo'] . "' ORDER BY d.Description asc");
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
            $html = view('pdf.others', $report_data);
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
            $mpdf->Output('OthersReport.pdf', 'I');
        }
    }
}