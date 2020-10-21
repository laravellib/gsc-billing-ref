<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanPOHdr extends Model
{
    //
    protected $table = 'wingvan_po_hdr';
      protected $fillable = [
        'doc_no','date','encoded_by','encoded_id','status'
    ];

}
