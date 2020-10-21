<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\JeepModel\VehicleRate;
use DB;
class VehicleRateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VehicleRate::latest()->paginate(7);
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
  
        return VehicleRate::create([
            'MVID_Link' => $request['MVID_Link'],
            'PlateNumber' => $request['PlateNumber'],
            'EffectiveDate' => strtoupper($request['EffectiveDate']),
            'DailyRate' => number_format($request['DailyRate'],2,".",",")
            /*'PerKilometerRate' => number_format($request['PerKilometerRate'],2,".",","),
            'PerTransactionRate' => number_format($request['PerTransactionRate'],2,".",","),
            'PerHourRate' => number_format($request['PerHourRate'],2,".",","),
            'PerAreaRate' => number_format($request['PerAreaRate'],2,".",","),
            'FixedMonthlyRate' => number_format($request['FixedMonthlyRate'],2,".",","),
            'PerBagRate' => number_format($request['PerBagRate'],2,".",","),
            'PerDestinationRate' => number_format($request['PerDestinationRate'],2,".",","),
            'Status' => strtoupper($request['Status'])*/

            
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
        $driver= VehicleRate::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'MVID_Link' => $request['MVID_Link'],
            'PlateNumber' => $request['PlateNumber'],
            'EffectiveDate' => strtoupper($request['EffectiveDate']),
            'DailyRate' => number_format($request['DailyRate'],2,".",",")
            /*'PerKilometerRate' => number_format($request['PerKilometerRate'],2,".",","),
            'PerTransactionRate' => number_format($request['PerTransactionRate'],2,".",","),
            'PerHourRate' => number_format($request['PerHourRate'],2,".",","),
            'PerAreaRate' => number_format($request['PerAreaRate'],2,".",","),
            'FixedMonthlyRate' => number_format($request['FixedMonthlyRate'],2,".",","),
            'PerBagRate' => number_format($request['PerBagRate'],2,".",","),
            'PerDestinationRate' => number_format($request['PerDestinationRate'],2,".",","),
            'Status' => strtoupper($request['Status'])*/
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
        $driver = VehicleRate::findOrFail($id);
        $driver->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $vehicles = VehicleRate::where(function($query) use ($search){
                $query->where('MVType','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $vehicles = VehicleRate::latest()->paginate(7);
        }

        return $vehicles;
    }
    public function getAll(){
        //return VehicleRate::all();
        $data = DB::select("SELECT b.MVRRID,b.MVID_Link,b.PlateNumber,b.EffectiveDate,b.DailyRate from tblmotorvehiclelist as a, tblmotorvehiclerentalrate as b where a.MVID=b.MVID_Link and a.MVTypeName='JEEP' order by b.MVRRID desc ");
        return $data;
    }
}
