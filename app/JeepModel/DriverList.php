<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;

class DriverList extends Model
{
    protected $table = 'tbldriverlist';
    protected $primaryKey = 'id';
    protected $fillable = ['FirstName', 'MiddleName','LastName','ExtName','Address','GSCDriver'];

}
