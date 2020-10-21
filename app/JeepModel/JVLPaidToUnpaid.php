<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;

class JVLPaidToUnpaid extends Model
{
    protected $table = 'tbljeepvehicleloghdr';
    protected $primaryKey = 'JVLHDRID';
    protected $fillable = ['Status','BalanceAmount','CollectedAmount'];
   
}
