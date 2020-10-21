<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckDRDtl extends Model
{
    //
    protected $table = 'liftruck_dr_dtl';
      protected $fillable = [
        'header_id','location','qty','unit'
    ];

}
