<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\LiftruckModel\LiftruckPOHdr;
Use App\Model\LiftruckModel\LiftruckPODtl;
Use App\Model\LiftruckModel\LiftruckLedger;
use Illuminate\Support\Facades\Auth;
class LiftruckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() 
    {
        $this->middleware('auth:api')->only(['store']);
    }
    public function index()
    {
        return LiftruckPOHdr::latest()->paginate(10);
    }

    public function get_detail($id)
    {
        $datas = [];
        $temp =[];
        $detail = LiftruckPODtl::where('header_id',$id)->get();
        foreach( $detail as $dtl )
        {
            $temp['id'] = $dtl->id;
            $temp['header_id'] = $dtl->header_id;
            $temp['mat_code'] = $dtl->mat_code;
            $temp['location'] = $dtl->location;
            $temp['activity'] = $dtl->activity;
            $temp['no_bags'] = $dtl->no_bags;
            $temp['unit'] = $dtl->unit;
            $temp['price_per_bag'] = $dtl->price_per_bag;
            $temp['amount'] = $dtl->amount;
            $usage = LiftruckLedger::where('po_detail_id',$dtl->id)->get()->sum('qty')  - $dtl->no_bags;
            $balance = $dtl->no_bags - $usage;
            $temp['usage'] = $usage;
            $temp['balance'] = $balance ;

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
        
        return LiftruckPOHdr::create($request->all());
    }

    public function po_detail_add(Request $request)
    {
        $this->validate($request,[
            'location' => 'required|string|max:191',
            'no_bags' => 'required|max:191',
            'unit' => 'required|string|max:191',
            'price_per_bag' => 'required|max:191',
        ]);
        
        return LiftruckPODtl::create($request->all());
    }

    public function post_po($id)
    {
        $detail =  LiftruckPODtl::where('header_id',$id)->get();

        foreach($detail as $d)
        {
            LiftruckLedger::insert(['po_detail_id'=>$d->id,'qty'=>$d->no_bags,'type'=>'BEG BAL']);
        }
        
        return ['data'=> LiftruckPOHdr::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function cancel_po($id){
        return ['data'=> LiftruckPOHdr::FindOrFail($id)->update(['status'=>'CANCELLED'])];
    }

    public function ledger_balance($id){
        return ['data'=>LiftruckLedger::where('po_detail_id',$id)->get()];
    }

    public function get_all_detail(){
        
        return ['data'=>LiftruckPODtl::join('liftruck_po_hdr', 'liftruck_po_hdr.id', '=', 'liftruck_po_dtl.header_id')->select('liftruck_po_dtl.*', 'liftruck_po_hdr.doc_no','liftruck_po_hdr.date')->get()];
    }

    
}
