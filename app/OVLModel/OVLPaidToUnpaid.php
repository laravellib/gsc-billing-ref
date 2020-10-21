<?php

namespace App\OVLModel;

use Illuminate\Database\Eloquent\Model;

class OVLPaidToUnpaid extends Model
{
    protected $table = 'tblovlvehicleloghdr';
    protected $primaryKey = 'OVLVLHDRID';
    protected $fillable = ['Status','BalanceAmount','CollectedAmount'];
   
}
