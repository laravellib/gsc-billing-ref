<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiSarDtlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_sar_dtls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hdr_id'); 
            $table->date('datePerformed')->nullable();
            $table->string('serviceNumber',100)->nullable();
            $table->unsignedBigInteger('activityID');
            $table->string('activity',100)->nullable();
            $table->string('gl',100)->nullable();
            $table->unsignedBigInteger('rate_id');
            $table->string('poNumber',100)->nullable();
            $table->unsignedBigInteger('glID')->nullable();
            $table->string('costCenter',100)->nullable();
            $table->double('qty',8,2)->nullable();
            $table->string('unit',100)->nullable();
            $table->string('rate',100)->nullable();
            $table->double('amount',8,2)->nullable();
            $table->string('entrySheetNumber',100)->nullable();
            $table->unsignedBigInteger('batchID')->nullable();
            $table->string('batchNo',100)->nullable();
            $table->string('pmy',100)->nullable();
            $table->string('batchDaytype',100)->nullable();
            $table->string('period',100)->nullable();
            $table->unsignedBigInteger('batchDaytypeID')->nullable();
            $table->timestamps();
        });
        Schema::table('dmpi_sar_dtls', function($table) {
            $table->foreign('hdr_id')->references('id')->on('dmpi_sars');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dmpi_sar_dtls');
    }
}
