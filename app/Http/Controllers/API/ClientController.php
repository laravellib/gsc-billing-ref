<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\JeepModel\ClientList;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ClientList::latest()->paginate(0);
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
        return ClientList::create([
            'FirstName' => strtoupper($request['FirstName']),
            'MiddleName' => strtoupper($request['MiddleName']),
            'LastName' => strtoupper($request['LastName']),
            'ExtName' => strtoupper($request['ExtName']),
            'Address' => strtoupper($request['Address'])
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
        $driver= ClientList::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'FirstName' => strtoupper($request['FirstName']),
            'MiddleName' => strtoupper($request['MiddleName']),
            'LastName' => strtoupper($request['LastName']),
            'ExtName' => strtoupper($request['ExtName']),
            'Address' => strtoupper($request['Address'])
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
        $driver = ClientList::findOrFail($id);
        $driver->delete();
    }

    public function search()
    {
        if($search = \Request::get('q')){
            $clients = ClientList::where(function($query) use ($search){
                $query->where('FirstName','LIKE',"%$search%")
                        ->orwhere('MiddleName','LIKE',"%$search%")
                        ->orwhere('ExtName','LIKE',"%$search%")
                        ->orwhere('LastName','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $clients = ClientList::latest()->paginate(7);
        }

        return $clients;
    }
    
    public function getAll(){
        return ClientList::all();
    }
}
