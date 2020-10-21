<?php

namespace App\OVLModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class OVLVehicleCollectionPaymentDTL extends Model
{
    public function getJVCPJVCP($idsajvcp){

        $jvcp = DB::select("SELECT * FROM tblovlvehiclecollectionpaymentdtl WHERE OVLVLHDRID_Link = $idsajvcp order by OVLVCDTLID desc");
        return $jvcp;
    }
    public function getDelEntPay($idsajvcp){

        $jvcp = DB::select("DELETE FROM tblovlvehiclecollectionpaymentdtl WHERE OVLVLHDRID_Link = $idsajvcp");
        return $jvcp;
    }
    protected $table = 'tblovlvehiclecollectionpaymentdtl';
    protected $primaryKey = 'OVLVCDTLID';
    protected $fillable = ['OVLVLHDRID_Link', 'CollectedAmount','ORCRDate','ORCRNumber','Remarks','EncodedBy','EncodedDateTime','ModeOfPayment','CheckNumber','CheckDate'];
   
}
