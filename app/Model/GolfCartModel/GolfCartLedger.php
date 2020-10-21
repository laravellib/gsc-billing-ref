<?php

namespace App\Model\GolfCartModel;

use Illuminate\Database\Eloquent\Model;

class GolfCartLedger extends Model
{
    //
    protected $table = 'golf_cart_ledger';
      protected $fillable = [
        'trans_date','gcid_link','description','golfcart_no','reference_no','account_code','debit_amount','balance_amount','running_balance','type','x_month','x_year'
    ];
}
