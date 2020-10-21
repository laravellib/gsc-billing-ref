<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartSoaHdr extends Model
{
    //
    protected $table = 'golf_cart_soa_hdr';
      protected $fillable = [
        'series_no','status','billed_id','billed_name','billed_address','soa_date','charge_invoice_no','period_covered','total_amount','details','remarks','preparedBy','preparedByPos','verifiedBy','verifiedByPos','notedBy','notedByPos','approvedBy','approvedByPos'
    ];
}
