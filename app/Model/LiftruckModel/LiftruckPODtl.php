<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckPODtl extends Model
{
    //
    protected $table = 'liftruck_po_dtl';
      protected $fillable = [
        'header_id','mat_code','location','no_bags','unit','price_per_bag','activity','description','amount'
    ];

}
