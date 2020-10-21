<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\VanRentalModel\VanRentalReq;
Use App\Model\VanRentalModel\VanRentalSoaHdr;
Use App\Model\VanRentalModel\VanRentalSoaDtl;
use DB;
class VanRentalSoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VanRentalSoaHdr::latest()->paginate(10);
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
        $header = VanRentalSoaHdr::create($request->all());
        $id = $header->id;
        $rental = $request['rentals'];

        foreach($rental as $r)
        {
            $data['soa_hdr_id'] = $id;
            $data['particulars'] = $r['type'];
            $data['req_date'] = $r['date'];
            $data['amount'] = $r['amount'];
            VanRentalSoaDtl::create($data);
            VanRentalReq::where('id',$r['id'])->update(['soaid_link'=>$id]);
        }

        return $header ;
    }

    public function store_monthly(Request $request)
    {
        $this->validate($request,[
            'billed_name' => 'required|string|max:191',
            'series_no' => 'required|string|max:191',
            'charge_invoice_no' => 'required|string|max:191',
            'soa_date' => 'required|string|max:191',
            'amount' => 'required|string|max:191',
            'remarks' => 'required|string|max:191'
        ]);

        $header['series_no'] = $request['series_no'];
        $header['billed_id'] = $request['billed_id'];
        $header['billed_name'] = $request['billed_name'];
        $header['billed_address'] = $request['billed_address'];
        $header['soa_date'] = $request['soa_date'];
        $header['charge_invoice_no'] = $request['charge_invoice_no'];
        $header['remarks'] = $request['remarks'];
        $header['status'] = "ACTIVE";
        $header['type'] = "MONTHLY";
        $hdr = VanRentalSoaHdr::create($header);
        
        $detail['soa_hdr_id'] = $hdr->id;
        $detail['req_date'] = $request['soa_date'];
        $detail['particulars'] = $request['particulars'];
        $detail['amount'] = $request['amount'];
        VanRentalSoaDtl::create($detail);
        return $hdr;
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
        VanRentalSoaHdr::FindOrFail($id)->update(['status'=>'POSTED']);
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
        return ['data'=>VanRentalSoaHdr::whereBetween('soa_date',[$from,$to])->get()];
    }

    public function cancel($id){
        return ['data'=> VanRentalSoaHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function collected($id){
        return ['data'=> VanRentalSoaHdr::FindOrFail($id)->update(['status'=>'COLLECTED'])];
    }

    public function details($id){
        return ['data'=>VanRentalSoaDtl::where('soa_hdr_id',$id)->get()];
    }

    public function payment($from,$to,$type){
        $data = VanRentalSoaHdr::where(['type'=>$type,'status'=>'ACTIVE'])->join('vanrental_soa_dtl', 'vanrental_soa_hdr.id', '=', 'vanrental_soa_dtl.soa_hdr_id')->select(DB::raw("SUM(vanrental_soa_dtl.amount) as amount,vanrental_soa_hdr.*"))->groupBy(DB::raw("vanrental_soa_hdr.id"))->whereBetween('soa_date',[$from,$to])->get();
        return ['data'=>$data];
    }

}
