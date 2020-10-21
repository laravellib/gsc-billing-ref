<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;
use DB;

class PHBVehicleRate extends Model
{
    public function getRateRate($idsavrate){

        $vrate = DB::select("SELECT PerKilometerRate,MVRRID FROM tblmotorvehiclerentalrate WHERE MVID_Link = $idsavrate limit 1");
        return $vrate;
    }
    protected $table = 'tblmotorvehiclerentalrate';
    protected $primaryKey = 'MVRRID';
    protected $fillable = ['MVID_Link','PlateNumber','EffectiveDate','PerTransactionRate','DailyRate','PerKilometerRate','PerHourRate','PerAreaRate','FixedMonthlyRate','PerBagRate','PerDestinationRate','Status'];

}
