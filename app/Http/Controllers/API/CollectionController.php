<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\PoList;
use App\PoDtlList;
use Mpdf\Mpdf;
use DB;

class CollectionController extends Controller
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

    public function getsoa(Request $request){
        // if($request['header']){
            $query = DB::connection('mysql')->select("SELECT * from tblsoa ORDER BY soaID desc");
        // }elseif($request['detail']){
        //     $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE hdr_idLink= ". $request['id'] ."  ORDER BY LName asc");
        // }
        return $query;
    }

    public function getclient(Request $request){
            $query = DB::connection('mysql')->select("SELECT * from client_list ORDER BY LastName desc");
        return $query;
    }

    public function getsum(Request $request){
        $query = DB::connection('mysql')->select("SELECT SUMASS from po_sum WHERE POid= " . $request['id']);
        return $query;
    }

    public function getcollection(Request $request){
        // if($request['header']){
            $query = DB::connection('mysql')->select("SELECT * from tblcollection WHERE PODtlid= " . $request['PODtlid']);
        // }elseif($request['detail']){
        //     $query = DB::connection('mysql')->select("SELECT * from tblpodtl WHERE hdr_idLink= ". $request['id'] ."  ORDER BY LName asc");
        // }
        return $query;
    }
    public function getpercentage(Request $request){
        $query = DB::connection('mysql')->select("SELECT * from percentsum WHERE PODtlid= " . $request['PODtlid']);
    return $query;
    }
    public function postCollection(Request $request){
        // return $post;
        $data = array(
            'Ponum' => $request['Ponum'] ? $request['Ponum'] : "",
            'POid' => $request['POid'] ? $request['POid'] : "",
            'Linenum' => $request['Linenum'] ? $request['Linenum'] : "",
            'PODtlid' => $request['PODtlid'] ? $request['PODtlid'] : "",
            'completion' => $request['completion'] ? $request['completion'] : "",
            'as_of' => $request['as_of'] ? $request['as_of'] : "",
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' =>date("Y-m-d H:i:s")
        );
        if($request['collectionID']){
            $query = DB::connection('mysql')
                ->table('tblcollection')
                ->where('collectionID', $request['collectionID'])
                ->update($data);
            if($query){
                return response()->json(array('success'=>true,'message'=>'Successfully updated.'));
            }else{
                return response()->json(array('success'=>false,'message'=>'Nothing has changed.'));
            }
        }else{
            $id = DB::connection('mysql')->table('tblcollection')->insertGetId($data);
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

    public function deleteCollection($id){
        $query = DB::connection('mysql')
            ->table('tblcollection')
            ->select('*')
            ->where('collectionID', $id)
            ->get();
        if($query){
            $query = DB::connection('mysql')
                ->table('tblcollection')
                ->where('collectionID', $id)
                ->delete();
            return $query ? response()->json(array('success'=>true,'message'=>'Successfully deleted.')) : response()->json(array('success'=>false,'message'=>'Delete failed.'));;
        }else{
            return response()->json(array('success'=>false,'message'=>'Id passed not found.'));
        }
    }
    // public function generate_pdf() {
    //     $data = [
    //         'foo' => 'bar'
    //     ];
    //     $pdf = PDF::loadView('pdf.document', $data);
    //     return $pdf->stream('document.pdf');
    // }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT * FROM tblsoa WHERE PODtlid = " . $request ['PODtlid'] . " AND soaID = " . $request ['soaID'] . "");
        $query2 = DB::connection('mysql')->select("SELECT * FROM tblsoa WHERE PODtlid = " . $request ['PODtlid']);
        if(!$request['report']){
            return $query ? response()->json(array('success'=>true,'message'=>'Generation Successful.')) : response()->json(array('success'=>false,'message'=>'No Data Found.'));
        }else{
            if(!$query){
                $records = 'fail';
                $records_soa = 'fail';
            }else{
                $records = $query;
                $records_soa = $query2;
            }
            $report_data = [
                'records' => $records,
                'records_soa' => $records_soa
            ];
            $html = view('pdf.soa', $report_data);
            $mpdf = new Mpdf([
                'default_font_size' => 9,
                'default_font' => 'tahoma',
            ]);
            $mpdf->useFixedNormalLineHeight = false;
            $mpdf->useFixedTextBaseline = false;
            $mpdf->adjustFontDescLineheight = 0.5;
            $mpdf->packTableData = true;
            $mpdf->shrink_tables_to_fit = 1;
            $mpdf->WriteHTML($html);
            $mpdf->Output('PPEReport.pdf', 'I');
        }
    }
}
