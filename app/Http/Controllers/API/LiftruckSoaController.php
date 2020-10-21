<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\LiftruckModel\LiftruckRental;
Use App\Model\LiftruckModel\LiftruckSoaHdr;
Use App\Model\LiftruckModel\LiftruckSoaDtl;
Use App\Model\LiftruckModel\LiftruckPayment;
use DB;
class LiftruckSoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LiftruckSoaHdr::latest()->paginate(10);
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
            'billed_name' => 'required|string|max:191',
            'series_no' => 'required|string|max:191',
            'charge_invoice_no' => 'required|string|max:191',
            'soa_date' => 'required|string|max:191'
        ]);
        $request['type'] = "REQ";
        $header = LiftruckSoaHdr::create($request->all());
        $id = $header->id;
        $rental = $request['rentals'];

        foreach($rental as $r)
        {
            $data['soa_hdr_id'] = $id;
            $data['particulars'] = $r['type'];
            $data['req_date'] = $r['date'];
            $data['amount'] = $r['amount'];
            LiftruckSoaDtl::create($data);
            LiftruckRental::where('id',$r['id'])->update(['soaid_link'=>$id]);
        }

        return $header ;
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
        LiftruckSoaHdr::FindOrFail($id)->update(['status'=>'POSTED']);
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

    public function search($from,$to){
        return ['data'=>LiftruckSoaHdr::whereBetween('soa_date',[$from,$to])->get()];
    }

    public function cancel($id){
        return ['data'=> LiftruckSoaHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function collected($id){
        return ['data'=> LiftruckSoaHdr::FindOrFail($id)->update(['status'=>'COLLECTED'])];
    }

    public function details($id){
        return ['data'=>LiftruckSoaDtl::where('soa_hdr_id',$id)->get()];
    }

    public function payment($from,$to,$type){
        $data = LiftruckSoaHdr::where(['type'=>$type,'status'=>'ACTIVE'])->join('liftruck_soa_dtl', 'liftruck_soa_hdr.id', '=', 'liftruck_soa_dtl.soa_hdr_id')->select(DB::raw("SUM(liftruck_soa_dtl.amount) as amount,liftruck_soa_hdr.*"))->groupBy(DB::raw("liftruck_soa_hdr.id"))->whereBetween('soa_date',[$from,$to])->get();
        return ['data'=>$data];
    }

    public function payment_store(Request $request)
    {
        $this->validate($request, [
            'payment_date' => 'required',
            'or_ref_no' => 'required',
            'amount'=>'required'
        ]);
        $data = LiftruckPayment::create($request->all());
        foreach($request['filter'] as $f){
            LiftruckSoaHdr::FindOrFail($f['id'])->update(['status'=> 'PAID','payment_link'=>$data->id]);
        }

        return $data;
    }

}
