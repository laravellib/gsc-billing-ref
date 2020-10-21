<?php
 
namespace App\Http\Controllers\otherclient;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Payroll;
use App\otherclient\OtherClientHdr;

class BccControler extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = request()->validate([
            'clientID' => 'required',
            'year' => 'required',
            'month' => 'required',
            'period' => 'required'
        ]);
 
        $clientID = $request['clientID'];
        $pmy = $request['year'].sprintf('%02d',$request['month']);

        $generate = new OtherClientHdr();
        $data = $generate->generateDarInfo($clientID, $pmy, $request['period']);

        return $data;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getPayrollPeriodInfo(Request $request){

        #pmy period from vue  

         $data = request()->validate([
             'month' => 'required',
             'year' => 'required',
             'period' => 'required'
         ]);

        $pmy = $request['year'].sprintf('%02d',$request['month']);

        // return $pmy.' - '.$request['period'];

        #request payrol model
        $payroll = new Payroll();
        $period = $payroll->getPeriodInfo($pmy, $request['period']);

        return $period;
    }
    public function getComputeData(Request $request){
        $data = request()->validate([
            'month' => 'required',
            'year' => 'required',
            'period' => 'required'
        ]);

        
    }
}
