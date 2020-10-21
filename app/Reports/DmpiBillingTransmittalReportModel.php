<?php

namespace App\Reports;

use Illuminate\Database\Eloquent\Model;
use DB;

class DmpiBillingTransmittalReportModel extends Model
{
    public function getData($dateFrom, $dateTo){
        
        $data = collect(DB::connection('mysql')->select("call spDailyBillingTransmittal($dateFrom, $dateTo)"));
        return $data;
        
    }
}
