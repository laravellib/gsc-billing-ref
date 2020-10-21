<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;

class PHBPaidToUnpaid extends Model
{
    protected $table = 'tblphbvehicleloghdr';
    protected $primaryKey = 'PHBHDRID';
    protected $fillable = ['Status','BalanceAmount','CollectedAmount'];
   
}
