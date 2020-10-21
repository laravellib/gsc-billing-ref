<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartAdjustment extends Model
{
    //
    protected $table = 'golf_cart_adjustment';
      protected $fillable = [
        'golfcart_id','golfcart_no','date','series_no','post_as','status','particulars','amount'
    ];
}
