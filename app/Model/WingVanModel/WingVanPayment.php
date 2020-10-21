<?php

namespace App\Model\WingVanModel;

use Illuminate\Database\Eloquent\Model;

class WingVanPayment extends Model
{
    //
    protected $table = 'wingvan_payment';
    protected $fillable = [
        'soa_link','mode','payment_date','or_ref_no','check_card_no','check_card_bank_name','amount'
    ];
}
