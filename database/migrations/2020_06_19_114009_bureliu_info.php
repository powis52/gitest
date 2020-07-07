<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BureliuInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('bureliu_info', function (Blueprint $table) {
        $table->id();
        $table->string('kategorija');
        $table->string('pavadinimas');
        $table->string('name');
        $table->string('foto');
        $table->string('kaina');
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
      Schema::dropIfExists('bureliu_info');
    }
}
