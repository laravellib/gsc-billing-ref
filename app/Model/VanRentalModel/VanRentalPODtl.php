<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalPODtl extends Model
{
    //
    protected $table = 'vanrental_po_dtl';
      protected $fillable = [
        'header_id','location','mat_code','description','activity','qty','u_price','amount','encoded_by','encoded_id'
    ];

}
