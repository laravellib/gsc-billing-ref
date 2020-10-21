<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmpiDarRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dmpi_dar_rates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('stRate', 8, 2)->nullable();
            $table->double('otRate', 8, 2)->nullable();
            $table->double('ndRate', 8, 2)->nullable();
            $table->double('ndotRate', 8, 2)->nullable();
            $table->double('sholRate', 8, 2)->nullable();
            $table->double('sholOtRate', 8, 2)->nullable();
            $table->double('sholNdRate', 8, 2)->nullable();
            $table->double('sholNdotRate', 8, 2)->nullable();
            $table->double('shrdRate', 8, 2)->nullable();
            $table->double('shrdOtRate', 8, 2)->nullable();
            $table->double('shrdNdRate', 8, 2)->nullable();
            $table->double('shrdNdotRate', 8, 2)->nullable();
            $table->double('rholRate', 8, 2)->nullable();
            $table->double('rholOtRate', 8, 2)->nullable();
            $table->double('rholNdRate', 8, 2)->nullable();
            $table->double('rholNdotRate', 8, 2)->nullable();
            $table->double('rhrdRate', 8, 2)->nullable();
            $table->double('rhrdOtRate', 8, 2)->nullable();
            $table->double('rhrdNdRate', 8, 2)->nullable();
            $table->double('rhrdNdotRate', 8, 2)->nullable();
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
        Schema::dropIfExists('dmpi_dar_rates');
    }
}
