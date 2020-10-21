<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\PoList;
use App\PoDtlList;
use DB;

class PoController extends Controller
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
        /*$this->validate($request,[
            'FirstName' => 'required|string|max:50',
            'MiddleName' => 'required|string|max:50',
            'LastName' => 'required|string|max:50',
            'Address' => 'required|string',
            'GSCDriver' => 'required|string|max:1'
        ]);*/
        return PoList::create([
            'DocumentNum' => $request['DocumentNum'],
            'DocumentDate' => $request['DocumentDate'],
            'PaymentTerms' => $request['PaymentTerms'],
            'IncoTerms' => $request['IncoTerms'],
            'Vendor' => $request['Vendor'], 
            'Client' => $request['Client'],
            'Status' => $request['Status'],
            'created_at' => $request['Client'],
            'updated_at' => $request['Status']
        ]);
        return response()->json(array('success' => true, 'id' => $request->POid), 200);
        /*$fname = strtoupper($request['FirstName']);
        $mname = strtoupper($request['MiddleName']);
        $lname = strtoupper($request['LastName']);
        $extname = strtoupper($request['ExtName']);
        $address = strtoupper($request['Address']);
        $gscdriver = strtoupper($request['GSCDriver']);

        $data= DB::select("INSERT INTO drivers (FirstName,MiddleName,LastName,ExtName,Address,GSCDriver)VALUES('$fname','$mname','$lname','$extname','$address','$gscdriver')");
        return $data;*/
    }

    public function getPohdr(Request $request){
        // if($request['header']){
            $query = DB::connection('mysql')->select("SELECT * from tblpohdr ORDER BY POid desc");
        // }elseif($request['detail']){
        //     $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE hdr_idLink= ". $request['id'] ."  ORDER BY LName asc");
        // }
        return $query;
    }

    public function getuom(Request $request){
        // if($request['header']){
            $query = DB::connection('mysql')->select("SELECT * from tbluom ORDER BY unit_id desc");
        // }elseif($request['detail']){
        //     $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE hdr_idLink= ". $request['id'] ."  ORDER BY LName asc");
        // }
        return $query;
    }

    public function getsum(Request $request){
        $query = DB::connection('mysql')->select("SELECT SUMASS from po_sum WHERE POid= " . $request['id']);
        return $query;
    }

    public function postHeader(Request $request){
        // return $post;
        $data = array(
            'DocumentNum' => $request['DocumentNum'] ? $request['DocumentNum'] : "",
            'DocumentDate' => $request['DocumentDate'] ? $request['DocumentDate'] : "",
            'PaymentTerms' => $request['PaymentTerms'] ? $request['PaymentTerms'] : "",
            'IncoTerms' => $request['IncoTerms'] ? $request['IncoTerms'] : "",
            'Vendor' => $request['Vendor'] ? $request['Vendor'] : "",
            'Client' => $request['Client'] ? $request['Client'] : "",
            'Status' => $request['Status'] ? $request['Status'] : "",
            'batchNo' => $request['batchNo'] ? $request['batchNo'] : "",
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' =>date("Y-m-d H:i:s")
        );
        if($request['POid']){
            $query = DB::connection('mysql')
                ->table('tblpohdr')
                ->where('POid', $request['POid'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblpohdr')->insertGetId($data);
            if($id){
                return response()->json(array('id' => $id, 'success'=>true,'message'=>'Successfully inserted.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Failed inserting.'));
            }
        }
    }

    public function postDetail(Request $request){
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
            'ItemScope' => $request['ItemScope'] ? $request['ItemScope'] : "",
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

    public function dtl(Request $request){

        return PoDtlList::create([
            'LineNum' => $request['LineNum'],
            'MatCode' => $request['MatCode'],
            'Quantity' => $request['Quantity'],
            'Uom' => $request['Uom'],
            'UnitPrice' => $request['UnitPrice'], 
            'Amt' => $request['Amt'],
            'DelDate' => $request['DelDate'],
            'ItemDesc' => $request['ItemDesc'], 
            'POhdrlink_id' => $request['POhdrlink_id'],
        ]);
 
        // $data= DB::select("INSERT INTO tblpodtl (LineNum,MatCode,Quantity,Uom,UnitPrice,Amt,DelDate,ItemDesc,created_at,updated_at,POhdrlink_id)VALUES('$LineNum','$MatCode','$Quantity','$Uom','$UnitPrice','$Amt', '$DelDate','$ItemDesc','$created_at','$updated_at','$POhdrlink_id')");
        // return $data;
    }
    
    // public function getDtl($id){
    //     // $data= DB::select("INSERT INTO tblpodtl (LineNum,MatCode,Quantity,Uom,UnitPrice,Amt,DelDate,ItemDesc,created_at,updated_at,POhdrlink_id)VALUES('$LineNum','$MatCode','$Quantity','$Uom','$UnitPrice','$Amt', '$DelDate','$ItemDesc','$created_at','$updated_at','$POhdrlink_id')");
    //     $user = DB::table('users')->where('name', 'John')->first();

    //     echo $user->name;
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = DB::table('tblpodtl')->where('POhdrlink_id', $id)();
        return PoDtlList::latest()->paginate(7);
        
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
        $driver= PoList::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'DocumentNum' => $request['DocumentNum'],
            'DocumentDate' => $request['DocumentDate'],
            'PaymentTerms' => $request['PaymentTerms'],
            'IncoTerms' => $request['IncoTerms'],
            'Vendor' => $request['Vendor'], 
            'Client' => $request['Client']
        ]);
    }

    public function updatedtl(Request $request, $id)
    {
        $driver= PoDtlList::findOrFail($id);
        //$driver->update($request->all());
        $driver->update([
            'LineNum' => $request['LineNum'],
            'MatCode' => $request['MatCode'],
            'Quantity' => $request['Quantity'],
            'Uom' => $request['Uom'],
            'UnitPrice' => $request['UnitPrice'], 
            'Client' => $request['Client'],
            'Amt' => $request['Amt'], 
            'DelDate' => $request['DelDate'],
            'ItemDesc' => $request['ItemDesc'], 
            'ItemScope' => $request['ItemScope'], 
            'POhdrlink_id' => $request['POhdrlink_id']
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $driver = PoList::findOrFail($id);
        $driver->delete();
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

    public function deletePoDtl($id){
        $query = DB::connection('mysql')
            ->table('tblpodtl')
            ->select('*')
            ->where('PODtlid', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblpodtl')
                ->where('PODtlid', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }

    public function getdtl(Request $request)
    {
        // return PoDtlList::where('POhdrlink_id', $request['POhdrlink_id'])->paginate(5);
        $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE POhdrlink_id = " . $request['POhdrlink_id']);
        // $POID= $request['POhdrlink_id'];
        // $PoModel = new PoDtlList();
        // $query = $PoModel->getDtl($POID);
        // return $query->paginate(5);
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
        return $data;*/
        return $query;
    }
}
