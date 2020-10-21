<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class JeepVehicleCollectionPaymentDTL extends Model
{
    public function getJVCPJVCP($idsajvcp){

        $jvcp = DB::select("SELECT * FROM tbljeepvehiclecollectionpaymentdtl WHERE JVLHDRID_Link = $idsajvcp order by JVCDTLID desc");
        return $jvcp;
    }
    public function getDelEntPay($idsajvcp){

        $jvcp = DB::select("TRUNCATE tbljeepvehiclecollectionpaymentdtl WHERE JVLHDRID_Link = $idsajvcp");
        return $jvcp;
    }
    protected $table = 'tbljeepvehiclecollectionpaymentdtl';
    protected $primaryKey = 'JVCDTLID';
    protected $fillable = ['JVLHDRID_Link', 'CollectedAmount','ORCRDate','ORCRNumber','Remarks','EncodedBy','EncodedDateTime'];
   
}
