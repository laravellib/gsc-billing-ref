<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\GolfCartModel\GolfCartLedger;
Use App\Model\GolfCartModel\GolfCartPayment;
Use App\Model\GolfCartModel\GolfCartPaymentSoa;
Use App\Model\MasterModel\MotorVehicleList;
use PDF;
class GolfCartLedgerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return GolfCartLedger::latest()->paginate(10);
        return ['data'=>GolfCartLedger::where('type','TRANSACTION')->get()];
    }

    public function ledger()
    {
        $data = GolfCartLedger::all();
        $datas = [];
        $temp =[];
        $balance =0;
        foreach($data as $d){
            $temp['id'] = $d->id;
            $temp['trans_date'] = $d->trans_date;
            $temp['golfcart_no'] = $d->golfcart_no;
            $temp['description'] = $d->description;
            $temp['account_code'] = $d->account_code;
            $temp['debit_amount'] = $d->debit_amount;
            $temp['credit_amount'] = $d->credit_amount;
            $temp['type'] = $d->type;
            $balance = $balance + $d->debit_amount -$d->credit_amount;
            $temp['balance'] = $balance;
            $temp['remarks'] = $d->remarks;
            $temp['balance_amount'] = $d->balance_amount;
            array_push($datas,$temp);
        }
       return ['current_page'=>'1','data'=>$datas];
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['type'] = 'TRANSACTION';
        $request['balance_amount'] = $request['debit_amount'];
        $request['running_balance'] = GolfCartLedger::where('gcid_link',$request['gcid_link'])->get()->sum('balance_amount') + $request['debit_amount'];
        return GolfCartLedger::create($request->all());
    }
    
    public function payment_store(Request $request)
    {
        $this->validate($request, [
            'payment_date' => 'required',
            'or_ref_no' => 'required',
            'amount'=>'required'
        ]);
        GolfCartPayment::create($request->all());
        foreach($request['filter'] as $f){
            if ($f['id']==""){
                
            }else{
                GolfCartLedger::FindOrFail($f['id'])->update(['balance_amount'=> $f['debit_amount'] - $f['balance_amount']]);
                $rental = new GolfCartLedger;
                $rental->gcid_link = $f['gcid_link'];
                $rental->golfcart_no = $f['golfcart_no'];
                $rental->trans_date = $request['payment_date'];
                $rental->reference_no = $request['or_ref_no'];
                $rental->credit_amount = $f['balance_amount'];
                $rental->balance_amount = $f['debit_amount'] - $f['balance_amount'];
                $rental->running_balance = $f['debit_amount'] - $f['balance_amount'];
                $rental->remarks = "Check#:".$request['or_ref_no']." checkAmount:".$request['amount'];
                $rental->x_month = $request['x_month'];
                $rental->x_year = $request['x_year'];
                $rental->type='PAYMENT';
                $rental->soaid_link = $f['soaid_link'];
                $rental->save();
            }
        }
        return $request['filter'];
        
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
        GolfCartLedger::FindOrFail($id)->update($request->all());
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
        GolfCartLedger::FindOrFail($id)->delete();
        return ['message'=>'Deleted']; 
    }

    public function pdf(){
        $pdf = \App::make('dompdf.wrapper');
        $data = GolfCartLedger::latest()->paginate(10);
        $pdf->loadHTML('<h1>pdf test</h1>');
    }

    public function search($from,$to)
    {
        $grandtotal = GolfCartLedger::selectRaw('SUM(debit_amount) as total_amount,x_year,x_month')->where(['type'=>'TRANSACTION','soaid_link'=>0])->whereBetween('trans_date',[$from,$to])->groupBy('x_month','x_year')->get();
        return ['data'=>GolfCartLedger::where(['type'=>'TRANSACTION','soaid_link'=>0])->whereBetween('trans_date',[$from,$to])->get(),'grandtotal'=>$grandtotal];
    }

    public function soa_ledger($id){
        return ['data'=>GolfCartLedger::where(['soaid_link'=>$id,'type'=>'TRANSACTION'])->get(),'sum' =>GolfCartLedger::where(['soaid_link'=>$id,'type'=>'TRANSACTION'])->get()->sum('balance_amount')];
    }

    public function general_ledger($id)
    {
        $data = GolfCartLedger::where(['gcid_link'=>$id])->get();
        $datas = [];
        $temp =[];
        $balance =0;
        foreach($data as $d){
            $temp['id'] = $d->id;
            $temp['trans_date'] = $d->trans_date;
            $temp['golfcart_no'] = $d->golfcart_no;
            $temp['debit_amount'] = $d->debit_amount;
            $temp['credit_amount'] = $d->credit_amount;
            $temp['type'] = $d->type;
            $balance = $balance + $d->debit_amount -$d->credit_amount;
            $temp['balance'] = $balance;
            $temp['remarks'] = $d->remarks;
            $temp['balance_amount'] = $d->balance_amount;
            array_push($datas,$temp);
        }
       return ['current_page'=>'1','data'=>$datas];
    }

    public function upload_excel(Request $request)
    {
        $data = $request['files'];

        foreach($data as $d)
        {
            $vehicle = MotorVehicleList::where('name', $d['golf_cart'])->where('type_id', 1)->limit(1)->get();
            $d['type']= "TRANSACTION";
            $d['balance_amount'] = $d['debit_amount'];
            $d['running_balance'] = $d['debit_amount'];
            foreach($vehicle as $data){
                $d['gcid_link'] = $data->id;
                $d['golfcart_no'] = $data->name;
                break;
            }
            GolfCartLedger::create($d);
        }
        return ['data'=> "Saved"];
    }
}
