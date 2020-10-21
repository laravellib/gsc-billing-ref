<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalPayment extends Model
{
    //
    protected $table = 'vanrental_payment';
    protected $fillable = [
        'soa_link','mode','payment_date','or_ref_no','check_card_no','check_card_bank_name','amount'
    ];
}
