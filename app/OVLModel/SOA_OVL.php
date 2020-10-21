<?php

namespace App\OVLModel;


use Illuminate\Database\Eloquent\Model;


class SOA_OVL extends Model
{
    protected $table = 'tblsoa_ovl';
    protected $primaryKey = 'Soa_OVLID';
    protected $fillable = ['GSCSoaSeriesNo', 'Status','BilledToIDLink','BilledName','BilledAddress','BilledTin','OVLSoaDate','PreparedBy','PreparedByPos','ApprovedBy','ApprovedByPos','CDateFrom','CDateTo','TotalAmount'];

}
