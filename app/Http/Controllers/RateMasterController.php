<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RateMaster;
use App\Payroll;
use App\LocationMaster;
use App\GlMaster;
use App\AcivityMaster;
use App\CostCenterMaster;


class RateMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->all();
        return RateMaster::leftJoin('location_masters','rate_masters.locationID','=','location_masters.id')
                        ->leftJoin('cost_center_masters','rate_masters.costCenterID','=','cost_center_masters.id')
                        ->leftJoin('acivity_masters','rate_masters.activityID','=','acivity_masters.id')
                        ->leftJoin('gl_masters','rate_masters.glID','=','gl_masters.id')
                        ->select('rate_masters.*','cost_center_masters.costcenter','acivity_masters.activity','gl_masters.gl','location_masters.location')
                        ->where('rate_masters.locationID',$request['id'])
                        ->when(!empty($request['activityId']), function($query) use($data){
                            return $query->where('rate_masters.activityID',$data['activityId']);
                        })
                        ->when(!empty($request['glId']), function($query) use($data){
                            return $query->where('rate_masters.glID',$data['glId']);
                        })
                        ->when(!empty($request['ccId']), function($query) use($data){
                            return $query->where('rate_masters.costCenterID',$data['ccId']);
                        })
                        ->paginate(10);
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
            'rd_st'=> 'required|numeric',
            'rd_ot'=> 'required|numeric',
            'rd_nd'=> 'required|numeric',
            'rd_ndot'=> 'required|numeric',
            'shol_st'=> 'required|numeric',
            'shol_ot'=> 'required|numeric',
            'shol_nd'=> 'required|numeric',
            'shol_ndot'=> 'required|numeric',
            'shrd_st'=> 'required|numeric',
            'shrd_ot'=> 'required|numeric',
            'shrd_nd'=> 'required|numeric',
            'shrd_ndot'=> 'required|numeric',
            'rhol_st'=> 'required|numeric',
            'rhol_ot'=> 'required|numeric',
            'rhol_nd'=> 'required|numeric',
            'rhol_ndot'=> 'required|numeric',
            'rhrd_st'=> 'required|numeric',
            'rhrd_ot'=> 'required|numeric',
            'rhrd_nd'=> 'required|numeric',
            'rhrd_ndot'=> 'required|numeric',
            'selectedLocationID' => 'required|numeric',
            'selectedActivityID' => 'required|numeric',
            'selectedGlID' => 'required|numeric',
            'selectedCcID' => 'required|numeric'
        ]);


        $rateMaster = RateMaster::firstOrCreate(
            ['activityID' => $request['selectedActivityID'],'costCenterID' => $request['selectedCcID'],'glID' => $request['selectedGlID'],'locationID' => $request['selectedLocationID']],
            [
                'rd_st' => $request->input('rd_st'),'rd_ot' => $request->input('rd_ot'),'rd_nd' => $request->input('rd_nd'),'rd_ndot' => $request->input('rd_ndot'),
                'shol_st' => $request->input('shol_st'),'shol_ot' => $request->input('shol_ot'),'shol_nd' => $request->input('shol_nd'),'shol_ndot' => $request->input('shol_ndot'),
                'shrd_st' => $request->input('shrd_st'),'shrd_ot' => $request->input('shrd_ot'),'shrd_nd' => $request->input('shrd_nd'),'shrd_ndot' => $request->input('shrd_ndot'),
                'rhol_st' => $request->input('rhol_st'),'rhol_ot' => $request->input('rhol_ot'),'rhol_nd' => $request->input('rhol_nd'),'rhol_ndot' => $request->input('rhol_ndot'),
                'rhrd_st' => $request->input('rhrd_st'),'rhrd_ot' => $request->input('rhrd_ot'),'rhrd_nd' => $request->input('rhrd_nd'),'rhrd_ndot' => $request->input('rhrd_ndot'),
                'status' => 'active'
            ]
        );

        if ($rateMaster->wasRecentlyCreated){
            return 'true';
        }else{
            return 'false';
        }
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

        $data = request()->validate([
            'activity' => 'required',
            'rd_st'=> 'required|numeric',
            'rd_ot'=> 'required|numeric',
            'rd_nd'=> 'required|numeric',
            'rd_ndot'=> 'required|numeric',
            'shol_st'=> 'required|numeric',
            'shol_ot'=> 'required|numeric',
            'shol_nd'=> 'required|numeric',
            'shol_ndot'=> 'required|numeric',
            'shrd_st'=> 'required|numeric',
            'shrd_ot'=> 'required|numeric',
            'shrd_nd'=> 'required|numeric',
            'shrd_ndot'=> 'required|numeric',
            'rhol_st'=> 'required|numeric',
            'rhol_ot'=> 'required|numeric',
            'rhol_nd'=> 'required|numeric',
            'rhol_ndot'=> 'required|numeric',
            'rhrd_st'=> 'required|numeric',
            'rhrd_ot'=> 'required|numeric',
            'rhrd_nd'=> 'required|numeric',
            'rhrd_ndot'=> 'required|numeric'
        ]);
        
        // set selected as previous
        $oldRate = RateMaster::where('id',$request->input('id'))
        ->update(['status' => 'previous']);

        $rateMaster = RateMaster::firstOrCreate(
            ['activityID' => $request['selectedActivityID'],'costCenterID' => $request['selectedCcID'],'glID' => $request['selectedGlID'],'locationID' => $request['selectedLocationID'], 'status' => 'active'],
            [
                'rd_st' => $request->input('rd_st'),'rd_ot' => $request->input('rd_ot'),'rd_nd' => $request->input('rd_nd'),'rd_ndot' => $request->input('rd_ndot'),
                'shol_st' => $request->input('shol_st'),'shol_ot' => $request->input('shol_ot'),'shol_nd' => $request->input('shol_nd'),'shol_ndot' => $request->input('shol_ndot'),
                'shrd_st' => $request->input('shrd_st'),'shrd_ot' => $request->input('shrd_ot'),'shrd_nd' => $request->input('shrd_nd'),'shrd_ndot' => $request->input('shrd_ndot'),
                'rhol_st' => $request->input('rhol_st'),'rhol_ot' => $request->input('rhol_ot'),'rhol_nd' => $request->input('rhol_nd'),'rhol_ndot' => $request->input('rhol_ndot'),
                'rhrd_st' => $request->input('rhrd_st'),'rhrd_ot' => $request->input('rhrd_ot'),'rhrd_nd' => $request->input('rhrd_nd'),'rhrd_ndot' => $request->input('rhrd_ndot')
            ]
        );
        
        if ($rateMaster->wasRecentlyCreated){
            return 'true';
        }else{
            return 'false';
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rateMaster = RateMaster::findOrFail($id);
        $rateMaster->delete();
    }

    public function search()
    {
        if($search = \Request::get('q')){
            $rateMaster = RateMaster::where(function($query) use ($search){
                $query->where('activity','LIKE',"%$search%");
            })->paginate(10);
        }else{
            $rateMaster = RateMaster::latest()->paginate(10);
        }

        return $rateMaster;
    }

    public function getAll(){
        return RateMaster::all();
    }
    public function getLocation()
    {
        return LocationMaster::all();
    }
    public function getGl()
    {
        return GlMaster::all();
    }
    public function getActivity()
    {
        return AcivityMaster::all();
    }
    public function getCc()
    {
        return CostCenterMaster::all();
    }
}
