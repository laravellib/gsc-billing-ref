<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\WingVanModel\WingVanPOHdr;
Use App\Model\WingVanModel\WingVanPODtl;
Use App\Model\WingVanModel\WingVanLedger;
Use App\Model\WingVanModel\WingVanSoaHdr;
Use App\Model\WingVanModel\WingVanPayment;
use Illuminate\Support\Facades\Auth;
class WingVanController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth:api')->only(['store']);
    }
    public function index()
    {
        return WingVanPOHdr::latest()->paginate(10);
    }

    public function get_detail($id)
    {
        $datas = [];
        $temp =[];
        $detail = WingVanPODtl::where('header_id',$id)->get();
        foreach( $detail as $dtl )
        {
            $temp['id'] = $dtl->id;
            $temp['header_id'] = $dtl->header_id;
            $temp['mat_code'] = $dtl->mat_code;
            $temp['location'] = $dtl->location;
            $temp['activity'] = $dtl->activity;
            $temp['line_code'] = $dtl->line_code;
            $temp['no_bags'] = $dtl->no_bags;
            $temp['unit'] = $dtl->unit;
            $temp['price_per_bag'] = $dtl->price_per_bag;
            $temp['amount'] = $dtl->amount;
            $usage = WingVanLedger::where('po_detail_id',$dtl->id)->get()->sum('qty')  - $dtl->no_bags;
            $balance = $dtl->no_bags - $usage;
            $temp['usage'] =$usage;
            $temp['balance'] =$balance;

            array_push($datas,$temp);
        }
        return ['data'=>$datas];
    }

    public function po_header_add(Request $request)
    {
        $request['encoded_by'] = Auth::user()->name;
        $request['encoded_id'] = Auth::user()->id;
        $this->validate($request,[
            'doc_no' => 'required|string|max:191',
            'date' => 'required|string|max:191',
        ]);
        
        return WingVanPOHdr::create($request->all());
    }

    public function po_detail_add(Request $request)
    {
        $this->validate($request,[
            'location' => 'required|string|max:191',
            'no_bags' => 'required|max:191',
            'price_per_bag' => 'required|max:191',
        ]);
        
        return WingVanPODtl::create($request->all());
    }

    public function payment_store(Request $request)
    {
        $this->validate($request, [
            'payment_date' => 'required',
            'or_ref_no' => 'required',
            'amount'=>'required'
        ]);
        $data = WingVanPayment::create($request->all());
        foreach($request['filter'] as $f){
            WingVanSoaHdr::FindOrFail($f['id'])->update(['status'=> 'PAID','payment_link'=>$data->id]);
        }

        return $data;
    }

    public function post_po($id)
    {
        $detail =  WingVanPODtl::where('header_id',$id)->get();

        foreach($detail as $d)
        {
            WingVanLedger::insert(['po_detail_id'=>$d->id,'qty'=>$d->no_bags,'type'=>'BEG BAL']);
        }
        
        return ['data'=> WingVanPOHdr::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function cancel_po($id){
        return ['data'=> WingVanPOHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function ledger_balance($id){
        return ['data'=>WingVanLedger::where('po_detail_id',$id)->get()];
    }

    public function get_all_detail(){
        
        return ['data'=>WingVanPODtl::join('wingvan_po_hdr', 'wingvan_po_hdr.id', '=', 'wingvan_po_dtl.header_id')->select('wingvan_po_dtl.*', 'wingvan_po_hdr.doc_no','wingvan_po_hdr.date')->get()];
    }
 
}
