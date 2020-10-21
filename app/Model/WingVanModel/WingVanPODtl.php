<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanPODtl extends Model
{
    //
    protected $table = 'wingvan_po_dtl';
      protected $fillable = [
        'header_id','mat_code','activity','location','no_bags','description','price_per_bag','amount'
    ];

}
