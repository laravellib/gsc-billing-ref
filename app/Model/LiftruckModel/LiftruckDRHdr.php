<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckDRHdr extends Model
{
    //
    protected $table = 'liftruck_dr_hdr';
      protected $fillable = [
        'delivered_to','date','unit_no','from','to','start','end','encoded_by','encoded_id','status'
    ];

}
