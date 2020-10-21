<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckSoaDtl extends Model
{
    //
    protected $table = 'liftruck_soa_dtl';
      protected $fillable = [
        'soa_hdr_id','req_date','particulars','amount'
    ];
}
