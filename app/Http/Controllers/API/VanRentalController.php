<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\VanRentalModel\VanRentalPOHdr;
Use App\Model\VanRentalModel\VanRentalPODtl;
Use App\Model\VanRentalModel\VanRentalLedger;
Use App\Model\VanRentalModel\VanRentalPayment;
Use App\Model\VanRentalModel\VanRentalSoaHdr;
use Illuminate\Support\Facades\Auth;

class VanRentalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() 
    {
        $this->middleware('auth:api')->only(['store']);
        // $this->middleware('auth');
        // $this->user =  \Auth::user();
    }

    public function index()
    {
        return VanRentalPOHdr::latest()->paginate(10);
    }

    public function get_detail($id)
    {
        $datas = [];
        $temp =[];
        $detail = VanRentalPODtl::where('header_id',$id)->get();
        foreach( $detail as $dtl )
        {
            $temp['id'] = $dtl->id;
            $temp['header_id'] = $dtl->header_id;
            $temp['description'] = $dtl->description;
            $temp['mat_code'] = $dtl->mat_code;
            $temp['location'] = $dtl->location;
            $temp['u_price'] = $dtl->u_price;
            $temp['qty'] = $dtl->qty;
            $temp['unit'] = $dtl->unit;
            $temp['amount'] = $dtl->amount;
            $temp['activity'] = $dtl->activity;
            $usage = VanRentalLedger::where('po_detail_id',$dtl->id)->get()->sum('qty')  - $dtl->qty;
            $balance =$dtl->qty - $usage;
            $temp['usage'] =$usage;
            $temp['balance'] = $balance;

            array_push($datas,$temp);
        }
        return ['data'=>$datas];
    }

    public function payment_store(Request $request)
    {
        $this->validate($request, [
            'payment_date' => 'required',
            'or_ref_no' => 'required',
            'amount'=>'required'
        ]);
        $data = VanRentalPayment::create($request->all());
        foreach($request['filter'] as $f){
            VanRentalSoaHdr::FindOrFail($f['id'])->update(['status'=> 'PAID','payment_link'=>$data->id]);
        }

        return $data;
    }

    public function po_header_add(Request $request)
    {
        $request['encoded_by'] = Auth::user()->name;
        $request['encoded_id'] = Auth::user()->id;
        $this->validate($request,[
            'doc_no' => 'required|string|max:191',
            'date' => 'required|string|max:191'
        ]);
        
        return VanRentalPOHdr::create($request->all());
    }

    public function po_detail_add(Request $request)
    {
        $this->validate($request,[
            'mat_code' => 'required|string|max:191',
            'location' => 'required|string|max:191',
            'description' => 'required|string|max:191',
            'qty' => 'required|string|max:191'
        ]);
        
        return VanRentalPODtl::create($request->all());
    }

    public function post_po($id)
    {
        $detail =  VanRentalPODtl::where('header_id',$id)->get();

        foreach($detail as $d)
        {
            VanRentalLedger::insert(['po_detail_id'=>$d->id,'qty'=>$d->qty,'type'=>'BEG BAL']);
        }
        
        return ['data'=> VanRentalPOHdr::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function cancel_po($id){
        return ['data'=> VanRentalPOHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function ledger_balance($id){
        return ['data'=>VanRentalLedger::where('po_detail_id',$id)->get()];
    }

    public function get_all_detail(){
        
        return ['data'=>VanRentalPODtl::join('vanrental_po_hdr', 'vanrental_po_hdr.id', '=', 'vanrental_po_dtl.header_id')->select('vanrental_po_dtl.*', 'vanrental_po_hdr.doc_no','vanrental_po_hdr.date')->get()];
    }

  
}
