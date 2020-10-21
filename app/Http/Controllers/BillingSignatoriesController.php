<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\BillingSignatories;
use DB;

class BillingSignatoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BillingSignatories::latest()->paginate(5);
    }
    public function getForSearch()
    {
        $result = DB::select("SELECT CONCAT(ifnull(lname,''),', ',ifnull(ename,''),' ',ifnull(fname,''),' ',ifnull(mname,'')) AS 'name', position, id FROM billing_signatories ORDER BY lname, ename, fname, mname");
        return $result;
    }

    public function view()
    {
        return view('settings.billing');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'fname' => 'required',
            'lname' => 'required',
            'position' => 'required',
        ]);
 
        $signatory = BillingSignatories::firstOrCreate(
            ['fname' => $request->input('fname'), 'mname' => $request->input('mname'), 'lname' => $request->input('lname'), 'ename' => $request->input('ename')],
            ['position' => $request->input('position')]
        );

        if ($signatory->wasRecentlyCreated){
            return 'true';
        }else{
            return 'false';
        }
        
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $data = request()->validate([
            'fname' => 'required',
            'lname' => 'required',
            'position' => 'required',
        ]);

        $q = BillingSignatories::findorFail($id);
        $q->update($request->all());
        return $q;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $signatory = BillingSignatories::findOrFail($id);
        $signatory->delete();
    }
 
    public function search()
    {
        if($search = \Request::get('q')){
            $signatories = BillingSignatories::where(function($query) use ($search){
                $query->where('fname','LIKE',"%$search%")
                        ->orwhere('mname','LIKE',"%$search%")
                        ->orwhere('ename','LIKE',"%$search%")
                        ->orwhere('lname','LIKE',"%$search%")
                        ->orwhere('position','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $signatories = BillingSignatories::latest()->paginate(5);
        }

        return $signatories;
    }

    public function getAll(){
        return BillingSignatories::all();
    }
    public function getPostion(Request $request){
        $name = $request['name'];
        $search = DB::select("SELECT position FROM billing_signatories WHERE CONCAT(ifnull(lname,''),', ',ifnull(ename,''),' ',ifnull(fname,''),' ',ifnull(mname,'')) = '$name'");
        return $search;
    }
}