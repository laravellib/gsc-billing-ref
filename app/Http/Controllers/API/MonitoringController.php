<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PHBModel\SOA_PHB;
use Mpdf\Mpdf;
use DB;
class MonitoringController extends Controller
{
    public function getMonitoring(Request $request){
        $query = DB::connection('mysql')->select("SELECT * from monitoring ORDER BY batchNo desc");
        return $query;
    }

    public function generate_pdf(Request $request) {
        $query = DB::connection('mysql')->select("SELECT h.DocumentDate,h.batchNo,h.DocumentNum,d.ItemDesc, SUM(d.Amt) as total_Amt FROM  tblpohdr h, tblpodtl d WHERE POid = POhdrlink_id GROUP BY POhdrlink_id");
        if(!$request['report']){
            return $query ? response()->json(array('success'=>true,'message'=>'Generation Successful.')) : response()->json(array('success'=>false,'message'=>'No Data Found.'));
        }else{
            if(!$query){
                $records = 'fail';
            }else{
                $records = $query;
            }
            $report_data = [
                'records' => $records,
            ];
            $html = view('pdf.monitoring_projdtl', $report_data);
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
            $mpdf->Output('monitoring_projdtl.pdf', 'I');
        }
    }

    public function generate_pdf_direct(Request $request) {
        $query = DB::connection('mysql')->select("SELECT * from monitoring ORDER BY batchNo desc");
        if(!$request['report']){
            return $query ? response()->json(array('success'=>true,'message'=>'Generation Successful.')) : response()->json(array('success'=>false,'message'=>'No Data Found.'));
        }else{
            if(!$query){
                $records = 'fail';
            }else{
                $records = $query;
            }
            $report_data = [
                'records' => $records,
            ];
            $html = view('pdf.monitoring_directcost', $report_data);
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
            $mpdf->Output('monitoring_directcost.pdf', 'I');
        }
    }

    public function generate_pdf_sumall(Request $request) {
        $query = DB::connection('mysql')->select("SELECT * from sum_all ORDER BY batchNo desc");
        if(!$request['report']){
            return $query ? response()->json(array('success'=>true,'message'=>'Generation Successful.')) : response()->json(array('success'=>false,'message'=>'No Data Found.'));
        }else{
            if(!$query){
                $records = 'fail';
            }else{
                $records = $query;
            }
            $report_data = [
                'records' => $records,
            ];
            $html = view('pdf.monitoring_sumall', $report_data);
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
            $mpdf->Output('monitoring_sumall.pdf', 'I');
        }
    }
}