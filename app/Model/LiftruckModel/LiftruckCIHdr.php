<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckCIHdr extends Model
{
    //
    protected $table = 'liftruck_ci_hdr';
      protected $fillable = [
        'ch_no','date','charged','tin','address','encoded_by','encoded_id','status'
    ];

}
