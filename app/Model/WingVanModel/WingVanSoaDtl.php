<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanSoaDtl extends Model
{
    //
    protected $table = 'wingvan_soa_dtl';
      protected $fillable = [
        'soa_hdr_id','req_date','particulars','amount'
    ];
}
