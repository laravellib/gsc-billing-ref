<?php

namespace App\Exports;

use App\Reports\DmpiBillingTransmittalReportModel;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Payroll;


class DmpiBillingTransmittalReportExport implements FromView
{   

    private $dateFrom;
    private $dateTo;
    private $preparedBy;
    private $preparedPos;
    private $receivedBy;
    private $receivedPos;
    private $checkedBy;
    private $checkedPos;
    private $approvedBy;
    private $approvedPos;

    public function __construct($request){
        $this->dateFrom = $request['dateFrom'];
        $this->dateTo = $request['dateTo'];
        $this->preparedBy = $request['preparedBy'];
        $this->preparedPos = $request['preparedPos'];
        $this->receivedBy = $request['receivedBy'];
        $this->receivedPos = $request['receivedPos'];
        $this->checkedBy = $request['checkedBy'];
        $this->checkedPos = $request['checkedPos'];
        $this->approvedBy = $request['approvedBy'];
        $this->approvedPos = $request['approvedPos'];
    }

    public function view(): View
    {
        $DmpiBillingTransmittalReportModel = new DmpiBillingTransmittalReportModel();

        $Payroll = new Payroll();
        $companyInfo = $Payroll->getCompanyInfo();
        $data = [
            'companyData' => $companyInfo,
            'periodCoverage' => $this->dateFrom." - ".$this->dateTo,
            'reportData' => $DmpiBillingTransmittalReportModel->getData($this->dateFrom, $this->dateTo),
            'preparedBy' => $this->preparedBy,
            'preparedPos' => $this->preparedPos,
            'receivedBy' => $this->receivedBy,
            'receivedPos' => $this->receivedPos,
            'checkedBy' => $this->checkedBy,
            'checkedPos' => $this->checkedPos,
            'approvedBy' => $this->approvedBy,
            'approvedPos' => $this->approvedPos
        ];

        return view('reports.exports.DmpiBillingTransmittalReport', $data);
    }
    
}
