<?php

namespace App\Model\MasterModel;

use Illuminate\Database\Eloquent\Model;

class ClientList extends Model
{
    //
    protected $table = 'client_list';
      protected $fillable = [
        'FirstName','MiddleName','LastName','ExtName','Address'
    ];
}
