<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalSoaDtl extends Model
{
    //
    protected $table = 'vanrental_soa_dtl';
      protected $fillable = [
        'soa_hdr_id','req_date','particulars','amount'
    ];
}
