<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Payroll extends Model
{
    public function getBatch($period, $phase, $isVolume){

        $batch = DB::connection('mysql2')->select("SELECT BID, BNo FROM tblbatch WHERE Period = $period AND Phase = $phase AND isVolume= '$isVolume'");
        return $batch;
        
    }
    public function getAllPeriodAndStatus(){

        $periods = DB::connection('mysql2')->select("SELECT * FROM tblpayrollperiod ORDER BY PPID DESC LIMIT 10");
        return $periods;

    }
    public function getBatchInfo($id){

        $batchInfo = DB::connection('mysql2')->select("SELECT * FROM tblbatch WHERE BID = '$id'");
        return $batchInfo;

    }
    public function getBatchLocation()
    {
        $locations = DB::connection('mysql2')->select("SELECT LocationID, UCASE(Location) AS 'Location', LocPrefix, Code FROM tbllocation ORDER BY Location");
        return $locations;
    }
    public function getSarActivity()
    {
        $activity = DB::connection('mysql2')->select("SELECT SAID, UCASE(SubActivity) AS 'activity' FROM tblsubactivity ORDER BY SubActivity");
        return $activity;
    }
    public function getSoaRate($activityID)
    {
        $soaRate = DB::connecion('mysql')->select("SELECT * FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = '$activityID'");
        return $soaRate;
    }
    public function getLocationName($id) //get the location name given the id
    {
        $locations = DB::connection('mysql2')->select("SELECT UCASE(Location) AS 'Location' FROM tbllocation ORDER BY Location WHERE LocationID = '$id'");
        return $locations;
    }
    public function getUnitsFromSarRate() //DMPI SAR ENTRY 
    {
        $unit = DB::connection('mysql2')->select("SELECT DISTINCT(UCASE(Unit)) as unit FROM tblvolume_rateactivitylist");
        return $unit;
    }
    public function getRateSar($activityID, $unit, $daytype)
    {
        if($daytype == 1) #regularDay
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, RD_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }elseif($daytype == 3) #sunday restday
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, SR_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }elseif($daytype ==4) #special holiday
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, SH_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }elseif($daytype ==5) #special holiday on restday
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, SHOR_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }elseif($daytype ==6) #regular holiday
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, RH_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }elseif($daytype ==7) #regular holiday on restday
        {
            $rates = DB::connection('mysql2')->select("SELECT VRALID, RHOR_RATE_ER as rate FROM tblvolume_rateactivitylist WHERE SubActivityID_Link = $activityID AND Unit='$unit' LIMIT 1");
        }

        return $rates;
        
    }
    
    public function getSelectedActivity($activityID)
    {
        $data = DB::connection('mysql2')->select("SELECT SubActivity FROM tblsubactivity WHERE SAID='$activityID'");
        return $data;
    }
    public function getBatchDayType($dayID)
    {
        $daytype = DB::connection('mysql2')->select("SELECT RateDayType FROM tblratedaytype WHERE RDID='$dayID'");
        return $daytype;
    }
    public function getPeriodInfo($pmy, $period){
        $period = DB::connection('mysql2')->table('tblpayrollperiod')
                    ->select('*')
                    ->where('xPeriod', '=', $pmy)
                    ->where('xPhase', '=', $period)
                    ->get();
        
        return $period;
    }
    public function getCompanyInfo(){
        $data = DB::connection('mysql2')->table('tblcompanyinfo')
                    ->select('*')
                    ->limit(1)
                    ->get();

        return $data;
    }
}
