<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOtherClientDtlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('other_client_dtls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('hdrID');
            $table->date('datePerformed');
            $table->string('lName', 100);
            $table->string('fName',100);
            $table->string('mName',100)->nullable();
            $table->string('eName',100)->nullable(); 
            $table->string('paystation', 100);
            $table->unsignedBigInteger('paystationID');
            $table->string('field', 100);
            $table->double('RD_Hrs', 8, 2)->nullable();
            $table->double('SRD_Hrs', 8, 2)->nullable();
            $table->double('SH_Hrs', 8, 2)->nullable();
            $table->double('SHRD_Hrs', 8, 2)->nullable();
            $table->double('RH_Hrs', 8, 2)->nullable();
            $table->double('RHRD_Hrs', 8, 2)->nullable();
            $table->double('RD_Rate', 8, 3)->nullable();
            $table->double('SRD_Rate', 8, 3)->nullable();
            $table->double('SH_Rate', 8, 3)->nullable();
            $table->double('SHRD_Rate', 8, 3)->nullable();
            $table->double('RH_Rate', 8, 3)->nullable();
            $table->double('RHRD_Rate', 8, 3)->nullable();
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
        Schema::dropIfExists('other_client_dtls');
    }
}
