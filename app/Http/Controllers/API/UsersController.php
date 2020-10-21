<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\User;

class UsersController extends Controller
{

    public function index()
    {
        return ['data'=>User::all(),'current_page'=>'1'];
    }

    public function store(Request $request)
    {
        return ClientList::create([
            'FirstName' => strtoupper($request['FirstName']),
            'MiddleName' => strtoupper($request['MiddleName']),
            'LastName' => strtoupper($request['LastName']),
            'ExtName' => strtoupper($request['ExtName']),
            'Address' => strtoupper($request['Address'])
        ]);
    }

    public function show($id)
    {
        //
    }

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

    public function destroy($id)
    {
    }
}
