<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Shoes;
use database\factories\ShoesFactory;

class ShoesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Shoes::factory()->times(48)->create();
    }
}
