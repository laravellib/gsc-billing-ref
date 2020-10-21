<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\DmpiBillingTransmittalReportExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Reports\DmpiBillingTransmittalReportModel;
use Mpdf\Mpdf;
use App\Payroll;
// use Illuminate\Support\Facades\Input;

class DmpiBillingTransmittalReportController extends Controller
{
    public function export(Request $request) 
    {
        return Excel::download(new DmpiBillingTransmittalReportExport($request), 'DmpiBillingTransmittalReport.xlsx');
    }

    public function previewReport(Request $request)
    {
        $DmpiBillingTransmittalReportModel = new DmpiBillingTransmittalReportModel();
        $query = $DmpiBillingTransmittalReportModel->getData($request['dateFrom'], $request['dateTo']);
        $payroll = new Payroll();
        $companyInfo = $payroll->getCompanyInfo();

        if (!$request['report']) {
            return $query ? response()->json(array('success' => true, 'message' => 'Generation Successful.')) : response()->json(array('success' => false, 'message' => 'No Data Found.'));
        } else {
            if (!$query) {
                $records = 'fail';
            } else {
                $records = $query;
            }
            $report_data = [
                'records' => $records,
                'preparedby' => $request['userMe'],
                'from' => $request['dateFrom'],
                'to' => $request['dateTo'],
                'company' => $companyInfo
            ];
            $html = view('billingRPTpdf.dmpiBillingTransmittal', $report_data);
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
            $mpdf->Output('TOna.pdf', 'I');
        }
    } 
}
