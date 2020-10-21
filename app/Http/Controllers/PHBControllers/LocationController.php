<?php

namespace App\Http\Controllers\PHBControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\PHBModel\Location;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Location::latest()->paginate(0);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*$this->validate($request,[
            'FirstName' => 'required|string|max:50',
            'MiddleName' => 'required|string|max:50',
            'LastName' => 'required|string|max:50',
            'Address' => 'required|string',
            'GSCDriver' => 'required|string|max:1'
        ]);*/
        
        return Location::create([
            'LocationCode' => strtoupper($request['LocationCode']),
            'LocationName' => strtoupper($request['LocationName'])
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
        $driver= Location::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'LocationCode' => strtoupper($request['LocationCode']),
            'LocationName' => strtoupper($request['LocationName'])
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
        $driver = Location::findOrFail($id);
        $driver->delete();
    }

    public function search()
    {
        if($search = \Request::get('q')){
            $clients = Location::where(function($query) use ($search){
                $query->where('LocationName','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $clients = Location::latest()->paginate(7);
        }

        return $clients;
    }
    
    public function getAll(){
        return Location::all();
    }
}
