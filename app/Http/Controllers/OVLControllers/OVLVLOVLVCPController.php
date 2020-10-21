<?php

namespace App\Http\Controllers\OVLControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OVLModel\OVLVehicleLogHDR;
use App\OVLModel\OVLVehicleLogHDRLink;
use App\OVLModel\OVLVehicleRate;
use DB;
class OVLVLOVLVCPController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OVLVehicleLogHDR::latest()->paginate(7);
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
        $jvl= OVLVehicleLogHDRLink::findOrFail($OVLVLHDRID);
        //$driver->update($request->all());
        $jvl->update([
            'CollectedAmount' => $request['CollectedAmount'],
            'BalanceAmount' => $request['BalanceAmount'],
            'ORCRNumber' => $request['ORCRNumber'],
            'ORCRDate' => $request['ORCRDate'],
            'remarks' => $request['remarks'],
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'SOAID_Link' => $request['SOAID_Link'],
            'SOANumber' => $request['SOANumber'],
            'SOADate' => $request['SOADate'],
            'Status' => $request['Status'],
            'ModeOfPayment' => $request['ModeOfPayment'],
            'CheckNumber' => $request['CheckNumber'],
            'CheckDate' => $request['CheckDate']
        ]);
    }

    
}
