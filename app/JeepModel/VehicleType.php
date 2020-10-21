<?php

namespace App\JeepModel;


use Illuminate\Database\Eloquent\Model;


class VehicleType extends Model
{
    protected $table = 'tblmotorvehicletype';
    protected $primaryKey = 'MVTID';
    protected $fillable = ['MVType'];

}
