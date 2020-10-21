<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckCIDtl extends Model
{
    //
    protected $table = 'liftruck_ci_dtl';
      protected $fillable = [
        'header_id','article','qty','unit','u_price','amount'
    ];

}
