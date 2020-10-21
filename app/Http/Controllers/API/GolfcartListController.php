<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\MasterModel\MotorVehicleList;
use Illuminate\Support\Facades\Auth;

class GolfcartListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        //$this->middleware('role'); //ensures user is logged in
    }

    public function index()
    {
        return ['data'=>MotorVehicleList::where('type_id',1)->get()];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name' => 'required|string|max:191',
            'asset_no' => 'required|string|max:191',
            'engine_no' => 'required|string|max:191',
            'serial_no' => 'required|string|max:191'
        ]);
        $request['plate_no'] = Auth::user();
        return MotorVehicleList::create($request->all());
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
        MotorVehicleList::FindOrFail($id)->update($request->all());
        return ['message'=>'Data updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MotorVehicleList::FindOrFail($id)->delete();
        return ['message'=>'Deleted']; 
    }

    public function motorvehicle_list($id)
    {
        $data = MotorVehicleList::where('type_id',$id)->get();


        return ['data'=>$data];
    }

    public function motorvehicle_rate_list($id)
    {
        $data = MotorVehicleList::where('type_id',$id)->join('motor_vehicle_rental_rate', 'motor_vehicle_rental_rate.mvid_link', '=', 'motor_vehicle_list.id')->select('motor_vehicle_list.*', 'motor_vehicle_rental_rate.daily_rate')->get();


        return ['data'=>$data];
    }
}
