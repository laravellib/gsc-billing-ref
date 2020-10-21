<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalLocation extends Model
{
    //
    protected $table = 'vanrental_location';
      protected $fillable = [
        'name','mat_code','description','activity'
    ];


}
