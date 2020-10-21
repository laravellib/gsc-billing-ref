<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\GolfCartModel\GolfCartAdjustment;
Use App\Model\GolfCartModel\GolfCartLedger;

class GolfCartAdjustmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GolfCartAdjustment::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'golfcart_no' => 'required',
            'date' => 'required',
            'series_no' => 'required',
            'post_as'=>'required',
            'particulars'=>'required',
            'amount'=>'required'
        ]);
        return GolfCartAdjustment::create($request->all());
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
        GolfCartAdjustment::FindOrFail($id)->update($request->all());
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
    }

    public function cancel($id)
    {
        GolfCartAdjustment::FindOrFail($id)->update(['status'=>'CANCELLED']);
        return ['message'=>'Data updated'];
    }

    public function post(Request $request)
    {

        $rental = new GolfCartLedger;
        $rental->trans_date = $request['date'];
        $rental->reference_no = $request['series_no'];
        $rental->gcid_link = $request['golfcart_id'];
        $rental->golfcart_no = $request['golfcart_no'];
        if ($request['post_as'] == "CREDIT"){
            $rental->credit_amount = $request['amount'];
        } 
        if ($request['post_as'] == "DEBIT"){
            $rental->debit_amount = $request['amount'];
        } 
        $rental->remarks = $request['particulars'];
        $rental->type='ADJUSTMENT';
        $rental->adjid_link = $request['id'];
        $rental->save();
        GolfCartAdjustment::FindOrFail($request['id'])->update(['status'=>'POSTED']);
        return ['message'=>'Data added to ledger'];
    }
}
