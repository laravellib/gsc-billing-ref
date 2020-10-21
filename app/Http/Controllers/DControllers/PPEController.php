<?php

namespace App\Http\Controllers\DControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use Mpdf\Mpdf;
use DB;
class PPEController extends Controller
{
    public function getPPE(Request $request){
        if($request['getPPEList']){
            $query = DB::connection('mysql')->select("SELECT * from tblppelist ORDER BY Description desc");
        }elseif($request['getPPEHeader']){
            $query = DB::connection('mysql')->select("SELECT * from tblppehdr ORDER BY date_created desc");
        }elseif ($request['SOAHeaderPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblppehdr WHERE SOANo IN(SELECT DISTINCT(SOANo) FROM tblppeledger) ORDER BY date_created desc");
        }elseif($request['getDtl']){
            $query = DB::connection('mysql')->select("SELECT * from tblppedtl WHERE hdr_idLink=" . $request['id'] . " ORDER BY Description asc");
        }elseif($request['getTotal']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalAmountPPE WHERE PHID=" . $request['id']);
        }elseif($request['getViewPPE']){
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountppe WHERE SOANo='" . $request['SOANo'] . "' ORDER BY SOANo desc");
        }elseif($request['getPaymentDetail']){
            $query = DB::connection('mysql')->select("SELECT * from tblppepayment WHERE hdr_idLink=". $request['id'] ." ORDER BY date_created desc");
        } elseif ($request['getLedger']) {
            $query = DB::connection('mysql')->select("SELECT * from tblppeledger");
        } elseif ($request['getLedgerPayment']) {
            $query = DB::connection('mysql')->select("SELECT * from tblppepayment WHERE ledger_id=".$request['id']."");
        } elseif ($request['getLedgerPaymentSOA']) {
            $query = DB::connection('mysql')->select("SELECT * from tblppepayment p, tblppeledger l WHERE p.SOANo='".$request['SOANo']."' AND l.PLID = p.ledger_id");
        } elseif ($request['SOAHeaderDate']) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountppe WHERE date_created >= '".$request['from']." 00:00:00' AND date_created <= '".$request['to']." 23:59:59' AND Status='ACTIVE' ORDER BY date_created desc");
        } elseif ($request['SOAHeaderTransmittal']) {
            $query = DB::connection('mysql')->select("SELECT * from tblppehdr WHERE transmittal_no <> '' AND Status='TRANSMITTED' ORDER BY date_created desc");
        }
        return $query;
    }

    public function savePPEList(Request $request){
        // return $post;
        $data = array(
            'PLID' => $request['PLID'] ? $request['PLID'] : "",
            'Code' => $request['Code'] ? $request['Code'] : "",
            'Description' => $request['Description'] ? $request['Description'] : "",
            'Supplier' => $request['Supplier'] ? $request['Supplier'] : "",
            'Unit' => $request['Unit'] ? $request['Unit'] : "",
            'UnitPrice' => $request['UnitPrice'] ? $request['UnitPrice'] : ""
        );
        if($request['PLID']){
            $query = DB::connection('mysql')
                ->table('tblppelist')
                ->where('PLID', $request['PLID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblppelist')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function savePPEHdr(Request $request){
        // return $post;
        $data = array(
            'PHID' => $request['PHID'] ? $request['PHID'] : "",
            'SOANo' => $request['SOANo'] ? $request['SOANo'] : "",
            'Prepared_by' => $request['Prepared_by'] ? $request['Prepared_by'] : "",
            'Prepared_by_desig' => $request['Prepared_by_desig'] ? $request['Prepared_by_desig'] : "",
            'Approved_by' => $request['Approved_by'] ? $request['Approved_by'] : "",
            'Approved_by_desig' => $request['Approved_by_desig'] ? $request['Approved_by_desig'] : "",
        );
        if($request['PHID']){
            $query = DB::connection('mysql')
                ->table('tblppehdr')
                ->where('PHID', $request['PHID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblppehdr')->insertGetId($data);
            if($id){
                $data['SOANo'] = "PPE" . date('y') . date('m') . "-" . $id;
                DB::connection('mysql')
                    ->table('tblppehdr')
                    ->where('PHID', $id)
                    ->update(array('SOANo' => $data['SOANo']));
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function savePPEDtl(Request $request){
        // return $post;
        $data = array(
            'PEDID' => $request['PEDID'] ? $request['PEDID'] : "",
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
        if($request['PEDID']){
            $query = DB::connection('mysql')
                ->table('tblppedtl')
                ->where('PEDID', $request['PEDID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblppedtl')->insertGetId($data);
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
            'PPID' => $request['PPID'] ? $request['PPID'] : "",
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
        $id = DB::connection('mysql')->table('tblppeledger')->insertGetId($ledger_data);
        $data['ledger_id'] = $id;
        foreach ($request['soaList'] as $soa) {
            $query = DB::connection('mysql')->select("SELECT * from v_totalamountppe WHERE SOANo='" . $soa . "'");
            if ($query) {
                foreach ($query as $record) {
                    $data['SOANo'] = $soa;
                    $data['billed_amount'] = $record->TotalAmount;
                    $data['hdr_idLink'] = $record->PHID;
                    DB::connection('mysql')->table('tblppepayment')->insertGetId($data);
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
        $id = DB::connection('mysql')->table('tblppeledger')->insertGetId($ledger_data);
        if ($id) {
            DB::connection('mysql')
                ->table('tblppehdr')
                ->where('SOANo', $request['SOANo'])
                ->update(array('Status' => "POSTED TO LEDGER"));
            return response()->json(array('success' => true, 'message' => 'Successfully inserted.'));
        } else {
            return response()->json(array('success' => false, 'message' => 'Failed inserting.'));
        }
    }

    public function deletePPEList($id){
        $query = DB::connection('mysql')
            ->table('tblppelist')
            ->select('*')
            ->where('PLID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblppelist')
                ->where('PLID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deletePPEHDR($id){
        $query = DB::connection('mysql')
            ->table('tblppehdr')
            ->select('*')
            ->where('PHID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblppehdr')
                ->where('PHID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deletePPEDTL($id){
        $query = DB::connection('mysql')
            ->table('tblppedtl')
            ->select('*')
            ->where('PEDID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblppedtl')
                ->where('PEDID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function deletePPEPayment($id){
        $query = DB::connection('mysql')
            ->table('tblppepayment')
            ->select('*')
            ->where('PPID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblppepayment')
                ->where('PPID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT h.*, d.*, t.TotalAmount from tblppehdr h, tblppedtl d, v_totalamountppe t WHERE h.PHID = t.PHID AND h.PHID = d.hdr_idLink AND h.SOANo = '" . $request['SOANo'] . "' ORDER BY d.Description asc");
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
            $html = view('pdf.ppe', $report_data);
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
            $mpdf->Output('PPEReport.pdf', 'I');
        }
    }
}