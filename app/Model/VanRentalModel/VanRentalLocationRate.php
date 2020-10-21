<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalLocationRate extends Model
{
    //
    protected $table = 'vanrental_location_rate';
      protected $fillable = [
        'loc_id','rate','status'
    ];


}
