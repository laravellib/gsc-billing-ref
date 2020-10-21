<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckLocation extends Model
{
    //
    protected $table = 'liftruck_location';
      protected $fillable = [
        'name','mat_code','description','activity'
    ];

}
