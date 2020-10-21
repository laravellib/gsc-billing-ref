<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckLedger extends Model
{
    //
    protected $table = 'liftruck_ledger';
      protected $fillable = [
        'header_id','credit','debit','balance'
    ];

}
