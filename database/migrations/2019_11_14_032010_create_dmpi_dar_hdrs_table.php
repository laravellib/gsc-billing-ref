<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiDarHdrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_dar_hdrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('batcIDLink');
            $table->string('batchNo',100)->nullable();
            $table->string('pmy',100)->nullable();
            $table->string('period',100)->nullable();
            $table->string('soaNumber',100)->nullable();
            $table->date('soaDate')->nullable();
            $table->double('gtSt', 8, 2)->nullable();
            $table->double('gtOt', 8, 2)->nullable();
            $table->double('gtNd', 8, 2)->nullable();
            $table->double('gtNdot', 8, 2)->nullable();
            $table->string('preparedBy',100)->nullable();
            $table->string('preparedByPosition',100)->nullable();
            $table->string('confirmedBy',100)->nullable();
            $table->string('confirmedByPosition',100)->nullable();
            $table->string('approvedBy',100)->nullable();
            $table->string('approvedByPosition',100)->nullable();
            $table->unsignedBigInteger('adminencodedById')->nullable();
            $table->string('adminencodedby', 200)->nullable();
            $table->unsignedBigInteger('adminConfirmedById')->nullable();
            $table->string('adminConfirmedBy', 200)->nullable();
            $table->unsignedBigInteger('adminTransmittedById')->nullable();
            $table->string('adminTransmittedBy', 200)->nullable();
            $table->string('status', 100)->nullable();
            $table->smallInteger('isClubhouse');
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
        Schema::dropIfExists('dmpi_dar_hdrs');
    }
}
