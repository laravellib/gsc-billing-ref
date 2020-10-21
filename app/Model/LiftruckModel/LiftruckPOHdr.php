<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckPOHdr extends Model
{
    //
    protected $table = 'liftruck_po_hdr';
      protected $fillable = [
        'doc_no','date','encoded_by','encoded_id','status'
    ];

}
