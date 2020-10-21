<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\GolfCartModel\GolfCartSoaHdr;
Use App\Model\GolfCartModel\GolfCartSoaDtl;
Use App\Model\GolfCartModel\GolfCartLedger;
Use App\Model\GolfCartModel\GolfCartTransmittalHdr;
use Mpdf\Mpdf;
use DB;
class GolfCartSoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GolfCartSoaHdr::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'billed_name' => 'required|string|max:191',
            'series_no' => 'required|string|max:191',
            'charge_invoice_no' => 'required|string|max:191',
            'soa_date' => 'required|string|max:191',
            'preparedBy' => 'required|string|max:191',
            'verifiedBy' => 'required|string|max:191',
            'notedBy' => 'required|string|max:191'
        ]);
        
        $header = GolfCartSoaHdr::create($request->all());
        $id = $header->id;
        $rental = $request['rentals'];
        $detail = $request['grandtotals'];
        foreach($detail as $dtl)
        {
            $data['soa_hdr_id'] = $id;
            $data['period_month'] = $dtl['x_month'];
            $data['year'] = $dtl['x_year'];
            $data['particulars'] = "GOLF CART RENTAL";
            $data['amount'] = $dtl['total_amount'];
            GolfCartSoaDtl::create($data);
        }

        foreach($rental as $r)
        {
            GolfCartLedger::where('id',$r['id'])->update(['soaid_link'=>$id]);
        }

        return $header ;
    }

    public function store_detail(Request $request)
    {
        GolfCartSoaHdr::FindOrFail($request['soa_hdr_id'])->increment('total_amount', $request['amount']);
        return GolfCartSoaDtl::create($request->all());
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'POSTED']);
        return ['message'=>'Data updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MotorVehicleList::FindOrFail($id)->delete();
        return ['message'=>'Deleted']; 
    }

    public function search($from,$to,$status){
        return ['data'=>GolfCartSoaHdr::whereBetween('soa_date',[$from,$to])->where('status', $status)->get()];
    }

    public function previewt($from, $to){
        return ['data'=>GolfCartSoaHdr::whereBetween('soa_date',[$from,$to])->where('status', 'FOR TRANSMITTAL')->get()];
    }

    public function transmittal_no(){
        $series = 'GCTNo-00001';
        $query = DB::connection('mysql')->select("SELECT * from golf_cart_transmittal_hdr ORDER BY transmittal_id desc LIMIT 1");
        if($query){
            foreach($query as $record){
                $string = $record->series_no;
                $final = $this->strrstr($string, '-', false);
                $output = (int)trim($final,'-') + 1;
                $s_number = str_pad( $output, 5, "0", STR_PAD_LEFT );
                $series = 'GCTNo-'.$s_number;
                break;
            }
        }
        return $series;
    }

    public function create_transmittal(Request $request){
        $data = array(
            'prepared_by' => $request['prepared_by'] ? $request['prepared_by'] : "",
            'prepared_by_desig' => $request['prepared_by_desig'] ? $request['prepared_by_desig'] : "",
            'noted_by' => $request['noted_by'] ? $request['noted_by'] : "",
            'noted_by_desig' => $request['noted_by_desig'] ? $request['noted_by_desig'] : ""
        );
        $ids = $request['ids'];
        $query = DB::connection('mysql')->select("SELECT * from golf_cart_transmittal_hdr ORDER BY transmittal_id desc LIMIT 1");
        if($query){
            foreach($query as $record){
                $string = $record->series_no;
                $final = $this->strrstr($string, '-', false);
                $output = (int)trim($final,'-') + 1;
                $s_number = str_pad( $output, 5, "0", STR_PAD_LEFT );
                $data['series_no'] = 'GCTNo-'.$s_number;
                break;
            }
        }else{
            $data['series_no'] = 'GCTNo-00001';
        }
        $id = DB::connection('mysql')->table('golf_cart_transmittal_hdr')->insertGetId($data);
        if($id){
            $search_ids = DB::connection('mysql')->select("SELECT * from golf_cart_soa_hdr WHERE id IN(".$ids.")");
            if($search_ids){
                $dtl = array('hdr_id' => $id);
                foreach($search_ids as $record){
                    $dtl['soa_id'] = $record->id;
                    DB::connection('mysql')->table('golf_cart_transmittal_dtl')->insert($dtl);
                }
            }
            $query = DB::connection('mysql')
                ->table('golf_cart_soa_hdr')
                ->whereRaw("id IN(".$ids.")")
                ->update(array('status' => 'TRANSMITTED'));
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
            return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
        }else{
            return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
        }
      
        // return ['data'=> GolfCartSoaHdr::FindOrFail($ids)->update(['status'=>'TRANSMITTED'])];
    }
    public function cancel($id){
        return ['data'=> GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function post($id){
        return ['data'=> GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function reactivate($id){
        return ['data'=> GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'ACTIVE'])];
    }

    public function transmit($id){
        return ['data'=> GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'FOR TRANSMITTAL'])];
    }

    public function payee($payee){
        return ['data'=>GolfCartSoaHdr::where('billed_name', 'LIKE', '%'. $payee .'%')->where('status', 'FOR TRANSMITTAL')->get()];
    }

    public function soa_number($soa){
        return ['data'=>GolfCartSoaHdr::where('series_no', 'LIKE', '%'. $soa .'%')->where('status', 'FOR TRANSMITTAL')->get()];
    }

    public function collected($id){
        return ['data'=> GolfCartSoaHdr::FindOrFail($id)->update(['status'=>'COLLECTED'])];
    }

    public function details($id){
        return ['data'=>GolfCartSoaDtl::where('soa_hdr_id',$id)->get(),'sum'=>GolfCartSoaDtl::where('soa_hdr_id',$id)->get()->sum('amount')];
    }

    public function print_transmittal(Request $request){
        $query = DB::connection('mysql')
        ->select("SELECT a.*, b.prepared_by, b.noted_by, b.series_no FROM golf_cart_ledger a, golf_cart_transmittal_hdr b, golf_cart_transmittal_dtl c WHERE b.series_no = '" . $request['transmittal_no'] . "' AND b.transmittal_id = c.hdr_id AND a.id = c.soa_id");
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
            $html = view('pdf.golfcart_transmittal', $report_data);
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
            $mpdf->Output('GolfCartTransmittal.pdf', 'I');
        }
    }
    public function search_transmittal(){
        $query = DB::connection('mysql')
        ->select("SELECT * FROM golf_cart_transmittal_hdr ORDER BY series_no desc");
        return $query;
    }
    function strrstr($h, $n, $before = false) {
        $rpos = strrpos($h, $n);
        if($rpos === false) return false;
        if($before == false) return substr($h, $rpos);
        else return substr($h, 0, $rpos);
    }
}
