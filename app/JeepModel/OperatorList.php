<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;

class OperatorList extends Model
{
    
    protected $table = 'tbltruckeroperatorlist';
    protected $fillable = ['FirstName', 'MiddleName','LastName','ExtName','Address'];
 

}
