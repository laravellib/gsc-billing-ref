<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\BillingSignatories;
use DB;
class AdminReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    public function view()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }

    public function search()
    {
    }

    public function getAll(){
    }
    
    public function getPMonth(){
        $data = DB::connection('mysql2')->select("SELECT xMonth from tblpayrollperiod group by month(PeriodFrom),xMonth asc");
        return $data;
    }
    public function getPYear(){
        $data = DB::connection('mysql2')->select("SELECT xYear from tblpayrollperiod group by xYear asc");
        return $data;
    }
    public function getPPayStation(){
        $data = DB::connection('mysql2')->select("SELECT PayStation from tblpaystation");
        return $data;
    }
    public function getDARReports(Request $request){
        $monthtonum = "";
        $m = $request['selectedMonth'];
        if($m=="January"){
            $monthtonum = "01";
        }
        elseif($m=="February"){
            $monthtonum = "02";
        }
        elseif($m=="March"){
            $monthtonum = "03";
        }
        elseif($m=="April"){
            $monthtonum = "04";
        }
        elseif($m=="May"){
            $monthtonum = "05";
        }
        elseif($m=="June"){
            $monthtonum = "06";
        }
        elseif($m=="July"){
            $monthtonum = "07";
        }
        elseif($m=="August"){
            $monthtonum = "08";
        }
        elseif($m=="September"){
            $monthtonum = "09";
        }
        elseif($m=="October"){
            $monthtonum = "10";
        }
        elseif($m=="November"){
            $monthtonum = "11";
        }
        elseif($m=="December"){
            $monthtonum = "12";
        }
        

        $y = $request['selectedYear'];
        $p = $request['selectedPhase'];
        $data = DB::connection('mysql2')->select("SELECT b.PayStation, count(b.DEDTLID) as Total, ROUND(sum(b.TotalAmount), 2) as TotalAmount from tbldarentry_hdr as a, tbldarentry_dtl as b where a.DEHDRID = b.DEHDRID_Link and month(b.PeriodDate)='$monthtonum' and year(b.PeriodDate)='$y' and a.Period='$p' and a.Status='POSTED' group by b.PayStation");
        return $data;
    }
    public function getDARReportPerPayStation(Request $request){
        $monthtonum = "";
        $m = $request['selectedMonth'];
        if($m=="January"){
            $monthtonum = "01";
        }
        elseif($m=="February"){
            $monthtonum = "02";
        }
        elseif($m=="March"){
            $monthtonum = "03";
        }
        elseif($m=="April"){
            $monthtonum = "04";
        }
        elseif($m=="May"){
            $monthtonum = "05";
        }
        elseif($m=="June"){
            $monthtonum = "06";
        }
        elseif($m=="July"){
            $monthtonum = "07";
        }
        elseif($m=="August"){
            $monthtonum = "08";
        }
        elseif($m=="September"){
            $monthtonum = "09";
        }
        elseif($m=="October"){
            $monthtonum = "10";
        }
        elseif($m=="November"){
            $monthtonum = "11";
        }
        elseif($m=="December"){
            $monthtonum = "12";
        }
        

        $y = $request['selectedYear'];
        $p = $request['selectedPhase'];
        $ps = $request['selectedPayStation'];
        $data = DB::connection('mysql2')->select("SELECT DATE_FORMAT(b.PeriodDate, '%M %d, %Y') as PeriodDate, count(b.DEDTLID) as Total, 
        ROUND(sum(b.TotalAmount), 2) as TotalAmount from tbldarentry_hdr as a, tbldarentry_dtl as b 
        where a.DEHDRID = b.DEHDRID_Link and month(b.PeriodDate)='$monthtonum' and year(b.PeriodDate)='$y' and a.Period='$p' and b.PayStation='$ps' and a.Status='POSTED' group by DAY(b.PeriodDate) desc");
        return $data;
    }
}
