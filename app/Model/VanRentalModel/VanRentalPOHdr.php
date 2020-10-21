<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalPOHdr extends Model
{
    //
    protected $table = 'vanrental_po_hdr';
      protected $fillable = [
        'doc_no','date','status','encoded_by','encoded_id'
    ];

}
