<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\JeepModel\JeepVehicleLogHDR;
use App\JeepModel\VehicleRate;
use DB;
class JeepVehicleLogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return JeepVehicleLogHDR::latest()->paginate(0);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }
    public function jvlReportPerJeep(Request $request)
    {
        /*$idsavrate= $request['JeepIDLink'];
        $modalseravrate = new VehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;*/
        $JeepPlateNumber = $request['JeepPlateNumber'];
        $data = DB::select("SELECT * from tbljeepvehicleloghdr where JeepPlateNo= '$JeepPlateNumber'");
        return $data;
    }
    public function getRate(Request $request)
    {
        $idsavrate= $request['JeepIDLink'];
        $modalseravrate = new VehicleRate();
        $vrate = $modalseravrate->getRateRate($idsavrate);
        return $vrate;
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
        return $data;*/
    }
    public function getJVLFilter(Request $request)
    {
        $idsajvlfilter= implode(',',$request['JVLHDRID']);
        $modalsajvlfilter = new JeepVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getFilterFilter($idsajvlfilter);
        return $jvlfilter;
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
        return $data;*/
    }
    public function getBalanceAmount(Request $request)
    {
        $idsajvlfilter= $request['JVLHDRID'];
        $modalsajvlfilter = new JeepVehicleLogHDR();
        $jvlfilter = $modalsajvlfilter->getbalamt($idsajvlfilter);
        return $jvlfilter;
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
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
        return JeepVehicleLogHDR::create([
            'JVLDate' => $request['JVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'JeepIDLink' => strtoupper($request['JeepIDLink']),
            'JeepIDLink' => strtoupper($request['JeepIDLink']),
            'JeepPlateNo' => strtoupper($request['JeepPlateNo']),
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
            'PerDayRate' => number_format($request['PerDayRate'],2,".",","),
            'NumberofDays' => number_format($request['NumberofDays'],0,"",","),
            'BillAmount' => number_format($request['BillAmount'],2,".",","),
            'LessAdmin' => number_format($request['LessAdmin'],2,".",","),
            'LessFuel' => number_format($request['LessFuel'],2,".",","),
            'NetTrucker' => number_format($request['NetTrucker'],2,".",","),
            'BalanceAmount' => number_format($request['BalanceAmount'],2,".",",")
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
        $jvl= JeepVehicleLogHDR::findOrFail($JVLHDRID);
        //$driver->update($request->all());
        $jvl->update([
            'JVLDate' => $request['JVLDate'],
            'OVLNo' => strtoupper($request['OVLNo']),
            'JeepIDLink' => strtoupper($request['JeepIDLink']),
            'JeepIDLink' => strtoupper($request['JeepIDLink']),
            'JeepPlateNo' => strtoupper($request['JeepPlateNo']),
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
            'PerDayRate' => number_format($request['PerDayRate'],2,".",","),
            'NumberofDays' => number_format($request['NumberofDays'],0,"",","),
            'BillAmount' => number_format($request['BillAmount'],2,".",","),
            'LessAdmin' => number_format($request['LessAdmin'],2,".",","),
            'LessFuel' => number_format($request['LessFuel'],2,".",","),
            'NetTrucker' => number_format($request['NetTrucker'],2,".",","),
            'CollectedAmount' => number_format($request['CollectedAmount'],2,".",","),
            'BalanceAmount' => number_format($request['BalanceAmount'],2,".",","),
            'ORCRNumber' => $request['ORCRNumber'],
            'ORCRDate' => $request['ORCRDate'],
            'remarks' => $request['remarks'],
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'SOAID_Link' => $request['SOAID_Link'],
            'SOANumber' => $request['SOANumber'],
            'SOADate' => $request['SOADate'],
            'Status' => $request['Status']
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
        $jvl = JeepVehicleLogHDR::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = JeepVehicleLogHDR::where(function($query) use ($search){
                $query->where('JeepPlateNo','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = JeepVehicleLogHDR::latest()->paginate(7);
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
        $modalsajvlfilter = new JeepVehicleLogHDR();
        $jvl = $modalsajvlfilter->getDateFromTo($datefrom,$dateto);
        
    

        return $jvl;
    }
    public function getAll(){
        return JeepVehicleLogHDR::all();
    }
    public function get_rate(){
        $data = DB::table('jeep_rate_percent')->get()->first();
        if($data){
            return array('id' => $data->id, 'rate'=> $data->rate);
        }else{
            return array('id' => '', 'rate'=> 0);
        }
        
    }
    public function save_rate(Request $request){
        $data = array(
            'id' => $request['id'] ? $request['id'] : null,
            'rate' => $request['rate'] ? $request['rate'] : 0,
        );
        if($data['id']){
            $query = DB::connection('mysql')
            ->table('jeep_rate_percent')
            ->where('id', $data['id'])
            ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('jeep_rate_percent')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }
}
