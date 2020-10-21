<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\LiftruckModel\LiftruckRental;
use Illuminate\Support\Facades\Auth;
Use App\Model\LiftruckModel\LiftruckLedger;
class LiftruckRentalController extends Controller
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
        return LiftruckRental::latest()->paginate(10);
    }

    public function store_client(Request $request)
    {
        if ($request['id'] == 0){
            $req = new LiftruckRental;
            $req->req_id = $request['req_id'];
            $req->date = $request['req_date'];
            $req->type = "CLIENT DMPI";
            $req->po_no = $request['doc_no'];
            $req->po_date = $request['date'];
            $req->po_route = $request['route'];
            $req->po_activity = $request['activity'];
            $req->client = "";
            $req->vehicle_name ="";
            $req->serial_no = "";
            $req->gross_amount = $request['rate'];
            $req->no_trips = $request['qty'];
            $req->po_detail_id = $request['po_detail_id'];
            $req->amount = $request['amount'];
            $req->encoded_by = Auth::user()->name;
            $req->encoded_id = Auth::user()->id;
            $req->status = "ACTIVE";
            $req->save();
         }else {

            $req['req_id'] = $request['req_id'];
            $req['date'] = $request['req_date'];
            $req['po_no'] = $request['doc_no'];
            $req['po_date'] = $request['date'];
            $req['po_route'] = $request['route'];
            $req['po_activity'] = $request['activity'];
            $req['po_detail_id'] = $request['po_detail_id'];
            $req['gross_amount'] = $request['rate'];
            $req['no_trips'] = $request['qty'];
            $req['amount'] = $request['amount'];
            WingVanReq::FindOrFail($request['id'])->update($req);
        }
         return $req;
    }

    public function get_requisition_dmpi(){
        return ['data'=>LiftruckRental::where('type','CLIENT DMPI')->get()];
    }

    public function get_requisition_outsider(){
        

        return ['data'=>LiftruckRental::where('type','CLIENT OUTSIDER')->get()];
    }

    public function req_post($id)
    {
        $detail =  LiftruckRental::where('id',$id)->first();
        LiftruckLedger::insert(['po_detail_id'=>$detail->po_detail_id,'qty'=>$detail->no_trips,'type'=>'RENTAL']);
        return ['data'=> LiftruckRental::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function req_post_outsider($id)
    {
        return ['data'=> LiftruckRental::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function search($from,$to)
    {
        return ['data'=>LiftruckRental::where('soaid_link',0)->whereBetween('date',[$from,$to])->get()];
    }


  
}
