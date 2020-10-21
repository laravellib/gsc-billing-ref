<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartSoaDtl extends Model
{
    //
    protected $table = 'golf_cart_soa_dtl';
      protected $fillable = [
        'soa_hdr_id','period_month','year','amount','particulars'
    ];
}
