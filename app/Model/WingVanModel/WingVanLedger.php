<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanLedger extends Model
{
    //
    protected $table = 'wingvan_ledger';
      protected $fillable = [
        'header_id','credit','debit','balance'
    ];

}
