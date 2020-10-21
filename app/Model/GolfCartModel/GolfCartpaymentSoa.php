<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartPaymentSoa extends Model
{
    //
    protected $table = 'golf_cart_payment_soa';
    protected $fillable = [
        'ledger_link','soa_no','soa_date','soa_amount'
    ];
}
