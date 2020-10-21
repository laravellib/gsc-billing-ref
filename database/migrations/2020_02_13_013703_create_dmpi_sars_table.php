<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiSarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_sars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('locationID');
            $table->date('periodCoveredFrom')->nullable();
            $table->date('periodCoveredTo')->nullable();
            $table->date('soaDate')->nullable();
            $table->string('soaNumber',100)->nullable();
            $table->string('controlNo',200)->nullable();
            $table->string('preparedBy',100)->nullable();
            $table->string('preparedByPosition',100)->nullable();
            $table->string('verifiedBy',100)->nullable();
            $table->string('verifiedByPosition',100)->nullable();
            $table->string('notedBy',100)->nullable();
            $table->string('notedByPosition',100)->nullable();
            $table->string('approvedBy',100)->nullable();
            $table->string('approvedByPosition',100)->nullable();
            $table->unsignedBigInteger('adminencodedById')->nullable();
            $table->string('adminencodedby', 200)->nullable();
            $table->unsignedBigInteger('adminConfirmedById')->nullable();
            $table->string('adminConfirmedBy', 200)->nullable();
            $table->unsignedBigInteger('adminTransmittedById')->nullable();
            $table->string('adminTransmittedBy', 200)->nullable();
            $table->string('status', 100)->nullable(); 
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
        Schema::dropIfExists('dmpi_sars');
    }
}
