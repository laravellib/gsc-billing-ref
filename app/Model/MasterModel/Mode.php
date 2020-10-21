<?php

namespace App\Model\MasterModel;

use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    //
    protected $table = 'payment_mode';
      protected $fillable = [
        'name'
    ];
}
