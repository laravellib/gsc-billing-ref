<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanLocationRate extends Model
{
    //
    protected $table = 'wingvan_location_rate';
      protected $fillable = [
        'loc_id','rate','status'
    ];


}
