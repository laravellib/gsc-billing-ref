<?php

namespace App\OVLModel;

use Illuminate\Database\Eloquent\Model;

class OVLVehicleLogHDRLink extends Model
{
    protected $table = 'tblovlvehicleloghdr';
    protected $primaryKey = 'OVLVLHDRID';
    protected $fillable = ['CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate','Status','ModeOfPayment','CheckNumber','CheckDate'];
   
}
