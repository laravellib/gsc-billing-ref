<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\JeepModel\Vehicle;
use DB;
class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Vehicle::latest()->paginate(7);
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
       /* $this->validate($request,[
            'PlateNumber' => 'required|string|max:50',
            'EngineNumber' => 'required|string|max:50',
            'SerialNumber' => 'required|string|max:50',
            'AssetNumber' => 'required|string|max:50',
            'DriverName' => 'required|string|max:50',
            'OperatorName' => 'required|string|max:50',
            'GSCUnit' => 'required|string|max:1'
        ]);*/
        $truckerextname = $request['TruckerExtName'];
        $driverextname = $request['DriverExtName'];
        if ($truckerextname==""){
            $truckerextname = strtoupper($truckerextname);
        }

        if ($driverextname==""){
            $driverextname = strtoupper($driverextname);
        }
        return Vehicle::create([
            'PlateNumber' => $request['PlateNumber'],
            'EngineNumber' => $request['EngineNumber'],
            'SerialNumber' => $request['SerialNumber'],
            'AssetNumber' => $request['AssetNumber'],
            'MVTID_Link' => $request['MVTID_Link'],
            'MVTypeName' => $request['MVTypeName'],
            'DriverName' => $request['DriverName'],
            'DriverLastName' => $request['DriverLastName'],
            'DriverFirstName' => $request['DriverFirstName'],
            'DriverMiddleName' => $request['DriverMiddleName'],
            'DriverExtName' => $driverextname,
            'DriverID' => $request['DriverID'],
            'TruckerName' => $request['TruckerName'],
            'TruckerLastName' => $request['TruckerLastName'],
            'TruckerFirstName' => $request['TruckerFirstName'],
            'TruckerMiddleName' => $request['TruckerMiddleName'],
            'TruckerExtName' => $truckerextname,
            'TruckerID' => $request['TruckerID'],
            'IsGSCUnit' => strtoupper($request['IsGSCUnit'])
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
    public function update(Request $request, $id)
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
        $driver= Vehicle::findOrFail($id);
        //$driver->update($request->all());
        $truckerextname = $request['TruckerExtName'];
        $driverextname = $request['DriverExtName'];
        if ($truckerextname==""){
            $truckerextname = strtoupper($truckerextname);
        }

        if ($driverextname==""){
            $driverextname = strtoupper($driverextname);
        }

        $driver->update([
            'PlateNumber' => $request['PlateNumber'],
            'EngineNumber' => $request['EngineNumber'],
            'SerialNumber' => $request['SerialNumber'],
            'AssetNumber' => $request['AssetNumber'],
            'MVTID_Link' => $request['MVTID_Link'],
            'MVTypeName' => $request['MVTypeName'],
            'DriverName' => $request['DriverName'],
            'DriverLastName' => $request['DriverLastName'],
            'DriverFirstName' => $request['DriverFirstName'],
            'DriverMiddleName' => $request['DriverMiddleName'],
            'DriverExtName' => $driverextname,
            'DriverID' => $request['DriverID'],
            'TruckerName' => $request['TruckerName'],
            'TruckerLastName' => $request['TruckerLastName'],
            'TruckerFirstName' => $request['TruckerFirstName'],
            'TruckerMiddleName' => $request['TruckerMiddleName'],
            'TruckerExtName' => $truckerextname,
            'TruckerID' => $request['TruckerID'],
            'IsGSCUnit' => strtoupper($request['IsGSCUnit'])
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
        $driver = Vehicle::findOrFail($id);
        $driver->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $vehicles = Vehicle::where(function($query) use ($search){
                $query->where('PlateNumber','LIKE',"%$search%")
                        ->orwhere('EngineNumber','LIKE',"%$search%")
                        ->orwhere('SerialNumber','LIKE',"%$search%")
                        ->orwhere('DriverName','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $vehicles = Vehicle::latest()->paginate(7);
        }

        return $vehicles;
    }
    public function getAll(){
       // return Vehicle::all();
       $data = DB::select("SELECT * from tblmotorvehiclelist  where MVTypeName='JEEP' order by MVID desc");
        return $data;
    }
}
