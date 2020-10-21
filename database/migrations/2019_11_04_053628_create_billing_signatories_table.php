<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillingSignatoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('billing_signatories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->String('fname',100)->nullable();
            $table->String('mname',100)->nullable();
            $table->String('lname',100)->nullable();
            $table->String('ename',100)->nullable();
            $table->String('position',100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('billing_signatories');
    }
}
