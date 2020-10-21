<?php

namespace App\Model\MasterModel;

use Illuminate\Database\Eloquent\Model;

class MotorVehicleList extends Model
{
    //
    protected $table = 'motor_vehicle_list';
      protected $fillable = [
        'type_id','name','asset_no','engine_no','serial_no','plate_no'
    ];
}
