<?php

namespace App\otherclient;

use Illuminate\Database\Eloquent\Model;
use DB;

class OtherClientHdr extends Model
{
    public function generateDarInfo($clientID, $pmy, $period)
    {
        #get all the DAR and employee information from payroll and insert into otherclients soa table in billing
        #get paystation the belongs to the selected client

        $dar = DB::connection('mysql2')
                ->table('tbldarentry_dtl')
                ->Join('tbldarentry_hdr','tbldarentry_hdr.DEHDRID','=','tbldarentry_dtl.DEHDRID_Link')
                ->leftJoin('tblpaystation', 'tblpaystation.PSID','=','tbldarentry_dtl.PayStationID_Link')
                ->leftJoin('tblbilling_rate', 'tblbilling_rate.rateIDLink','=','tbldarentry_dtl.RTCTemplatesID_Link')
                ->select('tbldarentry_dtl.*', 'tbldarentry_hdr.DEHDRID','tbldarentry_hdr.BatchID_Link', 'tbldarentry_hdr.BatchNo','tbldarentry_hdr.PayrollPayMonth', 'tbldarentry_hdr.Period', 'tblpaystation.*','tblbilling_rate.*')
                ->selectRaw('CONCAT(tbldarentry_dtl.LName, " ", tbldarentry_dtl.ExtName, ", ", tbldarentry_dtl.FName, " ",tbldarentry_dtl.MName) as FullName')
                ->where('PayrollPayMonth', $pmy)
                ->where('Period', $period)
                ->where('tblpaystation.Client_ID','=',$clientID)
                ->where('tbldarentry_hdr.status','=','POSTED')
                ->get();

        return $dar;

    }
 
}
