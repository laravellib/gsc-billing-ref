<?php

namespace App\Http\Controllers\PHBControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\PHBVehicleLogHDR;
use App\PHBModel\PHBVehicleRate;
use DB;
class PHBVehicleLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PHBVehicleLogHDR::latest()->paginate(0);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }
    public function jvlReportPerJeep(Request $request)
    {
        /*$idsavrate= $request['PHBIDLink'];
        $modalseravrate = new VehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;*/
        $JeepPlateNumber = $request['PHBPlateNumber'];
        $data = DB::select("SELECT * from tbljeepvehicleloghdr where PHBPlateNo= '$JeepPlateNumber'");
        return $data;
    }
    public function getRate(Request $request)
    {
        $idsavrate= $request['PHBIDLink'];
        $modalseravrate = new PHBVehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;
        /*$PHBIDLink = $request['PHBIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $PHBIDLink");
        return $data;*/
    }
    public function getJVLFilter(Request $request)
    {
        $idsajvlfilter= implode(',',$request['PHBVLHDRID']);
        $modalsajvlfilter = new PHBVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getFilterFilter($idsajvlfilter);
        return $jvlfilter;
        /*$PHBIDLink = $request['PHBIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $PHBIDLink");
        return $data;*/
    }
    public function getBalanceAmount(Request $request)
    {
        $idsajvlfilter= $request['PHBVLHDRID'];
        $modalsajvlfilter = new PHBVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getbalamt($idsajvlfilter);
        return $jvlfilter;
        /*$PHBIDLink = $request['PHBIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $PHBIDLink");
        return $data;*/
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

       /* $this->validate($request,[
            'PlateNumber' => 'required|string|max:50',
            'EngineNumber' => 'required|string|max:50',
            'SerialNumber' => 'required|string|max:50',
            'AssetNumber' => 'required|string|max:50',
            'DriverName' => 'required|string|max:50',
            'OperatorName' => 'required|string|max:50',
            'GSCUnit' => 'required|string|max:1'
        ]);*/
        //return $jvl = JeepVehicleLogHDR::create($request->all());
        $timeout = "";
        $timein = "";
        $ass = "";
        if ($request['TimeOut']==""){
            $timeout = strtoupper("");
        }
        else{
            $timeout = $request['TimeOut'];
        }
        if ($request['TimeIn']==""){
            $timein = strtoupper("");
        }
        else{
            $timein = $request['TimeIn'];
        }
        if ($request['Assignment']==""){
            $ass = strtoupper("");
        }
        else{
            $ass = $request['Assignment'];
        }
        return PHBVehicleLogHDR::create([
            'PHBVLDate' => $request['PHBVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'PHBIDLink' => strtoupper($request['PHBIDLink']),
            'PHBIDLink' => strtoupper($request['PHBIDLink']),
            'PHBPlateNo' => strtoupper($request['PHBPlateNo']),
            'DriverIDLink' => $request['DriverIDLink'],
            'DriverName' => strtoupper($request['DriverName']),
            'DriverLastName' => strtoupper($request['DriverLastName']),
            'DriverFirstName' => strtoupper($request['DriverFirstName']),
            'DriverMiddleName' => strtoupper($request['DriverMiddleName']),
            'DriverExtName' => strtoupper($request['DriverExtName']),
            //IPAWALA DAW
            // 'TruckerName' => strtoupper($request['TruckerName']),
            // 'TruckerFirstName' => strtoupper($request['TruckerFirstName']),
            // 'TruckerMiddleName' => strtoupper($request['TruckerMiddleName']),
            // 'TruckerLastName' => strtoupper($request['TruckerLastName']),
            // 'TruckerExtName' => strtoupper($request['TruckerExtName']),
            // 'TruckerIDLink' => $request['TruckerIDLink'],
            'GLCode' => strtoupper($request['GLCode']),
            'CostCenter' => strtoupper($request['CostCenter']),
            'PerKilometerRate' => $request['PerKilometerRate'],
            'BillAmount' => $request['BillAmount'],
            'LessAdmin' => $request['LessAdmin'],
            'LessFuel' => $request['LessFuel'],
            'FuelLiters' => $request['FuelLiters'],
            'NetTrucker' => $request['NetTrucker'],
            'BalanceAmount' => $request['BalanceAmount'],
            'startreading' => $request['startreading'],
            'endreading' => $request['endreading'],
            'actualstartreading' => $request['actualstartreading'],
            'actualendreading' => $request['actualendreading'],
            'totalrun' => $request['totalrun'],
            'totalactualrun' => $request['totalactualrun'],
            'TimeIn' => $timein,
            'TimeOut' => $timeout,
            'LocationName' => $request['LocationName'],
            'Assignment' => $ass
            /*'CollectedAmount' => number_format($request['CollectedAmount'],2,".",","),
            'BalanceAmount' => number_format($request['BalanceAmount'],2,".",","),
            'ORCRNumber' => $request['ORCRNumber'],
            'ORCRDate' => $request['ORCRDate'],
            'remarks' => $request['remarks'],
            'status' => strtoupper($request['status']),
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'SOAID_Link' => $request['EncodedDateTime'],
            'SOANumber' => $request['EncodedDateTime'],
            'SOADate' => $request['SOADate']*/
        ]);
       /* $PlateNumber = strtoupper($request['PlateNumber']);
        $EngineNumber = strtoupper($request['EngineNumber']);
        $SerialNumber = strtoupper($request['SerialNumber']);
        $AssetNumber = strtoupper($request['AssetNumber']);
        $Type = strtoupper($request['Type']);
        $DriverName = strtoupper($request['DriverName']);
        $DriverID = strtoupper($request['DriverID']);
        $OperatorName = strtoupper($request['OperatorName']);
        $OperatorID = strtoupper($request['OperatorID']);
        date_default_timezone_set('Asia/Manila');
        $updated_at=date("Y-m-d H:i:s"); 
        $created_at=date("Y-m-d H:i:s"); 

        $data= DB::select("INSERT INTO tblmotorvehiclelist (PlateNumber,EngineNumber,SerialNumber,AssetNumber,Type,DriverName,DriverID,OperatorName,OperatorID,created_at,updated_at)VALUES('$PlateNumber','$EngineNumber','$SerialNumber','$AssetNumber','$Type','$DriverName','$DriverID','$OperatorName','$OperatorID','$updated_at','$created_at')");
        return $data;*/
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
    public function update(Request $request, $PHBVLHDRID)
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
        $jvl= PHBVehicleLogHDR::findOrFail($PHBVLHDRID);
        //$driver->update($request->all());
        $timeout = "";
        $timein = "";
        $ass = "";
        if ($request['TimeOut']==""){
            $timeout = strtoupper("");
        }
        else{
            $timeout = $request['TimeOut'];
        }
        if ($request['TimeIn']==""){
            $timein = strtoupper("");
        }
        else{
            $timein = $request['TimeIn'];
        }
        if ($request['Assignment']==""){
            $ass = strtoupper("");
        }
        else{
            $ass = $request['Assignment'];
        }
        $jvl->update([
            'PHBVLDate' => $request['PHBVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'PHBIDLink' => strtoupper($request['PHBIDLink']),
            'PHBIDLink' => strtoupper($request['PHBIDLink']),
            'PHBPlateNo' => strtoupper($request['PHBPlateNo']),
            'DriverIDLink' => $request['DriverIDLink'],
            'DriverName' => strtoupper($request['DriverName']),
            'DriverLastName' => strtoupper($request['DriverLastName']),
            'DriverFirstName' => strtoupper($request['DriverFirstName']),
            'DriverMiddleName' => strtoupper($request['DriverMiddleName']),
            'DriverExtName' => strtoupper($request['DriverExtName']),
            //IPAWALA DAW
            // 'TruckerName' => strtoupper($request['TruckerName']),
            // 'TruckerFirstName' => strtoupper($request['TruckerFirstName']),
            // 'TruckerMiddleName' => strtoupper($request['TruckerMiddleName']),
            // 'TruckerLastName' => strtoupper($request['TruckerLastName']),
            // 'TruckerExtName' => strtoupper($request['TruckerExtName']),
            // 'TruckerIDLink' => $request['TruckerIDLink'],
            'CostCenter' => strtoupper($request['CostCenter']),
            'PerKilometerRate' => $request['PerKilometerRate'],
            'BillAmount' => $request['BillAmount'],
            'LessAdmin' => $request['LessAdmin'],
            'LessFuel' => $request['LessFuel'],
            'FuelLiters' => $request['FuelLiters'],
            'NetTrucker' => $request['NetTrucker'],
            'BalanceAmount' => $request['BalanceAmount'],
            'ORCRNumber' => $request['ORCRNumber'],
            'ORCRDate' => $request['ORCRDate'],
            'remarks' => $request['remarks'],
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'SOAID_Link' => $request['SOAID_Link'],
            'SOANumber' => $request['SOANumber'],
            'SOADate' => $request['SOADate'],
            'Status' => $request['Status'],
            'startreading' => $request['startreading'],
            'endreading' => $request['endreading'],
            'actualstartreading' => $request['actualstartreading'],
            'actualendreading' => $request['actualendreading'],
            'totalrun' => $request['totalrun'],
            'totalactualrun' => $request['totalactualrun'],
            'TimeIn' => $timein,
            'TimeOut' => $timeout,
            'LocationName' => $request['LocationName'],
            'Assignment' => $ass
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
        $jvl = PHBVehicleLogHDR::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = JeepVehiPHBVehicleLogHDRcleLogHDR::where(function($query) use ($search){
                $query->where('PHBPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = PHBVehicleLogHDR::latest()->paginate(7);
        }

        return $jvl;
    }
    public function searchDateFromTo(Request $request)
    {
       /* if($search = \Request::get('q')){
            $jvl = JeepVehicleLogHDR::where(function($query) use ($search){
                $query->where('PHBPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = JeepVehicleLogHDR::latest()->paginate(7);
        }*/
       
        $datefrom= $request['DateFrom'];
        $dateto= $request['DateTo'];
        $modalsajvlfilter = new PHBVehicleLogHDR();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        //return PHBVehicleLogHDR::all();
        $collected = "SELECT SUM(b.CollectedAmount) FROM tblphbvehiclecollectionpaymentdtl b WHERE b.PHBVLHDRID_Link = a.PHBVLHDRID GROUP BY(a.PHBVLHDRID)";
        $data = DB::select("SELECT a.*, (". $collected .") AS Collected FROM tblphbvehicleloghdr a order by PHBVLHDRID desc");
       return $data;
    }
    public function getDetail(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['PHBVLHDRID_Link'];
        $data = DB::select("SELECT * from tblphbvehiclelogdtl where PHBVLHDRID_Link=$phbid order by PHBVLDTLID asc");
       return $data;
    }
    public function insertDetail(Request $request){
        //return PHBVehicleLogHDR::all();
        $PHBVLHDRID_Link = $request['PHBVLHDRID_Link'];
        $Assignment = $request['Assignment'];
        $LoadingLocationName = $request['LoadingLocationName'];
        $LoadingTimeIn = $request['LoadingTimeIn'];
        $LoadingTimeStart = $request['LoadingTimeStart'];
        $LoadingTimeEnd = $request['LoadingTimeEnd'];
        $UnLoadingLocationName = $request['UnLoadingLocationName'];
        $UnLoadingTimeIn = $request['UnLoadingTimeIn'];
        $UnLoadingTimeStart = $request['UnLoadingTimeStart'];
        $UnLoadingTimeEnd = $request['UnLoadingTimeEnd'];

        $data = DB::select("INSERT INTO tblphbvehiclelogdtl (PHBVLHDRID_Link,Assignment,LoadingLocationName,LoadingTimeIn,LoadingTimeStart,LoadingTimeEnd,UnLoadingLocationName,UnLoadingTimeIn,UnLoadingTimeStart,UnLoadingTimeEnd) VALUES ($PHBVLHDRID_Link,'$Assignment','$LoadingLocationName','$LoadingTimeIn','$LoadingTimeStart','$LoadingTimeEnd','$UnLoadingLocationName','$UnLoadingTimeIn','$UnLoadingTimeStart','$UnLoadingTimeEnd')");
        return $data;
    }
    public function insertCollection(Request $request){
        $data = array(
            'PHBVCDTLID' => $request['PHBVCDTLID'] ? $request['PHBVCDTLID'] : "",
            'CollectedAmount' => $request['CollectedAmount'] ? $request['CollectedAmount'] : "",
            'ORCRDate' => $request['ORCRDate'] ? $request['ORCRDate'] : "",
            'ORCRNumber' => $request['ORCRNumber'] ? $request['ORCRNumber'] : "",
            'Remarks' => $request['Remarks'] ? $request['Remarks'] : "",
            'PHBVLHDRID_Link' => $request['PHBVLHDRID_Link'] ? $request['PHBVLHDRID_Link'] : "",
        );
        if($request['PHBVCDTLID']){
            $query = DB::connection('mysql')
                ->table('tblphbvehiclecollectionpaymentdtl')
                ->where('PID', $request['PHBVCDTLID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblphbvehiclecollectionpaymentdtl')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }
    public function deletePHBDtl(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['PHBVLDTLID'];
        $data = DB::select("DELETE FROM tblphbvehiclelogdtl where PHBVLDTLID=$phbid ");
       return $data;
    }
    public function deleteAllPHBDtl(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['PHBVLHDRID_Link'];
        $data = DB::select("DELETE FROM tblphbvehiclelogdtl where PHBVLHDRID_Link=$phbid ");
       return $data;
    }
}
