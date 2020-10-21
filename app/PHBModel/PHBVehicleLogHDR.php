<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class PHBVehicleLogHDR extends Model
{
    public function getFilterFilter($idsajvcpfilter){

        $jvcpfilter = DB::select("SELECT BillAmount,CollectedAmount,BalanceAmount FROM tblphbvehicleloghdr WHERE PHBVLHDRID in (''+$idsajvcpfilter+'') ");
        return $jvcpfilter;
    }

    public function getbalamt($idsajvcpbalamt){

        $jvcpfilter = DB::select("SELECT BalanceAmount FROM tblphbvehicleloghdr WHERE PHBVLHDRID = $idsajvcpbalamt ");
        return $jvcpfilter;
    }

    public function getDateFromTo($datefrom,$dateto){

        $jvcpfilter = DB::select("SELECT * FROM tblphbvehicleloghdr WHERE PHBVLDate between '$datefrom' AND '$dateto' ");
        return $jvcpfilter;
    }

    public function kuhaalldata(){

        $jvcpfilter = DB::select("SELECT * FROM tblphbvehicleloghdr");
        return $jvcpfilter;
    }
    
    protected $table = 'tblphbvehicleloghdr';
    protected $primaryKey = 'PHBVLHDRID';
    protected $fillable = ['PHBVLDate', 'OVLNo','PHBIDLink','PHBPlateNo','DriverIDLink','DriverName','DriverLastName','DriverFirstName','DriverMiddleName','DriverExtName','TruckerName','TruckerFirstName','TruckerMiddleName','TruckerLastName','TruckerExtName','TruckerIDLink','GLCode','CostCenter','PerKilometerRate','startreading','endreading','actualstartreading','actualendreading','totalrun','totalactualrun','BillAmount','LessAdmin','LessFuel','FuelLiters','NetTrucker','Status','CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate','TimeIn','TimeOut','Assignment','LocationName'];
   
}
