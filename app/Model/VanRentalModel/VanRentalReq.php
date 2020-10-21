<?php

namespace App\Model\VanRentalModel;

use Illuminate\Database\Eloquent\Model;

class VanRentalReq extends Model
{
    //
    protected $table = 'vanrental_requisition';
      protected $fillable = [
        'req_id','date','type','po_no','po_detail_id','po_date','po_route','po_activity','client','vehicle_name','serial_no','gross_amount','no_trips','amount','encoded_by','encoded_id','status'
    ];

}
