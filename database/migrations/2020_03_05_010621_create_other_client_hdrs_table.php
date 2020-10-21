<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOtherClientHdrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('other_client_hdrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('clientID');
            $table->string('client');
            $table->string('soaNumber', 100);
            $table->date('periodCoveredFrom');
            $table->date('periodCoveredTo');
            $table->string('preparedBy', 100);
            $table->string('checkedBy', 100);
            $table->string('approvedBy', 100);
            $table->string('status', 50);
            $table->unsignedBigInteger('generatedByID');
            $table->string('generatedByName', 100);
            $table->unsignedBigInteger('confirmedByID')->nullable();
            $table->string('confirmedByName', 100)->nullable();
            $table->unsignedBigInteger('transmittedByID')->nullable();
            $table->string('transmittedByName', 100)->nullable();
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
        Schema::dropIfExists('other_client_hdrs');
    }
}
