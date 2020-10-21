<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiDarWarningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_dar_warnings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hdr_id');
            $table->string('title', 1000);
            $table->string('description', 1000);
            $table->string('remarks', 1000);
            $table->timestamps();
        });

        Schema::table('dmpi_dar_warnings', function($table) {
            $table->foreign('hdr_id')->references('id')->on('dmpi_dar_hdrs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dmpi_dar_warnings');
    }
}
