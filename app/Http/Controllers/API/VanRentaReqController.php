<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\VanRentalModel\VanRentalReq;
use Illuminate\Support\Facades\Auth;
Use App\Model\VanRentalModel\VanRentalLedger;
class VanRentaReqController extends Controller
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
        return VanRentalReq::latest()->paginate(10);
    }

    public function store_client(Request $request)
    {
        if ($request['id'] == 0){
            $req = new VanRentalReq;
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
            VanRentalReq::FindOrFail($request['id'])->update($req);
        }
         return $req;
    }

    public function store_outsider(Request $request)
    {
        
        if ($request['id'] == 0){
            $req = new VanRentalReq;
            $req->req_id = $request['req_id'];
            $req->date = $request['req_date'];
            $req->type = "CLIENT OUTSIDER";
            $req->po_no = "";
            $req->po_date = "";
            $req->po_route = "";
            $req->po_activity = $request['activity'];
            $req->client = $request['client'];
            $req->vehicle_name = $request['vehicle_name'];
            $req->serial_no = $request['serial_no'];
            $req->gross_amount = $request['rate'];
            $req->no_trips = $request['qty'];
            $req->amount = $request['amount'];
            $req->encoded_by = Auth::user()->name;
            $req->encoded_id = Auth::user()->id;
            $req->status = "ACTIVE";
            $req->save();

        }else {

            $req['req_id'] = $request['req_id'];
            $req['date'] = $request['req_date'];
            $req['client'] = $request['client'];
            $req['vehicle_name'] = $request['vehicle_name'];
            $req['serial_no'] = $request['serial_no'];
            $req['po_activity'] = $request['activity'];
            $req['gross_amount'] = $request['rate'];
            $req['no_trips'] = $request['qty'];
            $req['amount'] = $request['amount'];
            VanRentalReq::FindOrFail($request['id'])->update($req);
        }

         return $req;
    }

    public function get_requisition_dmpi(){
        return ['data'=>VanRentalReq::where('type','CLIENT DMPI')->get()];
    }

    public function get_requisition_outsider(){
        

        return ['data'=>VanRentalReq::where('type','CLIENT OUTSIDER')->get()];
    }

    public function req_post($id)
    {
        $detail =  VanRentalReq::where('id',$id)->first();
        VanRentalLedger::insert(['po_detail_id'=>$detail->po_detail_id,'qty'=>$detail->no_trips,'type'=>'RENTAL']);
        return ['data'=> VanRentalReq::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function req_post_outsider($id)
    {
        return ['data'=> VanRentalReq::FindOrFail($id)->update(['status'=>'POSTED'])];
    }

    public function search($from,$to)
    {
        return ['data'=>VanRentalReq::where('soaid_link',0)->whereBetween('date',[$from,$to])->get()];
    }
    
  
}
