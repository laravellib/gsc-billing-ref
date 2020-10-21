<?php

namespace App\OVLModel;

use Illuminate\Database\Eloquent\Model;
use DB;

class OVLVehicleRate extends Model
{
    public function getRateRate($idsavrate){

        $vrate = DB::select("SELECT PerHourRate,MVRRID FROM tblmotorvehiclerentalrate WHERE MVID_Link = $idsavrate order by MVRRID desc limit 1");
        return $vrate;
    }
    protected $table = 'tblmotorvehiclerentalrate';
    protected $primaryKey = 'MVRRID';
    protected $fillable = ['MVID_Link','PlateNumber','EffectiveDate','PerTransactionRate','DailyRate','PerKilometerRate','PerHourRate','PerAreaRate','FixedMonthlyRate','PerBagRate','PerDestinationRate','Status'];

}
