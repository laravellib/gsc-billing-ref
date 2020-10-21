<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalSoaHdr extends Model
{
    //
    protected $table = 'vanrental_soa_hdr';
      protected $fillable = [
        'series_no','status','billed_id','billed_name','billed_address','soa_date','charge_invoice_no','period_covered','total_amount','details','remarks','type','payment_link'
    ];
}
