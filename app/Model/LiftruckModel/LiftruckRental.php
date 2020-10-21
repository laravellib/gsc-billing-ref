<?php

namespace App\Model\LiftruckModel;

use Illuminate\Database\Eloquent\Model;

class LiftruckRental extends Model
{
    //
    protected $table = 'liftruck_rental';
      protected $fillable = [
        'req_id','date','type','po_no','po_detail_id','po_date','po_route','po_activity','client','vehicle_name','serial_no','gross_amount','no_trips','amount','encoded_by','encoded_id','status'
    ];

}
