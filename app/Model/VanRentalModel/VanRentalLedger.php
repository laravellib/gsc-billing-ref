<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalLedger extends Model
{
    //
    protected $table = 'vanrental_ledger';
      protected $fillable = [
        'header_id','credit','debit','balance'
    ];

}
