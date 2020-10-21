<?php

namespace App\JeepModel;


use Illuminate\Database\Eloquent\Model;


class Vehicle extends Model
{
    protected $table = 'tblmotorvehiclelist';
    protected $primaryKey = 'MVID';
    protected $fillable = ['PlateNumber', 'EngineNumber','SerialNumber','AssetNumber','MVTID_Link','MVTypeName','DriverName','DriverID','DriverLastName','DriverFirstName','DriverMiddleName','DriverExtName','TruckerName','TruckerID','TruckerLastName','TruckerFirstName','TruckerMiddleName','TruckerExtName','IsGSCUnit'];

}
