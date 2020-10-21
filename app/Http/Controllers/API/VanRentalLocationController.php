<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\VanRentalModel\VanRentalLocation;
Use App\Model\VanRentalModel\VanRentalLocationRate;
Use Illuminate\Support\Facades\Hash;
class VanRentalLocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function index()
    {
        $datas = [];
        $temp =[];
        $all = VanRentalLocation::all();
        foreach( $all as $a )
        {
            $temp['id'] = $a->id;
            $temp['name'] = $a->name;
            $temp['description'] = $a->description;
            $temp['mat_code'] = $a->mat_code;
            $temp['activity'] = $a->activity;
            $rate = VanRentalLocationRate::where(['loc_id'=>$a->id,'status'=>'ACTIVE'])->first();
            $temp['rate'] = $rate['rate'] ? $rate['rate'] : 0;

            array_push($datas,$temp);
        }
        return ['data'=>$datas];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        return VanRentalLocation::create($request->all());
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
        //
        $user = VanRentalLocation::FindOrFail($id)->update($request->all());
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
        //
        $user =  VanRentalLocation::FindOrFail($id)->delete();

        return ['message'=>'Deleted']; 
    }

    public function get_rate($id){
        return ['data'=>VanRentalLocationRate::where(['loc_id'=>$id,'status'=>'ACTIVE'])->first()];
    }
    public function add_rate(Request $request)
    {
        VanRentalLocationRate::where('loc_id',$request['loc_id'])->update(['status'=>'PREVIEW']);

        $request['status'] = 'ACTIVE';

        return VanRentalLocationRate::create($request->all());
    }
}
