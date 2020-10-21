<?php

namespace App\Model\MasterModel;

use Illuminate\Database\Eloquent\Model;

class MotorVehicleType extends Model
{
    //
    protected $table = 'motor_vehicle_type';
      protected $fillable = [
        'type'
    ];

    public function get_rate($id){

    }
}
