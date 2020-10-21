<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartPayment extends Model
{
    //
    protected $table = 'golf_cart_payment';
    protected $fillable = [
        'soa_link','mode','payment_date','or_ref_no','check_card_no','check_card_bank_name','amount'
    ];
}
