<?php

namespace App\OVLModel;

use Illuminate\Database\Eloquent\Model;
use DB;
class OVLVehicleLogHDR extends Model
{
    public function getFilterFilter($idsajvcpfilter){

        $jvcpfilter = DB::select("SELECT BillAmount,CollectedAmount,BalanceAmount FROM tblovlvehicleloghdr WHERE OVLVLHDRID in (''+$idsajvcpfilter+'') ");
        return $jvcpfilter;
    }

    public function getbalamt($idsajvcpbalamt){

        $jvcpfilter = DB::select("SELECT BalanceAmount FROM tblovlvehicleloghdr WHERE OVLVLHDRID = $idsajvcpbalamt ");
        return $jvcpfilter;
    }

    public function getDateFromTo($datefrom,$dateto){

        $jvcpfilter = DB::select("SELECT * FROM tblovlvehicleloghdr WHERE OVLVLDate between '$datefrom' AND '$dateto' ");
        return $jvcpfilter;
    }

    public function kuhaalldata(){

        $jvcpfilter = DB::select("SELECT * FROM tblovlvehicleloghdr");
        return $jvcpfilter;
    }
    
    protected $table = 'tblovlvehicleloghdr';
    protected $primaryKey = 'OVLVLHDRID';
    protected $fillable = ['OVLVLDate', 'OVLNo','OVLIDLink','OVLPlateNo','DriverIDLink','DriverName','DriverLastName','DriverFirstName','DriverMiddleName','DriverExtName','TruckerName','TruckerFirstName','TruckerMiddleName','TruckerLastName','TruckerExtName','TruckerIDLink','ClientIDLink','ClientName','ClientFirstName','ClientMiddleName','ClientLastName','ClientExtName','GLCode','CostCenter','PerHourRate','MaintenanceCost','SubTotalExpense','TotalExpense','Helper','Labor','NumberOfHours','startreading','endreading','BillAmount','LessAdmin','LessFuel','NetTrucker','Status','CollectedAmount','BalanceAmount','ORCRNumber','ORCRDate','ModeOfPayment','CheckNumber','CheckDate','Assignment'];
   
}
