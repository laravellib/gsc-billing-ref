<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanLocation extends Model
{
    //
    protected $table = 'wingvan_location';
      protected $fillable = [
        'name','mat_code','description','activity'
    ];

}
