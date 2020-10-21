<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;
use DB;

class VehicleRate extends Model
{
    public function getRateRate($idsavrate){

        $vrate = DB::select("SELECT DailyRate,MVRRID FROM tblmotorvehiclerentalrate WHERE MVID_Link = $idsavrate limit 1");
        return $vrate;
    }
    protected $table = 'tblmotorvehiclerentalrate';
    protected $primaryKey = 'MVRRID';
    protected $fillable = ['MVID_Link','PlateNumber','EffectiveDate','','PerTransactionRate','DailyRate','PerKilometerRate','PerHourRate','PerAreaRate','FixedMonthlyRate','PerBagRate','PerDestinationRate','Status'];

}
