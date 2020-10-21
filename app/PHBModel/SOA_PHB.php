<?php

namespace App\PHBModel;


use Illuminate\Database\Eloquent\Model;


class SOA_PHB extends Model
{
    protected $table = 'tblsoa_phb';
    protected $primaryKey = 'Soa_PHBID';
    protected $fillable = ['GSCSoaSeriesNo', 'Status','BilledToIDLink','BilledName','BilledAddress','THRUName','THRUPos','THRUAddress','PHBSoaDate','PreparedBy','PreparedByPos','CheckedBy','CheckedByPos','NotedBy','NotedByPos','Salutation','BodyofLetter','TotalAmount'];

}
