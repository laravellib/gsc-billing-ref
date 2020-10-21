<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRateMastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rate_masters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('activityID');
            $table->unsignedBigInteger('glID');
            $table->unsignedBigInteger('costCenterID');
            $table->unsignedBigInteger('locationID');
            $table->unsignedBigInteger('rate_id');
            $table->string('activity', 200);
            $table->string('location', 200);
            $table->string('gl', 200);
            $table->string('costcenter', 200);
            $table->double('rd_st',8,3);
            $table->double('rd_ot',8,3);
            $table->double('rd_nd',8,3);
            $table->double('rd_ndot',8,3);
            $table->double('shol_st',8,3);
            $table->double('shol_ot',8,3);
            $table->double('shol_nd',8,3);
            $table->double('shol_ndot',8,3);
            $table->double('shrd_st',8,3);
            $table->double('shrd_ot',8,3);
            $table->double('shrd_nd',8,3);
            $table->double('shrd_ndot',8,3);
            $table->double('rhol_st',8,3);
            $table->double('rhol_ot',8,3);
            $table->double('rhol_nd',8,3);
            $table->double('rhol_ndot',8,3);
            $table->double('rhrd_st',8,3);
            $table->double('rhrd_ot',8,3);
            $table->double('rhrd_nd',8,3);
            $table->double('rhrd_ndot',8,3);
            $table->string('status', 10);
            $table->timestamps();
        });

        Schema::table('rate_masters', function($table) {
            $table->foreign('activityID')->references('id')->on('acivity_masters');
        });
        Schema::table('rate_masters', function($table) {
            $table->foreign('costCenterID')->references('id')->on('cost_center_masters');
        });
        Schema::table('rate_masters', function($table) {
            $table->foreign('glID')->references('id')->on('gl_masters');
        });
        Schema::table('rate_masters', function($table) {
            $table->foreign('locationID')->references('id')->on('location_masters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rate_masters');
    }
}
