<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class JeepVehicleLogHDR extends Model
{
    public function getFilterFilter($idsajvcpfilter){

        $jvcpfilter = DB::select("SELECT BillAmount,CollectedAmount,BalanceAmount FROM tbljeepvehicleloghdr WHERE JVLHDRID in (''+$idsajvcpfilter+'') ");
        return $jvcpfilter;
    }

    public function getbalamt($idsajvcpbalamt){

        $jvcpfilter = DB::select("SELECT BalanceAmount FROM tbljeepvehicleloghdr WHERE JVLHDRID = $idsajvcpbalamt ");
        return $jvcpfilter;
    }

    public function getDateFromTo($datefrom,$dateto){

        $jvcpfilter = DB::select("SELECT * FROM tbljeepvehicleloghdr WHERE JVLDate between '$datefrom' AND '$dateto' ");
        return $jvcpfilter;
    }

    public function kuhaalldata(){

        $jvcpfilter = DB::select("SELECT * FROM tbljeepvehicleloghdr");
        return $jvcpfilter;
    }
    
    protected $table = 'tbljeepvehicleloghdr';
    protected $primaryKey = 'JVLHDRID';
    protected $fillable = ['JVLDate', 'OVLNo','JeepIDLink','JeepPlateNo','DriverIDLink','DriverName','DriverLastName','DriverFirstName','DriverMiddleName','DriverExtName','TruckerName','TruckerFirstName','TruckerMiddleName','TruckerLastName','TruckerExtName','TruckerIDLink','GLCode','CostCenter','PerDayRate','NumberofDays','BillAmount','LessAdmin','LessFuel','NetTrucker','Status','CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate'];
   
}
