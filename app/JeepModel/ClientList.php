<?php

namespace App\JeepModel;

use Illuminate\Database\Eloquent\Model;

class ClientList extends Model
{
    protected $table = 'client_list';
    protected $primaryKey = 'id';
    protected $fillable = ['FirstName', 'MiddleName','LastName','ExtName','Address','name','tin'];

}
