<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\PoList;
use App\PoDtlList;
use DB;

class ExpenseHdrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PoList::latest()->paginate(5);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
    }

    public function getexpensehdr(Request $request){
        // if($request['header']){
            $query = DB::connection('mysql')->select("SELECT * from tblexpensehdr ORDER BY expenseHdrID desc");
        // }elseif($request['detail']){
        //     $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE hdr_idLink= ". $request['id'] ."  ORDER BY LName asc");
        // }
        return $query;
    }

    public function postExpense(Request $request){
        // return $post;
        $data = array(
            'POidhdrlink' => $request['POidhdrlink'] ? $request['POidhdrlink'] : "",
            'POiddtllink' => $request['POiddtllink'] ? $request['POiddtllink'] : "",
            'Docnum' => $request['Docnum'] ? $request['Docnum'] : "",
            'Linenum' => $request['Linenum'] ? $request['Linenum'] : "",
            'Amount' => $request['Amount'] ? $request['Amount'] : "",
            'POdateexpense' => $request['POdateexpense'] ? $request['POdateexpense'] : "",
            'Expensetype' => $request['Expensetype'] ? $request['Expensetype'] : "",
            'Expenseid' => $request['Expenseid'] ? $request['Expenseid'] : "",
            'expenseName' => $request['expenseName'] ? $request['expenseName'] : "",
            'expenseHdrID' => $request['expenseHdrID'] ? $request['expenseHdrID'] : "",
            'remarks' => $request['remarks'] ? $request['remarks'] : "",
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' =>date("Y-m-d H:i:s")
        );
        if($request['POexid']){
            $query = DB::connection('mysql')
                ->table('tblpoexpense')
                ->where('POexid', $request['POexid'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblpoexpense')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function postMaterials(Request $request){
        // return $post;
        $data = array(
            'LineNum' => $request['LineNum'] ? $request['LineNum'] : "",
            'MatCode' => $request['MatCode'] ? $request['MatCode'] : "",
            'Quantity' => $request['Quantity'] ? $request['Quantity'] : "",
            'Uom' => $request['Uom'] ? $request['Uom'] : "",
            'UnitPrice' => $request['UnitPrice'] ? $request['UnitPrice'] : "",
            'Amt' => $request['Amt'] ? $request['Amt'] : "",
            'DelDate' => $request['DelDate'] ? $request['DelDate'] : "",
            'ItemDesc' => $request['ItemDesc'] ? $request['ItemDesc'] : "",
            'POhdrlink_id' => $request['POhdrlink_id'] ? $request['POhdrlink_id'] : "",
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' =>date("Y-m-d H:i:s")
        );
        if($request['PODtlid']){
            $query = DB::connection('mysql')
                ->table('tblpodtl')
                ->where('PODtlid', $request['PODtlid'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblpodtl')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
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

    }

    public function destroy($id)
    {
       
    }

    public function search()
    {
        if($search = \Request::get('q')){
            $drivers = PoList::where(function($query) use ($search){
                $query->where('FirstName','LIKE',"%$search%")
                        ->orwhere('MiddleName','LIKE',"%$search%")
                        ->orwhere('ExtName','LIKE',"%$search%")
                        ->orwhere('LastName','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $drivers = PoList::latest()->paginate(7);
        }

        return $drivers;
    }
    public function getAll(){
        return PoList::latest()->paginate(7);
    }

    public function getdtlAll($PODtlid){
        $PODtl = PoDtlList::where('POhdrlink_id', $PODtlid);
        return PoDtlList::latest()->paginate(7);
    }

    public function deletePoExpense($id){
        $query = DB::connection('mysql')
            ->table('tblpoexpense')
            ->select('*')
            ->where('POexid', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblpoexpense')
                ->where('POexid', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }
}
