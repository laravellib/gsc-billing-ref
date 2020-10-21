<?php

namespace App\PHBModel;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'tblfieldlocation';
    protected $primaryKey = 'LocationID';
    protected $fillable = ['LocationCode','LocationName'];
   
}
