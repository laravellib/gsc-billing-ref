<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class PoDtlList extends Model
{
    protected $table = 'tblpodtl';
    protected $primaryKey = 'PODtlid';
    protected $fillable = ['LineNum', 'MatCode','Quantity','Uom','UnitPrice','Amt','DelDate','ItemDesc','POhdrlink_id'];
    
    public function getDtl($POID){

        $query = DB::select("SELECT * FROM tblpodtl WHERE POhdrlink_id = $POID");
        return $query;
    }
}
