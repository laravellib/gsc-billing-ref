<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PoList extends Model
{
    protected $table = 'tblpohdr';
    protected $primaryKey = 'POid';
    protected $fillable = ['DocumentNum', 'DocumentDate','PaymentTerms','IncoTerms','Vendor','Client','Status'];

}
