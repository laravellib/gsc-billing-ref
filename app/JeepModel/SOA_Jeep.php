<?php

namespace App\JeepModel;


use Illuminate\Database\Eloquent\Model;


class SOA_Jeep extends Model
{
    protected $table = 'tblsoa_jeep';
    protected $primaryKey = 'Soa_JeepID';
    protected $fillable = ['GSCSoaSeriesNo', 'Status','BilledToIDLink','BilledName','BilledAddress','THRUName','THRUPos','THRUAddress','JeepSoaDate','PreparedBy','PreparedByPos','CheckedBy','CheckedByPos','NotedBy','NotedByPos','Salutation','BodyofLetter','TotalAmount'];

}
