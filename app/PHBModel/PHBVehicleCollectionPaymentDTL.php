<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class PHBVehicleCollectionPaymentDTL extends Model
{
    public function getJVCPJVCP($idsajvcp){

        $jvcp = DB::select("SELECT * FROM tblphbvehiclecollectionpaymentdtl WHERE PHBVLHDRID_Link = $idsajvcp order by PHBVCDTLID desc");
        return $jvcp;
    }
    public function getDelEntPay($idsajvcp){

        $jvcp = DB::select("DELETE FROM tblphbvehiclecollectionpaymentdtl WHERE PHBVLHDRID_Link = $idsajvcp");
        return $jvcp;
    }
    protected $table = 'tblphbvehiclecollectionpaymentdtl';
    protected $primaryKey = 'PHBVCDTLID';
    protected $fillable = ['PHBVLHDRID_Link', 'CollectedAmount','ORCRDate','ORCRNumber','Remarks','EncodedBy','EncodedDateTime'];
   
}
