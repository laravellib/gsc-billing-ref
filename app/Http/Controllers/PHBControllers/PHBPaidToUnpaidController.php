<?php

namespace App\Http\Controllers\PHBControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\PHBPaidToUnpaid;
use DB;
class PHBPaidToUnpaidController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return JeepVehicleLogHDR::latest()->paginate(7);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $PHBHDRID)
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
        $jvl= PHBPaidToUnpaid::findOrFail($PHBHDRID);
        //$driver->update($request->all());
        $jvl->update([
            'Status' => $request['Status'],
            'BalanceAmount' => $request['BalanceAmount'],
            'CollectedAmount' => $request['CollectedAmount']
        ]);
    }

    
}
