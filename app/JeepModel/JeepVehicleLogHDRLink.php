<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;

class JeepVehicleLogHDRLink extends Model
{
    protected $table = 'tbljeepvehicleloghdr';
    protected $primaryKey = 'JVLHDRID';
    protected $fillable = ['CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate','Status'];
   
}
