<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckSoaHdr extends Model
{
    //
    protected $table = 'liftruck_soa_hdr';
      protected $fillable = [
        'series_no','status','billed_id','billed_name','billed_address','soa_date','charge_invoice_no','period_covered','total_amount','details','remarks','type','payment_link'
    ];
}
