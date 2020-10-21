<?php

namespace App\Http\Controllers\OVLControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OVLModel\OVLVehicleLogHDR;
use App\OVLModel\OVLVehicleRate;
use DB;
class OVLVehicleLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OVLVehicleLogHDR::latest()->paginate(0);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }
    public function jvlReportPerJeep(Request $request)
    {
        /*$idsavrate= $request['OVLIDLink'];
        $modalseravrate = new VehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;*/
        $JeepPlateNumber = $request['JeepPlateNumber'];
        $data = DB::select("SELECT * from tbljeepvehicleloghdr where OVLPlateNo= '$JeepPlateNumber'");
        return $data;
    }
    public function getRate(Request $request)
    {
        $idsavrate= $request['OVLIDLink'];
        $modalseravrate = new OVLVehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;
        /*$OVLIDLink = $request['OVLIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $OVLIDLink");
        return $data;*/
    }
    public function getJVLFilter(Request $request)
    {
        $idsajvlfilter= implode(',',$request['OVLVLHDRID']);
        $modalsajvlfilter = new OVLVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getFilterFilter($idsajvlfilter);
        return $jvlfilter;
        /*$OVLIDLink = $request['OVLIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $OVLIDLink");
        return $data;*/
    }
    public function getBalanceAmount(Request $request)
    {
        $idsajvlfilter= $request['OVLVLHDRID'];
        $modalsajvlfilter = new OVLVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getbalamt($idsajvlfilter);
        return $jvlfilter;
        /*$OVLIDLink = $request['OVLIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $OVLIDLink");
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
        return OVLVehicleLogHDR::create([
            'OVLVLDate' => $request['OVLVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'OVLIDLink' => strtoupper($request['OVLIDLink']),
            'OVLIDLink' => strtoupper($request['OVLIDLink']),
            'OVLPlateNo' => strtoupper($request['OVLPlateNo']),
            'DriverIDLink' => $request['DriverIDLink'],
            'DriverName' => strtoupper($request['DriverName']),
            'DriverLastName' => strtoupper($request['DriverLastName']),
            'DriverFirstName' => strtoupper($request['DriverFirstName']),
            'DriverMiddleName' => strtoupper($request['DriverMiddleName']),
            'DriverExtName' => strtoupper($request['DriverExtName']),
            'TruckerName' => strtoupper($request['TruckerName']),
            'TruckerFirstName' => strtoupper($request['TruckerFirstName']),
            'TruckerMiddleName' => strtoupper($request['TruckerMiddleName']),
            'TruckerLastName' => strtoupper($request['TruckerLastName']),
            'TruckerExtName' => strtoupper($request['TruckerExtName']),
            'TruckerIDLink' => $request['TruckerIDLink'],
            'GLCode' => strtoupper($request['GLCode']),
            'CostCenter' => strtoupper($request['CostCenter']),
            'PerHourRate' => $request['PerHourRate'],
            'BillAmount' => $request['BillAmount'],
            'LessAdmin' => $request['LessAdmin'],
            'LessFuel' => $request['LessFuel'],
            'NetTrucker' => $request['NetTrucker'],
            'BalanceAmount' => $request['BalanceAmount'],
            'startreading' => $request['startreading'],
            'endreading' => $request['endreading'],
            'ClientName' => $request['ClientName'],
            'ClientFirstName' => $request['ClientFirstName'],
            'ClientMiddleName' => $request['ClientMiddleName'],
            'ClientLastName' => $request['ClientLastName'],
            'ClientExtName' => $request['ClientExtName'],
            'ClientIDLink' => $request['ClientIDLink'],
            'NumberOfHours' => $request['NumberOfHours'],
            'MaintenanceCost' => $request['MaintenanceCost'],
            'SubTotalExpense' => $request['SubTotalExpense'],
            'TotalExpense' => $request['TotalExpense'],
            'Helper' => $request['Helper'],
            'Labor' => $request['Labor']
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
    public function update(Request $request, $OVLVLHDRID)
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
        $jvl= OVLVehicleLogHDR::findOrFail($OVLVLHDRID);
        //$driver->update($request->all());
        $jvl->update([
            'OVLVLDate' => $request['OVLVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'OVLIDLink' => strtoupper($request['OVLIDLink']),
            'OVLIDLink' => strtoupper($request['OVLIDLink']),
            'OVLPlateNo' => strtoupper($request['OVLPlateNo']),
            'DriverIDLink' => $request['DriverIDLink'],
            'DriverName' => strtoupper($request['DriverName']),
            'DriverLastName' => strtoupper($request['DriverLastName']),
            'DriverFirstName' => strtoupper($request['DriverFirstName']),
            'DriverMiddleName' => strtoupper($request['DriverMiddleName']),
            'DriverExtName' => strtoupper($request['DriverExtName']),
            'TruckerName' => strtoupper($request['TruckerName']),
            'TruckerFirstName' => strtoupper($request['TruckerFirstName']),
            'TruckerMiddleName' => strtoupper($request['TruckerMiddleName']),
            'TruckerLastName' => strtoupper($request['TruckerLastName']),
            'TruckerExtName' => strtoupper($request['TruckerExtName']),
            'TruckerIDLink' => $request['TruckerIDLink'],
            'CostCenter' => strtoupper($request['CostCenter']),
            'PerHourRate' => $request['PerHourRate'],
            'BillAmount' => $request['BillAmount'],
            'LessAdmin' => $request['LessAdmin'],
            'LessFuel' => $request['LessFuel'],
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
            'ClientName' => $request['ClientName'],
            'ClientFirstName' => $request['ClientFirstName'],
            'ClientMiddleName' => $request['ClientMiddleName'],
            'ClientLastName' => $request['ClientLastName'],
            'ClientExtName' => $request['ClientExtName'],
            'ClientIDLink' => $request['ClientIDLink'],
            'MaintenanceCost' => $request['MaintenanceCost'],
            'SubTotalExpense' => $request['SubTotalExpense'],
            'TotalExpense' => $request['TotalExpense'],
            'Helper' => $request['Helper'],
            'Labor' => $request['Labor'],
            'CollectedAmount' => $request['CollectedAmount']
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
        $jvl = OVLVehicleLogHDR::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = OVLVehicleLogHDR::where(function($query) use ($search){
                $query->where('OVLPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = OVLVehicleLogHDR::latest()->paginate(7);
        }

        return $jvl;
    }
    public function searchDateFromTo(Request $request)
    {
       /* if($search = \Request::get('q')){
            $jvl = JeepVehicleLogHDR::where(function($query) use ($search){
                $query->where('OVLPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = JeepVehicleLogHDR::latest()->paginate(7);
        }*/
       
        $datefrom= $request['DateFrom'];
        $dateto= $request['DateTo'];
        $modalsajvlfilter = new OVLVehicleLogHDR();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        //return OVLVehicleLogHDR::all();
        $data = DB::select("SELECT * from tblovlvehicleloghdr order by OVLVLHDRID desc");
       return $data;
    }
    public function getDetail(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['OVLVLHDRID_Link'];
        $data = DB::select("SELECT * from tblovlvehiclelogdtl where OVLVLHDRID_Link=$phbid order by OVLVLDTLID asc");
       return $data;
    }
    public function insertDetail(Request $request){
        //return PHBVehicleLogHDR::all();
        $OVLVLHDRID_Link = $request['OVLVLHDRID_Link'];
        $LoadingAssignment = $request['LoadingAssignment'];
        $LoadingFLDLOG = $request['LoadingFLDLOG'];
        $LoadingTimeIn = $request['LoadingTimeIn'];
        $LoadingTimeStart = $request['LoadingTimeStart'];
        $LoadingTimeEnd = $request['LoadingTimeEnd'];
        $LoadingRemarks = $request['LoadingRemarks'];
        $LoadingLoadFill = $request['LoadingLoadFill'];
        $LoadingHiredOperatorHour = $request['LoadingHiredOperatorHour'];
        $LoadingJobCode = $request['LoadingJobCode'];
        $LoadingNoOfLoad = $request['LoadingNoOfLoad'];
        $UnLoadingAssignment = $request['UnLoadingAssignment'];
        $UnLoadingFLDLOG = $request['UnLoadingFLDLOG'];
        $UnLoadingTimeIn = $request['UnLoadingTimeIn'];
        $UnLoadingTimeStart = $request['UnLoadingTimeStart'];
        $UnLoadingTimeEnd = $request['UnLoadingTimeEnd'];
        $UnLoadingRemarks = $request['UnLoadingRemarks'];
        $UnLoadingLoadFill = $request['UnLoadingLoadFill'];
        $UnLoadingHiredOperatorHour = $request['UnLoadingHiredOperatorHour'];
        $UnLoadingJobCode = $request['UnLoadingJobCode'];
        $UnLoadingNoOfLoad = $request['UnLoadingNoOfLoad'];

        $data = DB::select("INSERT INTO tblovlvehiclelogdtl (OVLVLHDRID_Link,LoadingAssignment,LoadingFLDLOG,LoadingTimeIn,LoadingTimeStart,LoadingTimeEnd,LoadingRemarks,LoadingLoadFill,LoadingHiredOperatorHour,LoadingJobCode,LoadingNoOfLoad,UnLoadingAssignment,UnLoadingFLDLOG,UnLoadingTimeIn,UnLoadingTimeStart,UnLoadingTimeEnd,UnLoadingRemarks,UnLoadingLoadFill,UnLoadingHiredOperatorHour,UnLoadingJobCode,UnLoadingNoOfLoad) VALUES ($OVLVLHDRID_Link,'$LoadingAssignment','$LoadingFLDLOG','$LoadingTimeIn','$LoadingTimeStart','$LoadingTimeEnd','$LoadingRemarks','$LoadingLoadFill','$LoadingHiredOperatorHour','$LoadingJobCode','$LoadingNoOfLoad','$UnLoadingAssignment','$UnLoadingFLDLOG','$UnLoadingTimeIn','$UnLoadingTimeStart','$UnLoadingTimeEnd','$UnLoadingRemarks','$UnLoadingLoadFill','$UnLoadingHiredOperatorHour','$UnLoadingJobCode','$UnLoadingNoOfLoad')");
       return $data;
    }
    public function deleteAllOVLDtl(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['OVLVLHDRID_Link'];
        $data = DB::select("DELETE FROM tblovlvehiclelogdtl where OVLVLHDRID_Link=$phbid ");
       return $data;
    }
    public function deleteOVLDtl(Request $request){
        //return PHBVehicleLogHDR::all();
        $phbid = $request['OVLVLDTLID'];
        $data = DB::select("DELETE FROM tblovlvehiclelogdtl where OVLVLDTLID=$phbid ");
       return $data;
    }
}
