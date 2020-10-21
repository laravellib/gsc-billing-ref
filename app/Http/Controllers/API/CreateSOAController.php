<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\JeepModel\SOA_Jeep;
use Mpdf\Mpdf;
use DB;
class CreateSOAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SOA_Jeep::latest()->paginate(0);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }

   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        date_default_timezone_set('Asia/Manila');

        return SOA_Jeep::create([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'Status' => strtoupper($request['Status']),
            'BilledName' => strtoupper($request['BilledName']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'THRUName' => strtoupper($request['THRUName']),
            'THRUPos' => strtoupper($request['THRUPos']),
            'JeepSoaDate' => $request['JeepSoaDate'],
            'PreparedBy' => strtoupper($request['PreparedBy']),
            'PreparedByPos' => strtoupper($request['PreparedByPos']),
            'CheckedBy' => strtoupper($request['CheckedBy']),
            'CheckedByPos' => strtoupper($request['CheckedByPos']),
            'NotedBy' => strtoupper($request['NotedBy']),
            'NotedByPos' => strtoupper($request['NotedByPos']),
            'SOATotalAmount' => strtoupper($request['SOATotalAmount']),
            'Salutation' => $request['Salutation'],
            'BodyofLetter' => $request['BodyofLetter'],
            'TotalAmount' => $request['TotalAmount']
        ]);
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
    public function update(Request $request, $JVLHDRID)
    {
        /*$this->validate($request,[
            'PlateNumber' => 'required|string|max:50',
            'EngineNumber' => 'required|string|max:50',
            'SerialNumber' => 'required|string|max:50',
            'AssetNumber' => 'required|string|max:50',
            'Type' => 'required|string|max:20',
            'DriverName' => 'required|string|max:50',
            'OperatorName' => 'required|string|max:50',
            'GSCUnit' => 'required|string|max:1',
        ]);*/

        date_default_timezone_set('Asia/Manila');
        $jvl= SOA_Jeep::findOrFail($JVLHDRID);
        //$driver->update($request->all());
        $jvl->update([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'BilledName' => strtoupper($request['BilledName']),
            'Status' => strtoupper($request['Status']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'THRUName' => strtoupper($request['THRUName']),
            'THRUPos' => strtoupper($request['THRUPos']),
            'JeepSoaDate' => $request['JeepSoaDate'],
            'PreparedBy' => strtoupper($request['PreparedBy']),
            'PreparedByPos' => strtoupper($request['PreparedByPos']),
            'CheckedBy' => strtoupper($request['CheckedBy']),
            'CheckedByPos' => strtoupper($request['CheckedByPos']),
            'NotedBy' => strtoupper($request['NotedBy']),
            'NotedByPos' => strtoupper($request['NotedByPos']),
            'SOATotalAmount' => strtoupper($request['SOATotalAmount']),
            'Salutation' => $request['Salutation'],
            'BodyofLetter' => $request['BodyofLetter'],
            'TotalAmount' => $request['TotalAmount'],
            'InvoiceDate' => $request['InvoiceDate'],
            'InvoiceNo' => $request['InvoiceNo'],
        ]);
    }
    public function updateJeepSOA(Request $request){
        date_default_timezone_set('Asia/Manila');
        $query = DB::connection('mysql')
                ->table('tblsoa_jeep')
                ->where('Soa_JeepID', $request['Soa_JeepID'])
                ->update($request->all());
        if($query){
            return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
        }else{
            return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $jvl = SOA_Jeep::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = SOA_Jeep::where(function($query) use ($search){
                $query->where('GSCSoaSeriesNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = SOA_Jeep::latest()->paginate(7);
        }

        return $jvl;
    }
    public function searchDateFromTo(Request $request)
    {
       /* if($search = \Request::get('q')){
            $jvl = JeepVehicleLogHDR::where(function($query) use ($search){
                $query->where('JeepPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = JeepVehicleLogHDR::latest()->paginate(7);
        }*/
       
        $datefrom= $request['DateFrom'];
        $dateto= $request['DateTo'];
        $modalsajvlfilter = new SOA_Jeep();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        return SOA_Jeep::all();
    }
    public function kuhaSOA(){
        $data = DB::select("SELECT count(*) as SOAIncrement from tblsoa_jeep");
        return $data;
    }
    public function kuhaSOASOA(){
        $data = DB::select("SELECT * from tblsoa_jeep");
        return $data;
    }
    public function kuhaSOATransmittal(Request $request){
        $from = $request['from'];
        $to = $request['to'];
        $data = DB::select("SELECT * from tblsoa_jeep WHERE `Status` = 'FOR TRANSMITTAL' AND JeepSoaDate BETWEEN '".$from."' AND '".$to."'");
        return $data;
    }
    public function kuhaSumSOA(Request $request){
        $idsajvl = $request['JVLHDRID'];
        $data = DB::select("SELECT round(sum(BillAmount),2) as BillAmount from tbljeepvehicleloghdr where JVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateJVLSOASOA(Request $request){
        $idsajvl = $request['JVLHDRID'];
        $soaid = $request['SOA_JeepID'];
        $soadate = $request['JeepSoaDate'];
        $soanumber = $request['GSCSoaSeriesNo'];
        $data = DB::select("UPDATE tbljeepvehicleloghdr SET SOAID_Link=$soaid,SOANumber='$soanumber',SOADate='$soadate' where JVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateSOAStatus(Request $request){
        $idsajvl = $request['Soa_JeepID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_jeep SET Status='$soastatus' where Soa_JeepID =$idsajvl");
        return $data;
    }
    public function cancelSOAStatus(Request $request){
        $idsajvl = $request['Soa_JeepID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_jeep SET Status='$soastatus' where Soa_JeepID =$idsajvl");
        return $data;
    }
    public function updateSOAStatusMultiple(Request $request){
        $idsajvl = $request['Soa_JeepID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_jeep SET Status='$soastatus' where Soa_JeepID in ($idsajvl)");
        return $data;
    }
    public function getSOALATESTCREATED(){
        
        $data = DB::select("SELECT SOA_JeepID, GSCSOASeriesNo, JeepSoaDate from tblsoa_jeep order by Soa_JeepID desc limit 1 ");
        return $data;
    }
    public function getSOAForIndiviualView(Request $request){
        $idsajvl = $request['Soa_JeepID'];
        $data = DB::select("SELECT * from tbljeepvehicleloghdr where SOAID_Link = $idsajvl ");
        return $data;
    }
    public function getManyJVLSOANUMBER(Request $request){
        $idsajvl = $request['JVLHDRID'];
        $data = DB::select("SELECT SOANumber from tbljeepvehicleloghdr where JVLHDRID in ($idsajvl)  limit 1 ");
        return $data;
    }
    public function search_transmittal(){
        $query = DB::connection('mysql')
        ->select("SELECT * FROM tbljeeptransmittalhdr ORDER BY series_no desc");
        return $query;
    }
    public function transmittal_no(){
        $series = 'JTNo-00001';
        $query = DB::connection('mysql')->select("SELECT * from tbljeeptransmittalhdr ORDER BY transmittal_id desc LIMIT 1");
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
    public function print_transmittal(Request $request){
        $query = DB::connection('mysql')
        ->select("SELECT a.*, b.prepared_by, b.noted_by, b.series_no FROM tbljeepvehicleloghdr a, tbljeeptransmittalhdr b, tbljeeptransmittaldtl c WHERE b.series_no = '" . $request['transmittal_no'] . "' AND b.transmittal_id = c.hdr_id AND a.SOAID_Link = c.soa_id");
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
            $html = view('pdf.jeep_transmittal', $report_data);
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
            $mpdf->Output('JeepTransmittal.pdf', 'I');
        }
    }
    public function create_transmittal(Request $request){
        $data = array(
            'prepared_by' => $request['prepared_by'] ? $request['prepared_by'] : "",
            'prepared_by_desig' => $request['prepared_by_desig'] ? $request['prepared_by_desig'] : "",
            'noted_by' => $request['noted_by'] ? $request['noted_by'] : "",
            'noted_by_desig' => $request['noted_by_desig'] ? $request['noted_by_desig'] : ""
        );
        $ids = $request['ids'];
        $query = DB::connection('mysql')->select("SELECT * from tbljeeptransmittalhdr ORDER BY transmittal_id desc LIMIT 1");
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
        $id = DB::connection('mysql')->table('tbljeeptransmittalhdr')->insertGetId($data);
        if($id){
            $search_ids = DB::connection('mysql')->select("SELECT * from tblsoa_jeep WHERE Soa_JeepID IN(".$ids.")");
            if($search_ids){
                $dtl = array('hdr_id' => $id);
                foreach($search_ids as $record){
                    $dtl['soa_id'] = $record->Soa_JeepID;
                    DB::connection('mysql')->table('tbljeeptransmittaldtl')->insert($dtl);
                }
            }
            $query = DB::connection('mysql')
                ->table('tblsoa_jeep')
                ->whereRaw("Soa_JeepID IN(".$ids.")")
                ->update(array('Status' => 'TRANSMITTED'));
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
            return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
        }else{
            return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
        }
    }
    function strrstr($h, $n, $before = false) {
        $rpos = strrpos($h, $n);
        if($rpos === false) return false;
        if($before == false) return substr($h, $rpos);
        else return substr($h, 0, $rpos);
    }
}
