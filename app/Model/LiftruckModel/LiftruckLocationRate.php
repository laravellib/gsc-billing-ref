<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckLocationRate extends Model
{
    //
    protected $table = 'liftruck_location_rate';
      protected $fillable = [
        'loc_id','rate','status'
    ];


}
