<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;

class PHBVehicleLogHDRLink extends Model
{
    protected $table = 'tblphbvehicleloghdr';
    protected $primaryKey = 'PHBVLHDRID';
    protected $fillable = ['CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate','Status'];
   
}
