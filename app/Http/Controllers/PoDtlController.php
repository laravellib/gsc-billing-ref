<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\DriverList;

class PoDtlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PoDtlList::latest()->paginate(7);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return PoDtlList::create([
            'LineNum' => $request['LineNum'],
            'MatCode' => $request['MatCode'],
            'Quantity' => $request['Quantity'],
            'Uom' => $request['Uom'],
            'UnitPrice' => $request['UnitPrice'], 
            'Amt' => $request['Amt'], 
            'DelDate' => $request['DelDate'],
            'ItemDesc' => $request['ItemDesc'], 
            'ItemScope' => $request['ItemScope'], 
            'POhdrlink_id' => $request['POhdrlink_id']
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
        // $driver= DriverList::findOrFail($id);
        //$driver->update($request->all());
        $driver= PoDtlList::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'LineNum' => $request['LineNum'],
            'MatCode' => $request['MatCode'],
            'Quantity' => $request['Quantity'],
            'Uom' => $request['Uom'],
            'UnitPrice' => $request['UnitPrice'], 
            'Client' => $request['Client'],
            'Amt' => $request['Amt'], 
            'DelDate' => $request['DelDate'],
            'ItemDesc' => $request['ItemDesc'], 
            'ItemScope' => $request['ItemScope'], 
            'POhdrlink_id' => $request['POhdrlink_id']
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
        return DriverList::latest()->paginate(7);
    }
}
