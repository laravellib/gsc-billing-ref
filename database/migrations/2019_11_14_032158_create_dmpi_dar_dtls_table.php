<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiDarDtlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_dar_dtls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hdr_id');
            $table->unsignedBigInteger('rate_id');
            $table->string('activity', 100)->nullable();
            $table->string('field', 100)->nullable();
            $table->double('accomplished', 8, 2)->nullable();
            $table->string('gl', 100)->nullable();
            $table->string('cc', 100)->nullable();
            $table->double('rdst', 8, 2)->nullable();
            $table->double('rdot', 8, 2)->nullable();
            $table->double('rdnd', 8, 2)->nullable();
            $table->double('rdndot', 8, 2)->nullable();
            $table->double('sholst', 8, 2)->nullable();
            $table->double('sholot', 8, 2)->nullable();
            $table->double('sholnd', 8, 2)->nullable();
            $table->double('sholndot', 8, 2)->nullable();
            $table->double('shrdst', 8, 2)->nullable();
            $table->double('shrdot', 8, 2)->nullable();
            $table->double('shrdnd', 8, 2)->nullable();
            $table->double('shrdndot', 8, 2)->nullable();
            $table->double('rholst', 8, 2)->nullable();
            $table->double('rholot', 8, 2)->nullable();
            $table->double('rholnd', 8, 2)->nullable();
            $table->double('rholndot', 8, 2)->nullable();
            $table->double('rhrdst', 8, 2)->nullable();
            $table->double('rhrdot', 8, 2)->nullable();
            $table->double('rhrdnd', 8, 2)->nullable();
            $table->double('rhrdndot', 8, 2)->nullable();
            $table->double('totalst', 8, 2)->nullable();
            $table->double('totalot', 8, 2)->nullable();
            $table->double('totalnd', 8, 2)->nullable();
            $table->double('totalndot', 8, 2)->nullable();
            $table->double('totalAmt', 8, 2)->nullable();
            $table->double('c_totalst', 8, 2)->nullable();
            $table->double('c_totalot', 8, 2)->nullable();
            $table->double('c_totalnd', 8, 2)->nullable();
            $table->double('c_totalndot', 8, 2)->nullable();
            $table->double('c_totalAmt', 8, 2)->nullable();
            $table->integer('headCount')->nullable();
            $table->timestamps();
        });

        Schema::table('dmpi_dar_dtls', function($table) {
            $table->foreign('hdr_id')->references('id')->on('dmpi_dar_hdrs');
        });
        Schema::table('dmpi_dar_dtls', function($table) {
            $table->foreign('rate_id')->references('id')->on('rate_masters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dmpi_dar_dtls');
    }
}
