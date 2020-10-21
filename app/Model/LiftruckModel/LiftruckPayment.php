<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckPayment extends Model
{
    //
    protected $table = 'liftruck_payment';
    protected $fillable = [
        'soa_link','mode','payment_date','or_ref_no','check_card_no','check_card_bank_name','amount'
    ];
}
