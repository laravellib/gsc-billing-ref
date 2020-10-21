<?php

namespace App\Http\Controllers\PHBControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use DB;
class CreatePHBSOAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SOA_PHB::latest()->paginate(0);
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

        return SOA_PHB::create([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'Status' => strtoupper($request['Status']),
            'BilledName' => strtoupper($request['BilledName']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'THRUName' => strtoupper($request['THRUName']),
            'THRUPos' => strtoupper($request['THRUPos']),
            'PHBSoaDate' => $request['PHBSoaDate'],
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
    public function update(Request $request, $Soa_PHBID)
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
        $jvl= SOA_PHB::findOrFail($Soa_PHBID);
        //$driver->update($request->all());
        $jvl->update([
            'GSCSoaSeriesNo' => $request['GSCSoaSeriesNo'],
            'BilledToIDLink' => $request['BilledToIDLink'],
            'BilledName' => strtoupper($request['BilledName']),
            'Status' => strtoupper($request['Status']),
            'BilledAddress' => strtoupper($request['BilledAddress']),
            'THRUName' => strtoupper($request['THRUName']),
            'THRUPos' => strtoupper($request['THRUPos']),
            'PHBSoaDate' => $request['PHBSoaDate'],
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $jvl = SOA_PHB::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = SOA_PHB::where(function($query) use ($search){
                $query->where('GSCSoaSeriesNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = SOA_PHB::latest()->paginate(7);
        }

        return $jvl;
    }
    public function searchDateFromTo(Request $request)
    {
       /* if($search = \Request::get('q')){
            $jvl = PHBVehicleLogHDR::where(function($query) use ($search){
                $query->where('PHBPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = PHBVehicleLogHDR::latest()->paginate(7);
        }*/
       
        $datefrom= $request['DateFrom'];
        $dateto= $request['DateTo'];
        $modalsajvlfilter = new SOA_PHB();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        return SOA_PHB::all();
    }
    public function kuhaSOA(){
        $data = DB::select("SELECT count(*) as SOAIncrement from tblsoa_phb");
        return $data;
    }
    public function kuhaSOASOA(){
        $data = DB::select("SELECT * from tblsoa_phb");
        return $data;
    }
    public function kuhaSumSOA(Request $request){
        $idsajvl = $request['PHBVLHDRID'];
        $data = DB::select("SELECT round(sum(BillAmount),2) as BillAmount from tblphbvehicleloghdr where PHBVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateJVLSOASOA(Request $request){
        $idsajvl = $request['PHBVLHDRID'];
        $soaid = $request['Soa_PHBID'];
        $soadate = $request['PHBSoaDate'];
        $soanumber = $request['GSCSoaSeriesNo'];
        $data = DB::select("UPDATE tblphbvehicleloghdr SET SOAID_Link=$soaid,SOANumber='$soanumber',SOADate='$soadate' where PHBVLHDRID in ($idsajvl)");
        return $data;
    }
    public function updateSOAStatus(Request $request){
        $idsajvl = $request['Soa_PHBID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_phb SET Status='$soastatus' where Soa_PHBID =$idsajvl");
        return $data;
    }
    public function cancelSOAStatus(Request $request){
        $idsajvl = $request['Soa_PHBID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_phb SET Status='$soastatus' where Soa_PHBID =$idsajvl");
        return $data;
    }
    public function updateSOAStatusMultiple(Request $request){
        $idsajvl = $request['Soa_PHBID'];
        $soastatus = $request['Status'];
        $data = DB::select("UPDATE tblsoa_phb SET Status='$soastatus' where Soa_PHBID in ($idsajvl)");
        return $data;
    }
    public function getSOALATESTCREATED(){
        
        $data = DB::select("SELECT Soa_PHBID, GSCSOASeriesNo, PHBSoaDate from tblsoa_phb order by Soa_PHBID desc limit 1 ");
        return $data;
    }
    public function getSOAForIndiviualView(Request $request){
        $idsajvl = $request['Soa_PHBID'];
        $data = DB::select("SELECT * from tblphbvehicleloghdr where SOAID_Link = $idsajvl ");
        return $data;
    }
    public function getManyJVLSOANUMBER(Request $request){
        $idsajvl = $request['PHBVLHDRID'];
        $data = DB::select("SELECT SOANumber from tblphbvehicleloghdr where PHBVLHDRID in ($idsajvl)  limit 1 ");
        return $data;
    }
}
