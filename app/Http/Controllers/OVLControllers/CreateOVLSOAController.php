<?php

namespace App\Http\Controllers\OVLControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OVLModel\SOA_OVL;
use DB;
class CreateOVLSOAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SOA_OVL::latest()->paginate(0);
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

        return SOA_OVL::create([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'Status' => strtoupper($request['Status']),
            'BilledName' => strtoupper($request['BilledName']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'BilledTin' => strtoupper($request['BilledTin']),
            'CDateFrom' => strtoupper($request['CDateFrom']),
            'CDateTo' => strtoupper($request['CDateTo']),
            // 'THRUName' => strtoupper($request['THRUName']),
            // 'THRUPos' => strtoupper($request['THRUPos']),
            'OVLSoaDate' => $request['OVLSoaDate'],
            'PreparedBy' => strtoupper($request['PreparedBy']),
            'PreparedByPos' => strtoupper($request['PreparedByPos']),
            'ApprovedBy' => strtoupper($request['ApprovedBy']),
            'ApprovedByPos' => strtoupper($request['ApprovedByPos']),
            // 'CheckedBy' => strtoupper($request['CheckedBy']),
            // 'CheckedByPos' => strtoupper($request['CheckedByPos']),
            // 'NotedBy' => strtoupper($request['NotedBy']),
            // 'NotedByPos' => strtoupper($request['NotedByPos']),
            // 'SOATotalAmount' => strtoupper($request['SOATotalAmount']),
            // 'Salutation' => $request['Salutation'],
            // 'BodyofLetter' => $request['BodyofLetter'],
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
    public function update(Request $request, $Soa_OVLID)
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
        $jvl= SOA_OVL::findOrFail($Soa_OVLID);
        //$driver->update($request->all());
        $jvl->update([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'Status' => strtoupper($request['Status']),
            'BilledName' => strtoupper($request['BilledName']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'BilledTin' => strtoupper($request['BilledTin']),
            'CDateFrom' => strtoupper($request['CDateFrom']),
            'CDateTo' => strtoupper($request['CDateTo']),
            // 'THRUName' => strtoupper($request['THRUName']),
            // 'THRUPos' => strtoupper($request['THRUPos']),
            'OVLSoaDate' => $request['OVLSoaDate'],
            'PreparedBy' => strtoupper($request['PreparedBy']),
            'PreparedByPos' => strtoupper($request['PreparedByPos']),
            'ApprovedBy' => strtoupper($request['ApprovedBy']),
            'ApprovedByPos' => strtoupper($request['ApprovedByPos']),
            // 'CheckedBy' => strtoupper($request['CheckedBy']),
            // 'CheckedByPos' => strtoupper($request['CheckedByPos']),
            // 'NotedBy' => strtoupper($request['NotedBy']),
            // 'NotedByPos' => strtoupper($request['NotedByPos']),
            // 'SOATotalAmount' => strtoupper($request['SOATotalAmount']),
            // 'Salutation' => $request['Salutation'],
            // 'BodyofLetter' => $request['BodyofLetter'],
            'TotalAmount' => $request['TotalAmount']
            


            
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $jvl = SOA_OVL::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = SOA_OVL::where(function($query) use ($search){
                $query->where('GSCSoaSeriesNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = SOA_OVL::latest()->paginate(7);
        }

        return $jvl;
    }
    public function searchDateFromTo(Request $request)
    {
       /* if($search = \Request::get('q')){
            $jvl = OVLVehicleLogHDR::where(function($query) use ($search){
                $query->where('OVLPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = OVLVehicleLogHDR::latest()->paginate(7);
        }*/
       
        $datefrom= $request['DateFrom'];
        $dateto= $request['DateTo'];
        $modalsajvlfilter = new SOA_OVL();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        return SOA_OVL::all();
    }
    public function kuhaSOA(){
        $data = DB::select("SELECT count(*) as SOAIncrement from tblsoa_ovl");
        return $data;
    }
    public function kuhaSOASOA(){
        $data = DB::select("SELECT * from tblsoa_ovl");
        return $data;
    }
    public function kuhaSumSOA(Request $request){
        $idsajvl = $request['OVLVLHDRID'];
        $data = DB::select("SELECT round(sum(BillAmount),2) as BillAmount from tblovlvehicleloghdr where OVLVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateJVLSOASOA(Request $request){
        $idsajvl = $request['OVLVLHDRID'];
        $soaid = $request['Soa_OVLID'];
        $soadate = $request['OVLSoaDate'];
        $soanumber = $request['GSCSoaSeriesNo'];
        $data = DB::select("UPDATE tblovlvehicleloghdr SET SOAID_Link=$soaid,SOANumber='$soanumber',SOADate='$soadate' where OVLVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateSOAStatus(Request $request){
        $idsajvl = $request['Soa_OVLID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_ovl SET Status='$soastatus' where Soa_OVLID =$idsajvl");
        return $data;
    }
    public function cancelSOAStatus(Request $request){
        $idsajvl = $request['Soa_OVLID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_ovl SET Status='$soastatus' where Soa_OVLID =$idsajvl");
        return $data;
    }
    public function updateSOAStatusMultiple(Request $request){
        $idsajvl = $request['Soa_OVLID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_ovl SET Status='$soastatus' where Soa_OVLID in ($idsajvl)");
        return $data;
    }
    public function getSOALATESTCREATED(){
        
        $data = DB::select("SELECT Soa_OVLID, GSCSOASeriesNo, OVLSoaDate from tblsoa_ovl order by Soa_OVLID desc limit 1 ");
        return $data;
    }
    public function getSOAForIndiviualView(Request $request){
        $idsajvl = $request['Soa_OVLID'];
        $data = DB::select("SELECT * from tblovlvehicleloghdr where SOAID_Link = $idsajvl ");
        return $data;
    }
    public function getManyJVLSOANUMBER(Request $request){
        $idsajvl = $request['OVLVLHDRID'];
        $data = DB::select("SELECT SOANumber from tblovlvehicleloghdr where OVLVLHDRID in ($idsajvl)  limit 1 ");
        return $data;
    }
}
