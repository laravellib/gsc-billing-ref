<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\JeepModel\DriverList;

class DriverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DriverList::latest()->paginate(0);
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
        return DriverList::create([
            'FirstName' => $request['FirstName'],
            'MiddleName' => $request['MiddleName'],
            'LastName' => $request['LastName'],
            'ExtName' => $request['ExtName'],
            'Address' => $request['Address'], 
            'GSCDriver' => $request['GSCDriver']
        ]);
        /*$fname = strtoupper($request['FirstName']);
        $mname = strtoupper($request['MiddleName']);
        $lname = strtoupper($request['LastName']);
        $extname = strtoupper($request['ExtName']);
        $address = strtoupper($request['Address']);
        $gscdriver = strtoupper($request['GSCDriver']);

        $data= DB::select("INSERT INTO drivers (FirstName,MiddleName,LastName,ExtName,Address,GSCDriver)VALUES('$fname','$mname','$lname','$extname','$address','$gscdriver')");
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
        $driver= DriverList::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'FirstName' => $request['FirstName'],
            'MiddleName' => $request['MiddleName'],
            'LastName' => $request['LastName'],
            'ExtName' => $request['ExtName'],
            'Address' => $request['Address'], 
            'GSCDriver' => $request['GSCDriver']
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
        $driver = DriverList::findOrFail($id);
        $driver->delete();
    }

    public function search()
    {
        if($search = \Request::get('q')){
            $drivers = DriverList::where(function($query) use ($search){
                $query->where('FirstName','LIKE',"%$search%")
                        ->orwhere('MiddleName','LIKE',"%$search%")
                        ->orwhere('ExtName','LIKE',"%$search%")
                        ->orwhere('LastName','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $drivers = DriverList::latest()->paginate(7);
        }

        return $drivers;
    }
    
    public function getAll(){
        return DriverList::all();
       // $data= DB::select("SELECT * from tbldriverlist");
        //return $data;
    }
}
